
// Avoid `console` errors in browsers that lack a console.
(function(){var e;var t=function(){};var n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"];var r=n.length;var i=window.console=window.console||{};while(r--){e=n[r];if(!i[e]){i[e]=t}}})();

// open external links in a new window
(function() {
    $('a[href*="http://"]:not([href*="'+location.hostname+'"])').attr('target','_blank');
}());

/*! jQuery UI - v1.10.3 - 2013-06-12
 * http://jqueryui.com
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t,e){var i="ui-effects-";t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(t,a){var o,r=a.re.exec(i),h=r&&a.parse(r),l=a.space||"rgba";return h?(o=s[l](h),s[c[l].cache]=o[c[l].cache],n=s._rgba=o._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,a.transparent),s):a[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=l.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),l.fn=t.extend(l.prototype,{parse:function(n,o,r,h){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(o),o=e);var u=this,d=t.type(n),p=this._rgba=[];return o!==e&&(n=[n,o,r,h],d="array"),"string"===d?this.parse(s(n)||a._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof l?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var a=s.cache;f(s.props,function(t,e){if(!u[a]&&s.to){if("alpha"===t||null==n[t])return;u[a]=s.to(u._rgba)}u[a][e.idx]=i(n[t],e,!0)}),u[a]&&0>t.inArray(null,u[a].slice(0,3))&&(u[a][3]=1,s.from&&(u._rgba=s.from(u[a])))}),this):e},is:function(t){var i=l(t),s=!0,n=this;return f(c,function(t,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=l(t),n=s._space(),a=c[n],o=0===this.alpha()?l("transparent"):this,r=o[a.cache]||a.to(o._rgba),h=r.slice();return s=s[a.cache],f(a.props,function(t,n){var a=n.idx,o=r[a],l=s[a],c=u[n.type]||{};null!==l&&(null===o?h[a]=l:(c.mod&&(l-o>c.mod/2?o+=c.mod:o-l>c.mod/2&&(o-=c.mod)),h[a]=i((l-o)*e+o,n)))}),this[n](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(e)._rgba;return l(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,a=t[2]/255,o=t[3],r=Math.max(s,n,a),h=Math.min(s,n,a),l=r-h,c=r+h,u=.5*c;return e=h===r?0:s===r?60*(n-a)/l+360:n===r?60*(a-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=u?l/c:l/(2-c),[Math.round(e)%360,i,u,null==o?1:o]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],a=t[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,e+1/3)),Math.round(255*n(r,o,e)),Math.round(255*n(r,o,e-1/3)),a]},f(c,function(s,n){var a=n.props,o=n.cache,h=n.to,c=n.from;l.fn[s]=function(s){if(h&&!this[o]&&(this[o]=h(this._rgba)),s===e)return this[o].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[o].slice();return f(a,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=l(c(d)),n[o]=d,n):l(d)},f(a,function(e,i){l.fn[e]||(l.fn[e]=function(n){var a,o=t.type(n),h="alpha"===e?this._hsla?"hsla":"rgba":s,l=this[h](),c=l[i.idx];return"undefined"===o?c:("function"===o&&(n=n.call(this,c),o=t.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=c+parseFloat(a[2])*("+"===a[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var a,o,r="";if("transparent"!==n&&("string"!==t.type(n)||(a=s(n)))){if(n=l(a||n),!d.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&o&&o.style;)try{r=t.css(o,"backgroundColor"),o=o.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(h){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},l.hook(o),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},a=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function s(e,i){var s,n,o={};for(s in i)n=i[s],e[s]!==n&&(a[s]||(t.fx.step[s]||!isNaN(parseFloat(n)))&&(o[s]=n));return o}var n=["add","remove","toggle"],a={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(jQuery.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(e,a,o,r){var h=t.speed(a,o,r);return this.queue(function(){var a,o=t(this),r=o.attr("class")||"",l=h.children?o.find("*").addBack():o;l=l.map(function(){var e=t(this);return{el:e,start:i(this)}}),a=function(){t.each(n,function(t,i){e[i]&&o[i+"Class"](e[i])})},a(),l=l.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),o.attr("class",r),l=l.map(function(){var e=this,i=t.Deferred(),s=t.extend({},h,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,l.get()).done(function(){a(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),h.complete.call(o[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,a){return s?t.effects.animateClass.call(this,{add:i},s,n,a):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,a){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,a):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(i){return function(s,n,a,o,r){return"boolean"==typeof n||n===e?a?t.effects.animateClass.call(this,n?{add:s}:{remove:s},a,o,r):i.apply(this,arguments):t.effects.animateClass.call(this,{toggle:s},n,a,o)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,a){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,a)}})}(),function(){function s(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function n(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}t.extend(t.effects,{version:"1.10.3",save:function(t,e){for(var s=0;e.length>s;s++)null!==e[s]&&t.data(i+e[s],t[0].style[e[s]])},restore:function(t,s){var n,a;for(a=0;s.length>a;a++)null!==s[a]&&(n=t.data(i+s[a]),n===e&&(n=""),t.css(s[a],n))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return e.wrap(s),(e[0]===a||t.contains(e[0],a))&&t(a).focus(),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).focus()),e},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var a=e.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),t.fn.extend({effect:function(){function e(e){function s(){t.isFunction(a)&&a.call(n[0]),t.isFunction(e)&&e()}var n=t(this),a=i.complete,r=i.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),s()):o.call(n[0],i,s)}var i=s.apply(this,arguments),n=i.mode,a=i.queue,o=t.effects.effect[i.effect];return t.fx.off||!o?n?this[n](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):a===!1?this.each(e):this.queue(a||"fx",e)},show:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(t.fn.show),hide:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(t.fn.hide),toggle:function(t){return function(e){if(n(e)||"boolean"==typeof e)return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}()})(jQuery);

/*! jQuery UI - v1.10.3 - 2013-06-12
 * http://jqueryui.com
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){t.effects.effect.slide=function(e,i){var s,n=t(this),a=["position","top","bottom","left","right","width","height"],o=t.effects.setMode(n,e.mode||"show"),r="show"===o,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",c="up"===h||"left"===h,u={};t.effects.save(n,a),n.show(),s=e.distance||n["top"===l?"outerHeight":"outerWidth"](!0),t.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(l,c?isNaN(s)?"-"+s:-s:s),u[l]=(r?c?"+=":"-=":c?"-=":"+=")+s,n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===o&&n.hide(),t.effects.restore(n,a),t.effects.removeWrapper(n),i()}})}})(jQuery);

/*! jQuery visible 1.0.0 teamdf.com/jquery-plugins | teamdf.com/jquery-plugins/license */
(function(c){c.fn.visible=function(e){var a=c(this),b=c(window),f=b.scrollTop();b=f+b.height();var d=a.offset().top;a=d+a.height();var g=e===true?a:d;return(e===true?d:a)<=b&&g>=f}})(jQuery);

/*!
 * iCheck v0.9.1 jQuery plugin, http://git.io/uhUPMA
 */
(function(f){function C(a,c,d){var b=a[0],e=/er/.test(d)?k:/bl/.test(d)?u:j;active=d==E?{checked:b[j],disabled:b[u],indeterminate:"true"==a.attr(k)||"false"==a.attr(v)}:b[e];if(/^(ch|di|in)/.test(d)&&!active)p(a,e);else if(/^(un|en|de)/.test(d)&&active)w(a,e);else if(d==E)for(var e in active)active[e]?p(a,e,!0):w(a,e,!0);else if(!c||"toggle"==d){if(!c)a[r]("ifClicked");active?b[l]!==x&&w(a,e):p(a,e)}}function p(a,c,d){var b=a[0],e=a.parent(),g=c==j,H=c==k,m=H?v:g?I:"enabled",r=h(b,m+y(b[l])),L=h(b,
    c+y(b[l]));if(!0!==b[c]){if(!d&&c==j&&b[l]==x&&b.name){var p=a.closest("form"),s='input[name="'+b.name+'"]',s=p.length?p.find(s):f(s);s.each(function(){this!==b&&f.data(this,n)&&w(f(this),c)})}H?(b[c]=!0,b[j]&&w(a,j,"force")):(d||(b[c]=!0),g&&b[k]&&w(a,k,!1));J(a,g,c,d)}b[u]&&h(b,z,!0)&&e.find("."+F).css(z,"default");e[t](L||h(b,c));e[A](r||h(b,m)||"")}function w(a,c,d){var b=a[0],e=a.parent(),g=c==j,f=c==k,m=f?v:g?I:"enabled",n=h(b,m+y(b[l])),p=h(b,c+y(b[l]));if(!1!==b[c]){if(f||!d||"force"==d)b[c]=
    !1;J(a,g,m,d)}!b[u]&&h(b,z,!0)&&e.find("."+F).css(z,"pointer");e[A](p||h(b,c)||"");e[t](n||h(b,m))}function K(a,c){if(f.data(a,n)){var d=f(a);d.parent().html(d.attr("style",f.data(a,n).s||"")[r](c||""));d.off(".i").unwrap();f(D+'[for="'+a.id+'"]').add(d.closest(D)).off(".i")}}function h(a,c,d){if(f.data(a,n))return f.data(a,n).o[c+(d?"":"Class")]}function y(a){return a.charAt(0).toUpperCase()+a.slice(1)}function J(a,c,d,b){if(!b){if(c)a[r]("ifToggled");a[r]("ifChanged")[r]("if"+y(d))}}var n="iCheck",
    F=n+"-helper",x="radio",j="checked",I="un"+j,u="disabled",v="determinate",k="in"+v,E="update",l="type",t="addClass",A="removeClass",r="trigger",D="label",z="cursor",G=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini/i.test(navigator.userAgent);f.fn[n]=function(a,c){var d=":checkbox, :"+x,b=f(),e=function(a){a.each(function(){var a=f(this);b=a.is(d)?b.add(a):b.add(a.find(d))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))return a=a.toLowerCase(),
    e(this),b.each(function(){"destroy"==a?K(this,"ifDestroyed"):C(f(this),!0,a);f.isFunction(c)&&c()});if("object"==typeof a||!a){var g=f.extend({checkedClass:j,disabledClass:u,indeterminateClass:k,labelHover:!0},a),h=g.handle,m=g.hoverClass||"hover",y=g.focusClass||"focus",v=g.activeClass||"active",z=!!g.labelHover,s=g.labelHoverClass||"hover",B=(""+g.increaseArea).replace("%","")|0;if("checkbox"==h||h==x)d=":"+h;-50>B&&(B=-50);e(this);return b.each(function(){K(this);var a=f(this),b=this,c=b.id,d=
    -B+"%",e=100+2*B+"%",e={position:"absolute",top:d,left:d,display:"block",width:e,height:e,margin:0,padding:0,background:"#fff",border:0,opacity:0},d=G?{position:"absolute",visibility:"hidden"}:B?e:{position:"absolute",opacity:0, display:"none"},h="checkbox"==b[l]?g.checkboxClass||"icheckbox":g.radioClass||"i"+x,k=f(D+'[for="'+c+'"]').add(a.closest(D)),q=a.wrap('<div class="'+h+'"/>')[r]("ifCreated").parent().append(g.insert),e=f('<ins class="'+F+'"/>').css(e).appendTo(q);a.data(n,{o:g,s:a.attr("style")}).css(d);
    g.inheritClass&&q[t](b.className);g.inheritID&&c&&q.attr("id",n+"-"+c);"static"==q.css("position")&&q.css("position","relative");C(a,!0,E);if(k.length)k.on("click.i mouseenter.i mouseleave.i touchbegin.i touchend.i",function(c){var d=c[l],e=f(this);if(!b[u])if("click"==d?C(a,!1,!0):z&&(/ve|nd/.test(d)?(q[A](m),e[A](s)):(q[t](m),e[t](s))),G)c.stopPropagation();else return!1});a.on("click.i focus.i blur.i keyup.i keydown.i keypress.i",function(c){var d=c[l];c=c.keyCode;if("click"==d)return!1;if("keydown"==
        d&&32==c)return b[l]==x&&b[j]||(b[j]?w(a,j):p(a,j)),!1;if("keyup"==d&&b[l]==x)!b[j]&&p(a,j);else if(/us|ur/.test(d))q["blur"==d?A:t](y)});e.on("click mousedown mouseup mouseover mouseout touchbegin.i touchend.i",function(d){var c=d[l],e=/wn|up/.test(c)?v:m;if(!b[u]){if("click"==c)C(a,!1,!0);else{if(/wn|er|in/.test(c))q[t](e);else q[A](e+" "+v);if(k.length&&z&&e==m)k[/ut|nd/.test(c)?A:t](s)}if(G)d.stopPropagation();else return!1}})})}return this}})(jQuery);







/*
 *  jQuery OwlCarousel v1.3.3
 *
 *  Copyright (c) 2013 Bartosz Wojciechowski
 *  http://www.owlgraphic.com/owlcarousel/
 *
 *  Licensed under MIT
 *
 */

/*JS Lint helpers: */
/*global dragMove: false, dragEnd: false, $, jQuery, alert, window, document */
/*jslint nomen: true, continue:true */

if (typeof Object.create !== "function") {
    Object.create = function (obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    };
}
(function ($, window, document) {

    var Carousel = {
        init : function (options, el) {
            var base = this;

            base.$elem = $(el);
            base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options);

            base.userOptions = options;
            base.loadContent();
        },

        loadContent : function () {
            var base = this, url;

            function getData(data) {
                var i, content = "";
                if (typeof base.options.jsonSuccess === "function") {
                    base.options.jsonSuccess.apply(this, [data]);
                } else {
                    for (i in data.owl) {
                        if (data.owl.hasOwnProperty(i)) {
                            content += data.owl[i].item;
                        }
                    }
                    base.$elem.html(content);
                }
                base.logIn();
            }

            if (typeof base.options.beforeInit === "function") {
                base.options.beforeInit.apply(this, [base.$elem]);
            }

            if (typeof base.options.jsonPath === "string") {
                url = base.options.jsonPath;
                $.getJSON(url, getData);
            } else {
                base.logIn();
            }
        },

        logIn : function () {
            var base = this;

            base.$elem.data("owl-originalStyles", base.$elem.attr("style"));
            base.$elem.data("owl-originalClasses", base.$elem.attr("class"));

            base.$elem.css({opacity: 0});
            base.orignalItems = base.options.items;
            base.checkBrowser();
            base.wrapperWidth = 0;
            base.checkVisible = null;
            base.setVars();
        },

        setVars : function () {
            var base = this;
            if (base.$elem.children().length === 0) {return false; }
            base.baseClass();
            base.eventTypes();
            base.$userItems = base.$elem.children();
            base.itemsAmount = base.$userItems.length;
            base.wrapItems();
            base.$owlItems = base.$elem.find(".owl-item");
            base.$owlWrapper = base.$elem.find(".owl-wrapper");
            base.playDirection = "next";
            base.prevItem = 0;
            base.prevArr = [0];
            base.currentItem = 0;
            base.customEvents();
            base.onStartup();
        },

        onStartup : function () {
            var base = this;
            base.updateItems();
            base.calculateAll();
            base.buildControls();
            base.updateControls();
            base.response();
            base.moveEvents();
            base.stopOnHover();
            base.owlStatus();

            if (base.options.transitionStyle !== false) {
                base.transitionTypes(base.options.transitionStyle);
            }
            if (base.options.autoPlay === true) {
                base.options.autoPlay = 5000;
            }
            base.play();

            base.$elem.find(".owl-wrapper").css("display", "block");

            if (!base.$elem.is(":visible")) {
                base.watchVisibility();
            } else {
                base.$elem.css("opacity", 1);
            }
            base.onstartup = false;
            base.eachMoveUpdate();
            if (typeof base.options.afterInit === "function") {
                base.options.afterInit.apply(this, [base.$elem]);
            }
        },

        eachMoveUpdate : function () {
            var base = this;

            if (base.options.lazyLoad === true) {
                base.lazyLoad();
            }
            if (base.options.autoHeight === true) {
                base.autoHeight();
            }
            base.onVisibleItems();

            if (typeof base.options.afterAction === "function") {
                base.options.afterAction.apply(this, [base.$elem]);
            }
        },

        updateVars : function () {
            var base = this;
            if (typeof base.options.beforeUpdate === "function") {
                base.options.beforeUpdate.apply(this, [base.$elem]);
            }
            base.watchVisibility();
            base.updateItems();
            base.calculateAll();
            base.updatePosition();
            base.updateControls();
            base.eachMoveUpdate();
            if (typeof base.options.afterUpdate === "function") {
                base.options.afterUpdate.apply(this, [base.$elem]);
            }
        },

        reload : function () {
            var base = this;
            window.setTimeout(function () {
                base.updateVars();
            }, 0);
        },

        watchVisibility : function () {
            var base = this;

            if (base.$elem.is(":visible") === false) {
                base.$elem.css({opacity: 0});
                window.clearInterval(base.autoPlayInterval);
                window.clearInterval(base.checkVisible);
            } else {
                return false;
            }
            base.checkVisible = window.setInterval(function () {
                if (base.$elem.is(":visible")) {
                    base.reload();
                    base.$elem.animate({opacity: 1}, 200);
                    window.clearInterval(base.checkVisible);
                }
            }, 500);
        },

        wrapItems : function () {
            var base = this;
            base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");
            base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");
            base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
            base.$elem.css("display", "block");
        },

        baseClass : function () {
            var base = this,
                hasBaseClass = base.$elem.hasClass(base.options.baseClass),
                hasThemeClass = base.$elem.hasClass(base.options.theme);

            if (!hasBaseClass) {
                base.$elem.addClass(base.options.baseClass);
            }

            if (!hasThemeClass) {
                base.$elem.addClass(base.options.theme);
            }
        },

        updateItems : function () {
            var base = this, width, i;

            if (base.options.responsive === false) {
                return false;
            }
            if (base.options.singleItem === true) {
                base.options.items = base.orignalItems = 1;
                base.options.itemsCustom = false;
                base.options.itemsDesktop = false;
                base.options.itemsDesktopSmall = false;
                base.options.itemsTablet = false;
                base.options.itemsTabletSmall = false;
                base.options.itemsMobile = false;
                return false;
            }

            width = $(base.options.responsiveBaseWidth).width();

            if (width > (base.options.itemsDesktop[0] || base.orignalItems)) {
                base.options.items = base.orignalItems;
            }
            if (base.options.itemsCustom !== false) {
                //Reorder array by screen size
                base.options.itemsCustom.sort(function (a, b) {return a[0] - b[0]; });

                for (i = 0; i < base.options.itemsCustom.length; i += 1) {
                    if (base.options.itemsCustom[i][0] <= width) {
                        base.options.items = base.options.itemsCustom[i][1];
                    }
                }

            } else {

                if (width <= base.options.itemsDesktop[0] && base.options.itemsDesktop !== false) {
                    base.options.items = base.options.itemsDesktop[1];
                }

                if (width <= base.options.itemsDesktopSmall[0] && base.options.itemsDesktopSmall !== false) {
                    base.options.items = base.options.itemsDesktopSmall[1];
                }

                if (width <= base.options.itemsTablet[0] && base.options.itemsTablet !== false) {
                    base.options.items = base.options.itemsTablet[1];
                }

                if (width <= base.options.itemsTabletSmall[0] && base.options.itemsTabletSmall !== false) {
                    base.options.items = base.options.itemsTabletSmall[1];
                }

                if (width <= base.options.itemsMobile[0] && base.options.itemsMobile !== false) {
                    base.options.items = base.options.itemsMobile[1];
                }
            }

            //if number of items is less than declared
            if (base.options.items > base.itemsAmount && base.options.itemsScaleUp === true) {
                base.options.items = base.itemsAmount;
            }
        },

        response : function () {
            var base = this,
                smallDelay,
                lastWindowWidth;

            if (base.options.responsive !== true) {
                return false;
            }
            lastWindowWidth = $(window).width();

            base.resizer = function () {
                if ($(window).width() !== lastWindowWidth) {
                    if (base.options.autoPlay !== false) {
                        window.clearInterval(base.autoPlayInterval);
                    }
                    window.clearTimeout(smallDelay);
                    smallDelay = window.setTimeout(function () {
                        lastWindowWidth = $(window).width();
                        base.updateVars();
                    }, base.options.responsiveRefreshRate);
                }
            };
            $(window).resize(base.resizer);
        },

        updatePosition : function () {
            var base = this;
            base.jumpTo(base.currentItem);
            if (base.options.autoPlay !== false) {
                base.checkAp();
            }
        },

        appendItemsSizes : function () {
            var base = this,
                roundPages = 0,
                lastItem = base.itemsAmount - base.options.items;

            base.$owlItems.each(function (index) {
                var $this = $(this);
                $this
                    .css({"width": base.itemWidth})
                    .data("owl-item", Number(index));

                if (index % base.options.items === 0 || index === lastItem) {
                    if (!(index > lastItem)) {
                        roundPages += 1;
                    }
                }
                $this.data("owl-roundPages", roundPages);
            });
        },

        appendWrapperSizes : function () {
            var base = this,
                width = base.$owlItems.length * base.itemWidth;

            base.$owlWrapper.css({
                "width": width * 2,
                "left": 0
            });
            base.appendItemsSizes();
        },

        calculateAll : function () {
            var base = this;
            base.calculateWidth();
            base.appendWrapperSizes();
            base.loops();
            base.max();
        },

        calculateWidth : function () {
            var base = this;
            base.itemWidth = Math.round(base.$elem.width() / base.options.items);
        },

        max : function () {
            var base = this,
                maximum = ((base.itemsAmount * base.itemWidth) - base.options.items * base.itemWidth) * -1;
            if (base.options.items > base.itemsAmount) {
                base.maximumItem = 0;
                maximum = 0;
                base.maximumPixels = 0;
            } else {
                base.maximumItem = base.itemsAmount - base.options.items;
                base.maximumPixels = maximum;
            }
            return maximum;
        },

        min : function () {
            return 0;
        },

        loops : function () {
            var base = this,
                prev = 0,
                elWidth = 0,
                i,
                item,
                roundPageNum;

            base.positionsInArray = [0];
            base.pagesInArray = [];

            for (i = 0; i < base.itemsAmount; i += 1) {
                elWidth += base.itemWidth;
                base.positionsInArray.push(-elWidth);

                if (base.options.scrollPerPage === true) {
                    item = $(base.$owlItems[i]);
                    roundPageNum = item.data("owl-roundPages");
                    if (roundPageNum !== prev) {
                        base.pagesInArray[prev] = base.positionsInArray[i];
                        prev = roundPageNum;
                    }
                }
            }
        },

        buildControls : function () {
            var base = this;
            if (base.options.navigation === true || base.options.pagination === true) {
                base.owlControls = $("<div class=\"owl-controls\"/>").toggleClass("clickable", !base.browser.isTouch).appendTo(base.$elem);
            }
            if (base.options.pagination === true) {
                base.buildPagination();
            }
            if (base.options.navigation === true) {
                base.buildButtons();
            }
        },

        buildButtons : function () {
            var base = this,
                buttonsWrapper = $("<div class=\"owl-buttons\"/>");
            base.owlControls.append(buttonsWrapper);

            base.buttonPrev = $("<div/>", {
                "class" : "owl-prev",
                "html" : base.options.navigationText[0] || ""
            });

            base.buttonNext = $("<div/>", {
                "class" : "owl-next",
                "html" : base.options.navigationText[1] || ""
            });

            buttonsWrapper
                .append(base.buttonPrev)
                .append(base.buttonNext);

            buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", "div[class^=\"owl\"]", function (event) {
                event.preventDefault();
            });

            buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function (event) {
                event.preventDefault();
                if ($(this).hasClass("owl-next")) {
                    base.next();
                } else {
                    base.prev();
                }
            });
        },

        buildPagination : function () {
            var base = this;

            base.paginationWrapper = $("<div class=\"owl-pagination\"/>");
            base.owlControls.append(base.paginationWrapper);

            base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (event) {
                event.preventDefault();
                if (Number($(this).data("owl-page")) !== base.currentItem) {
                    base.goTo(Number($(this).data("owl-page")), true);
                }
            });
        },

        updatePagination : function () {
            var base = this,
                counter,
                lastPage,
                lastItem,
                i,
                paginationButton,
                paginationButtonInner;

            if (base.options.pagination === false) {
                return false;
            }

            base.paginationWrapper.html("");

            counter = 0;
            lastPage = base.itemsAmount - base.itemsAmount % base.options.items;

            for (i = 0; i < base.itemsAmount; i += 1) {
                if (i % base.options.items === 0) {
                    counter += 1;
                    if (lastPage === i) {
                        lastItem = base.itemsAmount - base.options.items;
                    }
                    paginationButton = $("<div/>", {
                        "class" : "owl-page"
                    });
                    paginationButtonInner = $("<span></span>", {
                        "text": base.options.paginationNumbers === true ? counter : "",
                        "class": base.options.paginationNumbers === true ? "owl-numbers" : ""
                    });
                    paginationButton.append(paginationButtonInner);

                    paginationButton.data("owl-page", lastPage === i ? lastItem : i);
                    paginationButton.data("owl-roundPages", counter);

                    base.paginationWrapper.append(paginationButton);
                }
            }
            base.checkPagination();
        },
        checkPagination : function () {
            var base = this;
            if (base.options.pagination === false) {
                return false;
            }
            base.paginationWrapper.find(".owl-page").each(function () {
                if ($(this).data("owl-roundPages") === $(base.$owlItems[base.currentItem]).data("owl-roundPages")) {
                    base.paginationWrapper
                        .find(".owl-page")
                        .removeClass("active");
                    $(this).addClass("active");
                }
            });
        },

        checkNavigation : function () {
            var base = this;

            if (base.options.navigation === false) {
                return false;
            }
            if (base.options.rewindNav === false) {
                if (base.currentItem === 0 && base.maximumItem === 0) {
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.addClass("disabled");
                } else if (base.currentItem === 0 && base.maximumItem !== 0) {
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.removeClass("disabled");
                } else if (base.currentItem === base.maximumItem) {
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.addClass("disabled");
                } else if (base.currentItem !== 0 && base.currentItem !== base.maximumItem) {
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.removeClass("disabled");
                }
            }
        },

        updateControls : function () {
            var base = this;
            base.updatePagination();
            base.checkNavigation();
            if (base.owlControls) {
                if (base.options.items >= base.itemsAmount) {
                    base.owlControls.hide();
                } else {
                    base.owlControls.show();
                }
            }
        },

        destroyControls : function () {
            var base = this;
            if (base.owlControls) {
                base.owlControls.remove();
            }
        },

        next : function (speed) {
            var base = this;

            if (base.isTransition) {
                return false;
            }

            base.currentItem += base.options.scrollPerPage === true ? base.options.items : 1;
            if (base.currentItem > base.maximumItem + (base.options.scrollPerPage === true ? (base.options.items - 1) : 0)) {
                if (base.options.rewindNav === true) {
                    base.currentItem = 0;
                    speed = "rewind";
                } else {
                    base.currentItem = base.maximumItem;
                    return false;
                }
            }
            base.goTo(base.currentItem, speed);
        },

        prev : function (speed) {
            var base = this;

            if (base.isTransition) {
                return false;
            }

            if (base.options.scrollPerPage === true && base.currentItem > 0 && base.currentItem < base.options.items) {
                base.currentItem = 0;
            } else {
                base.currentItem -= base.options.scrollPerPage === true ? base.options.items : 1;
            }
            if (base.currentItem < 0) {
                if (base.options.rewindNav === true) {
                    base.currentItem = base.maximumItem;
                    speed = "rewind";
                } else {
                    base.currentItem = 0;
                    return false;
                }
            }
            base.goTo(base.currentItem, speed);
        },

        goTo : function (position, speed, drag) {
            var base = this,
                goToPixel;

            if (base.isTransition) {
                return false;
            }
            if (typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this, [base.$elem]);
            }
            if (position >= base.maximumItem) {
                position = base.maximumItem;
            } else if (position <= 0) {
                position = 0;
            }

            base.currentItem = base.owl.currentItem = position;
            if (base.options.transitionStyle !== false && drag !== "drag" && base.options.items === 1 && base.browser.support3d === true) {
                base.swapSpeed(0);
                if (base.browser.support3d === true) {
                    base.transition3d(base.positionsInArray[position]);
                } else {
                    base.css2slide(base.positionsInArray[position], 1);
                }
                base.afterGo();
                base.singleItemTransition();
                return false;
            }
            goToPixel = base.positionsInArray[position];

            if (base.browser.support3d === true) {
                base.isCss3Finish = false;

                if (speed === true) {
                    base.swapSpeed("paginationSpeed");
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.paginationSpeed);

                } else if (speed === "rewind") {
                    base.swapSpeed(base.options.rewindSpeed);
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.rewindSpeed);

                } else {
                    base.swapSpeed("slideSpeed");
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.slideSpeed);
                }
                base.transition3d(goToPixel);
            } else {
                if (speed === true) {
                    base.css2slide(goToPixel, base.options.paginationSpeed);
                } else if (speed === "rewind") {
                    base.css2slide(goToPixel, base.options.rewindSpeed);
                } else {
                    base.css2slide(goToPixel, base.options.slideSpeed);
                }
            }
            base.afterGo();
        },

        jumpTo : function (position) {
            var base = this;
            if (typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this, [base.$elem]);
            }
            if (position >= base.maximumItem || position === -1) {
                position = base.maximumItem;
            } else if (position <= 0) {
                position = 0;
            }
            base.swapSpeed(0);
            if (base.browser.support3d === true) {
                base.transition3d(base.positionsInArray[position]);
            } else {
                base.css2slide(base.positionsInArray[position], 1);
            }
            base.currentItem = base.owl.currentItem = position;
            base.afterGo();
        },

        afterGo : function () {
            var base = this;

            base.prevArr.push(base.currentItem);
            base.prevItem = base.owl.prevItem = base.prevArr[base.prevArr.length - 2];
            base.prevArr.shift(0);

            if (base.prevItem !== base.currentItem) {
                base.checkPagination();
                base.checkNavigation();
                base.eachMoveUpdate();

                if (base.options.autoPlay !== false) {
                    base.checkAp();
                }
            }
            if (typeof base.options.afterMove === "function" && base.prevItem !== base.currentItem) {
                base.options.afterMove.apply(this, [base.$elem]);
            }
        },

        stop : function () {
            var base = this;
            base.apStatus = "stop";
            window.clearInterval(base.autoPlayInterval);
        },

        checkAp : function () {
            var base = this;
            if (base.apStatus !== "stop") {
                base.play();
            }
        },

        play : function () {
            var base = this;
            base.apStatus = "play";
            if (base.options.autoPlay === false) {
                return false;
            }
            window.clearInterval(base.autoPlayInterval);
            base.autoPlayInterval = window.setInterval(function () {
                base.next(true);
            }, base.options.autoPlay);
        },

        swapSpeed : function (action) {
            var base = this;
            if (action === "slideSpeed") {
                base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed));
            } else if (action === "paginationSpeed") {
                base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed));
            } else if (typeof action !== "string") {
                base.$owlWrapper.css(base.addCssSpeed(action));
            }
        },

        addCssSpeed : function (speed) {
            return {
                "-webkit-transition": "all " + speed + "ms ease",
                "-moz-transition": "all " + speed + "ms ease",
                "-o-transition": "all " + speed + "ms ease",
                "transition": "all " + speed + "ms ease"
            };
        },

        removeTransition : function () {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                "transition": ""
            };
        },

        doTranslate : function (pixels) {
            return {
                "-webkit-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "transform": "translate3d(" + pixels + "px, 0px,0px)"
            };
        },

        transition3d : function (value) {
            var base = this;
            base.$owlWrapper.css(base.doTranslate(value));
        },

        css2move : function (value) {
            var base = this;
            base.$owlWrapper.css({"left" : value});
        },

        css2slide : function (value, speed) {
            var base = this;

            base.isCssFinish = false;
            base.$owlWrapper.stop(true, true).animate({
                "left" : value
            }, {
                duration : speed || base.options.slideSpeed,
                complete : function () {
                    base.isCssFinish = true;
                }
            });
        },

        checkBrowser : function () {
            var base = this,
                translate3D = "translate3d(0px, 0px, 0px)",
                tempElem = document.createElement("div"),
                regex,
                asSupport,
                support3d,
                isTouch;

            tempElem.style.cssText = "  -moz-transform:" + translate3D +
                "; -ms-transform:"     + translate3D +
                "; -o-transform:"      + translate3D +
                "; -webkit-transform:" + translate3D +
                "; transform:"         + translate3D;
            regex = /translate3d\(0px, 0px, 0px\)/g;
            asSupport = tempElem.style.cssText.match(regex);
            support3d = (asSupport !== null && asSupport.length === 1);

            isTouch = "ontouchstart" in window || window.navigator.msMaxTouchPoints;

            base.browser = {
                "support3d" : support3d,
                "isTouch" : isTouch
            };
        },

        moveEvents : function () {
            var base = this;
            if (base.options.mouseDrag !== false || base.options.touchDrag !== false) {
                base.gestures();
                base.disabledEvents();
            }
        },

        eventTypes : function () {
            var base = this,
                types = ["s", "e", "x"];

            base.ev_types = {};

            if (base.options.mouseDrag === true && base.options.touchDrag === true) {
                types = [
                    "touchstart.owl mousedown.owl",
                    "touchmove.owl mousemove.owl",
                    "touchend.owl touchcancel.owl mouseup.owl"
                ];
            } else if (base.options.mouseDrag === false && base.options.touchDrag === true) {
                types = [
                    "touchstart.owl",
                    "touchmove.owl",
                    "touchend.owl touchcancel.owl"
                ];
            } else if (base.options.mouseDrag === true && base.options.touchDrag === false) {
                types = [
                    "mousedown.owl",
                    "mousemove.owl",
                    "mouseup.owl"
                ];
            }

            base.ev_types.start = types[0];
            base.ev_types.move = types[1];
            base.ev_types.end = types[2];
        },

        disabledEvents :  function () {
            var base = this;
            base.$elem.on("dragstart.owl", function (event) { event.preventDefault(); });
            base.$elem.on("mousedown.disableTextSelect", function (e) {
                return $(e.target).is('input, textarea, select, option');
            });
        },

        gestures : function () {
            /*jslint unparam: true*/
            var base = this,
                locals = {
                    offsetX : 0,
                    offsetY : 0,
                    baseElWidth : 0,
                    relativePos : 0,
                    position: null,
                    minSwipe : null,
                    maxSwipe: null,
                    sliding : null,
                    dargging: null,
                    targetElement : null
                };

            base.isCssFinish = true;

            function getTouches(event) {
                if (event.touches !== undefined) {
                    return {
                        x : event.touches[0].pageX,
                        y : event.touches[0].pageY
                    };
                }

                if (event.touches === undefined) {
                    if (event.pageX !== undefined) {
                        return {
                            x : event.pageX,
                            y : event.pageY
                        };
                    }
                    if (event.pageX === undefined) {
                        return {
                            x : event.clientX,
                            y : event.clientY
                        };
                    }
                }
            }

            function swapEvents(type) {
                if (type === "on") {
                    $(document).on(base.ev_types.move, dragMove);
                    $(document).on(base.ev_types.end, dragEnd);
                } else if (type === "off") {
                    $(document).off(base.ev_types.move);
                    $(document).off(base.ev_types.end);
                }
            }

            function dragStart(event) {
                var ev = event.originalEvent || event || window.event,
                    position;

                if (ev.which === 3) {
                    return false;
                }
                if (base.itemsAmount <= base.options.items) {
                    return;
                }
                if (base.isCssFinish === false && !base.options.dragBeforeAnimFinish) {
                    return false;
                }
                if (base.isCss3Finish === false && !base.options.dragBeforeAnimFinish) {
                    return false;
                }

                if (base.options.autoPlay !== false) {
                    window.clearInterval(base.autoPlayInterval);
                }

                if (base.browser.isTouch !== true && !base.$owlWrapper.hasClass("grabbing")) {
                    base.$owlWrapper.addClass("grabbing");
                }

                base.newPosX = 0;
                base.newRelativeX = 0;

                $(this).css(base.removeTransition());

                position = $(this).position();
                locals.relativePos = position.left;

                locals.offsetX = getTouches(ev).x - position.left;
                locals.offsetY = getTouches(ev).y - position.top;

                swapEvents("on");

                locals.sliding = false;
                locals.targetElement = ev.target || ev.srcElement;
            }

            function dragMove(event) {
                var ev = event.originalEvent || event || window.event,
                    minSwipe,
                    maxSwipe;

                base.newPosX = getTouches(ev).x - locals.offsetX;
                base.newPosY = getTouches(ev).y - locals.offsetY;
                base.newRelativeX = base.newPosX - locals.relativePos;

                if (typeof base.options.startDragging === "function" && locals.dragging !== true && base.newRelativeX !== 0) {
                    locals.dragging = true;
                    base.options.startDragging.apply(base, [base.$elem]);
                }

                if ((base.newRelativeX > 8 || base.newRelativeX < -8) && (base.browser.isTouch === true)) {
                    if (ev.preventDefault !== undefined) {
                        ev.preventDefault();
                    } else {
                        ev.returnValue = false;
                    }
                    locals.sliding = true;
                }

                if ((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false) {
                    $(document).off("touchmove.owl");
                }

                minSwipe = function () {
                    return base.newRelativeX / 5;
                };

                maxSwipe = function () {
                    return base.maximumPixels + base.newRelativeX / 5;
                };

                base.newPosX = Math.max(Math.min(base.newPosX, minSwipe()), maxSwipe());
                if (base.browser.support3d === true) {
                    base.transition3d(base.newPosX);
                } else {
                    base.css2move(base.newPosX);
                }
            }

            function dragEnd(event) {
                var ev = event.originalEvent || event || window.event,
                    newPosition,
                    handlers,
                    owlStopEvent;

                ev.target = ev.target || ev.srcElement;

                locals.dragging = false;

                if (base.browser.isTouch !== true) {
                    base.$owlWrapper.removeClass("grabbing");
                }

                if (base.newRelativeX < 0) {
                    base.dragDirection = base.owl.dragDirection = "left";
                } else {
                    base.dragDirection = base.owl.dragDirection = "right";
                }

                if (base.newRelativeX !== 0) {
                    newPosition = base.getNewPosition();
                    base.goTo(newPosition, false, "drag");
                    if (locals.targetElement === ev.target && base.browser.isTouch !== true) {
                        $(ev.target).on("click.disable", function (ev) {
                            ev.stopImmediatePropagation();
                            ev.stopPropagation();
                            ev.preventDefault();
                            $(ev.target).off("click.disable");
                        });
                        handlers = $._data(ev.target, "events").click;
                        owlStopEvent = handlers.pop();
                        handlers.splice(0, 0, owlStopEvent);
                    }
                }
                swapEvents("off");
            }
            base.$elem.on(base.ev_types.start, ".owl-wrapper", dragStart);
        },

        getNewPosition : function () {
            var base = this,
                newPosition = base.closestItem();

            if (newPosition > base.maximumItem) {
                base.currentItem = base.maximumItem;
                newPosition  = base.maximumItem;
            } else if (base.newPosX >= 0) {
                newPosition = 0;
                base.currentItem = 0;
            }
            return newPosition;
        },
        closestItem : function () {
            var base = this,
                array = base.options.scrollPerPage === true ? base.pagesInArray : base.positionsInArray,
                goal = base.newPosX,
                closest = null;

            $.each(array, function (i, v) {
                if (goal - (base.itemWidth / 20) > array[i + 1] && goal - (base.itemWidth / 20) < v && base.moveDirection() === "left") {
                    closest = v;
                    if (base.options.scrollPerPage === true) {
                        base.currentItem = $.inArray(closest, base.positionsInArray);
                    } else {
                        base.currentItem = i;
                    }
                } else if (goal + (base.itemWidth / 20) < v && goal + (base.itemWidth / 20) > (array[i + 1] || array[i] - base.itemWidth) && base.moveDirection() === "right") {
                    if (base.options.scrollPerPage === true) {
                        closest = array[i + 1] || array[array.length - 1];
                        base.currentItem = $.inArray(closest, base.positionsInArray);
                    } else {
                        closest = array[i + 1];
                        base.currentItem = i + 1;
                    }
                }
            });
            return base.currentItem;
        },

        moveDirection : function () {
            var base = this,
                direction;
            if (base.newRelativeX < 0) {
                direction = "right";
                base.playDirection = "next";
            } else {
                direction = "left";
                base.playDirection = "prev";
            }
            return direction;
        },

        customEvents : function () {
            /*jslint unparam: true*/
            var base = this;
            base.$elem.on("owl.next", function () {
                base.next();
            });
            base.$elem.on("owl.prev", function () {
                base.prev();
            });
            base.$elem.on("owl.play", function (event, speed) {
                base.options.autoPlay = speed;
                base.play();
                base.hoverStatus = "play";
            });
            base.$elem.on("owl.stop", function () {
                base.stop();
                base.hoverStatus = "stop";
            });
            base.$elem.on("owl.goTo", function (event, item) {
                base.goTo(item);
            });
            base.$elem.on("owl.jumpTo", function (event, item) {
                base.jumpTo(item);
            });
        },

        stopOnHover : function () {
            var base = this;
            if (base.options.stopOnHover === true && base.browser.isTouch !== true && base.options.autoPlay !== false) {
                base.$elem.on("mouseover", function () {
                    base.stop();
                });
                base.$elem.on("mouseout", function () {
                    if (base.hoverStatus !== "stop") {
                        base.play();
                    }
                });
            }
        },

        lazyLoad : function () {
            var base = this,
                i,
                $item,
                itemNumber,
                $lazyImg,
                follow;

            if (base.options.lazyLoad === false) {
                return false;
            }
            for (i = 0; i < base.itemsAmount; i += 1) {
                $item = $(base.$owlItems[i]);

                if ($item.data("owl-loaded") === "loaded") {
                    continue;
                }

                itemNumber = $item.data("owl-item");
                $lazyImg = $item.find(".lazyOwl");

                if (typeof $lazyImg.data("src") !== "string") {
                    $item.data("owl-loaded", "loaded");
                    continue;
                }
                if ($item.data("owl-loaded") === undefined) {
                    $lazyImg.hide();
                    $item.addClass("loading").data("owl-loaded", "checked");
                }
                if (base.options.lazyFollow === true) {
                    follow = itemNumber >= base.currentItem;
                } else {
                    follow = true;
                }
                if (follow && itemNumber < base.currentItem + base.options.items && $lazyImg.length) {
                    base.lazyPreload($item, $lazyImg);
                }
            }
        },

        lazyPreload : function ($item, $lazyImg) {
            var base = this,
                iterations = 0,
                isBackgroundImg;

            if ($lazyImg.prop("tagName") === "DIV") {
                $lazyImg.css("background-image", "url(" + $lazyImg.data("src") + ")");
                isBackgroundImg = true;
            } else {
                $lazyImg[0].src = $lazyImg.data("src");
            }

            function showImage() {
                $item.data("owl-loaded", "loaded").removeClass("loading");
                $lazyImg.removeAttr("data-src");
                if (base.options.lazyEffect === "fade") {
                    $lazyImg.fadeIn(400);
                } else {
                    $lazyImg.show();
                }
                if (typeof base.options.afterLazyLoad === "function") {
                    base.options.afterLazyLoad.apply(this, [base.$elem]);
                }
            }

            function checkLazyImage() {
                iterations += 1;
                if (base.completeImg($lazyImg.get(0)) || isBackgroundImg === true) {
                    showImage();
                } else if (iterations <= 100) {//if image loads in less than 10 seconds
                    window.setTimeout(checkLazyImage, 100);
                } else {
                    showImage();
                }
            }

            checkLazyImage();
        },

        autoHeight : function () {
            var base = this,
                $currentimg = $(base.$owlItems[base.currentItem]).find("img"),
                iterations;

            function addHeight() {
                var $currentItem = $(base.$owlItems[base.currentItem]).height();
                base.wrapperOuter.css("height", $currentItem + "px");
                if (!base.wrapperOuter.hasClass("autoHeight")) {
                    window.setTimeout(function () {
                        base.wrapperOuter.addClass("autoHeight");
                    }, 0);
                }
            }

            function checkImage() {
                iterations += 1;
                if (base.completeImg($currentimg.get(0))) {
                    addHeight();
                } else if (iterations <= 100) { //if image loads in less than 10 seconds
                    window.setTimeout(checkImage, 100);
                } else {
                    base.wrapperOuter.css("height", ""); //Else remove height attribute
                }
            }

            if ($currentimg.get(0) !== undefined) {
                iterations = 0;
                checkImage();
            } else {
                addHeight();
            }
        },

        completeImg : function (img) {
            var naturalWidthType;

            if (!img.complete) {
                return false;
            }
            naturalWidthType = typeof img.naturalWidth;
            if (naturalWidthType !== "undefined" && img.naturalWidth === 0) {
                return false;
            }
            return true;
        },

        onVisibleItems : function () {
            var base = this,
                i;

            if (base.options.addClassActive === true) {
                base.$owlItems.removeClass("active");
            }
            base.visibleItems = [];
            for (i = base.currentItem; i < base.currentItem + base.options.items; i += 1) {
                base.visibleItems.push(i);

                if (base.options.addClassActive === true) {
                    $(base.$owlItems[i]).addClass("active");
                }
            }
            base.owl.visibleItems = base.visibleItems;
        },

        transitionTypes : function (className) {
            var base = this;
            //Currently available: "fade", "backSlide", "goDown", "fadeUp"
            base.outClass = "owl-" + className + "-out";
            base.inClass = "owl-" + className + "-in";
        },

        singleItemTransition : function () {
            var base = this,
                outClass = base.outClass,
                inClass = base.inClass,
                $currentItem = base.$owlItems.eq(base.currentItem),
                $prevItem = base.$owlItems.eq(base.prevItem),
                prevPos = Math.abs(base.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem],
                origin = Math.abs(base.positionsInArray[base.currentItem]) + base.itemWidth / 2,
                animEnd = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';

            base.isTransition = true;

            base.$owlWrapper
                .addClass('owl-origin')
                .css({
                    "-webkit-transform-origin" : origin + "px",
                    "-moz-perspective-origin" : origin + "px",
                    "perspective-origin" : origin + "px"
                });
            function transStyles(prevPos) {
                return {
                    "position" : "relative",
                    "left" : prevPos + "px"
                };
            }

            $prevItem
                .css(transStyles(prevPos, 10))
                .addClass(outClass)
                .on(animEnd, function () {
                    base.endPrev = true;
                    $prevItem.off(animEnd);
                    base.clearTransStyle($prevItem, outClass);
                });

            $currentItem
                .addClass(inClass)
                .on(animEnd, function () {
                    base.endCurrent = true;
                    $currentItem.off(animEnd);
                    base.clearTransStyle($currentItem, inClass);
                });
        },

        clearTransStyle : function (item, classToRemove) {
            var base = this;
            item.css({
                "position" : "",
                "left" : ""
            }).removeClass(classToRemove);

            if (base.endPrev && base.endCurrent) {
                base.$owlWrapper.removeClass('owl-origin');
                base.endPrev = false;
                base.endCurrent = false;
                base.isTransition = false;
            }
        },

        owlStatus : function () {
            var base = this;
            base.owl = {
                "userOptions"   : base.userOptions,
                "baseElement"   : base.$elem,
                "userItems"     : base.$userItems,
                "owlItems"      : base.$owlItems,
                "currentItem"   : base.currentItem,
                "prevItem"      : base.prevItem,
                "visibleItems"  : base.visibleItems,
                "isTouch"       : base.browser.isTouch,
                "browser"       : base.browser,
                "dragDirection" : base.dragDirection
            };
        },

        clearEvents : function () {
            var base = this;
            base.$elem.off(".owl owl mousedown.disableTextSelect");
            $(document).off(".owl owl");
            $(window).off("resize", base.resizer);
        },

        unWrap : function () {
            var base = this;
            if (base.$elem.children().length !== 0) {
                base.$owlWrapper.unwrap();
                base.$userItems.unwrap().unwrap();
                if (base.owlControls) {
                    base.owlControls.remove();
                }
            }
            base.clearEvents();
            base.$elem
                .attr("style", base.$elem.data("owl-originalStyles") || "")
                .attr("class", base.$elem.data("owl-originalClasses"));
        },

        destroy : function () {
            var base = this;
            base.stop();
            window.clearInterval(base.checkVisible);
            base.unWrap();
            base.$elem.removeData();
        },

        reinit : function (newOptions) {
            var base = this,
                options = $.extend({}, base.userOptions, newOptions);
            base.unWrap();
            base.init(options, base.$elem);
        },

        addItem : function (htmlString, targetPosition) {
            var base = this,
                position;

            if (!htmlString) {return false; }

            if (base.$elem.children().length === 0) {
                base.$elem.append(htmlString);
                base.setVars();
                return false;
            }
            base.unWrap();
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1;
            } else {
                position = targetPosition;
            }
            if (position >= base.$userItems.length || position === -1) {
                base.$userItems.eq(-1).after(htmlString);
            } else {
                base.$userItems.eq(position).before(htmlString);
            }

            base.setVars();
        },

        removeItem : function (targetPosition) {
            var base = this,
                position;

            if (base.$elem.children().length === 0) {
                return false;
            }
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1;
            } else {
                position = targetPosition;
            }

            base.unWrap();
            base.$userItems.eq(position).remove();
            base.setVars();
        }

    };

    $.fn.owlCarousel = function (options) {
        return this.each(function () {
            if ($(this).data("owl-init") === true) {
                return false;
            }
            $(this).data("owl-init", true);
            var carousel = Object.create(Carousel);
            carousel.init(options, this);
            $.data(this, "owlCarousel", carousel);
        });
    };

    $.fn.owlCarousel.options = {

        items : 5,
        itemsCustom : false,
        itemsDesktop : [1199, 4],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 2],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
        singleItem : false,
        itemsScaleUp : false,

        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,

        autoPlay : false,
        stopOnHover : false,

        navigation : false,
        navigationText : ["", ""],
        rewindNav : true,
        scrollPerPage : false,

        pagination : true,
        paginationNumbers : false,

        responsive : true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth : window,

        baseClass : "owl-carousel",
        theme : "owl-theme",

        lazyLoad : false,
        lazyFollow : true,
        lazyEffect : "fade",

        autoHeight : false,

        jsonPath : false,
        jsonSuccess : false,

        dragBeforeAnimFinish : true,
        mouseDrag : true,
        touchDrag : true,

        addClassActive : false,
        transitionStyle : false,

        beforeUpdate : false,
        afterUpdate : false,
        beforeInit : false,
        afterInit : false,
        beforeMove : false,
        afterMove : false,
        afterAction : false,
        startDragging : false,
        afterLazyLoad: false
    };
}(jQuery, window, document));

