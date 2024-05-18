import{o as g,c as b,a as i,V as n,P as o,T as d,U as M,S as I,ai as s,F as j,aw as E,ax as F,a8 as R,O as U,e as q,j as G,Z as z,J as O,at as N}from"./@vue-Dsuh7cvt.js";import{R as H,a as L,c as J,b as K}from"./vue-router-C9L16l5R.js";import{i as Q}from"./element-plus-Bpfv_WDV.js";import{a as T}from"./axios-G5LVpFxl.js";import"./lodash-es-WEemOz_S.js";import"./@vueuse-BSDyFW2n.js";import"./@element-plus-CztAJSLX.js";import"./@popperjs-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-Ct2Knyoi.js";import"./async-validator-DKvM95Vc.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-CtcGg-6p.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))u(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function r(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function u(l){if(l.ep)return;l.ep=!0;const a=r(l);fetch(l.href,a)}})();const k=(t,e)=>{const r=t.__vccOpts||t;for(const[u,l]of e)r[u]=l;return r},Z={name:"BillDetails",data(){return{isVisible:!1,form:{type:"",issue:"",price:0,date:"",id:0}}},methods:{openModal(t){this.isVisible=!0,document.body.style.overflow="hidden",this.form.type=t.type,this.form.issue=t.issue,this.form.price=t.price,this.form.date=t.date,this.form.id=t.id},closeModal(){this.isVisible=!1,document.body.style.overflow=""},submitForm(){console.log("提交表单"),this.$emit("update:pay-status",this.form.id),this.closeModal()}}},W={key:0,class:"modal-background"},X={class:"modal-container"},$={class:"button-group"};function ee(t,e,r,u,l,a){const f=s("el-form-header"),m=s("el-form-item"),p=s("el-button"),_=s("el-form");return l.isVisible?(g(),b("div",W,[i("div",X,[n(_,{model:l.form,class:"form","label-width":"auto",style:{"max-width":"600px"}},{default:o(()=>[n(f,{class:"form-header"},{default:o(()=>[d("缴费详情")]),_:1}),n(m,{label:"类型"},{default:o(()=>[d(M(l.form.type),1)]),_:1}),n(m,{label:"具体事由"},{default:o(()=>[d(M(l.form.issue),1)]),_:1}),n(m,{label:"费用（元）"},{default:o(()=>[d(M(l.form.price),1)]),_:1}),n(m,{label:"创建时间"},{default:o(()=>[d(M(l.form.date),1)]),_:1}),i("div",$,[n(p,{onClick:a.submitForm,type:"primary"},{default:o(()=>[d("确认缴费")]),_:1},8,["onClick"]),n(p,{onClick:a.closeModal},{default:o(()=>[d("取消")]),_:1},8,["onClick"])])]),_:1},8,["model"])])])):I("",!0)}const te=k(Z,[["render",ee],["__scopeId","data-v-6f57bd3e"]]),ne={data(){return{desc:"缴费列表统计",patient:[{id:1,type:"挂号",issue:"皮肤科挂号",price:10,date:"2024年3月15日",payStatus:!0},{id:2,type:"处方",issue:"眼科问诊处方药品开具",price:200,date:"2024年2月15日",payStatus:!1},{id:3,type:"挂号",issue:"全科挂号",price:5,date:"2024年1月15日",payStatus:!1}],filteredPatients:[]}},components:{BillDetails:te},methods:{showBillDetails(t){this.$refs.BillDetails.openModal(t)},selectFunc(t){this.filteredPatients=this.patient.filter(e=>e.payStatus===t)},updatePayStatus(t){const e=this.patient.findIndex(r=>r.id===t);e!==-1&&(this.patient[e].payStatus=!0),this.selectFunc(!1)}},mounted(){this.selectFunc(!1)}},oe=t=>(E("data-v-4f810841"),t=t(),F(),t),le=oe(()=>i("span",null,"缴费列表",-1)),ae={key:0},se={key:1,class:"butAbanText"};function ie(t,e,r,u,l,a){const f=s("BillDetails"),m=s("el-menu-item"),p=s("el-sub-menu"),_=s("el-menu"),w=s("el-aside"),A=s("el-header"),h=s("el-table-column"),V=s("el-button"),C=s("el-table"),P=s("el-pagination"),y=s("el-main"),B=s("el-footer"),c=s("el-container");return g(),b(j,null,[n(f,{"onUpdate:payStatus":a.updatePayStatus,ref:"BillDetails"},null,8,["onUpdate:payStatus"]),n(c,{style:{height:"100vh"},class:"container-header"},{default:o(()=>[n(c,null,{default:o(()=>[n(w,{width:"200px"},{default:o(()=>[n(_,{class:"aside my-menu","default-active":"1","unique-opened":!0},{default:o(()=>[n(p,{index:"1"},{title:o(()=>[le]),default:o(()=>[n(m,{index:"1",onClick:e[0]||(e[0]=S=>a.selectFunc(!1))},{default:o(()=>[d("未缴费")]),_:1}),n(m,{index:"2",onClick:e[1]||(e[1]=S=>a.selectFunc(!0))},{default:o(()=>[d("已缴费")]),_:1})]),_:1})]),_:1})]),_:1}),n(c,null,{default:o(()=>[n(A,{height:"30px",style:{padding:"0",margin:"0"}}),n(y,{class:"main"},{default:o(()=>[i("div",null,[n(C,{data:l.filteredPatients},{default:o(()=>[n(h,{prop:"type",label:"类型"}),n(h,{prop:"issue",label:"具体事由"}),n(h,{prop:"price",label:"费用（元）"}),n(h,{prop:"date",label:"创建时间"}),n(h,{style:{textalign:"right"},label:"操作"},{default:o(S=>[S.row.payStatus===!1?(g(),b("div",ae,[n(V,{class:"pay-button",onClick:v=>a.showBillDetails(S.row)},{default:o(()=>[d("缴费")]),_:2},1032,["onClick"])])):(g(),b("div",se,"已缴费，无需操作"))]),_:1})]),_:1},8,["data"]),n(P,{onSizeChange:t.handleSizeChange,onCurrentChange:t.handleCurrentChange,"current-page":t.currentPage,"page-sizes":[10,20,30,40],"page-size":t.pageSize,total:t.totalItems,"hide-on-single-page":!1,layout:"total, sizes, prev, pager, next, jumper"},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])]),_:1}),n(B,{height:"30px",align:"center",class:"footer"},{default:o(()=>[d("SE_GROUP_6")]),_:1})]),_:1})]),_:1})]),_:1})],64)}const re=k(ne,[["render",ie],["__scopeId","data-v-4f810841"]]),ce={name:"PrescriptionDetails",data(){return{isVisible:!1,form:{name:"",date:new Date().toISOString().substr(0,10),delivery:!1,gender:[],advice:"",medicines:[{name:"",quantity:0,price:0,totalPrice:0}]},medicinesDB:[{name:"阿司匹林",stock:100,price:2.5},{name:"头孢",stock:50,price:10},{name:"布洛芬",stock:80,price:5}]}},computed:{totalPrice(){return this.form.medicines.reduce((t,e)=>t+parseFloat(e.totalPrice||0),0).toFixed(2)}},methods:{openModal(t){this.isVisible=!0,document.body.style.overflow="hidden",this.form.name=t.name,this.form.gender=t.sex},closeModal(){this.isVisible=!1,document.body.style.overflow=""},submitForm(){console.log("提交表单"),this.closeModal()},addMedicine(){this.form.medicines.push({name:"",quantity:0,price:0,totalPrice:0})},removeMedicine(t){this.form.medicines.splice(t,1)},calculatePrice(t){const e=this.medicinesDB.find(r=>r.name===t.name);e&&(t.price=e.price,t.totalPrice=(e.price*t.quantity).toFixed(2))},querySearch(t,e){var r=this.medicinesDB.map(l=>({value:l.name}));console.log(r);var u=t?r.filter(this.createFilter(t)):r;console.log(u),e(u)},createFilter(t){return e=>e.value.toLowerCase().includes(t.toLowerCase())},handleSelect(t){var e=this.medicinesDB.find(r=>r.name===t);e&&(this.form.medicines[this.form.medicines.length-1].price=e.price,this.calculatePrice(this.form.medicines[this.form.medicines.length-1]))}}},de={key:0,class:"modal-background"},ue={class:"modal-container"},me={class:"button-group"};function pe(t,e,r,u,l,a){const f=s("el-form-header"),m=s("el-input"),p=s("el-form-item"),_=s("el-date-picker"),w=s("el-radio"),A=s("el-radio-group"),h=s("el-autocomplete"),V=s("el-input-number"),C=s("el-col"),P=s("el-row"),y=s("el-button"),B=s("el-form");return l.isVisible?(g(),b("div",de,[i("div",ue,[n(B,{model:l.form,class:"form","label-width":"auto",style:{"max-width":"600px"}},{default:o(()=>[n(f,{class:"form-header"},{default:o(()=>[d("处方开具")]),_:1}),n(p,{label:"姓名",class:"namelable"},{default:o(()=>[n(m,{modelValue:l.form.name,"onUpdate:modelValue":e[0]||(e[0]=c=>l.form.name=c)},null,8,["modelValue"])]),_:1}),n(p,{label:"就诊日期"},{default:o(()=>[n(_,{modelValue:l.form.date,"onUpdate:modelValue":e[1]||(e[1]=c=>l.form.date=c),type:"date"},null,8,["modelValue"])]),_:1}),n(p,{label:"性别"},{default:o(()=>[n(A,{modelValue:l.form.gender,"onUpdate:modelValue":e[2]||(e[2]=c=>l.form.gender=c)},{default:o(()=>[n(w,{value:"男"},{default:o(()=>[d("男")]),_:1}),n(w,{value:"女"},{default:o(()=>[d("女")]),_:1})]),_:1},8,["modelValue"])]),_:1}),(g(!0),b(j,null,R(l.form.medicines,(c,S)=>(g(),U(p,{key:S},{default:o(()=>[n(h,{modelValue:c.name,"onUpdate:modelValue":v=>c.name=v,"trigger-on-focus":!1,"fetch-suggestions":a.querySearch,placeholder:"药物名称",onSelect:a.handleSelect,"show-all":!0},null,8,["modelValue","onUpdate:modelValue","fetch-suggestions","onSelect"]),n(V,{modelValue:c.quantity,"onUpdate:modelValue":v=>c.quantity=v,min:0,step:1,placeholder:"数量",onChange:v=>a.calculatePrice(c)},null,8,["modelValue","onUpdate:modelValue","onChange"]),n(P,null,{default:o(()=>[n(C,{span:12},{default:o(()=>[n(m,{modelValue:c.totalPrice,"onUpdate:modelValue":v=>c.totalPrice=v,disabled:"",placeholder:"总价",style:{"margin-left":"10px"}},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),l.form.medicines.length>1?(g(),U(y,{key:0,type:"danger",icon:"el-icon-delete",onClick:v=>a.removeMedicine(S),class:"delete-button"},{default:o(()=>[d("删除药物")]),_:2},1032,["onClick"])):I("",!0)]),_:2},1024))),128)),n(p,null,{default:o(()=>[n(y,{onClick:a.addMedicine,type:"primary"},{default:o(()=>[d("添加药物")]),_:1},8,["onClick"])]),_:1}),n(p,{label:"医师建议"},{default:o(()=>[n(m,{type:"textarea",modelValue:l.form.advice,"onUpdate:modelValue":e[3]||(e[3]=c=>l.form.advice=c)},null,8,["modelValue"])]),_:1}),n(p,null,{default:o(()=>[n(m,{modelValue:a.totalPrice,"onUpdate:modelValue":e[4]||(e[4]=c=>a.totalPrice=c),disabled:"",placeholder:"总价"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),i("div",me,[n(y,{onClick:a.submitForm,type:"primary"},{default:o(()=>[d("提交")]),_:1},8,["onClick"]),n(y,{onClick:a.closeModal},{default:o(()=>[d("退出")]),_:1},8,["onClick"])])])])):I("",!0)}const _e=k(ce,[["render",pe],["__scopeId","data-v-8a9d37cb"]]),fe={data(){return{desc:"问诊列表统计",patient:[],filteredPatients:[]}},components:{PrescriptionDetails:_e},methods:{getPatientsData:function(){let t=this;this.$axios.get("/api/patients/list/").then(function(e){t.patient=e.data.patients}).catch(function(e){console.log(e)})},showPrescriptionDetails(t){this.$refs.prescriptionDetails.openModal(t)},selectFunc(t){let e=new Date;e.setHours(0,0,0,0);let r=new Date(e);switch(r.setDate(r.getDate()-1),t){case"1":this.filteredPatients=this.patient.filter(u=>{let l=u.date.split("年").join("-").split("月").join("-").split("日").join("").split("-"),a=new Date(l[0],l[1]-1,l[2]);return a.setHours(0,0,0,0),a.toDateString()===e.toDateString()});break;case"2":this.filteredPatients=this.patient.filter(u=>{let l=u.date.split("年").join("-").split("月").join("-").split("日").join("").split("-"),a=new Date(l[0],l[1]-1,l[2]);return a.setHours(0,0,0,0),a.toDateString()===r.toDateString()});break;case"3":this.filteredPatients=this.patient.filter(u=>{let l=u.date.split("年").join("-").split("月").join("-").split("日").join("").split("-"),a=new Date(l[0],l[1]-1,l[2]);return a.setHours(0,0,0,0),a<r});break}console.log(this.filteredPatients)}},mounted(){this.getPatientsData()}},ge=t=>(E("data-v-e6e298c6"),t=t(),F(),t),he=ge(()=>i("span",null,"问诊列表",-1));function be(t,e,r,u,l,a){const f=s("PrescriptionDetails"),m=s("el-menu-item"),p=s("el-sub-menu"),_=s("el-menu"),w=s("el-aside"),A=s("el-header"),h=s("el-table-column"),V=s("el-button"),C=s("el-table"),P=s("el-pagination"),y=s("el-main"),B=s("el-footer"),c=s("el-container");return g(),b(j,null,[n(f,{ref:"prescriptionDetails"},null,512),n(c,{style:{height:"100vh"}},{default:o(()=>[n(c,null,{default:o(()=>[n(w,{width:"200px"},{default:o(()=>[n(_,{class:"aside my-menu","default-active":"1","unique-opened":!0},{default:o(()=>[n(p,{index:"1"},{title:o(()=>[he]),default:o(()=>[n(m,{index:"1"},{default:o(()=>[d("今日")]),_:1}),n(m,{index:"2"},{default:o(()=>[d("昨日")]),_:1}),n(m,{index:"3"},{default:o(()=>[d("更早")]),_:1})]),_:1})]),_:1})]),_:1}),n(c,null,{default:o(()=>[n(A,{height:"30px",style:{padding:"0",margin:"0"}}),n(y,{class:"main"},{default:o(()=>[i("div",null,[n(C,{data:l.patient},{default:o(()=>[n(h,{prop:"name",label:"姓名"}),n(h,{style:{"text-align":"right"},label:"操作"},{default:o(S=>[n(V,{class:"prescribe-button",onClick:v=>a.showPrescriptionDetails(S.row)},{default:o(()=>[d("开具处方")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),n(P,{onSizeChange:t.handleSizeChange,onCurrentChange:t.handleCurrentChange,"current-page":t.currentPage,"page-sizes":[10,20,30,40],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.totalItems,"hide-on-single-page":!1},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])]),_:1}),n(B,{height:"30px",align:"center",class:"footer"},{default:o(()=>[d("SE_GROUP_6")]),_:1})]),_:1})]),_:1})]),_:1})],64)}const Se=k(fe,[["render",be],["__scopeId","data-v-e6e298c6"]]),ve="/static/png/list1.1-COPBUUfe.png",x="data:image/png;base64,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",ye="/static/png/list1.2-CXTjwv-z.png",we="/static/png/list1.3-BjQrpYg8.png",ke="/static/png/list1.4-CE-oRGQB.png",Ae={name:"HeaderNavigation",data(){return{WebURL:"http://localhost:8080",currentIndex:0,images:["/static/img/navigation/banner1.jpg","/static/img/navigation/banner2.jpg","/static/img/navigation/banner3.jpg"]}},mounted(){setInterval(this.changeBackground,5e3)},components:{RouterLink:H,RouterView:L},methods:{changeBackground(){this.currentIndex=(this.currentIndex+1)%this.images.length;let t=document.getElementsByClassName("header-nav");for(let e=0;e<t.length;e++)t[e].style.transition="background-image 2s ease-in-out",t[e].style.backgroundImage="url("+this.images[this.currentIndex]+")"},showSurroundImage(t){const e=document.querySelector(`.clickable-images a:nth-child(${t}) .Surround-image`);e&&(e.style.opacity=1,e.style.animation="spin 10s linear infinite")},hideSurroundImage(){document.querySelectorAll(".Surround-image").forEach(e=>{e.style.opacity=0,e.style.transform="rotate(0deg)"})}}},Ve=i("nav",null,[i("a",{href:"#unknown"},"首页"),i("a",{href:"#unknown"},"登录"),i("a",{href:"#unknown"},"联系我们"),i("a",{href:"#unknown"},"关于")],-1),Ce={class:"clickable-images"},Pe=i("img",{class:"designed-icon",src:ve,alt:"Image 1"},null,-1),Be=i("img",{class:"Surround-image",src:x,alt:"Surround Image 1"},null,-1),De=[Pe,Be],Me=i("img",{class:"designed-icon",src:ye,alt:"Image 2"},null,-1),xe=i("img",{class:"Surround-image",src:x,alt:"Surround Image 2"},null,-1),Ie=[Me,xe],je=i("img",{class:"designed-icon",src:we,alt:"Image 3"},null,-1),Ee=i("img",{class:"Surround-image",src:x,alt:"Surround Image 3"},null,-1),Fe=i("img",{class:"designed-icon",src:ke,alt:"Image 4"},null,-1),Ye=i("img",{class:"Surround-image",src:x,alt:"Surround Image 4"},null,-1);function Ue(t,e,r,u,l,a){const f=s("RouterLink"),m=s("el-header"),p=s("RouterView");return g(),b("div",null,[n(m,{class:"header-nav"},{default:o(()=>[Ve,i("div",Ce,[i("a",{href:"#link1",class:"image-link",onMouseover:e[0]||(e[0]=_=>a.showSurroundImage(1)),onMouseleave:e[1]||(e[1]=_=>a.hideSurroundImage())},De,32),i("a",{href:"#link2",class:"image-link",onMouseover:e[2]||(e[2]=_=>a.showSurroundImage(2)),onMouseleave:e[3]||(e[3]=_=>a.hideSurroundImage())},Ie,32),n(f,{to:"/Prescription",class:"image-link",onMouseover:e[4]||(e[4]=_=>a.showSurroundImage(3)),onMouseleave:e[5]||(e[5]=_=>a.hideSurroundImage())},{default:o(()=>[je,Ee]),_:1}),n(f,{to:"/Bill",class:"image-link",onMouseover:e[6]||(e[6]=_=>a.showSurroundImage(4)),onMouseleave:e[7]||(e[7]=_=>a.hideSurroundImage())},{default:o(()=>[Fe,Ye]),_:1})])]),_:1}),n(p)])}const Re=k(Ae,[["render",Ue]]),qe={name:"NavBar",setup(){const t=q(!1),e=()=>{t.value=window.scrollY>200};return G(()=>{window.addEventListener("scroll",e)}),z(()=>{window.removeEventListener("scroll",e)}),{isSticky:t}}},Y=t=>(E("data-v-dd1ccbd4"),t=t(),F(),t),Ge=Y(()=>i("a",{href:"#",class:"white-bold"},"首页",-1)),ze=Y(()=>i("a",{href:"#",class:"white-bold"},"关于",-1)),Oe=Y(()=>i("a",{href:"#",class:"white-bold"},"联系我们",-1)),Ne=[Ge,ze,Oe];function He(t,e,r,u,l,a){return g(),b("div",{class:O(["navbar",{sticky:u.isSticky}])},Ne,2)}const Le=k(qe,[["render",He],["__scopeId","data-v-dd1ccbd4"]]),Je={id:"app"},Ke={__name:"App",setup(t){return(e,r)=>(g(),b("div",Je,[n(Re),n(Le)]))}},Qe=J({history:K("/"),routes:[{path:"/",redirect:"/Bill"},{path:"/Bill",name:"Bill",component:re},{path:"/Prescription",name:"Prescription",component:Se}]}),D=N(Ke);D.config.globalProperties.$axios=T;D.config.productionTip=!1;D.use(Qe);D.use(Q);D.mount("#app");
