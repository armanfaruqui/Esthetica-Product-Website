(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fa="148",cu=0,so=1,uu=2,Ol=1,hu=2,hr=3,oi=0,Wt=1,Oa=2,Nr=3,In=0,zi=1,ao=2,oo=3,lo=4,fu=5,Pi=100,du=101,pu=102,co=103,uo=104,mu=200,gu=201,_u=202,xu=203,Nl=204,zl=205,vu=206,yu=207,Mu=208,Su=209,bu=210,wu=0,Tu=1,Eu=2,ga=3,Cu=4,Au=5,Lu=6,Pu=7,Ul=0,Du=1,Ru=2,Sn=0,Iu=1,Fu=2,Ou=3,Nu=4,zu=5,Bl=300,Wi=301,Hi=302,_a=303,xa=304,_s=306,va=1e3,Kt=1001,ya=1002,vt=1003,ho=1004,Ls=1005,kt=1006,Uu=1007,wr=1008,li=1009,Bu=1010,ku=1011,kl=1012,Gu=1013,Jn=1014,Qn=1015,Tr=1016,Vu=1017,Wu=1018,Ui=1020,Hu=1021,qu=1022,Jt=1023,Xu=1024,Yu=1025,ni=1026,qi=1027,ju=1028,Zu=1029,$u=1030,Ku=1031,Ju=1033,Ps=33776,Ds=33777,Rs=33778,Is=33779,fo=35840,po=35841,mo=35842,go=35843,Qu=36196,_o=37492,xo=37496,vo=37808,yo=37809,Mo=37810,So=37811,bo=37812,wo=37813,To=37814,Eo=37815,Co=37816,Ao=37817,Lo=37818,Po=37819,Do=37820,Ro=37821,Io=36492,ci=3e3,ke=3001,eh=3200,th=3201,nh=0,ih=1,tn="srgb",Er="srgb-linear",Fs=7680,rh=519,Fo=35044,Oo="300 es",Ma=1035;class Qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Os=Math.PI/180,No=180/Math.PI;function Pr(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ut[o&255]+ut[o>>8&255]+ut[o>>16&255]+ut[o>>24&255]+"-"+ut[e&255]+ut[e>>8&255]+"-"+ut[e>>16&15|64]+ut[e>>24&255]+"-"+ut[t&63|128]+ut[t>>8&255]+"-"+ut[t>>16&255]+ut[t>>24&255]+ut[n&255]+ut[n>>8&255]+ut[n>>16&255]+ut[n>>24&255]).toLowerCase()}function Dt(o,e,t){return Math.max(e,Math.min(t,o))}function sh(o,e){return(o%e+e)%e}function Ns(o,e,t){return(1-t)*o+t*e}function zo(o){return(o&o-1)===0&&o!==0}function Sa(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function zr(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ct(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Rt{constructor(){Rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,s,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=s,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],p=i[0],d=i[3],x=i[6],b=i[1],v=i[4],S=i[7],y=i[2],C=i[5],A=i[8];return r[0]=a*p+s*b+c*y,r[3]=a*d+s*v+c*C,r[6]=a*x+s*S+c*A,r[1]=l*p+u*b+h*y,r[4]=l*d+u*v+h*C,r[7]=l*x+u*S+h*A,r[2]=f*p+m*b+g*y,r[5]=f*d+m*v+g*C,r[8]=f*x+m*S+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*s*l-n*r*u+n*s*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],c=e[6],l=e[7],u=e[8],h=u*a-s*l,f=s*c-u*r,m=l*r-a*c,g=t*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=h*p,e[1]=(i*l-u*n)*p,e[2]=(s*n-i*a)*p,e[3]=f*p,e[4]=(u*t-i*c)*p,e[5]=(i*r-s*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(a*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,s){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*s)+a+e,-i*l,i*c,-i*(-l*a+c*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(zs.makeScale(e,t)),this}rotate(e){return this.premultiply(zs.makeRotation(-e)),this}translate(e,t){return this.premultiply(zs.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zs=new Rt;function Gl(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Cr(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ii(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function is(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Us={[tn]:{[Er]:ii},[Er]:{[tn]:is}},gt={legacyMode:!0,get workingColorSpace(){return Er},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(Us[e]&&Us[e][t]!==void 0){const n=Us[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},Vl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qe={r:0,g:0,b:0},jt={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function Bs(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function Br(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=gt.workingColorSpace){if(e=sh(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Bs(a,r,e+1/3),this.g=Bs(a,r,e),this.b=Bs(a,r,e-1/3)}return gt.toWorkingColorSpace(this,i),this}setStyle(e,t=tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,gt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,gt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const c=parseFloat(r[1])/360,l=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(c,l,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,gt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,gt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=tn){const n=Vl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return gt.fromWorkingColorSpace(Br(this,Qe),e),Dt(Qe.r*255,0,255)<<16^Dt(Qe.g*255,0,255)<<8^Dt(Qe.b*255,0,255)<<0}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(Br(this,Qe),t);const n=Qe.r,i=Qe.g,r=Qe.b,a=Math.max(n,i,r),s=Math.min(n,i,r);let c,l;const u=(s+a)/2;if(s===a)c=0,l=0;else{const h=a-s;switch(l=u<=.5?h/(a+s):h/(2-a-s),a){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(Br(this,Qe),t),e.r=Qe.r,e.g=Qe.g,e.b=Qe.b,e}getStyle(e=tn){return gt.fromWorkingColorSpace(Br(this,Qe),e),e!==tn?`color(${e} ${Qe.r} ${Qe.g} ${Qe.b})`:`rgb(${Qe.r*255|0},${Qe.g*255|0},${Qe.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(jt),jt.h+=e,jt.s+=t,jt.l+=n,this.setHSL(jt.h,jt.s,jt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jt),e.getHSL(Ur);const n=Ns(jt.h,Ur.h,t),i=Ns(jt.s,Ur.s,t),r=Ns(jt.l,Ur.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}He.NAMES=Vl;let mi;class Wl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{mi===void 0&&(mi=Cr("canvas")),mi.width=e.width,mi.height=e.height;const n=mi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ii(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ii(t[n]/255)*255):t[n]=ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Hl{constructor(e=null){this.isSource=!0,this.uuid=Pr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?r.push(ks(i[a].image)):r.push(ks(i[a]))}else r=ks(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ks(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Wl.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ah=0;class Mt extends Qi{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=Kt,i=Kt,r=kt,a=wr,s=Jt,c=li,l=Mt.DEFAULT_ANISOTROPY,u=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=Pr(),this.name="",this.source=new Hl(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case va:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case va:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=Bl;Mt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,i=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],m=c[5],g=c[9],p=c[2],d=c[6],x=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-p)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+p)<.1&&Math.abs(g+d)<.1&&Math.abs(l+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,S=(m+1)/2,y=(x+1)/2,C=(u+f)/4,A=(h+p)/4,_=(g+d)/4;return v>S&&v>y?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=C/n,r=A/n):S>y?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=C/i,r=_/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=A/r,i=_/r),this.set(n,i,r,t),this}let b=Math.sqrt((d-g)*(d-g)+(h-p)*(h-p)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(d-g)/b,this.y=(h-p)/b,this.z=(f-u)/b,this.w=Math.acos((l+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ui extends Qi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Mt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Hl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ql extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vt,this.minFilter=vt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oh extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vt,this.minFilter=vt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,s){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],m=r[a+1],g=r[a+2],p=r[a+3];if(s===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(s===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(h!==p||c!==f||l!==m||u!==g){let d=1-s;const x=c*f+l*m+u*g+h*p,b=x>=0?1:-1,v=1-x*x;if(v>Number.EPSILON){const y=Math.sqrt(v),C=Math.atan2(y,x*b);d=Math.sin(d*C)/y,s=Math.sin(s*C)/y}const S=s*b;if(c=c*d+f*S,l=l*d+m*S,u=u*d+g*S,h=h*d+p*S,d===1-s){const y=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=y,l*=y,u*=y,h*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const s=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return e[t]=s*g+u*h+c*m-l*f,e[t+1]=c*g+u*f+l*h-s*m,e[t+2]=l*g+u*m+s*f-c*h,e[t+3]=u*g-s*h-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,s=Math.cos,c=Math.sin,l=s(n/2),u=s(i/2),h=s(r/2),f=c(n/2),m=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"YZX":this._x=f*u*h+l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h-f*m*g;break;case"XZY":this._x=f*u*h-l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],s=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+s+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(a-i)*m}else if(n>s&&n>h){const m=2*Math.sqrt(1+n-s-h);this._w=(u-c)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+l)/m}else if(s>h){const m=2*Math.sqrt(1+s-n-h);this._w=(r-l)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-s);this._w=(a-i)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,s=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*s+i*l-r*c,this._y=i*u+a*c+r*s-n*l,this._z=r*u+a*l+n*c-i*s,this._w=a*u-n*s-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let s=a*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-s*s;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,s),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,s=e.z,c=e.w,l=c*t+a*i-s*n,u=c*n+s*t-r*i,h=c*i+r*n-a*t,f=-r*t-a*n-s*i;return this.x=l*c+f*-r+u*-s-h*-a,this.y=u*c+f*-a+h*-r-l*-s,this.z=h*c+f*-s+l*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,s=t.y,c=t.z;return this.x=i*c-r*s,this.y=r*a-n*c,this.z=n*s-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gs.copy(this).projectOnVector(e),this.sub(Gs)}reflect(e){return this.sub(Gs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gs=new O,Uo=new Dr;class Rr{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],h=e[c+1],f=e[c+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>a&&(a=h),f>s&&(s=f)}return this.min.set(t,n,i),this.max.set(r,a,s),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),h=e.getY(c),f=e.getZ(c);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>a&&(a=h),f>s&&(s=f)}return this.min.set(t,n,i),this.max.set(r,a,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,s=r.count;a<s;a++)Wn.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Wn)}else n.boundingBox===null&&n.computeBoundingBox(),Vs.copy(n.boundingBox),Vs.applyMatrix4(e.matrixWorld),this.union(Vs);const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),kr.subVectors(this.max,ir),gi.subVectors(e.a,ir),_i.subVectors(e.b,ir),xi.subVectors(e.c,ir),Tn.subVectors(_i,gi),En.subVectors(xi,_i),Hn.subVectors(gi,xi);let t=[0,-Tn.z,Tn.y,0,-En.z,En.y,0,-Hn.z,Hn.y,Tn.z,0,-Tn.x,En.z,0,-En.x,Hn.z,0,-Hn.x,-Tn.y,Tn.x,0,-En.y,En.x,0,-Hn.y,Hn.x,0];return!Ws(t,gi,_i,xi,kr)||(t=[1,0,0,0,1,0,0,0,1],!Ws(t,gi,_i,xi,kr))?!1:(Gr.crossVectors(Tn,En),t=[Gr.x,Gr.y,Gr.z],Ws(t,gi,_i,xi,kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Wn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const dn=[new O,new O,new O,new O,new O,new O,new O,new O],Wn=new O,Vs=new Rr,gi=new O,_i=new O,xi=new O,Tn=new O,En=new O,Hn=new O,ir=new O,kr=new O,Gr=new O,qn=new O;function Ws(o,e,t,n,i){for(let r=0,a=o.length-3;r<=a;r+=3){qn.fromArray(o,r);const s=i.x*Math.abs(qn.x)+i.y*Math.abs(qn.y)+i.z*Math.abs(qn.z),c=e.dot(qn),l=t.dot(qn),u=n.dot(qn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>s)return!1}return!0}const lh=new Rr,rr=new O,Hs=new O;class Na{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):lh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rr.subVectors(e,this.center);const t=rr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(rr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rr.copy(e.center).add(Hs)),this.expandByPoint(rr.copy(e.center).sub(Hs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new O,qs=new O,Vr=new O,Cn=new O,Xs=new O,Wr=new O,Ys=new O;class ch{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.direction).multiplyScalar(t).add(this.origin),pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){qs.copy(e).add(t).multiplyScalar(.5),Vr.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(qs);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Vr),s=Cn.dot(this.direction),c=-Cn.dot(Vr),l=Cn.lengthSq(),u=Math.abs(1-a*a);let h,f,m,g;if(u>0)if(h=a*c-s,f=a*s-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const p=1/u;h*=p,f*=p,m=h*(h+a*f+2*s)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*r+s)),f=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(h=Math.max(0,-(a*r+s)),f=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Vr).multiplyScalar(f).add(qs),m}intersectSphere(e,t){pn.subVectors(e.center,this.origin);const n=pn.dot(this.direction),i=pn.dot(pn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),s=n-a,c=n+a;return s<0&&c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,s,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(s=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(s=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||s>i)||((s>n||n!==n)&&(n=s),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,n,i,r){Xs.subVectors(t,e),Wr.subVectors(n,e),Ys.crossVectors(Xs,Wr);let a=this.direction.dot(Ys),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Cn.subVectors(this.origin,e);const c=s*this.direction.dot(Wr.crossVectors(Cn,Wr));if(c<0)return null;const l=s*this.direction.dot(Xs.cross(Cn));if(l<0||c+l>a)return null;const u=-s*Cn.dot(Ys);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,s,c,l,u,h,f,m,g,p,d){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=r,x[5]=a,x[9]=s,x[13]=c,x[2]=l,x[6]=u,x[10]=h,x[14]=f,x[3]=m,x[7]=g,x[11]=p,x[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/vi.setFromMatrixColumn(e,0).length(),r=1/vi.setFromMatrixColumn(e,1).length(),a=1/vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),s=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,m=a*h,g=s*u,p=s*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=f-p*l,t[9]=-s*c,t[2]=p-f*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,m=c*h,g=l*u,p=l*h;t[0]=f+p*s,t[4]=g*s-m,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-s,t[2]=m*s-g,t[6]=p+f*s,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,m=c*h,g=l*u,p=l*h;t[0]=f-p*s,t[4]=-a*h,t[8]=g+m*s,t[1]=m+g*s,t[5]=a*u,t[9]=p-f*s,t[2]=-a*l,t[6]=s,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,m=a*h,g=s*u,p=s*h;t[0]=c*u,t[4]=g*l-m,t[8]=f*l+p,t[1]=c*h,t[5]=p*l+f,t[9]=m*l-g,t[2]=-l,t[6]=s*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*l,g=s*c,p=s*l;t[0]=c*u,t[4]=p-f*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-s*u,t[2]=-l*u,t[6]=m*h+g,t[10]=f-p*h}else if(e.order==="XZY"){const f=a*c,m=a*l,g=s*c,p=s*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+p,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=s*u,t[10]=p*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uh,e,hh)}lookAt(e,t,n){const i=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),An.crossVectors(n,At),An.lengthSq()===0&&(Math.abs(n.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),An.crossVectors(n,At)),An.normalize(),Hr.crossVectors(At,An),i[0]=An.x,i[4]=Hr.x,i[8]=At.x,i[1]=An.y,i[5]=Hr.y,i[9]=At.y,i[2]=An.z,i[6]=Hr.z,i[10]=At.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],p=n[6],d=n[10],x=n[14],b=n[3],v=n[7],S=n[11],y=n[15],C=i[0],A=i[4],_=i[8],T=i[12],P=i[1],N=i[5],$=i[9],R=i[13],D=i[2],U=i[6],Y=i[10],j=i[14],W=i[3],Q=i[7],K=i[11],z=i[15];return r[0]=a*C+s*P+c*D+l*W,r[4]=a*A+s*N+c*U+l*Q,r[8]=a*_+s*$+c*Y+l*K,r[12]=a*T+s*R+c*j+l*z,r[1]=u*C+h*P+f*D+m*W,r[5]=u*A+h*N+f*U+m*Q,r[9]=u*_+h*$+f*Y+m*K,r[13]=u*T+h*R+f*j+m*z,r[2]=g*C+p*P+d*D+x*W,r[6]=g*A+p*N+d*U+x*Q,r[10]=g*_+p*$+d*Y+x*K,r[14]=g*T+p*R+d*j+x*z,r[3]=b*C+v*P+S*D+y*W,r[7]=b*A+v*N+S*U+y*Q,r[11]=b*_+v*$+S*Y+y*K,r[15]=b*T+v*R+S*j+y*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],s=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],p=e[7],d=e[11],x=e[15];return g*(+r*c*h-i*l*h-r*s*f+n*l*f+i*s*m-n*c*m)+p*(+t*c*m-t*l*f+r*a*f-i*a*m+i*l*u-r*c*u)+d*(+t*l*h-t*s*m-r*a*h+n*a*m+r*s*u-n*l*u)+x*(-i*s*u-t*c*h+t*s*f+i*a*h-n*a*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],p=e[13],d=e[14],x=e[15],b=h*d*l-p*f*l+p*c*m-s*d*m-h*c*x+s*f*x,v=g*f*l-u*d*l-g*c*m+a*d*m+u*c*x-a*f*x,S=u*p*l-g*h*l+g*s*m-a*p*m-u*s*x+a*h*x,y=g*h*c-u*p*c-g*s*f+a*p*f+u*s*d-a*h*d,C=t*b+n*v+i*S+r*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=b*A,e[1]=(p*f*r-h*d*r-p*i*m+n*d*m+h*i*x-n*f*x)*A,e[2]=(s*d*r-p*c*r+p*i*l-n*d*l-s*i*x+n*c*x)*A,e[3]=(h*c*r-s*f*r-h*i*l+n*f*l+s*i*m-n*c*m)*A,e[4]=v*A,e[5]=(u*d*r-g*f*r+g*i*m-t*d*m-u*i*x+t*f*x)*A,e[6]=(g*c*r-a*d*r-g*i*l+t*d*l+a*i*x-t*c*x)*A,e[7]=(a*f*r-u*c*r+u*i*l-t*f*l-a*i*m+t*c*m)*A,e[8]=S*A,e[9]=(g*h*r-u*p*r-g*n*m+t*p*m+u*n*x-t*h*x)*A,e[10]=(a*p*r-g*s*r+g*n*l-t*p*l-a*n*x+t*s*x)*A,e[11]=(u*s*r-a*h*r-u*n*l+t*h*l+a*n*m-t*s*m)*A,e[12]=y*A,e[13]=(u*p*i-g*h*i+g*n*f-t*p*f-u*n*d+t*h*d)*A,e[14]=(g*s*i-a*p*i-g*n*c+t*p*c+a*n*d-t*s*d)*A,e[15]=(a*h*i-u*s*i+u*n*c-t*h*c-a*n*f+t*s*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,s=e.y,c=e.z,l=r*a,u=r*s;return this.set(l*a+n,l*s-i*c,l*c+i*s,0,l*s+i*c,u*s+n,u*c-i*a,0,l*c-i*s,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,s=t._z,c=t._w,l=r+r,u=a+a,h=s+s,f=r*l,m=r*u,g=r*h,p=a*u,d=a*h,x=s*h,b=c*l,v=c*u,S=c*h,y=n.x,C=n.y,A=n.z;return i[0]=(1-(p+x))*y,i[1]=(m+S)*y,i[2]=(g-v)*y,i[3]=0,i[4]=(m-S)*C,i[5]=(1-(f+x))*C,i[6]=(d+b)*C,i[7]=0,i[8]=(g+v)*A,i[9]=(d-b)*A,i[10]=(1-(f+p))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=vi.set(i[0],i[1],i[2]).length();const a=vi.set(i[4],i[5],i[6]).length(),s=vi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Zt.copy(this);const l=1/r,u=1/a,h=1/s;return Zt.elements[0]*=l,Zt.elements[1]*=l,Zt.elements[2]*=l,Zt.elements[4]*=u,Zt.elements[5]*=u,Zt.elements[6]*=u,Zt.elements[8]*=h,Zt.elements[9]*=h,Zt.elements[10]*=h,t.setFromRotationMatrix(Zt),n.x=r,n.y=a,n.z=s,this}makePerspective(e,t,n,i,r,a){const s=this.elements,c=2*r/(t-e),l=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(a+r)/(a-r),m=-2*a*r/(a-r);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=h,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,i,r,a){const s=this.elements,c=1/(t-e),l=1/(n-i),u=1/(a-r),h=(t+e)*c,f=(n+i)*l,m=(a+r)*u;return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-h,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vi=new O,Zt=new lt,uh=new O(0,0,0),hh=new O(1,1,1),An=new O,Hr=new O,At=new O,Bo=new lt,ko=new Dr;class Ir{constructor(e=0,t=0,n=0,i=Ir.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],s=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Dt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ko.setFromEuler(this),this.setFromQuaternion(ko,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ir.DefaultOrder="XYZ";Ir.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Xl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fh=0;const Go=new O,yi=new Dr,mn=new lt,qr=new O,sr=new O,dh=new O,ph=new Dr,Vo=new O(1,0,0),Wo=new O(0,1,0),Ho=new O(0,0,1),mh={type:"added"},qo={type:"removed"};class St extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=Pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DefaultUp.clone();const e=new O,t=new Ir,n=new Dr,i=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new lt},normalMatrix:{value:new Rt}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=St.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=St.DefaultMatrixWorldAutoUpdate,this.layers=new Xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(Vo,e)}rotateY(e){return this.rotateOnAxis(Wo,e)}rotateZ(e){return this.rotateOnAxis(Ho,e)}translateOnAxis(e,t){return Go.copy(e).applyQuaternion(this.quaternion),this.position.add(Go.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vo,e)}translateY(e){return this.translateOnAxis(Wo,e)}translateZ(e){return this.translateOnAxis(Ho,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qr.copy(e):qr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(sr,qr,this.up):mn.lookAt(qr,sr,this.up),this.quaternion.setFromRotationMatrix(mn),i&&(mn.extractRotation(i.matrixWorld),yi.setFromRotationMatrix(mn),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(mh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qo)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(qo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,e,dh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,ph,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,l=this.material.length;c<l;c++)s.push(r(e.materials,this.material[c]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];i.animations.push(r(e.animations,c))}}if(t){const s=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);s.length>0&&(n.geometries=s),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(s){const c=[];for(const l in s){const u=s[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}St.DefaultUp=new O(0,1,0);St.DefaultMatrixAutoUpdate=!0;St.DefaultMatrixWorldAutoUpdate=!0;const $t=new O,gn=new O,js=new O,_n=new O,Mi=new O,Si=new O,Xo=new O,Zs=new O,$s=new O,Ks=new O;class vn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),$t.subVectors(e,t),i.cross($t);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){$t.subVectors(i,t),gn.subVectors(n,t),js.subVectors(e,t);const a=$t.dot($t),s=$t.dot(gn),c=$t.dot(js),l=gn.dot(gn),u=gn.dot(js),h=a*l-s*s;if(h===0)return r.set(-2,-1,-1);const f=1/h,m=(l*c-s*u)*f,g=(a*u-s*c)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,_n),_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getUV(e,t,n,i,r,a,s,c){return this.getBarycoord(e,t,n,i,_n),c.set(0,0),c.addScaledVector(r,_n.x),c.addScaledVector(a,_n.y),c.addScaledVector(s,_n.z),c}static isFrontFacing(e,t,n,i){return $t.subVectors(n,t),gn.subVectors(e,t),$t.cross(gn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),$t.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return vn.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,s;Mi.subVectors(i,n),Si.subVectors(r,n),Zs.subVectors(e,n);const c=Mi.dot(Zs),l=Si.dot(Zs);if(c<=0&&l<=0)return t.copy(n);$s.subVectors(e,i);const u=Mi.dot($s),h=Si.dot($s);if(u>=0&&h<=u)return t.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Mi,a);Ks.subVectors(e,r);const m=Mi.dot(Ks),g=Si.dot(Ks);if(g>=0&&m<=g)return t.copy(r);const p=m*l-c*g;if(p<=0&&l>=0&&g<=0)return s=l/(l-g),t.copy(n).addScaledVector(Si,s);const d=u*g-m*h;if(d<=0&&h-u>=0&&m-g>=0)return Xo.subVectors(r,i),s=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(Xo,s);const x=1/(d+p+f);return a=p*x,s=f*x,t.copy(n).addScaledVector(Mi,a).addScaledVector(Si,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let gh=0;class xs extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=Pr(),this.name="",this.type="Material",this.blending=zi,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Nl,this.blendDst=zl,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const s in r){const c=r[s];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ln extends xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ze=new O,Xr=new Be;class an{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xr.fromBufferAttribute(this,t),Xr.applyMatrix3(e),this.setXY(t,Xr.x,Xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyMatrix3(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyMatrix4(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyNormalMatrix(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.transformDirection(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Yl extends an{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jl extends an{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ri extends an{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _h=0;const Bt=new lt,Js=new St,bi=new O,Lt=new Rr,ar=new Rr,st=new O;class di extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=Pr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gl(e)?jl:Yl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,n){return Bt.makeTranslation(e,t,n),this.applyMatrix4(Bt),this}scale(e,t,n){return Bt.makeScale(e,t,n),this.applyMatrix4(Bt),this}lookAt(e){return Js.lookAt(e),Js.updateMatrix(),this.applyMatrix4(Js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bi).negate(),this.translate(bi.x,bi.y,bi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ri(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Lt.setFromBufferAttribute(r),this.morphTargetsRelative?(st.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(st),st.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(st)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Na);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const s=t[r];ar.setFromBufferAttribute(s),this.morphTargetsRelative?(st.addVectors(Lt.min,ar.min),Lt.expandByPoint(st),st.addVectors(Lt.max,ar.max),Lt.expandByPoint(st)):(Lt.expandByPoint(ar.min),Lt.expandByPoint(ar.max))}Lt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)st.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(st));if(t)for(let r=0,a=t.length;r<a;r++){const s=t[r],c=this.morphTargetsRelative;for(let l=0,u=s.count;l<u;l++)st.fromBufferAttribute(s,l),c&&(bi.fromBufferAttribute(e,l),st.add(bi)),i=Math.max(i,n.distanceToSquared(st))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*s),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let P=0;P<s;P++)l[P]=new O,u[P]=new O;const h=new O,f=new O,m=new O,g=new Be,p=new Be,d=new Be,x=new O,b=new O;function v(P,N,$){h.fromArray(i,P*3),f.fromArray(i,N*3),m.fromArray(i,$*3),g.fromArray(a,P*2),p.fromArray(a,N*2),d.fromArray(a,$*2),f.sub(h),m.sub(h),p.sub(g),d.sub(g);const R=1/(p.x*d.y-d.x*p.y);isFinite(R)&&(x.copy(f).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(R),b.copy(m).multiplyScalar(p.x).addScaledVector(f,-d.x).multiplyScalar(R),l[P].add(x),l[N].add(x),l[$].add(x),u[P].add(b),u[N].add(b),u[$].add(b))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let P=0,N=S.length;P<N;++P){const $=S[P],R=$.start,D=$.count;for(let U=R,Y=R+D;U<Y;U+=3)v(n[U+0],n[U+1],n[U+2])}const y=new O,C=new O,A=new O,_=new O;function T(P){A.fromArray(r,P*3),_.copy(A);const N=l[P];y.copy(N),y.sub(A.multiplyScalar(A.dot(N))).normalize(),C.crossVectors(_,N);const R=C.dot(u[P])<0?-1:1;c[P*4]=y.x,c[P*4+1]=y.y,c[P*4+2]=y.z,c[P*4+3]=R}for(let P=0,N=S.length;P<N;++P){const $=S[P],R=$.start,D=$.count;for(let U=R,Y=R+D;U<Y;U+=3)T(n[U+0]),T(n[U+1]),T(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new O,r=new O,a=new O,s=new O,c=new O,l=new O,u=new O,h=new O;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),p=e.getX(f+1),d=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,p),a.fromBufferAttribute(t,d),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),s.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,d),s.add(u),c.add(u),l.add(u),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)st.fromBufferAttribute(e,t),st.normalize(),e.setXYZ(t,st.x,st.y,st.z)}toNonIndexed(){function e(s,c){const l=s.array,u=s.itemSize,h=s.normalized,f=new l.constructor(c.length*u);let m=0,g=0;for(let p=0,d=c.length;p<d;p++){s.isInterleavedBufferAttribute?m=c[p]*s.data.stride+s.offset:m=c[p]*u;for(let x=0;x<u;x++)f[g++]=l[m++]}return new an(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new di,n=this.index.array,i=this.attributes;for(const s in i){const c=i[s],l=e(c,n);t.setAttribute(s,l)}const r=this.morphAttributes;for(const s in r){const c=[],l=r[s];for(let u=0,h=l.length;u<h;u++){const f=l[u],m=e(f,n);c.push(m)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,c=a.length;s<c;s++){const l=a[s];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yo=new lt,wi=new ch,Qs=new Na,or=new O,lr=new O,cr=new O,ea=new O,Yr=new O,jr=new Be,Zr=new Be,$r=new Be,ta=new O,Kr=new O;class yn extends St{constructor(e=new di,t=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const s=this.morphTargetInfluences;if(r&&s){Yr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=s[c],h=r[c];u!==0&&(ea.fromBufferAttribute(h,e),a?Yr.addScaledVector(ea,u):Yr.addScaledVector(ea.sub(t),u))}t.add(Yr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),e.ray.intersectsSphere(Qs)===!1)||(Yo.copy(r).invert(),wi.copy(e.ray).applyMatrix4(Yo),n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1))return;let a;const s=n.index,c=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(s!==null)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const p=h[m],d=i[p.materialIndex],x=Math.max(p.start,f.start),b=Math.min(s.count,Math.min(p.start+p.count,f.start+f.count));for(let v=x,S=b;v<S;v+=3){const y=s.getX(v),C=s.getX(v+1),A=s.getX(v+2);a=Jr(this,d,e,wi,l,u,y,C,A),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,f.start),g=Math.min(s.count,f.start+f.count);for(let p=m,d=g;p<d;p+=3){const x=s.getX(p),b=s.getX(p+1),v=s.getX(p+2);a=Jr(this,i,e,wi,l,u,x,b,v),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const p=h[m],d=i[p.materialIndex],x=Math.max(p.start,f.start),b=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let v=x,S=b;v<S;v+=3){const y=v,C=v+1,A=v+2;a=Jr(this,d,e,wi,l,u,y,C,A),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let p=m,d=g;p<d;p+=3){const x=p,b=p+1,v=p+2;a=Jr(this,i,e,wi,l,u,x,b,v),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function xh(o,e,t,n,i,r,a,s){let c;if(e.side===Wt?c=n.intersectTriangle(a,r,i,!0,s):c=n.intersectTriangle(i,r,a,e.side===oi,s),c===null)return null;Kr.copy(s),Kr.applyMatrix4(o.matrixWorld);const l=t.ray.origin.distanceTo(Kr);return l<t.near||l>t.far?null:{distance:l,point:Kr.clone(),object:o}}function Jr(o,e,t,n,i,r,a,s,c){o.getVertexPosition(a,or),o.getVertexPosition(s,lr),o.getVertexPosition(c,cr);const l=xh(o,e,t,n,or,lr,cr,ta);if(l){i&&(jr.fromBufferAttribute(i,a),Zr.fromBufferAttribute(i,s),$r.fromBufferAttribute(i,c),l.uv=vn.getUV(ta,or,lr,cr,jr,Zr,$r,new Be)),r&&(jr.fromBufferAttribute(r,a),Zr.fromBufferAttribute(r,s),$r.fromBufferAttribute(r,c),l.uv2=vn.getUV(ta,or,lr,cr,jr,Zr,$r,new Be));const u={a,b:s,c,normal:new O,materialIndex:0};vn.getNormal(or,lr,cr,u.normal),l.face=u}return l}class er extends di{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const s=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ri(l,3)),this.setAttribute("normal",new ri(u,3)),this.setAttribute("uv",new ri(h,2));function g(p,d,x,b,v,S,y,C,A,_,T){const P=S/A,N=y/_,$=S/2,R=y/2,D=C/2,U=A+1,Y=_+1;let j=0,W=0;const Q=new O;for(let K=0;K<Y;K++){const z=K*N-R;for(let V=0;V<U;V++){const Z=V*P-$;Q[p]=Z*b,Q[d]=z*v,Q[x]=D,l.push(Q.x,Q.y,Q.z),Q[p]=0,Q[d]=0,Q[x]=C>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(V/A),h.push(1-K/_),j+=1}}for(let K=0;K<_;K++)for(let z=0;z<A;z++){const V=f+z+U*K,Z=f+z+U*(K+1),ee=f+(z+1)+U*(K+1),re=f+(z+1)+U*K;c.push(V,Z,re),c.push(Z,ee,re),W+=6}s.addGroup(m,W,T),m+=W,f+=j}}static fromJSON(e){return new er(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xi(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function xt(o){const e={};for(let t=0;t<o.length;t++){const n=Xi(o[t]);for(const i in n)e[i]=n[i]}return e}function vh(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function Zl(o){return o.getRenderTarget()===null&&o.outputEncoding===ke?tn:Er}const yh={clone:Xi,merge:xt};var Mh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mh,this.fragmentShader=Sh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xi(e.uniforms),this.uniformsGroups=vh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $l extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Gt extends $l{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=No*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return No*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Os*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ti=-90,Ei=1;class bh extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Gt(Ti,Ei,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Gt(Ti,Ei,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new Gt(Ti,Ei,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const s=new Gt(Ti,Ei,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const c=new Gt(Ti,Ei,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Gt(Ti,Ei,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,s,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Sn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Kl extends Mt{constructor(e,t,n,i,r,a,s,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Wi,super(e,t,n,i,r,a,s,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wh extends ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Kl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new er(5,5,5),r=new hi({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:In});r.uniforms.tEquirect.value=t;const a=new yn(i,r),s=t.minFilter;return t.minFilter===wr&&(t.minFilter=kt),new bh(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const na=new O,Th=new O,Eh=new Rt;class jn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=na.subVectors(n,t).cross(Th.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(na),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Eh.getNormalMatrix(e),i=this.coplanarPoint(na).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new Na,Qr=new O;class Jl{constructor(e=new jn,t=new jn,n=new jn,i=new jn,r=new jn,a=new jn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],s=n[3],c=n[4],l=n[5],u=n[6],h=n[7],f=n[8],m=n[9],g=n[10],p=n[11],d=n[12],x=n[13],b=n[14],v=n[15];return t[0].setComponents(s-i,h-c,p-f,v-d).normalize(),t[1].setComponents(s+i,h+c,p+f,v+d).normalize(),t[2].setComponents(s+r,h+l,p+m,v+x).normalize(),t[3].setComponents(s-r,h-l,p-m,v-x).normalize(),t[4].setComponents(s-a,h-u,p-g,v-b).normalize(),t[5].setComponents(s+a,h+u,p+g,v+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSprite(e){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Qr.x=i.normal.x>0?e.max.x:e.min.x,Qr.y=i.normal.y>0?e.max.y:e.min.y,Qr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ql(){let o=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){o=r}}}function Ch(o,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,f=l.usage,m=o.createBuffer();o.bindBuffer(u,m),o.bufferData(u,h,f),l.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,h){const f=u.array,m=u.updateRange;o.bindBuffer(h,l),m.count===-1?o.bufferSubData(h,0,f):(t?o.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):o.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(o.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(r(h.buffer,l,u),h.version=l.version)}return{get:a,remove:s,update:c}}class za extends di{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,s=Math.floor(n),c=Math.floor(i),l=s+1,u=c+1,h=e/s,f=t/c,m=[],g=[],p=[],d=[];for(let x=0;x<u;x++){const b=x*f-a;for(let v=0;v<l;v++){const S=v*h-r;g.push(S,-b,0),p.push(0,0,1),d.push(v/s),d.push(1-x/c)}}for(let x=0;x<c;x++)for(let b=0;b<s;b++){const v=b+l*x,S=b+l*(x+1),y=b+1+l*(x+1),C=b+1+l*x;m.push(v,S,C),m.push(S,y,C)}this.setIndex(m),this.setAttribute("position",new ri(g,3)),this.setAttribute("normal",new ri(p,3)),this.setAttribute("uv",new ri(d,2))}static fromJSON(e){return new za(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ah=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Lh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ph=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Dh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ih=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fh="vec3 transformed = vec3( position );",Oh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,zh=`#ifdef USE_IRIDESCENCE
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
#endif`,Uh=`#ifdef USE_BUMPMAP
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
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yh=`#define PI 3.141592653589793
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
}`,jh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zh=`vec3 transformedNormal = objectNormal;
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
#endif`,$h=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Jh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",tf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nf=`#ifdef USE_ENVMAP
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
#endif`,rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sf=`#ifdef USE_ENVMAP
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
#endif`,af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,of=`#ifdef USE_ENVMAP
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
#endif`,lf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ff=`#ifdef USE_GRADIENTMAP
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
}`,df=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,pf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_f=`uniform bool receiveShadow;
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
#endif`,xf=`#if defined( USE_ENVMAP )
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
#endif`,vf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bf=`PhysicalMaterial material;
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
#endif`,wf=`struct PhysicalMaterial {
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
}`,Tf=`
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
#endif`,Ef=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Af=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Df=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Rf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,If=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ff=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Of=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bf=`#ifdef USE_MORPHNORMALS
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
#endif`,kf=`#ifdef USE_MORPHTARGETS
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
#endif`,Gf=`#ifdef USE_MORPHTARGETS
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
#endif`,Vf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Wf=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yf=`#ifdef USE_NORMALMAP
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
#endif`,jf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Zf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,$f=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Kf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ed=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,td=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,id=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ad=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,od=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ld=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cd=`float getShadowMask() {
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
}`,ud=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hd=`#ifdef USE_SKINNING
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
#endif`,fd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dd=`#ifdef USE_SKINNING
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
#endif`,pd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,md=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_d=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xd=`#ifdef USE_TRANSMISSION
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
#endif`,vd=`#ifdef USE_TRANSMISSION
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
#endif`,yd=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Md=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Sd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,bd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,wd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Td=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Ed=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ad=`uniform sampler2D t2D;
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
}`,Ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Id=`#include <common>
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
}`,Fd=`#if DEPTH_PACKING == 3200
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
}`,Od=`#define DISTANCE
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
}`,Nd=`#define DISTANCE
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
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ud=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bd=`uniform float scale;
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
}`,kd=`uniform vec3 diffuse;
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
}`,Gd=`#include <common>
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
}`,Vd=`uniform vec3 diffuse;
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
}`,Wd=`#define LAMBERT
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
}`,Hd=`#define LAMBERT
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
}`,qd=`#define MATCAP
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
}`,Xd=`#define MATCAP
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
}`,Yd=`#define NORMAL
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
}`,jd=`#define NORMAL
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
}`,Zd=`#define PHONG
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
}`,$d=`#define PHONG
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
}`,Kd=`#define STANDARD
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
}`,Jd=`#define STANDARD
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
}`,Qd=`#define TOON
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
}`,ep=`#define TOON
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
}`,tp=`uniform float size;
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
}`,np=`uniform vec3 diffuse;
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
}`,ip=`#include <common>
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
}`,rp=`uniform vec3 color;
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
}`,sp=`uniform float rotation;
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
}`,ap=`uniform vec3 diffuse;
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
}`,Me={alphamap_fragment:Ah,alphamap_pars_fragment:Lh,alphatest_fragment:Ph,alphatest_pars_fragment:Dh,aomap_fragment:Rh,aomap_pars_fragment:Ih,begin_vertex:Fh,beginnormal_vertex:Oh,bsdfs:Nh,iridescence_fragment:zh,bumpmap_pars_fragment:Uh,clipping_planes_fragment:Bh,clipping_planes_pars_fragment:kh,clipping_planes_pars_vertex:Gh,clipping_planes_vertex:Vh,color_fragment:Wh,color_pars_fragment:Hh,color_pars_vertex:qh,color_vertex:Xh,common:Yh,cube_uv_reflection_fragment:jh,defaultnormal_vertex:Zh,displacementmap_pars_vertex:$h,displacementmap_vertex:Kh,emissivemap_fragment:Jh,emissivemap_pars_fragment:Qh,encodings_fragment:ef,encodings_pars_fragment:tf,envmap_fragment:nf,envmap_common_pars_fragment:rf,envmap_pars_fragment:sf,envmap_pars_vertex:af,envmap_physical_pars_fragment:xf,envmap_vertex:of,fog_vertex:lf,fog_pars_vertex:cf,fog_fragment:uf,fog_pars_fragment:hf,gradientmap_pars_fragment:ff,lightmap_fragment:df,lightmap_pars_fragment:pf,lights_lambert_fragment:mf,lights_lambert_pars_fragment:gf,lights_pars_begin:_f,lights_toon_fragment:vf,lights_toon_pars_fragment:yf,lights_phong_fragment:Mf,lights_phong_pars_fragment:Sf,lights_physical_fragment:bf,lights_physical_pars_fragment:wf,lights_fragment_begin:Tf,lights_fragment_maps:Ef,lights_fragment_end:Cf,logdepthbuf_fragment:Af,logdepthbuf_pars_fragment:Lf,logdepthbuf_pars_vertex:Pf,logdepthbuf_vertex:Df,map_fragment:Rf,map_pars_fragment:If,map_particle_fragment:Ff,map_particle_pars_fragment:Of,metalnessmap_fragment:Nf,metalnessmap_pars_fragment:zf,morphcolor_vertex:Uf,morphnormal_vertex:Bf,morphtarget_pars_vertex:kf,morphtarget_vertex:Gf,normal_fragment_begin:Vf,normal_fragment_maps:Wf,normal_pars_fragment:Hf,normal_pars_vertex:qf,normal_vertex:Xf,normalmap_pars_fragment:Yf,clearcoat_normal_fragment_begin:jf,clearcoat_normal_fragment_maps:Zf,clearcoat_pars_fragment:$f,iridescence_pars_fragment:Kf,output_fragment:Jf,packing:Qf,premultiplied_alpha_fragment:ed,project_vertex:td,dithering_fragment:nd,dithering_pars_fragment:id,roughnessmap_fragment:rd,roughnessmap_pars_fragment:sd,shadowmap_pars_fragment:ad,shadowmap_pars_vertex:od,shadowmap_vertex:ld,shadowmask_pars_fragment:cd,skinbase_vertex:ud,skinning_pars_vertex:hd,skinning_vertex:fd,skinnormal_vertex:dd,specularmap_fragment:pd,specularmap_pars_fragment:md,tonemapping_fragment:gd,tonemapping_pars_fragment:_d,transmission_fragment:xd,transmission_pars_fragment:vd,uv_pars_fragment:yd,uv_pars_vertex:Md,uv_vertex:Sd,uv2_pars_fragment:bd,uv2_pars_vertex:wd,uv2_vertex:Td,worldpos_vertex:Ed,background_vert:Cd,background_frag:Ad,backgroundCube_vert:Ld,backgroundCube_frag:Pd,cube_vert:Dd,cube_frag:Rd,depth_vert:Id,depth_frag:Fd,distanceRGBA_vert:Od,distanceRGBA_frag:Nd,equirect_vert:zd,equirect_frag:Ud,linedashed_vert:Bd,linedashed_frag:kd,meshbasic_vert:Gd,meshbasic_frag:Vd,meshlambert_vert:Wd,meshlambert_frag:Hd,meshmatcap_vert:qd,meshmatcap_frag:Xd,meshnormal_vert:Yd,meshnormal_frag:jd,meshphong_vert:Zd,meshphong_frag:$d,meshphysical_vert:Kd,meshphysical_frag:Jd,meshtoon_vert:Qd,meshtoon_frag:ep,points_vert:tp,points_frag:np,shadow_vert:ip,shadow_frag:rp,sprite_vert:sp,sprite_frag:ap},ie={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Rt},uv2Transform:{value:new Rt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Rt}}},nn={basic:{uniforms:xt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:xt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new He(0)}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:xt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:xt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:xt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new He(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:xt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:xt([ie.points,ie.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:xt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:xt([ie.common,ie.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:xt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:xt([ie.sprite,ie.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distanceRGBA:{uniforms:xt([ie.common,ie.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distanceRGBA_vert,fragmentShader:Me.distanceRGBA_frag},shadow:{uniforms:xt([ie.lights,ie.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};nn.physical={uniforms:xt([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Be(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};const es={r:0,b:0,g:0};function op(o,e,t,n,i,r,a){const s=new He(0);let c=r===!0?0:1,l,u,h=null,f=0,m=null;function g(d,x){let b=!1,v=x.isScene===!0?x.background:null;v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v));const S=o.xr,y=S.getSession&&S.getSession();y&&y.environmentBlendMode==="additive"&&(v=null),v===null?p(s,c):v&&v.isColor&&(p(v,1),b=!0),(o.autoClear||b)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),v&&(v.isCubeTexture||v.mapping===_s)?(u===void 0&&(u=new yn(new er(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Xi(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=v.encoding!==ke,(h!==v||f!==v.version||m!==o.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,m=o.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new yn(new za(2,2),new hi({name:"BackgroundMaterial",uniforms:Xi(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=v.encoding!==ke,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||m!==o.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,m=o.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function p(d,x){d.getRGB(es,Zl(o)),n.buffers.color.setClear(es.r,es.g,es.b,x,a)}return{getClearColor:function(){return s},setClearColor:function(d,x=1){s.set(d),c=x,p(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,p(s,c)},render:g}}function lp(o,e,t,n){const i=o.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,s={},c=d(null);let l=c,u=!1;function h(D,U,Y,j,W){let Q=!1;if(a){const K=p(j,Y,U);l!==K&&(l=K,m(l.object)),Q=x(D,j,Y,W),Q&&b(D,j,Y,W)}else{const K=U.wireframe===!0;(l.geometry!==j.id||l.program!==Y.id||l.wireframe!==K)&&(l.geometry=j.id,l.program=Y.id,l.wireframe=K,Q=!0)}W!==null&&t.update(W,34963),(Q||u)&&(u=!1,_(D,U,Y,j),W!==null&&o.bindBuffer(34963,t.get(W).buffer))}function f(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function m(D){return n.isWebGL2?o.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?o.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function p(D,U,Y){const j=Y.wireframe===!0;let W=s[D.id];W===void 0&&(W={},s[D.id]=W);let Q=W[U.id];Q===void 0&&(Q={},W[U.id]=Q);let K=Q[j];return K===void 0&&(K=d(f()),Q[j]=K),K}function d(D){const U=[],Y=[],j=[];for(let W=0;W<i;W++)U[W]=0,Y[W]=0,j[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:Y,attributeDivisors:j,object:D,attributes:{},index:null}}function x(D,U,Y,j){const W=l.attributes,Q=U.attributes;let K=0;const z=Y.getAttributes();for(const V in z)if(z[V].location>=0){const ee=W[V];let re=Q[V];if(re===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(re=D.instanceColor)),ee===void 0||ee.attribute!==re||re&&ee.data!==re.data)return!0;K++}return l.attributesNum!==K||l.index!==j}function b(D,U,Y,j){const W={},Q=U.attributes;let K=0;const z=Y.getAttributes();for(const V in z)if(z[V].location>=0){let ee=Q[V];ee===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor));const re={};re.attribute=ee,ee&&ee.data&&(re.data=ee.data),W[V]=re,K++}l.attributes=W,l.attributesNum=K,l.index=j}function v(){const D=l.newAttributes;for(let U=0,Y=D.length;U<Y;U++)D[U]=0}function S(D){y(D,0)}function y(D,U){const Y=l.newAttributes,j=l.enabledAttributes,W=l.attributeDivisors;Y[D]=1,j[D]===0&&(o.enableVertexAttribArray(D),j[D]=1),W[D]!==U&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,U),W[D]=U)}function C(){const D=l.newAttributes,U=l.enabledAttributes;for(let Y=0,j=U.length;Y<j;Y++)U[Y]!==D[Y]&&(o.disableVertexAttribArray(Y),U[Y]=0)}function A(D,U,Y,j,W,Q){n.isWebGL2===!0&&(Y===5124||Y===5125)?o.vertexAttribIPointer(D,U,Y,W,Q):o.vertexAttribPointer(D,U,Y,j,W,Q)}function _(D,U,Y,j){if(n.isWebGL2===!1&&(D.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const W=j.attributes,Q=Y.getAttributes(),K=U.defaultAttributeValues;for(const z in Q){const V=Q[z];if(V.location>=0){let Z=W[z];if(Z===void 0&&(z==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),z==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor)),Z!==void 0){const ee=Z.normalized,re=Z.itemSize,q=t.get(Z);if(q===void 0)continue;const Pe=q.buffer,ce=q.type,xe=q.bytesPerElement;if(Z.isInterleavedBufferAttribute){const le=Z.data,ze=le.stride,Se=Z.offset;if(le.isInstancedInterleavedBuffer){for(let _e=0;_e<V.locationSize;_e++)y(V.location+_e,le.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let _e=0;_e<V.locationSize;_e++)S(V.location+_e);o.bindBuffer(34962,Pe);for(let _e=0;_e<V.locationSize;_e++)A(V.location+_e,re/V.locationSize,ce,ee,ze*xe,(Se+re/V.locationSize*_e)*xe)}else{if(Z.isInstancedBufferAttribute){for(let le=0;le<V.locationSize;le++)y(V.location+le,Z.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let le=0;le<V.locationSize;le++)S(V.location+le);o.bindBuffer(34962,Pe);for(let le=0;le<V.locationSize;le++)A(V.location+le,re/V.locationSize,ce,ee,re*xe,re/V.locationSize*le*xe)}}else if(K!==void 0){const ee=K[z];if(ee!==void 0)switch(ee.length){case 2:o.vertexAttrib2fv(V.location,ee);break;case 3:o.vertexAttrib3fv(V.location,ee);break;case 4:o.vertexAttrib4fv(V.location,ee);break;default:o.vertexAttrib1fv(V.location,ee)}}}}C()}function T(){$();for(const D in s){const U=s[D];for(const Y in U){const j=U[Y];for(const W in j)g(j[W].object),delete j[W];delete U[Y]}delete s[D]}}function P(D){if(s[D.id]===void 0)return;const U=s[D.id];for(const Y in U){const j=U[Y];for(const W in j)g(j[W].object),delete j[W];delete U[Y]}delete s[D.id]}function N(D){for(const U in s){const Y=s[U];if(Y[D.id]===void 0)continue;const j=Y[D.id];for(const W in j)g(j[W].object),delete j[W];delete Y[D.id]}}function $(){R(),u=!0,l!==c&&(l=c,m(l.object))}function R(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:$,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:P,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:S,disableUnusedAttributes:C}}function cp(o,e,t,n){const i=n.isWebGL2;let r;function a(l){r=l}function s(l,u){o.drawArrays(r,l,u),t.update(u,r,1)}function c(l,u,h){if(h===0)return;let f,m;if(i)f=o,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,l,u,h),t.update(u,r,h)}this.setMode=a,this.render=s,this.renderInstances=c}function up(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let s=t.precision!==void 0?t.precision:"highp";const c=r(s);c!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",c,"instead."),s=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=o.getParameter(34930),f=o.getParameter(35660),m=o.getParameter(3379),g=o.getParameter(34076),p=o.getParameter(34921),d=o.getParameter(36347),x=o.getParameter(36348),b=o.getParameter(36349),v=f>0,S=a||e.has("OES_texture_float"),y=v&&S,C=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:y,maxSamples:C}}function hp(o){const e=this;let t=null,n=0,i=!1,r=!1;const a=new jn,s=new Rt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const g=h.length!==0||f||n!==0||i;return i=f,t=u(h,m,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,l()},this.setState=function(h,f,m){const g=h.clippingPlanes,p=h.clipIntersection,d=h.clipShadows,x=o.get(h);if(!i||g===null||g.length===0||r&&!d)r?u(null):l();else{const b=r?0:n,v=b*4;let S=x.clippingState||null;c.value=S,S=u(g,f,v,m);for(let y=0;y!==v;++y)S[y]=t[y];x.clippingState=S,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,g){const p=h!==null?h.length:0;let d=null;if(p!==0){if(d=c.value,g!==!0||d===null){const x=m+p*4,b=f.matrixWorldInverse;s.getNormalMatrix(b),(d===null||d.length<x)&&(d=new Float32Array(x));for(let v=0,S=m;v!==p;++v,S+=4)a.copy(h[v]).applyMatrix4(b,s),a.normal.toArray(d,S),d[S+3]=a.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function fp(o){let e=new WeakMap;function t(a,s){return s===_a?a.mapping=Wi:s===xa&&(a.mapping=Hi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===_a||s===xa)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new wh(c.height/2);return l.fromEquirectangularTexture(o,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class dp extends $l{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,s=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,s-=u*this.view.offsetY,c=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fi=4,jo=[.125,.215,.35,.446,.526,.582],Kn=20,ia=new dp,Zo=new He;let ra=null;const Zn=(1+Math.sqrt(5))/2,Ai=1/Zn,$o=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Zn,Ai),new O(0,Zn,-Ai),new O(Ai,0,Zn),new O(-Ai,0,Zn),new O(Zn,Ai,0),new O(-Zn,Ai,0)];class Ko{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ra=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=el(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ra),e.scissorTest=!1,ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wi||e.mapping===Hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ra=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Tr,format:Jt,encoding:ci,depthBuffer:!1},i=Jo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pp(r)),this._blurMaterial=mp(r,e,t)}return i}_compileMaterial(e){const t=new yn(this._lodPlanes[0],e);this._renderer.compile(t,ia)}_sceneToCubeUV(e,t,n,i){const s=new Gt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Zo),u.toneMapping=Sn,u.autoClear=!1;const m=new Ln({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),g=new yn(new er,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(Zo),p=!0);for(let x=0;x<6;x++){const b=x%3;b===0?(s.up.set(0,c[x],0),s.lookAt(l[x],0,0)):b===1?(s.up.set(0,0,c[x]),s.lookAt(0,l[x],0)):(s.up.set(0,c[x],0),s.lookAt(0,0,l[x]));const v=this._cubeSize;ts(i,b*v,x>2?v:0,v,v),u.setRenderTarget(i),p&&u.render(g,s),u.render(e,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Wi||e.mapping===Hi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=el()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new yn(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;const c=this._cubeSize;ts(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ia)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=$o[(i-1)%$o.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,s){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new yn(this._lodPlanes[i],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Kn-1),p=r/g,d=isFinite(r)?1+Math.floor(u*p):Kn;d>Kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Kn}`);const x=[];let b=0;for(let A=0;A<Kn;++A){const _=A/p,T=Math.exp(-_*_/2);x.push(T),A===0?b+=T:A<d&&(b+=2*T)}for(let A=0;A<x.length;A++)x[A]=x[A]/b;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=x,f.latitudinal.value=a==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const S=this._sizeLods[i],y=3*S*(i>v-Fi?i-v+Fi:0),C=4*(this._cubeSize-S);ts(t,y,C,3*S,2*S),c.setRenderTarget(t),c.render(h,ia)}}function pp(o){const e=[],t=[],n=[];let i=o;const r=o-Fi+1+jo.length;for(let a=0;a<r;a++){const s=Math.pow(2,i);t.push(s);let c=1/s;a>o-Fi?c=jo[a-o+Fi-1]:a===0&&(c=0),n.push(c);const l=1/(s-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,p=3,d=2,x=1,b=new Float32Array(p*g*m),v=new Float32Array(d*g*m),S=new Float32Array(x*g*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,_=C>2?0:-1,T=[A,_,0,A+2/3,_,0,A+2/3,_+1,0,A,_,0,A+2/3,_+1,0,A,_+1,0];b.set(T,p*g*C),v.set(f,d*g*C);const P=[C,C,C,C,C,C];S.set(P,x*g*C)}const y=new di;y.setAttribute("position",new an(b,p)),y.setAttribute("uv",new an(v,d)),y.setAttribute("faceIndex",new an(S,x)),e.push(y),i>Fi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Jo(o,e,t){const n=new ui(o,e,t);return n.texture.mapping=_s,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ts(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function mp(o,e,t){const n=new Float32Array(Kn),i=new O(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ua(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Qo(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ua(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function el(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Ua(){return`

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
	`}function gp(o){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const c=s.mapping,l=c===_a||c===xa,u=c===Wi||c===Hi;if(l||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=e.get(s);return t===null&&(t=new Ko(o)),h=l?t.fromEquirectangular(s,h):t.fromCubemap(s,h),e.set(s,h),h.texture}else{if(e.has(s))return e.get(s).texture;{const h=s.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Ko(o));const f=l?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,f),s.addEventListener("dispose",r),f.texture}else return null}}}return s}function i(s){let c=0;const l=6;for(let u=0;u<l;u++)s[u]!==void 0&&c++;return c===l}function r(s){const c=s.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function _p(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function xp(o,e,t,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const p=m[g];for(let d=0,x=p.length;d<x;d++)e.update(p[d],34962)}}function l(h){const f=[],m=h.index,g=h.attributes.position;let p=0;if(m!==null){const b=m.array;p=m.version;for(let v=0,S=b.length;v<S;v+=3){const y=b[v+0],C=b[v+1],A=b[v+2];f.push(y,C,C,A,A,y)}}else{const b=g.array;p=g.version;for(let v=0,S=b.length/3-1;v<S;v+=3){const y=v+0,C=v+1,A=v+2;f.push(y,C,C,A,A,y)}}const d=new(Gl(f)?jl:Yl)(f,1);d.version=p;const x=r.get(h);x&&e.remove(x),r.set(h,d)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:s,update:c,getWireframeAttribute:u}}function vp(o,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let s,c;function l(f){s=f.type,c=f.bytesPerElement}function u(f,m){o.drawElements(r,m,s,f*c),t.update(m,r,1)}function h(f,m,g){if(g===0)return;let p,d;if(i)p=o,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,m,s,f*c,g),t.update(m,r,g)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h}function yp(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,s){switch(t.calls++,a){case 4:t.triangles+=s*(r/3);break;case 1:t.lines+=s*(r/2);break;case 3:t.lines+=s*(r-1);break;case 2:t.lines+=s*r;break;case 0:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Mp(o,e){return o[0]-e[0]}function Sp(o,e){return Math.abs(e[1])-Math.abs(o[1])}function bp(o,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new ot,s=[];for(let l=0;l<8;l++)s[l]=[l,0];function c(l,u,h,f){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=p!==void 0?p.length:0;let x=r.get(u);if(x===void 0||x.count!==d){let Y=function(){D.dispose(),r.delete(u),u.removeEventListener("dispose",Y)};var g=Y;x!==void 0&&x.texture.dispose();const S=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],_=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let P=0;S===!0&&(P=1),y===!0&&(P=2),C===!0&&(P=3);let N=u.attributes.position.count*P,$=1;N>e.maxTextureSize&&($=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const R=new Float32Array(N*$*4*d),D=new ql(R,N,$,d);D.type=Qn,D.needsUpdate=!0;const U=P*4;for(let j=0;j<d;j++){const W=A[j],Q=_[j],K=T[j],z=N*$*4*j;for(let V=0;V<W.count;V++){const Z=V*U;S===!0&&(a.fromBufferAttribute(W,V),R[z+Z+0]=a.x,R[z+Z+1]=a.y,R[z+Z+2]=a.z,R[z+Z+3]=0),y===!0&&(a.fromBufferAttribute(Q,V),R[z+Z+4]=a.x,R[z+Z+5]=a.y,R[z+Z+6]=a.z,R[z+Z+7]=0),C===!0&&(a.fromBufferAttribute(K,V),R[z+Z+8]=a.x,R[z+Z+9]=a.y,R[z+Z+10]=a.z,R[z+Z+11]=K.itemSize===4?a.w:1)}}x={count:d,texture:D,size:new Be(N,$)},r.set(u,x),u.addEventListener("dispose",Y)}let b=0;for(let S=0;S<m.length;S++)b+=m[S];const v=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(o,"morphTargetBaseInfluence",v),f.getUniforms().setValue(o,"morphTargetInfluences",m),f.getUniforms().setValue(o,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}else{const p=m===void 0?0:m.length;let d=n[u.id];if(d===void 0||d.length!==p){d=[];for(let y=0;y<p;y++)d[y]=[y,0];n[u.id]=d}for(let y=0;y<p;y++){const C=d[y];C[0]=y,C[1]=m[y]}d.sort(Sp);for(let y=0;y<8;y++)y<p&&d[y][1]?(s[y][0]=d[y][0],s[y][1]=d[y][1]):(s[y][0]=Number.MAX_SAFE_INTEGER,s[y][1]=0);s.sort(Mp);const x=u.morphAttributes.position,b=u.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const C=s[y],A=C[0],_=C[1];A!==Number.MAX_SAFE_INTEGER&&_?(x&&u.getAttribute("morphTarget"+y)!==x[A]&&u.setAttribute("morphTarget"+y,x[A]),b&&u.getAttribute("morphNormal"+y)!==b[A]&&u.setAttribute("morphNormal"+y,b[A]),i[y]=_,v+=_):(x&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),b&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const S=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(o,"morphTargetBaseInfluence",S),f.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:c}}function wp(o,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);return i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function a(){i=new WeakMap}function s(c){const l=c.target;l.removeEventListener("dispose",s),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const ec=new Mt,tc=new ql,nc=new oh,ic=new Kl,tl=[],nl=[],il=new Float32Array(16),rl=new Float32Array(9),sl=new Float32Array(4);function tr(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let r=tl[i];if(r===void 0&&(r=new Float32Array(i),tl[i]=r),e!==0){n.toArray(r,0);for(let a=1,s=0;a!==e;++a)s+=t,o[a].toArray(r,s)}return r}function et(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function tt(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function vs(o,e){let t=nl[e];t===void 0&&(t=new Int32Array(e),nl[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function Tp(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Ep(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(et(t,e))return;o.uniform2fv(this.addr,e),tt(t,e)}}function Cp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(et(t,e))return;o.uniform3fv(this.addr,e),tt(t,e)}}function Ap(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(et(t,e))return;o.uniform4fv(this.addr,e),tt(t,e)}}function Lp(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(et(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),tt(t,e)}else{if(et(t,n))return;sl.set(n),o.uniformMatrix2fv(this.addr,!1,sl),tt(t,n)}}function Pp(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(et(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),tt(t,e)}else{if(et(t,n))return;rl.set(n),o.uniformMatrix3fv(this.addr,!1,rl),tt(t,n)}}function Dp(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(et(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),tt(t,e)}else{if(et(t,n))return;il.set(n),o.uniformMatrix4fv(this.addr,!1,il),tt(t,n)}}function Rp(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Ip(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(et(t,e))return;o.uniform2iv(this.addr,e),tt(t,e)}}function Fp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(et(t,e))return;o.uniform3iv(this.addr,e),tt(t,e)}}function Op(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(et(t,e))return;o.uniform4iv(this.addr,e),tt(t,e)}}function Np(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function zp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(et(t,e))return;o.uniform2uiv(this.addr,e),tt(t,e)}}function Up(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(et(t,e))return;o.uniform3uiv(this.addr,e),tt(t,e)}}function Bp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(et(t,e))return;o.uniform4uiv(this.addr,e),tt(t,e)}}function kp(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||ec,i)}function Gp(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||nc,i)}function Vp(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ic,i)}function Wp(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||tc,i)}function Hp(o){switch(o){case 5126:return Tp;case 35664:return Ep;case 35665:return Cp;case 35666:return Ap;case 35674:return Lp;case 35675:return Pp;case 35676:return Dp;case 5124:case 35670:return Rp;case 35667:case 35671:return Ip;case 35668:case 35672:return Fp;case 35669:case 35673:return Op;case 5125:return Np;case 36294:return zp;case 36295:return Up;case 36296:return Bp;case 35678:case 36198:case 36298:case 36306:case 35682:return kp;case 35679:case 36299:case 36307:return Gp;case 35680:case 36300:case 36308:case 36293:return Vp;case 36289:case 36303:case 36311:case 36292:return Wp}}function qp(o,e){o.uniform1fv(this.addr,e)}function Xp(o,e){const t=tr(e,this.size,2);o.uniform2fv(this.addr,t)}function Yp(o,e){const t=tr(e,this.size,3);o.uniform3fv(this.addr,t)}function jp(o,e){const t=tr(e,this.size,4);o.uniform4fv(this.addr,t)}function Zp(o,e){const t=tr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function $p(o,e){const t=tr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function Kp(o,e){const t=tr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Jp(o,e){o.uniform1iv(this.addr,e)}function Qp(o,e){o.uniform2iv(this.addr,e)}function em(o,e){o.uniform3iv(this.addr,e)}function tm(o,e){o.uniform4iv(this.addr,e)}function nm(o,e){o.uniform1uiv(this.addr,e)}function im(o,e){o.uniform2uiv(this.addr,e)}function rm(o,e){o.uniform3uiv(this.addr,e)}function sm(o,e){o.uniform4uiv(this.addr,e)}function am(o,e,t){const n=this.cache,i=e.length,r=vs(t,i);et(n,r)||(o.uniform1iv(this.addr,r),tt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||ec,r[a])}function om(o,e,t){const n=this.cache,i=e.length,r=vs(t,i);et(n,r)||(o.uniform1iv(this.addr,r),tt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||nc,r[a])}function lm(o,e,t){const n=this.cache,i=e.length,r=vs(t,i);et(n,r)||(o.uniform1iv(this.addr,r),tt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ic,r[a])}function cm(o,e,t){const n=this.cache,i=e.length,r=vs(t,i);et(n,r)||(o.uniform1iv(this.addr,r),tt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||tc,r[a])}function um(o){switch(o){case 5126:return qp;case 35664:return Xp;case 35665:return Yp;case 35666:return jp;case 35674:return Zp;case 35675:return $p;case 35676:return Kp;case 5124:case 35670:return Jp;case 35667:case 35671:return Qp;case 35668:case 35672:return em;case 35669:case 35673:return tm;case 5125:return nm;case 36294:return im;case 36295:return rm;case 36296:return sm;case 35678:case 36198:case 36298:case 36306:case 35682:return am;case 35679:case 36299:case 36307:return om;case 35680:case 36300:case 36308:case 36293:return lm;case 36289:case 36303:case 36311:case 36292:return cm}}class hm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Hp(t.type)}}class fm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=um(t.type)}}class dm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const s=i[r];s.setValue(e,t[s.id],n)}}}const sa=/(\w+)(\])?(\[|\.)?/g;function al(o,e){o.seq.push(e),o.map[e.id]=e}function pm(o,e,t){const n=o.name,i=n.length;for(sa.lastIndex=0;;){const r=sa.exec(n),a=sa.lastIndex;let s=r[1];const c=r[2]==="]",l=r[3];if(c&&(s=s|0),l===void 0||l==="["&&a+2===i){al(t,l===void 0?new hm(s,o,e):new fm(s,o,e));break}else{let h=t.map[s];h===void 0&&(h=new dm(s),al(t,h)),t=h}}}class rs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);pm(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const s=t[r],c=n[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function ol(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let mm=0;function gm(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const s=a+1;n.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return n.join(`
`)}function _m(o){switch(o){case ci:return["Linear","( value )"];case ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function ll(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+gm(o.getShaderSource(e),a)}else return i}function xm(o,e){const t=_m(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function vm(o,e){let t;switch(e){case Iu:t="Linear";break;case Fu:t="Reinhard";break;case Ou:t="OptimizedCineon";break;case Nu:t="ACESFilmic";break;case zu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ym(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fr).join(`
`)}function Mm(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Sm(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(e,i),a=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),t[a]={type:r.type,location:o.getAttribLocation(e,a),locationSize:s}}return t}function fr(o){return o!==""}function cl(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ul(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ba(o){return o.replace(bm,wm)}function wm(o,e){const t=Me[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ba(t)}const Tm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hl(o){return o.replace(Tm,Em)}function Em(o,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function fl(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Cm(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Ol?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===hu?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===hr&&(e="SHADOWMAP_TYPE_VSM"),e}function Am(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Wi:case Hi:e="ENVMAP_TYPE_CUBE";break;case _s:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lm(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Hi:e="ENVMAP_MODE_REFRACTION";break}return e}function Pm(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Ul:e="ENVMAP_BLENDING_MULTIPLY";break;case Du:e="ENVMAP_BLENDING_MIX";break;case Ru:e="ENVMAP_BLENDING_ADD";break}return e}function Dm(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Rm(o,e,t,n){const i=o.getContext(),r=t.defines;let a=t.vertexShader,s=t.fragmentShader;const c=Cm(t),l=Am(t),u=Lm(t),h=Pm(t),f=Dm(t),m=t.isWebGL2?"":ym(t),g=Mm(r),p=i.createProgram();let d,x,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(fr).join(`
`),d.length>0&&(d+=`
`),x=[m,g].filter(fr).join(`
`),x.length>0&&(x+=`
`)):(d=[fl(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),x=[m,fl(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?Me.tonemapping_pars_fragment:"",t.toneMapping!==Sn?vm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Me.encodings_pars_fragment,xm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fr).join(`
`)),a=ba(a),a=cl(a,t),a=ul(a,t),s=ba(s),s=cl(s,t),s=ul(s,t),a=hl(a),s=hl(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["#define varying in",t.glslVersion===Oo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const v=b+d+a,S=b+x+s,y=ol(i,35633,v),C=ol(i,35632,S);if(i.attachShader(p,y),i.attachShader(p,C),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),o.debug.checkShaderErrors){const T=i.getProgramInfoLog(p).trim(),P=i.getShaderInfoLog(y).trim(),N=i.getShaderInfoLog(C).trim();let $=!0,R=!0;if(i.getProgramParameter(p,35714)===!1){$=!1;const D=ll(i,y,"vertex"),U=ll(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+D+`
`+U)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(P===""||N==="")&&(R=!1);R&&(this.diagnostics={runnable:$,programLog:T,vertexShader:{log:P,prefix:d},fragmentShader:{log:N,prefix:x}})}i.deleteShader(y),i.deleteShader(C);let A;this.getUniforms=function(){return A===void 0&&(A=new rs(i,p)),A};let _;return this.getAttributes=function(){return _===void 0&&(_=Sm(i,p)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=mm++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=C,this}let Im=0;class Fm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Om(e),t.set(e,n)),n}}class Om{constructor(e){this.id=Im++,this.code=e,this.usedTimes=0}}function Nm(o,e,t,n,i,r,a){const s=new Xl,c=new Fm,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_,T,P,N,$){const R=N.fog,D=$.geometry,U=_.isMeshStandardMaterial?N.environment:null,Y=(_.isMeshStandardMaterial?t:e).get(_.envMap||U),j=Y&&Y.mapping===_s?Y.image.height:null,W=g[_.type];_.precision!==null&&(m=i.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const Q=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,K=Q!==void 0?Q.length:0;let z=0;D.morphAttributes.position!==void 0&&(z=1),D.morphAttributes.normal!==void 0&&(z=2),D.morphAttributes.color!==void 0&&(z=3);let V,Z,ee,re;if(W){const ze=nn[W];V=ze.vertexShader,Z=ze.fragmentShader}else V=_.vertexShader,Z=_.fragmentShader,c.update(_),ee=c.getVertexShaderID(_),re=c.getFragmentShaderID(_);const q=o.getRenderTarget(),Pe=_.alphaTest>0,ce=_.clearcoat>0,xe=_.iridescence>0;return{isWebGL2:u,shaderID:W,shaderName:_.type,vertexShader:V,fragmentShader:Z,defines:_.defines,customVertexShaderID:ee,customFragmentShaderID:re,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,instancing:$.isInstancedMesh===!0,instancingColor:$.isInstancedMesh===!0&&$.instanceColor!==null,supportsVertexTextures:f,outputEncoding:q===null?o.outputEncoding:q.isXRRenderTarget===!0?q.texture.encoding:ci,map:!!_.map,matcap:!!_.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:j,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===ih,tangentSpaceNormalMap:_.normalMapType===nh,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===ke,clearcoat:ce,clearcoatMap:ce&&!!_.clearcoatMap,clearcoatRoughnessMap:ce&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:ce&&!!_.clearcoatNormalMap,iridescence:xe,iridescenceMap:xe&&!!_.iridescenceMap,iridescenceThicknessMap:xe&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===zi,alphaMap:!!_.alphaMap,alphaTest:Pe,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!D.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(_.map||_.bumpMap||_.normalMap||_.specularMap||_.alphaMap||_.emissiveMap||_.roughnessMap||_.metalnessMap||_.clearcoatNormalMap||_.iridescenceMap||_.iridescenceThicknessMap||_.transmission>0||_.transmissionMap||_.thicknessMap||_.specularIntensityMap||_.specularColorMap||_.sheen>0||_.sheenColorMap||_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!R,useFog:_.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:h,skinning:$.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:z,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:o.shadowMap.enabled&&P.length>0,shadowMapType:o.shadowMap.type,toneMapping:_.toneMapped?o.toneMapping:Sn,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Oa,flipSided:_.side===Wt,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function d(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)T.push(P),T.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(x(T,_),b(T,_),T.push(o.outputEncoding)),T.push(_.customProgramCacheKey),T.join()}function x(_,T){_.push(T.precision),_.push(T.outputEncoding),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.combine),_.push(T.vertexUvs),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function b(_,T){s.disableAll(),T.isWebGL2&&s.enable(0),T.supportsVertexTextures&&s.enable(1),T.instancing&&s.enable(2),T.instancingColor&&s.enable(3),T.map&&s.enable(4),T.matcap&&s.enable(5),T.envMap&&s.enable(6),T.lightMap&&s.enable(7),T.aoMap&&s.enable(8),T.emissiveMap&&s.enable(9),T.bumpMap&&s.enable(10),T.normalMap&&s.enable(11),T.objectSpaceNormalMap&&s.enable(12),T.tangentSpaceNormalMap&&s.enable(13),T.clearcoat&&s.enable(14),T.clearcoatMap&&s.enable(15),T.clearcoatRoughnessMap&&s.enable(16),T.clearcoatNormalMap&&s.enable(17),T.iridescence&&s.enable(18),T.iridescenceMap&&s.enable(19),T.iridescenceThicknessMap&&s.enable(20),T.displacementMap&&s.enable(21),T.specularMap&&s.enable(22),T.roughnessMap&&s.enable(23),T.metalnessMap&&s.enable(24),T.gradientMap&&s.enable(25),T.alphaMap&&s.enable(26),T.alphaTest&&s.enable(27),T.vertexColors&&s.enable(28),T.vertexAlphas&&s.enable(29),T.vertexUvs&&s.enable(30),T.vertexTangents&&s.enable(31),T.uvsVertexOnly&&s.enable(32),_.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.skinning&&s.enable(4),T.morphTargets&&s.enable(5),T.morphNormals&&s.enable(6),T.morphColors&&s.enable(7),T.premultipliedAlpha&&s.enable(8),T.shadowMapEnabled&&s.enable(9),T.physicallyCorrectLights&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.specularIntensityMap&&s.enable(15),T.specularColorMap&&s.enable(16),T.transmission&&s.enable(17),T.transmissionMap&&s.enable(18),T.thicknessMap&&s.enable(19),T.sheen&&s.enable(20),T.sheenColorMap&&s.enable(21),T.sheenRoughnessMap&&s.enable(22),T.decodeVideoTexture&&s.enable(23),T.opaque&&s.enable(24),_.push(s.mask)}function v(_){const T=g[_.type];let P;if(T){const N=nn[T];P=yh.clone(N.uniforms)}else P=_.uniforms;return P}function S(_,T){let P;for(let N=0,$=l.length;N<$;N++){const R=l[N];if(R.cacheKey===T){P=R,++P.usedTimes;break}}return P===void 0&&(P=new Rm(o,T,_,r),l.push(P)),P}function y(_){if(--_.usedTimes===0){const T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),_.destroy()}}function C(_){c.remove(_)}function A(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:v,acquireProgram:S,releaseProgram:y,releaseShaderCache:C,programs:l,dispose:A}}function zm(){let o=new WeakMap;function e(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function t(r){o.delete(r)}function n(r,a,s){o.get(r)[a]=s}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Um(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function dl(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function pl(){const o=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,m,g,p,d){let x=o[e];return x===void 0?(x={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:p,group:d},o[e]=x):(x.id=h.id,x.object=h,x.geometry=f,x.material=m,x.groupOrder=g,x.renderOrder=h.renderOrder,x.z=p,x.group=d),e++,x}function s(h,f,m,g,p,d){const x=a(h,f,m,g,p,d);m.transmission>0?n.push(x):m.transparent===!0?i.push(x):t.push(x)}function c(h,f,m,g,p,d){const x=a(h,f,m,g,p,d);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):t.unshift(x)}function l(h,f){t.length>1&&t.sort(h||Um),n.length>1&&n.sort(f||dl),i.length>1&&i.sort(f||dl)}function u(){for(let h=e,f=o.length;h<f;h++){const m=o[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:s,unshift:c,finish:u,sort:l}}function Bm(){let o=new WeakMap;function e(n,i){const r=o.get(n);let a;return r===void 0?(a=new pl,o.set(n,[a])):i>=r.length?(a=new pl,r.push(a)):a=r[i],a}function t(){o=new WeakMap}return{get:e,dispose:t}}function km(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new He};break;case"SpotLight":t={position:new O,direction:new O,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new O,halfWidth:new O,halfHeight:new O};break}return o[e.id]=t,t}}}function Gm(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let Vm=0;function Wm(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Hm(o,e){const t=new km,n=Gm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new O);const r=new O,a=new lt,s=new lt;function c(u,h){let f=0,m=0,g=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let p=0,d=0,x=0,b=0,v=0,S=0,y=0,C=0,A=0,_=0;u.sort(Wm);const T=h!==!0?Math.PI:1;for(let N=0,$=u.length;N<$;N++){const R=u[N],D=R.color,U=R.intensity,Y=R.distance,j=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=D.r*U*T,m+=D.g*U*T,g+=D.b*U*T;else if(R.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],U);else if(R.isDirectionalLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*T),R.castShadow){const Q=R.shadow,K=n.get(R);K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,i.directionalShadow[p]=K,i.directionalShadowMap[p]=j,i.directionalShadowMatrix[p]=R.shadow.matrix,S++}i.directional[p]=W,p++}else if(R.isSpotLight){const W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(D).multiplyScalar(U*T),W.distance=Y,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[x]=W;const Q=R.shadow;if(R.map&&(i.spotLightMap[A]=R.map,A++,Q.updateMatrices(R),R.castShadow&&_++),i.spotLightMatrix[x]=Q.matrix,R.castShadow){const K=n.get(R);K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,i.spotShadow[x]=K,i.spotShadowMap[x]=j,C++}x++}else if(R.isRectAreaLight){const W=t.get(R);W.color.copy(D).multiplyScalar(U),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[b]=W,b++}else if(R.isPointLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*T),W.distance=R.distance,W.decay=R.decay,R.castShadow){const Q=R.shadow,K=n.get(R);K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,K.shadowCameraNear=Q.camera.near,K.shadowCameraFar=Q.camera.far,i.pointShadow[d]=K,i.pointShadowMap[d]=j,i.pointShadowMatrix[d]=R.shadow.matrix,y++}i.point[d]=W,d++}else if(R.isHemisphereLight){const W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(U*T),W.groundColor.copy(R.groundColor).multiplyScalar(U*T),i.hemi[v]=W,v++}}b>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const P=i.hash;(P.directionalLength!==p||P.pointLength!==d||P.spotLength!==x||P.rectAreaLength!==b||P.hemiLength!==v||P.numDirectionalShadows!==S||P.numPointShadows!==y||P.numSpotShadows!==C||P.numSpotMaps!==A)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=b,i.point.length=d,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=C+A-_,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=_,P.directionalLength=p,P.pointLength=d,P.spotLength=x,P.rectAreaLength=b,P.hemiLength=v,P.numDirectionalShadows=S,P.numPointShadows=y,P.numSpotShadows=C,P.numSpotMaps=A,i.version=Vm++)}function l(u,h){let f=0,m=0,g=0,p=0,d=0;const x=h.matrixWorldInverse;for(let b=0,v=u.length;b<v;b++){const S=u[b];if(S.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(x),f++}else if(S.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(x),y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(x),g++}else if(S.isRectAreaLight){const y=i.rectArea[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(x),s.identity(),a.copy(S.matrixWorld),a.premultiply(x),s.extractRotation(a),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),p++}else if(S.isPointLight){const y=i.point[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(x),m++}else if(S.isHemisphereLight){const y=i.hemi[d];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(x),d++}}}return{setup:c,setupView:l,state:i}}function ml(o,e){const t=new Hm(o,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function s(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:s}}function qm(o,e){let t=new WeakMap;function n(r,a=0){const s=t.get(r);let c;return s===void 0?(c=new ml(o,e),t.set(r,[c])):a>=s.length?(c=new ml(o,e),s.push(c)):c=s[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class Xm extends xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ym extends xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zm=`uniform sampler2D shadow_pass;
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
}`;function $m(o,e,t){let n=new Jl;const i=new Be,r=new Be,a=new ot,s=new Xm({depthPacking:th}),c=new Ym,l={},u=t.maxTextureSize,h={0:Wt,1:oi,2:Oa},f=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:jm,fragmentShader:Zm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new di;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new yn(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ol,this.render=function(S,y,C){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||S.length===0)return;const A=o.getRenderTarget(),_=o.getActiveCubeFace(),T=o.getActiveMipmapLevel(),P=o.state;P.setBlending(In),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let N=0,$=S.length;N<$;N++){const R=S[N],D=R.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const U=D.getFrameExtents();if(i.multiply(U),r.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/U.x),i.x=r.x*U.x,D.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/U.y),i.y=r.y*U.y,D.mapSize.y=r.y)),D.map===null){const j=this.type!==hr?{minFilter:vt,magFilter:vt}:{};D.map=new ui(i.x,i.y,j),D.map.texture.name=R.name+".shadowMap",D.camera.updateProjectionMatrix()}o.setRenderTarget(D.map),o.clear();const Y=D.getViewportCount();for(let j=0;j<Y;j++){const W=D.getViewport(j);a.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),P.viewport(a),D.updateMatrices(R,j),n=D.getFrustum(),v(y,C,D.camera,R,this.type)}D.isPointLightShadow!==!0&&this.type===hr&&x(D,C),D.needsUpdate=!1}d.needsUpdate=!1,o.setRenderTarget(A,_,T)};function x(S,y){const C=e.update(p);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ui(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,o.setRenderTarget(S.mapPass),o.clear(),o.renderBufferDirect(y,null,C,f,p,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,o.setRenderTarget(S.map),o.clear(),o.renderBufferDirect(y,null,C,m,p,null)}function b(S,y,C,A,_,T){let P=null;const N=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)P=N;else if(P=C.isPointLight===!0?c:s,o.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const $=P.uuid,R=y.uuid;let D=l[$];D===void 0&&(D={},l[$]=D);let U=D[R];U===void 0&&(U=P.clone(),D[R]=U),P=U}return P.visible=y.visible,P.wireframe=y.wireframe,T===hr?P.side=y.shadowSide!==null?y.shadowSide:y.side:P.side=y.shadowSide!==null?y.shadowSide:h[y.side],P.alphaMap=y.alphaMap,P.alphaTest=y.alphaTest,P.map=y.map,P.clipShadows=y.clipShadows,P.clippingPlanes=y.clippingPlanes,P.clipIntersection=y.clipIntersection,P.displacementMap=y.displacementMap,P.displacementScale=y.displacementScale,P.displacementBias=y.displacementBias,P.wireframeLinewidth=y.wireframeLinewidth,P.linewidth=y.linewidth,C.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(C.matrixWorld),P.nearDistance=A,P.farDistance=_),P}function v(S,y,C,A,_){if(S.visible===!1)return;if(S.layers.test(y.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&_===hr)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);const N=e.update(S),$=S.material;if(Array.isArray($)){const R=N.groups;for(let D=0,U=R.length;D<U;D++){const Y=R[D],j=$[Y.materialIndex];if(j&&j.visible){const W=b(S,j,A,C.near,C.far,_);o.renderBufferDirect(C,null,N,W,S,Y)}}}else if($.visible){const R=b(S,$,A,C.near,C.far,_);o.renderBufferDirect(C,null,N,R,S,null)}}const P=S.children;for(let N=0,$=P.length;N<$;N++)v(P[N],y,C,A,_)}}function Km(o,e,t){const n=t.isWebGL2;function i(){let L=!1;const B=new ot;let J=null;const oe=new ot(0,0,0,0);return{setMask:function(he){J!==he&&!L&&(o.colorMask(he,he,he,he),J=he)},setLocked:function(he){L=he},setClear:function(he,Fe,it,ct,Bn){Bn===!0&&(he*=ct,Fe*=ct,it*=ct),B.set(he,Fe,it,ct),oe.equals(B)===!1&&(o.clearColor(he,Fe,it,ct),oe.copy(B))},reset:function(){L=!1,J=null,oe.set(-1,0,0,0)}}}function r(){let L=!1,B=null,J=null,oe=null;return{setTest:function(he){he?Pe(2929):ce(2929)},setMask:function(he){B!==he&&!L&&(o.depthMask(he),B=he)},setFunc:function(he){if(J!==he){switch(he){case wu:o.depthFunc(512);break;case Tu:o.depthFunc(519);break;case Eu:o.depthFunc(513);break;case ga:o.depthFunc(515);break;case Cu:o.depthFunc(514);break;case Au:o.depthFunc(518);break;case Lu:o.depthFunc(516);break;case Pu:o.depthFunc(517);break;default:o.depthFunc(515)}J=he}},setLocked:function(he){L=he},setClear:function(he){oe!==he&&(o.clearDepth(he),oe=he)},reset:function(){L=!1,B=null,J=null,oe=null}}}function a(){let L=!1,B=null,J=null,oe=null,he=null,Fe=null,it=null,ct=null,Bn=null;return{setTest:function(We){L||(We?Pe(2960):ce(2960))},setMask:function(We){B!==We&&!L&&(o.stencilMask(We),B=We)},setFunc:function(We,hn,Ut){(J!==We||oe!==hn||he!==Ut)&&(o.stencilFunc(We,hn,Ut),J=We,oe=hn,he=Ut)},setOp:function(We,hn,Ut){(Fe!==We||it!==hn||ct!==Ut)&&(o.stencilOp(We,hn,Ut),Fe=We,it=hn,ct=Ut)},setLocked:function(We){L=We},setClear:function(We){Bn!==We&&(o.clearStencil(We),Bn=We)},reset:function(){L=!1,B=null,J=null,oe=null,he=null,Fe=null,it=null,ct=null,Bn=null}}}const s=new i,c=new r,l=new a,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,p=[],d=null,x=!1,b=null,v=null,S=null,y=null,C=null,A=null,_=null,T=!1,P=null,N=null,$=null,R=null,D=null;const U=o.getParameter(35661);let Y=!1,j=0;const W=o.getParameter(7938);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=j>=2);let Q=null,K={};const z=o.getParameter(3088),V=o.getParameter(2978),Z=new ot().fromArray(z),ee=new ot().fromArray(V);function re(L,B,J){const oe=new Uint8Array(4),he=o.createTexture();o.bindTexture(L,he),o.texParameteri(L,10241,9728),o.texParameteri(L,10240,9728);for(let Fe=0;Fe<J;Fe++)o.texImage2D(B+Fe,0,6408,1,1,0,6408,5121,oe);return he}const q={};q[3553]=re(3553,3553,1),q[34067]=re(34067,34069,6),s.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Pe(2929),c.setFunc(ga),pt(!1),zt(so),Pe(2884),ft(In);function Pe(L){f[L]!==!0&&(o.enable(L),f[L]=!0)}function ce(L){f[L]!==!1&&(o.disable(L),f[L]=!1)}function xe(L,B){return m[L]!==B?(o.bindFramebuffer(L,B),m[L]=B,n&&(L===36009&&(m[36160]=B),L===36160&&(m[36009]=B)),!0):!1}function le(L,B){let J=p,oe=!1;if(L)if(J=g.get(B),J===void 0&&(J=[],g.set(B,J)),L.isWebGLMultipleRenderTargets){const he=L.texture;if(J.length!==he.length||J[0]!==36064){for(let Fe=0,it=he.length;Fe<it;Fe++)J[Fe]=36064+Fe;J.length=he.length,oe=!0}}else J[0]!==36064&&(J[0]=36064,oe=!0);else J[0]!==1029&&(J[0]=1029,oe=!0);oe&&(t.isWebGL2?o.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function ze(L){return d!==L?(o.useProgram(L),d=L,!0):!1}const Se={[Pi]:32774,[du]:32778,[pu]:32779};if(n)Se[co]=32775,Se[uo]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(Se[co]=L.MIN_EXT,Se[uo]=L.MAX_EXT)}const _e={[mu]:0,[gu]:1,[_u]:768,[Nl]:770,[bu]:776,[Mu]:774,[vu]:772,[xu]:769,[zl]:771,[Su]:775,[yu]:773};function ft(L,B,J,oe,he,Fe,it,ct){if(L===In){x===!0&&(ce(3042),x=!1);return}if(x===!1&&(Pe(3042),x=!0),L!==fu){if(L!==b||ct!==T){if((v!==Pi||C!==Pi)&&(o.blendEquation(32774),v=Pi,C=Pi),ct)switch(L){case zi:o.blendFuncSeparate(1,771,1,771);break;case ao:o.blendFunc(1,1);break;case oo:o.blendFuncSeparate(0,769,0,1);break;case lo:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case zi:o.blendFuncSeparate(770,771,1,771);break;case ao:o.blendFunc(770,1);break;case oo:o.blendFuncSeparate(0,769,0,1);break;case lo:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,y=null,A=null,_=null,b=L,T=ct}return}he=he||B,Fe=Fe||J,it=it||oe,(B!==v||he!==C)&&(o.blendEquationSeparate(Se[B],Se[he]),v=B,C=he),(J!==S||oe!==y||Fe!==A||it!==_)&&(o.blendFuncSeparate(_e[J],_e[oe],_e[Fe],_e[it]),S=J,y=oe,A=Fe,_=it),b=L,T=!1}function dt(L,B){L.side===Oa?ce(2884):Pe(2884);let J=L.side===Wt;B&&(J=!J),pt(J),L.blending===zi&&L.transparent===!1?ft(In):ft(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),s.setMask(L.colorWrite);const oe=L.stencilWrite;l.setTest(oe),oe&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ue(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Pe(32926):ce(32926)}function pt(L){P!==L&&(L?o.frontFace(2304):o.frontFace(2305),P=L)}function zt(L){L!==cu?(Pe(2884),L!==N&&(L===so?o.cullFace(1029):L===uu?o.cullFace(1028):o.cullFace(1032))):ce(2884),N=L}function Je(L){L!==$&&(Y&&o.lineWidth(L),$=L)}function Ue(L,B,J){L?(Pe(32823),(R!==B||D!==J)&&(o.polygonOffset(B,J),R=B,D=J)):ce(32823)}function un(L){L?Pe(3089):ce(3089)}function Yt(L){L===void 0&&(L=33984+U-1),Q!==L&&(o.activeTexture(L),Q=L)}function E(L,B,J){J===void 0&&(Q===null?J=33984+U-1:J=Q);let oe=K[J];oe===void 0&&(oe={type:void 0,texture:void 0},K[J]=oe),(oe.type!==L||oe.texture!==B)&&(Q!==J&&(o.activeTexture(J),Q=J),o.bindTexture(L,B||q[L]),oe.type=L,oe.texture=B)}function M(){const L=K[Q];L!==void 0&&L.type!==void 0&&(o.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function G(){try{o.compressedTexImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{o.compressedTexImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{o.texSubImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{o.texSubImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{o.texStorage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{o.texStorage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{o.texImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{o.texImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(L){Z.equals(L)===!1&&(o.scissor(L.x,L.y,L.z,L.w),Z.copy(L))}function fe(L){ee.equals(L)===!1&&(o.viewport(L.x,L.y,L.z,L.w),ee.copy(L))}function De(L,B){let J=h.get(B);J===void 0&&(J=new WeakMap,h.set(B,J));let oe=J.get(L);oe===void 0&&(oe=o.getUniformBlockIndex(B,L.name),J.set(L,oe))}function Ve(L,B){const oe=h.get(B).get(L);u.get(B)!==oe&&(o.uniformBlockBinding(B,oe,L.__bindingPointIndex),u.set(B,oe))}function nt(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),f={},Q=null,K={},m={},g=new WeakMap,p=[],d=null,x=!1,b=null,v=null,S=null,y=null,C=null,A=null,_=null,T=!1,P=null,N=null,$=null,R=null,D=null,Z.set(0,0,o.canvas.width,o.canvas.height),ee.set(0,0,o.canvas.width,o.canvas.height),s.reset(),c.reset(),l.reset()}return{buffers:{color:s,depth:c,stencil:l},enable:Pe,disable:ce,bindFramebuffer:xe,drawBuffers:le,useProgram:ze,setBlending:ft,setMaterial:dt,setFlipSided:pt,setCullFace:zt,setLineWidth:Je,setPolygonOffset:Ue,setScissorTest:un,activeTexture:Yt,bindTexture:E,unbindTexture:M,compressedTexImage2D:G,compressedTexImage3D:te,texImage2D:ge,texImage3D:ue,updateUBOMapping:De,uniformBlockBinding:Ve,texStorage2D:X,texStorage3D:pe,texSubImage2D:ne,texSubImage3D:se,compressedTexSubImage2D:ve,compressedTexSubImage3D:ae,scissor:me,viewport:fe,reset:nt}}function Jm(o,e,t,n,i,r,a){const s=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const d=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,M){return x?new OffscreenCanvas(E,M):Cr("canvas")}function v(E,M,G,te){let ne=1;if((E.width>te||E.height>te)&&(ne=te/Math.max(E.width,E.height)),ne<1||M===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const se=M?Sa:Math.floor,ve=se(ne*E.width),ae=se(ne*E.height);p===void 0&&(p=b(ve,ae));const X=G?b(ve,ae):p;return X.width=ve,X.height=ae,X.getContext("2d").drawImage(E,0,0,ve,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ve+"x"+ae+")."),X}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function S(E){return zo(E.width)&&zo(E.height)}function y(E){return s?!1:E.wrapS!==Kt||E.wrapT!==Kt||E.minFilter!==vt&&E.minFilter!==kt}function C(E,M){return E.generateMipmaps&&M&&E.minFilter!==vt&&E.minFilter!==kt}function A(E){o.generateMipmap(E)}function _(E,M,G,te,ne=!1){if(s===!1)return M;if(E!==null){if(o[E]!==void 0)return o[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let se=M;return M===6403&&(G===5126&&(se=33326),G===5131&&(se=33325),G===5121&&(se=33321)),M===33319&&(G===5126&&(se=33328),G===5131&&(se=33327),G===5121&&(se=33323)),M===6408&&(G===5126&&(se=34836),G===5131&&(se=34842),G===5121&&(se=te===ke&&ne===!1?35907:32856),G===32819&&(se=32854),G===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function T(E,M,G){return C(E,G)===!0||E.isFramebufferTexture&&E.minFilter!==vt&&E.minFilter!==kt?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function P(E){return E===vt||E===ho||E===Ls?9728:9729}function N(E){const M=E.target;M.removeEventListener("dispose",N),R(M),M.isVideoTexture&&g.delete(M)}function $(E){const M=E.target;M.removeEventListener("dispose",$),U(M)}function R(E){const M=n.get(E);if(M.__webglInit===void 0)return;const G=E.source,te=d.get(G);if(te){const ne=te[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&D(E),Object.keys(te).length===0&&d.delete(G)}n.remove(E)}function D(E){const M=n.get(E);o.deleteTexture(M.__webglTexture);const G=E.source,te=d.get(G);delete te[M.__cacheKey],a.memory.textures--}function U(E){const M=E.texture,G=n.get(E),te=n.get(M);if(te.__webglTexture!==void 0&&(o.deleteTexture(te.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)o.deleteFramebuffer(G.__webglFramebuffer[ne]),G.__webglDepthbuffer&&o.deleteRenderbuffer(G.__webglDepthbuffer[ne]);else{if(o.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&o.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&o.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ne=0;ne<G.__webglColorRenderbuffer.length;ne++)G.__webglColorRenderbuffer[ne]&&o.deleteRenderbuffer(G.__webglColorRenderbuffer[ne]);G.__webglDepthRenderbuffer&&o.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ne=0,se=M.length;ne<se;ne++){const ve=n.get(M[ne]);ve.__webglTexture&&(o.deleteTexture(ve.__webglTexture),a.memory.textures--),n.remove(M[ne])}n.remove(M),n.remove(E)}let Y=0;function j(){Y=0}function W(){const E=Y;return E>=c&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+c),Y+=1,E}function Q(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.encoding),M.join()}function K(E,M){const G=n.get(E);if(E.isVideoTexture&&un(E),E.isRenderTargetTexture===!1&&E.version>0&&G.__version!==E.version){const te=E.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(G,E,M);return}}t.bindTexture(3553,G.__webglTexture,33984+M)}function z(E,M){const G=n.get(E);if(E.version>0&&G.__version!==E.version){ce(G,E,M);return}t.bindTexture(35866,G.__webglTexture,33984+M)}function V(E,M){const G=n.get(E);if(E.version>0&&G.__version!==E.version){ce(G,E,M);return}t.bindTexture(32879,G.__webglTexture,33984+M)}function Z(E,M){const G=n.get(E);if(E.version>0&&G.__version!==E.version){xe(G,E,M);return}t.bindTexture(34067,G.__webglTexture,33984+M)}const ee={[va]:10497,[Kt]:33071,[ya]:33648},re={[vt]:9728,[ho]:9984,[Ls]:9986,[kt]:9729,[Uu]:9985,[wr]:9987};function q(E,M,G){if(G?(o.texParameteri(E,10242,ee[M.wrapS]),o.texParameteri(E,10243,ee[M.wrapT]),(E===32879||E===35866)&&o.texParameteri(E,32882,ee[M.wrapR]),o.texParameteri(E,10240,re[M.magFilter]),o.texParameteri(E,10241,re[M.minFilter])):(o.texParameteri(E,10242,33071),o.texParameteri(E,10243,33071),(E===32879||E===35866)&&o.texParameteri(E,32882,33071),(M.wrapS!==Kt||M.wrapT!==Kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(E,10240,P(M.magFilter)),o.texParameteri(E,10241,P(M.minFilter)),M.minFilter!==vt&&M.minFilter!==kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===vt||M.minFilter!==Ls&&M.minFilter!==wr||M.type===Qn&&e.has("OES_texture_float_linear")===!1||s===!1&&M.type===Tr&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(o.texParameterf(E,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Pe(E,M){let G=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",N));const te=M.source;let ne=d.get(te);ne===void 0&&(ne={},d.set(te,ne));const se=Q(M);if(se!==E.__cacheKey){ne[se]===void 0&&(ne[se]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ne[se].usedTimes++;const ve=ne[E.__cacheKey];ve!==void 0&&(ne[E.__cacheKey].usedTimes--,ve.usedTimes===0&&D(M)),E.__cacheKey=se,E.__webglTexture=ne[se].texture}return G}function ce(E,M,G){let te=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=35866),M.isData3DTexture&&(te=32879);const ne=Pe(E,M),se=M.source;t.bindTexture(te,E.__webglTexture,33984+G);const ve=n.get(se);if(se.version!==ve.__version||ne===!0){t.activeTexture(33984+G),o.pixelStorei(37440,M.flipY),o.pixelStorei(37441,M.premultiplyAlpha),o.pixelStorei(3317,M.unpackAlignment),o.pixelStorei(37443,0);const ae=y(M)&&S(M.image)===!1;let X=v(M.image,ae,!1,u);X=Yt(M,X);const pe=S(X)||s,ge=r.convert(M.format,M.encoding);let ue=r.convert(M.type),me=_(M.internalFormat,ge,ue,M.encoding,M.isVideoTexture);q(te,M,pe);let fe;const De=M.mipmaps,Ve=s&&M.isVideoTexture!==!0,nt=ve.__version===void 0||ne===!0,L=T(M,X,pe);if(M.isDepthTexture)me=6402,s?M.type===Qn?me=36012:M.type===Jn?me=33190:M.type===Ui?me=35056:me=33189:M.type===Qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===ni&&me===6402&&M.type!==kl&&M.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Jn,ue=r.convert(M.type)),M.format===qi&&me===6402&&(me=34041,M.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ui,ue=r.convert(M.type))),nt&&(Ve?t.texStorage2D(3553,1,me,X.width,X.height):t.texImage2D(3553,0,me,X.width,X.height,0,ge,ue,null));else if(M.isDataTexture)if(De.length>0&&pe){Ve&&nt&&t.texStorage2D(3553,L,me,De[0].width,De[0].height);for(let B=0,J=De.length;B<J;B++)fe=De[B],Ve?t.texSubImage2D(3553,B,0,0,fe.width,fe.height,ge,ue,fe.data):t.texImage2D(3553,B,me,fe.width,fe.height,0,ge,ue,fe.data);M.generateMipmaps=!1}else Ve?(nt&&t.texStorage2D(3553,L,me,X.width,X.height),t.texSubImage2D(3553,0,0,0,X.width,X.height,ge,ue,X.data)):t.texImage2D(3553,0,me,X.width,X.height,0,ge,ue,X.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ve&&nt&&t.texStorage3D(35866,L,me,De[0].width,De[0].height,X.depth);for(let B=0,J=De.length;B<J;B++)fe=De[B],M.format!==Jt?ge!==null?Ve?t.compressedTexSubImage3D(35866,B,0,0,0,fe.width,fe.height,X.depth,ge,fe.data,0,0):t.compressedTexImage3D(35866,B,me,fe.width,fe.height,X.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(35866,B,0,0,0,fe.width,fe.height,X.depth,ge,ue,fe.data):t.texImage3D(35866,B,me,fe.width,fe.height,X.depth,0,ge,ue,fe.data)}else{Ve&&nt&&t.texStorage2D(3553,L,me,De[0].width,De[0].height);for(let B=0,J=De.length;B<J;B++)fe=De[B],M.format!==Jt?ge!==null?Ve?t.compressedTexSubImage2D(3553,B,0,0,fe.width,fe.height,ge,fe.data):t.compressedTexImage2D(3553,B,me,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(3553,B,0,0,fe.width,fe.height,ge,ue,fe.data):t.texImage2D(3553,B,me,fe.width,fe.height,0,ge,ue,fe.data)}else if(M.isDataArrayTexture)Ve?(nt&&t.texStorage3D(35866,L,me,X.width,X.height,X.depth),t.texSubImage3D(35866,0,0,0,0,X.width,X.height,X.depth,ge,ue,X.data)):t.texImage3D(35866,0,me,X.width,X.height,X.depth,0,ge,ue,X.data);else if(M.isData3DTexture)Ve?(nt&&t.texStorage3D(32879,L,me,X.width,X.height,X.depth),t.texSubImage3D(32879,0,0,0,0,X.width,X.height,X.depth,ge,ue,X.data)):t.texImage3D(32879,0,me,X.width,X.height,X.depth,0,ge,ue,X.data);else if(M.isFramebufferTexture){if(nt)if(Ve)t.texStorage2D(3553,L,me,X.width,X.height);else{let B=X.width,J=X.height;for(let oe=0;oe<L;oe++)t.texImage2D(3553,oe,me,B,J,0,ge,ue,null),B>>=1,J>>=1}}else if(De.length>0&&pe){Ve&&nt&&t.texStorage2D(3553,L,me,De[0].width,De[0].height);for(let B=0,J=De.length;B<J;B++)fe=De[B],Ve?t.texSubImage2D(3553,B,0,0,ge,ue,fe):t.texImage2D(3553,B,me,ge,ue,fe);M.generateMipmaps=!1}else Ve?(nt&&t.texStorage2D(3553,L,me,X.width,X.height),t.texSubImage2D(3553,0,0,0,ge,ue,X)):t.texImage2D(3553,0,me,ge,ue,X);C(M,pe)&&A(te),ve.__version=se.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function xe(E,M,G){if(M.image.length!==6)return;const te=Pe(E,M),ne=M.source;t.bindTexture(34067,E.__webglTexture,33984+G);const se=n.get(ne);if(ne.version!==se.__version||te===!0){t.activeTexture(33984+G),o.pixelStorei(37440,M.flipY),o.pixelStorei(37441,M.premultiplyAlpha),o.pixelStorei(3317,M.unpackAlignment),o.pixelStorei(37443,0);const ve=M.isCompressedTexture||M.image[0].isCompressedTexture,ae=M.image[0]&&M.image[0].isDataTexture,X=[];for(let B=0;B<6;B++)!ve&&!ae?X[B]=v(M.image[B],!1,!0,l):X[B]=ae?M.image[B].image:M.image[B],X[B]=Yt(M,X[B]);const pe=X[0],ge=S(pe)||s,ue=r.convert(M.format,M.encoding),me=r.convert(M.type),fe=_(M.internalFormat,ue,me,M.encoding),De=s&&M.isVideoTexture!==!0,Ve=se.__version===void 0||te===!0;let nt=T(M,pe,ge);q(34067,M,ge);let L;if(ve){De&&Ve&&t.texStorage2D(34067,nt,fe,pe.width,pe.height);for(let B=0;B<6;B++){L=X[B].mipmaps;for(let J=0;J<L.length;J++){const oe=L[J];M.format!==Jt?ue!==null?De?t.compressedTexSubImage2D(34069+B,J,0,0,oe.width,oe.height,ue,oe.data):t.compressedTexImage2D(34069+B,J,fe,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+B,J,0,0,oe.width,oe.height,ue,me,oe.data):t.texImage2D(34069+B,J,fe,oe.width,oe.height,0,ue,me,oe.data)}}}else{L=M.mipmaps,De&&Ve&&(L.length>0&&nt++,t.texStorage2D(34067,nt,fe,X[0].width,X[0].height));for(let B=0;B<6;B++)if(ae){De?t.texSubImage2D(34069+B,0,0,0,X[B].width,X[B].height,ue,me,X[B].data):t.texImage2D(34069+B,0,fe,X[B].width,X[B].height,0,ue,me,X[B].data);for(let J=0;J<L.length;J++){const he=L[J].image[B].image;De?t.texSubImage2D(34069+B,J+1,0,0,he.width,he.height,ue,me,he.data):t.texImage2D(34069+B,J+1,fe,he.width,he.height,0,ue,me,he.data)}}else{De?t.texSubImage2D(34069+B,0,0,0,ue,me,X[B]):t.texImage2D(34069+B,0,fe,ue,me,X[B]);for(let J=0;J<L.length;J++){const oe=L[J];De?t.texSubImage2D(34069+B,J+1,0,0,ue,me,oe.image[B]):t.texImage2D(34069+B,J+1,fe,ue,me,oe.image[B])}}}C(M,ge)&&A(34067),se.__version=ne.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function le(E,M,G,te,ne){const se=r.convert(G.format,G.encoding),ve=r.convert(G.type),ae=_(G.internalFormat,se,ve,G.encoding);n.get(M).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,ae,M.width,M.height,M.depth,0,se,ve,null):t.texImage2D(ne,0,ae,M.width,M.height,0,se,ve,null)),t.bindFramebuffer(36160,E),Ue(M)?f.framebufferTexture2DMultisampleEXT(36160,te,ne,n.get(G).__webglTexture,0,Je(M)):(ne===3553||ne>=34069&&ne<=34074)&&o.framebufferTexture2D(36160,te,ne,n.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function ze(E,M,G){if(o.bindRenderbuffer(36161,E),M.depthBuffer&&!M.stencilBuffer){let te=33189;if(G||Ue(M)){const ne=M.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Qn?te=36012:ne.type===Jn&&(te=33190));const se=Je(M);Ue(M)?f.renderbufferStorageMultisampleEXT(36161,se,te,M.width,M.height):o.renderbufferStorageMultisample(36161,se,te,M.width,M.height)}else o.renderbufferStorage(36161,te,M.width,M.height);o.framebufferRenderbuffer(36160,36096,36161,E)}else if(M.depthBuffer&&M.stencilBuffer){const te=Je(M);G&&Ue(M)===!1?o.renderbufferStorageMultisample(36161,te,35056,M.width,M.height):Ue(M)?f.renderbufferStorageMultisampleEXT(36161,te,35056,M.width,M.height):o.renderbufferStorage(36161,34041,M.width,M.height),o.framebufferRenderbuffer(36160,33306,36161,E)}else{const te=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0;ne<te.length;ne++){const se=te[ne],ve=r.convert(se.format,se.encoding),ae=r.convert(se.type),X=_(se.internalFormat,ve,ae,se.encoding),pe=Je(M);G&&Ue(M)===!1?o.renderbufferStorageMultisample(36161,pe,X,M.width,M.height):Ue(M)?f.renderbufferStorageMultisampleEXT(36161,pe,X,M.width,M.height):o.renderbufferStorage(36161,X,M.width,M.height)}}o.bindRenderbuffer(36161,null)}function Se(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);const te=n.get(M.depthTexture).__webglTexture,ne=Je(M);if(M.depthTexture.format===ni)Ue(M)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ne):o.framebufferTexture2D(36160,36096,3553,te,0);else if(M.depthTexture.format===qi)Ue(M)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ne):o.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function _e(E){const M=n.get(E),G=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Se(M.__webglFramebuffer,E)}else if(G){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=o.createRenderbuffer(),ze(M.__webglDepthbuffer[te],E,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=o.createRenderbuffer(),ze(M.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function ft(E,M,G){const te=n.get(E);M!==void 0&&le(te.__webglFramebuffer,E,E.texture,36064,3553),G!==void 0&&_e(E)}function dt(E){const M=E.texture,G=n.get(E),te=n.get(M);E.addEventListener("dispose",$),E.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=o.createTexture()),te.__version=M.version,a.memory.textures++);const ne=E.isWebGLCubeRenderTarget===!0,se=E.isWebGLMultipleRenderTargets===!0,ve=S(E)||s;if(ne){G.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)G.__webglFramebuffer[ae]=o.createFramebuffer()}else{if(G.__webglFramebuffer=o.createFramebuffer(),se)if(i.drawBuffers){const ae=E.texture;for(let X=0,pe=ae.length;X<pe;X++){const ge=n.get(ae[X]);ge.__webglTexture===void 0&&(ge.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&E.samples>0&&Ue(E)===!1){const ae=se?M:[M];G.__webglMultisampledFramebuffer=o.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let X=0;X<ae.length;X++){const pe=ae[X];G.__webglColorRenderbuffer[X]=o.createRenderbuffer(),o.bindRenderbuffer(36161,G.__webglColorRenderbuffer[X]);const ge=r.convert(pe.format,pe.encoding),ue=r.convert(pe.type),me=_(pe.internalFormat,ge,ue,pe.encoding,E.isXRRenderTarget===!0),fe=Je(E);o.renderbufferStorageMultisample(36161,fe,me,E.width,E.height),o.framebufferRenderbuffer(36160,36064+X,36161,G.__webglColorRenderbuffer[X])}o.bindRenderbuffer(36161,null),E.depthBuffer&&(G.__webglDepthRenderbuffer=o.createRenderbuffer(),ze(G.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,te.__webglTexture),q(34067,M,ve);for(let ae=0;ae<6;ae++)le(G.__webglFramebuffer[ae],E,M,36064,34069+ae);C(M,ve)&&A(34067),t.unbindTexture()}else if(se){const ae=E.texture;for(let X=0,pe=ae.length;X<pe;X++){const ge=ae[X],ue=n.get(ge);t.bindTexture(3553,ue.__webglTexture),q(3553,ge,ve),le(G.__webglFramebuffer,E,ge,36064+X,3553),C(ge,ve)&&A(3553)}t.unbindTexture()}else{let ae=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(s?ae=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,te.__webglTexture),q(ae,M,ve),le(G.__webglFramebuffer,E,M,36064,ae),C(M,ve)&&A(ae),t.unbindTexture()}E.depthBuffer&&_e(E)}function pt(E){const M=S(E)||s,G=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let te=0,ne=G.length;te<ne;te++){const se=G[te];if(C(se,M)){const ve=E.isWebGLCubeRenderTarget?34067:3553,ae=n.get(se).__webglTexture;t.bindTexture(ve,ae),A(ve),t.unbindTexture()}}}function zt(E){if(s&&E.samples>0&&Ue(E)===!1){const M=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],G=E.width,te=E.height;let ne=16384;const se=[],ve=E.stencilBuffer?33306:36096,ae=n.get(E),X=E.isWebGLMultipleRenderTargets===!0;if(X)for(let pe=0;pe<M.length;pe++)t.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+pe,36161,null),t.bindFramebuffer(36160,ae.__webglFramebuffer),o.framebufferTexture2D(36009,36064+pe,3553,null,0);t.bindFramebuffer(36008,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ae.__webglFramebuffer);for(let pe=0;pe<M.length;pe++){se.push(36064+pe),E.depthBuffer&&se.push(ve);const ge=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(ge===!1&&(E.depthBuffer&&(ne|=256),E.stencilBuffer&&(ne|=1024)),X&&o.framebufferRenderbuffer(36008,36064,36161,ae.__webglColorRenderbuffer[pe]),ge===!0&&(o.invalidateFramebuffer(36008,[ve]),o.invalidateFramebuffer(36009,[ve])),X){const ue=n.get(M[pe]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,ue,0)}o.blitFramebuffer(0,0,G,te,0,0,G,te,ne,9728),m&&o.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),X)for(let pe=0;pe<M.length;pe++){t.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+pe,36161,ae.__webglColorRenderbuffer[pe]);const ge=n.get(M[pe]).__webglTexture;t.bindFramebuffer(36160,ae.__webglFramebuffer),o.framebufferTexture2D(36009,36064+pe,3553,ge,0)}t.bindFramebuffer(36009,ae.__webglMultisampledFramebuffer)}}function Je(E){return Math.min(h,E.samples)}function Ue(E){const M=n.get(E);return s&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function un(E){const M=a.render.frame;g.get(E)!==M&&(g.set(E,M),E.update())}function Yt(E,M){const G=E.encoding,te=E.format,ne=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Ma||G!==ci&&(G===ke?s===!1?e.has("EXT_sRGB")===!0&&te===Jt?(E.format=Ma,E.minFilter=kt,E.generateMipmaps=!1):M=Wl.sRGBToLinear(M):(te!==Jt||ne!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),M}this.allocateTextureUnit=W,this.resetTextureUnits=j,this.setTexture2D=K,this.setTexture2DArray=z,this.setTexture3D=V,this.setTextureCube=Z,this.rebindTextures=ft,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Ue}function Qm(o,e,t){const n=t.isWebGL2;function i(r,a=null){let s;if(r===li)return 5121;if(r===Vu)return 32819;if(r===Wu)return 32820;if(r===Bu)return 5120;if(r===ku)return 5122;if(r===kl)return 5123;if(r===Gu)return 5124;if(r===Jn)return 5125;if(r===Qn)return 5126;if(r===Tr)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===Hu)return 6406;if(r===Jt)return 6408;if(r===Xu)return 6409;if(r===Yu)return 6410;if(r===ni)return 6402;if(r===qi)return 34041;if(r===qu)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Ma)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===ju)return 6403;if(r===Zu)return 36244;if(r===$u)return 33319;if(r===Ku)return 33320;if(r===Ju)return 36249;if(r===Ps||r===Ds||r===Rs||r===Is)if(a===ke)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Ps)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Ps)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ds)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Rs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Is)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===fo||r===po||r===mo||r===go)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===fo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===po)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===mo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===go)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Qu)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===_o||r===xo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===_o)return a===ke?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===xo)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===vo||r===yo||r===Mo||r===So||r===bo||r===wo||r===To||r===Eo||r===Co||r===Ao||r===Lo||r===Po||r===Do||r===Ro)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===vo)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===yo)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Mo)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===So)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===bo)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wo)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===To)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Eo)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Co)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ao)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Lo)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Po)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Do)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ro)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Io)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===Io)return a===ke?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Ui?n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class eg extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ns extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tg={type:"move"};class aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const s=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,n),x=this._getHandJoint(l,p);d!==null&&(x.matrix.fromArray(d.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=d.radius),x.visible=d!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(tg)))}return s!==null&&(s.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ns;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ng extends Mt{constructor(e,t,n,i,r,a,s,c,l,u){if(u=u!==void 0?u:ni,u!==ni&&u!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ni&&(n=Jn),n===void 0&&u===qi&&(n=Ui),super(null,i,r,a,s,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:vt,this.minFilter=c!==void 0?c:vt,this.flipY=!1,this.generateMipmaps=!1}}class ig extends Qi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,s="local-floor",c=null,l=null,u=null,h=null,f=null,m=null;const g=t.getContextAttributes();let p=null,d=null;const x=[],b=[],v=new Set,S=new Map,y=new Gt;y.layers.enable(1),y.viewport=new ot;const C=new Gt;C.layers.enable(2),C.viewport=new ot;const A=[y,C],_=new eg;_.layers.enable(1),_.layers.enable(2);let T=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let V=x[z];return V===void 0&&(V=new aa,x[z]=V),V.getTargetRaySpace()},this.getControllerGrip=function(z){let V=x[z];return V===void 0&&(V=new aa,x[z]=V),V.getGripSpace()},this.getHand=function(z){let V=x[z];return V===void 0&&(V=new aa,x[z]=V),V.getHandSpace()};function N(z){const V=b.indexOf(z.inputSource);if(V===-1)return;const Z=x[V];Z!==void 0&&Z.dispatchEvent({type:z.type,data:z.inputSource})}function $(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",R);for(let z=0;z<x.length;z++){const V=b[z];V!==null&&(b[z]=null,x[z].disconnect(V))}T=null,P=null,e.setRenderTarget(p),f=null,h=null,u=null,i=null,d=null,K.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",$),i.addEventListener("inputsourceschange",R),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,V),i.updateRenderState({baseLayer:f}),d=new ui(f.framebufferWidth,f.framebufferHeight,{format:Jt,type:li,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let V=null,Z=null,ee=null;g.depth&&(ee=g.stencil?35056:33190,V=g.stencil?qi:ni,Z=g.stencil?Ui:Jn);const re={colorFormat:32856,depthFormat:ee,scaleFactor:r};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(re),i.updateRenderState({layers:[h]}),d=new ui(h.textureWidth,h.textureHeight,{format:Jt,type:li,depthTexture:new ng(h.textureWidth,h.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const q=e.properties.get(d);q.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),c=null,a=await i.requestReferenceSpace(s),K.setContext(i),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(z){for(let V=0;V<z.removed.length;V++){const Z=z.removed[V],ee=b.indexOf(Z);ee>=0&&(b[ee]=null,x[ee].disconnect(Z))}for(let V=0;V<z.added.length;V++){const Z=z.added[V];let ee=b.indexOf(Z);if(ee===-1){for(let q=0;q<x.length;q++)if(q>=b.length){b.push(Z),ee=q;break}else if(b[q]===null){b[q]=Z,ee=q;break}if(ee===-1)break}const re=x[ee];re&&re.connect(Z)}}const D=new O,U=new O;function Y(z,V,Z){D.setFromMatrixPosition(V.matrixWorld),U.setFromMatrixPosition(Z.matrixWorld);const ee=D.distanceTo(U),re=V.projectionMatrix.elements,q=Z.projectionMatrix.elements,Pe=re[14]/(re[10]-1),ce=re[14]/(re[10]+1),xe=(re[9]+1)/re[5],le=(re[9]-1)/re[5],ze=(re[8]-1)/re[0],Se=(q[8]+1)/q[0],_e=Pe*ze,ft=Pe*Se,dt=ee/(-ze+Se),pt=dt*-ze;V.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(pt),z.translateZ(dt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const zt=Pe+dt,Je=ce+dt,Ue=_e-pt,un=ft+(ee-pt),Yt=xe*ce/Je*zt,E=le*ce/Je*zt;z.projectionMatrix.makePerspective(Ue,un,Yt,E,zt,Je)}function j(z,V){V===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(V.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;_.near=C.near=y.near=z.near,_.far=C.far=y.far=z.far,(T!==_.near||P!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),T=_.near,P=_.far);const V=z.parent,Z=_.cameras;j(_,V);for(let re=0;re<Z.length;re++)j(Z[re],V);_.matrixWorld.decompose(_.position,_.quaternion,_.scale),z.matrix.copy(_.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const ee=z.children;for(let re=0,q=ee.length;re<q;re++)ee[re].updateMatrixWorld(!0);Z.length===2?Y(_,y,C):_.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return _},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(z){h!==null&&(h.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.getPlanes=function(){return v};let W=null;function Q(z,V){if(l=V.getViewerPose(c||a),m=V,l!==null){const Z=l.views;f!==null&&(e.setRenderTargetFramebuffer(d,f.framebuffer),e.setRenderTarget(d));let ee=!1;Z.length!==_.cameras.length&&(_.cameras.length=0,ee=!0);for(let re=0;re<Z.length;re++){const q=Z[re];let Pe=null;if(f!==null)Pe=f.getViewport(q);else{const xe=u.getViewSubImage(h,q);Pe=xe.viewport,re===0&&(e.setRenderTargetTextures(d,xe.colorTexture,h.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(d))}let ce=A[re];ce===void 0&&(ce=new Gt,ce.layers.enable(re),ce.viewport=new ot,A[re]=ce),ce.matrix.fromArray(q.transform.matrix),ce.projectionMatrix.fromArray(q.projectionMatrix),ce.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),re===0&&_.matrix.copy(ce.matrix),ee===!0&&_.cameras.push(ce)}}for(let Z=0;Z<x.length;Z++){const ee=b[Z],re=x[Z];ee!==null&&re!==void 0&&re.update(ee,V,c||a)}if(W&&W(z,V),V.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:V.detectedPlanes});let Z=null;for(const ee of v)V.detectedPlanes.has(ee)||(Z===null&&(Z=[]),Z.push(ee));if(Z!==null)for(const ee of Z)v.delete(ee),S.delete(ee),n.dispatchEvent({type:"planeremoved",data:ee});for(const ee of V.detectedPlanes)if(!v.has(ee))v.add(ee),S.set(ee,V.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ee});else{const re=S.get(ee);ee.lastChangedTime>re&&(S.set(ee,ee.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ee}))}}m=null}const K=new Ql;K.setAnimationLoop(Q),this.setAnimationLoop=function(z){W=z},this.dispose=function(){}}}function rg(o,e){function t(p,d){d.color.getRGB(p.fogColor.value,Zl(o)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,x,b,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(p,d):d.isMeshToonMaterial?(i(p,d),u(p,d)):d.isMeshPhongMaterial?(i(p,d),l(p,d)):d.isMeshStandardMaterial?(i(p,d),h(p,d),d.isMeshPhysicalMaterial&&f(p,d,v)):d.isMeshMatcapMaterial?(i(p,d),m(p,d)):d.isMeshDepthMaterial?i(p,d):d.isMeshDistanceMaterial?(i(p,d),g(p,d)):d.isMeshNormalMaterial?i(p,d):d.isLineBasicMaterial?(r(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?s(p,d,x,b):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Wt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Wt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const x=e.get(d).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const S=o.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*S}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let b;d.map?b=d.map:d.specularMap?b=d.specularMap:d.displacementMap?b=d.displacementMap:d.normalMap?b=d.normalMap:d.bumpMap?b=d.bumpMap:d.roughnessMap?b=d.roughnessMap:d.metalnessMap?b=d.metalnessMap:d.alphaMap?b=d.alphaMap:d.emissiveMap?b=d.emissiveMap:d.clearcoatMap?b=d.clearcoatMap:d.clearcoatNormalMap?b=d.clearcoatNormalMap:d.clearcoatRoughnessMap?b=d.clearcoatRoughnessMap:d.iridescenceMap?b=d.iridescenceMap:d.iridescenceThicknessMap?b=d.iridescenceThicknessMap:d.specularIntensityMap?b=d.specularIntensityMap:d.specularColorMap?b=d.specularColorMap:d.transmissionMap?b=d.transmissionMap:d.thicknessMap?b=d.thicknessMap:d.sheenColorMap?b=d.sheenColorMap:d.sheenRoughnessMap&&(b=d.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix));let v;d.aoMap?v=d.aoMap:d.lightMap&&(v=d.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uv2Transform.value.copy(v.matrix))}function r(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function s(p,d,x,b){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*x,p.scale.value=b*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let v;d.map?v=d.map:d.alphaMap&&(v=d.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let x;d.map?x=d.map:d.alphaMap&&(x=d.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function f(p,d,x){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Wt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function sg(o,e,t,n){let i={},r={},a=[];const s=t.isWebGL2?o.getParameter(35375):0;function c(b,v){const S=v.program;n.uniformBlockBinding(b,S)}function l(b,v){let S=i[b.id];S===void 0&&(g(b),S=u(b),i[b.id]=S,b.addEventListener("dispose",d));const y=v.program;n.updateUBOMapping(b,y);const C=e.render.frame;r[b.id]!==C&&(f(b),r[b.id]=C)}function u(b){const v=h();b.__bindingPointIndex=v;const S=o.createBuffer(),y=b.__size,C=b.usage;return o.bindBuffer(35345,S),o.bufferData(35345,y,C),o.bindBuffer(35345,null),o.bindBufferBase(35345,v,S),S}function h(){for(let b=0;b<s;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const v=i[b.id],S=b.uniforms,y=b.__cache;o.bindBuffer(35345,v);for(let C=0,A=S.length;C<A;C++){const _=S[C];if(m(_,C,y)===!0){const T=_.__offset,P=Array.isArray(_.value)?_.value:[_.value];let N=0;for(let $=0;$<P.length;$++){const R=P[$],D=p(R);typeof R=="number"?(_.__data[0]=R,o.bufferSubData(35345,T+N,_.__data)):R.isMatrix3?(_.__data[0]=R.elements[0],_.__data[1]=R.elements[1],_.__data[2]=R.elements[2],_.__data[3]=R.elements[0],_.__data[4]=R.elements[3],_.__data[5]=R.elements[4],_.__data[6]=R.elements[5],_.__data[7]=R.elements[0],_.__data[8]=R.elements[6],_.__data[9]=R.elements[7],_.__data[10]=R.elements[8],_.__data[11]=R.elements[0]):(R.toArray(_.__data,N),N+=D.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,T,_.__data)}}o.bindBuffer(35345,null)}function m(b,v,S){const y=b.value;if(S[v]===void 0){if(typeof y=="number")S[v]=y;else{const C=Array.isArray(y)?y:[y],A=[];for(let _=0;_<C.length;_++)A.push(C[_].clone());S[v]=A}return!0}else if(typeof y=="number"){if(S[v]!==y)return S[v]=y,!0}else{const C=Array.isArray(S[v])?S[v]:[S[v]],A=Array.isArray(y)?y:[y];for(let _=0;_<C.length;_++){const T=C[_];if(T.equals(A[_])===!1)return T.copy(A[_]),!0}}return!1}function g(b){const v=b.uniforms;let S=0;const y=16;let C=0;for(let A=0,_=v.length;A<_;A++){const T=v[A],P={boundary:0,storage:0},N=Array.isArray(T.value)?T.value:[T.value];for(let $=0,R=N.length;$<R;$++){const D=N[$],U=p(D);P.boundary+=U.boundary,P.storage+=U.storage}if(T.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=S,A>0){C=S%y;const $=y-C;C!==0&&$-P.boundary<0&&(S+=y-C,T.__offset=S)}S+=P.storage}return C=S%y,C>0&&(S+=y-C),b.__size=S,b.__cache={},this}function p(b){const v={boundary:0,storage:0};return typeof b=="number"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function d(b){const v=b.target;v.removeEventListener("dispose",d);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),o.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function x(){for(const b in i)o.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:c,update:l,dispose:x}}function ag(){const o=Cr("canvas");return o.style.display="block",o}function rc(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:ag(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,s=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,c=o.powerPreference!==void 0?o.powerPreference:"default",l=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ci,this.physicallyCorrectLights=!1,this.toneMapping=Sn,this.toneMappingExposure=1;const p=this;let d=!1,x=0,b=0,v=null,S=-1,y=null;const C=new ot,A=new ot;let _=null,T=e.width,P=e.height,N=1,$=null,R=null;const D=new ot(0,0,T,P),U=new ot(0,0,T,P);let Y=!1;const j=new Jl;let W=!1,Q=!1,K=null;const z=new lt,V=new Be,Z=new O,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return v===null?N:1}let q=t;function Pe(w,F){for(let k=0;k<w.length;k++){const I=w[k],H=e.getContext(I,F);if(H!==null)return H}return null}try{const w={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:s,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fa}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",De,!1),q===null){const F=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&F.shift(),q=Pe(F,w),q===null)throw Pe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ce,xe,le,ze,Se,_e,ft,dt,pt,zt,Je,Ue,un,Yt,E,M,G,te,ne,se,ve,ae,X,pe;function ge(){ce=new _p(q),xe=new up(q,ce,o),ce.init(xe),ae=new Qm(q,ce,xe),le=new Km(q,ce,xe),ze=new yp,Se=new zm,_e=new Jm(q,ce,le,Se,xe,ae,ze),ft=new fp(p),dt=new gp(p),pt=new Ch(q,xe),X=new lp(q,ce,pt,xe),zt=new xp(q,pt,ze,X),Je=new wp(q,zt,pt,ze),ne=new bp(q,xe,_e),M=new hp(Se),Ue=new Nm(p,ft,dt,ce,xe,X,M),un=new rg(p,Se),Yt=new Bm,E=new qm(ce,xe),te=new op(p,ft,dt,le,Je,u,a),G=new $m(p,Je,xe),pe=new sg(q,ze,xe,le),se=new cp(q,ce,ze,xe),ve=new vp(q,ce,ze,xe),ze.programs=Ue.programs,p.capabilities=xe,p.extensions=ce,p.properties=Se,p.renderLists=Yt,p.shadowMap=G,p.state=le,p.info=ze}ge();const ue=new ig(p,q);this.xr=ue,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const w=ce.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ce.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(w){w!==void 0&&(N=w,this.setSize(T,P,!1))},this.getSize=function(w){return w.set(T,P)},this.setSize=function(w,F,k){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=w,P=F,e.width=Math.floor(w*N),e.height=Math.floor(F*N),k!==!1&&(e.style.width=w+"px",e.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(T*N,P*N).floor()},this.setDrawingBufferSize=function(w,F,k){T=w,P=F,N=k,e.width=Math.floor(w*k),e.height=Math.floor(F*k),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(D)},this.setViewport=function(w,F,k,I){w.isVector4?D.set(w.x,w.y,w.z,w.w):D.set(w,F,k,I),le.viewport(C.copy(D).multiplyScalar(N).floor())},this.getScissor=function(w){return w.copy(U)},this.setScissor=function(w,F,k,I){w.isVector4?U.set(w.x,w.y,w.z,w.w):U.set(w,F,k,I),le.scissor(A.copy(U).multiplyScalar(N).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(w){le.setScissorTest(Y=w)},this.setOpaqueSort=function(w){$=w},this.setTransparentSort=function(w){R=w},this.getClearColor=function(w){return w.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(w=!0,F=!0,k=!0){let I=0;w&&(I|=16384),F&&(I|=256),k&&(I|=1024),q.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",De,!1),Yt.dispose(),E.dispose(),Se.dispose(),ft.dispose(),dt.dispose(),Je.dispose(),X.dispose(),pe.dispose(),Ue.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",oe),ue.removeEventListener("sessionend",he),K&&(K.dispose(),K=null),Fe.stop()};function me(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const w=ze.autoReset,F=G.enabled,k=G.autoUpdate,I=G.needsUpdate,H=G.type;ge(),ze.autoReset=w,G.enabled=F,G.autoUpdate=k,G.needsUpdate=I,G.type=H}function De(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ve(w){const F=w.target;F.removeEventListener("dispose",Ve),nt(F)}function nt(w){L(w),Se.remove(w)}function L(w){const F=Se.get(w).programs;F!==void 0&&(F.forEach(function(k){Ue.releaseProgram(k)}),w.isShaderMaterial&&Ue.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,k,I,H,de){F===null&&(F=ee);const ye=H.isMesh&&H.matrixWorld.determinant()<0,be=su(w,F,k,I,H);le.setMaterial(I,ye);let we=k.index,Re=1;I.wireframe===!0&&(we=zt.getWireframeAttribute(k),Re=2);const Ee=k.drawRange,Ce=k.attributes.position;let Ye=Ee.start*Re,Tt=(Ee.start+Ee.count)*Re;de!==null&&(Ye=Math.max(Ye,de.start*Re),Tt=Math.min(Tt,(de.start+de.count)*Re)),we!==null?(Ye=Math.max(Ye,0),Tt=Math.min(Tt,we.count)):Ce!=null&&(Ye=Math.max(Ye,0),Tt=Math.min(Tt,Ce.count));const fn=Tt-Ye;if(fn<0||fn===1/0)return;X.setup(H,I,be,k,we);let kn,je=se;if(we!==null&&(kn=pt.get(we),je=ve,je.setIndex(kn)),H.isMesh)I.wireframe===!0?(le.setLineWidth(I.wireframeLinewidth*re()),je.setMode(1)):je.setMode(4);else if(H.isLine){let Ae=I.linewidth;Ae===void 0&&(Ae=1),le.setLineWidth(Ae*re()),H.isLineSegments?je.setMode(1):H.isLineLoop?je.setMode(2):je.setMode(3)}else H.isPoints?je.setMode(0):H.isSprite&&je.setMode(4);if(H.isInstancedMesh)je.renderInstances(Ye,fn,H.count);else if(k.isInstancedBufferGeometry){const Ae=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ts=Math.min(k.instanceCount,Ae);je.renderInstances(Ye,fn,Ts)}else je.render(Ye,fn)},this.compile=function(w,F){function k(I,H,de){I.transparent===!0&&I.side===Nr?(I.side=Wt,I.needsUpdate=!0,Ut(I,H,de),I.side=oi,I.needsUpdate=!0,Ut(I,H,de),I.side=Nr):Ut(I,H,de)}f=E.get(w),f.init(),g.push(f),w.traverseVisible(function(I){I.isLight&&I.layers.test(F.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights(p.physicallyCorrectLights),w.traverse(function(I){const H=I.material;if(H)if(Array.isArray(H))for(let de=0;de<H.length;de++){const ye=H[de];k(ye,w,I)}else k(H,w,I)}),g.pop(),f=null};let B=null;function J(w){B&&B(w)}function oe(){Fe.stop()}function he(){Fe.start()}const Fe=new Ql;Fe.setAnimationLoop(J),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(w){B=w,ue.setAnimationLoop(w),w===null?Fe.stop():Fe.start()},ue.addEventListener("sessionstart",oe),ue.addEventListener("sessionend",he),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(F),F=ue.getCamera()),w.isScene===!0&&w.onBeforeRender(p,w,F,v),f=E.get(w,g.length),f.init(),g.push(f),z.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),j.setFromProjectionMatrix(z),Q=this.localClippingEnabled,W=M.init(this.clippingPlanes,Q,F),h=Yt.get(w,m.length),h.init(),m.push(h),it(w,F,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort($,R),W===!0&&M.beginShadows();const k=f.state.shadowsArray;if(G.render(k,w,F),W===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(h,w),f.setupLights(p.physicallyCorrectLights),F.isArrayCamera){const I=F.cameras;for(let H=0,de=I.length;H<de;H++){const ye=I[H];ct(h,w,ye,ye.viewport)}}else ct(h,w,F);v!==null&&(_e.updateMultisampleRenderTarget(v),_e.updateRenderTargetMipmap(v)),w.isScene===!0&&w.onAfterRender(p,w,F),X.resetDefaultState(),S=-1,y=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function it(w,F,k,I){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)k=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||j.intersectsSprite(w)){I&&Z.setFromMatrixPosition(w.matrixWorld).applyMatrix4(z);const ye=Je.update(w),be=w.material;be.visible&&h.push(w,ye,be,k,Z.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==ze.render.frame&&(w.skeleton.update(),w.skeleton.frame=ze.render.frame),!w.frustumCulled||j.intersectsObject(w))){I&&Z.setFromMatrixPosition(w.matrixWorld).applyMatrix4(z);const ye=Je.update(w),be=w.material;if(Array.isArray(be)){const we=ye.groups;for(let Re=0,Ee=we.length;Re<Ee;Re++){const Ce=we[Re],Ye=be[Ce.materialIndex];Ye&&Ye.visible&&h.push(w,ye,Ye,k,Z.z,Ce)}}else be.visible&&h.push(w,ye,be,k,Z.z,null)}}const de=w.children;for(let ye=0,be=de.length;ye<be;ye++)it(de[ye],F,k,I)}function ct(w,F,k,I){const H=w.opaque,de=w.transmissive,ye=w.transparent;f.setupLightsView(k),de.length>0&&Bn(H,F,k),I&&le.viewport(C.copy(I)),H.length>0&&We(H,F,k),de.length>0&&We(de,F,k),ye.length>0&&We(ye,F,k),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Bn(w,F,k){const I=xe.isWebGL2;K===null&&(K=new ui(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")?Tr:li,minFilter:wr,samples:I&&r===!0?4:0})),p.getDrawingBufferSize(V),I?K.setSize(V.x,V.y):K.setSize(Sa(V.x),Sa(V.y));const H=p.getRenderTarget();p.setRenderTarget(K),p.clear();const de=p.toneMapping;p.toneMapping=Sn,We(w,F,k),p.toneMapping=de,_e.updateMultisampleRenderTarget(K),_e.updateRenderTargetMipmap(K),p.setRenderTarget(H)}function We(w,F,k){const I=F.isScene===!0?F.overrideMaterial:null;for(let H=0,de=w.length;H<de;H++){const ye=w[H],be=ye.object,we=ye.geometry,Re=I===null?ye.material:I,Ee=ye.group;be.layers.test(k.layers)&&hn(be,F,k,we,Re,Ee)}}function hn(w,F,k,I,H,de){w.onBeforeRender(p,F,k,I,H,de),w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(p,F,k,I,w,de),H.transparent===!0&&H.side===Nr?(H.side=Wt,H.needsUpdate=!0,p.renderBufferDirect(k,F,I,H,w,de),H.side=oi,H.needsUpdate=!0,p.renderBufferDirect(k,F,I,H,w,de),H.side=Nr):p.renderBufferDirect(k,F,I,H,w,de),w.onAfterRender(p,F,k,I,H,de)}function Ut(w,F,k){F.isScene!==!0&&(F=ee);const I=Se.get(w),H=f.state.lights,de=f.state.shadowsArray,ye=H.state.version,be=Ue.getParameters(w,H.state,de,F,k),we=Ue.getProgramCacheKey(be);let Re=I.programs;I.environment=w.isMeshStandardMaterial?F.environment:null,I.fog=F.fog,I.envMap=(w.isMeshStandardMaterial?dt:ft).get(w.envMap||I.environment),Re===void 0&&(w.addEventListener("dispose",Ve),Re=new Map,I.programs=Re);let Ee=Re.get(we);if(Ee!==void 0){if(I.currentProgram===Ee&&I.lightsStateVersion===ye)return no(w,be),Ee}else be.uniforms=Ue.getUniforms(w),w.onBuild(k,be,p),w.onBeforeCompile(be,p),Ee=Ue.acquireProgram(be,we),Re.set(we,Ee),I.uniforms=be.uniforms;const Ce=I.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ce.clippingPlanes=M.uniform),no(w,be),I.needsLights=ou(w),I.lightsStateVersion=ye,I.needsLights&&(Ce.ambientLightColor.value=H.state.ambient,Ce.lightProbe.value=H.state.probe,Ce.directionalLights.value=H.state.directional,Ce.directionalLightShadows.value=H.state.directionalShadow,Ce.spotLights.value=H.state.spot,Ce.spotLightShadows.value=H.state.spotShadow,Ce.rectAreaLights.value=H.state.rectArea,Ce.ltc_1.value=H.state.rectAreaLTC1,Ce.ltc_2.value=H.state.rectAreaLTC2,Ce.pointLights.value=H.state.point,Ce.pointLightShadows.value=H.state.pointShadow,Ce.hemisphereLights.value=H.state.hemi,Ce.directionalShadowMap.value=H.state.directionalShadowMap,Ce.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ce.spotShadowMap.value=H.state.spotShadowMap,Ce.spotLightMatrix.value=H.state.spotLightMatrix,Ce.spotLightMap.value=H.state.spotLightMap,Ce.pointShadowMap.value=H.state.pointShadowMap,Ce.pointShadowMatrix.value=H.state.pointShadowMatrix);const Ye=Ee.getUniforms(),Tt=rs.seqWithValue(Ye.seq,Ce);return I.currentProgram=Ee,I.uniformsList=Tt,Ee}function no(w,F){const k=Se.get(w);k.outputEncoding=F.outputEncoding,k.instancing=F.instancing,k.skinning=F.skinning,k.morphTargets=F.morphTargets,k.morphNormals=F.morphNormals,k.morphColors=F.morphColors,k.morphTargetsCount=F.morphTargetsCount,k.numClippingPlanes=F.numClippingPlanes,k.numIntersection=F.numClipIntersection,k.vertexAlphas=F.vertexAlphas,k.vertexTangents=F.vertexTangents,k.toneMapping=F.toneMapping}function su(w,F,k,I,H){F.isScene!==!0&&(F=ee),_e.resetTextureUnits();const de=F.fog,ye=I.isMeshStandardMaterial?F.environment:null,be=v===null?p.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:ci,we=(I.isMeshStandardMaterial?dt:ft).get(I.envMap||ye),Re=I.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ee=!!I.normalMap&&!!k.attributes.tangent,Ce=!!k.morphAttributes.position,Ye=!!k.morphAttributes.normal,Tt=!!k.morphAttributes.color,fn=I.toneMapped?p.toneMapping:Sn,kn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,je=kn!==void 0?kn.length:0,Ae=Se.get(I),Ts=f.state.lights;if(W===!0&&(Q===!0||w!==y)){const Et=w===y&&I.id===S;M.setState(I,w,Et)}let rt=!1;I.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Ts.state.version||Ae.outputEncoding!==be||H.isInstancedMesh&&Ae.instancing===!1||!H.isInstancedMesh&&Ae.instancing===!0||H.isSkinnedMesh&&Ae.skinning===!1||!H.isSkinnedMesh&&Ae.skinning===!0||Ae.envMap!==we||I.fog===!0&&Ae.fog!==de||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==M.numPlanes||Ae.numIntersection!==M.numIntersection)||Ae.vertexAlphas!==Re||Ae.vertexTangents!==Ee||Ae.morphTargets!==Ce||Ae.morphNormals!==Ye||Ae.morphColors!==Tt||Ae.toneMapping!==fn||xe.isWebGL2===!0&&Ae.morphTargetsCount!==je)&&(rt=!0):(rt=!0,Ae.__version=I.version);let Gn=Ae.currentProgram;rt===!0&&(Gn=Ut(I,F,H));let io=!1,nr=!1,Es=!1;const mt=Gn.getUniforms(),Vn=Ae.uniforms;if(le.useProgram(Gn.program)&&(io=!0,nr=!0,Es=!0),I.id!==S&&(S=I.id,nr=!0),io||y!==w){if(mt.setValue(q,"projectionMatrix",w.projectionMatrix),xe.logarithmicDepthBuffer&&mt.setValue(q,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),y!==w&&(y=w,nr=!0,Es=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const Et=mt.map.cameraPosition;Et!==void 0&&Et.setValue(q,Z.setFromMatrixPosition(w.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&mt.setValue(q,"isOrthographic",w.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||H.isSkinnedMesh)&&mt.setValue(q,"viewMatrix",w.matrixWorldInverse)}if(H.isSkinnedMesh){mt.setOptional(q,H,"bindMatrix"),mt.setOptional(q,H,"bindMatrixInverse");const Et=H.skeleton;Et&&(xe.floatVertexTextures?(Et.boneTexture===null&&Et.computeBoneTexture(),mt.setValue(q,"boneTexture",Et.boneTexture,_e),mt.setValue(q,"boneTextureSize",Et.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Cs=k.morphAttributes;if((Cs.position!==void 0||Cs.normal!==void 0||Cs.color!==void 0&&xe.isWebGL2===!0)&&ne.update(H,k,I,Gn),(nr||Ae.receiveShadow!==H.receiveShadow)&&(Ae.receiveShadow=H.receiveShadow,mt.setValue(q,"receiveShadow",H.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(Vn.envMap.value=we,Vn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),nr&&(mt.setValue(q,"toneMappingExposure",p.toneMappingExposure),Ae.needsLights&&au(Vn,Es),de&&I.fog===!0&&un.refreshFogUniforms(Vn,de),un.refreshMaterialUniforms(Vn,I,N,P,K),rs.upload(q,Ae.uniformsList,Vn,_e)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(rs.upload(q,Ae.uniformsList,Vn,_e),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&mt.setValue(q,"center",H.center),mt.setValue(q,"modelViewMatrix",H.modelViewMatrix),mt.setValue(q,"normalMatrix",H.normalMatrix),mt.setValue(q,"modelMatrix",H.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const Et=I.uniformsGroups;for(let As=0,lu=Et.length;As<lu;As++)if(xe.isWebGL2){const ro=Et[As];pe.update(ro,Gn),pe.bind(ro,Gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gn}function au(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function ou(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(w,F,k){Se.get(w.texture).__webglTexture=F,Se.get(w.depthTexture).__webglTexture=k;const I=Se.get(w);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=k===void 0,I.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,F){const k=Se.get(w);k.__webglFramebuffer=F,k.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,k=0){v=w,x=F,b=k;let I=!0,H=null,de=!1,ye=!1;if(w){const we=Se.get(w);we.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),I=!1):we.__webglFramebuffer===void 0?_e.setupRenderTarget(w):we.__hasExternalTextures&&_e.rebindTextures(w,Se.get(w.texture).__webglTexture,Se.get(w.depthTexture).__webglTexture);const Re=w.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ye=!0);const Ee=Se.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(H=Ee[F],de=!0):xe.isWebGL2&&w.samples>0&&_e.useMultisampledRTT(w)===!1?H=Se.get(w).__webglMultisampledFramebuffer:H=Ee,C.copy(w.viewport),A.copy(w.scissor),_=w.scissorTest}else C.copy(D).multiplyScalar(N).floor(),A.copy(U).multiplyScalar(N).floor(),_=Y;if(le.bindFramebuffer(36160,H)&&xe.drawBuffers&&I&&le.drawBuffers(w,H),le.viewport(C),le.scissor(A),le.setScissorTest(_),de){const we=Se.get(w.texture);q.framebufferTexture2D(36160,36064,34069+F,we.__webglTexture,k)}else if(ye){const we=Se.get(w.texture),Re=F||0;q.framebufferTextureLayer(36160,36064,we.__webglTexture,k||0,Re)}S=-1},this.readRenderTargetPixels=function(w,F,k,I,H,de,ye){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Se.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(be=be[ye]),be){le.bindFramebuffer(36160,be);try{const we=w.texture,Re=we.format,Ee=we.type;if(Re!==Jt&&ae.convert(Re)!==q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=Ee===Tr&&(ce.has("EXT_color_buffer_half_float")||xe.isWebGL2&&ce.has("EXT_color_buffer_float"));if(Ee!==li&&ae.convert(Ee)!==q.getParameter(35738)&&!(Ee===Qn&&(xe.isWebGL2||ce.has("OES_texture_float")||ce.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-I&&k>=0&&k<=w.height-H&&q.readPixels(F,k,I,H,ae.convert(Re),ae.convert(Ee),de)}finally{const we=v!==null?Se.get(v).__webglFramebuffer:null;le.bindFramebuffer(36160,we)}}},this.copyFramebufferToTexture=function(w,F,k=0){const I=Math.pow(2,-k),H=Math.floor(F.image.width*I),de=Math.floor(F.image.height*I);_e.setTexture2D(F,0),q.copyTexSubImage2D(3553,k,0,0,w.x,w.y,H,de),le.unbindTexture()},this.copyTextureToTexture=function(w,F,k,I=0){const H=F.image.width,de=F.image.height,ye=ae.convert(k.format),be=ae.convert(k.type);_e.setTexture2D(k,0),q.pixelStorei(37440,k.flipY),q.pixelStorei(37441,k.premultiplyAlpha),q.pixelStorei(3317,k.unpackAlignment),F.isDataTexture?q.texSubImage2D(3553,I,w.x,w.y,H,de,ye,be,F.image.data):F.isCompressedTexture?q.compressedTexSubImage2D(3553,I,w.x,w.y,F.mipmaps[0].width,F.mipmaps[0].height,ye,F.mipmaps[0].data):q.texSubImage2D(3553,I,w.x,w.y,ye,be,F.image),I===0&&k.generateMipmaps&&q.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(w,F,k,I,H=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=w.max.x-w.min.x+1,ye=w.max.y-w.min.y+1,be=w.max.z-w.min.z+1,we=ae.convert(I.format),Re=ae.convert(I.type);let Ee;if(I.isData3DTexture)_e.setTexture3D(I,0),Ee=32879;else if(I.isDataArrayTexture)_e.setTexture2DArray(I,0),Ee=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(37440,I.flipY),q.pixelStorei(37441,I.premultiplyAlpha),q.pixelStorei(3317,I.unpackAlignment);const Ce=q.getParameter(3314),Ye=q.getParameter(32878),Tt=q.getParameter(3316),fn=q.getParameter(3315),kn=q.getParameter(32877),je=k.isCompressedTexture?k.mipmaps[0]:k.image;q.pixelStorei(3314,je.width),q.pixelStorei(32878,je.height),q.pixelStorei(3316,w.min.x),q.pixelStorei(3315,w.min.y),q.pixelStorei(32877,w.min.z),k.isDataTexture||k.isData3DTexture?q.texSubImage3D(Ee,H,F.x,F.y,F.z,de,ye,be,we,Re,je.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Ee,H,F.x,F.y,F.z,de,ye,be,we,je.data)):q.texSubImage3D(Ee,H,F.x,F.y,F.z,de,ye,be,we,Re,je),q.pixelStorei(3314,Ce),q.pixelStorei(32878,Ye),q.pixelStorei(3316,Tt),q.pixelStorei(3315,fn),q.pixelStorei(32877,kn),H===0&&I.generateMipmaps&&q.generateMipmap(Ee),le.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?_e.setTextureCube(w,0):w.isData3DTexture?_e.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?_e.setTexture2DArray(w,0):_e.setTexture2D(w,0),le.unbindTexture()},this.resetState=function(){x=0,b=0,v=null,le.reset(),X.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class og extends rc{}og.prototype.isWebGL1Renderer=!0;class lg extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const gl={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class cg{constructor(e,t,n){const i=this;let r=!1,a=0,s=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){s++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,s),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,s),a===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const m=l[h],g=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const ug=new cg;class sc{constructor(e){this.manager=e!==void 0?e:ug,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class hg extends sc{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=gl.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const s=Cr("img");function c(){u(),gl.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){s.removeEventListener("load",c,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",c,!1),s.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(e),s.src=e,s}}class fg extends sc{constructor(e){super(e)}load(e,t,n,i){const r=new Mt,a=new hg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(s){r.image=s,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class dg extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class pg extends dg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fa);function xn(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function ac(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.5.1
 * https://greensock.com
 *
 * @license Copyright 2008-2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var qt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Yi={duration:.5,overwrite:!1,delay:0},on=1e8,Ne=1/on,wa=Math.PI*2,mg=wa/4,gg=0,oc=Math.sqrt,_g=Math.cos,xg=Math.sin,ht=function(e){return typeof e=="string"},at=function(e){return typeof e=="function"},Qt=function(e){return typeof e=="number"},Ba=function(e){return typeof e>"u"},wn=function(e){return typeof e=="object"},bt=function(e){return e!==!1},lc=function(){return typeof window<"u"},_l=function(e){return at(e)||ht(e)},cc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ht=Array.isArray,Ta=/(?:-?\.?\d|\.)+/gi,uc=/[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,Oi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,oa=/[-+=.]*\d+(?:\.|e-|e)*\d*/gi,hc=/[+-]=-?[\.\d]+/,fc=/[#\-+.]*\b[a-z\d-=+%.]+/gi,Ke,en,Ea,dc,Nt={},ls={},pc,mc=function(e){return(ls=ji(e,Nt))&&cn},ka=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},gc=function(e,t){return!t&&console.warn(e)},_c=function(e,t){return e&&(Nt[e]=t)&&ls&&(ls[e]=t)||Nt},Fr=function(){return 0},Ga={},Fn=[],Ca={},xc,Pt={},la={},xl=30,ss=[],Va="",Wa=function(e){var t=e[0],n,i;if(wn(t)||at(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ss.length;i--&&!ss[i].targetTest(t););n=ss[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Bc(e[i],n)))||e.splice(i,1);return e},si=function(e){return e._gsap||Wa(rn(e))[0]._gsap},vc=function(e,t,n){return(n=e[t])&&at(n)?e[t]():Ba(n)&&e.getAttribute&&e.getAttribute(t)||n},Ft=function(e,t){return(e=e.split(",")).forEach(t)||e},Te=function(e){return Math.round(e*1e5)/1e5||0},vg=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},_r=function(e,t,n){var i=Qt(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],s;if(i&&(a.duration=e[1]),a.parent=n,t){for(s=a;n&&!("immediateRender"in s);)s=n.vars.defaults||{},n=bt(n.vars.inherit)&&n.parent;a.immediateRender=bt(s.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return a},cs=function(){var e=Fn.length,t=Fn.slice(0),n,i;for(Ca={},Fn.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},yc=function(e,t,n,i){Fn.length&&cs(),e.render(t,n,i),Fn.length&&cs()},Mc=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(fc).length<2?t:ht(e)?e.trim():e},Sc=function(e){return e},Xt=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},yg=function(e,t){for(var n in t)n in e||n==="duration"||n==="ease"||(e[n]=t[n])},ji=function(e,t){for(var n in t)e[n]=t[n];return e},vl=function o(e,t){for(var n in t)e[n]=wn(t[n])?o(e[n]||(e[n]={}),t[n]):t[n];return e},Aa=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},as=function(e){var t=e.parent||Ke,n=e.keyframes?yg:Xt;if(bt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Mg=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Sg=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],s;if(r)for(s=t[r];a&&a[r]>s;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},ys=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},On=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},ai=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},bg=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},wg=function o(e){return!e||e._ts&&o(e.parent)},yl=function(e){return e._repeat?Zi(e._tTime,e=e.duration()+e._rDelay)*e:0},Zi=function(e,t){return(e/=t)&&~~e===e?~~e-1:~~e},us=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ha=function(e){return e._end=Te(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ne)||0))},bc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Te(e._dp._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ha(e),n._dirty||ai(n,e)),e},qa=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=us(e.rawTime(),t),(!t._dur||Or(0,t.totalDuration(),n)-t._tTime>Ne)&&t.render(n,!0)),ai(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ne}},Mn=function(e,t,n,i){return t.parent&&On(t),t._start=Te(n+t._delay),t._end=Te(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Sg(e,t,"_first","_last",e._sort?"_start":0),e._recent=t,i||qa(e,t),e},wc=function(e,t){return(Nt.ScrollTrigger||ka("scrollTrigger",t))&&Nt.ScrollTrigger.create(t,e)},Tc=function(e,t,n,i){if(qg(e,t),!e._initted)return 1;if(!n&&e._pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&xc!==Vt.frame)return Fn.push(e),e._lazy=[t,i],1},Tg=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&r&&!e._start&&e._zTime>Ne&&!e._dp._lock||(e._ts<0||e._dp._ts<0)&&e.data!=="isFromStart"&&e.data!=="isStart"?0:1,s=e._rDelay,c=0,l,u,h;if(s&&e._repeat&&(c=Or(0,e._tDur,t),u=Zi(c,s),h=Zi(e._tTime,s),u!==h&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||i||e._zTime===Ne||!t&&e._zTime){if(!e._initted&&Tc(e,t,i,n))return;for(h=e._zTime,e._zTime=t||(n?Ne:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,n||It(e,"onStart"),l=e._pt;l;)l.r(a,l.d),l=l._next;e._startAt&&t<0&&e._startAt.render(t,!0,!0),e._onUpdate&&!n&&It(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&It(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&On(e,1),n||(It(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Eg=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(!i._dur&&i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(!i._dur&&i.data==="isPause"&&i._start<t)return i;i=i._prev}},$i=function(e,t,n,i){var r=e._repeat,a=Te(t)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:Te(a*(r+1)+e._rDelay*r):a,s&&!i?bc(e,e._tTime=e._tDur*s):e.parent&&Ha(e),n||ai(e.parent,e),e},Ml=function(e){return e instanceof yt?ai(e):$i(e,e._dur)},Cg={_start:0,endTime:Fr},_t=function o(e,t){var n=e.labels,i=e._recent||Cg,r=e.duration()>=on?i.endTime(!1):e._dur,a,s;return ht(t)&&(isNaN(t)||t in n)?(a=t.charAt(0),a==="<"||a===">"?(a==="<"?i._start:i.endTime(i._repeat>=0))+(parseFloat(t.substr(1))||0):(a=t.indexOf("="),a<0?(t in n||(n[t]=r),n[t]):(s=+(t.charAt(a-1)+t.substr(a+1)),a>1?o(e,t.substr(0,a-1))+s:r+s))):t==null?r:+t},Un=function(e,t){return e||e===0?t(e):t},Or=function(e,t,n){return n<e?e:n>t?t:n},ln=function(e){return(e=(e+"").substr((parseFloat(e)+"").length))&&isNaN(e)?e:""},Ag=function(e,t,n){return Un(n,function(i){return Or(e,t,i)})},La=[].slice,Ec=function(e,t){return e&&wn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&wn(e[0]))&&!e.nodeType&&e!==en},Lg=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return ht(i)&&!t||Ec(i,1)?(r=n).push.apply(r,rn(i)):n.push(i)})||n},rn=function(e,t){return ht(e)&&!t&&(Ea||!Ki())?La.call(dc.querySelectorAll(e),0):Ht(e)?Lg(e,t):Ec(e)?La.call(e,0):e?[e]:[]},Cc=function(e){return e.sort(function(){return .5-Math.random()})},Ac=function(e){if(at(e))return e;var t=wn(e)?e:{each:e},n=ki(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},s=i>0&&i<1,c=isNaN(i)||s,l=t.axis,u=i,h=i;return ht(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!s&&c&&(u=i[0],h=i[1]),function(f,m,g){var p=(g||t).length,d=a[p],x,b,v,S,y,C,A,_,T;if(!d){if(T=t.grid==="auto"?0:(t.grid||[1,on])[1],!T){for(A=-on;A<(A=g[T++].getBoundingClientRect().left)&&T<p;);T--}for(d=a[p]=[],x=c?Math.min(T,p)*u-.5:i%T,b=c?p*h/T-.5:i/T|0,A=0,_=on,C=0;C<p;C++)v=C%T-x,S=b-(C/T|0),d[C]=y=l?Math.abs(l==="y"?S:v):oc(v*v+S*S),y>A&&(A=y),y<_&&(_=y);i==="random"&&Cc(d),d.max=A-_,d.min=_,d.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(T>p?p-1:l?l==="y"?p/T:T:Math.max(T,p/T))||0)*(i==="edges"?-1:1),d.b=p<0?r-p:r,d.u=ln(t.amount||t.each)||0,n=n&&p<0?Nc(n):n}return p=(d[f]-d.min)/d.max||0,Te(d.b+(n?n(p):p)*d.v)+d.u}},Pa=function(e){var t=e<1?Math.pow(10,(e+"").length-2):1;return function(n){return Math.floor(Math.round(parseFloat(n)/e)*e*t)/t+(Qt(n)?0:ln(n))}},Lc=function(e,t){var n=Ht(e),i,r;return!n&&wn(e)&&(i=n=e.radius||on,e.values?(e=rn(e.values),(r=!Qt(e[0]))&&(i*=i)):e=Pa(e.increment)),Un(t,n?at(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var s=parseFloat(r?a.x:a),c=parseFloat(r?a.y:0),l=on,u=0,h=e.length,f,m;h--;)r?(f=e[h].x-s,m=e[h].y-c,f=f*f+m*m):f=Math.abs(e[h]-s),f<l&&(l=f,u=h);return u=!i||l<=i?e[u]:a,r||u===a||Qt(a)?u:u+ln(a)}:Pa(e))},Pc=function(e,t,n,i){return Un(Ht(e)?!t:n===!0?!!(n=0):!i,function(){return Ht(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e+Math.random()*(t-e))/n)*n*i)/i})},Pg=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},Dg=function(e,t){return function(n){return e(parseFloat(n))+(t||ln(n))}},Rg=function(e,t,n){return Rc(e,t,0,1,n)},Dc=function(e,t,n){return Un(n,function(i){return e[~~t(i)]})},Ig=function o(e,t,n){var i=t-e;return Ht(e)?Dc(e,o(0,e.length),t):Un(n,function(r){return(i+(r-e)%i)%i+e})},Fg=function o(e,t,n){var i=t-e,r=i*2;return Ht(e)?Dc(e,o(0,e.length-1),t):Un(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},Ms=function(e){for(var t=0,n="",i,r,a,s;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),s=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(s?fc:Ta),n+=e.substr(t,i-t)+Pc(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Rc=function(e,t,n,i,r){var a=t-e,s=i-n;return Un(r,function(c){return n+((c-e)/a*s||0)})},Og=function o(e,t,n,i){var r=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!r){var a=ht(e),s={},c,l,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Ht(e)&&!Ht(t)){for(u=[],h=e.length,f=h-2,l=1;l<h;l++)u.push(o(e[l-1],e[l]));h--,r=function(g){g*=h;var p=Math.min(f,~~g);return u[p](g-p)},n=t}else i||(e=ji(Ht(e)?[]:{},e));if(!u){for(c in t)Xa.call(s,e,c,"get",t[c]);r=function(g){return Za(g,s)||(a?e.p:e)}}}return Un(n,r)},Sl=function(e,t,n){var i=e.labels,r=on,a,s,c;for(a in i)s=i[a]-t,s<0==!!n&&s&&r>(s=Math.abs(s))&&(c=a,r=s);return c},It=function(e,t,n){var i=e.vars,r=i[t],a,s;if(r)return a=i[t+"Params"],s=i.callbackScope||e,n&&Fn.length&&cs(),a?r.apply(s,a):r.call(s)},dr=function(e){return On(e),e.progress()<1&&It(e,"onInterrupt"),e},Ni,Ng=function(e){e=!e.name&&e.default||e;var t=e.name,n=at(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Fr,render:Za,add:Xa,kill:Jg,modifier:Kg,rawVars:0},a={targetTest:0,get:0,getSetter:ja,aliases:{},register:0};if(Ki(),e!==i){if(Pt[t])return;Xt(i,Xt(Aa(e,r),a)),ji(i.prototype,ji(r,Aa(e,a))),Pt[i.prop=t]=i,e.targetTest&&(ss.push(i),Ga[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}_c(t,i),e.register&&e.register(cn,i,wt)},Ge=255,pr={aqua:[0,Ge,Ge],lime:[0,Ge,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ge],navy:[0,0,128],white:[Ge,Ge,Ge],olive:[128,128,0],yellow:[Ge,Ge,0],orange:[Ge,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ge,0,0],pink:[Ge,192,203],cyan:[0,Ge,Ge],transparent:[Ge,Ge,Ge,0]},ca=function(e,t,n){return e=e<0?e+1:e>1?e-1:e,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ge+.5|0},Ic=function(e,t,n){var i=e?Qt(e)?[e>>16,e>>8&Ge,e&Ge]:0:pr.black,r,a,s,c,l,u,h,f,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),pr[e])i=pr[e];else if(e.charAt(0)==="#")e.length===4&&(r=e.charAt(1),a=e.charAt(2),s=e.charAt(3),e="#"+r+r+a+a+s+s),e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ge,e&Ge];else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Ta),!t)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(l+1):u+l-u*l,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=ca(c+1/3,r,a),i[1]=ca(c,r,a),i[2]=ca(c-1/3,r,a);else if(~e.indexOf("="))return i=e.match(uc),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ta)||pr.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/Ge,a=i[1]/Ge,s=i[2]/Ge,h=Math.max(r,a,s),f=Math.min(r,a,s),u=(h+f)/2,h===f?c=l=0:(m=h-f,l=u>.5?m/(2-h-f):m/(h+f),c=h===r?(a-s)/m+(a<s?6:0):h===a?(s-r)/m+2:(r-a)/m+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Fc=function(e){var t=[],n=[],i=-1;return e.split(Bi).forEach(function(r){var a=r.match(Oi)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},bl=function(e,t,n){var i="",r=(e+i).match(Bi),a=t?"hsla(":"rgba(",s=0,c,l,u,h;if(!r)return e;if(r=r.map(function(f){return(f=Ic(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Fc(e),c=n.c,c.join(i)!==u.c.join(i)))for(l=e.replace(Bi,"1").split(Oi),h=l.length-1;s<h;s++)i+=l[s]+(~c.indexOf(s)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!l)for(l=e.split(Bi),h=l.length-1;s<h;s++)i+=l[s]+r[s];return i+l[h]},Bi=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b",e;for(e in pr)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),zg=/hsl[a]?\(/,Oc=function(e){var t=e.join(" "),n;if(Bi.lastIndex=0,Bi.test(t))return n=zg.test(t),e[1]=bl(e[1],n),e[0]=bl(e[0],n,Fc(e[1])),!0},hs,Vt=function(){var o=Date.now,e=500,t=33,n=o(),i=n,r=1e3/240,a=r,s=[],c,l,u,h,f,m,g=function p(d){var x=o()-i,b=d===!0,v,S,y,C;if(x>e&&(n+=x-t),i+=x,y=i-n,v=y-a,(v>0||b)&&(C=++h.frame,f=y-h.time*1e3,h.time=y=y/1e3,a+=v+(v>=r?4:r-v),S=1),b||(c=l(p)),S)for(m=0;m<s.length;m++)s[m](y,f,C,d)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(d){return f/(1e3/(d||60))},wake:function(){pc&&(!Ea&&lc()&&(en=Ea=window,dc=en.document||{},Nt.gsap=cn,(en.gsapVersions||(en.gsapVersions=[])).push(cn.version),mc(ls||en.GreenSockGlobals||!en.gsap&&en||{}),u=en.requestAnimationFrame),c&&h.sleep(),l=u||function(d){return setTimeout(d,a-h.time*1e3+1|0)},hs=1,g(2))},sleep:function(){(u?en.cancelAnimationFrame:clearTimeout)(c),hs=0,l=Fr},lagSmoothing:function(d,x){e=d||1/Ne,t=Math.min(x,e,0)},fps:function(d){r=1e3/(d||240),a=h.time*1e3+r},add:function(d){s.indexOf(d)<0&&s.push(d),Ki()},remove:function(d){var x;~(x=s.indexOf(d))&&s.splice(x,1)&&m>=x&&m--},_listeners:s},h}(),Ki=function(){return!hs&&Vt.wake()},Le={},Ug=/^[\d.\-M][\d.\-,\s]/,Bg=/["']/g,kg=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,s,c,l;r<a;r++)c=n[r],s=r!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,s),t[i]=isNaN(l)?l.replace(Bg,"").trim():+l,i=c.substr(s+1).trim();return t},Gg=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Vg=function(e){var t=(e+"").split("("),n=Le[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[kg(t[1])]:Gg(e).split(",").map(Mc)):Le._CE&&Ug.test(e)?Le._CE("",e):n},Nc=function(e){return function(t){return 1-e(1-t)}},zc=function o(e,t){for(var n=e._first,i;n;)n instanceof yt?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ki=function(e,t){return e&&(at(e)?e:Le[e]||Vg(e))||t},pi=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return Ft(e,function(s){Le[s]=Nt[s]=r,Le[a=s.toLowerCase()]=n;for(var c in r)Le[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Le[s+"."+c]=r[c]}),r},Uc=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ua=function o(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/wa*(Math.asin(1/i)||0),s=function(u){return u===1?1:i*Math.pow(2,-10*u)*xg((u-a)*r)+1},c=e==="out"?s:e==="in"?function(l){return 1-s(1-l)}:Uc(s);return r=wa/r,c.config=function(l,u){return o(e,l,u)},c},ha=function o(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Uc(n);return i.config=function(r){return o(e,r)},i};Ft("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;pi(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Le.Linear.easeNone=Le.none=Le.Linear.easeIn;pi("Elastic",ua("in"),ua("out"),ua());(function(o,e){var t=1/e,n=2*t,i=2.5*t,r=function(s){return s<t?o*s*s:s<n?o*Math.pow(s-1.5/e,2)+.75:s<i?o*(s-=2.25/e)*s+.9375:o*Math.pow(s-2.625/e,2)+.984375};pi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);pi("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});pi("Circ",function(o){return-(oc(1-o*o)-1)});pi("Sine",function(o){return o===1?1:-_g(o*mg)+1});pi("Back",ha("in"),ha("out"),ha());Le.SteppedEase=Le.steps=Nt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-Ne;return function(s){return((i*Or(0,a,s)|0)+r)*n}}};Yi.ease=Le["quad.out"];Ft("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Va+=o+","+o+"Params,"});var Bc=function(e,t){this.id=gg++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:vc,this.set=t?t.getSetter:ja},Ar=function(){function o(t,n){var i=t.parent||Ke;this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,$i(this,+t.duration,1,1),this.data=t.data,hs||Vt.wake(),i&&Mn(i,this,n||n===0?n:i._time,1),t.reversed&&this.reverse(),t.paused&&this.paused(!0)}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,$i(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ki(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(bc(this,n);r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Mn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ne||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),yc(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+yl(this))%this._dur||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+yl(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Zi(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Ne?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?us(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ne?0:this._rts,bg(this.totalTime(Or(-this._delay,this._tDur,i),!0))},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ki(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&(this._tTime-=Ne)&&Math.abs(this._zTime)!==Ne))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Mn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(bt(n)?this.totalDuration():this.duration())/Math.abs(this._ts)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?us(i.rawTime(n),this):this._tTime:this._tTime},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return r},e.repeat=function(n){return arguments.length?(this._repeat=n,Ml(this)):this._repeat},e.repeatDelay=function(n){return arguments.length?(this._rDelay=n,Ml(this)):this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(_t(this,n),bt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,bt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ne:0)),this):this._rts<0},e.invalidate=function(){return this._initted=0,this._zTime=-Ne,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ne)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=at(n)?n:Sc,s=function(){var l=i.then;i.then=null,at(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=l),r(a),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},e.kill=function(){dr(this)},o}();Xt(Ar.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ne,_prom:0,_ps:!1,_rts:1});var yt=function(o){ac(e,o);function e(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n,i)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=bt(n.sortChildren),r.parent&&qa(r.parent,xn(r)),n.scrollTrigger&&wc(xn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return new $e(i,_r(arguments,0,this),_t(this,Qt(r)?arguments[3]:a)),this},t.from=function(i,r,a){return new $e(i,_r(arguments,1,this),_t(this,Qt(r)?arguments[3]:a)),this},t.fromTo=function(i,r,a,s){return new $e(i,_r(arguments,2,this),_t(this,Qt(r)?arguments[4]:s)),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,as(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new $e(i,r,_t(this,a),1),this},t.call=function(i,r,a){return Mn(this,$e.delayedCall(0,i,r),_t(this,a))},t.staggerTo=function(i,r,a,s,c,l,u){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=l,a.onCompleteParams=u,a.parent=this,new $e(i,a,_t(this,c)),this},t.staggerFrom=function(i,r,a,s,c,l,u){return a.runBackwards=1,as(a).immediateRender=bt(a.immediateRender),this.staggerTo(i,r,a,s,c,l,u)},t.staggerFromTo=function(i,r,a,s,c,l,u,h){return s.startAt=a,as(s).immediateRender=bt(s.immediateRender),this.staggerTo(i,r,s,c,l,u,h)},t.render=function(i,r,a){var s=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=this!==Ke&&i>c-Ne&&i>=0?c:i<Ne?0:i,h=this._zTime<0!=i<0&&(this._initted||!l),f,m,g,p,d,x,b,v,S,y,C,A;if(u!==this._tTime||a||h){if(s!==this._time&&l&&(u+=this._time-s,i+=this._time-s),f=u,S=this._start,v=this._ts,x=!v,h&&(l||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat&&(C=this._yoyo,d=l+this._rDelay,f=Te(u%d),u===c?(p=this._repeat,f=l):(p=~~(u/d),p&&p===u/d&&(f=l,p--),f>l&&(f=l)),y=Zi(this._tTime,d),!s&&this._tTime&&y!==p&&(y=p),C&&p&1&&(f=l-f,A=1),p!==y&&!this._lock)){var _=C&&y&1,T=_===(C&&p&1);if(p<y&&(_=!_),s=_?0:l,this._lock=1,this.render(s||(A?0:Te(p*d)),r,!l)._lock=0,!r&&this.parent&&It(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),s!==this._time||x!==!this._ts)return this;if(l=this._dur,c=this._tDur,T&&(this._lock=2,s=_?l:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;zc(this,A)}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=Eg(this,Te(s),Te(f)),b&&(u-=f-(f=b._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i),!s&&f&&!r&&It(this,"onStart"),f>=s&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&b!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,r,a),f!==this._time||!this._ts&&!x){b=0,g&&(u+=this._zTime=-Ne);break}}m=g}else{m=this._last;for(var P=i<0?i:f;m;){if(g=m._prev,(m._act||P<=m._end)&&m._ts&&b!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(P-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(P-m._start)*m._ts,r,a),f!==this._time||!this._ts&&!x){b=0,g&&(u+=this._zTime=P?-Ne:Ne);break}}m=g}}if(b&&!r&&(this.pause(),b.render(f>=s?0:-Ne)._zTime=f>=s?1:-1,this._ts))return this._start=S,Ha(this),this.render(i,r,a);this._onUpdate&&!r&&It(this,"onUpdate",!0),(u===c&&c>=this.totalDuration()||!u&&s)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&On(this,1),!r&&!(i<0&&!s)&&(u||s)&&(It(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(Qt(r)||(r=_t(this,r)),!(i instanceof Ar)){if(Ht(i))return i.forEach(function(s){return a.add(s,r)}),this;if(ht(i))return this.addLabel(i,r);if(at(i))i=$e.delayedCall(0,i);else return this}return this!==i?Mn(this,i,r):this},t.getChildren=function(i,r,a,s){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-on);for(var c=[],l=this._first;l;)l._start>=s&&(l instanceof $e?r&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,a)))),l=l._next;return c},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return ht(i)?this.removeLabel(i):at(i)?this.killTweensOf(i):(ys(this,i),i===this._recent&&(this._recent=this._last),ai(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Te(Vt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=_t(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var s=$e.delayedCall(0,r||Fr,a);return s.data="isPause",this._hasPause=1,Mn(this,s,_t(this,i))},t.removePause=function(i){var r=this._first;for(i=_t(this,i);r;)r._start===i&&r.data==="isPause"&&On(r),r=r._next},t.killTweensOf=function(i,r,a){for(var s=this.getTweensOf(i,a),c=s.length;c--;)Pn!==s[c]&&s[c].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],s=rn(i),c=this._first,l=Qt(r),u;c;)c instanceof $e?vg(c._targets,s)&&(l?(!Pn||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&a.push(c):(u=c.getTweensOf(s,r)).length&&a.push.apply(a,u),c=c._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,s=_t(a,i),c=r,l=c.startAt,u=c.onStart,h=c.onStartParams,f=$e.to(a,Xt(r,{ease:"none",lazy:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(l&&"time"in l?l.time:a._time))/a.timeScale())||Ne,onStart:function(){a.pause();var g=r.duration||Math.abs((s-a._time)/a.timeScale());f._dur!==g&&$i(f,g,0,1).render(f._time,!0,!0),u&&u.apply(f,h||[])}}));return f},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,Xt({startAt:{time:_t(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Sl(this,_t(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Sl(this,_t(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ne)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var s=this._first,c=this.labels,l;s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(r)for(l in c)c[l]>=a&&(c[l]+=i);return ai(this)},t.invalidate=function(){var i=this._first;for(this._lock=0;i;)i.invalidate(),i=i._next;return o.prototype.invalidate.call(this)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._time=this._tTime=this._pTime=0,i&&(this.labels={}),ai(this)},t.totalDuration=function(i){var r=0,a=this,s=a._last,c=on,l,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;s;)l=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>c&&a._sort&&s._ts&&!a._lock?(a._lock=1,Mn(a,s,u-s._delay,1)._lock=0):c=u,u<0&&s._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),c=0),s._end>r&&s._ts&&(r=s._end),s=l;$i(a,a===Ke&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Ke._ts&&(yc(Ke,us(i,Ke)),xc=Vt.frame),Vt.frame>=xl){xl+=qt.autoSleep||120;var r=Ke._first;if((!r||!r._ts)&&qt.autoSleep&&Vt._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Vt.sleep()}}},e}(Ar);Xt(yt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Wg=function(e,t,n,i,r,a,s){var c=new wt(this._pt,e,t,0,1,Hc,null,r),l=0,u=0,h,f,m,g,p,d,x,b;for(c.b=n,c.e=i,n+="",i+="",(x=~i.indexOf("random("))&&(i=Ms(i)),a&&(b=[n,i],a(b,e,t),n=b[0],i=b[1]),f=n.match(oa)||[];h=oa.exec(i);)g=h[0],p=i.substring(l,h.index),m?m=(m+1)%5:p.substr(-5)==="rgba("&&(m=1),g!==f[u++]&&(d=parseFloat(f[u-1])||0,c._pt={_next:c._pt,p:p||u===1?p:",",s:d,c:g.charAt(1)==="="?parseFloat(g.substr(2))*(g.charAt(0)==="-"?-1:1):parseFloat(g)-d,m:m&&m<4?Math.round:0},l=oa.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=s,(hc.test(i)||x)&&(c.e=0),this._pt=c,c},Xa=function(e,t,n,i,r,a,s,c,l){at(i)&&(i=i(r||0,e,a));var u=e[t],h=n!=="get"?n:at(u)?l?e[t.indexOf("set")||!at(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():u,f=at(u)?l?jg:Vc:Ya,m;if(ht(i)&&(~i.indexOf("random(")&&(i=Ms(i)),i.charAt(1)==="="&&(i=parseFloat(h)+parseFloat(i.substr(2))*(i.charAt(0)==="-"?-1:1)+(ln(h)||0))),h!==i)return isNaN(h*i)?(!u&&!(t in e)&&ka(t,i),Wg.call(this,e,t,h,i,f,c||qt.stringFilter,l)):(m=new wt(this._pt,e,t,+h||0,i-(h||0),typeof u=="boolean"?$g:Wc,0,f),l&&(m.fp=l),s&&m.modifier(s,this,e),this._pt=m)},Hg=function(e,t,n,i,r){if(at(e)&&(e=xr(e,r,t,n,i)),!wn(e)||e.style&&e.nodeType||Ht(e)||cc(e))return ht(e)?xr(e,r,t,n,i):e;var a={},s;for(s in e)a[s]=xr(e[s],r,t,n,i);return a},kc=function(e,t,n,i,r,a){var s,c,l,u;if(Pt[e]&&(s=new Pt[e]).init(r,s.rawVars?t[e]:Hg(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=c=new wt(n._pt,r,e,0,1,s.render,s,0,s.priority),n!==Ni))for(l=n._ptLookup[n._targets.indexOf(r)],u=s._props.length;u--;)l[s._props[u]]=c;return s},Pn,qg=function o(e,t){var n=e.vars,i=n.ease,r=n.startAt,a=n.immediateRender,s=n.lazy,c=n.onUpdate,l=n.onUpdateParams,u=n.callbackScope,h=n.runBackwards,f=n.yoyoEase,m=n.keyframes,g=n.autoRevert,p=e._dur,d=e._startAt,x=e._targets,b=e.parent,v=b&&b.data==="nested"?b.parent._targets:x,S=e._overwrite==="auto",y=e.timeline,C,A,_,T,P,N,$,R,D,U,Y,j,W;if(y&&(!m||!i)&&(i="none"),e._ease=ki(i,Yi.ease),e._yEase=f?Nc(ki(f===!0?i:f,Yi.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),!y){if(R=x[0]?si(x[0]).harness:0,j=R&&n[R.prop],C=Aa(n,Ga),d&&d.render(-1,!0).kill(),r){if(On(e._startAt=$e.set(x,Xt({data:"isStart",overwrite:!1,parent:b,immediateRender:!0,lazy:bt(s),startAt:null,delay:0,onUpdate:c,onUpdateParams:l,callbackScope:u,stagger:0},r))),a){if(t>0)g||(e._startAt=0);else if(p&&!(t<0&&d)){t&&(e._zTime=t);return}}}else if(h&&p){if(d)!g&&(e._startAt=0);else if(t&&(a=!1),_=Xt({overwrite:!1,data:"isFromStart",lazy:a&&bt(s),immediateRender:a,stagger:0,parent:b},C),j&&(_[R.prop]=j),On(e._startAt=$e.set(x,_)),!a)o(e._startAt,Ne);else if(!t)return}for(e._pt=0,s=p&&bt(s)||s&&!p,A=0;A<x.length;A++){if(P=x[A],$=P._gsap||Wa(x)[A]._gsap,e._ptLookup[A]=U={},Ca[$.id]&&Fn.length&&cs(),Y=v===x?A:v.indexOf(P),R&&(D=new R).init(P,j||C,e,Y,v)!==!1&&(e._pt=T=new wt(e._pt,P,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(Q){U[Q]=T}),D.priority&&(N=1)),!R||j)for(_ in C)Pt[_]&&(D=kc(_,C,e,Y,P,v))?D.priority&&(N=1):U[_]=T=Xa.call(e,P,_,"get",C[_],Y,v,0,n.stringFilter);e._op&&e._op[A]&&e.kill(P,e._op[A]),S&&e._pt&&(Pn=e,Ke.killTweensOf(P,U,e.globalTime(0)),W=!e.parent,Pn=0),e._pt&&s&&(Ca[$.id]=1)}N&&qc(e),e._onInit&&e._onInit(e)}e._from=!y&&!!n.runBackwards,e._onUpdate=c,e._initted=(!e._op||e._pt)&&!W},Xg=function(e,t){var n=e[0]?si(e[0]).harness:0,i=n&&n.aliases,r,a,s,c;if(!i)return t;r=ji({},t);for(a in i)if(a in r)for(c=i[a].split(","),s=c.length;s--;)r[c[s]]=r[a];return r},xr=function(e,t,n,i,r){return at(e)?e.call(t,n,i,r):ht(e)&&~e.indexOf("random(")?Ms(e):e},Gc=Va+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",Yg=(Gc+",id,stagger,delay,duration,paused,scrollTrigger").split(","),$e=function(o){ac(e,o);function e(n,i,r,a){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=o.call(this,a?i:as(i),r)||this;var c=s.vars,l=c.duration,u=c.delay,h=c.immediateRender,f=c.stagger,m=c.overwrite,g=c.keyframes,p=c.defaults,d=c.scrollTrigger,x=c.yoyoEase,b=s.parent,v=(Ht(n)||cc(n)?Qt(n[0]):"length"in i)?[n]:rn(n),S,y,C,A,_,T,P,N;if(s._targets=v.length?Wa(v):gc("GSAP target "+n+" not found. https://greensock.com",!qt.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,g||f||_l(l)||_l(u)){if(i=s.vars,S=s.timeline=new yt({data:"nested",defaults:p||{}}),S.kill(),S.parent=xn(s),g)Xt(S.vars.defaults,{ease:"none"}),g.forEach(function($){return S.to(v,$,">")});else{if(A=v.length,P=f?Ac(f):Fr,wn(f))for(_ in f)~Gc.indexOf(_)&&(N||(N={}),N[_]=f[_]);for(y=0;y<A;y++){C={};for(_ in i)Yg.indexOf(_)<0&&(C[_]=i[_]);C.stagger=0,x&&(C.yoyoEase=x),N&&ji(C,N),T=v[y],C.duration=+xr(l,xn(s),y,T,v),C.delay=(+xr(u,xn(s),y,T,v)||0)-s._delay,!f&&A===1&&C.delay&&(s._delay=u=C.delay,s._start+=u,C.delay=0),S.to(T,C,P(y,T,v))}S.duration()?l=u=0:s.timeline=0}l||s.duration(l=S.duration())}else s.timeline=0;return m===!0&&(Pn=xn(s),Ke.killTweensOf(v),Pn=0),b&&qa(b,xn(s)),(h||!l&&!g&&s._start===Te(b._time)&&bt(h)&&wg(xn(s))&&b.data!=="nested")&&(s._tTime=-Ne,s.render(Math.max(0,-u))),d&&wc(xn(s),d),s}var t=e.prototype;return t.render=function(i,r,a){var s=this._time,c=this._tDur,l=this._dur,u=i>c-Ne&&i>=0?c:i<Ne?0:i,h,f,m,g,p,d,x,b,v;if(!l)Tg(this,i,r,a);else if(u!==this._tTime||!i||a||this._startAt&&this._zTime<0!=i<0){if(h=u,b=this.timeline,this._repeat){if(g=l+this._rDelay,h=Te(u%g),u===c?(m=this._repeat,h=l):(m=~~(u/g),m&&m===u/g&&(h=l,m--),h>l&&(h=l)),d=this._yoyo&&m&1,d&&(v=this._yEase,h=l-h),p=Zi(this._tTime,g),h===s&&!a&&this._initted)return this;m!==p&&(b&&this._yEase&&zc(b,d),this.vars.repeatRefresh&&!d&&!this._lock&&(this._lock=a=1,this.render(Te(g*m),!0).invalidate()._lock=0))}if(!this._initted){if(Tc(this,i<0?i:h,a,r))return this._tTime=0,this;if(l!==this._dur)return this.render(i,r,a)}for(this._tTime=u,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(v||this._ease)(h/l),this._from&&(this.ratio=x=1-x),h&&!s&&!r&&It(this,"onStart"),f=this._pt;f;)f.r(x,f.d),f=f._next;b&&b.render(i<0?i:!h&&d?-Ne:b._dur*x,r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(i<0&&this._startAt&&this._startAt.render(i,!0,a),It(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!r&&this.parent&&It(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(i<0&&this._startAt&&!this._onUpdate&&this._startAt.render(i,!0,!0),(i||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&On(this,1),!r&&!(i<0&&!s)&&(u||s)&&(It(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._act=this._lazy=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),o.prototype.invalidate.call(this)},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all")&&(this._lazy=0,this.parent))return dr(this);if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Pn&&Pn.vars.overwrite!==!0)._first||dr(this),this.parent&&a!==this.timeline.totalDuration()&&$i(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,c=i?rn(i):s,l=this._ptLookup,u=this._pt,h,f,m,g,p,d,x;if((!r||r==="all")&&Mg(s,c))return r==="all"&&(this._pt=0),dr(this);for(h=this._op=this._op||[],r!=="all"&&(ht(r)&&(p={},Ft(r,function(b){return p[b]=1}),r=p),r=Xg(s,r)),x=s.length;x--;)if(~c.indexOf(s[x])){f=l[x],r==="all"?(h[x]=r,g=f,m={}):(m=h[x]=h[x]||{},g=r);for(p in g)d=f&&f[p],d&&((!("kill"in d.d)||d.d.kill(p)===!0)&&ys(this,d,"_pt"),delete f[p]),m!=="all"&&(m[p]=1)}return this._initted&&!this._pt&&u&&dr(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return new e(i,_r(arguments,1))},e.delayedCall=function(i,r,a,s){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},e.fromTo=function(i,r,a){return new e(i,_r(arguments,2))},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return Ke.killTweensOf(i,r,a)},e}(Ar);Xt($e.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ft("staggerTo,staggerFrom,staggerFromTo",function(o){$e[o]=function(){var e=new yt,t=La.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var Ya=function(e,t,n){return e[t]=n},Vc=function(e,t,n){return e[t](n)},jg=function(e,t,n,i){return e[t](i.fp,n)},Zg=function(e,t,n){return e.setAttribute(t,n)},ja=function(e,t){return at(e[t])?Vc:Ba(e[t])&&e.setAttribute?Zg:Ya},Wc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4,t)},$g=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Hc=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Za=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Kg=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},Jg=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ys(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Qg=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},qc=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},wt=function(){function o(t,n,i,r,a,s,c,l,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=s||Wc,this.d=c||this,this.set=l||Ya,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Qg,this.m=n,this.mt=r,this.tween=i},o}();Ft(Va+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Ga[o]=1});Nt.TweenMax=Nt.TweenLite=$e;Nt.TimelineLite=Nt.TimelineMax=yt;Ke=new yt({sortChildren:!1,defaults:Yi,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});qt.stringFilter=Oc;var fs={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Ng(i)})},timeline:function(e){return new yt(e)},getTweensOf:function(e,t){return Ke.getTweensOf(e,t)},getProperty:function(e,t,n,i){ht(e)&&(e=rn(e)[0]);var r=si(e||{}).get,a=n?Sc:Mc;return n==="native"&&(n=""),e&&(t?a((Pt[t]&&Pt[t].get||r)(e,t,n,i)):function(s,c,l){return a((Pt[s]&&Pt[s].get||r)(e,s,c,l))})},quickSetter:function(e,t,n){if(e=rn(e),e.length>1){var i=e.map(function(u){return cn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var a=Pt[t],s=si(e),c=s.harness&&(s.harness.aliases||{})[t]||t,l=a?function(u){var h=new a;Ni._pt=0,h.init(e,n?u+n:u,Ni,0,[e]),h.render(1,h),Ni._pt&&Za(1,Ni)}:s.set(e,c);return a?l:function(u){return l(e,c,n?u+n:u,s,1)}},isTweening:function(e){return Ke.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ki(e.ease,Yi.ease)),vl(Yi,e||{})},config:function(e){return vl(qt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!Pt[s]&&!Nt[s]&&gc(t+" effect requires "+s+" plugin.")}),la[t]=function(s,c,l){return n(rn(s),Xt(c||{},r),l)},a&&(yt.prototype[t]=function(s,c,l){return this.add(la[t](s,wn(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){Le[e]=ki(t)},parseEase:function(e,t){return arguments.length?ki(e,t):Le},getById:function(e){return Ke.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new yt(e),i,r;for(n.smoothChildTiming=bt(e.smoothChildTiming),Ke.remove(n),n._dp=0,n._time=n._tTime=Ke._time,i=Ke._first;i;)r=i._next,(t||!(!i._dur&&i instanceof $e&&i.vars.onComplete===i._targets[0]))&&Mn(n,i,i._start-i._delay),i=r;return Mn(Ke,n,0),n},utils:{wrap:Ig,wrapYoyo:Fg,distribute:Ac,random:Pc,snap:Lc,normalize:Rg,getUnit:ln,clamp:Ag,splitColor:Ic,toArray:rn,mapRange:Rc,pipe:Pg,unitize:Dg,interpolate:Og,shuffle:Cc},install:mc,effects:la,ticker:Vt,updateRoot:yt.updateRoot,plugins:Pt,globalTimeline:Ke,core:{PropTween:wt,globals:_c,Tween:$e,Timeline:yt,Animation:Ar,getCache:si,_removeLinkedListItem:ys}};Ft("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return fs[o]=$e[o]});Vt.add(yt.updateRoot);Ni=fs.to({},{duration:0});var e_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},t_=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=e_(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},fa=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(s){var c,l;if(ht(r)&&(c={},Ft(r,function(u){return c[u]=1}),r=c),t){c={};for(l in r)c[l]=t(r[l]);r=c}t_(s,r)}}}},cn=fs.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,s;for(a in t)s=this.add(e,"setAttribute",(e.getAttribute(a)||0)+"",t[a],i,r,0,0,a),s&&(s.op=a),this._props.push(a)}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n])}},fa("roundProps",Pa),fa("modifiers"),fa("snap",Lc))||fs;$e.version=yt.version=cn.version="3.5.1";pc=1;lc()&&Ki();Le.Power0;Le.Power1;Le.Power2;Le.Power3;Le.Power4;Le.Linear;Le.Quad;Le.Cubic;Le.Quart;Le.Quint;Le.Strong;Le.Elastic;Le.Back;Le.SteppedEase;Le.Bounce;Le.Sine;Le.Expo;Le.Circ;/*!
 * CSSPlugin 3.5.1
 * https://greensock.com
 *
 * Copyright 2008-2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var wl,sn,Gi,$a,ei,mr,Tl,n_=function(){return typeof window<"u"},Nn={},$n=180/Math.PI,Vi=Math.PI/180,Li=Math.atan2,El=1e8,Xc=/([A-Z])/g,i_=/(?:left|right|width|margin|padding|x)/i,r_=/[\s,\(]\S/,Dn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Yc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},s_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},a_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},o_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},jc=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Zc=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},l_=function(e,t,n){return e.style[t]=n},c_=function(e,t,n){return e.style.setProperty(t,n)},u_=function(e,t,n){return e._gsap[t]=n},h_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},f_=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},d_=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},Ot="transform",zn=Ot+"Origin",$c,Da=function(e,t){var n=sn.createElementNS?sn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):sn.createElement(e);return n.style?n:sn.createElement(e)},bn=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Xc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,Ji(t)||t,1)||""},Cl="O,Moz,ms,Ms,Webkit".split(","),Ji=function(e,t,n){var i=t||ei,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Cl[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Cl[a]:"")+e},Ra=function(){n_()&&window.document&&(wl=window,sn=wl.document,Gi=sn.documentElement,ei=Da("div")||{style:{}},mr=Da("div"),Ot=Ji(Ot),zn=Ot+"Origin",ei.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",$c=!!Ji("perspective"),$a=1)},da=function o(e){var t=Da("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(Gi.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Gi.removeChild(t),this.style.cssText=r,a},Al=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Kc=function(e){var t;try{t=e.getBBox()}catch{t=da.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===da||(t=da.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Al(e,["x","cx","x1"])||0,y:+Al(e,["y","cy","y1"])||0,width:0,height:0}:t},Jc=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Kc(e))},ds=function(e,t){if(t){var n=e.style;t in Nn&&t!==zn&&(t=Ot),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Xc,"-$1").toLowerCase())):n.removeAttribute(t)}},Rn=function(e,t,n,i,r,a){var s=new wt(e._pt,t,n,0,1,a?Zc:jc);return e._pt=s,s.b=i,s.e=r,e._props.push(n),s},Ll={deg:1,rad:1,turn:1},fi=function o(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",s=ei.style,c=i_.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,f=i==="px",m=i==="%",g,p,d,x;return i===a||!r||Ll[i]||Ll[a]?r:(a!=="px"&&!f&&(r=o(e,t,n,"px")),x=e.getCTM&&Jc(e),m&&(Nn[t]||~t.indexOf("adius"))?Te(r/(x?e.getBBox()[c?"width":"height"]:e[u])*h):(s[c?"width":"height"]=h+(f?a:i),p=~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,x&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===sn||!p.appendChild)&&(p=sn.body),d=p._gsap,d&&m&&d.width&&c&&d.time===Vt.time?Te(r/d.width*h):((m||a==="%")&&(s.position=bn(e,"position")),p===e&&(s.position="static"),p.appendChild(ei),g=ei[u],p.removeChild(ei),s.position="absolute",c&&m&&(d=si(p),d.time=Vt.time,d.width=p[u]),Te(f?g*r/h:g&&r?h/g*r:0))))},gr=function(e,t,n,i){var r;return $a||Ra(),t in Dn&&t!=="transform"&&(t=Dn[t],~t.indexOf(",")&&(t=t.split(",")[0])),Nn[t]&&t!=="transform"?(r=Ss(e,i),r=t!=="transformOrigin"?r[t]:ms(bn(e,zn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ps[t]&&ps[t](e,t,n)||bn(e,t)||vc(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").indexOf(" ")?fi(e,t,r,n)+n:r},p_=function(e,t,n,i){if(!n||n==="none"){var r=Ji(t,e,1),a=r&&bn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=bn(e,"borderTopColor"))}var s=new wt(this._pt,e.style,t,0,1,Hc),c=0,l=0,u,h,f,m,g,p,d,x,b,v,S,y,C;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=bn(e,t)||i,e.style[t]=n),u=[n,i],Oc(u),n=u[0],i=u[1],f=n.match(Oi)||[],C=i.match(Oi)||[],C.length){for(;h=Oi.exec(i);)d=h[0],b=i.substring(c,h.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),d!==(p=f[l++]||"")&&(m=parseFloat(p)||0,S=p.substr((m+"").length),y=d.charAt(1)==="="?+(d.charAt(0)+"1"):0,y&&(d=d.substr(2)),x=parseFloat(d),v=d.substr((x+"").length),c=Oi.lastIndex-v.length,v||(v=v||qt.units[t]||S,c===i.length&&(i+=v,s.e+=v)),S!==v&&(m=fi(e,t,p,v)||0),s._pt={_next:s._pt,p:b||l===1?b:",",s:m,c:y?y*x:x-m,m:g&&g<4?Math.round:0});s.c=c<i.length?i.substring(c,i.length):""}else s.r=t==="display"&&i==="none"?Zc:jc;return hc.test(i)&&(s.e=0),this._pt=s,s},Pl={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},m_=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Pl[n]||n,t[1]=Pl[i]||i,t.join(" ")},g_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,s,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)s=r[l],Nn[s]&&(c=1,s=s==="transformOrigin"?zn:Ot),ds(n,s);c&&(ds(n,Ot),a&&(a.svg&&n.removeAttribute("transform"),Ss(n,1),a.uncache=1))}},ps={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new wt(e._pt,t,n,0,0,g_);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},Lr=[1,0,0,1,0,0],Qc={},eu=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Dl=function(e){var t=bn(e,Ot);return eu(t)?Lr:t.substr(7).match(uc).map(Te)},Ka=function(e,t){var n=e._gsap||si(e),i=e.style,r=Dl(e),a,s,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?Lr:r):(r===Lr&&!e.offsetParent&&e!==Gi&&!n.svg&&(c=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(l=1,s=e.nextSibling,Gi.appendChild(e)),r=Dl(e),c?i.display=c:ds(e,"display"),l&&(s?a.insertBefore(e,s):a?a.appendChild(e):Gi.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ia=function(e,t,n,i,r,a){var s=e._gsap,c=r||Ka(e,!0),l=s.xOrigin||0,u=s.yOrigin||0,h=s.xOffset||0,f=s.yOffset||0,m=c[0],g=c[1],p=c[2],d=c[3],x=c[4],b=c[5],v=t.split(" "),S=parseFloat(v[0])||0,y=parseFloat(v[1])||0,C,A,_,T;n?c!==Lr&&(A=m*d-g*p)&&(_=S*(d/A)+y*(-p/A)+(p*b-d*x)/A,T=S*(-g/A)+y*(m/A)-(m*b-g*x)/A,S=_,y=T):(C=Kc(e),S=C.x+(~v[0].indexOf("%")?S/100*C.width:S),y=C.y+(~(v[1]||v[0]).indexOf("%")?y/100*C.height:y)),i||i!==!1&&s.smooth?(x=S-l,b=y-u,s.xOffset=h+(x*m+b*p)-x,s.yOffset=f+(x*g+b*d)-b):s.xOffset=s.yOffset=0,s.xOrigin=S,s.yOrigin=y,s.smooth=!!i,s.origin=t,s.originIsAbsolute=!!n,e.style[zn]="0px 0px",a&&(Rn(a,s,"xOrigin",l,S),Rn(a,s,"yOrigin",u,y),Rn(a,s,"xOffset",h,s.xOffset),Rn(a,s,"yOffset",f,s.yOffset)),e.setAttribute("data-svg-origin",S+" "+y)},Ss=function(e,t){var n=e._gsap||new Bc(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",s="deg",c=bn(e,zn)||"0",l,u,h,f,m,g,p,d,x,b,v,S,y,C,A,_,T,P,N,$,R,D,U,Y,j,W,Q,K,z,V,Z,ee;return l=u=h=g=p=d=x=b=v=0,f=m=1,n.svg=!!(e.getCTM&&Jc(e)),C=Ka(e,n.svg),n.svg&&(Y=!n.uncache&&e.getAttribute("data-svg-origin"),Ia(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,C)),S=n.xOrigin||0,y=n.yOrigin||0,C!==Lr&&(P=C[0],N=C[1],$=C[2],R=C[3],l=D=C[4],u=U=C[5],C.length===6?(f=Math.sqrt(P*P+N*N),m=Math.sqrt(R*R+$*$),g=P||N?Li(N,P)*$n:0,x=$||R?Li($,R)*$n+g:0,x&&(m*=Math.cos(x*Vi)),n.svg&&(l-=S-(S*P+y*$),u-=y-(S*N+y*R))):(ee=C[6],V=C[7],Q=C[8],K=C[9],z=C[10],Z=C[11],l=C[12],u=C[13],h=C[14],A=Li(ee,z),p=A*$n,A&&(_=Math.cos(-A),T=Math.sin(-A),Y=D*_+Q*T,j=U*_+K*T,W=ee*_+z*T,Q=D*-T+Q*_,K=U*-T+K*_,z=ee*-T+z*_,Z=V*-T+Z*_,D=Y,U=j,ee=W),A=Li(-$,z),d=A*$n,A&&(_=Math.cos(-A),T=Math.sin(-A),Y=P*_-Q*T,j=N*_-K*T,W=$*_-z*T,Z=R*T+Z*_,P=Y,N=j,$=W),A=Li(N,P),g=A*$n,A&&(_=Math.cos(A),T=Math.sin(A),Y=P*_+N*T,j=D*_+U*T,N=N*_-P*T,U=U*_-D*T,P=Y,D=j),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,d=180-d),f=Te(Math.sqrt(P*P+N*N+$*$)),m=Te(Math.sqrt(U*U+ee*ee)),A=Li(D,U),x=Math.abs(A)>2e-4?A*$n:0,v=Z?1/(Z<0?-Z:Z):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!eu(bn(e,Ot)),Y&&e.setAttribute("transform",Y))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(f*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(m*=-1,x+=x<=0?180:-180)),n.x=((n.xPercent=l&&Math.round(e.offsetWidth/2)===Math.round(-l)?-50:0)?0:l)+a,n.y=((n.yPercent=u&&Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)?0:u)+a,n.z=h+a,n.scaleX=Te(f),n.scaleY=Te(m),n.rotation=Te(g)+s,n.rotationX=Te(p)+s,n.rotationY=Te(d)+s,n.skewX=x+s,n.skewY=b+s,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[zn]=ms(c)),n.xOffset=n.yOffset=0,n.force3D=qt.force3D,n.renderTransform=n.svg?x_:$c?tu:__,n.uncache=0,n},ms=function(e){return(e=e.split(" "))[0]+" "+e[1]},pa=function(e,t,n){var i=ln(t);return Te(parseFloat(t)+parseFloat(fi(e,"x",n+"px",i)))+i},__=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,tu(e,t)},Xn="0deg",ur="0px",Yn=") ",tu=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,p=n.scaleY,d=n.transformPerspective,x=n.force3D,b=n.target,v=n.zOrigin,S="",y=x==="auto"&&e&&e!==1||x===!0;if(v&&(h!==Xn||u!==Xn)){var C=parseFloat(u)*Vi,A=Math.sin(C),_=Math.cos(C),T;C=parseFloat(h)*Vi,T=Math.cos(C),a=pa(b,a,A*T*-v),s=pa(b,s,-Math.sin(C)*-v),c=pa(b,c,_*T*-v+v)}d!==ur&&(S+="perspective("+d+Yn),(i||r)&&(S+="translate("+i+"%, "+r+"%) "),(y||a!==ur||s!==ur||c!==ur)&&(S+=c!==ur||y?"translate3d("+a+", "+s+", "+c+") ":"translate("+a+", "+s+Yn),l!==Xn&&(S+="rotate("+l+Yn),u!==Xn&&(S+="rotateY("+u+Yn),h!==Xn&&(S+="rotateX("+h+Yn),(f!==Xn||m!==Xn)&&(S+="skew("+f+", "+m+Yn),(g!==1||p!==1)&&(S+="scale("+g+", "+p+Yn),b.style[Ot]=S||"translate(0, 0)"},x_=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,p=n.yOrigin,d=n.xOffset,x=n.yOffset,b=n.forceCSS,v=parseFloat(a),S=parseFloat(s),y,C,A,_,T;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=Vi,l*=Vi,y=Math.cos(c)*h,C=Math.sin(c)*h,A=Math.sin(c-l)*-f,_=Math.cos(c-l)*f,l&&(u*=Vi,T=Math.tan(l-u),T=Math.sqrt(1+T*T),A*=T,_*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),y*=T,C*=T)),y=Te(y),C=Te(C),A=Te(A),_=Te(_)):(y=h,_=f,C=A=0),(v&&!~(a+"").indexOf("px")||S&&!~(s+"").indexOf("px"))&&(v=fi(m,"x",a,"px"),S=fi(m,"y",s,"px")),(g||p||d||x)&&(v=Te(v+g-(g*y+p*A)+d),S=Te(S+p-(g*C+p*_)+x)),(i||r)&&(T=m.getBBox(),v=Te(v+i/100*T.width),S=Te(S+r/100*T.height)),T="matrix("+y+","+C+","+A+","+_+","+v+","+S+")",m.setAttribute("transform",T),b&&(m.style[Ot]=T)},v_=function(e,t,n,i,r,a){var s=360,c=ht(r),l=parseFloat(r)*(c&&~r.indexOf("rad")?$n:1),u=a?l*a:l-i,h=i+u+"deg",f,m;return c&&(f=r.split("_")[1],f==="short"&&(u%=s,u!==u%(s/2)&&(u+=u<0?s:-s)),f==="cw"&&u<0?u=(u+s*El)%s-~~(u/s)*s:f==="ccw"&&u>0&&(u=(u-s*El)%s-~~(u/s)*s)),e._pt=m=new wt(e._pt,t,n,i,u,s_),m.e=h,m.u="deg",e._props.push(n),m},y_=function(e,t,n){var i=mr.style,r=n._gsap,a="perspective,force3D,transformOrigin,svgOrigin",s,c,l,u,h,f,m,g;i.cssText=getComputedStyle(n).cssText+";position:absolute;display:block;",i[Ot]=t,sn.body.appendChild(mr),s=Ss(mr,1);for(c in Nn)l=r[c],u=s[c],l!==u&&a.indexOf(c)<0&&(m=ln(l),g=ln(u),h=m!==g?fi(n,c,l,g):parseFloat(l),f=parseFloat(u),e._pt=new wt(e._pt,r,c,h,f-h,Yc),e._pt.u=g||0,e._props.push(c));sn.body.removeChild(mr)};Ft("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(s){return e<2?o+s:"border"+s+o});ps[e>1?"border"+o:o]=function(s,c,l,u,h){var f,m;if(arguments.length<4)return f=a.map(function(g){return gr(s,g,l)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},a.forEach(function(g,p){return m[g]=f[p]=f[p]||f[(p-1)/2|0]}),s.init(c,m,h)}});var nu={name:"css",register:Ra,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,s=e.style,c,l,u,h,f,m,g,p,d,x,b,v,S,y,C;$a||Ra();for(g in t)if(g!=="autoRound"&&(l=t[g],!(Pt[g]&&kc(g,t,n,i,e,r)))){if(f=typeof l,m=ps[g],f==="function"&&(l=l.call(n,i,e,r),f=typeof l),f==="string"&&~l.indexOf("random(")&&(l=Ms(l)),m)m(this,e,g,l,n)&&(C=1);else if(g.substr(0,2)==="--")this.add(s,"setProperty",getComputedStyle(e).getPropertyValue(g)+"",l+"",i,r,0,0,g);else if(f!=="undefined"){if(c=gr(e,g),h=parseFloat(c),x=f==="string"&&l.charAt(1)==="="?+(l.charAt(0)+"1"):0,x&&(l=l.substr(2)),u=parseFloat(l),g in Dn&&(g==="autoAlpha"&&(h===1&&gr(e,"visibility")==="hidden"&&u&&(h=0),Rn(this,s,"visibility",h?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Dn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),b=g in Nn,b){if(v||(S=e._gsap,S.renderTransform||Ss(e),y=t.smoothOrigin!==!1&&S.smooth,v=this._pt=new wt(this._pt,s,Ot,0,1,S.renderTransform,S,0,-1),v.dep=1),g==="scale")this._pt=new wt(this._pt,S,"scaleY",S.scaleY,x?x*u:u-S.scaleY),a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){l=m_(l),S.svg?Ia(e,l,0,y,0,this):(d=parseFloat(l.split(" ")[2])||0,d!==S.zOrigin&&Rn(this,S,"zOrigin",S.zOrigin,d),Rn(this,s,g,ms(c),ms(l)));continue}else if(g==="svgOrigin"){Ia(e,l,1,y,0,this);continue}else if(g in Qc){v_(this,S,g,h,l,x);continue}else if(g==="smoothOrigin"){Rn(this,S,"smooth",S.smooth,l);continue}else if(g==="force3D"){S[g]=l;continue}else if(g==="transform"){y_(this,l,e);continue}}else g in s||(g=Ji(g)||g);if(b||(u||u===0)&&(h||h===0)&&!r_.test(l)&&g in s)p=(c+"").substr((h+"").length),u||(u=0),d=ln(l)||(g in qt.units?qt.units[g]:p),p!==d&&(h=fi(e,g,c,d)),this._pt=new wt(this._pt,b?S:s,g,h,x?x*u:u-h,d==="px"&&t.autoRound!==!1&&!b?o_:Yc),this._pt.u=d||0,p!==d&&(this._pt.b=c,this._pt.r=a_);else if(g in s)p_.call(this,e,g,c,l);else if(g in e)this.add(e,g,e[g],l,i,r);else{ka(g,l);continue}a.push(g)}}C&&qc(this)},get:gr,aliases:Dn,getSetter:function(e,t,n){var i=Dn[t];return i&&i.indexOf(",")<0&&(t=i),t in Nn&&t!==zn&&(e._gsap.x||gr(e,"x"))?n&&Tl===n?t==="scale"?h_:u_:(Tl=n||{})&&(t==="scale"?f_:d_):e.style&&!Ba(e.style[t])?l_:~t.indexOf("-")?c_:ja(e,t)},core:{_removeProperty:ds,_getMatrix:Ka}};cn.utils.checkPrefix=Ji;(function(o,e,t,n){var i=Ft(o+","+e+","+t,function(r){Nn[r]=1});Ft(e,function(r){qt.units[r]="deg",Qc[r]=1}),Dn[i[13]]=o+","+e,Ft(n,function(r){var a=r.split(":");Dn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ft("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){qt.units[o]="px"});cn.registerPlugin(nu);var os=cn.registerPlugin(nu)||cn;os.core.Tween;document.addEventListener("DOMContentLoaded",function(){var o=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);o&&(document.getElementById("mobile-warning").style.display="flex",document.body.style.overflow="hidden")});const ti=document.querySelector("canvas.webgl"),M_=document.querySelector("#logo"),S_=document.querySelector("#scroll-btn"),b_=document.querySelector("#scroll-btn2"),w_=document.querySelector("#scroll-btn3");document.querySelector("#scroll-btn4");const T_=document.querySelector(".page-1"),E_=document.querySelector(".page-2"),Rl=document.querySelector(".page-3"),Il=document.querySelector(".page-4");document.querySelector(".page-5");const Di=document.querySelector("body");document.querySelector("#main");const Ri=document.querySelector(".heading"),Ii=document.querySelector(".description"),qe=document.querySelectorAll(".learn");console.log(qe);const vr=document.querySelector(".panel-1"),yr=document.querySelector(".panel-2"),Mr=document.querySelector(".panel-3"),Sr=document.querySelector(".panel-4"),br=document.querySelector(".panel-5");let Xe=-5,bs=!1;document.getElementsByClassName("landing");console.log();const C_=parseFloat(getComputedStyle(ti).width);C_/ti.width;M_.addEventListener("click",function(){T_.scrollIntoView({behavior:"smooth"}),console.log("logo clicked"),Qa(),Xe=-5,Ja()});S_.addEventListener("click",function(){Xe=-5,E_.scrollIntoView({behavior:"smooth"}),ru(),Di.style.backgroundColor="#fafaf9",Ri.style.color="#b1ee46s",Ii.style.color="#b1ee46s"});b_.addEventListener("click",function(){Rl.style.display="block",Rl.scrollIntoView({behavior:"smooth"}),Qa()});w_.addEventListener("click",function(){Il.style.display="block",Il.scrollIntoView({behavior:"smooth"})});const ws=new lg;class A_{constructor(e,t,n){this.dimensions={x:1.8,y:3.7,z:.2},this.name=e,this.mesh=void 0,this.imagePath=t,this.sideColor=n}async createMesh(){const e=new er(this.dimensions.x,this.dimensions.y,this.dimensions.z),n=await new fg().load(this.imagePath),i=[new Ln({color:this.sideColor}),new Ln({color:this.sideColor}),new Ln({color:this.sideColor}),new Ln({color:this.sideColor}),new Ln({map:n}),new Ln({color:this.sideColor})];return this.mesh=new yn(e,i),this.mesh}}let ma={x:2.5,z:.2,rY:.1},Ie=[];Xe=-5;bs=!1;const Fl=[{name:"choco",path:"/images/chocoTile.jpg",color:16247511},{name:"royal",path:"/images/horrorTile.jpg",color:2829096},{name:"iri",path:"/images/iriTile.jpg",color:133226},{name:"nature",path:"/images/natureTile.jpg",color:12700125},{name:"lime",path:"/images/limeTile.jpg",color:15000804}];Fl.forEach((o,e)=>{let t=new A_(o.name,o.path,o.color);t.createMesh().then(n=>{ws.add(n),Ie.push(t),e===Fl.length-1&&(Ja(),L_())})});function Oe(o,e,t,n){os.to(o.mesh.position,{duration:.8,delay:0,ease:"power2",x:ma.x*e}),os.to(o.mesh.position,{duration:.8,delay:0,ease:"power2",z:ma.z*t}),os.to(o.mesh.rotation,{duration:.8,delay:0,ease:"power2",y:ma.rY*n})}function L_(){bs=!0}console.log(`Position ${Xe}`);function Ja(){Xe===-5&&(console.log("at position -5"),Oe(Ie[0],0,0,0),Oe(Ie[1],-1,-1,-1),Oe(Ie[2],-2,-3,-2),Oe(Ie[3],-3,-6,-3),Oe(Ie[4],-4.3,-12,-5)),Xe===-4&&(console.log("at position -4"),Oe(Ie[0],1,-1,1),Oe(Ie[1],0,0,0),Oe(Ie[2],-1,-1,-1),Oe(Ie[3],-2,-3,-2),Oe(Ie[4],-3,-6,-3)),Xe===-3&&(console.log("at position -3"),Oe(Ie[0],2,-3,2),Oe(Ie[1],1,-1,1),Oe(Ie[2],0,0,0),Oe(Ie[3],-1,-1,-1),Oe(Ie[4],-2,-3,-2)),Xe===-2&&(console.log("at position -2"),Oe(Ie[0],3,-6,3),Oe(Ie[1],2,-3,2),Oe(Ie[2],1,-1,1),Oe(Ie[3],0,0,0),Oe(Ie[4],-1,-1,-1)),Xe===-1&&(console.log("at position -1"),Oe(Ie[0],4.3,-12,5),Oe(Ie[1],3,-6,3),Oe(Ie[2],2,-3,2),Oe(Ie[3],1,-1,1),Oe(Ie[4],0,0,0)),Xe===0&&(console.log("at position 0"),Oe(Ie[0],5,-16,5),Oe(Ie[1],4.3,-12,5),Oe(Ie[2],3,-6,3),Oe(Ie[3],2,-3,2),Oe(Ie[4],1,-1,1))}console.log(bs);ti.addEventListener("click",function(o){const t=parseFloat(getComputedStyle(ti).width)/ti.width,n=o.offsetX/t;bs===!0&&(n>=ti.width/2?(Xe--,Xe<-5&&(Xe=-5)):(Xe++,Xe>-1&&(Xe=-1)),Ja(),Qa())});function Qa(){Xe===-5?(Di.style.backgroundColor="#f7ead7",Ri.style.color="#311508",Ii.style.color="#311508",qe[0].style.color="#311508",qe[0].style.borderColor="#311508",qe[0].style.color="#311508",qe[0].style.borderColor="#311508",D_()):Xe===-4?(Di.style.backgroundColor="#2b2b28",Ri.style.color="#d62828",Ii.style.color="#d62828",qe[0].style.color="#d62828",qe[0].style.borderColor="#d62828",qe[1].style.color="#d62828",qe[1].style.borderColor="#d62828",vr.style.backgroundColor="#dddbd1",yr.style.backgroundColor="#e0ccba",Mr.style.backgroundColor="#d62828",Sr.style.backgroundColor="#752828",br.style.backgroundColor="#a37f14"):Xe===-3?(Di.style.backgroundColor="#03066e",Ri.style.color="#ffe537",Ii.style.color="#ffe537",qe[0].style.color="#ffe537",qe[0].style.borderColor="#ffe537",qe[1].style.color="#ffe537",qe[1].style.borderColor="#ffe537",vr.style.backgroundColor="#eb221b",yr.style.backgroundColor="#f54f10",Mr.style.backgroundColor="#ffe537",Sr.style.backgroundColor="#83ea20",br.style.backgroundColor="#68b7ef"):Xe===-2?(Di.style.backgroundColor="#c1c9dd",Ri.style.color="#215b33",Ii.style.color="#215b33",qe[0].style.color="#215b33",qe[0].style.borderColor="#215b33",qe[1].style.color="#215b33",qe[1].style.borderColor="#215b33",vr.style.backgroundColor="#cec1b5",yr.style.backgroundColor="#d8b596",Mr.style.backgroundColor="#c1a875",Sr.style.backgroundColor="#215b33",br.style.backgroundColor="#2b2b28"):Xe===-1&&(Di.style.backgroundColor="#fafaf9",Ri.style.color="#b1ee46",Ii.style.color="#b1ee46",qe[0].style.color="#b1ee46",qe[0].style.borderColor="#b1ee46",qe[1].style.color="#b1ee46",qe[1].style.borderColor="#b1ee46",ru())}const gs={width:window.innerWidth,height:window.innerHeight/1.9},eo=new Gt(75,gs.width/gs.height);eo.position.z=3;ws.add(eo);const to=new rc({canvas:ti,alpha:!0});to.setSize(gs.width,gs.height);to.setPixelRatio(window.devicePixelRatio);const P_=new pg(16777215,1);ws.add(P_);const iu=()=>{to.render(ws,eo),window.requestAnimationFrame(iu)};iu();function ru(){vr.style.backgroundColor="#e5ff9a",yr.style.backgroundColor="#dbff74",Mr.style.backgroundColor="#cbff58",Sr.style.backgroundColor="#b1ee46",br.style.backgroundColor="#9dd227"}function D_(){vr.style.backgroundColor="rgb(255, 253, 245)",yr.style.backgroundColor="#a2b9e7",Mr.style.backgroundColor="#65341c",Sr.style.backgroundColor="#402315",br.style.backgroundColor="#311508"}
//# sourceMappingURL=index-d39f946a.js.map
