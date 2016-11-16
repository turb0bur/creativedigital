/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v2.0.1
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
"use strict";

window.whatInput = (function () {
  "use strict";function e() {
    o(), i(event), v = !0, L = window.setTimeout(function () {
      v = !1;
    }, 650);
  }function t(e) {
    v || i(e);
  }function n(e) {
    o(), i(e);
  }function o() {
    window.clearTimeout(L);
  }function i(e) {
    var t = u(e),
        n = b[e.type];if (("pointer" === n && (n = a(e)), y !== n)) {
      var o = d(e),
          i = o.nodeName.toLowerCase(),
          c = "input" === i ? o.getAttribute("type") : null;!f.hasAttribute("data-whatinput-formtyping") && y && "keyboard" === n && "tab" !== M[t] && ("textarea" === i || "select" === i || "input" === i && h.indexOf(c) < 0) || E.indexOf(t) > -1 || r(n);
    }"keyboard" === n && s(t);
  }function r(e) {
    y = e, f.setAttribute("data-whatinput", y), -1 === k.indexOf(y) && k.push(y);
  }function u(e) {
    return e.keyCode ? e.keyCode : e.which;
  }function d(e) {
    return e.target || e.srcElement;
  }function a(e) {
    return "number" == typeof e.pointerType ? x[e.pointerType] : "pen" === e.pointerType ? "touch" : e.pointerType;
  }function s(e) {
    -1 === m.indexOf(M[e]) && M[e] && m.push(M[e]);
  }function c(e) {
    var t = u(e),
        n = m.indexOf(M[t]);-1 !== n && m.splice(n, 1);
  }function p() {
    f = document.body, window.PointerEvent ? (f.addEventListener("pointerdown", t), f.addEventListener("pointermove", t)) : window.MSPointerEvent ? (f.addEventListener("MSPointerDown", t), f.addEventListener("MSPointerMove", t)) : (f.addEventListener("mousedown", t), f.addEventListener("mousemove", t), "ontouchstart" in window && f.addEventListener("touchstart", e)), f.addEventListener(l, t), f.addEventListener("keydown", n), f.addEventListener("keyup", n), document.addEventListener("keyup", c);
  }function w() {
    return l = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
  }var f,
      m = [],
      v = !1,
      y = null,
      h = ["button", "checkbox", "file", "image", "radio", "reset", "submit"],
      l = w(),
      E = [16, 17, 18, 91, 93],
      b = { keydown: "keyboard", keyup: "keyboard", mousedown: "mouse", mousemove: "mouse", MSPointerDown: "pointer", MSPointerMove: "pointer", pointerdown: "pointer", pointermove: "pointer", touchstart: "touch" };b[w()] = "mouse";var L,
      k = [],
      M = { 9: "tab", 13: "enter", 16: "shift", 27: "esc", 32: "space", 37: "left", 38: "up", 39: "right", 40: "down" },
      x = { 2: "touch", 3: "touch", 4: "mouse" };return ("addEventListener" in window && Array.prototype.indexOf && (document.body ? p() : document.addEventListener("DOMContentLoaded", p)), { ask: function ask() {
      return y;
    }, keys: function keys() {
      return m;
    }, types: function types() {
      return k;
    }, set: r });
})();
"use strict";!function($){function functionName(fn){if(void 0===Function.prototype.name){var funcNameRegex=/function\s([^(]{1,})\(/,results=funcNameRegex.exec(fn.toString());return results&&results.length>1?results[1].trim():""}return void 0===fn.prototype?fn.constructor.name:fn.prototype.constructor.name}function parseValue(str){return/true/.test(str)?!0:/false/.test(str)?!1:isNaN(1*str)?str:parseFloat(str)}function hyphenate(str){return str.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}var FOUNDATION_VERSION="6.2.2",Foundation={version:FOUNDATION_VERSION,_plugins:{},_uuids:[],rtl:function(){return"rtl"===$("html").attr("dir")},plugin:function(_plugin,name){var className=name||functionName(_plugin),attrName=hyphenate(className);this._plugins[attrName]=this[className]=_plugin},registerPlugin:function(plugin,name){var pluginName=name?hyphenate(name):functionName(plugin.constructor).toLowerCase();plugin.uuid=this.GetYoDigits(6,pluginName),plugin.$element.attr("data-"+pluginName)||plugin.$element.attr("data-"+pluginName,plugin.uuid),plugin.$element.data("zfPlugin")||plugin.$element.data("zfPlugin",plugin),plugin.$element.trigger("init.zf."+pluginName),this._uuids.push(plugin.uuid)},unregisterPlugin:function(plugin){var pluginName=hyphenate(functionName(plugin.$element.data("zfPlugin").constructor));this._uuids.splice(this._uuids.indexOf(plugin.uuid),1),plugin.$element.removeAttr("data-"+pluginName).removeData("zfPlugin").trigger("destroyed.zf."+pluginName);for(var prop in plugin)plugin[prop]=null},reInit:function(plugins){var isJQ=plugins instanceof $;try{if(isJQ)plugins.each(function(){$(this).data("zfPlugin")._init()});else{var type=typeof plugins,_this=this,fns={object:function(plgs){plgs.forEach(function(p){p=hyphenate(p),$("[data-"+p+"]").foundation("_init")})},string:function(){plugins=hyphenate(plugins),$("[data-"+plugins+"]").foundation("_init")},undefined:function(){this.object(Object.keys(_this._plugins))}};fns[type](plugins)}}catch(err){console.error(err)}finally{return plugins}},GetYoDigits:function(length,namespace){return length=length||6,Math.round(Math.pow(36,length+1)-Math.random()*Math.pow(36,length)).toString(36).slice(1)+(namespace?"-"+namespace:"")},reflow:function(elem,plugins){"undefined"==typeof plugins?plugins=Object.keys(this._plugins):"string"==typeof plugins&&(plugins=[plugins]);var _this=this;$.each(plugins,function(i,name){var plugin=_this._plugins[name],$elem=$(elem).find("[data-"+name+"]").addBack("[data-"+name+"]");$elem.each(function(){var $el=$(this),opts={};if($el.data("zfPlugin"))return void console.warn("Tried to initialize "+name+" on an element that already has a Foundation plugin.");if($el.attr("data-options")){$el.attr("data-options").split(";").forEach(function(e){var opt=e.split(":").map(function(el){return el.trim()});opt[0]&&(opts[opt[0]]=parseValue(opt[1]))})}try{$el.data("zfPlugin",new plugin($(this),opts))}catch(er){console.error(er)}finally{return}})})},getFnName:functionName,transitionend:function($elem){var end,transitions={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend"},elem=document.createElement("div");for(var t in transitions)"undefined"!=typeof elem.style[t]&&(end=transitions[t]);return end?end:(end=setTimeout(function(){$elem.triggerHandler("transitionend",[$elem])},1),"transitionend")}};Foundation.util={throttle:function(func,delay){var timer=null;return function(){var context=this,args=arguments;null===timer&&(timer=setTimeout(function(){func.apply(context,args),timer=null},delay))}}};var foundation=function(method){var type=typeof method,$meta=$("meta.foundation-mq"),$noJS=$(".no-js");if($meta.length||$('<meta class="foundation-mq">').appendTo(document.head),$noJS.length&&$noJS.removeClass("no-js"),"undefined"===type)Foundation.MediaQuery._init(),Foundation.reflow(this);else{if("string"!==type)throw new TypeError("We're sorry, "+type+" is not a valid parameter. You must use a string representing the method you wish to invoke.");var args=Array.prototype.slice.call(arguments,1),plugClass=this.data("zfPlugin");if(void 0===plugClass||void 0===plugClass[method])throw new ReferenceError("We're sorry, '"+method+"' is not an available method for "+(plugClass?functionName(plugClass):"this element")+".");1===this.length?plugClass[method].apply(plugClass,args):this.each(function(i,el){plugClass[method].apply($(el).data("zfPlugin"),args)})}return this};window.Foundation=Foundation,$.fn.foundation=foundation,function(){Date.now&&window.Date.now||(window.Date.now=Date.now=function(){return(new Date).getTime()});for(var vendors=["webkit","moz"],i=0;i<vendors.length&&!window.requestAnimationFrame;++i){var vp=vendors[i];window.requestAnimationFrame=window[vp+"RequestAnimationFrame"],window.cancelAnimationFrame=window[vp+"CancelAnimationFrame"]||window[vp+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var lastTime=0;window.requestAnimationFrame=function(callback){var now=Date.now(),nextTime=Math.max(lastTime+16,now);return setTimeout(function(){callback(lastTime=nextTime)},nextTime-now)},window.cancelAnimationFrame=clearTimeout}window.performance&&window.performance.now||(window.performance={start:Date.now(),now:function(){return Date.now()-this.start}})}(),Function.prototype.bind||(Function.prototype.bind=function(oThis){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var aArgs=Array.prototype.slice.call(arguments,1),fToBind=this,fNOP=function(){},fBound=function(){return fToBind.apply(this instanceof fNOP?this:oThis,aArgs.concat(Array.prototype.slice.call(arguments)))};return this.prototype&&(fNOP.prototype=this.prototype),fBound.prototype=new fNOP,fBound})}(jQuery);
"use strict";!function($){function parseStyleToObject(str){var styleObject={};return"string"!=typeof str?styleObject:(str=str.trim().slice(1,-1))?styleObject=str.split("&").reduce(function(ret,param){var parts=param.replace(/\+/g," ").split("="),key=parts[0],val=parts[1];return key=decodeURIComponent(key),val=void 0===val?null:decodeURIComponent(val),ret.hasOwnProperty(key)?Array.isArray(ret[key])?ret[key].push(val):ret[key]=[ret[key],val]:ret[key]=val,ret},{}):styleObject}var MediaQuery={queries:[],current:"",_init:function(){var namedQueries,self=this,extractedStyles=$(".foundation-mq").css("font-family");namedQueries=parseStyleToObject(extractedStyles);for(var key in namedQueries)namedQueries.hasOwnProperty(key)&&self.queries.push({name:key,value:"only screen and (min-width: "+namedQueries[key]+")"});this.current=this._getCurrentSize(),this._watcher()},atLeast:function(size){var query=this.get(size);return query?window.matchMedia(query).matches:!1},get:function(size){for(var i in this.queries)if(this.queries.hasOwnProperty(i)){var query=this.queries[i];if(size===query.name)return query.value}return null},_getCurrentSize:function(){for(var matched,i=0;i<this.queries.length;i++){var query=this.queries[i];window.matchMedia(query.value).matches&&(matched=query)}return"object"==typeof matched?matched.name:matched},_watcher:function(){var _this=this;$(window).on("resize.zf.mediaquery",function(){var newSize=_this._getCurrentSize(),currentSize=_this.current;newSize!==currentSize&&(_this.current=newSize,$(window).trigger("changed.zf.mediaquery",[newSize,currentSize]))})}};Foundation.MediaQuery=MediaQuery,window.matchMedia||(window.matchMedia=function(){var styleMedia=window.styleMedia||window.media;if(!styleMedia){var style=document.createElement("style"),script=document.getElementsByTagName("script")[0],info=null;style.type="text/css",style.id="matchmediajs-test",script.parentNode.insertBefore(style,script),info="getComputedStyle"in window&&window.getComputedStyle(style,null)||style.currentStyle,styleMedia={matchMedium:function(media){var text="@media "+media+"{ #matchmediajs-test { width: 1px; } }";return style.styleSheet?style.styleSheet.cssText=text:style.textContent=text,"1px"===info.width}}}return function(media){return{matches:styleMedia.matchMedium(media||"all"),media:media||"all"}}}()),Foundation.MediaQuery=MediaQuery}(jQuery);
"use strict";!function($){function checkListeners(){eventsListener(),resizeListener(),scrollListener(),closemeListener()}function closemeListener(pluginName){var yetiBoxes=$("[data-yeti-box]"),plugNames=["dropdown","tooltip","reveal"];if(pluginName&&("string"==typeof pluginName?plugNames.push(pluginName):"object"==typeof pluginName&&"string"==typeof pluginName[0]?plugNames.concat(pluginName):console.error("Plugin names must be strings")),yetiBoxes.length){var listeners=plugNames.map(function(name){return"closeme.zf."+name}).join(" ");$(window).off(listeners).on(listeners,function(e,pluginId){var plugin=e.namespace.split(".")[0],plugins=$("[data-"+plugin+"]").not('[data-yeti-box="'+pluginId+'"]');plugins.each(function(){var _this=$(this);_this.triggerHandler("close.zf.trigger",[_this])})})}}function resizeListener(debounce){var timer=void 0,$nodes=$("[data-resize]");$nodes.length&&$(window).off("resize.zf.trigger").on("resize.zf.trigger",function(){timer&&clearTimeout(timer),timer=setTimeout(function(){MutationObserver||$nodes.each(function(){$(this).triggerHandler("resizeme.zf.trigger")}),$nodes.attr("data-events","resize")},debounce||10)})}function scrollListener(debounce){var timer=void 0,$nodes=$("[data-scroll]");$nodes.length&&$(window).off("scroll.zf.trigger").on("scroll.zf.trigger",function(){timer&&clearTimeout(timer),timer=setTimeout(function(){MutationObserver||$nodes.each(function(){$(this).triggerHandler("scrollme.zf.trigger")}),$nodes.attr("data-events","scroll")},debounce||10)})}function eventsListener(){if(!MutationObserver)return!1;var nodes=document.querySelectorAll("[data-resize], [data-scroll], [data-mutate]"),listeningElementsMutation=function(mutationRecordsList){var $target=$(mutationRecordsList[0].target);switch($target.attr("data-events")){case"resize":$target.triggerHandler("resizeme.zf.trigger",[$target]);break;case"scroll":$target.triggerHandler("scrollme.zf.trigger",[$target,window.pageYOffset]);break;default:return!1}};if(nodes.length)for(var i=0;i<=nodes.length-1;i++){var elementObserver=new MutationObserver(listeningElementsMutation);elementObserver.observe(nodes[i],{attributes:!0,childList:!1,characterData:!1,subtree:!1,attributeFilter:["data-events"]})}}var MutationObserver=function(){for(var prefixes=["WebKit","Moz","O","Ms",""],i=0;i<prefixes.length;i++)if(prefixes[i]+"MutationObserver"in window)return window[prefixes[i]+"MutationObserver"];return!1}(),triggers=function(el,type){el.data(type).split(" ").forEach(function(id){$("#"+id)["close"===type?"trigger":"triggerHandler"](type+".zf.trigger",[el])})};$(document).on("click.zf.trigger","[data-open]",function(){triggers($(this),"open")}),$(document).on("click.zf.trigger","[data-close]",function(){var id=$(this).data("close");id?triggers($(this),"close"):$(this).trigger("close.zf.trigger")}),$(document).on("click.zf.trigger","[data-toggle]",function(){triggers($(this),"toggle")}),$(document).on("close.zf.trigger","[data-closable]",function(e){e.stopPropagation();var animation=$(this).data("closable");""!==animation?Foundation.Motion.animateOut($(this),animation,function(){$(this).trigger("closed.zf")}):$(this).fadeOut().trigger("closed.zf")}),$(document).on("focus.zf.trigger blur.zf.trigger","[data-toggle-focus]",function(){var id=$(this).data("toggle-focus");$("#"+id).triggerHandler("toggle.zf.trigger",[$(this)])}),$(window).load(function(){checkListeners()}),Foundation.IHearYou=checkListeners}(jQuery);
"use strict";!function($){function Move(duration,elem,fn){function move(ts){start||(start=window.performance.now()),prog=ts-start,fn.apply(elem),duration>prog?anim=window.requestAnimationFrame(move,elem):(window.cancelAnimationFrame(anim),elem.trigger("finished.zf.animate",[elem]).triggerHandler("finished.zf.animate",[elem]))}var anim,prog,start=null;anim=window.requestAnimationFrame(move)}function animate(isIn,element,animation,cb){function finish(){isIn||element.hide(),reset(),cb&&cb.apply(element)}function reset(){element[0].style.transitionDuration=0,element.removeClass(initClass+" "+activeClass+" "+animation)}if(element=$(element).eq(0),element.length){var initClass=isIn?initClasses[0]:initClasses[1],activeClass=isIn?activeClasses[0]:activeClasses[1];reset(),element.addClass(animation).css("transition","none"),requestAnimationFrame(function(){element.addClass(initClass),isIn&&element.show()}),requestAnimationFrame(function(){element[0].offsetWidth,element.css("transition","").addClass(activeClass)}),element.one(Foundation.transitionend(element),finish)}}var initClasses=["mui-enter","mui-leave"],activeClasses=["mui-enter-active","mui-leave-active"],Motion={animateIn:function(element,animation,cb){animate(!0,element,animation,cb)},animateOut:function(element,animation,cb){animate(!1,element,animation,cb)}};Foundation.Move=Move,Foundation.Motion=Motion}(jQuery);
"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();!function($){var OffCanvas=function(){function OffCanvas(element,options){_classCallCheck(this,OffCanvas),this.$element=element,this.options=$.extend({},OffCanvas.defaults,this.$element.data(),options),this.$lastTrigger=$(),this.$triggers=$(),this._init(),this._events(),Foundation.registerPlugin(this,"OffCanvas")}return _createClass(OffCanvas,[{key:"_init",value:function(){var id=this.$element.attr("id");if(this.$element.attr("aria-hidden","true"),this.$triggers=$(document).find('[data-open="'+id+'"], [data-close="'+id+'"], [data-toggle="'+id+'"]').attr("aria-expanded","false").attr("aria-controls",id),this.options.closeOnClick)if($(".js-off-canvas-exit").length)this.$exiter=$(".js-off-canvas-exit");else{var exiter=document.createElement("div");exiter.setAttribute("class","js-off-canvas-exit"),$("[data-off-canvas-content]").append(exiter),this.$exiter=$(exiter)}this.options.isRevealed=this.options.isRevealed||new RegExp(this.options.revealClass,"g").test(this.$element[0].className),this.options.isRevealed&&(this.options.revealOn=this.options.revealOn||this.$element[0].className.match(/(reveal-for-medium|reveal-for-large)/g)[0].split("-")[2],this._setMQChecker()),this.options.transitionTime||(this.options.transitionTime=1e3*parseFloat(window.getComputedStyle($("[data-off-canvas-wrapper]")[0]).transitionDuration))}},{key:"_events",value:function(){this.$element.off(".zf.trigger .zf.offcanvas").on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":this.close.bind(this),"toggle.zf.trigger":this.toggle.bind(this),"keydown.zf.offcanvas":this._handleKeyboard.bind(this)}),this.options.closeOnClick&&this.$exiter.length&&this.$exiter.on({"click.zf.offcanvas":this.close.bind(this)})}},{key:"_setMQChecker",value:function(){var _this=this;$(window).on("changed.zf.mediaquery",function(){Foundation.MediaQuery.atLeast(_this.options.revealOn)?_this.reveal(!0):_this.reveal(!1)}).one("load.zf.offcanvas",function(){Foundation.MediaQuery.atLeast(_this.options.revealOn)&&_this.reveal(!0)})}},{key:"reveal",value:function(isRevealed){var $closer=this.$element.find("[data-close]");isRevealed?(this.close(),this.isRevealed=!0,this.$element.off("open.zf.trigger toggle.zf.trigger"),$closer.length&&$closer.hide()):(this.isRevealed=!1,this.$element.on({"open.zf.trigger":this.open.bind(this),"toggle.zf.trigger":this.toggle.bind(this)}),$closer.length&&$closer.show())}},{key:"open",value:function(event,trigger){if(!this.$element.hasClass("is-open")&&!this.isRevealed){var _this=this;$(document.body);this.options.forceTop&&$("body").scrollTop(0),Foundation.Move(this.options.transitionTime,this.$element,function(){$("[data-off-canvas-wrapper]").addClass("is-off-canvas-open is-open-"+_this.options.position),_this.$element.addClass("is-open")}),this.$triggers.attr("aria-expanded","true"),this.$element.attr("aria-hidden","false").trigger("opened.zf.offcanvas"),this.options.closeOnClick&&this.$exiter.addClass("is-visible"),trigger&&(this.$lastTrigger=trigger),this.options.autoFocus&&this.$element.one(Foundation.transitionend(this.$element),function(){_this.$element.find("a, button").eq(0).focus()}),this.options.trapFocus&&($("[data-off-canvas-content]").attr("tabindex","-1"),this._trapFocus())}}},{key:"_trapFocus",value:function(){var focusable=Foundation.Keyboard.findFocusable(this.$element),first=focusable.eq(0),last=focusable.eq(-1);focusable.off(".zf.offcanvas").on("keydown.zf.offcanvas",function(e){(9===e.which||9===e.keycode)&&(e.target!==last[0]||e.shiftKey||(e.preventDefault(),first.focus()),e.target===first[0]&&e.shiftKey&&(e.preventDefault(),last.focus()))})}},{key:"close",value:function(){if(this.$element.hasClass("is-open")&&!this.isRevealed){var _this=this;$("[data-off-canvas-wrapper]").removeClass("is-off-canvas-open is-open-"+_this.options.position),_this.$element.removeClass("is-open"),this.$element.attr("aria-hidden","true").trigger("closed.zf.offcanvas"),this.options.closeOnClick&&this.$exiter.removeClass("is-visible"),this.$triggers.attr("aria-expanded","false"),this.options.trapFocus&&$("[data-off-canvas-content]").removeAttr("tabindex")}}},{key:"toggle",value:function(event,trigger){this.$element.hasClass("is-open")?this.close(event,trigger):this.open(event,trigger)}},{key:"_handleKeyboard",value:function(event){27===event.which&&(event.stopPropagation(),event.preventDefault(),this.close(),this.$lastTrigger.focus())}},{key:"destroy",value:function(){this.close(),this.$element.off(".zf.trigger .zf.offcanvas"),this.$exiter.off(".zf.offcanvas"),Foundation.unregisterPlugin(this)}}]),OffCanvas}();OffCanvas.defaults={closeOnClick:!0,transitionTime:0,position:"left",forceTop:!0,isRevealed:!1,revealOn:null,autoFocus:!0,revealClass:"reveal-for-",trapFocus:!1},Foundation.plugin(OffCanvas,"OffCanvas")}(jQuery);
"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();!function($){var ResponsiveMenu=function(){function ResponsiveMenu(element){_classCallCheck(this,ResponsiveMenu),this.$element=$(element),this.rules=this.$element.data("responsive-menu"),this.currentMq=null,this.currentPlugin=null,this._init(),this._events(),Foundation.registerPlugin(this,"ResponsiveMenu")}return _createClass(ResponsiveMenu,[{key:"_init",value:function(){if("string"==typeof this.rules){for(var rulesTree={},rules=this.rules.split(" "),i=0;i<rules.length;i++){var rule=rules[i].split("-"),ruleSize=rule.length>1?rule[0]:"small",rulePlugin=rule.length>1?rule[1]:rule[0];null!==MenuPlugins[rulePlugin]&&(rulesTree[ruleSize]=MenuPlugins[rulePlugin])}this.rules=rulesTree}$.isEmptyObject(this.rules)||this._checkMediaQueries()}},{key:"_events",value:function(){var _this=this;$(window).on("changed.zf.mediaquery",function(){_this._checkMediaQueries()})}},{key:"_checkMediaQueries",value:function(){var matchedMq,_this=this;$.each(this.rules,function(key){Foundation.MediaQuery.atLeast(key)&&(matchedMq=key)}),matchedMq&&(this.currentPlugin instanceof this.rules[matchedMq].plugin||($.each(MenuPlugins,function(key,value){_this.$element.removeClass(value.cssClass)}),this.$element.addClass(this.rules[matchedMq].cssClass),this.currentPlugin&&this.currentPlugin.destroy(),this.currentPlugin=new this.rules[matchedMq].plugin(this.$element,{})))}},{key:"destroy",value:function(){this.currentPlugin.destroy(),$(window).off(".zf.ResponsiveMenu"),Foundation.unregisterPlugin(this)}}]),ResponsiveMenu}();ResponsiveMenu.defaults={};var MenuPlugins={dropdown:{cssClass:"dropdown",plugin:Foundation._plugins["dropdown-menu"]||null},drilldown:{cssClass:"drilldown",plugin:Foundation._plugins.drilldown||null},accordion:{cssClass:"accordion-menu",plugin:Foundation._plugins["accordion-menu"]||null}};Foundation.plugin(ResponsiveMenu,"ResponsiveMenu")}(jQuery);
"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();!function($){var ResponsiveToggle=function(){function ResponsiveToggle(element,options){_classCallCheck(this,ResponsiveToggle),this.$element=$(element),this.options=$.extend({},ResponsiveToggle.defaults,this.$element.data(),options),this._init(),this._events(),Foundation.registerPlugin(this,"ResponsiveToggle")}return _createClass(ResponsiveToggle,[{key:"_init",value:function(){var targetID=this.$element.data("responsive-toggle");targetID||console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar."),this.$targetMenu=$("#"+targetID),this.$toggler=this.$element.find("[data-toggle]"),this._update()}},{key:"_events",value:function(){this._updateMqHandler=this._update.bind(this),$(window).on("changed.zf.mediaquery",this._updateMqHandler),this.$toggler.on("click.zf.responsiveToggle",this.toggleMenu.bind(this))}},{key:"_update",value:function(){Foundation.MediaQuery.atLeast(this.options.hideFor)?(this.$element.hide(),this.$targetMenu.show()):(this.$element.show(),this.$targetMenu.hide())}},{key:"toggleMenu",value:function(){Foundation.MediaQuery.atLeast(this.options.hideFor)||(this.$targetMenu.toggle(0),this.$element.trigger("toggled.zf.responsiveToggle"))}},{key:"destroy",value:function(){this.$element.off(".zf.responsiveToggle"),this.$toggler.off(".zf.responsiveToggle"),$(window).off("changed.zf.mediaquery",this._updateMqHandler),Foundation.unregisterPlugin(this)}}]),ResponsiveToggle}();ResponsiveToggle.defaults={hideFor:"medium"},Foundation.plugin(ResponsiveToggle,"ResponsiveToggle")}(jQuery);
"use strict";function animate(isIn,element,animation,cb){function finish(){isIn||element.hide(),reset(),cb&&cb.apply(element)}function reset(){element[0].style.transitionDuration=0,element.removeClass(initClass+" "+activeClass+" "+animation)}if(element=$(element).eq(0),element.length){if(null===endEvent)return isIn?element.show():element.hide(),void cb();var initClass=isIn?initClasses[0]:initClasses[1],activeClass=isIn?activeClasses[0]:activeClasses[1];reset(),element.addClass(animation),element.css("transition","none"),requestAnimationFrame(function(){element.addClass(initClass),isIn&&element.show()}),requestAnimationFrame(function(){element[0].offsetWidth,element.css("transition",""),element.addClass(activeClass)}),element.one("transitionend",finish)}}!function(){Date.now||(Date.now=function(){return(new Date).getTime()});for(var vendors=["webkit","moz"],i=0;i<vendors.length&&!window.requestAnimationFrame;++i){var vp=vendors[i];window.requestAnimationFrame=window[vp+"RequestAnimationFrame"],window.cancelAnimationFrame=window[vp+"CancelAnimationFrame"]||window[vp+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var lastTime=0;window.requestAnimationFrame=function(callback){var now=Date.now(),nextTime=Math.max(lastTime+16,now);return setTimeout(function(){callback(lastTime=nextTime)},nextTime-now)},window.cancelAnimationFrame=clearTimeout}}();var initClasses=["mui-enter","mui-leave"],activeClasses=["mui-enter-active","mui-leave-active"],endEvent=function(){var transitions={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend"},elem=window.document.createElement("div");for(var t in transitions)if("undefined"!=typeof elem.style[t])return transitions[t];return null}(),MotionUI={animateIn:function(element,animation,cb){animate(!0,element,animation,cb)},animateOut:function(element,animation,cb){animate(!1,element,animation,cb)}};
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.5.9
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
"use strict";

!(function (a) {
  "use strict";"function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery);
})(function (a) {
  "use strict";var b = window.Slick || {};b = (function () {
    function c(c, d) {
      var f,
          e = this;e.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: a(c), appendDots: a(c), arrows: !0, asNavFor: null, prevArrow: "<button type=\"button\" data-role=\"none\" class=\"slick-prev\" aria-label=\"Previous\" tabindex=\"0\" role=\"button\">Previous</button>", nextArrow: "<button type=\"button\" data-role=\"none\" class=\"slick-next\" aria-label=\"Next\" tabindex=\"0\" role=\"button\">Next</button>", autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function customPaging(a, b) {
          return "<button type=\"button\" data-role=\"none\" role=\"button\" aria-required=\"false\" tabindex=\"0\">" + (b + 1) + "</button>";
        }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !1, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, e.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.hidden = "hidden", e.paused = !1, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, f, d), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0), e.checkResponsive(!0);
    }var b = 0;return c;
  })(), b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
    var e = this;if ("boolean" == typeof c) d = c, c = null;else if (0 > c || c >= e.slideCount) return !1;e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
      a(c).attr("data-slick-index", b);
    }), e.$slidesCache = e.$slides, e.reinit();
  }, b.prototype.animateHeight = function () {
    var a = this;if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({ height: b }, a.options.speed);
    }
  }, b.prototype.animateSlide = function (b, c) {
    var d = {},
        e = this;e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({ left: b }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({ top: b }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({ animStart: e.currentLeft }).animate({ animStart: b }, { duration: e.options.speed, easing: e.options.easing, step: function step(a) {
        a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d));
      }, complete: function complete() {
        c && c.call();
      } })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
      e.disableTransition(), c.call();
    }, e.options.speed));
  }, b.prototype.asNavFor = function (b) {
    var c = this,
        d = c.options.asNavFor;d && null !== d && (d = a(d).not(c.$slider)), null !== d && "object" == typeof d && d.each(function () {
      var c = a(this).slick("getSlick");c.unslicked || c.slideHandler(b, !0);
    });
  }, b.prototype.applyTransition = function (a) {
    var b = this,
        c = {};b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
  }, b.prototype.autoPlay = function () {
    var a = this;a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed));
  }, b.prototype.autoPlayClear = function () {
    var a = this;a.autoPlayTimer && clearInterval(a.autoPlayTimer);
  }, b.prototype.autoPlayIterator = function () {
    var a = this;a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (a.currentSlide - 1 === 0 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll);
  }, b.prototype.buildArrows = function () {
    var b = this;b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
  }, b.prototype.buildDots = function () {
    var c,
        d,
        b = this;if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
      for (d = "<ul class=\"" + b.options.dotsClass + "\">", c = 0; c <= b.getDotCount(); c += 1) d += "<li>" + b.options.customPaging.call(this, b, c) + "</li>";d += "</ul>", b.$dots = a(d).appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
    }
  }, b.prototype.buildOut = function () {
    var b = this;b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
      a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "");
    }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a("<div class=\"slick-track\"/>").appendTo(b.$slider) : b.$slides.wrapAll("<div class=\"slick-track\"/>").parent(), b.$list = b.$slideTrack.wrap("<div aria-live=\"polite\" class=\"slick-list\"/>").parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable");
  }, b.prototype.buildRows = function () {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        a = this;if ((e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1)) {
      for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
        var i = document.createElement("div");for (c = 0; c < a.options.rows; c++) {
          var j = document.createElement("div");for (d = 0; d < a.options.slidesPerRow; d++) {
            var k = b * h + (c * a.options.slidesPerRow + d);g.get(k) && j.appendChild(g.get(k));
          }i.appendChild(j);
        }e.appendChild(i);
      }a.$slider.html(e), a.$slider.children().children().children().css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" });
    }
  }, b.prototype.checkResponsive = function (b, c) {
    var e,
        f,
        g,
        d = this,
        h = !1,
        i = d.$slider.width(),
        j = window.innerWidth || a(window).width();if (("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive)) {
      f = null;for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h]);
    }
  }, b.prototype.changeSlide = function (b, c) {
    var f,
        g,
        h,
        d = this,
        e = a(b.target);switch ((e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message)) {case "previous":
        g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);break;case "next":
        g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);break;case "index":
        var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");break;default:
        return;}
  }, b.prototype.checkNavigable = function (a) {
    var c,
        d,
        b = this;if ((c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1])) a = c[c.length - 1];else for (var e in c) {
      if (a < c[e]) {
        a = d;break;
      }d = c[e];
    }return a;
  }, b.prototype.cleanUpEvents = function () {
    var b = this;b.options.dots && null !== b.$dots && (a("li", b.$dots).off("click.slick", b.changeSlide), b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).off("mouseenter.slick", a.proxy(b.setPaused, b, !0)).off("mouseleave.slick", a.proxy(b.setPaused, b, !1))), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.$list.off("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition);
  }, b.prototype.cleanUpRows = function () {
    var b,
        a = this;a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.html(b));
  }, b.prototype.clickHandler = function (a) {
    var b = this;b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
  }, b.prototype.destroy = function (b) {
    var c = this;c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      a(this).attr("style", a(this).data("originalStyling"));
    }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c]);
  }, b.prototype.disableTransition = function (a) {
    var b = this,
        c = {};c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
  }, b.prototype.fadeSlide = function (a, b) {
    var c = this;c.cssTransitions === !1 ? (c.$slides.eq(a).css({ zIndex: c.options.zIndex }), c.$slides.eq(a).animate({ opacity: 1 }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({ opacity: 1, zIndex: c.options.zIndex }), b && setTimeout(function () {
      c.disableTransition(a), b.call();
    }, c.options.speed));
  }, b.prototype.fadeSlideOut = function (a) {
    var b = this;b.cssTransitions === !1 ? b.$slides.eq(a).animate({ opacity: 0, zIndex: b.options.zIndex - 2 }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({ opacity: 0, zIndex: b.options.zIndex - 2 }));
  }, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
    var b = this;null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit());
  }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
    var a = this;return a.currentSlide;
  }, b.prototype.getDotCount = function () {
    var a = this,
        b = 0,
        c = 0,
        d = 0;if (a.options.infinite === !0) for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;else if (a.options.centerMode === !0) d = a.slideCount;else for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;return d - 1;
  }, b.prototype.getLeft = function (a) {
    var c,
        d,
        f,
        b = this,
        e = 0;return (b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c);
  }, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
    var b = this;return b.options[a];
  }, b.prototype.getNavigableIndexes = function () {
    var e,
        a = this,
        b = 0,
        c = 0,
        d = [];for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;return d;
  }, b.prototype.getSlick = function () {
    return this;
  }, b.prototype.getSlideCount = function () {
    var c,
        d,
        e,
        b = this;return (e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
      return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0;
    }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll);
  }, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
    var c = this;c.changeSlide({ data: { message: "index", index: parseInt(a) } }, b);
  }, b.prototype.init = function (b) {
    var c = this;a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA();
  }, b.prototype.initArrowEvents = function () {
    var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", { message: "previous" }, a.changeSlide), a.$nextArrow.on("click.slick", { message: "next" }, a.changeSlide));
  }, b.prototype.initDotEvents = function () {
    var b = this;b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", { message: "index" }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.setPaused, b, !0)).on("mouseleave.slick", a.proxy(b.setPaused, b, !1));
  }, b.prototype.initializeEvents = function () {
    var b = this;b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", { action: "start" }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", { action: "move" }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", { action: "end" }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.$list.on("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
  }, b.prototype.initUI = function () {
    var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay();
  }, b.prototype.keyHandler = function (a) {
    var b = this;a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({ data: { message: "previous" } }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({ data: { message: "next" } }));
  }, b.prototype.lazyLoad = function () {
    function g(b) {
      a("img[data-lazy]", b).each(function () {
        var b = a(this),
            c = a(this).attr("data-lazy"),
            d = document.createElement("img");d.onload = function () {
          b.animate({ opacity: 0 }, 100, function () {
            b.attr("src", c).animate({ opacity: 1 }, 200, function () {
              b.removeAttr("data-lazy").removeClass("slick-loading");
            });
          });
        }, d.src = c;
      });
    }var c,
        d,
        e,
        f,
        b = this;b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = e + b.options.slidesToShow, b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d));
  }, b.prototype.loadSlider = function () {
    var a = this;a.setPosition(), a.$slideTrack.css({ opacity: 1 }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
  }, b.prototype.next = b.prototype.slickNext = function () {
    var a = this;a.changeSlide({ data: { message: "next" } });
  }, b.prototype.orientationChange = function () {
    var a = this;a.checkResponsive(), a.setPosition();
  }, b.prototype.pause = b.prototype.slickPause = function () {
    var a = this;a.autoPlayClear(), a.paused = !0;
  }, b.prototype.play = b.prototype.slickPlay = function () {
    var a = this;a.paused = !1, a.autoPlay();
  }, b.prototype.postSlide = function (a) {
    var b = this;b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay(), b.options.accessibility === !0 && b.initADA();
  }, b.prototype.prev = b.prototype.slickPrev = function () {
    var a = this;a.changeSlide({ data: { message: "previous" } });
  }, b.prototype.preventDefault = function (a) {
    a.preventDefault();
  }, b.prototype.progressiveLazyLoad = function () {
    var c,
        d,
        b = this;c = a("img[data-lazy]", b.$slider).length, c > 0 && (d = a("img[data-lazy]", b.$slider).first(), d.attr("src", null), d.attr("src", d.attr("data-lazy")).removeClass("slick-loading").load(function () {
      d.removeAttr("data-lazy"), b.progressiveLazyLoad(), b.options.adaptiveHeight === !0 && b.setPosition();
    }).error(function () {
      d.removeAttr("data-lazy"), b.progressiveLazyLoad();
    }));
  }, b.prototype.refresh = function (b) {
    var d,
        e,
        c = this;e = c.slideCount - c.options.slidesToShow, c.options.infinite || (c.slideCount <= c.options.slidesToShow ? c.currentSlide = 0 : c.currentSlide > e && (c.currentSlide = e)), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, { currentSlide: d }), c.init(), b || c.changeSlide({ data: { message: "index", index: d } }, !1);
  }, b.prototype.registerBreakpoints = function () {
    var c,
        d,
        e,
        b = this,
        f = b.options.responsive || null;if ("array" === a.type(f) && f.length) {
      b.respondTo = b.options.respondTo || "window";for (c in f) if ((e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c))) {
        for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings;
      }b.breakpoints.sort(function (a, c) {
        return b.options.mobileFirst ? a - c : c - a;
      });
    }
  }, b.prototype.reinit = function () {
    var b = this;b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses(0), b.setPosition(), b.$slider.trigger("reInit", [b]), b.options.autoplay === !0 && b.focusHandler();
  }, b.prototype.resize = function () {
    var b = this;a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
      b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition();
    }, 50));
  }, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
    var d = this;return ("boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit()));
  }, b.prototype.setCSS = function (a) {
    var d,
        e,
        b = this,
        c = {};b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)));
  }, b.prototype.setDimensions = function () {
    var a = this;a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({ padding: "0px " + a.options.centerPadding }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({ padding: a.options.centerPadding + " 0px" })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
  }, b.prototype.setFade = function () {
    var c,
        b = this;b.$slides.each(function (d, e) {
      c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({ position: "relative", right: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 }) : a(e).css({ position: "relative", left: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 });
    }), b.$slides.eq(b.currentSlide).css({ zIndex: b.options.zIndex - 1, opacity: 1 });
  }, b.prototype.setHeight = function () {
    var a = this;if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height", b);
    }
  }, b.prototype.setOption = b.prototype.slickSetOption = function (b, c, d) {
    var f,
        g,
        e = this;if ("responsive" === b && "array" === a.type(c)) for (g in c) if ("array" !== a.type(e.options.responsive)) e.options.responsive = [c[g]];else {
      for (f = e.options.responsive.length - 1; f >= 0;) e.options.responsive[f].breakpoint === c[g].breakpoint && e.options.responsive.splice(f, 1), f--;e.options.responsive.push(c[g]);
    } else e.options[b] = c;d === !0 && (e.unload(), e.reinit());
  }, b.prototype.setPosition = function () {
    var a = this;a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a]);
  }, b.prototype.setProps = function () {
    var a = this,
        b = document.body.style;a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1;
  }, b.prototype.setSlideClasses = function (a) {
    var c,
        d,
        e,
        f,
        b = this;d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad();
  }, b.prototype.setupInfinite = function () {
    var c,
        d,
        e,
        b = this;if ((b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow))) {
      for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        a(this).attr("id", "");
      });
    }
  }, b.prototype.setPaused = function (a) {
    var b = this;b.options.autoplay === !0 && b.options.pauseOnHover === !0 && (b.paused = a, a ? b.autoPlayClear() : b.autoPlay());
  }, b.prototype.selectHandler = function (b) {
    var c = this,
        d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
        e = parseInt(d.attr("data-slick-index"));return (e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e));
  }, b.prototype.slideHandler = function (a, b, c) {
    var d,
        e,
        f,
        g,
        h = null,
        i = this;return (b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
      i.postSlide(d);
    }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
      i.postSlide(d);
    }) : i.postSlide(d))) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
      i.postSlide(e);
    })) : i.postSlide(e), void i.animateHeight()) : void (c !== !0 ? i.animateSlide(h, function () {
      i.postSlide(e);
    }) : i.postSlide(e)))));
  }, b.prototype.startLoad = function () {
    var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading");
  }, b.prototype.swipeDirection = function () {
    var a,
        b,
        c,
        d,
        e = this;return (a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "left" : "right" : "vertical");
  }, b.prototype.swipeEnd = function (a) {
    var c,
        b = this;if ((b.dragging = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX)) return !1;if ((b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe)) switch (b.swipeDirection()) {case "left":
        c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.slideHandler(c), b.currentDirection = 0, b.touchObject = {}, b.$slider.trigger("swipe", [b, "left"]);break;case "right":
        c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.slideHandler(c), b.currentDirection = 1, b.touchObject = {}, b.$slider.trigger("swipe", [b, "right"]);} else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {});
  }, b.prototype.swipeHandler = function (a) {
    var b = this;if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch ((b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action)) {case "start":
        b.swipeStart(a);break;case "move":
        b.swipeMove(a);break;case "end":
        b.swipeEnd(a);}
  }, b.prototype.swipeMove = function (a) {
    var d,
        e,
        f,
        g,
        h,
        b = this;return (h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0));
  }, b.prototype.swipeStart = function (a) {
    var c,
        b = this;return 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void (b.dragging = !0));
  }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
    var a = this;null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit());
  }, b.prototype.unload = function () {
    var b = this;a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, b.prototype.unslick = function (a) {
    var b = this;b.$slider.trigger("unslick", [b, a]), b.destroy();
  }, b.prototype.updateArrows = function () {
    var b,
        a = this;b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, b.prototype.updateDots = function () {
    var a = this;null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"));
  }, b.prototype.visibility = function () {
    var a = this;document[a.hidden] ? (a.paused = !0, a.autoPlayClear()) : a.options.autoplay === !0 && (a.paused = !1, a.autoPlay());
  }, b.prototype.initADA = function () {
    var b = this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
      a(this).attr({ role: "option", "aria-describedby": "slick-slide" + b.instanceUid + c });
    }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
      a(this).attr({ role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + b.instanceUid + c, id: "slick-slide" + b.instanceUid + c });
    }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA();
  }, b.prototype.activateADA = function () {
    var a = this;a.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
  }, b.prototype.focusHandler = function () {
    var b = this;b.$slider.on("focus.slick blur.slick", "*", function (c) {
      c.stopImmediatePropagation();var d = a(this);setTimeout(function () {
        b.isPlay && (d.is(":focus") ? (b.autoPlayClear(), b.paused = !0) : (b.paused = !1, b.autoPlay()));
      }, 0);
    });
  }, a.fn.slick = function () {
    var f,
        g,
        a = this,
        c = arguments[0],
        d = Array.prototype.slice.call(arguments, 1),
        e = a.length;for (f = 0; e > f; f++) if (("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g)) return g;return a;
  };
});
"use strict";!function($){$(document).foundation(),$('iframe[src*="youtube.com"]').wrap("<div class='flex-video widescreen'/>"),$('iframe[src*="vimeo.com"]').wrap("<div class='flex-video widescreen vimeo'/>"),$(document).ready(function(){}),$(window).load(function(){$(".ba-works-slider").slick({dots:!0,slide:".ba-works-slide",autoplay:!0,arrows:!0,prevArrow:$(".ba-works-prev"),nextArrow:$(".ba-works-next")}),$(".ba-team-slider").slick({slide:".ba-team-slide",slidesToShow:3,slidesToScroll:1,prevArrow:".ba-team-prev",nextArrow:".ba-team-next",responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1}}]})}),$(window).on("resize",function(){})}(jQuery);
"use strict";
//# sourceMappingURL=scripts-dist.js.map