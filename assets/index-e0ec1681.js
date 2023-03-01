(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();let ql=document.title;window.addEventListener("blur",()=>{ql=document.title,document.title="Don't go away, come back!"});window.addEventListener("focus",()=>{document.title=ql});const Ua=document.querySelector("[data-overlay]"),Yl=document.querySelector("[data-navbar]"),Su=document.querySelector("[data-nav-close-btn]"),bu=document.querySelector("[data-nav-open-btn]"),ho=[Ua,Su,bu];for(let o=0;o<ho.length;o++)ho[o].addEventListener("click",function(){Yl.classList.toggle("active"),Ua.classList.toggle("active")});const fo=document.querySelectorAll("[data-navlink]");for(let o=0;o<fo.length;o++)fo[o].addEventListener("click",function(){Yl.classList.toggle("active"),Ua.classList.toggle("active")});const wu=document.querySelector(".back-to-top");window.addEventListener("scroll",()=>{wu.style.display="fixed"});/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ba="148",xi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tu=0,po=1,Eu=2,jl=1,Au=2,fr=3,ci=0,Kt=1,ka=2,Fr=3,On=0,Bi=1,mo=2,go=3,_o=4,Cu=5,Oi=100,Pu=101,Lu=102,xo=103,vo=104,Du=200,Ru=201,Iu=202,Fu=203,Zl=204,$l=205,Ou=206,Nu=207,zu=208,Uu=209,Bu=210,ku=0,Gu=1,Vu=2,ma=3,Wu=4,Hu=5,Xu=6,qu=7,Kl=0,Yu=1,ju=2,Tn=0,Zu=1,$u=2,Ku=3,Ju=4,Qu=5,Jl=300,Hi=301,Xi=302,ga=303,_a=304,gs=306,xa=1e3,nn=1001,va=1002,Mt=1003,yo=1004,Ts=1005,Yt=1006,eh=1007,vr=1008,ui=1009,th=1010,nh=1011,Ql=1012,ih=1013,ti=1014,ni=1015,yr=1016,rh=1017,sh=1018,ki=1020,ah=1021,oh=1022,rn=1023,lh=1024,ch=1025,ri=1026,qi=1027,uh=1028,hh=1029,fh=1030,dh=1031,ph=1033,Es=33776,As=33777,Cs=33778,Ps=33779,Mo=35840,So=35841,bo=35842,wo=35843,mh=36196,To=37492,Eo=37496,Ao=37808,Co=37809,Po=37810,Lo=37811,Do=37812,Ro=37813,Io=37814,Fo=37815,Oo=37816,No=37817,zo=37818,Uo=37819,Bo=37820,ko=37821,Go=36492,hi=3e3,Ge=3001,gh=3200,_h=3201,ec=0,xh=1,an="srgb",Mr="srgb-linear",Ls=7680,vh=519,Vo=35044,Wo="300 es",ya=1035;class gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ds=Math.PI/180,Ho=180/Math.PI;function Cr(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dt[o&255]+dt[o>>8&255]+dt[o>>16&255]+dt[o>>24&255]+"-"+dt[e&255]+dt[e>>8&255]+"-"+dt[e>>16&15|64]+dt[e>>24&255]+"-"+dt[t&63|128]+dt[t>>8&255]+"-"+dt[t>>16&255]+dt[t>>24&255]+dt[n&255]+dt[n>>8&255]+dt[n>>16&255]+dt[n>>24&255]).toLowerCase()}function bt(o,e,t){return Math.max(e,Math.min(t,o))}function yh(o,e){return(o%e+e)%e}function Rs(o,e,t){return(1-t)*o+t*e}function Xo(o){return(o&o-1)===0&&o!==0}function Ma(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Or(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Dt(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,s,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=s,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],d=i[0],p=i[3],_=i[6],M=i[1],y=i[4],S=i[7],v=i[2],A=i[5],P=i[8];return r[0]=a*d+s*M+l*v,r[3]=a*p+s*y+l*A,r[6]=a*_+s*S+l*P,r[1]=c*d+u*M+h*v,r[4]=c*p+u*y+h*A,r[7]=c*_+u*S+h*P,r[2]=f*d+m*M+g*v,r[5]=f*p+m*y+g*A,r[8]=f*_+m*S+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*s*c-n*r*u+n*s*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=u*a-s*c,f=s*l-u*r,m=c*r-a*l,g=t*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=h*d,e[1]=(i*c-u*n)*d,e[2]=(s*n-i*a)*d,e[3]=f*d,e[4]=(u*t-i*l)*d,e[5]=(i*r-s*t)*d,e[6]=m*d,e[7]=(n*l-c*t)*d,e[8]=(a*t-n*r)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,s){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*s)+a+e,-i*c,i*l,-i*(-c*a+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Is.makeScale(e,t)),this}rotate(e){return this.premultiply(Is.makeRotation(-e)),this}translate(e,t){return this.premultiply(Is.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Is=new zt;function tc(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function os(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function si(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ns(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Fs={[an]:{[Mr]:si},[Mr]:{[an]:ns}},vt={legacyMode:!0,get workingColorSpace(){return Mr},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(Fs[e]&&Fs[e][t]!==void 0){const n=Fs[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nt={r:0,g:0,b:0},Qt={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function Os(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function zr(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=vt.workingColorSpace){if(e=yh(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Os(a,r,e+1/3),this.g=Os(a,r,e),this.b=Os(a,r,e-1/3)}return vt.toWorkingColorSpace(this,i),this}setStyle(e,t=an){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,vt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,vt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,vt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,vt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=an){const n=nc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return vt.fromWorkingColorSpace(zr(this,nt),e),bt(nt.r*255,0,255)<<16^bt(nt.g*255,0,255)<<8^bt(nt.b*255,0,255)<<0}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(zr(this,nt),t);const n=nt.r,i=nt.g,r=nt.b,a=Math.max(n,i,r),s=Math.min(n,i,r);let l,c;const u=(s+a)/2;if(s===a)l=0,c=0;else{const h=a-s;switch(c=u<=.5?h/(a+s):h/(2-a-s),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(zr(this,nt),t),e.r=nt.r,e.g=nt.g,e.b=nt.b,e}getStyle(e=an){return vt.fromWorkingColorSpace(zr(this,nt),e),e!==an?`color(${e} ${nt.r} ${nt.g} ${nt.b})`:`rgb(${nt.r*255|0},${nt.g*255|0},${nt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Qt),Qt.h+=e,Qt.s+=t,Qt.l+=n,this.setHSL(Qt.h,Qt.s,Qt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qt),e.getHSL(Nr);const n=Rs(Qt.h,Nr.h,t),i=Rs(Qt.s,Nr.s,t),r=Rs(Qt.l,Nr.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ke.NAMES=nc;let yi;class ic{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{yi===void 0&&(yi=os("canvas")),yi.width=e.width,yi.height=e.height;const n=yi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=os("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=si(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(si(t[n]/255)*255):t[n]=si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class rc{constructor(e=null){this.isSource=!0,this.uuid=Cr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?r.push(Ns(i[a].image)):r.push(Ns(i[a]))}else r=Ns(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ns(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ic.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mh=0;class Ut extends gi{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=nn,i=nn,r=Yt,a=vr,s=rn,l=ui,c=Ut.DEFAULT_ANISOTROPY,u=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=Cr(),this.name="",this.source=new rc(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xa:e.x=e.x-Math.floor(e.x);break;case nn:e.x=e.x<0?0:1;break;case va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xa:e.y=e.y-Math.floor(e.y);break;case nn:e.y=e.y<0?0:1;break;case va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Jl;Ut.DEFAULT_ANISOTROPY=1;class We{constructor(e=0,t=0,n=0,i=1){We.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],d=l[2],p=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,S=(m+1)/2,v=(_+1)/2,A=(u+f)/4,P=(h+d)/4,x=(g+p)/4;return y>S&&y>v?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=A/n,r=P/n):S>v?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=A/i,r=x/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=P/r,i=x/r),this.set(n,i,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(h-d)/M,this.z=(f-u)/M,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fi extends gi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Ut(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Yt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new rc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sc extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sh extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class di{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,s){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],m=r[a+1],g=r[a+2],d=r[a+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(s===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=d;return}if(h!==d||l!==f||c!==m||u!==g){let p=1-s;const _=l*f+c*m+u*g+h*d,M=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const v=Math.sqrt(y),A=Math.atan2(v,_*M);p=Math.sin(p*A)/v,s=Math.sin(s*A)/v}const S=s*M;if(l=l*p+f*S,c=c*p+m*S,u=u*p+g*S,h=h*p+d*S,p===1-s){const v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const s=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return e[t]=s*g+u*h+l*m-c*f,e[t+1]=l*g+u*f+c*h-s*m,e[t+2]=c*g+u*m+s*f-l*h,e[t+3]=u*g-s*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,s=Math.cos,l=Math.sin,c=s(n/2),u=s(i/2),h=s(r/2),f=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],s=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+s+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>s&&n>h){const m=2*Math.sqrt(1+n-s-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(s>h){const m=2*Math.sqrt(1+s-n-h);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-s);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*s+i*c-r*l,this._y=i*u+a*l+r*s-n*c,this._z=r*u+a*c+n*l-i*s,this._w=a*u-n*s-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let s=a*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,s=e.z,l=e.w,c=l*t+a*i-s*n,u=l*n+s*t-r*i,h=l*i+r*n-a*t,f=-r*t-a*n-s*i;return this.x=c*l+f*-r+u*-s-h*-a,this.y=u*l+f*-a+h*-r-c*-s,this.z=h*l+f*-s+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,s=t.y,l=t.z;return this.x=i*l-r*s,this.y=r*a-n*l,this.z=n*s-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zs.copy(this).projectOnVector(e),this.sub(zs)}reflect(e){return this.sub(zs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zs=new O,qo=new di;class Pr{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>a&&(a=h),f>s&&(s=f)}return this.min.set(t,n,i),this.max.set(r,a,s),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>a&&(a=h),f>s&&(s=f)}return this.min.set(t,n,i),this.max.set(r,a,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,s=r.count;a<s;a++)qn.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(qn)}else n.boundingBox===null&&n.computeBoundingBox(),Us.copy(n.boundingBox),Us.applyMatrix4(e.matrixWorld),this.union(Us);const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),Ur.subVectors(this.max,ir),Mi.subVectors(e.a,ir),Si.subVectors(e.b,ir),bi.subVectors(e.c,ir),Cn.subVectors(Si,Mi),Pn.subVectors(bi,Si),Yn.subVectors(Mi,bi);let t=[0,-Cn.z,Cn.y,0,-Pn.z,Pn.y,0,-Yn.z,Yn.y,Cn.z,0,-Cn.x,Pn.z,0,-Pn.x,Yn.z,0,-Yn.x,-Cn.y,Cn.x,0,-Pn.y,Pn.x,0,-Yn.y,Yn.x,0];return!Bs(t,Mi,Si,bi,Ur)||(t=[1,0,0,0,1,0,0,0,1],!Bs(t,Mi,Si,bi,Ur))?!1:(Br.crossVectors(Cn,Pn),t=[Br.x,Br.y,Br.z],Bs(t,Mi,Si,bi,Ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return qn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mn=[new O,new O,new O,new O,new O,new O,new O,new O],qn=new O,Us=new Pr,Mi=new O,Si=new O,bi=new O,Cn=new O,Pn=new O,Yn=new O,ir=new O,Ur=new O,Br=new O,jn=new O;function Bs(o,e,t,n,i){for(let r=0,a=o.length-3;r<=a;r+=3){jn.fromArray(o,r);const s=i.x*Math.abs(jn.x)+i.y*Math.abs(jn.y)+i.z*Math.abs(jn.z),l=e.dot(jn),c=t.dot(jn),u=n.dot(jn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const bh=new Pr,rr=new O,ks=new O;class Ga{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rr.subVectors(e,this.center);const t=rr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(rr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ks.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rr.copy(e.center).add(ks)),this.expandByPoint(rr.copy(e.center).sub(ks))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new O,Gs=new O,kr=new O,Ln=new O,Vs=new O,Gr=new O,Ws=new O;class wh{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.direction).multiplyScalar(t).add(this.origin),gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Gs.copy(e).add(t).multiplyScalar(.5),kr.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(Gs);const r=e.distanceTo(t)*.5,a=-this.direction.dot(kr),s=Ln.dot(this.direction),l=-Ln.dot(kr),c=Ln.lengthSq(),u=Math.abs(1-a*a);let h,f,m,g;if(u>0)if(h=a*l-s,f=a*s-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const d=1/u;h*=d,f*=d,m=h*(h+a*f+2*s)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+s)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(a*r+s)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(kr).multiplyScalar(f).add(Gs),m}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const n=gn.dot(this.direction),i=gn.dot(gn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),s=n-a,l=n+a;return s<0&&l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,s,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(s=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(s=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||s>i)||((s>n||n!==n)&&(n=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,n,i,r){Vs.subVectors(t,e),Gr.subVectors(n,e),Ws.crossVectors(Vs,Gr);let a=this.direction.dot(Ws),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Ln.subVectors(this.origin,e);const l=s*this.direction.dot(Gr.crossVectors(Ln,Gr));if(l<0)return null;const c=s*this.direction.dot(Vs.cross(Ln));if(c<0||l+c>a)return null;const u=-s*Ln.dot(Ws);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,s,l,c,u,h,f,m,g,d,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=a,_[9]=s,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=m,_[7]=g,_[11]=d,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/wi.setFromMatrixColumn(e,0).length(),r=1/wi.setFromMatrixColumn(e,1).length(),a=1/wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),s=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,m=a*h,g=s*u,d=s*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=f-d*c,t[9]=-s*l,t[2]=d-f*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,g=c*u,d=c*h;t[0]=f+d*s,t[4]=g*s-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-s,t[2]=m*s-g,t[6]=d+f*s,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,g=c*u,d=c*h;t[0]=f-d*s,t[4]=-a*h,t[8]=g+m*s,t[1]=m+g*s,t[5]=a*u,t[9]=d-f*s,t[2]=-a*c,t[6]=s,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,m=a*h,g=s*u,d=s*h;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+d,t[1]=l*h,t[5]=d*c+f,t[9]=m*c-g,t[2]=-c,t[6]=s*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,g=s*l,d=s*c;t[0]=l*u,t[4]=d-f*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-s*u,t[2]=-c*u,t[6]=m*h+g,t[10]=f-d*h}else if(e.order==="XZY"){const f=a*l,m=a*c,g=s*l,d=s*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+d,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=s*u,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Th,e,Eh)}lookAt(e,t,n){const i=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),Dn.crossVectors(n,Rt),Dn.lengthSq()===0&&(Math.abs(n.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),Dn.crossVectors(n,Rt)),Dn.normalize(),Vr.crossVectors(Rt,Dn),i[0]=Dn.x,i[4]=Vr.x,i[8]=Rt.x,i[1]=Dn.y,i[5]=Vr.y,i[9]=Rt.y,i[2]=Dn.z,i[6]=Vr.z,i[10]=Rt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],d=n[6],p=n[10],_=n[14],M=n[3],y=n[7],S=n[11],v=n[15],A=i[0],P=i[4],x=i[8],w=i[12],L=i[1],U=i[5],$=i[9],I=i[13],R=i[2],B=i[6],Z=i[10],j=i[14],G=i[3],ee=i[7],K=i[11],k=i[15];return r[0]=a*A+s*L+l*R+c*G,r[4]=a*P+s*U+l*B+c*ee,r[8]=a*x+s*$+l*Z+c*K,r[12]=a*w+s*I+l*j+c*k,r[1]=u*A+h*L+f*R+m*G,r[5]=u*P+h*U+f*B+m*ee,r[9]=u*x+h*$+f*Z+m*K,r[13]=u*w+h*I+f*j+m*k,r[2]=g*A+d*L+p*R+_*G,r[6]=g*P+d*U+p*B+_*ee,r[10]=g*x+d*$+p*Z+_*K,r[14]=g*w+d*I+p*j+_*k,r[3]=M*A+y*L+S*R+v*G,r[7]=M*P+y*U+S*B+v*ee,r[11]=M*x+y*$+S*Z+v*K,r[15]=M*w+y*I+S*j+v*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],s=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],d=e[7],p=e[11],_=e[15];return g*(+r*l*h-i*c*h-r*s*f+n*c*f+i*s*m-n*l*m)+d*(+t*l*m-t*c*f+r*a*f-i*a*m+i*c*u-r*l*u)+p*(+t*c*h-t*s*m-r*a*h+n*a*m+r*s*u-n*c*u)+_*(-i*s*u-t*l*h+t*s*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],d=e[13],p=e[14],_=e[15],M=h*p*c-d*f*c+d*l*m-s*p*m-h*l*_+s*f*_,y=g*f*c-u*p*c-g*l*m+a*p*m+u*l*_-a*f*_,S=u*d*c-g*h*c+g*s*m-a*d*m-u*s*_+a*h*_,v=g*h*l-u*d*l-g*s*f+a*d*f+u*s*p-a*h*p,A=t*M+n*y+i*S+r*v;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return e[0]=M*P,e[1]=(d*f*r-h*p*r-d*i*m+n*p*m+h*i*_-n*f*_)*P,e[2]=(s*p*r-d*l*r+d*i*c-n*p*c-s*i*_+n*l*_)*P,e[3]=(h*l*r-s*f*r-h*i*c+n*f*c+s*i*m-n*l*m)*P,e[4]=y*P,e[5]=(u*p*r-g*f*r+g*i*m-t*p*m-u*i*_+t*f*_)*P,e[6]=(g*l*r-a*p*r-g*i*c+t*p*c+a*i*_-t*l*_)*P,e[7]=(a*f*r-u*l*r+u*i*c-t*f*c-a*i*m+t*l*m)*P,e[8]=S*P,e[9]=(g*h*r-u*d*r-g*n*m+t*d*m+u*n*_-t*h*_)*P,e[10]=(a*d*r-g*s*r+g*n*c-t*d*c-a*n*_+t*s*_)*P,e[11]=(u*s*r-a*h*r-u*n*c+t*h*c+a*n*m-t*s*m)*P,e[12]=v*P,e[13]=(u*d*i-g*h*i+g*n*f-t*d*f-u*n*p+t*h*p)*P,e[14]=(g*s*i-a*d*i-g*n*l+t*d*l+a*n*p-t*s*p)*P,e[15]=(a*h*i-u*s*i+u*n*l-t*h*l-a*n*f+t*s*f)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,s=e.y,l=e.z,c=r*a,u=r*s;return this.set(c*a+n,c*s-i*l,c*l+i*s,0,c*s+i*l,u*s+n,u*l-i*a,0,c*l-i*s,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,s=t._z,l=t._w,c=r+r,u=a+a,h=s+s,f=r*c,m=r*u,g=r*h,d=a*u,p=a*h,_=s*h,M=l*c,y=l*u,S=l*h,v=n.x,A=n.y,P=n.z;return i[0]=(1-(d+_))*v,i[1]=(m+S)*v,i[2]=(g-y)*v,i[3]=0,i[4]=(m-S)*A,i[5]=(1-(f+_))*A,i[6]=(p+M)*A,i[7]=0,i[8]=(g+y)*P,i[9]=(p-M)*P,i[10]=(1-(f+d))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=wi.set(i[0],i[1],i[2]).length();const a=wi.set(i[4],i[5],i[6]).length(),s=wi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],en.copy(this);const c=1/r,u=1/a,h=1/s;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=h,en.elements[9]*=h,en.elements[10]*=h,t.setFromRotationMatrix(en),n.x=r,n.y=a,n.z=s,this}makePerspective(e,t,n,i,r,a){const s=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(a+r)/(a-r),m=-2*a*r/(a-r);return s[0]=l,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=c,s[9]=h,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,i,r,a){const s=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-r),h=(t+e)*l,f=(n+i)*c,m=(a+r)*u;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-h,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const wi=new O,en=new Qe,Th=new O(0,0,0),Eh=new O(1,1,1),Dn=new O,Vr=new O,Rt=new O,Yo=new Qe,jo=new di;class Lr{constructor(e=0,t=0,n=0,i=Lr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],s=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(bt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jo.setFromEuler(this),this.setFromQuaternion(jo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Lr.DefaultOrder="XYZ";Lr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ac{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ah=0;const Zo=new O,Ti=new di,_n=new Qe,Wr=new O,sr=new O,Ch=new O,Ph=new di,$o=new O(1,0,0),Ko=new O(0,1,0),Jo=new O(0,0,1),Lh={type:"added"},Qo={type:"removed"};class Tt extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=Cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DefaultUp.clone();const e=new O,t=new Lr,n=new di,i=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qe},normalMatrix:{value:new zt}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Tt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Tt.DefaultMatrixWorldAutoUpdate,this.layers=new ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis($o,e)}rotateY(e){return this.rotateOnAxis(Ko,e)}rotateZ(e){return this.rotateOnAxis(Jo,e)}translateOnAxis(e,t){return Zo.copy(e).applyQuaternion(this.quaternion),this.position.add(Zo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($o,e)}translateY(e){return this.translateOnAxis(Ko,e)}translateZ(e){return this.translateOnAxis(Jo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wr.copy(e):Wr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(sr,Wr,this.up):_n.lookAt(Wr,sr,this.up),this.quaternion.setFromRotationMatrix(_n),i&&(_n.extractRotation(i.matrixWorld),Ti.setFromRotationMatrix(_n),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Lh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qo)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Qo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,e,Ch),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,Ph,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(r(e.materials,this.material[l]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(r(e.animations,l))}}if(t){const s=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Tt.DefaultUp=new O(0,1,0);Tt.DefaultMatrixAutoUpdate=!0;Tt.DefaultMatrixWorldAutoUpdate=!0;const tn=new O,xn=new O,Hs=new O,vn=new O,Ei=new O,Ai=new O,el=new O,Xs=new O,qs=new O,Ys=new O;class Sn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),tn.subVectors(e,t),i.cross(tn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){tn.subVectors(i,t),xn.subVectors(n,t),Hs.subVectors(e,t);const a=tn.dot(tn),s=tn.dot(xn),l=tn.dot(Hs),c=xn.dot(xn),u=xn.dot(Hs),h=a*c-s*s;if(h===0)return r.set(-2,-1,-1);const f=1/h,m=(c*l-s*u)*f,g=(a*u-s*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vn),vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getUV(e,t,n,i,r,a,s,l){return this.getBarycoord(e,t,n,i,vn),l.set(0,0),l.addScaledVector(r,vn.x),l.addScaledVector(a,vn.y),l.addScaledVector(s,vn.z),l}static isFrontFacing(e,t,n,i){return tn.subVectors(n,t),xn.subVectors(e,t),tn.cross(xn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),tn.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Sn.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,s;Ei.subVectors(i,n),Ai.subVectors(r,n),Xs.subVectors(e,n);const l=Ei.dot(Xs),c=Ai.dot(Xs);if(l<=0&&c<=0)return t.copy(n);qs.subVectors(e,i);const u=Ei.dot(qs),h=Ai.dot(qs);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ei,a);Ys.subVectors(e,r);const m=Ei.dot(Ys),g=Ai.dot(Ys);if(g>=0&&m<=g)return t.copy(r);const d=m*c-l*g;if(d<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(n).addScaledVector(Ai,s);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return el.subVectors(r,i),s=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(el,s);const _=1/(p+d+f);return a=d*_,s=f*_,t.copy(n).addScaledVector(Ei,a).addScaledVector(Ai,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Dh=0;class Dr extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Cr(),this.name="",this.type="Material",this.blending=Bi,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Zl,this.blendDst=$l,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const s in r){const l=r[s];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class oc extends Dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ke=new O,Hr=new Se;class cn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix3(e),this.setXY(t,Hr.x,Hr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix3(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix4(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyNormalMatrix(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.transformDirection(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Or(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Or(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Or(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Or(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class lc extends cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cc extends cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class un extends cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Rh=0;const Ht=new Qe,js=new Tt,Ci=new O,It=new Pr,ar=new Pr,ct=new O;class kn extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=Cr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tc(e)?cc:lc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,n){return Ht.makeTranslation(e,t,n),this.applyMatrix4(Ht),this}scale(e,t,n){return Ht.makeScale(e,t,n),this.applyMatrix4(Ht),this}lookAt(e){return js.lookAt(e),js.updateMatrix(),this.applyMatrix4(js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new un(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];It.setFromBufferAttribute(r),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const s=t[r];ar.setFromBufferAttribute(s),this.morphTargetsRelative?(ct.addVectors(It.min,ar.min),It.expandByPoint(ct),ct.addVectors(It.max,ar.max),It.expandByPoint(ct)):(It.expandByPoint(ar.min),It.expandByPoint(ar.max))}It.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)ct.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ct));if(t)for(let r=0,a=t.length;r<a;r++){const s=t[r],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)ct.fromBufferAttribute(s,c),l&&(Ci.fromBufferAttribute(e,c),ct.add(Ci)),i=Math.max(i,n.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<s;L++)c[L]=new O,u[L]=new O;const h=new O,f=new O,m=new O,g=new Se,d=new Se,p=new Se,_=new O,M=new O;function y(L,U,$){h.fromArray(i,L*3),f.fromArray(i,U*3),m.fromArray(i,$*3),g.fromArray(a,L*2),d.fromArray(a,U*2),p.fromArray(a,$*2),f.sub(h),m.sub(h),d.sub(g),p.sub(g);const I=1/(d.x*p.y-p.x*d.y);isFinite(I)&&(_.copy(f).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(I),M.copy(m).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(I),c[L].add(_),c[U].add(_),c[$].add(_),u[L].add(M),u[U].add(M),u[$].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let L=0,U=S.length;L<U;++L){const $=S[L],I=$.start,R=$.count;for(let B=I,Z=I+R;B<Z;B+=3)y(n[B+0],n[B+1],n[B+2])}const v=new O,A=new O,P=new O,x=new O;function w(L){P.fromArray(r,L*3),x.copy(P);const U=c[L];v.copy(U),v.sub(P.multiplyScalar(P.dot(U))).normalize(),A.crossVectors(x,U);const I=A.dot(u[L])<0?-1:1;l[L*4]=v.x,l[L*4+1]=v.y,l[L*4+2]=v.z,l[L*4+3]=I}for(let L=0,U=S.length;L<U;++L){const $=S[L],I=$.start,R=$.count;for(let B=I,Z=I+R;B<Z;B+=3)w(n[B+0]),w(n[B+1]),w(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new O,r=new O,a=new O,s=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),d=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,d),a.fromBufferAttribute(t,p),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),s.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,p),s.add(u),l.add(u),c.add(u),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,h=s.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let d=0,p=l.length;d<p;d++){s.isInterleavedBufferAttribute?m=l[d]*s.data.stride+s.offset:m=l[d]*u;for(let _=0;_<u;_++)f[g++]=c[m++]}return new cn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,n=this.index.array,i=this.attributes;for(const s in i){const l=i[s],c=e(l,n);t.setAttribute(s,c)}const r=this.morphAttributes;for(const s in r){const l=[],c=r[s];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const c=a[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const tl=new Qe,Pi=new wh,Zs=new Ga,or=new O,lr=new O,cr=new O,$s=new O,Xr=new O,qr=new Se,Yr=new Se,jr=new Se,Ks=new O,Zr=new O;class bn extends Tt{constructor(e=new kn,t=new oc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const s=this.morphTargetInfluences;if(r&&s){Xr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=s[l],h=r[l];u!==0&&($s.fromBufferAttribute(h,e),a?Xr.addScaledVector($s,u):Xr.addScaledVector($s.sub(t),u))}t.add(Xr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(r),e.ray.intersectsSphere(Zs)===!1)||(tl.copy(r).invert(),Pi.copy(e.ray).applyMatrix4(tl),n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1))return;let a;const s=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(s!==null)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const d=h[m],p=i[d.materialIndex],_=Math.max(d.start,f.start),M=Math.min(s.count,Math.min(d.start+d.count,f.start+f.count));for(let y=_,S=M;y<S;y+=3){const v=s.getX(y),A=s.getX(y+1),P=s.getX(y+2);a=$r(this,p,e,Pi,c,u,v,A,P),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const m=Math.max(0,f.start),g=Math.min(s.count,f.start+f.count);for(let d=m,p=g;d<p;d+=3){const _=s.getX(d),M=s.getX(d+1),y=s.getX(d+2);a=$r(this,i,e,Pi,c,u,_,M,y),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const d=h[m],p=i[d.materialIndex],_=Math.max(d.start,f.start),M=Math.min(l.count,Math.min(d.start+d.count,f.start+f.count));for(let y=_,S=M;y<S;y+=3){const v=y,A=y+1,P=y+2;a=$r(this,p,e,Pi,c,u,v,A,P),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const m=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let d=m,p=g;d<p;d+=3){const _=d,M=d+1,y=d+2;a=$r(this,i,e,Pi,c,u,_,M,y),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}}}function Ih(o,e,t,n,i,r,a,s){let l;if(e.side===Kt?l=n.intersectTriangle(a,r,i,!0,s):l=n.intersectTriangle(i,r,a,e.side===ci,s),l===null)return null;Zr.copy(s),Zr.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(Zr);return c<t.near||c>t.far?null:{distance:c,point:Zr.clone(),object:o}}function $r(o,e,t,n,i,r,a,s,l){o.getVertexPosition(a,or),o.getVertexPosition(s,lr),o.getVertexPosition(l,cr);const c=Ih(o,e,t,n,or,lr,cr,Ks);if(c){i&&(qr.fromBufferAttribute(i,a),Yr.fromBufferAttribute(i,s),jr.fromBufferAttribute(i,l),c.uv=Sn.getUV(Ks,or,lr,cr,qr,Yr,jr,new Se)),r&&(qr.fromBufferAttribute(r,a),Yr.fromBufferAttribute(r,s),jr.fromBufferAttribute(r,l),c.uv2=Sn.getUV(Ks,or,lr,cr,qr,Yr,jr,new Se));const u={a,b:s,c:l,normal:new O,materialIndex:0};Sn.getNormal(or,lr,cr,u.normal),c.face=u}return c}class Rr extends kn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const s=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new un(c,3)),this.setAttribute("normal",new un(u,3)),this.setAttribute("uv",new un(h,2));function g(d,p,_,M,y,S,v,A,P,x,w){const L=S/P,U=v/x,$=S/2,I=v/2,R=A/2,B=P+1,Z=x+1;let j=0,G=0;const ee=new O;for(let K=0;K<Z;K++){const k=K*U-I;for(let V=0;V<B;V++){const Q=V*L-$;ee[d]=Q*M,ee[p]=k*y,ee[_]=R,c.push(ee.x,ee.y,ee.z),ee[d]=0,ee[p]=0,ee[_]=A>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(V/P),h.push(1-K/x),j+=1}}for(let K=0;K<x;K++)for(let k=0;k<P;k++){const V=f+k+B*K,Q=f+k+B*(K+1),J=f+(k+1)+B*(K+1),re=f+(k+1)+B*K;l.push(V,Q,re),l.push(Q,J,re),G+=6}s.addGroup(m,G,w),m+=G,f+=j}}static fromJSON(e){return new Rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yi(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function yt(o){const e={};for(let t=0;t<o.length;t++){const n=Yi(o[t]);for(const i in n)e[i]=n[i]}return e}function Fh(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function uc(o){return o.getRenderTarget()===null&&o.outputEncoding===Ge?an:Mr}const Oh={clone:Yi,merge:yt};var Nh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends Dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nh,this.fragmentShader=zh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.uniformsGroups=Fh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class hc extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ot extends hc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ho*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ho*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ds*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Li=-90,Di=1;class Uh extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ot(Li,Di,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Ot(Li,Di,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new Ot(Li,Di,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const s=new Ot(Li,Di,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const l=new Ot(Li,Di,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Ot(Li,Di,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,s,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Tn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class fc extends Ut{constructor(e,t,n,i,r,a,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Hi,super(e,t,n,i,r,a,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bh extends fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new fc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Rr(5,5,5),r=new pi({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:On});r.uniforms.tEquirect.value=t;const a=new bn(i,r),s=t.minFilter;return t.minFilter===vr&&(t.minFilter=Yt),new Uh(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Js=new O,kh=new O,Gh=new zt;class Kn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Js.subVectors(n,t).cross(kh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Js),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Gh.getNormalMatrix(e),i=this.coplanarPoint(Js).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Ga,Kr=new O;class Va{constructor(e=new Kn,t=new Kn,n=new Kn,i=new Kn,r=new Kn,a=new Kn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],s=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],m=n[9],g=n[10],d=n[11],p=n[12],_=n[13],M=n[14],y=n[15];return t[0].setComponents(s-i,h-l,d-f,y-p).normalize(),t[1].setComponents(s+i,h+l,d+f,y+p).normalize(),t[2].setComponents(s+r,h+c,d+m,y+_).normalize(),t[3].setComponents(s-r,h-c,d-m,y-_).normalize(),t[4].setComponents(s-a,h-u,d-g,y-M).normalize(),t[5].setComponents(s+a,h+u,d+g,y+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Kr.x=i.normal.x>0?e.max.x:e.min.x,Kr.y=i.normal.y>0?e.max.y:e.min.y,Kr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dc(){let o=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){o=r}}}function Vh(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,m=o.createBuffer();o.bindBuffer(u,m),o.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,m=u.updateRange;o.bindBuffer(h,c),m.count===-1?o.bufferSubData(h,0,f):(t?o.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):o.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:s,update:l}}class Wa extends kn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,s=Math.floor(n),l=Math.floor(i),c=s+1,u=l+1,h=e/s,f=t/l,m=[],g=[],d=[],p=[];for(let _=0;_<u;_++){const M=_*f-a;for(let y=0;y<c;y++){const S=y*h-r;g.push(S,-M,0),d.push(0,0,1),p.push(y/s),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let M=0;M<s;M++){const y=M+c*_,S=M+c*(_+1),v=M+1+c*(_+1),A=M+1+c*_;m.push(y,S,A),m.push(S,v,A)}this.setIndex(m),this.setAttribute("position",new un(g,3)),this.setAttribute("normal",new un(d,3)),this.setAttribute("uv",new un(p,2))}static fromJSON(e){return new Wa(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Hh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zh="vec3 transformed = vec3( position );",$h=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Jh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,uf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,df=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",_f=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ef=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Af=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Pf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Df=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,If=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Ff=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Of=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Bf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Wf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Yf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$f=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ed=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,td=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,nd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,id=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,rd=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,od=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ld=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,cd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ud=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,fd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,md=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_d=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Md=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Sd=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bd=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,wd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Td=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ed=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ad=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Pd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ld=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Id=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Fd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Od=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Nd=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,zd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ud=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Bd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,kd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Gd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,$d=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ep=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,np=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ip=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,op=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,up=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_p=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,yp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,be={alphamap_fragment:Wh,alphamap_pars_fragment:Hh,alphatest_fragment:Xh,alphatest_pars_fragment:qh,aomap_fragment:Yh,aomap_pars_fragment:jh,begin_vertex:Zh,beginnormal_vertex:$h,bsdfs:Kh,iridescence_fragment:Jh,bumpmap_pars_fragment:Qh,clipping_planes_fragment:ef,clipping_planes_pars_fragment:tf,clipping_planes_pars_vertex:nf,clipping_planes_vertex:rf,color_fragment:sf,color_pars_fragment:af,color_pars_vertex:of,color_vertex:lf,common:cf,cube_uv_reflection_fragment:uf,defaultnormal_vertex:hf,displacementmap_pars_vertex:ff,displacementmap_vertex:df,emissivemap_fragment:pf,emissivemap_pars_fragment:mf,encodings_fragment:gf,encodings_pars_fragment:_f,envmap_fragment:xf,envmap_common_pars_fragment:vf,envmap_pars_fragment:yf,envmap_pars_vertex:Mf,envmap_physical_pars_fragment:If,envmap_vertex:Sf,fog_vertex:bf,fog_pars_vertex:wf,fog_fragment:Tf,fog_pars_fragment:Ef,gradientmap_pars_fragment:Af,lightmap_fragment:Cf,lightmap_pars_fragment:Pf,lights_lambert_fragment:Lf,lights_lambert_pars_fragment:Df,lights_pars_begin:Rf,lights_toon_fragment:Ff,lights_toon_pars_fragment:Of,lights_phong_fragment:Nf,lights_phong_pars_fragment:zf,lights_physical_fragment:Uf,lights_physical_pars_fragment:Bf,lights_fragment_begin:kf,lights_fragment_maps:Gf,lights_fragment_end:Vf,logdepthbuf_fragment:Wf,logdepthbuf_pars_fragment:Hf,logdepthbuf_pars_vertex:Xf,logdepthbuf_vertex:qf,map_fragment:Yf,map_pars_fragment:jf,map_particle_fragment:Zf,map_particle_pars_fragment:$f,metalnessmap_fragment:Kf,metalnessmap_pars_fragment:Jf,morphcolor_vertex:Qf,morphnormal_vertex:ed,morphtarget_pars_vertex:td,morphtarget_vertex:nd,normal_fragment_begin:id,normal_fragment_maps:rd,normal_pars_fragment:sd,normal_pars_vertex:ad,normal_vertex:od,normalmap_pars_fragment:ld,clearcoat_normal_fragment_begin:cd,clearcoat_normal_fragment_maps:ud,clearcoat_pars_fragment:hd,iridescence_pars_fragment:fd,output_fragment:dd,packing:pd,premultiplied_alpha_fragment:md,project_vertex:gd,dithering_fragment:_d,dithering_pars_fragment:xd,roughnessmap_fragment:vd,roughnessmap_pars_fragment:yd,shadowmap_pars_fragment:Md,shadowmap_pars_vertex:Sd,shadowmap_vertex:bd,shadowmask_pars_fragment:wd,skinbase_vertex:Td,skinning_pars_vertex:Ed,skinning_vertex:Ad,skinnormal_vertex:Cd,specularmap_fragment:Pd,specularmap_pars_fragment:Ld,tonemapping_fragment:Dd,tonemapping_pars_fragment:Rd,transmission_fragment:Id,transmission_pars_fragment:Fd,uv_pars_fragment:Od,uv_pars_vertex:Nd,uv_vertex:zd,uv2_pars_fragment:Ud,uv2_pars_vertex:Bd,uv2_vertex:kd,worldpos_vertex:Gd,background_vert:Vd,background_frag:Wd,backgroundCube_vert:Hd,backgroundCube_frag:Xd,cube_vert:qd,cube_frag:Yd,depth_vert:jd,depth_frag:Zd,distanceRGBA_vert:$d,distanceRGBA_frag:Kd,equirect_vert:Jd,equirect_frag:Qd,linedashed_vert:ep,linedashed_frag:tp,meshbasic_vert:np,meshbasic_frag:ip,meshlambert_vert:rp,meshlambert_frag:sp,meshmatcap_vert:ap,meshmatcap_frag:op,meshnormal_vert:lp,meshnormal_frag:cp,meshphong_vert:up,meshphong_frag:hp,meshphysical_vert:fp,meshphysical_frag:dp,meshtoon_vert:pp,meshtoon_frag:mp,points_vert:gp,points_frag:_p,shadow_vert:xp,shadow_frag:vp,sprite_vert:yp,sprite_frag:Mp},se={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new zt},uv2Transform:{value:new zt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zt}}},on={basic:{uniforms:yt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:yt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ke(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:yt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:yt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:yt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new ke(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:yt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:yt([se.points,se.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:yt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:yt([se.common,se.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:yt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:yt([se.sprite,se.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:yt([se.common,se.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:yt([se.lights,se.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};on.physical={uniforms:yt([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Se(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const Jr={r:0,b:0,g:0};function Sp(o,e,t,n,i,r,a){const s=new ke(0);let l=r===!0?0:1,c,u,h=null,f=0,m=null;function g(p,_){let M=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y));const S=o.xr,v=S.getSession&&S.getSession();v&&v.environmentBlendMode==="additive"&&(y=null),y===null?d(s,l):y&&y.isColor&&(d(y,1),M=!0),(o.autoClear||M)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),y&&(y.isCubeTexture||y.mapping===gs)?(u===void 0&&(u=new bn(new Rr(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Yi(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,P,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=y.encoding!==Ge,(h!==y||f!==y.version||m!==o.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,m=o.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new bn(new Wa(2,2),new pi({name:"BackgroundMaterial",uniforms:Yi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=y.encoding!==Ge,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||m!==o.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,m=o.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function d(p,_){p.getRGB(Jr,uc(o)),n.buffers.color.setClear(Jr.r,Jr.g,Jr.b,_,a)}return{getClearColor:function(){return s},setClearColor:function(p,_=1){s.set(p),l=_,d(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(s,l)},render:g}}function bp(o,e,t,n){const i=o.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,s={},l=p(null);let c=l,u=!1;function h(R,B,Z,j,G){let ee=!1;if(a){const K=d(j,Z,B);c!==K&&(c=K,m(c.object)),ee=_(R,j,Z,G),ee&&M(R,j,Z,G)}else{const K=B.wireframe===!0;(c.geometry!==j.id||c.program!==Z.id||c.wireframe!==K)&&(c.geometry=j.id,c.program=Z.id,c.wireframe=K,ee=!0)}G!==null&&t.update(G,34963),(ee||u)&&(u=!1,x(R,B,Z,j),G!==null&&o.bindBuffer(34963,t.get(G).buffer))}function f(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?o.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?o.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function d(R,B,Z){const j=Z.wireframe===!0;let G=s[R.id];G===void 0&&(G={},s[R.id]=G);let ee=G[B.id];ee===void 0&&(ee={},G[B.id]=ee);let K=ee[j];return K===void 0&&(K=p(f()),ee[j]=K),K}function p(R){const B=[],Z=[],j=[];for(let G=0;G<i;G++)B[G]=0,Z[G]=0,j[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Z,attributeDivisors:j,object:R,attributes:{},index:null}}function _(R,B,Z,j){const G=c.attributes,ee=B.attributes;let K=0;const k=Z.getAttributes();for(const V in k)if(k[V].location>=0){const J=G[V];let re=ee[V];if(re===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(re=R.instanceColor)),J===void 0||J.attribute!==re||re&&J.data!==re.data)return!0;K++}return c.attributesNum!==K||c.index!==j}function M(R,B,Z,j){const G={},ee=B.attributes;let K=0;const k=Z.getAttributes();for(const V in k)if(k[V].location>=0){let J=ee[V];J===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(J=R.instanceColor));const re={};re.attribute=J,J&&J.data&&(re.data=J.data),G[V]=re,K++}c.attributes=G,c.attributesNum=K,c.index=j}function y(){const R=c.newAttributes;for(let B=0,Z=R.length;B<Z;B++)R[B]=0}function S(R){v(R,0)}function v(R,B){const Z=c.newAttributes,j=c.enabledAttributes,G=c.attributeDivisors;Z[R]=1,j[R]===0&&(o.enableVertexAttribArray(R),j[R]=1),G[R]!==B&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,B),G[R]=B)}function A(){const R=c.newAttributes,B=c.enabledAttributes;for(let Z=0,j=B.length;Z<j;Z++)B[Z]!==R[Z]&&(o.disableVertexAttribArray(Z),B[Z]=0)}function P(R,B,Z,j,G,ee){n.isWebGL2===!0&&(Z===5124||Z===5125)?o.vertexAttribIPointer(R,B,Z,G,ee):o.vertexAttribPointer(R,B,Z,j,G,ee)}function x(R,B,Z,j){if(n.isWebGL2===!1&&(R.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const G=j.attributes,ee=Z.getAttributes(),K=B.defaultAttributeValues;for(const k in ee){const V=ee[k];if(V.location>=0){let Q=G[k];if(Q===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor)),Q!==void 0){const J=Q.normalized,re=Q.itemSize,q=t.get(Q);if(q===void 0)continue;const Ee=q.buffer,fe=q.type,_e=q.bytesPerElement;if(Q.isInterleavedBufferAttribute){const he=Q.data,Fe=he.stride,Me=Q.offset;if(he.isInstancedInterleavedBuffer){for(let xe=0;xe<V.locationSize;xe++)v(V.location+xe,he.meshPerAttribute);R.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let xe=0;xe<V.locationSize;xe++)S(V.location+xe);o.bindBuffer(34962,Ee);for(let xe=0;xe<V.locationSize;xe++)P(V.location+xe,re/V.locationSize,fe,J,Fe*_e,(Me+re/V.locationSize*xe)*_e)}else{if(Q.isInstancedBufferAttribute){for(let he=0;he<V.locationSize;he++)v(V.location+he,Q.meshPerAttribute);R.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let he=0;he<V.locationSize;he++)S(V.location+he);o.bindBuffer(34962,Ee);for(let he=0;he<V.locationSize;he++)P(V.location+he,re/V.locationSize,fe,J,re*_e,re/V.locationSize*he*_e)}}else if(K!==void 0){const J=K[k];if(J!==void 0)switch(J.length){case 2:o.vertexAttrib2fv(V.location,J);break;case 3:o.vertexAttrib3fv(V.location,J);break;case 4:o.vertexAttrib4fv(V.location,J);break;default:o.vertexAttrib1fv(V.location,J)}}}}A()}function w(){$();for(const R in s){const B=s[R];for(const Z in B){const j=B[Z];for(const G in j)g(j[G].object),delete j[G];delete B[Z]}delete s[R]}}function L(R){if(s[R.id]===void 0)return;const B=s[R.id];for(const Z in B){const j=B[Z];for(const G in j)g(j[G].object),delete j[G];delete B[Z]}delete s[R.id]}function U(R){for(const B in s){const Z=s[B];if(Z[R.id]===void 0)continue;const j=Z[R.id];for(const G in j)g(j[G].object),delete j[G];delete Z[R.id]}}function $(){I(),u=!0,c!==l&&(c=l,m(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:$,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:L,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:S,disableUnusedAttributes:A}}function wp(o,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function s(c,u){o.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,m;if(i)f=o,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,u,h),t.update(u,r,h)}this.setMode=a,this.render=s,this.renderInstances=l}function Tp(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let s=t.precision!==void 0?t.precision:"highp";const l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=o.getParameter(34930),f=o.getParameter(35660),m=o.getParameter(3379),g=o.getParameter(34076),d=o.getParameter(34921),p=o.getParameter(36347),_=o.getParameter(36348),M=o.getParameter(36349),y=f>0,S=a||e.has("OES_texture_float"),v=y&&S,A=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:v,maxSamples:A}}function Ep(o){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Kn,s=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const g=h.length!==0||f||n!==0||i;return i=f,t=u(h,m,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,m){const g=h.clippingPlanes,d=h.clipIntersection,p=h.clipShadows,_=o.get(h);if(!i||g===null||g.length===0||r&&!p)r?u(null):c();else{const M=r?0:n,y=M*4;let S=_.clippingState||null;l.value=S,S=u(g,f,y,m);for(let v=0;v!==y;++v)S[v]=t[v];_.clippingState=S,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,g){const d=h!==null?h.length:0;let p=null;if(d!==0){if(p=l.value,g!==!0||p===null){const _=m+d*4,M=f.matrixWorldInverse;s.getNormalMatrix(M),(p===null||p.length<_)&&(p=new Float32Array(_));for(let y=0,S=m;y!==d;++y,S+=4)a.copy(h[y]).applyMatrix4(M,s),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function Ap(o){let e=new WeakMap;function t(a,s){return s===ga?a.mapping=Hi:s===_a&&(a.mapping=Xi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===ga||s===_a)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Bh(l.height/2);return c.fromEquirectangularTexture(o,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Cp extends hc{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,s=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ni=4,nl=[.125,.215,.35,.446,.526,.582],ei=20,Qs=new Cp,il=new ke;let ea=null;const Jn=(1+Math.sqrt(5))/2,Ii=1/Jn,rl=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Jn,Ii),new O(0,Jn,-Ii),new O(Ii,0,Jn),new O(-Ii,0,Jn),new O(Jn,Ii,0),new O(-Jn,Ii,0)];class sl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ea=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ea),e.scissorTest=!1,Qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hi||e.mapping===Xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ea=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:yr,format:rn,encoding:hi,depthBuffer:!1},i=al(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=al(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pp(r)),this._blurMaterial=Lp(r,e,t)}return i}_compileMaterial(e){const t=new bn(this._lodPlanes[0],e);this._renderer.compile(t,Qs)}_sceneToCubeUV(e,t,n,i){const s=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(il),u.toneMapping=Tn,u.autoClear=!1;const m=new oc({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),g=new bn(new Rr,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(il),d=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(s.up.set(0,l[_],0),s.lookAt(c[_],0,0)):M===1?(s.up.set(0,0,l[_]),s.lookAt(0,c[_],0)):(s.up.set(0,l[_],0),s.lookAt(0,0,c[_]));const y=this._cubeSize;Qr(i,M*y,_>2?y:0,y,y),u.setRenderTarget(i),d&&u.render(g,s),u.render(e,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Hi||e.mapping===Xi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ll()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ol());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new bn(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;const l=this._cubeSize;Qr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Qs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=rl[(i-1)%rl.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,s){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new bn(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ei-1),d=r/g,p=isFinite(r)?1+Math.floor(u*d):ei;p>ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ei}`);const _=[];let M=0;for(let P=0;P<ei;++P){const x=P/d,w=Math.exp(-x*x/2);_.push(w),P===0?M+=w:P<p&&(M+=2*w)}for(let P=0;P<_.length;P++)_[P]=_[P]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=a==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const S=this._sizeLods[i],v=3*S*(i>y-Ni?i-y+Ni:0),A=4*(this._cubeSize-S);Qr(t,v,A,3*S,2*S),l.setRenderTarget(t),l.render(h,Qs)}}function Pp(o){const e=[],t=[],n=[];let i=o;const r=o-Ni+1+nl.length;for(let a=0;a<r;a++){const s=Math.pow(2,i);t.push(s);let l=1/s;a>o-Ni?l=nl[a-o+Ni-1]:a===0&&(l=0),n.push(l);const c=1/(s-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,d=3,p=2,_=1,M=new Float32Array(d*g*m),y=new Float32Array(p*g*m),S=new Float32Array(_*g*m);for(let A=0;A<m;A++){const P=A%3*2/3-1,x=A>2?0:-1,w=[P,x,0,P+2/3,x,0,P+2/3,x+1,0,P,x,0,P+2/3,x+1,0,P,x+1,0];M.set(w,d*g*A),y.set(f,p*g*A);const L=[A,A,A,A,A,A];S.set(L,_*g*A)}const v=new kn;v.setAttribute("position",new cn(M,d)),v.setAttribute("uv",new cn(y,p)),v.setAttribute("faceIndex",new cn(S,_)),e.push(v),i>Ni&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function al(o,e,t){const n=new fi(o,e,t);return n.texture.mapping=gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qr(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function Lp(o,e,t){const n=new Float32Array(ei),i=new O(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function ol(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function ll(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ha(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Dp(o){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===ga||l===_a,u=l===Hi||l===Xi;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=e.get(s);return t===null&&(t=new sl(o)),h=c?t.fromEquirectangular(s,h):t.fromCubemap(s,h),e.set(s,h),h.texture}else{if(e.has(s))return e.get(s).texture;{const h=s.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new sl(o));const f=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,f),s.addEventListener("dispose",r),f.texture}else return null}}}return s}function i(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function r(s){const l=s.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Rp(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ip(o,e,t,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const d=m[g];for(let p=0,_=d.length;p<_;p++)e.update(d[p],34962)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let d=0;if(m!==null){const M=m.array;d=m.version;for(let y=0,S=M.length;y<S;y+=3){const v=M[y+0],A=M[y+1],P=M[y+2];f.push(v,A,A,P,P,v)}}else{const M=g.array;d=g.version;for(let y=0,S=M.length/3-1;y<S;y+=3){const v=y+0,A=y+1,P=y+2;f.push(v,A,A,P,P,v)}}const p=new(tc(f)?cc:lc)(f,1);p.version=d;const _=r.get(h);_&&e.remove(_),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:s,update:l,getWireframeAttribute:u}}function Fp(o,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let s,l;function c(f){s=f.type,l=f.bytesPerElement}function u(f,m){o.drawElements(r,m,s,f*l),t.update(m,r,1)}function h(f,m,g){if(g===0)return;let d,p;if(i)d=o,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,m,s,f*l,g),t.update(m,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function Op(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,s){switch(t.calls++,a){case 4:t.triangles+=s*(r/3);break;case 1:t.lines+=s*(r/2);break;case 3:t.lines+=s*(r-1);break;case 2:t.lines+=s*r;break;case 0:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Np(o,e){return o[0]-e[0]}function zp(o,e){return Math.abs(e[1])-Math.abs(o[1])}function Up(o,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new We,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,h,f){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=d!==void 0?d.length:0;let _=r.get(u);if(_===void 0||_.count!==p){let Z=function(){R.dispose(),r.delete(u),u.removeEventListener("dispose",Z)};var g=Z;_!==void 0&&_.texture.dispose();const S=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let L=0;S===!0&&(L=1),v===!0&&(L=2),A===!0&&(L=3);let U=u.attributes.position.count*L,$=1;U>e.maxTextureSize&&($=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const I=new Float32Array(U*$*4*p),R=new sc(I,U,$,p);R.type=ni,R.needsUpdate=!0;const B=L*4;for(let j=0;j<p;j++){const G=P[j],ee=x[j],K=w[j],k=U*$*4*j;for(let V=0;V<G.count;V++){const Q=V*B;S===!0&&(a.fromBufferAttribute(G,V),I[k+Q+0]=a.x,I[k+Q+1]=a.y,I[k+Q+2]=a.z,I[k+Q+3]=0),v===!0&&(a.fromBufferAttribute(ee,V),I[k+Q+4]=a.x,I[k+Q+5]=a.y,I[k+Q+6]=a.z,I[k+Q+7]=0),A===!0&&(a.fromBufferAttribute(K,V),I[k+Q+8]=a.x,I[k+Q+9]=a.y,I[k+Q+10]=a.z,I[k+Q+11]=K.itemSize===4?a.w:1)}}_={count:p,texture:R,size:new Se(U,$)},r.set(u,_),u.addEventListener("dispose",Z)}let M=0;for(let S=0;S<m.length;S++)M+=m[S];const y=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(o,"morphTargetBaseInfluence",y),f.getUniforms().setValue(o,"morphTargetInfluences",m),f.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}else{const d=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==d){p=[];for(let v=0;v<d;v++)p[v]=[v,0];n[u.id]=p}for(let v=0;v<d;v++){const A=p[v];A[0]=v,A[1]=m[v]}p.sort(zp);for(let v=0;v<8;v++)v<d&&p[v][1]?(s[v][0]=p[v][0],s[v][1]=p[v][1]):(s[v][0]=Number.MAX_SAFE_INTEGER,s[v][1]=0);s.sort(Np);const _=u.morphAttributes.position,M=u.morphAttributes.normal;let y=0;for(let v=0;v<8;v++){const A=s[v],P=A[0],x=A[1];P!==Number.MAX_SAFE_INTEGER&&x?(_&&u.getAttribute("morphTarget"+v)!==_[P]&&u.setAttribute("morphTarget"+v,_[P]),M&&u.getAttribute("morphNormal"+v)!==M[P]&&u.setAttribute("morphNormal"+v,M[P]),i[v]=x,y+=x):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),M&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const S=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(o,"morphTargetBaseInfluence",S),f.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function Bp(o,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const pc=new Ut,mc=new sc,gc=new Sh,_c=new fc,cl=[],ul=[],hl=new Float32Array(16),fl=new Float32Array(9),dl=new Float32Array(4);function tr(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let r=cl[i];if(r===void 0&&(r=new Float32Array(i),cl[i]=r),e!==0){n.toArray(r,0);for(let a=1,s=0;a!==e;++a)s+=t,o[a].toArray(r,s)}return r}function rt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function st(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function _s(o,e){let t=ul[e];t===void 0&&(t=new Int32Array(e),ul[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function kp(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Gp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;o.uniform2fv(this.addr,e),st(t,e)}}function Vp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rt(t,e))return;o.uniform3fv(this.addr,e),st(t,e)}}function Wp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;o.uniform4fv(this.addr,e),st(t,e)}}function Hp(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),st(t,e)}else{if(rt(t,n))return;dl.set(n),o.uniformMatrix2fv(this.addr,!1,dl),st(t,n)}}function Xp(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),st(t,e)}else{if(rt(t,n))return;fl.set(n),o.uniformMatrix3fv(this.addr,!1,fl),st(t,n)}}function qp(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),st(t,e)}else{if(rt(t,n))return;hl.set(n),o.uniformMatrix4fv(this.addr,!1,hl),st(t,n)}}function Yp(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function jp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;o.uniform2iv(this.addr,e),st(t,e)}}function Zp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rt(t,e))return;o.uniform3iv(this.addr,e),st(t,e)}}function $p(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;o.uniform4iv(this.addr,e),st(t,e)}}function Kp(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Jp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;o.uniform2uiv(this.addr,e),st(t,e)}}function Qp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rt(t,e))return;o.uniform3uiv(this.addr,e),st(t,e)}}function em(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;o.uniform4uiv(this.addr,e),st(t,e)}}function tm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||pc,i)}function nm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||gc,i)}function im(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||_c,i)}function rm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||mc,i)}function sm(o){switch(o){case 5126:return kp;case 35664:return Gp;case 35665:return Vp;case 35666:return Wp;case 35674:return Hp;case 35675:return Xp;case 35676:return qp;case 5124:case 35670:return Yp;case 35667:case 35671:return jp;case 35668:case 35672:return Zp;case 35669:case 35673:return $p;case 5125:return Kp;case 36294:return Jp;case 36295:return Qp;case 36296:return em;case 35678:case 36198:case 36298:case 36306:case 35682:return tm;case 35679:case 36299:case 36307:return nm;case 35680:case 36300:case 36308:case 36293:return im;case 36289:case 36303:case 36311:case 36292:return rm}}function am(o,e){o.uniform1fv(this.addr,e)}function om(o,e){const t=tr(e,this.size,2);o.uniform2fv(this.addr,t)}function lm(o,e){const t=tr(e,this.size,3);o.uniform3fv(this.addr,t)}function cm(o,e){const t=tr(e,this.size,4);o.uniform4fv(this.addr,t)}function um(o,e){const t=tr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function hm(o,e){const t=tr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function fm(o,e){const t=tr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function dm(o,e){o.uniform1iv(this.addr,e)}function pm(o,e){o.uniform2iv(this.addr,e)}function mm(o,e){o.uniform3iv(this.addr,e)}function gm(o,e){o.uniform4iv(this.addr,e)}function _m(o,e){o.uniform1uiv(this.addr,e)}function xm(o,e){o.uniform2uiv(this.addr,e)}function vm(o,e){o.uniform3uiv(this.addr,e)}function ym(o,e){o.uniform4uiv(this.addr,e)}function Mm(o,e,t){const n=this.cache,i=e.length,r=_s(t,i);rt(n,r)||(o.uniform1iv(this.addr,r),st(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||pc,r[a])}function Sm(o,e,t){const n=this.cache,i=e.length,r=_s(t,i);rt(n,r)||(o.uniform1iv(this.addr,r),st(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||gc,r[a])}function bm(o,e,t){const n=this.cache,i=e.length,r=_s(t,i);rt(n,r)||(o.uniform1iv(this.addr,r),st(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||_c,r[a])}function wm(o,e,t){const n=this.cache,i=e.length,r=_s(t,i);rt(n,r)||(o.uniform1iv(this.addr,r),st(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||mc,r[a])}function Tm(o){switch(o){case 5126:return am;case 35664:return om;case 35665:return lm;case 35666:return cm;case 35674:return um;case 35675:return hm;case 35676:return fm;case 5124:case 35670:return dm;case 35667:case 35671:return pm;case 35668:case 35672:return mm;case 35669:case 35673:return gm;case 5125:return _m;case 36294:return xm;case 36295:return vm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Mm;case 35679:case 36299:case 36307:return Sm;case 35680:case 36300:case 36308:case 36293:return bm;case 36289:case 36303:case 36311:case 36292:return wm}}class Em{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=sm(t.type)}}class Am{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Tm(t.type)}}class Cm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const s=i[r];s.setValue(e,t[s.id],n)}}}const ta=/(\w+)(\])?(\[|\.)?/g;function pl(o,e){o.seq.push(e),o.map[e.id]=e}function Pm(o,e,t){const n=o.name,i=n.length;for(ta.lastIndex=0;;){const r=ta.exec(n),a=ta.lastIndex;let s=r[1];const l=r[2]==="]",c=r[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===i){pl(t,c===void 0?new Em(s,o,e):new Am(s,o,e));break}else{let h=t.map[s];h===void 0&&(h=new Cm(s),pl(t,h)),t=h}}}class is{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Pm(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const s=t[r],l=n[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function ml(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let Lm=0;function Dm(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const s=a+1;n.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return n.join(`
`)}function Rm(o){switch(o){case hi:return["Linear","( value )"];case Ge:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function gl(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Dm(o.getShaderSource(e),a)}else return i}function Im(o,e){const t=Rm(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Fm(o,e){let t;switch(e){case Zu:t="Linear";break;case $u:t="Reinhard";break;case Ku:t="OptimizedCineon";break;case Ju:t="ACESFilmic";break;case Qu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Om(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(dr).join(`
`)}function Nm(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zm(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(e,i),a=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),t[a]={type:r.type,location:o.getAttribLocation(e,a),locationSize:s}}return t}function dr(o){return o!==""}function _l(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xl(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Um=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sa(o){return o.replace(Um,Bm)}function Bm(o,e){const t=be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Sa(t)}const km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vl(o){return o.replace(km,Gm)}function Gm(o,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function yl(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vm(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===jl?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Au?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===fr&&(e="SHADOWMAP_TYPE_VSM"),e}function Wm(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Hi:case Xi:e="ENVMAP_TYPE_CUBE";break;case gs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hm(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Xi:e="ENVMAP_MODE_REFRACTION";break}return e}function Xm(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Kl:e="ENVMAP_BLENDING_MULTIPLY";break;case Yu:e="ENVMAP_BLENDING_MIX";break;case ju:e="ENVMAP_BLENDING_ADD";break}return e}function qm(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ym(o,e,t,n){const i=o.getContext(),r=t.defines;let a=t.vertexShader,s=t.fragmentShader;const l=Vm(t),c=Wm(t),u=Hm(t),h=Xm(t),f=qm(t),m=t.isWebGL2?"":Om(t),g=Nm(r),d=i.createProgram();let p,_,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(dr).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(dr).join(`
`),_.length>0&&(_+=`
`)):(p=[yl(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),_=[m,yl(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tn?"#define TONE_MAPPING":"",t.toneMapping!==Tn?be.tonemapping_pars_fragment:"",t.toneMapping!==Tn?Fm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",be.encodings_pars_fragment,Im("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),a=Sa(a),a=_l(a,t),a=xl(a,t),s=Sa(s),s=_l(s,t),s=xl(s,t),a=vl(a),s=vl(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===Wo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=M+p+a,S=M+_+s,v=ml(i,35633,y),A=ml(i,35632,S);if(i.attachShader(d,v),i.attachShader(d,A),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),o.debug.checkShaderErrors){const w=i.getProgramInfoLog(d).trim(),L=i.getShaderInfoLog(v).trim(),U=i.getShaderInfoLog(A).trim();let $=!0,I=!0;if(i.getProgramParameter(d,35714)===!1){$=!1;const R=gl(i,v,"vertex"),B=gl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+w+`
`+R+`
`+B)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(L===""||U==="")&&(I=!1);I&&(this.diagnostics={runnable:$,programLog:w,vertexShader:{log:L,prefix:p},fragmentShader:{log:U,prefix:_}})}i.deleteShader(v),i.deleteShader(A);let P;this.getUniforms=function(){return P===void 0&&(P=new is(i,d)),P};let x;return this.getAttributes=function(){return x===void 0&&(x=zm(i,d)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=Lm++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=v,this.fragmentShader=A,this}let jm=0;class Zm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $m(e),t.set(e,n)),n}}class $m{constructor(e){this.id=jm++,this.code=e,this.usedTimes=0}}function Km(o,e,t,n,i,r,a){const s=new ac,l=new Zm,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x,w,L,U,$){const I=U.fog,R=$.geometry,B=x.isMeshStandardMaterial?U.environment:null,Z=(x.isMeshStandardMaterial?t:e).get(x.envMap||B),j=Z&&Z.mapping===gs?Z.image.height:null,G=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const ee=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,K=ee!==void 0?ee.length:0;let k=0;R.morphAttributes.position!==void 0&&(k=1),R.morphAttributes.normal!==void 0&&(k=2),R.morphAttributes.color!==void 0&&(k=3);let V,Q,J,re;if(G){const Fe=on[G];V=Fe.vertexShader,Q=Fe.fragmentShader}else V=x.vertexShader,Q=x.fragmentShader,l.update(x),J=l.getVertexShaderID(x),re=l.getFragmentShaderID(x);const q=o.getRenderTarget(),Ee=x.alphaTest>0,fe=x.clearcoat>0,_e=x.iridescence>0;return{isWebGL2:u,shaderID:G,shaderName:x.type,vertexShader:V,fragmentShader:Q,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:re,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:$.isInstancedMesh===!0,instancingColor:$.isInstancedMesh===!0&&$.instanceColor!==null,supportsVertexTextures:f,outputEncoding:q===null?o.outputEncoding:q.isXRRenderTarget===!0?q.texture.encoding:hi,map:!!x.map,matcap:!!x.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:j,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===xh,tangentSpaceNormalMap:x.normalMapType===ec,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Ge,clearcoat:fe,clearcoatMap:fe&&!!x.clearcoatMap,clearcoatRoughnessMap:fe&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:fe&&!!x.clearcoatNormalMap,iridescence:_e,iridescenceMap:_e&&!!x.iridescenceMap,iridescenceThicknessMap:_e&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Bi,alphaMap:!!x.alphaMap,alphaTest:Ee,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!R.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!I,useFog:x.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:$.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:k,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&L.length>0,shadowMapType:o.shadowMap.type,toneMapping:x.toneMapped?o.toneMapping:Tn,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ka,flipSided:x.side===Kt,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)w.push(L),w.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(_(w,x),M(w,x),w.push(o.outputEncoding)),w.push(x.customProgramCacheKey),w.join()}function _(x,w){x.push(w.precision),x.push(w.outputEncoding),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.combine),x.push(w.vertexUvs),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function M(x,w){s.disableAll(),w.isWebGL2&&s.enable(0),w.supportsVertexTextures&&s.enable(1),w.instancing&&s.enable(2),w.instancingColor&&s.enable(3),w.map&&s.enable(4),w.matcap&&s.enable(5),w.envMap&&s.enable(6),w.lightMap&&s.enable(7),w.aoMap&&s.enable(8),w.emissiveMap&&s.enable(9),w.bumpMap&&s.enable(10),w.normalMap&&s.enable(11),w.objectSpaceNormalMap&&s.enable(12),w.tangentSpaceNormalMap&&s.enable(13),w.clearcoat&&s.enable(14),w.clearcoatMap&&s.enable(15),w.clearcoatRoughnessMap&&s.enable(16),w.clearcoatNormalMap&&s.enable(17),w.iridescence&&s.enable(18),w.iridescenceMap&&s.enable(19),w.iridescenceThicknessMap&&s.enable(20),w.displacementMap&&s.enable(21),w.specularMap&&s.enable(22),w.roughnessMap&&s.enable(23),w.metalnessMap&&s.enable(24),w.gradientMap&&s.enable(25),w.alphaMap&&s.enable(26),w.alphaTest&&s.enable(27),w.vertexColors&&s.enable(28),w.vertexAlphas&&s.enable(29),w.vertexUvs&&s.enable(30),w.vertexTangents&&s.enable(31),w.uvsVertexOnly&&s.enable(32),x.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.skinning&&s.enable(4),w.morphTargets&&s.enable(5),w.morphNormals&&s.enable(6),w.morphColors&&s.enable(7),w.premultipliedAlpha&&s.enable(8),w.shadowMapEnabled&&s.enable(9),w.physicallyCorrectLights&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.specularIntensityMap&&s.enable(15),w.specularColorMap&&s.enable(16),w.transmission&&s.enable(17),w.transmissionMap&&s.enable(18),w.thicknessMap&&s.enable(19),w.sheen&&s.enable(20),w.sheenColorMap&&s.enable(21),w.sheenRoughnessMap&&s.enable(22),w.decodeVideoTexture&&s.enable(23),w.opaque&&s.enable(24),x.push(s.mask)}function y(x){const w=g[x.type];let L;if(w){const U=on[w];L=Oh.clone(U.uniforms)}else L=x.uniforms;return L}function S(x,w){let L;for(let U=0,$=c.length;U<$;U++){const I=c[U];if(I.cacheKey===w){L=I,++L.usedTimes;break}}return L===void 0&&(L=new Ym(o,w,x,r),c.push(L)),L}function v(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),x.destroy()}}function A(x){l.remove(x)}function P(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:y,acquireProgram:S,releaseProgram:v,releaseShaderCache:A,programs:c,dispose:P}}function Jm(){let o=new WeakMap;function e(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function t(r){o.delete(r)}function n(r,a,s){o.get(r)[a]=s}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Qm(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Ml(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Sl(){const o=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,m,g,d,p){let _=o[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:d,group:p},o[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=d,_.group=p),e++,_}function s(h,f,m,g,d,p){const _=a(h,f,m,g,d,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(h,f,m,g,d,p){const _=a(h,f,m,g,d,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||Qm),n.length>1&&n.sort(f||Ml),i.length>1&&i.sort(f||Ml)}function u(){for(let h=e,f=o.length;h<f;h++){const m=o[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:s,unshift:l,finish:u,sort:c}}function eg(){let o=new WeakMap;function e(n,i){const r=o.get(n);let a;return r===void 0?(a=new Sl,o.set(n,[a])):i>=r.length?(a=new Sl,r.push(a)):a=r[i],a}function t(){o=new WeakMap}return{get:e,dispose:t}}function tg(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new ke};break;case"SpotLight":t={position:new O,direction:new O,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new O,halfWidth:new O,halfHeight:new O};break}return o[e.id]=t,t}}}function ng(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let ig=0;function rg(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function sg(o,e){const t=new tg,n=ng(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new O);const r=new O,a=new Qe,s=new Qe;function l(u,h){let f=0,m=0,g=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let d=0,p=0,_=0,M=0,y=0,S=0,v=0,A=0,P=0,x=0;u.sort(rg);const w=h!==!0?Math.PI:1;for(let U=0,$=u.length;U<$;U++){const I=u[U],R=I.color,B=I.intensity,Z=I.distance,j=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=R.r*B*w,m+=R.g*B*w,g+=R.b*B*w;else if(I.isLightProbe)for(let G=0;G<9;G++)i.probe[G].addScaledVector(I.sh.coefficients[G],B);else if(I.isDirectionalLight){const G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity*w),I.castShadow){const ee=I.shadow,K=n.get(I);K.shadowBias=ee.bias,K.shadowNormalBias=ee.normalBias,K.shadowRadius=ee.radius,K.shadowMapSize=ee.mapSize,i.directionalShadow[d]=K,i.directionalShadowMap[d]=j,i.directionalShadowMatrix[d]=I.shadow.matrix,S++}i.directional[d]=G,d++}else if(I.isSpotLight){const G=t.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(R).multiplyScalar(B*w),G.distance=Z,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,i.spot[_]=G;const ee=I.shadow;if(I.map&&(i.spotLightMap[P]=I.map,P++,ee.updateMatrices(I),I.castShadow&&x++),i.spotLightMatrix[_]=ee.matrix,I.castShadow){const K=n.get(I);K.shadowBias=ee.bias,K.shadowNormalBias=ee.normalBias,K.shadowRadius=ee.radius,K.shadowMapSize=ee.mapSize,i.spotShadow[_]=K,i.spotShadowMap[_]=j,A++}_++}else if(I.isRectAreaLight){const G=t.get(I);G.color.copy(R).multiplyScalar(B),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),i.rectArea[M]=G,M++}else if(I.isPointLight){const G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity*w),G.distance=I.distance,G.decay=I.decay,I.castShadow){const ee=I.shadow,K=n.get(I);K.shadowBias=ee.bias,K.shadowNormalBias=ee.normalBias,K.shadowRadius=ee.radius,K.shadowMapSize=ee.mapSize,K.shadowCameraNear=ee.camera.near,K.shadowCameraFar=ee.camera.far,i.pointShadow[p]=K,i.pointShadowMap[p]=j,i.pointShadowMatrix[p]=I.shadow.matrix,v++}i.point[p]=G,p++}else if(I.isHemisphereLight){const G=t.get(I);G.skyColor.copy(I.color).multiplyScalar(B*w),G.groundColor.copy(I.groundColor).multiplyScalar(B*w),i.hemi[y]=G,y++}}M>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const L=i.hash;(L.directionalLength!==d||L.pointLength!==p||L.spotLength!==_||L.rectAreaLength!==M||L.hemiLength!==y||L.numDirectionalShadows!==S||L.numPointShadows!==v||L.numSpotShadows!==A||L.numSpotMaps!==P)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=M,i.point.length=p,i.hemi.length=y,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=A+P-x,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=x,L.directionalLength=d,L.pointLength=p,L.spotLength=_,L.rectAreaLength=M,L.hemiLength=y,L.numDirectionalShadows=S,L.numPointShadows=v,L.numSpotShadows=A,L.numSpotMaps=P,i.version=ig++)}function c(u,h){let f=0,m=0,g=0,d=0,p=0;const _=h.matrixWorldInverse;for(let M=0,y=u.length;M<y;M++){const S=u[M];if(S.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),f++}else if(S.isSpotLight){const v=i.spot[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),g++}else if(S.isRectAreaLight){const v=i.rectArea[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),s.identity(),a.copy(S.matrixWorld),a.premultiply(_),s.extractRotation(a),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),d++}else if(S.isPointLight){const v=i.point[m];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),m++}else if(S.isHemisphereLight){const v=i.hemi[p];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function bl(o,e){const t=new sg(o,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function s(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:s}}function ag(o,e){let t=new WeakMap;function n(r,a=0){const s=t.get(r);let l;return s===void 0?(l=new bl(o,e),t.set(r,[l])):a>=s.length?(l=new bl(o,e),s.push(l)):l=s[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class og extends Dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lg extends Dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ug=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hg(o,e,t){let n=new Va;const i=new Se,r=new Se,a=new We,s=new og({depthPacking:_h}),l=new lg,c={},u=t.maxTextureSize,h={0:Kt,1:ci,2:ka},f=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:cg,fragmentShader:ug}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new kn;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new bn(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jl,this.render=function(S,v,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const P=o.getRenderTarget(),x=o.getActiveCubeFace(),w=o.getActiveMipmapLevel(),L=o.state;L.setBlending(On),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let U=0,$=S.length;U<$;U++){const I=S[U],R=I.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const B=R.getFrameExtents();if(i.multiply(B),r.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/B.x),i.x=r.x*B.x,R.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/B.y),i.y=r.y*B.y,R.mapSize.y=r.y)),R.map===null){const j=this.type!==fr?{minFilter:Mt,magFilter:Mt}:{};R.map=new fi(i.x,i.y,j),R.map.texture.name=I.name+".shadowMap",R.camera.updateProjectionMatrix()}o.setRenderTarget(R.map),o.clear();const Z=R.getViewportCount();for(let j=0;j<Z;j++){const G=R.getViewport(j);a.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),L.viewport(a),R.updateMatrices(I,j),n=R.getFrustum(),y(v,A,R.camera,I,this.type)}R.isPointLightShadow!==!0&&this.type===fr&&_(R,A),R.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(P,x,w)};function _(S,v){const A=e.update(d);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new fi(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,o.setRenderTarget(S.mapPass),o.clear(),o.renderBufferDirect(v,null,A,f,d,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,o.setRenderTarget(S.map),o.clear(),o.renderBufferDirect(v,null,A,m,d,null)}function M(S,v,A,P,x,w){let L=null;const U=A.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(U!==void 0)L=U;else if(L=A.isPointLight===!0?l:s,o.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){const $=L.uuid,I=v.uuid;let R=c[$];R===void 0&&(R={},c[$]=R);let B=R[I];B===void 0&&(B=L.clone(),R[I]=B),L=B}return L.visible=v.visible,L.wireframe=v.wireframe,w===fr?L.side=v.shadowSide!==null?v.shadowSide:v.side:L.side=v.shadowSide!==null?v.shadowSide:h[v.side],L.alphaMap=v.alphaMap,L.alphaTest=v.alphaTest,L.map=v.map,L.clipShadows=v.clipShadows,L.clippingPlanes=v.clippingPlanes,L.clipIntersection=v.clipIntersection,L.displacementMap=v.displacementMap,L.displacementScale=v.displacementScale,L.displacementBias=v.displacementBias,L.wireframeLinewidth=v.wireframeLinewidth,L.linewidth=v.linewidth,A.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(A.matrixWorld),L.nearDistance=P,L.farDistance=x),L}function y(S,v,A,P,x){if(S.visible===!1)return;if(S.layers.test(v.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===fr)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,S.matrixWorld);const U=e.update(S),$=S.material;if(Array.isArray($)){const I=U.groups;for(let R=0,B=I.length;R<B;R++){const Z=I[R],j=$[Z.materialIndex];if(j&&j.visible){const G=M(S,j,P,A.near,A.far,x);o.renderBufferDirect(A,null,U,G,S,Z)}}}else if($.visible){const I=M(S,$,P,A.near,A.far,x);o.renderBufferDirect(A,null,U,I,S,null)}}const L=S.children;for(let U=0,$=L.length;U<$;U++)y(L[U],v,A,P,x)}}function fg(o,e,t){const n=t.isWebGL2;function i(){let D=!1;const H=new We;let te=null;const ce=new We(0,0,0,0);return{setMask:function(me){te!==me&&!D&&(o.colorMask(me,me,me,me),te=me)},setLocked:function(me){D=me},setClear:function(me,Oe,ot,ft,Vn){Vn===!0&&(me*=ft,Oe*=ft,ot*=ft),H.set(me,Oe,ot,ft),ce.equals(H)===!1&&(o.clearColor(me,Oe,ot,ft),ce.copy(H))},reset:function(){D=!1,te=null,ce.set(-1,0,0,0)}}}function r(){let D=!1,H=null,te=null,ce=null;return{setTest:function(me){me?Ee(2929):fe(2929)},setMask:function(me){H!==me&&!D&&(o.depthMask(me),H=me)},setFunc:function(me){if(te!==me){switch(me){case ku:o.depthFunc(512);break;case Gu:o.depthFunc(519);break;case Vu:o.depthFunc(513);break;case ma:o.depthFunc(515);break;case Wu:o.depthFunc(514);break;case Hu:o.depthFunc(518);break;case Xu:o.depthFunc(516);break;case qu:o.depthFunc(517);break;default:o.depthFunc(515)}te=me}},setLocked:function(me){D=me},setClear:function(me){ce!==me&&(o.clearDepth(me),ce=me)},reset:function(){D=!1,H=null,te=null,ce=null}}}function a(){let D=!1,H=null,te=null,ce=null,me=null,Oe=null,ot=null,ft=null,Vn=null;return{setTest:function(Ve){D||(Ve?Ee(2960):fe(2960))},setMask:function(Ve){H!==Ve&&!D&&(o.stencilMask(Ve),H=Ve)},setFunc:function(Ve,dn,Wt){(te!==Ve||ce!==dn||me!==Wt)&&(o.stencilFunc(Ve,dn,Wt),te=Ve,ce=dn,me=Wt)},setOp:function(Ve,dn,Wt){(Oe!==Ve||ot!==dn||ft!==Wt)&&(o.stencilOp(Ve,dn,Wt),Oe=Ve,ot=dn,ft=Wt)},setLocked:function(Ve){D=Ve},setClear:function(Ve){Vn!==Ve&&(o.clearStencil(Ve),Vn=Ve)},reset:function(){D=!1,H=null,te=null,ce=null,me=null,Oe=null,ot=null,ft=null,Vn=null}}}const s=new i,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,d=[],p=null,_=!1,M=null,y=null,S=null,v=null,A=null,P=null,x=null,w=!1,L=null,U=null,$=null,I=null,R=null;const B=o.getParameter(35661);let Z=!1,j=0;const G=o.getParameter(7938);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),Z=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),Z=j>=2);let ee=null,K={};const k=o.getParameter(3088),V=o.getParameter(2978),Q=new We().fromArray(k),J=new We().fromArray(V);function re(D,H,te){const ce=new Uint8Array(4),me=o.createTexture();o.bindTexture(D,me),o.texParameteri(D,10241,9728),o.texParameteri(D,10240,9728);for(let Oe=0;Oe<te;Oe++)o.texImage2D(H+Oe,0,6408,1,1,0,6408,5121,ce);return me}const q={};q[3553]=re(3553,3553,1),q[34067]=re(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ee(2929),l.setFunc(ma),tt(!1),_t(po),Ee(2884),at(On);function Ee(D){f[D]!==!0&&(o.enable(D),f[D]=!0)}function fe(D){f[D]!==!1&&(o.disable(D),f[D]=!1)}function _e(D,H){return m[D]!==H?(o.bindFramebuffer(D,H),m[D]=H,n&&(D===36009&&(m[36160]=H),D===36160&&(m[36009]=H)),!0):!1}function he(D,H){let te=d,ce=!1;if(D)if(te=g.get(H),te===void 0&&(te=[],g.set(H,te)),D.isWebGLMultipleRenderTargets){const me=D.texture;if(te.length!==me.length||te[0]!==36064){for(let Oe=0,ot=me.length;Oe<ot;Oe++)te[Oe]=36064+Oe;te.length=me.length,ce=!0}}else te[0]!==36064&&(te[0]=36064,ce=!0);else te[0]!==1029&&(te[0]=1029,ce=!0);ce&&(t.isWebGL2?o.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function Fe(D){return p!==D?(o.useProgram(D),p=D,!0):!1}const Me={[Oi]:32774,[Pu]:32778,[Lu]:32779};if(n)Me[xo]=32775,Me[vo]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Me[xo]=D.MIN_EXT,Me[vo]=D.MAX_EXT)}const xe={[Du]:0,[Ru]:1,[Iu]:768,[Zl]:770,[Bu]:776,[zu]:774,[Ou]:772,[Fu]:769,[$l]:771,[Uu]:775,[Nu]:773};function at(D,H,te,ce,me,Oe,ot,ft){if(D===On){_===!0&&(fe(3042),_=!1);return}if(_===!1&&(Ee(3042),_=!0),D!==Cu){if(D!==M||ft!==w){if((y!==Oi||A!==Oi)&&(o.blendEquation(32774),y=Oi,A=Oi),ft)switch(D){case Bi:o.blendFuncSeparate(1,771,1,771);break;case mo:o.blendFunc(1,1);break;case go:o.blendFuncSeparate(0,769,0,1);break;case _o:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Bi:o.blendFuncSeparate(770,771,1,771);break;case mo:o.blendFunc(770,1);break;case go:o.blendFuncSeparate(0,769,0,1);break;case _o:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,v=null,P=null,x=null,M=D,w=ft}return}me=me||H,Oe=Oe||te,ot=ot||ce,(H!==y||me!==A)&&(o.blendEquationSeparate(Me[H],Me[me]),y=H,A=me),(te!==S||ce!==v||Oe!==P||ot!==x)&&(o.blendFuncSeparate(xe[te],xe[ce],xe[Oe],xe[ot]),S=te,v=ce,P=Oe,x=ot),M=D,w=!1}function et(D,H){D.side===ka?fe(2884):Ee(2884);let te=D.side===Kt;H&&(te=!te),tt(te),D.blending===Bi&&D.transparent===!1?at(On):at(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),s.setMask(D.colorWrite);const ce=D.stencilWrite;c.setTest(ce),ce&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ne(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ee(32926):fe(32926)}function tt(D){L!==D&&(D?o.frontFace(2304):o.frontFace(2305),L=D)}function _t(D){D!==Tu?(Ee(2884),D!==U&&(D===po?o.cullFace(1029):D===Eu?o.cullFace(1028):o.cullFace(1032))):fe(2884),U=D}function Ye(D){D!==$&&(Z&&o.lineWidth(D),$=D)}function Ne(D,H,te){D?(Ee(32823),(I!==H||R!==te)&&(o.polygonOffset(H,te),I=H,R=te)):fe(32823)}function Vt(D){D?Ee(3089):fe(3089)}function St(D){D===void 0&&(D=33984+B-1),ee!==D&&(o.activeTexture(D),ee=D)}function E(D,H,te){te===void 0&&(ee===null?te=33984+B-1:te=ee);let ce=K[te];ce===void 0&&(ce={type:void 0,texture:void 0},K[te]=ce),(ce.type!==D||ce.texture!==H)&&(ee!==te&&(o.activeTexture(te),ee=te),o.bindTexture(D,H||q[D]),ce.type=D,ce.texture=H)}function b(){const D=K[ee];D!==void 0&&D.type!==void 0&&(o.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function W(){try{o.compressedTexImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{o.compressedTexImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{o.texSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{o.texSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function C(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function F(){try{o.texStorage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{o.texStorage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{o.texImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{o.texImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(D){Q.equals(D)===!1&&(o.scissor(D.x,D.y,D.z,D.w),Q.copy(D))}function de(D){J.equals(D)===!1&&(o.viewport(D.x,D.y,D.z,D.w),J.copy(D))}function Ae(D,H){let te=h.get(H);te===void 0&&(te=new WeakMap,h.set(H,te));let ce=te.get(D);ce===void 0&&(ce=o.getUniformBlockIndex(H,D.name),te.set(D,ce))}function Pe(D,H){const ce=h.get(H).get(D);u.get(H)!==ce&&(o.uniformBlockBinding(H,ce,D.__bindingPointIndex),u.set(H,ce))}function ze(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),f={},ee=null,K={},m={},g=new WeakMap,d=[],p=null,_=!1,M=null,y=null,S=null,v=null,A=null,P=null,x=null,w=!1,L=null,U=null,$=null,I=null,R=null,Q.set(0,0,o.canvas.width,o.canvas.height),J.set(0,0,o.canvas.width,o.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Ee,disable:fe,bindFramebuffer:_e,drawBuffers:he,useProgram:Fe,setBlending:at,setMaterial:et,setFlipSided:tt,setCullFace:_t,setLineWidth:Ye,setPolygonOffset:Ne,setScissorTest:Vt,activeTexture:St,bindTexture:E,unbindTexture:b,compressedTexImage2D:W,compressedTexImage3D:ne,texImage2D:ue,texImage3D:oe,updateUBOMapping:Ae,uniformBlockBinding:Pe,texStorage2D:F,texStorage3D:le,texSubImage2D:ie,texSubImage3D:ae,compressedTexSubImage2D:ve,compressedTexSubImage3D:C,scissor:pe,viewport:de,reset:ze}}function dg(o,e,t,n,i,r,a){const s=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(E,b){return _?new OffscreenCanvas(E,b):os("canvas")}function y(E,b,W,ne){let ie=1;if((E.width>ne||E.height>ne)&&(ie=ne/Math.max(E.width,E.height)),ie<1||b===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ae=b?Ma:Math.floor,ve=ae(ie*E.width),C=ae(ie*E.height);d===void 0&&(d=M(ve,C));const F=W?M(ve,C):d;return F.width=ve,F.height=C,F.getContext("2d").drawImage(E,0,0,ve,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ve+"x"+C+")."),F}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function S(E){return Xo(E.width)&&Xo(E.height)}function v(E){return s?!1:E.wrapS!==nn||E.wrapT!==nn||E.minFilter!==Mt&&E.minFilter!==Yt}function A(E,b){return E.generateMipmaps&&b&&E.minFilter!==Mt&&E.minFilter!==Yt}function P(E){o.generateMipmap(E)}function x(E,b,W,ne,ie=!1){if(s===!1)return b;if(E!==null){if(o[E]!==void 0)return o[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ae=b;return b===6403&&(W===5126&&(ae=33326),W===5131&&(ae=33325),W===5121&&(ae=33321)),b===33319&&(W===5126&&(ae=33328),W===5131&&(ae=33327),W===5121&&(ae=33323)),b===6408&&(W===5126&&(ae=34836),W===5131&&(ae=34842),W===5121&&(ae=ne===Ge&&ie===!1?35907:32856),W===32819&&(ae=32854),W===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function w(E,b,W){return A(E,W)===!0||E.isFramebufferTexture&&E.minFilter!==Mt&&E.minFilter!==Yt?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function L(E){return E===Mt||E===yo||E===Ts?9728:9729}function U(E){const b=E.target;b.removeEventListener("dispose",U),I(b),b.isVideoTexture&&g.delete(b)}function $(E){const b=E.target;b.removeEventListener("dispose",$),B(b)}function I(E){const b=n.get(E);if(b.__webglInit===void 0)return;const W=E.source,ne=p.get(W);if(ne){const ie=ne[b.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&R(E),Object.keys(ne).length===0&&p.delete(W)}n.remove(E)}function R(E){const b=n.get(E);o.deleteTexture(b.__webglTexture);const W=E.source,ne=p.get(W);delete ne[b.__cacheKey],a.memory.textures--}function B(E){const b=E.texture,W=n.get(E),ne=n.get(b);if(ne.__webglTexture!==void 0&&(o.deleteTexture(ne.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)o.deleteFramebuffer(W.__webglFramebuffer[ie]),W.__webglDepthbuffer&&o.deleteRenderbuffer(W.__webglDepthbuffer[ie]);else{if(o.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&o.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&o.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let ie=0;ie<W.__webglColorRenderbuffer.length;ie++)W.__webglColorRenderbuffer[ie]&&o.deleteRenderbuffer(W.__webglColorRenderbuffer[ie]);W.__webglDepthRenderbuffer&&o.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ie=0,ae=b.length;ie<ae;ie++){const ve=n.get(b[ie]);ve.__webglTexture&&(o.deleteTexture(ve.__webglTexture),a.memory.textures--),n.remove(b[ie])}n.remove(b),n.remove(E)}let Z=0;function j(){Z=0}function G(){const E=Z;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),Z+=1,E}function ee(E){const b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.encoding),b.join()}function K(E,b){const W=n.get(E);if(E.isVideoTexture&&Vt(E),E.isRenderTargetTexture===!1&&E.version>0&&W.__version!==E.version){const ne=E.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(W,E,b);return}}t.bindTexture(3553,W.__webglTexture,33984+b)}function k(E,b){const W=n.get(E);if(E.version>0&&W.__version!==E.version){fe(W,E,b);return}t.bindTexture(35866,W.__webglTexture,33984+b)}function V(E,b){const W=n.get(E);if(E.version>0&&W.__version!==E.version){fe(W,E,b);return}t.bindTexture(32879,W.__webglTexture,33984+b)}function Q(E,b){const W=n.get(E);if(E.version>0&&W.__version!==E.version){_e(W,E,b);return}t.bindTexture(34067,W.__webglTexture,33984+b)}const J={[xa]:10497,[nn]:33071,[va]:33648},re={[Mt]:9728,[yo]:9984,[Ts]:9986,[Yt]:9729,[eh]:9985,[vr]:9987};function q(E,b,W){if(W?(o.texParameteri(E,10242,J[b.wrapS]),o.texParameteri(E,10243,J[b.wrapT]),(E===32879||E===35866)&&o.texParameteri(E,32882,J[b.wrapR]),o.texParameteri(E,10240,re[b.magFilter]),o.texParameteri(E,10241,re[b.minFilter])):(o.texParameteri(E,10242,33071),o.texParameteri(E,10243,33071),(E===32879||E===35866)&&o.texParameteri(E,32882,33071),(b.wrapS!==nn||b.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(E,10240,L(b.magFilter)),o.texParameteri(E,10241,L(b.minFilter)),b.minFilter!==Mt&&b.minFilter!==Yt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Mt||b.minFilter!==Ts&&b.minFilter!==vr||b.type===ni&&e.has("OES_texture_float_linear")===!1||s===!1&&b.type===yr&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(o.texParameterf(E,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function Ee(E,b){let W=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",U));const ne=b.source;let ie=p.get(ne);ie===void 0&&(ie={},p.set(ne,ie));const ae=ee(b);if(ae!==E.__cacheKey){ie[ae]===void 0&&(ie[ae]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ie[ae].usedTimes++;const ve=ie[E.__cacheKey];ve!==void 0&&(ie[E.__cacheKey].usedTimes--,ve.usedTimes===0&&R(b)),E.__cacheKey=ae,E.__webglTexture=ie[ae].texture}return W}function fe(E,b,W){let ne=3553;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ne=35866),b.isData3DTexture&&(ne=32879);const ie=Ee(E,b),ae=b.source;t.bindTexture(ne,E.__webglTexture,33984+W);const ve=n.get(ae);if(ae.version!==ve.__version||ie===!0){t.activeTexture(33984+W),o.pixelStorei(37440,b.flipY),o.pixelStorei(37441,b.premultiplyAlpha),o.pixelStorei(3317,b.unpackAlignment),o.pixelStorei(37443,0);const C=v(b)&&S(b.image)===!1;let F=y(b.image,C,!1,u);F=St(b,F);const le=S(F)||s,ue=r.convert(b.format,b.encoding);let oe=r.convert(b.type),pe=x(b.internalFormat,ue,oe,b.encoding,b.isVideoTexture);q(ne,b,le);let de;const Ae=b.mipmaps,Pe=s&&b.isVideoTexture!==!0,ze=ve.__version===void 0||ie===!0,D=w(b,F,le);if(b.isDepthTexture)pe=6402,s?b.type===ni?pe=36012:b.type===ti?pe=33190:b.type===ki?pe=35056:pe=33189:b.type===ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ri&&pe===6402&&b.type!==Ql&&b.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=ti,oe=r.convert(b.type)),b.format===qi&&pe===6402&&(pe=34041,b.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=ki,oe=r.convert(b.type))),ze&&(Pe?t.texStorage2D(3553,1,pe,F.width,F.height):t.texImage2D(3553,0,pe,F.width,F.height,0,ue,oe,null));else if(b.isDataTexture)if(Ae.length>0&&le){Pe&&ze&&t.texStorage2D(3553,D,pe,Ae[0].width,Ae[0].height);for(let H=0,te=Ae.length;H<te;H++)de=Ae[H],Pe?t.texSubImage2D(3553,H,0,0,de.width,de.height,ue,oe,de.data):t.texImage2D(3553,H,pe,de.width,de.height,0,ue,oe,de.data);b.generateMipmaps=!1}else Pe?(ze&&t.texStorage2D(3553,D,pe,F.width,F.height),t.texSubImage2D(3553,0,0,0,F.width,F.height,ue,oe,F.data)):t.texImage2D(3553,0,pe,F.width,F.height,0,ue,oe,F.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Pe&&ze&&t.texStorage3D(35866,D,pe,Ae[0].width,Ae[0].height,F.depth);for(let H=0,te=Ae.length;H<te;H++)de=Ae[H],b.format!==rn?ue!==null?Pe?t.compressedTexSubImage3D(35866,H,0,0,0,de.width,de.height,F.depth,ue,de.data,0,0):t.compressedTexImage3D(35866,H,pe,de.width,de.height,F.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage3D(35866,H,0,0,0,de.width,de.height,F.depth,ue,oe,de.data):t.texImage3D(35866,H,pe,de.width,de.height,F.depth,0,ue,oe,de.data)}else{Pe&&ze&&t.texStorage2D(3553,D,pe,Ae[0].width,Ae[0].height);for(let H=0,te=Ae.length;H<te;H++)de=Ae[H],b.format!==rn?ue!==null?Pe?t.compressedTexSubImage2D(3553,H,0,0,de.width,de.height,ue,de.data):t.compressedTexImage2D(3553,H,pe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage2D(3553,H,0,0,de.width,de.height,ue,oe,de.data):t.texImage2D(3553,H,pe,de.width,de.height,0,ue,oe,de.data)}else if(b.isDataArrayTexture)Pe?(ze&&t.texStorage3D(35866,D,pe,F.width,F.height,F.depth),t.texSubImage3D(35866,0,0,0,0,F.width,F.height,F.depth,ue,oe,F.data)):t.texImage3D(35866,0,pe,F.width,F.height,F.depth,0,ue,oe,F.data);else if(b.isData3DTexture)Pe?(ze&&t.texStorage3D(32879,D,pe,F.width,F.height,F.depth),t.texSubImage3D(32879,0,0,0,0,F.width,F.height,F.depth,ue,oe,F.data)):t.texImage3D(32879,0,pe,F.width,F.height,F.depth,0,ue,oe,F.data);else if(b.isFramebufferTexture){if(ze)if(Pe)t.texStorage2D(3553,D,pe,F.width,F.height);else{let H=F.width,te=F.height;for(let ce=0;ce<D;ce++)t.texImage2D(3553,ce,pe,H,te,0,ue,oe,null),H>>=1,te>>=1}}else if(Ae.length>0&&le){Pe&&ze&&t.texStorage2D(3553,D,pe,Ae[0].width,Ae[0].height);for(let H=0,te=Ae.length;H<te;H++)de=Ae[H],Pe?t.texSubImage2D(3553,H,0,0,ue,oe,de):t.texImage2D(3553,H,pe,ue,oe,de);b.generateMipmaps=!1}else Pe?(ze&&t.texStorage2D(3553,D,pe,F.width,F.height),t.texSubImage2D(3553,0,0,0,ue,oe,F)):t.texImage2D(3553,0,pe,ue,oe,F);A(b,le)&&P(ne),ve.__version=ae.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function _e(E,b,W){if(b.image.length!==6)return;const ne=Ee(E,b),ie=b.source;t.bindTexture(34067,E.__webglTexture,33984+W);const ae=n.get(ie);if(ie.version!==ae.__version||ne===!0){t.activeTexture(33984+W),o.pixelStorei(37440,b.flipY),o.pixelStorei(37441,b.premultiplyAlpha),o.pixelStorei(3317,b.unpackAlignment),o.pixelStorei(37443,0);const ve=b.isCompressedTexture||b.image[0].isCompressedTexture,C=b.image[0]&&b.image[0].isDataTexture,F=[];for(let H=0;H<6;H++)!ve&&!C?F[H]=y(b.image[H],!1,!0,c):F[H]=C?b.image[H].image:b.image[H],F[H]=St(b,F[H]);const le=F[0],ue=S(le)||s,oe=r.convert(b.format,b.encoding),pe=r.convert(b.type),de=x(b.internalFormat,oe,pe,b.encoding),Ae=s&&b.isVideoTexture!==!0,Pe=ae.__version===void 0||ne===!0;let ze=w(b,le,ue);q(34067,b,ue);let D;if(ve){Ae&&Pe&&t.texStorage2D(34067,ze,de,le.width,le.height);for(let H=0;H<6;H++){D=F[H].mipmaps;for(let te=0;te<D.length;te++){const ce=D[te];b.format!==rn?oe!==null?Ae?t.compressedTexSubImage2D(34069+H,te,0,0,ce.width,ce.height,oe,ce.data):t.compressedTexImage2D(34069+H,te,de,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?t.texSubImage2D(34069+H,te,0,0,ce.width,ce.height,oe,pe,ce.data):t.texImage2D(34069+H,te,de,ce.width,ce.height,0,oe,pe,ce.data)}}}else{D=b.mipmaps,Ae&&Pe&&(D.length>0&&ze++,t.texStorage2D(34067,ze,de,F[0].width,F[0].height));for(let H=0;H<6;H++)if(C){Ae?t.texSubImage2D(34069+H,0,0,0,F[H].width,F[H].height,oe,pe,F[H].data):t.texImage2D(34069+H,0,de,F[H].width,F[H].height,0,oe,pe,F[H].data);for(let te=0;te<D.length;te++){const me=D[te].image[H].image;Ae?t.texSubImage2D(34069+H,te+1,0,0,me.width,me.height,oe,pe,me.data):t.texImage2D(34069+H,te+1,de,me.width,me.height,0,oe,pe,me.data)}}else{Ae?t.texSubImage2D(34069+H,0,0,0,oe,pe,F[H]):t.texImage2D(34069+H,0,de,oe,pe,F[H]);for(let te=0;te<D.length;te++){const ce=D[te];Ae?t.texSubImage2D(34069+H,te+1,0,0,oe,pe,ce.image[H]):t.texImage2D(34069+H,te+1,de,oe,pe,ce.image[H])}}}A(b,ue)&&P(34067),ae.__version=ie.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function he(E,b,W,ne,ie){const ae=r.convert(W.format,W.encoding),ve=r.convert(W.type),C=x(W.internalFormat,ae,ve,W.encoding);n.get(b).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,C,b.width,b.height,b.depth,0,ae,ve,null):t.texImage2D(ie,0,C,b.width,b.height,0,ae,ve,null)),t.bindFramebuffer(36160,E),Ne(b)?f.framebufferTexture2DMultisampleEXT(36160,ne,ie,n.get(W).__webglTexture,0,Ye(b)):(ie===3553||ie>=34069&&ie<=34074)&&o.framebufferTexture2D(36160,ne,ie,n.get(W).__webglTexture,0),t.bindFramebuffer(36160,null)}function Fe(E,b,W){if(o.bindRenderbuffer(36161,E),b.depthBuffer&&!b.stencilBuffer){let ne=33189;if(W||Ne(b)){const ie=b.depthTexture;ie&&ie.isDepthTexture&&(ie.type===ni?ne=36012:ie.type===ti&&(ne=33190));const ae=Ye(b);Ne(b)?f.renderbufferStorageMultisampleEXT(36161,ae,ne,b.width,b.height):o.renderbufferStorageMultisample(36161,ae,ne,b.width,b.height)}else o.renderbufferStorage(36161,ne,b.width,b.height);o.framebufferRenderbuffer(36160,36096,36161,E)}else if(b.depthBuffer&&b.stencilBuffer){const ne=Ye(b);W&&Ne(b)===!1?o.renderbufferStorageMultisample(36161,ne,35056,b.width,b.height):Ne(b)?f.renderbufferStorageMultisampleEXT(36161,ne,35056,b.width,b.height):o.renderbufferStorage(36161,34041,b.width,b.height),o.framebufferRenderbuffer(36160,33306,36161,E)}else{const ne=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ie=0;ie<ne.length;ie++){const ae=ne[ie],ve=r.convert(ae.format,ae.encoding),C=r.convert(ae.type),F=x(ae.internalFormat,ve,C,ae.encoding),le=Ye(b);W&&Ne(b)===!1?o.renderbufferStorageMultisample(36161,le,F,b.width,b.height):Ne(b)?f.renderbufferStorageMultisampleEXT(36161,le,F,b.width,b.height):o.renderbufferStorage(36161,F,b.width,b.height)}}o.bindRenderbuffer(36161,null)}function Me(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),K(b.depthTexture,0);const ne=n.get(b.depthTexture).__webglTexture,ie=Ye(b);if(b.depthTexture.format===ri)Ne(b)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,ie):o.framebufferTexture2D(36160,36096,3553,ne,0);else if(b.depthTexture.format===qi)Ne(b)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,ie):o.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function xe(E){const b=n.get(E),W=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Me(b.__webglFramebuffer,E)}else if(W){b.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,b.__webglFramebuffer[ne]),b.__webglDepthbuffer[ne]=o.createRenderbuffer(),Fe(b.__webglDepthbuffer[ne],E,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=o.createRenderbuffer(),Fe(b.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function at(E,b,W){const ne=n.get(E);b!==void 0&&he(ne.__webglFramebuffer,E,E.texture,36064,3553),W!==void 0&&xe(E)}function et(E){const b=E.texture,W=n.get(E),ne=n.get(b);E.addEventListener("dispose",$),E.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=o.createTexture()),ne.__version=b.version,a.memory.textures++);const ie=E.isWebGLCubeRenderTarget===!0,ae=E.isWebGLMultipleRenderTargets===!0,ve=S(E)||s;if(ie){W.__webglFramebuffer=[];for(let C=0;C<6;C++)W.__webglFramebuffer[C]=o.createFramebuffer()}else{if(W.__webglFramebuffer=o.createFramebuffer(),ae)if(i.drawBuffers){const C=E.texture;for(let F=0,le=C.length;F<le;F++){const ue=n.get(C[F]);ue.__webglTexture===void 0&&(ue.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&E.samples>0&&Ne(E)===!1){const C=ae?b:[b];W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let F=0;F<C.length;F++){const le=C[F];W.__webglColorRenderbuffer[F]=o.createRenderbuffer(),o.bindRenderbuffer(36161,W.__webglColorRenderbuffer[F]);const ue=r.convert(le.format,le.encoding),oe=r.convert(le.type),pe=x(le.internalFormat,ue,oe,le.encoding,E.isXRRenderTarget===!0),de=Ye(E);o.renderbufferStorageMultisample(36161,de,pe,E.width,E.height),o.framebufferRenderbuffer(36160,36064+F,36161,W.__webglColorRenderbuffer[F])}o.bindRenderbuffer(36161,null),E.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),Fe(W.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,ne.__webglTexture),q(34067,b,ve);for(let C=0;C<6;C++)he(W.__webglFramebuffer[C],E,b,36064,34069+C);A(b,ve)&&P(34067),t.unbindTexture()}else if(ae){const C=E.texture;for(let F=0,le=C.length;F<le;F++){const ue=C[F],oe=n.get(ue);t.bindTexture(3553,oe.__webglTexture),q(3553,ue,ve),he(W.__webglFramebuffer,E,ue,36064+F,3553),A(ue,ve)&&P(3553)}t.unbindTexture()}else{let C=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(s?C=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(C,ne.__webglTexture),q(C,b,ve),he(W.__webglFramebuffer,E,b,36064,C),A(b,ve)&&P(C),t.unbindTexture()}E.depthBuffer&&xe(E)}function tt(E){const b=S(E)||s,W=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ne=0,ie=W.length;ne<ie;ne++){const ae=W[ne];if(A(ae,b)){const ve=E.isWebGLCubeRenderTarget?34067:3553,C=n.get(ae).__webglTexture;t.bindTexture(ve,C),P(ve),t.unbindTexture()}}}function _t(E){if(s&&E.samples>0&&Ne(E)===!1){const b=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],W=E.width,ne=E.height;let ie=16384;const ae=[],ve=E.stencilBuffer?33306:36096,C=n.get(E),F=E.isWebGLMultipleRenderTargets===!0;if(F)for(let le=0;le<b.length;le++)t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+le,36161,null),t.bindFramebuffer(36160,C.__webglFramebuffer),o.framebufferTexture2D(36009,36064+le,3553,null,0);t.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,C.__webglFramebuffer);for(let le=0;le<b.length;le++){ae.push(36064+le),E.depthBuffer&&ae.push(ve);const ue=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(ue===!1&&(E.depthBuffer&&(ie|=256),E.stencilBuffer&&(ie|=1024)),F&&o.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[le]),ue===!0&&(o.invalidateFramebuffer(36008,[ve]),o.invalidateFramebuffer(36009,[ve])),F){const oe=n.get(b[le]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,oe,0)}o.blitFramebuffer(0,0,W,ne,0,0,W,ne,ie,9728),m&&o.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),F)for(let le=0;le<b.length;le++){t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+le,36161,C.__webglColorRenderbuffer[le]);const ue=n.get(b[le]).__webglTexture;t.bindFramebuffer(36160,C.__webglFramebuffer),o.framebufferTexture2D(36009,36064+le,3553,ue,0)}t.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function Ye(E){return Math.min(h,E.samples)}function Ne(E){const b=n.get(E);return s&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Vt(E){const b=a.render.frame;g.get(E)!==b&&(g.set(E,b),E.update())}function St(E,b){const W=E.encoding,ne=E.format,ie=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===ya||W!==hi&&(W===Ge?s===!1?e.has("EXT_sRGB")===!0&&ne===rn?(E.format=ya,E.minFilter=Yt,E.generateMipmaps=!1):b=ic.sRGBToLinear(b):(ne!==rn||ie!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),b}this.allocateTextureUnit=G,this.resetTextureUnits=j,this.setTexture2D=K,this.setTexture2DArray=k,this.setTexture3D=V,this.setTextureCube=Q,this.rebindTextures=at,this.setupRenderTarget=et,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Ne}function pg(o,e,t){const n=t.isWebGL2;function i(r,a=null){let s;if(r===ui)return 5121;if(r===rh)return 32819;if(r===sh)return 32820;if(r===th)return 5120;if(r===nh)return 5122;if(r===Ql)return 5123;if(r===ih)return 5124;if(r===ti)return 5125;if(r===ni)return 5126;if(r===yr)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===ah)return 6406;if(r===rn)return 6408;if(r===lh)return 6409;if(r===ch)return 6410;if(r===ri)return 6402;if(r===qi)return 34041;if(r===oh)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===ya)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===uh)return 6403;if(r===hh)return 36244;if(r===fh)return 33319;if(r===dh)return 33320;if(r===ph)return 36249;if(r===Es||r===As||r===Cs||r===Ps)if(a===Ge)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Es)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===As)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Es)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===As)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Cs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ps)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Mo||r===So||r===bo||r===wo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Mo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===So)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===mh)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===To||r===Eo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===To)return a===Ge?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Eo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ao||r===Co||r===Po||r===Lo||r===Do||r===Ro||r===Io||r===Fo||r===Oo||r===No||r===zo||r===Uo||r===Bo||r===ko)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Ao)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Co)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Po)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Lo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Do)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ro)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Io)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Fo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Oo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===No)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===zo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Uo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ko)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Go)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===Go)return a===Ge?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===ki?n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class mg extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class es extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gg={type:"move"};class na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,n),_=this._getHandJoint(c,d);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(gg)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new es;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class _g extends Ut{constructor(e,t,n,i,r,a,s,l,c,u){if(u=u!==void 0?u:ri,u!==ri&&u!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ri&&(n=ti),n===void 0&&u===qi&&(n=ki),super(null,i,r,a,s,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Mt,this.minFilter=l!==void 0?l:Mt,this.flipY=!1,this.generateMipmaps=!1}}class xg extends gi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,s="local-floor",l=null,c=null,u=null,h=null,f=null,m=null;const g=t.getContextAttributes();let d=null,p=null;const _=[],M=[],y=new Set,S=new Map,v=new Ot;v.layers.enable(1),v.viewport=new We;const A=new Ot;A.layers.enable(2),A.viewport=new We;const P=[v,A],x=new mg;x.layers.enable(1),x.layers.enable(2);let w=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let V=_[k];return V===void 0&&(V=new na,_[k]=V),V.getTargetRaySpace()},this.getControllerGrip=function(k){let V=_[k];return V===void 0&&(V=new na,_[k]=V),V.getGripSpace()},this.getHand=function(k){let V=_[k];return V===void 0&&(V=new na,_[k]=V),V.getHandSpace()};function U(k){const V=M.indexOf(k.inputSource);if(V===-1)return;const Q=_[V];Q!==void 0&&Q.dispatchEvent({type:k.type,data:k.inputSource})}function $(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",I);for(let k=0;k<_.length;k++){const V=M[k];V!==null&&(M[k]=null,_[k].disconnect(V))}w=null,L=null,e.setRenderTarget(d),f=null,h=null,u=null,i=null,p=null,K.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",$),i.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,V),i.updateRenderState({baseLayer:f}),p=new fi(f.framebufferWidth,f.framebufferHeight,{format:rn,type:ui,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let V=null,Q=null,J=null;g.depth&&(J=g.stencil?35056:33190,V=g.stencil?qi:ri,Q=g.stencil?ki:ti);const re={colorFormat:32856,depthFormat:J,scaleFactor:r};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(re),i.updateRenderState({layers:[h]}),p=new fi(h.textureWidth,h.textureHeight,{format:rn,type:ui,depthTexture:new _g(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const q=e.properties.get(p);q.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(s),K.setContext(i),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(k){for(let V=0;V<k.removed.length;V++){const Q=k.removed[V],J=M.indexOf(Q);J>=0&&(M[J]=null,_[J].disconnect(Q))}for(let V=0;V<k.added.length;V++){const Q=k.added[V];let J=M.indexOf(Q);if(J===-1){for(let q=0;q<_.length;q++)if(q>=M.length){M.push(Q),J=q;break}else if(M[q]===null){M[q]=Q,J=q;break}if(J===-1)break}const re=_[J];re&&re.connect(Q)}}const R=new O,B=new O;function Z(k,V,Q){R.setFromMatrixPosition(V.matrixWorld),B.setFromMatrixPosition(Q.matrixWorld);const J=R.distanceTo(B),re=V.projectionMatrix.elements,q=Q.projectionMatrix.elements,Ee=re[14]/(re[10]-1),fe=re[14]/(re[10]+1),_e=(re[9]+1)/re[5],he=(re[9]-1)/re[5],Fe=(re[8]-1)/re[0],Me=(q[8]+1)/q[0],xe=Ee*Fe,at=Ee*Me,et=J/(-Fe+Me),tt=et*-Fe;V.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(tt),k.translateZ(et),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const _t=Ee+et,Ye=fe+et,Ne=xe-tt,Vt=at+(J-tt),St=_e*fe/Ye*_t,E=he*fe/Ye*_t;k.projectionMatrix.makePerspective(Ne,Vt,St,E,_t,Ye)}function j(k,V){V===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(V.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;x.near=A.near=v.near=k.near,x.far=A.far=v.far=k.far,(w!==x.near||L!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,L=x.far);const V=k.parent,Q=x.cameras;j(x,V);for(let re=0;re<Q.length;re++)j(Q[re],V);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),k.matrix.copy(x.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const J=k.children;for(let re=0,q=J.length;re<q;re++)J[re].updateMatrixWorld(!0);Q.length===2?Z(x,v,A):x.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(k){h!==null&&(h.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.getPlanes=function(){return y};let G=null;function ee(k,V){if(c=V.getViewerPose(l||a),m=V,c!==null){const Q=c.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let J=!1;Q.length!==x.cameras.length&&(x.cameras.length=0,J=!0);for(let re=0;re<Q.length;re++){const q=Q[re];let Ee=null;if(f!==null)Ee=f.getViewport(q);else{const _e=u.getViewSubImage(h,q);Ee=_e.viewport,re===0&&(e.setRenderTargetTextures(p,_e.colorTexture,h.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(p))}let fe=P[re];fe===void 0&&(fe=new Ot,fe.layers.enable(re),fe.viewport=new We,P[re]=fe),fe.matrix.fromArray(q.transform.matrix),fe.projectionMatrix.fromArray(q.projectionMatrix),fe.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),re===0&&x.matrix.copy(fe.matrix),J===!0&&x.cameras.push(fe)}}for(let Q=0;Q<_.length;Q++){const J=M[Q],re=_[Q];J!==null&&re!==void 0&&re.update(J,V,l||a)}if(G&&G(k,V),V.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:V.detectedPlanes});let Q=null;for(const J of y)V.detectedPlanes.has(J)||(Q===null&&(Q=[]),Q.push(J));if(Q!==null)for(const J of Q)y.delete(J),S.delete(J),n.dispatchEvent({type:"planeremoved",data:J});for(const J of V.detectedPlanes)if(!y.has(J))y.add(J),S.set(J,V.lastChangedTime),n.dispatchEvent({type:"planeadded",data:J});else{const re=S.get(J);J.lastChangedTime>re&&(S.set(J,J.lastChangedTime),n.dispatchEvent({type:"planechanged",data:J}))}}m=null}const K=new dc;K.setAnimationLoop(ee),this.setAnimationLoop=function(k){G=k},this.dispose=function(){}}}function vg(o,e){function t(d,p){p.color.getRGB(d.fogColor.value,uc(o)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,_,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),u(d,p)):p.isMeshPhongMaterial?(i(d,p),c(d,p)):p.isMeshStandardMaterial?(i(d,p),h(d,p),p.isMeshPhysicalMaterial&&f(d,p,y)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),g(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(r(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?s(d,p,_,M):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Kt&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Kt&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const S=o.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*S}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap?M=p.clearcoatRoughnessMap:p.iridescenceMap?M=p.iridescenceMap:p.iridescenceThicknessMap?M=p.iridescenceThicknessMap:p.specularIntensityMap?M=p.specularIntensityMap:p.specularColorMap?M=p.specularColorMap:p.transmissionMap?M=p.transmissionMap:p.thicknessMap?M=p.thicknessMap:p.sheenColorMap?M=p.sheenColorMap:p.sheenRoughnessMap&&(M=p.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),d.uvTransform.value.copy(M.matrix));let y;p.aoMap?y=p.aoMap:p.lightMap&&(y=p.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),d.uv2Transform.value.copy(y.matrix))}function r(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function s(d,p,_,M){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*_,d.scale.value=M*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let y;p.map?y=p.map:p.alphaMap&&(y=p.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),d.uvTransform.value.copy(y.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,_){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Kt&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function yg(o,e,t,n){let i={},r={},a=[];const s=t.isWebGL2?o.getParameter(35375):0;function l(M,y){const S=y.program;n.uniformBlockBinding(M,S)}function c(M,y){let S=i[M.id];S===void 0&&(g(M),S=u(M),i[M.id]=S,M.addEventListener("dispose",p));const v=y.program;n.updateUBOMapping(M,v);const A=e.render.frame;r[M.id]!==A&&(f(M),r[M.id]=A)}function u(M){const y=h();M.__bindingPointIndex=y;const S=o.createBuffer(),v=M.__size,A=M.usage;return o.bindBuffer(35345,S),o.bufferData(35345,v,A),o.bindBuffer(35345,null),o.bindBufferBase(35345,y,S),S}function h(){for(let M=0;M<s;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const y=i[M.id],S=M.uniforms,v=M.__cache;o.bindBuffer(35345,y);for(let A=0,P=S.length;A<P;A++){const x=S[A];if(m(x,A,v)===!0){const w=x.__offset,L=Array.isArray(x.value)?x.value:[x.value];let U=0;for(let $=0;$<L.length;$++){const I=L[$],R=d(I);typeof I=="number"?(x.__data[0]=I,o.bufferSubData(35345,w+U,x.__data)):I.isMatrix3?(x.__data[0]=I.elements[0],x.__data[1]=I.elements[1],x.__data[2]=I.elements[2],x.__data[3]=I.elements[0],x.__data[4]=I.elements[3],x.__data[5]=I.elements[4],x.__data[6]=I.elements[5],x.__data[7]=I.elements[0],x.__data[8]=I.elements[6],x.__data[9]=I.elements[7],x.__data[10]=I.elements[8],x.__data[11]=I.elements[0]):(I.toArray(x.__data,U),U+=R.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,w,x.__data)}}o.bindBuffer(35345,null)}function m(M,y,S){const v=M.value;if(S[y]===void 0){if(typeof v=="number")S[y]=v;else{const A=Array.isArray(v)?v:[v],P=[];for(let x=0;x<A.length;x++)P.push(A[x].clone());S[y]=P}return!0}else if(typeof v=="number"){if(S[y]!==v)return S[y]=v,!0}else{const A=Array.isArray(S[y])?S[y]:[S[y]],P=Array.isArray(v)?v:[v];for(let x=0;x<A.length;x++){const w=A[x];if(w.equals(P[x])===!1)return w.copy(P[x]),!0}}return!1}function g(M){const y=M.uniforms;let S=0;const v=16;let A=0;for(let P=0,x=y.length;P<x;P++){const w=y[P],L={boundary:0,storage:0},U=Array.isArray(w.value)?w.value:[w.value];for(let $=0,I=U.length;$<I;$++){const R=U[$],B=d(R);L.boundary+=B.boundary,L.storage+=B.storage}if(w.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=S,P>0){A=S%v;const $=v-A;A!==0&&$-L.boundary<0&&(S+=v-A,w.__offset=S)}S+=L.storage}return A=S%v,A>0&&(S+=v-A),M.__size=S,M.__cache={},this}function d(M){const y={boundary:0,storage:0};return typeof M=="number"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function p(M){const y=M.target;y.removeEventListener("dispose",p);const S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),o.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function _(){for(const M in i)o.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:_}}function Mg(){const o=os("canvas");return o.style.display="block",o}function xc(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:Mg(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,s=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=hi,this.physicallyCorrectLights=!1,this.toneMapping=Tn,this.toneMappingExposure=1;const d=this;let p=!1,_=0,M=0,y=null,S=-1,v=null;const A=new We,P=new We;let x=null,w=e.width,L=e.height,U=1,$=null,I=null;const R=new We(0,0,w,L),B=new We(0,0,w,L);let Z=!1;const j=new Va;let G=!1,ee=!1,K=null;const k=new Qe,V=new Se,Q=new O,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return y===null?U:1}let q=t;function Ee(T,z){for(let X=0;X<T.length;X++){const N=T[X],Y=e.getContext(N,z);if(Y!==null)return Y}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ba}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",Ae,!1),q===null){const z=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&z.shift(),q=Ee(z,T),q===null)throw Ee(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let fe,_e,he,Fe,Me,xe,at,et,tt,_t,Ye,Ne,Vt,St,E,b,W,ne,ie,ae,ve,C,F,le;function ue(){fe=new Rp(q),_e=new Tp(q,fe,o),fe.init(_e),C=new pg(q,fe,_e),he=new fg(q,fe,_e),Fe=new Op,Me=new Jm,xe=new dg(q,fe,he,Me,_e,C,Fe),at=new Ap(d),et=new Dp(d),tt=new Vh(q,_e),F=new bp(q,fe,tt,_e),_t=new Ip(q,tt,Fe,F),Ye=new Bp(q,_t,tt,Fe),ie=new Up(q,_e,xe),b=new Ep(Me),Ne=new Km(d,at,et,fe,_e,F,b),Vt=new vg(d,Me),St=new eg,E=new ag(fe,_e),ne=new Sp(d,at,et,he,Ye,u,a),W=new hg(d,Ye,_e),le=new yg(q,Fe,_e,he),ae=new wp(q,fe,Fe,_e),ve=new Fp(q,fe,Fe,_e),Fe.programs=Ne.programs,d.capabilities=_e,d.extensions=fe,d.properties=Me,d.renderLists=St,d.shadowMap=W,d.state=he,d.info=Fe}ue();const oe=new xg(d,q);this.xr=oe,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const T=fe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=fe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(T){T!==void 0&&(U=T,this.setSize(w,L,!1))},this.getSize=function(T){return T.set(w,L)},this.setSize=function(T,z,X){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=T,L=z,e.width=Math.floor(T*U),e.height=Math.floor(z*U),X!==!1&&(e.style.width=T+"px",e.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(w*U,L*U).floor()},this.setDrawingBufferSize=function(T,z,X){w=T,L=z,U=X,e.width=Math.floor(T*X),e.height=Math.floor(z*X),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(R)},this.setViewport=function(T,z,X,N){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,z,X,N),he.viewport(A.copy(R).multiplyScalar(U).floor())},this.getScissor=function(T){return T.copy(B)},this.setScissor=function(T,z,X,N){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,z,X,N),he.scissor(P.copy(B).multiplyScalar(U).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(T){he.setScissorTest(Z=T)},this.setOpaqueSort=function(T){$=T},this.setTransparentSort=function(T){I=T},this.getClearColor=function(T){return T.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(T=!0,z=!0,X=!0){let N=0;T&&(N|=16384),z&&(N|=256),X&&(N|=1024),q.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Ae,!1),St.dispose(),E.dispose(),Me.dispose(),at.dispose(),et.dispose(),Ye.dispose(),F.dispose(),le.dispose(),Ne.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ce),oe.removeEventListener("sessionend",me),K&&(K.dispose(),K=null),Oe.stop()};function pe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=Fe.autoReset,z=W.enabled,X=W.autoUpdate,N=W.needsUpdate,Y=W.type;ue(),Fe.autoReset=T,W.enabled=z,W.autoUpdate=X,W.needsUpdate=N,W.type=Y}function Ae(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Pe(T){const z=T.target;z.removeEventListener("dispose",Pe),ze(z)}function ze(T){D(T),Me.remove(T)}function D(T){const z=Me.get(T).programs;z!==void 0&&(z.forEach(function(X){Ne.releaseProgram(X)}),T.isShaderMaterial&&Ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,X,N,Y,ge){z===null&&(z=J);const ye=Y.isMesh&&Y.matrixWorld.determinant()<0,we=xu(T,z,X,N,Y);he.setMaterial(N,ye);let Te=X.index,Ie=1;N.wireframe===!0&&(Te=_t.getWireframeAttribute(X),Ie=2);const Le=X.drawRange,De=X.attributes.position;let Ze=Le.start*Ie,Pt=(Le.start+Le.count)*Ie;ge!==null&&(Ze=Math.max(Ze,ge.start*Ie),Pt=Math.min(Pt,(ge.start+ge.count)*Ie)),Te!==null?(Ze=Math.max(Ze,0),Pt=Math.min(Pt,Te.count)):De!=null&&(Ze=Math.max(Ze,0),Pt=Math.min(Pt,De.count));const pn=Pt-Ze;if(pn<0||pn===1/0)return;F.setup(Y,N,we,X,Te);let Wn,$e=ae;if(Te!==null&&(Wn=tt.get(Te),$e=ve,$e.setIndex(Wn)),Y.isMesh)N.wireframe===!0?(he.setLineWidth(N.wireframeLinewidth*re()),$e.setMode(1)):$e.setMode(4);else if(Y.isLine){let Re=N.linewidth;Re===void 0&&(Re=1),he.setLineWidth(Re*re()),Y.isLineSegments?$e.setMode(1):Y.isLineLoop?$e.setMode(2):$e.setMode(3)}else Y.isPoints?$e.setMode(0):Y.isSprite&&$e.setMode(4);if(Y.isInstancedMesh)$e.renderInstances(Ze,pn,Y.count);else if(X.isInstancedBufferGeometry){const Re=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ms=Math.min(X.instanceCount,Re);$e.renderInstances(Ze,pn,Ms)}else $e.render(Ze,pn)},this.compile=function(T,z){function X(N,Y,ge){N.transparent===!0&&N.side===Fr?(N.side=Kt,N.needsUpdate=!0,Wt(N,Y,ge),N.side=ci,N.needsUpdate=!0,Wt(N,Y,ge),N.side=Fr):Wt(N,Y,ge)}f=E.get(T),f.init(),g.push(f),T.traverseVisible(function(N){N.isLight&&N.layers.test(z.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights(d.physicallyCorrectLights),T.traverse(function(N){const Y=N.material;if(Y)if(Array.isArray(Y))for(let ge=0;ge<Y.length;ge++){const ye=Y[ge];X(ye,T,N)}else X(Y,T,N)}),g.pop(),f=null};let H=null;function te(T){H&&H(T)}function ce(){Oe.stop()}function me(){Oe.start()}const Oe=new dc;Oe.setAnimationLoop(te),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(T){H=T,oe.setAnimationLoop(T),T===null?Oe.stop():Oe.start()},oe.addEventListener("sessionstart",ce),oe.addEventListener("sessionend",me),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(z),z=oe.getCamera()),T.isScene===!0&&T.onBeforeRender(d,T,z,y),f=E.get(T,g.length),f.init(),g.push(f),k.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),j.setFromProjectionMatrix(k),ee=this.localClippingEnabled,G=b.init(this.clippingPlanes,ee,z),h=St.get(T,m.length),h.init(),m.push(h),ot(T,z,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort($,I),G===!0&&b.beginShadows();const X=f.state.shadowsArray;if(W.render(X,T,z),G===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(h,T),f.setupLights(d.physicallyCorrectLights),z.isArrayCamera){const N=z.cameras;for(let Y=0,ge=N.length;Y<ge;Y++){const ye=N[Y];ft(h,T,ye,ye.viewport)}}else ft(h,T,z);y!==null&&(xe.updateMultisampleRenderTarget(y),xe.updateRenderTargetMipmap(y)),T.isScene===!0&&T.onAfterRender(d,T,z),F.resetDefaultState(),S=-1,v=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function ot(T,z,X,N){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||j.intersectsSprite(T)){N&&Q.setFromMatrixPosition(T.matrixWorld).applyMatrix4(k);const ye=Ye.update(T),we=T.material;we.visible&&h.push(T,ye,we,X,Q.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Fe.render.frame&&(T.skeleton.update(),T.skeleton.frame=Fe.render.frame),!T.frustumCulled||j.intersectsObject(T))){N&&Q.setFromMatrixPosition(T.matrixWorld).applyMatrix4(k);const ye=Ye.update(T),we=T.material;if(Array.isArray(we)){const Te=ye.groups;for(let Ie=0,Le=Te.length;Ie<Le;Ie++){const De=Te[Ie],Ze=we[De.materialIndex];Ze&&Ze.visible&&h.push(T,ye,Ze,X,Q.z,De)}}else we.visible&&h.push(T,ye,we,X,Q.z,null)}}const ge=T.children;for(let ye=0,we=ge.length;ye<we;ye++)ot(ge[ye],z,X,N)}function ft(T,z,X,N){const Y=T.opaque,ge=T.transmissive,ye=T.transparent;f.setupLightsView(X),ge.length>0&&Vn(Y,z,X),N&&he.viewport(A.copy(N)),Y.length>0&&Ve(Y,z,X),ge.length>0&&Ve(ge,z,X),ye.length>0&&Ve(ye,z,X),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Vn(T,z,X){const N=_e.isWebGL2;K===null&&(K=new fi(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?yr:ui,minFilter:vr,samples:N&&r===!0?4:0})),d.getDrawingBufferSize(V),N?K.setSize(V.x,V.y):K.setSize(Ma(V.x),Ma(V.y));const Y=d.getRenderTarget();d.setRenderTarget(K),d.clear();const ge=d.toneMapping;d.toneMapping=Tn,Ve(T,z,X),d.toneMapping=ge,xe.updateMultisampleRenderTarget(K),xe.updateRenderTargetMipmap(K),d.setRenderTarget(Y)}function Ve(T,z,X){const N=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,ge=T.length;Y<ge;Y++){const ye=T[Y],we=ye.object,Te=ye.geometry,Ie=N===null?ye.material:N,Le=ye.group;we.layers.test(X.layers)&&dn(we,z,X,Te,Ie,Le)}}function dn(T,z,X,N,Y,ge){T.onBeforeRender(d,z,X,N,Y,ge),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(d,z,X,N,T,ge),Y.transparent===!0&&Y.side===Fr?(Y.side=Kt,Y.needsUpdate=!0,d.renderBufferDirect(X,z,N,Y,T,ge),Y.side=ci,Y.needsUpdate=!0,d.renderBufferDirect(X,z,N,Y,T,ge),Y.side=Fr):d.renderBufferDirect(X,z,N,Y,T,ge),T.onAfterRender(d,z,X,N,Y,ge)}function Wt(T,z,X){z.isScene!==!0&&(z=J);const N=Me.get(T),Y=f.state.lights,ge=f.state.shadowsArray,ye=Y.state.version,we=Ne.getParameters(T,Y.state,ge,z,X),Te=Ne.getProgramCacheKey(we);let Ie=N.programs;N.environment=T.isMeshStandardMaterial?z.environment:null,N.fog=z.fog,N.envMap=(T.isMeshStandardMaterial?et:at).get(T.envMap||N.environment),Ie===void 0&&(T.addEventListener("dispose",Pe),Ie=new Map,N.programs=Ie);let Le=Ie.get(Te);if(Le!==void 0){if(N.currentProgram===Le&&N.lightsStateVersion===ye)return lo(T,we),Le}else we.uniforms=Ne.getUniforms(T),T.onBuild(X,we,d),T.onBeforeCompile(we,d),Le=Ne.acquireProgram(we,Te),Ie.set(Te,Le),N.uniforms=we.uniforms;const De=N.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=b.uniform),lo(T,we),N.needsLights=yu(T),N.lightsStateVersion=ye,N.needsLights&&(De.ambientLightColor.value=Y.state.ambient,De.lightProbe.value=Y.state.probe,De.directionalLights.value=Y.state.directional,De.directionalLightShadows.value=Y.state.directionalShadow,De.spotLights.value=Y.state.spot,De.spotLightShadows.value=Y.state.spotShadow,De.rectAreaLights.value=Y.state.rectArea,De.ltc_1.value=Y.state.rectAreaLTC1,De.ltc_2.value=Y.state.rectAreaLTC2,De.pointLights.value=Y.state.point,De.pointLightShadows.value=Y.state.pointShadow,De.hemisphereLights.value=Y.state.hemi,De.directionalShadowMap.value=Y.state.directionalShadowMap,De.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,De.spotShadowMap.value=Y.state.spotShadowMap,De.spotLightMatrix.value=Y.state.spotLightMatrix,De.spotLightMap.value=Y.state.spotLightMap,De.pointShadowMap.value=Y.state.pointShadowMap,De.pointShadowMatrix.value=Y.state.pointShadowMatrix);const Ze=Le.getUniforms(),Pt=is.seqWithValue(Ze.seq,De);return N.currentProgram=Le,N.uniformsList=Pt,Le}function lo(T,z){const X=Me.get(T);X.outputEncoding=z.outputEncoding,X.instancing=z.instancing,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function xu(T,z,X,N,Y){z.isScene!==!0&&(z=J),xe.resetTextureUnits();const ge=z.fog,ye=N.isMeshStandardMaterial?z.environment:null,we=y===null?d.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:hi,Te=(N.isMeshStandardMaterial?et:at).get(N.envMap||ye),Ie=N.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Le=!!N.normalMap&&!!X.attributes.tangent,De=!!X.morphAttributes.position,Ze=!!X.morphAttributes.normal,Pt=!!X.morphAttributes.color,pn=N.toneMapped?d.toneMapping:Tn,Wn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,$e=Wn!==void 0?Wn.length:0,Re=Me.get(N),Ms=f.state.lights;if(G===!0&&(ee===!0||T!==v)){const Lt=T===v&&N.id===S;b.setState(N,T,Lt)}let lt=!1;N.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Ms.state.version||Re.outputEncoding!==we||Y.isInstancedMesh&&Re.instancing===!1||!Y.isInstancedMesh&&Re.instancing===!0||Y.isSkinnedMesh&&Re.skinning===!1||!Y.isSkinnedMesh&&Re.skinning===!0||Re.envMap!==Te||N.fog===!0&&Re.fog!==ge||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==b.numPlanes||Re.numIntersection!==b.numIntersection)||Re.vertexAlphas!==Ie||Re.vertexTangents!==Le||Re.morphTargets!==De||Re.morphNormals!==Ze||Re.morphColors!==Pt||Re.toneMapping!==pn||_e.isWebGL2===!0&&Re.morphTargetsCount!==$e)&&(lt=!0):(lt=!0,Re.__version=N.version);let Hn=Re.currentProgram;lt===!0&&(Hn=Wt(N,z,Y));let co=!1,nr=!1,Ss=!1;const xt=Hn.getUniforms(),Xn=Re.uniforms;if(he.useProgram(Hn.program)&&(co=!0,nr=!0,Ss=!0),N.id!==S&&(S=N.id,nr=!0),co||v!==T){if(xt.setValue(q,"projectionMatrix",T.projectionMatrix),_e.logarithmicDepthBuffer&&xt.setValue(q,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),v!==T&&(v=T,nr=!0,Ss=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Lt=xt.map.cameraPosition;Lt!==void 0&&Lt.setValue(q,Q.setFromMatrixPosition(T.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&xt.setValue(q,"isOrthographic",T.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||Y.isSkinnedMesh)&&xt.setValue(q,"viewMatrix",T.matrixWorldInverse)}if(Y.isSkinnedMesh){xt.setOptional(q,Y,"bindMatrix"),xt.setOptional(q,Y,"bindMatrixInverse");const Lt=Y.skeleton;Lt&&(_e.floatVertexTextures?(Lt.boneTexture===null&&Lt.computeBoneTexture(),xt.setValue(q,"boneTexture",Lt.boneTexture,xe),xt.setValue(q,"boneTextureSize",Lt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const bs=X.morphAttributes;if((bs.position!==void 0||bs.normal!==void 0||bs.color!==void 0&&_e.isWebGL2===!0)&&ie.update(Y,X,N,Hn),(nr||Re.receiveShadow!==Y.receiveShadow)&&(Re.receiveShadow=Y.receiveShadow,xt.setValue(q,"receiveShadow",Y.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Xn.envMap.value=Te,Xn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),nr&&(xt.setValue(q,"toneMappingExposure",d.toneMappingExposure),Re.needsLights&&vu(Xn,Ss),ge&&N.fog===!0&&Vt.refreshFogUniforms(Xn,ge),Vt.refreshMaterialUniforms(Xn,N,U,L,K),is.upload(q,Re.uniformsList,Xn,xe)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(is.upload(q,Re.uniformsList,Xn,xe),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&xt.setValue(q,"center",Y.center),xt.setValue(q,"modelViewMatrix",Y.modelViewMatrix),xt.setValue(q,"normalMatrix",Y.normalMatrix),xt.setValue(q,"modelMatrix",Y.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Lt=N.uniformsGroups;for(let ws=0,Mu=Lt.length;ws<Mu;ws++)if(_e.isWebGL2){const uo=Lt[ws];le.update(uo,Hn),le.bind(uo,Hn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hn}function vu(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function yu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(T,z,X){Me.get(T.texture).__webglTexture=z,Me.get(T.depthTexture).__webglTexture=X;const N=Me.get(T);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=X===void 0,N.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,z){const X=Me.get(T);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,X=0){y=T,_=z,M=X;let N=!0,Y=null,ge=!1,ye=!1;if(T){const Te=Me.get(T);Te.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),N=!1):Te.__webglFramebuffer===void 0?xe.setupRenderTarget(T):Te.__hasExternalTextures&&xe.rebindTextures(T,Me.get(T.texture).__webglTexture,Me.get(T.depthTexture).__webglTexture);const Ie=T.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ye=!0);const Le=Me.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Y=Le[z],ge=!0):_e.isWebGL2&&T.samples>0&&xe.useMultisampledRTT(T)===!1?Y=Me.get(T).__webglMultisampledFramebuffer:Y=Le,A.copy(T.viewport),P.copy(T.scissor),x=T.scissorTest}else A.copy(R).multiplyScalar(U).floor(),P.copy(B).multiplyScalar(U).floor(),x=Z;if(he.bindFramebuffer(36160,Y)&&_e.drawBuffers&&N&&he.drawBuffers(T,Y),he.viewport(A),he.scissor(P),he.setScissorTest(x),ge){const Te=Me.get(T.texture);q.framebufferTexture2D(36160,36064,34069+z,Te.__webglTexture,X)}else if(ye){const Te=Me.get(T.texture),Ie=z||0;q.framebufferTextureLayer(36160,36064,Te.__webglTexture,X||0,Ie)}S=-1},this.readRenderTargetPixels=function(T,z,X,N,Y,ge,ye){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){he.bindFramebuffer(36160,we);try{const Te=T.texture,Ie=Te.format,Le=Te.type;if(Ie!==rn&&C.convert(Ie)!==q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Le===yr&&(fe.has("EXT_color_buffer_half_float")||_e.isWebGL2&&fe.has("EXT_color_buffer_float"));if(Le!==ui&&C.convert(Le)!==q.getParameter(35738)&&!(Le===ni&&(_e.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-N&&X>=0&&X<=T.height-Y&&q.readPixels(z,X,N,Y,C.convert(Ie),C.convert(Le),ge)}finally{const Te=y!==null?Me.get(y).__webglFramebuffer:null;he.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(T,z,X=0){const N=Math.pow(2,-X),Y=Math.floor(z.image.width*N),ge=Math.floor(z.image.height*N);xe.setTexture2D(z,0),q.copyTexSubImage2D(3553,X,0,0,T.x,T.y,Y,ge),he.unbindTexture()},this.copyTextureToTexture=function(T,z,X,N=0){const Y=z.image.width,ge=z.image.height,ye=C.convert(X.format),we=C.convert(X.type);xe.setTexture2D(X,0),q.pixelStorei(37440,X.flipY),q.pixelStorei(37441,X.premultiplyAlpha),q.pixelStorei(3317,X.unpackAlignment),z.isDataTexture?q.texSubImage2D(3553,N,T.x,T.y,Y,ge,ye,we,z.image.data):z.isCompressedTexture?q.compressedTexSubImage2D(3553,N,T.x,T.y,z.mipmaps[0].width,z.mipmaps[0].height,ye,z.mipmaps[0].data):q.texSubImage2D(3553,N,T.x,T.y,ye,we,z.image),N===0&&X.generateMipmaps&&q.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(T,z,X,N,Y=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=T.max.x-T.min.x+1,ye=T.max.y-T.min.y+1,we=T.max.z-T.min.z+1,Te=C.convert(N.format),Ie=C.convert(N.type);let Le;if(N.isData3DTexture)xe.setTexture3D(N,0),Le=32879;else if(N.isDataArrayTexture)xe.setTexture2DArray(N,0),Le=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(37440,N.flipY),q.pixelStorei(37441,N.premultiplyAlpha),q.pixelStorei(3317,N.unpackAlignment);const De=q.getParameter(3314),Ze=q.getParameter(32878),Pt=q.getParameter(3316),pn=q.getParameter(3315),Wn=q.getParameter(32877),$e=X.isCompressedTexture?X.mipmaps[0]:X.image;q.pixelStorei(3314,$e.width),q.pixelStorei(32878,$e.height),q.pixelStorei(3316,T.min.x),q.pixelStorei(3315,T.min.y),q.pixelStorei(32877,T.min.z),X.isDataTexture||X.isData3DTexture?q.texSubImage3D(Le,Y,z.x,z.y,z.z,ge,ye,we,Te,Ie,$e.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Le,Y,z.x,z.y,z.z,ge,ye,we,Te,$e.data)):q.texSubImage3D(Le,Y,z.x,z.y,z.z,ge,ye,we,Te,Ie,$e),q.pixelStorei(3314,De),q.pixelStorei(32878,Ze),q.pixelStorei(3316,Pt),q.pixelStorei(3315,pn),q.pixelStorei(32877,Wn),Y===0&&N.generateMipmaps&&q.generateMipmap(Le),he.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?xe.setTextureCube(T,0):T.isData3DTexture?xe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?xe.setTexture2DArray(T,0):xe.setTexture2D(T,0),he.unbindTexture()},this.resetState=function(){_=0,M=0,y=null,he.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Sg extends xc{}Sg.prototype.isWebGL1Renderer=!0;class bg extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Xa extends kn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:s},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+s,Math.PI);let c=0;const u=[],h=new O,f=new O,m=[],g=[],d=[],p=[];for(let _=0;_<=n;_++){const M=[],y=_/n;let S=0;_==0&&a==0?S=.5/t:_==n&&l==Math.PI&&(S=-.5/t);for(let v=0;v<=t;v++){const A=v/t;h.x=-e*Math.cos(i+A*r)*Math.sin(a+y*s),h.y=e*Math.cos(a+y*s),h.z=e*Math.sin(i+A*r)*Math.sin(a+y*s),g.push(h.x,h.y,h.z),f.copy(h).normalize(),d.push(f.x,f.y,f.z),p.push(A+S,1-y),M.push(c++)}u.push(M)}for(let _=0;_<n;_++)for(let M=0;M<t;M++){const y=u[_][M+1],S=u[_][M],v=u[_+1][M],A=u[_+1][M+1];(_!==0||a>0)&&m.push(y,S,A),(_!==n-1||l<Math.PI)&&m.push(S,v,A)}this.setIndex(m),this.setAttribute("position",new un(g,3)),this.setAttribute("normal",new un(d,3)),this.setAttribute("uv",new un(p,2))}static fromJSON(e){return new Xa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wg extends Dr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ec,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tg extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ia=new Qe,wl=new O,Tl=new O;class Eg{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Va,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;wl.setFromMatrixPosition(e.matrixWorld),t.position.copy(wl),Tl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tl),t.updateMatrixWorld(),ia.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ia),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const El=new Qe,ur=new O,ra=new O;class Ag extends Eg{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ur.setFromMatrixPosition(e.matrixWorld),n.position.copy(ur),ra.copy(n.position),ra.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ra),n.updateMatrixWorld(),i.makeTranslation(-ur.x,-ur.y,-ur.z),El.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(El)}}class Cg extends Tg{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ag}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Al{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ba);const Cl={type:"change"},sa={type:"start"},Pl={type:"end"};class Pg extends gi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xi.ROTATE,MIDDLE:xi.DOLLY,RIGHT:xi.PAN},this.touches={ONE:vi.ROTATE,TWO:vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",St),this._domElementKeyEvents=C},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Cl),n.update(),r=i.NONE},this.update=function(){const C=new O,F=new di().setFromUnitVectors(e.up,new O(0,1,0)),le=F.clone().invert(),ue=new O,oe=new di,pe=2*Math.PI;return function(){const Ae=n.object.position;C.copy(Ae).sub(n.target),C.applyQuaternion(F),s.setFromVector3(C),n.autoRotate&&r===i.NONE&&w(P()),n.enableDamping?(s.theta+=l.theta*n.dampingFactor,s.phi+=l.phi*n.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let Pe=n.minAzimuthAngle,ze=n.maxAzimuthAngle;return isFinite(Pe)&&isFinite(ze)&&(Pe<-Math.PI?Pe+=pe:Pe>Math.PI&&(Pe-=pe),ze<-Math.PI?ze+=pe:ze>Math.PI&&(ze-=pe),Pe<=ze?s.theta=Math.max(Pe,Math.min(ze,s.theta)):s.theta=s.theta>(Pe+ze)/2?Math.max(Pe,s.theta):Math.min(ze,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=c,s.radius=Math.max(n.minDistance,Math.min(n.maxDistance,s.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),C.setFromSpherical(s),C.applyQuaternion(le),Ae.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||ue.distanceToSquared(n.object.position)>a||8*(1-oe.dot(n.object.quaternion))>a?(n.dispatchEvent(Cl),ue.copy(n.object.position),oe.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",W),n.domElement.removeEventListener("pointerdown",at),n.domElement.removeEventListener("pointercancel",_t),n.domElement.removeEventListener("wheel",Vt),n.domElement.removeEventListener("pointermove",et),n.domElement.removeEventListener("pointerup",tt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",St)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,s=new Al,l=new Al;let c=1;const u=new O;let h=!1;const f=new Se,m=new Se,g=new Se,d=new Se,p=new Se,_=new Se,M=new Se,y=new Se,S=new Se,v=[],A={};function P(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function w(C){l.theta-=C}function L(C){l.phi-=C}const U=function(){const C=new O;return function(le,ue){C.setFromMatrixColumn(ue,0),C.multiplyScalar(-le),u.add(C)}}(),$=function(){const C=new O;return function(le,ue){n.screenSpacePanning===!0?C.setFromMatrixColumn(ue,1):(C.setFromMatrixColumn(ue,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(le),u.add(C)}}(),I=function(){const C=new O;return function(le,ue){const oe=n.domElement;if(n.object.isPerspectiveCamera){const pe=n.object.position;C.copy(pe).sub(n.target);let de=C.length();de*=Math.tan(n.object.fov/2*Math.PI/180),U(2*le*de/oe.clientHeight,n.object.matrix),$(2*ue*de/oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(le*(n.object.right-n.object.left)/n.object.zoom/oe.clientWidth,n.object.matrix),$(ue*(n.object.top-n.object.bottom)/n.object.zoom/oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(C){n.object.isPerspectiveCamera?c/=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*C)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(C){n.object.isPerspectiveCamera?c*=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/C)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(C){f.set(C.clientX,C.clientY)}function j(C){M.set(C.clientX,C.clientY)}function G(C){d.set(C.clientX,C.clientY)}function ee(C){m.set(C.clientX,C.clientY),g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const F=n.domElement;w(2*Math.PI*g.x/F.clientHeight),L(2*Math.PI*g.y/F.clientHeight),f.copy(m),n.update()}function K(C){y.set(C.clientX,C.clientY),S.subVectors(y,M),S.y>0?R(x()):S.y<0&&B(x()),M.copy(y),n.update()}function k(C){p.set(C.clientX,C.clientY),_.subVectors(p,d).multiplyScalar(n.panSpeed),I(_.x,_.y),d.copy(p),n.update()}function V(C){C.deltaY<0?B(x()):C.deltaY>0&&R(x()),n.update()}function Q(C){let F=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),F=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),F=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),F=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),F=!0;break}F&&(C.preventDefault(),n.update())}function J(){if(v.length===1)f.set(v[0].pageX,v[0].pageY);else{const C=.5*(v[0].pageX+v[1].pageX),F=.5*(v[0].pageY+v[1].pageY);f.set(C,F)}}function re(){if(v.length===1)d.set(v[0].pageX,v[0].pageY);else{const C=.5*(v[0].pageX+v[1].pageX),F=.5*(v[0].pageY+v[1].pageY);d.set(C,F)}}function q(){const C=v[0].pageX-v[1].pageX,F=v[0].pageY-v[1].pageY,le=Math.sqrt(C*C+F*F);M.set(0,le)}function Ee(){n.enableZoom&&q(),n.enablePan&&re()}function fe(){n.enableZoom&&q(),n.enableRotate&&J()}function _e(C){if(v.length==1)m.set(C.pageX,C.pageY);else{const le=ve(C),ue=.5*(C.pageX+le.x),oe=.5*(C.pageY+le.y);m.set(ue,oe)}g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const F=n.domElement;w(2*Math.PI*g.x/F.clientHeight),L(2*Math.PI*g.y/F.clientHeight),f.copy(m)}function he(C){if(v.length===1)p.set(C.pageX,C.pageY);else{const F=ve(C),le=.5*(C.pageX+F.x),ue=.5*(C.pageY+F.y);p.set(le,ue)}_.subVectors(p,d).multiplyScalar(n.panSpeed),I(_.x,_.y),d.copy(p)}function Fe(C){const F=ve(C),le=C.pageX-F.x,ue=C.pageY-F.y,oe=Math.sqrt(le*le+ue*ue);y.set(0,oe),S.set(0,Math.pow(y.y/M.y,n.zoomSpeed)),R(S.y),M.copy(y)}function Me(C){n.enableZoom&&Fe(C),n.enablePan&&he(C)}function xe(C){n.enableZoom&&Fe(C),n.enableRotate&&_e(C)}function at(C){n.enabled!==!1&&(v.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",et),n.domElement.addEventListener("pointerup",tt)),ne(C),C.pointerType==="touch"?E(C):Ye(C))}function et(C){n.enabled!==!1&&(C.pointerType==="touch"?b(C):Ne(C))}function tt(C){ie(C),v.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",et),n.domElement.removeEventListener("pointerup",tt)),n.dispatchEvent(Pl),r=i.NONE}function _t(C){ie(C)}function Ye(C){let F;switch(C.button){case 0:F=n.mouseButtons.LEFT;break;case 1:F=n.mouseButtons.MIDDLE;break;case 2:F=n.mouseButtons.RIGHT;break;default:F=-1}switch(F){case xi.DOLLY:if(n.enableZoom===!1)return;j(C),r=i.DOLLY;break;case xi.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;G(C),r=i.PAN}else{if(n.enableRotate===!1)return;Z(C),r=i.ROTATE}break;case xi.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;Z(C),r=i.ROTATE}else{if(n.enablePan===!1)return;G(C),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(sa)}function Ne(C){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;ee(C);break;case i.DOLLY:if(n.enableZoom===!1)return;K(C);break;case i.PAN:if(n.enablePan===!1)return;k(C);break}}function Vt(C){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(C.preventDefault(),n.dispatchEvent(sa),V(C),n.dispatchEvent(Pl))}function St(C){n.enabled===!1||n.enablePan===!1||Q(C)}function E(C){switch(ae(C),v.length){case 1:switch(n.touches.ONE){case vi.ROTATE:if(n.enableRotate===!1)return;J(),r=i.TOUCH_ROTATE;break;case vi.PAN:if(n.enablePan===!1)return;re(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case vi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ee(),r=i.TOUCH_DOLLY_PAN;break;case vi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;fe(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(sa)}function b(C){switch(ae(C),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;_e(C),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;he(C),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Me(C),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xe(C),n.update();break;default:r=i.NONE}}function W(C){n.enabled!==!1&&C.preventDefault()}function ne(C){v.push(C)}function ie(C){delete A[C.pointerId];for(let F=0;F<v.length;F++)if(v[F].pointerId==C.pointerId){v.splice(F,1);return}}function ae(C){let F=A[C.pointerId];F===void 0&&(F=new Se,A[C.pointerId]=F),F.set(C.pageX,C.pageY)}function ve(C){const F=C.pointerId===v[0].pointerId?v[1]:v[0];return A[F.pointerId]}n.domElement.addEventListener("contextmenu",W),n.domElement.addEventListener("pointerdown",at),n.domElement.addEventListener("pointercancel",_t),n.domElement.addEventListener("wheel",Vt,{passive:!1}),this.update()}}function yn(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function vc(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Bt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ji={duration:.5,overwrite:!1,delay:0},qa,mt,Je,jt=1e8,Be=1/jt,ba=Math.PI*2,Lg=ba/4,Dg=0,yc=Math.sqrt,Rg=Math.cos,Ig=Math.sin,ut=function(e){return typeof e=="string"},qe=function(e){return typeof e=="function"},En=function(e){return typeof e=="number"},Ya=function(e){return typeof e>"u"},fn=function(e){return typeof e=="object"},Et=function(e){return e!==!1},Mc=function(){return typeof window<"u"},ts=function(e){return qe(e)||ut(e)},Sc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},gt=Array.isArray,wa=/(?:-?\.?\d|\.)+/gi,bc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,zi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,aa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wc=/[+-]=-?[.\d]+/,Tc=/[^,'"\[\]\s]+/gi,Fg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,He,qt,Ta,ja,kt={},ls={},Ec,Ac=function(e){return(ls=mi(e,kt))&&Gt},Za=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},cs=function(e,t){return!t&&console.warn(e)},Cc=function(e,t){return e&&(kt[e]=t)&&ls&&(ls[e]=t)||kt},Sr=function(){return 0},Og={suppressEvents:!0,isStart:!0,kill:!1},rs={suppressEvents:!0,kill:!1},Ng={suppressEvents:!0},$a={},Nn=[],Ea={},Pc,Ft={},oa={},Ll=30,ss=[],Ka="",Ja=function(e){var t=e[0],n,i;if(fn(t)||qe(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ss.length;i--&&!ss[i].targetTest(t););n=ss[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Kc(e[i],n)))||e.splice(i,1);return e},ai=function(e){return e._gsap||Ja(Zt(e))[0]._gsap},Lc=function(e,t,n){return(n=e[t])&&qe(n)?e[t]():Ya(n)&&e.getAttribute&&e.getAttribute(t)||n},At=function(e,t){return(e=e.split(",")).forEach(t)||e},je=function(e){return Math.round(e*1e5)/1e5||0},ht=function(e){return Math.round(e*1e7)/1e7||0},Gi=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},zg=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},us=function(){var e=Nn.length,t=Nn.slice(0),n,i;for(Ea={},Nn.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Dc=function(e,t,n,i){Nn.length&&!mt&&us(),e.render(t,n,i||mt&&t<0&&(e._initted||e._startAt)),Nn.length&&!mt&&us()},Rc=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Tc).length<2?t:ut(e)?e.trim():e},Ic=function(e){return e},Jt=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ug=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},mi=function(e,t){for(var n in t)e[n]=t[n];return e},Dl=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=fn(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},hs=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},gr=function(e){var t=e.parent||He,n=e.keyframes?Ug(gt(e.keyframes)):Jt;if(Et(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Bg=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Fc=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],s;if(r)for(s=t[r];a&&a[r]>s;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},xs=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Un=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},oi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},kg=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Aa=function(e,t,n,i){return e._startAt&&(mt?e._startAt.revert(rs):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Gg=function o(e){return!e||e._ts&&o(e.parent)},Rl=function(e){return e._repeat?Zi(e._tTime,e=e.duration()+e._rDelay)*e:0},Zi=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},fs=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},vs=function(e){return e._end=ht(e._start+(e._tDur/Math.abs(e._ts||e._rts||Be)||0))},ys=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=ht(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),vs(e),n._dirty||oi(n,e)),e},Oc=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=fs(e.rawTime(),t),(!t._dur||Ir(0,t.totalDuration(),n)-t._tTime>Be)&&t.render(n,!0)),oi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Be}},ln=function(e,t,n,i){return t.parent&&Un(t),t._start=ht((En(n)?n:n||e!==He?Xt(e,n,t):e._time)+t._delay),t._end=ht(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Fc(e,t,"_first","_last",e._sort?"_start":0),Ca(t)||(e._recent=t),i||Oc(e,t),e._ts<0&&ys(e,e._tTime),e},Nc=function(e,t){return(kt.ScrollTrigger||Za("scrollTrigger",t))&&kt.ScrollTrigger.create(t,e)},zc=function(e,t,n,i,r){if(eo(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!mt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Pc!==Nt.frame)return Nn.push(e),e._lazy=[r,i],1},Vg=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},Ca=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Wg=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&Vg(e)&&!(!e._initted&&Ca(e))||(e._ts<0||e._dp._ts<0)&&!Ca(e))?0:1,s=e._rDelay,l=0,c,u,h;if(s&&e._repeat&&(l=Ir(0,e._tDur,t),u=Zi(l,s),e._yoyo&&u&1&&(a=1-a),u!==Zi(e._tTime,s)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||mt||i||e._zTime===Be||!t&&e._zTime){if(!e._initted&&zc(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Be:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Aa(e,t,n,!0),e._onUpdate&&!n&&$t(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&$t(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Un(e,1),!n&&!mt&&($t(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Hg=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},$i=function(e,t,n,i){var r=e._repeat,a=ht(t)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:ht(a*(r+1)+e._rDelay*r):a,s>0&&!i&&ys(e,e._tTime=e._tDur*s),e.parent&&vs(e),n||oi(e.parent,e),e},Il=function(e){return e instanceof wt?oi(e):$i(e,e._dur)},Xg={_start:0,endTime:Sr,totalDuration:Sr},Xt=function o(e,t,n){var i=e.labels,r=e._recent||Xg,a=e.duration()>=jt?r.endTime(!1):e._dur,s,l,c;return ut(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",s=t.indexOf("="),l==="<"||l===">"?(s>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(s<0?r:n).totalDuration()/100:1)):s<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(s-1)+t.substr(s+1)),c&&n&&(l=l/100*(gt(n)?n[0]:n).totalDuration()),s>1?o(e,t.substr(0,s-1),n)+l:a+l)):t==null?a:+t},_r=function(e,t,n){var i=En(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],s,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(s=a,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=Et(l.vars.inherit)&&l.parent;a.immediateRender=Et(s.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new it(t[0],a,t[r+1])},Gn=function(e,t){return e||e===0?t(e):t},Ir=function(e,t,n){return n<e?e:n>t?t:n},pt=function(e,t){return!ut(e)||!(t=Fg.exec(e))?"":t[1]},qg=function(e,t,n){return Gn(n,function(i){return Ir(e,t,i)})},Pa=[].slice,Uc=function(e,t){return e&&fn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&fn(e[0]))&&!e.nodeType&&e!==qt},Yg=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return ut(i)&&!t||Uc(i,1)?(r=n).push.apply(r,Zt(i)):n.push(i)})||n},Zt=function(e,t,n){return Je&&!t&&Je.selector?Je.selector(e):ut(e)&&!n&&(Ta||!Ki())?Pa.call((t||ja).querySelectorAll(e),0):gt(e)?Yg(e,n):Uc(e)?Pa.call(e,0):e?[e]:[]},La=function(e){return e=Zt(e)[0]||cs("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Zt(t,n.querySelectorAll?n:n===e?cs("Invalid scope")||ja.createElement("div"):e)}},Bc=function(e){return e.sort(function(){return .5-Math.random()})},kc=function(e){if(qe(e))return e;var t=fn(e)?e:{each:e},n=li(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},s=i>0&&i<1,l=isNaN(i)||s,c=t.axis,u=i,h=i;return ut(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(u=i[0],h=i[1]),function(f,m,g){var d=(g||t).length,p=a[d],_,M,y,S,v,A,P,x,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,jt])[1],!w){for(P=-jt;P<(P=g[w++].getBoundingClientRect().left)&&w<d;);w--}for(p=a[d]=[],_=l?Math.min(w,d)*u-.5:i%w,M=w===jt?0:l?d*h/w-.5:i/w|0,P=0,x=jt,A=0;A<d;A++)y=A%w-_,S=M-(A/w|0),p[A]=v=c?Math.abs(c==="y"?S:y):yc(y*y+S*S),v>P&&(P=v),v<x&&(x=v);i==="random"&&Bc(p),p.max=P-x,p.min=x,p.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(w>d?d-1:c?c==="y"?d/w:w:Math.max(w,d/w))||0)*(i==="edges"?-1:1),p.b=d<0?r-d:r,p.u=pt(t.amount||t.each)||0,n=n&&d<0?jc(n):n}return d=(p[f]-p.min)/p.max||0,ht(p.b+(n?n(d):d)*p.v)+p.u}},Da=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=ht(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(En(n)?0:pt(n))}},Gc=function(e,t){var n=gt(e),i,r;return!n&&fn(e)&&(i=n=e.radius||jt,e.values?(e=Zt(e.values),(r=!En(e[0]))&&(i*=i)):e=Da(e.increment)),Gn(t,n?qe(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var s=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=jt,u=0,h=e.length,f,m;h--;)r?(f=e[h].x-s,m=e[h].y-l,f=f*f+m*m):f=Math.abs(e[h]-s),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:a,r||u===a||En(a)?u:u+pt(a)}:Da(e))},Vc=function(e,t,n,i){return Gn(gt(e)?!t:n===!0?!!(n=0):!i,function(){return gt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},jg=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},Zg=function(e,t){return function(n){return e(parseFloat(n))+(t||pt(n))}},$g=function(e,t,n){return Hc(e,t,0,1,n)},Wc=function(e,t,n){return Gn(n,function(i){return e[~~t(i)]})},Kg=function o(e,t,n){var i=t-e;return gt(e)?Wc(e,o(0,e.length),t):Gn(n,function(r){return(i+(r-e)%i)%i+e})},Jg=function o(e,t,n){var i=t-e,r=i*2;return gt(e)?Wc(e,o(0,e.length-1),t):Gn(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},br=function(e){for(var t=0,n="",i,r,a,s;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),s=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(s?Tc:wa),n+=e.substr(t,i-t)+Vc(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Hc=function(e,t,n,i,r){var a=t-e,s=i-n;return Gn(r,function(l){return n+((l-e)/a*s||0)})},Qg=function o(e,t,n,i){var r=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!r){var a=ut(e),s={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(gt(e)&&!gt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(o(e[c-1],e[c]));h--,r=function(g){g*=h;var d=Math.min(f,~~g);return u[d](g-d)},n=t}else i||(e=mi(gt(e)?[]:{},e));if(!u){for(l in t)Qa.call(s,e,l,"get",t[l]);r=function(g){return io(g,s)||(a?e.p:e)}}}return Gn(n,r)},Fl=function(e,t,n){var i=e.labels,r=jt,a,s,l;for(a in i)s=i[a]-t,s<0==!!n&&s&&r>(s=Math.abs(s))&&(l=a,r=s);return l},$t=function(e,t,n){var i=e.vars,r=i[t],a=Je,s=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Nn.length&&us(),s&&(Je=s),u=l?r.apply(c,l):r.call(c),Je=a,u},pr=function(e){return Un(e),e.scrollTrigger&&e.scrollTrigger.kill(!!mt),e.progress()<1&&$t(e,"onInterrupt"),e},Ui,e_=function(e){e=!e.name&&e.default||e;var t=e.name,n=qe(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Sr,render:io,add:Qa,kill:g_,modifier:m_,rawVars:0},a={targetTest:0,get:0,getSetter:no,aliases:{},register:0};if(Ki(),e!==i){if(Ft[t])return;Jt(i,Jt(hs(e,r),a)),mi(i.prototype,mi(r,hs(e,a))),Ft[i.prop=t]=i,e.targetTest&&(ss.push(i),$a[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Cc(t,i),e.register&&e.register(Gt,i,Ct)},Ue=255,mr={aqua:[0,Ue,Ue],lime:[0,Ue,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ue],navy:[0,0,128],white:[Ue,Ue,Ue],olive:[128,128,0],yellow:[Ue,Ue,0],orange:[Ue,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ue,0,0],pink:[Ue,192,203],cyan:[0,Ue,Ue],transparent:[Ue,Ue,Ue,0]},la=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ue+.5|0},Xc=function(e,t,n){var i=e?En(e)?[e>>16,e>>8&Ue,e&Ue]:0:mr.black,r,a,s,l,c,u,h,f,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),mr[e])i=mr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),s=e.charAt(3),e="#"+r+r+a+a+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ue,i&Ue,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ue,e&Ue]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(wa),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=la(l+1/3,r,a),i[1]=la(l,r,a),i[2]=la(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(bc),n&&i.length<4&&(i[3]=1),i}else i=e.match(wa)||mr.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/Ue,a=i[1]/Ue,s=i[2]/Ue,h=Math.max(r,a,s),f=Math.min(r,a,s),u=(h+f)/2,h===f?l=c=0:(m=h-f,c=u>.5?m/(2-h-f):m/(h+f),l=h===r?(a-s)/m+(a<s?6:0):h===a?(s-r)/m+2:(r-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},qc=function(e){var t=[],n=[],i=-1;return e.split(zn).forEach(function(r){var a=r.match(zi)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Ol=function(e,t,n){var i="",r=(e+i).match(zn),a=t?"hsla(":"rgba(",s=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=Xc(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=qc(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(zn,"1").split(zi),h=c.length-1;s<h;s++)i+=c[s]+(~l.indexOf(s)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(zn),h=c.length-1;s<h;s++)i+=c[s]+r[s];return i+c[h]},zn=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in mr)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),t_=/hsl[a]?\(/,Yc=function(e){var t=e.join(" "),n;if(zn.lastIndex=0,zn.test(t))return n=t_.test(t),e[1]=Ol(e[1],n),e[0]=Ol(e[0],n,qc(e[1])),!0},wr,Nt=function(){var o=Date.now,e=500,t=33,n=o(),i=n,r=1e3/240,a=r,s=[],l,c,u,h,f,m,g=function d(p){var _=o()-i,M=p===!0,y,S,v,A;if(_>e&&(n+=_-t),i+=_,v=i-n,y=v-a,(y>0||M)&&(A=++h.frame,f=v-h.time*1e3,h.time=v=v/1e3,a+=y+(y>=r?4:r-y),S=1),M||(l=c(d)),S)for(m=0;m<s.length;m++)s[m](v,f,A,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Ec&&(!Ta&&Mc()&&(qt=Ta=window,ja=qt.document||{},kt.gsap=Gt,(qt.gsapVersions||(qt.gsapVersions=[])).push(Gt.version),Ac(ls||qt.GreenSockGlobals||!qt.gsap&&qt||{}),u=qt.requestAnimationFrame),l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},wr=1,g(2))},sleep:function(){(u?qt.cancelAnimationFrame:clearTimeout)(l),wr=0,c=Sr},lagSmoothing:function(p,_){e=p||1/0,t=Math.min(_||33,e)},fps:function(p){r=1e3/(p||240),a=h.time*1e3+r},add:function(p,_,M){var y=_?function(S,v,A,P){p(S,v,A,P),h.remove(y)}:p;return h.remove(p),s[M?"unshift":"push"](y),Ki(),y},remove:function(p,_){~(_=s.indexOf(p))&&s.splice(_,1)&&m>=_&&m--},_listeners:s},h}(),Ki=function(){return!wr&&Nt.wake()},Ce={},n_=/^[\d.\-M][\d.\-,\s]/,i_=/["']/g,r_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,s,l,c;r<a;r++)l=n[r],s=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,s),t[i]=isNaN(c)?c.replace(i_,"").trim():+c,i=l.substr(s+1).trim();return t},s_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},a_=function(e){var t=(e+"").split("("),n=Ce[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[r_(t[1])]:s_(e).split(",").map(Rc)):Ce._CE&&n_.test(e)?Ce._CE("",e):n},jc=function(e){return function(t){return 1-e(1-t)}},Zc=function o(e,t){for(var n=e._first,i;n;)n instanceof wt?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},li=function(e,t){return e&&(qe(e)?e:Ce[e]||a_(e))||t},_i=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return At(e,function(s){Ce[s]=kt[s]=r,Ce[a=s.toLowerCase()]=n;for(var l in r)Ce[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ce[s+"."+l]=r[l]}),r},$c=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ca=function o(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/ba*(Math.asin(1/i)||0),s=function(u){return u===1?1:i*Math.pow(2,-10*u)*Ig((u-a)*r)+1},l=e==="out"?s:e==="in"?function(c){return 1-s(1-c)}:$c(s);return r=ba/r,l.config=function(c,u){return o(e,c,u)},l},ua=function o(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:$c(n);return i.config=function(r){return o(e,r)},i};At("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;_i(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ce.Linear.easeNone=Ce.none=Ce.Linear.easeIn;_i("Elastic",ca("in"),ca("out"),ca());(function(o,e){var t=1/e,n=2*t,i=2.5*t,r=function(s){return s<t?o*s*s:s<n?o*Math.pow(s-1.5/e,2)+.75:s<i?o*(s-=2.25/e)*s+.9375:o*Math.pow(s-2.625/e,2)+.984375};_i("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);_i("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});_i("Circ",function(o){return-(yc(1-o*o)-1)});_i("Sine",function(o){return o===1?1:-Rg(o*Lg)+1});_i("Back",ua("in"),ua("out"),ua());Ce.SteppedEase=Ce.steps=kt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-Be;return function(s){return((i*Ir(0,a,s)|0)+r)*n}}};ji.ease=Ce["quad.out"];At("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Ka+=o+","+o+"Params,"});var Kc=function(e,t){this.id=Dg++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Lc,this.set=t?t.getSetter:no},Ji=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,$i(this,+t.duration,1,1),this.data=t.data,Je&&(this._ctx=Je,Je.data.push(this)),wr||Nt.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,$i(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ki(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ys(this,n),!r._dp||r.parent||Oc(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ln(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Be||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Dc(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Rl(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Rl(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Zi(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Be?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?fs(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Be?0:this._rts,this.totalTime(Ir(-this._delay,this._tDur,i),!0),vs(this),kg(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ki(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Be&&(this._tTime-=Be)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ln(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Et(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?fs(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Ng);var i=mt;return mt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),mt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Il(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Il(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Xt(this,n),Et(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Et(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Be:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Be,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Be)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=qe(n)?n:Ic,s=function(){var c=i.then;i.then=null,qe(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},e.kill=function(){pr(this)},o}();Jt(Ji.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Be,_prom:0,_ps:!1,_rts:1});var wt=function(o){vc(e,o);function e(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Et(n.sortChildren),He&&ln(n.parent||He,yn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Nc(yn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return _r(0,arguments,this),this},t.from=function(i,r,a){return _r(1,arguments,this),this},t.fromTo=function(i,r,a,s){return _r(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,gr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new it(i,r,Xt(this,a),1),this},t.call=function(i,r,a){return ln(this,it.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,s,l,c,u){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new it(i,a,Xt(this,l)),this},t.staggerFrom=function(i,r,a,s,l,c,u){return a.runBackwards=1,gr(a).immediateRender=Et(a.immediateRender),this.staggerTo(i,r,a,s,l,c,u)},t.staggerFromTo=function(i,r,a,s,l,c,u,h){return s.startAt=a,gr(s).immediateRender=Et(s.immediateRender),this.staggerTo(i,r,s,l,c,u,h)},t.render=function(i,r,a){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:ht(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,m,g,d,p,_,M,y,S,v,A,P;if(this!==He&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(s!==this._time&&c&&(u+=this._time-s,i+=this._time-s),f=u,S=this._start,y=this._ts,_=!y,h&&(c||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(f=ht(u%p),u===l?(d=this._repeat,f=c):(d=~~(u/p),d&&d===u/p&&(f=c,d--),f>c&&(f=c)),v=Zi(this._tTime,p),!s&&this._tTime&&v!==d&&(v=d),A&&d&1&&(f=c-f,P=1),d!==v&&!this._lock){var x=A&&v&1,w=x===(A&&d&1);if(d<v&&(x=!x),s=x?0:c,this._lock=1,this.render(s||(P?0:ht(d*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&$t(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1),s&&s!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,s=x?c:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!P&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Zc(this,P)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Hg(this,ht(s),ht(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&f&&!r&&($t(this,"onStart"),this._tTime!==u))return this;if(f>=s&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,r,a),f!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=-Be);break}}m=g}else{m=this._last;for(var L=i<0?i:f;m;){if(g=m._prev,(m._act||L<=m._end)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(L-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(L-m._start)*m._ts,r,a||mt&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=L?-Be:Be);break}}m=g}}if(M&&!r&&(this.pause(),M.render(f>=s?0:-Be)._zTime=f>=s?1:-1,this._ts))return this._start=S,vs(this),this.render(i,r,a);this._onUpdate&&!r&&$t(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&s)&&(S===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Un(this,1),!r&&!(i<0&&!s)&&(u||s||!l)&&($t(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(En(r)||(r=Xt(this,r,i)),!(i instanceof Ji)){if(gt(i))return i.forEach(function(s){return a.add(s,r)}),this;if(ut(i))return this.addLabel(i,r);if(qe(i))i=it.delayedCall(0,i);else return this}return this!==i?ln(this,i,r):this},t.getChildren=function(i,r,a,s){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-jt);for(var l=[],c=this._first;c;)c._start>=s&&(c instanceof it?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return ut(i)?this.removeLabel(i):qe(i)?this.killTweensOf(i):(xs(this,i),i===this._recent&&(this._recent=this._last),oi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ht(Nt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Xt(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var s=it.delayedCall(0,r||Sr,a);return s.data="isPause",this._hasPause=1,ln(this,s,Xt(this,i))},t.removePause=function(i){var r=this._first;for(i=Xt(this,i);r;)r._start===i&&r.data==="isPause"&&Un(r),r=r._next},t.killTweensOf=function(i,r,a){for(var s=this.getTweensOf(i,a),l=s.length;l--;)Rn!==s[l]&&s[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],s=Zt(i),l=this._first,c=En(r),u;l;)l instanceof it?zg(l._targets,s)&&(c?(!Rn||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(s,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,s=Xt(a,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,m,g=it.to(a,Jt({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale())||Be,onStart:function(){if(a.pause(),!m){var p=r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&$i(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,Jt({startAt:{time:Xt(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Fl(this,Xt(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Fl(this,Xt(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Be)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var s=this._first,l=this.labels,c;s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return oi(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return o.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),oi(this)},t.totalDuration=function(i){var r=0,a=this,s=a._last,l=jt,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;s;)c=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>l&&a._sort&&s._ts&&!a._lock?(a._lock=1,ln(a,s,u-s._delay,1)._lock=0):l=u,u<0&&s._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=c;$i(a,a===He&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(He._ts&&(Dc(He,fs(i,He)),Pc=Nt.frame),Nt.frame>=Ll){Ll+=Bt.autoSleep||120;var r=He._first;if((!r||!r._ts)&&Bt.autoSleep&&Nt._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Nt.sleep()}}},e}(Ji);Jt(wt.prototype,{_lock:0,_hasPause:0,_forcing:0});var o_=function(e,t,n,i,r,a,s){var l=new Ct(this._pt,e,t,0,1,iu,null,r),c=0,u=0,h,f,m,g,d,p,_,M;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=br(i)),a&&(M=[n,i],a(M,e,t),n=M[0],i=M[1]),f=n.match(aa)||[];h=aa.exec(i);)g=h[0],d=i.substring(c,h.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:p,c:g.charAt(1)==="="?Gi(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=aa.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=s,(wc.test(i)||_)&&(l.e=0),this._pt=l,l},Qa=function(e,t,n,i,r,a,s,l,c,u){qe(i)&&(i=i(r||0,e,a));var h=e[t],f=n!=="get"?n:qe(h)?c?e[t.indexOf("set")||!qe(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,m=qe(h)?c?f_:tu:to,g;if(ut(i)&&(~i.indexOf("random(")&&(i=br(i)),i.charAt(1)==="="&&(g=Gi(f,i)+(pt(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Ra)return!isNaN(f*i)&&i!==""?(g=new Ct(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?p_:nu,0,m),c&&(g.fp=c),s&&g.modifier(s,this,e),this._pt=g):(!h&&!(t in e)&&Za(t,i),o_.call(this,e,t,f,i,m,l||Bt.stringFilter,c))},l_=function(e,t,n,i,r){if(qe(e)&&(e=xr(e,r,t,n,i)),!fn(e)||e.style&&e.nodeType||gt(e)||Sc(e))return ut(e)?xr(e,r,t,n,i):e;var a={},s;for(s in e)a[s]=xr(e[s],r,t,n,i);return a},Jc=function(e,t,n,i,r,a){var s,l,c,u;if(Ft[e]&&(s=new Ft[e]).init(r,s.rawVars?t[e]:l_(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Ct(n._pt,r,e,0,1,s.render,s,0,s.priority),n!==Ui))for(c=n._ptLookup[n._targets.indexOf(r)],u=s._props.length;u--;)c[s._props[u]]=l;return s},Rn,Ra,eo=function o(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,s=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,m=i.yoyoEase,g=i.keyframes,d=i.autoRevert,p=e._dur,_=e._startAt,M=e._targets,y=e.parent,S=y&&y.data==="nested"?y.vars.targets:M,v=e._overwrite==="auto"&&!qa,A=e.timeline,P,x,w,L,U,$,I,R,B,Z,j,G,ee;if(A&&(!g||!r)&&(r="none"),e._ease=li(r,ji.ease),e._yEase=m?jc(li(m===!0?r:m,ji.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!A&&!!i.runBackwards,!A||g&&!i.stagger){if(R=M[0]?ai(M[0]).harness:0,G=R&&i[R.prop],P=hs(i,$a),_&&(_._zTime<0&&_.progress(1),t<0&&f&&s&&!d?_.render(-1,!0):_.revert(f&&p?rs:Og),_._lazy=0),a){if(Un(e._startAt=it.set(M,Jt({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!_&&Et(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mt||!s&&!d)&&e._startAt.revert(rs),s&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&p&&!_){if(t&&(s=!1),w=Jt({overwrite:!1,data:"isFromStart",lazy:s&&!_&&Et(l),immediateRender:s,stagger:0,parent:y},P),G&&(w[R.prop]=G),Un(e._startAt=it.set(M,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mt?e._startAt.revert(rs):e._startAt.render(-1,!0)),e._zTime=t,!s)o(e._startAt,Be,Be);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Et(l)||l&&!p,x=0;x<M.length;x++){if(U=M[x],I=U._gsap||Ja(M)[x]._gsap,e._ptLookup[x]=Z={},Ea[I.id]&&Nn.length&&us(),j=S===M?x:S.indexOf(U),R&&(B=new R).init(U,G||P,e,j,S)!==!1&&(e._pt=L=new Ct(e._pt,U,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(K){Z[K]=L}),B.priority&&($=1)),!R||G)for(w in P)Ft[w]&&(B=Jc(w,P,e,j,U,S))?B.priority&&($=1):Z[w]=L=Qa.call(e,U,w,"get",P[w],j,S,0,i.stringFilter);e._op&&e._op[x]&&e.kill(U,e._op[x]),v&&e._pt&&(Rn=e,He.killTweensOf(U,Z,e.globalTime(t)),ee=!e.parent,Rn=0),e._pt&&l&&(Ea[I.id]=1)}$&&ru(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ee,g&&t<=0&&A.render(jt,!0,!0)},c_=function(e,t,n,i,r,a,s){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Ra=1,e.vars[t]="+=0",eo(e,s),Ra=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=je(n)+pt(u.e)),u.b&&(u.b=c.s+pt(u.b))},u_=function(e,t){var n=e[0]?ai(e[0]).harness:0,i=n&&n.aliases,r,a,s,l;if(!i)return t;r=mi({},t);for(a in i)if(a in r)for(l=i[a].split(","),s=l.length;s--;)r[l[s]]=r[a];return r},h_=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,s;if(gt(t))s=n[e]||(n[e]=[]),t.forEach(function(l,c){return s.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)s=n[a]||(n[a]=[]),a==="ease"||s.push({t:parseFloat(e),v:t[a],e:r})},xr=function(e,t,n,i,r){return qe(e)?e.call(t,n,i,r):ut(e)&&~e.indexOf("random(")?br(e):e},Qc=Ka+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",eu={};At(Qc+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return eu[o]=1});var it=function(o){vc(e,o);function e(n,i,r,a){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=o.call(this,a?i:gr(i))||this;var l=s.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,m=l.overwrite,g=l.keyframes,d=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,M=i.parent||He,y=(gt(n)||Sc(n)?En(n[0]):"length"in i)?[n]:Zt(n),S,v,A,P,x,w,L,U;if(s._targets=y.length?Ja(y):cs("GSAP target "+n+" not found. https://greensock.com",!Bt.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,g||f||ts(c)||ts(u)){if(i=s.vars,S=s.timeline=new wt({data:"nested",defaults:d||{},targets:M&&M.data==="nested"?M.vars.targets:y}),S.kill(),S.parent=S._dp=yn(s),S._start=0,f||ts(c)||ts(u)){if(P=y.length,L=f&&kc(f),fn(f))for(x in f)~Qc.indexOf(x)&&(U||(U={}),U[x]=f[x]);for(v=0;v<P;v++)A=hs(i,eu),A.stagger=0,_&&(A.yoyoEase=_),U&&mi(A,U),w=y[v],A.duration=+xr(c,yn(s),v,w,y),A.delay=(+xr(u,yn(s),v,w,y)||0)-s._delay,!f&&P===1&&A.delay&&(s._delay=u=A.delay,s._start+=u,A.delay=0),S.to(w,A,L?L(v,w,y):0),S._ease=Ce.none;S.duration()?c=u=0:s.timeline=0}else if(g){gr(Jt(S.vars.defaults,{ease:"none"})),S._ease=li(g.ease||i.ease||"none");var $=0,I,R,B;if(gt(g))g.forEach(function(Z){return S.to(y,Z,">")}),S.duration();else{A={};for(x in g)x==="ease"||x==="easeEach"||h_(x,g[x],A,g.easeEach);for(x in A)for(I=A[x].sort(function(Z,j){return Z.t-j.t}),$=0,v=0;v<I.length;v++)R=I[v],B={ease:R.e,duration:(R.t-(v?I[v-1].t:0))/100*c},B[x]=R.v,S.to(y,B,$),$+=B.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||s.duration(c=S.duration())}else s.timeline=0;return m===!0&&!qa&&(Rn=yn(s),He.killTweensOf(y),Rn=0),ln(M,yn(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(h||!c&&!g&&s._start===ht(M._time)&&Et(h)&&Gg(yn(s))&&M.data!=="nested")&&(s._tTime=-Be,s.render(Math.max(0,-u)||0)),p&&Nc(yn(s),p),s}var t=e.prototype;return t.render=function(i,r,a){var s=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Be&&!u?l:i<Be?0:i,f,m,g,d,p,_,M,y,S;if(!c)Wg(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,y=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,r,a);if(f=ht(h%d),h===l?(g=this._repeat,f=c):(g=~~(h/d),g&&g===h/d&&(f=c,g--),f>c&&(f=c)),_=this._yoyo&&g&1,_&&(S=this._yEase,f=c-f),p=Zi(this._tTime,d),f===s&&!a&&this._initted)return this._tTime=h,this;g!==p&&(y&&this._yEase&&Zc(y,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=a=1,this.render(ht(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(zc(this,u?i:f,a,r,h))return this._tTime=0,this;if(s!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(S||this._ease)(f/c),this._from&&(this.ratio=M=1-M),f&&!s&&!r&&($t(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(M,m.d),m=m._next;y&&y.render(i<0?i:!f&&_?-Be:y._dur*y._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Aa(this,i,r,a),$t(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&$t(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Aa(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Un(this,1),!r&&!(u&&!s)&&(h||s||_)&&($t(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,s){wr||Nt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||eo(this,l),c=this._ease(l/this._dur),c_(this,i,r,a,s,c,l)?this.resetTo(i,r,a,s):(ys(this,0),this.parent||Fc(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?pr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Rn&&Rn.vars.overwrite!==!0)._first||pr(this),this.parent&&a!==this.timeline.totalDuration()&&$i(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,l=i?Zt(i):s,c=this._ptLookup,u=this._pt,h,f,m,g,d,p,_;if((!r||r==="all")&&Bg(s,l))return r==="all"&&(this._pt=0),pr(this);for(h=this._op=this._op||[],r!=="all"&&(ut(r)&&(d={},At(r,function(M){return d[M]=1}),r=d),r=u_(s,r)),_=s.length;_--;)if(~l.indexOf(s[_])){f=c[_],r==="all"?(h[_]=r,g=f,m={}):(m=h[_]=h[_]||{},g=r);for(d in g)p=f&&f[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&xs(this,p,"_pt"),delete f[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&u&&pr(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return _r(1,arguments)},e.delayedCall=function(i,r,a,s){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},e.fromTo=function(i,r,a){return _r(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return He.killTweensOf(i,r,a)},e}(Ji);Jt(it.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});At("staggerTo,staggerFrom,staggerFromTo",function(o){it[o]=function(){var e=new wt,t=Pa.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var to=function(e,t,n){return e[t]=n},tu=function(e,t,n){return e[t](n)},f_=function(e,t,n,i){return e[t](i.fp,n)},d_=function(e,t,n){return e.setAttribute(t,n)},no=function(e,t){return qe(e[t])?tu:Ya(e[t])&&e.setAttribute?d_:to},nu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},p_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},iu=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},io=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},m_=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},g_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?xs(this,t,"_pt"):t.dep||(n=1),t=i;return!n},__=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},ru=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Ct=function(){function o(t,n,i,r,a,s,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=s||nu,this.d=l||this,this.set=c||to,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=__,this.m=n,this.mt=r,this.tween=i},o}();At(Ka+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return $a[o]=1});kt.TweenMax=kt.TweenLite=it;kt.TimelineLite=kt.TimelineMax=wt;He=new wt({sortChildren:!1,defaults:ji,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Bt.stringFilter=Yc;var Qi=[],as={},x_=[],Nl=0,ha=function(e){return(as[e]||x_).map(function(t){return t()})},Ia=function(){var e=Date.now(),t=[];e-Nl>2&&(ha("matchMediaInit"),Qi.forEach(function(n){var i=n.queries,r=n.conditions,a,s,l,c;for(s in i)a=qt.matchMedia(i[s]).matches,a&&(l=1),a!==r[s]&&(r[s]=a,c=1);c&&(n.revert(),l&&t.push(n))}),ha("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Nl=e,ha("matchMedia"))},su=function(){function o(t,n){this.selector=n&&La(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=o.prototype;return e.add=function(n,i,r){qe(n)&&(r=i,i=n,n=qe);var a=this,s=function(){var c=Je,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=La(r)),Je=a,h=i.apply(a,arguments),qe(h)&&a._r.push(h),Je=c,a.selector=u,a.isReverted=!1,h};return a.last=s,n===qe?s(a):n?a[n]=s:s},e.ignore=function(n){var i=Je;Je=null,n(this),Je=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof it&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Ji)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var s=Qi.indexOf(this);~s&&Qi.splice(s,1)}},e.revert=function(n){this.kill(n||{})},o}(),v_=function(){function o(t){this.contexts=[],this.scope=t}var e=o.prototype;return e.add=function(n,i,r){fn(n)||(n={matches:n});var a=new su(0,r||this.scope),s=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=qt.matchMedia(n[c]),l&&(Qi.indexOf(a)<0&&Qi.push(a),(s[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ia):l.addEventListener("change",Ia)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),ds={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return e_(i)})},timeline:function(e){return new wt(e)},getTweensOf:function(e,t){return He.getTweensOf(e,t)},getProperty:function(e,t,n,i){ut(e)&&(e=Zt(e)[0]);var r=ai(e||{}).get,a=n?Ic:Rc;return n==="native"&&(n=""),e&&(t?a((Ft[t]&&Ft[t].get||r)(e,t,n,i)):function(s,l,c){return a((Ft[s]&&Ft[s].get||r)(e,s,l,c))})},quickSetter:function(e,t,n){if(e=Zt(e),e.length>1){var i=e.map(function(u){return Gt.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var a=Ft[t],s=ai(e),l=s.harness&&(s.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Ui._pt=0,h.init(e,n?u+n:u,Ui,0,[e]),h.render(1,h),Ui._pt&&io(1,Ui)}:s.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,s,1)}},quickTo:function(e,t,n){var i,r=Gt.to(e,mi((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return He.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=li(e.ease,ji.ease)),Dl(ji,e||{})},config:function(e){return Dl(Bt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!Ft[s]&&!kt[s]&&cs(t+" effect requires "+s+" plugin.")}),oa[t]=function(s,l,c){return n(Zt(s),Jt(l||{},r),c)},a&&(wt.prototype[t]=function(s,l,c){return this.add(oa[t](s,fn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ce[e]=li(t)},parseEase:function(e,t){return arguments.length?li(e,t):Ce},getById:function(e){return He.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new wt(e),i,r;for(n.smoothChildTiming=Et(e.smoothChildTiming),He.remove(n),n._dp=0,n._time=n._tTime=He._time,i=He._first;i;)r=i._next,(t||!(!i._dur&&i instanceof it&&i.vars.onComplete===i._targets[0]))&&ln(n,i,i._start-i._delay),i=r;return ln(He,n,0),n},context:function(e,t){return e?new su(e,t):Je},matchMedia:function(e){return new v_(e)},matchMediaRefresh:function(){return Qi.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ia()},addEventListener:function(e,t){var n=as[e]||(as[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=as[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Kg,wrapYoyo:Jg,distribute:kc,random:Vc,snap:Gc,normalize:$g,getUnit:pt,clamp:qg,splitColor:Xc,toArray:Zt,selector:La,mapRange:Hc,pipe:jg,unitize:Zg,interpolate:Qg,shuffle:Bc},install:Ac,effects:oa,ticker:Nt,updateRoot:wt.updateRoot,plugins:Ft,globalTimeline:He,core:{PropTween:Ct,globals:Cc,Tween:it,Timeline:wt,Animation:Ji,getCache:ai,_removeLinkedListItem:xs,reverting:function(){return mt},context:function(e){return e&&Je&&(Je.data.push(e),e._ctx=Je),Je},suppressOverwrites:function(e){return qa=e}}};At("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return ds[o]=it[o]});Nt.add(wt.updateRoot);Ui=ds.to({},{duration:0});var y_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},M_=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=y_(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},fa=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(s){var l,c;if(ut(r)&&(l={},At(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}M_(s,r)}}}},Gt=ds.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,s,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",s=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),s.op=a,s.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)mt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},fa("roundProps",Da),fa("modifiers"),fa("snap",Gc))||ds;it.version=wt.version=Gt.version="3.11.4";Ec=1;Mc()&&Ki();Ce.Power0;Ce.Power1;Ce.Power2;Ce.Power3;Ce.Power4;Ce.Linear;Ce.Quad;Ce.Cubic;Ce.Quart;Ce.Quint;Ce.Strong;Ce.Elastic;Ce.Back;Ce.SteppedEase;Ce.Bounce;Ce.Sine;Ce.Expo;Ce.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var zl,In,Vi,ro,ii,Ul,so,S_=function(){return typeof window<"u"},An={},Qn=180/Math.PI,Wi=Math.PI/180,Fi=Math.atan2,Bl=1e8,ao=/([A-Z])/g,b_=/(left|right|width|margin|padding|x)/i,w_=/[\s,\(]\S/,wn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Fa=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},T_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},E_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},A_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},au=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ou=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},C_=function(e,t,n){return e.style[t]=n},P_=function(e,t,n){return e.style.setProperty(t,n)},L_=function(e,t,n){return e._gsap[t]=n},D_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},R_=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},I_=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},Xe="transform",sn=Xe+"Origin",F_=function(e,t){var n=this,i=this.target,r=i.style;if(e in An){if(this.tfm=this.tfm||{},e!=="transform"&&(e=wn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Mn(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Mn(i,e)),this.props.indexOf(Xe)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(sn,t,"")),e=Xe}(r||t)&&this.props.push(e,t,r[e])},lu=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},O_=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].replace(ao,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=so(),r&&!r.isStart&&!n[Xe]&&(lu(n),i.uncache=1)}},cu=function(e,t){var n={target:e,props:[],revert:O_,save:F_};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},uu,Oa=function(e,t){var n=In.createElementNS?In.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):In.createElement(e);return n.style?n:In.createElement(e)},hn=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(ao,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,er(t)||t,1)||""},kl="O,Moz,ms,Ms,Webkit".split(","),er=function(e,t,n){var i=t||ii,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(kl[a]+e in r););return a<0?null:(a===3?"ms":a>=0?kl[a]:"")+e},Na=function(){S_()&&window.document&&(zl=window,In=zl.document,Vi=In.documentElement,ii=Oa("div")||{style:{}},Oa("div"),Xe=er(Xe),sn=Xe+"Origin",ii.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",uu=!!er("perspective"),so=Gt.core.reverting,ro=1)},da=function o(e){var t=Oa("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(Vi.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Vi.removeChild(t),this.style.cssText=r,a},Gl=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},hu=function(e){var t;try{t=e.getBBox()}catch{t=da.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===da||(t=da.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Gl(e,["x","cx","x1"])||0,y:+Gl(e,["y","cy","y1"])||0,width:0,height:0}:t},fu=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&hu(e))},Tr=function(e,t){if(t){var n=e.style;t in An&&t!==sn&&(t=Xe),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(ao,"-$1").toLowerCase())):n.removeAttribute(t)}},Fn=function(e,t,n,i,r,a){var s=new Ct(e._pt,t,n,0,1,a?ou:au);return e._pt=s,s.b=i,s.e=r,e._props.push(n),s},Vl={deg:1,rad:1,turn:1},N_={grid:1,flex:1},Bn=function o(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",s=ii.style,l=b_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",m=i==="%",g,d,p,_;return i===a||!r||Vl[i]||Vl[a]?r:(a!=="px"&&!f&&(r=o(e,t,n,"px")),_=e.getCTM&&fu(e),(m||a==="%")&&(An[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],je(m?r/g*h:r/100*g)):(s[l?"width":"height"]=h+(f?a:i),d=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===In||!d.appendChild)&&(d=In.body),p=d._gsap,p&&m&&p.width&&l&&p.time===Nt.time&&!p.uncache?je(r/p.width*h):((m||a==="%")&&!N_[hn(d,"display")]&&(s.position=hn(e,"position")),d===e&&(s.position="static"),d.appendChild(ii),g=ii[u],d.removeChild(ii),s.position="absolute",l&&m&&(p=ai(d),p.time=Nt.time,p.width=d[u]),je(f?g*r/h:g&&r?h/g*r:0))))},Mn=function(e,t,n,i){var r;return ro||Na(),t in wn&&t!=="transform"&&(t=wn[t],~t.indexOf(",")&&(t=t.split(",")[0])),An[t]&&t!=="transform"?(r=Ar(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:ms(hn(e,sn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ps[t]&&ps[t](e,t,n)||hn(e,t)||Lc(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Bn(e,t,r,n)+n:r},z_=function(e,t,n,i){if(!n||n==="none"){var r=er(t,e,1),a=r&&hn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=hn(e,"borderTopColor"))}var s=new Ct(this._pt,e.style,t,0,1,iu),l=0,c=0,u,h,f,m,g,d,p,_,M,y,S,v;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=hn(e,t)||i,e.style[t]=n),u=[n,i],Yc(u),n=u[0],i=u[1],f=n.match(zi)||[],v=i.match(zi)||[],v.length){for(;h=zi.exec(i);)p=h[0],M=i.substring(l,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(d=f[c++]||"")&&(m=parseFloat(d)||0,S=d.substr((m+"").length),p.charAt(1)==="="&&(p=Gi(m,p)+S),_=parseFloat(p),y=p.substr((_+"").length),l=zi.lastIndex-y.length,y||(y=y||Bt.units[t]||S,l===i.length&&(i+=y,s.e+=y)),S!==y&&(m=Bn(e,t,d,y)||0),s._pt={_next:s._pt,p:M||c===1?M:",",s:m,c:_-m,m:g&&g<4||t==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=t==="display"&&i==="none"?ou:au;return wc.test(i)&&(s.e=0),this._pt=s,s},Wl={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},U_=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Wl[n]||n,t[1]=Wl[i]||i,t.join(" ")},B_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,s,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)s=r[c],An[s]&&(l=1,s=s==="transformOrigin"?sn:Xe),Tr(n,s);l&&(Tr(n,Xe),a&&(a.svg&&n.removeAttribute("transform"),Ar(n,1),a.uncache=1,lu(i)))}},ps={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Ct(e._pt,t,n,0,0,B_);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},Er=[1,0,0,1,0,0],du={},pu=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Hl=function(e){var t=hn(e,Xe);return pu(t)?Er:t.substr(7).match(bc).map(je)},oo=function(e,t){var n=e._gsap||ai(e),i=e.style,r=Hl(e),a,s,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Er:r):(r===Er&&!e.offsetParent&&e!==Vi&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,s=e.nextElementSibling,Vi.appendChild(e)),r=Hl(e),l?i.display=l:Tr(e,"display"),c&&(s?a.insertBefore(e,s):a?a.appendChild(e):Vi.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},za=function(e,t,n,i,r,a){var s=e._gsap,l=r||oo(e,!0),c=s.xOrigin||0,u=s.yOrigin||0,h=s.xOffset||0,f=s.yOffset||0,m=l[0],g=l[1],d=l[2],p=l[3],_=l[4],M=l[5],y=t.split(" "),S=parseFloat(y[0])||0,v=parseFloat(y[1])||0,A,P,x,w;n?l!==Er&&(P=m*p-g*d)&&(x=S*(p/P)+v*(-d/P)+(d*M-p*_)/P,w=S*(-g/P)+v*(m/P)-(m*M-g*_)/P,S=x,v=w):(A=hu(e),S=A.x+(~y[0].indexOf("%")?S/100*A.width:S),v=A.y+(~(y[1]||y[0]).indexOf("%")?v/100*A.height:v)),i||i!==!1&&s.smooth?(_=S-c,M=v-u,s.xOffset=h+(_*m+M*d)-_,s.yOffset=f+(_*g+M*p)-M):s.xOffset=s.yOffset=0,s.xOrigin=S,s.yOrigin=v,s.smooth=!!i,s.origin=t,s.originIsAbsolute=!!n,e.style[sn]="0px 0px",a&&(Fn(a,s,"xOrigin",c,S),Fn(a,s,"yOrigin",u,v),Fn(a,s,"xOffset",h,s.xOffset),Fn(a,s,"yOffset",f,s.yOffset)),e.setAttribute("data-svg-origin",S+" "+v)},Ar=function(e,t){var n=e._gsap||new Kc(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",s="deg",l=getComputedStyle(e),c=hn(e,sn)||"0",u,h,f,m,g,d,p,_,M,y,S,v,A,P,x,w,L,U,$,I,R,B,Z,j,G,ee,K,k,V,Q,J,re;return u=h=f=d=p=_=M=y=S=0,m=g=1,n.svg=!!(e.getCTM&&fu(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Xe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Xe]!=="none"?l[Xe]:"")),i.scale=i.rotate=i.translate="none"),P=oo(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",j=""):j=!t&&e.getAttribute("data-svg-origin"),za(e,j||c,!!j||n.originIsAbsolute,n.smooth!==!1,P)),v=n.xOrigin||0,A=n.yOrigin||0,P!==Er&&(U=P[0],$=P[1],I=P[2],R=P[3],u=B=P[4],h=Z=P[5],P.length===6?(m=Math.sqrt(U*U+$*$),g=Math.sqrt(R*R+I*I),d=U||$?Fi($,U)*Qn:0,M=I||R?Fi(I,R)*Qn+d:0,M&&(g*=Math.abs(Math.cos(M*Wi))),n.svg&&(u-=v-(v*U+A*I),h-=A-(v*$+A*R))):(re=P[6],Q=P[7],K=P[8],k=P[9],V=P[10],J=P[11],u=P[12],h=P[13],f=P[14],x=Fi(re,V),p=x*Qn,x&&(w=Math.cos(-x),L=Math.sin(-x),j=B*w+K*L,G=Z*w+k*L,ee=re*w+V*L,K=B*-L+K*w,k=Z*-L+k*w,V=re*-L+V*w,J=Q*-L+J*w,B=j,Z=G,re=ee),x=Fi(-I,V),_=x*Qn,x&&(w=Math.cos(-x),L=Math.sin(-x),j=U*w-K*L,G=$*w-k*L,ee=I*w-V*L,J=R*L+J*w,U=j,$=G,I=ee),x=Fi($,U),d=x*Qn,x&&(w=Math.cos(x),L=Math.sin(x),j=U*w+$*L,G=B*w+Z*L,$=$*w-U*L,Z=Z*w-B*L,U=j,B=G),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,_=180-_),m=je(Math.sqrt(U*U+$*$+I*I)),g=je(Math.sqrt(Z*Z+re*re)),x=Fi(B,Z),M=Math.abs(x)>2e-4?x*Qn:0,S=J?1/(J<0?-J:J):0),n.svg&&(j=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!pu(hn(e,Xe)),j&&e.setAttribute("transform",j))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(m*=-1,M+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=je(m),n.scaleY=je(g),n.rotation=je(d)+s,n.rotationX=je(p)+s,n.rotationY=je(_)+s,n.skewX=M+s,n.skewY=y+s,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[sn]=ms(c)),n.xOffset=n.yOffset=0,n.force3D=Bt.force3D,n.renderTransform=n.svg?G_:uu?mu:k_,n.uncache=0,n},ms=function(e){return(e=e.split(" "))[0]+" "+e[1]},pa=function(e,t,n){var i=pt(t);return je(parseFloat(t)+parseFloat(Bn(e,"x",n+"px",i)))+i},k_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,mu(e,t)},Zn="0deg",hr="0px",$n=") ",mu=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,d=n.scaleY,p=n.transformPerspective,_=n.force3D,M=n.target,y=n.zOrigin,S="",v=_==="auto"&&e&&e!==1||_===!0;if(y&&(h!==Zn||u!==Zn)){var A=parseFloat(u)*Wi,P=Math.sin(A),x=Math.cos(A),w;A=parseFloat(h)*Wi,w=Math.cos(A),a=pa(M,a,P*w*-y),s=pa(M,s,-Math.sin(A)*-y),l=pa(M,l,x*w*-y+y)}p!==hr&&(S+="perspective("+p+$n),(i||r)&&(S+="translate("+i+"%, "+r+"%) "),(v||a!==hr||s!==hr||l!==hr)&&(S+=l!==hr||v?"translate3d("+a+", "+s+", "+l+") ":"translate("+a+", "+s+$n),c!==Zn&&(S+="rotate("+c+$n),u!==Zn&&(S+="rotateY("+u+$n),h!==Zn&&(S+="rotateX("+h+$n),(f!==Zn||m!==Zn)&&(S+="skew("+f+", "+m+$n),(g!==1||d!==1)&&(S+="scale("+g+", "+d+$n),M.style[Xe]=S||"translate(0, 0)"},G_=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,d=n.yOrigin,p=n.xOffset,_=n.yOffset,M=n.forceCSS,y=parseFloat(a),S=parseFloat(s),v,A,P,x,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Wi,c*=Wi,v=Math.cos(l)*h,A=Math.sin(l)*h,P=Math.sin(l-c)*-f,x=Math.cos(l-c)*f,c&&(u*=Wi,w=Math.tan(c-u),w=Math.sqrt(1+w*w),P*=w,x*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),v*=w,A*=w)),v=je(v),A=je(A),P=je(P),x=je(x)):(v=h,x=f,A=P=0),(y&&!~(a+"").indexOf("px")||S&&!~(s+"").indexOf("px"))&&(y=Bn(m,"x",a,"px"),S=Bn(m,"y",s,"px")),(g||d||p||_)&&(y=je(y+g-(g*v+d*P)+p),S=je(S+d-(g*A+d*x)+_)),(i||r)&&(w=m.getBBox(),y=je(y+i/100*w.width),S=je(S+r/100*w.height)),w="matrix("+v+","+A+","+P+","+x+","+y+","+S+")",m.setAttribute("transform",w),M&&(m.style[Xe]=w)},V_=function(e,t,n,i,r){var a=360,s=ut(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?Qn:1),c=l-i,u=i+c+"deg",h,f;return s&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Bl)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Bl)%a-~~(c/a)*a)),e._pt=f=new Ct(e._pt,t,n,i,c,T_),f.e=u,f.u="deg",e._props.push(n),f},Xl=function(e,t){for(var n in t)e[n]=t[n];return e},W_=function(e,t,n){var i=Xl({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,s,l,c,u,h,f,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Xe]=t,s=Ar(n,1),Tr(n,Xe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Xe],a[Xe]=t,s=Ar(n,1),a[Xe]=c);for(l in An)c=i[l],u=s[l],c!==u&&r.indexOf(l)<0&&(m=pt(c),g=pt(u),h=m!==g?Bn(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Ct(e._pt,s,l,h,f-h,Fa),e._pt.u=g||0,e._props.push(l));Xl(s,i)};At("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(s){return e<2?o+s:"border"+s+o});ps[e>1?"border"+o:o]=function(s,l,c,u,h){var f,m;if(arguments.length<4)return f=a.map(function(g){return Mn(s,g,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},a.forEach(function(g,d){return m[g]=f[d]=f[d]||f[(d-1)/2|0]}),s.init(l,m,h)}});var gu={name:"css",register:Na,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,s=e.style,l=n.vars.startAt,c,u,h,f,m,g,d,p,_,M,y,S,v,A,P,x;ro||Na(),this.styles=this.styles||cu(e),x=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(Ft[d]&&Jc(d,t,n,i,e,r)))){if(m=typeof u,g=ps[d],m==="function"&&(u=u.call(n,i,e,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=br(u)),g)g(this,e,d,u,n)&&(P=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",zn.lastIndex=0,zn.test(c)||(p=pt(c),_=pt(u)),_?p!==_&&(c=Bn(e,d,c,_)+_):p&&(u+=p),this.add(s,"setProperty",c,u,i,r,0,0,d),a.push(d),x.push(d,0,s[d]);else if(m!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,i,e,r):l[d],ut(c)&&~c.indexOf("random(")&&(c=br(c)),pt(c+"")||(c+=Bt.units[d]||pt(Mn(e,d))||""),(c+"").charAt(1)==="="&&(c=Mn(e,d))):c=Mn(e,d),f=parseFloat(c),M=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),d in wn&&(d==="autoAlpha"&&(f===1&&Mn(e,"visibility")==="hidden"&&h&&(f=0),x.push("visibility",0,s.visibility),Fn(this,s,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=wn[d],~d.indexOf(",")&&(d=d.split(",")[0]))),y=d in An,y){if(this.styles.save(d),S||(v=e._gsap,v.renderTransform&&!t.parseTransform||Ar(e,t.parseTransform),A=t.smoothOrigin!==!1&&v.smooth,S=this._pt=new Ct(this._pt,s,Xe,0,1,v.renderTransform,v,0,-1),S.dep=1),d==="scale")this._pt=new Ct(this._pt,v,"scaleY",v.scaleY,(M?Gi(v.scaleY,M+h):h)-v.scaleY||0,Fa),this._pt.u=0,a.push("scaleY",d),d+="X";else if(d==="transformOrigin"){x.push(sn,0,s[sn]),u=U_(u),v.svg?za(e,u,0,A,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==v.zOrigin&&Fn(this,v,"zOrigin",v.zOrigin,_),Fn(this,s,d,ms(c),ms(u)));continue}else if(d==="svgOrigin"){za(e,u,1,A,0,this);continue}else if(d in du){V_(this,v,d,f,M?Gi(f,M+u):u);continue}else if(d==="smoothOrigin"){Fn(this,v,"smooth",v.smooth,u);continue}else if(d==="force3D"){v[d]=u;continue}else if(d==="transform"){W_(this,u,e);continue}}else d in s||(d=er(d)||d);if(y||(h||h===0)&&(f||f===0)&&!w_.test(u)&&d in s)p=(c+"").substr((f+"").length),h||(h=0),_=pt(u)||(d in Bt.units?Bt.units[d]:p),p!==_&&(f=Bn(e,d,c,_)),this._pt=new Ct(this._pt,y?v:s,d,f,(M?Gi(f,M+h):h)-f,!y&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?A_:Fa),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=E_);else if(d in s)z_.call(this,e,d,c,M?M+u:u);else if(d in e)this.add(e,d,c||e[d],M?M+u:u,i,r);else if(d!=="parseTransform"){Za(d,u);continue}y||(d in s?x.push(d,0,s[d]):x.push(d,1,c||e[d])),a.push(d)}}P&&ru(this)},render:function(e,t){if(t.tween._time||!so())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Mn,aliases:wn,getSetter:function(e,t,n){var i=wn[t];return i&&i.indexOf(",")<0&&(t=i),t in An&&t!==sn&&(e._gsap.x||Mn(e,"x"))?n&&Ul===n?t==="scale"?D_:L_:(Ul=n||{})&&(t==="scale"?R_:I_):e.style&&!Ya(e.style[t])?C_:~t.indexOf("-")?P_:no(e,t)},core:{_removeProperty:Tr,_getMatrix:oo}};Gt.utils.checkPrefix=er;Gt.core.getStyleSaver=cu;(function(o,e,t,n){var i=At(o+","+e+","+t,function(r){An[r]=1});At(e,function(r){Bt.units[r]="deg",du[r]=1}),wn[i[13]]=o+","+e,At(n,function(r){var a=r.split(":");wn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");At("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Bt.units[o]="px"});Gt.registerPlugin(gu);var _u=Gt.registerPlugin(gu)||Gt;_u.core.Tween;window.addEventListener("load",()=>{const o=new bg,e=new Xa(3,64,64),t=new wg({color:"#4834d4",roughness:.4}),n=new bn(e,t);o.add(n);const i={width:window.innerWidth,height:window.innerHeight},r=new Cg(16777215,1,1e3);r.position.set(1,10,10),r.intensity=1,o.add(r);const a=new Ot(45,i.width/i.height,.1,100);a.position.z=20,o.add(a);const s=document.querySelector(".webgl"),l=new xc({canvas:s});l.setSize(i.width,i.height),l.setPixelRatio(1),l.render(o,a),l.setClearColor("#0c0e10");const c=new Pg(a,s);c.enableDamping=!0,c.enablePan=!1,c.enableZoom=!1,c.autoRotate=!0,c.autoRotateSpeed=5,window.addEventListener("resize",()=>{i.width=window.innerWidth,i.height=window.innerHeight,a.aspect=i.width/i.height,a.updateProjectionMatrix(),l.setSize(i.width,i.height)});const u=()=>{c.update(),l.render(o,a),window.requestAnimationFrame(u)};u();const h=_u.timeline({defaults:{duration:0}});h.fromTo(n.scale,{z:0,x:0,y:0},{z:1,x:1,y:1}),h.fromTo("nav",{y:"0%"},{y:"0%"}),h.fromTo(".title",{opacity:0},{opacity:1})});new Swiper(".mySwiper",{slidesPerView:1,spaceBetween:10,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:4,spaceBetween:40},1024:{slidesPerView:5,spaceBetween:50}}});
