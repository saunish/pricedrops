var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Firebase = require('firebase');
var request = require('request');
var urlapi = require('url');
var FirebaseTokenGenerator = require("firebase-token-generator");
var tokenGenerator = new FirebaseTokenGenerator("oqA4BWrdRj6AXmRSm1SxBkUxoCt8wGCMAcUEKY8L");

var app = express();
var ref = new Firebase("https://pricedropalert.firebaseio.com/");


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
//app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


//
// starts here
//

app.get('/verify/:userID/:token', function (req, res) {
    ref.authWithCustomToken(req.params.token, function (error, authData) {
        if (error) {
            console.log("Login Failed!", error);
        } else {
            if (req.params.userID != authData.uid) {
                res.send("<h3>invalid verification</h3>");
            }
            else {
                ref.child('users').child(authData.uid).update({
                    status: "ACTIVE"
                });
                res.redirect('/?message=' + encodeURIComponent("Verification successful please re-login"));
            }
        }
    });
});

app.get('/', function (req, res) {
    
    var datas = [];
    ref.once('value', function (snapshot) {
        var lp = snapshot.child('global').child('list_products').val();
        for (var i = 1; i < lp.length; i++) {
            datas.push(snapshot.child('products').child(lp[i]).val());
        }
        var data = snapshot.child('global').val();
        var str = (req.query.message == undefined ? "" : req.query.message);
        res.render('Auth/landing', {
            title: "Price Drop Alert",
            pagetitle: "Login",
            message: str,
            noofuser: data.no_of_user,
            noofalert: data.no_of_alerts,
            noofproducts: data.no_of_products,
            products: datas
        });
    });

    /*
     var authData = ref.getAuth();
     if(authData){
     res.redirect('/user/'+authData.uid);
     }
     else{
     var str = (req.query.message == undefined ? "" : req.query.message);
     res.render('Auth/login', {
     title : "Price Drop Alert",
     pagetitle : "Login",
     message : str
     });
     }
     */
});

app.post('/', function (req, res) {
    if (req.body.pass == "Sign In") {
        ref.authWithPassword({
            "email": req.body.email,
            "password": req.body.password
        }, function (error, authData) {
            if (error)
                res.redirect('/?message=' + encodeURIComponent(error.message));
            else
                res.redirect('/email/verification/' + authData.uid);
        });
    }

    if (req.body.register == "Register") {
        ref.createUser({
            email: req.body.email,
            password: req.body.password
        }, function (error, userData) {
            if (error) {
                var str = encodeURIComponent(error.message);
                res.redirect('/signup/?message=' + str);
            }
            else {
                ref.child("users").child(userData.uid).set({
                    provider: "password",
                    firstname: req.body.fname,
                    lastname: req.body.lname,
                    dob: req.body.dob,
                    tel: req.body.tel,
                    email: req.body.email,
                    status: "INACTIVE"
                });
                res.redirect('/?message=' + encodeURIComponent("user: " + req.body.fname + " successfully register"));
            }
        });
    }

});

app.get('/email/verification/:userID', function (req, res) {
    var authData = ref.getAuth();
    if (authData) {


        var str = (req.query.message == null ? "" : req.query.message);
        if (req.params.userID == authData.uid) {
            ref.child('users').child(authData.uid).once('value', function (snapshot) {
                if (snapshot.child('status').val() == "ACTIVE") {
                    res.redirect('/user/' + authData.uid);
                }
                else {
                    res.render('Auth/verification', {
                        title: "Price Drop Alert",
                        pagetitle: "verify Email",
                        email: snapshot.child('email').val(),
                        msg: str
                    });
                }
            });
        }
        else
            res.redirect('/?message=' + encodeURIComponent("Invalid Login"));
    }
    else
        res.redirect('/?message=' + encodeURIComponent("Invalid Login"))
});

