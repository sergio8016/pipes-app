import{e as Ie}from "./chunk-ECXJAKH2.js";import{a as R,b as U,c as Te,d as xe}from "./chunk-U32KN2XT.js";import{$ as q,$a as $,Ab as y,Bb as ie,Ca as n,Da as L,Dc as ue,Ec as _e,Ib as d,Jb as w,Kb as P,Lb as v,Mc as fe,Nb as le,Nc as A,Pa as z,Pc as V,Qc as j,R as Q,Rc as N,Sa as u,Ta as m,Ua as c,Ya as G,Yb as O,Yc as he,Za as H,_ as C,_a as Y,ab as i,bb as l,cb as k,db as S,eb as E,fb as f,gb as M,gd as ve,ha as T,hb as h,hd as be,ia as x,ib as _,jb as W,kb as B,lb as X,mc as ae,md as ye,nb as Z,nd as Ce,oa as J,ob as ee,oc as oe,pb as D,pc as re,qa as I,qb as s,qc as se,rb as g,rc as pe,sb as F,tb as te,wc as ce,x as K,xc as de,yb as ne,yc as me,zc as ge}from"./chunk-4P6I7V53.js";var we=["*",[["p-header"]]],Pe=["*","p-header"],ke=(e, r)=>({"p-fieldset p-component":!0,"p-fieldset-toggleable":e,"p-fieldset-expanded":r}),Me= e=>({transitionParams:e,height:"0"}),Be= e=>({value:"hidden",params:e}),De= e=>({transitionParams:e,height:"*"}),Oe= e=>({value:"visible",params:e});function Ae(e, r){e&1&&k(0,"PlusIcon",11),e&2&&(c("styleClass","p-fieldset-toggler"),m("data-pc-section","togglericon"))}function Ve(e, r){e&1&&f(0)}function je(e, r){if(e&1&&(i(0,"span",12),u(1,Ve,1,0,"ng-container",6),l()),e&2){let t=_(3);m("data-pc-section","togglericon"),n(),c("ngTemplateOutlet",t.expandIconTemplate)}}function Ne(e, r){if(e&1&&(S(0),u(1,Ae,1,2,"PlusIcon",9)(2,je,2,2,"span",10),E()),e&2){let t=_(2);n(),c("ngIf",!t.expandIconTemplate),n(),c("ngIf",t.expandIconTemplate)}}function Re(e, r){e&1&&k(0,"MinusIcon",11),e&2&&(c("styleClass","p-fieldset-toggler"),m("aria-hidden",!0)("data-pc-section","togglericon"))}function Ue(e, r){e&1&&f(0)}function Ke(e, r){if(e&1&&(i(0,"span",12),u(1,Ue,1,0,"ng-container",6),l()),e&2){let t=_(3);m("data-pc-section","togglericon"),n(),c("ngTemplateOutlet",t.collapseIconTemplate)}}function Qe(e, r){if(e&1&&(S(0),u(1,Re,1,3,"MinusIcon",9)(2,Ke,2,2,"span",10),E()),e&2){let t=_(2);n(),c("ngIf",!t.collapseIconTemplate),n(),c("ngIf",t.collapseIconTemplate)}}function qe(e, r){e&1&&f(0)}function Je(e, r){if(e&1){let t=M();S(0),i(1,"a",7),h("click",function(a){T(t);let o=_();return x(o.toggle(a))})("keydown",function(a){T(t);let o=_();return x(o.onKeyDown(a))}),u(2,Ne,3,2,"ng-container",8)(3,Qe,3,2,"ng-container",8)(4,qe,1,0,"ng-container",6),l(),E()}if(e&2){let t=_(),p=D(4);n(),m("id",t.id+"_header")("aria-controls",t.id+"_content")("aria-expanded",!t.collapsed)("aria-label",t.buttonAriaLabel),n(),c("ngIf",t.collapsed),n(),c("ngIf",!t.collapsed),n(),c("ngTemplateOutlet",p)}}function Le(e, r){e&1&&f(0)}function ze(e, r){if(e&1&&(i(0,"span",13),s(1),l(),B(2,1),u(3,Le,1,0,"ng-container",6)),e&2){let t=_();m("data-pc-section","legendtitle"),n(),g(t.legend),n(2),c("ngTemplateOutlet",t.headerTemplate)}}function Ge(e, r){e&1&&f(0)}var Se=(()=>{class e{el;legend;toggleable;collapsed=!1;style;styleClass;transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";collapsedChange=new I;onBeforeToggle=new I;onAfterToggle=new I;templates;get id(){return he()}get buttonAriaLabel(){return this.legend}animating;headerTemplate;contentTemplate;collapseIconTemplate;expandIconTemplate;constructor(t){this.el=t}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this.headerTemplate=t.template;break;case"expandicon":this.expandIconTemplate=t.template;break;case"collapseicon":this.collapseIconTemplate=t.template;break;case"content":this.contentTemplate=t.template;break}})}toggle(t){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:t,collapsed:this.collapsed}),this.collapsed?this.expand():this.collapse(),this.onAfterToggle.emit({originalEvent:t,collapsed:this.collapsed}),t.preventDefault()}onKeyDown(t){(t.code==="Enter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}expand(){this.collapsed=!1,this.collapsedChange.emit(this.collapsed)}collapse(){this.collapsed=!0,this.collapsedChange.emit(this.collapsed)}getBlockableElement(){return this.el.nativeElement.children[0]}onToggleDone(){this.animating=!1}static \u0275fac=function(p){return new(p||e)(L(J))};static \u0275cmp=C({type:e,selectors:[["p-fieldset"]],contentQueries:function(p, a, o){if(p&1&&X(o,ve,4),p&2){let b;Z(b=ee())&&(a.templates=b)}},hostAttrs:[1,"p-element"],inputs:{legend:"legend",toggleable:[2,"toggleable","toggleable",O],collapsed:[2,"collapsed","collapsed",O],style:"style",styleClass:"styleClass",transitionOptions:"transitionOptions"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},features:[z],ngContentSelectors:Pe,decls:9,vars:28,consts:[["legendContent",""],[3,"ngClass","ngStyle"],[1,"p-fieldset-legend"],[4,"ngIf","ngIfElse"],["role","region",1,"p-toggleable-content"],[1,"p-fieldset-content"],[4,"ngTemplateOutlet"],["pRipple","","tabindex","0","role","button",3,"click","keydown"],[4,"ngIf"],[3,"styleClass",4,"ngIf"],["class","p-fieldset-toggler",4,"ngIf"],[3,"styleClass"],[1,"p-fieldset-toggler"],[1,"p-fieldset-legend-text"]],template:function(p, a){if(p&1){let o=M();W(we),i(0,"fieldset",1)(1,"legend",2),u(2,Je,5,7,"ng-container",3)(3,ze,4,3,"ng-template",null,0,le),l(),i(5,"div",4),h("@fieldsetContent.done",function(){return T(o),x(a.onToggleDone())}),i(6,"div",5),B(7),u(8,Ge,1,0,"ng-container",6),l()()()}if(p&2){let o=D(4);G(a.styleClass),c("ngClass",ie(17,ke,a.toggleable,!a.collapsed&&a.toggleable))("ngStyle",a.style),m("id",a.id)("data-pc-name","fieldset")("data-pc-section","root"),n(),m("data-pc-section","legend"),n(),c("ngIf",a.toggleable)("ngIfElse",o),n(3),c("@fieldsetContent",a.collapsed?y(22,Be,y(20,Me,a.transitionOptions)):y(26,Oe,y(24,De,a.animating?a.transitionOptions:"0ms"))),m("id",a.id+"_content")("aria-labelledby",a.id+"_header")("aria-hidden",a.collapsed)("data-pc-section","toggleablecontent"),n(),m("data-pc-section","content"),n(2),c("ngTemplateOutlet",a.contentTemplate)}},dependencies:()=>[ae,oe,se,re,ye,R,U],styles:[`@layer primeng{.p-fieldset{min-width:initial}.p-fieldset-legend>a,.p-fieldset-legend>span{display:flex;align-items:center;justify-content:center}.p-fieldset-toggleable .p-fieldset-legend a{cursor:pointer;-webkit-user-select:none;user-select:none;overflow:hidden;position:relative}.p-fieldset-legend-text{line-height:1}.p-fieldset-toggleable.p-fieldset-expanded>.p-toggleable-content:not(.ng-animating){overflow:visible}.p-fieldset-toggleable .p-toggleable-content{overflow:hidden}}
`],encapsulation:2,data:{animation:[fe("fieldsetContent",[j("hidden",V({height:"0"})),j("visible",V({height:"*"})),N("visible <=> hidden",[A("{{transitionParams}}")]),N("void => *",A(0))])]},changeDetection:0})}return e})(),Ee=(()=>{class e{static \u0275fac=function(p){return new(p||e)};static \u0275mod=q({type:e});static \u0275inj=Q({imports:[_e,Ce,R,U,be]})}return e})();function Ye(e,r){if(e&1&&(i(0,"li")(1,"b"),s(2),l()()),e&2){let t=r.$implicit;n(2),F(" ",t.value," ")}}var yt=(()=>{let r=class r{constructor(){this.name="Sergio",this.gender="male",this.invitationMap={male:"guy",female:"girl"},this.clients=["Sergio","Omaira","Francisco","Hassan","Mateo","Isa","Abdullah"],this.clientsMap={"=0":"no clients waiting.","=1":"client waiting.",other:"# clients waiting."},this.person={name:"Sergio",age:new Date().getFullYear()-1990,address:"Dark continent"},this.myObservableTimer=K(2e3),this.promiseValue=new Promise((p,a)=>{setTimeout(()=>{p("Promise resolved after 3 secs")},3e3)}),this.originalOrder=(p,a)=>0}onButtonChangeClick(){this.name="Omaira",this.gender="female"}onDeleteClient(){this.clients.shift()}};r.\u0275fac=function(a){return new(a||r)},r.\u0275cmp=C({type:r,selectors:[["app-uncommon-page"]],standalone:!0,features:[ne],decls:66,vars:47,consts:[["header","Numeric pipes",1,"p-1"],[1,"grid","mt-1"],[1,"col-12","md:col-6"],["legend","i18nSelect Pipe","toggleable","true"],["label","Change",3,"click"],["legend","i18nPlural Pipe","toggleable","true"],["label","Delete client",3,"click"],["legend","Slice Pipe","toggleable","true"],["legend","Json Pipe","toggleable","true"],["legend","KeyValue Pipe","toggleable","true"],["legend","Async Pipe","toggleable","true"]],template:function(a,o){a&1&&(i(0,"p-panel",0)(1,"p"),s(2," Uncommon pipes included in Angular - Usually in the common module "),l()(),i(3,"div",1)(4,"div",2)(5,"p-fieldset",3)(6,"p"),s(7),d(8,"i18nSelect"),l(),i(9,"p-button",4),h("click",function(){return o.onButtonChangeClick()}),l()()(),i(10,"div",2)(11,"p-fieldset",5)(12,"p"),s(13),d(14,"i18nPlural"),l(),i(15,"p-button",6),h("click",function(){return o.onDeleteClient()}),l()()(),i(16,"div",2)(17,"p-fieldset",7)(18,"b"),s(19,"Original"),l(),i(20,"pre"),s(21),l(),i(22,"b"),s(23,"slice:0:2"),l(),i(24,"pre"),s(25),d(26,"slice"),l(),i(27,"b"),s(28,"slice:1:2"),l(),i(29,"pre"),s(30),d(31,"slice"),l(),i(32,"b"),s(33,"slice:0:3"),l(),i(34,"pre"),s(35),d(36,"slice"),l(),i(37,"b"),s(38,"slice:3:4"),l(),i(39,"pre"),s(40),d(41,"slice"),l(),i(42,"b"),s(43,"slice:0:3"),l(),i(44,"pre"),s(45),d(46,"slice"),l()()(),i(47,"div",2)(48,"p-fieldset",8)(49,"pre"),s(50),d(51,"json"),l()()(),i(52,"div",2)(53,"p-fieldset",9)(54,"ul"),Y(55,Ye,3,1,"li",null,H),d(57,"keyvalue"),l()()(),i(58,"div",2)(59,"p-fieldset",10)(60,"pre"),s(61),d(62,"async"),l(),i(63,"pre"),s(64),d(65,"async"),l()()()()),a&2&&(n(7),te(" Greetings ",o.name," it's a pleasure to invite a nice ",P(8,12,o.gender,o.invitationMap)," like you to our app. "),n(6),F(" Actually we have ",P(14,15,o.clients.length,o.clientsMap)," "),n(8),g(o.clients),n(4),g(v(26,18,o.clients,0,2)),n(5),g(v(31,22,o.clients,1,2)),n(5),g(v(36,26,o.clients,0,3)),n(5),g(v(41,30,o.clients,3,4)),n(5),g(v(46,34,o.clients,0,3)),n(5),F("        ",w(51,38,o.person),`
      `),n(5),$(P(57,40,o.person,o.originalOrder)),n(6),g(w(62,43,o.myObservableTimer)),n(3),g(w(65,45,o.promiseValue)))},dependencies:[xe,Te,Ee,Se,Ie,de,ce,ue,me,ge,pe]});let e=r;return e})();export{yt as UncommonPageComponent};