/**
 * Placeholdem - Placeholder Caret Animation
 * v1.0.1 - MIT License
 * http://placeholdem.jackrugile.com - git://github.com/jackrugile/placeholdem.git
 * by Jack Rugile - @jackrugile
 */

function Placeholdem(e){"use strict";!function(){for(var e=0,n=["ms","moz","webkit","o"],a=0;a<n.length&&!window.requestAnimationFrame;++a)window.requestAnimationFrame=window[n[a]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n[a]+"CancelAnimationFrame"]||window[n[a]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n){var a=(new Date).getTime(),i=Math.max(0,16-(a-e)),l=window.setTimeout(function(){n(a+i)},i);return e=a+i,l}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}();var n={};return n.init=function(){if(n.elems=[],e&&e.length)for(var a=0;a<e.length;a++)n.hasPlaceholder(e[a])&&n.elems.push(new n.PlaceholdemElem(e[a]));else e&&n.hasPlaceholder(e)&&n.elems.push(new n.PlaceholdemElem(e))},n.hasPlaceholder=function(e){return"function"==typeof e.hasAttribute&&e.hasAttribute("placeholder")},n.PlaceholdemElem=function(e){var n=this;n.init=function(){n.elem=e,n.placeholder=n.elem.getAttribute("placeholder"),n.elem.removeAttribute("placeholder"),n.rAF=null,n.animating=0,n.elem.value||(n.elem.value=n.placeholder),n.on(n.elem,"focus",n.onFocus),n.on(n.elem,"blur",n.onBlur),n.on(n.elem,"keydown",n.onKeydown)},n.on=function(e,n,a){e.addEventListener?e.addEventListener(n,a):e.attachEvent("on"+n,a)},n.onFocus=function(){(n.animating||n.elem.value===n.placeholder)&&(n.animating=1,window.cancelAnimationFrame(n.rAF),n.deletePlaceholder())},n.onBlur=function(){(n.animating||""===n.elem.value)&&(n.animating=1,window.cancelAnimationFrame(n.rAF),n.restorePlaceholder())},n.onKeydown=function(){n.animating&&(n.animating=0,window.cancelAnimationFrame(n.rAF),n.elem.value="")},n.deletePlaceholder=function(){n.elem.value.length>0?(n.elem.value=n.elem.value.slice(0,-1),n.rAF=window.requestAnimationFrame(n.deletePlaceholder)):n.animating=0},n.restorePlaceholder=function(){n.elem.value.length<n.placeholder.length?(n.elem.value+=n.placeholder[n.elem.value.length],n.rAF=window.requestAnimationFrame(n.restorePlaceholder)):n.animating=0},n.init()},n.init(),n}

