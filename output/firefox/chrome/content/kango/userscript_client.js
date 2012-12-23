/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
OwnnYournComments_kango.UserscriptEngineClient=function(){};OwnnYournComments_kango.UserscriptEngineClient.prototype={run:function(c,b,a){var d=this;OwnnYournComments_kango.invokeAsync("kango.userscript.getScripts",c.document.URL,b,a,function(a){for(var b in a)a.hasOwnProperty(b)&&d.executeScript(c,a[b].join("\n\n"))})},executeScript:function(c,b){try{var a=new OwnnYournComments_kango.UserscriptApi(c);a.kango=OwnnYournComments_kango;OwnnYournComments_kango.lang.evalInSandbox(c,a,b)}catch(d){OwnnYournComments_kango.console.log("US: "+d.message+"\n"+d.stack||"")}}};OwnnYournComments_kango.UserscriptApi=function(){};
OwnnYournComments_kango.UserscriptApi.prototype={};
