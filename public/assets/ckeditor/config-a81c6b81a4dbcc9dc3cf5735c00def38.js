/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.editorConfig=function(e){e.toolbarLocation="bottom",e.filebrowserBrowseUrl="/ckeditor/attachment_files",e.filebrowserFlashBrowseUrl="/ckeditor/attachment_files",e.filebrowserFlashUploadUrl="/ckeditor/attachment_files",e.filebrowserImageBrowseLinkUrl="/ckeditor/pictures",e.filebrowserImageBrowseUrl="/ckeditor/pictures",e.filebrowserImageUploadUrl="/ckeditor/pictures",e.filebrowserUploadUrl="/ckeditor/attachment_files",e.filebrowserParams=function(){for(var e,t,r,o=document.getElementsByTagName("meta"),a=new Object,i=0;o.length>i;i++)switch(r=o[i],r.name){case"csrf-token":e=r.content;break;case"csrf-param":t=r.content;break;default:continue}return void 0!==t&&void 0!==e&&(a[t]=e),a},e.addQueryString=function(e,t){var r=[];if(!t)return e;for(var o in t)r.push(o+"="+encodeURIComponent(t[o]));return e+(-1!=e.indexOf("?")?"&":"?")+r.join("&")},CKEDITOR.editorConfig=function(e){e.toolbar="MyToolbar",e.toolbar_MyToolbar=[{name:"styles",items:["Format"]},{name:"basicstyles",items:["Bold","Italic","Underline","-","JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock"]},{name:"paragraph",items:["NumberedList","BulletedList","-","Outdent","Indent","-","Blockquote"]}]},CKEDITOR.on("dialogDefinition",function(t){var r,o,a=t.data.name,i=t.data.definition;CKEDITOR.tools.indexOf(["link","image","attachment","flash"],a)>-1&&(r=i.getContents("Upload")||i.getContents("upload"),o=null==r?null:r.get("upload"),o&&o.filebrowser&&void 0===o.filebrowser.params&&(o.filebrowser.params=e.filebrowserParams(),o.action=e.addQueryString(o.action,o.filebrowser.params)))})},CKEDITOR.on("instanceReady",function(e){for(var t=["div","h1","h2","h3","h4","h5","h6","p","pre","ul","li"],r={indent:!1,breakBeforeOpen:!1,breakAfterOpen:!1,breakBeforeClose:!1,breakAfterClose:!0},o=0;t.length>o;o++)e.editor.dataProcessor.writer.setRules(t[o],r)});