/*! http://mths.be/smoothscroll v1.5.2 by @mathias */
(function(a,c){var b=(function(){var d=c(a.documentElement),f=c(a.body),e;if(d.scrollTop()){return d}else{e=f.scrollTop();if(f.scrollTop(e+1).scrollTop()==e){return d}else{return f.scrollTop(e)}}}());c.fn.smoothScroll=function(d){d=~~d||400;return this.find('a[href*="#"]').click(function(f){var g=this.hash,e=c(g);if(location.pathname.replace(/^\//,'')===this.pathname.replace(/^\//,'')&&location.hostname===this.hostname){if(e.length){f.preventDefault();b.stop().animate({scrollTop:e.offset().top},d,function(){location.hash=g})}}}).end()}}(document,jQuery));


/*
 * jQuery pageSlide
 * Version 2.0
 * http://srobbin.com/jquery-pageslide/
 *
 * jQuery Javascript plugin which slides a webpage over to reveal an additional interaction pane.
 *
 * Copyright (c) 2011 Scott Robbin (srobbin.com)
 * Dual licensed under the MIT and GPL licenses.
 */
;
(function(b) {
    function j(e, a) {
        if (0 === e.indexOf("#")) b(e).clone(!0).appendTo(c.empty()).show();
        else {
            if (a) {
                var d = b("<iframe />").attr({
                    src: e,
                    frameborder: 0,
                    hspace: 0
                }).css({
                    width: "100%",
                    height: "100%"
                });
                c.html(d)
            } else c.load(e);
            c.data("localEl", !1)
        }
    }

    function k(b, a) {
        var d = c.outerWidth(!0),
            f = {},
            g = {};
        if (!c.is(":visible") && !h) {
            h = !0;
            switch (b) {
                case "left":
                    c.css({
                        left: "auto",
                        right: "-" + d + "px"
                    });
                    f["margin-left"] = "-=" + d;
                    g.right = "+=" + d;
                    break;
                default:
                    c.css({
                        left: "-" + d + "px",
                        right: "auto"
                    }), f["margin-left"] = "+=" + d, g.left = "+=" + d
            }
            l.animate(f, a);
            c.show().animate(g, a, function() {
                h = !1
            })
        }
    }
    var l = b(".main-content"),
        c = b("#pageslide"),
        h = !1,
        m;
    0 == c.length && (c = b("<div />").attr("id", "pageslide").css("display", "none").appendTo(b("body")));
    b.fn.pageslide = function(e) {
        this.click(function(a) {
            var d = b(this),
                f = b.extend({
                    href: d.attr("href")
                }, e);
            a.preventDefault();
            a.stopPropagation();
            c.is(":visible") && d[0] == m ? b.pageslide.close() : (b.pageslide(f), m = d[0]);

            var winWid = $(window).width();
            $('.main-content').css({ width:winWid});
            $('body').toggleClass('menuOpen');
            $('#pageslide').css('overflow', 'auto' );
        })
    };
    b.fn.pageslide.defaults = {
        speed: 200,
        direction: "right",
        modal: !1,
        iframe: !0,
        href: null
    };
    b.pageslide = function(e) {
        var a = b.extend({}, b.fn.pageslide.defaults, e);
        c.is(":visible") && c.data("direction") != a.direction ? b.pageslide.close(function() {
            j(a.href, a.iframe);
            k(a.direction, a.speed);
        }) : (j(a.href, a.iframe), c.is(":hidden") && k(a.direction, a.speed));
        c.data(a);
    };
    b.pageslide.close = function(c) {
        var a = b("#pageslide"),
            d = a.outerWidth(!0),
            f = a.data("speed"),
            g = {},
            i = {};
        if (!a.is(":hidden") && !h) {
            h = !0;
            switch (a.data("direction")) {
                case "left":
                    g["margin-left"] = "+=" + d;
                    i.right = "-=" + d;
                    break;
                default:
                    g["margin-left"] = "-=" + d, i.left = "-=" + d
            }
            a.animate(i, f);
            l.animate(g, f, function() {
                a.hide();
                h = !1;
                "undefined" != typeof c && c()
            });
        };
    };
    c.click(function(b) {
        //alert('hi');
        b.stopPropagation();
    });
    b(document).bind("click keyup", function(e) {
        "keyup" == e.type && 27 != e.keyCode || c.is(":visible") && !c.data("modal") && b.pageslide.close()
    })
})(jQuery);

// Easy Responsive Tabs Plugin
// Author: Samson.Onna <Email : samson3d@gmail.com>

(function ($) {
    $.fn.extend({
        easyResponsiveTabs: function (options) {
            //Set the default values, use comma to separate the settings, example:
            var defaults = {
                type: 'default', //default, vertical, accordion;
                width: 'auto',
                fit: true,
                closed: false,
                tabidentify: '',
                activetab_bg: 'white',
                inactive_bg: '#F5F5F5',
                active_border_color: '#c1c1c1',
                active_content_border_color: '#c1c1c1',
                activate: function () {
                }
            }
            //Variables
            var options = $.extend(defaults, options);
            var opt = options, jtype = opt.type, jfit = opt.fit, jwidth = opt.width, vtabs = 'vertical', accord = 'accordion';
            var hash = window.location.hash;
            var historyApi = !!(window.history && history.replaceState);

            //Events
            $(this).bind('tabactivate', function (e, currentTab) {
                if (typeof options.activate === 'function') {
                    options.activate.call(currentTab, e)
                }
            });

            //Main function
            this.each(function () {
                var $respTabs = $(this);
                var $respTabsList = $respTabs.find('ul.resp-tabs-list.' + options.tabidentify);
                var respTabsId = $respTabs.attr('id');
                $respTabs.find('ul.resp-tabs-list.' + options.tabidentify + ' li').addClass('resp-tab-item').addClass(options.tabidentify);
                $respTabs.css({
                    'display': 'block',
                    'width': jwidth
                });

                if (options.type == 'vertical')
                    $respTabsList.css('margin-top', '3px');

                $respTabs.find('.resp-tabs-container.' + options.tabidentify).css('border-color', options.active_content_border_color);
                $respTabs.find('.resp-tabs-container.' + options.tabidentify + ' > div').addClass('resp-tab-content').addClass(options.tabidentify);
                jtab_options();
                //Properties Function
                function jtab_options() {
                    if (jtype == vtabs) {
                        $respTabs.addClass('resp-vtabs').addClass(options.tabidentify);
                    }
                    if (jfit == true) {
                        $respTabs.css({ width: '100%', margin: '0px' });
                    }
                    if (jtype == accord) {
                        $respTabs.addClass('resp-easy-accordion').addClass(options.tabidentify);
                        $respTabs.find('.resp-tabs-list').css('display', 'none');
                    }
                }


                //Assigning the h2 markup to accordion title
                var $tabItemh2;
                $respTabs.find('.resp-tab-content.' + options.tabidentify).before("<h2 class='resp-accordion " + options.tabidentify + "' role='tab'><span class='resp-arrow'></span></h2>");

                $respTabs.find('.resp-tab-content.' + options.tabidentify).prev("h2").css({
                    'background-color': options.inactive_bg,
                    'border-color': options.active_border_color
                });

                var itemCount = 0;
                $respTabs.find('.resp-accordion').each(function () {
                    $tabItemh2 = $(this);
                    var $tabItem = $respTabs.find('.resp-tab-item:eq(' + itemCount + ')');
                    var $accItem = $respTabs.find('.resp-accordion:eq(' + itemCount + ')');
                    $accItem.append($tabItem.html());
                    $accItem.data($tabItem.data());
                    $tabItemh2.attr('aria-controls', options.tabidentify + '_tab_item-' + (itemCount));
                    itemCount++;
                });

                //Assigning the 'aria-controls' to Tab items
                var count = 0,
                    $tabContent;
                $respTabs.find('.resp-tab-item').each(function () {
                    $tabItem = $(this);
                    $tabItem.attr('aria-controls', options.tabidentify + '_tab_item-' + (count));
                    $tabItem.attr('role', 'tab');
                    $tabItem.css({
                        'background-color': options.inactive_bg,
                        'border-color': 'none'
                    });

                    //Assigning the 'aria-labelledby' attr to tab-content
                    var tabcount = 0;
                    $respTabs.find('.resp-tab-content.' + options.tabidentify).each(function () {
                        $tabContent = $(this);
                        $tabContent.attr('aria-labelledby', options.tabidentify + '_tab_item-' + (tabcount)).css({
                            'border-color': options.active_border_color
                        });
                        tabcount++;
                    });
                    count++;
                });

                // Show correct content area
                var tabNum = 0;
                if (hash != '') {
                    var matches = hash.match(new RegExp(respTabsId + "([0-9]+)"));
                    if (matches !== null && matches.length === 2) {
                        tabNum = parseInt(matches[1], 10) - 1;
                        if (tabNum > count) {
                            tabNum = 0;
                        }
                    }
                }

                //Active correct tab
                $($respTabs.find('.resp-tab-item.' + options.tabidentify)[tabNum]).addClass('resp-tab-active').css({
                    'background-color': options.activetab_bg,
                    'border-color': options.active_border_color
                });

                //keep closed if option = 'closed' or option is 'accordion' and the element is in accordion mode
                if (options.closed !== true && !(options.closed === 'accordion' && !$respTabsList.is(':visible')) && !(options.closed === 'tabs' && $respTabsList.is(':visible'))) {
                    $($respTabs.find('.resp-accordion.' + options.tabidentify)[tabNum]).addClass('resp-tab-active').css({
                        'background-color': options.activetab_bg + ' !important',
                        'border-color': options.active_border_color,
                        'background': 'none'
                    });


                    $($respTabs.find('.resp-tab-content.' + options.tabidentify)[tabNum]).addClass('resp-tab-content-active').addClass(options.tabidentify).attr('style', 'display:block');
                }
                //assign proper classes for when tabs mode is activated before making a selection in accordion mode
                else {
                    // $($respTabs.find('.resp-tab-content.' + options.tabidentify)[tabNum]).addClass('resp-accordion-closed'); //removed resp-tab-content-active
                }

                //Tab Click action function
                $respTabs.find("[role=tab]").each(function () {

                    var $currentTab = $(this);
                    $currentTab.click(function () {

                        var $currentTab = $(this);
                        var $tabAria = $currentTab.attr('aria-controls');

                        if ($currentTab.hasClass('resp-accordion') && $currentTab.hasClass('resp-tab-active')) {
                            $respTabs.find('.resp-tab-content-active.' + options.tabidentify).slideUp('', function () {
                                $(this).addClass('resp-accordion-closed');
                            });
                            $currentTab.removeClass('resp-tab-active').css({
                                'background-color': options.inactive_bg,
                                'border-color': 'none'
                            });
                            return false;
                        }
                        if (!$currentTab.hasClass('resp-tab-active') && $currentTab.hasClass('resp-accordion')) {
                            $respTabs.find('.resp-tab-active.' + options.tabidentify).removeClass('resp-tab-active').css({
                                'background-color': options.inactive_bg,
                                'border-color': 'none'
                            });
                            $respTabs.find('.resp-tab-content-active.' + options.tabidentify).slideUp().removeClass('resp-tab-content-active resp-accordion-closed');
                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active').css({
                                'background-color': options.activetab_bg,
                                'border-color': options.active_border_color
                            });

                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + '].' + options.tabidentify).slideDown().addClass('resp-tab-content-active');
                        } else {
                            //console.log('here');
                            $respTabs.find('.resp-tab-active.' + options.tabidentify).removeClass('resp-tab-active').css({
                                'background-color': options.inactive_bg,
                                'border-color': 'none'
                            });


                            $respTabs.find('.resp-tab-content-active.' + options.tabidentify).removeAttr('style').removeClass('resp-tab-content-active').removeClass('resp-accordion-closed');


                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active').css({
                                'background-color': options.activetab_bg,
                                'border-color': options.active_border_color
                            });


                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + '].' + options.tabidentify).addClass('resp-tab-content-active').attr('style', 'display:block');
                        }
                        //Trigger tab activation event
                        $currentTab.trigger('tabactivate', $currentTab);

                        //Update Browser History
                        if (historyApi) {
                            /*var currentHash = window.location.hash;
                             var tabAriaParts = $tabAria.split('tab_item-');
                             // var newHash = respTabsId + (parseInt($tabAria.substring(9), 10) + 1).toString();
                             var newHash = respTabsId + (parseInt(tabAriaParts[1], 10) + 1).toString();
                             if (currentHash != "") {
                             var re = new RegExp(respTabsId + "[0-9]+");
                             if (currentHash.match(re) != null) {
                             newHash = currentHash.replace(re, newHash);
                             }
                             else {
                             newHash = currentHash + "|" + newHash;
                             }
                             }
                             else {
                             newHash = '#' + newHash;
                             }

                             history.replaceState(null, null, newHash);
                             */
                        }
                    });

                });

                //Window resize function
                $(window).resize(function () {
                    $respTabs.find('.resp-accordion-closed').removeAttr('style');
                });
            });
        }
    });
})(jQuery);


/*! Magnific Popup - v0.9.9 - 2013-12-27
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2013 Dmitry Semenov; */
(function(e){var t,n,i,o,r,a,s,l="Close",c="BeforeClose",d="AfterClose",u="BeforeAppend",p="MarkupParse",f="Open",m="Change",g="mfp",h="."+g,v="mfp-ready",C="mfp-removing",y="mfp-prevent-close",w=function(){},b=!!window.jQuery,I=e(window),x=function(e,n){t.ev.on(g+e+h,n)},k=function(t,n,i,o){var r=document.createElement("div");return r.className="mfp-"+t,i&&(r.innerHTML=i),o?n&&n.appendChild(r):(r=e(r),n&&r.appendTo(n)),r},T=function(n,i){t.ev.triggerHandler(g+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},E=function(n){return n===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=n),t.currTemplate.closeBtn},_=function(){e.magnificPopup.instance||(t=new w,t.init(),e.magnificPopup.instance=t)},S=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};w.prototype={constructor:w,init:function(){var n=navigator.appVersion;t.isIE7=-1!==n.indexOf("MSIE 7."),t.isIE8=-1!==n.indexOf("MSIE 8."),t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=S(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),o=e(document),t.popupsCache={}},open:function(n){i||(i=e(document.body));var r;if(n.isObj===!1){t.items=n.items.toArray(),t.index=0;var s,l=n.items;for(r=0;l.length>r;r++)if(s=l[r],s.parsed&&(s=s.el[0]),s===n.el[0]){t.index=r;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(t.isOpen)return t.updateItemHTML(),void 0;t.types=[],a="",t.ev=n.mainEl&&n.mainEl.length?n.mainEl.eq(0):o,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=k("bg").on("click"+h,function(){t.close()}),t.wrap=k("wrap").attr("tabindex",-1).on("click"+h,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=k("container",t.wrap)),t.contentContainer=k("content"),t.st.preloader&&(t.preloader=k("preloader",t.container,t.st.tLoading));var c=e.magnificPopup.modules;for(r=0;c.length>r;r++){var d=c[r];d=d.charAt(0).toUpperCase()+d.slice(1),t["init"+d].call(t)}T("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(x(p,function(e,t,n,i){n.close_replaceWith=E(i.type)}),a+=" mfp-close-btn-in"):t.wrap.append(E())),t.st.alignTop&&(a+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:I.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:o.height(),position:"absolute"}),t.st.enableEscapeKey&&o.on("keyup"+h,function(e){27===e.keyCode&&t.close()}),I.on("resize"+h,function(){t.updateSize()}),t.st.closeOnContentClick||(a+=" mfp-auto-cursor"),a&&t.wrap.addClass(a);var u=t.wH=I.height(),m={};if(t.fixedContentPos&&t._hasScrollBar(u)){var g=t._getScrollbarSize();g&&(m.marginRight=g)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):m.overflow="hidden");var C=t.st.mainClass;return t.isIE7&&(C+=" mfp-ie7"),C&&t._addClassToMFP(C),t.updateItemHTML(),T("BuildControls"),e("html").css(m),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||i),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(v),t._setFocus()):t.bgOverlay.addClass(v),o.on("focusin"+h,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(u),T(f),n},close:function(){t.isOpen&&(T(c),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(C),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){T(l);var n=C+" "+v+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var i={marginRight:""};t.isIE7?e("body, html").css("overflow",""):i.overflow="",e("html").css(i)}o.off("keyup"+h+" focusin"+h),t.ev.off(h),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,T(d)},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||I.height();t.fixedContentPos||t.wrap.css("height",t.wH),T("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(T("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var o=t.st[i]?t.st[i].markup:!1;T("FirstMarkupParse",o),t.currTemplate[i]=o?e(o):!0}r&&r!==n.type&&t.container.removeClass("mfp-"+r+"-holder");var a=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(a,i),n.preloaded=!0,T(m,n),r=n.type,t.container.prepend(t.contentContainer),T("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[n]===!0?t.content.find(".mfp-close").length||t.content.append(E()):t.content=e:t.content="",T(u),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,o=t.items[n];if(o.tagName?o={el:e(o)}:(i=o.type,o={data:o,src:o.src}),o.el){for(var r=t.types,a=0;r.length>a;a++)if(o.el.hasClass("mfp-"+r[a])){i=r[a];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=i||t.st.type||"inline",o.index=n,o.parsed=!0,t.items[n]=o,T("ElementParse",o),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var o="click.magnificPopup";n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){var r=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(r||2!==n.which&&!n.ctrlKey&&!n.metaKey){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(a>I.width())return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading);var o={status:e,text:i};T("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(y)){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(i&&o)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?o.height():document.body.scrollHeight)>(e||I.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){return n.target===t.wrap[0]||e.contains(t.wrap[0],n.target)?void 0:(t._setFocus(),!1)},_parseMarkup:function(t,n,i){var o;i.data&&(n=e.extend(i.data,n)),T(p,[t,n,i]),e.each(n,function(e,n){if(void 0===n||n===!1)return!0;if(o=e.split("_"),o.length>1){var i=t.find(h+"-"+o[0]);if(i.length>0){var r=o[1];"replaceWith"===r?i[0]!==n[0]&&i.replaceWith(n):"img"===r?i.is("img")?i.attr("src",n):i.replaceWith('<img src="'+n+'" class="'+i.attr("class")+'" />'):i.attr(o[1],n)}}else t.find(h+"-"+e).html(n)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.id="mfp-sbm",e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:w.prototype,modules:[],open:function(t,n){return _(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close"></button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(n){_();var i=e(this);if("string"==typeof n)if("open"===n){var o,r=b?i.data("magnificPopup"):i[0].magnificPopup,a=parseInt(arguments[1],10)||0;r.items?o=r.items[a]:(o=i,r.delegate&&(o=o.find(r.delegate)),o=o.eq(a)),t._openClick({mfpEl:o},i,r)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),b?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n);return i};var P,O,z,M="inline",B=function(){z&&(O.after(z.addClass(P)).detach(),z=null)};e.magnificPopup.registerModule(M,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(M),x(l+"."+M,function(){B()})},getInline:function(n,i){if(B(),n.src){var o=t.st.inline,r=e(n.src);if(r.length){var a=r[0].parentNode;a&&a.tagName&&(O||(P=o.hiddenClass,O=k(P),P="mfp-"+P),z=r.after(O).detach().removeClass(P)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),r=e("<div>");return n.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}});var F,H="ajax",L=function(){F&&i.removeClass(F)},A=function(){L(),t.req&&t.req.abort()};e.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(H),F=t.st.ajax.cursor,x(l+"."+H,A),x("BeforeChange."+H,A)},getAjax:function(n){F&&i.addClass(F),t.updateStatus("loading");var o=e.extend({url:n.src,success:function(i,o,r){var a={data:i,xhr:r};T("ParseAjax",a),t.appendContent(e(a.data),H),n.finished=!0,L(),t._setFocus(),setTimeout(function(){t.wrap.addClass(v)},16),t.updateStatus("ready"),T("AjaxContentAdded")},error:function(){L(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings);return t.req=e.ajax(o),""}}});var j,N=function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var i=t.st.image.titleSrc;if(i){if(e.isFunction(i))return i.call(t,n);if(n.el)return n.el.attr(i)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=t.st.image,n=".image";t.types.push("image"),x(f+n,function(){"image"===t.currItem.type&&e.cursor&&i.addClass(e.cursor)}),x(l+n,function(){e.cursor&&i.removeClass(e.cursor),I.off("resize"+h)}),x("Resize"+n,t.resizeImage),t.isLowIE&&x("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,j&&clearInterval(j),e.isCheckingImgSize=!1,T("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(r){j&&clearInterval(j),j=setInterval(function(){return i.naturalWidth>0?(t._onImageHasSize(e),void 0):(n>200&&clearInterval(j),n++,3===n?o(10):40===n?o(50):100===n&&o(500),void 0)},r)};o(1)},getImage:function(n,i){var o=0,r=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,T("ImageLoadComplete")):(o++,200>o?setTimeout(r,100):a()))},a=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,l=i.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",n.img=e(c).on("load.mfploader",r).on("error.mfploader",a),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),c=n.img[0],c.naturalWidth>0?n.hasSize=!0:c.width||(n.hasSize=!1)}return t._parseMarkup(i,{title:N(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(j&&clearInterval(j),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}});var W,R=function(){return void 0===W&&(W=void 0!==document.createElement("p").style.MozTransform),W};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom";if(n.enabled&&t.supportsTransition){var o,r,a=n.duration,s=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,t.css(o),t},d=function(){t.content.css("visibility","visible")};x("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),e=t._getItemToZoom(),!e)return d(),void 0;r=s(e),r.css(t._getOffset()),t.wrap.append(r),o=setTimeout(function(){r.css(t._getOffset(!0)),o=setTimeout(function(){d(),setTimeout(function(){r.remove(),e=r=null,T("ZoomAnimationEnded")},16)},a)},16)}}),x(c+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=a,!e){if(e=t._getItemToZoom(),!e)return;r=s(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),x(l+i,function(){t._allowZoom()&&(d(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return t.currItem.hasSize?t.currItem.img:!1},_getOffset:function(n){var i;i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var o=i.offset(),r=parseInt(i.css("padding-top"),10),a=parseInt(i.css("padding-bottom"),10);o.top-=e(window).scrollTop()-r;var s={width:i.width(),height:(b?i.innerHeight():i[0].offsetHeight)-a-r};return R()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var Z="iframe",q="//about:blank",D=function(e){if(t.currTemplate[Z]){var n=t.currTemplate[Z].find("iframe");n.length&&(e||(n[0].src=q),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(Z,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(Z),x("BeforeChange",function(e,t,n){t!==n&&(t===Z?D():n===Z&&D(!0))}),x(l+"."+Z,function(){D()})},getIframe:function(n,i){var o=n.src,r=t.st.iframe;e.each(r.patterns,function(){return o.indexOf(this.index)>-1?(this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1):void 0});var a={};return r.srcAction&&(a[r.srcAction]=o),t._parseMarkup(i,a,n),t.updateStatus("ready"),i}}});var K=function(e){var n=t.items.length;return e>n-1?e-n:0>e?n+e:e},Y=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,i=".mfp-gallery",r=Boolean(e.fn.mfpFastClick);return t.direction=!0,n&&n.enabled?(a+=" mfp-gallery",x(f+i,function(){n.navigateByImgClick&&t.wrap.on("click"+i,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),o.on("keydown"+i,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),x("UpdateStatus"+i,function(e,n){n.text&&(n.text=Y(n.text,t.currItem.index,t.items.length))}),x(p+i,function(e,i,o,r){var a=t.items.length;o.counter=a>1?Y(n.tCounter,r.index,a):""}),x("BuildControls"+i,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(y),a=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(y),s=r?"mfpFastClick":"click";o[s](function(){t.prev()}),a[s](function(){t.next()}),t.isIE7&&(k("b",o[0],!1,!0),k("a",o[0],!1,!0),k("b",a[0],!1,!0),k("a",a[0],!1,!0)),t.container.append(o.add(a))}}),x(m+i,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),x(l+i,function(){o.off(i),t.wrap.off("click"+i),t.arrowLeft&&r&&t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),t.arrowRight=t.arrowLeft=null}),void 0):!1},next:function(){t.direction=!0,t.index=K(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=K(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length);for(e=1;(t.direction?o:i)>=e;e++)t._preloadItem(t.index+e);for(e=1;(t.direction?i:o)>=e;e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=K(n),!t.items[n].preloaded){var i=t.items[n];i.parsed||(i=t.parseEl(n)),T("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",function(){i.hasSize=!0}).on("error.mfploader",function(){i.hasSize=!0,i.loadError=!0,T("LazyLoadError",i)}).attr("src",i.src)),i.preloaded=!0}}}});var U="retina";e.magnificPopup.registerModule(U,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;n=isNaN(n)?n():n,n>1&&(x("ImageHasSize."+U,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),x("ElementParse."+U,function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),function(){var t=1e3,n="ontouchstart"in window,i=function(){I.off("touchmove"+r+" touchend"+r)},o="mfpFastClick",r="."+o;e.fn.mfpFastClick=function(o){return e(this).each(function(){var a,s=e(this);if(n){var l,c,d,u,p,f;s.on("touchstart"+r,function(e){u=!1,f=1,p=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],c=p.clientX,d=p.clientY,I.on("touchmove"+r,function(e){p=e.originalEvent?e.originalEvent.touches:e.touches,f=p.length,p=p[0],(Math.abs(p.clientX-c)>10||Math.abs(p.clientY-d)>10)&&(u=!0,i())}).on("touchend"+r,function(e){i(),u||f>1||(a=!0,e.preventDefault(),clearTimeout(l),l=setTimeout(function(){a=!1},t),o())})})}s.on("click"+r,function(){a||o()})})},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+r+" click"+r),n&&I.off("touchmove"+r+" touchend"+r)}}(),_()})(window.jQuery||window.Zepto);


/* Type Rendering Mix JS - (c) 2013-2014 Tim Brown, Bram Stein. License: new BSD */(function(){'use strict';var b=window;function c(a){var f=d,g;a:{g=f.className.split(/\s+/);for(var n=0,H=g.length;n<H;n+=1)if(g[n]===a){g=!0;break a}g=!1}g||(f.className+=(""===f.className?"":" ")+a)};function e(a,f,g){this.b=null!=a?a:null;this.c=null!=f?f:null;this.g=null!=g?g:null}var h=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;e.prototype.compare=function(a){return this.b>a.b||this.b===a.b&&this.c>a.c||this.b===a.b&&this.c===a.c&&this.g>a.g?1:this.b<a.b||this.b===a.b&&this.c<a.c||this.b===a.b&&this.c===a.c&&this.g<a.g?-1:0};function k(a,f){return 0===a.compare(f)||1===a.compare(f)}
    function l(){var a=h.exec(m[1]),f=null,g=null,n=null;a&&(null!==a[1]&&a[1]&&(f=parseInt(a[1],10)),null!==a[2]&&a[2]&&(g=parseInt(a[2],10)),null!==a[3]&&a[3]&&(n=parseInt(a[3],10)));return new e(f,g,n)};function p(){var a=q;return 3===a.a||7===a.a||6===a.a||9===a.a||8===a.a||5===a.a?"grayscale":1===a.a&&k(a.d,new e(6,2))&&1===a.e?"grayscale":"unknown"};var q,r=b.navigator.userAgent,s=0,t=new e,u=0,v=new e,m=null;if(m=/(?:iPod|iPad|iPhone).*? OS ([\d_]+)/.exec(r))u=3,v=l();else if(m=/(?:BB\d{2}|BlackBerry).*?Version\/([^\s]*)/.exec(r))u=9,v=l();else if(m=/Android ([^;)]+)|Android/.exec(r))u=5,v=l();else if(m=/Windows Phone(?: OS)? ([^;)]+)/.exec(r))u=8,v=l();else if(m=/Linux ([^;)]+)|Linux/.exec(r))u=4,v=l();else if(m=/OS X ([^;)]+)/.exec(r))u=2,v=l();else if(m=/Windows NT ([^;)]+)/.exec(r))u=1,v=l();else if(m=/CrOS ([^;)]+)/.exec(r))u=6,v=l();
    if(m=/MSIE ([\d\w\.]+)/.exec(r))s=1,t=l();else if(m=/Trident.*rv:([\d\w\.]+)/.exec(r))s=1,t=l();else if(m=/OPR\/([\d.]+)/.exec(r))s=4,t=l();else if(m=/Opera Mini.*Version\/([\d\.]+)/.exec(r))s=4,t=l();else if(m=/Opera(?: |.*Version\/|\/)([\d\.]+)/.exec(r))s=4,t=l();else if(m=/Firefox\/([\d\w\.]+)|Firefox/.exec(r))s=3,t=l();else if(m=/(?:Chrome|CrMo|CriOS)\/([\d\.]+)/.exec(r))s=2,t=l();else if(m=/Silk\/([\d\._]+)/.exec(r))s=7,t=l();else if(5===u||9===u)s=6;else if(m=/Version\/([\d\.\w]+).*Safari/.exec(r))s=
        5,t=l();q=new function(a,f,g,n){this.e=a;this.f=f;this.a=g;this.d=n}(s,t,u,v);var w,x;
    if(1===q.a){var y;if(2===q.e)y=k(q.f,new e(37))&&k(q.d,new e(6,1))?"directwrite":"gdi";else{var z;if(4===q.e)z=k(q.f,new e(24))&&k(q.d,new e(6,1))?"directwrite":"gdi";else{var A;if(-1===q.d.compare(new e(6,0)))A="gdi";else{var B;if(k(q.d,new e(6,0))){var C;if(C=1===q.e){var D=q.f,E=new e(8,0);C=0===D.compare(E)||-1===D.compare(E)}B=C?"gdi":"directwrite"}else B="unknown";A=B}z=A}y=z}x=y}else x=8===q.a?"directwrite":2===q.a||3===q.a?"coretext":5===q.a||4===q.a||6===q.a||7===q.a||9===q.a?"freetype":
        "unknown";w=x;var F=p(),G,I=p();G="unknown"!==I?I:2===q.a||4===q.a?"subpixel":1===q.a?k(q.d,new e(6,0))?"subpixel":1===q.e?k(q.f,new e(7,0))?"subpixel":"grayscale":"subpixel":"unknown";var d=b.document.documentElement;c("tr-"+w);"unknown"===F&&"unknown"!==G&&(F+="-"+G);c("tr-aa-"+F);}());



/*!
 * bootstrap-select v1.5.4
 * http://silviomoreto.github.io/bootstrap-select/
 *
 * Copyright 2013 bootstrap-select
 * Licensed under the MIT license
 */

!function($) {

    'use strict';

    $.expr[':'].icontains = function(obj, index, meta) {
        return $(obj).text().toUpperCase().indexOf(meta[3].toUpperCase()) >= 0;
    };

    var Selectpicker = function(element, options, e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.$element = $(element);
        this.$newElement = null;
        this.$button = null;
        this.$menu = null;
        this.$lis = null;

        //Merge defaults, options and data-attributes to make our options
        this.options = $.extend({}, $.fn.selectpicker.defaults, this.$element.data(), typeof options == 'object' && options);

        //If we have no title yet, check the attribute 'title' (this is missed by jq as its not a data-attribute
        if (this.options.title === null) {
            this.options.title = this.$element.attr('title');
        }

        //Expose public methods
        this.val = Selectpicker.prototype.val;
        this.render = Selectpicker.prototype.render;
        this.refresh = Selectpicker.prototype.refresh;
        this.setStyle = Selectpicker.prototype.setStyle;
        this.selectAll = Selectpicker.prototype.selectAll;
        this.deselectAll = Selectpicker.prototype.deselectAll;
        this.init();
    };

    Selectpicker.prototype = {

        constructor: Selectpicker,

        init: function() {
            var that = this,
                id = this.$element.attr('id');

            this.$element.hide();
            this.multiple = this.$element.prop('multiple');
            this.autofocus = this.$element.prop('autofocus');
            this.$newElement = this.createView();
            this.$element.after(this.$newElement);
            this.$menu = this.$newElement.find('> .dropdown-menu');
            this.$button = this.$newElement.find('> button');
            this.$searchbox = this.$newElement.find('input');

            if (id !== undefined) {
                this.$button.attr('data-id', id);
                $('label[for="' + id + '"]').click(function(e) {
                    e.preventDefault();
                    that.$button.focus();
                });
            }

            this.checkDisabled();
            this.clickListener();
            if (this.options.liveSearch) this.liveSearchListener();
            this.render();
            this.liHeight();
            this.setStyle();
            this.setWidth();
            if (this.options.container) this.selectPosition();
            this.$menu.data('this', this);
            this.$newElement.data('this', this);
        },

        createDropdown: function() {
            //If we are multiple, then add the show-tick class by default
            var multiple = this.multiple ? ' show-tick' : '';
            var inputGroup = this.$element.parent().hasClass('input-group') ? ' input-group-btn' : '';
            var autofocus = this.autofocus ? ' autofocus' : '';
            var header = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + '</div>' : '';
            var searchbox = this.options.liveSearch ? '<div class="bootstrap-select-searchbox"><input type="text" class="input-block-level form-control" autocomplete="off" /></div>' : '';
            var actionsbox = this.options.actionsBox ? '<div class="bs-actionsbox">' +
            '<div class="btn-group btn-block">' +
            '<button class="actions-btn bs-select-all btn btn-sm btn-default">' +
            'Select All' +
            '</button>' +
            '<button class="actions-btn bs-deselect-all btn btn-sm btn-default">' +
            'Deselect All' +
            '</button>' +
            '</div>' +
            '</div>' : '';
            var drop =
                '<div class="btn-group bootstrap-select' + multiple + inputGroup + '">' +
                '<button type="button" class="btn dropdown-toggle selectpicker" data-toggle="dropdown"'+ autofocus +'>' +
                '<span class="filter-option pull-left"></span>&nbsp;' +
                '<span class="caret"></span>' +
                '</button>' +
                '<div class="dropdown-menu open">' +
                header +
                searchbox +
                actionsbox +
                '<ul class="dropdown-menu inner selectpicker" role="menu">' +
                '</ul>' +
                '</div>' +
                '</div>';

            return $(drop);
        },

        createView: function() {
            var $drop = this.createDropdown();
            var $li = this.createLi();
            $drop.find('ul').append($li);
            return $drop;
        },

        reloadLi: function() {
            //Remove all children.
            this.destroyLi();
            //Re build
            var $li = this.createLi();
            this.$menu.find('ul').append( $li );
        },

        destroyLi: function() {
            this.$menu.find('li').remove();
        },

        createLi: function() {
            var that = this,
                _liA = [],
                _liHtml = '';

            this.$element.find('option').each(function() {
                var $this = $(this);

                //Get the class and text for the option
                var optionClass = $this.attr('class') || '';
                var inline = $this.attr('style') || '';
                var text =  $this.data('content') ? $this.data('content') : $this.html();
                var subtext = $this.data('subtext') !== undefined ? '<small class="muted text-muted">' + $this.data('subtext') + '</small>' : '';
                var icon = $this.data('icon') !== undefined ? '<i class="' + that.options.iconBase + ' ' + $this.data('icon') + '"></i> ' : '';
                if (icon !== '' && ($this.is(':disabled') || $this.parent().is(':disabled'))) {
                    icon = '<span>'+icon+'</span>';
                }

                if (!$this.data('content')) {
                    //Prepend any icon and append any subtext to the main text.
                    text =  '<span class="text">' + text + subtext + icon +'</span>';
                }

                if (that.options.hideDisabled && ($this.is(':disabled') || $this.parent().is(':disabled'))) {
                    _liA.push('<a style="min-height: 0; padding: 0"></a>');
                } else if ($this.parent().is('optgroup') && $this.data('divider') !== true) {
                    if ($this.index() === 0) {
                        //Get the opt group label
                        var label = $this.parent().attr('label');
                        var labelSubtext = $this.parent().data('subtext') !== undefined ? '<small class="muted text-muted">'+$this.parent().data('subtext')+'</small>' : '';
                        var labelIcon = $this.parent().data('icon') ? '<i class="'+$this.parent().data('icon')+'"></i> ' : '';
                        label = labelIcon + '<span class="text">' + label + labelSubtext + '</span>';

                        if ($this[0].index !== 0) {
                            _liA.push(
                                '<div class="div-contain"><div class="divider"></div></div>'+
                                '<dt>'+label+'</dt>'+
                                that.createA(text, 'opt ' + optionClass, inline )
                            );
                        } else {
                            _liA.push(
                                '<dt>'+label+'</dt>'+
                                that.createA(text, 'opt ' + optionClass, inline ));
                        }
                    } else {
                        _liA.push(that.createA(text, 'opt ' + optionClass, inline ));
                    }
                } else if ($this.data('divider') === true) {
                    _liA.push('<div class="div-contain"><div class="divider"></div></div>');
                } else if ($(this).data('hidden') === true) {
                    _liA.push('<a></a>');
                } else {
                    _liA.push(that.createA(text, optionClass, inline ));
                }
            });

            $.each(_liA, function(i, item) {
                var hide = item === '<a></a>' ? 'class="hide is-hidden"' : '';
                _liHtml += '<li rel="' + i + '"' + hide + '>' + item + '</li>';
            });

            //If we are not multiple, and we dont have a selected item, and we dont have a title, select the first element so something is set in the button
            if (!this.multiple && this.$element.find('option:selected').length===0 && !this.options.title) {
                this.$element.find('option').eq(0).prop('selected', true).attr('selected', 'selected');
            }

            return $(_liHtml);
        },

        createA: function(text, classes, inline) {
            return '<a tabindex="0" class="'+classes+'" style="'+inline+'">' +
                text +
                '<i class="' + this.options.iconBase + ' ' + this.options.tickIcon + ' fa-ok check-mark"></i>' +
                '</a>';
        },

        render: function(updateLi) {
            var that = this;

            //Update the LI to match the SELECT
            if (updateLi !== false) {
                this.$element.find('option').each(function(index) {
                    that.setDisabled(index, $(this).is(':disabled') || $(this).parent().is(':disabled') );
                    that.setSelected(index, $(this).is(':selected') );
                });
            }

            this.tabIndex();

            var selectedItems = this.$element.find('option:selected').map(function() {
                var $this = $(this);
                var icon = $this.data('icon') && that.options.showIcon ? '<i class="' + that.options.iconBase + ' ' + $this.data('icon') + '"></i> ' : '';
                var subtext;
                if (that.options.showSubtext && $this.attr('data-subtext') && !that.multiple) {
                    subtext = ' <small class="muted text-muted">'+$this.data('subtext') +'</small>';
                } else {
                    subtext = '';
                }
                if ($this.data('content') && that.options.showContent) {
                    return $this.data('content');
                } else if ($this.attr('title') !== undefined) {
                    return $this.attr('title');
                } else {
                    return  $this.html() + subtext + icon;
                }
            }).toArray();

            //Fixes issue in IE10 occurring when no default option is selected and at least one option is disabled
            //Convert all the values into a comma delimited string
            var title = !this.multiple ? selectedItems[0] : selectedItems.join(this.options.multipleSeparator);

            //If this is multi select, and the selectText type is count, the show 1 of 2 selected etc..
            if (this.multiple && this.options.selectedTextFormat.indexOf('count') > -1) {
                var max = this.options.selectedTextFormat.split('>');
                var notDisabled = this.options.hideDisabled ? ':not([disabled])' : '';
                if ( (max.length>1 && selectedItems.length > max[1]) || (max.length==1 && selectedItems.length>=2)) {
                    title = this.options.countSelectedText.replace('{0}', selectedItems.length).replace('{1}', this.$element.find('option:not([data-divider="true"]):not([data-hidden="true"])'+notDisabled).length);
                }
            }

            this.options.title = this.$element.attr('title');

            //If we dont have a title, then use the default, or if nothing is set at all, use the not selected text
            if (!title) {
                title = this.options.title !== undefined ? this.options.title : this.options.noneSelectedText;
            }

            this.$button.attr('title', $.trim($("<div/>").html(title).text()).replace(/\s\s+/g, ' '));
            this.$newElement.find('.filter-option').html(title);
        },

        setStyle: function(style, status) {
            if (this.$element.attr('class')) {
                this.$newElement.addClass(this.$element.attr('class').replace(/selectpicker|mobile-device|validate\[.*\]/gi, ''));
            }

            var buttonClass = style ? style : this.options.style;

            if (status == 'add') {
                this.$button.addClass(buttonClass);
            } else if (status == 'remove') {
                this.$button.removeClass(buttonClass);
            } else {
                this.$button.removeClass(this.options.style);
                this.$button.addClass(buttonClass);
            }
        },

        liHeight: function() {
            if (this.options.size === false) return;

            var $selectClone = this.$menu.parent().clone().find('> .dropdown-toggle').prop('autofocus', false).end().appendTo('body'),
                $menuClone = $selectClone.addClass('open').find('> .dropdown-menu'),
                liHeight = $menuClone.find('li > a').outerHeight(),
                headerHeight = this.options.header ? $menuClone.find('.popover-title').outerHeight() : 0,
                searchHeight = this.options.liveSearch ? $menuClone.find('.bootstrap-select-searchbox').outerHeight() : 0,
                actionsHeight = this.options.actionsBox ? $menuClone.find('.bs-actionsbox').outerHeight() : 0;

            $selectClone.remove();

            this.$newElement
                .data('liHeight', liHeight)
                .data('headerHeight', headerHeight)
                .data('searchHeight', searchHeight)
                .data('actionsHeight', actionsHeight);
        },

        setSize: function() {
            var that = this,
                menu = this.$menu,
                menuInner = menu.find('.inner'),
                selectHeight = this.$newElement.outerHeight(),
                liHeight = this.$newElement.data('liHeight'),
                headerHeight = this.$newElement.data('headerHeight'),
                searchHeight = this.$newElement.data('searchHeight'),
                actionsHeight = this.$newElement.data('actionsHeight'),
                divHeight = menu.find('li .divider').outerHeight(true),
                menuPadding = parseInt(menu.css('padding-top')) +
                    parseInt(menu.css('padding-bottom')) +
                    parseInt(menu.css('border-top-width')) +
                    parseInt(menu.css('border-bottom-width')),
                notDisabled = this.options.hideDisabled ? ':not(.disabled)' : '',
                $window = $(window),
                menuExtras = menuPadding + parseInt(menu.css('margin-top')) + parseInt(menu.css('margin-bottom')) + 2,
                menuHeight,
                selectOffsetTop,
                selectOffsetBot,
                posVert = function() {
                    selectOffsetTop = that.$newElement.offset().top - $window.scrollTop();
                    selectOffsetBot = $window.height() - selectOffsetTop - selectHeight;
                };
            posVert();
            if (this.options.header) menu.css('padding-top', 0);

            if (this.options.size == 'auto') {
                var getSize = function() {
                    var minHeight,
                        lisVis = that.$lis.not('.hide');

                    posVert();
                    menuHeight = selectOffsetBot - menuExtras;

                    if (that.options.dropupAuto) {
                        that.$newElement.toggleClass('dropup', (selectOffsetTop > selectOffsetBot) && ((menuHeight - menuExtras) < menu.height()));
                    }
                    if (that.$newElement.hasClass('dropup')) {
                        menuHeight = selectOffsetTop - menuExtras;
                    }

                    if ((lisVis.length + lisVis.find('dt').length) > 3) {
                        minHeight = liHeight*3 + menuExtras - 2;
                    } else {
                        minHeight = 0;
                    }

                    menu.css({'max-height' : menuHeight + 'px', 'overflow' : 'hidden', 'min-height' : minHeight + headerHeight + searchHeight + actionsHeight + 'px'});
                    menuInner.css({'max-height' : menuHeight - headerHeight - searchHeight - actionsHeight - menuPadding + 'px', 'overflow-y' : 'auto', 'min-height' : Math.max(minHeight - menuPadding, 0) + 'px'});
                };
                getSize();
                this.$searchbox.off('input.getSize propertychange.getSize').on('input.getSize propertychange.getSize', getSize);
                $(window).off('resize.getSize').on('resize.getSize', getSize);
                $(window).off('scroll.getSize').on('scroll.getSize', getSize);
            } else if (this.options.size && this.options.size != 'auto' && menu.find('li'+notDisabled).length > this.options.size) {
                var optIndex = menu.find('li'+notDisabled+' > *').filter(':not(.div-contain)').slice(0,this.options.size).last().parent().index();
                var divLength = menu.find('li').slice(0,optIndex + 1).find('.div-contain').length;
                menuHeight = liHeight*this.options.size + divLength*divHeight + menuPadding;
                if (that.options.dropupAuto) {
                    this.$newElement.toggleClass('dropup', (selectOffsetTop > selectOffsetBot) && (menuHeight < menu.height()));
                }
                menu.css({'max-height' : menuHeight + headerHeight + searchHeight + actionsHeight + 'px', 'overflow' : 'hidden'});
                menuInner.css({'max-height' : menuHeight - menuPadding + 'px', 'overflow-y' : 'auto'});
            }
        },

        setWidth: function() {
            if (this.options.width == 'auto') {
                this.$menu.css('min-width', '0');

                // Get correct width if element hidden
                var selectClone = this.$newElement.clone().appendTo('body');
                var ulWidth = selectClone.find('> .dropdown-menu').css('width');
                var btnWidth = selectClone.css('width', 'auto').find('> button').css('width');
                selectClone.remove();

                // Set width to whatever's larger, button title or longest option
                this.$newElement.css('width', Math.max(parseInt(ulWidth), parseInt(btnWidth)) + 'px');
            } else if (this.options.width == 'fit') {
                // Remove inline min-width so width can be changed from 'auto'
                this.$menu.css('min-width', '');
                this.$newElement.css('width', '').addClass('fit-width');
            } else if (this.options.width) {
                // Remove inline min-width so width can be changed from 'auto'
                this.$menu.css('min-width', '');
                this.$newElement.css('width', this.options.width);
            } else {
                // Remove inline min-width/width so width can be changed
                this.$menu.css('min-width', '');
                this.$newElement.css('width', '');
            }
            // Remove fit-width class if width is changed programmatically
            if (this.$newElement.hasClass('fit-width') && this.options.width !== 'fit') {
                this.$newElement.removeClass('fit-width');
            }
        },

        selectPosition: function() {
            var that = this,
                drop = '<div />',
                $drop = $(drop),
                pos,
                actualHeight,
                getPlacement = function($element) {
                    $drop.addClass($element.attr('class').replace(/form-control/gi, '')).toggleClass('dropup', $element.hasClass('dropup'));
                    pos = $element.offset();
                    actualHeight = $element.hasClass('dropup') ? 0 : $element[0].offsetHeight;
                    $drop.css({'top' : pos.top + actualHeight, 'left' : pos.left, 'width' : $element[0].offsetWidth, 'position' : 'absolute'});
                };
            this.$newElement.on('click', function() {
                if (that.isDisabled()) {
                    return;
                }
                getPlacement($(this));
                $drop.appendTo(that.options.container);
                $drop.toggleClass('open', !$(this).hasClass('open'));
                $drop.append(that.$menu);
            });
            $(window).resize(function() {
                getPlacement(that.$newElement);
            });
            $(window).on('scroll', function() {
                getPlacement(that.$newElement);
            });
            $('html').on('click', function(e) {
                if ($(e.target).closest(that.$newElement).length < 1) {
                    $drop.removeClass('open');
                }
            });
        },

        mobile: function() {
            this.$element.addClass('mobile-device').appendTo(this.$newElement);
            if (this.options.container) this.$menu.hide();
        },

        refresh: function() {
            this.$lis = null;
            this.reloadLi();
            this.render();
            this.setWidth();
            this.setStyle();
            this.checkDisabled();
            this.liHeight();
        },

        update: function() {
            this.reloadLi();
            this.setWidth();
            this.setStyle();
            this.checkDisabled();
            this.liHeight();
        },

        setSelected: function(index, selected) {
            if (this.$lis == null) this.$lis = this.$menu.find('li');
            $(this.$lis[index]).toggleClass('selected', selected);
        },

        setDisabled: function(index, disabled) {
            if (this.$lis == null) this.$lis = this.$menu.find('li');
            if (disabled) {
                $(this.$lis[index]).addClass('disabled').find('a').attr('href', '#').attr('tabindex', -1);
            } else {
                $(this.$lis[index]).removeClass('disabled').find('a').removeAttr('href').attr('tabindex', 0);
            }
        },

        isDisabled: function() {
            return this.$element.is(':disabled');
        },

        checkDisabled: function() {
            var that = this;

            if (this.isDisabled()) {
                this.$button.addClass('disabled').attr('tabindex', -1);
            } else {
                if (this.$button.hasClass('disabled')) {
                    this.$button.removeClass('disabled');
                }

                if (this.$button.attr('tabindex') == -1) {
                    if (!this.$element.data('tabindex')) this.$button.removeAttr('tabindex');
                }
            }

            this.$button.click(function() {
                return !that.isDisabled();
            });
        },

        tabIndex: function() {
            if (this.$element.is('[tabindex]')) {
                this.$element.data('tabindex', this.$element.attr('tabindex'));
                this.$button.attr('tabindex', this.$element.data('tabindex'));
            }
        },

        clickListener: function() {
            var that = this;

            $('body').on('touchstart.dropdown', '.dropdown-menu', function(e) {
                e.stopPropagation();
            });

            this.$newElement.on('click', function() {
                that.setSize();
                if (!that.options.liveSearch && !that.multiple) {
                    setTimeout(function() {
                        that.$menu.find('.selected a').focus();
                    }, 10);
                }
            });

            this.$menu.on('click', 'li a', function(e) {
                var clickedIndex = $(this).parent().index(),
                    prevValue = that.$element.val(),
                    prevIndex = that.$element.prop('selectedIndex');

                //Dont close on multi choice menu
                if (that.multiple) {
                    e.stopPropagation();
                }

                e.preventDefault();

                //Dont run if we have been disabled
                if (!that.isDisabled() && !$(this).parent().hasClass('disabled')) {
                    var $options = that.$element.find('option'),
                        $option = $options.eq(clickedIndex),
                        state = $option.prop('selected'),
                        $optgroup = $option.parent('optgroup'),
                        maxOptions = that.options.maxOptions,
                        maxOptionsGrp = $optgroup.data('maxOptions') || false;

                    //Deselect all others if not multi select box
                    if (!that.multiple) {
                        $options.prop('selected', false);
                        $option.prop('selected', true);
                        that.$menu.find('.selected').removeClass('selected');
                        that.setSelected(clickedIndex, true);
                    }
                    //Else toggle the one we have chosen if we are multi select.
                    else {
                        $option.prop('selected', !state);
                        that.setSelected(clickedIndex, !state);

                        if ((maxOptions !== false) || (maxOptionsGrp !== false)) {
                            var maxReached = maxOptions < $options.filter(':selected').length,
                                maxReachedGrp = maxOptionsGrp < $optgroup.find('option:selected').length,
                                maxOptionsArr = that.options.maxOptionsText,
                                maxTxt = maxOptionsArr[0].replace('{n}', maxOptions),
                                maxTxtGrp = maxOptionsArr[1].replace('{n}', maxOptionsGrp),
                                $notify = $('<div class="notify"></div>');

                            if ((maxOptions && maxReached) || (maxOptionsGrp && maxReachedGrp)) {
                                // If {var} is set in array, replace it
                                if (maxOptionsArr[2]) {
                                    maxTxt = maxTxt.replace('{var}', maxOptionsArr[2][maxOptions > 1 ? 0 : 1]);
                                    maxTxtGrp = maxTxtGrp.replace('{var}', maxOptionsArr[2][maxOptionsGrp > 1 ? 0 : 1]);
                                }

                                $option.prop('selected', false);

                                that.$menu.append($notify);

                                if (maxOptions && maxReached) {
                                    $notify.append($('<div>' + maxTxt + '</div>'));
                                    that.$element.trigger('maxReached.bs.select');
                                }

                                if (maxOptionsGrp && maxReachedGrp) {
                                    $notify.append($('<div>' + maxTxtGrp + '</div>'));
                                    that.$element.trigger('maxReachedGrp.bs.select');
                                }

                                setTimeout(function() {
                                    that.setSelected(clickedIndex, false);
                                }, 10);

                                $notify.delay(750).fadeOut(300, function() { $(this).remove(); });
                            }
                        }
                    }

                    if (!that.multiple) {
                        that.$button.focus();
                    } else if (that.options.liveSearch) {
                        that.$searchbox.focus();
                    }

                    // Trigger select 'change'
                    if ((prevValue != that.$element.val() && that.multiple) || (prevIndex != that.$element.prop('selectedIndex') && !that.multiple)) {
                        that.$element.change();
                    }
                }
            });

            this.$menu.on('click', 'li.disabled a, li dt, li .div-contain, .popover-title, .popover-title :not(.close)', function(e) {
                if (e.target == this) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!that.options.liveSearch) {
                        that.$button.focus();
                    } else {
                        that.$searchbox.focus();
                    }
                }
            });

            this.$menu.on('click', '.popover-title .close', function() {
                that.$button.focus();
            });

            this.$searchbox.on('click', function(e) {
                e.stopPropagation();
            });


            this.$menu.on('click', '.actions-btn', function(e) {
                if (that.options.liveSearch) {
                    that.$searchbox.focus();
                } else {
                    that.$button.focus();
                }

                e.preventDefault();
                e.stopPropagation();

                if ($(this).is('.bs-select-all')) {
                    that.selectAll();
                } else {
                    that.deselectAll();
                }
                that.$element.change();
            });

            this.$element.change(function() {
                that.render(false);
            });
        },

        liveSearchListener: function() {
            var that = this,
                no_results = $('<li class="no-results"></li>');

            this.$newElement.on('click.dropdown.data-api', function() {
                that.$menu.find('.active').removeClass('active');
                if (!!that.$searchbox.val()) {
                    that.$searchbox.val('');
                    that.$lis.not('.is-hidden').removeClass('hide');
                    if (!!no_results.parent().length) no_results.remove();
                }
                if (!that.multiple) that.$menu.find('.selected').addClass('active');
                setTimeout(function() {
                    that.$searchbox.focus();
                }, 10);
            });

            this.$searchbox.on('input propertychange', function() {
                if (that.$searchbox.val()) {
                    that.$lis.not('.is-hidden').removeClass('hide').find('a').not(':icontains(' + that.$searchbox.val() + ')').parent().addClass('hide');

                    if (!that.$menu.find('li').filter(':visible:not(.no-results)').length) {
                        if (!!no_results.parent().length) no_results.remove();
                        no_results.html(that.options.noneResultsText + ' "'+ that.$searchbox.val() + '"').show();
                        that.$menu.find('li').last().after(no_results);
                    } else if (!!no_results.parent().length) {
                        no_results.remove();
                    }

                } else {
                    that.$lis.not('.is-hidden').removeClass('hide');
                    if (!!no_results.parent().length) no_results.remove();
                }

                that.$menu.find('li.active').removeClass('active');
                that.$menu.find('li').filter(':visible:not(.divider)').eq(0).addClass('active').find('a').focus();
                $(this).focus();
            });

            this.$menu.on('mouseenter', 'a', function(e) {
                that.$menu.find('.active').removeClass('active');
                $(e.currentTarget).parent().not('.disabled').addClass('active');
            });

            this.$menu.on('mouseleave', 'a', function() {
                that.$menu.find('.active').removeClass('active');
            });
        },

        val: function(value) {

            if (value !== undefined) {
                this.$element.val( value );
                this.$element.change();
                this.render();

                return this.$element;
            } else {
                return this.$element.val();
            }
        },

        selectAll: function() {
            if (this.$lis == null) this.$lis = this.$menu.find('li');
            this.$element.find('option:enabled').prop('selected', true);
            $(this.$lis).filter(':not(.disabled)').addClass('selected');
            this.render(false);
        },

        deselectAll: function() {
            if (this.$lis == null) this.$lis = this.$menu.find('li');
            this.$element.find('option:enabled').prop('selected', false);
            $(this.$lis).filter(':not(.disabled)').removeClass('selected');
            this.render(false);
        },

        keydown: function(e) {
            var $this,
                $items,
                $parent,
                index,
                next,
                first,
                last,
                prev,
                nextPrev,
                that,
                prevIndex,
                isActive,
                keyCodeMap = {
                    32:' ', 48:'0', 49:'1', 50:'2', 51:'3', 52:'4', 53:'5', 54:'6', 55:'7', 56:'8', 57:'9', 59:';',
                    65:'a', 66:'b', 67:'c', 68:'d', 69:'e', 70:'f', 71:'g', 72:'h', 73:'i', 74:'j', 75:'k', 76:'l',
                    77:'m', 78:'n', 79:'o', 80:'p', 81:'q', 82:'r', 83:'s', 84:'t', 85:'u', 86:'v', 87:'w', 88:'x',
                    89:'y', 90:'z', 96:'0', 97:'1', 98:'2', 99:'3', 100:'4', 101:'5', 102:'6', 103:'7', 104:'8', 105:'9'
                };

            $this = $(this);

            $parent = $this.parent();

            if ($this.is('input')) $parent = $this.parent().parent();

            that = $parent.data('this');

            if (that.options.liveSearch) $parent = $this.parent().parent();

            if (that.options.container) $parent = that.$menu;

            $items = $('[role=menu] li:not(.divider) a', $parent);

            isActive = that.$menu.parent().hasClass('open');

            if (!isActive && /([0-9]|[A-z])/.test(String.fromCharCode(e.keyCode))) {
                if (!that.options.container) {
                    that.setSize();
                    that.$menu.parent().addClass('open');
                    isActive = that.$menu.parent().hasClass('open');
                } else {
                    that.$newElement.trigger('click');
                }
                that.$searchbox.focus();
            }

            if (that.options.liveSearch) {
                if (/(^9$|27)/.test(e.keyCode) && isActive && that.$menu.find('.active').length === 0) {
                    e.preventDefault();
                    that.$menu.parent().removeClass('open');
                    that.$button.focus();
                }
                $items = $('[role=menu] li:not(.divider):visible', $parent);
                if (!$this.val() && !/(38|40)/.test(e.keyCode)) {
                    if ($items.filter('.active').length === 0) {
                        $items = that.$newElement.find('li').filter(':icontains(' + keyCodeMap[e.keyCode] + ')');
                    }
                }
            }

            if (!$items.length) return;

            if (/(38|40)/.test(e.keyCode)) {

                index = $items.index($items.filter(':focus'));
                first = $items.parent(':not(.disabled):visible').first().index();
                last = $items.parent(':not(.disabled):visible').last().index();
                next = $items.eq(index).parent().nextAll(':not(.disabled):visible').eq(0).index();
                prev = $items.eq(index).parent().prevAll(':not(.disabled):visible').eq(0).index();
                nextPrev = $items.eq(next).parent().prevAll(':not(.disabled):visible').eq(0).index();

                if (that.options.liveSearch) {
                    $items.each(function(i) {
                        if ($(this).is(':not(.disabled)')) {
                            $(this).data('index', i);
                        }
                    });
                    index = $items.index($items.filter('.active'));
                    first = $items.filter(':not(.disabled):visible').first().data('index');
                    last = $items.filter(':not(.disabled):visible').last().data('index');
                    next = $items.eq(index).nextAll(':not(.disabled):visible').eq(0).data('index');
                    prev = $items.eq(index).prevAll(':not(.disabled):visible').eq(0).data('index');
                    nextPrev = $items.eq(next).prevAll(':not(.disabled):visible').eq(0).data('index');
                }

                prevIndex = $this.data('prevIndex');

                if (e.keyCode == 38) {
                    if (that.options.liveSearch) index -= 1;
                    if (index != nextPrev && index > prev) index = prev;
                    if (index < first) index = first;
                    if (index == prevIndex) index = last;
                }

                if (e.keyCode == 40) {
                    if (that.options.liveSearch) index += 1;
                    if (index == -1) index = 0;
                    if (index != nextPrev && index < next) index = next;
                    if (index > last) index = last;
                    if (index == prevIndex) index = first;
                }

                $this.data('prevIndex', index);

                if (!that.options.liveSearch) {
                    $items.eq(index).focus();
                } else {
                    e.preventDefault();
                    if (!$this.is('.dropdown-toggle')) {
                        $items.removeClass('active');
                        $items.eq(index).addClass('active').find('a').focus();
                        $this.focus();
                    }
                }

            } else if (!$this.is('input')) {

                var keyIndex = [],
                    count,
                    prevKey;

                $items.each(function() {
                    if ($(this).parent().is(':not(.disabled)')) {
                        if ($.trim($(this).text().toLowerCase()).substring(0,1) == keyCodeMap[e.keyCode]) {
                            keyIndex.push($(this).parent().index());
                        }
                    }
                });

                count = $(document).data('keycount');
                count++;
                $(document).data('keycount',count);

                prevKey = $.trim($(':focus').text().toLowerCase()).substring(0,1);

                if (prevKey != keyCodeMap[e.keyCode]) {
                    count = 1;
                    $(document).data('keycount', count);
                } else if (count >= keyIndex.length) {
                    $(document).data('keycount', 0);
                    if (count > keyIndex.length) count = 1;
                }

                $items.eq(keyIndex[count - 1]).focus();
            }

            // Select focused option if "Enter", "Spacebar", "Tab" are pressed inside the menu.
            if (/(13|32|^9$)/.test(e.keyCode) && isActive) {
                if (!/(32)/.test(e.keyCode)) e.preventDefault();
                if (!that.options.liveSearch) {
                    $(':focus').click();
                } else if (!/(32)/.test(e.keyCode)) {
                    that.$menu.find('.active a').click();
                    $this.focus();
                }
                $(document).data('keycount',0);
            }

            if ((/(^9$|27)/.test(e.keyCode) && isActive && (that.multiple || that.options.liveSearch)) || (/(27)/.test(e.keyCode) && !isActive)) {
                that.$menu.parent().removeClass('open');
                that.$button.focus();
            }

        },

        hide: function() {
            this.$newElement.hide();
        },

        show: function() {
            this.$newElement.show();
        },

        destroy: function() {
            this.$newElement.remove();
            this.$element.remove();
        }
    };

    $.fn.selectpicker = function(option, event) {
        //get the args of the outer function..
        var args = arguments;
        var value;
        var chain = this.each(function() {
            if ($(this).is('select')) {
                var $this = $(this),
                    data = $this.data('selectpicker'),
                    options = typeof option == 'object' && option;

                if (!data) {
                    $this.data('selectpicker', (data = new Selectpicker(this, options, event)));
                } else if (options) {
                    for(var i in options) {
                        data.options[i] = options[i];
                    }
                }

                if (typeof option == 'string') {
                    //Copy the value of option, as once we shift the arguments
                    //it also shifts the value of option.
                    var property = option;
                    if (data[property] instanceof Function) {
                        [].shift.apply(args);
                        value = data[property].apply(data, args);
                    } else {
                        value = data.options[property];
                    }
                }
            }
        });

        if (value !== undefined) {
            return value;
        } else {
            return chain;
        }
    };

    $.fn.selectpicker.defaults = {
        style: 'btn-default',
        size: 'auto',
        title: null,
        selectedTextFormat : 'values',
        noneSelectedText : 'Nothing selected',
        noneResultsText : 'No results match',
        countSelectedText: '{0} of {1} selected',
        maxOptionsText: ['Limit reached ({n} {var} max)', 'Group limit reached ({n} {var} max)', ['items','item']],
        width: false,
        container: false,
        hideDisabled: false,
        showSubtext: false,
        showIcon: true,
        showContent: true,
        dropupAuto: true,
        header: false,
        liveSearch: false,
        actionsBox: false,
        multipleSeparator: ', ',
        iconBase: 'glyphicon',
        tickIcon: 'glyphfa-ok',
        maxOptions: false
    };

    $(document)
        .data('keycount', 0)
        .on('keydown', '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bootstrap-select-searchbox input', Selectpicker.prototype.keydown)
        .on('focusin.modal', '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bootstrap-select-searchbox input', function (e) { e.stopPropagation(); });

}(window.jQuery);


/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.1
 */
;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);if(!e.length)return;case "object":if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});


