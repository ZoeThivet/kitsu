(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-125f0106"],{"3d16":function(e,t,s){"use strict";var i=s("bdad"),o=s.n(i);o.a},"5c04":function(e,t,s){},a591:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"episodes page fixed-page"},[s("div",{staticClass:"episode-list-header page-header flexrow"},[s("search-field",{ref:"episode-search-field",staticClass:"flexrow-item mt1",attrs:{placeholder:"ex: e01 s01, anim=wip"},on:{change:e.onSearchChange}}),s("combobox",{staticClass:"mb0 flexrow-item",attrs:{"locale-key-prefix":"statistics.",label:e.$t("statistics.display_mode"),options:e.displayModeOptions},model:{value:e.displayMode,callback:function(t){e.displayMode=t},expression:"displayMode"}}),s("combobox",{staticClass:"mb0 flexrow-item",attrs:{label:e.$t("statistics.count_mode"),"locale-key-prefix":"statistics.",options:e.countModeOptions},model:{value:e.countMode,callback:function(t){e.countMode=t},expression:"countMode"}}),s("span",{staticClass:"filler"}),s("button-simple",{staticClass:"flexrow-item",attrs:{icon:"download"},on:{click:e.exportStatisticsToCsv}})],1),s("episode-list",{ref:"episode-list",attrs:{entries:e.displayedEpisodes,"is-loading":e.isShotsLoading,"is-error":e.isShotsLoadingError,"validation-columns":e.episodeValidationColumns,"episode-stats":e.episodeStats,"count-mode":e.countMode,"display-mode":e.displayMode,"show-all":0===e.episodeSearchText.length},on:{scroll:e.saveScrollPosition}}),s("edit-episode-modal",{attrs:{active:e.modals.isNewDisplayed,"is-loading":e.loading.edit,"is-error":e.errors.edit,"cancel-route":e.episodesPath,"episode-to-edit":e.episodeToEdit},on:{confirm:e.confirmEditEpisode}}),s("hard-delete-modal",{attrs:{active:e.modals.isDeleteDisplayed,"is-loading":e.loading.del,"is-error":e.errors.del,text:e.deleteText(),"error-text":e.$t("episodes.delete_error"),"lock-text":e.episodeToDelete?e.episodeToDelete.name:"","cancel-route":e.episodesPath},on:{confirm:e.confirmDeleteEpisode}})],1)},o=[],a=(s("a4d3"),s("99af"),s("4de4"),s("4160"),s("c975"),s("a15b"),s("b0c0"),s("e439"),s("dbb4"),s("b64b"),s("159b"),s("ade3")),r=s("c1df"),n=s.n(r),d=s("2f62"),l=s("3455"),c=s("8c97"),p=s("de40"),u=s("992f"),h=s("2c1a"),f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:{modal:!0,"is-active":e.active}},[s("div",{staticClass:"modal-background"}),s("div",{staticClass:"modal-content"},[s("div",{staticClass:"box"},[e.episodeToEdit&&this.episodeToEdit.id?s("h1",{staticClass:"title"},[e._v(" "+e._s(e.$t("episodes.edit_title"))+" "+e._s(e.episodeToEdit.name)+" ")]):s("h1",{staticClass:"title"},[e._v(" "+e._s(e.$t("episodes.new_episode"))+" ")]),s("form",{on:{submit:function(e){e.preventDefault()}}},[s("text-field",{directives:[{name:"focus",rawName:"v-focus"}],ref:"nameField",attrs:{label:e.$t("episodes.fields.name")},on:{enter:e.runConfirmation},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),s("textarea-field",{ref:"descriptionField",attrs:{label:e.$t("episodes.fields.description")},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.ctrlKey?e.runConfirmation(t):null}},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),s("div",{staticClass:"has-text-right"},[s("a",{class:{button:!0,"is-primary":!0,"is-loading":e.isLoading},on:{click:e.confirmClicked}},[e._v(" "+e._s(e.$t("main.confirmation"))+" ")]),s("router-link",{staticClass:"button is-link",attrs:{to:e.cancelRoute}},[e._v(" "+e._s(e.$t("main.cancel"))+" ")]),e.isError?s("p",{staticClass:"error has-text-right info-message"},[e._v(" "+e._s(e.$t("episodes.edit_fail"))+" ")]):e._e(),s("p",{staticClass:"success has-text-right info-message"},[e._v(" "+e._s(e.episodeSuccessText)+" ")])],1)])])])},m=[],y=(s("e01a"),s("7bf8")),b=s("1149");function v(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function g(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?v(Object(s),!0).forEach((function(t){Object(a["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):v(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var _={name:"edit-episode-modal",components:{TextField:y["a"],TextareaField:b["a"]},props:["onConfirmClicked","text","active","cancelRoute","isError","isLoading","isLoadingStay","isSuccess","episodeToEdit","errorText"],data:function(){return this.episodeToEdit&&this.episodeToEdit.id?{form:{id:this.episodeToEdit.id,name:this.episodeToEdit.name,description:this.episodeToEdit.description,production_id:this.episodeToEdit.project_id},episodeSuccessText:""}:{form:{id:"",name:"",description:"",fps:""},episodeSuccessText:""}},computed:g({},Object(d["c"])(["currentProduction"])),methods:g({},Object(d["b"])([]),{runConfirmation:function(){this.confirmClicked()},confirmClicked:function(){this.$emit("confirm",this.form)},isEditing:function(){return this.episodeToEdit&&this.episodeToEdit.id},resetForm:function(){this.episodeSuccessText="",this.isEditing()?this.form={id:this.episodeToEdit.id,name:this.episodeToEdit.name,description:this.episodeToEdit.description}:(this.form.id=null,this.form.name="",this.form.description="")}}),mounted:function(){this.resetForm()},watch:{active:function(){this.resetForm()},episodeToEdit:function(){this.resetForm()}}},E=_,S=(s("b0a7"),s("2877")),C=Object(S["a"])(E,f,m,!1,null,"2ba6bdef",null),O=C.exports,T=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"data-list"},[s("div",{staticClass:"table-header-wrapper"},[s("table",{ref:"headerWrapper",staticClass:"table table-header"},[s("thead",[s("tr",[s("th",{ref:"th-episode",staticClass:"name"},[e._v(" "+e._s(e.$t("shots.fields.episode"))+" ")]),s("th",{staticClass:"description"},[e._v(" "+e._s(e.$t("shots.fields.description"))+" ")]),s("th",{staticClass:"validation"},[e._v(e._s(e.$t("main.all")))]),e._l(e.validationColumns,(function(t){return s("th",{key:e.taskTypeMap[t].id,staticClass:"validation validation-cell",style:e.getValidationStyle(t)},[s("router-link",{attrs:{to:e.taskTypePath(t)}},[e._v(" "+e._s(e.taskTypeMap[t].name)+" ")])],1)})),s("th",{staticClass:"actions"})],2)])])]),s("table-info",{attrs:{"is-loading":e.isLoading,"is-error":e.isError}}),e.isEmptyList&&!e.isCurrentUserClient?s("div",{staticClass:"has-text-centered"},[e._m(0),s("p",{staticClass:"info"},[e._v(e._s(e.$t("episodes.empty_list")))])]):e._e(),e.isEmptyList&&e.isCurrentUserClient?s("div",{staticClass:"has-text-centered"},[e._m(1),s("p",{staticClass:"info"},[e._v(e._s(e.$t("episodes.empty_list_client")))])]):e._e(),s("div",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onBodyScroll,expression:"onBodyScroll"}],ref:"body",staticClass:"table-body"},[s("table",{staticClass:"table"},[s("tbody",{ref:"body-tbody"},[e.showAll&&!e.isEmptyList?s("tr",{staticClass:"all-line"},[s("td",{staticClass:"name"},[e._v(" "+e._s(e.$t("episodes.all_episodes"))+" ")]),s("td",{staticClass:"description"}),s("stats-cell",{attrs:{colors:e.chartColors("all","all"),data:e.chartData("all","all"),"frames-data":e.chartData("all","all","frames"),countMode:e.countMode,displayMode:e.displayMode}}),e._l(e.validationColumns,(function(t){return s("stats-cell",{key:"all-"+t,style:e.getValidationStyle(t),attrs:{colors:e.chartColors("all",t),data:e.chartData("all",t),"frames-data":e.chartData("all",t,"frames"),countMode:e.countMode,displayMode:e.displayMode}})})),s("td",{staticClass:"actions"})],2):e._e(),e._l(e.entries,(function(t){return s("tr",{key:t.id},[s("td",{staticClass:"name"},[e._v(" "+e._s(t.name)+" ")]),s("td",{staticClass:"description"},[e._v(" "+e._s(t.description)+" ")]),e.isStats(t.id,"all")?s("stats-cell",{attrs:{colors:e.chartColors(t.id,"all"),data:e.chartData(t.id,"all"),"frames-data":e.chartData(t.id,"all","frames"),countMode:e.countMode,displayMode:e.displayMode}}):s("td"),e._l(e.validationColumns,(function(i){return e.isStats(t.id,i)?s("stats-cell",{key:t.id+i,style:e.getValidationStyle(i),attrs:{colors:e.chartColors(t.id,i),data:e.chartData(t.id,i),"frames-data":e.chartData(t.id,i,"frames"),countMode:e.countMode,displayMode:e.displayMode}}):s("td",{style:e.getValidationStyle(i)})})),e.isCurrentUserManager?s("row-actions",{attrs:{entry:t,"edit-route":{name:"edit-episode",params:{episode_id:t.id,production_id:e.currentProduction.id}},"delete-route":{name:"delete-episode",params:{episode_id:t.id,production_id:e.currentProduction.id}}}}):s("td",{staticClass:"actions"})],2)}))],2)])]),e.isEmptyList?e._e():s("p",{staticClass:"has-text-centered nb-episodes"},[e._v(" "+e._s(e.displayedEpisodesLength)+" "+e._s(e.$tc("episodes.number",e.displayedEpisodesLength))+" ")])],1)},P=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",{staticClass:"info"},[i("img",{attrs:{src:s("732b")}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",{staticClass:"info"},[i("img",{attrs:{src:s("732b")}})])}],x=(s("d3b7"),s("ddb0"),s("e9c6")),M=s("09d3"),w=s("03b1"),D=s("b131"),j=s("e60b");function $(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function k(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?$(Object(s),!0).forEach((function(t){Object(a["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):$(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var L={name:"episode-list",mixins:[x["a"]],components:{RowActions:w["a"],StatsCell:D["a"],TableInfo:j["a"]},props:{countMode:{type:String,default:"count"},displayMode:{type:String,default:"pie"},entries:{type:Array,default:function(){return[]}},isLoading:{type:Boolean,default:!1},isError:{type:Boolean,default:!1},episodeStats:{type:Object,default:function(){}},showAll:{type:Boolean,default:!1},validationColumns:{type:Array,default:function(){return[]}}},data:function(){return{busy:!1,lastSelection:null}},computed:k({},Object(d["c"])(["currentProduction","displayedEpisodesLength","episodeSearchText","isCurrentUserClient","isCurrentUserManager","isSingleEpisode","taskTypeMap"]),{isEmptyList:function(){return this.entries&&0===this.entries.length&&!this.isLoading&&!this.isError&&(!this.episodeSearchText||0===this.episodeSearchText.length)}}),methods:k({},Object(d["b"])(["displayMoreEpisodes","loadMoreEpisodes"]),{chartColors:function(e,t){return Object(M["b"])(this.episodeStats,e,t)},chartData:function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"count";return Object(M["c"])(this.episodeStats,e,t,s)},isStats:function(e,t){return this.episodeStats[e]&&this.episodeStats[e][t]},onHeaderScroll:function(e,t){this.$refs.tableWrapper.scrollLeft=t.scrollLeft},onBodyScroll:function(e,t){this.$refs.headerWrapper.style.left="-".concat(t.scrollLeft,"px"),this.$emit("scroll",t.scrollTop);var s=this.$refs.body.scrollHeight-this.$refs.body.offsetHeight;s<t.scrollTop+100&&this.loadMoreEpisodes()},loadMoreEpisodes:function(){this.displayMoreEpisodes(),this.$nextTick(this.resizeHeaders)},setScrollPosition:function(e){this.$refs.body.scrollTop=e},resizeHeaders:function(){if(this.$refs["body-tbody"].children.length>0){var e=this.$refs["body-tbody"].children[0].children[0].offsetWidth;this.$refs["th-episode"].style="min-width: ".concat(e,"px")}},editPath:function(e){return this.getPath("edit-episode",e)},deletePath:function(e){return this.getPath("delete-episode",e)},taskTypePath:function(e){var t={name:"task-type",params:{production_id:this.currentProduction.id,task_type_id:e,type:"count"}};return this.isTVShow&&(t.name="episode-task-type",t.params.episode_id=this.currentEpisode.id),t},getPath:function(e,t){var s={name:e,params:{production_id:this.currentProduction.id,episode_id:t}};return s}})},H=L,V=(s("3d16"),Object(S["a"])(H,T,P,!1,null,"312af07c",null)),F=V.exports,N=s("4d04");function z(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function A(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?z(Object(s),!0).forEach((function(t){Object(a["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):z(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var B={name:"episodes",components:{ButtonSimple:p["a"],Combobox:u["a"],EpisodeList:F,EditEpisodeModal:O,HardDeleteModal:h["a"],SearchField:N["a"]},data:function(){return{countMode:"count",displayMode:"pie",episodeToDelete:null,episodeToEdit:null,countModeOptions:[{label:"shots",value:"count"},{label:"frames",value:"frames"}],displayModeOptions:[{label:"pie",value:"pie"},{label:"count",value:"count"}],errors:{edit:!1,del:!1},modals:{isNewDisplayed:!1,isDeleteDisplayed:!1},loading:{edit:!1,del:!1}}},computed:A({},Object(d["c"])(["currentProduction","displayedEpisodes","episodesPath","isCurrentUserManager","isShotsLoading","isShotsLoadingError","episodes","episodeMap","episodePath","episodeStats","episodeSearchText","episodeListScrollPosition","episodeValidationColumns","taskStatusMap","taskTypeMap"])),mounted:function(){this.setDefaultSearchText(),this.setDefaultListScrollPosition(),this.resizeHeaders(),this.initEpisodes().then(this.handleModalsDisplay)},methods:A({},Object(d["b"])(["computeEpisodeStats","deleteEpisode","editEpisode","hideAssignations","initEpisodes","loadComment","loadShots","setLastProductionScreen","setEpisodeSearch","setEpisodeListScrollPosition","showAssignations"]),{setDefaultSearchText:function(){this.episodeSearchText.length>0&&this.$refs["episode-search-field"].setValue(this.episodeSearchText)},setDefaultListScrollPosition:function(){this.$refs["episode-list"].setScrollPosition(this.episodeListScrollPosition)},navigateToList:function(){this.$router.push(this.episodesPath)},confirmEditEpisode:function(e){var t=this;this.loading.edit=!0,this.errors.edit=!1,this.editEpisode(e).then((function(){t.loading.edit=!1,t.modals.isNewDisplayed=!1,t.navigateToList()})).catch((function(){t.loading.edit=!1,t.errors.edit=!0}))},confirmDeleteEpisode:function(){var e=this;this.loading.delete=!0,this.errors.edit=!1,this.deleteEpisode(this.episodeToDelete).then((function(){e.loading.delete=!1,e.navigateToList()})).catch((function(){e.loading.delete=!1,e.errors.delete=!0}))},resetEditModal:function(){var e={name:""};this.episodes.length>0&&(e.episode_id=this.episodes[0].id),this.openProductions.length>0&&(e.production_id=this.openProductions[0].id),this.episodeToEdit=e},deleteText:function(){var e=this.episodeToDelete;return e?this.$t("episodes.delete_text",{name:e.name}):""},handleModalsDisplay:function(){var e=this.$store.state.route.path,t=this.$store.state.route.params.episode_id;this.errors={edit:!1,delete:!1},this.modals={isNewDisplayed:!1,isDeleteDisplayed:!1},e.indexOf("edit")>0?(this.episodeToEdit=this.episodeMap[t],this.modals.isNewDisplayed=!0):e.indexOf("delete")>0&&(this.episodeToDelete=this.episodeMap[t],this.modals.isDeleteDisplayed=!0)},onSearchChange:function(e){var t=this.$refs["episode-search-field"].getValue();this.setEpisodeSearch(t),this.resizeHeaders()},saveScrollPosition:function(e){this.setEpisodeListScrollPosition(e)},resizeHeaders:function(){var e=this;setTimeout((function(){e.$refs["episode-list"]&&e.$refs["episode-list"].resizeHeaders()}),0)},exportStatisticsToCsv:function(){var e=[n()().format("YYYYMMDD"),this.currentProduction.name,"episodes","statistics"],t=Object(c["b"])(e.join("_"));l["a"].generateStatReports(t,this.episodeStats,this.taskTypeMap,this.taskStatusMap,this.episodeMap,this.countMode)}}),watch:{$route:function(){this.handleModalsDisplay()},displayedEpisodes:function(){this.resizeHeaders()},currentProduction:function(){var e=this,t=this.$route.params.production_id;if(this.currentProduction.id!==t){var s={name:"episodes",params:{production_id:this.currentProduction.id}};this.$refs["episode-search-field"].setValue(""),this.$store.commit("SET_SEQUENCE_LIST_SCROLL_POSITION",0),this.$router.push(s),this.loadShots((function(){e.resizeHeaders(),e.isTVShow?e.loadEpisodeStats():e.computeEpisodeStats()}))}}},socket:{events:{"comment:new":function(e){var t=this,s=e.comment_id;this.loadComment({commentId:s,callback:function(){t.isTVShow?t.loadEpisodeStats():t.computeEpisodeStats()}})}}},metaInfo:function(){return{title:"".concat(this.currentProduction.name," ").concat(this.$t("episodes.title")," - Kitsu")}}},U=B,I=Object(S["a"])(U,i,o,!1,null,"99d46e54",null);t["default"]=I.exports},b0a7:function(e,t,s){"use strict";var i=s("5c04"),o=s.n(i);o.a},bdad:function(e,t,s){}}]);
//# sourceMappingURL=chunk-125f0106.aae82237.js.map