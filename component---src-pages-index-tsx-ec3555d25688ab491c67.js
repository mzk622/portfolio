/*! For license information please see component---src-pages-index-tsx-ec3555d25688ab491c67.js.LICENSE.txt */
(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[691],{3204:function(t){"use strict";const e=/[\p{Lu}]/u,n=/[\p{Ll}]/u,a=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,o=/[_.\- ]+/,i=new RegExp("^"+o.source),s=new RegExp(o.source+r.source,"gu"),l=new RegExp("\\d+"+r.source,"gu"),c=(t,r)=>{if("string"!=typeof t&&!Array.isArray(t))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(t=Array.isArray(t)?t.map((t=>t.trim())).filter((t=>t.length)).join("-"):t.trim()).length)return"";const o=!1===r.locale?t=>t.toLowerCase():t=>t.toLocaleLowerCase(r.locale),c=!1===r.locale?t=>t.toUpperCase():t=>t.toLocaleUpperCase(r.locale);if(1===t.length)return r.pascalCase?c(t):o(t);return t!==o(t)&&(t=((t,a,r)=>{let o=!1,i=!1,s=!1;for(let l=0;l<t.length;l++){const c=t[l];o&&e.test(c)?(t=t.slice(0,l)+"-"+t.slice(l),o=!1,s=i,i=!0,l++):i&&s&&n.test(c)?(t=t.slice(0,l-1)+"-"+t.slice(l-1),s=i,i=!1,o=!0):(o=a(c)===c&&r(c)!==c,s=i,i=r(c)===c&&a(c)!==c)}return t})(t,o,c)),t=t.replace(i,""),t=r.preserveConsecutiveUppercase?((t,e)=>(a.lastIndex=0,t.replace(a,(t=>e(t)))))(t,o):o(t),r.pascalCase&&(t=c(t.charAt(0))+t.slice(1)),((t,e)=>(s.lastIndex=0,l.lastIndex=0,t.replace(s,((t,n)=>e(n))).replace(l,(t=>e(t)))))(t,c)};t.exports=c,t.exports.default=c},8032:function(t,e,n){"use strict";n.d(e,{L:function(){return m},M:function(){return C},P:function(){return x},S:function(){return B},_:function(){return s},a:function(){return i},b:function(){return u},g:function(){return d},h:function(){return l}});var a=n(7294),r=(n(3204),n(5697)),o=n.n(r);function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},i.apply(this,arguments)}function s(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)e.indexOf(n=o[a])>=0||(r[n]=t[n]);return r}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(t,e,n){const a={};let r="gatsby-image-wrapper";return"fixed"===n?(a.width=t,a.height=e):"constrained"===n&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:a}}function u(t,e,n,a,r){return void 0===r&&(r={}),i({},n,{loading:a,shouldLoad:t,"data-main-image":"",style:i({},r,{opacity:e?1:0})})}function d(t,e,n,a,r,o,s,l){const c={};o&&(c.backgroundColor=o,"fixed"===n?(c.width=a,c.height=r,c.backgroundColor=o,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const u=i({},t,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:e?0:1,transition:"opacity 500ms linear"},c)});return u}const f=["children"],p=function(t){let{layout:e,width:n,height:r}=t;return"fullWidth"===e?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/n*100+"%"}}):"constrained"===e?a.createElement("div",{style:{maxWidth:n,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+n+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(t){let{children:e}=t,n=s(t,f);return a.createElement(a.Fragment,null,a.createElement(p,i({},n)),e,null)},h=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],y=function(t){let{src:e,srcSet:n,loading:r,alt:o="",shouldLoad:l}=t,c=s(t,h);return a.createElement("img",i({},c,{decoding:"async",loading:r,src:l?e:void 0,"data-src":l?void 0:e,srcSet:l?n:void 0,"data-srcset":l?void 0:n,alt:o}))},b=function(t){let{fallback:e,sources:n=[],shouldLoad:r=!0}=t,o=s(t,g);const l=o.sizes||(null==e?void 0:e.sizes),c=a.createElement(y,i({},o,e,{sizes:l,shouldLoad:r}));return n.length?a.createElement("picture",null,n.map((t=>{let{media:e,srcSet:n,type:o}=t;return a.createElement("source",{key:e+"-"+o+"-"+n,type:o,media:e,srcSet:r?n:void 0,"data-srcset":r?void 0:n,sizes:l})})),c):c};var v;y.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},b.displayName="Picture",b.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const w=["fallback"],x=function(t){let{fallback:e}=t,n=s(t,w);return e?a.createElement(b,i({},n,{fallback:{src:e},"aria-hidden":!0,alt:""})):a.createElement("div",i({},n))};x.displayName="Placeholder",x.propTypes={fallback:r.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(t,e,n){return t[e]?new Error("Invalid prop `"+e+"` supplied to `"+n+"`. Validation failed."):null}};const C=function(t){return a.createElement(a.Fragment,null,a.createElement(b,i({},t)),a.createElement("noscript",null,a.createElement(b,i({},t,{shouldLoad:!0}))))};C.displayName="MainImage",C.propTypes=b.propTypes;const S=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],Z=["style","className"],O=t=>t.replace(/\n/g,""),k=function(t,e,n){for(var a=arguments.length,r=new Array(a>3?a-3:0),i=3;i<a;i++)r[i-3]=arguments[i];return t.alt||""===t.alt?o().string.apply(o(),[t,e,n].concat(r)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:o().object.isRequired,alt:k},E=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],_=["style","className"],j=new Set;let P,F;const T=function(t){let{as:e="div",image:r,style:o,backgroundColor:u,className:d,class:f,onStartLoad:p,onLoad:m,onError:h}=t,g=s(t,E);const{width:y,height:b,layout:v}=r,w=c(y,b,v),{style:x,className:C}=w,S=s(w,_),Z=(0,a.useRef)(),O=(0,a.useMemo)((()=>JSON.stringify(r.images)),[r.images]);f&&(d=f);const k=function(t,e,n){let a="";return"fullWidth"===t&&(a='<div aria-hidden="true" style="padding-top: '+n/e*100+'%;"></div>'),"constrained"===t&&(a='<div style="max-width: '+e+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+n+"'%20width='"+e+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(v,y,b);return(0,a.useEffect)((()=>{P||(P=n.e(731).then(n.bind(n,6731)).then((t=>{let{renderImageToString:e,swapPlaceholderImage:n}=t;return F=e,{renderImageToString:e,swapPlaceholderImage:n}})));const t=Z.current.querySelector("[data-gatsby-image-ssr]");if(t&&l())return t.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{t.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),t.addEventListener("load",(function e(){t.removeEventListener("load",e),null==m||m({wasCached:!0}),setTimeout((()=>{t.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(O);if(F&&j.has(O))return;let e,a;return P.then((t=>{let{renderImageToString:n,swapPlaceholderImage:s}=t;Z.current&&(Z.current.innerHTML=n(i({isLoading:!0,isLoaded:j.has(O),image:r},g)),j.has(O)||(e=requestAnimationFrame((()=>{Z.current&&(a=s(Z.current,O,j,o,p,m,h))}))))})),()=>{e&&cancelAnimationFrame(e),a&&a()}}),[r]),(0,a.useLayoutEffect)((()=>{j.has(O)&&F&&(Z.current.innerHTML=F(i({isLoading:j.has(O),isLoaded:j.has(O),image:r},g)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}))}),[r]),(0,a.createElement)(e,i({},S,{style:i({},x,o,{backgroundColor:u}),className:C+(d?" "+d:""),ref:Z,dangerouslySetInnerHTML:{__html:k},suppressHydrationWarning:!0}))},M=(0,a.memo)((function(t){return t.image?(0,a.createElement)(T,t):null}));M.propTypes=N,M.displayName="GatsbyImage";const L=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function z(t){return function(e){let{src:n,__imageData:r,__error:o}=e,l=s(e,L);return o&&console.warn(o),r?a.createElement(t,i({image:r},l)):(console.warn("Image not loaded",n),null)}}const I=z((function(t){let{as:e="div",className:n,class:r,style:o,image:l,loading:f="lazy",imgClassName:p,imgStyle:h,backgroundColor:g,objectFit:y,objectPosition:b}=t,v=s(t,S);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(n=r),h=i({objectFit:y,objectPosition:b,backgroundColor:g},h);const{width:w,height:k,layout:N,images:E,placeholder:_,backgroundColor:j}=l,P=c(w,k,N),{style:F,className:T}=P,M=s(P,Z),L={fallback:void 0,sources:[]};return E.fallback&&(L.fallback=i({},E.fallback,{srcSet:E.fallback.srcSet?O(E.fallback.srcSet):void 0})),E.sources&&(L.sources=E.sources.map((t=>i({},t,{srcSet:O(t.srcSet)})))),a.createElement(e,i({},M,{style:i({},F,o,{backgroundColor:g}),className:T+(n?" "+n:"")}),a.createElement(m,{layout:N,width:w,height:k},a.createElement(x,i({},d(_,!1,N,w,k,j,y,b))),a.createElement(C,i({"data-gatsby-image-ssr":"",className:p},v,u("eager"===f,!1,L,f,h)))))})),H=function(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return"fullWidth"!==t.layout||"width"!==e&&"height"!==e||!t[e]?o().number.apply(o(),[t,e].concat(a)):new Error('"'+e+'" '+t[e]+" may not be passed when layout is fullWidth.")},A=new Set(["fixed","fullWidth","constrained"]),R={src:o().string.isRequired,alt:k,width:H,height:H,sizes:o().string,layout:t=>{if(void 0!==t.layout&&!A.has(t.layout))return new Error("Invalid value "+t.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};I.displayName="StaticImage",I.propTypes=R;const B=z(M);B.displayName="StaticImage",B.propTypes=R},2348:function(t,e,n){"use strict";n.r(e),n.d(e,{Head:function(){return yt},default:function(){return bt}});var a=n(7294),r=n(6261),o=n(917);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},i.apply(this,arguments)}const s=new Map,l=new WeakMap;let c,u=0;function d(t){return Object.keys(t).sort().filter((e=>void 0!==t[e])).map((e=>{return`${e}_${"root"===e?(n=t.root,n?(l.has(n)||(u+=1,l.set(n,u.toString())),l.get(n)):"0"):t[e]}`;var n})).toString()}function f(t,e,n={},a=c){if(void 0===window.IntersectionObserver&&void 0!==a){const r=t.getBoundingClientRect();return e(a,{isIntersecting:a,target:t,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}const{id:r,observer:o,elements:i}=function(t){let e=d(t),n=s.get(e);if(!n){const a=new Map;let r;const o=new IntersectionObserver((e=>{e.forEach((e=>{var n;const o=e.isIntersecting&&r.some((t=>e.intersectionRatio>=t));t.trackVisibility&&void 0===e.isVisible&&(e.isVisible=o),null==(n=a.get(e.target))||n.forEach((t=>{t(o,e)}))}))}),t);r=o.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:o,elements:a},s.set(e,n)}return n}(n);let l=i.get(t)||[];return i.has(t)||i.set(t,l),l.push(e),o.observe(t),function(){l.splice(l.indexOf(e),1),0===l.length&&(i.delete(t),o.unobserve(t)),0===i.size&&(o.disconnect(),s.delete(r))}}const p=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function m(t){return"function"!=typeof t.children}class h extends a.Component{constructor(t){super(t),this.node=null,this._unobserveCb=null,this.handleNode=t=>{this.node&&(this.unobserve(),t||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()},this.handleChange=(t,e)=>{t&&this.props.triggerOnce&&this.unobserve(),m(this.props)||this.setState({inView:t,entry:e}),this.props.onChange&&this.props.onChange(t,e)},this.state={inView:!!t.initialInView,entry:void 0}}componentDidUpdate(t){t.rootMargin===this.props.rootMargin&&t.root===this.props.root&&t.threshold===this.props.threshold&&t.skip===this.props.skip&&t.trackVisibility===this.props.trackVisibility&&t.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:e,rootMargin:n,trackVisibility:a,delay:r,fallbackInView:o}=this.props;this._unobserveCb=f(this.node,this.handleChange,{threshold:t,root:e,rootMargin:n,trackVisibility:a,delay:r},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){if(!m(this.props)){const{inView:t,entry:e}=this.state;return this.props.children({inView:t,entry:e,ref:this.handleNode})}const t=this.props,{children:e,as:n}=t,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,p);return a.createElement(n||"div",i({ref:this.handleNode},r),e)}}function g({threshold:t,delay:e,trackVisibility:n,rootMargin:r,root:o,triggerOnce:i,skip:s,initialInView:l,fallbackInView:c,onChange:u}={}){var d;const[p,m]=a.useState(null),h=a.useRef(),[g,y]=a.useState({inView:!!l,entry:void 0});h.current=u,a.useEffect((()=>{if(s||!p)return;let a;return a=f(p,((t,e)=>{y({inView:t,entry:e}),h.current&&h.current(t,e),e.isIntersecting&&i&&a&&(a(),a=void 0)}),{root:o,rootMargin:r,threshold:t,trackVisibility:n,delay:e},c),()=>{a&&a()}}),[Array.isArray(t)?t.toString():t,p,o,r,i,s,n,c,e]);const b=null==(d=g.entry)?void 0:d.target,v=a.useRef();p||!b||i||s||v.current===b||(v.current=b,y({inView:!!l,entry:void 0}));const w=[m,g.inView,g.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}var y=n(4954),b=(n(6751),n(2443)),v=(n(434),n(8679),n(8947),n(7278),n(5893)),w=v.Fragment;function x(t,e,n){return b.h.call(e,"css")?(0,v.jsx)(b.E,(0,b.c)(t,e),n):(0,v.jsx)(t,e,n)}o.F4`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,o.F4`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,o.F4`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,o.F4`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,o.F4`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,o.F4`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,o.F4`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,o.F4`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,o.F4`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,o.F4`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,o.F4`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,o.F4`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,o.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;var C=o.F4`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,S=o.F4`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Z=o.F4`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,O=o.F4`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,k=o.F4`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,N=o.F4`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,E=o.F4`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,_=o.F4`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,j=o.F4`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,P=o.F4`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,F=o.F4`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,T=o.F4`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,M=o.F4`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function L(t,e){return n=>n?t():e()}function z(t){return L(t,(()=>null))}var I=t=>{const{cascade:e=!1,damping:n=.5,delay:r=0,duration:i=1e3,fraction:s=0,keyframes:l=N,triggerOnce:c=!1,className:u,style:d,childClassName:f,childStyle:p,children:m,onVisibilityChange:g}=t,b=(0,a.useMemo)((()=>function({duration:t=1e3,delay:e=0,timingFunction:n="ease",keyframes:a=N,iterationCount:r=1}){return o.iv`
    animation-duration: ${t}ms;
    animation-timing-function: ${n};
    animation-delay: ${e}ms;
    animation-name: ${a};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${r};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}({keyframes:l,duration:i})),[i,l]);return null==m?null:"string"==typeof(v=m)||"number"==typeof v||"boolean"==typeof v?x(A,{...t,animationStyles:b,children:String(m)}):(0,y.isFragment)(m)?x(R,{...t,animationStyles:b}):x(w,{children:a.Children.map(m,((l,m)=>{if(!(0,a.isValidElement)(l))return null;const y=r+(e?m*i*n:0);switch(l.type){case"ol":case"ul":return x(o.ms,{children:({cx:e})=>x(l.type,{...l.props,className:e(u,l.props.className),style:Object.assign({},d,l.props.style),children:x(I,{...t,children:l.props.children})})});case"li":return x(h,{threshold:s,triggerOnce:c,onChange:g,children:({inView:t,ref:e})=>x(o.ms,{children:({cx:n})=>x(l.type,{...l.props,ref:e,className:n(f,l.props.className),css:z((()=>b))(t),style:Object.assign({},p,l.props.style,{animationDelay:y+"ms"})})})});default:return x(h,{threshold:s,triggerOnce:c,onChange:g,children:({inView:t,ref:e})=>x("div",{ref:e,className:u,css:z((()=>b))(t),style:Object.assign({},d,{animationDelay:y+"ms"}),children:x(o.ms,{children:({cx:t})=>x(l.type,{...l.props,className:t(f,l.props.className),style:Object.assign({},p,l.props.style)})})})})}}))});var v},H={display:"inline-block",whiteSpace:"pre"},A=t=>{const{animationStyles:e,cascade:n=!1,damping:a=.5,delay:r=0,duration:o=1e3,fraction:i=0,triggerOnce:s=!1,className:l,style:c,children:u,onVisibilityChange:d}=t,{ref:f,inView:p}=g({triggerOnce:s,threshold:i,onChange:d});return L((()=>x("div",{ref:f,className:l,style:Object.assign({},c,H),children:u.split("").map(((t,n)=>x("span",{css:z((()=>e))(p),style:{animationDelay:r+n*o*a+"ms"},children:t},n)))})),(()=>x(R,{...t,children:u})))(n)},R=t=>{const{animationStyles:e,fraction:n=0,triggerOnce:a=!1,className:r,style:o,children:i,onVisibilityChange:s}=t,{ref:l,inView:c}=g({triggerOnce:a,threshold:n,onChange:s});return x("div",{ref:l,className:r,css:z((()=>e))(c),style:o,children:i})};o.F4`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,o.F4`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,o.F4`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,o.F4`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,o.F4`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,o.F4`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,o.F4`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,o.F4`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,o.F4`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,o.F4`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;var B=o.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,V=o.F4`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Y=o.F4`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,X=o.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,D=o.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,W=o.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,U=o.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,q=o.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,$=o.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Q=o.F4`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,G=o.F4`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,J=o.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,K=o.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;var tt=t=>{const{big:e=!1,direction:n,reverse:r=!1,...o}=t,i=(0,a.useMemo)((()=>function(t,e,n){switch(n){case"bottom-left":return e?V:S;case"bottom-right":return e?Y:Z;case"down":return t?e?D:k:e?X:O;case"left":return t?e?U:E:e?W:N;case"right":return t?e?$:j:e?q:_;case"top-left":return e?Q:P;case"top-right":return e?G:F;case"up":return t?e?K:M:e?J:T;default:return e?B:C}}(e,r,n)),[e,n,r]);return x(I,{keyframes:i,...o})};o.F4`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,o.F4`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,o.F4`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,o.F4`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,o.F4`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;o.F4`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,o.F4`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,o.F4`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,o.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;o.F4`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,o.F4`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,o.F4`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,o.F4`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,o.F4`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,o.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,o.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,o.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,o.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,o.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;o.F4`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,o.F4`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,o.F4`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,o.F4`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,o.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,o.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,o.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,o.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;o.F4`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,o.F4`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,o.F4`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,o.F4`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,o.F4`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,o.F4`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,o.F4`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,o.F4`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,o.F4`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,o.F4`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;var et=()=>(0,o.tZ)("section",{id:"hero",className:"bg-gray-900 h-screen"},(0,o.tZ)("div",{className:"absolute inset-0 flex items-center text-center justify-center flex-col mx-10"},(0,o.tZ)(tt,{duration:1e3,delay:300},(0,o.tZ)("h1",{className:"text-white mb-8 font-extrabold text-4xl md:text-6xl lg:text-7xl"},"This is a portfolio about",(0,o.tZ)("br",null),(0,o.tZ)("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"},"Mizuki Sango"),(0,o.tZ)("br",null))),(0,o.tZ)(tt,{duration:1e3,delay:1e3},(0,o.tZ)(r.rU,{to:"about",smooth:!0,duration:100},(0,o.tZ)("button",{className:"text-blue-400 text-xl md:text-3xl lg:text-4xl hover:text-primary-600 focus:text-primary-600 focus:outline-none"},"About me...")))));var nt=t=>{let{title:e}=t;return(0,o.tZ)(tt,{duration:1e3,delay:300},(0,o.tZ)("h2",{className:"mb-10 text-center font-bold text-3xl md:text-5xl lg:text-6xl"},e))},at=n(8032),rt=n(1883);var ot=()=>{(0,rt.K2)("1763411657");return(0,o.tZ)("section",{id:"about",className:"bg-slate-300"},(0,o.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},(0,o.tZ)("path",{fill:"#111827","fill-opacity":"1",d:"M0,288L30,266.7C60,245,120,203,180,197.3C240,192,300,224,360,224C420,224,480,192,540,197.3C600,203,660,245,720,256C780,267,840,245,900,208C960,171,1020,117,1080,133.3C1140,149,1200,235,1260,245.3C1320,256,1380,192,1410,160L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"})),(0,o.tZ)(nt,{title:"ABOUT ME"}),(0,o.tZ)(tt,{duration:1e3,delay:600,className:"mx-8"},(0,o.tZ)("div",{className:"text-black flex flex-col md:flex-row md:justify-evenly md:items-center"},(0,o.tZ)("div",{className:"md:w-1/3"},(0,o.tZ)(at.S,{src:"../../images/profile.jpg",alt:"profile picture",className:"rounded-lg",width:400,__imageData:n(5813)}),(0,o.tZ)("div",{className:"text-sm md:text-base lg:text-xl"},"※台湾 九份で撮影したもの")),(0,o.tZ)("div",{className:"my-6 md:w-1/3 text-sm md:text-base lg:text-xl"},(0,o.tZ)("div",{className:"flex flex-column"},(0,o.tZ)("div",{className:"flex my-2"},(0,o.tZ)("span",{className:"w-1/4 font-semibold"},"氏名"),(0,o.tZ)("span",{className:"w-3/4"},"珊瑚 彩主紀 (さんご みずき)")),(0,o.tZ)("div",{className:"flex my-2"},(0,o.tZ)("span",{className:"w-1/4 font-semibold"},"生年月日"),(0,o.tZ)("span",{className:"w-3/4"},"1994年 6月 22日")),(0,o.tZ)("div",{className:"flex my-2"},(0,o.tZ)("span",{className:"w-1/4 font-semibold"},"mail"),(0,o.tZ)("span",{className:"w-3/4"},(0,o.tZ)("a",{className:"text-black no-underline hover:underline",href:"mailto:msageha+info -at- gmail.com"},"msageha+info -at- gmail.com"))),(0,o.tZ)("div",{className:"flex my-2"},(0,o.tZ)("span",{className:"w-1/4 font-semibold"},"趣味、嗜好"),(0,o.tZ)("span",{className:"w-3/4"},"旅行、特に海外旅行が好き。",(0,o.tZ)("br",null),"フランス ブルゴーニュ地方のワインが好き。")),(0,o.tZ)("div",{className:"flex my-2"},(0,o.tZ)("span",{className:"w-1/4 font-semibold"},"技術スタック",(0,o.tZ)("br",null),"(業務経験)"),(0,o.tZ)("span",{className:"w-3/4"},"言語: Python, Golang, Typescript",(0,o.tZ)("br",null),"データベース: MySQL, PostgreSQL, BigQuery, Redis, Elasticsearch",(0,o.tZ)("br",null),"クラウド: AWS, GCP",(0,o.tZ)("br",null),"コンテナ: Docker, Kubernetes",(0,o.tZ)("br",null),"分散処理: Apache Beam, Apache Spark",(0,o.tZ)("br",null),"その他: Apache Airflow, Terraform, Git, CircleCI")))))))};var it=t=>{let{title:e}=t;return(0,o.tZ)("h3",{className:"my-4 font-semibold text-center text-xl md:text-3xl lg:text-4xl"},e)};var st=()=>(0,o.tZ)("section",{id:"career",className:"bg-gray-900 text-white text-sm md:text-base lg:text-xl text-center"},(0,o.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",preserveAspectRatio:"none"},(0,o.tZ)("path",{fill:"#CBD5E1","fill-opacity":"1",d:"M0,192L30,202.7C60,213,120,235,180,245.3C240,256,300,256,360,256C420,256,480,256,540,224C600,192,660,128,720,128C780,128,840,192,900,208C960,224,1020,192,1080,202.7C1140,213,1200,267,1260,266.7C1320,267,1380,213,1410,186.7L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"})),(0,o.tZ)(nt,{title:"Career"}),(0,o.tZ)(tt,{duration:1e3,delay:600,className:"md:flex md:justify-center"},(0,o.tZ)(it,{title:"経歴"}),(0,o.tZ)("div",{className:"md:w-1/2 2xl:w-1/3"},(0,o.tZ)("div",{className:"flex my-2"},(0,o.tZ)("div",{className:"w-2/5 font-semibold"},"2021 / 5 - 現在"),(0,o.tZ)("div",{className:"w-3/5"},"JarvisML.inc")),(0,o.tZ)("div",{className:"flex my-2"},(0,o.tZ)("span",{className:"w-2/5 font-semibold"},"2020 / 6 - 2021 / 4"),(0,o.tZ)("span",{className:"w-3/5"},"株式会社スパイスコード")),(0,o.tZ)("div",{className:"flex my-2"},(0,o.tZ)("span",{className:"w-2/5 font-semibold"},"2019 / 4 - 2020 / 5"),(0,o.tZ)("span",{className:"w-3/5"},"株式会社メルカリ")),(0,o.tZ)("div",{className:"flex my-2"},(0,o.tZ)("span",{className:"w-2/5 font-semibold"},"2019 / 4 - 2023 / 3"),(0,o.tZ)("span",{className:"w-3/5"},"東京工業大学 博士課程(中退)")),(0,o.tZ)("div",{className:"flex my-2"},(0,o.tZ)("span",{className:"w-2/5 font-semibold"},"2017 / 4 - 2019 / 3"),(0,o.tZ)("span",{className:"w-3/5"},"東京工業大学 修士課程(修了)")),(0,o.tZ)("div",{className:"flex my-2"},(0,o.tZ)("span",{className:"w-2/5 font-semibold"},"2013 / 4 - 2017 / 3"),(0,o.tZ)("span",{className:"w-3/5"},"東北大学 工学部(卒業)")))),(0,o.tZ)("br",null),(0,o.tZ)("br",null),(0,o.tZ)(tt,{duration:1e3,delay:600,className:"md:flex md:justify-center"},(0,o.tZ)(it,{title:"インターン / 業務委託 / その他"}),(0,o.tZ)("div",{className:"md:w-1/2 2xl:w-1/3"},(0,o.tZ)("div",{className:"flex my-2"},(0,o.tZ)("span",{className:"w-2/5 font-semibold"},"2021 / 5 - 現在"),(0,o.tZ)("span",{className:"w-3/5"},"株式会社アイモバイル 業務委託")),(0,o.tZ)("div",{className:"flex my-2"},(0,o.tZ)("span",{className:"w-2/5 font-semibold"},"2017 / 9"),(0,o.tZ)("span",{className:"w-3/5"},"株式会社リクルートホールディングス インターン")),(0,o.tZ)("div",{className:"flex my-2"},(0,o.tZ)("span",{className:"w-2/5 font-semibold"},"2017 / 8 - 2018 / 3"),(0,o.tZ)("span",{className:"w-3/5"},"LINE株式会社 インターン・アルバイト")),(0,o.tZ)("div",{className:"flex my-2"},(0,o.tZ)("span",{className:"w-2/5 font-semibold"},"2017 / 5 - 2018 / 3"),(0,o.tZ)("span",{className:"w-3/5"},"SecHack365 1期生")),(0,o.tZ)("div",{className:"flex my-2"},(0,o.tZ)("span",{className:"w-2/5 font-semibold"},"2015 / 8 - 2016 / 3"),(0,o.tZ)("span",{className:"w-3/5"},"トロワ工科大学 (Université de technologie de Troyes) 留学")),(0,o.tZ)("div",{className:"flex my-2"},(0,o.tZ)("span",{className:"w-2/5 font-semibold"},"2015 / 7"),(0,o.tZ)("span",{className:"w-3/5"},"シンガポール国立大学 (National University of Singapore) 留学")),(0,o.tZ)("div",{className:"flex"},(0,o.tZ)("span",{className:"w-2/5 font-semibold"},"2014 / 4 - 2019 / 3"),(0,o.tZ)("span",{className:"w-3/5"},"Life is Tech! メンター")))));const lt=()=>{const t=t=>{let{title:e,author:n,paper:a}=t;return(0,o.tZ)("div",{className:"mx-8 mb-12"},(0,o.tZ)("h4",null,e),(0,o.tZ)("div",null,n),(0,o.tZ)("div",null,a))};return(0,o.tZ)(tt,{duration:1e3,delay:600,className:"flex justify-center"},(0,o.tZ)(it,{title:"Published paper"}),(0,o.tZ)("div",{className:"md:w-1/2 2xl:w-1/3"},(0,o.tZ)(t,{title:"Auto Content Moderation in C2C e-Commerce",author:(0,o.tZ)(a.Fragment,null,"Shunya Ueta, Suganprabu Nagarajan,",(0,o.tZ)("span",{className:"underline"},"Mizuki Sango")),paper:"2020 USENIX Conference on Operational Machine Learning (OpML’20)"}),(0,o.tZ)(t,{title:"外界一人称と二人称を考慮する日本語述語項構造解析の分野適応",author:(0,o.tZ)(a.Fragment,null,(0,o.tZ)("span",{className:"underline"},"珊瑚 彩主紀"),", 西川 仁, 徳永 健伸"),paper:"第5回自然言語処理シンポジウム（第238回自然言語処理研究発表会）"}),(0,o.tZ)(t,{title:"Effectiveness of Domain Adaptation in Japanese Predicate-ArgumentStructure Analysis",author:(0,o.tZ)(a.Fragment,null,(0,o.tZ)("span",{className:"underline"},"Mizuki Sango"),", Hitoshi Nishikawa, Takenobu Tokunaga"),paper:"The 32nd Pacific Asia Conference on Language(PACLIC 32)"}),(0,o.tZ)(t,{title:"スマートスピーカーにおける文章読み上げの課題とその解決 ",author:(0,o.tZ)(a.Fragment,null,(0,o.tZ)("span",{className:"underline"},"珊瑚 彩主紀"),", 佐藤 敏紀, 植田 禎子, 橋本 泰一"),paper:"言語処理学会第24回年次大会(NLP2018)"}),(0,o.tZ)(t,{title:"Monitoring Geographical Entities with Temporal Awareness in Tweets",author:(0,o.tZ)(a.Fragment,null,"Koji Matsuda, ",(0,o.tZ)("span",{className:"underline"},"Mizuki Sango"),", Naoaki Okazaki, Kentaro Inui"),paper:"International Conference on Computational Linguistics and Intelligent Text Processing (CICLing 2017)"}),(0,o.tZ)(t,{title:"ツイート中の地理情報に対する時間的極性の自動推定",author:(0,o.tZ)(a.Fragment,null,(0,o.tZ)("span",{className:"underline"},"珊瑚 彩主紀"),", 松田耕史, 岡崎直観, 乾健太郎"),paper:"2016年度 人工知能学会全国大会（第30回）"}),(0,o.tZ)(t,{title:"ジャーナル",author:(0,o.tZ)(a.Fragment,null,(0,o.tZ)("span",{className:"underline"},"珊瑚 彩主紀"),", 西川 仁, 徳永 健伸"),paper:" 会誌「自然言語処理」"})))};var ct=()=>(0,o.tZ)("section",{id:"publish",className:"bg-slate-300 text-black mx-auto"},(0,o.tZ)("svg",{className:"bg-slate-300",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},(0,o.tZ)("path",{fill:"#111827","fill-opacity":"1",d:"M0,160L30,181.3C60,203,120,245,180,261.3C240,277,300,267,360,218.7C420,171,480,85,540,48C600,11,660,21,720,74.7C780,128,840,224,900,261.3C960,299,1020,277,1080,240C1140,203,1200,149,1260,133.3C1320,117,1380,139,1410,149.3L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"})),(0,o.tZ)(nt,{title:"RESEARCH"}),(0,o.tZ)(lt,null));const ut=()=>(0,o.tZ)("a",{href:"https://github.com/mzk622",target:"_blank"},(0,o.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",fill:"white",viewBox:"0 0 16 16"},(0,o.tZ)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))),dt=()=>(0,o.tZ)("a",{href:"https://twitter.com/mzking622",target:"_blank"},(0,o.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",fill:"white",viewBox:"0 0 16 16"},(0,o.tZ)("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"}))),ft=()=>(0,o.tZ)("a",{href:"https://instagram.com/msageha",target:"_blank"},(0,o.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",fill:"white",viewBox:"0 0 16 16"},(0,o.tZ)("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}))),pt=()=>(0,o.tZ)("a",{href:"https://www.linkedin.com/in/mizuki-sango",target:"_blank"},(0,o.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",fill:"white",viewBox:"0 0 16 16"},(0,o.tZ)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})));var mt=()=>(0,o.tZ)("section",{id:"sns",className:"bg-gray-900 text-white"},(0,o.tZ)("svg",{className:"bg-gray-900",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},(0,o.tZ)("path",{fill:"#CBD5E1","fill-opacity":"1",d:"M0,96L30,122.7C60,149,120,203,180,229.3C240,256,300,256,360,229.3C420,203,480,149,540,112C600,75,660,53,720,64C780,75,840,117,900,165.3C960,213,1020,267,1080,256C1140,245,1200,171,1260,170.7C1320,171,1380,245,1410,282.7L1440,320L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"})),(0,o.tZ)(nt,{title:"SNS"}),(0,o.tZ)(tt,{duration:1e3,delay:600,className:" md:flex md:justify-center"},(0,o.tZ)("div",{className:"flex items-center justify-evenly md:w-1/2"},(0,o.tZ)(ut,null),(0,o.tZ)(dt,null),(0,o.tZ)(ft,null),(0,o.tZ)(pt,null))));var ht=()=>(0,o.tZ)("footer",{className:"bg-gray-900 text-white md:flex md:justify-center pt-12 pb-8"},(0,o.tZ)("div",{className:"md:w-1/2 mx-4"},"Copyright © ",(new Date).getFullYear()," - Developed by"," ",(0,o.tZ)("a",{href:"https://github.com/mzk622",target:"_blank"},"Mizuki Sango")));var gt=function(){return(0,o.tZ)(a.Fragment,null,(0,o.tZ)(et,null),(0,o.tZ)(ot,null),(0,o.tZ)(st,null),(0,o.tZ)(ct,null),(0,o.tZ)(mt,null),(0,o.tZ)(ht,null))};function yt(){return(0,o.tZ)(a.Fragment,null,(0,o.tZ)("meta",{charSet:"utf-8"}),(0,o.tZ)("title",{key:"title"},"Portfolio"),(0,o.tZ)("html",{lang:"ja"}),(0,o.tZ)("meta",{name:"description",content:"mzk Portfolio"}))}var bt=()=>(0,o.tZ)(a.Fragment,null,(0,o.tZ)(gt,null))},3096:function(t,e,n){var a="Expected a function",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,u="object"==typeof self&&self&&self.Object===Object&&self,d=c||u||Function("return this")(),f=Object.prototype.toString,p=Math.max,m=Math.min,h=function(){return d.Date.now()};function g(t,e,n){var r,o,i,s,l,c,u=0,d=!1,f=!1,g=!0;if("function"!=typeof t)throw new TypeError(a);function v(e){var n=r,a=o;return r=o=void 0,u=e,s=t.apply(a,n)}function w(t){return u=t,l=setTimeout(C,e),d?v(t):s}function x(t){var n=t-c;return void 0===c||n>=e||n<0||f&&t-u>=i}function C(){var t=h();if(x(t))return S(t);l=setTimeout(C,function(t){var n=e-(t-c);return f?m(n,i-(t-u)):n}(t))}function S(t){return l=void 0,g&&r?v(t):(r=o=void 0,s)}function Z(){var t=h(),n=x(t);if(r=arguments,o=this,c=t,n){if(void 0===l)return w(c);if(f)return l=setTimeout(C,e),v(c)}return void 0===l&&(l=setTimeout(C,e)),s}return e=b(e)||0,y(n)&&(d=!!n.leading,i=(f="maxWait"in n)?p(b(n.maxWait)||0,e):i,g="trailing"in n?!!n.trailing:g),Z.cancel=function(){void 0!==l&&clearTimeout(l),u=0,r=c=o=l=void 0},Z.flush=function(){return void 0===l?s:S(h())},Z}function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==f.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=i.test(t);return n||s.test(t)?l(t.slice(2),n?2:8):o.test(t)?NaN:+t}t.exports=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError(a);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(t,e,{leading:r,maxWait:e,trailing:o})}},4415:function(t,e){"use strict";var n,a=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function y(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case a:switch(t=t.type){case o:case s:case i:case f:case p:return t;default:switch(t=t&&t.$$typeof){case u:case c:case d:case h:case m:case l:return t;default:return e}}case r:return e}}}n=Symbol.for("react.module.reference"),e.isFragment=function(t){return y(t)===o}},4954:function(t,e,n){"use strict";t.exports=n(4415)},8477:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),r=i(n(7294)),o=i(n(1093));function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var c=function(t){function e(){return s(this,e),l(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),a(e,[{key:"render",value:function(){return r.default.createElement("input",this.props,this.props.children)}}]),e}(r.default.Component);e.default=(0,o.default)(c)},5343:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),o=l(n(7294)),i=l(n(8e3)),s=l(n(5697));function l(t){return t&&t.__esModule?t:{default:t}}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var d=function(t){function e(){return c(this,e),u(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"render",value:function(){var t=this,e=a({},this.props);return e.parentBindings&&delete e.parentBindings,o.default.createElement("div",a({},e,{ref:function(e){t.props.parentBindings.domNode=e}}),this.props.children)}}]),e}(o.default.Component);d.propTypes={name:s.default.string,id:s.default.string},e.default=(0,i.default)(d)},8939:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(n(7294)),r=o(n(1093));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var l=function(t){function e(){var t,n,r;i(this,e);for(var o=arguments.length,l=Array(o),c=0;c<o;c++)l[c]=arguments[c];return n=r=s(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(l))),r.render=function(){return a.default.createElement("a",r.props,r.props.children)},s(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(a.default.Component);e.default=(0,r.default)(l)},6261:function(t,e,n){"use strict";e.rU=void 0;var a=p(n(8939)),r=p(n(8477)),o=p(n(5343)),i=p(n(2628)),s=p(n(4592)),l=p(n(7606)),c=p(n(3200)),u=p(n(1093)),d=p(n(8e3)),f=p(n(8482));function p(t){return t&&t.__esModule?t:{default:t}}e.rU=a.default,r.default,o.default,i.default,s.default,l.default,c.default,u.default,d.default,f.default,a.default,r.default,o.default,i.default,s.default,l.default,c.default,u.default,d.default,f.default},8482:function(t,e,n){"use strict";var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var l=n(7294),c=(n(3935),n(4259),n(7606)),u=n(2628),d=n(5697),f=n(9678),p={to:d.string.isRequired,containerId:d.string,container:d.object,activeClass:d.string,spy:d.bool,smooth:d.oneOfType([d.bool,d.string]),offset:d.number,delay:d.number,isDynamic:d.bool,onClick:d.func,duration:d.oneOfType([d.number,d.func]),absolute:d.bool,onSetActive:d.func,onSetInactive:d.func,ignoreCancelEvents:d.bool,hashSpy:d.bool,spyThrottle:d.number},m={Scroll:function(t,e){console.warn("Helpers.Scroll is deprecated since v1.7.0");var n=e||u,d=function(e){function u(t){o(this,u);var e=i(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,t));return m.call(e),e.state={active:!1},e}return s(u,e),r(u,[{key:"getScrollSpyContainer",value:function(){var t=this.props.containerId,e=this.props.container;return t?document.getElementById(t):e&&e.nodeType?e:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var t=this.getScrollSpyContainer();c.isMounted(t)||c.mount(t,this.props.spyThrottle),this.props.hashSpy&&(f.isMounted()||f.mount(n),f.mapContainer(this.props.to,t)),this.props.spy&&c.addStateHandler(this.stateHandler),c.addSpyHandler(this.spyHandler,t),this.setState({container:t})}}},{key:"componentWillUnmount",value:function(){c.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var e="";e=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=a({},this.props);for(var r in p)n.hasOwnProperty(r)&&delete n[r];return n.className=e,n.onClick=this.handleClick,l.createElement(t,n)}}]),u}(l.Component),m=function(){var t=this;this.scrollTo=function(e,r){n.scrollTo(e,a({},t.state,r))},this.handleClick=function(e){t.props.onClick&&t.props.onClick(e),e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),t.scrollTo(t.props.to,t.props)},this.stateHandler=function(){n.getActiveLink()!==t.props.to&&(null!==t.state&&t.state.active&&t.props.onSetInactive&&t.props.onSetInactive(),t.setState({active:!1}))},this.spyHandler=function(e){var a=t.getScrollSpyContainer();if(!f.isMounted()||f.isInitialized()){var r=t.props.to,o=null,i=0,s=0,l=0;if(a.getBoundingClientRect)l=a.getBoundingClientRect().top;if(!o||t.props.isDynamic){if(!(o=n.get(r)))return;var u=o.getBoundingClientRect();s=(i=u.top-l+e)+u.height}var d=e-t.props.offset,p=d>=Math.floor(i)&&d<Math.floor(s),m=d<Math.floor(i)||d>=Math.floor(s),h=n.getActiveLink();return m?(r===h&&n.setActiveLink(void 0),t.props.hashSpy&&f.getHash()===r&&f.changeHash(),t.props.spy&&t.state.active&&(t.setState({active:!1}),t.props.onSetInactive&&t.props.onSetInactive()),c.updateStates()):p&&h!==r?(n.setActiveLink(r),t.props.hashSpy&&f.changeHash(r),t.props.spy&&(t.setState({active:!0}),t.props.onSetActive&&t.props.onSetActive(r)),c.updateStates()):void 0}}};return d.propTypes=p,d.defaultProps={offset:0},d},Element:function(t){console.warn("Helpers.Element is deprecated since v1.7.0");var e=function(e){function n(t){o(this,n);var e=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e.childBindings={domNode:null},e}return s(n,e),r(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(t){this.props.name!==t.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;u.unregister(this.props.name)}},{key:"registerElems",value:function(t){u.register(t,this.childBindings.domNode)}},{key:"render",value:function(){return l.createElement(t,a({},this.props,{parentBindings:this.childBindings}))}}]),n}(l.Component);return e.propTypes={name:d.string,id:d.string},e}};t.exports=m},3200:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r=(s(n(4259)),s(n(9765))),o=s(n(140)),i=s(n(4592));function s(t){return t&&t.__esModule?t:{default:t}}var l=function(t){return r.default[t.smooth]||r.default.defaultEasing},c=function(){if("undefined"!=typeof window)return window.requestAnimationFrame||window.webkitRequestAnimationFrame}()||function(t,e,n){window.setTimeout(t,n||1e3/60,(new Date).getTime())},u=function(t){var e=t.data.containerElement;if(e&&e!==document&&e!==document.body)return e.scrollLeft;var n=void 0!==window.pageXOffset,a="CSS1Compat"===(document.compatMode||"");return n?window.pageXOffset:a?document.documentElement.scrollLeft:document.body.scrollLeft},d=function(t){var e=t.data.containerElement;if(e&&e!==document&&e!==document.body)return e.scrollTop;var n=void 0!==window.pageXOffset,a="CSS1Compat"===(document.compatMode||"");return n?window.pageYOffset:a?document.documentElement.scrollTop:document.body.scrollTop},f=function t(e,n,a){var r=n.data;if(n.ignoreCancelEvents||!r.cancel)if(r.delta=Math.round(r.targetPosition-r.startPosition),null===r.start&&(r.start=a),r.progress=a-r.start,r.percent=r.progress>=r.duration?1:e(r.progress/r.duration),r.currentPosition=r.startPosition+Math.ceil(r.delta*r.percent),r.containerElement&&r.containerElement!==document&&r.containerElement!==document.body?n.horizontal?r.containerElement.scrollLeft=r.currentPosition:r.containerElement.scrollTop=r.currentPosition:n.horizontal?window.scrollTo(r.currentPosition,0):window.scrollTo(0,r.currentPosition),r.percent<1){var o=t.bind(null,e,n);c.call(window,o)}else i.default.registered.end&&i.default.registered.end(r.to,r.target,r.currentPosition);else i.default.registered.end&&i.default.registered.end(r.to,r.target,r.currentPositionY)},p=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},m=function(t,e,n,a){if(e.data=e.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},window.clearTimeout(e.data.delayTimeout),o.default.subscribe((function(){e.data.cancel=!0})),p(e),e.data.start=null,e.data.cancel=!1,e.data.startPosition=e.horizontal?u(e):d(e),e.data.targetPosition=e.absolute?t:t+e.data.startPosition,e.data.startPosition!==e.data.targetPosition){var r;e.data.delta=Math.round(e.data.targetPosition-e.data.startPosition),e.data.duration=("function"==typeof(r=e.duration)?r:function(){return r})(e.data.delta),e.data.duration=isNaN(parseFloat(e.data.duration))?1e3:parseFloat(e.data.duration),e.data.to=n,e.data.target=a;var s=l(e),m=f.bind(null,s,e);e&&e.delay>0?e.data.delayTimeout=window.setTimeout((function(){i.default.registered.begin&&i.default.registered.begin(e.data.to,e.data.target),c.call(window,m)}),e.delay):(i.default.registered.begin&&i.default.registered.begin(e.data.to,e.data.target),c.call(window,m))}else i.default.registered.end&&i.default.registered.end(e.data.to,e.data.target,e.data.currentPosition)},h=function(t){return(t=a({},t)).data=t.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},t.absolute=!0,t};e.default={animateTopScroll:m,getAnimationType:l,scrollToTop:function(t){m(0,h(t))},scrollToBottom:function(t){t=h(t),p(t),m(t.horizontal?function(t){var e=t.data.containerElement;if(e&&e!==document&&e!==document.body)return e.scrollWidth-e.offsetWidth;var n=document.body,a=document.documentElement;return Math.max(n.scrollWidth,n.offsetWidth,a.clientWidth,a.scrollWidth,a.offsetWidth)}(t):function(t){var e=t.data.containerElement;if(e&&e!==document&&e!==document.body)return e.scrollHeight-e.offsetHeight;var n=document.body,a=document.documentElement;return Math.max(n.scrollHeight,n.offsetHeight,a.clientHeight,a.scrollHeight,a.offsetHeight)}(t),t)},scrollTo:function(t,e){m(t,h(e))},scrollMore:function(t,e){e=h(e),p(e);var n=e.horizontal?u(e):d(e);m(t+n,e)}}},140:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(5236),r=["mousedown","mousewheel","touchmove","keydown"];e.default={subscribe:function(t){return"undefined"!=typeof document&&r.forEach((function(e){return(0,a.addPassiveEventListener)(document,e,t)}))}}},5236:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.addPassiveEventListener=function(t,e,n){var a=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(n){}return t}();t.addEventListener(e,n,!!a&&{passive:!0})},e.removePassiveEventListener=function(t,e,n){t.removeEventListener(e,n)}},8e3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),o=l(n(7294)),i=(l(n(3935)),l(n(2628))),s=l(n(5697));function l(t){return t&&t.__esModule?t:{default:t}}e.default=function(t){var e=function(e){function n(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n);var e=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e.childBindings={domNode:null},e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,e),r(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(t){this.props.name!==t.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;i.default.unregister(this.props.name)}},{key:"registerElems",value:function(t){i.default.register(t,this.childBindings.domNode)}},{key:"render",value:function(){return o.default.createElement(t,a({},this.props,{parentBindings:this.childBindings}))}}]),n}(o.default.Component);return e.propTypes={name:s.default.string,id:s.default.string},e}},4592:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={registered:{},scrollEvent:{register:function(t,e){n.registered[t]=e},remove:function(t){n.registered[t]=null}}};e.default=n},9678:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n(5236);var a,r=n(4259),o=(a=r)&&a.__esModule?a:{default:a};var i={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,e){this.containers[t]=e},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,e=this.getHash();e?window.setTimeout((function(){t.scrollTo(e,!0),t.initialized=!0}),10):this.initialized=!0},scrollTo:function(t,e){var n=this.scroller;if(n.get(t)&&(e||t!==n.getActiveLink())){var a=this.containers[t]||document;n.scrollTo(t,{container:a})}},getHash:function(){return o.default.getHash()},changeHash:function(t,e){this.isInitialized()&&o.default.getHash()!==t&&o.default.updateHash(t,e)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};e.default=i},1093:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),o=u(n(7294)),i=u(n(7606)),s=u(n(2628)),l=u(n(5697)),c=u(n(9678));function u(t){return t&&t.__esModule?t:{default:t}}var d={to:l.default.string.isRequired,containerId:l.default.string,container:l.default.object,activeClass:l.default.string,activeStyle:l.default.object,spy:l.default.bool,horizontal:l.default.bool,smooth:l.default.oneOfType([l.default.bool,l.default.string]),offset:l.default.number,delay:l.default.number,isDynamic:l.default.bool,onClick:l.default.func,duration:l.default.oneOfType([l.default.number,l.default.func]),absolute:l.default.bool,onSetActive:l.default.func,onSetInactive:l.default.func,ignoreCancelEvents:l.default.bool,hashSpy:l.default.bool,saveHashHistory:l.default.bool,spyThrottle:l.default.number};e.default=function(t,e){var n=e||s.default,l=function(e){function s(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s);var e=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,t));return u.call(e),e.state={active:!1},e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(s,e),r(s,[{key:"getScrollSpyContainer",value:function(){var t=this.props.containerId,e=this.props.container;return t&&!e?document.getElementById(t):e&&e.nodeType?e:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var t=this.getScrollSpyContainer();i.default.isMounted(t)||i.default.mount(t,this.props.spyThrottle),this.props.hashSpy&&(c.default.isMounted()||c.default.mount(n),c.default.mapContainer(this.props.to,t)),i.default.addSpyHandler(this.spyHandler,t),this.setState({container:t})}}},{key:"componentWillUnmount",value:function(){i.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var e="";e=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n={};n=this.state&&this.state.active?a({},this.props.style,this.props.activeStyle):a({},this.props.style);var r=a({},this.props);for(var i in d)r.hasOwnProperty(i)&&delete r[i];return r.className=e,r.style=n,r.onClick=this.handleClick,o.default.createElement(t,r)}}]),s}(o.default.PureComponent),u=function(){var t=this;this.scrollTo=function(e,r){n.scrollTo(e,a({},t.state,r))},this.handleClick=function(e){t.props.onClick&&t.props.onClick(e),e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),t.scrollTo(t.props.to,t.props)},this.spyHandler=function(e,a){var r=t.getScrollSpyContainer();if(!c.default.isMounted()||c.default.isInitialized()){var o=t.props.horizontal,i=t.props.to,s=null,l=void 0,u=void 0;if(o){var d=0,f=0,p=0;if(r.getBoundingClientRect)p=r.getBoundingClientRect().left;if(!s||t.props.isDynamic){if(!(s=n.get(i)))return;var m=s.getBoundingClientRect();f=(d=m.left-p+e)+m.width}var h=e-t.props.offset;l=h>=Math.floor(d)&&h<Math.floor(f),u=h<Math.floor(d)||h>=Math.floor(f)}else{var g=0,y=0,b=0;if(r.getBoundingClientRect)b=r.getBoundingClientRect().top;if(!s||t.props.isDynamic){if(!(s=n.get(i)))return;var v=s.getBoundingClientRect();y=(g=v.top-b+a)+v.height}var w=a-t.props.offset;l=w>=Math.floor(g)&&w<Math.floor(y),u=w<Math.floor(g)||w>=Math.floor(y)}var x=n.getActiveLink();if(u){if(i===x&&n.setActiveLink(void 0),t.props.hashSpy&&c.default.getHash()===i){var C=t.props.saveHashHistory,S=void 0!==C&&C;c.default.changeHash("",S)}t.props.spy&&t.state.active&&(t.setState({active:!1}),t.props.onSetInactive&&t.props.onSetInactive(i,s))}if(l&&(x!==i||!1===t.state.active)){n.setActiveLink(i);var Z=t.props.saveHashHistory,O=void 0!==Z&&Z;t.props.hashSpy&&c.default.changeHash(i,O),t.props.spy&&(t.setState({active:!0}),t.props.onSetActive&&t.props.onSetActive(i,s))}}}};return l.propTypes=d,l.defaultProps={offset:0},l}},7606:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,r=n(3096),o=(a=r)&&a.__esModule?a:{default:a},i=n(5236);var s={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t,e){if(t){var n=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:66;return(0,o.default)(t,e)}((function(e){s.scrollHandler(t)}),e);s.scrollSpyContainers.push(t),(0,i.addPassiveEventListener)(t,"scroll",n)}},isMounted:function(t){return-1!==s.scrollSpyContainers.indexOf(t)},currentPositionX:function(t){if(t===document){var e=void 0!==window.pageYOffset,n="CSS1Compat"===(document.compatMode||"");return e?window.pageXOffset:n?document.documentElement.scrollLeft:document.body.scrollLeft}return t.scrollLeft},currentPositionY:function(t){if(t===document){var e=void 0!==window.pageXOffset,n="CSS1Compat"===(document.compatMode||"");return e?window.pageYOffset:n?document.documentElement.scrollTop:document.body.scrollTop}return t.scrollTop},scrollHandler:function(t){(s.scrollSpyContainers[s.scrollSpyContainers.indexOf(t)].spyCallbacks||[]).forEach((function(e){return e(s.currentPositionX(t),s.currentPositionY(t))}))},addStateHandler:function(t){s.spySetState.push(t)},addSpyHandler:function(t,e){var n=s.scrollSpyContainers[s.scrollSpyContainers.indexOf(e)];n.spyCallbacks||(n.spyCallbacks=[]),n.spyCallbacks.push(t),t(s.currentPositionX(e),s.currentPositionY(e))},updateStates:function(){s.spySetState.forEach((function(t){return t()}))},unmount:function(t,e){s.scrollSpyContainers.forEach((function(t){return t.spyCallbacks&&t.spyCallbacks.length&&t.spyCallbacks.indexOf(e)>-1&&t.spyCallbacks.splice(t.spyCallbacks.indexOf(e),1)})),s.spySetState&&s.spySetState.length&&s.spySetState.indexOf(t)>-1&&s.spySetState.splice(s.spySetState.indexOf(t),1),document.removeEventListener("scroll",s.scrollHandler)},update:function(){return s.scrollSpyContainers.forEach((function(t){return s.scrollHandler(t)}))}};e.default=s},2628:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r=s(n(4259)),o=s(n(3200)),i=s(n(4592));function s(t){return t&&t.__esModule?t:{default:t}}var l={},c=void 0;e.default={unmount:function(){l={}},register:function(t,e){l[t]=e},unregister:function(t){delete l[t]},get:function(t){return l[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return c=t},getActiveLink:function(){return c},scrollTo:function(t,e){var n=this.get(t);if(n){var s=(e=a({},e,{absolute:!1})).containerId,l=e.container,c=void 0;c=s?document.getElementById(s):l&&l.nodeType?l:document,e.absolute=!0;var u=e.horizontal,d=r.default.scrollOffset(c,n,u)+(e.offset||0);if(!e.smooth)return i.default.registered.begin&&i.default.registered.begin(t,n),c===document?e.horizontal?window.scrollTo(d,0):window.scrollTo(0,d):c.scrollTop=d,void(i.default.registered.end&&i.default.registered.end(t,n));o.default.animateTopScroll(d,e,t,n)}else console.warn("target Element not found")}}},9765:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={defaultEasing:function(t){return t<.5?Math.pow(2*t,2)/2:1-Math.pow(2*(1-t),2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}},4259:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e){for(var n=t.offsetTop,a=t.offsetParent;a&&!e(a);)n+=a.offsetTop,a=a.offsetParent;return{offsetTop:n,offsetParent:a}};e.default={updateHash:function(t,e){var n=0===t.indexOf("#")?t.substring(1):t,a=n?"#"+n:"",r=window&&window.location,o=a?r.pathname+r.search+a:r.pathname+r.search;e?history.pushState(history.state,"",o):history.replaceState(history.state,"",o)},getHash:function(){return window.location.hash.replace(/^#/,"")},filterElementInContainer:function(t){return function(e){return t.contains?t!=e&&t.contains(e):!!(16&t.compareDocumentPosition(e))}},scrollOffset:function(t,e,a){if(a)return t===document?e.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):"static"!==getComputedStyle(t).position?e.offsetLeft:e.offsetLeft-t.offsetLeft;if(t===document)return e.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if("static"!==getComputedStyle(t).position){if(e.offsetParent!==t){var r=n(e,(function(e){return e===t||e===document})),o=r.offsetTop;if(r.offsetParent!==t)throw new Error("Seems containerElement is not an ancestor of the Element");return o}return e.offsetTop}if(e.offsetParent===t.offsetParent)return e.offsetTop-t.offsetTop;var i=function(t){return t===document};return n(e,i).offsetTop-n(t,i).offsetTop}}},5813:function(t){"use strict";t.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#180808","images":{"fallback":{"src":"/static/7a9ac360bbbb277fa7dac1c8e34d5d96/10057/profile.jpg","srcSet":"/static/7a9ac360bbbb277fa7dac1c8e34d5d96/b332f/profile.jpg 100w,\\n/static/7a9ac360bbbb277fa7dac1c8e34d5d96/d9f52/profile.jpg 200w,\\n/static/7a9ac360bbbb277fa7dac1c8e34d5d96/10057/profile.jpg 400w,\\n/static/7a9ac360bbbb277fa7dac1c8e34d5d96/3b307/profile.jpg 800w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/static/7a9ac360bbbb277fa7dac1c8e34d5d96/88d32/profile.webp 100w,\\n/static/7a9ac360bbbb277fa7dac1c8e34d5d96/b9488/profile.webp 200w,\\n/static/7a9ac360bbbb277fa7dac1c8e34d5d96/b0f1a/profile.webp 400w,\\n/static/7a9ac360bbbb277fa7dac1c8e34d5d96/89c0d/profile.webp 800w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":266}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-ec3555d25688ab491c67.js.map