jQuery(function( $ ){
    /**
     * Demo binding and preparation, no need to read this part
     */
        //borrowed from jQuery easing plugin
        //http://gsgd.co.uk/sandbox/jquery.easing.php
    $.easing.elasout = function(x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    };
    $('a.back').click(function() {
        $(this).parents('div.pane').scrollTo(0, 800, { queue:true });
        $(this).parents('div.section').find('span.message').text( this.title);
        return false;
    });
    //just for the example, to stop the click on the links.
    $('ul.links').click(function(e){
        var link = e.target;
        if (link.target === '_blank') {
            return;
        }
        e.preventDefault();
        link.blur();
        if (link.title) {
            $(this).parent().find('span.message').text(link.title);
        }
    });

    // This one is important, many browsers don't reset scroll on refreshes
    // Reset all scrollable panes to (0,0)
    $('div.pane').scrollTo(0);
    // Reset the screen to (0,0)
    $.scrollTo(0);

    // TOC, shows how to scroll the whole window
    $('#toc a').click(function() {//$.scrollTo works EXACTLY the same way, but scrolls the whole screen
        $.scrollTo(this.hash, 1500, { easing:'elasout' });
        $(this.hash).find('span.message').text(this.title);
        return false;
    });

    // Target examples bindings
    var $target = $('#pane-target');
    $('#target-examples a').click(function() {
        $target.stop(true);
    });

    $('#relative-selector').click(function() {
        $target.scrollTo('li:eq(7)', 800);
    });
    $('#jquery-object').click(function() {
        $target.scrollTo($('#pane-target li:eq(14)') , 800);
    });
    $('#dom-element').click(function() {
        $target.scrollTo(document.getElementById('twenty'), 800);
    });
    $('#absolute-number').click(function() {
        $target.scrollTo(150, 800);
    });
    $('#absolute-number-hash').click(function() {
        $target.scrollTo({ top:800, left:700}, 800);
    });
    $('#absolute-px').click(function() {
        $target.scrollTo('520px', 800);
    });
    $('#absolute-px-hash').click(function() {
        $target.scrollTo({top:'110px', left:'290px'}, 800);
    });
    $('#relative-px').click(function() {
        $target.scrollTo('+=100', 500);
    });
    $('#relative-px-hash').click(function() {
        $target.scrollTo({top:'-=100px', left:'+=100'}, 500);
    });
    $('#percentage-px').click(function() {
        $target.scrollTo('50%', 800);
    });
    $('#percentage-px-hash').click(function() {
        $target.scrollTo({top:'50%', left:'20%'}, 800);
    });

    // Settings examples bindings, they will all scroll to the same place, with different settings
    var $settings = $('#pane-settings');
    $('#settings-examples a').click(function() {
        // before each animation, reset to (0,0), skip this.
        $settings.stop(true).scrollTo(0);
    });

    $('#settings-no').click(function() {
        $settings.scrollTo('li:eq(15)', 1000);
    });
    $('#settings-axis').click(function() {// only scroll horizontally
        $settings.scrollTo('li:eq(15)', 1000, { axis:'x' });
    });
    $('#settings-duration').click(function() {// it's the same as specifying it in the 2nd argument
        $settings.scrollTo('li:eq(15)', { duration: 3000 });
    });
    $('#settings-easing').click(function() {
        $settings.scrollTo('li:eq(15)', 2500, { easing:'elasout' });
    });
    $('#settings-margin').click(function() {//scroll to the "outer" position of the element
        $settings.scrollTo('li:eq(15)', 1000, { margin:true });
    });
    $('#settings-offset').click(function() {//same as { top:-50, left:-50 }
        $settings.scrollTo('li:eq(15)', 1000, { offset:-50 });
    });
    $('#settings-offset-hash').click(function() {
        $settings.scrollTo('li:eq(15)', 1000, { offset:{ top:-5, left:-30 } });
    });
    $('#settings-offset-function').click(function() {
        $settings.scrollTo('li:eq(15)', 1000, {offset: function() { return {top:-30, left:-5}; }});
    });
    $('#settings-over').click(function() {//same as { top:-50, left:-50 }
        $settings.scrollTo('li:eq(15)', 1000, { over:0.5 });
    });
    $('#settings-over-hash').click(function() {
        $settings.scrollTo('li:eq(15)', 1000, { over:{ top:0.2, left:-0.5 } });
    });
    $('#settings-interrupt').click(function() {
        $settings.scrollTo('li:eq(15)', 10000, { interrupt:true });
    });
    $('#settings-queue').click(function() {//in this case, having 'axis' as 'xy' or 'yx' matters.
        $settings.scrollTo('li:eq(15)', 2000, { queue:true });
    });
    $('#settings-onAfter').click(function() {
        $settings.scrollTo('li:eq(15)', 2000, {
            onAfter:function() {
                $('#settings-message').text('Got there!');
            }
        });
    });
    $('#settings-onAfterFirst').click(function() {//onAfterFirst exists only when queuing
        $settings.scrollTo('li:eq(15)', 1600, {
            queue:true,
            onAfterFirst:function() {
                $('#settings-message').text('Got there horizontally!');
            },
            onAfter:function() {
                $('#settings-message').text('Got there vertically!');
            }
        });
    });
    $('#settings-step').click(function() {
        $settings.scrollTo('li:eq(15)', 2000, {step:function(now) {
            $('#settings-message').text(now.toFixed(2));
        }});
    });
    $('#settings-progress').click(function() {
        $settings.scrollTo('li:eq(15)', 2000, {progress:function(_, now) {
            $('#settings-message').text(Math.round(now*100) + '%');
        }});
    });
    $('#settings-fail').click(function() {
        $settings.scrollTo('li:eq(15)', 10000, {interrupt:true, fail:function() {
            $('#settings-message').text('Scroll interrupted!');
        }});
    });
});

