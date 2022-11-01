(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d09f"],{f692:function(t,s,a){"use strict";a.r(s);var o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("v-container",{attrs:{"fill-height":""}},[a("v-row",{attrs:{"justify-center":"","align-center":""}},[a("v-col",{attrs:{xs12:""}},[a("materialfy-header-card",{attrs:{color:"general",cardMaxWidth:"100%",cardShowDivider:!1,cardShowActions:!1},scopedSlots:t._u([{key:"crdHeader",fn:function(){return[a("v-row",{staticClass:"ma-1"},[a("v-col",[a("div",{staticClass:"text-h5 font-weight-light mb-2"},[t._v(" Notifications ")])])],1)]},proxy:!0},{key:"crdInnerList",fn:function(){return[a("v-card-text",[a("v-row",{attrs:{wrap:""}},[a("v-col",{attrs:{md6:"",sm12:""}},[a("h2",{staticClass:"text-h6 font-weight-light mb-3"},[t._v(" Notifications Style ")]),a("materialfy-toasts",{staticClass:"mb-3",attrs:{color:"tertiary"}},[t._v(" This is a plain notification ")]),a("materialfy-toasts",{staticClass:"mb-3",attrs:{color:"tertiary",dismissible:""}},[t._v(" This is a notification with close button. ")]),a("materialfy-toasts",{staticClass:"mb-3",attrs:{color:"tertiary",dismissible:"",icon:"mdi-bell-plus"}},[t._v(" This is a notification with close button and icon. ")]),a("materialfy-toasts",{staticClass:"mb-3",attrs:{color:"tertiary",dismissible:"",icon:"mdi-bell-plus"}},[t._v(" This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style. ")])],1),a("v-col",{attrs:{md6:"",sm12:""}},[a("h2",{staticClass:"text-h6 font-weight-light"},[t._v("Notifcation States")]),a("materialfy-toasts",{staticClass:"mb-3",attrs:{color:"info",dismissible:""}},[a("strong",[t._v("INFO")]),t._v(' - This is a regular notification made with `color="info"` ')]),a("materialfy-toasts",{staticClass:"mb-3",attrs:{color:"success",dismissible:""}},[a("strong",[t._v("SUCCESS")]),t._v(' - This is a regular notification made with `color="success"` ')]),a("materialfy-toasts",{staticClass:"mb-3",attrs:{color:"warning",dismissible:""}},[a("strong",[t._v("WARNING")]),t._v(' - This is a regular notification made with `color="warning"` ')]),a("materialfy-toasts",{staticClass:"mb-3",attrs:{color:"error",dismissible:""}},[a("strong",[t._v("DANGER")]),t._v(' - This is a regular notification made with `color="error"` ')]),a("materialfy-toasts",{staticClass:"mb-3",attrs:{color:"purple",dismissible:""}},[a("strong",[t._v("PRIMARY")]),t._v(' - This is a regular notification made with `color="purple"` ')]),a("materialfy-toasts",{staticClass:"mb-3",attrs:{color:"general",dismissible:""}},[a("strong",[t._v("GENERAL")]),t._v(' - This is a regular notification made with `color="general"` ')])],1)],1),a("div",{staticClass:"text-center"},[a("h2",{staticClass:"text-h6 font-weight-light mb-2"},[t._v(" Notification Places ")]),a("span",{staticClass:"text-subtitle-1 font-weight-light grey--text"},[t._v("Click to view notifications")])]),a("v-container",{attrs:{"grid-list-lg":""}},[a("v-row",{attrs:{"justify-center":"",wrap:""}},[a("v-col",{attrs:{xs12:"",sm4:""}},[a("v-btn",{attrs:{block:"",color:"general"},on:{click:function(s){return t.snack("top","left")}}},[t._v(" Top Left ")])],1),a("v-col",{attrs:{xs12:"",sm4:""}},[a("v-btn",{attrs:{block:"",color:"general"},on:{click:function(s){return t.snack("top")}}},[t._v(" Top Center ")])],1)],1),a("v-row",{attrs:{"justify-center":"",wrap:""}},[a("v-col",{attrs:{xs12:"",sm4:""}},[a("v-btn",{attrs:{block:"",color:"general"},on:{click:function(s){return t.snack("top","right")}}},[t._v(" Top Right ")])],1),a("v-col",{attrs:{xs12:"",sm4:""}},[a("v-btn",{attrs:{block:"",color:"general"},on:{click:function(s){return t.snack("bottom","left")}}},[t._v(" Bottom Left ")])],1)],1),a("v-row",{attrs:{"justify-center":"",wrap:""}},[a("v-col",{attrs:{xs12:"",sm4:""}},[a("v-btn",{attrs:{block:"",color:"general"},on:{click:function(s){return t.snack("bottom")}}},[t._v(" Bottom Center ")])],1),a("v-col",{attrs:{xs12:"",sm4:""}},[a("v-btn",{attrs:{block:"",color:"general"},on:{click:function(s){return t.snack("bottom","right")}}},[t._v(" Bottom Right ")])],1)],1)],1),a("v-snackbar",{attrs:{color:t.color,bottom:t.bottom,top:t.top,"float-left":t.left,"float-right":t.right},model:{value:t.snackbar,callback:function(s){t.snackbar=s},expression:"snackbar"}},[a("v-icon",{staticClass:"mr-3",attrs:{color:"white"}},[t._v(" mdi-bell-plus ")]),a("div",[t._v(" Welcome to "),a("b",[t._v("Vue Material Dashboard")]),t._v(" - a beautiful freebie for every web developer. ")]),a("v-icon",{attrs:{size:"16"},on:{click:function(s){t.snackbar=!1}}},[t._v(" mdi-close-circle ")])],1)],1)]},proxy:!0}])})],1)],1)],1)},i=[],r={data:function(){return{color:null,colors:["purple","info","success","warning","error"],top:!0,bottom:!1,left:!1,right:!1,snackbar:!1}},methods:{snack:function(){this.top=!1,this.bottom=!1,this.left=!1,this.right=!1;for(var t=arguments.length,s=new Array(t),a=0;a<t;a++)s[a]=arguments[a];for(var o=0,i=s;o<i.length;o++){var r=i[o];this[r]=!0}this.color=this.colors[Math.floor(Math.random()*this.colors.length)],this.snackbar=!0}}},e=r,n=a("2877"),l=a("6544"),c=a.n(l),f=a("8336"),h=a("99d9"),v=a("62ad"),m=a("a523"),b=a("132d"),u=a("0fd9"),d=a("2db4"),g=Object(n["a"])(e,o,i,!1,null,null,null);s["default"]=g.exports;c()(g,{VBtn:f["a"],VCardText:h["c"],VCol:v["a"],VContainer:m["a"],VIcon:b["a"],VRow:u["a"],VSnackbar:d["a"]})}}]);
//# sourceMappingURL=chunk-2d22d09f.cb25da3b.js.map