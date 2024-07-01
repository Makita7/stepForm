import{d as O,u as T,a as j,l as $,m as z,c as _,f as t,w as o,e,b as a,t as s,n as k,s as w,g as h,F as V,h as p,o as d,j as u,i as F,r as M,p as Y,k as A,_ as G}from"./index-Ci3EiQl5.js";const D=y=>(Y("data-v-fb45ea2d"),y=y(),A(),y),K=D(()=>a("h1",{class:"titles"},"Summary",-1)),L=D(()=>a("p",{class:"detail mb-6"},"Double-check everything looks OK before confirming.",-1)),R={class:"d-flex align-center h pt-4"},U={class:"titles plan"},q={key:0,class:"pDetail mr-6 font-weight-bold plan"},H={key:1,class:"pDetail mr-6 font-weight-bold plan"},J={class:"detail"},Q={class:"blue pl-1"},W={class:"mr-6 detail"},X={class:"blue pl-1"},Z={class:"detail"},ee={class:"blue pl-1"},te={class:"detail ml-3"},ae={class:"d-flex total align-center h pl-3"},le={class:"detail ml-3"},se={key:0,class:"d-flex mx-2"},oe={class:"d-flex justify-space-evenly w-100 mb-4 mt-4"},ne=O({__name:"summaryPage",setup(y){const l=T(),m=j(),P=l.addOnds.filter(r=>r.added),v=l.Plans.filter(r=>r.title===l.selected);let f=$(0),n=$(!1);function B(){P.forEach(r=>{l.yearPlan?f.value+=r.yearly:f.value+=r.monthly}),l.yearPlan?f.value+=v[0].yearly:f.value+=v[0].monthly}const E=r=>{const i=/(\d{3})(\d{3})(\d{4})/;return String(r).replace(i,"($1) $2-$3")};return z(()=>B()),(r,i)=>{const x=p("router-link"),C=p("v-col"),b=p("v-spacer"),N=p("v-divider"),S=p("v-card"),g=p("v-btn"),I=p("v-dialog");return d(),_(V,null,[K,L,t(S,{class:"sumC elevation-0 roundm",width:e(m).width>400?"90%":"100%"},{default:o(()=>[a("div",R,[t(C,{class:"ml-3 cellCol"},{default:o(()=>[a("p",U,s(e(v)[0].title)+" ("+s(e(l).yearPlan?"Yearly":"Monthly")+")",1),t(x,{to:"/",class:"detail"},{default:o(()=>[u("Change")]),_:1})]),_:1}),t(b),e(l).yearPlan?h("",!0):(d(),_("p",q,"$"+s(e(v)[0].monthly)+"/mo",1)),e(l).yearPlan?(d(),_("p",H,"$"+s(e(v)[0].yearly)+"/yr",1)):h("",!0)]),t(N,{class:"mx-8 mt-4"}),t(C,{class:"ml-3 pb-0"},{default:o(()=>[a("div",{class:k(e(m).width>400?"d-flex":"")},[a("p",J,[u("Name: "),a("b",Q,s(e(l).clientName),1)]),e(m).width>400?(d(),F(b,{key:0})):h("",!0),a("p",W,[u("Phone: "),a("b",X,s(E(e(l).clientNumber)),1)])],2),a("p",Z,[u("Email: "),a("b",ee,s(e(l).clientEmail),1)])]),_:1}),t(N,{class:"mx-8 mt-4"}),(d(!0),_(V,null,M(e(P),c=>(d(),_("div",{key:c.id,class:"d-flex align-center pl-3 h"},[a("p",te,s(c.title),1),t(b),e(l).yearPlan?h("",!0):(d(),_("p",{key:0,class:k(["pDetail",e(m).width>400?"mr-6":""])},"$"+s(c.monthly)+"/mo",3)),e(l).yearPlan?(d(),_("p",{key:1,class:k(["pDetail",e(m).width>400?"mr-6":""])},"$"+s(c.yearly)+"/yr",3)):h("",!0)]))),128))]),_:1},8,["width"]),a("div",ae,[a("p",le,"Total (per "+s(e(l).yearPlan?"year":"month")+")",1),t(b),a("p",{class:k(["title",e(m).width>400?"mr-6":""])},"+$"+s(e(f))+"/"+s(e(l).yearPlan?"yr":"mo"),3)]),e(m).width>400?(d(),_("div",se,[t(x,{to:"/add-ons"},{default:o(()=>[t(g,{class:"align b l",variant:"text"},{default:o(()=>[u("Go Back")]),_:1})]),_:1}),t(g,{onClick:i[0]||(i[0]=c=>w(n)?n.value=!0:n=!0),class:"align elevation-0 b r w",color:"var(--purplish-blue)",size:"large"},{default:o(()=>[u("Confirm")]),_:1})])):h("",!0),t(I,{modelValue:e(n),"onUpdate:modelValue":i[2]||(i[2]=c=>w(n)?n.value=c:n=c),width:"20rem"},{default:o(()=>[t(S,{class:"text-center",title:"Are you sure?"},{default:o(()=>[a("div",oe,[t(g,{onClick:i[1]||(i[1]=c=>w(n)?n.value=!1:n=!1),color:"var(--purplish-blue)",variant:"text",class:"elevation-0"},{default:o(()=>[u("No")]),_:1}),t(x,{to:"/thank-you"},{default:o(()=>[t(g,{color:"var(--purplish-blue)",variant:"text",class:"elevation-0"},{default:o(()=>[u("Yes")]),_:1})]),_:1})])]),_:1})]),_:1},8,["modelValue"])],64)}}}),ce=G(ne,[["__scopeId","data-v-fb45ea2d"]]);export{ce as default};