app.post('/email/verification/:userID', function (req, res) {
    var authData = ref.getAuth();

    if (req.body.verify == "Email Verification") {
        var token = tokenGenerator.createToken({uid: authData.uid});
        ref.child('users').child(authData.uid).once("value", function (snapshot) {
            if (snapshot.child("status").val() == "INACTIVE") {

                var headers = {
                    'Content-Type': 'application/json'
                };

                var dataString = '{"value1":"' + snapshot.child('email').val() + '","value2": "' + snapshot.child('firstname').val() + '" , "value3" : "http://localhost:3000/verify/' + authData.uid + '/' + token + '"}';

                var options = {
                    url: 'https://maker.ifttt.com/trigger/EmailVerify/with/key/kPFezeNcht_mGMYW4ld-Hw2ZRtj-nudTZrjXJFXbg2w',
                    method: 'POST',
                    headers: headers,
                    body: dataString
                };

                function callback(error, response, body) {
                    if (!error && response.statusCode == 200) {
                        //console.log(body);
                    }
                }

                request(options, callback);
                ref.unauth();
                res.redirect('/?message=' + encodeURIComponent("Email Verification send"));

            } else {
                res.redirect('/user/' + authData.uid + "/?message=" + encodeURIComponent("User is already verified"));
            }
        });
    }

    if (req.body.submit == "Change Email") {
        ref.child('users').child(authData.uid).once('value', function (snapshot) {
            var email = snapshot.child('email').val();
            ref.changeEmail({
                oldEmail: email,
                newEmail: req.body.email,
                password: req.body.password
            }, function (error) {
                if (error)
                    res.redirect('/email/verification/' + authData.uid + '/?message=' + encodeURIComponent(error.message));
                else
                    res.redirect('/email/verification/' + authData.uid + '/?message=' + encodeURIComponent("Email Successfully changed"));
                ref.child('users').child(authData.uid).update({
                    email: req.body.email
                });
            });
        });
    }

    if (req.body.logout == "Log Out") {
        ref.unauth();
        res.redirect('/?message=' + encodeURIComponent("successfully logged out"));
    }
});

app.get('/signup', function (req, res) {
    var str = (req.query.message == undefined ? "" : req.query.message);
    res.render('Auth/signup', {
        title: "Price Drop Alert",
        pagetitle: "Register",
        message: str
    });
});


app.post('/signup', function (req, res) {
    if (req.body.register == "Register") {
        ref.createUser({
            email: req.body.email,
            password: req.body.password
        }, function (error, userData) {
            if (error) {
                var str = encodeURIComponent(error.message);
                res.redirect('/signup/?message=' + str);
            }
            else {
                ref.child("users").child(userData.uid).set({
                    provider: "password",
                    firstname: req.body.fname,
                    lastname: req.body.lname,
                    dob: req.body.dob,
                    tel: req.body.tel,
                    email: req.body.email,
                    status: "INACTIVE"
                });
                res.redirect('/?message=' + encodeURIComponent("user: " + req.body.fname + " successfully register"));
            }
        });
    }
});


app.get('/about', function (req, res) {
    res.render('Auth/about', {
        title: "Price Drop Alert",
        pagetitle: "About",
        message: "Build by Anshul & Saunish"
    });
});


