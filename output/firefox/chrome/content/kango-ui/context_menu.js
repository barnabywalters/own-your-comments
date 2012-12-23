/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
OwnnYournComments_kango.ui.ContextMenuItem=function(a){this.superclass.apply(this,arguments);this.init(a)};
OwnnYournComments_kango.ui.ContextMenuItem.prototype=OwnnYournComments_kango.oop.extend(OwnnYournComments_kango.ui.ContextMenuItemBase,{init:function(a){this.addItem("kango-item1",a.caption,a.context||"all")},addItem:function(a,d,e){var c=document.getElementById("contentAreaContextMenu"),b=document.createElement("menuitem");b.setAttribute("id",a);b.setAttribute("label",d);b.addEventListener("command",OwnnYournComments_kango.lang.bind(function(a){var b=document.popupNode;this.fireEvent(this.event.CLICK,{srcUrl:b.src,linkUrl:b.href});a.preventDefault()},this),!1);c.appendChild(b);
c.addEventListener("popupshowing",function(){var b=document.getElementById(a);null!=b&&"image"==e&&(b.hidden=!gContextMenu.onImage)},!1)}});OwnnYournComments_kango.ContextMenuModule=function(){};OwnnYournComments_kango.ContextMenuModule.prototype.init=function(){var a=OwnnYournComments_kango.getExtensionInfo();"undefined"!=typeof a.context_menu_item&&(OwnnYournComments_kango.ui.contextMenuItem=new OwnnYournComments_kango.ui.ContextMenuItem(a.context_menu_item))};OwnnYournComments_kango.registerModule(OwnnYournComments_kango.ContextMenuModule);
