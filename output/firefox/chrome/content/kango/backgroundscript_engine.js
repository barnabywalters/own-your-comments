/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
OwnnYournComments_kango.BackgroundScriptEngine=function(){};
OwnnYournComments_kango.BackgroundScriptEngine.prototype={_sandbox:null,_window:null,init:function(a){var b=this;this._sandbox=OwnnYournComments_kango.lang.createHTMLSandbox("background.html",function(c){b._initScripts(c,a)})},getContext:function(){return this._window},_initScripts:function(a,b){this._window=a;a.kango=b;var c=a.document,d=OwnnYournComments_kango.getExtensionInfo().background_scripts;if("undefined"!=typeof d){var e=0,f=function(){var a=c.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src",OwnnYournComments_kango.io.getExtensionFileUrl(d[e]));
var b=function(){e++;e<d.length&&f()};"undefined"!=typeof a.onreadystatechange?a.onreadystatechange=function(){"complete"==a.readyState&&b()}:a.onload=b;c.body.appendChild(a)};f()}}};OwnnYournComments_kango.BackgroundScriptModule=function(){};OwnnYournComments_kango.BackgroundScriptModule.prototype.init=function(a){OwnnYournComments_kango.backgroundScript=new OwnnYournComments_kango.BackgroundScriptEngine;OwnnYournComments_kango.addEventListener(OwnnYournComments_kango.event.READY,function(){OwnnYournComments_kango.backgroundScript.init(a)})};OwnnYournComments_kango.registerModule(OwnnYournComments_kango.BackgroundScriptModule);
