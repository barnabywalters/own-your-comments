/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
OwnnYournComments_kango.Console=function(){this._consoleService=Components.classes["@mozilla.org/consoleservice;1"].getService(Components.interfaces.nsIConsoleService)};OwnnYournComments_kango.Console.prototype=OwnnYournComments_kango.oop.extend(OwnnYournComments_kango.IConsole,{_consoleService:null,log:function(a){1<arguments.length&&(a=OwnnYournComments_kango.string.format.apply(OwnnYournComments_kango.string,arguments));this._consoleService.logStringMessage(a)}});OwnnYournComments_kango.console=new OwnnYournComments_kango.Console;
