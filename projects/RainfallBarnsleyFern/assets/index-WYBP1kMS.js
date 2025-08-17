(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $s="179",Nc=0,Ao=1,Oc=2,kl=1,Bc=2,gn=3,Fn=0,Pt=1,on=2,Pn=0,wi=1,wo=2,Ro=3,Co=4,kc=5,qn=100,zc=101,Gc=102,Vc=103,Hc=104,Wc=200,Xc=201,Yc=202,qc=203,ss=204,os=205,jc=206,Kc=207,Zc=208,Jc=209,Qc=210,$c=211,eu=212,tu=213,nu=214,ls=0,cs=1,us=2,Ui=3,fs=4,hs=5,ds=6,ps=7,zl=0,iu=1,ru=2,Ln=0,au=1,su=2,ou=3,lu=4,cu=5,uu=6,fu=7,Gl=300,Di=301,Pi=302,ms=303,gs=304,la=306,_s=1e3,Zn=1001,vs=1002,tn=1003,hu=1004,Mr=1005,Xt=1006,Aa=1007,Jn=1008,Sn=1009,Vl=1010,Hl=1011,rr=1012,eo=1013,$n=1014,_n=1015,cr=1016,to=1017,no=1018,ar=1020,Wl=35902,Xl=1021,Yl=1022,en=1023,sr=1026,or=1027,ql=1028,io=1029,jl=1030,ro=1031,ao=1033,jr=33776,Kr=33777,Zr=33778,Jr=33779,xs=35840,Ss=35841,Ms=35842,ys=35843,Es=36196,Ts=37492,bs=37496,As=37808,ws=37809,Rs=37810,Cs=37811,Us=37812,Ds=37813,Ps=37814,Ls=37815,Is=37816,Fs=37817,Ns=37818,Os=37819,Bs=37820,ks=37821,Qr=36492,zs=36494,Gs=36495,Kl=36283,Vs=36284,Hs=36285,Ws=36286,du=3200,Zl=3201,pu=0,mu=1,Dn="",Ht="srgb",Li="srgb-linear",aa="linear",at="srgb",fi=7680,Uo=519,gu=512,_u=513,vu=514,Jl=515,xu=516,Su=517,Mu=518,yu=519,Do=35044,Po="300 es",ln=2e3,sa=2001;class Fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const n=r[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const n=r.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wa=Math.PI/180,Xs=180/Math.PI;function ur(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Tt[a&255]+Tt[a>>8&255]+Tt[a>>16&255]+Tt[a>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[r&255]+Tt[r>>8&255]+Tt[r>>16&255]+Tt[r>>24&255]).toLowerCase()}function Ze(a,e,t){return Math.max(e,Math.min(t,a))}function Eu(a,e){return(a%e+e)%e}function Ra(a,e,t){return(1-t)*a+t*e}function ji(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Dt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ze(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),i=this.x-e.x,s=this.y-e.y;return this.x=i*r-s*n+e.x,this.y=i*n+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fr{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,i,s,o){let c=r[n+0],l=r[n+1],u=r[n+2],f=r[n+3];const h=i[s+0],d=i[s+1],_=i[s+2],x=i[s+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=_,e[t+3]=x;return}if(f!==x||c!==h||l!==d||u!==_){let m=1-o;const p=c*h+l*d+u*_+f*x,C=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const U=Math.sqrt(T),D=Math.atan2(U,p*C);m=Math.sin(m*D)/U,o=Math.sin(o*D)/U}const y=o*C;if(c=c*m+h*y,l=l*m+d*y,u=u*m+_*y,f=f*m+x*y,m===1-o){const U=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=U,l*=U,u*=U,f*=U}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,r,n,i,s){const o=r[n],c=r[n+1],l=r[n+2],u=r[n+3],f=i[s],h=i[s+1],d=i[s+2],_=i[s+3];return e[t]=o*_+u*f+c*d-l*h,e[t+1]=c*_+u*h+l*f-o*d,e[t+2]=l*_+u*d+o*h-c*f,e[t+3]=u*_-o*f-c*h-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,n=e._y,i=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(r/2),u=o(n/2),f=o(i/2),h=c(r/2),d=c(n/2),_=c(i/2);switch(s){case"XYZ":this._x=h*u*f+l*d*_,this._y=l*d*f-h*u*_,this._z=l*u*_+h*d*f,this._w=l*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+l*d*_,this._y=l*d*f-h*u*_,this._z=l*u*_-h*d*f,this._w=l*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-l*d*_,this._y=l*d*f+h*u*_,this._z=l*u*_+h*d*f,this._w=l*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-l*d*_,this._y=l*d*f+h*u*_,this._z=l*u*_-h*d*f,this._w=l*u*f+h*d*_;break;case"YZX":this._x=h*u*f+l*d*_,this._y=l*d*f+h*u*_,this._z=l*u*_-h*d*f,this._w=l*u*f-h*d*_;break;case"XZY":this._x=h*u*f-l*d*_,this._y=l*d*f-h*u*_,this._z=l*u*_+h*d*f,this._w=l*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],i=t[8],s=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=r+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(i-l)*d,this._z=(s-n)*d}else if(r>o&&r>f){const d=2*Math.sqrt(1+r-o-f);this._w=(u-c)/d,this._x=.25*d,this._y=(n+s)/d,this._z=(i+l)/d}else if(o>f){const d=2*Math.sqrt(1+o-r-f);this._w=(i-l)/d,this._x=(n+s)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-r-o);this._w=(s-n)/d,this._x=(i+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,i=e._z,s=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=r*u+s*o+n*l-i*c,this._y=n*u+s*c+i*o-r*l,this._z=i*u+s*l+r*c-n*o,this._w=s*u-r*o-n*c-i*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,i=this._z,s=this._w;let o=s*e._w+r*e._x+n*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=r,this._y=n,this._z=i,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*s+t*this._w,this._x=d*r+t*this._x,this._y=d*n+t*this._y,this._z=d*i+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=s*f+this._w*h,this._x=r*f+this._x*h,this._y=n*f+this._y*h,this._z=i*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),n=Math.sqrt(1-r),i=Math.sqrt(r);return this.set(n*Math.sin(e),n*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,t=0,r=0){le.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6]*n,this.y=i[1]*t+i[4]*r+i[7]*n,this.z=i[2]*t+i[5]*r+i[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=e.elements,s=1/(i[3]*t+i[7]*r+i[11]*n+i[15]);return this.x=(i[0]*t+i[4]*r+i[8]*n+i[12])*s,this.y=(i[1]*t+i[5]*r+i[9]*n+i[13])*s,this.z=(i[2]*t+i[6]*r+i[10]*n+i[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,i=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*n-o*r),u=2*(o*t-i*n),f=2*(i*r-s*t);return this.x=t+c*l+s*f-o*u,this.y=r+c*u+o*l-i*f,this.z=n+c*f+i*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[4]*r+i[8]*n,this.y=i[1]*t+i[5]*r+i[9]*n,this.z=i[2]*t+i[6]*r+i[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,i=e.z,s=t.x,o=t.y,c=t.z;return this.x=n*c-i*o,this.y=i*s-r*c,this.z=r*o-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ca.copy(this).projectOnVector(e),this.sub(Ca)}reflect(e){return this.sub(Ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ze(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ca=new le,Lo=new fr;class Ye{constructor(e,t,r,n,i,s,o,c,l){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,s,o,c,l)}set(e,t,r,n,i,s,o,c,l){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=i,u[5]=c,u[6]=r,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,s=r[0],o=r[3],c=r[6],l=r[1],u=r[4],f=r[7],h=r[2],d=r[5],_=r[8],x=n[0],m=n[3],p=n[6],C=n[1],T=n[4],y=n[7],U=n[2],D=n[5],E=n[8];return i[0]=s*x+o*C+c*U,i[3]=s*m+o*T+c*D,i[6]=s*p+o*y+c*E,i[1]=l*x+u*C+f*U,i[4]=l*m+u*T+f*D,i[7]=l*p+u*y+f*E,i[2]=h*x+d*C+_*U,i[5]=h*m+d*T+_*D,i[8]=h*p+d*y+_*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*o*l-r*i*u+r*o*c+n*i*l-n*s*c}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*s-o*l,h=o*c-u*i,d=l*i-s*c,_=t*f+r*h+n*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(n*l-u*r)*x,e[2]=(o*r-n*s)*x,e[3]=h*x,e[4]=(u*t-n*c)*x,e[5]=(n*i-o*t)*x,e[6]=d*x,e[7]=(r*c-l*t)*x,e[8]=(s*t-r*i)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,i,s,o){const c=Math.cos(i),l=Math.sin(i);return this.set(r*c,r*l,-r*(c*s+l*o)+s+e,-n*l,n*c,-n*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ua.makeScale(e,t)),this}rotate(e){return this.premultiply(Ua.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ua.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ua=new Ye;function Ql(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function oa(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Tu(){const a=oa("canvas");return a.style.display="block",a}const Io={};function Ri(a){a in Io||(Io[a]=!0,console.warn(a))}function bu(a,e,t){return new Promise(function(r,n){function i(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:n();break;case a.TIMEOUT_EXPIRED:setTimeout(i,t);break;default:r()}}setTimeout(i,t)})}const Fo=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),No=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Au(){const a={enabled:!0,workingColorSpace:Li,spaces:{},convert:function(n,i,s){return this.enabled===!1||i===s||!i||!s||(this.spaces[i].transfer===at&&(n.r=vn(n.r),n.g=vn(n.g),n.b=vn(n.b)),this.spaces[i].primaries!==this.spaces[s].primaries&&(n.applyMatrix3(this.spaces[i].toXYZ),n.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===at&&(n.r=Ci(n.r),n.g=Ci(n.g),n.b=Ci(n.b))),n},workingToColorSpace:function(n,i){return this.convert(n,this.workingColorSpace,i)},colorSpaceToWorking:function(n,i){return this.convert(n,i,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Dn?aa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,i=this.workingColorSpace){return n.fromArray(this.spaces[i].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,i,s){return n.copy(this.spaces[i].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,i){return Ri("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(n,i)},toWorkingColorSpace:function(n,i){return Ri("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(n,i)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Li]:{primaries:e,whitePoint:r,transfer:aa,toXYZ:Fo,fromXYZ:No,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:r,transfer:at,toXYZ:Fo,fromXYZ:No,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),a}const $e=Au();function vn(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ci(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let hi;class wu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{hi===void 0&&(hi=oa("canvas")),hi.width=e.width,hi.height=e.height;const n=hi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),r=hi}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oa("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),i=n.data;for(let s=0;s<i.length;s++)i[s]=vn(i[s]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(vn(t[r]/255)*255):t[r]=vn(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ru=0;class so{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=ur(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let i;if(Array.isArray(n)){i=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?i.push(Da(n[s].image)):i.push(Da(n[s]))}else i=Da(n);r.url=i}return t||(e.images[this.uuid]=r),r}}function Da(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?wu.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cu=0;const Pa=new le;class wt extends Fi{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,r=Zn,n=Zn,i=Xt,s=Jn,o=en,c=Sn,l=wt.DEFAULT_ANISOTROPY,u=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=ur(),this.name="",this.source=new so(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=i,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pa).x}get height(){return this.source.getSize(Pa).y}get depth(){return this.source.getSize(Pa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}n&&r&&n.isVector2&&r.isVector2||n&&r&&n.isVector3&&r.isVector3||n&&r&&n.isMatrix3&&r.isMatrix3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _s:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case vs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _s:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case vs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=Gl;wt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,r=0,n=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*n+s[12]*i,this.y=s[1]*t+s[5]*r+s[9]*n+s[13]*i,this.z=s[2]*t+s[6]*r+s[10]*n+s[14]*i,this.w=s[3]*t+s[7]*r+s[11]*n+s[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,i;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],_=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,y=(d+1)/2,U=(p+1)/2,D=(u+h)/4,E=(f+x)/4,S=(_+m)/4;return T>y&&T>U?T<.01?(r=0,n=.707106781,i=.707106781):(r=Math.sqrt(T),n=D/r,i=E/r):y>U?y<.01?(r=.707106781,n=0,i=.707106781):(n=Math.sqrt(y),r=D/n,i=S/n):U<.01?(r=.707106781,n=.707106781,i=0):(i=Math.sqrt(U),r=E/i,n=S/i),this.set(r,n,i,t),this}let C=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(C)<.001&&(C=1),this.x=(m-_)/C,this.y=(f-x)/C,this.z=(h-u)/C,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uu extends Fi{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const n={width:e,height:t,depth:r.depth},i=new wt(n);this.textures=[];const s=r.count;for(let o=0;o<s;o++)this.textures[o]=i.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let n=0,i=this.textures.length;n<i;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=r,this.textures[n].isArrayTexture=this.textures[n].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new so(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends Uu{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class $l extends wt{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=tn,this.minFilter=tn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Du extends wt{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=tn,this.minFilter=tn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class si{constructor(e=new le(1/0,1/0,1/0),t=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const i=r.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=i.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Zt):Zt.fromBufferAttribute(i,s),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yr.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),yr.copy(r.boundingBox)),yr.applyMatrix4(e.matrixWorld),this.union(yr)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ki),Er.subVectors(this.max,Ki),di.subVectors(e.a,Ki),pi.subVectors(e.b,Ki),mi.subVectors(e.c,Ki),bn.subVectors(pi,di),An.subVectors(mi,pi),On.subVectors(di,mi);let t=[0,-bn.z,bn.y,0,-An.z,An.y,0,-On.z,On.y,bn.z,0,-bn.x,An.z,0,-An.x,On.z,0,-On.x,-bn.y,bn.x,0,-An.y,An.x,0,-On.y,On.x,0];return!La(t,di,pi,mi,Er)||(t=[1,0,0,0,1,0,0,0,1],!La(t,di,pi,mi,Er))?!1:(Tr.crossVectors(bn,An),t=[Tr.x,Tr.y,Tr.z],La(t,di,pi,mi,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fn=[new le,new le,new le,new le,new le,new le,new le,new le],Zt=new le,yr=new si,di=new le,pi=new le,mi=new le,bn=new le,An=new le,On=new le,Ki=new le,Er=new le,Tr=new le,Bn=new le;function La(a,e,t,r,n){for(let i=0,s=a.length-3;i<=s;i+=3){Bn.fromArray(a,i);const o=n.x*Math.abs(Bn.x)+n.y*Math.abs(Bn.y)+n.z*Math.abs(Bn.z),c=e.dot(Bn),l=t.dot(Bn),u=r.dot(Bn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Pu=new si,Zi=new le,Ia=new le;class hr{constructor(e=new le,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Pu.setFromPoints(e).getCenter(r);let n=0;for(let i=0,s=e.length;i<s;i++)n=Math.max(n,r.distanceToSquared(e[i]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zi.subVectors(e,this.center);const t=Zi.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(Zi,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ia.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zi.copy(e.center).add(Ia)),this.expandByPoint(Zi.copy(e.center).sub(Ia))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const hn=new le,Fa=new le,br=new le,wn=new le,Na=new le,Ar=new le,Oa=new le;class ec{constructor(e=new le,t=new le(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){Fa.copy(e).add(t).multiplyScalar(.5),br.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(Fa);const i=e.distanceTo(t)*.5,s=-this.direction.dot(br),o=wn.dot(this.direction),c=-wn.dot(br),l=wn.lengthSq(),u=Math.abs(1-s*s);let f,h,d,_;if(u>0)if(f=s*c-o,h=s*o-c,_=i*u,f>=0)if(h>=-_)if(h<=_){const x=1/u;f*=x,h*=x,d=f*(f+s*h+2*o)+h*(s*f+h+2*c)+l}else h=i,f=Math.max(0,-(s*h+o)),d=-f*f+h*(h+2*c)+l;else h=-i,f=Math.max(0,-(s*h+o)),d=-f*f+h*(h+2*c)+l;else h<=-_?(f=Math.max(0,-(-s*i+o)),h=f>0?-i:Math.min(Math.max(-i,-c),i),d=-f*f+h*(h+2*c)+l):h<=_?(f=0,h=Math.min(Math.max(-i,-c),i),d=h*(h+2*c)+l):(f=Math.max(0,-(s*i+o)),h=f>0?i:Math.min(Math.max(-i,-c),i),d=-f*f+h*(h+2*c)+l);else h=s>0?-i:i,f=Math.max(0,-(s*h+o)),d=-f*f+h*(h+2*c)+l;return r&&r.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(Fa).addScaledVector(br,h),d}intersectSphere(e,t){hn.subVectors(e.center,this.origin);const r=hn.dot(this.direction),n=hn.dot(hn)-r*r,i=e.radius*e.radius;if(n>i)return null;const s=Math.sqrt(i-n),o=r-s,c=r+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,i,s,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(r=(e.min.x-h.x)*l,n=(e.max.x-h.x)*l):(r=(e.max.x-h.x)*l,n=(e.min.x-h.x)*l),u>=0?(i=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(i=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),r>s||i>n||((i>r||isNaN(r))&&(r=i),(s<n||isNaN(n))&&(n=s),f>=0?(o=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),r>c||o>n)||((o>r||r!==r)&&(r=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,r,n,i){Na.subVectors(t,e),Ar.subVectors(r,e),Oa.crossVectors(Na,Ar);let s=this.direction.dot(Oa),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;wn.subVectors(this.origin,e);const c=o*this.direction.dot(Ar.crossVectors(wn,Ar));if(c<0)return null;const l=o*this.direction.dot(Na.cross(wn));if(l<0||c+l>s)return null;const u=-o*wn.dot(Oa);return u<0?null:this.at(u/s,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,r,n,i,s,o,c,l,u,f,h,d,_,x,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,s,o,c,l,u,f,h,d,_,x,m)}set(e,t,r,n,i,s,o,c,l,u,f,h,d,_,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=r,p[12]=n,p[1]=i,p[5]=s,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/gi.setFromMatrixColumn(e,0).length(),i=1/gi.setFromMatrixColumn(e,1).length(),s=1/gi.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*i,t[5]=r[5]*i,t[6]=r[6]*i,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,i=e.z,s=Math.cos(r),o=Math.sin(r),c=Math.cos(n),l=Math.sin(n),u=Math.cos(i),f=Math.sin(i);if(e.order==="XYZ"){const h=s*u,d=s*f,_=o*u,x=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=d+_*l,t[5]=h-x*l,t[9]=-o*c,t[2]=x-h*l,t[6]=_+d*l,t[10]=s*c}else if(e.order==="YXZ"){const h=c*u,d=c*f,_=l*u,x=l*f;t[0]=h+x*o,t[4]=_*o-d,t[8]=s*l,t[1]=s*f,t[5]=s*u,t[9]=-o,t[2]=d*o-_,t[6]=x+h*o,t[10]=s*c}else if(e.order==="ZXY"){const h=c*u,d=c*f,_=l*u,x=l*f;t[0]=h-x*o,t[4]=-s*f,t[8]=_+d*o,t[1]=d+_*o,t[5]=s*u,t[9]=x-h*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const h=s*u,d=s*f,_=o*u,x=o*f;t[0]=c*u,t[4]=_*l-d,t[8]=h*l+x,t[1]=c*f,t[5]=x*l+h,t[9]=d*l-_,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const h=s*c,d=s*l,_=o*c,x=o*l;t[0]=c*u,t[4]=x-h*f,t[8]=_*f+d,t[1]=f,t[5]=s*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*f+_,t[10]=h-x*f}else if(e.order==="XZY"){const h=s*c,d=s*l,_=o*c,x=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+x,t[5]=s*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=o*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lu,e,Iu)}lookAt(e,t,r){const n=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Rn.crossVectors(r,Ft),Rn.lengthSq()===0&&(Math.abs(r.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Rn.crossVectors(r,Ft)),Rn.normalize(),wr.crossVectors(Ft,Rn),n[0]=Rn.x,n[4]=wr.x,n[8]=Ft.x,n[1]=Rn.y,n[5]=wr.y,n[9]=Ft.y,n[2]=Rn.z,n[6]=wr.z,n[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,s=r[0],o=r[4],c=r[8],l=r[12],u=r[1],f=r[5],h=r[9],d=r[13],_=r[2],x=r[6],m=r[10],p=r[14],C=r[3],T=r[7],y=r[11],U=r[15],D=n[0],E=n[4],S=n[8],g=n[12],v=n[1],A=n[5],w=n[9],L=n[13],N=n[2],q=n[6],V=n[10],Y=n[14],W=n[3],G=n[7],j=n[11],P=n[15];return i[0]=s*D+o*v+c*N+l*W,i[4]=s*E+o*A+c*q+l*G,i[8]=s*S+o*w+c*V+l*j,i[12]=s*g+o*L+c*Y+l*P,i[1]=u*D+f*v+h*N+d*W,i[5]=u*E+f*A+h*q+d*G,i[9]=u*S+f*w+h*V+d*j,i[13]=u*g+f*L+h*Y+d*P,i[2]=_*D+x*v+m*N+p*W,i[6]=_*E+x*A+m*q+p*G,i[10]=_*S+x*w+m*V+p*j,i[14]=_*g+x*L+m*Y+p*P,i[3]=C*D+T*v+y*N+U*W,i[7]=C*E+T*A+y*q+U*G,i[11]=C*S+T*w+y*V+U*j,i[15]=C*g+T*L+y*Y+U*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],i=e[12],s=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],x=e[7],m=e[11],p=e[15];return _*(+i*c*f-n*l*f-i*o*h+r*l*h+n*o*d-r*c*d)+x*(+t*c*d-t*l*h+i*s*h-n*s*d+n*l*u-i*c*u)+m*(+t*l*f-t*o*d-i*s*f+r*s*d+i*o*u-r*l*u)+p*(-n*o*u-t*c*f+t*o*h+n*s*f-r*s*h+r*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],x=e[13],m=e[14],p=e[15],C=f*m*l-x*h*l+x*c*d-o*m*d-f*c*p+o*h*p,T=_*h*l-u*m*l-_*c*d+s*m*d+u*c*p-s*h*p,y=u*x*l-_*f*l+_*o*d-s*x*d-u*o*p+s*f*p,U=_*f*c-u*x*c-_*o*h+s*x*h+u*o*m-s*f*m,D=t*C+r*T+n*y+i*U;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/D;return e[0]=C*E,e[1]=(x*h*i-f*m*i-x*n*d+r*m*d+f*n*p-r*h*p)*E,e[2]=(o*m*i-x*c*i+x*n*l-r*m*l-o*n*p+r*c*p)*E,e[3]=(f*c*i-o*h*i-f*n*l+r*h*l+o*n*d-r*c*d)*E,e[4]=T*E,e[5]=(u*m*i-_*h*i+_*n*d-t*m*d-u*n*p+t*h*p)*E,e[6]=(_*c*i-s*m*i-_*n*l+t*m*l+s*n*p-t*c*p)*E,e[7]=(s*h*i-u*c*i+u*n*l-t*h*l-s*n*d+t*c*d)*E,e[8]=y*E,e[9]=(_*f*i-u*x*i-_*r*d+t*x*d+u*r*p-t*f*p)*E,e[10]=(s*x*i-_*o*i+_*r*l-t*x*l-s*r*p+t*o*p)*E,e[11]=(u*o*i-s*f*i-u*r*l+t*f*l+s*r*d-t*o*d)*E,e[12]=U*E,e[13]=(u*x*n-_*f*n+_*r*h-t*x*h-u*r*m+t*f*m)*E,e[14]=(_*o*n-s*x*n-_*r*c+t*x*c+s*r*m-t*o*m)*E,e[15]=(s*f*n-u*o*n+u*r*c-t*f*c-s*r*h+t*o*h)*E,this}scale(e){const t=this.elements,r=e.x,n=e.y,i=e.z;return t[0]*=r,t[4]*=n,t[8]*=i,t[1]*=r,t[5]*=n,t[9]*=i,t[2]*=r,t[6]*=n,t[10]*=i,t[3]*=r,t[7]*=n,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),i=1-r,s=e.x,o=e.y,c=e.z,l=i*s,u=i*o;return this.set(l*s+r,l*o-n*c,l*c+n*o,0,l*o+n*c,u*o+r,u*c-n*s,0,l*c-n*o,u*c+n*s,i*c*c+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,i,s){return this.set(1,r,i,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,i=t._x,s=t._y,o=t._z,c=t._w,l=i+i,u=s+s,f=o+o,h=i*l,d=i*u,_=i*f,x=s*u,m=s*f,p=o*f,C=c*l,T=c*u,y=c*f,U=r.x,D=r.y,E=r.z;return n[0]=(1-(x+p))*U,n[1]=(d+y)*U,n[2]=(_-T)*U,n[3]=0,n[4]=(d-y)*D,n[5]=(1-(h+p))*D,n[6]=(m+C)*D,n[7]=0,n[8]=(_+T)*E,n[9]=(m-C)*E,n[10]=(1-(h+x))*E,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let i=gi.set(n[0],n[1],n[2]).length();const s=gi.set(n[4],n[5],n[6]).length(),o=gi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(i=-i),e.x=n[12],e.y=n[13],e.z=n[14],Jt.copy(this);const l=1/i,u=1/s,f=1/o;return Jt.elements[0]*=l,Jt.elements[1]*=l,Jt.elements[2]*=l,Jt.elements[4]*=u,Jt.elements[5]*=u,Jt.elements[6]*=u,Jt.elements[8]*=f,Jt.elements[9]*=f,Jt.elements[10]*=f,t.setFromRotationMatrix(Jt),r.x=i,r.y=s,r.z=o,this}makePerspective(e,t,r,n,i,s,o=ln,c=!1){const l=this.elements,u=2*i/(t-e),f=2*i/(r-n),h=(t+e)/(t-e),d=(r+n)/(r-n);let _,x;if(c)_=i/(s-i),x=s*i/(s-i);else if(o===ln)_=-(s+i)/(s-i),x=-2*s*i/(s-i);else if(o===sa)_=-s/(s-i),x=-s*i/(s-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,n,i,s,o=ln,c=!1){const l=this.elements,u=2/(t-e),f=2/(r-n),h=-(t+e)/(t-e),d=-(r+n)/(r-n);let _,x;if(c)_=1/(s-i),x=s/(s-i);else if(o===ln)_=-2/(s-i),x=-(s+i)/(s-i);else if(o===sa)_=-1/(s-i),x=-i/(s-i);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const gi=new le,Jt=new ht,Lu=new le(0,0,0),Iu=new le(1,1,1),Rn=new le,wr=new le,Ft=new le,Oo=new ht,Bo=new fr;class Mn{constructor(e=0,t=0,r=0,n=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,i=n[0],s=n[4],o=n[8],c=n[1],l=n[5],u=n[9],f=n[2],h=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,i)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,i),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,i));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,i)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,i)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ze(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Oo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oo,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bo.setFromEuler(this),this.setFromQuaternion(Bo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class tc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fu=0;const ko=new le,_i=new fr,dn=new ht,Rr=new le,Ji=new le,Nu=new le,Ou=new fr,zo=new le(1,0,0),Go=new le(0,1,0),Vo=new le(0,0,1),Ho={type:"added"},Bu={type:"removed"},vi={type:"childadded",child:null},Ba={type:"childremoved",child:null};class Lt extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new le,t=new Mn,r=new fr,n=new le(1,1,1);function i(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(i),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ye}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.multiply(_i),this}rotateOnWorldAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.premultiply(_i),this}rotateX(e){return this.rotateOnAxis(zo,e)}rotateY(e){return this.rotateOnAxis(Go,e)}rotateZ(e){return this.rotateOnAxis(Vo,e)}translateOnAxis(e,t){return ko.copy(e).applyQuaternion(this.quaternion),this.position.add(ko.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zo,e)}translateY(e){return this.translateOnAxis(Go,e)}translateZ(e){return this.translateOnAxis(Vo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Rr.copy(e):Rr.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(Ji,Rr,this.up):dn.lookAt(Rr,Ji,this.up),this.quaternion.setFromRotationMatrix(dn),n&&(dn.extractRotation(n.matrixWorld),_i.setFromRotationMatrix(dn),this.quaternion.premultiply(_i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ho),vi.child=e,this.dispatchEvent(vi),vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bu),Ba.child=e,this.dispatchEvent(Ba),Ba.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ho),vi.child=e,this.dispatchEvent(vi),vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const s=this.children[r].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,e,Nu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,Ou,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function i(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=i(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];i(e.shapes,f)}else i(e.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(i(e.materials,this.material[c]));n.material=o}else n.material=i(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];n.animations.push(i(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),u=s(e.images),f=s(e.shapes),h=s(e.skeletons),d=s(e.animations),_=s(e.nodes);o.length>0&&(r.geometries=o),c.length>0&&(r.materials=c),l.length>0&&(r.textures=l),u.length>0&&(r.images=u),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),d.length>0&&(r.animations=d),_.length>0&&(r.nodes=_)}return r.object=n,r;function s(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}Lt.DEFAULT_UP=new le(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new le,pn=new le,ka=new le,mn=new le,xi=new le,Si=new le,Wo=new le,za=new le,Ga=new le,Va=new le,Ha=new ct,Wa=new ct,Xa=new ct;class $t{constructor(e=new le,t=new le,r=new le){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),Qt.subVectors(e,t),n.cross(Qt);const i=n.lengthSq();return i>0?n.multiplyScalar(1/Math.sqrt(i)):n.set(0,0,0)}static getBarycoord(e,t,r,n,i){Qt.subVectors(n,t),pn.subVectors(r,t),ka.subVectors(e,t);const s=Qt.dot(Qt),o=Qt.dot(pn),c=Qt.dot(ka),l=pn.dot(pn),u=pn.dot(ka),f=s*l-o*o;if(f===0)return i.set(0,0,0),null;const h=1/f,d=(l*c-o*u)*h,_=(s*u-o*c)*h;return i.set(1-d-_,_,d)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(e,t,r,n,i,s,o,c){return this.getBarycoord(e,t,r,n,mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(i,mn.x),c.addScaledVector(s,mn.y),c.addScaledVector(o,mn.z),c)}static getInterpolatedAttribute(e,t,r,n,i,s){return Ha.setScalar(0),Wa.setScalar(0),Xa.setScalar(0),Ha.fromBufferAttribute(e,t),Wa.fromBufferAttribute(e,r),Xa.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(Ha,i.x),s.addScaledVector(Wa,i.y),s.addScaledVector(Xa,i.z),s}static isFrontFacing(e,t,r,n){return Qt.subVectors(r,t),pn.subVectors(e,t),Qt.cross(pn).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Qt.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,n,i){return $t.getInterpolation(e,this.a,this.b,this.c,t,r,n,i)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,i=this.c;let s,o;xi.subVectors(n,r),Si.subVectors(i,r),za.subVectors(e,r);const c=xi.dot(za),l=Si.dot(za);if(c<=0&&l<=0)return t.copy(r);Ga.subVectors(e,n);const u=xi.dot(Ga),f=Si.dot(Ga);if(u>=0&&f<=u)return t.copy(n);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(r).addScaledVector(xi,s);Va.subVectors(e,i);const d=xi.dot(Va),_=Si.dot(Va);if(_>=0&&d<=_)return t.copy(i);const x=d*l-c*_;if(x<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(r).addScaledVector(Si,o);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return Wo.subVectors(i,n),o=(f-u)/(f-u+(d-_)),t.copy(n).addScaledVector(Wo,o);const p=1/(m+x+h);return s=x*p,o=h*p,t.copy(r).addScaledVector(xi,s).addScaledVector(Si,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function Ya(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Qe{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,r,n=$e.workingColorSpace){return this.r=e,this.g=t,this.b=r,$e.colorSpaceToWorking(this,n),this}setHSL(e,t,r,n=$e.workingColorSpace){if(e=Eu(e,1),t=Ze(t,0,1),r=Ze(r,0,1),t===0)this.r=this.g=this.b=r;else{const i=r<=.5?r*(1+t):r+t-r*t,s=2*r-i;this.r=Ya(s,i,e+1/3),this.g=Ya(s,i,e),this.b=Ya(s,i,e-1/3)}return $e.colorSpaceToWorking(this,n),this}setStyle(e,t=Ht){function r(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],s=i.length;if(s===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const r=nc[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vn(e.r),this.g=vn(e.g),this.b=vn(e.b),this}copyLinearToSRGB(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return $e.workingToColorSpace(bt.copy(this),e),Math.round(Ze(bt.r*255,0,255))*65536+Math.round(Ze(bt.g*255,0,255))*256+Math.round(Ze(bt.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(bt.copy(this),t);const r=bt.r,n=bt.g,i=bt.b,s=Math.max(r,n,i),o=Math.min(r,n,i);let c,l;const u=(o+s)/2;if(o===s)c=0,l=0;else{const f=s-o;switch(l=u<=.5?f/(s+o):f/(2-s-o),s){case r:c=(n-i)/f+(n<i?6:0);break;case n:c=(i-r)/f+2;break;case i:c=(r-n)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Ht){$e.workingToColorSpace(bt.copy(this),e);const t=bt.r,r=bt.g,n=bt.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(Cr);const r=Ra(Cn.h,Cr.h,t),n=Ra(Cn.s,Cr.s,t),i=Ra(Cn.l,Cr.l,t);return this.setHSL(r,n,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,i=e.elements;return this.r=i[0]*t+i[3]*r+i[6]*n,this.g=i[1]*t+i[4]*r+i[7]*n,this.b=i[2]*t+i[5]*r+i[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new Qe;Qe.NAMES=nc;let ku=0;class dr extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=ur(),this.name="",this.type="Material",this.blending=wi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ss,this.blendDst=os,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(r.blending=this.blending),this.side!==Fn&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ss&&(r.blendSrc=this.blendSrc),this.blendDst!==os&&(r.blendDst=this.blendDst),this.blendEquation!==qn&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ui&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uo&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(r.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(i){const s=[];for(const o in i){const c=i[o];delete c.metadata,s.push(c)}return s}if(t){const i=n(e.textures),s=n(e.images);i.length>0&&(r.textures=i),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let i=0;i!==n;++i)r[i]=t[i].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class oo extends dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new le,Ur=new et;let zu=0;class nn{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Do,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,i=this.itemSize;n<i;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ji(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Dt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),r=Dt(r,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),r=Dt(r,this.array),n=Dt(n,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Do&&(e.usage=this.usage),e}}class ic extends nn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class rc extends nn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class xn extends nn{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Gu=0;const Vt=new ht,qa=new Lt,Mi=new le,Nt=new si,Qi=new si,xt=new le;class cn extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ql(e)?rc:ic)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const i=new Ye().getNormalMatrix(e);r.applyNormalMatrix(i),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,r){return Vt.makeTranslation(e,t,r),this.applyMatrix4(Vt),this}scale(e,t,r){return Vt.makeScale(e,t,r),this.applyMatrix4(Vt),this}lookAt(e){return qa.lookAt(e),qa.updateMatrix(),this.applyMatrix4(qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new xn(r,3))}else{const r=Math.min(e.length,t.count);for(let n=0;n<r;n++){const i=e[n];t.setXYZ(n,i.x,i.y,i.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const i=t[r];Nt.setFromBufferAttribute(i),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const r=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];Qi.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(Nt.min,Qi.min),Nt.expandByPoint(xt),xt.addVectors(Nt.max,Qi.max),Nt.expandByPoint(xt)):(Nt.expandByPoint(Qi.min),Nt.expandByPoint(Qi.max))}Nt.getCenter(r);let n=0;for(let i=0,s=e.count;i<s;i++)xt.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(xt));if(t)for(let i=0,s=t.length;i<s;i++){const o=t[i],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)xt.fromBufferAttribute(o,l),c&&(Mi.fromBufferAttribute(e,l),xt.add(Mi)),n=Math.max(n,r.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,n=t.normal,i=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),o=[],c=[];for(let S=0;S<r.count;S++)o[S]=new le,c[S]=new le;const l=new le,u=new le,f=new le,h=new et,d=new et,_=new et,x=new le,m=new le;function p(S,g,v){l.fromBufferAttribute(r,S),u.fromBufferAttribute(r,g),f.fromBufferAttribute(r,v),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,g),_.fromBufferAttribute(i,v),u.sub(l),f.sub(l),d.sub(h),_.sub(h);const A=1/(d.x*_.y-_.x*d.y);isFinite(A)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(A),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(A),o[S].add(x),o[g].add(x),o[v].add(x),c[S].add(m),c[g].add(m),c[v].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let S=0,g=C.length;S<g;++S){const v=C[S],A=v.start,w=v.count;for(let L=A,N=A+w;L<N;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const T=new le,y=new le,U=new le,D=new le;function E(S){U.fromBufferAttribute(n,S),D.copy(U);const g=o[S];T.copy(g),T.sub(U.multiplyScalar(U.dot(g))).normalize(),y.crossVectors(D,g);const A=y.dot(c[S])<0?-1:1;s.setXYZW(S,T.x,T.y,T.z,A)}for(let S=0,g=C.length;S<g;++S){const v=C[S],A=v.start,w=v.count;for(let L=A,N=A+w;L<N;L+=3)E(e.getX(L+0)),E(e.getX(L+1)),E(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let h=0,d=r.count;h<d;h++)r.setXYZ(h,0,0,0);const n=new le,i=new le,s=new le,o=new le,c=new le,l=new le,u=new le,f=new le;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);n.fromBufferAttribute(t,_),i.fromBufferAttribute(t,x),s.fromBufferAttribute(t,m),u.subVectors(s,i),f.subVectors(n,i),u.cross(f),o.fromBufferAttribute(r,_),c.fromBufferAttribute(r,x),l.fromBufferAttribute(r,m),o.add(u),c.add(u),l.add(u),r.setXYZ(_,o.x,o.y,o.z),r.setXYZ(x,c.x,c.y,c.z),r.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=t.count;h<d;h+=3)n.fromBufferAttribute(t,h+0),i.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,i),f.subVectors(n,i),u.cross(f),r.setXYZ(h+0,u.x,u.y,u.z),r.setXYZ(h+1,u.x,u.y,u.z),r.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let d=0,_=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?d=c[x]*o.data.stride+o.offset:d=c[x]*u;for(let p=0;p<u;p++)h[_++]=l[d++]}return new nn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,r=this.index.array,n=this.attributes;for(const o in n){const c=n[o],l=e(c,r);t.setAttribute(o,l)}const i=this.morphAttributes;for(const o in i){const c=[],l=i[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=e(h,r);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const c in r){const l=r[c];e.data.attributes[c]=l.toJSON(e.data)}const n={};let i=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(e.data))}u.length>0&&(n[c]=u,i=!0)}i&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const n=e.attributes;for(const l in n){const u=n[l];this.setAttribute(l,u.clone(t))}const i=e.morphAttributes;for(const l in i){const u=[],f=i[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,u=s.length;l<u;l++){const f=s[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xo=new ht,kn=new ec,Dr=new hr,Yo=new le,Pr=new le,Lr=new le,Ir=new le,ja=new le,Fr=new le,qo=new le,Nr=new le;class Yt extends Lt{constructor(e=new cn,t=new oo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){const o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,i=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(i&&o){Fr.set(0,0,0);for(let c=0,l=i.length;c<l;c++){const u=o[c],f=i[c];u!==0&&(ja.fromBufferAttribute(f,e),s?Fr.addScaledVector(ja,u):Fr.addScaledVector(ja.sub(t),u))}t.add(Fr)}return t}raycast(e,t){const r=this.geometry,n=this.material,i=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Dr.copy(r.boundingSphere),Dr.applyMatrix4(i),kn.copy(e.ray).recast(e.near),!(Dr.containsPoint(kn.origin)===!1&&(kn.intersectSphere(Dr,Yo)===null||kn.origin.distanceToSquared(Yo)>(e.far-e.near)**2))&&(Xo.copy(i).invert(),kn.copy(e.ray).applyMatrix4(Xo),!(r.boundingBox!==null&&kn.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,kn)))}_computeIntersections(e,t,r){let n;const i=this.geometry,s=this.material,o=i.index,c=i.attributes.position,l=i.attributes.uv,u=i.attributes.uv1,f=i.attributes.normal,h=i.groups,d=i.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const m=h[_],p=s[m.materialIndex],C=Math.max(m.start,d.start),T=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=C,U=T;y<U;y+=3){const D=o.getX(y),E=o.getX(y+1),S=o.getX(y+2);n=Or(this,p,e,r,l,u,f,D,E,S),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const _=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=_,p=x;m<p;m+=3){const C=o.getX(m),T=o.getX(m+1),y=o.getX(m+2);n=Or(this,s,e,r,l,u,f,C,T,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(c!==void 0)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const m=h[_],p=s[m.materialIndex],C=Math.max(m.start,d.start),T=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=C,U=T;y<U;y+=3){const D=y,E=y+1,S=y+2;n=Or(this,p,e,r,l,u,f,D,E,S),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const _=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=_,p=x;m<p;m+=3){const C=m,T=m+1,y=m+2;n=Or(this,s,e,r,l,u,f,C,T,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function Vu(a,e,t,r,n,i,s,o){let c;if(e.side===Pt?c=r.intersectTriangle(s,i,n,!0,o):c=r.intersectTriangle(n,i,s,e.side===Fn,o),c===null)return null;Nr.copy(o),Nr.applyMatrix4(a.matrixWorld);const l=t.ray.origin.distanceTo(Nr);return l<t.near||l>t.far?null:{distance:l,point:Nr.clone(),object:a}}function Or(a,e,t,r,n,i,s,o,c,l){a.getVertexPosition(o,Pr),a.getVertexPosition(c,Lr),a.getVertexPosition(l,Ir);const u=Vu(a,e,t,r,Pr,Lr,Ir,qo);if(u){const f=new le;$t.getBarycoord(qo,Pr,Lr,Ir,f),n&&(u.uv=$t.getInterpolatedAttribute(n,o,c,l,f,new et)),i&&(u.uv1=$t.getInterpolatedAttribute(i,o,c,l,f,new et)),s&&(u.normal=$t.getInterpolatedAttribute(s,o,c,l,f,new le),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new le,materialIndex:0};$t.getNormal(Pr,Lr,Ir,h.normal),u.face=h,u.barycoord=f}return u}class pr extends cn{constructor(e=1,t=1,r=1,n=1,i=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:i,depthSegments:s};const o=this;n=Math.floor(n),i=Math.floor(i),s=Math.floor(s);const c=[],l=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,r,t,e,s,i,0),_("z","y","x",1,-1,r,t,-e,s,i,1),_("x","z","y",1,1,e,r,t,n,s,2),_("x","z","y",1,-1,e,r,-t,n,s,3),_("x","y","z",1,-1,e,t,r,n,i,4),_("x","y","z",-1,-1,e,t,-r,n,i,5),this.setIndex(c),this.setAttribute("position",new xn(l,3)),this.setAttribute("normal",new xn(u,3)),this.setAttribute("uv",new xn(f,2));function _(x,m,p,C,T,y,U,D,E,S,g){const v=y/E,A=U/S,w=y/2,L=U/2,N=D/2,q=E+1,V=S+1;let Y=0,W=0;const G=new le;for(let j=0;j<V;j++){const P=j*A-L;for(let k=0;k<q;k++){const X=k*v-w;G[x]=X*C,G[m]=P*T,G[p]=N,l.push(G.x,G.y,G.z),G[x]=0,G[m]=0,G[p]=D>0?1:-1,u.push(G.x,G.y,G.z),f.push(k/E),f.push(1-j/S),Y+=1}}for(let j=0;j<S;j++)for(let P=0;P<E;P++){const k=h+P+q*j,X=h+P+q*(j+1),$=h+(P+1)+q*(j+1),I=h+(P+1)+q*j;c.push(k,X,I),c.push(X,$,I),W+=6}o.addGroup(d,W,g),d+=W,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ii(a){const e={};for(const t in a){e[t]={};for(const r in a[t]){const n=a[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function At(a){const e={};for(let t=0;t<a.length;t++){const r=Ii(a[t]);for(const n in r)e[n]=r[n]}return e}function Hu(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function ac(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const sc={clone:Ii,merge:At};var Wu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wu,this.fragmentShader=Xu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=Hu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class oc extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Un=new le,jo=new et,Ko=new et;class Wt extends oc{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Un.x,Un.y).multiplyScalar(-e/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Un.x,Un.y).multiplyScalar(-e/Un.z)}getViewSize(e,t){return this.getViewBounds(e,jo,Ko),t.subVectors(Ko,jo)}setViewOffset(e,t,r,n,i,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wa*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,i=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;i+=s.offsetX*n/c,t-=s.offsetY*r/l,n*=s.width/c,r*=s.height/l}const o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+n,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const yi=-90,Ei=1;class Yu extends Lt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Wt(yi,Ei,e,t);n.layers=this.layers,this.add(n);const i=new Wt(yi,Ei,e,t);i.layers=this.layers,this.add(i);const s=new Wt(yi,Ei,e,t);s.layers=this.layers,this.add(s);const o=new Wt(yi,Ei,e,t);o.layers=this.layers,this.add(o);const c=new Wt(yi,Ei,e,t);c.layers=this.layers,this.add(c);const l=new Wt(yi,Ei,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,i,s,o,c]=t;for(const l of t)this.remove(l);if(e===ln)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===sa)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,s,o,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,i),e.setRenderTarget(r,1,n),e.render(t,s),e.setRenderTarget(r,2,n),e.render(t,o),e.setRenderTarget(r,3,n),e.render(t,c),e.setRenderTarget(r,4,n),e.render(t,l),r.texture.generateMipmaps=x,e.setRenderTarget(r,5,n),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,r.texture.needsPMREMUpdate=!0}}class lc extends wt{constructor(e=[],t=Di,r,n,i,s,o,c,l,u){super(e,t,r,n,i,s,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qu extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];this.texture=new lc(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new pr(5,5,5),i=new Nn({name:"CubemapFromEquirect",uniforms:Ii(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Pt,blending:Pn});i.uniforms.tEquirect.value=t;const s=new Yt(n,i),o=t.minFilter;return t.minFilter===Jn&&(t.minFilter=Xt),new Yu(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,r=!0,n=!0){const i=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,n);e.setRenderTarget(i)}}class Br extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ju={type:"move"};class Ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,i=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,r),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;l.inputState.pinching&&h>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,r),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&i!==null&&(n=i),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ju)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=i!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Br;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Ku extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Zu extends nn{constructor(e,t,r,n=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Za=new le,Ju=new le,Qu=new Ye;class Wn{constructor(e=new le(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=Za.subVectors(r,t).cross(Ju.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Za),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/n;return i<0||i>1?null:t.copy(e.start).addScaledVector(r,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Qu.getNormalMatrix(e),n=this.coplanarPoint(Za).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zn=new hr,$u=new et(.5,.5),kr=new le;class cc{constructor(e=new Wn,t=new Wn,r=new Wn,n=new Wn,i=new Wn,s=new Wn){this.planes=[e,t,r,n,i,s]}set(e,t,r,n,i,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(n),o[4].copy(i),o[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ln,r=!1){const n=this.planes,i=e.elements,s=i[0],o=i[1],c=i[2],l=i[3],u=i[4],f=i[5],h=i[6],d=i[7],_=i[8],x=i[9],m=i[10],p=i[11],C=i[12],T=i[13],y=i[14],U=i[15];if(n[0].setComponents(l-s,d-u,p-_,U-C).normalize(),n[1].setComponents(l+s,d+u,p+_,U+C).normalize(),n[2].setComponents(l+o,d+f,p+x,U+T).normalize(),n[3].setComponents(l-o,d-f,p-x,U-T).normalize(),r)n[4].setComponents(c,h,m,y).normalize(),n[5].setComponents(l-c,d-h,p-m,U-y).normalize();else if(n[4].setComponents(l-c,d-h,p-m,U-y).normalize(),t===ln)n[5].setComponents(l+c,d+h,p+m,U+y).normalize();else if(t===sa)n[5].setComponents(c,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(e){zn.center.set(0,0,0);const t=$u.distanceTo(e.center);return zn.radius=.7071067811865476+t,zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(kr.x=n.normal.x>0?e.max.x:e.min.x,kr.y=n.normal.y>0?e.max.y:e.min.y,kr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uc extends dr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zo=new ht,Ys=new ec,zr=new hr,Gr=new le;class ef extends Lt{constructor(e=new cn,t=new uc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,i=e.params.Points.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),zr.copy(r.boundingSphere),zr.applyMatrix4(n),zr.radius+=i,e.ray.intersectsSphere(zr)===!1)return;Zo.copy(n).invert(),Ys.copy(e.ray).applyMatrix4(Zo);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=r.index,f=r.attributes.position;if(l!==null){const h=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);for(let _=h,x=d;_<x;_++){const m=l.getX(_);Gr.fromBufferAttribute(f,m),Jo(Gr,m,c,n,e,t,this)}}else{const h=Math.max(0,s.start),d=Math.min(f.count,s.start+s.count);for(let _=h,x=d;_<x;_++)Gr.fromBufferAttribute(f,_),Jo(Gr,_,c,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){const o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}}function Jo(a,e,t,r,n,i,s){const o=Ys.distanceSqToPoint(a);if(o<t){const c=new le;Ys.closestPointToPoint(a,c),c.applyMatrix4(r);const l=n.ray.origin.distanceTo(c);if(l<n.near||l>n.far)return;i.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class fc extends wt{constructor(e,t,r=$n,n,i,s,o=tn,c=tn,l,u=sr,f=1){if(u!==sr&&u!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,n,i,s,o,c,u,r,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new so(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class oi extends cn{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const i=e/2,s=t/2,o=Math.floor(r),c=Math.floor(n),l=o+1,u=c+1,f=e/o,h=t/c,d=[],_=[],x=[],m=[];for(let p=0;p<u;p++){const C=p*h-s;for(let T=0;T<l;T++){const y=T*f-i;_.push(y,-C,0),x.push(0,0,1),m.push(T/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let C=0;C<o;C++){const T=C+l*p,y=C+l*(p+1),U=C+1+l*(p+1),D=C+1+l*p;d.push(T,y,D),d.push(y,U,D)}this.setIndex(d),this.setAttribute("position",new xn(_,3)),this.setAttribute("normal",new xn(x,3)),this.setAttribute("uv",new xn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.width,e.height,e.widthSegments,e.heightSegments)}}class hc extends dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dc extends dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class tf extends oc{constructor(e=-1,t=1,r=1,n=-1,i=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=i,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,i,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let i=r-e,s=r+e,o=n+t,c=n-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=l*this.view.offsetX,s=i+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(i,s,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class nf extends cn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class rf extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Qo(a,e,t,r){const n=af(r);switch(t){case Xl:return a*e;case ql:return a*e/n.components*n.byteLength;case io:return a*e/n.components*n.byteLength;case jl:return a*e*2/n.components*n.byteLength;case ro:return a*e*2/n.components*n.byteLength;case Yl:return a*e*3/n.components*n.byteLength;case en:return a*e*4/n.components*n.byteLength;case ao:return a*e*4/n.components*n.byteLength;case jr:case Kr:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Zr:case Jr:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Ss:case ys:return Math.max(a,16)*Math.max(e,8)/4;case xs:case Ms:return Math.max(a,8)*Math.max(e,8)/2;case Es:case Ts:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case bs:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case As:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case ws:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Rs:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Cs:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Us:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Ds:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Ps:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Ls:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Is:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Fs:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Ns:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Os:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Bs:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case ks:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Qr:case zs:case Gs:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Kl:case Vs:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Hs:case Ws:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function af(a){switch(a){case Sn:case Vl:return{byteLength:1,components:1};case rr:case Hl:case cr:return{byteLength:2,components:1};case to:case no:return{byteLength:2,components:4};case $n:case eo:case _n:return{byteLength:4,components:1};case Wl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$s}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$s);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pc(){let a=null,e=!1,t=null,r=null;function n(i,s){t(i,s),r=a.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=a.requestAnimationFrame(n),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){a=i}}}function sf(a){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,h=a.createBuffer();a.bindBuffer(c,h),a.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=a.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=a.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=a.HALF_FLOAT:d=a.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=a.SHORT;else if(l instanceof Uint32Array)d=a.UNSIGNED_INT;else if(l instanceof Int32Array)d=a.INT;else if(l instanceof Int8Array)d=a.BYTE;else if(l instanceof Uint8Array)d=a.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function r(o,c,l){const u=c.array,f=c.updateRanges;if(a.bindBuffer(l,o),f.length===0)a.bufferSubData(l,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],x=f[d];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const x=f[d];a.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function i(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(a.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(l.buffer,o,c),l.version=o.version}}return{get:n,remove:i,update:s}}var of=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ff=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,df=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_f=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sf=`#ifdef USE_IRIDESCENCE
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
#endif`,Mf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Uf=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Df=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Pf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,If=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ff=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Of="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kf=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,zf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Wf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jf=`#ifdef USE_GRADIENTMAP
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
}`,Kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,$f=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,eh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,th=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ih=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ah=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,sh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ch=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ph=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_h=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Eh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Th=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ah=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ch=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Uh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ph=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ih=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Nh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Oh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Hh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Xh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kh=`#ifdef USE_SKINNING
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
#endif`,Zh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$h=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ed=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,td=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ad=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,od=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,dd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,md=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_d=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Md=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ed=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Td=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,bd=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ad=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Cd=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ud=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Dd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ld=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Id=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,Fd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Od=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,kd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:of,alphahash_pars_fragment:lf,alphamap_fragment:cf,alphamap_pars_fragment:uf,alphatest_fragment:ff,alphatest_pars_fragment:hf,aomap_fragment:df,aomap_pars_fragment:pf,batching_pars_vertex:mf,batching_vertex:gf,begin_vertex:_f,beginnormal_vertex:vf,bsdfs:xf,iridescence_fragment:Sf,bumpmap_pars_fragment:Mf,clipping_planes_fragment:yf,clipping_planes_pars_fragment:Ef,clipping_planes_pars_vertex:Tf,clipping_planes_vertex:bf,color_fragment:Af,color_pars_fragment:wf,color_pars_vertex:Rf,color_vertex:Cf,common:Uf,cube_uv_reflection_fragment:Df,defaultnormal_vertex:Pf,displacementmap_pars_vertex:Lf,displacementmap_vertex:If,emissivemap_fragment:Ff,emissivemap_pars_fragment:Nf,colorspace_fragment:Of,colorspace_pars_fragment:Bf,envmap_fragment:kf,envmap_common_pars_fragment:zf,envmap_pars_fragment:Gf,envmap_pars_vertex:Vf,envmap_physical_pars_fragment:$f,envmap_vertex:Hf,fog_vertex:Wf,fog_pars_vertex:Xf,fog_fragment:Yf,fog_pars_fragment:qf,gradientmap_pars_fragment:jf,lightmap_pars_fragment:Kf,lights_lambert_fragment:Zf,lights_lambert_pars_fragment:Jf,lights_pars_begin:Qf,lights_toon_fragment:eh,lights_toon_pars_fragment:th,lights_phong_fragment:nh,lights_phong_pars_fragment:ih,lights_physical_fragment:rh,lights_physical_pars_fragment:ah,lights_fragment_begin:sh,lights_fragment_maps:oh,lights_fragment_end:lh,logdepthbuf_fragment:ch,logdepthbuf_pars_fragment:uh,logdepthbuf_pars_vertex:fh,logdepthbuf_vertex:hh,map_fragment:dh,map_pars_fragment:ph,map_particle_fragment:mh,map_particle_pars_fragment:gh,metalnessmap_fragment:_h,metalnessmap_pars_fragment:vh,morphinstance_vertex:xh,morphcolor_vertex:Sh,morphnormal_vertex:Mh,morphtarget_pars_vertex:yh,morphtarget_vertex:Eh,normal_fragment_begin:Th,normal_fragment_maps:bh,normal_pars_fragment:Ah,normal_pars_vertex:wh,normal_vertex:Rh,normalmap_pars_fragment:Ch,clearcoat_normal_fragment_begin:Uh,clearcoat_normal_fragment_maps:Dh,clearcoat_pars_fragment:Ph,iridescence_pars_fragment:Lh,opaque_fragment:Ih,packing:Fh,premultiplied_alpha_fragment:Nh,project_vertex:Oh,dithering_fragment:Bh,dithering_pars_fragment:kh,roughnessmap_fragment:zh,roughnessmap_pars_fragment:Gh,shadowmap_pars_fragment:Vh,shadowmap_pars_vertex:Hh,shadowmap_vertex:Wh,shadowmask_pars_fragment:Xh,skinbase_vertex:Yh,skinning_pars_vertex:qh,skinning_vertex:jh,skinnormal_vertex:Kh,specularmap_fragment:Zh,specularmap_pars_fragment:Jh,tonemapping_fragment:Qh,tonemapping_pars_fragment:$h,transmission_fragment:ed,transmission_pars_fragment:td,uv_pars_fragment:nd,uv_pars_vertex:id,uv_vertex:rd,worldpos_vertex:ad,background_vert:sd,background_frag:od,backgroundCube_vert:ld,backgroundCube_frag:cd,cube_vert:ud,cube_frag:fd,depth_vert:hd,depth_frag:dd,distanceRGBA_vert:pd,distanceRGBA_frag:md,equirect_vert:gd,equirect_frag:_d,linedashed_vert:vd,linedashed_frag:xd,meshbasic_vert:Sd,meshbasic_frag:Md,meshlambert_vert:yd,meshlambert_frag:Ed,meshmatcap_vert:Td,meshmatcap_frag:bd,meshnormal_vert:Ad,meshnormal_frag:wd,meshphong_vert:Rd,meshphong_frag:Cd,meshphysical_vert:Ud,meshphysical_frag:Dd,meshtoon_vert:Pd,meshtoon_frag:Ld,points_vert:Id,points_frag:Fd,shadow_vert:Nd,shadow_frag:Od,sprite_vert:Bd,sprite_frag:kd},Le={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},sn={basic:{uniforms:At([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:At([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Qe(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:At([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:At([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:At([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Qe(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:At([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:At([Le.points,Le.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:At([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:At([Le.common,Le.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:At([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:At([Le.sprite,Le.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:At([Le.common,Le.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:At([Le.lights,Le.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};sn.physical={uniforms:At([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Vr={r:0,b:0,g:0},Gn=new Mn,zd=new ht;function Gd(a,e,t,r,n,i,s){const o=new Qe(0);let c=i===!0?0:1,l,u,f=null,h=0,d=null;function _(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?t:e).get(y)),y}function x(T){let y=!1;const U=_(T);U===null?p(o,c):U&&U.isColor&&(p(U,1),y=!0);const D=a.xr.getEnvironmentBlendMode();D==="additive"?r.buffers.color.setClear(0,0,0,1,s):D==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(a.autoClear||y)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function m(T,y){const U=_(y);U&&(U.isCubeTexture||U.mapping===la)?(u===void 0&&(u=new Yt(new pr(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Ii(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,E,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),Gn.copy(y.backgroundRotation),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),u.material.uniforms.envMap.value=U,u.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(zd.makeRotationFromEuler(Gn)),u.material.toneMapped=$e.getTransfer(U.colorSpace)!==at,(f!==U||h!==U.version||d!==a.toneMapping)&&(u.material.needsUpdate=!0,f=U,h=U.version,d=a.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):U&&U.isTexture&&(l===void 0&&(l=new Yt(new oi(2,2),new Nn({name:"BackgroundMaterial",uniforms:Ii(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=U,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=$e.getTransfer(U.colorSpace)!==at,U.matrixAutoUpdate===!0&&U.updateMatrix(),l.material.uniforms.uvTransform.value.copy(U.matrix),(f!==U||h!==U.version||d!==a.toneMapping)&&(l.material.needsUpdate=!0,f=U,h=U.version,d=a.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,y){T.getRGB(Vr,ac(a)),r.buffers.color.setClear(Vr.r,Vr.g,Vr.b,y,s)}function C(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,y=1){o.set(T),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(o,c)},render:x,addToRenderList:m,dispose:C}}function Vd(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},n=h(null);let i=n,s=!1;function o(v,A,w,L,N){let q=!1;const V=f(L,w,A);i!==V&&(i=V,l(i.object)),q=d(v,L,w,N),q&&_(v,L,w,N),N!==null&&e.update(N,a.ELEMENT_ARRAY_BUFFER),(q||s)&&(s=!1,y(v,A,w,L),N!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return a.createVertexArray()}function l(v){return a.bindVertexArray(v)}function u(v){return a.deleteVertexArray(v)}function f(v,A,w){const L=w.wireframe===!0;let N=r[v.id];N===void 0&&(N={},r[v.id]=N);let q=N[A.id];q===void 0&&(q={},N[A.id]=q);let V=q[L];return V===void 0&&(V=h(c()),q[L]=V),V}function h(v){const A=[],w=[],L=[];for(let N=0;N<t;N++)A[N]=0,w[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:w,attributeDivisors:L,object:v,attributes:{},index:null}}function d(v,A,w,L){const N=i.attributes,q=A.attributes;let V=0;const Y=w.getAttributes();for(const W in Y)if(Y[W].location>=0){const j=N[W];let P=q[W];if(P===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(P=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(P=v.instanceColor)),j===void 0||j.attribute!==P||P&&j.data!==P.data)return!0;V++}return i.attributesNum!==V||i.index!==L}function _(v,A,w,L){const N={},q=A.attributes;let V=0;const Y=w.getAttributes();for(const W in Y)if(Y[W].location>=0){let j=q[W];j===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(j=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(j=v.instanceColor));const P={};P.attribute=j,j&&j.data&&(P.data=j.data),N[W]=P,V++}i.attributes=N,i.attributesNum=V,i.index=L}function x(){const v=i.newAttributes;for(let A=0,w=v.length;A<w;A++)v[A]=0}function m(v){p(v,0)}function p(v,A){const w=i.newAttributes,L=i.enabledAttributes,N=i.attributeDivisors;w[v]=1,L[v]===0&&(a.enableVertexAttribArray(v),L[v]=1),N[v]!==A&&(a.vertexAttribDivisor(v,A),N[v]=A)}function C(){const v=i.newAttributes,A=i.enabledAttributes;for(let w=0,L=A.length;w<L;w++)A[w]!==v[w]&&(a.disableVertexAttribArray(w),A[w]=0)}function T(v,A,w,L,N,q,V){V===!0?a.vertexAttribIPointer(v,A,w,N,q):a.vertexAttribPointer(v,A,w,L,N,q)}function y(v,A,w,L){x();const N=L.attributes,q=w.getAttributes(),V=A.defaultAttributeValues;for(const Y in q){const W=q[Y];if(W.location>=0){let G=N[Y];if(G===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(G=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(G=v.instanceColor)),G!==void 0){const j=G.normalized,P=G.itemSize,k=e.get(G);if(k===void 0)continue;const X=k.buffer,$=k.type,I=k.bytesPerElement,K=$===a.INT||$===a.UNSIGNED_INT||G.gpuType===eo;if(G.isInterleavedBufferAttribute){const H=G.data,Z=H.stride,ie=G.offset;if(H.isInstancedInterleavedBuffer){for(let me=0;me<W.locationSize;me++)p(W.location+me,H.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let me=0;me<W.locationSize;me++)m(W.location+me);a.bindBuffer(a.ARRAY_BUFFER,X);for(let me=0;me<W.locationSize;me++)T(W.location+me,P/W.locationSize,$,j,Z*I,(ie+P/W.locationSize*me)*I,K)}else{if(G.isInstancedBufferAttribute){for(let H=0;H<W.locationSize;H++)p(W.location+H,G.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let H=0;H<W.locationSize;H++)m(W.location+H);a.bindBuffer(a.ARRAY_BUFFER,X);for(let H=0;H<W.locationSize;H++)T(W.location+H,P/W.locationSize,$,j,P*I,P/W.locationSize*H*I,K)}}else if(V!==void 0){const j=V[Y];if(j!==void 0)switch(j.length){case 2:a.vertexAttrib2fv(W.location,j);break;case 3:a.vertexAttrib3fv(W.location,j);break;case 4:a.vertexAttrib4fv(W.location,j);break;default:a.vertexAttrib1fv(W.location,j)}}}}C()}function U(){S();for(const v in r){const A=r[v];for(const w in A){const L=A[w];for(const N in L)u(L[N].object),delete L[N];delete A[w]}delete r[v]}}function D(v){if(r[v.id]===void 0)return;const A=r[v.id];for(const w in A){const L=A[w];for(const N in L)u(L[N].object),delete L[N];delete A[w]}delete r[v.id]}function E(v){for(const A in r){const w=r[A];if(w[v.id]===void 0)continue;const L=w[v.id];for(const N in L)u(L[N].object),delete L[N];delete w[v.id]}}function S(){g(),s=!0,i!==n&&(i=n,l(i.object))}function g(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:S,resetDefaultState:g,dispose:U,releaseStatesOfGeometry:D,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:C}}function Hd(a,e,t){let r;function n(l){r=l}function i(l,u){a.drawArrays(r,l,u),t.update(u,r,1)}function s(l,u,f){f!==0&&(a.drawArraysInstanced(r,l,u,f),t.update(u,r,f))}function o(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=u[_];t.update(d,r,1)}function c(l,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l.length;_++)s(l[_],u[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(r,l,0,u,0,h,0,f);let _=0;for(let x=0;x<f;x++)_+=u[x]*h[x];t.update(_,r,1)}}this.setMode=n,this.render=i,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Wd(a,e,t,r){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){return!(E!==en&&r.convert(E)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const S=E===cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Sn&&r.convert(E)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==_n&&!S)}function c(E){if(E==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),_=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=a.getParameter(a.MAX_TEXTURE_SIZE),m=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),p=a.getParameter(a.MAX_VERTEX_ATTRIBS),C=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),T=a.getParameter(a.MAX_VARYING_VECTORS),y=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),U=_>0,D=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:C,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:U,maxSamples:D}}function Xd(a){const e=this;let t=null,r=0,n=!1,i=!1;const s=new Wn,o=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||r!==0||n;return n=h,r=f.length,d},this.beginShadows=function(){i=!0,u(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=a.get(f);if(!n||_===null||_.length===0||i&&!m)i?u(null):l();else{const C=i?0:r,T=C*4;let y=p.clippingState||null;c.value=y,y=u(_,h,T,d);for(let U=0;U!==T;++U)y[U]=t[U];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(f,h,d,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=c.value,_!==!0||m===null){const p=d+x*4,C=h.matrixWorldInverse;o.getNormalMatrix(C),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,y=d;T!==x;++T,y+=4)s.copy(f[T]).applyMatrix4(C,o),s.normal.toArray(m,y),m[y+3]=s.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Yd(a){let e=new WeakMap;function t(s,o){return o===ms?s.mapping=Di:o===gs&&(s.mapping=Pi),s}function r(s){if(s&&s.isTexture){const o=s.mapping;if(o===ms||o===gs)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new qu(c.height);return l.fromEquirectangularTexture(a,s),e.set(s,l),s.addEventListener("dispose",n),t(l.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function i(){e=new WeakMap}return{get:r,dispose:i}}const Ai=4,$o=[.125,.215,.35,.446,.526,.582],jn=20,Ja=new tf,el=new Qe;let Qa=null,$a=0,es=0,ts=!1;const Xn=(1+Math.sqrt(5))/2,Ti=1/Xn,tl=[new le(-Xn,Ti,0),new le(Xn,Ti,0),new le(-Ti,0,Xn),new le(Ti,0,Xn),new le(0,Xn,-Ti),new le(0,Xn,Ti),new le(-1,1,-1),new le(1,1,-1),new le(-1,1,1),new le(1,1,1)],qd=new le;class nl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100,i={}){const{size:s=256,position:o=qd}=i;Qa=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),es=this._renderer.getActiveMipmapLevel(),ts=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,n,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qa,$a,es),this._renderer.xr.enabled=ts,e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Di||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qa=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),es=this._renderer.getActiveMipmapLevel(),ts=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:cr,format:en,colorSpace:Li,depthBuffer:!1},n=il(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=il(e,t,r);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jd(i)),this._blurMaterial=Kd(i,e,t)}return n}_compileMaterial(e){const t=new Yt(this._lodPlanes[0],e);this._renderer.compile(t,Ja)}_sceneToCubeUV(e,t,r,n,i){const c=new Wt(90,1,t,r),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(el),f.toneMapping=Ln,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(n),f.clearDepth(),f.setRenderTarget(null));const x=new oo({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),m=new Yt(new pr,x);let p=!1;const C=e.background;C?C.isColor&&(x.color.copy(C),e.background=null,p=!0):(x.color.copy(el),p=!0);for(let T=0;T<6;T++){const y=T%3;y===0?(c.up.set(0,l[T],0),c.position.set(i.x,i.y,i.z),c.lookAt(i.x+u[T],i.y,i.z)):y===1?(c.up.set(0,0,l[T]),c.position.set(i.x,i.y,i.z),c.lookAt(i.x,i.y+u[T],i.z)):(c.up.set(0,l[T],0),c.position.set(i.x,i.y,i.z),c.lookAt(i.x,i.y,i.z+u[T]));const U=this._cubeSize;Hr(n,y*U,T>2?U:0,U,U),f.setRenderTarget(n),p&&f.render(m,c),f.render(e,c)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=C}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===Di||e.mapping===Pi;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=al()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rl());const i=n?this._cubemapMaterial:this._equirectMaterial,s=new Yt(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;const c=this._cubeSize;Hr(t,0,0,3*c,2*c),r.setRenderTarget(t),r.render(s,Ja)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let i=1;i<n;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=tl[(n-i-1)%tl.length];this._blur(e,i-1,i,s,o)}t.autoClear=r}_blur(e,t,r,n,i){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,n,"latitudinal",i),this._halfBlur(s,e,r,r,n,"longitudinal",i)}_halfBlur(e,t,r,n,i,s,o){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Yt(this._lodPlanes[n],l),h=l.uniforms,d=this._sizeLods[r]-1,_=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*jn-1),x=i/_,m=isFinite(i)?1+Math.floor(u*x):jn;m>jn&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${jn}`);const p=[];let C=0;for(let E=0;E<jn;++E){const S=E/x,g=Math.exp(-S*S/2);p.push(g),E===0?C+=g:E<m&&(C+=2*g)}for(let E=0;E<p.length;E++)p[E]=p[E]/C;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:T}=this;h.dTheta.value=_,h.mipInt.value=T-r;const y=this._sizeLods[n],U=3*y*(n>T-Ai?n-T+Ai:0),D=4*(this._cubeSize-y);Hr(t,U,D,3*y,2*y),c.setRenderTarget(t),c.render(f,Ja)}}function jd(a){const e=[],t=[],r=[];let n=a;const i=a-Ai+1+$o.length;for(let s=0;s<i;s++){const o=Math.pow(2,n);t.push(o);let c=1/o;s>a-Ai?c=$o[s-a+Ai-1]:s===0&&(c=0),r.push(c);const l=1/(o-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,x=3,m=2,p=1,C=new Float32Array(x*_*d),T=new Float32Array(m*_*d),y=new Float32Array(p*_*d);for(let D=0;D<d;D++){const E=D%3*2/3-1,S=D>2?0:-1,g=[E,S,0,E+2/3,S,0,E+2/3,S+1,0,E,S,0,E+2/3,S+1,0,E,S+1,0];C.set(g,x*_*D),T.set(h,m*_*D);const v=[D,D,D,D,D,D];y.set(v,p*_*D)}const U=new cn;U.setAttribute("position",new nn(C,x)),U.setAttribute("uv",new nn(T,m)),U.setAttribute("faceIndex",new nn(y,p)),e.push(U),n>Ai&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function il(a,e,t){const r=new ei(a,e,t);return r.texture.mapping=la,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Hr(a,e,t,r,n){a.viewport.set(e,t,r,n),a.scissor.set(e,t,r,n)}function Kd(a,e,t){const r=new Float32Array(jn),n=new le(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:lo(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function rl(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lo(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function al(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function lo(){return`

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
	`}function Zd(a){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const c=o.mapping,l=c===ms||c===gs,u=c===Di||c===Pi;if(l||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new nl(a)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return l&&d&&d.height>0||u&&d&&n(d)?(t===null&&(t=new nl(a)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",i),f.texture):null}}}return o}function n(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function i(o){const c=o.target;c.removeEventListener("dispose",i);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function Jd(a){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=a.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const n=t(r);return n===null&&Ri("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function Qd(a,e,t,r){const n={},i=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",s),delete n[h.id];const d=i.get(h);d&&(e.remove(d),i.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return n[h.id]===!0||(h.addEventListener("dispose",s),n[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const d in h)e.update(h[d],a.ARRAY_BUFFER)}function l(f){const h=[],d=f.index,_=f.attributes.position;let x=0;if(d!==null){const C=d.array;x=d.version;for(let T=0,y=C.length;T<y;T+=3){const U=C[T+0],D=C[T+1],E=C[T+2];h.push(U,D,D,E,E,U)}}else if(_!==void 0){const C=_.array;x=_.version;for(let T=0,y=C.length/3-1;T<y;T+=3){const U=T+0,D=T+1,E=T+2;h.push(U,D,D,E,E,U)}}else return;const m=new(Ql(h)?rc:ic)(h,1);m.version=x;const p=i.get(f);p&&e.remove(p),i.set(f,m)}function u(f){const h=i.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return i.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function $d(a,e,t){let r;function n(h){r=h}let i,s;function o(h){i=h.type,s=h.bytesPerElement}function c(h,d){a.drawElements(r,d,i,h*s),t.update(d,r,1)}function l(h,d,_){_!==0&&(a.drawElementsInstanced(r,d,i,h*s,_),t.update(d,r,_))}function u(h,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,d,0,i,h,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,r,1)}function f(h,d,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/s,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(r,d,0,i,h,0,x,0,_);let p=0;for(let C=0;C<_;C++)p+=d[C]*x[C];t.update(p,r,1)}}this.setMode=n,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function ep(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(i,s,o){switch(t.calls++,s){case a.TRIANGLES:t.triangles+=o*(i/3);break;case a.LINES:t.lines+=o*(i/2);break;case a.LINE_STRIP:t.lines+=o*(i-1);break;case a.LINE_LOOP:t.lines+=o*i;break;case a.POINTS:t.points+=o*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function tp(a,e,t){const r=new WeakMap,n=new ct;function i(s,o,c){const l=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=r.get(o);if(h===void 0||h.count!==f){let v=function(){S.dispose(),r.delete(o),o.removeEventListener("dispose",v)};var d=v;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],C=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let U=o.attributes.position.count*y,D=1;U>e.maxTextureSize&&(D=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const E=new Float32Array(U*D*4*f),S=new $l(E,U,D,f);S.type=_n,S.needsUpdate=!0;const g=y*4;for(let A=0;A<f;A++){const w=p[A],L=C[A],N=T[A],q=U*D*4*A;for(let V=0;V<w.count;V++){const Y=V*g;_===!0&&(n.fromBufferAttribute(w,V),E[q+Y+0]=n.x,E[q+Y+1]=n.y,E[q+Y+2]=n.z,E[q+Y+3]=0),x===!0&&(n.fromBufferAttribute(L,V),E[q+Y+4]=n.x,E[q+Y+5]=n.y,E[q+Y+6]=n.z,E[q+Y+7]=0),m===!0&&(n.fromBufferAttribute(N,V),E[q+Y+8]=n.x,E[q+Y+9]=n.y,E[q+Y+10]=n.z,E[q+Y+11]=N.itemSize===4?n.w:1)}}h={count:f,texture:S,size:new et(U,D)},r.set(o,h),o.addEventListener("dispose",v)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(a,"morphTexture",s.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const x=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(a,"morphTargetBaseInfluence",x),c.getUniforms().setValue(a,"morphTargetInfluences",l)}c.getUniforms().setValue(a,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(a,"morphTargetsTextureSize",h.size)}return{update:i}}function np(a,e,t,r){let n=new WeakMap;function i(c){const l=r.render.frame,u=c.geometry,f=e.get(c,u);if(n.get(f)!==l&&(e.update(f),n.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),n.get(c)!==l&&(t.update(c.instanceMatrix,a.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,a.ARRAY_BUFFER),n.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;n.get(h)!==l&&(h.update(),n.set(h,l))}return f}function s(){n=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:i,dispose:s}}const mc=new wt,sl=new fc(1,1),gc=new $l,_c=new Du,vc=new lc,ol=[],ll=[],cl=new Float32Array(16),ul=new Float32Array(9),fl=new Float32Array(4);function Ni(a,e,t){const r=a[0];if(r<=0||r>0)return a;const n=e*t;let i=ol[n];if(i===void 0&&(i=new Float32Array(n),ol[n]=i),e!==0){r.toArray(i,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(i,o)}return i}function _t(a,e){if(a.length!==e.length)return!1;for(let t=0,r=a.length;t<r;t++)if(a[t]!==e[t])return!1;return!0}function vt(a,e){for(let t=0,r=e.length;t<r;t++)a[t]=e[t]}function ca(a,e){let t=ll[e];t===void 0&&(t=new Int32Array(e),ll[e]=t);for(let r=0;r!==e;++r)t[r]=a.allocateTextureUnit();return t}function ip(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function rp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;a.uniform2fv(this.addr,e),vt(t,e)}}function ap(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;a.uniform3fv(this.addr,e),vt(t,e)}}function sp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;a.uniform4fv(this.addr,e),vt(t,e)}}function op(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(_t(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,r))return;fl.set(r),a.uniformMatrix2fv(this.addr,!1,fl),vt(t,r)}}function lp(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(_t(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,r))return;ul.set(r),a.uniformMatrix3fv(this.addr,!1,ul),vt(t,r)}}function cp(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(_t(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,r))return;cl.set(r),a.uniformMatrix4fv(this.addr,!1,cl),vt(t,r)}}function up(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function fp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;a.uniform2iv(this.addr,e),vt(t,e)}}function hp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;a.uniform3iv(this.addr,e),vt(t,e)}}function dp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;a.uniform4iv(this.addr,e),vt(t,e)}}function pp(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function mp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;a.uniform2uiv(this.addr,e),vt(t,e)}}function gp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;a.uniform3uiv(this.addr,e),vt(t,e)}}function _p(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;a.uniform4uiv(this.addr,e),vt(t,e)}}function vp(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n);let i;this.type===a.SAMPLER_2D_SHADOW?(sl.compareFunction=Jl,i=sl):i=mc,t.setTexture2D(e||i,n)}function xp(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||_c,n)}function Sp(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||vc,n)}function Mp(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||gc,n)}function yp(a){switch(a){case 5126:return ip;case 35664:return rp;case 35665:return ap;case 35666:return sp;case 35674:return op;case 35675:return lp;case 35676:return cp;case 5124:case 35670:return up;case 35667:case 35671:return fp;case 35668:case 35672:return hp;case 35669:case 35673:return dp;case 5125:return pp;case 36294:return mp;case 36295:return gp;case 36296:return _p;case 35678:case 36198:case 36298:case 36306:case 35682:return vp;case 35679:case 36299:case 36307:return xp;case 35680:case 36300:case 36308:case 36293:return Sp;case 36289:case 36303:case 36311:case 36292:return Mp}}function Ep(a,e){a.uniform1fv(this.addr,e)}function Tp(a,e){const t=Ni(e,this.size,2);a.uniform2fv(this.addr,t)}function bp(a,e){const t=Ni(e,this.size,3);a.uniform3fv(this.addr,t)}function Ap(a,e){const t=Ni(e,this.size,4);a.uniform4fv(this.addr,t)}function wp(a,e){const t=Ni(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Rp(a,e){const t=Ni(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Cp(a,e){const t=Ni(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Up(a,e){a.uniform1iv(this.addr,e)}function Dp(a,e){a.uniform2iv(this.addr,e)}function Pp(a,e){a.uniform3iv(this.addr,e)}function Lp(a,e){a.uniform4iv(this.addr,e)}function Ip(a,e){a.uniform1uiv(this.addr,e)}function Fp(a,e){a.uniform2uiv(this.addr,e)}function Np(a,e){a.uniform3uiv(this.addr,e)}function Op(a,e){a.uniform4uiv(this.addr,e)}function Bp(a,e,t){const r=this.cache,n=e.length,i=ca(t,n);_t(r,i)||(a.uniform1iv(this.addr,i),vt(r,i));for(let s=0;s!==n;++s)t.setTexture2D(e[s]||mc,i[s])}function kp(a,e,t){const r=this.cache,n=e.length,i=ca(t,n);_t(r,i)||(a.uniform1iv(this.addr,i),vt(r,i));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||_c,i[s])}function zp(a,e,t){const r=this.cache,n=e.length,i=ca(t,n);_t(r,i)||(a.uniform1iv(this.addr,i),vt(r,i));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||vc,i[s])}function Gp(a,e,t){const r=this.cache,n=e.length,i=ca(t,n);_t(r,i)||(a.uniform1iv(this.addr,i),vt(r,i));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||gc,i[s])}function Vp(a){switch(a){case 5126:return Ep;case 35664:return Tp;case 35665:return bp;case 35666:return Ap;case 35674:return wp;case 35675:return Rp;case 35676:return Cp;case 5124:case 35670:return Up;case 35667:case 35671:return Dp;case 35668:case 35672:return Pp;case 35669:case 35673:return Lp;case 5125:return Ip;case 36294:return Fp;case 36295:return Np;case 36296:return Op;case 35678:case 36198:case 36298:case 36306:case 35682:return Bp;case 35679:case 36299:case 36307:return kp;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return Gp}}class Hp{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=yp(t.type)}}class Wp{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vp(t.type)}}class Xp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const o=n[i];o.setValue(e,t[o.id],r)}}}const ns=/(\w+)(\])?(\[|\.)?/g;function hl(a,e){a.seq.push(e),a.map[e.id]=e}function Yp(a,e,t){const r=a.name,n=r.length;for(ns.lastIndex=0;;){const i=ns.exec(r),s=ns.lastIndex;let o=i[1];const c=i[2]==="]",l=i[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===n){hl(t,l===void 0?new Hp(o,a,e):new Wp(o,a,e));break}else{let f=t.map[o];f===void 0&&(f=new Xp(o),hl(t,f)),t=f}}}class $r{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const i=e.getActiveUniform(t,n),s=e.getUniformLocation(t,i.name);Yp(i,s,this)}}setValue(e,t,r,n){const i=this.map[t];i!==void 0&&i.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let i=0,s=t.length;i!==s;++i){const o=t[i],c=r[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.id in t&&r.push(s)}return r}}function dl(a,e,t){const r=a.createShader(e);return a.shaderSource(r,t),a.compileShader(r),r}const qp=37297;let jp=0;function Kp(a,e){const t=a.split(`
`),r=[],n=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let s=n;s<i;s++){const o=s+1;r.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return r.join(`
`)}const pl=new Ye;function Zp(a){$e._getMatrix(pl,$e.workingColorSpace,a);const e=`mat3( ${pl.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(a)){case aa:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function ml(a,e,t){const r=a.getShaderParameter(e,a.COMPILE_STATUS),i=(a.getShaderInfoLog(e)||"").trim();if(r&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Kp(a.getShaderSource(e),o)}else return i}function Jp(a,e){const t=Zp(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Qp(a,e){let t;switch(e){case au:t="Linear";break;case su:t="Reinhard";break;case ou:t="Cineon";break;case lu:t="ACESFilmic";break;case uu:t="AgX";break;case fu:t="Neutral";break;case cu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wr=new le;function $p(){$e.getLuminanceCoefficients(Wr);const a=Wr.x.toFixed(4),e=Wr.y.toFixed(4),t=Wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function em(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function tm(a){const e=[];for(const t in a){const r=a[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function nm(a,e){const t={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const i=a.getActiveAttrib(e,n),s=i.name;let o=1;i.type===a.FLOAT_MAT2&&(o=2),i.type===a.FLOAT_MAT3&&(o=3),i.type===a.FLOAT_MAT4&&(o=4),t[s]={type:i.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function er(a){return a!==""}function gl(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _l(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const im=/^[ \t]*#include +<([\w\d./]+)>/gm;function qs(a){return a.replace(im,am)}const rm=new Map;function am(a,e){let t=je[e];if(t===void 0){const r=rm.get(e);if(r!==void 0)t=je[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return qs(t)}const sm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vl(a){return a.replace(sm,om)}function om(a,e,t,r){let n="";for(let i=parseInt(e);i<parseInt(t);i++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return n}function xl(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lm(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===kl?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Bc?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function cm(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Di:case Pi:e="ENVMAP_TYPE_CUBE";break;case la:e="ENVMAP_TYPE_CUBE_UV";break}return e}function um(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Pi:e="ENVMAP_MODE_REFRACTION";break}return e}function fm(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case zl:e="ENVMAP_BLENDING_MULTIPLY";break;case iu:e="ENVMAP_BLENDING_MIX";break;case ru:e="ENVMAP_BLENDING_ADD";break}return e}function hm(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function dm(a,e,t,r){const n=a.getContext(),i=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=lm(t),l=cm(t),u=um(t),f=fm(t),h=hm(t),d=em(t),_=tm(i),x=n.createProgram();let m,p,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(er).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(er).join(`
`),p.length>0&&(p+=`
`)):(m=[xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),p=[xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?je.tonemapping_pars_fragment:"",t.toneMapping!==Ln?Qp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Jp("linearToOutputTexel",t.outputColorSpace),$p(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(er).join(`
`)),s=qs(s),s=gl(s,t),s=_l(s,t),o=qs(o),o=gl(o,t),o=_l(o,t),s=vl(s),o=vl(o),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Po?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Po?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=C+m+s,y=C+p+o,U=dl(n,n.VERTEX_SHADER,T),D=dl(n,n.FRAGMENT_SHADER,y);n.attachShader(x,U),n.attachShader(x,D),t.index0AttributeName!==void 0?n.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function E(A){if(a.debug.checkShaderErrors){const w=n.getProgramInfoLog(x)||"",L=n.getShaderInfoLog(U)||"",N=n.getShaderInfoLog(D)||"",q=w.trim(),V=L.trim(),Y=N.trim();let W=!0,G=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(W=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(n,x,U,D);else{const j=ml(n,U,"vertex"),P=ml(n,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+q+`
`+j+`
`+P)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(V===""||Y==="")&&(G=!1);G&&(A.diagnostics={runnable:W,programLog:q,vertexShader:{log:V,prefix:m},fragmentShader:{log:Y,prefix:p}})}n.deleteShader(U),n.deleteShader(D),S=new $r(n,x),g=nm(n,x)}let S;this.getUniforms=function(){return S===void 0&&E(this),S};let g;this.getAttributes=function(){return g===void 0&&E(this),g};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=n.getProgramParameter(x,qp)),v},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jp++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=U,this.fragmentShader=D,this}let pm=0;class mm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),i=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new gm(e),t.set(e,r)),r}}class gm{constructor(e){this.id=pm++,this.code=e,this.usedTimes=0}}function _m(a,e,t,r,n,i,s){const o=new tc,c=new mm,l=new Set,u=[],f=n.logarithmicDepthBuffer,h=n.vertexTextures;let d=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return l.add(g),g===0?"uv":`uv${g}`}function m(g,v,A,w,L){const N=w.fog,q=L.geometry,V=g.isMeshStandardMaterial?w.environment:null,Y=(g.isMeshStandardMaterial?t:e).get(g.envMap||V),W=Y&&Y.mapping===la?Y.image.height:null,G=_[g.type];g.precision!==null&&(d=n.getMaxPrecision(g.precision),d!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",d,"instead."));const j=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,P=j!==void 0?j.length:0;let k=0;q.morphAttributes.position!==void 0&&(k=1),q.morphAttributes.normal!==void 0&&(k=2),q.morphAttributes.color!==void 0&&(k=3);let X,$,I,K;if(G){const Ve=sn[G];X=Ve.vertexShader,$=Ve.fragmentShader}else X=g.vertexShader,$=g.fragmentShader,c.update(g),I=c.getVertexShaderID(g),K=c.getFragmentShaderID(g);const H=a.getRenderTarget(),Z=a.state.buffers.depth.getReversed(),ie=L.isInstancedMesh===!0,me=L.isBatchedMesh===!0,ce=!!g.map,ne=!!g.matcap,F=!!Y,be=!!g.aoMap,pe=!!g.lightMap,Se=!!g.bumpMap,Me=!!g.normalMap,he=!!g.displacementMap,ae=!!g.emissiveMap,ge=!!g.metalnessMap,ue=!!g.roughnessMap,De=g.anisotropy>0,b=g.clearcoat>0,M=g.dispersion>0,O=g.iridescence>0,te=g.sheen>0,ee=g.transmission>0,J=De&&!!g.anisotropyMap,Ee=b&&!!g.clearcoatMap,ve=b&&!!g.clearcoatNormalMap,Ae=b&&!!g.clearcoatRoughnessMap,we=O&&!!g.iridescenceMap,fe=O&&!!g.iridescenceThicknessMap,xe=te&&!!g.sheenColorMap,Te=te&&!!g.sheenRoughnessMap,Ue=!!g.specularMap,Re=!!g.specularColorMap,Ge=!!g.specularIntensityMap,z=ee&&!!g.transmissionMap,de=ee&&!!g.thicknessMap,ye=!!g.gradientMap,Fe=!!g.alphaMap,_e=g.alphaTest>0,se=!!g.alphaHash,Pe=!!g.extensions;let Oe=Ln;g.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Oe=a.toneMapping);const Be={shaderID:G,shaderType:g.type,shaderName:g.name,vertexShader:X,fragmentShader:$,defines:g.defines,customVertexShaderID:I,customFragmentShaderID:K,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:d,batching:me,batchingColor:me&&L._colorsTexture!==null,instancing:ie,instancingColor:ie&&L.instanceColor!==null,instancingMorph:ie&&L.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:H===null?a.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Li,alphaToCoverage:!!g.alphaToCoverage,map:ce,matcap:ne,envMap:F,envMapMode:F&&Y.mapping,envMapCubeUVHeight:W,aoMap:be,lightMap:pe,bumpMap:Se,normalMap:Me,displacementMap:h&&he,emissiveMap:ae,normalMapObjectSpace:Me&&g.normalMapType===mu,normalMapTangentSpace:Me&&g.normalMapType===pu,metalnessMap:ge,roughnessMap:ue,anisotropy:De,anisotropyMap:J,clearcoat:b,clearcoatMap:Ee,clearcoatNormalMap:ve,clearcoatRoughnessMap:Ae,dispersion:M,iridescence:O,iridescenceMap:we,iridescenceThicknessMap:fe,sheen:te,sheenColorMap:xe,sheenRoughnessMap:Te,specularMap:Ue,specularColorMap:Re,specularIntensityMap:Ge,transmission:ee,transmissionMap:z,thicknessMap:de,gradientMap:ye,opaque:g.transparent===!1&&g.blending===wi&&g.alphaToCoverage===!1,alphaMap:Fe,alphaTest:_e,alphaHash:se,combine:g.combine,mapUv:ce&&x(g.map.channel),aoMapUv:be&&x(g.aoMap.channel),lightMapUv:pe&&x(g.lightMap.channel),bumpMapUv:Se&&x(g.bumpMap.channel),normalMapUv:Me&&x(g.normalMap.channel),displacementMapUv:he&&x(g.displacementMap.channel),emissiveMapUv:ae&&x(g.emissiveMap.channel),metalnessMapUv:ge&&x(g.metalnessMap.channel),roughnessMapUv:ue&&x(g.roughnessMap.channel),anisotropyMapUv:J&&x(g.anisotropyMap.channel),clearcoatMapUv:Ee&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:ve&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:Te&&x(g.sheenRoughnessMap.channel),specularMapUv:Ue&&x(g.specularMap.channel),specularColorMapUv:Re&&x(g.specularColorMap.channel),specularIntensityMapUv:Ge&&x(g.specularIntensityMap.channel),transmissionMapUv:z&&x(g.transmissionMap.channel),thicknessMapUv:de&&x(g.thicknessMap.channel),alphaMapUv:Fe&&x(g.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Me||De),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!q.attributes.uv&&(ce||Fe),fog:!!N,useFog:g.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:g.flatShading===!0&&g.wireframe===!1,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Z,skinning:L.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:k,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:a.shadowMap.enabled&&A.length>0,shadowMapType:a.shadowMap.type,toneMapping:Oe,decodeVideoTexture:ce&&g.map.isVideoTexture===!0&&$e.getTransfer(g.map.colorSpace)===at,decodeVideoTextureEmissive:ae&&g.emissiveMap.isVideoTexture===!0&&$e.getTransfer(g.emissiveMap.colorSpace)===at,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===on,flipSided:g.side===Pt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Pe&&g.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&g.extensions.multiDraw===!0||me)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function p(g){const v=[];if(g.shaderID?v.push(g.shaderID):(v.push(g.customVertexShaderID),v.push(g.customFragmentShaderID)),g.defines!==void 0)for(const A in g.defines)v.push(A),v.push(g.defines[A]);return g.isRawShaderMaterial===!1&&(C(v,g),T(v,g),v.push(a.outputColorSpace)),v.push(g.customProgramCacheKey),v.join()}function C(g,v){g.push(v.precision),g.push(v.outputColorSpace),g.push(v.envMapMode),g.push(v.envMapCubeUVHeight),g.push(v.mapUv),g.push(v.alphaMapUv),g.push(v.lightMapUv),g.push(v.aoMapUv),g.push(v.bumpMapUv),g.push(v.normalMapUv),g.push(v.displacementMapUv),g.push(v.emissiveMapUv),g.push(v.metalnessMapUv),g.push(v.roughnessMapUv),g.push(v.anisotropyMapUv),g.push(v.clearcoatMapUv),g.push(v.clearcoatNormalMapUv),g.push(v.clearcoatRoughnessMapUv),g.push(v.iridescenceMapUv),g.push(v.iridescenceThicknessMapUv),g.push(v.sheenColorMapUv),g.push(v.sheenRoughnessMapUv),g.push(v.specularMapUv),g.push(v.specularColorMapUv),g.push(v.specularIntensityMapUv),g.push(v.transmissionMapUv),g.push(v.thicknessMapUv),g.push(v.combine),g.push(v.fogExp2),g.push(v.sizeAttenuation),g.push(v.morphTargetsCount),g.push(v.morphAttributeCount),g.push(v.numDirLights),g.push(v.numPointLights),g.push(v.numSpotLights),g.push(v.numSpotLightMaps),g.push(v.numHemiLights),g.push(v.numRectAreaLights),g.push(v.numDirLightShadows),g.push(v.numPointLightShadows),g.push(v.numSpotLightShadows),g.push(v.numSpotLightShadowsWithMaps),g.push(v.numLightProbes),g.push(v.shadowMapType),g.push(v.toneMapping),g.push(v.numClippingPlanes),g.push(v.numClipIntersection),g.push(v.depthPacking)}function T(g,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),g.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),g.push(o.mask)}function y(g){const v=_[g.type];let A;if(v){const w=sn[v];A=sc.clone(w.uniforms)}else A=g.uniforms;return A}function U(g,v){let A;for(let w=0,L=u.length;w<L;w++){const N=u[w];if(N.cacheKey===v){A=N,++A.usedTimes;break}}return A===void 0&&(A=new dm(a,v,g,i),u.push(A)),A}function D(g){if(--g.usedTimes===0){const v=u.indexOf(g);u[v]=u[u.length-1],u.pop(),g.destroy()}}function E(g){c.remove(g)}function S(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:U,releaseProgram:D,releaseShaderCache:E,programs:u,dispose:S}}function vm(){let a=new WeakMap;function e(s){return a.has(s)}function t(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function r(s){a.delete(s)}function n(s,o,c){a.get(s)[o]=c}function i(){a=new WeakMap}return{has:e,get:t,remove:r,update:n,dispose:i}}function xm(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Sl(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Ml(){const a=[];let e=0;const t=[],r=[],n=[];function i(){e=0,t.length=0,r.length=0,n.length=0}function s(f,h,d,_,x,m){let p=a[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},a[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=x,p.group=m),e++,p}function o(f,h,d,_,x,m){const p=s(f,h,d,_,x,m);d.transmission>0?r.push(p):d.transparent===!0?n.push(p):t.push(p)}function c(f,h,d,_,x,m){const p=s(f,h,d,_,x,m);d.transmission>0?r.unshift(p):d.transparent===!0?n.unshift(p):t.unshift(p)}function l(f,h){t.length>1&&t.sort(f||xm),r.length>1&&r.sort(h||Sl),n.length>1&&n.sort(h||Sl)}function u(){for(let f=e,h=a.length;f<h;f++){const d=a[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:r,transparent:n,init:i,push:o,unshift:c,finish:u,sort:l}}function Sm(){let a=new WeakMap;function e(r,n){const i=a.get(r);let s;return i===void 0?(s=new Ml,a.set(r,[s])):n>=i.length?(s=new Ml,i.push(s)):s=i[n],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function Mm(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new le,color:new Qe};break;case"SpotLight":t={position:new le,direction:new le,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new le,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new le,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new le,halfWidth:new le,halfHeight:new le};break}return a[e.id]=t,t}}}function ym(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Em=0;function Tm(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function bm(a){const e=new Mm,t=ym(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)r.probe.push(new le);const n=new le,i=new ht,s=new ht;function o(l){let u=0,f=0,h=0;for(let g=0;g<9;g++)r.probe[g].set(0,0,0);let d=0,_=0,x=0,m=0,p=0,C=0,T=0,y=0,U=0,D=0,E=0;l.sort(Tm);for(let g=0,v=l.length;g<v;g++){const A=l[g],w=A.color,L=A.intensity,N=A.distance,q=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=w.r*L,f+=w.g*L,h+=w.b*L;else if(A.isLightProbe){for(let V=0;V<9;V++)r.probe[V].addScaledVector(A.sh.coefficients[V],L);E++}else if(A.isDirectionalLight){const V=e.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const Y=A.shadow,W=t.get(A);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,r.directionalShadow[d]=W,r.directionalShadowMap[d]=q,r.directionalShadowMatrix[d]=A.shadow.matrix,C++}r.directional[d]=V,d++}else if(A.isSpotLight){const V=e.get(A);V.position.setFromMatrixPosition(A.matrixWorld),V.color.copy(w).multiplyScalar(L),V.distance=N,V.coneCos=Math.cos(A.angle),V.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),V.decay=A.decay,r.spot[x]=V;const Y=A.shadow;if(A.map&&(r.spotLightMap[U]=A.map,U++,Y.updateMatrices(A),A.castShadow&&D++),r.spotLightMatrix[x]=Y.matrix,A.castShadow){const W=t.get(A);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,r.spotShadow[x]=W,r.spotShadowMap[x]=q,y++}x++}else if(A.isRectAreaLight){const V=e.get(A);V.color.copy(w).multiplyScalar(L),V.halfWidth.set(A.width*.5,0,0),V.halfHeight.set(0,A.height*.5,0),r.rectArea[m]=V,m++}else if(A.isPointLight){const V=e.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),V.distance=A.distance,V.decay=A.decay,A.castShadow){const Y=A.shadow,W=t.get(A);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,r.pointShadow[_]=W,r.pointShadowMap[_]=q,r.pointShadowMatrix[_]=A.shadow.matrix,T++}r.point[_]=V,_++}else if(A.isHemisphereLight){const V=e.get(A);V.skyColor.copy(A.color).multiplyScalar(L),V.groundColor.copy(A.groundColor).multiplyScalar(L),r.hemi[p]=V,p++}}m>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=f,r.ambient[2]=h;const S=r.hash;(S.directionalLength!==d||S.pointLength!==_||S.spotLength!==x||S.rectAreaLength!==m||S.hemiLength!==p||S.numDirectionalShadows!==C||S.numPointShadows!==T||S.numSpotShadows!==y||S.numSpotMaps!==U||S.numLightProbes!==E)&&(r.directional.length=d,r.spot.length=x,r.rectArea.length=m,r.point.length=_,r.hemi.length=p,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=y,r.spotShadowMap.length=y,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=y+U-D,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=E,S.directionalLength=d,S.pointLength=_,S.spotLength=x,S.rectAreaLength=m,S.hemiLength=p,S.numDirectionalShadows=C,S.numPointShadows=T,S.numSpotShadows=y,S.numSpotMaps=U,S.numLightProbes=E,r.version=Em++)}function c(l,u){let f=0,h=0,d=0,_=0,x=0;const m=u.matrixWorldInverse;for(let p=0,C=l.length;p<C;p++){const T=l[p];if(T.isDirectionalLight){const y=r.directional[f];y.direction.setFromMatrixPosition(T.matrixWorld),n.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),f++}else if(T.isSpotLight){const y=r.spot[d];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(T.matrixWorld),n.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),d++}else if(T.isRectAreaLight){const y=r.rectArea[_];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),s.identity(),i.copy(T.matrixWorld),i.premultiply(m),s.extractRotation(i),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),_++}else if(T.isPointLight){const y=r.point[h];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),h++}else if(T.isHemisphereLight){const y=r.hemi[x];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:r}}function yl(a){const e=new bm(a),t=[],r=[];function n(u){l.camera=u,t.length=0,r.length=0}function i(u){t.push(u)}function s(u){r.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:l,setupLights:o,setupLightsView:c,pushLight:i,pushShadow:s}}function Am(a){let e=new WeakMap;function t(n,i=0){const s=e.get(n);let o;return s===void 0?(o=new yl(a),e.set(n,[o])):i>=s.length?(o=new yl(a),s.push(o)):o=s[i],o}function r(){e=new WeakMap}return{get:t,dispose:r}}const wm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rm=`uniform sampler2D shadow_pass;
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
}`;function Cm(a,e,t){let r=new cc;const n=new et,i=new et,s=new ct,o=new hc({depthPacking:Zl}),c=new dc,l={},u=t.maxTextureSize,f={[Fn]:Pt,[Pt]:Fn,[on]:on},h=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:wm,fragmentShader:Rm}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new cn;_.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Yt(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kl;let p=this.type;this.render=function(D,E,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const g=a.getRenderTarget(),v=a.getActiveCubeFace(),A=a.getActiveMipmapLevel(),w=a.state;w.setBlending(Pn),w.buffers.depth.getReversed()?w.buffers.color.setClear(0,0,0,0):w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);const L=p!==gn&&this.type===gn,N=p===gn&&this.type!==gn;for(let q=0,V=D.length;q<V;q++){const Y=D[q],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);const G=W.getFrameExtents();if(n.multiply(G),i.copy(W.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(i.x=Math.floor(u/G.x),n.x=i.x*G.x,W.mapSize.x=i.x),n.y>u&&(i.y=Math.floor(u/G.y),n.y=i.y*G.y,W.mapSize.y=i.y)),W.map===null||L===!0||N===!0){const P=this.type!==gn?{minFilter:tn,magFilter:tn}:{};W.map!==null&&W.map.dispose(),W.map=new ei(n.x,n.y,P),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}a.setRenderTarget(W.map),a.clear();const j=W.getViewportCount();for(let P=0;P<j;P++){const k=W.getViewport(P);s.set(i.x*k.x,i.y*k.y,i.x*k.z,i.y*k.w),w.viewport(s),W.updateMatrices(Y,P),r=W.getFrustum(),y(E,S,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===gn&&C(W,S),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,a.setRenderTarget(g,v,A)};function C(D,E){const S=e.update(x);h.defines.VSM_SAMPLES!==D.blurSamples&&(h.defines.VSM_SAMPLES=D.blurSamples,d.defines.VSM_SAMPLES=D.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ei(n.x,n.y)),h.uniforms.shadow_pass.value=D.map.texture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,a.setRenderTarget(D.mapPass),a.clear(),a.renderBufferDirect(E,null,S,h,x,null),d.uniforms.shadow_pass.value=D.mapPass.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,a.setRenderTarget(D.map),a.clear(),a.renderBufferDirect(E,null,S,d,x,null)}function T(D,E,S,g){let v=null;const A=S.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(A!==void 0)v=A;else if(v=S.isPointLight===!0?c:o,a.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const w=v.uuid,L=E.uuid;let N=l[w];N===void 0&&(N={},l[w]=N);let q=N[L];q===void 0&&(q=v.clone(),N[L]=q,E.addEventListener("dispose",U)),v=q}if(v.visible=E.visible,v.wireframe=E.wireframe,g===gn?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:f[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,S.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const w=a.properties.get(v);w.light=S}return v}function y(D,E,S,g,v){if(D.visible===!1)return;if(D.layers.test(E.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&v===gn)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,D.matrixWorld);const L=e.update(D),N=D.material;if(Array.isArray(N)){const q=L.groups;for(let V=0,Y=q.length;V<Y;V++){const W=q[V],G=N[W.materialIndex];if(G&&G.visible){const j=T(D,G,g,v);D.onBeforeShadow(a,D,E,S,L,j,W),a.renderBufferDirect(S,null,L,j,D,W),D.onAfterShadow(a,D,E,S,L,j,W)}}}else if(N.visible){const q=T(D,N,g,v);D.onBeforeShadow(a,D,E,S,L,q,null),a.renderBufferDirect(S,null,L,q,D,null),D.onAfterShadow(a,D,E,S,L,q,null)}}const w=D.children;for(let L=0,N=w.length;L<N;L++)y(w[L],E,S,g,v)}function U(D){D.target.removeEventListener("dispose",U);for(const S in l){const g=l[S],v=D.target.uuid;v in g&&(g[v].dispose(),delete g[v])}}}const Um={[ls]:cs,[us]:ds,[fs]:ps,[Ui]:hs,[cs]:ls,[ds]:us,[ps]:fs,[hs]:Ui};function Dm(a,e){function t(){let z=!1;const de=new ct;let ye=null;const Fe=new ct(0,0,0,0);return{setMask:function(_e){ye!==_e&&!z&&(a.colorMask(_e,_e,_e,_e),ye=_e)},setLocked:function(_e){z=_e},setClear:function(_e,se,Pe,Oe,Be){Be===!0&&(_e*=Oe,se*=Oe,Pe*=Oe),de.set(_e,se,Pe,Oe),Fe.equals(de)===!1&&(a.clearColor(_e,se,Pe,Oe),Fe.copy(de))},reset:function(){z=!1,ye=null,Fe.set(-1,0,0,0)}}}function r(){let z=!1,de=!1,ye=null,Fe=null,_e=null;return{setReversed:function(se){if(de!==se){const Pe=e.get("EXT_clip_control");se?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),de=se;const Oe=_e;_e=null,this.setClear(Oe)}},getReversed:function(){return de},setTest:function(se){se?H(a.DEPTH_TEST):Z(a.DEPTH_TEST)},setMask:function(se){ye!==se&&!z&&(a.depthMask(se),ye=se)},setFunc:function(se){if(de&&(se=Um[se]),Fe!==se){switch(se){case ls:a.depthFunc(a.NEVER);break;case cs:a.depthFunc(a.ALWAYS);break;case us:a.depthFunc(a.LESS);break;case Ui:a.depthFunc(a.LEQUAL);break;case fs:a.depthFunc(a.EQUAL);break;case hs:a.depthFunc(a.GEQUAL);break;case ds:a.depthFunc(a.GREATER);break;case ps:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Fe=se}},setLocked:function(se){z=se},setClear:function(se){_e!==se&&(de&&(se=1-se),a.clearDepth(se),_e=se)},reset:function(){z=!1,ye=null,Fe=null,_e=null,de=!1}}}function n(){let z=!1,de=null,ye=null,Fe=null,_e=null,se=null,Pe=null,Oe=null,Be=null;return{setTest:function(Ve){z||(Ve?H(a.STENCIL_TEST):Z(a.STENCIL_TEST))},setMask:function(Ve){de!==Ve&&!z&&(a.stencilMask(Ve),de=Ve)},setFunc:function(Ve,lt,st){(ye!==Ve||Fe!==lt||_e!==st)&&(a.stencilFunc(Ve,lt,st),ye=Ve,Fe=lt,_e=st)},setOp:function(Ve,lt,st){(se!==Ve||Pe!==lt||Oe!==st)&&(a.stencilOp(Ve,lt,st),se=Ve,Pe=lt,Oe=st)},setLocked:function(Ve){z=Ve},setClear:function(Ve){Be!==Ve&&(a.clearStencil(Ve),Be=Ve)},reset:function(){z=!1,de=null,ye=null,Fe=null,_e=null,se=null,Pe=null,Oe=null,Be=null}}}const i=new t,s=new r,o=new n,c=new WeakMap,l=new WeakMap;let u={},f={},h=new WeakMap,d=[],_=null,x=!1,m=null,p=null,C=null,T=null,y=null,U=null,D=null,E=new Qe(0,0,0),S=0,g=!1,v=null,A=null,w=null,L=null,N=null;const q=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Y=0;const W=a.getParameter(a.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=Y>=2);let G=null,j={};const P=a.getParameter(a.SCISSOR_BOX),k=a.getParameter(a.VIEWPORT),X=new ct().fromArray(P),$=new ct().fromArray(k);function I(z,de,ye,Fe){const _e=new Uint8Array(4),se=a.createTexture();a.bindTexture(z,se),a.texParameteri(z,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(z,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Pe=0;Pe<ye;Pe++)z===a.TEXTURE_3D||z===a.TEXTURE_2D_ARRAY?a.texImage3D(de,0,a.RGBA,1,1,Fe,0,a.RGBA,a.UNSIGNED_BYTE,_e):a.texImage2D(de+Pe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,_e);return se}const K={};K[a.TEXTURE_2D]=I(a.TEXTURE_2D,a.TEXTURE_2D,1),K[a.TEXTURE_CUBE_MAP]=I(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[a.TEXTURE_2D_ARRAY]=I(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),K[a.TEXTURE_3D]=I(a.TEXTURE_3D,a.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),H(a.DEPTH_TEST),s.setFunc(Ui),Se(!1),Me(Ao),H(a.CULL_FACE),be(Pn);function H(z){u[z]!==!0&&(a.enable(z),u[z]=!0)}function Z(z){u[z]!==!1&&(a.disable(z),u[z]=!1)}function ie(z,de){return f[z]!==de?(a.bindFramebuffer(z,de),f[z]=de,z===a.DRAW_FRAMEBUFFER&&(f[a.FRAMEBUFFER]=de),z===a.FRAMEBUFFER&&(f[a.DRAW_FRAMEBUFFER]=de),!0):!1}function me(z,de){let ye=d,Fe=!1;if(z){ye=h.get(de),ye===void 0&&(ye=[],h.set(de,ye));const _e=z.textures;if(ye.length!==_e.length||ye[0]!==a.COLOR_ATTACHMENT0){for(let se=0,Pe=_e.length;se<Pe;se++)ye[se]=a.COLOR_ATTACHMENT0+se;ye.length=_e.length,Fe=!0}}else ye[0]!==a.BACK&&(ye[0]=a.BACK,Fe=!0);Fe&&a.drawBuffers(ye)}function ce(z){return _!==z?(a.useProgram(z),_=z,!0):!1}const ne={[qn]:a.FUNC_ADD,[zc]:a.FUNC_SUBTRACT,[Gc]:a.FUNC_REVERSE_SUBTRACT};ne[Vc]=a.MIN,ne[Hc]=a.MAX;const F={[Wc]:a.ZERO,[Xc]:a.ONE,[Yc]:a.SRC_COLOR,[ss]:a.SRC_ALPHA,[Qc]:a.SRC_ALPHA_SATURATE,[Zc]:a.DST_COLOR,[jc]:a.DST_ALPHA,[qc]:a.ONE_MINUS_SRC_COLOR,[os]:a.ONE_MINUS_SRC_ALPHA,[Jc]:a.ONE_MINUS_DST_COLOR,[Kc]:a.ONE_MINUS_DST_ALPHA,[$c]:a.CONSTANT_COLOR,[eu]:a.ONE_MINUS_CONSTANT_COLOR,[tu]:a.CONSTANT_ALPHA,[nu]:a.ONE_MINUS_CONSTANT_ALPHA};function be(z,de,ye,Fe,_e,se,Pe,Oe,Be,Ve){if(z===Pn){x===!0&&(Z(a.BLEND),x=!1);return}if(x===!1&&(H(a.BLEND),x=!0),z!==kc){if(z!==m||Ve!==g){if((p!==qn||y!==qn)&&(a.blendEquation(a.FUNC_ADD),p=qn,y=qn),Ve)switch(z){case wi:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case wo:a.blendFunc(a.ONE,a.ONE);break;case Ro:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Co:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case wi:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case wo:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case Ro:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Co:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}C=null,T=null,U=null,D=null,E.set(0,0,0),S=0,m=z,g=Ve}return}_e=_e||de,se=se||ye,Pe=Pe||Fe,(de!==p||_e!==y)&&(a.blendEquationSeparate(ne[de],ne[_e]),p=de,y=_e),(ye!==C||Fe!==T||se!==U||Pe!==D)&&(a.blendFuncSeparate(F[ye],F[Fe],F[se],F[Pe]),C=ye,T=Fe,U=se,D=Pe),(Oe.equals(E)===!1||Be!==S)&&(a.blendColor(Oe.r,Oe.g,Oe.b,Be),E.copy(Oe),S=Be),m=z,g=!1}function pe(z,de){z.side===on?Z(a.CULL_FACE):H(a.CULL_FACE);let ye=z.side===Pt;de&&(ye=!ye),Se(ye),z.blending===wi&&z.transparent===!1?be(Pn):be(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),s.setFunc(z.depthFunc),s.setTest(z.depthTest),s.setMask(z.depthWrite),i.setMask(z.colorWrite);const Fe=z.stencilWrite;o.setTest(Fe),Fe&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ae(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?H(a.SAMPLE_ALPHA_TO_COVERAGE):Z(a.SAMPLE_ALPHA_TO_COVERAGE)}function Se(z){v!==z&&(z?a.frontFace(a.CW):a.frontFace(a.CCW),v=z)}function Me(z){z!==Nc?(H(a.CULL_FACE),z!==A&&(z===Ao?a.cullFace(a.BACK):z===Oc?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Z(a.CULL_FACE),A=z}function he(z){z!==w&&(V&&a.lineWidth(z),w=z)}function ae(z,de,ye){z?(H(a.POLYGON_OFFSET_FILL),(L!==de||N!==ye)&&(a.polygonOffset(de,ye),L=de,N=ye)):Z(a.POLYGON_OFFSET_FILL)}function ge(z){z?H(a.SCISSOR_TEST):Z(a.SCISSOR_TEST)}function ue(z){z===void 0&&(z=a.TEXTURE0+q-1),G!==z&&(a.activeTexture(z),G=z)}function De(z,de,ye){ye===void 0&&(G===null?ye=a.TEXTURE0+q-1:ye=G);let Fe=j[ye];Fe===void 0&&(Fe={type:void 0,texture:void 0},j[ye]=Fe),(Fe.type!==z||Fe.texture!==de)&&(G!==ye&&(a.activeTexture(ye),G=ye),a.bindTexture(z,de||K[z]),Fe.type=z,Fe.texture=de)}function b(){const z=j[G];z!==void 0&&z.type!==void 0&&(a.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function M(){try{a.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function O(){try{a.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function te(){try{a.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ee(){try{a.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function J(){try{a.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(){try{a.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ve(){try{a.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ae(){try{a.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function we(){try{a.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{a.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xe(z){X.equals(z)===!1&&(a.scissor(z.x,z.y,z.z,z.w),X.copy(z))}function Te(z){$.equals(z)===!1&&(a.viewport(z.x,z.y,z.z,z.w),$.copy(z))}function Ue(z,de){let ye=l.get(de);ye===void 0&&(ye=new WeakMap,l.set(de,ye));let Fe=ye.get(z);Fe===void 0&&(Fe=a.getUniformBlockIndex(de,z.name),ye.set(z,Fe))}function Re(z,de){const Fe=l.get(de).get(z);c.get(de)!==Fe&&(a.uniformBlockBinding(de,Fe,z.__bindingPointIndex),c.set(de,Fe))}function Ge(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),s.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},G=null,j={},f={},h=new WeakMap,d=[],_=null,x=!1,m=null,p=null,C=null,T=null,y=null,U=null,D=null,E=new Qe(0,0,0),S=0,g=!1,v=null,A=null,w=null,L=null,N=null,X.set(0,0,a.canvas.width,a.canvas.height),$.set(0,0,a.canvas.width,a.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:H,disable:Z,bindFramebuffer:ie,drawBuffers:me,useProgram:ce,setBlending:be,setMaterial:pe,setFlipSided:Se,setCullFace:Me,setLineWidth:he,setPolygonOffset:ae,setScissorTest:ge,activeTexture:ue,bindTexture:De,unbindTexture:b,compressedTexImage2D:M,compressedTexImage3D:O,texImage2D:we,texImage3D:fe,updateUBOMapping:Ue,uniformBlockBinding:Re,texStorage2D:ve,texStorage3D:Ae,texSubImage2D:te,texSubImage3D:ee,compressedTexSubImage2D:J,compressedTexSubImage3D:Ee,scissor:xe,viewport:Te,reset:Ge}}function Pm(a,e,t,r,n,i,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new et,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,M){return d?new OffscreenCanvas(b,M):oa("canvas")}function x(b,M,O){let te=1;const ee=De(b);if((ee.width>O||ee.height>O)&&(te=O/Math.max(ee.width,ee.height)),te<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const J=Math.floor(te*ee.width),Ee=Math.floor(te*ee.height);f===void 0&&(f=_(J,Ee));const ve=M?_(J,Ee):f;return ve.width=J,ve.height=Ee,ve.getContext("2d").drawImage(b,0,0,J,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+J+"x"+Ee+")."),ve}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){a.generateMipmap(b)}function C(b){return b.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?a.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function T(b,M,O,te,ee=!1){if(b!==null){if(a[b]!==void 0)return a[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let J=M;if(M===a.RED&&(O===a.FLOAT&&(J=a.R32F),O===a.HALF_FLOAT&&(J=a.R16F),O===a.UNSIGNED_BYTE&&(J=a.R8)),M===a.RED_INTEGER&&(O===a.UNSIGNED_BYTE&&(J=a.R8UI),O===a.UNSIGNED_SHORT&&(J=a.R16UI),O===a.UNSIGNED_INT&&(J=a.R32UI),O===a.BYTE&&(J=a.R8I),O===a.SHORT&&(J=a.R16I),O===a.INT&&(J=a.R32I)),M===a.RG&&(O===a.FLOAT&&(J=a.RG32F),O===a.HALF_FLOAT&&(J=a.RG16F),O===a.UNSIGNED_BYTE&&(J=a.RG8)),M===a.RG_INTEGER&&(O===a.UNSIGNED_BYTE&&(J=a.RG8UI),O===a.UNSIGNED_SHORT&&(J=a.RG16UI),O===a.UNSIGNED_INT&&(J=a.RG32UI),O===a.BYTE&&(J=a.RG8I),O===a.SHORT&&(J=a.RG16I),O===a.INT&&(J=a.RG32I)),M===a.RGB_INTEGER&&(O===a.UNSIGNED_BYTE&&(J=a.RGB8UI),O===a.UNSIGNED_SHORT&&(J=a.RGB16UI),O===a.UNSIGNED_INT&&(J=a.RGB32UI),O===a.BYTE&&(J=a.RGB8I),O===a.SHORT&&(J=a.RGB16I),O===a.INT&&(J=a.RGB32I)),M===a.RGBA_INTEGER&&(O===a.UNSIGNED_BYTE&&(J=a.RGBA8UI),O===a.UNSIGNED_SHORT&&(J=a.RGBA16UI),O===a.UNSIGNED_INT&&(J=a.RGBA32UI),O===a.BYTE&&(J=a.RGBA8I),O===a.SHORT&&(J=a.RGBA16I),O===a.INT&&(J=a.RGBA32I)),M===a.RGB&&O===a.UNSIGNED_INT_5_9_9_9_REV&&(J=a.RGB9_E5),M===a.RGBA){const Ee=ee?aa:$e.getTransfer(te);O===a.FLOAT&&(J=a.RGBA32F),O===a.HALF_FLOAT&&(J=a.RGBA16F),O===a.UNSIGNED_BYTE&&(J=Ee===at?a.SRGB8_ALPHA8:a.RGBA8),O===a.UNSIGNED_SHORT_4_4_4_4&&(J=a.RGBA4),O===a.UNSIGNED_SHORT_5_5_5_1&&(J=a.RGB5_A1)}return(J===a.R16F||J===a.R32F||J===a.RG16F||J===a.RG32F||J===a.RGBA16F||J===a.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(b,M){let O;return b?M===null||M===$n||M===ar?O=a.DEPTH24_STENCIL8:M===_n?O=a.DEPTH32F_STENCIL8:M===rr&&(O=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===$n||M===ar?O=a.DEPTH_COMPONENT24:M===_n?O=a.DEPTH_COMPONENT32F:M===rr&&(O=a.DEPTH_COMPONENT16),O}function U(b,M){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==tn&&b.minFilter!==Xt?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function D(b){const M=b.target;M.removeEventListener("dispose",D),S(M),M.isVideoTexture&&u.delete(M)}function E(b){const M=b.target;M.removeEventListener("dispose",E),v(M)}function S(b){const M=r.get(b);if(M.__webglInit===void 0)return;const O=b.source,te=h.get(O);if(te){const ee=te[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&g(b),Object.keys(te).length===0&&h.delete(O)}r.remove(b)}function g(b){const M=r.get(b);a.deleteTexture(M.__webglTexture);const O=b.source,te=h.get(O);delete te[M.__cacheKey],s.memory.textures--}function v(b){const M=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(M.__webglFramebuffer[te]))for(let ee=0;ee<M.__webglFramebuffer[te].length;ee++)a.deleteFramebuffer(M.__webglFramebuffer[te][ee]);else a.deleteFramebuffer(M.__webglFramebuffer[te]);M.__webglDepthbuffer&&a.deleteRenderbuffer(M.__webglDepthbuffer[te])}else{if(Array.isArray(M.__webglFramebuffer))for(let te=0;te<M.__webglFramebuffer.length;te++)a.deleteFramebuffer(M.__webglFramebuffer[te]);else a.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&a.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&a.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let te=0;te<M.__webglColorRenderbuffer.length;te++)M.__webglColorRenderbuffer[te]&&a.deleteRenderbuffer(M.__webglColorRenderbuffer[te]);M.__webglDepthRenderbuffer&&a.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=b.textures;for(let te=0,ee=O.length;te<ee;te++){const J=r.get(O[te]);J.__webglTexture&&(a.deleteTexture(J.__webglTexture),s.memory.textures--),r.remove(O[te])}r.remove(b)}let A=0;function w(){A=0}function L(){const b=A;return b>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+n.maxTextures),A+=1,b}function N(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function q(b,M){const O=r.get(b);if(b.isVideoTexture&&ge(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){const te=b.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(O,b,M);return}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,O.__webglTexture,a.TEXTURE0+M)}function V(b,M){const O=r.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){K(O,b,M);return}t.bindTexture(a.TEXTURE_2D_ARRAY,O.__webglTexture,a.TEXTURE0+M)}function Y(b,M){const O=r.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){K(O,b,M);return}t.bindTexture(a.TEXTURE_3D,O.__webglTexture,a.TEXTURE0+M)}function W(b,M){const O=r.get(b);if(b.version>0&&O.__version!==b.version){H(O,b,M);return}t.bindTexture(a.TEXTURE_CUBE_MAP,O.__webglTexture,a.TEXTURE0+M)}const G={[_s]:a.REPEAT,[Zn]:a.CLAMP_TO_EDGE,[vs]:a.MIRRORED_REPEAT},j={[tn]:a.NEAREST,[hu]:a.NEAREST_MIPMAP_NEAREST,[Mr]:a.NEAREST_MIPMAP_LINEAR,[Xt]:a.LINEAR,[Aa]:a.LINEAR_MIPMAP_NEAREST,[Jn]:a.LINEAR_MIPMAP_LINEAR},P={[gu]:a.NEVER,[yu]:a.ALWAYS,[_u]:a.LESS,[Jl]:a.LEQUAL,[vu]:a.EQUAL,[Mu]:a.GEQUAL,[xu]:a.GREATER,[Su]:a.NOTEQUAL};function k(b,M){if(M.type===_n&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Xt||M.magFilter===Aa||M.magFilter===Mr||M.magFilter===Jn||M.minFilter===Xt||M.minFilter===Aa||M.minFilter===Mr||M.minFilter===Jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(b,a.TEXTURE_WRAP_S,G[M.wrapS]),a.texParameteri(b,a.TEXTURE_WRAP_T,G[M.wrapT]),(b===a.TEXTURE_3D||b===a.TEXTURE_2D_ARRAY)&&a.texParameteri(b,a.TEXTURE_WRAP_R,G[M.wrapR]),a.texParameteri(b,a.TEXTURE_MAG_FILTER,j[M.magFilter]),a.texParameteri(b,a.TEXTURE_MIN_FILTER,j[M.minFilter]),M.compareFunction&&(a.texParameteri(b,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(b,a.TEXTURE_COMPARE_FUNC,P[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===tn||M.minFilter!==Mr&&M.minFilter!==Jn||M.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");a.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function X(b,M){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",D));const te=M.source;let ee=h.get(te);ee===void 0&&(ee={},h.set(te,ee));const J=N(M);if(J!==b.__cacheKey){ee[J]===void 0&&(ee[J]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,O=!0),ee[J].usedTimes++;const Ee=ee[b.__cacheKey];Ee!==void 0&&(ee[b.__cacheKey].usedTimes--,Ee.usedTimes===0&&g(M)),b.__cacheKey=J,b.__webglTexture=ee[J].texture}return O}function $(b,M,O){return Math.floor(Math.floor(b/O)/M)}function I(b,M,O,te){const J=b.updateRanges;if(J.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,M.width,M.height,O,te,M.data);else{J.sort((fe,xe)=>fe.start-xe.start);let Ee=0;for(let fe=1;fe<J.length;fe++){const xe=J[Ee],Te=J[fe],Ue=xe.start+xe.count,Re=$(Te.start,M.width,4),Ge=$(xe.start,M.width,4);Te.start<=Ue+1&&Re===Ge&&$(Te.start+Te.count-1,M.width,4)===Re?xe.count=Math.max(xe.count,Te.start+Te.count-xe.start):(++Ee,J[Ee]=Te)}J.length=Ee+1;const ve=a.getParameter(a.UNPACK_ROW_LENGTH),Ae=a.getParameter(a.UNPACK_SKIP_PIXELS),we=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,M.width);for(let fe=0,xe=J.length;fe<xe;fe++){const Te=J[fe],Ue=Math.floor(Te.start/4),Re=Math.ceil(Te.count/4),Ge=Ue%M.width,z=Math.floor(Ue/M.width),de=Re,ye=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,Ge),a.pixelStorei(a.UNPACK_SKIP_ROWS,z),t.texSubImage2D(a.TEXTURE_2D,0,Ge,z,de,ye,O,te,M.data)}b.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,ve),a.pixelStorei(a.UNPACK_SKIP_PIXELS,Ae),a.pixelStorei(a.UNPACK_SKIP_ROWS,we)}}function K(b,M,O){let te=a.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=a.TEXTURE_2D_ARRAY),M.isData3DTexture&&(te=a.TEXTURE_3D);const ee=X(b,M),J=M.source;t.bindTexture(te,b.__webglTexture,a.TEXTURE0+O);const Ee=r.get(J);if(J.version!==Ee.__version||ee===!0){t.activeTexture(a.TEXTURE0+O);const ve=$e.getPrimaries($e.workingColorSpace),Ae=M.colorSpace===Dn?null:$e.getPrimaries(M.colorSpace),we=M.colorSpace===Dn||ve===Ae?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let fe=x(M.image,!1,n.maxTextureSize);fe=ue(M,fe);const xe=i.convert(M.format,M.colorSpace),Te=i.convert(M.type);let Ue=T(M.internalFormat,xe,Te,M.colorSpace,M.isVideoTexture);k(te,M);let Re;const Ge=M.mipmaps,z=M.isVideoTexture!==!0,de=Ee.__version===void 0||ee===!0,ye=J.dataReady,Fe=U(M,fe);if(M.isDepthTexture)Ue=y(M.format===or,M.type),de&&(z?t.texStorage2D(a.TEXTURE_2D,1,Ue,fe.width,fe.height):t.texImage2D(a.TEXTURE_2D,0,Ue,fe.width,fe.height,0,xe,Te,null));else if(M.isDataTexture)if(Ge.length>0){z&&de&&t.texStorage2D(a.TEXTURE_2D,Fe,Ue,Ge[0].width,Ge[0].height);for(let _e=0,se=Ge.length;_e<se;_e++)Re=Ge[_e],z?ye&&t.texSubImage2D(a.TEXTURE_2D,_e,0,0,Re.width,Re.height,xe,Te,Re.data):t.texImage2D(a.TEXTURE_2D,_e,Ue,Re.width,Re.height,0,xe,Te,Re.data);M.generateMipmaps=!1}else z?(de&&t.texStorage2D(a.TEXTURE_2D,Fe,Ue,fe.width,fe.height),ye&&I(M,fe,xe,Te)):t.texImage2D(a.TEXTURE_2D,0,Ue,fe.width,fe.height,0,xe,Te,fe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){z&&de&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Fe,Ue,Ge[0].width,Ge[0].height,fe.depth);for(let _e=0,se=Ge.length;_e<se;_e++)if(Re=Ge[_e],M.format!==en)if(xe!==null)if(z){if(ye)if(M.layerUpdates.size>0){const Pe=Qo(Re.width,Re.height,M.format,M.type);for(const Oe of M.layerUpdates){const Be=Re.data.subarray(Oe*Pe/Re.data.BYTES_PER_ELEMENT,(Oe+1)*Pe/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,_e,0,0,Oe,Re.width,Re.height,1,xe,Be)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,_e,0,0,0,Re.width,Re.height,fe.depth,xe,Re.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,_e,Ue,Re.width,Re.height,fe.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?ye&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,_e,0,0,0,Re.width,Re.height,fe.depth,xe,Te,Re.data):t.texImage3D(a.TEXTURE_2D_ARRAY,_e,Ue,Re.width,Re.height,fe.depth,0,xe,Te,Re.data)}else{z&&de&&t.texStorage2D(a.TEXTURE_2D,Fe,Ue,Ge[0].width,Ge[0].height);for(let _e=0,se=Ge.length;_e<se;_e++)Re=Ge[_e],M.format!==en?xe!==null?z?ye&&t.compressedTexSubImage2D(a.TEXTURE_2D,_e,0,0,Re.width,Re.height,xe,Re.data):t.compressedTexImage2D(a.TEXTURE_2D,_e,Ue,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?ye&&t.texSubImage2D(a.TEXTURE_2D,_e,0,0,Re.width,Re.height,xe,Te,Re.data):t.texImage2D(a.TEXTURE_2D,_e,Ue,Re.width,Re.height,0,xe,Te,Re.data)}else if(M.isDataArrayTexture)if(z){if(de&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Fe,Ue,fe.width,fe.height,fe.depth),ye)if(M.layerUpdates.size>0){const _e=Qo(fe.width,fe.height,M.format,M.type);for(const se of M.layerUpdates){const Pe=fe.data.subarray(se*_e/fe.data.BYTES_PER_ELEMENT,(se+1)*_e/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,se,fe.width,fe.height,1,xe,Te,Pe)}M.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,xe,Te,fe.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Ue,fe.width,fe.height,fe.depth,0,xe,Te,fe.data);else if(M.isData3DTexture)z?(de&&t.texStorage3D(a.TEXTURE_3D,Fe,Ue,fe.width,fe.height,fe.depth),ye&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,xe,Te,fe.data)):t.texImage3D(a.TEXTURE_3D,0,Ue,fe.width,fe.height,fe.depth,0,xe,Te,fe.data);else if(M.isFramebufferTexture){if(de)if(z)t.texStorage2D(a.TEXTURE_2D,Fe,Ue,fe.width,fe.height);else{let _e=fe.width,se=fe.height;for(let Pe=0;Pe<Fe;Pe++)t.texImage2D(a.TEXTURE_2D,Pe,Ue,_e,se,0,xe,Te,null),_e>>=1,se>>=1}}else if(Ge.length>0){if(z&&de){const _e=De(Ge[0]);t.texStorage2D(a.TEXTURE_2D,Fe,Ue,_e.width,_e.height)}for(let _e=0,se=Ge.length;_e<se;_e++)Re=Ge[_e],z?ye&&t.texSubImage2D(a.TEXTURE_2D,_e,0,0,xe,Te,Re):t.texImage2D(a.TEXTURE_2D,_e,Ue,xe,Te,Re);M.generateMipmaps=!1}else if(z){if(de){const _e=De(fe);t.texStorage2D(a.TEXTURE_2D,Fe,Ue,_e.width,_e.height)}ye&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,xe,Te,fe)}else t.texImage2D(a.TEXTURE_2D,0,Ue,xe,Te,fe);m(M)&&p(te),Ee.__version=J.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function H(b,M,O){if(M.image.length!==6)return;const te=X(b,M),ee=M.source;t.bindTexture(a.TEXTURE_CUBE_MAP,b.__webglTexture,a.TEXTURE0+O);const J=r.get(ee);if(ee.version!==J.__version||te===!0){t.activeTexture(a.TEXTURE0+O);const Ee=$e.getPrimaries($e.workingColorSpace),ve=M.colorSpace===Dn?null:$e.getPrimaries(M.colorSpace),Ae=M.colorSpace===Dn||Ee===ve?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const we=M.isCompressedTexture||M.image[0].isCompressedTexture,fe=M.image[0]&&M.image[0].isDataTexture,xe=[];for(let se=0;se<6;se++)!we&&!fe?xe[se]=x(M.image[se],!0,n.maxCubemapSize):xe[se]=fe?M.image[se].image:M.image[se],xe[se]=ue(M,xe[se]);const Te=xe[0],Ue=i.convert(M.format,M.colorSpace),Re=i.convert(M.type),Ge=T(M.internalFormat,Ue,Re,M.colorSpace),z=M.isVideoTexture!==!0,de=J.__version===void 0||te===!0,ye=ee.dataReady;let Fe=U(M,Te);k(a.TEXTURE_CUBE_MAP,M);let _e;if(we){z&&de&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Fe,Ge,Te.width,Te.height);for(let se=0;se<6;se++){_e=xe[se].mipmaps;for(let Pe=0;Pe<_e.length;Pe++){const Oe=_e[Pe];M.format!==en?Ue!==null?z?ye&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,0,0,Oe.width,Oe.height,Ue,Oe.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,Ge,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ye&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,0,0,Oe.width,Oe.height,Ue,Re,Oe.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,Ge,Oe.width,Oe.height,0,Ue,Re,Oe.data)}}}else{if(_e=M.mipmaps,z&&de){_e.length>0&&Fe++;const se=De(xe[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,Fe,Ge,se.width,se.height)}for(let se=0;se<6;se++)if(fe){z?ye&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,xe[se].width,xe[se].height,Ue,Re,xe[se].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ge,xe[se].width,xe[se].height,0,Ue,Re,xe[se].data);for(let Pe=0;Pe<_e.length;Pe++){const Be=_e[Pe].image[se].image;z?ye&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,0,0,Be.width,Be.height,Ue,Re,Be.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,Ge,Be.width,Be.height,0,Ue,Re,Be.data)}}else{z?ye&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ue,Re,xe[se]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ge,Ue,Re,xe[se]);for(let Pe=0;Pe<_e.length;Pe++){const Oe=_e[Pe];z?ye&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,0,0,Ue,Re,Oe.image[se]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,Ge,Ue,Re,Oe.image[se])}}}m(M)&&p(a.TEXTURE_CUBE_MAP),J.__version=ee.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Z(b,M,O,te,ee,J){const Ee=i.convert(O.format,O.colorSpace),ve=i.convert(O.type),Ae=T(O.internalFormat,Ee,ve,O.colorSpace),we=r.get(M),fe=r.get(O);if(fe.__renderTarget=M,!we.__hasExternalTextures){const xe=Math.max(1,M.width>>J),Te=Math.max(1,M.height>>J);ee===a.TEXTURE_3D||ee===a.TEXTURE_2D_ARRAY?t.texImage3D(ee,J,Ae,xe,Te,M.depth,0,Ee,ve,null):t.texImage2D(ee,J,Ae,xe,Te,0,Ee,ve,null)}t.bindFramebuffer(a.FRAMEBUFFER,b),ae(M)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,te,ee,fe.__webglTexture,0,he(M)):(ee===a.TEXTURE_2D||ee>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,te,ee,fe.__webglTexture,J),t.bindFramebuffer(a.FRAMEBUFFER,null)}function ie(b,M,O){if(a.bindRenderbuffer(a.RENDERBUFFER,b),M.depthBuffer){const te=M.depthTexture,ee=te&&te.isDepthTexture?te.type:null,J=y(M.stencilBuffer,ee),Ee=M.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ve=he(M);ae(M)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ve,J,M.width,M.height):O?a.renderbufferStorageMultisample(a.RENDERBUFFER,ve,J,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,J,M.width,M.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ee,a.RENDERBUFFER,b)}else{const te=M.textures;for(let ee=0;ee<te.length;ee++){const J=te[ee],Ee=i.convert(J.format,J.colorSpace),ve=i.convert(J.type),Ae=T(J.internalFormat,Ee,ve,J.colorSpace),we=he(M);O&&ae(M)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,we,Ae,M.width,M.height):ae(M)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,we,Ae,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,Ae,M.width,M.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function me(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=r.get(M.depthTexture);te.__renderTarget=M,(!te.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const ee=te.__webglTexture,J=he(M);if(M.depthTexture.format===sr)ae(M)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ee,0,J):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ee,0);else if(M.depthTexture.format===or)ae(M)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ee,0,J):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ce(b){const M=r.get(b),O=b.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==b.depthTexture){const te=b.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),te){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,te.removeEventListener("dispose",ee)};te.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=te}if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const te=b.texture.mipmaps;te&&te.length>0?me(M.__webglFramebuffer[0],b):me(M.__webglFramebuffer,b)}else if(O){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]===void 0)M.__webglDepthbuffer[te]=a.createRenderbuffer(),ie(M.__webglDepthbuffer[te],b,!1);else{const ee=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[te];a.bindRenderbuffer(a.RENDERBUFFER,J),a.framebufferRenderbuffer(a.FRAMEBUFFER,ee,a.RENDERBUFFER,J)}}else{const te=b.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=a.createRenderbuffer(),ie(M.__webglDepthbuffer,b,!1);else{const ee=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,J),a.framebufferRenderbuffer(a.FRAMEBUFFER,ee,a.RENDERBUFFER,J)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function ne(b,M,O){const te=r.get(b);M!==void 0&&Z(te.__webglFramebuffer,b,b.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),O!==void 0&&ce(b)}function F(b){const M=b.texture,O=r.get(b),te=r.get(M);b.addEventListener("dispose",E);const ee=b.textures,J=b.isWebGLCubeRenderTarget===!0,Ee=ee.length>1;if(Ee||(te.__webglTexture===void 0&&(te.__webglTexture=a.createTexture()),te.__version=M.version,s.memory.textures++),J){O.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[ve]=[];for(let Ae=0;Ae<M.mipmaps.length;Ae++)O.__webglFramebuffer[ve][Ae]=a.createFramebuffer()}else O.__webglFramebuffer[ve]=a.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let ve=0;ve<M.mipmaps.length;ve++)O.__webglFramebuffer[ve]=a.createFramebuffer()}else O.__webglFramebuffer=a.createFramebuffer();if(Ee)for(let ve=0,Ae=ee.length;ve<Ae;ve++){const we=r.get(ee[ve]);we.__webglTexture===void 0&&(we.__webglTexture=a.createTexture(),s.memory.textures++)}if(b.samples>0&&ae(b)===!1){O.__webglMultisampledFramebuffer=a.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ve=0;ve<ee.length;ve++){const Ae=ee[ve];O.__webglColorRenderbuffer[ve]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,O.__webglColorRenderbuffer[ve]);const we=i.convert(Ae.format,Ae.colorSpace),fe=i.convert(Ae.type),xe=T(Ae.internalFormat,we,fe,Ae.colorSpace,b.isXRRenderTarget===!0),Te=he(b);a.renderbufferStorageMultisample(a.RENDERBUFFER,Te,xe,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ve,a.RENDERBUFFER,O.__webglColorRenderbuffer[ve])}a.bindRenderbuffer(a.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=a.createRenderbuffer(),ie(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(J){t.bindTexture(a.TEXTURE_CUBE_MAP,te.__webglTexture),k(a.TEXTURE_CUBE_MAP,M);for(let ve=0;ve<6;ve++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ae=0;Ae<M.mipmaps.length;Ae++)Z(O.__webglFramebuffer[ve][Ae],b,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ae);else Z(O.__webglFramebuffer[ve],b,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(M)&&p(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ve=0,Ae=ee.length;ve<Ae;ve++){const we=ee[ve],fe=r.get(we);let xe=a.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(xe=b.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(xe,fe.__webglTexture),k(xe,we),Z(O.__webglFramebuffer,b,we,a.COLOR_ATTACHMENT0+ve,xe,0),m(we)&&p(xe)}t.unbindTexture()}else{let ve=a.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ve=b.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(ve,te.__webglTexture),k(ve,M),M.mipmaps&&M.mipmaps.length>0)for(let Ae=0;Ae<M.mipmaps.length;Ae++)Z(O.__webglFramebuffer[Ae],b,M,a.COLOR_ATTACHMENT0,ve,Ae);else Z(O.__webglFramebuffer,b,M,a.COLOR_ATTACHMENT0,ve,0);m(M)&&p(ve),t.unbindTexture()}b.depthBuffer&&ce(b)}function be(b){const M=b.textures;for(let O=0,te=M.length;O<te;O++){const ee=M[O];if(m(ee)){const J=C(b),Ee=r.get(ee).__webglTexture;t.bindTexture(J,Ee),p(J),t.unbindTexture()}}}const pe=[],Se=[];function Me(b){if(b.samples>0){if(ae(b)===!1){const M=b.textures,O=b.width,te=b.height;let ee=a.COLOR_BUFFER_BIT;const J=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ee=r.get(b),ve=M.length>1;if(ve)for(let we=0;we<M.length;we++)t.bindFramebuffer(a.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,Ee.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Ae=b.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let we=0;we<M.length;we++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ee|=a.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ee|=a.STENCIL_BUFFER_BIT)),ve){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ee.__webglColorRenderbuffer[we]);const fe=r.get(M[we]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,fe,0)}a.blitFramebuffer(0,0,O,te,0,0,O,te,ee,a.NEAREST),c===!0&&(pe.length=0,Se.length=0,pe.push(a.COLOR_ATTACHMENT0+we),b.depthBuffer&&b.resolveDepthBuffer===!1&&(pe.push(J),Se.push(J),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Se)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ve)for(let we=0;we<M.length;we++){t.bindFramebuffer(a.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.RENDERBUFFER,Ee.__webglColorRenderbuffer[we]);const fe=r.get(M[we]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,Ee.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.TEXTURE_2D,fe,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const M=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[M])}}}function he(b){return Math.min(n.maxSamples,b.samples)}function ae(b){const M=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ge(b){const M=s.render.frame;u.get(b)!==M&&(u.set(b,M),b.update())}function ue(b,M){const O=b.colorSpace,te=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==Li&&O!==Dn&&($e.getTransfer(O)===at?(te!==en||ee!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function De(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=w,this.setTexture2D=q,this.setTexture2DArray=V,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=ne,this.setupRenderTarget=F,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=ae}function Lm(a,e){function t(r,n=Dn){let i;const s=$e.getTransfer(n);if(r===Sn)return a.UNSIGNED_BYTE;if(r===to)return a.UNSIGNED_SHORT_4_4_4_4;if(r===no)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Wl)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===Vl)return a.BYTE;if(r===Hl)return a.SHORT;if(r===rr)return a.UNSIGNED_SHORT;if(r===eo)return a.INT;if(r===$n)return a.UNSIGNED_INT;if(r===_n)return a.FLOAT;if(r===cr)return a.HALF_FLOAT;if(r===Xl)return a.ALPHA;if(r===Yl)return a.RGB;if(r===en)return a.RGBA;if(r===sr)return a.DEPTH_COMPONENT;if(r===or)return a.DEPTH_STENCIL;if(r===ql)return a.RED;if(r===io)return a.RED_INTEGER;if(r===jl)return a.RG;if(r===ro)return a.RG_INTEGER;if(r===ao)return a.RGBA_INTEGER;if(r===jr||r===Kr||r===Zr||r===Jr)if(s===at)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(r===jr)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Kr)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Zr)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Jr)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(r===jr)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Kr)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Zr)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Jr)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xs||r===Ss||r===Ms||r===ys)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(r===xs)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ss)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ms)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ys)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Es||r===Ts||r===bs)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(r===Es||r===Ts)return s===at?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(r===bs)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===As||r===ws||r===Rs||r===Cs||r===Us||r===Ds||r===Ps||r===Ls||r===Is||r===Fs||r===Ns||r===Os||r===Bs||r===ks)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(r===As)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ws)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rs)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Cs)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Us)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ds)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ps)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ls)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Is)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Fs)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ns)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Os)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bs)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ks)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qr||r===zs||r===Gs)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(r===Qr)return s===at?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zs)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Gs)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Kl||r===Vs||r===Hs||r===Ws)if(i=e.get("EXT_texture_compression_rgtc"),i!==null){if(r===Qr)return i.COMPRESSED_RED_RGTC1_EXT;if(r===Vs)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Hs)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ws)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ar?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:t}}class xc extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const Im=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Nm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new xc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Nn({vertexShader:Im,fragmentShader:Fm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yt(new oi(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Om extends Fi{constructor(e,t){super();const r=this;let n=null,i=1,s=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,_=null;const x=new Nm,m={},p=t.getContextAttributes();let C=null,T=null;const y=[],U=[],D=new et;let E=null;const S=new Wt;S.viewport=new ct;const g=new Wt;g.viewport=new ct;const v=[S,g],A=new rf;let w=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let K=y[I];return K===void 0&&(K=new Ka,y[I]=K),K.getTargetRaySpace()},this.getControllerGrip=function(I){let K=y[I];return K===void 0&&(K=new Ka,y[I]=K),K.getGripSpace()},this.getHand=function(I){let K=y[I];return K===void 0&&(K=new Ka,y[I]=K),K.getHandSpace()};function N(I){const K=U.indexOf(I.inputSource);if(K===-1)return;const H=y[K];H!==void 0&&(H.update(I.inputSource,I.frame,l||s),H.dispatchEvent({type:I.type,data:I.inputSource}))}function q(){n.removeEventListener("select",N),n.removeEventListener("selectstart",N),n.removeEventListener("selectend",N),n.removeEventListener("squeeze",N),n.removeEventListener("squeezestart",N),n.removeEventListener("squeezeend",N),n.removeEventListener("end",q),n.removeEventListener("inputsourceschange",V);for(let I=0;I<y.length;I++){const K=U[I];K!==null&&(U[I]=null,y[I].disconnect(K))}w=null,L=null,x.reset();for(const I in m)delete m[I];e.setRenderTarget(C),d=null,h=null,f=null,n=null,T=null,$.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(D.width,D.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){i=I,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(I){if(n=I,n!==null){if(C=e.getRenderTarget(),n.addEventListener("select",N),n.addEventListener("selectstart",N),n.addEventListener("selectend",N),n.addEventListener("squeeze",N),n.addEventListener("squeezestart",N),n.addEventListener("squeezeend",N),n.addEventListener("end",q),n.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&(f=new XRWebGLBinding(n,t)),f!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let H=null,Z=null,ie=null;p.depth&&(ie=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,H=p.stencil?or:sr,Z=p.stencil?ar:$n);const me={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:i};h=f.createProjectionLayer(me),n.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new ei(h.textureWidth,h.textureHeight,{format:en,type:Sn,depthTexture:new fc(h.textureWidth,h.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const H={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:i};d=new XRWebGLLayer(n,t,H),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new ei(d.framebufferWidth,d.framebufferHeight,{format:en,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await n.requestReferenceSpace(o),$.setContext(n),$.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function V(I){for(let K=0;K<I.removed.length;K++){const H=I.removed[K],Z=U.indexOf(H);Z>=0&&(U[Z]=null,y[Z].disconnect(H))}for(let K=0;K<I.added.length;K++){const H=I.added[K];let Z=U.indexOf(H);if(Z===-1){for(let me=0;me<y.length;me++)if(me>=U.length){U.push(H),Z=me;break}else if(U[me]===null){U[me]=H,Z=me;break}if(Z===-1)break}const ie=y[Z];ie&&ie.connect(H)}}const Y=new le,W=new le;function G(I,K,H){Y.setFromMatrixPosition(K.matrixWorld),W.setFromMatrixPosition(H.matrixWorld);const Z=Y.distanceTo(W),ie=K.projectionMatrix.elements,me=H.projectionMatrix.elements,ce=ie[14]/(ie[10]-1),ne=ie[14]/(ie[10]+1),F=(ie[9]+1)/ie[5],be=(ie[9]-1)/ie[5],pe=(ie[8]-1)/ie[0],Se=(me[8]+1)/me[0],Me=ce*pe,he=ce*Se,ae=Z/(-pe+Se),ge=ae*-pe;if(K.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(ge),I.translateZ(ae),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),ie[10]===-1)I.projectionMatrix.copy(K.projectionMatrix),I.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const ue=ce+ae,De=ne+ae,b=Me-ge,M=he+(Z-ge),O=F*ne/De*ue,te=be*ne/De*ue;I.projectionMatrix.makePerspective(b,M,O,te,ue,De),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function j(I,K){K===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(K.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(n===null)return;let K=I.near,H=I.far;x.texture!==null&&(x.depthNear>0&&(K=x.depthNear),x.depthFar>0&&(H=x.depthFar)),A.near=g.near=S.near=K,A.far=g.far=S.far=H,(w!==A.near||L!==A.far)&&(n.updateRenderState({depthNear:A.near,depthFar:A.far}),w=A.near,L=A.far),A.layers.mask=I.layers.mask|6,S.layers.mask=A.layers.mask&3,g.layers.mask=A.layers.mask&5;const Z=I.parent,ie=A.cameras;j(A,Z);for(let me=0;me<ie.length;me++)j(ie[me],Z);ie.length===2?G(A,S,g):A.projectionMatrix.copy(S.projectionMatrix),P(I,A,Z)};function P(I,K,H){H===null?I.matrix.copy(K.matrixWorld):(I.matrix.copy(H.matrixWorld),I.matrix.invert(),I.matrix.multiply(K.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(K.projectionMatrix),I.projectionMatrixInverse.copy(K.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Xs*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(I){c=I,h!==null&&(h.fixedFoveation=I),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=I)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(A)},this.getCameraTexture=function(I){return m[I]};let k=null;function X(I,K){if(u=K.getViewerPose(l||s),_=K,u!==null){const H=u.views;d!==null&&(e.setRenderTargetFramebuffer(T,d.framebuffer),e.setRenderTarget(T));let Z=!1;H.length!==A.cameras.length&&(A.cameras.length=0,Z=!0);for(let ne=0;ne<H.length;ne++){const F=H[ne];let be=null;if(d!==null)be=d.getViewport(F);else{const Se=f.getViewSubImage(h,F);be=Se.viewport,ne===0&&(e.setRenderTargetTextures(T,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(T))}let pe=v[ne];pe===void 0&&(pe=new Wt,pe.layers.enable(ne),pe.viewport=new ct,v[ne]=pe),pe.matrix.fromArray(F.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(F.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(be.x,be.y,be.width,be.height),ne===0&&(A.matrix.copy(pe.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Z===!0&&A.cameras.push(pe)}const ie=n.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&f){const ne=f.getDepthInformation(H[0]);ne&&ne.isValid&&ne.texture&&x.init(ne,n.renderState)}if(ie&&ie.includes("camera-access")&&(e.state.unbindTexture(),f))for(let ne=0;ne<H.length;ne++){const F=H[ne].camera;if(F){let be=m[F];be||(be=new xc,m[F]=be);const pe=f.getCameraImage(F);be.sourceTexture=pe}}}for(let H=0;H<y.length;H++){const Z=U[H],ie=y[H];Z!==null&&ie!==void 0&&ie.update(Z,K,l||s)}k&&k(I,K),K.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:K}),_=null}const $=new pc;$.setAnimationLoop(X),this.setAnimationLoop=function(I){k=I},this.dispose=function(){}}}const Vn=new Mn,Bm=new ht;function km(a,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function r(m,p){p.color.getRGB(m.fogColor.value,ac(a)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,C,T,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),f(m,p)):p.isMeshPhongMaterial?(i(m,p),u(m,p)):p.isMeshStandardMaterial?(i(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(i(m,p),_(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),x(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,C,T):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Pt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Pt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const C=e.get(p),T=C.envMap,y=C.envMapRotation;T&&(m.envMap.value=T,Vn.copy(y),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),m.envMapRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(Vn)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,C,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*C,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,C){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const C=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function zm(a,e,t,r){let n={},i={},s=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,T){const y=T.program;r.uniformBlockBinding(C,y)}function l(C,T){let y=n[C.id];y===void 0&&(_(C),y=u(C),n[C.id]=y,C.addEventListener("dispose",m));const U=T.program;r.updateUBOMapping(C,U);const D=e.render.frame;i[C.id]!==D&&(h(C),i[C.id]=D)}function u(C){const T=f();C.__bindingPointIndex=T;const y=a.createBuffer(),U=C.__size,D=C.usage;return a.bindBuffer(a.UNIFORM_BUFFER,y),a.bufferData(a.UNIFORM_BUFFER,U,D),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,T,y),y}function f(){for(let C=0;C<o;C++)if(s.indexOf(C)===-1)return s.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(C){const T=n[C.id],y=C.uniforms,U=C.__cache;a.bindBuffer(a.UNIFORM_BUFFER,T);for(let D=0,E=y.length;D<E;D++){const S=Array.isArray(y[D])?y[D]:[y[D]];for(let g=0,v=S.length;g<v;g++){const A=S[g];if(d(A,D,g,U)===!0){const w=A.__offset,L=Array.isArray(A.value)?A.value:[A.value];let N=0;for(let q=0;q<L.length;q++){const V=L[q],Y=x(V);typeof V=="number"||typeof V=="boolean"?(A.__data[0]=V,a.bufferSubData(a.UNIFORM_BUFFER,w+N,A.__data)):V.isMatrix3?(A.__data[0]=V.elements[0],A.__data[1]=V.elements[1],A.__data[2]=V.elements[2],A.__data[3]=0,A.__data[4]=V.elements[3],A.__data[5]=V.elements[4],A.__data[6]=V.elements[5],A.__data[7]=0,A.__data[8]=V.elements[6],A.__data[9]=V.elements[7],A.__data[10]=V.elements[8],A.__data[11]=0):(V.toArray(A.__data,N),N+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,w,A.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function d(C,T,y,U){const D=C.value,E=T+"_"+y;if(U[E]===void 0)return typeof D=="number"||typeof D=="boolean"?U[E]=D:U[E]=D.clone(),!0;{const S=U[E];if(typeof D=="number"||typeof D=="boolean"){if(S!==D)return U[E]=D,!0}else if(S.equals(D)===!1)return S.copy(D),!0}return!1}function _(C){const T=C.uniforms;let y=0;const U=16;for(let E=0,S=T.length;E<S;E++){const g=Array.isArray(T[E])?T[E]:[T[E]];for(let v=0,A=g.length;v<A;v++){const w=g[v],L=Array.isArray(w.value)?w.value:[w.value];for(let N=0,q=L.length;N<q;N++){const V=L[N],Y=x(V),W=y%U,G=W%Y.boundary,j=W+G;y+=G,j!==0&&U-j<Y.storage&&(y+=U-j),w.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=y,y+=Y.storage}}}const D=y%U;return D>0&&(y+=U-D),C.__size=y,C.__cache={},this}function x(C){const T={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(T.boundary=4,T.storage=4):C.isVector2?(T.boundary=8,T.storage=8):C.isVector3||C.isColor?(T.boundary=16,T.storage=12):C.isVector4?(T.boundary=16,T.storage=16):C.isMatrix3?(T.boundary=48,T.storage=48):C.isMatrix4?(T.boundary=64,T.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),T}function m(C){const T=C.target;T.removeEventListener("dispose",m);const y=s.indexOf(T.__bindingPointIndex);s.splice(y,1),a.deleteBuffer(n[T.id]),delete n[T.id],delete i[T.id]}function p(){for(const C in n)a.deleteBuffer(n[C]);s=[],n={},i={}}return{bind:c,update:l,dispose:p}}class Gm{constructor(e={}){const{canvas:t=Tu(),context:r=null,depth:n=!0,stencil:i=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=r.getContextAttributes().alpha}else d=s;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const C=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let U=!1;this._outputColorSpace=Ht;let D=0,E=0,S=null,g=-1,v=null;const A=new ct,w=new ct;let L=null;const N=new Qe(0);let q=0,V=t.width,Y=t.height,W=1,G=null,j=null;const P=new ct(0,0,V,Y),k=new ct(0,0,V,Y);let X=!1;const $=new cc;let I=!1,K=!1;const H=new ht,Z=new le,ie=new ct,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function ne(){return S===null?W:1}let F=r;function be(R,Q){return t.getContext(R,Q)}try{const R={alpha:!0,depth:n,stencil:i,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$s}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",_e,!1),F===null){const Q="webgl2";if(F=be(Q,R),F===null)throw be(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let pe,Se,Me,he,ae,ge,ue,De,b,M,O,te,ee,J,Ee,ve,Ae,we,fe,xe,Te,Ue,Re,Ge;function z(){pe=new Jd(F),pe.init(),Ue=new Lm(F,pe),Se=new Wd(F,pe,e,Ue),Me=new Dm(F,pe),Se.reversedDepthBuffer&&h&&Me.buffers.depth.setReversed(!0),he=new ep(F),ae=new vm,ge=new Pm(F,pe,Me,ae,Se,Ue,he),ue=new Yd(y),De=new Zd(y),b=new sf(F),Re=new Vd(F,b),M=new Qd(F,b,he,Re),O=new np(F,M,b,he),fe=new tp(F,Se,ge),ve=new Xd(ae),te=new _m(y,ue,De,pe,Se,Re,ve),ee=new km(y,ae),J=new Sm,Ee=new Am(pe),we=new Gd(y,ue,De,Me,O,d,c),Ae=new Cm(y,O,Se),Ge=new zm(F,he,Se,Me),xe=new Hd(F,pe,he),Te=new $d(F,pe,he),he.programs=te.programs,y.capabilities=Se,y.extensions=pe,y.properties=ae,y.renderLists=J,y.shadowMap=Ae,y.state=Me,y.info=he}z();const de=new Om(y,F);this.xr=de,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=pe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=pe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(V,Y,!1))},this.getSize=function(R){return R.set(V,Y)},this.setSize=function(R,Q,re=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=R,Y=Q,t.width=Math.floor(R*W),t.height=Math.floor(Q*W),re===!0&&(t.style.width=R+"px",t.style.height=Q+"px"),this.setViewport(0,0,R,Q)},this.getDrawingBufferSize=function(R){return R.set(V*W,Y*W).floor()},this.setDrawingBufferSize=function(R,Q,re){V=R,Y=Q,W=re,t.width=Math.floor(R*re),t.height=Math.floor(Q*re),this.setViewport(0,0,R,Q)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(P)},this.setViewport=function(R,Q,re,oe){R.isVector4?P.set(R.x,R.y,R.z,R.w):P.set(R,Q,re,oe),Me.viewport(A.copy(P).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(k)},this.setScissor=function(R,Q,re,oe){R.isVector4?k.set(R.x,R.y,R.z,R.w):k.set(R,Q,re,oe),Me.scissor(w.copy(k).multiplyScalar(W).round())},this.getScissorTest=function(){return X},this.setScissorTest=function(R){Me.setScissorTest(X=R)},this.setOpaqueSort=function(R){G=R},this.setTransparentSort=function(R){j=R},this.getClearColor=function(R){return R.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(R=!0,Q=!0,re=!0){let oe=0;if(R){let B=!1;if(S!==null){const Ce=S.texture.format;B=Ce===ao||Ce===ro||Ce===io}if(B){const Ce=S.texture.type,Ie=Ce===Sn||Ce===$n||Ce===rr||Ce===ar||Ce===to||Ce===no,ke=we.getClearColor(),Ne=we.getClearAlpha(),We=ke.r,Xe=ke.g,ze=ke.b;Ie?(_[0]=We,_[1]=Xe,_[2]=ze,_[3]=Ne,F.clearBufferuiv(F.COLOR,0,_)):(x[0]=We,x[1]=Xe,x[2]=ze,x[3]=Ne,F.clearBufferiv(F.COLOR,0,x))}else oe|=F.COLOR_BUFFER_BIT}Q&&(oe|=F.DEPTH_BUFFER_BIT),re&&(oe|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),we.dispose(),J.dispose(),Ee.dispose(),ae.dispose(),ue.dispose(),De.dispose(),O.dispose(),Re.dispose(),Ge.dispose(),te.dispose(),de.dispose(),de.removeEventListener("sessionstart",st),de.removeEventListener("sessionend",ut),gt.stop()};function ye(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const R=he.autoReset,Q=Ae.enabled,re=Ae.autoUpdate,oe=Ae.needsUpdate,B=Ae.type;z(),he.autoReset=R,Ae.enabled=Q,Ae.autoUpdate=re,Ae.needsUpdate=oe,Ae.type=B}function _e(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function se(R){const Q=R.target;Q.removeEventListener("dispose",se),Pe(Q)}function Pe(R){Oe(R),ae.remove(R)}function Oe(R){const Q=ae.get(R).programs;Q!==void 0&&(Q.forEach(function(re){te.releaseProgram(re)}),R.isShaderMaterial&&te.releaseShaderCache(R))}this.renderBufferDirect=function(R,Q,re,oe,B,Ce){Q===null&&(Q=me);const Ie=B.isMesh&&B.matrixWorld.determinant()<0,ke=ki(R,Q,re,oe,B);Me.setMaterial(oe,Ie);let Ne=re.index,We=1;if(oe.wireframe===!0){if(Ne=M.getWireframeAttribute(re),Ne===void 0)return;We=2}const Xe=re.drawRange,ze=re.attributes.position;let qe=Xe.start*We,tt=(Xe.start+Xe.count)*We;Ce!==null&&(qe=Math.max(qe,Ce.start*We),tt=Math.min(tt,(Ce.start+Ce.count)*We)),Ne!==null?(qe=Math.max(qe,0),tt=Math.min(tt,Ne.count)):ze!=null&&(qe=Math.max(qe,0),tt=Math.min(tt,ze.count));const ot=tt-qe;if(ot<0||ot===1/0)return;Re.setup(B,oe,ke,re,Ne);let rt,nt=xe;if(Ne!==null&&(rt=b.get(Ne),nt=Te,nt.setIndex(rt)),B.isMesh)oe.wireframe===!0?(Me.setLineWidth(oe.wireframeLinewidth*ne()),nt.setMode(F.LINES)):nt.setMode(F.TRIANGLES);else if(B.isLine){let He=oe.linewidth;He===void 0&&(He=1),Me.setLineWidth(He*ne()),B.isLineSegments?nt.setMode(F.LINES):B.isLineLoop?nt.setMode(F.LINE_LOOP):nt.setMode(F.LINE_STRIP)}else B.isPoints?nt.setMode(F.POINTS):B.isSprite&&nt.setMode(F.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Ri("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(pe.get("WEBGL_multi_draw"))nt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const He=B._multiDrawStarts,it=B._multiDrawCounts,Ke=B._multiDrawCount,pt=Ne?b.get(Ne).bytesPerElement:1,an=ae.get(oe).currentProgram.getUniforms();for(let St=0;St<Ke;St++)an.setValue(F,"_gl_DrawID",St),nt.render(He[St]/pt,it[St])}else if(B.isInstancedMesh)nt.renderInstances(qe,ot,B.count);else if(re.isInstancedBufferGeometry){const He=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,it=Math.min(re.instanceCount,He);nt.renderInstances(qe,ot,it)}else nt.render(qe,ot)};function Be(R,Q,re){R.transparent===!0&&R.side===on&&R.forceSinglePass===!1?(R.side=Pt,R.needsUpdate=!0,dt(R,Q,re),R.side=Fn,R.needsUpdate=!0,dt(R,Q,re),R.side=on):dt(R,Q,re)}this.compile=function(R,Q,re=null){re===null&&(re=R),p=Ee.get(re),p.init(Q),T.push(p),re.traverseVisible(function(B){B.isLight&&B.layers.test(Q.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),R!==re&&R.traverseVisible(function(B){B.isLight&&B.layers.test(Q.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const oe=new Set;return R.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const Ce=B.material;if(Ce)if(Array.isArray(Ce))for(let Ie=0;Ie<Ce.length;Ie++){const ke=Ce[Ie];Be(ke,re,B),oe.add(ke)}else Be(Ce,re,B),oe.add(Ce)}),p=T.pop(),oe},this.compileAsync=function(R,Q,re=null){const oe=this.compile(R,Q,re);return new Promise(B=>{function Ce(){if(oe.forEach(function(Ie){ae.get(Ie).currentProgram.isReady()&&oe.delete(Ie)}),oe.size===0){B(R);return}setTimeout(Ce,10)}pe.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Ve=null;function lt(R){Ve&&Ve(R)}function st(){gt.stop()}function ut(){gt.start()}const gt=new pc;gt.setAnimationLoop(lt),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(R){Ve=R,de.setAnimationLoop(R),R===null?gt.stop():gt.start()},de.addEventListener("sessionstart",st),de.addEventListener("sessionend",ut),this.render=function(R,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(Q),Q=de.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,Q,S),p=Ee.get(R,T.length),p.init(Q),T.push(p),H.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),$.setFromProjectionMatrix(H,ln,Q.reversedDepth),K=this.localClippingEnabled,I=ve.init(this.clippingPlanes,K),m=J.get(R,C.length),m.init(),C.push(m),de.enabled===!0&&de.isPresenting===!0){const Ce=y.xr.getDepthSensingMesh();Ce!==null&&Ot(Ce,Q,-1/0,y.sortObjects)}Ot(R,Q,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(G,j),ce=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,ce&&we.addToRenderList(m,R),this.info.render.frame++,I===!0&&ve.beginShadows();const re=p.state.shadowsArray;Ae.render(re,R,Q),I===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=m.opaque,B=m.transmissive;if(p.setupLights(),Q.isArrayCamera){const Ce=Q.cameras;if(B.length>0)for(let Ie=0,ke=Ce.length;Ie<ke;Ie++){const Ne=Ce[Ie];qt(oe,B,R,Ne)}ce&&we.render(R);for(let Ie=0,ke=Ce.length;Ie<ke;Ie++){const Ne=Ce[Ie];Bt(m,R,Ne,Ne.viewport)}}else B.length>0&&qt(oe,B,R,Q),ce&&we.render(R),Bt(m,R,Q);S!==null&&E===0&&(ge.updateMultisampleRenderTarget(S),ge.updateRenderTargetMipmap(S)),R.isScene===!0&&R.onAfterRender(y,R,Q),Re.resetDefaultState(),g=-1,v=null,T.pop(),T.length>0?(p=T[T.length-1],I===!0&&ve.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,C.pop(),C.length>0?m=C[C.length-1]:m=null};function Ot(R,Q,re,oe){if(R.visible===!1)return;if(R.layers.test(Q.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Q);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||$.intersectsSprite(R)){oe&&ie.setFromMatrixPosition(R.matrixWorld).applyMatrix4(H);const Ie=O.update(R),ke=R.material;ke.visible&&m.push(R,Ie,ke,re,ie.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||$.intersectsObject(R))){const Ie=O.update(R),ke=R.material;if(oe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ie.copy(R.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),ie.copy(Ie.boundingSphere.center)),ie.applyMatrix4(R.matrixWorld).applyMatrix4(H)),Array.isArray(ke)){const Ne=Ie.groups;for(let We=0,Xe=Ne.length;We<Xe;We++){const ze=Ne[We],qe=ke[ze.materialIndex];qe&&qe.visible&&m.push(R,Ie,qe,re,ie.z,ze)}}else ke.visible&&m.push(R,Ie,ke,re,ie.z,null)}}const Ce=R.children;for(let Ie=0,ke=Ce.length;Ie<ke;Ie++)Ot(Ce[Ie],Q,re,oe)}function Bt(R,Q,re,oe){const B=R.opaque,Ce=R.transmissive,Ie=R.transparent;p.setupLightsView(re),I===!0&&ve.setGlobalState(y.clippingPlanes,re),oe&&Me.viewport(A.copy(oe)),B.length>0&&kt(B,Q,re),Ce.length>0&&kt(Ce,Q,re),Ie.length>0&&kt(Ie,Q,re),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function qt(R,Q,re,oe){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[oe.id]===void 0&&(p.state.transmissionRenderTarget[oe.id]=new ei(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float")?cr:Sn,minFilter:Jn,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const Ce=p.state.transmissionRenderTarget[oe.id],Ie=oe.viewport||A;Ce.setSize(Ie.z*y.transmissionResolutionScale,Ie.w*y.transmissionResolutionScale);const ke=y.getRenderTarget(),Ne=y.getActiveCubeFace(),We=y.getActiveMipmapLevel();y.setRenderTarget(Ce),y.getClearColor(N),q=y.getClearAlpha(),q<1&&y.setClearColor(16777215,.5),y.clear(),ce&&we.render(re);const Xe=y.toneMapping;y.toneMapping=Ln;const ze=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),p.setupLightsView(oe),I===!0&&ve.setGlobalState(y.clippingPlanes,oe),kt(R,re,oe),ge.updateMultisampleRenderTarget(Ce),ge.updateRenderTargetMipmap(Ce),pe.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let tt=0,ot=Q.length;tt<ot;tt++){const rt=Q[tt],nt=rt.object,He=rt.geometry,it=rt.material,Ke=rt.group;if(it.side===on&&nt.layers.test(oe.layers)){const pt=it.side;it.side=Pt,it.needsUpdate=!0,zt(nt,re,oe,He,it,Ke),it.side=pt,it.needsUpdate=!0,qe=!0}}qe===!0&&(ge.updateMultisampleRenderTarget(Ce),ge.updateRenderTargetMipmap(Ce))}y.setRenderTarget(ke,Ne,We),y.setClearColor(N,q),ze!==void 0&&(oe.viewport=ze),y.toneMapping=Xe}function kt(R,Q,re){const oe=Q.isScene===!0?Q.overrideMaterial:null;for(let B=0,Ce=R.length;B<Ce;B++){const Ie=R[B],ke=Ie.object,Ne=Ie.geometry,We=Ie.group;let Xe=Ie.material;Xe.allowOverride===!0&&oe!==null&&(Xe=oe),ke.layers.test(re.layers)&&zt(ke,Q,re,Ne,Xe,We)}}function zt(R,Q,re,oe,B,Ce){R.onBeforeRender(y,Q,re,oe,B,Ce),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),B.onBeforeRender(y,Q,re,oe,R,Ce),B.transparent===!0&&B.side===on&&B.forceSinglePass===!1?(B.side=Pt,B.needsUpdate=!0,y.renderBufferDirect(re,Q,oe,B,R,Ce),B.side=Fn,B.needsUpdate=!0,y.renderBufferDirect(re,Q,oe,B,R,Ce),B.side=on):y.renderBufferDirect(re,Q,oe,B,R,Ce),R.onAfterRender(y,Q,re,oe,B,Ce)}function dt(R,Q,re){Q.isScene!==!0&&(Q=me);const oe=ae.get(R),B=p.state.lights,Ce=p.state.shadowsArray,Ie=B.state.version,ke=te.getParameters(R,B.state,Ce,Q,re),Ne=te.getProgramCacheKey(ke);let We=oe.programs;oe.environment=R.isMeshStandardMaterial?Q.environment:null,oe.fog=Q.fog,oe.envMap=(R.isMeshStandardMaterial?De:ue).get(R.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&R.envMap===null?Q.environmentRotation:R.envMapRotation,We===void 0&&(R.addEventListener("dispose",se),We=new Map,oe.programs=We);let Xe=We.get(Ne);if(Xe!==void 0){if(oe.currentProgram===Xe&&oe.lightsStateVersion===Ie)return Bi(R,ke),Xe}else ke.uniforms=te.getUniforms(R),R.onBeforeCompile(ke,y),Xe=te.acquireProgram(ke,Ne),We.set(Ne,Xe),oe.uniforms=ke.uniforms;const ze=oe.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ze.clippingPlanes=ve.uniform),Bi(R,ke),oe.needsLights=gr(R),oe.lightsStateVersion=Ie,oe.needsLights&&(ze.ambientLightColor.value=B.state.ambient,ze.lightProbe.value=B.state.probe,ze.directionalLights.value=B.state.directional,ze.directionalLightShadows.value=B.state.directionalShadow,ze.spotLights.value=B.state.spot,ze.spotLightShadows.value=B.state.spotShadow,ze.rectAreaLights.value=B.state.rectArea,ze.ltc_1.value=B.state.rectAreaLTC1,ze.ltc_2.value=B.state.rectAreaLTC2,ze.pointLights.value=B.state.point,ze.pointLightShadows.value=B.state.pointShadow,ze.hemisphereLights.value=B.state.hemi,ze.directionalShadowMap.value=B.state.directionalShadowMap,ze.directionalShadowMatrix.value=B.state.directionalShadowMatrix,ze.spotShadowMap.value=B.state.spotShadowMap,ze.spotLightMatrix.value=B.state.spotLightMatrix,ze.spotLightMap.value=B.state.spotLightMap,ze.pointShadowMap.value=B.state.pointShadowMap,ze.pointShadowMatrix.value=B.state.pointShadowMatrix),oe.currentProgram=Xe,oe.uniformsList=null,Xe}function rn(R){if(R.uniformsList===null){const Q=R.currentProgram.getUniforms();R.uniformsList=$r.seqWithValue(Q.seq,R.uniforms)}return R.uniformsList}function Bi(R,Q){const re=ae.get(R);re.outputColorSpace=Q.outputColorSpace,re.batching=Q.batching,re.batchingColor=Q.batchingColor,re.instancing=Q.instancing,re.instancingColor=Q.instancingColor,re.instancingMorph=Q.instancingMorph,re.skinning=Q.skinning,re.morphTargets=Q.morphTargets,re.morphNormals=Q.morphNormals,re.morphColors=Q.morphColors,re.morphTargetsCount=Q.morphTargetsCount,re.numClippingPlanes=Q.numClippingPlanes,re.numIntersection=Q.numClipIntersection,re.vertexAlphas=Q.vertexAlphas,re.vertexTangents=Q.vertexTangents,re.toneMapping=Q.toneMapping}function ki(R,Q,re,oe,B){Q.isScene!==!0&&(Q=me),ge.resetTextureUnits();const Ce=Q.fog,Ie=oe.isMeshStandardMaterial?Q.environment:null,ke=S===null?y.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Li,Ne=(oe.isMeshStandardMaterial?De:ue).get(oe.envMap||Ie),We=oe.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Xe=!!re.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),ze=!!re.morphAttributes.position,qe=!!re.morphAttributes.normal,tt=!!re.morphAttributes.color;let ot=Ln;oe.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(ot=y.toneMapping);const rt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,nt=rt!==void 0?rt.length:0,He=ae.get(oe),it=p.state.lights;if(I===!0&&(K===!0||R!==v)){const ft=R===v&&oe.id===g;ve.setState(oe,R,ft)}let Ke=!1;oe.version===He.__version?(He.needsLights&&He.lightsStateVersion!==it.state.version||He.outputColorSpace!==ke||B.isBatchedMesh&&He.batching===!1||!B.isBatchedMesh&&He.batching===!0||B.isBatchedMesh&&He.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&He.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&He.instancing===!1||!B.isInstancedMesh&&He.instancing===!0||B.isSkinnedMesh&&He.skinning===!1||!B.isSkinnedMesh&&He.skinning===!0||B.isInstancedMesh&&He.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&He.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&He.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&He.instancingMorph===!1&&B.morphTexture!==null||He.envMap!==Ne||oe.fog===!0&&He.fog!==Ce||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ve.numPlanes||He.numIntersection!==ve.numIntersection)||He.vertexAlphas!==We||He.vertexTangents!==Xe||He.morphTargets!==ze||He.morphNormals!==qe||He.morphColors!==tt||He.toneMapping!==ot||He.morphTargetsCount!==nt)&&(Ke=!0):(Ke=!0,He.__version=oe.version);let pt=He.currentProgram;Ke===!0&&(pt=dt(oe,Q,B));let an=!1,St=!1,un=!1;const Je=pt.getUniforms(),Rt=He.uniforms;if(Me.useProgram(pt.program)&&(an=!0,St=!0,un=!0),oe.id!==g&&(g=oe.id,St=!0),an||v!==R){Me.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Je.setValue(F,"projectionMatrix",R.projectionMatrix),Je.setValue(F,"viewMatrix",R.matrixWorldInverse);const yt=Je.map.cameraPosition;yt!==void 0&&yt.setValue(F,Z.setFromMatrixPosition(R.matrixWorld)),Se.logarithmicDepthBuffer&&Je.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Je.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),v!==R&&(v=R,St=!0,un=!0)}if(B.isSkinnedMesh){Je.setOptional(F,B,"bindMatrix"),Je.setOptional(F,B,"bindMatrixInverse");const ft=B.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),Je.setValue(F,"boneTexture",ft.boneTexture,ge))}B.isBatchedMesh&&(Je.setOptional(F,B,"batchingTexture"),Je.setValue(F,"batchingTexture",B._matricesTexture,ge),Je.setOptional(F,B,"batchingIdTexture"),Je.setValue(F,"batchingIdTexture",B._indirectTexture,ge),Je.setOptional(F,B,"batchingColorTexture"),B._colorsTexture!==null&&Je.setValue(F,"batchingColorTexture",B._colorsTexture,ge));const Mt=re.morphAttributes;if((Mt.position!==void 0||Mt.normal!==void 0||Mt.color!==void 0)&&fe.update(B,re,pt),(St||He.receiveShadow!==B.receiveShadow)&&(He.receiveShadow=B.receiveShadow,Je.setValue(F,"receiveShadow",B.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Rt.envMap.value=Ne,Rt.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&Q.environment!==null&&(Rt.envMapIntensity.value=Q.environmentIntensity),St&&(Je.setValue(F,"toneMappingExposure",y.toneMappingExposure),He.needsLights&&pa(Rt,un),Ce&&oe.fog===!0&&ee.refreshFogUniforms(Rt,Ce),ee.refreshMaterialUniforms(Rt,oe,W,Y,p.state.transmissionRenderTarget[R.id]),$r.upload(F,rn(He),Rt,ge)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&($r.upload(F,rn(He),Rt,ge),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Je.setValue(F,"center",B.center),Je.setValue(F,"modelViewMatrix",B.modelViewMatrix),Je.setValue(F,"normalMatrix",B.normalMatrix),Je.setValue(F,"modelMatrix",B.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const ft=oe.uniformsGroups;for(let yt=0,yn=ft.length;yt<yn;yt++){const Gt=ft[yt];Ge.update(Gt,pt),Ge.bind(Gt,pt)}}return pt}function pa(R,Q){R.ambientLightColor.needsUpdate=Q,R.lightProbe.needsUpdate=Q,R.directionalLights.needsUpdate=Q,R.directionalLightShadows.needsUpdate=Q,R.pointLights.needsUpdate=Q,R.pointLightShadows.needsUpdate=Q,R.spotLights.needsUpdate=Q,R.spotLightShadows.needsUpdate=Q,R.rectAreaLights.needsUpdate=Q,R.hemisphereLights.needsUpdate=Q}function gr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(R,Q,re){const oe=ae.get(R);oe.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),ae.get(R.texture).__webglTexture=Q,ae.get(R.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:re,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Q){const re=ae.get(R);re.__webglFramebuffer=Q,re.__useDefaultFramebuffer=Q===void 0};const li=F.createFramebuffer();this.setRenderTarget=function(R,Q=0,re=0){S=R,D=Q,E=re;let oe=!0,B=null,Ce=!1,Ie=!1;if(R){const Ne=ae.get(R);if(Ne.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(F.FRAMEBUFFER,null),oe=!1;else if(Ne.__webglFramebuffer===void 0)ge.setupRenderTarget(R);else if(Ne.__hasExternalTextures)ge.rebindTextures(R,ae.get(R.texture).__webglTexture,ae.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ze=R.depthTexture;if(Ne.__boundDepthTexture!==ze){if(ze!==null&&ae.has(ze)&&(R.width!==ze.image.width||R.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(R)}}const We=R.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ie=!0);const Xe=ae.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xe[Q])?B=Xe[Q][re]:B=Xe[Q],Ce=!0):R.samples>0&&ge.useMultisampledRTT(R)===!1?B=ae.get(R).__webglMultisampledFramebuffer:Array.isArray(Xe)?B=Xe[re]:B=Xe,A.copy(R.viewport),w.copy(R.scissor),L=R.scissorTest}else A.copy(P).multiplyScalar(W).floor(),w.copy(k).multiplyScalar(W).floor(),L=X;if(re!==0&&(B=li),Me.bindFramebuffer(F.FRAMEBUFFER,B)&&oe&&Me.drawBuffers(R,B),Me.viewport(A),Me.scissor(w),Me.setScissorTest(L),Ce){const Ne=ae.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ne.__webglTexture,re)}else if(Ie){const Ne=Q;for(let We=0;We<R.textures.length;We++){const Xe=ae.get(R.textures[We]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+We,Xe.__webglTexture,re,Ne)}}else if(R!==null&&re!==0){const Ne=ae.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ne.__webglTexture,re)}g=-1},this.readRenderTargetPixels=function(R,Q,re,oe,B,Ce,Ie,ke=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ae.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne){Me.bindFramebuffer(F.FRAMEBUFFER,Ne);try{const We=R.textures[ke],Xe=We.format,ze=We.type;if(!Se.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=R.width-oe&&re>=0&&re<=R.height-B&&(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ke),F.readPixels(Q,re,oe,B,Ue.convert(Xe),Ue.convert(ze),Ce))}finally{const We=S!==null?ae.get(S).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(R,Q,re,oe,B,Ce,Ie,ke=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=ae.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne)if(Q>=0&&Q<=R.width-oe&&re>=0&&re<=R.height-B){Me.bindFramebuffer(F.FRAMEBUFFER,Ne);const We=R.textures[ke],Xe=We.format,ze=We.type;if(!Se.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,qe),F.bufferData(F.PIXEL_PACK_BUFFER,Ce.byteLength,F.STREAM_READ),R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ke),F.readPixels(Q,re,oe,B,Ue.convert(Xe),Ue.convert(ze),0);const tt=S!==null?ae.get(S).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,tt);const ot=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await bu(F,ot,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,qe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ce),F.deleteBuffer(qe),F.deleteSync(ot),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Q=null,re=0){const oe=Math.pow(2,-re),B=Math.floor(R.image.width*oe),Ce=Math.floor(R.image.height*oe),Ie=Q!==null?Q.x:0,ke=Q!==null?Q.y:0;ge.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,re,0,0,Ie,ke,B,Ce),Me.unbindTexture()};const zi=F.createFramebuffer(),ma=F.createFramebuffer();this.copyTextureToTexture=function(R,Q,re=null,oe=null,B=0,Ce=null){Ce===null&&(B!==0?(Ri("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ce=B,B=0):Ce=0);let Ie,ke,Ne,We,Xe,ze,qe,tt,ot;const rt=R.isCompressedTexture?R.mipmaps[Ce]:R.image;if(re!==null)Ie=re.max.x-re.min.x,ke=re.max.y-re.min.y,Ne=re.isBox3?re.max.z-re.min.z:1,We=re.min.x,Xe=re.min.y,ze=re.isBox3?re.min.z:0;else{const Mt=Math.pow(2,-B);Ie=Math.floor(rt.width*Mt),ke=Math.floor(rt.height*Mt),R.isDataArrayTexture?Ne=rt.depth:R.isData3DTexture?Ne=Math.floor(rt.depth*Mt):Ne=1,We=0,Xe=0,ze=0}oe!==null?(qe=oe.x,tt=oe.y,ot=oe.z):(qe=0,tt=0,ot=0);const nt=Ue.convert(Q.format),He=Ue.convert(Q.type);let it;Q.isData3DTexture?(ge.setTexture3D(Q,0),it=F.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(ge.setTexture2DArray(Q,0),it=F.TEXTURE_2D_ARRAY):(ge.setTexture2D(Q,0),it=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Q.unpackAlignment);const Ke=F.getParameter(F.UNPACK_ROW_LENGTH),pt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),an=F.getParameter(F.UNPACK_SKIP_PIXELS),St=F.getParameter(F.UNPACK_SKIP_ROWS),un=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,rt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,rt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,We),F.pixelStorei(F.UNPACK_SKIP_ROWS,Xe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ze);const Je=R.isDataArrayTexture||R.isData3DTexture,Rt=Q.isDataArrayTexture||Q.isData3DTexture;if(R.isDepthTexture){const Mt=ae.get(R),ft=ae.get(Q),yt=ae.get(Mt.__renderTarget),yn=ae.get(ft.__renderTarget);Me.bindFramebuffer(F.READ_FRAMEBUFFER,yt.__webglFramebuffer),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let Gt=0;Gt<Ne;Gt++)Je&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ae.get(R).__webglTexture,B,ze+Gt),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ae.get(Q).__webglTexture,Ce,ot+Gt)),F.blitFramebuffer(We,Xe,Ie,ke,qe,tt,Ie,ke,F.DEPTH_BUFFER_BIT,F.NEAREST);Me.bindFramebuffer(F.READ_FRAMEBUFFER,null),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(B!==0||R.isRenderTargetTexture||ae.has(R)){const Mt=ae.get(R),ft=ae.get(Q);Me.bindFramebuffer(F.READ_FRAMEBUFFER,zi),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,ma);for(let yt=0;yt<Ne;yt++)Je?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Mt.__webglTexture,B,ze+yt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Mt.__webglTexture,B),Rt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ft.__webglTexture,Ce,ot+yt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ft.__webglTexture,Ce),B!==0?F.blitFramebuffer(We,Xe,Ie,ke,qe,tt,Ie,ke,F.COLOR_BUFFER_BIT,F.NEAREST):Rt?F.copyTexSubImage3D(it,Ce,qe,tt,ot+yt,We,Xe,Ie,ke):F.copyTexSubImage2D(it,Ce,qe,tt,We,Xe,Ie,ke);Me.bindFramebuffer(F.READ_FRAMEBUFFER,null),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Rt?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(it,Ce,qe,tt,ot,Ie,ke,Ne,nt,He,rt.data):Q.isCompressedArrayTexture?F.compressedTexSubImage3D(it,Ce,qe,tt,ot,Ie,ke,Ne,nt,rt.data):F.texSubImage3D(it,Ce,qe,tt,ot,Ie,ke,Ne,nt,He,rt):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ce,qe,tt,Ie,ke,nt,He,rt.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ce,qe,tt,rt.width,rt.height,nt,rt.data):F.texSubImage2D(F.TEXTURE_2D,Ce,qe,tt,Ie,ke,nt,He,rt);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ke),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,an),F.pixelStorei(F.UNPACK_SKIP_ROWS,St),F.pixelStorei(F.UNPACK_SKIP_IMAGES,un),Ce===0&&Q.generateMipmaps&&F.generateMipmap(it),Me.unbindTexture()},this.copyTextureToTexture3D=function(R,Q,re=null,oe=null,B=0){return Ri('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Q,re,oe,B)},this.initRenderTarget=function(R){ae.get(R).__webglFramebuffer===void 0&&ge.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ge.setTextureCube(R,0):R.isData3DTexture?ge.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ge.setTexture2DArray(R,0):ge.setTexture2D(R,0),Me.unbindTexture()},this.resetState=function(){D=0,E=0,S=null,Me.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}function Vm(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var ea={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/var Hm=ea.exports,El;function Wm(){return El||(El=1,(function(a,e){((t,r)=>{a.exports=r()})(Hm,function t(){var r=typeof self<"u"?self:typeof window<"u"?window:r!==void 0?r:{},n,i=!r.document&&!!r.postMessage,s=r.IS_PAPA_WORKER||!1,o={},c=0,l={};function u(S){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(g){var v=U(g);v.chunkSize=parseInt(v.chunkSize),g.step||g.chunk||(v.chunkSize=null),this._handle=new x(v),(this._handle.streamer=this)._config=v}).call(this,S),this.parseChunk=function(g,v){var A=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<A){let L=this._config.newline;L||(w=this._config.quoteChar||'"',L=this._handle.guessLineEndings(g,w)),g=[...g.split(L).slice(A)].join(L)}this.isFirstChunk&&E(this._config.beforeFirstChunk)&&(w=this._config.beforeFirstChunk(g))!==void 0&&(g=w),this.isFirstChunk=!1,this._halted=!1;var A=this._partialLine+g,w=(this._partialLine="",this._handle.parse(A,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(g=w.meta.cursor,A=(this._finished||(this._partialLine=A.substring(g-this._baseIndex),this._baseIndex=g),w&&w.data&&(this._rowCount+=w.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),s)r.postMessage({results:w,workerId:l.WORKER_ID,finished:A});else if(E(this._config.chunk)&&!v){if(this._config.chunk(w,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=w=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(w.data),this._completeResults.errors=this._completeResults.errors.concat(w.errors),this._completeResults.meta=w.meta),this._completed||!A||!E(this._config.complete)||w&&w.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),A||w&&w.meta.paused||this._nextChunk(),w}this._halted=!0},this._sendError=function(g){E(this._config.error)?this._config.error(g):s&&this._config.error&&r.postMessage({workerId:l.WORKER_ID,error:g,finished:!1})}}function f(S){var g;(S=S||{}).chunkSize||(S.chunkSize=l.RemoteChunkSize),u.call(this,S),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(v){this._input=v,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(g=new XMLHttpRequest,this._config.withCredentials&&(g.withCredentials=this._config.withCredentials),i||(g.onload=D(this._chunkLoaded,this),g.onerror=D(this._chunkError,this)),g.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var v,A=this._config.downloadRequestHeaders;for(v in A)g.setRequestHeader(v,A[v])}var w;this._config.chunkSize&&(w=this._start+this._config.chunkSize-1,g.setRequestHeader("Range","bytes="+this._start+"-"+w));try{g.send(this._config.downloadRequestBody)}catch(L){this._chunkError(L.message)}i&&g.status===0&&this._chunkError()}},this._chunkLoaded=function(){g.readyState===4&&(g.status<200||400<=g.status?this._chunkError():(this._start+=this._config.chunkSize||g.responseText.length,this._finished=!this._config.chunkSize||this._start>=(v=>(v=v.getResponseHeader("Content-Range"))!==null?parseInt(v.substring(v.lastIndexOf("/")+1)):-1)(g),this.parseChunk(g.responseText)))},this._chunkError=function(v){v=g.statusText||v,this._sendError(new Error(v))}}function h(S){(S=S||{}).chunkSize||(S.chunkSize=l.LocalChunkSize),u.call(this,S);var g,v,A=typeof FileReader<"u";this.stream=function(w){this._input=w,v=w.slice||w.webkitSlice||w.mozSlice,A?((g=new FileReader).onload=D(this._chunkLoaded,this),g.onerror=D(this._chunkError,this)):g=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var w=this._input,L=(this._config.chunkSize&&(L=Math.min(this._start+this._config.chunkSize,this._input.size),w=v.call(w,this._start,L)),g.readAsText(w,this._config.encoding));A||this._chunkLoaded({target:{result:L}})},this._chunkLoaded=function(w){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(w.target.result)},this._chunkError=function(){this._sendError(g.error)}}function d(S){var g;u.call(this,S=S||{}),this.stream=function(v){return g=v,this._nextChunk()},this._nextChunk=function(){var v,A;if(!this._finished)return v=this._config.chunkSize,g=v?(A=g.substring(0,v),g.substring(v)):(A=g,""),this._finished=!g,this.parseChunk(A)}}function _(S){u.call(this,S=S||{});var g=[],v=!0,A=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(w){this._input=w,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){A&&g.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),g.length?this.parseChunk(g.shift()):v=!0},this._streamData=D(function(w){try{g.push(typeof w=="string"?w:w.toString(this._config.encoding)),v&&(v=!1,this._checkIsFinished(),this.parseChunk(g.shift()))}catch(L){this._streamError(L)}},this),this._streamError=D(function(w){this._streamCleanUp(),this._sendError(w)},this),this._streamEnd=D(function(){this._streamCleanUp(),A=!0,this._streamData("")},this),this._streamCleanUp=D(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function x(S){var g,v,A,w,L=Math.pow(2,53),N=-L,q=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,V=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,Y=this,W=0,G=0,j=!1,P=!1,k=[],X={data:[],errors:[],meta:{}};function $(Z){return S.skipEmptyLines==="greedy"?Z.join("").trim()==="":Z.length===1&&Z[0].length===0}function I(){if(X&&A&&(H("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+l.DefaultDelimiter+"'"),A=!1),S.skipEmptyLines&&(X.data=X.data.filter(function(ne){return!$(ne)})),K()){let ne=function(F,be){E(S.transformHeader)&&(F=S.transformHeader(F,be)),k.push(F)};var ce=ne;if(X)if(Array.isArray(X.data[0])){for(var Z=0;K()&&Z<X.data.length;Z++)X.data[Z].forEach(ne);X.data.splice(0,1)}else X.data.forEach(ne)}function ie(ne,F){for(var be=S.header?{}:[],pe=0;pe<ne.length;pe++){var Se=pe,Me=ne[pe],Me=((he,ae)=>(ge=>(S.dynamicTypingFunction&&S.dynamicTyping[ge]===void 0&&(S.dynamicTyping[ge]=S.dynamicTypingFunction(ge)),(S.dynamicTyping[ge]||S.dynamicTyping)===!0))(he)?ae==="true"||ae==="TRUE"||ae!=="false"&&ae!=="FALSE"&&((ge=>{if(q.test(ge)&&(ge=parseFloat(ge),N<ge&&ge<L))return 1})(ae)?parseFloat(ae):V.test(ae)?new Date(ae):ae===""?null:ae):ae)(Se=S.header?pe>=k.length?"__parsed_extra":k[pe]:Se,Me=S.transform?S.transform(Me,Se):Me);Se==="__parsed_extra"?(be[Se]=be[Se]||[],be[Se].push(Me)):be[Se]=Me}return S.header&&(pe>k.length?H("FieldMismatch","TooManyFields","Too many fields: expected "+k.length+" fields but parsed "+pe,G+F):pe<k.length&&H("FieldMismatch","TooFewFields","Too few fields: expected "+k.length+" fields but parsed "+pe,G+F)),be}var me;X&&(S.header||S.dynamicTyping||S.transform)&&(me=1,!X.data.length||Array.isArray(X.data[0])?(X.data=X.data.map(ie),me=X.data.length):X.data=ie(X.data,0),S.header&&X.meta&&(X.meta.fields=k),G+=me)}function K(){return S.header&&k.length===0}function H(Z,ie,me,ce){Z={type:Z,code:ie,message:me},ce!==void 0&&(Z.row=ce),X.errors.push(Z)}E(S.step)&&(w=S.step,S.step=function(Z){X=Z,K()?I():(I(),X.data.length!==0&&(W+=Z.data.length,S.preview&&W>S.preview?v.abort():(X.data=X.data[0],w(X,Y))))}),this.parse=function(Z,ie,me){var ce=S.quoteChar||'"',ce=(S.newline||(S.newline=this.guessLineEndings(Z,ce)),A=!1,S.delimiter?E(S.delimiter)&&(S.delimiter=S.delimiter(Z),X.meta.delimiter=S.delimiter):((ce=((ne,F,be,pe,Se)=>{var Me,he,ae,ge;Se=Se||[",","	","|",";",l.RECORD_SEP,l.UNIT_SEP];for(var ue=0;ue<Se.length;ue++){for(var De,b=Se[ue],M=0,O=0,te=0,ee=(ae=void 0,new p({comments:pe,delimiter:b,newline:F,preview:10}).parse(ne)),J=0;J<ee.data.length;J++)be&&$(ee.data[J])?te++:(De=ee.data[J].length,O+=De,ae===void 0?ae=De:0<De&&(M+=Math.abs(De-ae),ae=De));0<ee.data.length&&(O/=ee.data.length-te),(he===void 0||M<=he)&&(ge===void 0||ge<O)&&1.99<O&&(he=M,Me=b,ge=O)}return{successful:!!(S.delimiter=Me),bestDelimiter:Me}})(Z,S.newline,S.skipEmptyLines,S.comments,S.delimitersToGuess)).successful?S.delimiter=ce.bestDelimiter:(A=!0,S.delimiter=l.DefaultDelimiter),X.meta.delimiter=S.delimiter),U(S));return S.preview&&S.header&&ce.preview++,g=Z,v=new p(ce),X=v.parse(g,ie,me),I(),j?{meta:{paused:!0}}:X||{meta:{paused:!1}}},this.paused=function(){return j},this.pause=function(){j=!0,v.abort(),g=E(S.chunk)?"":g.substring(v.getCharIndex())},this.resume=function(){Y.streamer._halted?(j=!1,Y.streamer.parseChunk(g,!0)):setTimeout(Y.resume,3)},this.aborted=function(){return P},this.abort=function(){P=!0,v.abort(),X.meta.aborted=!0,E(S.complete)&&S.complete(X),g=""},this.guessLineEndings=function(ne,ce){ne=ne.substring(0,1048576);var ce=new RegExp(m(ce)+"([^]*?)"+m(ce),"gm"),me=(ne=ne.replace(ce,"")).split("\r"),ce=ne.split(`
`),ne=1<ce.length&&ce[0].length<me[0].length;if(me.length===1||ne)return`
`;for(var F=0,be=0;be<me.length;be++)me[be][0]===`
`&&F++;return F>=me.length/2?`\r
`:"\r"}}function m(S){return S.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function p(S){var g=(S=S||{}).delimiter,v=S.newline,A=S.comments,w=S.step,L=S.preview,N=S.fastMode,q=null,V=!1,Y=S.quoteChar==null?'"':S.quoteChar,W=Y;if(S.escapeChar!==void 0&&(W=S.escapeChar),(typeof g!="string"||-1<l.BAD_DELIMITERS.indexOf(g))&&(g=","),A===g)throw new Error("Comment character same as delimiter");A===!0?A="#":(typeof A!="string"||-1<l.BAD_DELIMITERS.indexOf(A))&&(A=!1),v!==`
`&&v!=="\r"&&v!==`\r
`&&(v=`
`);var G=0,j=!1;this.parse=function(P,k,X){if(typeof P!="string")throw new Error("Input must be a string");var $=P.length,I=g.length,K=v.length,H=A.length,Z=E(w),ie=[],me=[],ce=[],ne=G=0;if(!P)return M();if(N||N!==!1&&P.indexOf(Y)===-1){for(var F=P.split(v),be=0;be<F.length;be++){if(ce=F[be],G+=ce.length,be!==F.length-1)G+=v.length;else if(X)return M();if(!A||ce.substring(0,H)!==A){if(Z){if(ie=[],ge(ce.split(g)),O(),j)return M()}else ge(ce.split(g));if(L&&L<=be)return ie=ie.slice(0,L),M(!0)}}return M()}for(var pe=P.indexOf(g,G),Se=P.indexOf(v,G),Me=new RegExp(m(W)+m(Y),"g"),he=P.indexOf(Y,G);;)if(P[G]===Y)for(he=G,G++;;){if((he=P.indexOf(Y,he+1))===-1)return X||me.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:ie.length,index:G}),De();if(he===$-1)return De(P.substring(G,he).replace(Me,Y));if(Y===W&&P[he+1]===W)he++;else if(Y===W||he===0||P[he-1]!==W){pe!==-1&&pe<he+1&&(pe=P.indexOf(g,he+1));var ae=ue((Se=Se!==-1&&Se<he+1?P.indexOf(v,he+1):Se)===-1?pe:Math.min(pe,Se));if(P.substr(he+1+ae,I)===g){ce.push(P.substring(G,he).replace(Me,Y)),P[G=he+1+ae+I]!==Y&&(he=P.indexOf(Y,G)),pe=P.indexOf(g,G),Se=P.indexOf(v,G);break}if(ae=ue(Se),P.substring(he+1+ae,he+1+ae+K)===v){if(ce.push(P.substring(G,he).replace(Me,Y)),b(he+1+ae+K),pe=P.indexOf(g,G),he=P.indexOf(Y,G),Z&&(O(),j))return M();if(L&&ie.length>=L)return M(!0);break}me.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:ie.length,index:G}),he++}}else if(A&&ce.length===0&&P.substring(G,G+H)===A){if(Se===-1)return M();G=Se+K,Se=P.indexOf(v,G),pe=P.indexOf(g,G)}else if(pe!==-1&&(pe<Se||Se===-1))ce.push(P.substring(G,pe)),G=pe+I,pe=P.indexOf(g,G);else{if(Se===-1)break;if(ce.push(P.substring(G,Se)),b(Se+K),Z&&(O(),j))return M();if(L&&ie.length>=L)return M(!0)}return De();function ge(te){ie.push(te),ne=G}function ue(te){var ee=0;return ee=te!==-1&&(te=P.substring(he+1,te))&&te.trim()===""?te.length:ee}function De(te){return X||(te===void 0&&(te=P.substring(G)),ce.push(te),G=$,ge(ce),Z&&O()),M()}function b(te){G=te,ge(ce),ce=[],Se=P.indexOf(v,G)}function M(te){if(S.header&&!k&&ie.length&&!V){var ee=ie[0],J=Object.create(null),Ee=new Set(ee);let ve=!1;for(let Ae=0;Ae<ee.length;Ae++){let we=ee[Ae];if(J[we=E(S.transformHeader)?S.transformHeader(we,Ae):we]){let fe,xe=J[we];for(;fe=we+"_"+xe,xe++,Ee.has(fe););Ee.add(fe),ee[Ae]=fe,J[we]++,ve=!0,(q=q===null?{}:q)[fe]=we}else J[we]=1,ee[Ae]=we;Ee.add(we)}ve&&console.warn("Duplicate headers found and renamed."),V=!0}return{data:ie,errors:me,meta:{delimiter:g,linebreak:v,aborted:j,truncated:!!te,cursor:ne+(k||0),renamedHeaders:q}}}function O(){w(M()),ie=[],me=[]}},this.abort=function(){j=!0},this.getCharIndex=function(){return G}}function C(S){var g=S.data,v=o[g.workerId],A=!1;if(g.error)v.userError(g.error,g.file);else if(g.results&&g.results.data){var w={abort:function(){A=!0,T(g.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(E(v.userStep)){for(var L=0;L<g.results.data.length&&(v.userStep({data:g.results.data[L],errors:g.results.errors,meta:g.results.meta},w),!A);L++);delete g.results}else E(v.userChunk)&&(v.userChunk(g.results,w,g.file),delete g.results)}g.finished&&!A&&T(g.workerId,g.results)}function T(S,g){var v=o[S];E(v.userComplete)&&v.userComplete(g),v.terminate(),delete o[S]}function y(){throw new Error("Not implemented.")}function U(S){if(typeof S!="object"||S===null)return S;var g,v=Array.isArray(S)?[]:{};for(g in S)v[g]=U(S[g]);return v}function D(S,g){return function(){S.apply(g,arguments)}}function E(S){return typeof S=="function"}return l.parse=function(S,g){var v=(g=g||{}).dynamicTyping||!1;if(E(v)&&(g.dynamicTypingFunction=v,v={}),g.dynamicTyping=v,g.transform=!!E(g.transform)&&g.transform,!g.worker||!l.WORKERS_SUPPORTED)return v=null,l.NODE_STREAM_INPUT,typeof S=="string"?(S=(A=>A.charCodeAt(0)!==65279?A:A.slice(1))(S),v=new(g.download?f:d)(g)):S.readable===!0&&E(S.read)&&E(S.on)?v=new _(g):(r.File&&S instanceof File||S instanceof Object)&&(v=new h(g)),v.stream(S);(v=(()=>{var A;return!!l.WORKERS_SUPPORTED&&(A=(()=>{var w=r.URL||r.webkitURL||null,L=t.toString();return l.BLOB_URL||(l.BLOB_URL=w.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",L,")();"],{type:"text/javascript"})))})(),(A=new r.Worker(A)).onmessage=C,A.id=c++,o[A.id]=A)})()).userStep=g.step,v.userChunk=g.chunk,v.userComplete=g.complete,v.userError=g.error,g.step=E(g.step),g.chunk=E(g.chunk),g.complete=E(g.complete),g.error=E(g.error),delete g.worker,v.postMessage({input:S,config:g,workerId:v.id})},l.unparse=function(S,g){var v=!1,A=!0,w=",",L=`\r
`,N='"',q=N+N,V=!1,Y=null,W=!1,G=((()=>{if(typeof g=="object"){if(typeof g.delimiter!="string"||l.BAD_DELIMITERS.filter(function(k){return g.delimiter.indexOf(k)!==-1}).length||(w=g.delimiter),typeof g.quotes!="boolean"&&typeof g.quotes!="function"&&!Array.isArray(g.quotes)||(v=g.quotes),typeof g.skipEmptyLines!="boolean"&&typeof g.skipEmptyLines!="string"||(V=g.skipEmptyLines),typeof g.newline=="string"&&(L=g.newline),typeof g.quoteChar=="string"&&(N=g.quoteChar),typeof g.header=="boolean"&&(A=g.header),Array.isArray(g.columns)){if(g.columns.length===0)throw new Error("Option columns is empty");Y=g.columns}g.escapeChar!==void 0&&(q=g.escapeChar+N),g.escapeFormulae instanceof RegExp?W=g.escapeFormulae:typeof g.escapeFormulae=="boolean"&&g.escapeFormulae&&(W=/^[=+\-@\t\r].*$/)}})(),new RegExp(m(N),"g"));if(typeof S=="string"&&(S=JSON.parse(S)),Array.isArray(S)){if(!S.length||Array.isArray(S[0]))return j(null,S,V);if(typeof S[0]=="object")return j(Y||Object.keys(S[0]),S,V)}else if(typeof S=="object")return typeof S.data=="string"&&(S.data=JSON.parse(S.data)),Array.isArray(S.data)&&(S.fields||(S.fields=S.meta&&S.meta.fields||Y),S.fields||(S.fields=Array.isArray(S.data[0])?S.fields:typeof S.data[0]=="object"?Object.keys(S.data[0]):[]),Array.isArray(S.data[0])||typeof S.data[0]=="object"||(S.data=[S.data])),j(S.fields||[],S.data||[],V);throw new Error("Unable to serialize unrecognized input");function j(k,X,$){var I="",K=(typeof k=="string"&&(k=JSON.parse(k)),typeof X=="string"&&(X=JSON.parse(X)),Array.isArray(k)&&0<k.length),H=!Array.isArray(X[0]);if(K&&A){for(var Z=0;Z<k.length;Z++)0<Z&&(I+=w),I+=P(k[Z],Z);0<X.length&&(I+=L)}for(var ie=0;ie<X.length;ie++){var me=(K?k:X[ie]).length,ce=!1,ne=K?Object.keys(X[ie]).length===0:X[ie].length===0;if($&&!K&&(ce=$==="greedy"?X[ie].join("").trim()==="":X[ie].length===1&&X[ie][0].length===0),$==="greedy"&&K){for(var F=[],be=0;be<me;be++){var pe=H?k[be]:be;F.push(X[ie][pe])}ce=F.join("").trim()===""}if(!ce){for(var Se=0;Se<me;Se++){0<Se&&!ne&&(I+=w);var Me=K&&H?k[Se]:Se;I+=P(X[ie][Me],Se)}ie<X.length-1&&(!$||0<me&&!ne)&&(I+=L)}}return I}function P(k,X){var $,I;return k==null?"":k.constructor===Date?JSON.stringify(k).slice(1,25):(I=!1,W&&typeof k=="string"&&W.test(k)&&(k="'"+k,I=!0),$=k.toString().replace(G,q),(I=I||v===!0||typeof v=="function"&&v(k,X)||Array.isArray(v)&&v[X]||((K,H)=>{for(var Z=0;Z<H.length;Z++)if(-1<K.indexOf(H[Z]))return!0;return!1})($,l.BAD_DELIMITERS)||-1<$.indexOf(w)||$.charAt(0)===" "||$.charAt($.length-1)===" ")?N+$+N:$)}},l.RECORD_SEP="",l.UNIT_SEP="",l.BYTE_ORDER_MARK="\uFEFF",l.BAD_DELIMITERS=["\r",`
`,'"',l.BYTE_ORDER_MARK],l.WORKERS_SUPPORTED=!i&&!!r.Worker,l.NODE_STREAM_INPUT=1,l.LocalChunkSize=10485760,l.RemoteChunkSize=5242880,l.DefaultDelimiter=",",l.Parser=p,l.ParserHandle=x,l.NetworkStreamer=f,l.FileStreamer=h,l.StringStreamer=d,l.ReadableStreamStreamer=_,r.jQuery&&((n=r.jQuery).fn.parse=function(S){var g=S.config||{},v=[];return this.each(function(L){if(!(n(this).prop("tagName").toUpperCase()==="INPUT"&&n(this).attr("type").toLowerCase()==="file"&&r.FileReader)||!this.files||this.files.length===0)return!0;for(var N=0;N<this.files.length;N++)v.push({file:this.files[N],inputElem:this,instanceConfig:n.extend({},g)})}),A(),this;function A(){if(v.length===0)E(S.complete)&&S.complete();else{var L,N,q,V,Y=v[0];if(E(S.before)){var W=S.before(Y.file,Y.inputElem);if(typeof W=="object"){if(W.action==="abort")return L="AbortError",N=Y.file,q=Y.inputElem,V=W.reason,void(E(S.error)&&S.error({name:L},N,q,V));if(W.action==="skip")return void w();typeof W.config=="object"&&(Y.instanceConfig=n.extend(Y.instanceConfig,W.config))}else if(W==="skip")return void w()}var G=Y.instanceConfig.complete;Y.instanceConfig.complete=function(j){E(G)&&G(j,Y.file,Y.inputElem),w()},l.parse(Y.file,Y.instanceConfig)}}function w(){v.splice(0,1),A()}}),s&&(r.onmessage=function(S){S=S.data,l.WORKER_ID===void 0&&S&&(l.WORKER_ID=S.workerId),typeof S.input=="string"?r.postMessage({workerId:l.WORKER_ID,results:l.parse(S.input,S.config),finished:!0}):(r.File&&S.input instanceof File||S.input instanceof Object)&&(S=l.parse(S.input,S.config))&&r.postMessage({workerId:l.WORKER_ID,results:S,finished:!0})}),(f.prototype=Object.create(u.prototype)).constructor=f,(h.prototype=Object.create(u.prototype)).constructor=h,(d.prototype=Object.create(d.prototype)).constructor=d,(_.prototype=Object.create(u.prototype)).constructor=_,l})})(ea)),ea.exports}var Xm=Wm();const Ym=Vm(Xm);function qm(){var a=Object.create(null);function e(n,i){var s=n.id,o=n.name,c=n.dependencies;c===void 0&&(c=[]);var l=n.init;l===void 0&&(l=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!a[s])try{c=c.map(function(h){return h&&h.isWorkerModule&&(e(h,function(d){if(d instanceof Error)throw d}),h=a[h.id].value),h}),l=r("<"+o+">.init",l),u&&(u=r("<"+o+">.getTransferables",u));var f=null;typeof l=="function"?f=l.apply(void 0,c):console.error("worker module init function failed to rehydrate"),a[s]={id:s,value:f,getTransferables:u},i(f)}catch(h){h&&h.noLog||console.error(h),i(h)}}function t(n,i){var s,o=n.id,c=n.args;(!a[o]||typeof a[o].value!="function")&&i(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var l=(s=a[o]).value.apply(s,c);l&&typeof l.then=="function"?l.then(u,function(f){return i(f instanceof Error?f:new Error(""+f))}):u(l)}catch(f){i(f)}function u(f){try{var h=a[o].getTransferables&&a[o].getTransferables(f);(!h||!Array.isArray(h)||!h.length)&&(h=void 0),i(f,h)}catch(d){console.error(d),i(d)}}}function r(n,i){var s=void 0;self.troikaDefine=function(c){return s=c};var o=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+i+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(c){console.error(c)}return URL.revokeObjectURL(o),delete self.troikaDefine,s}self.addEventListener("message",function(n){var i=n.data,s=i.messageId,o=i.action,c=i.data;try{o==="registerModule"&&e(c,function(l){l instanceof Error?postMessage({messageId:s,success:!1,error:l.message}):postMessage({messageId:s,success:!0,result:{isCallable:typeof l=="function"}})}),o==="callModule"&&t(c,function(l,u){l instanceof Error?postMessage({messageId:s,success:!1,error:l.message}):postMessage({messageId:s,success:!0,result:l},u||void 0)})}catch(l){postMessage({messageId:s,success:!1,error:l.stack})}})}function jm(a){var e=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=a.dependencies,r=a.init;t=Array.isArray(t)?t.map(function(i){return i&&(i=i.onMainThread||i,i._getInitResult&&(i=i._getInitResult())),i}):[];var n=Promise.all(t).then(function(i){return r.apply(null,i)});return e._getInitResult=function(){return n},n},e}var Sc=function(){var a=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),a=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return Sc=function(){return a},a},Km=0,Zm=0,is=!1,nr=Object.create(null),ir=Object.create(null),js=Object.create(null);function Oi(a){if((!a||typeof a.init!="function")&&!is)throw new Error("requires `options.init` function");var e=a.dependencies,t=a.init,r=a.getTransferables,n=a.workerId,i=jm(a);n==null&&(n="#default");var s="workerModule"+ ++Km,o=a.name||s,c=null;e=e&&e.map(function(u){return typeof u=="function"&&!u.workerModuleData&&(is=!0,u=Oi({workerId:n,name:"<"+o+"> function dependency: "+u.name,init:`function(){return (
`+ta(u)+`
)}`}),is=!1),u&&u.workerModuleData&&(u=u.workerModuleData),u});function l(){for(var u=[],f=arguments.length;f--;)u[f]=arguments[f];if(!Sc())return i.apply(void 0,u);if(!c){c=Tl(n,"registerModule",l.workerModuleData);var h=function(){c=null,ir[n].delete(h)};(ir[n]||(ir[n]=new Set)).add(h)}return c.then(function(d){var _=d.isCallable;if(_)return Tl(n,"callModule",{id:s,args:u});throw new Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:s,name:o,dependencies:e,init:ta(t),getTransferables:r&&ta(r)},l.onMainThread=i,l}function Jm(a){ir[a]&&ir[a].forEach(function(e){e()}),nr[a]&&(nr[a].terminate(),delete nr[a])}function ta(a){var e=a.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function Qm(a){var e=nr[a];if(!e){var t=ta(qm);e=nr[a]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+a.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(r){var n=r.data,i=n.messageId,s=js[i];if(!s)throw new Error("WorkerModule response with empty or unknown messageId");delete js[i],s(n)}}return e}function Tl(a,e,t){return new Promise(function(r,n){var i=++Zm;js[i]=function(s){s.success?r(s.result):n(new Error("Error in worker "+e+" call: "+s.error))},Qm(a).postMessage({messageId:i,action:e,data:t})})}function Mc(){var a=(function(e){function t(G,j,P,k,X,$,I,K){var H=1-I;K.x=H*H*G+2*H*I*P+I*I*X,K.y=H*H*j+2*H*I*k+I*I*$}function r(G,j,P,k,X,$,I,K,H,Z){var ie=1-H;Z.x=ie*ie*ie*G+3*ie*ie*H*P+3*ie*H*H*X+H*H*H*I,Z.y=ie*ie*ie*j+3*ie*ie*H*k+3*ie*H*H*$+H*H*H*K}function n(G,j){for(var P=/([MLQCZ])([^MLQCZ]*)/g,k,X,$,I,K;k=P.exec(G);){var H=k[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(Z){return parseFloat(Z)});switch(k[1]){case"M":I=X=H[0],K=$=H[1];break;case"L":(H[0]!==I||H[1]!==K)&&j("L",I,K,I=H[0],K=H[1]);break;case"Q":{j("Q",I,K,I=H[2],K=H[3],H[0],H[1]);break}case"C":{j("C",I,K,I=H[4],K=H[5],H[0],H[1],H[2],H[3]);break}case"Z":(I!==X||K!==$)&&j("L",I,K,X,$);break}}}function i(G,j,P){P===void 0&&(P=16);var k={x:0,y:0};n(G,function(X,$,I,K,H,Z,ie,me,ce){switch(X){case"L":j($,I,K,H);break;case"Q":{for(var ne=$,F=I,be=1;be<P;be++)t($,I,Z,ie,K,H,be/(P-1),k),j(ne,F,k.x,k.y),ne=k.x,F=k.y;break}case"C":{for(var pe=$,Se=I,Me=1;Me<P;Me++)r($,I,Z,ie,me,ce,K,H,Me/(P-1),k),j(pe,Se,k.x,k.y),pe=k.x,Se=k.y;break}}})}var s="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",c=new WeakMap,l={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(G,j){var P=G.getContext?G.getContext("webgl",l):G,k=c.get(P);if(!k){let pe=function(ue){var De=$[ue];if(!De&&(De=$[ue]=P.getExtension(ue),!De))throw new Error(ue+" not supported");return De},Se=function(ue,De){var b=P.createShader(De);return P.shaderSource(b,ue),P.compileShader(b),b},Me=function(ue,De,b,M){if(!I[ue]){var O={},te={},ee=P.createProgram();P.attachShader(ee,Se(De,P.VERTEX_SHADER)),P.attachShader(ee,Se(b,P.FRAGMENT_SHADER)),P.linkProgram(ee),I[ue]={program:ee,transaction:function(Ee){P.useProgram(ee),Ee({setUniform:function(Ae,we){for(var fe=[],xe=arguments.length-2;xe-- >0;)fe[xe]=arguments[xe+2];var Te=te[we]||(te[we]=P.getUniformLocation(ee,we));P["uniform"+Ae].apply(P,[Te].concat(fe))},setAttribute:function(Ae,we,fe,xe,Te){var Ue=O[Ae];Ue||(Ue=O[Ae]={buf:P.createBuffer(),loc:P.getAttribLocation(ee,Ae),data:null}),P.bindBuffer(P.ARRAY_BUFFER,Ue.buf),P.vertexAttribPointer(Ue.loc,we,P.FLOAT,!1,0,0),P.enableVertexAttribArray(Ue.loc),X?P.vertexAttribDivisor(Ue.loc,xe):pe("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Ue.loc,xe),Te!==Ue.data&&(P.bufferData(P.ARRAY_BUFFER,Te,fe),Ue.data=Te)}})}}}I[ue].transaction(M)},he=function(ue,De){H++;try{P.activeTexture(P.TEXTURE0+H);var b=K[ue];b||(b=K[ue]=P.createTexture(),P.bindTexture(P.TEXTURE_2D,b),P.texParameteri(P.TEXTURE_2D,P.TEXTURE_MIN_FILTER,P.NEAREST),P.texParameteri(P.TEXTURE_2D,P.TEXTURE_MAG_FILTER,P.NEAREST)),P.bindTexture(P.TEXTURE_2D,b),De(b,H)}finally{H--}},ae=function(ue,De,b){var M=P.createFramebuffer();Z.push(M),P.bindFramebuffer(P.FRAMEBUFFER,M),P.activeTexture(P.TEXTURE0+De),P.bindTexture(P.TEXTURE_2D,ue),P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ue,0);try{b(M)}finally{P.deleteFramebuffer(M),P.bindFramebuffer(P.FRAMEBUFFER,Z[--Z.length-1]||null)}},ge=function(){$={},I={},K={},H=-1,Z.length=0};var ie=pe,me=Se,ce=Me,ne=he,F=ae,be=ge,X=typeof WebGL2RenderingContext<"u"&&P instanceof WebGL2RenderingContext,$={},I={},K={},H=-1,Z=[];P.canvas.addEventListener("webglcontextlost",function(ue){ge(),ue.preventDefault()},!1),c.set(P,k={gl:P,isWebGL2:X,getExtension:pe,withProgram:Me,withTexture:he,withTextureFramebuffer:ae,handleContextLoss:ge})}j(k)}function f(G,j,P,k,X,$,I,K){I===void 0&&(I=15),K===void 0&&(K=null),u(G,function(H){var Z=H.gl,ie=H.withProgram,me=H.withTexture;me("copy",function(ce,ne){Z.texImage2D(Z.TEXTURE_2D,0,Z.RGBA,X,$,0,Z.RGBA,Z.UNSIGNED_BYTE,j),ie("copy",s,o,function(F){var be=F.setUniform,pe=F.setAttribute;pe("aUV",2,Z.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),be("1i","image",ne),Z.bindFramebuffer(Z.FRAMEBUFFER,K||null),Z.disable(Z.BLEND),Z.colorMask(I&8,I&4,I&2,I&1),Z.viewport(P,k,X,$),Z.scissor(P,k,X,$),Z.drawArrays(Z.TRIANGLES,0,3)})})})}function h(G,j,P){var k=G.width,X=G.height;u(G,function($){var I=$.gl,K=new Uint8Array(k*X*4);I.readPixels(0,0,k,X,I.RGBA,I.UNSIGNED_BYTE,K),G.width=j,G.height=P,f(I,K,0,0,k,X)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:f,resizeWebGLCanvasWithoutClearing:h});function _(G,j,P,k,X,$){$===void 0&&($=1);var I=new Uint8Array(G*j),K=k[2]-k[0],H=k[3]-k[1],Z=[];i(P,function(pe,Se,Me,he){Z.push({x1:pe,y1:Se,x2:Me,y2:he,minX:Math.min(pe,Me),minY:Math.min(Se,he),maxX:Math.max(pe,Me),maxY:Math.max(Se,he)})}),Z.sort(function(pe,Se){return pe.maxX-Se.maxX});for(var ie=0;ie<G;ie++)for(var me=0;me<j;me++){var ce=F(k[0]+K*(ie+.5)/G,k[1]+H*(me+.5)/j),ne=Math.pow(1-Math.abs(ce)/X,$)/2;ce<0&&(ne=1-ne),ne=Math.max(0,Math.min(255,Math.round(ne*255))),I[me*G+ie]=ne}return I;function F(pe,Se){for(var Me=1/0,he=1/0,ae=Z.length;ae--;){var ge=Z[ae];if(ge.maxX+he<=pe)break;if(pe+he>ge.minX&&Se-he<ge.maxY&&Se+he>ge.minY){var ue=p(pe,Se,ge.x1,ge.y1,ge.x2,ge.y2);ue<Me&&(Me=ue,he=Math.sqrt(Me))}}return be(pe,Se)&&(he=-he),he}function be(pe,Se){for(var Me=0,he=Z.length;he--;){var ae=Z[he];if(ae.maxX<=pe)break;var ge=ae.y1>Se!=ae.y2>Se&&pe<(ae.x2-ae.x1)*(Se-ae.y1)/(ae.y2-ae.y1)+ae.x1;ge&&(Me+=ae.y1<ae.y2?1:-1)}return Me!==0}}function x(G,j,P,k,X,$,I,K,H,Z){$===void 0&&($=1),K===void 0&&(K=0),H===void 0&&(H=0),Z===void 0&&(Z=0),m(G,j,P,k,X,$,I,null,K,H,Z)}function m(G,j,P,k,X,$,I,K,H,Z,ie){$===void 0&&($=1),H===void 0&&(H=0),Z===void 0&&(Z=0),ie===void 0&&(ie=0);for(var me=_(G,j,P,k,X,$),ce=new Uint8Array(me.length*4),ne=0;ne<me.length;ne++)ce[ne*4+ie]=me[ne];f(I,ce,H,Z,G,j,1<<3-ie,K)}function p(G,j,P,k,X,$){var I=X-P,K=$-k,H=I*I+K*K,Z=H?Math.max(0,Math.min(1,((G-P)*I+(j-k)*K)/H)):0,ie=G-(P+Z*I),me=j-(k+Z*K);return ie*ie+me*me}var C=Object.freeze({__proto__:null,generate:_,generateIntoCanvas:x,generateIntoFramebuffer:m}),T="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",y="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",U="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",D=new Float32Array([0,0,2,0,0,2]),E=null,S=!1,g={},v=new WeakMap;function A(G){if(!S&&!q(G))throw new Error("WebGL generation not supported")}function w(G,j,P,k,X,$,I){if($===void 0&&($=1),I===void 0&&(I=null),!I&&(I=E,!I)){var K=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!K)throw new Error("OffscreenCanvas or DOM canvas not supported");I=E=K.getContext("webgl",{depth:!1})}A(I);var H=new Uint8Array(G*j*4);u(I,function(ce){var ne=ce.gl,F=ce.withTexture,be=ce.withTextureFramebuffer;F("readable",function(pe,Se){ne.texImage2D(ne.TEXTURE_2D,0,ne.RGBA,G,j,0,ne.RGBA,ne.UNSIGNED_BYTE,null),be(pe,Se,function(Me){N(G,j,P,k,X,$,ne,Me,0,0,0),ne.readPixels(0,0,G,j,ne.RGBA,ne.UNSIGNED_BYTE,H)})})});for(var Z=new Uint8Array(G*j),ie=0,me=0;ie<H.length;ie+=4)Z[me++]=H[ie];return Z}function L(G,j,P,k,X,$,I,K,H,Z){$===void 0&&($=1),K===void 0&&(K=0),H===void 0&&(H=0),Z===void 0&&(Z=0),N(G,j,P,k,X,$,I,null,K,H,Z)}function N(G,j,P,k,X,$,I,K,H,Z,ie){$===void 0&&($=1),H===void 0&&(H=0),Z===void 0&&(Z=0),ie===void 0&&(ie=0),A(I);var me=[];i(P,function(ce,ne,F,be){me.push(ce,ne,F,be)}),me=new Float32Array(me),u(I,function(ce){var ne=ce.gl,F=ce.isWebGL2,be=ce.getExtension,pe=ce.withProgram,Se=ce.withTexture,Me=ce.withTextureFramebuffer,he=ce.handleContextLoss;if(Se("rawDistances",function(ae,ge){(G!==ae._lastWidth||j!==ae._lastHeight)&&ne.texImage2D(ne.TEXTURE_2D,0,ne.RGBA,ae._lastWidth=G,ae._lastHeight=j,0,ne.RGBA,ne.UNSIGNED_BYTE,null),pe("main",T,y,function(ue){var De=ue.setAttribute,b=ue.setUniform,M=!F&&be("ANGLE_instanced_arrays"),O=!F&&be("EXT_blend_minmax");De("aUV",2,ne.STATIC_DRAW,0,D),De("aLineSegment",4,ne.DYNAMIC_DRAW,1,me),b.apply(void 0,["4f","uGlyphBounds"].concat(k)),b("1f","uMaxDistance",X),b("1f","uExponent",$),Me(ae,ge,function(te){ne.enable(ne.BLEND),ne.colorMask(!0,!0,!0,!0),ne.viewport(0,0,G,j),ne.scissor(0,0,G,j),ne.blendFunc(ne.ONE,ne.ONE),ne.blendEquationSeparate(ne.FUNC_ADD,F?ne.MAX:O.MAX_EXT),ne.clear(ne.COLOR_BUFFER_BIT),F?ne.drawArraysInstanced(ne.TRIANGLES,0,3,me.length/4):M.drawArraysInstancedANGLE(ne.TRIANGLES,0,3,me.length/4)})}),pe("post",s,U,function(ue){ue.setAttribute("aUV",2,ne.STATIC_DRAW,0,D),ue.setUniform("1i","tex",ge),ne.bindFramebuffer(ne.FRAMEBUFFER,K),ne.disable(ne.BLEND),ne.colorMask(ie===0,ie===1,ie===2,ie===3),ne.viewport(H,Z,G,j),ne.scissor(H,Z,G,j),ne.drawArrays(ne.TRIANGLES,0,3)})}),ne.isContextLost())throw he(),new Error("webgl context lost")})}function q(G){var j=!G||G===E?g:G.canvas||G,P=v.get(j);if(P===void 0){S=!0;var k=null;try{var X=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],$=w(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,G);P=$&&X.length===$.length&&$.every(function(I,K){return I===X[K]}),P||(k="bad trial run results",console.info(X,$))}catch(I){P=!1,k=I.message}k&&console.warn("WebGL SDF generation not supported:",k),S=!1,v.set(j,P)}return P}var V=Object.freeze({__proto__:null,generate:w,generateIntoCanvas:L,generateIntoFramebuffer:N,isSupported:q});function Y(G,j,P,k,X,$){X===void 0&&(X=Math.max(k[2]-k[0],k[3]-k[1])/2),$===void 0&&($=1);try{return w.apply(V,arguments)}catch(I){return console.info("WebGL SDF generation failed, falling back to JS",I),_.apply(C,arguments)}}function W(G,j,P,k,X,$,I,K,H,Z){X===void 0&&(X=Math.max(k[2]-k[0],k[3]-k[1])/2),$===void 0&&($=1),K===void 0&&(K=0),H===void 0&&(H=0),Z===void 0&&(Z=0);try{return L.apply(V,arguments)}catch(ie){return console.info("WebGL SDF generation failed, falling back to JS",ie),x.apply(C,arguments)}}return e.forEachPathCommand=n,e.generate=Y,e.generateIntoCanvas=W,e.javascript=C,e.pathToLineSegments=i,e.webgl=V,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return a}function $m(){var a=(function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},r={},n={};r.L=1,n[1]="L",Object.keys(t).forEach(function(he,ae){r[he]=1<<ae+1,n[r[he]]=he}),Object.freeze(r);var i=r.LRI|r.RLI|r.FSI,s=r.L|r.R|r.AL,o=r.B|r.S|r.WS|r.ON|r.FSI|r.LRI|r.RLI|r.PDI,c=r.BN|r.RLE|r.LRE|r.RLO|r.LRO|r.PDF,l=r.S|r.WS|r.B|i|r.PDI|c,u=null;function f(){if(!u){u=new Map;var he=function(ge){if(t.hasOwnProperty(ge)){var ue=0;t[ge].split(",").forEach(function(De){var b=De.split("+"),M=b[0],O=b[1];M=parseInt(M,36),O=O?parseInt(O,36):0,u.set(ue+=M,r[ge]);for(var te=0;te<O;te++)u.set(++ue,r[ge])})}};for(var ae in t)he(ae)}}function h(he){return f(),u.get(he.codePointAt(0))||r.L}function d(he){return n[h(he)]}var _={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function x(he,ae){var ge=36,ue=0,De=new Map,b=ae&&new Map,M;return he.split(",").forEach(function O(te){if(te.indexOf("+")!==-1)for(var ee=+te;ee--;)O(M);else{M=te;var J=te.split(">"),Ee=J[0],ve=J[1];Ee=String.fromCodePoint(ue+=parseInt(Ee,ge)),ve=String.fromCodePoint(ue+=parseInt(ve,ge)),De.set(Ee,ve),ae&&b.set(ve,Ee)}}),{map:De,reverseMap:b}}var m,p,C;function T(){if(!m){var he=x(_.pairs,!0),ae=he.map,ge=he.reverseMap;m=ae,p=ge,C=x(_.canonical,!1).map}}function y(he){return T(),m.get(he)||null}function U(he){return T(),p.get(he)||null}function D(he){return T(),C.get(he)||null}var E=r.L,S=r.R,g=r.EN,v=r.ES,A=r.ET,w=r.AN,L=r.CS,N=r.B,q=r.S,V=r.ON,Y=r.BN,W=r.NSM,G=r.AL,j=r.LRO,P=r.RLO,k=r.LRE,X=r.RLE,$=r.PDF,I=r.LRI,K=r.RLI,H=r.FSI,Z=r.PDI;function ie(he,ae){for(var ge=125,ue=new Uint32Array(he.length),De=0;De<he.length;De++)ue[De]=h(he[De]);var b=new Map;function M(Ct,Kt){var Ut=ue[Ct];ue[Ct]=Kt,b.set(Ut,b.get(Ut)-1),Ut&o&&b.set(o,b.get(o)-1),b.set(Kt,(b.get(Kt)||0)+1),Kt&o&&b.set(o,(b.get(o)||0)+1)}for(var O=new Uint8Array(he.length),te=new Map,ee=[],J=null,Ee=0;Ee<he.length;Ee++)J||ee.push(J={start:Ee,end:he.length-1,level:ae==="rtl"?1:ae==="ltr"?0:To(Ee,!1)}),ue[Ee]&N&&(J.end=Ee,J=null);for(var ve=X|k|P|j|i|Z|$|N,Ae=function(Ct){return Ct+(Ct&1?1:2)},we=function(Ct){return Ct+(Ct&1?2:1)},fe=0;fe<ee.length;fe++){J=ee[fe];var xe=[{_level:J.level,_override:0,_isolate:0}],Te=void 0,Ue=0,Re=0,Ge=0;b.clear();for(var z=J.start;z<=J.end;z++){var de=ue[z];if(Te=xe[xe.length-1],b.set(de,(b.get(de)||0)+1),de&o&&b.set(o,(b.get(o)||0)+1),de&ve)if(de&(X|k)){O[z]=Te._level;var ye=(de===X?we:Ae)(Te._level);ye<=ge&&!Ue&&!Re?xe.push({_level:ye,_override:0,_isolate:0}):Ue||Re++}else if(de&(P|j)){O[z]=Te._level;var Fe=(de===P?we:Ae)(Te._level);Fe<=ge&&!Ue&&!Re?xe.push({_level:Fe,_override:de&P?S:E,_isolate:0}):Ue||Re++}else if(de&i){de&H&&(de=To(z+1,!0)===1?K:I),O[z]=Te._level,Te._override&&M(z,Te._override);var _e=(de===K?we:Ae)(Te._level);_e<=ge&&Ue===0&&Re===0?(Ge++,xe.push({_level:_e,_override:0,_isolate:1,_isolInitIndex:z})):Ue++}else if(de&Z){if(Ue>0)Ue--;else if(Ge>0){for(Re=0;!xe[xe.length-1]._isolate;)xe.pop();var se=xe[xe.length-1]._isolInitIndex;se!=null&&(te.set(se,z),te.set(z,se)),xe.pop(),Ge--}Te=xe[xe.length-1],O[z]=Te._level,Te._override&&M(z,Te._override)}else de&$?(Ue===0&&(Re>0?Re--:!Te._isolate&&xe.length>1&&(xe.pop(),Te=xe[xe.length-1])),O[z]=Te._level):de&N&&(O[z]=J.level);else O[z]=Te._level,Te._override&&de!==Y&&M(z,Te._override)}for(var Pe=[],Oe=null,Be=J.start;Be<=J.end;Be++){var Ve=ue[Be];if(!(Ve&c)){var lt=O[Be],st=Ve&i,ut=Ve===Z;Oe&&lt===Oe._level?(Oe._end=Be,Oe._endsWithIsolInit=st):Pe.push(Oe={_start:Be,_end:Be,_level:lt,_startsWithPDI:ut,_endsWithIsolInit:st})}}for(var gt=[],Ot=0;Ot<Pe.length;Ot++){var Bt=Pe[Ot];if(!Bt._startsWithPDI||Bt._startsWithPDI&&!te.has(Bt._start)){for(var qt=[Oe=Bt],kt=void 0;Oe&&Oe._endsWithIsolInit&&(kt=te.get(Oe._end))!=null;)for(var zt=Ot+1;zt<Pe.length;zt++)if(Pe[zt]._start===kt){qt.push(Oe=Pe[zt]);break}for(var dt=[],rn=0;rn<qt.length;rn++)for(var Bi=qt[rn],ki=Bi._start;ki<=Bi._end;ki++)dt.push(ki);for(var pa=O[dt[0]],gr=J.level,li=dt[0]-1;li>=0;li--)if(!(ue[li]&c)){gr=O[li];break}var zi=dt[dt.length-1],ma=O[zi],R=J.level;if(!(ue[zi]&i)){for(var Q=zi+1;Q<=J.end;Q++)if(!(ue[Q]&c)){R=O[Q];break}}gt.push({_seqIndices:dt,_sosType:Math.max(gr,pa)%2?S:E,_eosType:Math.max(R,ma)%2?S:E})}}for(var re=0;re<gt.length;re++){var oe=gt[re],B=oe._seqIndices,Ce=oe._sosType,Ie=oe._eosType,ke=O[B[0]]&1?S:E;if(b.get(W))for(var Ne=0;Ne<B.length;Ne++){var We=B[Ne];if(ue[We]&W){for(var Xe=Ce,ze=Ne-1;ze>=0;ze--)if(!(ue[B[ze]]&c)){Xe=ue[B[ze]];break}M(We,Xe&(i|Z)?V:Xe)}}if(b.get(g))for(var qe=0;qe<B.length;qe++){var tt=B[qe];if(ue[tt]&g)for(var ot=qe-1;ot>=-1;ot--){var rt=ot===-1?Ce:ue[B[ot]];if(rt&s){rt===G&&M(tt,w);break}}}if(b.get(G))for(var nt=0;nt<B.length;nt++){var He=B[nt];ue[He]&G&&M(He,S)}if(b.get(v)||b.get(L))for(var it=1;it<B.length-1;it++){var Ke=B[it];if(ue[Ke]&(v|L)){for(var pt=0,an=0,St=it-1;St>=0&&(pt=ue[B[St]],!!(pt&c));St--);for(var un=it+1;un<B.length&&(an=ue[B[un]],!!(an&c));un++);pt===an&&(ue[Ke]===v?pt===g:pt&(g|w))&&M(Ke,pt)}}if(b.get(g))for(var Je=0;Je<B.length;Je++){var Rt=B[Je];if(ue[Rt]&g){for(var Mt=Je-1;Mt>=0&&ue[B[Mt]]&(A|c);Mt--)M(B[Mt],g);for(Je++;Je<B.length&&ue[B[Je]]&(A|c|g);Je++)ue[B[Je]]!==g&&M(B[Je],g)}}if(b.get(A)||b.get(v)||b.get(L))for(var ft=0;ft<B.length;ft++){var yt=B[ft];if(ue[yt]&(A|v|L)){M(yt,V);for(var yn=ft-1;yn>=0&&ue[B[yn]]&c;yn--)M(B[yn],V);for(var Gt=ft+1;Gt<B.length&&ue[B[Gt]]&c;Gt++)M(B[Gt],V)}}if(b.get(g))for(var ga=0,fo=Ce;ga<B.length;ga++){var ho=B[ga],_a=ue[ho];_a&g?fo===E&&M(ho,E):_a&s&&(fo=_a)}if(b.get(o)){var Gi=S|g|w,po=Gi|E,_r=[];{for(var ci=[],ui=0;ui<B.length;ui++)if(ue[B[ui]]&o){var Vi=he[B[ui]],mo=void 0;if(y(Vi)!==null)if(ci.length<63)ci.push({char:Vi,seqIndex:ui});else break;else if((mo=U(Vi))!==null)for(var Hi=ci.length-1;Hi>=0;Hi--){var va=ci[Hi].char;if(va===mo||va===U(D(Vi))||y(D(va))===Vi){_r.push([ci[Hi].seqIndex,ui]),ci.length=Hi;break}}}_r.sort(function(Ct,Kt){return Ct[0]-Kt[0]})}for(var xa=0;xa<_r.length;xa++){for(var go=_r[xa],vr=go[0],Sa=go[1],_o=!1,jt=0,Ma=vr+1;Ma<Sa;Ma++){var vo=B[Ma];if(ue[vo]&po){_o=!0;var xo=ue[vo]&Gi?S:E;if(xo===ke){jt=xo;break}}}if(_o&&!jt){jt=Ce;for(var ya=vr-1;ya>=0;ya--){var So=B[ya];if(ue[So]&po){var Mo=ue[So]&Gi?S:E;Mo!==ke?jt=Mo:jt=ke;break}}}if(jt){if(ue[B[vr]]=ue[B[Sa]]=jt,jt!==ke){for(var Wi=vr+1;Wi<B.length;Wi++)if(!(ue[B[Wi]]&c)){h(he[B[Wi]])&W&&(ue[B[Wi]]=jt);break}}if(jt!==ke){for(var Xi=Sa+1;Xi<B.length;Xi++)if(!(ue[B[Xi]]&c)){h(he[B[Xi]])&W&&(ue[B[Xi]]=jt);break}}}}for(var En=0;En<B.length;En++)if(ue[B[En]]&o){for(var yo=En,Ea=En,Ta=Ce,Yi=En-1;Yi>=0;Yi--)if(ue[B[Yi]]&c)yo=Yi;else{Ta=ue[B[Yi]]&Gi?S:E;break}for(var Eo=Ie,qi=En+1;qi<B.length;qi++)if(ue[B[qi]]&(o|c))Ea=qi;else{Eo=ue[B[qi]]&Gi?S:E;break}for(var ba=yo;ba<=Ea;ba++)ue[B[ba]]=Ta===Eo?Ta:ke;En=Ea}}}for(var It=J.start;It<=J.end;It++){var Ic=O[It],xr=ue[It];if(Ic&1?xr&(E|g|w)&&O[It]++:xr&S?O[It]++:xr&(w|g)&&(O[It]+=2),xr&c&&(O[It]=It===0?J.level:O[It-1]),It===J.end||h(he[It])&(q|N))for(var Sr=It;Sr>=0&&h(he[Sr])&l;Sr--)O[Sr]=J.level}}return{levels:O,paragraphs:ee};function To(Ct,Kt){for(var Ut=Ct;Ut<he.length;Ut++){var Tn=ue[Ut];if(Tn&(S|G))return 1;if(Tn&(N|E)||Kt&&Tn===Z)return 0;if(Tn&i){var bo=Fc(Ut);Ut=bo===-1?he.length:bo}}return 0}function Fc(Ct){for(var Kt=1,Ut=Ct+1;Ut<he.length;Ut++){var Tn=ue[Ut];if(Tn&N)break;if(Tn&Z){if(--Kt===0)return Ut}else Tn&i&&Kt++}return-1}}var me="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",ce;function ne(){if(!ce){var he=x(me,!0),ae=he.map,ge=he.reverseMap;ge.forEach(function(ue,De){ae.set(De,ue)}),ce=ae}}function F(he){return ne(),ce.get(he)||null}function be(he,ae,ge,ue){var De=he.length;ge=Math.max(0,ge==null?0:+ge),ue=Math.min(De-1,ue==null?De-1:+ue);for(var b=new Map,M=ge;M<=ue;M++)if(ae[M]&1){var O=F(he[M]);O!==null&&b.set(M,O)}return b}function pe(he,ae,ge,ue){var De=he.length;ge=Math.max(0,ge==null?0:+ge),ue=Math.min(De-1,ue==null?De-1:+ue);var b=[];return ae.paragraphs.forEach(function(M){var O=Math.max(ge,M.start),te=Math.min(ue,M.end);if(O<te){for(var ee=ae.levels.slice(O,te+1),J=te;J>=O&&h(he[J])&l;J--)ee[J]=M.level;for(var Ee=M.level,ve=1/0,Ae=0;Ae<ee.length;Ae++){var we=ee[Ae];we>Ee&&(Ee=we),we<ve&&(ve=we|1)}for(var fe=Ee;fe>=ve;fe--)for(var xe=0;xe<ee.length;xe++)if(ee[xe]>=fe){for(var Te=xe;xe+1<ee.length&&ee[xe+1]>=fe;)xe++;xe>Te&&b.push([Te+O,xe+O])}}}),b}function Se(he,ae,ge,ue){var De=Me(he,ae,ge,ue),b=[].concat(he);return De.forEach(function(M,O){b[O]=(ae.levels[M]&1?F(he[M]):null)||he[M]}),b.join("")}function Me(he,ae,ge,ue){for(var De=pe(he,ae,ge,ue),b=[],M=0;M<he.length;M++)b[M]=M;return De.forEach(function(O){for(var te=O[0],ee=O[1],J=b.slice(te,ee+1),Ee=J.length;Ee--;)b[ee-Ee]=J[Ee]}),b}return e.closingToOpeningBracket=U,e.getBidiCharType=h,e.getBidiCharTypeName=d,e.getCanonicalBracket=D,e.getEmbeddingLevels=ie,e.getMirroredCharacter=F,e.getMirroredCharactersMap=be,e.getReorderSegments=pe,e.getReorderedIndices=Me,e.getReorderedString=Se,e.openingToClosingBracket=y,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return a}const yc=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Ks(a){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(r,n){let i=je[n];return i?Ks(i):r}return a.replace(e,t)}const Et=[];for(let a=0;a<256;a++)Et[a]=(a<16?"0":"")+a.toString(16);function eg(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Et[a&255]+Et[a>>8&255]+Et[a>>16&255]+Et[a>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[r&255]+Et[r>>8&255]+Et[r>>16&255]+Et[r>>24&255]).toUpperCase()}const Hn=Object.assign||function(){let a=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let r=arguments[e];if(r)for(let n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])}return a},tg=Date.now(),bl=new WeakMap,Al=new Map;let ng=1e10;function Zs(a,e){const t=sg(e);let r=bl.get(a);if(r||bl.set(a,r=Object.create(null)),r[t])return new r[t];const n=`_onBeforeCompile${t}`,i=function(l,u){a.onBeforeCompile.call(this,l,u);const f=this.customProgramCacheKey()+"|"+l.vertexShader+"|"+l.fragmentShader;let h=Al[f];if(!h){const d=ig(this,l,e,t);h=Al[f]=d}l.vertexShader=h.vertexShader,l.fragmentShader=h.fragmentShader,Hn(l.uniforms,this.uniforms),e.timeUniform&&(l.uniforms[e.timeUniform]={get value(){return Date.now()-tg}}),this[n]&&this[n](l)},s=function(){return o(e.chained?a:a.clone())},o=function(l){const u=Object.create(l,c);return Object.defineProperty(u,"baseMaterial",{value:a}),Object.defineProperty(u,"id",{value:ng++}),u.uuid=eg(),u.uniforms=Hn({},l.uniforms,e.uniforms),u.defines=Hn({},l.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=Hn({},l.extensions,e.extensions),u._listeners=void 0,u},c={constructor:{value:s},isDerivedMaterial:{value:!0},type:{get:()=>a.type,set:l=>{a.type=l}},isDerivedFrom:{writable:!0,configurable:!0,value:function(l){const u=this.baseMaterial;return l===u||u.isDerivedMaterial&&u.isDerivedFrom(l)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return a.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return i},set(l){this[n]=l}},copy:{writable:!0,configurable:!0,value:function(l){return a.copy.call(this,l),!a.isShaderMaterial&&!a.isDerivedMaterial&&(Hn(this.extensions,l.extensions),Hn(this.defines,l.defines),Hn(this.uniforms,sc.clone(l.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const l=new a.constructor;return o(l).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let l=this._depthMaterial;return l||(l=this._depthMaterial=Zs(a.isDerivedMaterial?a.getDepthMaterial():new hc({depthPacking:Zl}),e),l.defines.IS_DEPTH_MATERIAL="",l.uniforms=this.uniforms),l}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let l=this._distanceMaterial;return l||(l=this._distanceMaterial=Zs(a.isDerivedMaterial?a.getDistanceMaterial():new dc,e),l.defines.IS_DISTANCE_MATERIAL="",l.uniforms=this.uniforms),l}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:l,_distanceMaterial:u}=this;l&&l.dispose(),u&&u.dispose(),a.dispose.call(this)}}};return r[t]=s,new s}function ig(a,{vertexShader:e,fragmentShader:t},r,n){let{vertexDefs:i,vertexMainIntro:s,vertexMainOutro:o,vertexTransform:c,fragmentDefs:l,fragmentMainIntro:u,fragmentMainOutro:f,fragmentColorTransform:h,customRewriter:d,timeUniform:_}=r;if(i=i||"",s=s||"",o=o||"",l=l||"",u=u||"",f=f||"",(c||d)&&(e=Ks(e)),(h||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Ks(t)),d){let x=d({vertexShader:e,fragmentShader:t});e=x.vertexShader,t=x.fragmentShader}if(h){let x=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,m=>(x.push(m),"")),f=`${h}
${x.join(`
`)}
${f}`}if(_){const x=`
uniform float ${_};
`;i=x+i,l=x+l}return c&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,i=`${i}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${c}
}
`,s=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${s}
`,e=e.replace(/\b(position|normal|uv)\b/g,(x,m,p,C)=>/\battribute\s+vec[23]\s+$/.test(C.substr(0,p))?m:`troika_${m}_${n}`),a.map&&a.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=wl(e,n,i,s,o),t=wl(t,n,l,u,f),{vertexShader:e,fragmentShader:t}}function wl(a,e,t,r,n){return(r||n||t)&&(a=a.replace(yc,`
${t}
void troikaOrigMain${e}() {`),a+=`
void main() {
  ${r}
  troikaOrigMain${e}();
  ${n}
}`),a}function rg(a,e){return a==="uniforms"?void 0:typeof e=="function"?e.toString():e}let ag=0;const Rl=new Map;function sg(a){const e=JSON.stringify(a,rg);let t=Rl.get(e);return t==null&&Rl.set(e,t=++ag),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function og(){return typeof window>"u"&&(self.window=self),(function(a){var e={parse:function(n){var i=e._bin,s=new Uint8Array(n);if(i.readASCII(s,0,4)=="ttcf"){var o=4;i.readUshort(s,o),o+=2,i.readUshort(s,o),o+=2;var c=i.readUint(s,o);o+=4;for(var l=[],u=0;u<c;u++){var f=i.readUint(s,o);o+=4,l.push(e._readFont(s,f))}return l}return[e._readFont(s,0)]},_readFont:function(n,i){var s=e._bin,o=i;s.readFixed(n,i),i+=4;var c=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2;for(var l=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:n,_offset:o},f={},h=0;h<c;h++){var d=s.readASCII(n,i,4);i+=4,s.readUint(n,i),i+=4;var _=s.readUint(n,i);i+=4;var x=s.readUint(n,i);i+=4,f[d]={offset:_,length:x}}for(h=0;h<l.length;h++){var m=l[h];f[m]&&(u[m.trim()]=e[m.trim()].parse(n,f[m].offset,f[m].length,u))}return u},_tabOffset:function(n,i,s){for(var o=e._bin,c=o.readUshort(n,s+4),l=s+12,u=0;u<c;u++){var f=o.readASCII(n,l,4);l+=4,o.readUint(n,l),l+=4;var h=o.readUint(n,l);if(l+=4,o.readUint(n,l),l+=4,f==i)return h}return 0}};e._bin={readFixed:function(n,i){return(n[i]<<8|n[i+1])+(n[i+2]<<8|n[i+3])/65540},readF2dot14:function(n,i){return e._bin.readShort(n,i)/16384},readInt:function(n,i){return e._bin._view(n).getInt32(i)},readInt8:function(n,i){return e._bin._view(n).getInt8(i)},readShort:function(n,i){return e._bin._view(n).getInt16(i)},readUshort:function(n,i){return e._bin._view(n).getUint16(i)},readUshorts:function(n,i,s){for(var o=[],c=0;c<s;c++)o.push(e._bin.readUshort(n,i+2*c));return o},readUint:function(n,i){return e._bin._view(n).getUint32(i)},readUint64:function(n,i){return 4294967296*e._bin.readUint(n,i)+e._bin.readUint(n,i+4)},readASCII:function(n,i,s){for(var o="",c=0;c<s;c++)o+=String.fromCharCode(n[i+c]);return o},readUnicode:function(n,i,s){for(var o="",c=0;c<s;c++){var l=n[i++]<<8|n[i++];o+=String.fromCharCode(l)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,i,s){var o=e._bin._tdec;return o&&i==0&&s==n.length?o.decode(n):e._bin.readASCII(n,i,s)},readBytes:function(n,i,s){for(var o=[],c=0;c<s;c++)o.push(n[i+c]);return o},readASCIIArray:function(n,i,s){for(var o=[],c=0;c<s;c++)o.push(String.fromCharCode(n[i+c]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,i,s,o,c){var l=e._bin,u={},f=i;l.readFixed(n,i),i+=4;var h=l.readUshort(n,i);i+=2;var d=l.readUshort(n,i);i+=2;var _=l.readUshort(n,i);return i+=2,u.scriptList=e._lctf.readScriptList(n,f+h),u.featureList=e._lctf.readFeatureList(n,f+d),u.lookupList=e._lctf.readLookupList(n,f+_,c),u},e._lctf.readLookupList=function(n,i,s){var o=e._bin,c=i,l=[],u=o.readUshort(n,i);i+=2;for(var f=0;f<u;f++){var h=o.readUshort(n,i);i+=2;var d=e._lctf.readLookupTable(n,c+h,s);l.push(d)}return l},e._lctf.readLookupTable=function(n,i,s){var o=e._bin,c=i,l={tabs:[]};l.ltype=o.readUshort(n,i),i+=2,l.flag=o.readUshort(n,i),i+=2;var u=o.readUshort(n,i);i+=2;for(var f=l.ltype,h=0;h<u;h++){var d=o.readUshort(n,i);i+=2;var _=s(n,f,c+d,l);l.tabs.push(_)}return l},e._lctf.numOfOnes=function(n){for(var i=0,s=0;s<32;s++)(n>>>s&1)!=0&&i++;return i},e._lctf.readClassDef=function(n,i){var s=e._bin,o=[],c=s.readUshort(n,i);if(i+=2,c==1){var l=s.readUshort(n,i);i+=2;var u=s.readUshort(n,i);i+=2;for(var f=0;f<u;f++)o.push(l+f),o.push(l+f),o.push(s.readUshort(n,i)),i+=2}if(c==2){var h=s.readUshort(n,i);for(i+=2,f=0;f<h;f++)o.push(s.readUshort(n,i)),i+=2,o.push(s.readUshort(n,i)),i+=2,o.push(s.readUshort(n,i)),i+=2}return o},e._lctf.getInterval=function(n,i){for(var s=0;s<n.length;s+=3){var o=n[s],c=n[s+1];if(n[s+2],o<=i&&i<=c)return s}return-1},e._lctf.readCoverage=function(n,i){var s=e._bin,o={};o.fmt=s.readUshort(n,i),i+=2;var c=s.readUshort(n,i);return i+=2,o.fmt==1&&(o.tab=s.readUshorts(n,i,c)),o.fmt==2&&(o.tab=s.readUshorts(n,i,3*c)),o},e._lctf.coverageIndex=function(n,i){var s=n.tab;if(n.fmt==1)return s.indexOf(i);if(n.fmt==2){var o=e._lctf.getInterval(s,i);if(o!=-1)return s[o+2]+(i-s[o])}return-1},e._lctf.readFeatureList=function(n,i){var s=e._bin,o=i,c=[],l=s.readUshort(n,i);i+=2;for(var u=0;u<l;u++){var f=s.readASCII(n,i,4);i+=4;var h=s.readUshort(n,i);i+=2;var d=e._lctf.readFeatureTable(n,o+h);d.tag=f.trim(),c.push(d)}return c},e._lctf.readFeatureTable=function(n,i){var s=e._bin,o=i,c={},l=s.readUshort(n,i);i+=2,l>0&&(c.featureParams=o+l);var u=s.readUshort(n,i);i+=2,c.tab=[];for(var f=0;f<u;f++)c.tab.push(s.readUshort(n,i+2*f));return c},e._lctf.readScriptList=function(n,i){var s=e._bin,o=i,c={},l=s.readUshort(n,i);i+=2;for(var u=0;u<l;u++){var f=s.readASCII(n,i,4);i+=4;var h=s.readUshort(n,i);i+=2,c[f.trim()]=e._lctf.readScriptTable(n,o+h)}return c},e._lctf.readScriptTable=function(n,i){var s=e._bin,o=i,c={},l=s.readUshort(n,i);i+=2,l>0&&(c.default=e._lctf.readLangSysTable(n,o+l));var u=s.readUshort(n,i);i+=2;for(var f=0;f<u;f++){var h=s.readASCII(n,i,4);i+=4;var d=s.readUshort(n,i);i+=2,c[h.trim()]=e._lctf.readLangSysTable(n,o+d)}return c},e._lctf.readLangSysTable=function(n,i){var s=e._bin,o={};s.readUshort(n,i),i+=2,o.reqFeature=s.readUshort(n,i),i+=2;var c=s.readUshort(n,i);return i+=2,o.features=s.readUshorts(n,i,c),o},e.CFF={},e.CFF.parse=function(n,i,s){var o=e._bin;(n=new Uint8Array(n.buffer,i,s))[i=0],n[++i],n[++i],n[++i],i++;var c=[];i=e.CFF.readIndex(n,i,c);for(var l=[],u=0;u<c.length-1;u++)l.push(o.readASCII(n,i+c[u],c[u+1]-c[u]));i+=c[c.length-1];var f=[];i=e.CFF.readIndex(n,i,f);var h=[];for(u=0;u<f.length-1;u++)h.push(e.CFF.readDict(n,i+f[u],i+f[u+1]));i+=f[f.length-1];var d=h[0],_=[];i=e.CFF.readIndex(n,i,_);var x=[];for(u=0;u<_.length-1;u++)x.push(o.readASCII(n,i+_[u],_[u+1]-_[u]));if(i+=_[_.length-1],e.CFF.readSubrs(n,i,d),d.CharStrings){i=d.CharStrings,_=[],i=e.CFF.readIndex(n,i,_);var m=[];for(u=0;u<_.length-1;u++)m.push(o.readBytes(n,i+_[u],_[u+1]-_[u]));d.CharStrings=m}if(d.ROS){i=d.FDArray;var p=[];for(i=e.CFF.readIndex(n,i,p),d.FDArray=[],u=0;u<p.length-1;u++){var C=e.CFF.readDict(n,i+p[u],i+p[u+1]);e.CFF._readFDict(n,C,x),d.FDArray.push(C)}i+=p[p.length-1],i=d.FDSelect,d.FDSelect=[];var T=n[i];if(i++,T!=3)throw T;var y=o.readUshort(n,i);for(i+=2,u=0;u<y+1;u++)d.FDSelect.push(o.readUshort(n,i),n[i+2]),i+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(n,d.charset,d.CharStrings.length)),e.CFF._readFDict(n,d,x),d},e.CFF._readFDict=function(n,i,s){var o;for(var c in i.Private&&(o=i.Private[1],i.Private=e.CFF.readDict(n,o,o+i.Private[0]),i.Private.Subrs&&e.CFF.readSubrs(n,o+i.Private.Subrs,i.Private)),i)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(c)!=-1&&(i[c]=s[i[c]-426+35])},e.CFF.readSubrs=function(n,i,s){var o=e._bin,c=[];i=e.CFF.readIndex(n,i,c);var l,u=c.length;l=u<1240?107:u<33900?1131:32768,s.Bias=l,s.Subrs=[];for(var f=0;f<c.length-1;f++)s.Subrs.push(o.readBytes(n,i+c[f],c[f+1]-c[f]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,i){for(var s=0;s<n.charset.length;s++)if(n.charset[s]==i)return s;return-1},e.CFF.glyphBySE=function(n,i){return i<0||i>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[i])},e.CFF.readEncoding=function(n,i,s){e._bin;var o=[".notdef"],c=n[i];if(i++,c!=0)throw"error: unknown encoding format: "+c;var l=n[i];i++;for(var u=0;u<l;u++)o.push(n[i+u]);return o},e.CFF.readCharset=function(n,i,s){var o=e._bin,c=[".notdef"],l=n[i];if(i++,l==0)for(var u=0;u<s;u++){var f=o.readUshort(n,i);i+=2,c.push(f)}else{if(l!=1&&l!=2)throw"error: format: "+l;for(;c.length<s;){f=o.readUshort(n,i),i+=2;var h=0;for(l==1?(h=n[i],i++):(h=o.readUshort(n,i),i+=2),u=0;u<=h;u++)c.push(f),f++}}return c},e.CFF.readIndex=function(n,i,s){var o=e._bin,c=o.readUshort(n,i)+1,l=n[i+=2];if(i++,l==1)for(var u=0;u<c;u++)s.push(n[i+u]);else if(l==2)for(u=0;u<c;u++)s.push(o.readUshort(n,i+2*u));else if(l==3)for(u=0;u<c;u++)s.push(16777215&o.readUint(n,i+3*u-1));else if(c!=1)throw"unsupported offset size: "+l+", count: "+c;return(i+=c*l)-1},e.CFF.getCharString=function(n,i,s){var o=e._bin,c=n[i],l=n[i+1];n[i+2],n[i+3],n[i+4];var u=1,f=null,h=null;c<=20&&(f=c,u=1),c==12&&(f=100*c+l,u=2),21<=c&&c<=27&&(f=c,u=1),c==28&&(h=o.readShort(n,i+1),u=3),29<=c&&c<=31&&(f=c,u=1),32<=c&&c<=246&&(h=c-139,u=1),247<=c&&c<=250&&(h=256*(c-247)+l+108,u=2),251<=c&&c<=254&&(h=256*-(c-251)-l-108,u=2),c==255&&(h=o.readInt(n,i+1)/65535,u=5),s.val=h??"o"+f,s.size=u},e.CFF.readCharString=function(n,i,s){for(var o=i+s,c=e._bin,l=[];i<o;){var u=n[i],f=n[i+1];n[i+2],n[i+3],n[i+4];var h=1,d=null,_=null;u<=20&&(d=u,h=1),u==12&&(d=100*u+f,h=2),u!=19&&u!=20||(d=u,h=2),21<=u&&u<=27&&(d=u,h=1),u==28&&(_=c.readShort(n,i+1),h=3),29<=u&&u<=31&&(d=u,h=1),32<=u&&u<=246&&(_=u-139,h=1),247<=u&&u<=250&&(_=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(_=256*-(u-251)-f-108,h=2),u==255&&(_=c.readInt(n,i+1)/65535,h=5),l.push(_??"o"+d),i+=h}return l},e.CFF.readDict=function(n,i,s){for(var o=e._bin,c={},l=[];i<s;){var u=n[i],f=n[i+1];n[i+2],n[i+3],n[i+4];var h=1,d=null,_=null;if(u==28&&(_=o.readShort(n,i+1),h=3),u==29&&(_=o.readInt(n,i+1),h=5),32<=u&&u<=246&&(_=u-139,h=1),247<=u&&u<=250&&(_=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(_=256*-(u-251)-f-108,h=2),u==255)throw _=o.readInt(n,i+1)/65535,h=5,"unknown number";if(u==30){var x=[];for(h=1;;){var m=n[i+h];h++;var p=m>>4,C=15&m;if(p!=15&&x.push(p),C!=15&&x.push(C),C==15)break}for(var T="",y=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],U=0;U<x.length;U++)T+=y[x[U]];_=parseFloat(T)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],h=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][f],h=2)),d!=null?(c[d]=l.length==1?l[0]:l,l=[]):l.push(_),i+=h}return c},e.cmap={},e.cmap.parse=function(n,i,s){n=new Uint8Array(n.buffer,i,s),i=0;var o=e._bin,c={};o.readUshort(n,i),i+=2;var l=o.readUshort(n,i);i+=2;var u=[];c.tables=[];for(var f=0;f<l;f++){var h=o.readUshort(n,i);i+=2;var d=o.readUshort(n,i);i+=2;var _=o.readUint(n,i);i+=4;var x="p"+h+"e"+d,m=u.indexOf(_);if(m==-1){var p;m=c.tables.length,u.push(_);var C=o.readUshort(n,_);C==0?p=e.cmap.parse0(n,_):C==4?p=e.cmap.parse4(n,_):C==6?p=e.cmap.parse6(n,_):C==12?p=e.cmap.parse12(n,_):console.debug("unknown format: "+C,h,d,_),c.tables.push(p)}if(c[x]!=null)throw"multiple tables for one platform+encoding";c[x]=m}return c},e.cmap.parse0=function(n,i){var s=e._bin,o={};o.format=s.readUshort(n,i),i+=2;var c=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2,o.map=[];for(var l=0;l<c-6;l++)o.map.push(n[i+l]);return o},e.cmap.parse4=function(n,i){var s=e._bin,o=i,c={};c.format=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2;var u=s.readUshort(n,i);i+=2;var f=u/2;c.searchRange=s.readUshort(n,i),i+=2,c.entrySelector=s.readUshort(n,i),i+=2,c.rangeShift=s.readUshort(n,i),i+=2,c.endCount=s.readUshorts(n,i,f),i+=2*f,i+=2,c.startCount=s.readUshorts(n,i,f),i+=2*f,c.idDelta=[];for(var h=0;h<f;h++)c.idDelta.push(s.readShort(n,i)),i+=2;for(c.idRangeOffset=s.readUshorts(n,i,f),i+=2*f,c.glyphIdArray=[];i<o+l;)c.glyphIdArray.push(s.readUshort(n,i)),i+=2;return c},e.cmap.parse6=function(n,i){var s=e._bin,o={};o.format=s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,o.firstCode=s.readUshort(n,i),i+=2;var c=s.readUshort(n,i);i+=2,o.glyphIdArray=[];for(var l=0;l<c;l++)o.glyphIdArray.push(s.readUshort(n,i)),i+=2;return o},e.cmap.parse12=function(n,i){var s=e._bin,o={};o.format=s.readUshort(n,i),i+=2,i+=2,s.readUint(n,i),i+=4,s.readUint(n,i),i+=4;var c=s.readUint(n,i);i+=4,o.groups=[];for(var l=0;l<c;l++){var u=i+12*l,f=s.readUint(n,u+0),h=s.readUint(n,u+4),d=s.readUint(n,u+8);o.groups.push([f,h,d])}return o},e.glyf={},e.glyf.parse=function(n,i,s,o){for(var c=[],l=0;l<o.maxp.numGlyphs;l++)c.push(null);return c},e.glyf._parseGlyf=function(n,i){var s=e._bin,o=n._data,c=e._tabOffset(o,"glyf",n._offset)+n.loca[i];if(n.loca[i]==n.loca[i+1])return null;var l={};if(l.noc=s.readShort(o,c),c+=2,l.xMin=s.readShort(o,c),c+=2,l.yMin=s.readShort(o,c),c+=2,l.xMax=s.readShort(o,c),c+=2,l.yMax=s.readShort(o,c),c+=2,l.xMin>=l.xMax||l.yMin>=l.yMax)return null;if(l.noc>0){l.endPts=[];for(var u=0;u<l.noc;u++)l.endPts.push(s.readUshort(o,c)),c+=2;var f=s.readUshort(o,c);if(c+=2,o.length-c<f)return null;l.instructions=s.readBytes(o,c,f),c+=f;var h=l.endPts[l.noc-1]+1;for(l.flags=[],u=0;u<h;u++){var d=o[c];if(c++,l.flags.push(d),(8&d)!=0){var _=o[c];c++;for(var x=0;x<_;x++)l.flags.push(d),u++}}for(l.xs=[],u=0;u<h;u++){var m=(2&l.flags[u])!=0,p=(16&l.flags[u])!=0;m?(l.xs.push(p?o[c]:-o[c]),c++):p?l.xs.push(0):(l.xs.push(s.readShort(o,c)),c+=2)}for(l.ys=[],u=0;u<h;u++)m=(4&l.flags[u])!=0,p=(32&l.flags[u])!=0,m?(l.ys.push(p?o[c]:-o[c]),c++):p?l.ys.push(0):(l.ys.push(s.readShort(o,c)),c+=2);var C=0,T=0;for(u=0;u<h;u++)C+=l.xs[u],T+=l.ys[u],l.xs[u]=C,l.ys[u]=T}else{var y;l.parts=[];do{y=s.readUshort(o,c),c+=2;var U={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(l.parts.push(U),U.glyphIndex=s.readUshort(o,c),c+=2,1&y){var D=s.readShort(o,c);c+=2;var E=s.readShort(o,c);c+=2}else D=s.readInt8(o,c),c++,E=s.readInt8(o,c),c++;2&y?(U.m.tx=D,U.m.ty=E):(U.p1=D,U.p2=E),8&y?(U.m.a=U.m.d=s.readF2dot14(o,c),c+=2):64&y?(U.m.a=s.readF2dot14(o,c),c+=2,U.m.d=s.readF2dot14(o,c),c+=2):128&y&&(U.m.a=s.readF2dot14(o,c),c+=2,U.m.b=s.readF2dot14(o,c),c+=2,U.m.c=s.readF2dot14(o,c),c+=2,U.m.d=s.readF2dot14(o,c),c+=2)}while(32&y);if(256&y){var S=s.readUshort(o,c);for(c+=2,l.instr=[],u=0;u<S;u++)l.instr.push(o[c]),c++}}return l},e.GDEF={},e.GDEF.parse=function(n,i,s,o){var c=i;i+=4;var l=e._bin.readUshort(n,i);return{glyphClassDef:l===0?null:e._lctf.readClassDef(n,c+l)}},e.GPOS={},e.GPOS.parse=function(n,i,s,o){return e._lctf.parse(n,i,s,o,e.GPOS.subt)},e.GPOS.subt=function(n,i,s,o){var c=e._bin,l=s,u={};if(u.fmt=c.readUshort(n,s),s+=2,i==1||i==2||i==3||i==7||i==8&&u.fmt<=2){var f=c.readUshort(n,s);s+=2,u.coverage=e._lctf.readCoverage(n,f+l)}if(i==1&&u.fmt==1){var h=c.readUshort(n,s);s+=2,h!=0&&(u.pos=e.GPOS.readValueRecord(n,s,h))}else if(i==2&&u.fmt>=1&&u.fmt<=2){h=c.readUshort(n,s),s+=2;var d=c.readUshort(n,s);s+=2;var _=e._lctf.numOfOnes(h),x=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var m=c.readUshort(n,s);s+=2;for(var p=0;p<m;p++){var C=l+c.readUshort(n,s);s+=2;var T=c.readUshort(n,C);C+=2;for(var y=[],U=0;U<T;U++){var D=c.readUshort(n,C);C+=2,h!=0&&(w=e.GPOS.readValueRecord(n,C,h),C+=2*_),d!=0&&(L=e.GPOS.readValueRecord(n,C,d),C+=2*x),y.push({gid2:D,val1:w,val2:L})}u.pairsets.push(y)}}if(u.fmt==2){var E=c.readUshort(n,s);s+=2;var S=c.readUshort(n,s);s+=2;var g=c.readUshort(n,s);s+=2;var v=c.readUshort(n,s);for(s+=2,u.classDef1=e._lctf.readClassDef(n,l+E),u.classDef2=e._lctf.readClassDef(n,l+S),u.matrix=[],p=0;p<g;p++){var A=[];for(U=0;U<v;U++){var w=null,L=null;h!=0&&(w=e.GPOS.readValueRecord(n,s,h),s+=2*_),d!=0&&(L=e.GPOS.readValueRecord(n,s,d),s+=2*x),A.push({val1:w,val2:L})}u.matrix.push(A)}}}else if(i==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(n,c.readUshort(n,s)+l),u.baseCoverage=e._lctf.readCoverage(n,c.readUshort(n,s+2)+l),u.markClassCount=c.readUshort(n,s+4),u.markArray=e.GPOS.readMarkArray(n,c.readUshort(n,s+6)+l),u.baseArray=e.GPOS.readBaseArray(n,c.readUshort(n,s+8)+l,u.markClassCount);else if(i==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(n,c.readUshort(n,s)+l),u.mark2Coverage=e._lctf.readCoverage(n,c.readUshort(n,s+2)+l),u.markClassCount=c.readUshort(n,s+4),u.mark1Array=e.GPOS.readMarkArray(n,c.readUshort(n,s+6)+l),u.mark2Array=e.GPOS.readBaseArray(n,c.readUshort(n,s+8)+l,u.markClassCount);else{if(i==9&&u.fmt==1){var N=c.readUshort(n,s);s+=2;var q=c.readUint(n,s);if(s+=4,o.ltype==9)o.ltype=N;else if(o.ltype!=N)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,l+q)}console.debug("unsupported GPOS table LookupType",i,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,i,s){var o=e._bin,c=[];return c.push(1&s?o.readShort(n,i):0),i+=1&s?2:0,c.push(2&s?o.readShort(n,i):0),i+=2&s?2:0,c.push(4&s?o.readShort(n,i):0),i+=4&s?2:0,c.push(8&s?o.readShort(n,i):0),i+=8&s?2:0,c},e.GPOS.readBaseArray=function(n,i,s){var o=e._bin,c=[],l=i,u=o.readUshort(n,i);i+=2;for(var f=0;f<u;f++){for(var h=[],d=0;d<s;d++)h.push(e.GPOS.readAnchorRecord(n,l+o.readUshort(n,i))),i+=2;c.push(h)}return c},e.GPOS.readMarkArray=function(n,i){var s=e._bin,o=[],c=i,l=s.readUshort(n,i);i+=2;for(var u=0;u<l;u++){var f=e.GPOS.readAnchorRecord(n,s.readUshort(n,i+2)+c);f.markClass=s.readUshort(n,i),o.push(f),i+=4}return o},e.GPOS.readAnchorRecord=function(n,i){var s=e._bin,o={};return o.fmt=s.readUshort(n,i),o.x=s.readShort(n,i+2),o.y=s.readShort(n,i+4),o},e.GSUB={},e.GSUB.parse=function(n,i,s,o){return e._lctf.parse(n,i,s,o,e.GSUB.subt)},e.GSUB.subt=function(n,i,s,o){var c=e._bin,l=s,u={};if(u.fmt=c.readUshort(n,s),s+=2,i!=1&&i!=2&&i!=4&&i!=5&&i!=6)return null;if(i==1||i==2||i==4||i==5&&u.fmt<=2||i==6&&u.fmt<=2){var f=c.readUshort(n,s);s+=2,u.coverage=e._lctf.readCoverage(n,l+f)}if(i==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=c.readShort(n,s),s+=2;else if(u.fmt==2){var h=c.readUshort(n,s);s+=2,u.newg=c.readUshorts(n,s,h),s+=2*u.newg.length}}else if(i==2&&u.fmt==1){h=c.readUshort(n,s),s+=2,u.seqs=[];for(var d=0;d<h;d++){var _=c.readUshort(n,s)+l;s+=2;var x=c.readUshort(n,_);u.seqs.push(c.readUshorts(n,_+2,x))}}else if(i==4)for(u.vals=[],h=c.readUshort(n,s),s+=2,d=0;d<h;d++){var m=c.readUshort(n,s);s+=2,u.vals.push(e.GSUB.readLigatureSet(n,l+m))}else if(i==5&&u.fmt==2){if(u.fmt==2){var p=c.readUshort(n,s);s+=2,u.cDef=e._lctf.readClassDef(n,l+p),u.scset=[];var C=c.readUshort(n,s);for(s+=2,d=0;d<C;d++){var T=c.readUshort(n,s);s+=2,u.scset.push(T==0?null:e.GSUB.readSubClassSet(n,l+T))}}}else if(i==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){h=c.readUshort(n,s),s+=2;for(var y=[],U=0;U<h;U++)y.push(e._lctf.readCoverage(n,l+c.readUshort(n,s+2*U)));s+=2*h,d==0&&(u.backCvg=y),d==1&&(u.inptCvg=y),d==2&&(u.ahedCvg=y)}h=c.readUshort(n,s),s+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,s,h)}}else{if(i==7&&u.fmt==1){var D=c.readUshort(n,s);s+=2;var E=c.readUint(n,s);if(s+=4,o.ltype==9)o.ltype=D;else if(o.ltype!=D)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,l+E)}console.debug("unsupported GSUB table LookupType",i,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,i){var s=e._bin.readUshort,o=i,c=[],l=s(n,i);i+=2;for(var u=0;u<l;u++){var f=s(n,i);i+=2,c.push(e.GSUB.readSubClassRule(n,o+f))}return c},e.GSUB.readSubClassRule=function(n,i){var s=e._bin.readUshort,o={},c=s(n,i),l=s(n,i+=2);i+=2,o.input=[];for(var u=0;u<c-1;u++)o.input.push(s(n,i)),i+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,i,l),o},e.GSUB.readSubstLookupRecords=function(n,i,s){for(var o=e._bin.readUshort,c=[],l=0;l<s;l++)c.push(o(n,i),o(n,i+2)),i+=4;return c},e.GSUB.readChainSubClassSet=function(n,i){var s=e._bin,o=i,c=[],l=s.readUshort(n,i);i+=2;for(var u=0;u<l;u++){var f=s.readUshort(n,i);i+=2,c.push(e.GSUB.readChainSubClassRule(n,o+f))}return c},e.GSUB.readChainSubClassRule=function(n,i){for(var s=e._bin,o={},c=["backtrack","input","lookahead"],l=0;l<c.length;l++){var u=s.readUshort(n,i);i+=2,l==1&&u--,o[c[l]]=s.readUshorts(n,i,u),i+=2*o[c[l]].length}return u=s.readUshort(n,i),i+=2,o.subst=s.readUshorts(n,i,2*u),i+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,i){var s=e._bin,o=i,c=[],l=s.readUshort(n,i);i+=2;for(var u=0;u<l;u++){var f=s.readUshort(n,i);i+=2,c.push(e.GSUB.readLigature(n,o+f))}return c},e.GSUB.readLigature=function(n,i){var s=e._bin,o={chain:[]};o.nglyph=s.readUshort(n,i),i+=2;var c=s.readUshort(n,i);i+=2;for(var l=0;l<c-1;l++)o.chain.push(s.readUshort(n,i)),i+=2;return o},e.head={},e.head.parse=function(n,i,s){var o=e._bin,c={};return o.readFixed(n,i),i+=4,c.fontRevision=o.readFixed(n,i),i+=4,o.readUint(n,i),i+=4,o.readUint(n,i),i+=4,c.flags=o.readUshort(n,i),i+=2,c.unitsPerEm=o.readUshort(n,i),i+=2,c.created=o.readUint64(n,i),i+=8,c.modified=o.readUint64(n,i),i+=8,c.xMin=o.readShort(n,i),i+=2,c.yMin=o.readShort(n,i),i+=2,c.xMax=o.readShort(n,i),i+=2,c.yMax=o.readShort(n,i),i+=2,c.macStyle=o.readUshort(n,i),i+=2,c.lowestRecPPEM=o.readUshort(n,i),i+=2,c.fontDirectionHint=o.readShort(n,i),i+=2,c.indexToLocFormat=o.readShort(n,i),i+=2,c.glyphDataFormat=o.readShort(n,i),i+=2,c},e.hhea={},e.hhea.parse=function(n,i,s){var o=e._bin,c={};return o.readFixed(n,i),i+=4,c.ascender=o.readShort(n,i),i+=2,c.descender=o.readShort(n,i),i+=2,c.lineGap=o.readShort(n,i),i+=2,c.advanceWidthMax=o.readUshort(n,i),i+=2,c.minLeftSideBearing=o.readShort(n,i),i+=2,c.minRightSideBearing=o.readShort(n,i),i+=2,c.xMaxExtent=o.readShort(n,i),i+=2,c.caretSlopeRise=o.readShort(n,i),i+=2,c.caretSlopeRun=o.readShort(n,i),i+=2,c.caretOffset=o.readShort(n,i),i+=2,i+=8,c.metricDataFormat=o.readShort(n,i),i+=2,c.numberOfHMetrics=o.readUshort(n,i),i+=2,c},e.hmtx={},e.hmtx.parse=function(n,i,s,o){for(var c=e._bin,l={aWidth:[],lsBearing:[]},u=0,f=0,h=0;h<o.maxp.numGlyphs;h++)h<o.hhea.numberOfHMetrics&&(u=c.readUshort(n,i),i+=2,f=c.readShort(n,i),i+=2),l.aWidth.push(u),l.lsBearing.push(f);return l},e.kern={},e.kern.parse=function(n,i,s,o){var c=e._bin,l=c.readUshort(n,i);if(i+=2,l==1)return e.kern.parseV1(n,i-2,s,o);var u=c.readUshort(n,i);i+=2;for(var f={glyph1:[],rval:[]},h=0;h<u;h++){i+=2,s=c.readUshort(n,i),i+=2;var d=c.readUshort(n,i);i+=2;var _=d>>>8;if((_&=15)!=0)throw"unknown kern table format: "+_;i=e.kern.readFormat0(n,i,f)}return f},e.kern.parseV1=function(n,i,s,o){var c=e._bin;c.readFixed(n,i),i+=4;var l=c.readUint(n,i);i+=4;for(var u={glyph1:[],rval:[]},f=0;f<l;f++){c.readUint(n,i),i+=4;var h=c.readUshort(n,i);i+=2,c.readUshort(n,i),i+=2;var d=h>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;i=e.kern.readFormat0(n,i,u)}return u},e.kern.readFormat0=function(n,i,s){var o=e._bin,c=-1,l=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2;for(var u=0;u<l;u++){var f=o.readUshort(n,i);i+=2;var h=o.readUshort(n,i);i+=2;var d=o.readShort(n,i);i+=2,f!=c&&(s.glyph1.push(f),s.rval.push({glyph2:[],vals:[]}));var _=s.rval[s.rval.length-1];_.glyph2.push(h),_.vals.push(d),c=f}return i},e.loca={},e.loca.parse=function(n,i,s,o){var c=e._bin,l=[],u=o.head.indexToLocFormat,f=o.maxp.numGlyphs+1;if(u==0)for(var h=0;h<f;h++)l.push(c.readUshort(n,i+(h<<1))<<1);if(u==1)for(h=0;h<f;h++)l.push(c.readUint(n,i+(h<<2)));return l},e.maxp={},e.maxp.parse=function(n,i,s){var o=e._bin,c={},l=o.readUint(n,i);return i+=4,c.numGlyphs=o.readUshort(n,i),i+=2,l==65536&&(c.maxPoints=o.readUshort(n,i),i+=2,c.maxContours=o.readUshort(n,i),i+=2,c.maxCompositePoints=o.readUshort(n,i),i+=2,c.maxCompositeContours=o.readUshort(n,i),i+=2,c.maxZones=o.readUshort(n,i),i+=2,c.maxTwilightPoints=o.readUshort(n,i),i+=2,c.maxStorage=o.readUshort(n,i),i+=2,c.maxFunctionDefs=o.readUshort(n,i),i+=2,c.maxInstructionDefs=o.readUshort(n,i),i+=2,c.maxStackElements=o.readUshort(n,i),i+=2,c.maxSizeOfInstructions=o.readUshort(n,i),i+=2,c.maxComponentElements=o.readUshort(n,i),i+=2,c.maxComponentDepth=o.readUshort(n,i),i+=2),c},e.name={},e.name.parse=function(n,i,s){var o=e._bin,c={};o.readUshort(n,i),i+=2;var l=o.readUshort(n,i);i+=2,o.readUshort(n,i);for(var u,f=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],h=i+=2,d=0;d<l;d++){var _=o.readUshort(n,i);i+=2;var x=o.readUshort(n,i);i+=2;var m=o.readUshort(n,i);i+=2;var p=o.readUshort(n,i);i+=2;var C=o.readUshort(n,i);i+=2;var T=o.readUshort(n,i);i+=2;var y,U=f[p],D=h+12*l+T;if(_==0)y=o.readUnicode(n,D,C/2);else if(_==3&&x==0)y=o.readUnicode(n,D,C/2);else if(x==0)y=o.readASCII(n,D,C);else if(x==1)y=o.readUnicode(n,D,C/2);else if(x==3)y=o.readUnicode(n,D,C/2);else{if(_!=1)throw"unknown encoding "+x+", platformID: "+_;y=o.readASCII(n,D,C),console.debug("reading unknown MAC encoding "+x+" as ASCII")}var E="p"+_+","+m.toString(16);c[E]==null&&(c[E]={}),c[E][U!==void 0?U:p]=y,c[E]._lang=m}for(var S in c)if(c[S].postScriptName!=null&&c[S]._lang==1033)return c[S];for(var S in c)if(c[S].postScriptName!=null&&c[S]._lang==0)return c[S];for(var S in c)if(c[S].postScriptName!=null&&c[S]._lang==3084)return c[S];for(var S in c)if(c[S].postScriptName!=null)return c[S];for(var S in c){u=S;break}return console.debug("returning name table with languageID "+c[u]._lang),c[u]},e["OS/2"]={},e["OS/2"].parse=function(n,i,s){var o=e._bin.readUshort(n,i);i+=2;var c={};if(o==0)e["OS/2"].version0(n,i,c);else if(o==1)e["OS/2"].version1(n,i,c);else if(o==2||o==3||o==4)e["OS/2"].version2(n,i,c);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,i,c)}return c},e["OS/2"].version0=function(n,i,s){var o=e._bin;return s.xAvgCharWidth=o.readShort(n,i),i+=2,s.usWeightClass=o.readUshort(n,i),i+=2,s.usWidthClass=o.readUshort(n,i),i+=2,s.fsType=o.readUshort(n,i),i+=2,s.ySubscriptXSize=o.readShort(n,i),i+=2,s.ySubscriptYSize=o.readShort(n,i),i+=2,s.ySubscriptXOffset=o.readShort(n,i),i+=2,s.ySubscriptYOffset=o.readShort(n,i),i+=2,s.ySuperscriptXSize=o.readShort(n,i),i+=2,s.ySuperscriptYSize=o.readShort(n,i),i+=2,s.ySuperscriptXOffset=o.readShort(n,i),i+=2,s.ySuperscriptYOffset=o.readShort(n,i),i+=2,s.yStrikeoutSize=o.readShort(n,i),i+=2,s.yStrikeoutPosition=o.readShort(n,i),i+=2,s.sFamilyClass=o.readShort(n,i),i+=2,s.panose=o.readBytes(n,i,10),i+=10,s.ulUnicodeRange1=o.readUint(n,i),i+=4,s.ulUnicodeRange2=o.readUint(n,i),i+=4,s.ulUnicodeRange3=o.readUint(n,i),i+=4,s.ulUnicodeRange4=o.readUint(n,i),i+=4,s.achVendID=[o.readInt8(n,i),o.readInt8(n,i+1),o.readInt8(n,i+2),o.readInt8(n,i+3)],i+=4,s.fsSelection=o.readUshort(n,i),i+=2,s.usFirstCharIndex=o.readUshort(n,i),i+=2,s.usLastCharIndex=o.readUshort(n,i),i+=2,s.sTypoAscender=o.readShort(n,i),i+=2,s.sTypoDescender=o.readShort(n,i),i+=2,s.sTypoLineGap=o.readShort(n,i),i+=2,s.usWinAscent=o.readUshort(n,i),i+=2,s.usWinDescent=o.readUshort(n,i),i+=2},e["OS/2"].version1=function(n,i,s){var o=e._bin;return i=e["OS/2"].version0(n,i,s),s.ulCodePageRange1=o.readUint(n,i),i+=4,s.ulCodePageRange2=o.readUint(n,i),i+=4},e["OS/2"].version2=function(n,i,s){var o=e._bin;return i=e["OS/2"].version1(n,i,s),s.sxHeight=o.readShort(n,i),i+=2,s.sCapHeight=o.readShort(n,i),i+=2,s.usDefault=o.readUshort(n,i),i+=2,s.usBreak=o.readUshort(n,i),i+=2,s.usMaxContext=o.readUshort(n,i),i+=2},e["OS/2"].version5=function(n,i,s){var o=e._bin;return i=e["OS/2"].version2(n,i,s),s.usLowerOpticalPointSize=o.readUshort(n,i),i+=2,s.usUpperOpticalPointSize=o.readUshort(n,i),i+=2},e.post={},e.post.parse=function(n,i,s){var o=e._bin,c={};return c.version=o.readFixed(n,i),i+=4,c.italicAngle=o.readFixed(n,i),i+=4,c.underlinePosition=o.readShort(n,i),i+=2,c.underlineThickness=o.readShort(n,i),i+=2,c},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,i){var s=n.cmap,o=-1;if(s.p0e4!=null?o=s.p0e4:s.p3e1!=null?o=s.p3e1:s.p1e0!=null?o=s.p1e0:s.p0e3!=null&&(o=s.p0e3),o==-1)throw"no familiar platform and encoding!";var c=s.tables[o];if(c.format==0)return i>=c.map.length?0:c.map[i];if(c.format==4){for(var l=-1,u=0;u<c.endCount.length;u++)if(i<=c.endCount[u]){l=u;break}return l==-1||c.startCount[l]>i?0:65535&(c.idRangeOffset[l]!=0?c.glyphIdArray[i-c.startCount[l]+(c.idRangeOffset[l]>>1)-(c.idRangeOffset.length-l)]:i+c.idDelta[l])}if(c.format==12){if(i>c.groups[c.groups.length-1][1])return 0;for(u=0;u<c.groups.length;u++){var f=c.groups[u];if(f[0]<=i&&i<=f[1])return f[2]+(i-f[0])}return 0}throw"unknown cmap table format "+c.format},e.U.glyphToPath=function(n,i){var s={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[i]){var o=n.SVG.entries[i];return o==null?s:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[i]=o),o)}if(n.CFF){var c={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},l=n.CFF,u=n.CFF.Private;if(l.ROS){for(var f=0;l.FDSelect[f+2]<=i;)f+=2;u=l.FDArray[l.FDSelect[f+1]].Private}e.U._drawCFF(n.CFF.CharStrings[i],c,l,u,s)}else n.glyf&&e.U._drawGlyf(i,n,s);return s},e.U._drawGlyf=function(n,i,s){var o=i.glyf[n];o==null&&(o=i.glyf[n]=e.glyf._parseGlyf(i,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,s):e.U._compoGlyph(o,i,s))},e.U._simpleGlyph=function(n,i){for(var s=0;s<n.noc;s++){for(var o=s==0?0:n.endPts[s-1]+1,c=n.endPts[s],l=o;l<=c;l++){var u=l==o?c:l-1,f=l==c?o:l+1,h=1&n.flags[l],d=1&n.flags[u],_=1&n.flags[f],x=n.xs[l],m=n.ys[l];if(l==o)if(h){if(!d){e.U.P.moveTo(i,x,m);continue}e.U.P.moveTo(i,n.xs[u],n.ys[u])}else d?e.U.P.moveTo(i,n.xs[u],n.ys[u]):e.U.P.moveTo(i,(n.xs[u]+x)/2,(n.ys[u]+m)/2);h?d&&e.U.P.lineTo(i,x,m):_?e.U.P.qcurveTo(i,x,m,n.xs[f],n.ys[f]):e.U.P.qcurveTo(i,x,m,(x+n.xs[f])/2,(m+n.ys[f])/2)}e.U.P.closePath(i)}},e.U._compoGlyph=function(n,i,s){for(var o=0;o<n.parts.length;o++){var c={cmds:[],crds:[]},l=n.parts[o];e.U._drawGlyf(l.glyphIndex,i,c);for(var u=l.m,f=0;f<c.crds.length;f+=2){var h=c.crds[f],d=c.crds[f+1];s.crds.push(h*u.a+d*u.b+u.tx),s.crds.push(h*u.c+d*u.d+u.ty)}for(f=0;f<c.cmds.length;f++)s.cmds.push(c.cmds[f])}},e.U._getGlyphClass=function(n,i){var s=e._lctf.getInterval(i,n);return s==-1?0:i[s+2]},e.U._applySubs=function(n,i,s,o){for(var c=n.length-i-1,l=0;l<s.tabs.length;l++)if(s.tabs[l]!=null){var u,f=s.tabs[l];if(!f.coverage||(u=e._lctf.coverageIndex(f.coverage,n[i]))!=-1){if(s.ltype==1)n[i],f.fmt==1?n[i]=n[i]+f.delta:n[i]=f.newg[u];else if(s.ltype==4)for(var h=f.vals[u],d=0;d<h.length;d++){var _=h[d],x=_.chain.length;if(!(x>c)){for(var m=!0,p=0,C=0;C<x;C++){for(;n[i+p+(1+C)]==-1;)p++;_.chain[C]!=n[i+p+(1+C)]&&(m=!1)}if(m){for(n[i]=_.nglyph,C=0;C<x+p;C++)n[i+C+1]=-1;break}}}else if(s.ltype==5&&f.fmt==2)for(var T=e._lctf.getInterval(f.cDef,n[i]),y=f.cDef[T+2],U=f.scset[y],D=0;D<U.length;D++){var E=U[D],S=E.input;if(!(S.length>c)){for(m=!0,C=0;C<S.length;C++){var g=e._lctf.getInterval(f.cDef,n[i+1+C]);if(T==-1&&f.cDef[g+2]!=S[C]){m=!1;break}}if(m){var v=E.substLookupRecords;for(d=0;d<v.length;d+=2)v[d],v[d+1]}}}else if(s.ltype==6&&f.fmt==3){if(!e.U._glsCovered(n,f.backCvg,i-f.backCvg.length)||!e.U._glsCovered(n,f.inptCvg,i)||!e.U._glsCovered(n,f.ahedCvg,i+f.inptCvg.length))continue;var A=f.lookupRec;for(D=0;D<A.length;D+=2){T=A[D];var w=o[A[D+1]];e.U._applySubs(n,i+T,w,o)}}}}},e.U._glsCovered=function(n,i,s){for(var o=0;o<i.length;o++)if(e._lctf.coverageIndex(i[o],n[s+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,i,s){for(var o={cmds:[],crds:[]},c=0,l=0;l<i.length;l++){var u=i[l];if(u!=-1){for(var f=l<i.length-1&&i[l+1]!=-1?i[l+1]:0,h=e.U.glyphToPath(n,u),d=0;d<h.crds.length;d+=2)o.crds.push(h.crds[d]+c),o.crds.push(h.crds[d+1]);for(s&&o.cmds.push(s),d=0;d<h.cmds.length;d++)o.cmds.push(h.cmds[d]);s&&o.cmds.push("X"),c+=n.hmtx.aWidth[u],l<i.length-1&&(c+=e.U.getPairAdjustment(n,u,f))}}return o},e.U.P={},e.U.P.moveTo=function(n,i,s){n.cmds.push("M"),n.crds.push(i,s)},e.U.P.lineTo=function(n,i,s){n.cmds.push("L"),n.crds.push(i,s)},e.U.P.curveTo=function(n,i,s,o,c,l,u){n.cmds.push("C"),n.crds.push(i,s,o,c,l,u)},e.U.P.qcurveTo=function(n,i,s,o,c){n.cmds.push("Q"),n.crds.push(i,s,o,c)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,i,s,o,c){for(var l=i.stack,u=i.nStems,f=i.haveWidth,h=i.width,d=i.open,_=0,x=i.x,m=i.y,p=0,C=0,T=0,y=0,U=0,D=0,E=0,S=0,g=0,v=0,A={val:0,size:0};_<n.length;){e.CFF.getCharString(n,_,A);var w=A.val;if(_+=A.size,w=="o1"||w=="o18")l.length%2!=0&&!f&&(h=l.shift()+o.nominalWidthX),u+=l.length>>1,l.length=0,f=!0;else if(w=="o3"||w=="o23")l.length%2!=0&&!f&&(h=l.shift()+o.nominalWidthX),u+=l.length>>1,l.length=0,f=!0;else if(w=="o4")l.length>1&&!f&&(h=l.shift()+o.nominalWidthX,f=!0),d&&e.U.P.closePath(c),m+=l.pop(),e.U.P.moveTo(c,x,m),d=!0;else if(w=="o5")for(;l.length>0;)x+=l.shift(),m+=l.shift(),e.U.P.lineTo(c,x,m);else if(w=="o6"||w=="o7")for(var L=l.length,N=w=="o6",q=0;q<L;q++){var V=l.shift();N?x+=V:m+=V,N=!N,e.U.P.lineTo(c,x,m)}else if(w=="o8"||w=="o24"){L=l.length;for(var Y=0;Y+6<=L;)p=x+l.shift(),C=m+l.shift(),T=p+l.shift(),y=C+l.shift(),x=T+l.shift(),m=y+l.shift(),e.U.P.curveTo(c,p,C,T,y,x,m),Y+=6;w=="o24"&&(x+=l.shift(),m+=l.shift(),e.U.P.lineTo(c,x,m))}else{if(w=="o11")break;if(w=="o1234"||w=="o1235"||w=="o1236"||w=="o1237")w=="o1234"&&(C=m,T=(p=x+l.shift())+l.shift(),v=y=C+l.shift(),D=y,S=m,x=(E=(U=(g=T+l.shift())+l.shift())+l.shift())+l.shift(),e.U.P.curveTo(c,p,C,T,y,g,v),e.U.P.curveTo(c,U,D,E,S,x,m)),w=="o1235"&&(p=x+l.shift(),C=m+l.shift(),T=p+l.shift(),y=C+l.shift(),g=T+l.shift(),v=y+l.shift(),U=g+l.shift(),D=v+l.shift(),E=U+l.shift(),S=D+l.shift(),x=E+l.shift(),m=S+l.shift(),l.shift(),e.U.P.curveTo(c,p,C,T,y,g,v),e.U.P.curveTo(c,U,D,E,S,x,m)),w=="o1236"&&(p=x+l.shift(),C=m+l.shift(),T=p+l.shift(),v=y=C+l.shift(),D=y,E=(U=(g=T+l.shift())+l.shift())+l.shift(),S=D+l.shift(),x=E+l.shift(),e.U.P.curveTo(c,p,C,T,y,g,v),e.U.P.curveTo(c,U,D,E,S,x,m)),w=="o1237"&&(p=x+l.shift(),C=m+l.shift(),T=p+l.shift(),y=C+l.shift(),g=T+l.shift(),v=y+l.shift(),U=g+l.shift(),D=v+l.shift(),E=U+l.shift(),S=D+l.shift(),Math.abs(E-x)>Math.abs(S-m)?x=E+l.shift():m=S+l.shift(),e.U.P.curveTo(c,p,C,T,y,g,v),e.U.P.curveTo(c,U,D,E,S,x,m));else if(w=="o14"){if(l.length>0&&!f&&(h=l.shift()+s.nominalWidthX,f=!0),l.length==4){var W=l.shift(),G=l.shift(),j=l.shift(),P=l.shift(),k=e.CFF.glyphBySE(s,j),X=e.CFF.glyphBySE(s,P);e.U._drawCFF(s.CharStrings[k],i,s,o,c),i.x=W,i.y=G,e.U._drawCFF(s.CharStrings[X],i,s,o,c)}d&&(e.U.P.closePath(c),d=!1)}else if(w=="o19"||w=="o20")l.length%2!=0&&!f&&(h=l.shift()+o.nominalWidthX),u+=l.length>>1,l.length=0,f=!0,_+=u+7>>3;else if(w=="o21")l.length>2&&!f&&(h=l.shift()+o.nominalWidthX,f=!0),m+=l.pop(),x+=l.pop(),d&&e.U.P.closePath(c),e.U.P.moveTo(c,x,m),d=!0;else if(w=="o22")l.length>1&&!f&&(h=l.shift()+o.nominalWidthX,f=!0),x+=l.pop(),d&&e.U.P.closePath(c),e.U.P.moveTo(c,x,m),d=!0;else if(w=="o25"){for(;l.length>6;)x+=l.shift(),m+=l.shift(),e.U.P.lineTo(c,x,m);p=x+l.shift(),C=m+l.shift(),T=p+l.shift(),y=C+l.shift(),x=T+l.shift(),m=y+l.shift(),e.U.P.curveTo(c,p,C,T,y,x,m)}else if(w=="o26")for(l.length%2&&(x+=l.shift());l.length>0;)p=x,C=m+l.shift(),x=T=p+l.shift(),m=(y=C+l.shift())+l.shift(),e.U.P.curveTo(c,p,C,T,y,x,m);else if(w=="o27")for(l.length%2&&(m+=l.shift());l.length>0;)C=m,T=(p=x+l.shift())+l.shift(),y=C+l.shift(),x=T+l.shift(),m=y,e.U.P.curveTo(c,p,C,T,y,x,m);else if(w=="o10"||w=="o29"){var $=w=="o10"?o:s;if(l.length==0)console.debug("error: empty stack");else{var I=l.pop(),K=$.Subrs[I+$.Bias];i.x=x,i.y=m,i.nStems=u,i.haveWidth=f,i.width=h,i.open=d,e.U._drawCFF(K,i,s,o,c),x=i.x,m=i.y,u=i.nStems,f=i.haveWidth,h=i.width,d=i.open}}else if(w=="o30"||w=="o31"){var H=l.length,Z=(Y=0,w=="o31");for(Y+=H-(L=-3&H);Y<L;)Z?(C=m,T=(p=x+l.shift())+l.shift(),m=(y=C+l.shift())+l.shift(),L-Y==5?(x=T+l.shift(),Y++):x=T,Z=!1):(p=x,C=m+l.shift(),T=p+l.shift(),y=C+l.shift(),x=T+l.shift(),L-Y==5?(m=y+l.shift(),Y++):m=y,Z=!0),e.U.P.curveTo(c,p,C,T,y,x,m),Y+=4}else{if((w+"").charAt(0)=="o")throw console.debug("Unknown operation: "+w,n),w;l.push(w)}}}i.x=x,i.y=m,i.nStems=u,i.haveWidth=f,i.width=h,i.open=d};var t=e,r={Typr:t};return a.Typr=t,a.default=r,Object.defineProperty(a,"__esModule",{value:!0}),a})({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function lg(){return(function(a){var e=Uint8Array,t=Uint16Array,r=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(w,L){for(var N=new t(31),q=0;q<31;++q)N[q]=L+=1<<w[q-1];var V=new r(N[30]);for(q=1;q<30;++q)for(var Y=N[q];Y<N[q+1];++Y)V[Y]=Y-N[q]<<5|q;return[N,V]},c=o(n,2),l=c[0],u=c[1];l[28]=258,u[258]=28;for(var f=o(i,0)[0],h=new t(32768),d=0;d<32768;++d){var _=(43690&d)>>>1|(21845&d)<<1;_=(61680&(_=(52428&_)>>>2|(13107&_)<<2))>>>4|(3855&_)<<4,h[d]=((65280&_)>>>8|(255&_)<<8)>>>1}var x=function(w,L,N){for(var q=w.length,V=0,Y=new t(L);V<q;++V)++Y[w[V]-1];var W,G=new t(L);for(V=0;V<L;++V)G[V]=G[V-1]+Y[V-1]<<1;{W=new t(1<<L);var j=15-L;for(V=0;V<q;++V)if(w[V])for(var P=V<<4|w[V],k=L-w[V],X=G[w[V]-1]++<<k,$=X|(1<<k)-1;X<=$;++X)W[h[X]>>>j]=P}return W},m=new e(288);for(d=0;d<144;++d)m[d]=8;for(d=144;d<256;++d)m[d]=9;for(d=256;d<280;++d)m[d]=7;for(d=280;d<288;++d)m[d]=8;var p=new e(32);for(d=0;d<32;++d)p[d]=5;var C=x(m,9),T=x(p,5),y=function(w){for(var L=w[0],N=1;N<w.length;++N)w[N]>L&&(L=w[N]);return L},U=function(w,L,N){var q=L/8|0;return(w[q]|w[q+1]<<8)>>(7&L)&N},D=function(w,L){var N=L/8|0;return(w[N]|w[N+1]<<8|w[N+2]<<16)>>(7&L)},E=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],S=function(w,L,N){var q=new Error(L||E[w]);if(q.code=w,Error.captureStackTrace&&Error.captureStackTrace(q,S),!N)throw q;return q},g=function(w,L,N){var q=w.length;if(!q||N&&!N.l&&q<5)return L||new e(0);var V=!L||N,Y=!N||N.i;N||(N={}),L||(L=new e(3*q));var W,G=function(Te){var Ue=L.length;if(Te>Ue){var Re=new e(Math.max(2*Ue,Te));Re.set(L),L=Re}},j=N.f||0,P=N.p||0,k=N.b||0,X=N.l,$=N.d,I=N.m,K=N.n,H=8*q;do{if(!X){N.f=j=U(w,P,1);var Z=U(w,P+1,3);if(P+=3,!Z){var ie=w[(ge=((W=P)/8|0)+(7&W&&1)+4)-4]|w[ge-3]<<8,me=ge+ie;if(me>q){Y&&S(0);break}V&&G(k+ie),L.set(w.subarray(ge,me),k),N.b=k+=ie,N.p=P=8*me;continue}if(Z==1)X=C,$=T,I=9,K=5;else if(Z==2){var ce=U(w,P,31)+257,ne=U(w,P+10,15)+4,F=ce+U(w,P+5,31)+1;P+=14;for(var be=new e(F),pe=new e(19),Se=0;Se<ne;++Se)pe[s[Se]]=U(w,P+3*Se,7);P+=3*ne;var Me=y(pe),he=(1<<Me)-1,ae=x(pe,Me);for(Se=0;Se<F;){var ge,ue=ae[U(w,P,he)];if(P+=15&ue,(ge=ue>>>4)<16)be[Se++]=ge;else{var De=0,b=0;for(ge==16?(b=3+U(w,P,3),P+=2,De=be[Se-1]):ge==17?(b=3+U(w,P,7),P+=3):ge==18&&(b=11+U(w,P,127),P+=7);b--;)be[Se++]=De}}var M=be.subarray(0,ce),O=be.subarray(ce);I=y(M),K=y(O),X=x(M,I),$=x(O,K)}else S(1);if(P>H){Y&&S(0);break}}V&&G(k+131072);for(var te=(1<<I)-1,ee=(1<<K)-1,J=P;;J=P){var Ee=(De=X[D(w,P)&te])>>>4;if((P+=15&De)>H){Y&&S(0);break}if(De||S(2),Ee<256)L[k++]=Ee;else{if(Ee==256){J=P,X=null;break}var ve=Ee-254;if(Ee>264){var Ae=n[Se=Ee-257];ve=U(w,P,(1<<Ae)-1)+l[Se],P+=Ae}var we=$[D(w,P)&ee],fe=we>>>4;if(we||S(3),P+=15&we,O=f[fe],fe>3&&(Ae=i[fe],O+=D(w,P)&(1<<Ae)-1,P+=Ae),P>H){Y&&S(0);break}V&&G(k+131072);for(var xe=k+ve;k<xe;k+=4)L[k]=L[k-O],L[k+1]=L[k+1-O],L[k+2]=L[k+2-O],L[k+3]=L[k+3-O];k=xe}}N.l=X,N.p=J,N.b=k,X&&(j=1,N.m=I,N.d=$,N.n=K)}while(!j);return k==L.length?L:(function(Te,Ue,Re){(Re==null||Re>Te.length)&&(Re=Te.length);var Ge=new(Te instanceof t?t:Te instanceof r?r:e)(Re-Ue);return Ge.set(Te.subarray(Ue,Re)),Ge})(L,0,k)},v=new e(0),A=typeof TextDecoder<"u"&&new TextDecoder;try{A.decode(v,{stream:!0})}catch{}return a.convert_streams=function(w){var L=new DataView(w),N=0;function q(){var ce=L.getUint16(N);return N+=2,ce}function V(){var ce=L.getUint32(N);return N+=4,ce}function Y(ce){ie.setUint16(me,ce),me+=2}function W(ce){ie.setUint32(me,ce),me+=4}for(var G={signature:V(),flavor:V(),length:V(),numTables:q(),reserved:q(),totalSfntSize:V(),majorVersion:q(),minorVersion:q(),metaOffset:V(),metaLength:V(),metaOrigLength:V(),privOffset:V(),privLength:V()},j=0;Math.pow(2,j)<=G.numTables;)j++;j--;for(var P=16*Math.pow(2,j),k=16*G.numTables-P,X=12,$=[],I=0;I<G.numTables;I++)$.push({tag:V(),offset:V(),compLength:V(),origLength:V(),origChecksum:V()}),X+=16;var K,H=new Uint8Array(12+16*$.length+$.reduce((function(ce,ne){return ce+ne.origLength+4}),0)),Z=H.buffer,ie=new DataView(Z),me=0;return W(G.flavor),Y(G.numTables),Y(P),Y(j),Y(k),$.forEach((function(ce){W(ce.tag),W(ce.origChecksum),W(X),W(ce.origLength),ce.outOffset=X,(X+=ce.origLength)%4!=0&&(X+=4-X%4)})),$.forEach((function(ce){var ne,F=w.slice(ce.offset,ce.offset+ce.compLength);if(ce.compLength!=ce.origLength){var be=new Uint8Array(ce.origLength);ne=new Uint8Array(F,2),g(ne,be)}else be=new Uint8Array(F);H.set(be,ce.outOffset);var pe=0;(X=ce.outOffset+ce.origLength)%4!=0&&(pe=4-X%4),H.set(new Uint8Array(pe).buffer,ce.outOffset+ce.origLength),K=X+pe})),Z.slice(0,K)},Object.defineProperty(a,"__esModule",{value:!0}),a})({}).convert_streams}function cg(a,e){const t={M:2,L:2,Q:4,C:6,Z:0},r={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,i=2,s=4,o=8,c=16,l=32;let u;function f(E){if(!u){const S={R:i,L:n,D:s,C:c,U:l,T:o};u=new Map;for(let g in r){let v=0;r[g].split(",").forEach(A=>{let[w,L]=A.split("+");w=parseInt(w,36),L=L?parseInt(L,36):0,u.set(v+=w,S[g]);for(let N=L;N--;)u.set(++v,S[g])})}}return u.get(E)||l}const h=1,d=2,_=3,x=4,m=[null,"isol","init","fina","medi"];function p(E){const S=new Uint8Array(E.length);let g=l,v=h,A=-1;for(let w=0;w<E.length;w++){const L=E.codePointAt(w);let N=f(L)|0,q=h;N&o||(g&(n|s|c)?N&(i|s|c)?(q=_,(v===h||v===_)&&S[A]++):N&(n|l)&&(v===d||v===x)&&S[A]--:g&(i|l)&&(v===d||v===x)&&S[A]--,v=S[w]=q,g=N,A=w,L>65535&&w++)}return S}function C(E,S){const g=[];for(let A=0;A<S.length;A++){const w=S.codePointAt(A);w>65535&&A++,g.push(a.U.codeToGlyph(E,w))}const v=E.GSUB;if(v){const{lookupList:A,featureList:w}=v;let L;const N=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,q=[];w.forEach(V=>{if(N.test(V.tag))for(let Y=0;Y<V.tab.length;Y++){if(q[V.tab[Y]])continue;q[V.tab[Y]]=!0;const W=A[V.tab[Y]],G=/^(isol|init|fina|medi)$/.test(V.tag);G&&!L&&(L=p(S));for(let j=0;j<g.length;j++)(!L||!G||m[L[j]]===V.tag)&&a.U._applySubs(g,j,W,A)}})}return g}function T(E,S){const g=new Int16Array(S.length*3);let v=0;for(;v<S.length;v++){const N=S[v];if(N===-1)continue;g[v*3+2]=E.hmtx.aWidth[N];const q=E.GPOS;if(q){const V=q.lookupList;for(let Y=0;Y<V.length;Y++){const W=V[Y];for(let G=0;G<W.tabs.length;G++){const j=W.tabs[G];if(W.ltype===1){if(a._lctf.coverageIndex(j.coverage,N)!==-1&&j.pos){L(j.pos,v);break}}else if(W.ltype===2){let P=null,k=A();if(k!==-1){const X=a._lctf.coverageIndex(j.coverage,S[k]);if(X!==-1){if(j.fmt===1){const $=j.pairsets[X];for(let I=0;I<$.length;I++)$[I].gid2===N&&(P=$[I])}else if(j.fmt===2){const $=a.U._getGlyphClass(S[k],j.classDef1),I=a.U._getGlyphClass(N,j.classDef2);P=j.matrix[$][I]}if(P){P.val1&&L(P.val1,k),P.val2&&L(P.val2,v);break}}}}else if(W.ltype===4){const P=a._lctf.coverageIndex(j.markCoverage,N);if(P!==-1){const k=A(w),X=k===-1?-1:a._lctf.coverageIndex(j.baseCoverage,S[k]);if(X!==-1){const $=j.markArray[P],I=j.baseArray[X][$.markClass];g[v*3]=I.x-$.x+g[k*3]-g[k*3+2],g[v*3+1]=I.y-$.y+g[k*3+1];break}}}else if(W.ltype===6){const P=a._lctf.coverageIndex(j.mark1Coverage,N);if(P!==-1){const k=A();if(k!==-1){const X=S[k];if(y(E,X)===3){const $=a._lctf.coverageIndex(j.mark2Coverage,X);if($!==-1){const I=j.mark1Array[P],K=j.mark2Array[$][I.markClass];g[v*3]=K.x-I.x+g[k*3]-g[k*3+2],g[v*3+1]=K.y-I.y+g[k*3+1];break}}}}}}}}else if(E.kern&&!E.cff){const V=A();if(V!==-1){const Y=E.kern.glyph1.indexOf(S[V]);if(Y!==-1){const W=E.kern.rval[Y].glyph2.indexOf(N);W!==-1&&(g[V*3+2]+=E.kern.rval[Y].vals[W])}}}}return g;function A(N){for(let q=v-1;q>=0;q--)if(S[q]!==-1&&(!N||N(S[q])))return q;return-1}function w(N){return y(E,N)===1}function L(N,q){for(let V=0;V<3;V++)g[q*3+V]+=N[V]||0}}function y(E,S){const g=E.GDEF&&E.GDEF.glyphClassDef;return g?a.U._getGlyphClass(S,g):0}function U(...E){for(let S=0;S<E.length;S++)if(typeof E[S]=="number")return E[S]}function D(E){const S=Object.create(null),g=E["OS/2"],v=E.hhea,A=E.head.unitsPerEm,w=U(g&&g.sTypoAscender,v&&v.ascender,A),L={unitsPerEm:A,ascender:w,descender:U(g&&g.sTypoDescender,v&&v.descender,0),capHeight:U(g&&g.sCapHeight,w),xHeight:U(g&&g.sxHeight,w),lineGap:U(g&&g.sTypoLineGap,v&&v.lineGap),supportsCodePoint(N){return a.U.codeToGlyph(E,N)>0},forEachGlyph(N,q,V,Y){let W=0;const G=1/L.unitsPerEm*q,j=C(E,N);let P=0;const k=T(E,j);return j.forEach((X,$)=>{if(X!==-1){let I=S[X];if(!I){const{cmds:K,crds:H}=a.U.glyphToPath(E,X);let Z="",ie=0;for(let be=0,pe=K.length;be<pe;be++){const Se=t[K[be]];Z+=K[be];for(let Me=1;Me<=Se;Me++)Z+=(Me>1?",":"")+H[ie++]}let me,ce,ne,F;if(H.length){me=ce=1/0,ne=F=-1/0;for(let be=0,pe=H.length;be<pe;be+=2){let Se=H[be],Me=H[be+1];Se<me&&(me=Se),Me<ce&&(ce=Me),Se>ne&&(ne=Se),Me>F&&(F=Me)}}else me=ne=ce=F=0;I=S[X]={index:X,advanceWidth:E.hmtx.aWidth[X],xMin:me,yMin:ce,xMax:ne,yMax:F,path:Z}}Y.call(null,I,W+k[$*3]*G,k[$*3+1]*G,P),W+=k[$*3+2]*G,V&&(W+=V*q)}P+=N.codePointAt(P)>65535?2:1}),W}};return L}return function(S){const g=new Uint8Array(S,0,4),v=a._bin.readASCII(g,0,4);if(v==="wOFF")S=e(S);else if(v==="wOF2")throw new Error("woff2 fonts not supported");return D(a.parse(S)[0])}}const ug=Oi({name:"Typr Font Parser",dependencies:[og,lg,cg],init(a,e,t){const r=a(),n=e();return t(r,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function fg(){return(function(a){var e=function(){this.buckets=new Map};e.prototype.add=function(T){var y=T>>5;this.buckets.set(y,(this.buckets.get(y)||0)|1<<(31&T))},e.prototype.has=function(T){var y=this.buckets.get(T>>5);return y!==void 0&&(y&1<<(31&T))!=0},e.prototype.serialize=function(){var T=[];return this.buckets.forEach((function(y,U){T.push((+U).toString(36)+":"+y.toString(36))})),T.join(",")},e.prototype.deserialize=function(T){var y=this;this.buckets.clear(),T.split(",").forEach((function(U){var D=U.split(":");y.buckets.set(parseInt(D[0],36),parseInt(D[1],36))}))};var t=Math.pow(2,8),r=t-1,n=~r;function i(T){var y=(function(D){return D&n})(T).toString(16),U=(function(D){return(D&n)+t-1})(T).toString(16);return"codepoint-index/plane"+(T>>16)+"/"+y+"-"+U+".json"}function s(T,y){var U=T&r,D=y.codePointAt(U/6|0);return((D=(D||48)-48)&1<<U%6)!=0}function o(T,y){var U;(U=T,U.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map((function(D){return D.split("-").map((function(E){return parseInt(E.trim(),16)}))}))).forEach((function(D){var E=D[0],S=D[1];S===void 0&&(S=E),y(E,S)}))}function c(T,y){o(T,(function(U,D){for(var E=U;E<=D;E++)y(E)}))}var l={},u={},f=new WeakMap,h="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(T){var y=f.get(T);return y||(y=new e,c(T.ranges,(function(U){return y.add(U)})),f.set(T,y)),y}var _,x=new Map;function m(T,y,U){return T[y]?y:T[U]?U:(function(D){for(var E in D)return E})(T)}function p(T,y){var U=y;if(!T.includes(U)){U=1/0;for(var D=0;D<T.length;D++)Math.abs(T[D]-y)<Math.abs(U-y)&&(U=T[D])}return U}function C(T){return _||(_=new Set,c("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",(function(y){_.add(y)}))),_.has(T)}return a.CodePointSet=e,a.clearCache=function(){l={},u={}},a.getFontsForString=function(T,y){y===void 0&&(y={});var U,D=y.lang;D===void 0&&(D=new RegExp("\\p{Script=Hangul}","u").test(U=T)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(U)?"ja":"en");var E=y.category;E===void 0&&(E="sans-serif");var S=y.style;S===void 0&&(S="normal");var g=y.weight;g===void 0&&(g=400);var v=(y.dataUrl||h).replace(/\/$/g,""),A=new Map,w=new Uint8Array(T.length),L={},N={},q=new Array(T.length),V=new Map,Y=!1;function W(P){var k=x.get(P);return k||(k=fetch(v+"/"+P).then((function(X){if(!X.ok)throw new Error(X.statusText);return X.json().then((function($){if(!Array.isArray($)||$[0]!==1)throw new Error("Incorrect schema version; need 1, got "+$[0]);return $[1]}))})).catch((function(X){if(v!==h)return Y||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+v+'", trying default CDN. '+X.message),Y=!0),v=h,x.delete(P),W(P);throw X})),x.set(P,k)),k}for(var G=function(P){var k=T.codePointAt(P),X=i(k);q[P]=X,l[X]||V.has(X)||V.set(X,W(X).then((function($){l[X]=$}))),k>65535&&(P++,j=P)},j=0;j<T.length;j++)G(j);return Promise.all(V.values()).then((function(){V.clear();for(var P=function(X){var $=T.codePointAt(X),I=null,K=l[q[X]],H=void 0;for(var Z in K){var ie=N[Z];if(ie===void 0&&(ie=N[Z]=new RegExp(Z).test(D||"en")),ie){for(var me in H=Z,K[Z])if(s($,K[Z][me])){I=me;break}break}}if(!I){e:for(var ce in K)if(ce!==H){for(var ne in K[ce])if(s($,K[ce][ne])){I=ne;break e}}}I||(console.debug("No font coverage for U+"+$.toString(16)),I="latin"),q[X]=I,u[I]||V.has(I)||V.set(I,W("font-meta/"+I+".json").then((function(F){u[I]=F}))),$>65535&&(X++,k=X)},k=0;k<T.length;k++)P(k);return Promise.all(V.values())})).then((function(){for(var P,k=null,X=0;X<T.length;X++){var $=T.codePointAt(X);if(k&&(C($)||d(k).has($)))w[X]=w[X-1];else{k=u[q[X]];var I=L[k.id];if(!I){var K=k.typeforms,H=m(K,E,"sans-serif"),Z=m(K[H],S,"normal"),ie=p((P=K[H])===null||P===void 0?void 0:P[Z],g);I=L[k.id]=v+"/font-files/"+k.id+"/"+H+"."+Z+"."+ie+".woff"}var me=A.get(I);me==null&&(me=A.size,A.set(I,me)),w[X]=me}$>65535&&(X++,w[X]=w[X-1])}return{fontUrls:Array.from(A.keys()),chars:w}}))},Object.defineProperty(a,"__esModule",{value:!0}),a})({})}function hg(a,e){const t=Object.create(null),r=Object.create(null);function n(s,o){const c=l=>{console.error(`Failure loading font ${s}`,l)};try{const l=new XMLHttpRequest;l.open("get",s,!0),l.responseType="arraybuffer",l.onload=function(){if(l.status>=400)c(new Error(l.statusText));else if(l.status>0)try{const u=a(l.response);u.src=s,o(u)}catch(u){c(u)}},l.onerror=c,l.send()}catch(l){c(l)}}function i(s,o){let c=t[s];c?o(c):r[s]?r[s].push(o):(r[s]=[o],n(s,l=>{l.src=s,t[s]=l,r[s].forEach(u=>u(l)),delete r[s]}))}return function(s,o,{lang:c,fonts:l=[],style:u="normal",weight:f="normal",unicodeFontsURL:h}={}){const d=new Uint8Array(s.length),_=[];s.length||C();const x=new Map,m=[];if(u!=="italic"&&(u="normal"),typeof f!="number"&&(f=f==="bold"?700:400),l&&!Array.isArray(l)&&(l=[l]),l=l.slice().filter(y=>!y.lang||y.lang.test(c)).reverse(),l.length){let E=0;(function S(g=0){for(let v=g,A=s.length;v<A;v++){const w=s.codePointAt(v);if(E===1&&_[d[v-1]].supportsCodePoint(w)||v>0&&/\s/.test(s[v]))d[v]=d[v-1],E===2&&(m[m.length-1][1]=v);else for(let L=d[v],N=l.length;L<=N;L++)if(L===N){const q=E===2?m[m.length-1]:m[m.length]=[v,v];q[1]=v,E=2}else{d[v]=L;const{src:q,unicodeRange:V}=l[L];if(!V||T(w,V)){const Y=t[q];if(!Y){i(q,()=>{S(v)});return}if(Y.supportsCodePoint(w)){let W=x.get(Y);typeof W!="number"&&(W=_.length,_.push(Y),x.set(Y,W)),d[v]=W,E=1;break}}}w>65535&&v+1<A&&(d[v+1]=d[v],v++,E===2&&(m[m.length-1][1]=v))}p()})()}else m.push([0,s.length-1]),p();function p(){if(m.length){const y=m.map(U=>s.substring(U[0],U[1]+1)).join(`
`);e.getFontsForString(y,{lang:c||void 0,style:u,weight:f,dataUrl:h}).then(({fontUrls:U,chars:D})=>{const E=_.length;let S=0;m.forEach(v=>{for(let A=0,w=v[1]-v[0];A<=w;A++)d[v[0]+A]=D[S++]+E;S++});let g=0;U.forEach((v,A)=>{i(v,w=>{_[A+E]=w,++g===U.length&&C()})})})}else C()}function C(){o({chars:d,fonts:_})}function T(y,U){for(let D=0;D<U.length;D++){const[E,S=E]=U[D];if(E<=y&&y<=S)return!0}return!1}}}const dg=Oi({name:"FontResolver",dependencies:[hg,ug,fg],init(a,e,t){return a(e,t())}});function pg(a,e){const r=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",i=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function s({text:_,lang:x,fonts:m,style:p,weight:C,preResolvedFonts:T,unicodeFontsURL:y},U){const D=({chars:E,fonts:S})=>{let g,v;const A=[];for(let w=0;w<E.length;w++)E[w]!==v?(v=E[w],A.push(g={start:w,end:w,fontObj:S[E[w]]})):g.end=w;U(A)};T?D(T):a(_,D,{lang:x,fonts:m,style:p,weight:C,unicodeFontsURL:y})}function o({text:_="",font:x,lang:m,sdfGlyphSize:p=64,fontSize:C=400,fontWeight:T=1,fontStyle:y="normal",letterSpacing:U=0,lineHeight:D="normal",maxWidth:E=1/0,direction:S,textAlign:g="left",textIndent:v=0,whiteSpace:A="normal",overflowWrap:w="normal",anchorX:L=0,anchorY:N=0,metricsOnly:q=!1,unicodeFontsURL:V,preResolvedFonts:Y=null,includeCaretPositions:W=!1,chunkedBoundsSize:G=8192,colorRanges:j=null},P){const k=f(),X={fontLoad:0,typesetting:0};_.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),_=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),C=+C,U=+U,E=+E,D=D||"normal",v=+v,s({text:_,lang:m,style:y,weight:T,fonts:typeof x=="string"?[{src:x}]:x,unicodeFontsURL:V,preResolvedFonts:Y},$=>{X.fontLoad=f()-k;const I=isFinite(E);let K=null,H=null,Z=null,ie=null,me=null,ce=null,ne=null,F=null,be=0,pe=0,Se=A!=="nowrap";const Me=new Map,he=f();let ae=v,ge=0,ue=new h;const De=[ue];$.forEach(ee=>{const{fontObj:J}=ee,{ascender:Ee,descender:ve,unitsPerEm:Ae,lineGap:we,capHeight:fe,xHeight:xe}=J;let Te=Me.get(J);if(!Te){const de=C/Ae,ye=D==="normal"?(Ee-ve+we)*de:D*C,Fe=(ye-(Ee-ve)*de)/2,_e=Math.min(ye,(Ee-ve)*de),se=(Ee+ve)/2*de+_e/2;Te={index:Me.size,src:J.src,fontObj:J,fontSizeMult:de,unitsPerEm:Ae,ascender:Ee*de,descender:ve*de,capHeight:fe*de,xHeight:xe*de,lineHeight:ye,baseline:-Fe-Ee*de,caretTop:se,caretBottom:se-_e},Me.set(J,Te)}const{fontSizeMult:Ue}=Te,Re=_.slice(ee.start,ee.end+1);let Ge,z;J.forEachGlyph(Re,C,U,(de,ye,Fe,_e)=>{ye+=ge,_e+=ee.start,Ge=ye,z=de;const se=_.charAt(_e),Pe=de.advanceWidth*Ue,Oe=ue.count;let Be;if("isEmpty"in de||(de.isWhitespace=!!se&&new RegExp(n).test(se),de.canBreakAfter=!!se&&i.test(se),de.isEmpty=de.xMin===de.xMax||de.yMin===de.yMax||r.test(se)),!de.isWhitespace&&!de.isEmpty&&pe++,Se&&I&&!de.isWhitespace&&ye+Pe+ae>E&&Oe){if(ue.glyphAt(Oe-1).glyphObj.canBreakAfter)Be=new h,ae=-ye;else for(let lt=Oe;lt--;)if(lt===0&&w==="break-word"){Be=new h,ae=-ye;break}else if(ue.glyphAt(lt).glyphObj.canBreakAfter){Be=ue.splitAt(lt+1);const st=Be.glyphAt(0).x;ae-=st;for(let ut=Be.count;ut--;)Be.glyphAt(ut).x-=st;break}Be&&(ue.isSoftWrapped=!0,ue=Be,De.push(ue),be=E)}let Ve=ue.glyphAt(ue.count);Ve.glyphObj=de,Ve.x=ye+ae,Ve.y=Fe,Ve.width=Pe,Ve.charIndex=_e,Ve.fontData=Te,se===`
`&&(ue=new h,De.push(ue),ae=-(ye+Pe+U*C)+v)}),ge=Ge+z.advanceWidth*Ue+U*C});let b=0;De.forEach(ee=>{let J=!0;for(let Ee=ee.count;Ee--;){const ve=ee.glyphAt(Ee);J&&!ve.glyphObj.isWhitespace&&(ee.width=ve.x+ve.width,ee.width>be&&(be=ee.width),J=!1);let{lineHeight:Ae,capHeight:we,xHeight:fe,baseline:xe}=ve.fontData;Ae>ee.lineHeight&&(ee.lineHeight=Ae);const Te=xe-ee.baseline;Te<0&&(ee.baseline+=Te,ee.cap+=Te,ee.ex+=Te),ee.cap=Math.max(ee.cap,ee.baseline+we),ee.ex=Math.max(ee.ex,ee.baseline+fe)}ee.baseline-=b,ee.cap-=b,ee.ex-=b,b+=ee.lineHeight});let M=0,O=0;if(L&&(typeof L=="number"?M=-L:typeof L=="string"&&(M=-be*(L==="left"?0:L==="center"?.5:L==="right"?1:l(L)))),N&&(typeof N=="number"?O=-N:typeof N=="string"&&(O=N==="top"?0:N==="top-baseline"?-De[0].baseline:N==="top-cap"?-De[0].cap:N==="top-ex"?-De[0].ex:N==="middle"?b/2:N==="bottom"?b:N==="bottom-baseline"?-De[De.length-1].baseline:l(N)*b)),!q){const ee=e.getEmbeddingLevels(_,S);K=new Uint16Array(pe),H=new Uint8Array(pe),Z=new Float32Array(pe*2),ie={},ne=[1/0,1/0,-1/0,-1/0],F=[],W&&(ce=new Float32Array(_.length*4)),j&&(me=new Uint8Array(pe*3));let J=0,Ee=-1,ve=-1,Ae,we;if(De.forEach((fe,xe)=>{let{count:Te,width:Ue}=fe;if(Te>0){let Re=0;for(let _e=Te;_e--&&fe.glyphAt(_e).glyphObj.isWhitespace;)Re++;let Ge=0,z=0;if(g==="center")Ge=(be-Ue)/2;else if(g==="right")Ge=be-Ue;else if(g==="justify"&&fe.isSoftWrapped){let _e=0;for(let se=Te-Re;se--;)fe.glyphAt(se).glyphObj.isWhitespace&&_e++;z=(be-Ue)/_e}if(z||Ge){let _e=0;for(let se=0;se<Te;se++){let Pe=fe.glyphAt(se);const Oe=Pe.glyphObj;Pe.x+=Ge+_e,z!==0&&Oe.isWhitespace&&se<Te-Re&&(_e+=z,Pe.width+=z)}}const de=e.getReorderSegments(_,ee,fe.glyphAt(0).charIndex,fe.glyphAt(fe.count-1).charIndex);for(let _e=0;_e<de.length;_e++){const[se,Pe]=de[_e];let Oe=1/0,Be=-1/0;for(let Ve=0;Ve<Te;Ve++)if(fe.glyphAt(Ve).charIndex>=se){let lt=Ve,st=Ve;for(;st<Te;st++){let ut=fe.glyphAt(st);if(ut.charIndex>Pe)break;st<Te-Re&&(Oe=Math.min(Oe,ut.x),Be=Math.max(Be,ut.x+ut.width))}for(let ut=lt;ut<st;ut++){const gt=fe.glyphAt(ut);gt.x=Be-(gt.x+gt.width-Oe)}break}}let ye;const Fe=_e=>ye=_e;for(let _e=0;_e<Te;_e++){const se=fe.glyphAt(_e);ye=se.glyphObj;const Pe=ye.index,Oe=ee.levels[se.charIndex]&1;if(Oe){const Be=e.getMirroredCharacter(_[se.charIndex]);Be&&se.fontData.fontObj.forEachGlyph(Be,0,0,Fe)}if(W){const{charIndex:Be,fontData:Ve}=se,lt=se.x+M,st=se.x+se.width+M;ce[Be*4]=Oe?st:lt,ce[Be*4+1]=Oe?lt:st,ce[Be*4+2]=fe.baseline+Ve.caretBottom+O,ce[Be*4+3]=fe.baseline+Ve.caretTop+O;const ut=Be-Ee;ut>1&&u(ce,Ee,ut),Ee=Be}if(j){const{charIndex:Be}=se;for(;Be>ve;)ve++,j.hasOwnProperty(ve)&&(we=j[ve])}if(!ye.isWhitespace&&!ye.isEmpty){const Be=J++,{fontSizeMult:Ve,src:lt,index:st}=se.fontData,ut=ie[lt]||(ie[lt]={});ut[Pe]||(ut[Pe]={path:ye.path,pathBounds:[ye.xMin,ye.yMin,ye.xMax,ye.yMax]});const gt=se.x+M,Ot=se.y+fe.baseline+O;Z[Be*2]=gt,Z[Be*2+1]=Ot;const Bt=gt+ye.xMin*Ve,qt=Ot+ye.yMin*Ve,kt=gt+ye.xMax*Ve,zt=Ot+ye.yMax*Ve;Bt<ne[0]&&(ne[0]=Bt),qt<ne[1]&&(ne[1]=qt),kt>ne[2]&&(ne[2]=kt),zt>ne[3]&&(ne[3]=zt),Be%G===0&&(Ae={start:Be,end:Be,rect:[1/0,1/0,-1/0,-1/0]},F.push(Ae)),Ae.end++;const dt=Ae.rect;if(Bt<dt[0]&&(dt[0]=Bt),qt<dt[1]&&(dt[1]=qt),kt>dt[2]&&(dt[2]=kt),zt>dt[3]&&(dt[3]=zt),K[Be]=Pe,H[Be]=st,j){const rn=Be*3;me[rn]=we>>16&255,me[rn+1]=we>>8&255,me[rn+2]=we&255}}}}}),ce){const fe=_.length-Ee;fe>1&&u(ce,Ee,fe)}}const te=[];Me.forEach(({index:ee,src:J,unitsPerEm:Ee,ascender:ve,descender:Ae,lineHeight:we,capHeight:fe,xHeight:xe})=>{te[ee]={src:J,unitsPerEm:Ee,ascender:ve,descender:Ae,lineHeight:we,capHeight:fe,xHeight:xe}}),X.typesetting=f()-he,P({glyphIds:K,glyphFontIndices:H,glyphPositions:Z,glyphData:ie,fontData:te,caretPositions:ce,glyphColors:me,chunkedBounds:F,fontSize:C,topBaseline:O+De[0].baseline,blockBounds:[M,O-b,M+be,O],visibleBounds:ne,timings:X})})}function c(_,x){o({..._,metricsOnly:!0},m=>{const[p,C,T,y]=m.blockBounds;x({width:T-p,height:y-C})})}function l(_){let x=_.match(/^([\d.]+)%$/),m=x?parseFloat(x[1]):NaN;return isNaN(m)?0:m/100}function u(_,x,m){const p=_[x*4],C=_[x*4+1],T=_[x*4+2],y=_[x*4+3],U=(C-p)/m;for(let D=0;D<m;D++){const E=(x+D)*4;_[E]=p+U*D,_[E+1]=p+U*(D+1),_[E+2]=T,_[E+3]=y}}function f(){return(self.performance||Date).now()}function h(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return h.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(_){let x=h.flyweight;return x.data=this.data,x.index=_,x},splitAt(_){let x=new h;return x.data=this.data.splice(_*d.length),x}},h.flyweight=d.reduce((_,x,m,p)=>(Object.defineProperty(_,x,{get(){return this.data[this.index*d.length+m]},set(C){this.data[this.index*d.length+m]=C}}),_),{data:null,index:0}),{typeset:o,measure:c}}const Qn=()=>(self.performance||Date).now(),ua=Mc();let Cl;function mg(a,e,t,r,n,i,s,o,c,l,u=!0){return u?_g(a,e,t,r,n,i,s,o,c,l).then(null,f=>(Cl||(console.warn("WebGL SDF generation failed, falling back to JS",f),Cl=!0),Dl(a,e,t,r,n,i,s,o,c,l))):Dl(a,e,t,r,n,i,s,o,c,l)}const na=[],gg=5;let Js=0;function Ec(){const a=Qn();for(;na.length&&Qn()-a<gg;)na.shift()();Js=na.length?setTimeout(Ec,0):0}const _g=(...a)=>new Promise((e,t)=>{na.push(()=>{const r=Qn();try{ua.webgl.generateIntoCanvas(...a),e({timing:Qn()-r})}catch(n){t(n)}}),Js||(Js=setTimeout(Ec,0))}),vg=4,xg=2e3,Ul={};let Sg=0;function Dl(a,e,t,r,n,i,s,o,c,l){const u="TroikaTextSDFGenerator_JS_"+Sg++%vg;let f=Ul[u];return f||(f=Ul[u]={workerModule:Oi({name:u,workerId:u,dependencies:[Mc,Qn],init(h,d){const _=h().javascript.generate;return function(...x){const m=d();return{textureData:_(...x),timing:d()-m}}},getTransferables(h){return[h.textureData.buffer]}}),requests:0,idleTimer:null}),f.requests++,clearTimeout(f.idleTimer),f.workerModule(a,e,t,r,n,i).then(({textureData:h,timing:d})=>{const _=Qn(),x=new Uint8Array(h.length*4);for(let m=0;m<h.length;m++)x[m*4+l]=h[m];return ua.webglUtils.renderImageData(s,x,o,c,a,e,1<<3-l),d+=Qn()-_,--f.requests===0&&(f.idleTimer=setTimeout(()=>{Jm(u)},xg)),{timing:d}})}function Mg(a){a._warm||(ua.webgl.isSupported(a),a._warm=!0)}const yg=ua.webglUtils.resizeWebGLCanvasWithoutClearing,tr={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},Eg=new Qe;function bi(){return(self.performance||Date).now()}const Pl=Object.create(null);function Tg(a,e){a=Ag({},a);const t=bi(),r=[];if(a.font&&r.push({label:"user",src:wg(a.font)}),a.font=r,a.text=""+a.text,a.sdfGlyphSize=a.sdfGlyphSize||tr.sdfGlyphSize,a.unicodeFontsURL=a.unicodeFontsURL||tr.unicodeFontsURL,a.colorRanges!=null){let h={};for(let d in a.colorRanges)if(a.colorRanges.hasOwnProperty(d)){let _=a.colorRanges[d];typeof _!="number"&&(_=Eg.set(_).getHex()),h[d]=_}a.colorRanges=h}Object.freeze(a);const{textureWidth:n,sdfExponent:i}=tr,{sdfGlyphSize:s}=a,o=n/s*4;let c=Pl[s];if(!c){const h=document.createElement("canvas");h.width=n,h.height=s*256/o,c=Pl[s]={glyphCount:0,sdfGlyphSize:s,sdfCanvas:h,sdfTexture:new wt(h,void 0,void 0,void 0,Xt,Xt),contextLost:!1,glyphsByFont:new Map},c.sdfTexture.generateMipmaps=!1,bg(c)}const{sdfTexture:l,sdfCanvas:u}=c;Ac(a).then(h=>{const{glyphIds:d,glyphFontIndices:_,fontData:x,glyphPositions:m,fontSize:p,timings:C}=h,T=[],y=new Float32Array(d.length*4);let U=0,D=0;const E=bi(),S=x.map(L=>{let N=c.glyphsByFont.get(L.src);return N||c.glyphsByFont.set(L.src,N=new Map),N});d.forEach((L,N)=>{const q=_[N],{src:V,unitsPerEm:Y}=x[q];let W=S[q].get(L);if(!W){const{path:X,pathBounds:$}=h.glyphData[V][L],I=Math.max($[2]-$[0],$[3]-$[1])/s*(tr.sdfMargin*s+.5),K=c.glyphCount++,H=[$[0]-I,$[1]-I,$[2]+I,$[3]+I];S[q].set(L,W={path:X,atlasIndex:K,sdfViewBox:H}),T.push(W)}const{sdfViewBox:G}=W,j=m[D++],P=m[D++],k=p/Y;y[U++]=j+G[0]*k,y[U++]=P+G[1]*k,y[U++]=j+G[2]*k,y[U++]=P+G[3]*k,d[N]=W.atlasIndex}),C.quads=(C.quads||0)+(bi()-E);const g=bi();C.sdf={};const v=u.height,A=Math.ceil(c.glyphCount/o),w=Math.pow(2,Math.ceil(Math.log2(A*s)));w>v&&(console.info(`Increasing SDF texture size ${v}->${w}`),yg(u,n,w),l.dispose()),Promise.all(T.map(L=>Tc(L,c,a.gpuAccelerateSDF).then(({timing:N})=>{C.sdf[L.atlasIndex]=N}))).then(()=>{T.length&&!c.contextLost&&(bc(c),l.needsUpdate=!0),C.sdfTotal=bi()-g,C.total=bi()-t,e(Object.freeze({parameters:a,sdfTexture:l,sdfGlyphSize:s,sdfExponent:i,glyphBounds:y,glyphAtlasIndices:d,glyphColors:h.glyphColors,caretPositions:h.caretPositions,chunkedBounds:h.chunkedBounds,ascender:h.ascender,descender:h.descender,lineHeight:h.lineHeight,capHeight:h.capHeight,xHeight:h.xHeight,topBaseline:h.topBaseline,blockBounds:h.blockBounds,visibleBounds:h.visibleBounds,timings:h.timings}))})}),Promise.resolve().then(()=>{c.contextLost||Mg(u)})}function Tc({path:a,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:r,sdfCanvas:n,contextLost:i},s){if(i)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:c}=tr,l=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),f=u%(o/r)*r,h=Math.floor(u/(o/r))*r,d=e%4;return mg(r,r,a,t,l,c,n,f,h,d,s)}function bg(a){const e=a.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),a.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),a.contextLost=!1;const r=[];a.glyphsByFont.forEach(n=>{n.forEach(i=>{r.push(Tc(i,a,!0))})}),Promise.all(r).then(()=>{bc(a),a.sdfTexture.needsUpdate=!0})})}function Ag(a,e){for(let t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);return a}let Xr;function wg(a){return Xr||(Xr=typeof document>"u"?{}:document.createElement("a")),Xr.href=a,Xr.href}function bc(a){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=a,{width:r,height:n}=e,i=a.sdfCanvas.getContext("webgl");let s=t.image.data;(!s||s.length!==r*n*4)&&(s=new Uint8Array(r*n*4),t.image={width:r,height:n,data:s},t.flipY=!1,t.isDataTexture=!0),i.readPixels(0,0,r,n,i.RGBA,i.UNSIGNED_BYTE,s)}}const Rg=Oi({name:"Typesetter",dependencies:[pg,dg,$m],init(a,e,t){return a(e,t())}}),Ac=Oi({name:"Typesetter",dependencies:[Rg],init(a){return function(e){return new Promise(t=>{a.typeset(e,t)})}},getTransferables(a){const e=[];for(let t in a)a[t]&&a[t].buffer&&e.push(a[t].buffer);return e}});Ac.onMainThread;const Ll={};function Cg(a){let e=Ll[a];return e||(e=Ll[a]=new oi(1,1,a,a).translate(.5,.5,0)),e}const Ug="aTroikaGlyphBounds",Il="aTroikaGlyphIndex",Dg="aTroikaGlyphColor";class Pg extends nf{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new hr,this.boundingBox=new si}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=Cg(e);["position","normal","uv"].forEach(r=>{this.attributes[r]=t.attributes[r].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,r,n,i){this.updateAttributeData(Ug,e,4),this.updateAttributeData(Il,t,1),this.updateAttributeData(Dg,i,3),this._blockBounds=r,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:r}=this;if(t){const{PI:n,floor:i,min:s,max:o,sin:c,cos:l}=Math,u=n/2,f=n*2,h=Math.abs(t),d=e[0]/h,_=e[2]/h,x=i((d+u)/f)!==i((_+u)/f)?-h:s(c(d)*h,c(_)*h),m=i((d-u)/f)!==i((_-u)/f)?h:o(c(d)*h,c(_)*h),p=i((d+n)/f)!==i((_+n)/f)?h*2:o(h-l(d)*h,h-l(_)*h);r.min.set(x,e[1],t<0?-p:0),r.max.set(m,e[3],t<0?0:p)}else r.min.set(e[0],e[1],0),r.max.set(e[2],e[3],0);r.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(Il).count,r=this._chunkedBounds;if(r)for(let n=r.length;n--;){t=r[n].end;let i=r[n].rect;if(i[1]<e.w&&i[3]>e.y&&i[0]<e.z&&i[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,r){const n=this.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(this.setAttribute(e,new Zu(t,r)),delete this._maxInstanceCount,this.dispose()):n&&this.deleteAttribute(e)}}const Lg=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,Ig=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,Fg=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,Ng=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function Og(a){const e=Zs(a,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new et},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new ct(0,0,0,0)},uTroikaClipRect:{value:new ct(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new et},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Qe},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Ye},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:Lg,vertexTransform:Ig,fragmentDefs:Fg,fragmentColorTransform:Ng,customRewriter({vertexShader:t,fragmentShader:r}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(r)&&(r=r.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(yc,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:r}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const co=new oo({color:16777215,side:on,transparent:!0}),Fl=8421504,Nl=new ht,Yr=new le,rs=new le,$i=[],Bg=new le,as="+x+y";function Ol(a){return Array.isArray(a)?a[0]:a}let wc=()=>{const a=new Yt(new oi(1,1),co);return wc=()=>a,a},Rc=()=>{const a=new Yt(new oi(1,1,32,1),co);return Rc=()=>a,a};const kg={type:"syncstart"},zg={type:"synccomplete"},Cc=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],Gg=Cc.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class mr extends Yt{constructor(){const e=new Pg;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Fl,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=as,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(kg),Tg({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const r=this._queuedSyncs;r&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{r.forEach(n=>n&&n())})),this.dispatchEvent(zg),e&&e()})))}onBeforeRender(e,t,r,n,i,s){this.sync(),i.isTroikaTextMaterial&&this._prepareForRender(i)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return Og(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=co.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function r(){t.removeEventListener("dispose",r),e.dispose()})),this.hasOutline()){let r=e._outlineMtl;return r||(r=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),r.isTextOutlineMaterial=!0,r.depthWrite=!1,r.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),r.dispose()})),[r,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return Ol(this.material).getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return Ol(this.material).getDistanceMaterial()}set customDistanceMaterial(e){}_prepareForRender(e){const t=e.isTextOutlineMaterial,r=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:o,blockBounds:c}=n;r.uTroikaSDFTexture.value=o,r.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),r.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,r.uTroikaSDFExponent.value=n.sdfExponent,r.uTroikaTotalBounds.value.fromArray(c),r.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let l=0,u=0,f=0,h,d,_,x=0,m=0;if(t){let{outlineWidth:C,outlineOffsetX:T,outlineOffsetY:y,outlineBlur:U,outlineOpacity:D}=this;l=this._parsePercent(C)||0,u=Math.max(0,this._parsePercent(U)||0),h=D,x=this._parsePercent(T)||0,m=this._parsePercent(y)||0}else f=Math.max(0,this._parsePercent(this.strokeWidth)||0),f&&(_=this.strokeColor,r.uTroikaStrokeColor.value.set(_??Fl),d=this.strokeOpacity,d==null&&(d=1)),h=this.fillOpacity;r.uTroikaEdgeOffset.value=l,r.uTroikaPositionOffset.value.set(x,m),r.uTroikaBlurRadius.value=u,r.uTroikaStrokeWidth.value=f,r.uTroikaStrokeOpacity.value=d,r.uTroikaFillOpacity.value=h??1,r.uTroikaCurveRadius.value=this.curveRadius||0;let p=this.clipRect;if(p&&Array.isArray(p)&&p.length===4)r.uTroikaClipRect.value.fromArray(p);else{const C=(this.fontSize||.1)*100;r.uTroikaClipRect.value.set(c[0]-C,c[1]-C,c[2]+C,c[3]+C)}this.geometry.applyClipRect(r.uTroikaClipRect.value)}r.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const i=t?this.outlineColor||0:this.color;if(i==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new Qe;(i!==o._input||typeof i=="object")&&o.set(o._input=i)}let s=this.orientation||as;if(s!==e._orientation){let o=r.uTroikaOrient.value;s=s.replace(/[^-+xyz]/g,"");let c=s!==as&&s.match(/^([-+])([xyz])([-+])([xyz])$/);if(c){let[,l,u,f,h]=c;Yr.set(0,0,0)[u]=l==="-"?1:-1,rs.set(0,0,0)[h]=f==="-"?-1:1,Nl.lookAt(Bg,Yr.cross(rs),rs),o.setFromMatrix4(Nl)}else o.identity();e._orientation=s}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),r=t?parseFloat(t[1]):NaN;e=(isNaN(r)?0:r/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new et){t.copy(e);const r=this.curveRadius;return r&&(t.x=Math.atan2(e.x,Math.abs(r)-Math.abs(e.z))*Math.abs(r)),t}worldPositionToTextCoords(e,t=new et){return Yr.copy(e),this.localPositionToTextCoords(this.worldToLocal(Yr),t)}raycast(e,t){const{textRenderInfo:r,curveRadius:n}=this;if(r){const i=r.blockBounds,s=n?Rc():wc(),o=s.geometry,{position:c,uv:l}=o.attributes;for(let u=0;u<l.count;u++){let f=i[0]+l.getX(u)*(i[2]-i[0]);const h=i[1]+l.getY(u)*(i[3]-i[1]);let d=0;n&&(d=n-Math.cos(f/n)*n,f=Math.sin(f/n)*n),c.setXYZ(u,f,h,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,s.matrixWorld=this.matrixWorld,s.material.side=this.material.side,$i.length=0,s.raycast(e,$i);for(let u=0;u<$i.length;u++)$i[u].object=this,t.push($i[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,Gg.forEach(r=>{this[r]=e[r]}),this}clone(){return new this.constructor().copy(this)}}Cc.forEach(a=>{const e="_private_"+a;Object.defineProperty(mr.prototype,a,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new si;new Qe;const ti=new Ku,lr=new Wt(75,window.innerWidth/window.innerHeight,.1,1e3),fa=new Gm;fa.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(fa.domElement);lr.position.z=275;lr.position.y=60;const ha=document.getElementById("subdivisionSelect"),Kn=document.getElementById("yearSelect"),Bl=document.getElementById("timelineBar"),Uc=document.getElementById("timelineIndicator");let da=[],In=[],ia=0,Yn=0,ra=!1,qr;function Vg(a,e){const t=[[0,0,0,.16,0,0,.01],[.85,.04,-.04,.85,0,1.6,.85],[.2,-.26,.23,.22,0,1.6,.07],[-.15,.28,.26,.24,0,.44,.07]];let r=0,n=0;const i=[],s=[];for(let l=0;l<a;l++){const u=Math.random();let f,h,d,_,x,m;u<t[0][6]?[f,h,d,_,x,m]=t[0]:u<.86?[f,h,d,_,x,m]=t[1]:u<.93?[f,h,d,_,x,m]=t[2]:[f,h,d,_,x,m]=t[3];const p=f*r+h*n+x,C=d*r+_*n+m;r=p,n=C;const T=r*30,y=n*30-55;i.push(T,y,0),s.push(e.r,e.g,e.b)}const o=new cn;o.setAttribute("position",new xn(i,3)),o.setAttribute("color",new xn(s,3));const c=new uc({vertexColors:!0,size:.05});return new ef(o,c)}function Hg(a){qr&&ti.remove(qr);let e=new Qe,t=2e3;a<=50?(e.set("#a56c34"),t=15e3):a<=100?(e.set("#96ad2f"),t=3e4):a<=200?(e.set("#3ba84d"),t=4e4):a<=300?(e.set("#1f6e2c"),t=5e4):(e.set("#325c49"),t=75e3),qr=Vg(t,e),ti.add(qr)}const Qs=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];function Wg(a){return a<=50?"#a56c34":a<=100?"#96ad2f":a<=200?"#3ba84d":a<=300?"#1f6e2c":"#325c49"}function uo(a){Bl.innerHTML="",document.getElementById("timelineLabels").innerHTML="";for(let e=0;e<12;e++){const t=parseFloat(a[Qs[e]])||0,r=document.createElement("div");r.className="timeline-segment",r.style.background=Wg(t),Bl.appendChild(r);const n=document.createElement("div");n.textContent=Qs[e],document.getElementById("timelineLabels").appendChild(n)}Uc.style.left="0%"}function Xg(a){const e=a/12*100;Uc.style.left=`calc(${e}% - 5px)`}const ni=new mr;ni.fontSize=10;ni.anchorX="center";ni.position.set(0,-50,0);ni.color=65280;ti.add(ni);const ii=new mr;ii.fontSize=10;ii.anchorX="center";ii.position.set(0,-60,0);ii.color=65280;ti.add(ii);const ri=new mr;ri.fontSize=10;ri.anchorX="center";ri.position.set(0,-70,0);ri.color=65280;ti.add(ri);const ai=new mr;ai.fontSize=10;ai.anchorX="center";ai.position.set(0,-80,0);ai.color=65280;ti.add(ai);function Yg(){[...new Set(da.map(e=>e.SUBDIVISION))].forEach(e=>{const t=document.createElement("option");t.value=e,t.textContent=e,ha.appendChild(t)}),Dc()}function Dc(){const a=ha.value,e=[...new Set(da.filter(t=>t.SUBDIVISION===a).map(t=>t.YEAR))];Kn.innerHTML="",e.sort((t,r)=>t-r).forEach(t=>{const r=document.createElement("option");r.value=t,r.textContent=t,Kn.appendChild(r)}),Kn.options.length>0&&(Kn.selectedIndex=0,Kn.dispatchEvent(new Event("change")))}function Pc(){const a=ha.value,e=Kn.value;return da.filter(t=>t.SUBDIVISION===a&&t.YEAR===e)}ha.addEventListener("change",()=>{Dc()});Kn.addEventListener("change",()=>{if(In=Pc(),ia=0,Yn=0,In.length===0){alert("No data available for this subdivision and year.");return}uo(In[0])});window.addEventListener("resize",()=>{lr.aspect=window.innerWidth/window.innerHeight,lr.updateProjectionMatrix(),fa.setSize(window.innerWidth,window.innerHeight)});fetch("/RainfallDataClean.csv").then(a=>a.text()).then(a=>{da=Ym.parse(a,{header:!0,skipEmptyLines:!0}).data,Yg(),In=Pc(),In.length>0&&uo(In[0]),ra=!0});function Lc(){if(requestAnimationFrame(Lc),ra){const a=In[ia];if(a){const e=Qs[Yn],t=parseFloat(a[e]);ni.text=a.SUBDIVISION,ii.text=a.YEAR,ri.text=e,ai.text=isNaN(t)?"No Data":`${t} mm`,ni.sync(),ii.sync(),ri.sync(),ai.sync(),Hg(t||0),Yn===0&&uo(a),Xg(Yn)}Yn++,Yn>=12&&(Yn=0,ia=(ia+1)%In.length),ra=!1,setTimeout(()=>ra=!0,2e3)}fa.render(ti,lr)}Lc();
