(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-edf02f10"],{"53ff2":function(t,e,s){"use strict";s("acb3")},acb3:function(t,e,s){},e186:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logs fixed-page"},[s("div",[s("page-title",{staticClass:"flexrow-item mb1",attrs:{text:t.$t("logs.title")}})],1),s("div",{staticClass:"flexrow"},[s("date-field",{staticClass:"flexrow-item",attrs:{"disabled-dates":{from:t.today},label:t.$t("logs.current_date_label")},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}}),s("button-simple",{staticClass:"flexrow-item",attrs:{icon:"refresh"},on:{click:t.loadDayEvents}}),s("span",{staticClass:"flexrow-item nb-events"},[t._v(" "+t._s(t.events.length)+" "+t._s(t.$t("logs.events"))+" ")])],1),t.isLoading||0!==t.events.length?t._e():s("div",{staticClass:"mt2"},[t._v(" "+t._s(t.$t("logs.empty_list"))+" ")]),t.isLoading?s("div",{staticClass:"has-text-centered"},[s("spinner")],1):s("div",{staticClass:"log-list"},t._l(t.events,(function(e){return s("div",{key:e.id,staticClass:"mt05 event-line",on:{click:function(s){return t.selectLine(e)}}},[s("div",[s("span",{staticClass:"date tag mr1"},[t._v(t._s(t.formatDate(e.created_at))+" ")]),s("span",{staticClass:"type tag",attrs:{title:e.name.split(":")[1],"data-status":t.formatType(e)}},[t._v(" "+t._s(t.formatType(e))+" ")]),s("span",{staticClass:"name tag mr1"},[t._v(t._s(e.name.split(":")[0]))])]),s("ul",{directives:[{name:"show",rawName:"v-show",value:t.selectedEvents[e.id],expression:"selectedEvents[event.id]"}]},[s("li",{staticClass:"flexrow"},[s("span",{staticClass:"key"},[t._v("user")]),e.user_id?s("people-avatar",{staticClass:"flexrow-item",attrs:{size:20,person:t.personMap.get(e.user_id)}}):t._e(),e.user_id?s("people-name",{staticClass:"flexrow-item",attrs:{person:t.personMap.get(e.user_id)}}):t._e()],1),t._l(Object.keys(e.data).sort(),(function(a){return s("li",{key:e.id+"-"+a,staticClass:"variable"},[s("span",{staticClass:"key"},[t._v(t._s(a))]),t.isLink(a)?s("a",{attrs:{href:t.getLink(e,a)}},[t._v(" "+t._s(e.data[a])+" ")]):s("span",[t._v(t._s(e.data[a]))])])}))],2)])})),0)])},n=[],i=s("5530"),c=(s("1276"),s("ac1f"),s("b0c0"),s("caad"),s("99af"),s("2f62")),r=s("c1df"),o=s.n(r),l=s("ba4c"),d=s.n(l),u=s("3657"),f=s("c279"),p=s("de40"),v=s("d37c"),m=s("eb8c"),_=s("0073"),b=s("8d07"),g=s("be83"),h={name:"logs",mixins:[f["a"]],components:{ButtonSimple:p["a"],DateField:v["a"],PageTitle:b["a"],PeopleAvatar:m["a"],PeopleName:_["a"],Spinner:g["a"]},data:function(){return{currentDate:new Date,events:[],isLoading:!0,selectedEvents:{}}},mounted:function(){this.loadDayEvents()},computed:Object(i["a"])(Object(i["a"])({},Object(c["c"])(["personMap","productionMap","user"])),{},{today:function(){return o()().toDate()}}),methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])(["loadEvents"])),{},{formatType:function(t){return t.name.split(":")[1].substring(0,3)},loadDayEvents:function(){var t=this,e=o()(this.currentDate).add(1,"days"),s=o()(this.currentDate);this.selectedEvents={},this.isLoading=!0,this.loadEvents({after:Object(u["e"])(s,this.timezone),before:Object(u["e"])(e,this.timezone)}).then((function(e){t.isLoading=!1,t.events=e})).catch((function(e){t.isLoading=!1,console.error(e)}))},selectLine:function(t){d.a.set(this.selectedEvents,t.id,!this.selectedEvents[t.id])},isLink:function(t){var e=["project_id","task_id"];return e.includes(t)},getLink:function(t,e){var s=t.data.project_id,a=e.substring(0,e.length-3);if("project"===a)return"/productions/".concat(s,"/news-feed");var n=t.data[e];return"/productions/".concat(s,"/").concat(a,"s/").concat(n)}}),watch:{currentDate:function(){this.loadDayEvents()}},metaInfo:function(){return{title:"".concat(this.$t("logs.title")," - Kitsu")}}},w=h,C=(s("53ff2"),s("2877")),y=Object(C["a"])(w,a,n,!1,null,"715ce176",null);e["default"]=y.exports}}]);
//# sourceMappingURL=chunk-edf02f10.fe27e13b.js.map