app.get('/user/:userID', function (req, res) {
    var glob = {};
    var authData = ref.getAuth();
    var message = (req.query.message == undefined ? "" : req.query.message);


    if (authData) {

        ref.child('users').child(authData.uid).once('value', function (snapshot) {
            if (snapshot.child('status').val() == "INACTIVE") {
                res.redirect('/email/verification/' + authData.uid);
            }
            else {


                ref.child("users").child(authData.uid).once("value", function (snapshot) {
                    if(snapshot.child('notiflist').exists()){
                        glob.udata = snapshot.child('notiflist').val().toString().split(',');
                    }
                    else {
                        glob.udata = "No Data in Notification List";
                    }
                    var pid;
                    if (snapshot.child("wishlist").exists()) {
                        pid = snapshot.child("wishlist").val().toString().split(",");
                    }
                    else {
                        pid = undefined;
                    }

                    if (pid == undefined) {
                        res.render('Profile/wishlist', {
                            title: "Price Drop Alert",
                            pagetitle: "Home",
                            uid: authData.uid,
                            msg: message,
                            data: "No data in wishlist",
                            pdatas: undefined,
                            price_datas: undefined,
                            nlist : "No data for notification"
                        });
                    }

                    else {
                        var called_count = 0;
                        for (var i = 0; i < pid.length; i++) {
                            ref.child("products").child(pid[i]).once("value", function (snapshot) {
                                if (glob.pdata == undefined) {
                                    glob.pdata = [];
                                }
                                glob.pdata.push(snapshot.val());
                                called_count++;
                                if (called_count == pid.length) {

                                    glob.pdata = (glob.pdata == undefined ? "No Product added to the list" : glob.pdata);


                                    var datas = [];
                                    var price_data = [];

                                    var date = new Date();

                                    var k;
                                    var j;
                                    var temp;
                                    var temp_date = [];

                                    for (var i = 0; i < glob.pdata.length; i++) {

                                        var temp_price_data = [];

                                        if (glob.pdata[i].price_change_date == undefined) {

                                            temp = glob.pdata[i].date_added.toString().split(",");
                                            temp[1] = temp[1] - 1;
                                            for (k = 0; k < temp.length; k++) {
                                                temp_date[k] = parseInt(temp[k]);
                                            }
                                            temp_price_data.push([new Date(temp_date[0], temp_date[1], temp_date[2], temp_date[3], temp_date[4], temp_date[5], temp_date[6]), glob.pdata[i].initial_price]);
                                            temp_price_data.push([new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()), glob.pdata[i].current_price]);
                                        }
                                        else {

                                            temp = glob.pdata[i].date_added.toString().split(",");
                                            temp[1] = temp[1] - 1;
                                            for (k = 0; k < temp.length; k++) {
                                                temp_date[k] = parseInt(temp[k]);
                                            }
                                            temp_price_data.push([new Date(temp_date[0], temp_date[1], temp_date[2], temp_date[3], temp_date[4], temp_date[5], temp_date[6]), glob.pdata[i].initial_price]);

                                            for (j = 0; j < glob.pdata[i].price_change_date.length; j++) {
                                                temp = glob.pdata[i].price_change_date[j].toString().split(",");
                                                temp[1] = temp[1] - 1;
                                                for (k = 0; k < temp.length; k++) {
                                                    temp_date[k] = parseInt(temp[k]);
                                                }
                                                temp_price_data.push([new Date(temp_date[0], temp_date[1], temp_date[2], temp_date[3], temp_date[4], temp_date[5], temp_date[6]), glob.pdata[i].price_change_value[j]]);
                                            }
                                            temp_price_data.push([new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()), glob.pdata[i].current_price]);
                                        }

                                        price_data.push(temp_price_data);

                                        if (glob.pdata[i].state_change_date == undefined) {
                                            temp = glob.pdata[i].date_added.toString().split(",");
                                            temp[1] = temp[1] - 1;
                                            for (k = 0; k < temp.length; k++) {
                                                temp_date[k] = parseInt(temp[k]);
                                            }
                                            datas.push([glob.pdata[i].title, glob.pdata[i].initial_state, new Date(temp_date[0], temp_date[1], temp_date[2], temp_date[3], temp_date[4], temp_date[5], temp_date[6]), new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds())]);
                                        }
                                        else {
                                            var status = glob.pdata[i].initial_state;
                                            temp = glob.pdata[i].date_added.toString().split(",");
                                            temp[1] = temp[1] - 1;
                                            var start_date = [];

                                            for (k = 0; k < temp.length; k++) {
                                                start_date[k] = parseInt(temp[k]);
                                            }

                                            var end_date = [];
                                            for (j = 0; j <= glob.pdata[i].state_change_type.length; j++) {
                                                if (j != glob.pdata[i].state_change_type.length) {
                                                    var temp1 = glob.pdata[i].state_change_date[j].toString().split(",");
                                                    temp1[1] = temp1[1] - 1;
                                                    for (k = 0; k < temp1.length; k++) {
                                                        end_date[k] = parseInt(temp1[k]);
                                                    }

                                                    datas.push([glob.pdata[i].title, status, new Date(start_date[0], start_date[1], start_date[2], start_date[3], start_date[4], start_date[5], start_date[6]), new Date(end_date[0], end_date[1], end_date[2], end_date[3], end_date[4], end_date[5], end_date[6])]);
                                                }
                                                else {
                                                    datas.push([glob.pdata[i].title, glob.pdata[i].current_state, new Date(start_date[0], start_date[1], start_date[2], start_date[3], start_date[4], start_date[5], start_date[6]), new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds())]);
                                                }
                                                for (k = 0; k < start_date.length; k++) {
                                                    start_date[k] = parseInt(end_date[k]);
                                                }
                                                status = glob.pdata[i].state_change_type[j];
                                            }
                                        }
                                    }

                                    if (req.params.userID == authData.uid) {
                                        res.render('Profile/wishlist', {
                                            title: "Price Drop Alert",
                                            pagetitle: "Home",
                                            uid: authData.uid,
                                            msg: message,
                                            data: glob.pdata,
                                            pdatas: datas,
                                            price_datas: price_data,
                                            nlist : glob.udata
                                        });
                                    }
                                    else
                                        res.sendStatus(404);

                                }
                            });
                        }
                    }
                });

            }
        });
    }
    else
        res.redirect('/?message=' + encodeURIComponent("User is not logged in"));
});


