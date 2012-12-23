/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
OwnnYournComments_kango.ui.OptionsPage=function(){var a=OwnnYournComments_kango.getExtensionInfo();if("undefined"!=typeof a.options_page){var b=this._optionsUrl=OwnnYournComments_kango.io.getExtensionFileUrl(a.options_page).toLowerCase();OwnnYournComments_kango.browser.addEventListener("DOMContentLoaded",function(a){0==a.url.toLowerCase().indexOf(b)&&(a.window.kango=OwnnYournComments_kango)})}};
OwnnYournComments_kango.ui.OptionsPage.prototype=OwnnYournComments_kango.oop.extend(OwnnYournComments_kango.ui.IOptionsPage,{_optionsUrl:"",open:function(a){if(""!=this._optionsUrl){var b=this._optionsUrl;"undefined"!=typeof a&&(b+="#"+a);OwnnYournComments_kango.browser.tabs.create({url:b,focused:!0,reuse:!0});return!0}return!1}});OwnnYournComments_kango.ui.optionsPage=new OwnnYournComments_kango.ui.OptionsPage;