/*
 * jQuery FlexSlider v2.0
 * http://www.woothemes.com/flexslider/
 *
 * Copyright 2012 WooThemes
 * Free to use under the GPLv2 license.
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Contributing author: Tyler Smith (@mbmufffin)
 */

;(function ($) {

    //FlexSlider: Object Instance
    $.flexslider = function(el, options) {
        var slider = $(el),
            vars = $.extend({}, $.flexslider.defaults, options),
            namespace = vars.namespace,
            touch = ("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch,
            eventType = (touch) ? "touchend" : "click",
            vertical = vars.direction === "vertical",
            reverse = vars.reverse,
            carousel = (vars.itemWidth > 0),
            fade = vars.animation === "fade",
            asNav = vars.asNavFor !== "",
            methods = {};

        // Store a reference to the slider object
        $.data(el, "flexslider", slider);

        // Privat slider methods
        methods = {
            init: function() {
                slider.animating = false;
                slider.currentSlide = vars.startAt;
                slider.animatingTo = slider.currentSlide;
                slider.atEnd = (slider.currentSlide === 0 || slider.currentSlide === slider.last);
                slider.containerSelector = vars.selector.substr(0,vars.selector.search(' '));
                slider.slides = $(vars.selector, slider);
                slider.container = $(slider.containerSelector, slider);
                slider.count = slider.slides.length;
                // SYNC:
                slider.syncExists = $(vars.sync).length > 0;
                // SLIDE:
                if (vars.animation === "slide") vars.animation = "swing";
                slider.prop = (vertical) ? "top" : "marginLeft";
                slider.args = {};
                // SLIDESHOW:
                slider.manualPause = false;
                // TOUCH/USECSS:
                slider.transitions = !vars.video && !fade && vars.useCSS && (function() {
                        var obj = document.createElement('div'),
                            props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
                        for (var i in props) {
                            if ( obj.style[ props[i] ] !== undefined ) {
                                slider.pfx = props[i].replace('Perspective','').toLowerCase();
                                slider.prop = "-" + slider.pfx + "-transform";
                                return true;
                            }
                        }
                        return false;
                    }());
                // CONTROLSCONTAINER:
                if (vars.controlsContainer !== "") slider.controlsContainer = $(vars.controlsContainer).length > 0 && $(vars.controlsContainer);
                // MANUAL:
                if (vars.manualControls !== "") slider.manualControls = $(vars.manualControls).length > 0 && $(vars.manualControls);

                // RANDOMIZE:
                if (vars.randomize) {
                    slider.slides.sort(function() { return (Math.round(Math.random())-0.5); });
                    slider.container.empty().append(slider.slides);
                }

                slider.doMath();

                // ASNAV:
                if (asNav) methods.asNav.setup();

                // INIT
                slider.setup("init");

                // CONTROLNAV:
                if (vars.controlNav) methods.controlNav.setup();

                // DIRECTIONNAV:
                if (vars.directionNav) methods.directionNav.setup();

                // KEYBOARD:
                if (vars.keyboard && ($(slider.containerSelector).length === 1 || vars.multipleKeyboard)) {
                    $(document).bind('keyup', function(event) {
                        var keycode = event.keyCode;
                        if (!slider.animating && (keycode === 39 || keycode === 37)) {
                            var target = (keycode === 39) ? slider.getTarget('next') :
                                (keycode === 37) ? slider.getTarget('prev') : false;
                            slider.flexAnimate(target, vars.pauseOnAction);
                        }
                    });
                }
                // MOUSEWHEEL:
                if (vars.mousewheel) {
                    slider.bind('mousewheel', function(event, delta, deltaX, deltaY) {
                        event.preventDefault();
                        var target = (delta < 0) ? slider.getTarget('next') : slider.getTarget('prev');
                        slider.flexAnimate(target, vars.pauseOnAction);
                    });
                }

                // PAUSEPLAY
                if (vars.pausePlay) methods.pausePlay.setup();

                // SLIDSESHOW
                if (vars.slideshow) {
                    if (vars.pauseOnHover) {
                        slider.hover(function() {
                            slider.pause();
                        }, function() {
                            if (!slider.manualPause) slider.play();
                        });
                    }
                    // initialize animation
                    (vars.initDelay > 0) ? setTimeout(slider.play, vars.initDelay) : slider.play();
                }

                // TOUCH
                if (touch && vars.touch) methods.touch();

                // FADE&&SMOOTHHEIGHT || SLIDE:
                if (!fade || (fade && vars.smoothHeight)) $(window).bind("resize focus", methods.resize);


                // API: start() Callback
                setTimeout(function(){
                    vars.start(slider);
                }, 200);
            },
            asNav: {
                setup: function() {
                    slider.asNav = true;
                    slider.animatingTo = Math.floor(slider.currentSlide/slider.move);
                    slider.currentItem = slider.currentSlide;
                    slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
                    slider.slides.click(function(e){
                        e.preventDefault();
                        var $slide = $(this),
                            target = $slide.index();
                        if (!$(vars.asNavFor).data('flexslider').animating && !$slide.hasClass('active')) {
                            slider.direction = (slider.currentItem < target) ? "next" : "prev";
                            slider.flexAnimate(target, vars.pauseOnAction, false, true, true);
                        }
                    });
                }
            },
            controlNav: {
                setup: function() {
                    if (!slider.manualControls) {
                        methods.controlNav.setupPaging();
                    } else { // MANUALCONTROLS:
                        methods.controlNav.setupManual();
                    }
                },
                setupPaging: function() {
                    var type = (vars.controlNav === "thumbnails") ? 'control-thumbs' : 'control-paging',
                        j = 1,
                        item;

                    slider.controlNavScaffold = $('<ol class="'+ namespace + 'control-nav ' + namespace + type + '"></ol>');

                    if (slider.pagingCount > 1) {
                        for (var i = 0; i < slider.pagingCount; i++) {
                            item = (vars.controlNav === "thumbnails") ? '<img src="' + slider.slides.eq(i).attr("data-thumb") + '"/>' : '<a>' + j + '</a>';
                            slider.controlNavScaffold.append('<li>' + item + '</li>');
                            j++;
                        }
                    }

                    // CONTROLSCONTAINER:
                    (slider.controlsContainer) ? $(slider.controlsContainer).append(slider.controlNavScaffold) : slider.append(slider.controlNavScaffold);
                    methods.controlNav.set();

                    methods.controlNav.active();

                    slider.controlNavScaffold.delegate('a, img', eventType, function(event) {
                        event.preventDefault();
                        var $this = $(this),
                            target = slider.controlNav.index($this);

                        if (!$this.hasClass(namespace + 'active')) {
                            slider.direction = (target > slider.currentSlide) ? "next" : "prev";
                            slider.flexAnimate(target, vars.pauseOnAction);
                        }
                    });
                    // Prevent iOS click event bug
                    if (touch) {
                        slider.controlNavScaffold.delegate('a', "click touchstart", function(event) {
                            event.preventDefault();
                        });
                    }
                },
                setupManual: function() {
                    slider.controlNav = slider.manualControls;
                    methods.controlNav.active();

                    slider.controlNav.live(eventType, function(event) {
                        event.preventDefault();
                        var $this = $(this),
                            target = slider.controlNav.index($this);

                        if (!$this.hasClass(namespace + 'active')) {
                            (target > slider.currentSlide) ? slider.direction = "next" : slider.direction = "prev";
                            slider.flexAnimate(target, vars.pauseOnAction);
                        }
                    });
                    // Prevent iOS click event bug
                    if (touch) {
                        slider.controlNav.live("click touchstart", function(event) {
                            event.preventDefault();
                        });
                    }
                },
                set: function() {
                    var selector = (vars.controlNav === "thumbnails") ? 'img' : 'a';
                    slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, (slider.controlsContainer) ? slider.controlsContainer : slider);
                },
                active: function() {
                    slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
                },
                update: function(action, pos) {
                    if (slider.pagingCount > 1 && action === "add") {
                        slider.controlNavScaffold.append($('<li><a>' + slider.count + '</a></li>'));
                    } else if (slider.pagingCount === 1) {
                        slider.controlNavScaffold.find('li').remove();
                    } else {
                        slider.controlNav.eq(pos).closest('li').remove();
                    }
                    methods.controlNav.set();
                    (slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length) ? slider.update(pos, action) : methods.controlNav.active();
                }
            },
            directionNav: {
                setup: function() {
                    var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li><a class="' + namespace + 'prev" href="#">' + vars.prevText + '</a></li><li><a class="' + namespace + 'next" href="#">' + vars.nextText + '</a></li></ul>');

                    // CONTROLSCONTAINER:
                    if (slider.controlsContainer) {
                        $(slider.controlsContainer).append(directionNavScaffold);
                        slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);
                    } else {
                        slider.append(directionNavScaffold);
                        slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);
                    }

                    methods.directionNav.update();

                    slider.directionNav.bind(eventType, function(event) {
                        event.preventDefault();
                        var target = ($(this).hasClass(namespace + 'next')) ? slider.getTarget('next') : slider.getTarget('prev');
                        slider.flexAnimate(target, vars.pauseOnAction);
                    });
                    // Prevent iOS click event bug
                    if (touch) {
                        slider.directionNav.bind("click touchstart", function(event) {
                            event.preventDefault();
                        });
                    }
                },
                update: function() {
                    var disabledClass = namespace + 'disabled';
                    if (!vars.animationLoop) {
                        if (slider.pagingCount === 1) {
                            slider.directionNav.addClass(disabledClass);
                        } else if (slider.animatingTo === 0) {
                            slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass);
                        } else if (slider.animatingTo === slider.last) {
                            slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass);
                        } else {
                            slider.directionNav.removeClass(disabledClass);
                        }
                    }
                }
            },
            pausePlay: {
                setup: function() {
                    var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a></a></div>');

                    // CONTROLSCONTAINER:
                    if (slider.controlsContainer) {
                        slider.controlsContainer.append(pausePlayScaffold);
                        slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);
                    } else {
                        slider.append(pausePlayScaffold);
                        slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);
                    }

                    // slider.pausePlay.addClass(pausePlayState).text((pausePlayState == 'pause') ? vars.pauseText : vars.playText);
                    methods.pausePlay.update((vars.slideshow) ? namespace + 'pause' : namespace + 'play');

                    slider.pausePlay.bind(eventType, function(event) {
                        event.preventDefault();
                        if ($(this).hasClass(namespace + 'pause')) {
                            slider.pause();
                            slider.manualPause = true;
                        } else {
                            slider.play();
                            slider.manualPause = false;
                        }
                    });
                    // Prevent iOS click event bug
                    if (touch) {
                        slider.pausePlay.bind("click touchstart", function(event) {
                            event.preventDefault();
                        });
                    }
                },
                update: function(state) {
                    (state === "play") ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').text(vars.playText) : slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').text(vars.pauseText);
                }
            },
            touch: function() {
                var startX,
                    startY,
                    offset,
                    cwidth,
                    dx,
                    startT,
                    scrolling = false;

                el.addEventListener('touchstart', onTouchStart, false);
                function onTouchStart(e) {
                    if (slider.animating) {
                        e.preventDefault();
                    } else if (e.touches.length === 1) {
                        slider.pause();
                        // CAROUSEL:
                        cwidth = (vertical) ? slider.h : slider. w;
                        startT = Number(new Date());
                        // CAROUSEL:
                        offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                            (carousel && reverse) ? slider.limit - (((slider.itemW + vars.itemMargin) * slider.move) * slider.animatingTo) :
                                (carousel && slider.currentSlide === slider.last) ? slider.limit :
                                    (carousel) ? ((slider.itemW + vars.itemMargin) * slider.move) * slider.currentSlide :
                                        (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                        startX = (vertical) ? e.touches[0].pageY : e.touches[0].pageX;
                        startY = (vertical) ? e.touches[0].pageX : e.touches[0].pageY;

                        el.addEventListener('touchmove', onTouchMove, false);
                        el.addEventListener('touchend', onTouchEnd, false);
                    }
                }

                function onTouchMove(e) {
                    dx = (vertical) ? startX - e.touches[0].pageY : startX - e.touches[0].pageX;
                    scrolling = (vertical) ? (Math.abs(dx) < Math.abs(e.touches[0].pageX - startY)) : (Math.abs(dx) < Math.abs(e.touches[0].pageY - startY));

                    if (!scrolling || Number(new Date()) - startT > 500) {
                        e.preventDefault();
                        if (!fade && slider.transitions) {
                            if (!vars.animationLoop) {
                                dx = dx/((slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0) ? (Math.abs(dx)/cwidth+2) : 1);
                            }
                            slider.setProps(offset + dx, "setTouch");
                        }
                    }
                }

                function onTouchEnd(e) {
                    if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                        var updateDx = (reverse) ? -dx : dx,
                            target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

                        if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 20 || Math.abs(updateDx) > cwidth/2)) {
                            slider.flexAnimate(target, vars.pauseOnAction);
                        } else {
                            slider.flexAnimate(slider.currentSlide, vars.pauseOnAction, true);
                        }
                    }
                    // finish the touch by undoing the touch session
                    el.removeEventListener('touchmove', onTouchMove, false);
                    el.removeEventListener('touchend', onTouchEnd, false);
                    startX = null;
                    startY = null;
                    dx = null;
                    offset = null;
                }
            },
            resize: function() {
                if (!slider.animating && slider.is(':visible')) {
                    if (!carousel) slider.doMath();

                    if (fade) {
                        // SMOOTH HEIGHT:
                        methods.smoothHeight();
                    } else if (carousel) { //CAROUSEL:
                        slider.slides.width(slider.computedW);
                        slider.update(slider.pagingCount);
                        slider.setProps();
                    }
                    else if (vertical) { //VERTICAL:
                        slider.viewport.height(slider.h);
                        slider.setProps(slider.h, "setTotal");
                    } else {
                        // SMOOTH HEIGHT:
                        if (vars.smoothHeight) methods.smoothHeight();
                        slider.newSlides.width(slider.computedW);
                        slider.setProps(slider.computedW, "setTotal");
                    }
                }
            },
            smoothHeight: function(dur) {
                if (!vertical || fade) {
                    var $obj = (fade) ? slider : slider.viewport;
                    (dur) ? $obj.animate({"height": slider.slides.eq(slider.animatingTo).height()}, dur) : $obj.height(slider.slides.eq(slider.animatingTo).height());
                }
            },
            sync: function(action) {
                var $obj = $(vars.sync).data("flexslider"),
                    target = slider.animatingTo;

                switch (action) {
                    case "animate": $obj.flexAnimate(target, vars.pauseOnAction, false, true); break;
                    case "play": if (!$obj.playing && !$obj.asNav) { $obj.play(); } break;
                    case "pause": $obj.pause(); break;
                }
            }
        }

        // public methods
        slider.flexAnimate = function(target, pause, override, withSync, fromNav) {
            if (!slider.animating && (slider.canAdvance(target) || override) && slider.is(":visible")) {
                if (asNav && withSync) {
                    var master = $(vars.asNavFor).data('flexslider');
                    slider.atEnd = target === 0 || target === slider.count - 1;
                    master.flexAnimate(target, true, false, true, fromNav);
                    slider.direction = (slider.currentItem < target) ? "next" : "prev";
                    master.direction = slider.direction;

                    if (Math.ceil((target + 1)/slider.visible) - 1 !== slider.currentSlide && target !== 0) {
                        slider.currentItem = target;
                        slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
                        target = Math.floor(target/slider.visible);
                    } else {
                        slider.currentItem = target;
                        slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
                        return false;
                    }
                }

                slider.animating = true;
                slider.animatingTo = target;
                // API: before() animation Callback
                vars.before(slider);

                // SLIDESHOW:
                if (pause) slider.pause();

                // SYNC:
                if (slider.syncExists && !fromNav) methods.sync("animate");

                // CONTROLNAV
                if (vars.controlNav) methods.controlNav.active();

                // !CAROUSEL:
                // CANDIDATE: slide active class (for add/remove slide)
                if (!carousel) slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide');

                // INFINITE LOOP:
                // CANDIDATE: atEnd
                slider.atEnd = target === 0 || target === slider.last;

                // DIRECTIONNAV:
                if (vars.directionNav) methods.directionNav.update();

                if (target === slider.last) {
                    // API: end() of cycle Callback
                    vars.end(slider);
                    // SLIDESHOW && !INFINITE LOOP:
                    if (!vars.animationLoop) slider.pause();
                }

                // SLIDE:
                if (!fade) {
                    var dimension = (vertical) ? slider.slides.filter(':first').height() : slider.computedW,
                        margin, slideString, calcNext;

                    // INFINITE LOOP / REVERSE:
                    if (carousel) {
                        margin = (vars.itemWidth > slider.w) ? vars.itemMargin * 2 : vars.itemMargin;
                        calcNext = ((slider.itemW + margin) * slider.move) * slider.animatingTo;
                        slideString = (calcNext > slider.limit && slider.visible !== 1) ? slider.limit : calcNext;
                    } else if (slider.currentSlide === 0 && target === slider.count - 1 && vars.animationLoop && slider.direction !== "next") {
                        slideString = (reverse) ? (slider.count + slider.cloneOffset) * dimension : 0;
                    } else if (slider.currentSlide === slider.last && target === 0 && vars.animationLoop && slider.direction !== "prev") {
                        slideString = (reverse) ? 0 : (slider.count + 1) * dimension;
                    } else {
                        slideString = (reverse) ? ((slider.count - 1) - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
                    }
                    slider.setProps(slideString, "", vars.animationSpeed);
                    if (slider.transitions) {
                        if (!vars.animationLoop || !slider.atEnd) {
                            slider.animating = false;
                            slider.currentSlide = slider.animatingTo;
                        }
                        slider.container.unbind("webkitTransitionEnd transitionend");
                        slider.container.bind("webkitTransitionEnd transitionend", function() {
                            slider.wrapup(dimension);
                        });
                    } else {
                        slider.container.animate(slider.args, vars.animationSpeed, vars.easing, function(){
                            slider.wrapup(dimension);
                        });
                    }
                } else { // FADE:
                    slider.slides.eq(slider.currentSlide).fadeOut(vars.animationSpeed, vars.easing);
                    slider.slides.eq(target).fadeIn(vars.animationSpeed, vars.easing, slider.wrapup);
                }
                // SMOOTH HEIGHT:
                if (vars.smoothHeight) methods.smoothHeight(vars.animationSpeed);
            }
        }
        slider.wrapup = function(dimension) {
            // SLIDE:
            if (!fade && !carousel) {
                if (slider.currentSlide === 0 && slider.animatingTo === slider.last && vars.animationLoop) {
                    slider.setProps(dimension, "jumpEnd");
                } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && vars.animationLoop) {
                    slider.setProps(dimension, "jumpStart");
                }
            }
            slider.animating = false;
            slider.currentSlide = slider.animatingTo;
            // API: after() animation Callback
            vars.after(slider);
        }

        // SLIDESHOW:
        slider.animateSlides = function() {
            if (!slider.animating) slider.flexAnimate(slider.getTarget("next"));
        }
        // SLIDESHOW:
        slider.pause = function() {
            clearInterval(slider.animatedSlides);
            slider.playing = false;
            // PAUSEPLAY:
            if (vars.pausePlay) methods.pausePlay.update("play");
            // SYNC:
            if (slider.syncExists) methods.sync("pause");
        }
        // SLIDESHOW:
        slider.play = function() {
            slider.animatedSlides = setInterval(slider.animateSlides, vars.slideshowSpeed);
            slider.playing = true;
            // PAUSEPLAY:
            if (vars.pausePlay) methods.pausePlay.update("pause");
            // SYNC:
            if (slider.syncExists) methods.sync("play");
        }
        slider.canAdvance = function(target) {
            // ASNAV:
            var last = (asNav) ? slider.pagingCount - 1 : slider.last;
            return (asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next") ? false :
                (target === slider.currentSlide && !asNav) ? false :
                    (vars.animationLoop) ? true :
                        (slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next") ? false :
                            (slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next") ? false :
                                true;
        }
        slider.getTarget = function(dir) {
            slider.direction = dir;
            if (dir === "next") {
                return (slider.currentSlide === slider.last) ? 0 : slider.currentSlide + 1;
            } else {
                return (slider.currentSlide === 0) ? slider.last : slider.currentSlide - 1;
            }
        }

        // SLIDE:
        slider.setProps = function(pos, special, dur) {
            var target = (function() {
                var posCheck = (pos) ? pos : ((slider.itemW + vars.itemMargin) * slider.move) * slider.animatingTo,
                    posCalc = (function() {
                        if (carousel) {
                            return (special === "setTouch") ? pos :
                                (reverse && slider.animatingTo === slider.last) ? 0 :
                                    (reverse) ? slider.limit - (((slider.itemW + vars.itemMargin) * slider.move) * slider.animatingTo) :
                                        (slider.animatingTo === slider.last) ? slider.limit : posCheck;
                        } else {
                            switch (special) {
                                case "setTotal": return (reverse) ? ((slider.count - 1) - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
                                case "setTouch": return (reverse) ? pos : pos;
                                case "jumpEnd": return (reverse) ? pos : slider.count * pos;
                                case "jumpStart": return (reverse) ? slider.count * pos : pos;
                                default: return pos;
                            }
                        }
                    }());
                return (posCalc * -1) + "px";
            }());

            if (slider.transitions) {
                target = (vertical) ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)";
                dur = (dur !== undefined) ? (dur/1000) + "s" : "0s";
                slider.container.css("-" + slider.pfx + "-transition-duration", dur);
            }

            slider.args[slider.prop] = target;
            if (slider.transitions || dur === undefined) slider.container.css(slider.args);
        }

        slider.setup = function(type) {
            // SLIDE:
            if (!fade) {
                var sliderOffset, arr;

                if (type === "init") {
                    slider.viewport = $('<div class="flex-viewport"></div>').css({"overflow": "hidden", "position": "relative"}).appendTo(slider).append(slider.container);
                    // INFINITE LOOP:
                    slider.cloneCount = 0;
                    slider.cloneOffset = 0;
                    // REVERSE:
                    if (reverse) {
                        arr = $.makeArray(slider.slides).reverse();
                        slider.slides = $(arr);
                        slider.container.empty().append(slider.slides);
                    }
                }
                // INFINITE LOOP && !CAROUSEL:
                if (vars.animationLoop && !carousel) {
                    slider.cloneCount = 2;
                    slider.cloneOffset = 1;
                    // clear out old clones
                    if (type !== "init") slider.container.find('.clone').remove();
                    slider.container.append(slider.slides.first().clone().addClass('clone')).prepend(slider.slides.last().clone().addClass('clone'));
                }
                slider.newSlides = $(vars.selector, slider);

                sliderOffset = (reverse) ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
                // VERTICAL:
                if (vertical && !carousel) {
                    slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
                    setTimeout(function(){
                        slider.newSlides.css({"display": "block"});
                        slider.doMath();
                        slider.viewport.height(slider.h);
                        slider.setProps(sliderOffset * slider.h, "init");
                    }, (type === "init") ? 100 : 0);
                } else {
                    slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
                    slider.setProps(sliderOffset * slider.computedW, "init");
                    setTimeout(function(){
                        slider.doMath();
                        slider.newSlides.css({"width": slider.computedW, "float": "left", "display": "block"});
                        // SMOOTH HEIGHT:
                        if (vars.smoothHeight) methods.smoothHeight();
                    }, (type === "init") ? 100 : 0);
                }
            } else { // FADE:
                slider.slides.css({"width": "100%", "float": "left", "marginRight": "-100%", "position": "relative"});
                if (type === "init") slider.slides.eq(slider.currentSlide).fadeIn(vars.animationSpeed, vars.easing);
                // SMOOTH HEIGHT:
                if (vars.smoothHeight) methods.smoothHeight();
            }
            // !CAROUSEL:
            // CANDIDATE: active slide
            if (!carousel) slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide");
        }

        slider.doMath = function() {
            var slide = slider.slides.first(),
                slideMargin = vars.itemMargin,
                minItems = vars.minItems,
                maxItems = vars.maxItems;

            slider.w = slider.width();
            slider.h = slide.height();
            slider.boxPadding = slide.outerWidth() - slide.width();

            // CAROUSEL:
            if (carousel) {
                slider.itemT = vars.itemWidth + slideMargin;
                slider.minW = (minItems) ? minItems * slider.itemT : slider.w;
                slider.maxW = (maxItems) ? maxItems * slider.itemT : slider.w;
                slider.itemW = (slider.minW > slider.w) ? (slider.w - (slideMargin * minItems))/minItems :
                    (slider.maxW < slider.w) ? (slider.w - (slideMargin * maxItems))/maxItems :
                        (vars.itemWidth > slider.w) ? slider.w : vars.itemWidth;
                slider.visible = Math.floor(slider.w/(slider.itemW + slideMargin));
                slider.move = (vars.move > 0 && vars.move < slider.visible ) ? vars.move : slider.visible;
                slider.pagingCount = Math.ceil(((slider.count - slider.visible)/slider.move) + 1);
                slider.last =  slider.pagingCount - 1;
                slider.limit = (slider.pagingCount === 1) ? 0 :
                    (vars.itemWidth > slider.w) ? ((slider.itemW + (slideMargin * 2)) * slider.count) - slider.w - slideMargin : ((slider.itemW + slideMargin) * slider.count) - slider.w;
            } else {
                slider.itemW = slider.w;
                slider.pagingCount = slider.count;
                slider.last = slider.count - 1;
            }
            slider.computedW = slider.itemW - slider.boxPadding;
        }

        slider.update = function(pos, action) {
            slider.doMath();

            // update currentSlide and slider.animatingTo if necessary
            if (!carousel) {
                if (pos < slider.currentSlide) {
                    slider.currentSlide += 1;
                } else if (pos <= slider.currentSlide && pos !== 0) {
                    slider.currentSlide -= 1;
                }
                slider.animatingTo = slider.currentSlide;
            }

            // update controlNav
            if (vars.controlNav && !slider.manualControls) {
                if ((action === "add" && !carousel) || slider.pagingCount > slider.controlNav.length) {
                    methods.controlNav.update("add");
                } else if ((action === "remove" && !carousel) || slider.pagingCount < slider.controlNav.length) {
                    if (carousel && slider.currentSlide > slider.last) {
                        slider.currentSlide -= 1;
                        slider.animatingTo -= 1;
                    }
                    methods.controlNav.update("remove", slider.last);
                }
            }
            // update directionNav
            if (vars.directionNav) methods.directionNav.update();

        }

        slider.addSlide = function(obj, pos) {
            var $obj = $(obj);

            slider.count += 1;
            slider.last = slider.count - 1;

            // append new slide
            if (vertical && reverse) {
                (pos !== undefined) ? slider.slides.eq(slider.count - pos).after($obj) : slider.container.prepend($obj);
            } else {
                (pos !== undefined) ? slider.slides.eq(pos).before($obj) : slider.container.append($obj);
            }

            // update currentSlide, animatingTo, controlNav, and directionNav
            slider.update(pos, "add");

            // update slider.slides
            slider.slides = $(vars.selector + ':not(.clone)', slider);
            // re-setup the slider to accomdate new slide
            slider.setup();

            //FlexSlider: added() Callback
            vars.added(slider);
        }
        slider.removeSlide = function(obj) {
            var pos = (isNaN(obj)) ? slider.slides.index($(obj)) : obj;

            // update count
            slider.count -= 1;
            slider.last = slider.count - 1;

            // remove slide
            if (isNaN(obj)) {
                $(obj, slider.slides).remove();
            } else {
                (vertical && reverse) ? slider.slides.eq(slider.last).remove() : slider.slides.eq(obj).remove();
            }

            // update currentSlide, animatingTo, controlNav, and directionNav
            slider.doMath();
            slider.update(pos, "remove");

            // update slider.slides
            slider.slides = $(vars.selector + ':not(.clone)', slider);
            // re-setup the slider to accomdate new slide
            slider.setup();

            // FlexSlider: removed() Callback
            vars.removed(slider);
        }

        //FlexSlider: Initialize
        methods.init();
    }

    //FlexSlider: Default Settings
    $.flexslider.defaults = {
        namespace: "flex-",             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
        selector: ".slides > li",       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
        animation: "fade",              //String: Select your animation type, "fade" or "slide"
        easing: "swing",               //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
        direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
        reverse: false,                 //{NEW} Boolean: Reverse the animation direction
        animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
        smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
        startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
        slideshow: true,                //Boolean: Animate slider automatically
        slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
        animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
        initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
        randomize: false,               //Boolean: Randomize slide order

        // Usability features
        pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
        pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
        useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
        touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
        video: false,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches

        // Primary Controls
        controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
        prevText: "",           //String: Set the text for the "previous" directionNav item
        nextText: "",               //String: Set the text for the "next" directionNav item

        // Secondary Navigation
        keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
        multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
        mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
        pausePlay: false,               //Boolean: Create pause/play dynamic element
        pauseText: "Pause",             //String: Set the text for the "pause" pausePlay item
        playText: "Play",               //String: Set the text for the "play" pausePlay item

        // Special properties
        controlsContainer: "",          //{UPDATED} jQuery Object/Selector: Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be $(".flexslider-container"). Property is ignored if given element is not found.
        manualControls: "",             //{UPDATED} jQuery Object/Selector: Declare custom control navigation. Examples would be $(".flex-control-nav li") or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
        sync: "",                       //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
        asNavFor: "",                   //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider

        // Carousel Options
        itemWidth: 0,                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
        itemMargin: 0,                  //{NEW} Integer: Margin between carousel items.
        minItems: 0,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
        maxItems: 0,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
        move: 0,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.

        // Callback API
        start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
        before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
        after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
        end: function(){},              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
        added: function(){},            //{NEW} Callback: function(slider) - Fires after a slide is added
        removed: function(){}           //{NEW} Callback: function(slider) - Fires after a slide is removed
    }


    //FlexSlider: Plugin Function
    $.fn.flexslider = function(options) {
        options = options || {};
        if (typeof options === "object") {
            return this.each(function() {
                var $this = $(this),
                    selector = (options.selector) ? options.selector : ".slides > li",
                    $slides = $this.find(selector);

                if ($slides.length === 1) {
                    $slides.fadeIn(400);
                    if (options.start) options.start($this);
                } else if ($this.data('flexslider') === undefined) {
                    new $.flexslider(this, options);
                }
            });
        } else {
            // Helper strings to quickly perform functions on the slider
            var $slider = $(this).data('flexslider');
            switch (options) {
                case "play": $slider.play(); break;
                case "pause": $slider.pause(); break;
                case "next": $slider.flexAnimate($slider.getTarget("next"), true); break;
                case "prev":
                case "previous": $slider.flexAnimate($slider.getTarget("prev"), true); break;
                default: if (typeof options === "number") $slider.flexAnimate(options, true);
            }
        }
    }

})(jQuery);