app.post('/user/:userID', function (req, res) {

    var authData = ref.getAuth();

    if (req.body.logout == "Log Out") {
        ref.unauth();
        res.redirect('/?message=' + encodeURIComponent("successfully logged out"));
    }

    if (req.body.submit == "Submit") {

        url = urlapi.parse(req.body.purl);
        var temp = (url.pathname).split("/");
        var pid;
        var srcurl = url.hostname.split(".");
        var headers, option;

        if (srcurl[1] == "snapdeal") {
            pid = temp[3];
            headers = {
                'snapdeal-Affiliate-Id': "84198",
                'snapdeal-Token-Id': "37dee4a4f049497bda82168d62045b",
                'Accept': "application/json"
            };
            option = {
                url: "http://affiliate-feeds.snapdeal.com/feed/product?id=" + pid,
                method: "GET",
                headers: headers
            };
            request(option, function (error, response, body) {
                var data = JSON.parse(body);
                var pids = srcurl[1] + "-" + data.id;
                setData(data, pids);
            });
        }
        else if (srcurl[1] == "flipkart") {

            var temp1 = url.search.split("&");
            var temp2 = temp1[0].replace("?", "");
            var temp3 = temp2.split("=");
            pid = temp3[1];

            headers = {
                "Fk-Affiliate-Id": "skycoresa",
                "Fk-Affiliate-Token": "8bc5ee22862e442d9f6266200d58d92d"
            };
            option = {
                url: "https://affiliate-api.flipkart.net/affiliate/product/json?id=" + pid,
                method: "GET",
                headers: headers
            };
            request(option, function (error, response, body) {

                var pdata = JSON.parse(body);

                var pprice = pdata.productBaseInfo.productAttributes.sellingPrice.amount;

                var t = pdata.productBaseInfo.productAttributes.imageUrls;
                var imageurl;
                var te = JSON.stringify(t);
                var te1 = te.split(",");
                var te2 = te1[te1.length - 1].replace(" ", "");
                var te3 = te2.replace("}", "");
                var te4 = te3.replace(/\"/g, "");
                var te5 = te4.split(":");
                imageurl = te5[1] + ":" + te5[2];

                var ti = pdata.productBaseInfo.productAttributes.title;
                var title = ti.replace(/,/g, "");

                var avail;
                if (pdata.productBaseInfo.productAttributes.inStock)
                    avail = "in stock";
                else
                    avail = "out of stock";
                var data = {
                    'id': pdata.productBaseInfo.productIdentifier.productId,
                    'title': title,
                    'brand': pdata.productBaseInfo.productAttributes.productBrand,
                    'description': pdata.productBaseInfo.productAttributes.productDescription,
                    'availability': avail,
                    'link': pdata.productBaseInfo.productAttributes.productUrl,
                    'imageLink': imageurl,
                    'effectivePrice': pprice
                };


                var pids = srcurl[1] + "-" + data.id;
                setData(data, pids);
            });
        }
        else {
            res.redirect('/user/' + authData.uid + '/?message=' + encodeURIComponent("Invalid URL Entered"));
        }


        function setData(data, pid) {

            ref.child("users").child(authData.uid).once("value", function (snapshot) {

                if (snapshot.child("wishlist").exists()) {
                    ref.child("users").child(authData.uid).child("wishlist").once("value", function (snapshot) {
                        var str = (snapshot.val().toString()).split(",");
                        var bools = false;

                        for (var j = 0; j < str.length; j++) {
                            if (str[j] == "" && j == str.length - 1) {
                                str.pop();
                                break;
                            } else if (str[j] == "") {
                                str[j] = str[j + 1];
                                str[j + 1] = "";
                            }
                        }

                        for (var i = 0; i < str.length; i++) {
                            if (pid == str[i]) {
                                bools = true;
                                break;
                            }
                        }

                        if (bools) res.redirect('/user/' + authData.uid + '/?message=' + encodeURIComponent("Product already in wishlist"));
                        else {
                            str[str.length] = pid;
                            ref.child("users").child(authData.uid).child("wishlist").set(
                                str
                            );
                            res.redirect('/user/' + authData.uid + '/?message=' + encodeURIComponent("Product Successfully added"));
                        }
                    });
                }
                else {
                    ref.child("users").child(authData.uid).child("wishlist").set([
                        pid
                    ]);
                    res.redirect('/user/' + authData.uid + '/?message=' + encodeURIComponent("product sucessfully added"));
                }
            });


            var date = new Date();
            var month = date.getMonth() + 1;
            var pdate = date.getFullYear() + ", " + month + ", " + date.getDate() + ", " + date.getHours() + "," + date.getMinutes() + ", " + date.getSeconds() + ", " + date.getMilliseconds();

            ref.child('products').once('value', function (snapshot) {
                var bool = snapshot.child(pid).exists();
                if (!bool) {
                    ref.child("products").child(pid).set({
                        pid: data.id,
                        title: data.title,
                        brand: data.brand,
                        description: data.description,
                        link: data.link,
                        image: data.imageLink,
                        initial_price: data.effectivePrice,
                        current_price: data.effectivePrice,
                        initial_state: data.availability,
                        current_state: data.availability,
                        provider: srcurl[1],
                        date_added: pdate
                    });
                }
            });
        }

    }

    if (req.body.remove == "Remove Product") {
        ref.child("users").child(authData.uid).child("wishlist").once("value", function (snapshot) {
            var str = snapshot.val().toString().split(",");
            for (var j = 0; j < str.length; j++) {
                if (str[j] == (req.body.rpp + "-" + req.body.rp) && j == str.length - 1) {
                    str.pop();
                    break;
                } else if (str[j] == (req.body.rpp + "-" + req.body.rp)) {
                    str[j] = "";
                }
                if (str[j] == "" && j == str.length - 1) {
                    str.pop();
                    break;
                } else if (str[j] == "") {
                    str[j] = str[j + 1];
                    str[j + 1] = "";
                }
            }
            ref.child("users").child(authData.uid).child("wishlist").set(
                str
            );
        });
        ref.child("users").child(authData.uid).child("notiflist").once("value", function (snapshot) {
            var str = snapshot.val().toString().split(",");
            for (var j = 0; j < str.length; j++) {
                if (str[j] == (req.body.rpp + "-" + req.body.rp) && j == str.length - 1) {
                    str.pop();
                    break;
                } else if (str[j] == (req.body.rpp + "-" + req.body.rp)) {
                    str[j] = "";
                }
                if (str[j] == "" && j == str.length - 1) {
                    str.pop();
                    break;
                } else if (str[j] == "") {
                    str[j] = str[j + 1];
                    str[j + 1] = "";
                }
            }
            ref.child("users").child(authData.uid).child("notiflist").set(
                str
            );
            res.redirect('/user/' + authData.uid + '/?message=' + encodeURIComponent("product Successfully removed"));
        });
    }

    if (req.body.notif == "Notify") {
        ref.child("users").child(authData.uid).once("value", function (snapshot) {
            if (snapshot.child('notiflist').exists()) {
                var str = snapshot.child("notiflist").val().toString().split(",");

                var bools = true;

                for(var i =0;i<str.length;i++){
                    if(str[i]==req.body.rpps + "-" + req.body.rps) bools = false;
                }

                if(bools) str.push(req.body.rpps + "-" + req.body.rps);

                ref.child("users").child(authData.uid).child("notiflist").set(
                    str
                );
            }
            else{
                ref.child("users").child(authData.uid).child("notiflist").set([req.body.rpps + "-" + req.body.rps]);
            }
            res.redirect('/user/' + authData.uid + '/?message=' + encodeURIComponent("product Successfully included notification list"));
        });
    }

    if(req.body.rn == "Remove Notification"){
        ref.child("users").child(authData.uid).child("notiflist").once("value", function (snapshot) {
            var str = snapshot.val().toString().split(",");
            for (var j = 0; j < str.length; j++) {
                if (str[j] == (req.body.rppss + "-" + req.body.rpss) && j == str.length - 1) {
                    str.pop();
                    break;
                } else if (str[j] == (req.body.rppss + "-" + req.body.rpss)) {
                    str[j] = "";
                }
                if (str[j] == "" && j == str.length - 1) {
                    str.pop();
                    break;
                } else if (str[j] == "") {
                    str[j] = str[j + 1];
                    str[j + 1] = "";
                }
            }
            ref.child("users").child(authData.uid).child("notiflist").set(
                str
            );
            res.redirect('/user/' + authData.uid + '/?message=' + encodeURIComponent("product Successfully removed from notification list"));
        });
    }
});


app.get('/user/:userID/info/:product', function (req, res) {
    var glob = {};
    var authData = ref.getAuth();
    var message = (req.query.message == undefined ? "" : req.query.message);


    if (authData) {

        ref.child('users').child(authData.uid).once('value', function (snapshot) {
            if (snapshot.child('status').val() == "INACTIVE") {
                res.redirect('/email/verification/' + authData.uid);
            }
            else {


                ref.child("users").child(authData.uid).once("value", function (snapshot) {
                    var pid;
                    if (snapshot.child("wishlist").exists()) {
                        pid = snapshot.child("wishlist").val().toString().split(",");
                    }
                    else {
                        pid = undefined;
                    }

                    if (pid == undefined) {
                        res.render('Profile/product-desc', {
                            title: "Price Drop Alert",
                            pagetitle: "Home",
                            uid: authData.uid,
                            msg: message,
                            data: "No data in wishlist",
                            pdatas: undefined,
                            price_datas: undefined
                        });
                    }

                    else {
                        var called_count = 0;
                        for (var i = 0; i < pid.length; i++) {
                            ref.child("products").child(pid[i]).once("value", function (snapshot) {
                                if (glob.pdata == undefined) {
                                    glob.pdata = [];
                                }
                                glob.pdata.push(snapshot.val());
                                called_count++;
                                if (called_count == pid.length) {

                                    glob.pdata = (glob.pdata == undefined ? "No Product added to the list" : glob.pdata);


                                    var datas = [];
                                    var price_data = [];

                                    var date = new Date();

                                    var k;
                                    var j;
                                    var temp;
                                    var temp_date = [];


                                    for (var m = 0; m < glob.pdata.length; m++) {

                                        var temp_price_data = [];

                                        if (glob.pdata[m].price_change_date == undefined) {

                                            temp = glob.pdata[m].date_added.toString().split(",");
                                            temp[1] = temp[1] - 1;
                                            for (k = 0; k < temp.length; k++) {
                                                temp_date[k] = parseInt(temp[k]);
                                            }
                                            temp_price_data.push([new Date(temp_date[0], temp_date[1], temp_date[2], temp_date[3], temp_date[4], temp_date[5], temp_date[6]), glob.pdata[m].initial_price]);
                                            temp_price_data.push([new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()), glob.pdata[m].current_price]);
                                        }
                                        else {

                                            temp = glob.pdata[m].date_added.toString().split(",");
                                            temp[1] = temp[1] - 1;
                                            for (k = 0; k < temp.length; k++) {
                                                temp_date[k] = parseInt(temp[k]);
                                            }
                                            temp_price_data.push([new Date(temp_date[0], temp_date[1], temp_date[2], temp_date[3], temp_date[4], temp_date[5], temp_date[6]), glob.pdata[m].initial_price]);

                                            for (j = 0; j < glob.pdata[m].price_change_date.length; j++) {
                                                temp = glob.pdata[m].price_change_date[j].toString().split(",");
                                                temp[1] = temp[1] - 1;
                                                for (k = 0; k < temp.length; k++) {
                                                    temp_date[k] = parseInt(temp[k]);
                                                }
                                                temp_price_data.push([new Date(temp_date[0], temp_date[1], temp_date[2], temp_date[3], temp_date[4], temp_date[5], temp_date[6]), glob.pdata[m].price_change_value[j]]);
                                            }
                                            temp_price_data.push([new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()), glob.pdata[m].current_price]);
                                        }

                                        price_data.push(temp_price_data);

                                        if (glob.pdata[m].state_change_date == undefined) {
                                            temp = glob.pdata[m].date_added.toString().split(",");
                                            temp[1] = temp[1] - 1;
                                            for (k = 0; k < temp.length; k++) {
                                                temp_date[k] = parseInt(temp[k]);
                                            }
                                            datas.push([glob.pdata[m].title, glob.pdata[m].initial_state, new Date(temp_date[0], temp_date[1], temp_date[2], temp_date[3], temp_date[4], temp_date[5], temp_date[6]), new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds())]);
                                        }
                                        else {
                                            var status = glob.pdata[m].initial_state;
                                            temp = glob.pdata[m].date_added.toString().split(",");
                                            temp[1] = temp[1] - 1;
                                            var start_date = [];

                                            for (k = 0; k < temp.length; k++) {
                                                start_date[k] = parseInt(temp[k]);
                                            }

                                            var end_date = [];
                                            for (j = 0; j <= glob.pdata[m].state_change_type.length; j++) {
                                                if (j != glob.pdata[m].state_change_type.length) {
                                                    var temp1 = glob.pdata[m].state_change_date[j].toString().split(",");
                                                    temp1[1] = temp1[1] - 1;
                                                    for (k = 0; k < temp1.length; k++) {
                                                        end_date[k] = parseInt(temp1[k]);
                                                    }

                                                    datas.push([glob.pdata[m].title, status, new Date(start_date[0], start_date[1], start_date[2], start_date[3], start_date[4], start_date[5], start_date[6]), new Date(end_date[0], end_date[1], end_date[2], end_date[3], end_date[4], end_date[5], end_date[6])]);
                                                }
                                                else {
                                                    datas.push([glob.pdata[m].title, glob.pdata[m].current_state, new Date(start_date[0], start_date[1], start_date[2], start_date[3], start_date[4], start_date[5], start_date[6]), new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds())]);
                                                }
                                                for (k = 0; k < start_date.length; k++) {
                                                    start_date[k] = parseInt(end_date[k]);
                                                }
                                                status = glob.pdata[m].state_change_type[j];
                                            }
                                        }
                                    }


                                    if (req.params.userID == authData.uid) {
                                        res.render('Profile/product-desc', {
                                            title: "Price Drop Alert",
                                            pagetitle: "Home",
                                            uid: authData.uid,
                                            msg: message,
                                            data: glob.pdata,
                                            pdatas: datas,
                                            price_datas: price_data,
                                            productid: req.params.product
                                        });
                                    }
                                    else
                                        res.sendStatus(404);

                                }
                            });
                        }
                    }
                });

            }
        });
    }
    else
        res.redirect('/?message=' + encodeURIComponent("User is not logged in"));
});

