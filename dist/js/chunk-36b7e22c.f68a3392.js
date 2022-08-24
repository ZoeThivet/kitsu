(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36b7e22c"],{"293a":function(e,t,i){"use strict";i("d807")},"4a0f":function(e,t,i){"use strict";i("9bf9")},"4d63":function(e,t,i){},6893:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"people page fixed-page"},[i("div",{staticClass:"flexrow page-header"},[i("page-title",{staticClass:"flexrow-item filler",attrs:{text:e.$t("people.title")}}),e.isCurrentUserAdmin?i("button-simple",{staticClass:"flexrow-item",attrs:{title:e.$t("main.csv.import_file"),"is-responsive":!0,icon:"upload"},on:{click:e.showImportModal}}):e._e(),i("button-href-link",{staticClass:"flexrow-item",attrs:{title:e.$t("main.csv.export_file"),icon:"download",path:"/api/export/csv/persons.csv"}}),e.isCurrentUserAdmin?i("button-simple",{staticClass:"flexrow-item",attrs:{text:e.$t("people.new_person"),"is-responsive":!0,icon:"plus"},on:{click:e.onNewClicked}}):e._e()],1),i("div",{staticClass:"flexrow search-options"},[i("search-field",{ref:"people-search-field",staticClass:"search flexrow-item",attrs:{"can-save":!0,placeholder:"ex: John Doe"},on:{change:e.onSearchChange,enter:e.saveSearchQuery,save:e.saveSearchQuery}}),i("button-simple",{staticClass:"flexrow-item filter-button",attrs:{title:e.$t("entities.build_filter.title"),icon:"funnel"},on:{click:function(){return e.modals.isBuildFilterDisplayed=!0}}})],1),i("div",{staticClass:"query-list"},[e.isPeopleLoading?e._e():i("search-query-list",{attrs:{queries:e.peopleSearchQueries},on:{"change-search":e.changeSearch,"remove-search":e.removeSearchQuery}})],1),i("people-list",{attrs:{entries:e.displayedPeople,"is-loading":e.isPeopleLoading,"is-error":e.isPeopleLoadingError},on:{"edit-clicked":e.onEditClicked,"delete-clicked":e.onDeleteClicked}}),i("import-render-modal",{attrs:{active:e.modals.isImportRenderDisplayed,"is-loading":e.isImportPeopleLoading,"is-error":e.isImportPeopleLoadingError,"parsed-csv":e.parsedCSV,"form-data":e.personCsvFormData,columns:e.dataMatchers.concat(e.csvColumns,e.optionalCsvColumns),dataMatchers:e.dataMatchers,database:e.filteredPeople},on:{reupload:e.resetImport,cancel:e.hideImportRenderModal,confirm:e.uploadImportFile}}),i("import-modal",{ref:"import-modal",attrs:{active:e.modals.importModal,"is-loading":e.isImportPeopleLoading,"is-error":e.isImportPeopleLoadingError,"form-data":e.personCsvFormData,columns:e.dataMatchers.concat(e.csvColumns),"optional-columns":e.optionalCsvColumns},on:{cancel:e.hideImportModal,confirm:e.renderImport}}),i("edit-person-modal",{attrs:{active:e.modals.edit,"is-loading":e.loading.edit,"is-invite-loading":e.loading.invite,"is-create-invite-loading":e.loading.createAndInvite,"is-error":e.errors.edit,"is-invitation-success":e.success.invite,"is-invitation-error":e.errors.invite,"person-to-edit":e.personToEdit},on:{cancel:function(t){e.modals.edit=!1},confirm:e.confirmEditPeople,"confirm-invite":e.confirmCreateAndInvite,invite:e.confirmInvite}}),i("hard-delete-modal",{attrs:{active:e.modals.del,"error-text":e.$t("people.delete_error"),"is-loading":e.loading.del,"is-error":e.errors.del,"lock-text":e.personToDelete?e.personToDelete.full_name:"",text:e.deleteText},on:{cancel:function(t){e.modals.del=!1},confirm:e.confirmDeletePeople}}),i("build-people-filter-modal",{ref:"build-filter-modal",attrs:{active:e.modals.isBuildFilterDisplayed},on:{cancel:function(t){e.modals.isBuildFilterDisplayed=!1},confirm:e.confirmBuildFilter}})],1)},n=[],o=i("2f62"),s=i("3455"),a=i("9355"),l=i("de40"),c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:{modal:!0,"is-active":e.active}},[i("div",{staticClass:"modal-background",on:{click:function(t){return e.$emit("cancel")}}}),i("div",{staticClass:"modal-content"},[i("div",{staticClass:"box"},[void 0!==e.personToEdit.id?i("h1",{staticClass:"title"},[e._v(" "+e._s(e.$t("people.edit_title"))+" "+e._s(e.personName)+" ")]):i("h1",{staticClass:"title"},[e._v(" "+e._s(e.$t("people.new_person"))+" ")]),i("form",{on:{submit:function(e){e.preventDefault()}}},[i("text-field",{ref:"name-field",attrs:{label:e.$t("people.fields.first_name"),disabled:e.isLdap},on:{enter:function(t){return e.confirmClicked()}},model:{value:e.form.first_name,callback:function(t){e.$set(e.form,"first_name",t)},expression:"form.first_name"}}),i("text-field",{attrs:{label:e.$t("people.fields.last_name"),disabled:e.isLdap},on:{enter:function(t){return e.confirmClicked()}},model:{value:e.form.last_name,callback:function(t){e.$set(e.form,"last_name",t)},expression:"form.last_name"}}),i("text-field",{attrs:{label:e.$t("people.fields.email"),disabled:e.isLdap},on:{enter:function(t){return e.confirmClicked()}},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),i("text-field",{attrs:{label:e.$t("people.fields.phone")},on:{enter:function(t){return e.confirmClicked()}},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}}),i("div",{staticClass:"departments"},[i("label",{staticClass:"label"},[e._v(e._s(e.$t("people.fields.departments")))]),e._l(e.form.departments,(function(t){return i("div",{key:t,staticClass:"department-element mb1",on:{click:function(i){return e.removeDepartment(t)}}},[t?i("department-name",{attrs:{department:e.departmentMap.get(t)}}):e._e()],1)})),i("div",{staticClass:"flexrow"},[e.selectableDepartments.length>0?i("combobox-department",{staticClass:"flexrow-item",attrs:{"selectable-departments":e.selectableDepartments},on:{enter:e.confirmClicked},model:{value:e.selectedDepartment,callback:function(t){e.selectedDepartment=t},expression:"selectedDepartment"}}):e._e(),e.selectableDepartments.length>0?i("button",{staticClass:"button is-success flexrow-item mb2",class:{"is-disabled":null===e.selectedDepartment},on:{click:e.addDepartment}},[e._v(" "+e._s(e.$t("main.add"))+" ")]):e._e()],1)],2),i("combobox",{attrs:{label:e.$t("people.fields.role"),options:e.roleOptions,localeKeyPrefix:"people.role."},on:{enter:function(t){return e.confirmClicked()}},model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}}),i("combobox",{attrs:{label:e.$t("people.fields.active"),options:e.activeOptions,disabled:e.isLdap},on:{enter:function(t){return e.confirmClicked()}},model:{value:e.form.active,callback:function(t){e.$set(e.form,"active",t)},expression:"form.active"}})],1),i("div",{staticClass:"flexrow"},[e.isCurrentUserAdmin?i("button",{class:{button:!0,"flexrow-item":!0,"is-loading":e.isInviteLoading},attrs:{disabled:!e.isValidEmail},on:{click:e.invite}},[e._v(" "+e._s(e.$t("people.invite"))+" ")]):e._e(),i("div",{staticClass:"filler"}),e.isCreating&&e.isCurrentUserAdmin?i("button",{class:{button:!0,"is-primary":!0,"flexrow-item":!0,"is-loading":e.isCreateInviteLoading},attrs:{disabled:!e.isValidEmail},on:{click:e.createAndInvite}},[e._v(" "+e._s(e.$t("people.create_invite"))+" ")]):e._e(),i("a",{class:{button:!0,"is-primary":!0,"flexrow-item":!0,"is-loading":e.isLoading},attrs:{disabled:!e.isValidEmail},on:{click:e.confirmClicked}},[e._v(" "+e._s(e.isCreating?e.$t("people.create"):e.$t("people.confirm_edit"))+" ")]),i("button",{staticClass:"button is-link flexrow-item",on:{click:function(t){return e.$emit("cancel")}}},[e._v(" "+e._s(e.$t("main.cancel"))+" ")])]),e.isInvitationSuccess?i("div",{staticClass:"success has-text-right mt1"},[e._v(" "+e._s(e.$t("people.invite_success"))+" ")]):e._e(),e.isInvitationError?i("div",{staticClass:"error has-text-right mt1"},[e._v(" "+e._s(e.$t("people.invite_error"))+" ")]):e._e(),e.isError?i("div",{staticClass:"error has-text-right mt1"},[e._v(" "+e._s(e.$t("people.create_error"))+" ")]):e._e()])])])},d=[],p=i("d065"),u=i("7bf8"),m=i("992f"),f=i("5cf5"),h=i("5af2");function v(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function b(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?v(Object(i),!0).forEach((function(t){g(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function g(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var C={name:"edit-modal",mixins:[p["a"]],props:["active","cancelRoute","errorText","isLoading","isCreateInviteLoading","isInvitationSuccess","isInvitationError","isInviteLoading","isError","onConfirmClicked","personToEdit","text"],data:function(){return{isValidEmail:!1,form:{first_name:"",last_name:"",email:"",phone:"",role:"user",active:"true",departments:[]},roleOptions:[{label:"user",value:"user"},{label:"supervisor",value:"supervisor"},{label:"manager",value:"manager"},{label:"client",value:"client"},{label:"vendor",value:"vendor"},{label:"admin",value:"admin"}],activeOptions:[{label:this.$t("main.yes"),value:"true"},{label:this.$t("main.no"),value:"false"}],selectedDepartment:null}},components:{TextField:u["a"],Combobox:m["a"],ComboboxDepartment:f["a"],DepartmentName:h["a"]},computed:b(b({},Object(o["c"])(["departments","departmentMap","isLdap","isCurrentUserAdmin","people"])),{},{selectableDepartments:function(){var e=this;return this.departments.filter((function(t){return-1===e.form.departments.findIndex((function(e){return e===t.id}))}))},isCreating:function(){return void 0===this.personToEdit.id},personName:function(){return void 0!==this.personToEdit?this.personToEdit.first_name+" "+this.personToEdit.last_name:""}}),methods:b(b({},Object(o["b"])([])),{},{createAndInvite:function(){this.$emit("confirm-invite",this.form)},invite:function(){this.$emit("invite",this.form)},confirmClicked:function(){var e=b({},this.form);e.active="true"===this.form.active||!0===this.form.active,this.form.email&&this.$emit("confirm",e)},addDepartment:function(){this.form.departments.push(this.selectedDepartment),this.selectedDepartment=null},removeDepartment:function(e){var t=this.form.departments.indexOf(e);t>=0&&this.form.departments.splice(t,1)},resetForm:function(){this.personToEdit?this.form={first_name:this.personToEdit.first_name,last_name:this.personToEdit.last_name,phone:this.personToEdit.phone,email:this.personToEdit.email,role:this.personToEdit.role,active:!this.personToEdit.id||this.personToEdit.active?"true":"false",departments:this.personToEdit.departments||[]}:this.form={first_name:"",last_name:"",email:"",phone:"",role:"user",active:"true",departments:[]},this.checkEmailValidity()},checkEmailValidity:function(){var e=this,t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,i=this.people.some((function(t){return t.email===e.form.email&&(!e.personToEdit||e.personToEdit.email!==t.email)}));this.isValidEmail=this.form.email&&t.test(this.form.email)&&!i}}),watch:{personToEdit:function(){this.resetForm()},active:function(){var e=this;this.active&&(this.resetForm(),setTimeout((function(){e.$refs["name-field"].focus()}),100))},"form.email":function(){this.checkEmailValidity()}}},_=C,y=(i("a7e9"),i("2877")),O=Object(y["a"])(_,c,d,!1,null,"7e623c4e",null),P=O.exports,w=i("2c1a"),x=i("440f"),D=i("4918"),j=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"data-list"},[i("div",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onBodyScroll,expression:"onBodyScroll"}],ref:"body",staticClass:"datatable-wrapper"},[i("table",{staticClass:"datatable multi-section"},[i("thead",{staticClass:"datatable-head"},[i("tr",[i("th",{staticClass:"name datatable-row-header",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("people.list.name"))+" ")]),i("th",{staticClass:"email",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("people.list.email"))+" ")]),i("th",{staticClass:"phone",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("people.list.phone"))+" ")]),i("th",{staticClass:"role",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("people.list.role"))+" ")]),i("th",{staticClass:"departments",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("people.list.departments"))+" ")]),i("th",{staticClass:"actions",attrs:{scope:"col"}})])]),e.activePeople.length>0?i("tbody",{staticClass:"datatable-body"},[i("tr",{staticClass:"datatable-type-header"},[i("th",{attrs:{scope:"rowgroup",colspan:"5"}},[i("span",{staticClass:"datatable-row-header"},[e._v(e._s(e.$t("people.active")))])])]),e._l(e.activePeople,(function(t){return i("tr",{key:t.id,staticClass:"datatable-row"},[i("people-name-cell",{staticClass:"name datatable-row-header",attrs:{person:t}}),i("td",{staticClass:"email"},[e._v(e._s(t.email))]),i("td",{staticClass:"phone"},[e._v(e._s(t.phone))]),i("td",{staticClass:"role"},[e._v(e._s(e.$t("people.role."+t.role)))]),i("td",{staticClass:"departments"},e._l(e.sortDepartments(t.departments),(function(r){return i("span",{key:t.id+"-"+r.id,staticClass:"departments-element"},[r?i("department-name",{attrs:{department:r}}):e._e()],1)})),0),e.isCurrentUserAdmin?i("row-actions-cell",{attrs:{"entry-id":t.id,"hide-delete":!0},on:{"edit-clicked":function(i){return e.$emit("edit-clicked",t)}}}):i("td",{staticClass:"actions"})],1)}))],2):e._e(),e.unactivePeople.length>0?i("tbody",{staticClass:"datatable-body"},[i("tr",{staticClass:"datatable-type-header"},[i("th",{attrs:{scope:"rowgroup",colspan:"5"}},[i("span",{staticClass:"datatable-row-header"},[e._v(" "+e._s(e.$t("people.unactive"))+" ")])])]),e._l(e.unactivePeople,(function(t){return i("tr",{key:t.id,staticClass:"datatable-row"},[i("people-name-cell",{staticClass:"name",attrs:{person:t}}),i("td",{staticClass:"email"},[e._v(e._s(t.email))]),i("td",{staticClass:"phone"},[e._v(e._s(t.phone))]),i("td",{staticClass:"role"},[e._v(e._s(e.$t("people.role."+t.role)))]),i("td",{staticClass:"departments"},e._l(e.sortDepartments(t.departments),(function(r){return i("span",{key:t.id+"-"+r.id,staticClass:"departments-element"},[r?i("department-name",{attrs:{department:r}}):e._e()],1)})),0),e.isCurrentUserAdmin?i("row-actions-cell",{attrs:{"entry-id":t.id},on:{"edit-clicked":function(i){return e.$emit("edit-clicked",t)},"delete-clicked":function(i){return e.$emit("delete-clicked",t)}}}):i("td",{staticClass:"actions"})],1)}))],2):e._e()])]),i("table-info",{attrs:{"is-loading":e.isLoading,"is-error":e.isError}}),e.isLoading?e._e():i("p",{staticClass:"has-text-centered footer-info"},[e._v(" "+e._s(e.entries.length)+" "+e._s(e.$tc("people.persons",e.entries.length))+" ("+e._s(e.activePeople.length)+" "+e._s(e.$tc("people.active_persons",e.activePeople.length))+") ")])],1)},E=[],k=i("2229"),$=i("7365"),I=i("14b2"),S=i("e60b");function F(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function T(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?F(Object(i),!0).forEach((function(t){L(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):F(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function L(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var M={name:"people-list",components:{PeopleNameCell:$["a"],RowActionsCell:I["a"],TableInfo:S["a"],DepartmentName:h["a"]},props:["entries","isLoading","isError","onEditClicked","onDeleteClicked"],computed:T(T({},Object(o["c"])(["departmentMap","isCurrentUserAdmin"])),{},{activePeople:function(){return this.entries.filter((function(e){return e.active}))},unactivePeople:function(){return this.entries.filter((function(e){return!e.active}))}}),methods:T(T({},Object(o["b"])([])),{},{taskColor:function(e){return e<1||e>4?"red":""},onBodyScroll:function(e,t){this.$refs.body.style.left="-".concat(t.scrollLeft,"px")},sortDepartments:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Object(k["d"])(t.map((function(t){return e.departmentMap.get(t)})))}})},A=M,R=(i("b7c0"),Object(y["a"])(A,j,E,!1,null,"31b576e6",null)),U=R.exports,V=i("8d07"),B=i("4d04"),N=i("55ce"),Q=i("b06c"),q=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:{modal:!0,"is-active":e.active}},[i("div",{staticClass:"modal-background",on:{click:function(t){return e.$emit("cancel")}}}),i("div",{staticClass:"modal-content"},[i("div",{staticClass:"box content"},[i("h1",{staticClass:"title"},[e._v(" "+e._s(e.$t("entities.build_filter.title"))+" ")]),i("h3",{staticClass:"subtitle"},[e._v(" "+e._s(e.$t("entities.build_filter.department"))+" ")]),e._l(e.departmentFilters.values,(function(t,r){return i("div",{key:"task-type-"+r,staticClass:"flexrow department-filter"},[i("combobox",{staticClass:"flexrow-item",attrs:{options:e.general.operatorOptions,"locale-key-prefix":"entities.build_filter."},on:{input:function(i){return e.onDepartmentOperatorChanged(t)}},model:{value:t.operator,callback:function(i){e.$set(t,"operator",i)},expression:"departmentFilter.operator"}}),i("div",{staticClass:"flexrow-item flexrow value-column"},[e._l(t.values,(function(r,n){return i("div",{key:"department-"+n},[i("combobox",{staticClass:"flexrow-item",attrs:{options:e.departmentsOptions},model:{value:t.values[n],callback:function(i){e.$set(t.values,n,i)},expression:"departmentFilter.values[index]"}})],1)})),"in"===t.operator?i("button-simple",{staticClass:"mt05",attrs:{icon:"plus"},on:{click:function(i){return e.addInDepartmentFilter(t)}}}):e._e()],2)],1)})),i("modal-footer",{attrs:{"error-text":e.$t("entities.thumbnails.error")},on:{confirm:e.applyFilter,cancel:function(t){return e.$emit("cancel")}}})],2)])])},J=[],z=i("ca76"),H=i("d5c9");function K(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function Z(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?K(Object(i),!0).forEach((function(t){G(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):K(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function G(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var W={name:"build-people-filter-modal",mixins:[p["a"]],components:{ButtonSimple:l["a"],Combobox:m["a"],ModalFooter:H["a"]},props:{active:{type:Boolean,default:!1}},data:function(){return{general:{operatorOptions:[{label:"equal",value:"="},{label:"not_equal",value:"=-"},{label:"in",value:"in"}],unionOptions:[{label:"union_and",value:"and"},{label:"union_or",value:"or"}]},departmentFilters:{values:[]},union:"and"}},mounted:function(){this.reset(),this.setFiltersFromCurrentQuery()},computed:Z(Z({},Object(o["c"])(["peopleSearchText","peopleSearchText","departmentMap","departments"])),{},{departmentsOptions:function(){return this.departments.map((function(e){return{label:e.name,value:e.id}}))}}),methods:Z(Z({},Object(o["b"])([])),{},{applyFilter:function(){var e=this.buildFilter();this.$emit("confirm",e)},buildFilter:function(){var e="";return e=this.applyDepartmentChoice(e),e=this.applyUnionChoice(e),e.trim()},addDepartmentFilter:function(){var e={operator:"=",values:[this.departments[0].id]};return this.departmentFilters.values.push(e),e},addInDepartmentFilter:function(e){e.values.push(this.departments[0].name)},removeDepartmentFilter:function(e){this.departmentFilters.values=this.departmentFilters.values.filter((function(t){return t!==e}))},applyDepartmentChoice:function(e){var t=this;return this.departmentFilters.values.forEach((function(i){var r="=[";"=-"===i.operator&&(r="=[-");var n=i.values.map((function(e){return t.departmentMap.get(e)?t.departmentMap.get(e).name:t.departments[0].name})).join(",");e+=" department".concat(r).concat(n,"]")})),e},applyUnionChoice:function(e){return"or"===this.union&&(e=" +(".concat(e.trim(),")")),e},setFiltersFromCurrentQuery:function(){var e=this;if(this.peopleSearchText){this.departmentFilters.values=[];var t=Object(z["d"])({entryIndex:[],departments:this.departments,persons:[],query:this.peopleSearchText});t.forEach((function(t){e.setFiltersFromDepartmentQuery(t)})),t.union&&this.setUnion()}},setFiltersFromDepartmentQuery:function(e){var t="=";e.values.length>1?t="in":e.excluding&&(t="=-"),this.departmentFilters.values.push({operator:t,values:e.values.map((function(e){return e.id}))})},setUnion:function(){this.union="or"},onDepartmentOperatorChanged:function(e){"in"!==e.operator&&(e.values=[e.values[0]])},reset:function(){this.departmentFilters.values=[{operator:"=",values:this.departments.length>0?[this.departments[0].id]:[]}]}}),watch:{active:function(){this.active&&(this.reset(),this.setFiltersFromCurrentQuery())}}},X=W,Y=(i("9ab0"),Object(y["a"])(X,q,J,!1,null,"037fa0c8",null)),ee=Y.exports;function te(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function ie(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?te(Object(i),!0).forEach((function(t){re(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):te(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function re(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var ne={name:"people",mixins:[Q["a"]],components:{BuildPeopleFilterModal:ee,ButtonHrefLink:a["a"],ButtonSimple:l["a"],EditPersonModal:P,HardDeleteModal:w["a"],ImportModal:x["a"],PageTitle:V["a"],PeopleList:U,ImportRenderModal:D["a"],SearchField:B["a"],SearchQueryList:N["a"]},data:function(){return{csvColumns:["First Name","Last Name"],optionalCsvColumns:["Phone","Role"],dataMatchers:["Email"],errors:{del:!1,edit:!1,invite:!1},loading:{createAndInvite:!1,edit:!1,del:!1,invite:!1},modals:{edit:!1,del:!1,importModal:!1,isImportRenderDisplayed:!1,isBuildFilterDisplayed:!1},parsedCSV:[],personToDelete:{},personToEdit:{role:"user"},success:{invite:!1}}},mounted:function(){var e=this;this.loadPeople((function(){e.setSearchFromUrl(),e.onSearchChange()}))},watch:{},computed:ie(ie({},Object(o["c"])(["displayedPeople","isCurrentUserAdmin","isPeopleLoading","isPeopleLoadingError","isImportPeopleModalShown","isImportPeopleLoading","isImportPeopleLoadingError","peopleSearchQueries","personCsvFormData"])),{},{deleteText:function(){var e=this.personToDelete;if(void 0!==e){var t="".concat(e.first_name," ").concat(e.last_name);return this.$t("people.delete_text",{personName:t})}return""},filteredPeople:function(){var e={};return this.displayedPeople.forEach((function(t){var i=t.email;e[i]=!0})),e},searchField:function(){return this.$refs["people-search-field"]}}),methods:ie(ie({},Object(o["b"])(["editPerson","deletePeople","invitePerson","loadPeople","loadDepartments","newPerson","newPersonAndInvite","removePeopleSearch","savePeopleSearch","setPeopleSearch","uploadPersonFile"])),{},{renderImport:function(e,t){var i=this;this.loading.importing=!0,this.errors.importing=!1,this.formData=e,"file"===t&&(e=e.get("file")),s["a"].processCSV(e).then((function(e){i.parsedCSV=e,i.hideImportModal(),i.loading.importing=!1,i.showImportRenderModal()}))},uploadImportFile:function(e,t){var i=this,r=new FormData,n="import.csv",o=new File([e.join("\n")],n,{type:"text/csv"});r.append("file",o),this.loading.importing=!0,this.errors.importing=!1,this.$store.commit("PERSON_CSV_FILE_SELECTED",r),this.uploadPersonFile(t).then((function(){i.$store.dispatch("loadPeople"),i.hideImportRenderModal()})).catch((function(e){console.error(e),i.loading.importing=!1,i.errors.importing=!0}))},resetImport:function(){this.errors.importing=!1,this.hideImportRenderModal(),this.$store.commit("PERSON_CSV_FILE_SELECTED",null),this.$refs["import-modal"].reset(),this.showImportModal()},confirmEditPeople:function(e){var t=this,i="editPerson";void 0===this.personToEdit.id?i="newPerson":e.id=this.personToEdit.id,this.loading.edit=!0,this.errors.edit=!1,this[i](e).then((function(){t.loading.edit=!1,t.modals.edit=!1})).catch((function(e){console.error(e),t.errors.edit=!0,t.loading.edit=!1}))},confirmCreateAndInvite:function(e){var t=this;this.loading.createAndInvite=!0,this.errors.edit=!1,this.newPersonAndInvite(e).then((function(){t.loading.createAndInvite=!1,t.modals.edit=!1})).catch((function(e){console.error(e),t.errors.edit=!0,t.loading.createAndInvite=!1}))},confirmInvite:function(e){var t=this;e.id=this.personToEdit.id,this.loading.invite=!0,this.errors.invite=!1,this.invitePerson(e).then((function(){t.loading.invite=!1,t.success.invite=!0})).catch((function(e){console.error(e),t.loading.invite=!1,t.success.invite=!1,t.errors.invite=!0}))},confirmDeletePeople:function(){var e=this;this.loading.del=!0,this.errors.del=!1,this.deletePeople(this.personToDelete).then((function(){e.loading.del=!1,e.modals.del=!1})).catch((function(t){console.error(t),e.loading.del=!1,e.errors.del=!0}))},onSearchChange:function(){if(this.searchField){var e=this.searchField.getValue();1!==e.length&&(this.setPeopleSearch(e),this.setSearchInUrl())}},onDeleteClicked:function(e){this.personToDelete=e,this.modals.del=!0},onEditClicked:function(e){this.errors.invite=!1,this.success.invite=!1,this.personToEdit=e,this.modals.edit=!0},onNewClicked:function(){this.errors.invite=!1,this.success.invite=!1,this.personToEdit={role:"user"},this.modals.edit=!0},showImportModal:function(){this.modals.importModal=!0},hideImportModal:function(){this.modals.importModal=!1},showImportRenderModal:function(){this.modals.isImportRenderDisplayed=!0},hideImportRenderModal:function(){this.modals.isImportRenderDisplayed=!1},saveSearchQuery:function(e){this.savePeopleSearch(e).catch(console.error)},removeSearchQuery:function(e){this.removePeopleSearch(e).catch(console.error)},confirmBuildFilter:function(e){this.modals.isBuildFilterDisplayed=!1,this.searchField.setValue(e),this.onSearchChange()}}),metaInfo:function(){return{title:"".concat(this.$t("people.title")," - Kitsu")}}},oe=ne,se=(i("293a"),Object(y["a"])(oe,r,n,!1,null,"5825a65b",null));t["default"]=se.exports},"6c78":function(e,t,i){"use strict";i("4d63")},7365:function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("td",{staticClass:"name",attrs:{scope:"row"}},[i("div",{staticClass:"people-name"},[i("people-avatar",{staticClass:"avatar",attrs:{person:e.person}}),i("people-name",{staticClass:"people-name",attrs:{"with-link":"",person:e.person}})],1)])},n=[],o=i("2f62"),s=i("eb8c"),a=i("0073");function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){d(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var p={name:"people-name-cell",components:{PeopleName:a["a"],PeopleAvatar:s["a"]},props:{person:{type:Object,required:!0}},computed:c({},Object(o["c"])([])),methods:c({},Object(o["b"])([]))},u=p,m=(i("6c78"),i("2877")),f=Object(m["a"])(u,r,n,!1,null,"badaef58",null);t["a"]=f.exports},9355:function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a",{staticClass:"button",attrs:{title:e.title,href:e.path,target:e.target}},["plus"===e.icon?i("plus-icon",{staticClass:"icon is-small"}):e._e(),"download"===e.icon?i("download-icon",{staticClass:"icon is-small"}):e._e(),"upload"===e.icon?i("upload-icon",{staticClass:"icon is-small"}):e._e(),"list"===e.icon?i("list-icon",{staticClass:"icon is-small"}):e._e(),e.text?i("span",{staticClass:"text is-hidden-touch"},[e._v(" "+e._s(e.text)+" ")]):e._e()],1)},n=[],o=i("0a35"),s={name:"button-href-link",components:{DownloadIcon:o["t"],ListIcon:o["G"],PlusIcon:o["S"],UploadIcon:o["ib"]},props:{text:{default:"",type:String},path:{default:"",type:String},icon:{default:"",type:String},title:{default:"",type:String},styleclass:{default:"",type:String},target:{default:"_self",type:String}}},a=s,l=(i("4a0f"),i("2877")),c=Object(l["a"])(a,r,n,!1,null,"ebbaf58c",null);t["a"]=c.exports},9823:function(e,t,i){},"9ab0":function(e,t,i){"use strict";i("9823")},"9bf9":function(e,t,i){},"9e00":function(e,t,i){},a7e9:function(e,t,i){"use strict";i("9e00")},b7c0:function(e,t,i){"use strict";i("d26ad")},d26ad:function(e,t,i){},d807:function(e,t,i){}}]);
//# sourceMappingURL=chunk-36b7e22c.f68a3392.js.map