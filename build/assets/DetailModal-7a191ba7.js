import{g as D,a as U,r as u,s as h,B as A,b as G,c as p,_ as c,d as m,e as Y,u as P,f as W,j as s,h as g,i as M,k as q,l as H,m as V,n as $,o as J,p as K,q as Q,t as X,v as Z,F as w,C as oo,w as ao,x as E,I as no,y as io,z as ro,A as to,R as eo,D as so,E as lo,T as I}from"./index-7f3a572c.js";import{M as co}from"./Modal-24764d36.js";function po(o){return U("MuiButton",o)}const uo=D("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),z=uo,vo=u.exports.createContext({}),xo=vo,go=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],bo=o=>{const{color:a,disableElevation:n,fullWidth:r,size:t,variant:i,classes:d}=o,v={root:["root",i,`${i}${p(a)}`,`size${p(t)}`,`${i}Size${p(t)}`,a==="inherit"&&"colorInherit",n&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${p(t)}`],endIcon:["endIcon",`iconSize${p(t)}`]},e=q(v,po,d);return c({},d,e)},S=o=>c({},o.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},o.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},o.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),fo=h(A,{shouldForwardProp:o=>G(o)||o==="classes",name:"MuiButton",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:n}=o;return[a.root,a[n.variant],a[`${n.variant}${p(n.color)}`],a[`size${p(n.size)}`],a[`${n.variant}Size${p(n.size)}`],n.color==="inherit"&&a.colorInherit,n.disableElevation&&a.disableElevation,n.fullWidth&&a.fullWidth]}})(({theme:o,ownerState:a})=>{var n,r;return c({},o.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(o.vars||o).shape.borderRadius,transition:o.transitions.create(["background-color","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:hover":c({textDecoration:"none",backgroundColor:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:m(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="text"&&a.color!=="inherit"&&{backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:m(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="outlined"&&a.color!=="inherit"&&{border:`1px solid ${(o.vars||o).palette[a.color].main}`,backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:m(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="contained"&&{backgroundColor:(o.vars||o).palette.grey.A100,boxShadow:(o.vars||o).shadows[4],"@media (hover: none)":{boxShadow:(o.vars||o).shadows[2],backgroundColor:(o.vars||o).palette.grey[300]}},a.variant==="contained"&&a.color!=="inherit"&&{backgroundColor:(o.vars||o).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[a.color].main}}),"&:active":c({},a.variant==="contained"&&{boxShadow:(o.vars||o).shadows[8]}),[`&.${z.focusVisible}`]:c({},a.variant==="contained"&&{boxShadow:(o.vars||o).shadows[6]}),[`&.${z.disabled}`]:c({color:(o.vars||o).palette.action.disabled},a.variant==="outlined"&&{border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`},a.variant==="outlined"&&a.color==="secondary"&&{border:`1px solid ${(o.vars||o).palette.action.disabled}`},a.variant==="contained"&&{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground})},a.variant==="text"&&{padding:"6px 8px"},a.variant==="text"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].main},a.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},a.variant==="outlined"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].main,border:o.vars?`1px solid rgba(${o.vars.palette[a.color].mainChannel} / 0.5)`:`1px solid ${m(o.palette[a.color].main,.5)}`},a.variant==="contained"&&{color:o.vars?o.vars.palette.text.primary:(n=(r=o.palette).getContrastText)==null?void 0:n.call(r,o.palette.grey[300]),backgroundColor:(o.vars||o).palette.grey[300],boxShadow:(o.vars||o).shadows[2]},a.variant==="contained"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].contrastText,backgroundColor:(o.vars||o).palette[a.color].main},a.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},a.size==="small"&&a.variant==="text"&&{padding:"4px 5px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="text"&&{padding:"8px 11px",fontSize:o.typography.pxToRem(15)},a.size==="small"&&a.variant==="outlined"&&{padding:"3px 9px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="outlined"&&{padding:"7px 21px",fontSize:o.typography.pxToRem(15)},a.size==="small"&&a.variant==="contained"&&{padding:"4px 10px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="contained"&&{padding:"8px 22px",fontSize:o.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})},({ownerState:o})=>o.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${z.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${z.disabled}`]:{boxShadow:"none"}}),yo=h("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(o,a)=>{const{ownerState:n}=o;return[a.startIcon,a[`iconSize${p(n.size)}`]]}})(({ownerState:o})=>c({display:"inherit",marginRight:8,marginLeft:-4},o.size==="small"&&{marginLeft:-2},S(o))),mo=h("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(o,a)=>{const{ownerState:n}=o;return[a.endIcon,a[`iconSize${p(n.size)}`]]}})(({ownerState:o})=>c({display:"inherit",marginRight:-4,marginLeft:8},o.size==="small"&&{marginRight:-2},S(o))),zo=u.exports.forwardRef(function(a,n){const r=u.exports.useContext(xo),t=Y(r,a),i=P({props:t,name:"MuiButton"}),{children:d,color:v="primary",component:e="button",className:l,disabled:x=!1,disableElevation:C=!1,disableFocusRipple:f=!1,endIcon:k,focusVisibleClassName:T,fullWidth:F=!1,size:j="medium",startIcon:B,type:R,variant:L="text"}=i,O=W(i,go),y=c({},i,{color:v,component:e,disabled:x,disableElevation:C,disableFocusRipple:f,fullWidth:F,size:j,type:R,variant:L}),b=bo(y),_=B&&s(yo,{className:b.startIcon,ownerState:y,children:B}),N=k&&s(mo,{className:b.endIcon,ownerState:y,children:k});return g(fo,c({ownerState:y,className:M(r.className,b.root,l),component:e,disabled:x,focusRipple:!f,focusVisibleClassName:M(b.focusVisible,T),ref:n,type:R},O,{classes:b,children:[_,d,N]}))}),ho=zo,Co=["component","direction","spacing","divider","children"];function $o(o,a){const n=u.exports.Children.toArray(o).filter(Boolean);return n.reduce((r,t,i)=>(r.push(t),i<n.length-1&&r.push(u.exports.cloneElement(a,{key:`separator-${i}`})),r),[])}const Io=o=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[o],ko=({ownerState:o,theme:a})=>{let n=c({display:"flex",flexDirection:"column"},V({theme:a},$({values:o.direction,breakpoints:a.breakpoints.values}),r=>({flexDirection:r})));if(o.spacing){const r=J(a),t=Object.keys(a.breakpoints.values).reduce((e,l)=>((typeof o.spacing=="object"&&o.spacing[l]!=null||typeof o.direction=="object"&&o.direction[l]!=null)&&(e[l]=!0),e),{}),i=$({values:o.direction,base:t}),d=$({values:o.spacing,base:t});typeof i=="object"&&Object.keys(i).forEach((e,l,x)=>{if(!i[e]){const f=l>0?i[x[l-1]]:"column";i[e]=f}}),n=K(n,V({theme:a},d,(e,l)=>({"& > :not(style) + :not(style)":{margin:0,[`margin${Io(l?i[l]:o.direction)}`]:X(r,e)}})))}return n=Q(a.breakpoints,n),n},Bo=h("div",{name:"MuiStack",slot:"Root",overridesResolver:(o,a)=>[a.root]})(ko),Ro=u.exports.forwardRef(function(a,n){const r=P({props:a,name:"MuiStack"}),t=H(r),{component:i="div",direction:d="column",spacing:v=0,divider:e,children:l}=t,x=W(t,Co);return s(Bo,c({as:i,ownerState:{direction:d,spacing:v},ref:n},x,{children:e?$o(l,e):l}))}),Mo=Ro,Vo={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"flex",flexDirection:{xs:"column",sm:"row"},gap:"1rem",width:{xs:"90%",sm:600},overflowY:{xs:"scroll",sm:"hidden"},height:{xs:"50%",sm:"auto"},border:`1px solid ${Z[400]}`,p:4};function Wo({useReduceModal:o}){const[a,n]=o(),[r,t]=u.exports.useState(a.data.favorite||null);return s(w,{children:s(co,{keepMounted:!0,open:a.open,onClose:()=>n({type:"close"}),"aria-labelledby":"keep-mounted-modal-title","aria-describedby":"keep-mounted-modal-description",children:g(oo,{sx:{...Vo},children:[g(Mo,{margin:"auto",children:[s(ao,{component:"img",src:`https://image.tmdb.org/t/p/w185/${a.data.poster_path}`}),g(E,{sx:{display:"flex",alignItems:"center",justifyContent:"left"},children:[g(no,{children:[r&&s(io,{sx:{color:ro[800]}}),!r&&s(to,{})]}),s(eo,{value:a.data.rating,defaultValue:0,precision:.5,readOnly:!0})]})]}),s(so,{children:g(lo,{sx:{flex:"1 0 auto"},children:[s(I,{id:"keep-mounted-modal-title",gutterBottom:!0,variant:"h5",component:"div",children:a.data.original_title}),s(I,{variant:"body2",component:"p",color:"GrayText",marginY:"10px",children:a.data.release_date}),s(E,{disableGutters:!0,sx:{display:"flex",gap:"4px",flexWrap:"wrap"},children:a.data.genres.map((i,d)=>s(ho,{variant:"outlined",size:"small",color:"inherit",children:i.name},d))}),s(I,{variant:"body2",id:"keep-mounted-modal-description",sx:{mt:2},children:a.data.overview})]})})]})})})}export{Wo as default};