app.get('/user/:userID/profile', function (req, res) {
    var authData = ref.getAuth();
    if (authData) {
        ref.child('users').child(authData.uid).once('value', function (snapshot) {
            if (snapshot.child('status').val() == "INACTIVE")
                res.redirect('/email/verification/' + authData.uid);

            if (req.params.userID == authData.uid) {

                ref.child("users").child(authData.uid).once("value", function (snapshot) {
                    var userData = snapshot.val();
                    res.render('Profile/profiles', {
                        title: "Price Drop Alert",
                        pagetitle: "Profile",
                        firstname: userData.firstname,
                        lastname: userData.lastname,
                        dob: userData.dob,
                        tel: userData.tel,
                        email: userData.email,
                        uid: authData.uid
                    });
                });
            }
            else
                res.sendStatus(404);
        });
    }
    else
        res.redirect('/?message=' + encodeURIComponent("User is not logged in"));
});


app.post('/user/:userID/profile', function (req, res) {
    if (req.body.logout == "Log Out") {
        ref.unauth();
        res.redirect('/?message=' + encodeURIComponent("successfully logged out"));
    }
    if (req.body.update == "Update") {
        res.redirect('/user/' + req.params.userID + "/profile/edit");
    }
});


app.get('/user/:userID/profile/edit', function (req, res) {
    var authData = ref.getAuth();
    var str = (req.query.message == undefined ? "" : req.query.message);
    if (authData) {
        ref.child('users').child(authData.uid).once('value', function (snapshot) {
            if (snapshot.child('status').val() == "INACTIVE")
                res.redirect('/email/verification/' + authData.uid);


            if (req.params.userID == authData.uid) {
                ref.child("users").child(authData.uid).once("value", function (snapshot) {
                    var userData = snapshot.val();
                    res.render('Profile/edits', {
                        title: "Price Drop Alert",
                        pagetitle: "Update Profile",
                        firstname: userData.firstname,
                        lastname: userData.lastname,
                        dob: userData.dob,
                        tel: userData.tel,
                        email: userData.email,
                        uid: authData.uid,
                        message: str
                    });
                });
            }
            else
                res.sendStatus(404);

        });
    }
    else
        res.redirect('/?message=' + encodeURIComponent("User is not logged in"));
});