/* =========================================================
 * bootstrap-datepicker.js
 * http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

(function( $ ) {

    var $window = $(window);

    function UTCDate(){
        return new Date(Date.UTC.apply(Date, arguments));
    }
    function UTCToday(){
        var today = new Date();
        return UTCDate(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
    }


    // Picker object

    var Datepicker = function(element, options) {
        var that = this;

        this._process_options(options);

        this.element = $(element);
        this.isInline = false;
        this.isInput = this.element.is('input');
        this.component = this.element.is('.date') ? this.element.find('.add-on, .btn') : false;
        this.hasInput = this.component && this.element.find('input').length;
        if(this.component && this.component.length === 0)
            this.component = false;

        this.picker = $(DPGlobal.template);
        this._buildEvents();
        this._attachEvents();

        if(this.isInline) {
            this.picker.addClass('datepicker-inline').appendTo(this.element);
        } else {
            this.picker.addClass('datepicker-dropdown dropdown-menu');
        }

        if (this.o.rtl){
            this.picker.addClass('datepicker-rtl');
            this.picker.find('.prev i, .next i')
                .toggleClass('icon-arrow-left icon-arrow-right');
        }


        this.viewMode = this.o.startView;

        if (this.o.calendarWeeks)
            this.picker.find('tfoot th.today')
                .attr('colspan', function(i, val){
                    return parseInt(val) + 1;
                });

        this._allow_update = false;

        this.setStartDate(this._o.startDate);
        this.setEndDate(this._o.endDate);
        this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);

        this.fillDow();
        this.fillMonths();

        this._allow_update = true;

        this.update();
        this.showMode();

        if(this.isInline) {
            this.show();
        }
    };

    Datepicker.prototype = {
        constructor: Datepicker,

        _process_options: function(opts){
            // Store raw options for reference
            this._o = $.extend({}, this._o, opts);
            // Processed options
            var o = this.o = $.extend({}, this._o);

            // Check if "de-DE" style date is available, if not language should
            // fallback to 2 letter code eg "de"
            var lang = o.language;
            if (!dates[lang]) {
                lang = lang.split('-')[0];
                if (!dates[lang])
                    lang = defaults.language;
            }
            o.language = lang;

            switch(o.startView){
                case 2:
                case 'decade':
                    o.startView = 2;
                    break;
                case 1:
                case 'year':
                    o.startView = 1;
                    break;
                default:
                    o.startView = 0;
            }

            switch (o.minViewMode) {
                case 1:
                case 'months':
                    o.minViewMode = 1;
                    break;
                case 2:
                case 'years':
                    o.minViewMode = 2;
                    break;
                default:
                    o.minViewMode = 0;
            }

            o.startView = Math.max(o.startView, o.minViewMode);

            o.weekStart %= 7;
            o.weekEnd = ((o.weekStart + 6) % 7);

            var format = DPGlobal.parseFormat(o.format);
            if (o.startDate !== -Infinity) {
                if (!!o.startDate) {
                    if (o.startDate instanceof Date)
                        o.startDate = this._local_to_utc(this._zero_time(o.startDate));
                    else
                        o.startDate = DPGlobal.parseDate(o.startDate, format, o.language);
                } else {
                    o.startDate = -Infinity;
                }
            }
            if (o.endDate !== Infinity) {
                if (!!o.endDate) {
                    if (o.endDate instanceof Date)
                        o.endDate = this._local_to_utc(this._zero_time(o.endDate));
                    else
                        o.endDate = DPGlobal.parseDate(o.endDate, format, o.language);
                } else {
                    o.endDate = Infinity;
                }
            }

            o.daysOfWeekDisabled = o.daysOfWeekDisabled||[];
            if (!$.isArray(o.daysOfWeekDisabled))
                o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);
            o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function (d) {
                return parseInt(d, 10);
            });

            var plc = String(o.orientation).toLowerCase().split(/\s+/g),
                _plc = o.orientation.toLowerCase();
            plc = $.grep(plc, function(word){
                return (/^auto|left|right|top|bottom$/).test(word);
            });
            o.orientation = {x: 'auto', y: 'auto'};
            if (!_plc || _plc === 'auto')
                ; // no action
            else if (plc.length === 1){
                switch(plc[0]){
                    case 'top':
                    case 'bottom':
                        o.orientation.y = plc[0];
                        break;
                    case 'left':
                    case 'right':
                        o.orientation.x = plc[0];
                        break;
                }
            }
            else {
                _plc = $.grep(plc, function(word){
                    return (/^left|right$/).test(word);
                });
                o.orientation.x = _plc[0] || 'auto';

                _plc = $.grep(plc, function(word){
                    return (/^top|bottom$/).test(word);
                });
                o.orientation.y = _plc[0] || 'auto';
            }
        },
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function(evs){
            for (var i=0, el, ev; i<evs.length; i++){
                el = evs[i][0];
                ev = evs[i][1];
                el.on(ev);
            }
        },
        _unapplyEvents: function(evs){
            for (var i=0, el, ev; i<evs.length; i++){
                el = evs[i][0];
                ev = evs[i][1];
                el.off(ev);
            }
        },
        _buildEvents: function(){
            if (this.isInput) { // single input
                this._events = [
                    [this.element, {
                        focus: $.proxy(this.show, this),
                        keyup: $.proxy(this.update, this),
                        keydown: $.proxy(this.keydown, this)
                    }]
                ];
            }
            else if (this.component && this.hasInput){ // component: input + button
                this._events = [
                    // For components that are not readonly, allow keyboard nav
                    [this.element.find('input'), {
                        focus: $.proxy(this.show, this),
                        keyup: $.proxy(this.update, this),
                        keydown: $.proxy(this.keydown, this)
                    }],
                    [this.component, {
                        click: $.proxy(this.show, this)
                    }]
                ];
            }
            else if (this.element.is('div')) {  // inline datepicker
                this.isInline = true;
            }
            else {
                this._events = [
                    [this.element, {
                        click: $.proxy(this.show, this)
                    }]
                ];
            }

            this._secondaryEvents = [
                [this.picker, {
                    click: $.proxy(this.click, this)
                }],
                [$(window), {
                    resize: $.proxy(this.place, this)
                }],
                [$(document), {
                    mousedown: $.proxy(function (e) {
                        // Clicked outside the datepicker, hide it
                        if (!(
                                this.element.is(e.target) ||
                                this.element.find(e.target).length ||
                                this.picker.is(e.target) ||
                                this.picker.find(e.target).length
                            )) {
                            this.hide();
                        }
                    }, this)
                }]
            ];
        },
        _attachEvents: function(){
            this._detachEvents();
            this._applyEvents(this._events);
        },
        _detachEvents: function(){
            this._unapplyEvents(this._events);
        },
        _attachSecondaryEvents: function(){
            this._detachSecondaryEvents();
            this._applyEvents(this._secondaryEvents);
        },
        _detachSecondaryEvents: function(){
            this._unapplyEvents(this._secondaryEvents);
        },
        _trigger: function(event, altdate){
            var date = altdate || this.date,
                local_date = this._utc_to_local(date);

            this.element.trigger({
                type: event,
                date: local_date,
                format: $.proxy(function(altformat){
                    var format = altformat || this.o.format;
                    return DPGlobal.formatDate(date, format, this.o.language);
                }, this)
            });
        },

        show: function(e) {
            if (!this.isInline)
                this.picker.appendTo('body');
            this.picker.show();
            this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
            this.place();
            this._attachSecondaryEvents();
            if (e) {
                e.preventDefault();
            }
            this._trigger('show');
        },

        hide: function(e){
            if(this.isInline) return;
            if (!this.picker.is(':visible')) return;
            this.picker.hide().detach();
            this._detachSecondaryEvents();
            this.viewMode = this.o.startView;
            this.showMode();

            if (
                this.o.forceParse &&
                (
                    this.isInput && this.element.val() ||
                    this.hasInput && this.element.find('input').val()
                )
            )
                this.setValue();
            this._trigger('hide');
        },

        remove: function() {
            this.hide();
            this._detachEvents();
            this._detachSecondaryEvents();
            this.picker.remove();
            delete this.element.data().datepicker;
            if (!this.isInput) {
                delete this.element.data().date;
            }
        },

        _utc_to_local: function(utc){
            return new Date(utc.getTime() + (utc.getTimezoneOffset()*60000));
        },
        _local_to_utc: function(local){
            return new Date(local.getTime() - (local.getTimezoneOffset()*60000));
        },
        _zero_time: function(local){
            return new Date(local.getFullYear(), local.getMonth(), local.getDate());
        },
        _zero_utc_time: function(utc){
            return new Date(Date.UTC(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate()));
        },

        getDate: function() {
            return this._utc_to_local(this.getUTCDate());
        },

        getUTCDate: function() {
            return this.date;
        },

        setDate: function(d) {
            this.setUTCDate(this._local_to_utc(d));
        },

        setUTCDate: function(d) {
            this.date = d;
            this.setValue();
        },

        setValue: function() {
            var formatted = this.getFormattedDate();
            if (!this.isInput) {
                if (this.component){
                    this.element.find('input').val(formatted).change();
                }
            } else {
                this.element.val(formatted).change();
            }
        },

        getFormattedDate: function(format) {
            if (format === undefined)
                format = this.o.format;
            return DPGlobal.formatDate(this.date, format, this.o.language);
        },

        setStartDate: function(startDate){
            this._process_options({startDate: startDate});
            this.update();
            this.updateNavArrows();
        },

        setEndDate: function(endDate){
            this._process_options({endDate: endDate});
            this.update();
            this.updateNavArrows();
        },

        setDaysOfWeekDisabled: function(daysOfWeekDisabled){
            this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});
            this.update();
            this.updateNavArrows();
        },

        place: function(){
            if(this.isInline) return;
            var calendarWidth = this.picker.outerWidth(),
                calendarHeight = this.picker.outerHeight(),
                visualPadding = 10,
                windowWidth = $window.width(),
                windowHeight = $window.height(),
                scrollTop = $window.scrollTop();

            var zIndex = parseInt(this.element.parents().filter(function() {
                    return $(this).css('z-index') != 'auto';
                }).first().css('z-index'))+10;
            var offset = this.component ? this.component.parent().offset() : this.element.offset();
            var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
            var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
            var left = offset.left,
                top = offset.top;

            this.picker.removeClass(
                'datepicker-orient-top datepicker-orient-bottom '+
                'datepicker-orient-right datepicker-orient-left'
            );

            if (this.o.orientation.x !== 'auto') {
                this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
                if (this.o.orientation.x === 'right')
                    left -= calendarWidth - width;
            }
            // auto x orientation is best-placement: if it crosses a window
            // edge, fudge it sideways
            else {
                // Default to left
                this.picker.addClass('datepicker-orient-left');
                if (offset.left < 0)
                    left -= offset.left - visualPadding;
                else if (offset.left + calendarWidth > windowWidth)
                    left = windowWidth - calendarWidth - visualPadding;
            }

            // auto y orientation is best-situation: top or bottom, no fudging,
            // decision based on which shows more of the calendar
            var yorient = this.o.orientation.y,
                top_overflow, bottom_overflow;
            if (yorient === 'auto') {
                top_overflow = -scrollTop + offset.top - calendarHeight;
                bottom_overflow = scrollTop + windowHeight - (offset.top + height + calendarHeight);
                if (Math.max(top_overflow, bottom_overflow) === bottom_overflow)
                    yorient = 'top';
                else
                    yorient = 'bottom';
            }
            this.picker.addClass('datepicker-orient-' + yorient);
            if (yorient === 'top')
                top += height;
            else
                top -= calendarHeight + parseInt(this.picker.css('padding-top'));

            this.picker.css({
                top: top,
                left: left,
                zIndex: zIndex
            });
        },

        _allow_update: true,
        update: function(){
            if (!this._allow_update) return;

            var oldDate = new Date(this.date),
                date, fromArgs = false;
            if(arguments && arguments.length && (typeof arguments[0] === 'string' || arguments[0] instanceof Date)) {
                date = arguments[0];
                if (date instanceof Date)
                    date = this._local_to_utc(date);
                fromArgs = true;
            } else {
                date = this.isInput ? this.element.val() : this.element.data('date') || this.element.find('input').val();
                delete this.element.data().date;
            }

            this.date = DPGlobal.parseDate(date, this.o.format, this.o.language);

            if (fromArgs) {
                // setting date by clicking
                this.setValue();
            } else if (date) {
                // setting date by typing
                if (oldDate.getTime() !== this.date.getTime())
                    this._trigger('changeDate');
            } else {
                // clearing date
                this._trigger('clearDate');
            }

            if (this.date < this.o.startDate) {
                this.viewDate = new Date(this.o.startDate);
                this.date = new Date(this.o.startDate);
            } else if (this.date > this.o.endDate) {
                this.viewDate = new Date(this.o.endDate);
                this.date = new Date(this.o.endDate);
            } else {
                this.viewDate = new Date(this.date);
                this.date = new Date(this.date);
            }
            this.fill();
        },

        fillDow: function(){
            var dowCnt = this.o.weekStart,
                html = '<tr>';
            if(this.o.calendarWeeks){
                var cell = '<th class="cw">&nbsp;</th>';
                html += cell;
                this.picker.find('.datepicker-days thead tr:first-child').prepend(cell);
            }
            while (dowCnt < this.o.weekStart + 7) {
                html += '<th class="dow">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';
            }
            html += '</tr>';
            this.picker.find('.datepicker-days thead').append(html);
        },

        fillMonths: function(){
            var html = '',
                i = 0;
            while (i < 12) {
                html += '<span class="month">'+dates[this.o.language].monthsShort[i++]+'</span>';
            }
            this.picker.find('.datepicker-months td').html(html);
        },

        setRange: function(range){
            if (!range || !range.length)
                delete this.range;
            else
                this.range = $.map(range, function(d){ return d.valueOf(); });
            this.fill();
        },

        getClassNames: function(date){
            var cls = [],
                year = this.viewDate.getUTCFullYear(),
                month = this.viewDate.getUTCMonth(),
                currentDate = this.date.valueOf(),
                today = new Date();
            if (date.getUTCFullYear() < year || (date.getUTCFullYear() == year && date.getUTCMonth() < month)) {
                cls.push('old');
            } else if (date.getUTCFullYear() > year || (date.getUTCFullYear() == year && date.getUTCMonth() > month)) {
                cls.push('new');
            }
            // Compare internal UTC date with local today, not UTC today
            if (this.o.todayHighlight &&
                date.getUTCFullYear() == today.getFullYear() &&
                date.getUTCMonth() == today.getMonth() &&
                date.getUTCDate() == today.getDate()) {
                cls.push('today');
            }
            if (currentDate && date.valueOf() == currentDate) {
                cls.push('active');
            }
            if (date.valueOf() < this.o.startDate || date.valueOf() > this.o.endDate ||
                $.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1) {
                cls.push('disabled');
            }
            if (this.range){
                if (date > this.range[0] && date < this.range[this.range.length-1]){
                    cls.push('range');
                }
                if ($.inArray(date.valueOf(), this.range) != -1){
                    cls.push('selected');
                }
            }
            return cls;
        },

        fill: function() {
            var d = new Date(this.viewDate),
                year = d.getUTCFullYear(),
                month = d.getUTCMonth(),
                startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
                startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
                endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
                endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
                currentDate = this.date && this.date.valueOf(),
                tooltip;
            this.picker.find('.datepicker-days thead th.datepicker-switch')
                .text(dates[this.o.language].months[month]+' '+year);
            this.picker.find('tfoot th.today')
                .text(dates[this.o.language].today)
                .toggle(this.o.todayBtn !== false);
            this.picker.find('tfoot th.clear')
                .text(dates[this.o.language].clear)
                .toggle(this.o.clearBtn !== false);
            this.updateNavArrows();
            this.fillMonths();
            var prevMonth = UTCDate(year, month-1, 28,0,0,0,0),
                day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
            prevMonth.setUTCDate(day);
            prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);
            var nextMonth = new Date(prevMonth);
            nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
            nextMonth = nextMonth.valueOf();
            var html = [];
            var clsName;
            while(prevMonth.valueOf() < nextMonth) {
                if (prevMonth.getUTCDay() == this.o.weekStart) {
                    html.push('<tr>');
                    if(this.o.calendarWeeks){
                        // ISO 8601: First week contains first thursday.
                        // ISO also states week starts on Monday, but we can be more abstract here.
                        var
                        // Start of current week: based on weekstart/current date
                            ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),
                        // Thursday of this week
                            th = new Date(+ws + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
                        // First Thursday of year, year from thursday
                            yth = new Date(+(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay())%7*864e5),
                        // Calendar week: ms between thursdays, div ms per day, div 7 days
                            calWeek =  (th - yth) / 864e5 / 7 + 1;
                        html.push('<td class="cw">'+ calWeek +'</td>');

                    }
                }
                clsName = this.getClassNames(prevMonth);
                clsName.push('day');

                if (this.o.beforeShowDay !== $.noop){
                    var before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
                    if (before === undefined)
                        before = {};
                    else if (typeof(before) === 'boolean')
                        before = {enabled: before};
                    else if (typeof(before) === 'string')
                        before = {classes: before};
                    if (before.enabled === false)
                        clsName.push('disabled');
                    if (before.classes)
                        clsName = clsName.concat(before.classes.split(/\s+/));
                    if (before.tooltip)
                        tooltip = before.tooltip;
                }

                clsName = $.unique(clsName);
                html.push('<td class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + '>'+prevMonth.getUTCDate() + '</td>');
                if (prevMonth.getUTCDay() == this.o.weekEnd) {
                    html.push('</tr>');
                }
                prevMonth.setUTCDate(prevMonth.getUTCDate()+1);
            }
            this.picker.find('.datepicker-days tbody').empty().append(html.join(''));
            var currentYear = this.date && this.date.getUTCFullYear();

            var months = this.picker.find('.datepicker-months')
                .find('th:eq(1)')
                .text(year)
                .end()
                .find('span').removeClass('active');
            if (currentYear && currentYear == year) {
                months.eq(this.date.getUTCMonth()).addClass('active');
            }
            if (year < startYear || year > endYear) {
                months.addClass('disabled');
            }
            if (year == startYear) {
                months.slice(0, startMonth).addClass('disabled');
            }
            if (year == endYear) {
                months.slice(endMonth+1).addClass('disabled');
            }

            html = '';
            year = parseInt(year/10, 10) * 10;
            var yearCont = this.picker.find('.datepicker-years')
                .find('th:eq(1)')
                .text(year + '-' + (year + 9))
                .end()
                .find('td');
            year -= 1;
            for (var i = -1; i < 11; i++) {
                html += '<span class="year'+(i == -1 ? ' old' : i == 10 ? ' new' : '')+(currentYear == year ? ' active' : '')+(year < startYear || year > endYear ? ' disabled' : '')+'">'+year+'</span>';
                year += 1;
            }
            yearCont.html(html);
        },

        updateNavArrows: function() {
            if (!this._allow_update) return;

            var d = new Date(this.viewDate),
                year = d.getUTCFullYear(),
                month = d.getUTCMonth();
            switch (this.viewMode) {
                case 0:
                    if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()) {
                        this.picker.find('.prev').css({visibility: 'hidden'});
                    } else {
                        this.picker.find('.prev').css({visibility: 'visible'});
                    }
                    if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()) {
                        this.picker.find('.next').css({visibility: 'hidden'});
                    } else {
                        this.picker.find('.next').css({visibility: 'visible'});
                    }
                    break;
                case 1:
                case 2:
                    if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear()) {
                        this.picker.find('.prev').css({visibility: 'hidden'});
                    } else {
                        this.picker.find('.prev').css({visibility: 'visible'});
                    }
                    if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear()) {
                        this.picker.find('.next').css({visibility: 'hidden'});
                    } else {
                        this.picker.find('.next').css({visibility: 'visible'});
                    }
                    break;
            }
        },

        click: function(e) {
            e.preventDefault();
            var target = $(e.target).closest('span, td, th');
            if (target.length == 1) {
                switch(target[0].nodeName.toLowerCase()) {
                    case 'th':
                        switch(target[0].className) {
                            case 'datepicker-switch':
                                this.showMode(1);
                                break;
                            case 'prev':
                            case 'next':
                                var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className == 'prev' ? -1 : 1);
                                switch(this.viewMode){
                                    case 0:
                                        this.viewDate = this.moveMonth(this.viewDate, dir);
                                        this._trigger('changeMonth', this.viewDate);
                                        break;
                                    case 1:
                                    case 2:
                                        this.viewDate = this.moveYear(this.viewDate, dir);
                                        if (this.viewMode === 1)
                                            this._trigger('changeYear', this.viewDate);
                                        break;
                                }
                                this.fill();
                                break;
                            case 'today':
                                var date = new Date();
                                date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);

                                this.showMode(-2);
                                var which = this.o.todayBtn == 'linked' ? null : 'view';
                                this._setDate(date, which);
                                break;
                            case 'clear':
                                var element;
                                if (this.isInput)
                                    element = this.element;
                                else if (this.component)
                                    element = this.element.find('input');
                                if (element)
                                    element.val("").change();
                                this._trigger('changeDate');
                                this.update();
                                if (this.o.autoclose)
                                    this.hide();
                                break;
                        }
                        break;
                    case 'span':
                        if (!target.is('.disabled')) {
                            this.viewDate.setUTCDate(1);
                            if (target.is('.month')) {
                                var day = 1;
                                var month = target.parent().find('span').index(target);
                                var year = this.viewDate.getUTCFullYear();
                                this.viewDate.setUTCMonth(month);
                                this._trigger('changeMonth', this.viewDate);
                                if (this.o.minViewMode === 1) {
                                    this._setDate(UTCDate(year, month, day,0,0,0,0));
                                }
                            } else {
                                var year = parseInt(target.text(), 10)||0;
                                var day = 1;
                                var month = 0;
                                this.viewDate.setUTCFullYear(year);
                                this._trigger('changeYear', this.viewDate);
                                if (this.o.minViewMode === 2) {
                                    this._setDate(UTCDate(year, month, day,0,0,0,0));
                                }
                            }
                            this.showMode(-1);
                            this.fill();
                        }
                        break;
                    case 'td':
                        if (target.is('.day') && !target.is('.disabled')){
                            var day = parseInt(target.text(), 10)||1;
                            var year = this.viewDate.getUTCFullYear(),
                                month = this.viewDate.getUTCMonth();
                            if (target.is('.old')) {
                                if (month === 0) {
                                    month = 11;
                                    year -= 1;
                                } else {
                                    month -= 1;
                                }
                            } else if (target.is('.new')) {
                                if (month == 11) {
                                    month = 0;
                                    year += 1;
                                } else {
                                    month += 1;
                                }
                            }
                            this._setDate(UTCDate(year, month, day,0,0,0,0));
                        }
                        break;
                }
            }
        },

        _setDate: function(date, which){
            if (!which || which == 'date')
                this.date = new Date(date);
            if (!which || which  == 'view')
                this.viewDate = new Date(date);
            this.fill();
            this.setValue();
            this._trigger('changeDate');
            var element;
            if (this.isInput) {
                element = this.element;
            } else if (this.component){
                element = this.element.find('input');
            }
            if (element) {
                element.change();
            }
            if (this.o.autoclose && (!which || which == 'date')) {
                this.hide();
            }
        },

        moveMonth: function(date, dir){
            if (!dir) return date;
            var new_date = new Date(date.valueOf()),
                day = new_date.getUTCDate(),
                month = new_date.getUTCMonth(),
                mag = Math.abs(dir),
                new_month, test;
            dir = dir > 0 ? 1 : -1;
            if (mag == 1){
                test = dir == -1
                    // If going back one month, make sure month is not current month
                    // (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
                    ? function(){ return new_date.getUTCMonth() == month; }
                    // If going forward one month, make sure month is as expected
                    // (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
                    : function(){ return new_date.getUTCMonth() != new_month; };
                new_month = month + dir;
                new_date.setUTCMonth(new_month);
                // Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
                if (new_month < 0 || new_month > 11)
                    new_month = (new_month + 12) % 12;
            } else {
                // For magnitudes >1, move one month at a time...
                for (var i=0; i<mag; i++)
                    // ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
                    new_date = this.moveMonth(new_date, dir);
                // ...then reset the day, keeping it in the new month
                new_month = new_date.getUTCMonth();
                new_date.setUTCDate(day);
                test = function(){ return new_month != new_date.getUTCMonth(); };
            }
            // Common date-resetting loop -- if date is beyond end of month, make it
            // end of month
            while (test()){
                new_date.setUTCDate(--day);
                new_date.setUTCMonth(new_month);
            }
            return new_date;
        },

        moveYear: function(date, dir){
            return this.moveMonth(date, dir*12);
        },

        dateWithinRange: function(date){
            return date >= this.o.startDate && date <= this.o.endDate;
        },

        keydown: function(e){
            if (this.picker.is(':not(:visible)')){
                if (e.keyCode == 27) // allow escape to hide and re-show picker
                    this.show();
                return;
            }
            var dateChanged = false,
                dir, day, month,
                newDate, newViewDate;
            switch(e.keyCode){
                case 27: // escape
                    this.hide();
                    e.preventDefault();
                    break;
                case 37: // left
                case 39: // right
                    if (!this.o.keyboardNavigation) break;
                    dir = e.keyCode == 37 ? -1 : 1;
                    if (e.ctrlKey){
                        newDate = this.moveYear(this.date, dir);
                        newViewDate = this.moveYear(this.viewDate, dir);
                        this._trigger('changeYear', this.viewDate);
                    } else if (e.shiftKey){
                        newDate = this.moveMonth(this.date, dir);
                        newViewDate = this.moveMonth(this.viewDate, dir);
                        this._trigger('changeMonth', this.viewDate);
                    } else {
                        newDate = new Date(this.date);
                        newDate.setUTCDate(this.date.getUTCDate() + dir);
                        newViewDate = new Date(this.viewDate);
                        newViewDate.setUTCDate(this.viewDate.getUTCDate() + dir);
                    }
                    if (this.dateWithinRange(newDate)){
                        this.date = newDate;
                        this.viewDate = newViewDate;
                        this.setValue();
                        this.update();
                        e.preventDefault();
                        dateChanged = true;
                    }
                    break;
                case 38: // up
                case 40: // down
                    if (!this.o.keyboardNavigation) break;
                    dir = e.keyCode == 38 ? -1 : 1;
                    if (e.ctrlKey){
                        newDate = this.moveYear(this.date, dir);
                        newViewDate = this.moveYear(this.viewDate, dir);
                        this._trigger('changeYear', this.viewDate);
                    } else if (e.shiftKey){
                        newDate = this.moveMonth(this.date, dir);
                        newViewDate = this.moveMonth(this.viewDate, dir);
                        this._trigger('changeMonth', this.viewDate);
                    } else {
                        newDate = new Date(this.date);
                        newDate.setUTCDate(this.date.getUTCDate() + dir * 7);
                        newViewDate = new Date(this.viewDate);
                        newViewDate.setUTCDate(this.viewDate.getUTCDate() + dir * 7);
                    }
                    if (this.dateWithinRange(newDate)){
                        this.date = newDate;
                        this.viewDate = newViewDate;
                        this.setValue();
                        this.update();
                        e.preventDefault();
                        dateChanged = true;
                    }
                    break;
                case 13: // enter
                    this.hide();
                    e.preventDefault();
                    break;
                case 9: // tab
                    this.hide();
                    break;
            }
            if (dateChanged){
                this._trigger('changeDate');
                var element;
                if (this.isInput) {
                    element = this.element;
                } else if (this.component){
                    element = this.element.find('input');
                }
                if (element) {
                    element.change();
                }
            }
        },

        showMode: function(dir) {
            if (dir) {
                this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + dir));
            }
            /*
             vitalets: fixing bug of very special conditions:
             jquery 1.7.1 + webkit + show inline datepicker in bootstrap popover.
             Method show() does not set display css correctly and datepicker is not shown.
             Changed to .css('display', 'block') solve the problem.
             See https://github.com/vitalets/x-editable/issues/37

             In jquery 1.7.2+ everything works fine.
             */
            //this.picker.find('>div').hide().filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName).show();
            this.picker.find('>div').hide().filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName).css('display', 'block');
            this.updateNavArrows();
        }
    };

    var DateRangePicker = function(element, options){
        this.element = $(element);
        this.inputs = $.map(options.inputs, function(i){ return i.jquery ? i[0] : i; });
        delete options.inputs;

        $(this.inputs)
            .datepicker(options)
            .bind('changeDate', $.proxy(this.dateUpdated, this));

        this.pickers = $.map(this.inputs, function(i){ return $(i).data('datepicker'); });
        this.updateDates();
    };
    DateRangePicker.prototype = {
        updateDates: function(){
            this.dates = $.map(this.pickers, function(i){ return i.date; });
            this.updateRanges();
        },
        updateRanges: function(){
            var range = $.map(this.dates, function(d){ return d.valueOf(); });
            $.each(this.pickers, function(i, p){
                p.setRange(range);
            });
        },
        dateUpdated: function(e){
            var dp = $(e.target).data('datepicker'),
                new_date = dp.getUTCDate(),
                i = $.inArray(e.target, this.inputs),
                l = this.inputs.length;
            if (i == -1) return;

            if (new_date < this.dates[i]){
                // Date being moved earlier/left
                while (i>=0 && new_date < this.dates[i]){
                    this.pickers[i--].setUTCDate(new_date);
                }
            }
            else if (new_date > this.dates[i]){
                // Date being moved later/right
                while (i<l && new_date > this.dates[i]){
                    this.pickers[i++].setUTCDate(new_date);
                }

            }
            this.updateDates();
        },
        remove: function(){
            $.map(this.pickers, function(p){ p.remove(); });
            delete this.element.data().datepicker;
        }
    };

    function opts_from_el(el, prefix){
        // Derive options from element data-attrs
        var data = $(el).data(),
            out = {}, inkey,
            replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])'),
            prefix = new RegExp('^' + prefix.toLowerCase());
        for (var key in data)
            if (prefix.test(key)){
                inkey = key.replace(replace, function(_,a){ return a.toLowerCase(); });
                out[inkey] = data[key];
            }
        return out;
    }

    function opts_from_locale(lang){
        // Derive options from locale plugins
        var out = {};
        // Check if "de-DE" style date is available, if not language should
        // fallback to 2 letter code eg "de"
        if (!dates[lang]) {
            lang = lang.split('-')[0]
            if (!dates[lang])
                return;
        }
        var d = dates[lang];
        $.each(locale_opts, function(i,k){
            if (k in d)
                out[k] = d[k];
        });
        return out;
    }

    var old = $.fn.datepicker;
    $.fn.datepicker = function ( option ) {
        var args = Array.apply(null, arguments);
        args.shift();
        var internal_return,
            this_return;
        this.each(function () {
            var $this = $(this),
                data = $this.data('datepicker'),
                options = typeof option == 'object' && option;
            if (!data) {
                var elopts = opts_from_el(this, 'date'),
                // Preliminary otions
                    xopts = $.extend({}, defaults, elopts, options),
                    locopts = opts_from_locale(xopts.language),
                // Options priority: js args, data-attrs, locales, defaults
                    opts = $.extend({}, defaults, locopts, elopts, options);
                if ($this.is('.input-daterange') || opts.inputs){
                    var ropts = {
                        inputs: opts.inputs || $this.find('input').toArray()
                    };
                    $this.data('datepicker', (data = new DateRangePicker(this, $.extend(opts, ropts))));
                }
                else{
                    $this.data('datepicker', (data = new Datepicker(this, opts)));
                }
            }
            if (typeof option == 'string' && typeof data[option] == 'function') {
                internal_return = data[option].apply(data, args);
                if (internal_return !== undefined)
                    return false;
            }
        });
        if (internal_return !== undefined)
            return internal_return;
        else
            return this;
    };

    var defaults = $.fn.datepicker.defaults = {
        autoclose: false,
        beforeShowDay: $.noop,
        calendarWeeks: false,
        clearBtn: false,
        daysOfWeekDisabled: [],
        endDate: Infinity,
        forceParse: true,
        format: 'mm/dd/yyyy',
        keyboardNavigation: true,
        language: 'en',
        minViewMode: 0,
        orientation: "auto",
        rtl: false,
        startDate: -Infinity,
        startView: 0,
        todayBtn: false,
        todayHighlight: false,
        weekStart: 0
    };
    var locale_opts = $.fn.datepicker.locale_opts = [
        'format',
        'rtl',
        'weekStart'
    ];
    $.fn.datepicker.Constructor = Datepicker;
    var dates = $.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear"
        }
    };

    var DPGlobal = {
        modes: [
            {
                clsName: 'days',
                navFnc: 'Month',
                navStep: 1
            },
            {
                clsName: 'months',
                navFnc: 'FullYear',
                navStep: 1
            },
            {
                clsName: 'years',
                navFnc: 'FullYear',
                navStep: 10
            }],
        isLeapYear: function (year) {
            return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
        },
        getDaysInMonth: function (year, month) {
            return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
        },
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
        parseFormat: function(format){
            // IE treats \0 as a string end in inputs (truncating the value),
            // so it's a bad format delimiter, anyway
            var separators = format.replace(this.validParts, '\0').split('\0'),
                parts = format.match(this.validParts);
            if (!separators || !separators.length || !parts || parts.length === 0){
                throw new Error("Invalid date format.");
            }
            return {separators: separators, parts: parts};
        },
        parseDate: function(date, format, language) {
            if (date instanceof Date) return date;
            if (typeof format === 'string')
                format = DPGlobal.parseFormat(format);
            if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)) {
                var part_re = /([\-+]\d+)([dmwy])/,
                    parts = date.match(/([\-+]\d+)([dmwy])/g),
                    part, dir;
                date = new Date();
                for (var i=0; i<parts.length; i++) {
                    part = part_re.exec(parts[i]);
                    dir = parseInt(part[1]);
                    switch(part[2]){
                        case 'd':
                            date.setUTCDate(date.getUTCDate() + dir);
                            break;
                        case 'm':
                            date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);
                            break;
                        case 'w':
                            date.setUTCDate(date.getUTCDate() + dir * 7);
                            break;
                        case 'y':
                            date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);
                            break;
                    }
                }
                return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
            }
            var parts = date && date.match(this.nonpunctuation) || [],
                date = new Date(),
                parsed = {},
                setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
                setters_map = {
                    yyyy: function(d,v){ return d.setUTCFullYear(v); },
                    yy: function(d,v){ return d.setUTCFullYear(2000+v); },
                    m: function(d,v){
                        if (isNaN(d))
                            return d;
                        v -= 1;
                        while (v<0) v += 12;
                        v %= 12;
                        d.setUTCMonth(v);
                        while (d.getUTCMonth() != v)
                            d.setUTCDate(d.getUTCDate()-1);
                        return d;
                    },
                    d: function(d,v){ return d.setUTCDate(v); }
                },
                val, filtered, part;
            setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
            setters_map['dd'] = setters_map['d'];
            date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
            var fparts = format.parts.slice();
            // Remove noop parts
            if (parts.length != fparts.length) {
                fparts = $(fparts).filter(function(i,p){
                    return $.inArray(p, setters_order) !== -1;
                }).toArray();
            }
            // Process remainder
            if (parts.length == fparts.length) {
                for (var i=0, cnt = fparts.length; i < cnt; i++) {
                    val = parseInt(parts[i], 10);
                    part = fparts[i];
                    if (isNaN(val)) {
                        switch(part) {
                            case 'MM':
                                filtered = $(dates[language].months).filter(function(){
                                    var m = this.slice(0, parts[i].length),
                                        p = parts[i].slice(0, m.length);
                                    return m == p;
                                });
                                val = $.inArray(filtered[0], dates[language].months) + 1;
                                break;
                            case 'M':
                                filtered = $(dates[language].monthsShort).filter(function(){
                                    var m = this.slice(0, parts[i].length),
                                        p = parts[i].slice(0, m.length);
                                    return m == p;
                                });
                                val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
                                break;
                        }
                    }
                    parsed[part] = val;
                }
                for (var i=0, _date, s; i<setters_order.length; i++){
                    s = setters_order[i];
                    if (s in parsed && !isNaN(parsed[s])){
                        _date = new Date(date);
                        setters_map[s](_date, parsed[s]);
                        if (!isNaN(_date))
                            date = _date;
                    }
                }
            }
            return date;
        },
        formatDate: function(date, format, language){
            if (typeof format === 'string')
                format = DPGlobal.parseFormat(format);
            var val = {
                d: date.getUTCDate(),
                D: dates[language].daysShort[date.getUTCDay()],
                DD: dates[language].days[date.getUTCDay()],
                m: date.getUTCMonth() + 1,
                M: dates[language].monthsShort[date.getUTCMonth()],
                MM: dates[language].months[date.getUTCMonth()],
                yy: date.getUTCFullYear().toString().substring(2),
                yyyy: date.getUTCFullYear()
            };
            val.dd = (val.d < 10 ? '0' : '') + val.d;
            val.mm = (val.m < 10 ? '0' : '') + val.m;
            var date = [],
                seps = $.extend([], format.separators);
            for (var i=0, cnt = format.parts.length; i <= cnt; i++) {
                if (seps.length)
                    date.push(seps.shift());
                date.push(val[format.parts[i]]);
            }
            return date.join('');
        },
        headTemplate: '<thead>'+
        '<tr>'+
        '<th class="prev">&laquo;</th>'+
        '<th colspan="5" class="datepicker-switch"></th>'+
        '<th class="next">&raquo;</th>'+
        '</tr>'+
        '</thead>',
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
    };
    DPGlobal.template = '<div class="datepicker">'+
        '<div class="datepicker-days">'+
        '<table class=" table-condensed">'+
        DPGlobal.headTemplate+
        '<tbody></tbody>'+
        DPGlobal.footTemplate+
        '</table>'+
        '</div>'+
        '<div class="datepicker-months">'+
        '<table class="table-condensed">'+
        DPGlobal.headTemplate+
        DPGlobal.contTemplate+
        DPGlobal.footTemplate+
        '</table>'+
        '</div>'+
        '<div class="datepicker-years">'+
        '<table class="table-condensed">'+
        DPGlobal.headTemplate+
        DPGlobal.contTemplate+
        DPGlobal.footTemplate+
        '</table>'+
        '</div>'+
        '</div>';

    $.fn.datepicker.DPGlobal = DPGlobal;


    /* DATEPICKER NO CONFLICT
     * =================== */

    $.fn.datepicker.noConflict = function(){
        $.fn.datepicker = old;
        return this;
    };


    /* DATEPICKER DATA-API
     * ================== */

    $(document).on(
        'focus.datepicker.data-api click.datepicker.data-api',
        '[data-provide="datepicker"]',
        function(e){
            var $this = $(this);
            if ($this.data('datepicker')) return;
            e.preventDefault();
            // component click requires us to explicitly show it
            $this.datepicker('show');
        }
    );
    $(function(){
        $('[data-provide="datepicker-inline"]').datepicker();
    });

}( window.jQuery ));
































