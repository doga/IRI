/* @ts-self-types="./index.d.ts" */
var x=class t{#t;constructor(e){this.#t=e}equals(e){return e instanceof t?this.toString()===e.toString():!1}toString(){return this.#t}};var R="-",L=/^xn--/,N=/[^\0-\x7F]/,k=/[\x2E\u3002\uFF0E\uFF61]/g,q={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},v=35,m=Math.floor,b=String.fromCharCode;function d(t){throw new RangeError(q[t])}function B(t,e){let o=[],n=t.length;for(;n--;)o[n]=e(t[n]);return o}function U(t,e){let o=t.split("@"),n="";o.length>1&&(n=o[0]+"@",t=o[1]),t=t.replace(k,".");let r=t.split("."),i=B(r,e).join(".");return n+i}function F(t){let e=[],o=0,n=t.length;for(;o<n;){let r=t.charCodeAt(o++);if(r>=55296&&r<=56319&&o<n){let i=t.charCodeAt(o++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),o--)}else e.push(r)}return e}var D=t=>String.fromCodePoint(...t),W=function(t){return t>=48&&t<58?26+(t-48):t>=65&&t<91?t-65:t>=97&&t<123?t-97:36},M=function(t,e){return t+22+75*(t<26)-((e!=0)<<5)},S=function(t,e,o){let n=0;for(t=o?m(t/700):t>>1,t+=m(t/e);t>v*26>>1;n+=36)t=m(t/v);return m(n+(v+1)*t/(t+38))},T=function(t){let e=[],o=t.length,n=0,r=128,i=72,a=t.lastIndexOf(R);a<0&&(a=0);for(let s=0;s<a;++s)t.charCodeAt(s)>=128&&d("not-basic"),e.push(t.charCodeAt(s));for(let s=a>0?a+1:0;s<o;){let h=n;for(let c=1,f=36;;f+=36){s>=o&&d("invalid-input");let u=W(t.charCodeAt(s++));u>=36&&d("invalid-input"),u>m((2147483647-n)/c)&&d("overflow"),n+=u*c;let p=f<=i?1:f>=i+26?26:f-i;if(u<p)break;let g=36-p;c>m(2147483647/g)&&d("overflow"),c*=g}let l=e.length+1;i=S(n-h,l,h==0),m(n/l)>2147483647-r&&d("overflow"),r+=m(n/l),n%=l,e.splice(n++,0,r)}return String.fromCodePoint(...e)},A=function(t){let e=[];t=F(t);let o=t.length,n=128,r=0,i=72;for(let h of t)h<128&&e.push(b(h));let a=e.length,s=a;for(a&&e.push(R);s<o;){let h=2147483647;for(let c of t)c>=n&&c<h&&(h=c);let l=s+1;h-n>m((2147483647-r)/l)&&d("overflow"),r+=(h-n)*l,n=h;for(let c of t)if(c<n&&++r>2147483647&&d("overflow"),c===n){let f=r;for(let u=36;;u+=36){let p=u<=i?1:u>=i+26?26:u-i;if(f<p)break;let g=f-p,y=36-p;e.push(b(M(p+g%y,0))),f=m(g/y)}e.push(b(M(f,0))),i=S(r,l,s===a),r=0,++s}++r,++n}return e.join("")},_=function(t){return U(t,function(e){return L.test(e)?T(e.slice(4).toLowerCase()):e})},j=function(t){return U(t,function(e){return N.test(e)?"xn--"+A(e):e})},I={version:"2.3.1",ucs2:{decode:F,encode:D},decode:T,encode:A,toASCII:j,toUnicode:_};function E(t){return typeof t>"u"}var $=class extends x{constructor(e,o){E(o)||(o=new URL(`${o}`)),e=new URL(`${e}`,o);let n=e.protocol,r=e.username,i=e.password,a=I.toUnicode(e.hostname),s=e.port,h=s?`${a}:${s}`:a,l=decodeURIComponent(e.pathname),c=decodeURIComponent(e.search),f=decodeURIComponent(e.hash),u=e.username?e.password?`${e.username}:${e.password}@`:`${e.username}@`:"",p=`${n}//${u}${h}${l}${c}${f}`;e.href.endsWith("#")&&!p.endsWith("#")&&(p=`${p}#`),super(p),this.protocol=n,this.username=r,this.password=i,this.hostname=I.toUnicode(a),this.port=s,this.host=this.port?`${this.hostname}:${this.port}`:this.hostname,this.origin=`${this.protocol}//${this.host}`,this.pathname=l,this.search=c,this.hash=f,this.href=`${this.protocol}//${u}${this.host}${this.pathname}${this.search}${this.hash}`,e.href.endsWith("#")&&!this.href.endsWith("#")&&(this.href=`${this.href}#`),this.url=e}};function O(t,...e){let o=t[0],n=1;for(let r of e)o+=`${r}${t[n]}`,n++;try{return new $(o)}catch{return null}}function V(t,...e){let o=t[0],n=1;for(let r of e)o+=`${r}${t[n]}`,n++;try{return new URL(o)}catch{return null}}var w=class t extends x{static regexp=/^urn:(?<nid>[^:]+):(?<nss>[^?]+)(?<resolv>[?][+][^?#]*)?(?<query>[?][=][^#]*)?(?<frag>[#].*)?$/;#t;#e;#o;#n;#r;constructor(e){if(super(e),!e)throw new TypeError("Not a Uniform Resource Name");e=`${e}`;let o=e.match(t.regexp);if(!o)throw new TypeError("Format does not match a Uniform Resource Name");this.#t=o.groups.nid,this.#e=o.groups.nss,this.#o=o.groups.query,this.#n=o.groups.resolv,this.#r=o.groups.frag}get namespace(){return this.#t}get namespaceSpecific(){return this.#e}get query(){return this.#o}get resolver(){return this.#n}get fragment(){return this.#r}};function z(t,...e){let o=t[0],n=1;for(let r of e)o+=`${r}${t[n]}`,n++;try{return new w(o)}catch{return null}}var C=class{static parse(e,o){try{return new w(`${e}`)}catch{try{return new $(`${e}`,o)}catch{throw o?new TypeError(`Invalid IRI: '${e}' with base '${o}'`):new TypeError(`Invalid IRI: '${e}'`)}}}};function G(t,...e){let o=t[0],n=1;for(let r of e)o+=`${r}${t[n]}`,n++;try{return C.parse(o)}catch{return null}}export{x as IRI,$ as IRL,C as IriParser,w as URN,G as iri,O as irl,V as url,z as urn};
/**
 * A parser/serialiser for IRIs (URLs, URNs). In contrast to standard URL parsers, this parser keeps URLs in their original Unicode form, which remains readable even for URLs with non-English characters.
 * @author Doğa Armangil <doga.armangil@gmail.com>
 * @license Apache-2.0 <https://www.apache.org/licenses/LICENSE-2.0>
 * @example How to parse a URL or URN.
 * ```javascript
 * // JavaScript
 * import { iri, irl, urn, url, IRI, IRL, URN} from 'https://cdn.jsdelivr.net/gh/doga/IRI@3.1.10/dist/mod.mjs';
 * const
 * host = 'çağlayan.info',
 * irl1 = iri`https://${host}/résumé`, // an IRL (Unicode-aware variant of URL) and IRI instance
 * irl2 = irl`https://${host}/résumé`, // an IRL and IRI instance
 * url1 = irl1.url,                    // a URL instance
 * url2 = url`https://${host}/résumé`, // a URL instance
 * urn1 = iri`urn:ietf:rfc:3987`,      // a URN and IRI instance
 * urn2 = urn`urn:ietf:rfc:3987`;      // a URN and IRI instance
 * 
 * irl1.host;              // 'çağlayan.info'
 * irl1.url.host;          // 'xn--alayan-vua36b.info'
 * irl1.pathname;          // '/résumé'
 * irl1.url.pathname;      // '/r%C3%A9sum%C3%A9'
 * urn1.namespace;         // 'ietf'
 * urn1.namespaceSpecific; // 'rfc:3987'
 * ```
 * 
 * ```typescript
 * // TypeScript
 * import { iri, irl, urn, url, IRI, IRL, URN} from 'https://cdn.jsdelivr.net/gh/doga/IRI@3.1.10/dist/mod.mjs';
 * const
 * host = 'çağlayan.info',
 * irl1: IRL = iri`https://${host}/résumé`,
 * irl2: IRL = irl`https://${host}/résumé`,
 * url1: URL = irl1.url,
 * url2: URL = url`https://${host}/résumé`,
 * urn1: URN = iri`urn:ietf:rfc:3987`,
 * urn2: URN = urn`urn:ietf:rfc:3987`;
 * 
 * irl1.host;              // 'çağlayan.info'
 * irl1.url.host;          // 'xn--alayan-vua36b.info'
 * irl1.pathname;          // '/résumé'
 * irl1.url.pathname;      // '/r%C3%A9sum%C3%A9'
 * urn1.namespace;         // 'ietf'
 * urn1.namespaceSpecific; // 'rfc:3987'
 * ```
 * @see {@link https://github.com/doga/IRI | GitHub repository}
 * @see {@link https://en.wikipedia.org/wiki/Internationalized_Resource_Identifier | Internationalized Resource Identifier on Wikipedia}
 * @see {@link https://www.ietf.org/rfc/rfc3987.txt | RFC 3987: Internationalized Resource Identifiers (IRIs)}
 */