app.post('/user/:userID/profile/edit', function (req, res) {

    if (req.body.logout == "Log Out") {
        ref.unauth();
        res.redirect('/?message=' + encodeURIComponent("successfully logged out"));
    }

    var uid = req.params.userID;

    if (req.body.fsubmit == "Submit") {
        ref.child("users").child(uid).update({
            firstname: req.body.fname
        });
        res.redirect('/user/' + req.params.userID + '/profile/edit/?message=' + encodeURIComponent("First name updated"));
    }
    if (req.body.lsubmit == "Submit") {
        ref.child("users").child(uid).update({
            lastname: req.body.lname
        });
        res.redirect('/user/' + req.params.userID + '/profile/edit/?message=' + encodeURIComponent("Last name updated"));
    }
    if (req.body.dobsubmit == "Submit") {
        ref.child("users").child(uid).update({
            dob: req.body.dob
        });
        res.redirect('/user/' + req.params.userID + '/profile/edit/?message=' + encodeURIComponent("date of birth updated"));
    }
    if (req.body.telsubmit == "Submit") {
        ref.child("users").child(uid).update({
            tel: req.body.tel
        });
        res.redirect('/user/' + req.params.userID + '/profile/edit/?message=' + encodeURIComponent("mobile no updated"));
    }
    if (req.body.passwdsubmit == "Submit") {
        ref.changePassword({
            email: req.body.emailid,
            oldPassword: req.body.oldpasswd,
            newPassword: req.body.newpasswd
        }, function (error) {
            if (error)
                res.redirect('/user/' + req.params.userID + '/profile/edit/?message=' + encodeURIComponent(error.message));
            else
                res.redirect('/user/' + req.params.userID + '/profile/edit/?message=' + encodeURIComponent("password change successful"));
        });
    }
});

//
//Ends here
//

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

/*

 // development error handler
 // will print stacktrace
 if (app.get('env') === 'development') {
 app.use(function(err, req, res, next) {
 res.status(err.status || 500);
 res.render('error', {
 message: err.message,
 error: err
 });
 });
 }

 // production error handler
 // no stacktraces leaked to user
 app.use(function(err, req, res, next) {
 res.status(err.status || 500);
 res.render('error', {
 message: err.message,
 error: {}
 });
 });



 */

module.exports = app;