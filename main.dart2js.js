(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.ii(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.dV(b)
return new s(c,this)}:function(){if(s===null)s=A.dV(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.dV(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
e1(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dY(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.dZ==null){A.i2()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.a(A.ej("Return interceptor for "+A.i(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.d6
if(o==null)o=$.d6=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.i8(a)
if(p!=null)return p
if(typeof a=="function")return B.u
s=Object.getPrototypeOf(a)
if(s==null)return B.i
if(s===Object.prototype)return B.i
if(typeof q=="function"){o=$.d6
if(o==null)o=$.d6=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.e,enumerable:false,writable:true,configurable:true})
return B.e}return B.e},
fv(a,b){if(a<0||a>4294967295)throw A.a(A.cC(a,0,4294967295,"length",null))
return J.fx(new Array(a),b)},
fw(a,b){if(a<0)throw A.a(A.aj("Length must be a non-negative integer: "+a,null))
return A.T(new Array(a),b.i("u<0>"))},
fx(a,b){var s=A.T(a,b.i("u<0>"))
s.$flags=1
return s},
ag(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aF.prototype
return J.bw.prototype}if(typeof a=="string")return J.am.prototype
if(a==null)return J.aG.prototype
if(typeof a=="boolean")return J.bv.prototype
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.X.prototype
if(typeof a=="symbol")return J.aK.prototype
if(typeof a=="bigint")return J.aI.prototype
return a}if(a instanceof A.d)return a
return J.dY(a)},
eP(a){if(typeof a=="string")return J.am.prototype
if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.X.prototype
if(typeof a=="symbol")return J.aK.prototype
if(typeof a=="bigint")return J.aI.prototype
return a}if(a instanceof A.d)return a
return J.dY(a)},
eQ(a){if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.X.prototype
if(typeof a=="symbol")return J.aK.prototype
if(typeof a=="bigint")return J.aI.prototype
return a}if(a instanceof A.d)return a
return J.dY(a)},
c8(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ag(a).G(a,b)},
ai(a){return J.ag(a).gq(a)},
c9(a){return J.eQ(a).gv(a)},
e4(a){return J.eP(a).gp(a)},
fd(a){return J.ag(a).gm(a)},
L(a){return J.ag(a).h(a)},
bu:function bu(){},
bv:function bv(){},
aG:function aG(){},
aJ:function aJ(){},
Z:function Z(){},
bL:function bL(){},
aY:function aY(){},
X:function X(){},
aI:function aI(){},
aK:function aK(){},
u:function u(a){this.$ti=a},
cs:function cs(a){this.$ti=a},
bj:function bj(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aH:function aH(){},
aF:function aF(){},
bw:function bw(){},
am:function am(){}},A={dG:function dG(){},
bf(a,b,c){return a},
e_(a){var s,r
for(s=$.ah.length,r=0;r<s;++r)if(a===$.ah[r])return!0
return!1},
an(a,b,c,d){if(t.W.b(a))return new A.aC(a,b,c.i("@<0>").A(d).i("aC<1,2>"))
return new A.F(a,b,c.i("@<0>").A(d).i("F<1,2>"))},
aa:function aa(a){this.a=a},
bz:function bz(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
F:function F(a,b,c){this.a=a
this.b=b
this.$ti=c},
aC:function aC(a,b,c){this.a=a
this.b=b
this.$ti=c},
bA:function bA(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
P:function P(a,b,c){this.a=a
this.b=b
this.$ti=c},
bV:function bV(a,b){this.a=a
this.b=b},
aE:function aE(){},
f0(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
iY(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
i(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.L(a)
return s},
bM(a){var s,r=$.ed
if(r==null)r=$.ed=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
cB(a){return A.fz(a)},
fz(a){var s,r,q,p
if(a instanceof A.d)return A.C(A.bg(a),null)
s=J.ag(a)
if(s===B.r||s===B.v||t.o.b(a)){r=B.f(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.C(A.bg(a),null)},
fB(a){if(typeof a=="number"||A.dS(a))return J.L(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.W)return a.h(0)
return"Instance of '"+A.cB(a)+"'"},
t(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.am(s,10)|55296)>>>0,s&1023|56320)}throw A.a(A.cC(a,0,1114111,null,null))},
fA(a){var s=a.$thrownJsError
if(s==null)return null
return A.a5(s)},
eO(a,b){var s,r="index"
if(!A.eD(b))return new A.M(!0,b,r,null)
s=J.e4(a)
if(b<0||b>=s)return A.fq(b,s,a,r)
return new A.aT(null,null,!0,b,r,"Value not in range")},
a(a){return A.eT(new Error(),a)},
eT(a,b){var s
if(b==null)b=new A.N()
a.dartException=b
s=A.im
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
im(){return J.L(this.dartException)},
c6(a){throw A.a(a)},
c7(a,b){throw A.eT(b,a)},
il(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.c7(A.hl(a,b,c),s)},
hl(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.j.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.aZ("'"+s+"': Cannot "+o+" "+l+k+n)},
f_(a){throw A.a(A.aA(a))},
O(a){var s,r,q,p,o,n
a=A.ie(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.T([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cE(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cF(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
ei(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dH(a,b){var s=b==null,r=s?null:b.method
return new A.bx(a,r,s?null:b.receiver)},
K(a){if(a==null)return new A.cA(a)
if(a instanceof A.aD)return A.a6(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.a6(a,a.dartException)
return A.hQ(a)},
a6(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
hQ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.am(r,16)&8191)===10)switch(q){case 438:return A.a6(a,A.dH(A.i(s)+" (Error "+q+")",null))
case 445:case 5007:A.i(s)
return A.a6(a,new A.aS())}}if(a instanceof TypeError){p=$.f1()
o=$.f2()
n=$.f3()
m=$.f4()
l=$.f7()
k=$.f8()
j=$.f6()
$.f5()
i=$.fa()
h=$.f9()
g=p.t(s)
if(g!=null)return A.a6(a,A.dH(s,g))
else{g=o.t(s)
if(g!=null){g.method="call"
return A.a6(a,A.dH(s,g))}else if(n.t(s)!=null||m.t(s)!=null||l.t(s)!=null||k.t(s)!=null||j.t(s)!=null||m.t(s)!=null||i.t(s)!=null||h.t(s)!=null)return A.a6(a,new A.aS())}return A.a6(a,new A.bU(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aW()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.a6(a,new A.M(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aW()
return a},
a5(a){var s
if(a instanceof A.aD)return a.b
if(a==null)return new A.b7(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.b7(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
ic(a){if(a==null)return J.ai(a)
if(typeof a=="object")return A.bM(a)
return J.ai(a)},
hY(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.H(0,a[s],a[r])}return b},
ht(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.a(A.bs("Unsupported number of arguments for wrapped closure"))},
ds(a,b){var s=a.$identity
if(!!s)return s
s=A.hV(a,b)
a.$identity=s
return s},
hV(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.ht)},
fk(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.bR().constructor.prototype):Object.create(new A.ak(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.e9(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.fg(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.e9(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
fg(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.a("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.fe)}throw A.a("Error in functionType of tearoff")},
fh(a,b,c,d){var s=A.e8
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
e9(a,b,c,d){if(c)return A.fj(a,b,d)
return A.fh(b.length,d,a,b)},
fi(a,b,c,d){var s=A.e8,r=A.ff
switch(b?-1:a){case 0:throw A.a(new A.bN("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
fj(a,b,c){var s,r
if($.e6==null)$.e6=A.e5("interceptor")
if($.e7==null)$.e7=A.e5("receiver")
s=b.length
r=A.fi(s,c,a,b)
return r},
dV(a){return A.fk(a)},
fe(a,b){return A.dh(v.typeUniverse,A.bg(a.a),b)},
e8(a){return a.a},
ff(a){return a.b},
e5(a){var s,r,q,p=new A.ak("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.a(A.aj("Field name "+a+" not found.",null))},
iZ(a){throw A.a(new A.bY(a))},
hZ(a){return v.getIsolateTag(a)},
i8(a){var s,r,q,p,o,n=$.eS.$1(a),m=$.dt[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dy[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.eJ.$2(a,n)
if(q!=null){m=$.dt[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dy[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dA(s)
$.dt[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.dy[n]=s
return s}if(p==="-"){o=A.dA(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.eV(a,s)
if(p==="*")throw A.a(A.ej(n))
if(v.leafTags[n]===true){o=A.dA(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.eV(a,s)},
eV(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.e1(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dA(a){return J.e1(a,!1,null,!!a.$iD)},
ia(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dA(s)
else return J.e1(s,c,null,null)},
i2(){if(!0===$.dZ)return
$.dZ=!0
A.i3()},
i3(){var s,r,q,p,o,n,m,l
$.dt=Object.create(null)
$.dy=Object.create(null)
A.i1()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.eY.$1(o)
if(n!=null){m=A.ia(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
i1(){var s,r,q,p,o,n,m=B.j()
m=A.ax(B.k,A.ax(B.l,A.ax(B.h,A.ax(B.h,A.ax(B.m,A.ax(B.n,A.ax(B.o(B.f),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.eS=new A.dv(p)
$.eJ=new A.dw(o)
$.eY=new A.dx(n)},
ax(a,b){return a(b)||b},
hX(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
ie(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cE:function cE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aS:function aS(){},
bx:function bx(a,b,c){this.a=a
this.b=b
this.c=c},
bU:function bU(a){this.a=a},
cA:function cA(a){this.a=a},
aD:function aD(a,b){this.a=a
this.b=b},
b7:function b7(a){this.a=a
this.b=null},
W:function W(){},
bm:function bm(){},
bn:function bn(){},
bS:function bS(){},
bR:function bR(){},
ak:function ak(a,b){this.a=a
this.b=b},
bY:function bY(a){this.a=a},
bN:function bN(a){this.a=a},
Y:function Y(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cv:function cv(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dv:function dv(a){this.a=a},
dw:function dw(a){this.a=a},
dx:function dx(a){this.a=a},
ad(a,b,c){if(a>>>0!==a||a>=c)throw A.a(A.eO(b,a))},
bB:function bB(){},
aQ:function aQ(){},
bC:function bC(){},
ao:function ao(){},
aO:function aO(){},
aP:function aP(){},
bD:function bD(){},
bE:function bE(){},
bF:function bF(){},
bG:function bG(){},
bH:function bH(){},
bI:function bI(){},
bJ:function bJ(){},
aR:function aR(){},
bK:function bK(){},
b1:function b1(){},
b2:function b2(){},
b3:function b3(){},
b4:function b4(){},
ef(a,b){var s=b.c
return s==null?b.c=A.dP(a,b.x,!0):s},
dJ(a,b){var s=b.c
return s==null?b.c=A.ba(a,"I",[b.x]):s},
eg(a){var s=a.w
if(s===6||s===7||s===8)return A.eg(a.x)
return s===12||s===13},
fD(a){return a.as},
ay(a){return A.c3(v.typeUniverse,a,!1)},
a4(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.a4(a1,s,a3,a4)
if(r===s)return a2
return A.ev(a1,r,!0)
case 7:s=a2.x
r=A.a4(a1,s,a3,a4)
if(r===s)return a2
return A.dP(a1,r,!0)
case 8:s=a2.x
r=A.a4(a1,s,a3,a4)
if(r===s)return a2
return A.et(a1,r,!0)
case 9:q=a2.y
p=A.aw(a1,q,a3,a4)
if(p===q)return a2
return A.ba(a1,a2.x,p)
case 10:o=a2.x
n=A.a4(a1,o,a3,a4)
m=a2.y
l=A.aw(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.dN(a1,n,l)
case 11:k=a2.x
j=a2.y
i=A.aw(a1,j,a3,a4)
if(i===j)return a2
return A.eu(a1,k,i)
case 12:h=a2.x
g=A.a4(a1,h,a3,a4)
f=a2.y
e=A.hN(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.es(a1,g,e)
case 13:d=a2.y
a4+=d.length
c=A.aw(a1,d,a3,a4)
o=a2.x
n=A.a4(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.dO(a1,n,c,!0)
case 14:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.a(A.bl("Attempted to substitute unexpected RTI kind "+a0))}},
aw(a,b,c,d){var s,r,q,p,o=b.length,n=A.di(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.a4(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
hO(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.di(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.a4(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
hN(a,b,c,d){var s,r=b.a,q=A.aw(a,r,c,d),p=b.b,o=A.aw(a,p,c,d),n=b.c,m=A.hO(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.c_()
s.a=q
s.b=o
s.c=m
return s},
T(a,b){a[v.arrayRti]=b
return a},
eN(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.i_(s)
return a.$S()}return null},
i4(a,b){var s
if(A.eg(b))if(a instanceof A.W){s=A.eN(a)
if(s!=null)return s}return A.bg(a)},
bg(a){if(a instanceof A.d)return A.bc(a)
if(Array.isArray(a))return A.dQ(a)
return A.dR(J.ag(a))},
dQ(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
bc(a){var s=a.$ti
return s!=null?s:A.dR(a)},
dR(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.hs(a,s)},
hs(a,b){var s=a instanceof A.W?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.h8(v.typeUniverse,s.name)
b.$ccache=r
return r},
i_(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.c3(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
eR(a){return A.af(A.bc(a))},
hM(a){var s=a instanceof A.W?A.eN(a):null
if(s!=null)return s
if(t.R.b(a))return J.fd(a).a
if(Array.isArray(a))return A.dQ(a)
return A.bg(a)},
af(a){var s=a.r
return s==null?a.r=A.ey(a):s},
ey(a){var s,r,q=a.as,p=q.replace(/\*/g,"")
if(p===q)return a.r=new A.dg(a)
s=A.c3(v.typeUniverse,p,!0)
r=s.r
return r==null?s.r=A.ey(s):r},
J(a){return A.af(A.c3(v.typeUniverse,a,!1))},
hr(a){var s,r,q,p,o,n,m=this
if(m===t.K)return A.S(m,a,A.hy)
if(!A.V(m))s=m===t._
else s=!0
if(s)return A.S(m,a,A.hC)
s=m.w
if(s===7)return A.S(m,a,A.hp)
if(s===1)return A.S(m,a,A.eE)
r=s===6?m.x:m
q=r.w
if(q===8)return A.S(m,a,A.hu)
if(r===t.S)p=A.eD
else if(r===t.i||r===t.H)p=A.hx
else if(r===t.N)p=A.hA
else p=r===t.y?A.dS:null
if(p!=null)return A.S(m,a,p)
if(q===9){o=r.x
if(r.y.every(A.i5)){m.f="$i"+o
if(o==="k")return A.S(m,a,A.hw)
return A.S(m,a,A.hB)}}else if(q===11){n=A.hX(r.x,r.y)
return A.S(m,a,n==null?A.eE:n)}return A.S(m,a,A.hn)},
S(a,b,c){a.b=c
return a.b(b)},
hq(a){var s,r=this,q=A.hm
if(!A.V(r))s=r===t._
else s=!0
if(s)q=A.hd
else if(r===t.K)q=A.hb
else{s=A.bh(r)
if(s)q=A.ho}r.a=q
return r.a(a)},
c5(a){var s=a.w,r=!0
if(!A.V(a))if(!(a===t._))if(!(a===t.A))if(s!==7)if(!(s===6&&A.c5(a.x)))r=s===8&&A.c5(a.x)||a===t.P||a===t.T
return r},
hn(a){var s=this
if(a==null)return A.c5(s)
return A.i6(v.typeUniverse,A.i4(a,s),s)},
hp(a){if(a==null)return!0
return this.x.b(a)},
hB(a){var s,r=this
if(a==null)return A.c5(r)
s=r.f
if(a instanceof A.d)return!!a[s]
return!!J.ag(a)[s]},
hw(a){var s,r=this
if(a==null)return A.c5(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.d)return!!a[s]
return!!J.ag(a)[s]},
hm(a){var s=this
if(a==null){if(A.bh(s))return a}else if(s.b(a))return a
A.eA(a,s)},
ho(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.eA(a,s)},
eA(a,b){throw A.a(A.fZ(A.ek(a,A.C(b,null))))},
ek(a,b){return A.br(a)+": type '"+A.C(A.hM(a),null)+"' is not a subtype of type '"+b+"'"},
fZ(a){return new A.b8("TypeError: "+a)},
B(a,b){return new A.b8("TypeError: "+A.ek(a,b))},
hu(a){var s=this,r=s.w===6?s.x:s
return r.x.b(a)||A.dJ(v.typeUniverse,r).b(a)},
hy(a){return a!=null},
hb(a){if(a!=null)return a
throw A.a(A.B(a,"Object"))},
hC(a){return!0},
hd(a){return a},
eE(a){return!1},
dS(a){return!0===a||!1===a},
iI(a){if(!0===a)return!0
if(!1===a)return!1
throw A.a(A.B(a,"bool"))},
iK(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a(A.B(a,"bool"))},
iJ(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a(A.B(a,"bool?"))},
iL(a){if(typeof a=="number")return a
throw A.a(A.B(a,"double"))},
iN(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.B(a,"double"))},
iM(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.B(a,"double?"))},
eD(a){return typeof a=="number"&&Math.floor(a)===a},
iO(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.a(A.B(a,"int"))},
iQ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a(A.B(a,"int"))},
iP(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a(A.B(a,"int?"))},
hx(a){return typeof a=="number"},
iR(a){if(typeof a=="number")return a
throw A.a(A.B(a,"num"))},
iT(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.B(a,"num"))},
iS(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.B(a,"num?"))},
hA(a){return typeof a=="string"},
hc(a){if(typeof a=="string")return a
throw A.a(A.B(a,"String"))},
iV(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a(A.B(a,"String"))},
iU(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a(A.B(a,"String?"))},
eG(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.C(a[q],b)
return s},
hG(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.eG(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.C(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
eB(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.T([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)a4.push("T"+(r+q))
for(p=t.X,o=t._,n="<",m="",q=0;q<s;++q,m=a1){n=n+m+a4[a4.length-1-q]
l=a5[q]
k=l.w
if(!(k===2||k===3||k===4||k===5||l===p))j=l===o
else j=!0
if(!j)n+=" extends "+A.C(l,a4)}n+=">"}else n=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.C(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.C(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.C(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.C(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return n+"("+a+") => "+b},
C(a,b){var s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6)return A.C(a.x,b)
if(m===7){s=a.x
r=A.C(s,b)
q=s.w
return(q===12||q===13?"("+r+")":r)+"?"}if(m===8)return"FutureOr<"+A.C(a.x,b)+">"
if(m===9){p=A.hP(a.x)
o=a.y
return o.length>0?p+("<"+A.eG(o,b)+">"):p}if(m===11)return A.hG(a,b)
if(m===12)return A.eB(a,b,null)
if(m===13)return A.eB(a.x,b,a.y)
if(m===14){n=a.x
return b[b.length-1-n]}return"?"},
hP(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
h9(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
h8(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.c3(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bb(a,5,"#")
q=A.di(s)
for(p=0;p<s;++p)q[p]=r
o=A.ba(a,b,q)
n[b]=o
return o}else return m},
h6(a,b){return A.ew(a.tR,b)},
h5(a,b){return A.ew(a.eT,b)},
c3(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.ep(A.en(a,null,b,c))
r.set(b,s)
return s},
dh(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.ep(A.en(a,b,c,!0))
q.set(c,r)
return r},
h7(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.dN(a,b,c.w===10?c.y:[c])
p.set(s,q)
return q},
Q(a,b){b.a=A.hq
b.b=A.hr
return b},
bb(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.G(null,null)
s.w=b
s.as=c
r=A.Q(a,s)
a.eC.set(c,r)
return r},
ev(a,b,c){var s,r=b.as+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.h3(a,b,r,c)
a.eC.set(r,s)
return s},
h3(a,b,c,d){var s,r,q
if(d){s=b.w
if(!A.V(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.G(null,null)
q.w=6
q.x=b
q.as=c
return A.Q(a,q)},
dP(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.h2(a,b,r,c)
a.eC.set(r,s)
return s},
h2(a,b,c,d){var s,r,q,p
if(d){s=b.w
r=!0
if(!A.V(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.bh(b.x)
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.x
if(q.w===8&&A.bh(q.x))return q
else return A.ef(a,b)}}p=new A.G(null,null)
p.w=7
p.x=b
p.as=c
return A.Q(a,p)},
et(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.h0(a,b,r,c)
a.eC.set(r,s)
return s},
h0(a,b,c,d){var s,r
if(d){s=b.w
if(A.V(b)||b===t.K||b===t._)return b
else if(s===1)return A.ba(a,"I",[b])
else if(b===t.P||b===t.T)return t.e}r=new A.G(null,null)
r.w=8
r.x=b
r.as=c
return A.Q(a,r)},
h4(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.G(null,null)
s.w=14
s.x=b
s.as=q
r=A.Q(a,s)
a.eC.set(q,r)
return r},
b9(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
h_(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
ba(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.b9(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.G(null,null)
r.w=9
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.Q(a,r)
a.eC.set(p,q)
return q},
dN(a,b,c){var s,r,q,p,o,n
if(b.w===10){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.b9(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.G(null,null)
o.w=10
o.x=s
o.y=r
o.as=q
n=A.Q(a,o)
a.eC.set(q,n)
return n},
eu(a,b,c){var s,r,q="+"+(b+"("+A.b9(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.G(null,null)
s.w=11
s.x=b
s.y=c
s.as=q
r=A.Q(a,s)
a.eC.set(q,r)
return r},
es(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.b9(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.b9(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.h_(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.G(null,null)
p.w=12
p.x=b
p.y=c
p.as=r
o=A.Q(a,p)
a.eC.set(r,o)
return o},
dO(a,b,c,d){var s,r=b.as+("<"+A.b9(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.h1(a,b,c,r,d)
a.eC.set(r,s)
return s},
h1(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.di(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.a4(a,b,r,0)
m=A.aw(a,c,r,0)
return A.dO(a,n,m,c!==m)}}l=new A.G(null,null)
l.w=13
l.x=b
l.y=c
l.as=d
return A.Q(a,l)},
en(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ep(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.fT(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.eo(a,r,l,k,!1)
else if(q===46)r=A.eo(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.a2(a.u,a.e,k.pop()))
break
case 94:k.push(A.h4(a.u,k.pop()))
break
case 35:k.push(A.bb(a.u,5,"#"))
break
case 64:k.push(A.bb(a.u,2,"@"))
break
case 126:k.push(A.bb(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.fV(a,k)
break
case 38:A.fU(a,k)
break
case 42:p=a.u
k.push(A.ev(p,A.a2(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.dP(p,A.a2(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.et(p,A.a2(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.fS(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.eq(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.fX(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.a2(a.u,a.e,m)},
fT(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
eo(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===10)o=o.x
n=A.h9(s,o.x)[p]
if(n==null)A.c6('No "'+p+'" in "'+A.fD(o)+'"')
d.push(A.dh(s,o,n))}else d.push(p)
return m},
fV(a,b){var s,r=a.u,q=A.em(a,b),p=b.pop()
if(typeof p=="string")b.push(A.ba(r,p,q))
else{s=A.a2(r,a.e,p)
switch(s.w){case 12:b.push(A.dO(r,s,q,a.n))
break
default:b.push(A.dN(r,s,q))
break}}},
fS(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.em(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.a2(p,a.e,o)
q=new A.c_()
q.a=s
q.b=n
q.c=m
b.push(A.es(p,r,q))
return
case-4:b.push(A.eu(p,b.pop(),s))
return
default:throw A.a(A.bl("Unexpected state under `()`: "+A.i(o)))}},
fU(a,b){var s=b.pop()
if(0===s){b.push(A.bb(a.u,1,"0&"))
return}if(1===s){b.push(A.bb(a.u,4,"1&"))
return}throw A.a(A.bl("Unexpected extended operation "+A.i(s)))},
em(a,b){var s=b.splice(a.p)
A.eq(a.u,a.e,s)
a.p=b.pop()
return s},
a2(a,b,c){if(typeof c=="string")return A.ba(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.fW(a,b,c)}else return c},
eq(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.a2(a,b,c[s])},
fX(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.a2(a,b,c[s])},
fW(a,b,c){var s,r,q=b.w
if(q===10){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==9)throw A.a(A.bl("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.a(A.bl("Bad index "+c+" for "+b.h(0)))},
i6(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.m(a,b,null,c,null,!1)?1:0
r.set(c,s)}if(0===s)return!1
if(1===s)return!0
return!0},
m(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(!A.V(d))s=d===t._
else s=!0
if(s)return!0
r=b.w
if(r===4)return!0
if(A.V(b))return!1
s=b.w
if(s===1)return!0
q=r===14
if(q)if(A.m(a,c[b.x],c,d,e,!1))return!0
p=d.w
s=b===t.P||b===t.T
if(s){if(p===8)return A.m(a,b,c,d.x,e,!1)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.m(a,b.x,c,d,e,!1)
if(r===6)return A.m(a,b.x,c,d,e,!1)
return r!==7}if(r===6)return A.m(a,b.x,c,d,e,!1)
if(p===6){s=A.ef(a,d)
return A.m(a,b,c,s,e,!1)}if(r===8){if(!A.m(a,b.x,c,d,e,!1))return!1
return A.m(a,A.dJ(a,b),c,d,e,!1)}if(r===7){s=A.m(a,t.P,c,d,e,!1)
return s&&A.m(a,b.x,c,d,e,!1)}if(p===8){if(A.m(a,b,c,d.x,e,!1))return!0
return A.m(a,b,c,A.dJ(a,d),e,!1)}if(p===7){s=A.m(a,b,c,t.P,e,!1)
return s||A.m(a,b,c,d.x,e,!1)}if(q)return!1
s=r!==12
if((!s||r===13)&&d===t.Z)return!0
o=r===11
if(o&&d===t.L)return!0
if(p===13){if(b===t.g)return!0
if(r!==13)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.m(a,j,c,i,e,!1)||!A.m(a,i,e,j,c,!1))return!1}return A.eC(a,b.x,c,d.x,e,!1)}if(p===12){if(b===t.g)return!0
if(s)return!1
return A.eC(a,b,c,d,e,!1)}if(r===9){if(p!==9)return!1
return A.hv(a,b,c,d,e,!1)}if(o&&p===11)return A.hz(a,b,c,d,e,!1)
return!1},
eC(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.m(a3,a4.x,a5,a6.x,a7,!1))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.m(a3,p[h],a7,g,a5,!1))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.m(a3,p[o+h],a7,g,a5,!1))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.m(a3,k[h],a7,g,a5,!1))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.m(a3,e[a+2],a7,g,a5,!1))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
hv(a,b,c,d,e,f){var s,r,q,p,o,n=b.x,m=d.x
for(;n!==m;){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.dh(a,b,r[o])
return A.ex(a,p,null,c,d.y,e,!1)}return A.ex(a,b.y,null,c,d.y,e,!1)},
ex(a,b,c,d,e,f,g){var s,r=b.length
for(s=0;s<r;++s)if(!A.m(a,b[s],d,e[s],f,!1))return!1
return!0},
hz(a,b,c,d,e,f){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.m(a,r[s],c,q[s],e,!1))return!1
return!0},
bh(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.V(a))if(s!==7)if(!(s===6&&A.bh(a.x)))r=s===8&&A.bh(a.x)
return r},
i5(a){var s
if(!A.V(a))s=a===t._
else s=!0
return s},
V(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
ew(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
di(a){return a>0?new Array(a):v.typeUniverse.sEA},
G:function G(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
c_:function c_(){this.c=this.b=this.a=null},
dg:function dg(a){this.a=a},
bZ:function bZ(){},
b8:function b8(a){this.a=a},
fM(){var s,r,q
if(self.scheduleImmediate!=null)return A.hS()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.ds(new A.cQ(s),1)).observe(r,{childList:true})
return new A.cP(s,r,q)}else if(self.setImmediate!=null)return A.hT()
return A.hU()},
fN(a){self.scheduleImmediate(A.ds(new A.cR(a),0))},
fO(a){self.setImmediate(A.ds(new A.cS(a),0))},
fP(a){A.fY(0,a)},
fY(a,b){var s=new A.de()
s.aQ(a,b)
return s},
hE(a){return new A.bW(new A.v($.n,a.i("v<0>")),a.i("bW<0>"))},
hg(a,b){a.$2(0,null)
b.b=!0
return b.a},
iW(a,b){A.hh(a,b)},
hf(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.aU(r)
else{s=b.a
if(b.$ti.i("I<1>").b(r))s.ag(r)
else s.W(r)}},
he(a,b){var s=A.K(a),r=A.a5(a),q=b.a
if(b.b)q.D(s,r)
else q.af(s,r)},
hh(a,b){var s,r,q=new A.dk(b),p=new A.dl(b)
if(a instanceof A.v)a.an(q,p,t.z)
else{s=t.z
if(a instanceof A.v)a.a8(q,p,s)
else{r=new A.v($.n,t.d)
r.a=8
r.c=a
r.an(q,p,s)}}},
hR(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.n.aB(new A.dp(s))},
er(a,b,c){return 0},
dE(a){var s
if(t.Q.b(a)){s=a.gR()
if(s!=null)return s}return B.q},
dL(a,b,c){var s,r,q,p={},o=p.a=a
for(;s=o.a,(s&4)!==0;){o=o.c
p.a=o}if(o===b){b.af(new A.M(!0,o,null,"Cannot complete a future with itself"),A.dK())
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.ak(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.K()
b.J(p.a)
A.as(b,q)
return}b.a^=2
A.av(null,null,b.b,new A.cX(p,b))},
as(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;!0;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.dU(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.as(g.a,f)
s.a=o
n=o.a}r=g.a
m=r.c
s.b=p
s.c=m
if(q){l=f.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=f.b.b
if(p){r=r.b===k
r=!(r||r)}else r=!1
if(r){A.dU(m.a,m.b)
return}j=$.n
if(j!==k)$.n=k
else j=null
f=f.c
if((f&15)===8)new A.d3(s,g,p).$0()
else if(q){if((f&1)!==0)new A.d2(s,m).$0()}else if((f&2)!==0)new A.d1(g,s).$0()
if(j!=null)$.n=j
f=s.c
if(f instanceof A.v){r=s.a.$ti
r=r.i("I<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.L(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.dL(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.L(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
hH(a,b){if(t.C.b(a))return b.aB(a)
if(t.v.b(a))return a
throw A.a(A.dD(a,"onError",u.c))},
hF(){var s,r
for(s=$.au;s!=null;s=$.au){$.be=null
r=s.b
$.au=r
if(r==null)$.bd=null
s.a.$0()}},
hL(){$.dT=!0
try{A.hF()}finally{$.be=null
$.dT=!1
if($.au!=null)$.e3().$1(A.eK())}},
eH(a){var s=new A.bX(a),r=$.bd
if(r==null){$.au=$.bd=s
if(!$.dT)$.e3().$1(A.eK())}else $.bd=r.b=s},
hK(a){var s,r,q,p=$.au
if(p==null){A.eH(a)
$.be=$.bd
return}s=new A.bX(a)
r=$.be
if(r==null){s.b=p
$.au=$.be=s}else{q=r.b
s.b=q
$.be=r.b=s
if(q==null)$.bd=s}},
ih(a){var s=null,r=$.n
if(B.a===r){A.av(s,s,B.a,a)
return}A.av(s,s,r,r.aq(a))},
iu(a){A.bf(a,"stream",t.K)
return new A.c0()},
dU(a,b){A.hK(new A.dn(a,b))},
eF(a,b,c,d){var s,r=$.n
if(r===c)return d.$0()
$.n=c
s=r
try{r=d.$0()
return r}finally{$.n=s}},
hJ(a,b,c,d,e){var s,r=$.n
if(r===c)return d.$1(e)
$.n=c
s=r
try{r=d.$1(e)
return r}finally{$.n=s}},
hI(a,b,c,d,e,f){var s,r=$.n
if(r===c)return d.$2(e,f)
$.n=c
s=r
try{r=d.$2(e,f)
return r}finally{$.n=s}},
av(a,b,c,d){if(B.a!==c)d=c.aq(d)
A.eH(d)},
cQ:function cQ(a){this.a=a},
cP:function cP(a,b,c){this.a=a
this.b=b
this.c=c},
cR:function cR(a){this.a=a},
cS:function cS(a){this.a=a},
de:function de(){},
df:function df(a,b){this.a=a
this.b=b},
bW:function bW(a,b){this.a=a
this.b=!1
this.$ti=b},
dk:function dk(a){this.a=a},
dl:function dl(a){this.a=a},
dp:function dp(a){this.a=a},
c2:function c2(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
a3:function a3(a,b){this.a=a
this.$ti=b},
a7:function a7(a,b){this.a=a
this.b=b},
ar:function ar(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
v:function v(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
cU:function cU(a,b){this.a=a
this.b=b},
d0:function d0(a,b){this.a=a
this.b=b},
cY:function cY(a){this.a=a},
cZ:function cZ(a){this.a=a},
d_:function d_(a,b,c){this.a=a
this.b=b
this.c=c},
cX:function cX(a,b){this.a=a
this.b=b},
cW:function cW(a,b){this.a=a
this.b=b},
cV:function cV(a,b,c){this.a=a
this.b=b
this.c=c},
d3:function d3(a,b,c){this.a=a
this.b=b
this.c=c},
d4:function d4(a,b){this.a=a
this.b=b},
d5:function d5(a){this.a=a},
d2:function d2(a,b){this.a=a
this.b=b},
d1:function d1(a,b){this.a=a
this.b=b},
bX:function bX(a){this.a=a
this.b=null},
c0:function c0(){},
dj:function dj(){},
dn:function dn(a,b){this.a=a
this.b=b},
db:function db(){},
dc:function dc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dd:function dd(a,b){this.a=a
this.b=b},
cw(a,b,c){return A.hY(a,new A.Y(b.i("@<0>").A(c).i("Y<1,2>")))},
dI(a,b){return new A.Y(a.i("@<0>").A(b).i("Y<1,2>"))},
aM(a){return new A.b0(a.i("b0<0>"))},
dM(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
el(a,b,c){var s=new A.at(a,b,c.i("at<0>"))
s.c=a.e
return s},
ec(a){var s,r
if(A.e_(a))return"{...}"
s=new A.aX("")
try{r={}
$.ah.push(a)
s.a+="{"
r.a=!0
a.az(0,new A.cy(r,s))
s.a+="}"}finally{$.ah.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
b0:function b0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
da:function da(a){this.a=a
this.c=this.b=null},
at:function at(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
l:function l(){},
aN:function aN(){},
cy:function cy(a,b){this.a=a
this.b=b},
ap:function ap(){},
b5:function b5(){},
ea(a,b,c){return new A.aL(a,b)},
hk(a){return a.by()},
fQ(a,b){return new A.d7(a,[],A.hW())},
fR(a,b,c){var s,r=new A.aX(""),q=A.fQ(r,b)
q.P(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
bo:function bo(){},
bq:function bq(){},
aL:function aL(a,b){this.a=a
this.b=b},
by:function by(a,b){this.a=a
this.b=b},
ct:function ct(){},
cu:function cu(a){this.b=a},
d8:function d8(){},
d9:function d9(a,b){this.a=a
this.b=b},
d7:function d7(a,b,c){this.c=a
this.a=b
this.b=c},
ha(){if(typeof WeakRef=="function")return WeakRef
var s=function LeakRef(a){this._=a}
s.prototype={
deref(){return this._}}
return s},
fl(a,b){a=A.a(a)
a.stack=b.h(0)
throw a
throw A.a("unreachable")},
eb(a,b,c,d){var s,r=c?J.fw(a,d):J.fv(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
cx(a,b,c){var s=A.fy(a,c)
return s},
fy(a,b){var s,r
if(Array.isArray(a))return A.T(a.slice(0),b.i("u<0>"))
s=A.T([],b.i("u<0>"))
for(r=J.c9(a);r.j();)s.push(r.gl())
return s},
eh(a,b,c){var s=J.c9(b)
if(!s.j())return a
if(c.length===0){do a+=A.i(s.gl())
while(s.j())}else{a+=A.i(s.gl())
for(;s.j();)a=a+c+A.i(s.gl())}return a},
dK(){return A.a5(new Error())},
br(a){if(typeof a=="number"||A.dS(a)||a==null)return J.L(a)
if(typeof a=="string")return JSON.stringify(a)
return A.fB(a)},
fm(a,b){A.bf(a,"error",t.K)
A.bf(b,"stackTrace",t.l)
A.fl(a,b)},
bl(a){return new A.bk(a)},
aj(a,b){return new A.M(!1,null,b,a)},
dD(a,b,c){return new A.M(!0,a,b,c)},
cC(a,b,c,d,e){return new A.aT(b,c,!0,a,d,"Invalid value")},
fC(a,b,c){if(a>c)throw A.a(A.cC(a,0,c,"start",null))
if(a>b||b>c)throw A.a(A.cC(b,a,c,"end",null))
return b},
fq(a,b,c,d){return new A.bt(b,!0,a,d,"Index out of range")},
fK(a){return new A.aZ(a)},
ej(a){return new A.bT(a)},
fF(a){return new A.bQ(a)},
aA(a){return new A.bp(a)},
bs(a){return new A.cT(a)},
fu(a,b,c){var s,r
if(A.e_(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.T([],t.s)
$.ah.push(a)
try{A.hD(a,s)}finally{$.ah.pop()}r=A.eh(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
dF(a,b,c){var s,r
if(A.e_(a))return b+"..."+c
s=new A.aX(b)
$.ah.push(a)
try{r=s
r.a=A.eh(r.a,a,", ")}finally{$.ah.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
hD(a,b){var s,r,q,p,o,n,m,l=a.gv(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.j())return
s=A.i(l.gl())
b.push(s)
k+=s.length+2;++j}if(!l.j()){if(j<=5)return
r=b.pop()
q=b.pop()}else{p=l.gl();++j
if(!l.j()){if(j<=4){b.push(A.i(p))
return}r=A.i(p)
q=b.pop()
k+=r.length+2}else{o=l.gl();++j
for(;l.j();p=o,o=n){n=l.gl();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.i(p)
r=A.i(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
eX(a){A.id(a)},
R:function R(a,b){this.a=a
this.$ti=b},
h:function h(){},
bk:function bk(a){this.a=a},
N:function N(){},
M:function M(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aT:function aT(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bt:function bt(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aZ:function aZ(a){this.a=a},
bT:function bT(a){this.a=a},
bQ:function bQ(a){this.a=a},
bp:function bp(a){this.a=a},
aW:function aW(){},
cT:function cT(a){this.a=a},
p:function p(){},
q:function q(){},
d:function d(){},
c1:function c1(){},
aX:function aX(a){this.a=a},
dz(a){},
a_:function a_(){},
cG:function cG(){},
cK:function cK(a){this.a=a},
cH:function cH(){},
cI:function cI(){},
cJ:function cJ(){},
ac:function ac(){},
ca:function ca(){},
a8:function a8(){},
eL(a){var s,r,q,p=a.c
a.c=null
if(p!=null){$.U=$.U+1
s=$.y
$.y=null
try{p.$0()}catch(r){q=a.f&=4294967294
a.f=q|8
A.dW(a)
throw r}finally{$.y=s
A.dX()}}},
dW(a){var s,r
for(s=a.d;s!=null;s=s.c){r=s.a
r===$&&A.r()
r.B(s)}a.d=a.a=null
A.eL(a)},
aB:function aB(){},
cr:function cr(a,b){this.a=a
this.b=b},
cz:function cz(){var _=this
_.a=$
_.c=_.b=null
_.d=$
_.f=_.e=null
_.r=$
_.w=null},
ee(a,b){var s=a.b
if(s!==b&&b.e==null){b.f=s
if(s!=null)s.e=b
a.b=b}},
e2(a){return new A.a3(A.ig(a),t.Y)},
ig(a){return function(){var s=a
var r=0,q=1,p=[],o,n
return function $async$e2(b,c,d){if(c===1){p.push(d)
r=q}while(true)switch(r){case 0:o=s.b
case 2:if(!(o!=null)){r=4
break}n=o.d
n===$&&A.r()
r=5
return b.b=n,1
case 5:case 3:o=o.f
r=2
break
case 4:return 0
case 1:return b.c=p.at(-1),3}}}},
eI(a){var s,r,q,p,o=$.y
if(o==null)return null
s=a.a
if(s!=null){r=s.d
r===$&&A.r()
r=r!==o}else r=!0
if(r){q=new A.cz()
q.r=0
q.a=a
q.b=o.gn()
o=$.y
o.toString
q.d=o
q.w=s
if(o.gn()!=null)$.y.gn().c=q
$.y.sn(q)
a.a=q
if(($.y.gaw()&32)!==0)a.S(q)
return q}else{r=s.r
r===$&&A.r()
if(r===-1){s.r=0
r=s.c
if(r!=null){r.b=s.b
p=s.b
if(p!=null)p.c=r
s.b=o.gn()
s.c=null
$.y.gn().c=s
$.y.sn(s)}return s}}return null},
eZ(a,b){var s,r,q=a.b
if(q!=null){s=b.e
r=b.f
if(s!=null){s.f=r
b.e=null}if(r!=null){r.e=s
b.f=null}if(b===q)a.b=r}},
H:function H(){},
a0:function a0(){},
fE(a,b,c,d){var s,r,q=$.bi+1
$.bi=q
q=new A.aV(c,new A.cD(d),A.aM(t.M),!1,!1,q,a,d.i("aV<0>"))
s=A.a0.prototype.ga3.call(q)
r=$.az()
if(r!=null)r.bm(q,s)
q.e=!0
return q},
w:function w(a,b,c,d,e,f,g,h){var _=this
_.ay=a
_.a$=b
_.b$=c
_.c$=d
_.d=e
_.e=f
_.f=null
_.r=g
_.w=4
_.x=null
_.y=!1
_.z=$
_.Q=0
_.b=_.a=null
_.$ti=h},
x:function x(a,b,c,d){var _=this
_.r=a
_.w=b
_.x=!1
_.a=c
_.b=d
_.e=_.d=_.c=null
_.f=32},
aU:function aU(){},
aV:function aV(a,b,c,d,e,f,g,h){var _=this
_.z=a
_.Q=b
_.a$=c
_.b$=d
_.c$=e
_.d=f
_.e=!0
_.f=g
_.r=0
_.b=_.a=null
_.$ti=h},
cD:function cD(a){this.a=a},
bO:function bO(){},
bP:function bP(a){this.a=a},
b_:function b_(){},
b6:function b6(){},
cb:function cb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=!1},
cp:function cp(a){this.a=a},
cq:function cq(a){this.a=a},
cg:function cg(){},
ch:function ch(){},
ci:function ci(){},
cf:function cf(){},
cj:function cj(){},
ck:function ck(){},
cl:function cl(){},
cd:function cd(){},
ce:function ce(){},
cm:function cm(){},
cn:function cn(){},
co:function co(a){this.a=a},
cc:function cc(){},
fp(){return new A.al()},
al:function al(){this.a=$},
fL(){return new A.aq(A.fE(0,!1,null,t.S),A.T([],t.u))},
aq:function aq(a,b){var _=this
_.b=a
_.c=$
_.cy$=b
_.a=$},
cO:function cO(a){this.a=a},
cM:function cM(a){this.a=a},
cN:function cN(a,b){this.a=a
this.b=b},
c4:function c4(){},
e0(a){return new A.a3(A.i7(a),t.a)},
i7(a){return function(){var s=a
var r=0,q=1,p=[],o,n
return function $async$e0(b,c,d){if(c===1){p.push(d)
r=q}while(true)switch(r){case 0:o=s.gn()
case 2:if(!(o!=null)){r=4
break}n=o.a
n===$&&A.r()
r=5
return b.b=n,1
case 5:case 3:o=o.c
r=2
break
case 4:return 0
case 1:return b.c=p.at(-1),3}}}},
eU(a){var s,r,q
for(s=a.gn();s!=null;s=s.c){r=s.a
r===$&&A.r()
r=r.ga9()
q=s.r
q===$&&A.r()
if(r!==q||!s.a.a2()||s.a.ga9()!==s.r)return!0}return!1},
eW(a){var s,r,q,p
for(s=a.gn();s!=null;s=p){r=s.a
r===$&&A.r()
q=r.a
if(q!=null)s.w=q
r.a=s
s.r=-1
p=s.c
if(p==null){a.sn(s)
break}}},
eM(a){var s,r,q,p,o=a.gn()
for(s=null;o!=null;o=r){r=o.b
q=o.r
q===$&&A.r()
if(q===-1){q=o.a
q===$&&A.r()
q.B(o)
if(r!=null)r.c=o.c
q=o.c
if(q!=null)q.b=r}else s=o
q=o.a
q===$&&A.r()
p=o.w
q.a=p
if(p!=null)o.w=null}a.sn(s)},
id(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
ii(a){A.c7(new A.aa("Field '"+a+"' has been assigned during initialization."),new Error())},
r(){A.c7(new A.aa("Field '' has not been initialized."),new Error())},
ik(){A.c7(new A.aa("Field '' has already been initialized."),new Error())},
ij(){A.c7(new A.aa("Field '' has been assigned during initialization."),new Error())},
dm(a){var s
if(typeof a=="function")throw A.a(A.aj("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.hi,a)
s[$.dB()]=a
return s},
hi(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
hj(a,b,c,d,e,f){if(f>=4)return a.$4(b,c,d,e)
if(f===3)return a.$3(b,c,d)
if(f===2)return a.$2(b,c)
if(f===1)return a.$1(b)
return a.$0()},
dX(){var s,r,q,p,o,n,m=$.U
if(m>1){$.U=m-1
return}s=null
r=!1
for(;m=$.dr,m!=null;){q=m
$.dr=null
$.dq=$.dq+1
for(;q!=null;){o=q.e
q.e=null
q.f&=4294967293
if((q.f&8)===0&&A.eU(q))try{q.ar()}catch(n){p=A.K(n)
if(!r){s=p
r=!0}}q=o}}$.dq=0
$.U=$.U-1
if(r){m=s
m.toString
throw A.a(m)}},
i9(){var s=$.fb()
s.av("hello-world",A.i0())
s.av("x-counter",A.io())}},B={}
var w=[A,J,B]
var $={}
A.dG.prototype={}
J.bu.prototype={
G(a,b){return a===b},
gq(a){return A.bM(a)},
h(a){return"Instance of '"+A.cB(a)+"'"},
gm(a){return A.af(A.dR(this))}}
J.bv.prototype={
h(a){return String(a)},
gq(a){return a?519018:218159},
gm(a){return A.af(t.y)},
$ie:1}
J.aG.prototype={
G(a,b){return null==b},
h(a){return"null"},
gq(a){return 0},
$ie:1,
$iq:1}
J.aJ.prototype={$ij:1}
J.Z.prototype={
gq(a){return 0},
h(a){return String(a)}}
J.bL.prototype={}
J.aY.prototype={}
J.X.prototype={
h(a){var s=a[$.dB()]
if(s==null)return this.aN(a)
return"JavaScript function for "+J.L(s)},
$ia9:1}
J.aI.prototype={
gq(a){return 0},
h(a){return String(a)}}
J.aK.prototype={
gq(a){return 0},
h(a){return String(a)}}
J.u.prototype={
ap(a,b){a.$flags&1&&A.il(a,"addAll",2)
this.aT(a,b)
return},
aT(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.a(A.aA(a))
for(s=0;s<r;++s)a.push(b[s])},
F(a,b){var s,r=A.eb(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.i(a[s])
return r.join(b)},
gaA(a){return a.length!==0},
h(a){return A.dF(a,"[","]")},
gv(a){return new J.bj(a,a.length,A.dQ(a).i("bj<1>"))},
gq(a){return A.bM(a)},
gp(a){return a.length},
k(a,b){if(!(b>=0&&b<a.length))throw A.a(A.eO(a,b))
return a[b]},
$if:1,
$ik:1}
J.cs.prototype={}
J.bj.prototype={
gl(){var s=this.d
return s==null?this.$ti.c.a(s):s},
j(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.a(A.f_(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.aH.prototype={
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gq(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
am(a,b){var s
if(a>0)s=this.b2(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
b2(a,b){return b>31?0:a>>>b},
gm(a){return A.af(t.H)},
$io:1}
J.aF.prototype={
gm(a){return A.af(t.S)},
$ie:1,
$ib:1}
J.bw.prototype={
gm(a){return A.af(t.i)},
$ie:1}
J.am.prototype={
aI(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
I(a,b,c){return a.substring(b,A.fC(b,c,a.length))},
h(a){return a},
gq(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gm(a){return A.af(t.N)},
gp(a){return a.length},
$ie:1,
$ic:1}
A.aa.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.bz.prototype={
gl(){var s=this.d
return s==null?this.$ti.c.a(s):s},
j(){var s,r=this,q=r.a,p=J.eP(q),o=p.gp(q)
if(r.b!==o)throw A.a(A.aA(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.b6(q,s);++r.c
return!0}}
A.F.prototype={
gv(a){return new A.bA(J.c9(this.a),this.b,A.bc(this).i("bA<1,2>"))},
gp(a){return J.e4(this.a)}}
A.aC.prototype={$if:1}
A.bA.prototype={
j(){var s=this,r=s.b
if(r.j()){s.a=s.c.$1(r.gl())
return!0}s.a=null
return!1},
gl(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.P.prototype={
gv(a){var s=this.a
return new A.bV(A.el(s,s.r,s.$ti.c),this.b)}}
A.bV.prototype={
j(){var s,r,q,p
for(s=this.a,r=this.b,q=s.$ti.c;s.j();){p=s.d
if(r.$1(p==null?q.a(p):p))return!0}return!1},
gl(){var s=this.a,r=s.d
return r==null?s.$ti.c.a(r):r}}
A.aE.prototype={}
A.cE.prototype={
t(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.aS.prototype={
h(a){return"Null check operator used on a null value"}}
A.bx.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bU.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.cA.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aD.prototype={}
A.b7.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ia1:1}
A.W.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.f0(r==null?"unknown":r)+"'"},
$ia9:1,
gbB(){return this},
$C:"$1",
$R:1,
$D:null}
A.bm.prototype={$C:"$0",$R:0}
A.bn.prototype={$C:"$2",$R:2}
A.bS.prototype={}
A.bR.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.f0(s)+"'"}}
A.ak.prototype={
G(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ak))return!1
return this.$_target===b.$_target&&this.a===b.a},
gq(a){return(A.ic(this.a)^A.bM(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.cB(this.a)+"'")}}
A.bY.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bN.prototype={
h(a){return"RuntimeError: "+this.a}}
A.Y.prototype={
gp(a){return this.a},
b4(a){var s=this.ba(a)
return s},
ba(a){var s=this.d
if(s==null)return!1
return this.O(s[J.ai(a)&1073741823],a)>=0},
k(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.bb(b)},
bb(a){var s,r,q=this.d
if(q==null)return null
s=q[J.ai(a)&1073741823]
r=this.O(s,a)
if(r<0)return null
return s[r].b},
H(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.ab(s==null?m.b=m.Z():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.ab(r==null?m.c=m.Z():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.Z()
p=J.ai(b)&1073741823
o=q[p]
if(o==null)q[p]=[m.T(b,c)]
else{n=m.O(o,b)
if(n>=0)o[n].b=c
else o.push(m.T(b,c))}}},
bp(a,b){var s,r,q=this
if(q.b4(a)){s=q.k(0,a)
return s==null?q.$ti.y[1].a(s):s}r=b.$0()
q.H(0,a,r)
return r},
a6(a,b){if((b&0x3fffffff)===b)return this.aR(this.c,b)
else return this.bc(b)},
bc(a){var s,r,q,p,o=this.d
if(o==null)return null
s=B.d.gq(a)&1073741823
r=o[s]
q=this.O(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
this.ad(p)
if(r.length===0)delete o[s]
return p.b},
az(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw A.a(A.aA(s))
r=r.c}},
ab(a,b,c){var s=a[b]
if(s==null)a[b]=this.T(b,c)
else s.b=c},
aR(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.ad(s)
delete a[b]
return s.b},
ac(){this.r=this.r+1&1073741823},
T(a,b){var s,r=this,q=new A.cv(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.ac()
return q},
ad(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.ac()},
O(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.c8(a[r].a,b))return r
return-1},
h(a){return A.ec(this)},
Z(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.cv.prototype={}
A.dv.prototype={
$1(a){return this.a(a)},
$S:5}
A.dw.prototype={
$2(a,b){return this.a(a,b)},
$S:11}
A.dx.prototype={
$1(a){return this.a(a)},
$S:12}
A.bB.prototype={
gm(a){return B.x},
$ie:1}
A.aQ.prototype={}
A.bC.prototype={
gm(a){return B.y},
$ie:1}
A.ao.prototype={
gp(a){return a.length},
$iD:1}
A.aO.prototype={
k(a,b){A.ad(b,a,a.length)
return a[b]},
$if:1,
$ik:1}
A.aP.prototype={$if:1,$ik:1}
A.bD.prototype={
gm(a){return B.z},
$ie:1}
A.bE.prototype={
gm(a){return B.A},
$ie:1}
A.bF.prototype={
gm(a){return B.B},
k(a,b){A.ad(b,a,a.length)
return a[b]},
$ie:1}
A.bG.prototype={
gm(a){return B.C},
k(a,b){A.ad(b,a,a.length)
return a[b]},
$ie:1}
A.bH.prototype={
gm(a){return B.D},
k(a,b){A.ad(b,a,a.length)
return a[b]},
$ie:1}
A.bI.prototype={
gm(a){return B.E},
k(a,b){A.ad(b,a,a.length)
return a[b]},
$ie:1}
A.bJ.prototype={
gm(a){return B.F},
k(a,b){A.ad(b,a,a.length)
return a[b]},
$ie:1}
A.aR.prototype={
gm(a){return B.G},
gp(a){return a.length},
k(a,b){A.ad(b,a,a.length)
return a[b]},
$ie:1}
A.bK.prototype={
gm(a){return B.H},
gp(a){return a.length},
k(a,b){A.ad(b,a,a.length)
return a[b]},
$ie:1}
A.b1.prototype={}
A.b2.prototype={}
A.b3.prototype={}
A.b4.prototype={}
A.G.prototype={
i(a){return A.dh(v.typeUniverse,this,a)},
A(a){return A.h7(v.typeUniverse,this,a)}}
A.c_.prototype={}
A.dg.prototype={
h(a){return A.C(this.a,null)}}
A.bZ.prototype={
h(a){return this.a}}
A.b8.prototype={$iN:1}
A.cQ.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:1}
A.cP.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:13}
A.cR.prototype={
$0(){this.a.$0()},
$S:2}
A.cS.prototype={
$0(){this.a.$0()},
$S:2}
A.de.prototype={
aQ(a,b){if(self.setTimeout!=null)self.setTimeout(A.ds(new A.df(this,b),0),a)
else throw A.a(A.fK("`setTimeout()` not found."))}}
A.df.prototype={
$0(){this.b.$0()},
$S:0}
A.bW.prototype={}
A.dk.prototype={
$1(a){return this.a.$2(0,a)},
$S:14}
A.dl.prototype={
$2(a,b){this.a.$2(1,new A.aD(a,b))},
$S:15}
A.dp.prototype={
$2(a,b){this.a(a,b)},
$S:16}
A.c2.prototype={
gl(){return this.b},
b0(a,b){var s,r,q
a=a
b=b
s=this.a
for(;!0;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
j(){var s,r,q,p,o=this,n=null,m=0
for(;!0;){s=o.d
if(s!=null)try{if(s.j()){o.b=s.gl()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.b0(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.er
return!1}o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.er
throw n
return!1}o.a=p.pop()
m=1
continue}throw A.a(A.fF("sync*"))}return!1},
bC(a){var s,r,q=this
if(a instanceof A.a3){s=a.a()
r=q.e
if(r==null)r=q.e=[]
r.push(q.a)
q.a=s
return 2}else{q.d=J.c9(a)
return 2}}}
A.a3.prototype={
gv(a){return new A.c2(this.a())}}
A.a7.prototype={
h(a){return A.i(this.a)},
$ih:1,
gR(){return this.b}}
A.ar.prototype={
be(a){if((this.c&15)!==6)return!0
return this.b.b.a7(this.d,a.a)},
b9(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.aC(r,p,a.b)
else q=o.a7(r,p)
try{p=q
return p}catch(s){if(t.c.b(A.K(s))){if((this.c&1)!==0)throw A.a(A.aj("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.a(A.aj("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.v.prototype={
a8(a,b,c){var s,r=$.n
if(r===B.a){if(!t.C.b(b)&&!t.v.b(b))throw A.a(A.dD(b,"onError",u.c))}else b=A.hH(b,r)
s=new A.v(r,c.i("v<0>"))
this.U(new A.ar(s,3,a,b,this.$ti.i("@<1>").A(c).i("ar<1,2>")))
return s},
an(a,b,c){var s=new A.v($.n,c.i("v<0>"))
this.U(new A.ar(s,19,a,b,this.$ti.i("@<1>").A(c).i("ar<1,2>")))
return s},
b1(a){this.a=this.a&1|16
this.c=a},
J(a){this.a=a.a&30|this.a&1
this.c=a.c},
U(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.U(a)
return}s.J(r)}A.av(null,null,s.b,new A.cU(s,a))}},
ak(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.ak(a)
return}n.J(s)}m.a=n.L(a)
A.av(null,null,n.b,new A.d0(m,n))}},
K(){var s=this.c
this.c=null
return this.L(s)},
L(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aW(a){var s,r,q,p=this
p.a^=2
try{a.a8(new A.cY(p),new A.cZ(p),t.P)}catch(q){s=A.K(q)
r=A.a5(q)
A.ih(new A.d_(p,s,r))}},
W(a){var s=this,r=s.K()
s.a=8
s.c=a
A.as(s,r)},
aX(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.K()
q.J(a)
A.as(q,r)},
D(a,b){var s=this.K()
this.b1(new A.a7(a,b))
A.as(this,s)},
aU(a){if(this.$ti.i("I<1>").b(a)){this.ag(a)
return}this.aV(a)},
aV(a){this.a^=2
A.av(null,null,this.b,new A.cW(this,a))},
ag(a){if(this.$ti.b(a)){A.dL(a,this,!1)
return}this.aW(a)},
af(a,b){this.a^=2
A.av(null,null,this.b,new A.cV(this,a,b))},
$iI:1}
A.cU.prototype={
$0(){A.as(this.a,this.b)},
$S:0}
A.d0.prototype={
$0(){A.as(this.b,this.a.a)},
$S:0}
A.cY.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.W(p.$ti.c.a(a))}catch(q){s=A.K(q)
r=A.a5(q)
p.D(s,r)}},
$S:1}
A.cZ.prototype={
$2(a,b){this.a.D(a,b)},
$S:6}
A.d_.prototype={
$0(){this.a.D(this.b,this.c)},
$S:0}
A.cX.prototype={
$0(){A.dL(this.a.a,this.b,!0)},
$S:0}
A.cW.prototype={
$0(){this.a.W(this.b)},
$S:0}
A.cV.prototype={
$0(){this.a.D(this.b,this.c)},
$S:0}
A.d3.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.br(q.d)}catch(p){s=A.K(p)
r=A.a5(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.dE(q)
n=k.a
n.c=new A.a7(q,o)
q=n}q.b=!0
return}if(j instanceof A.v&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.v){m=k.b.a
l=new A.v(m.b,m.$ti)
j.a8(new A.d4(l,m),new A.d5(l),t.q)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.d4.prototype={
$1(a){this.a.aX(this.b)},
$S:1}
A.d5.prototype={
$2(a,b){this.a.D(a,b)},
$S:6}
A.d2.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.a7(p.d,this.b)}catch(o){s=A.K(o)
r=A.a5(o)
q=s
p=r
if(p==null)p=A.dE(q)
n=this.a
n.c=new A.a7(q,p)
n.b=!0}},
$S:0}
A.d1.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.be(s)&&p.a.e!=null){p.c=p.a.b9(s)
p.b=!1}}catch(o){r=A.K(o)
q=A.a5(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.dE(p)
m=l.b
m.c=new A.a7(p,n)
p=m}p.b=!0}},
$S:0}
A.bX.prototype={}
A.c0.prototype={}
A.dj.prototype={}
A.dn.prototype={
$0(){A.fm(this.a,this.b)},
$S:0}
A.db.prototype={
bu(a){var s,r,q
try{if(B.a===$.n){a.$0()
return}A.eF(null,null,this,a)}catch(q){s=A.K(q)
r=A.a5(q)
A.dU(s,r)}},
b3(a,b,c,d){return new A.dc(this,a,c,d,b)},
aq(a){return new A.dd(this,a)},
bs(a){if($.n===B.a)return a.$0()
return A.eF(null,null,this,a)},
br(a){return this.bs(a,t.z)},
bv(a,b){if($.n===B.a)return a.$1(b)
return A.hJ(null,null,this,a,b)},
a7(a,b){var s=t.z
return this.bv(a,b,s,s)},
bt(a,b,c){if($.n===B.a)return a.$2(b,c)
return A.hI(null,null,this,a,b,c)},
aC(a,b,c){var s=t.z
return this.bt(a,b,c,s,s,s)},
bq(a){return a},
aB(a){var s=t.z
return this.bq(a,s,s,s)}}
A.dc.prototype={
$2(a,b){return this.a.aC(this.b,a,b)},
$S(){return this.e.i("@<0>").A(this.c).A(this.d).i("1(2,3)")}}
A.dd.prototype={
$0(){return this.a.bu(this.b)},
$S:0}
A.b0.prototype={
gv(a){var s=this,r=new A.at(s,s.r,s.$ti.i("at<1>"))
r.c=s.e
return r},
gp(a){return this.a},
a0(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.ae(s==null?q.b=A.dM():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.ae(r==null?q.c=A.dM():r,b)}else return q.aS(b)},
aS(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.dM()
s=J.ai(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.a_(a)]
else{if(q.ah(r,a)>=0)return!1
r.push(q.a_(a))}return!0},
a6(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.al(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.al(s.c,b)
else return s.b_(b)},
b_(a){var s,r,q,p,o=this.d
if(o==null)return!1
s=J.ai(a)&1073741823
r=o[s]
q=this.ah(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete o[s]
this.ao(p)
return!0},
aY(a,b){var s,r,q,p,o=this,n=o.e
for(;n!=null;n=r){s=n.a
r=n.b
q=o.r
p=a.$1(s)
if(q!==o.r)throw A.a(A.aA(o))
if(!0===p)o.a6(0,s)}},
ae(a,b){if(a[b]!=null)return!1
a[b]=this.a_(b)
return!0},
al(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.ao(s)
delete a[b]
return!0},
ai(){this.r=this.r+1&1073741823},
a_(a){var s,r=this,q=new A.da(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.ai()
return q},
ao(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.ai()},
ah(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.c8(a[r].a,b))return r
return-1}}
A.da.prototype={}
A.at.prototype={
gl(){var s=this.d
return s==null?this.$ti.c.a(s):s},
j(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.a(A.aA(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.l.prototype={
gv(a){return new A.bz(a,this.gp(a),A.bg(a).i("bz<l.E>"))},
b6(a,b){return this.k(a,b)},
gaA(a){return this.gp(a)!==0},
h(a){return A.dF(a,"[","]")}}
A.aN.prototype={
gp(a){return this.a},
h(a){return A.ec(this)},
$iE:1}
A.cy.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.i(a)
s=r.a+=s
r.a=s+": "
s=A.i(b)
r.a+=s},
$S:7}
A.ap.prototype={
h(a){return A.dF(this,"{","}")},
$if:1}
A.b5.prototype={}
A.bo.prototype={}
A.bq.prototype={}
A.aL.prototype={
h(a){var s=A.br(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.by.prototype={
h(a){return"Cyclic error in JSON stringify"}}
A.ct.prototype={
b7(a){var s=A.fR(a,this.gb8().b,null)
return s},
gb8(){return B.w}}
A.cu.prototype={}
A.d8.prototype={
aE(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.I(a,r,q)
r=q+1
o=A.t(92)
s.a+=o
o=A.t(117)
s.a+=o
o=A.t(100)
s.a+=o
o=p>>>8&15
o=A.t(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.t(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.t(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.I(a,r,q)
r=q+1
o=A.t(92)
s.a+=o
switch(p){case 8:o=A.t(98)
s.a+=o
break
case 9:o=A.t(116)
s.a+=o
break
case 10:o=A.t(110)
s.a+=o
break
case 12:o=A.t(102)
s.a+=o
break
case 13:o=A.t(114)
s.a+=o
break
default:o=A.t(117)
s.a+=o
o=A.t(48)
s.a+=o
o=A.t(48)
s.a+=o
o=p>>>4&15
o=A.t(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.t(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.I(a,r,q)
r=q+1
o=A.t(92)
s.a+=o
o=A.t(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.I(a,r,m)},
V(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.a(new A.by(a,null))}s.push(a)},
P(a){var s,r,q,p,o=this
if(o.aD(a))return
o.V(a)
try{s=o.b.$1(a)
if(!o.aD(s)){q=A.ea(a,null,o.gaj())
throw A.a(q)}o.a.pop()}catch(p){r=A.K(p)
q=A.ea(a,r,o.gaj())
throw A.a(q)}},
aD(a){var s,r,q,p=this
if(typeof a=="number"){if(!isFinite(a))return!1
s=p.c
r=B.t.h(a)
s.a+=r
return!0}else if(a===!0){p.c.a+="true"
return!0}else if(a===!1){p.c.a+="false"
return!0}else if(a==null){p.c.a+="null"
return!0}else if(typeof a=="string"){s=p.c
s.a+='"'
p.aE(a)
s.a+='"'
return!0}else if(t.j.b(a)){p.V(a)
p.bz(a)
p.a.pop()
return!0}else if(a instanceof A.Y){p.V(a)
q=p.bA(a)
p.a.pop()
return q}else return!1},
bz(a){var s,r,q=this.c
q.a+="["
s=J.eQ(a)
if(s.gaA(a)){this.P(s.k(a,0))
for(r=1;r<s.gp(a);++r){q.a+=","
this.P(s.k(a,r))}}q.a+="]"},
bA(a){var s,r,q,p,o=this,n={},m=a.a
if(m===0){o.c.a+="{}"
return!0}m*=2
s=A.eb(m,null,!1,t.X)
r=n.a=0
n.b=!0
a.az(0,new A.d9(n,s))
if(!n.b)return!1
q=o.c
q.a+="{"
for(p='"';r<m;r+=2,p=',"'){q.a+=p
o.aE(A.hc(s[r]))
q.a+='":'
o.P(s[r+1])}q.a+="}"
return!0}}
A.d9.prototype={
$2(a,b){var s,r,q,p
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
q=r.a
p=r.a=q+1
s[q]=a
r.a=p+1
s[p]=b},
$S:7}
A.d7.prototype={
gaj(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.R.prototype={$iA:1}
A.h.prototype={
gR(){return A.fA(this)}}
A.bk.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.br(s)
return"Assertion failed"}}
A.N.prototype={}
A.M.prototype={
gY(){return"Invalid argument"+(!this.a?"(s)":"")},
gX(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gY()+q+o
if(!s.a)return n
return n+s.gX()+": "+A.br(s.ga4())},
ga4(){return this.b}}
A.aT.prototype={
ga4(){return this.b},
gY(){return"RangeError"},
gX(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.i(q):""
else if(q==null)s=": Not greater than or equal to "+A.i(r)
else if(q>r)s=": Not in inclusive range "+A.i(r)+".."+A.i(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.i(r)
return s}}
A.bt.prototype={
ga4(){return this.b},
gY(){return"RangeError"},
gX(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gp(a){return this.f}}
A.aZ.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bT.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.bQ.prototype={
h(a){return"Bad state: "+this.a}}
A.bp.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.br(s)+"."}}
A.aW.prototype={
h(a){return"Stack Overflow"},
gR(){return null},
$ih:1}
A.cT.prototype={
h(a){return"Exception: "+this.a}}
A.p.prototype={
F(a,b){var s,r,q=this.gv(this)
if(!q.j())return""
s=J.L(q.gl())
if(!q.j())return s
if(b.length===0){r=s
do r+=J.L(q.gl())
while(q.j())}else{r=s
do r=r+b+J.L(q.gl())
while(q.j())}return r.charCodeAt(0)==0?r:r},
gp(a){var s,r=this.gv(this)
for(s=0;r.j();)++s
return s},
h(a){return A.fu(this,"(",")")}}
A.q.prototype={
gq(a){return A.d.prototype.gq.call(this,0)},
h(a){return"null"}}
A.d.prototype={$id:1,
G(a,b){return this===b},
gq(a){return A.bM(this)},
h(a){return"Instance of '"+A.cB(this)+"'"},
gm(a){return A.eR(this)},
toString(){return this.h(this)}}
A.c1.prototype={
h(a){return""},
$ia1:1}
A.aX.prototype={
gp(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.a_.prototype={}
A.cG.prototype={
av(a,b){var s,r,q=A.dm(new A.cK(b)),p=b.$0(),o=B.c.F(A.T([],t.s),","),n={}
n[$.fc()]=p
n.connectedCallback=A.dm(new A.cH())
n.disconnectedCallback=A.dm(new A.cI())
s=new A.cJ()
if(typeof s=="function")A.c6(A.aj("Attempting to rewrap a JS function.",null))
r=function(c,d){return function(e,f,g,h){return c(d,e,f,g,h,arguments.length)}}(A.hj,s)
r[$.dB()]=s
n.attributeChangedCallback=r
self.createDartWebComponent(a,q,o,n)}}
A.cK.prototype={
$1(a){var s=$.cL.bp(a,this.a)
s.a!==$&&A.ik()
return s.a=a},
$S:17}
A.cH.prototype={
$1(a){var s=$.cL.k(0,a)
if(s!=null)s.M()},
$S:3}
A.cI.prototype={
$1(a){var s=$.cL.k(0,a)
if(s!=null)s.a1()},
$S:3}
A.cJ.prototype={
$4(a,b,c,d){$.cL.k(0,a)},
$S:18}
A.ac.prototype={
M(){},
a1(){}}
A.ca.prototype={}
A.a8.prototype={
sa3(a){this.z=a
this.y=!0},
a2(){var s,r,q,p,o,n,m=this,l=m.w&=4294967293
if((l&1)!==0)return!1
if((l&36)===32)return!0
l&=4294967291
m.w=l
q=m.r
p=$.du
if(q===p)return!0
m.r=p
m.w=l|1
if(m.Q>0&&!A.eU(m)){m.w&=4294967294
return!0}o=$.y
try{A.eW(m)
$.y=m
s=m.d.$0()
l=!0
if(m.y)if((m.w&16)===0){l=m.z
l===$&&A.r()
l=!J.c8(l,s)||m.Q===0}if(l){l=s
q=$.az()
if(q!=null)q.bi(m,l)
m.aJ(l)
m.w&=4294967279;++m.Q}}catch(n){r=A.K(n)
m.x=r
m.w|=16;++m.Q}$.y=o
A.eM(m)
m.w&=4294967294
return!0},
S(a){var s,r,q=this
if(q.b==null){q.w|=36
for(s=q.f;s!=null;s=s.c){r=s.a
r===$&&A.r()
r.S(s)}}A.ee(q,a)},
B(a){var s,r=this
if(r.b!=null){A.eZ(r,a)
if(r.b==null){r.w&=4294967263
for(a=r.f;a!=null;a=a.c){s=a.a
s===$&&A.r()
s.B(a)}}}},
a5(){var s,r=this.w
if((r&2)===0){this.w=r|6
for(s=this.b;s!=null;s=s.f){r=s.d
r===$&&A.r()
r.a5()}}},
gu(){var s,r,q=this
if((q.w&1)!==0)throw A.a(A.bs("Cycle detected"))
s=A.eI(q)
q.a2()
if(s!=null)s.r=q.Q
if((q.w&16)!==0){r=q.x
r.toString
throw A.a(r)}r=q.z
r===$&&A.r()
return r},
$iab:1,
gC(){return this.e},
gn(){return this.f},
gaw(){return this.w},
ga9(){return this.Q},
sn(a){return this.f=a}}
A.aB.prototype={
ar(){var s,r,q=this,p=q.aH()
try{if((q.f&8)!==0)return
r=q.a
if(r==null)return
s=r.$0()
if(t.Z.b(s))q.c=s}finally{p.$0()}},
aH(){var s,r=this,q=r.f
if((q&1)!==0)throw A.a(A.bs("Cycle detected"))
q|=1
r.f=q
r.f=q&4294967287
A.eL(r)
A.eW(r)
$.U=$.U+1
s=$.y
$.y=r
return new A.cr(r,s)},
a5(){var s=this,r=s.f
if((r&2)===0){s.f=r|2
s.e=$.dr
$.dr=s}},
N(){var s=this.f|=8
if((s&1)===0)A.dW(this)},
$0(){var s
try{this.ar()}catch(s){this.N()
throw s}return this.gb5()},
$iab:1,
gC(){return this.b},
gn(){return this.d},
gaw(){return this.f},
sn(a){return this.d=a}}
A.cr.prototype={
$0(){var s,r=this.a
if($.y!==r)A.c6(A.bs("Out-of-order effect"))
A.eM(r)
$.y=this.b
s=r.f&=4294967294
if((s&8)!==0)A.dW(r)
A.dX()
return null},
$S:0}
A.cz.prototype={}
A.H.prototype={
h(a){return J.L(this.gu())},
by(){return this.gu()},
$0(){return this.gu()}}
A.a0.prototype={
ga3(){var s=this.f
s===$&&A.r()
return s},
a2(){return!0},
S(a){A.ee(this,a)},
B(a){A.eZ(this,a)},
gu(){var s,r=A.eI(this)
if(r!=null)r.r=this.r
s=this.f
s===$&&A.r()
return s},
bd(a){var s,r,q=this
if($.dq>100)throw A.a(A.bs("Cycle detected"))
q.f=a
q.e=!0;++q.r
$.du=$.du+1
$.U=$.U+1
try{s=q.b
while(s!=null){r=s.d
r===$&&A.r()
r.a5()
s=s.f}}finally{A.dX()}},
gC(){return this.d},
ga9(){return this.r}}
A.w.prototype={
B(a){this.aK(a)},
gu(){var s=this
if(s.c$)A.eX("computed warning: ["+s.e+"|"+A.i(s.ay)+"] has been read after disposed: "+A.dK().h(0))
return A.a8.prototype.gu.call(s)},
$iz:1,
gau(){return this.ay}}
A.x.prototype={
$0(){var s=$.az()
if(s!=null)s.bj(this)
return this.aL()},
N(){var s,r,q,p=this
if(p.x)return
p.aM()
for(s=p.r,s=A.el(s,s.r,s.$ti.c),r=s.$ti.c;s.j();){q=s.d;(q==null?r.a(q):q).$0()}p.x=!0
s=$.az()
if(s!=null)s.bk(p)}}
A.aU.prototype={}
A.aV.prototype={
aG(a){var s,r=this
if(r.c$)throw A.a(new A.bP("A "+A.eR(r).h(0)+" signal was written after being disposed.\nOnce you have called dispose() on a signal, it can no longer be used."))
s=r.f
s===$&&A.r()
s=r.Q.$2(a,s)
s=!s
if(s){s=$.az()
if(s!=null)s.bo(r,a)
r.bd(a)
return!0}return!1},
gu(){var s=this
if(s.c$)A.eX("signal warning: ["+s.d+"|"+A.i(s.z)+"] has been read after disposed: "+A.dK().h(0))
return A.a0.prototype.gu.call(s)},
B(a){this.aO(a)},
$iz:1,
gau(){return this.z}}
A.cD.prototype={
$2(a,b){return a===b},
$S(){return this.a.i("ae(0,0)")}}
A.bO.prototype={
h(a){return this.a}}
A.bP.prototype={}
A.b_.prototype={}
A.b6.prototype={}
A.cb.prototype={
E(){var s,r="ext.signals.getAllNodes",q=this.e
if(q)return
q=new A.cp(this)
s=t.N
A.bf(r,"method",s)
if(!B.b.aI(r,"ext."))A.c6(A.dD(r,"method","Must begin with ext."))
if($.ez.k(0,r)!=null)A.c6(A.aj("Extension already registered: ext.signals.getAllNodes",null))
A.bf(q,"handler",t.F)
$.ez.H(0,r,$.n.b3(q,t.h,s,t.f))
this.e=!0},
bg(a){A.dz("computed created: ["+a.e+"|"+A.i(a.ay)+"]")
this.E()
this.b.a0(0,new A.R(new ($.dC())(a),t.V))},
bf(a){return this.bg(a,t.z)},
bh(a,b){A.dz("computed updated: ["+a.e+"|"+A.i(a.ay)+"] => "+A.i(b))
this.E()},
bi(a,b){return this.bh(a,b,t.z)},
bl(a,b){A.dz("signal created: ["+a.d+"|"+A.i(a.z)+"] => "+b)
this.E()
this.a.a0(0,new A.R(new ($.dC())(a),t.O))},
bm(a,b){return this.bl(a,b,t.z)},
bn(a,b){A.dz("signal updated: ["+a.d+"|"+A.i(a.z)+"] => "+b)
this.E()},
bo(a,b){return this.bn(a,b,t.z)},
bj(a){this.c.H(0,a.b,0)
this.d.a0(0,new A.R(new ($.dC())(a),t.B))
this.E()},
bk(a){this.c.a6(0,a.b)
this.d.aY(new A.cq(a),!0)
this.E()},
aZ(){var s,r,q,p=this,o=p.a,n=o.$ti,m=n.i("F<1,z<@>>"),l=t.G
m=A.an(new A.F(new A.P(o,new A.cg(),n.i("P<1>")),new A.ch(),m),new A.ci(),m.i("p.E"),l)
s=A.cx(m,!0,A.bc(m).i("p.E"))
m=p.b
n=m.$ti
o=n.i("F<1,w<@>>")
o=A.an(new A.F(new A.P(m,new A.cj(),n.i("P<1>")),new A.ck(),o),new A.cl(),o.i("p.E"),l)
r=A.cx(o,!0,A.bc(o).i("p.E"))
o=p.d
n=o.$ti
m=n.i("F<1,x>")
m=A.an(new A.F(new A.P(o,new A.cm(),n.i("P<1>")),new A.cn(),m),new A.co(p),m.i("p.E"),l)
q=A.cx(m,!0,A.bc(m).i("p.E"))
l=A.cx(s,!0,l)
B.c.ap(l,r)
B.c.ap(l,q)
return A.cw(["nodes",l],t.N,t.z)}}
A.cp.prototype={
$2(a,b){return this.aF(a,b)},
aF(a,b){var s=0,r=A.hE(t.n),q,p=this
var $async$$2=A.hR(function(c,d){if(c===1)return A.he(d,r)
while(true)switch(s){case 0:A.bf(B.p.b7(p.a.aZ()),"result",t.N)
q=new A.a_()
s=1
break
case 1:return A.hf(q,r)}})
return A.hg($async$$2,r)},
$S:19}
A.cq.prototype={
$1(a){return J.c8(a.a.deref(),this.a)},
$S:8}
A.cg.prototype={
$1(a){return a.a.deref()!=null},
$S:20}
A.ch.prototype={
$1(a){var s=a.a.deref()
s.toString
return s},
$S:21}
A.ci.prototype={
$1(a){var s=a.gC(),r=a.gau(),q=a.h(0),p=A.e2(a)
return A.cw(["id",s,"label",r,"value",q,"targets",A.an(p,new A.cf(),p.$ti.i("p.E"),t.S).F(0,","),"type","signal"],t.N,t.X)},
$S:22}
A.cf.prototype={
$1(a){return a.gC()},
$S:9}
A.cj.prototype={
$1(a){return a.a.deref()!=null},
$S:23}
A.ck.prototype={
$1(a){var s=a.a.deref()
s.toString
return s},
$S:24}
A.cl.prototype={
$1(a){var s,r=J.L(a.gu()),q=A.e0(a),p=t.S
q=A.an(q,new A.cd(),q.$ti.i("p.E"),p).F(0,",")
s=A.e2(a)
return A.cw(["id",a.e,"label",a.ay,"value",r,"sources",q,"targets",A.an(s,new A.ce(),s.$ti.i("p.E"),p).F(0,","),"type","computed"],t.N,t.X)},
$S:25}
A.cd.prototype={
$1(a){return a.gC()},
$S:10}
A.ce.prototype={
$1(a){return a.gC()},
$S:9}
A.cm.prototype={
$1(a){return a.a.deref()!=null},
$S:8}
A.cn.prototype={
$1(a){var s=a.a.deref()
s.toString
return s},
$S:26}
A.co.prototype={
$1(a){var s,r=a.b,q=this.a.c.k(0,r)
if(q==null)q=0
s=A.e0(a)
return A.cw(["id",r,"label",a.w,"value",""+q,"sources",A.an(s,new A.cc(),s.$ti.i("p.E"),t.S).F(0,","),"type","effect"],t.N,t.X)},
$S:27}
A.cc.prototype={
$1(a){return a.gC()},
$S:10}
A.al.prototype={
M(){this.aa()
var s=this.a
s===$&&A.r()
s.innerText="Hello World!"}}
A.aq.prototype={
gbw(){var s,r,q,p=this,o=p.c
if(o===$){s=$.du
r=$.bi+1
$.bi=r
q=new A.w(null,A.aM(t.M),!1,!1,new A.cO(p),r,s-1,t.U)
s=$.az()
if(s!=null)s.bf(q)
p.c!==$&&A.ij()
p.c=q
o=q}return o},
M(){var s,r,q=this
q.aa()
s=q.a
s===$&&A.r()
if(s.shadowRoot!=null){s=s.shadowRoot
s.toString}s.addEventListener("click",A.dm(new A.cM(q)))
r=$.bi+1
$.bi=r
q.cy$.push(new A.x(A.aM(t.M),null,new A.cN(q,s),r).$0())},
bx(){return this.gbw().$0()}}
A.cO.prototype={
$0(){return"<button>"+this.a.b.h(0)+"</button>"},
$S:28}
A.cM.prototype={
$1(a){var s=this.a.b
s.aG(s.gu()+1)},
$S:3}
A.cN.prototype={
$0(){this.b.innerHTML=this.a.bx()},
$S:2}
A.c4.prototype={
a1(){var s,r,q
this.aP()
for(s=this.cy$,r=s.length,q=0;q<s.length;s.length===r||(0,A.f_)(s),++q)s[q].$0()}};(function aliases(){var s=J.Z.prototype
s.aN=s.h
s=A.ac.prototype
s.aa=s.M
s.aP=s.a1
s=A.a8.prototype
s.aJ=s.sa3
s.aK=s.B
s=A.aB.prototype
s.aM=s.N
s.aL=s.$0
s=A.a0.prototype
s.aO=s.B})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_0u
s(A,"hS","fN",4)
s(A,"hT","fO",4)
s(A,"hU","fP",4)
r(A,"eK","hL",0)
s(A,"hW","hk",5)
q(A.x.prototype,"gb5","N",0)
r(A,"i0","fp",29)
r(A,"io","fL",30)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.mixinHard,q=hunkHelpers.inherit,p=hunkHelpers.inheritMany
q(A.d,null)
p(A.d,[A.dG,J.bu,J.bj,A.h,A.bz,A.p,A.bA,A.bV,A.aE,A.cE,A.cA,A.aD,A.b7,A.W,A.aN,A.cv,A.G,A.c_,A.dg,A.de,A.bW,A.c2,A.a7,A.ar,A.v,A.bX,A.c0,A.dj,A.ap,A.da,A.at,A.l,A.bo,A.bq,A.d8,A.R,A.aW,A.cT,A.q,A.c1,A.aX,A.a_,A.cG,A.ac,A.ca,A.H,A.aB,A.cz,A.aU,A.cb])
p(J.bu,[J.bv,J.aG,J.aJ,J.aI,J.aK,J.aH,J.am])
p(J.aJ,[J.Z,J.u,A.bB,A.aQ])
p(J.Z,[J.bL,J.aY,J.X])
q(J.cs,J.u)
p(J.aH,[J.aF,J.bw])
p(A.h,[A.aa,A.N,A.bx,A.bU,A.bY,A.bN,A.bZ,A.aL,A.bk,A.M,A.aZ,A.bT,A.bQ,A.bp,A.bO])
p(A.p,[A.F,A.P,A.a3])
q(A.aC,A.F)
q(A.aS,A.N)
p(A.W,[A.bm,A.bn,A.bS,A.dv,A.dx,A.cQ,A.cP,A.dk,A.cY,A.d4,A.cK,A.cH,A.cI,A.cJ,A.cq,A.cg,A.ch,A.ci,A.cf,A.cj,A.ck,A.cl,A.cd,A.ce,A.cm,A.cn,A.co,A.cc,A.cM])
p(A.bS,[A.bR,A.ak])
q(A.Y,A.aN)
p(A.bn,[A.dw,A.dl,A.dp,A.cZ,A.d5,A.dc,A.cy,A.d9,A.cD,A.cp])
p(A.aQ,[A.bC,A.ao])
p(A.ao,[A.b1,A.b3])
q(A.b2,A.b1)
q(A.aO,A.b2)
q(A.b4,A.b3)
q(A.aP,A.b4)
p(A.aO,[A.bD,A.bE])
p(A.aP,[A.bF,A.bG,A.bH,A.bI,A.bJ,A.aR,A.bK])
q(A.b8,A.bZ)
p(A.bm,[A.cR,A.cS,A.df,A.cU,A.d0,A.d_,A.cX,A.cW,A.cV,A.d3,A.d2,A.d1,A.dn,A.dd,A.cr,A.cO,A.cN])
q(A.db,A.dj)
q(A.b5,A.ap)
q(A.b0,A.b5)
q(A.by,A.aL)
q(A.ct,A.bo)
q(A.cu,A.bq)
q(A.d7,A.d8)
p(A.M,[A.aT,A.bt])
p(A.H,[A.a8,A.a0])
q(A.b_,A.a8)
q(A.w,A.b_)
q(A.x,A.aB)
q(A.b6,A.a0)
q(A.aV,A.b6)
q(A.bP,A.bO)
p(A.ac,[A.al,A.c4])
q(A.aq,A.c4)
s(A.b1,A.l)
s(A.b2,A.aE)
s(A.b3,A.l)
s(A.b4,A.aE)
s(A.b_,A.aU)
s(A.b6,A.aU)
r(A.c4,A.ca)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{b:"int",o:"double",ib:"num",c:"String",ae:"bool",q:"Null",k:"List",d:"Object",E:"Map"},mangledNames:{},types:["~()","q(@)","q()","q(j)","~(~())","@(@)","q(d,a1)","~(d?,d?)","ae(A<x>)","b(ab)","b(H<@>)","@(@,c)","@(c)","q(~())","~(@)","q(@,a1)","~(b,@)","j(j)","q(j,c,c,c)","I<a_>(c,E<c,c>)","ae(A<z<@>>)","z<@>(A<z<@>>)","E<c,d?>(z<@>)","ae(A<w<@>>)","w<@>(A<w<@>>)","E<c,d?>(w<@>)","x(A<x>)","E<c,d?>(x)","c()","al()","aq()"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.h6(v.typeUniverse,JSON.parse('{"bL":"Z","aY":"Z","X":"Z","bv":{"e":[]},"aG":{"q":[],"e":[]},"aJ":{"j":[]},"Z":{"j":[]},"u":{"k":["1"],"f":["1"],"j":[]},"cs":{"u":["1"],"k":["1"],"f":["1"],"j":[]},"aH":{"o":[]},"aF":{"o":[],"b":[],"e":[]},"bw":{"o":[],"e":[]},"am":{"c":[],"e":[]},"aa":{"h":[]},"F":{"p":["2"],"p.E":"2"},"aC":{"F":["1","2"],"f":["2"],"p":["2"],"p.E":"2"},"P":{"p":["1"],"p.E":"1"},"aS":{"N":[],"h":[]},"bx":{"h":[]},"bU":{"h":[]},"b7":{"a1":[]},"W":{"a9":[]},"bm":{"a9":[]},"bn":{"a9":[]},"bS":{"a9":[]},"bR":{"a9":[]},"ak":{"a9":[]},"bY":{"h":[]},"bN":{"h":[]},"Y":{"aN":["1","2"],"E":["1","2"]},"bB":{"j":[],"e":[]},"aQ":{"j":[]},"bC":{"j":[],"e":[]},"ao":{"D":["1"],"j":[]},"aO":{"l":["o"],"k":["o"],"D":["o"],"f":["o"],"j":[]},"aP":{"l":["b"],"k":["b"],"D":["b"],"f":["b"],"j":[]},"bD":{"l":["o"],"k":["o"],"D":["o"],"f":["o"],"j":[],"e":[],"l.E":"o"},"bE":{"l":["o"],"k":["o"],"D":["o"],"f":["o"],"j":[],"e":[],"l.E":"o"},"bF":{"l":["b"],"k":["b"],"D":["b"],"f":["b"],"j":[],"e":[],"l.E":"b"},"bG":{"l":["b"],"k":["b"],"D":["b"],"f":["b"],"j":[],"e":[],"l.E":"b"},"bH":{"l":["b"],"k":["b"],"D":["b"],"f":["b"],"j":[],"e":[],"l.E":"b"},"bI":{"l":["b"],"k":["b"],"D":["b"],"f":["b"],"j":[],"e":[],"l.E":"b"},"bJ":{"l":["b"],"k":["b"],"D":["b"],"f":["b"],"j":[],"e":[],"l.E":"b"},"aR":{"l":["b"],"k":["b"],"D":["b"],"f":["b"],"j":[],"e":[],"l.E":"b"},"bK":{"l":["b"],"k":["b"],"D":["b"],"f":["b"],"j":[],"e":[],"l.E":"b"},"bZ":{"h":[]},"b8":{"N":[],"h":[]},"a3":{"p":["1"],"p.E":"1"},"a7":{"h":[]},"v":{"I":["1"]},"b0":{"ap":["1"],"f":["1"]},"aN":{"E":["1","2"]},"ap":{"f":["1"]},"b5":{"ap":["1"],"f":["1"]},"aL":{"h":[]},"by":{"h":[]},"R":{"A":["1"]},"bk":{"h":[]},"N":{"h":[]},"M":{"h":[]},"aT":{"h":[]},"bt":{"h":[]},"aZ":{"h":[]},"bT":{"h":[]},"bQ":{"h":[]},"bp":{"h":[]},"aW":{"h":[]},"c1":{"a1":[]},"a8":{"H":["1"],"ab":[]},"aB":{"ab":[]},"a0":{"H":["1"]},"w":{"z":["1"],"H":["1"],"ab":[]},"x":{"ab":[]},"z":{"H":["1"]},"aV":{"z":["1"],"H":["1"]},"bO":{"h":[]},"bP":{"h":[]},"al":{"ac":[]},"aq":{"ac":[]},"ft":{"k":["b"],"f":["b"]},"fJ":{"k":["b"],"f":["b"]},"fI":{"k":["b"],"f":["b"]},"fr":{"k":["b"],"f":["b"]},"fG":{"k":["b"],"f":["b"]},"fs":{"k":["b"],"f":["b"]},"fH":{"k":["b"],"f":["b"]},"fn":{"k":["o"],"f":["o"]},"fo":{"k":["o"],"f":["o"]}}'))
A.h5(v.typeUniverse,JSON.parse('{"bV":1,"aE":1,"ao":1,"c2":1,"c0":1,"b5":1,"bo":2,"bq":2,"a8":1,"a0":1,"z":1,"aU":1,"b_":1,"b6":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.ay
return{U:s("w<c>"),W:s("f<@>"),Q:s("h"),Z:s("a9"),h:s("I<a_>"),F:s("I<a_>(c,E<c,c>)"),s:s("u<c>"),b:s("u<@>"),u:s("u<~()>"),T:s("aG"),g:s("X"),p:s("D<@>"),j:s("k<@>"),f:s("E<c,c>"),G:s("E<c,d?>"),P:s("q"),K:s("d"),L:s("is"),n:s("a_"),l:s("a1"),N:s("c"),R:s("e"),c:s("N"),o:s("aY"),d:s("v<@>"),Y:s("a3<ab>"),a:s("a3<H<@>>"),V:s("R<w<@>>"),B:s("R<x>"),O:s("R<z<@>>"),y:s("ae"),i:s("o"),z:s("@"),v:s("@(d)"),C:s("@(d,a1)"),S:s("b"),A:s("0&*"),_:s("d*"),e:s("I<q>?"),X:s("d?"),H:s("ib"),q:s("~"),M:s("~()")}})();(function constants(){B.r=J.bu.prototype
B.c=J.u.prototype
B.d=J.aF.prototype
B.t=J.aH.prototype
B.b=J.am.prototype
B.u=J.X.prototype
B.v=J.aJ.prototype
B.i=J.bL.prototype
B.e=J.aY.prototype
B.f=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.j=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.o=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.k=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.n=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.m=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.l=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.h=function(hooks) { return hooks; }

B.p=new A.ct()
B.a=new A.db()
B.q=new A.c1()
B.w=new A.cu(null)
B.x=A.J("ip")
B.y=A.J("iq")
B.z=A.J("fn")
B.A=A.J("fo")
B.B=A.J("fr")
B.C=A.J("fs")
B.D=A.J("ft")
B.E=A.J("fG")
B.F=A.J("fH")
B.G=A.J("fI")
B.H=A.J("fJ")})();(function staticFields(){$.d6=null
$.ah=A.T([],A.ay("u<d>"))
$.ed=null
$.e7=null
$.e6=null
$.eS=null
$.eJ=null
$.eY=null
$.dt=null
$.dy=null
$.dZ=null
$.au=null
$.bd=null
$.be=null
$.dT=!1
$.n=B.a
$.ez=A.dI(t.N,t.F)
$.cL=A.dI(A.ay("j"),A.ay("ac"))
$.dr=null
$.U=0
$.dq=0
$.y=null
$.du=0
$.bi=0})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"ir","dB",()=>A.hZ("_$dart_dartClosure"))
s($,"iv","f1",()=>A.O(A.cF({
toString:function(){return"$receiver$"}})))
s($,"iw","f2",()=>A.O(A.cF({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"ix","f3",()=>A.O(A.cF(null)))
s($,"iy","f4",()=>A.O(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"iB","f7",()=>A.O(A.cF(void 0)))
s($,"iC","f8",()=>A.O(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"iA","f6",()=>A.O(A.ei(null)))
s($,"iz","f5",()=>A.O(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"iE","fa",()=>A.O(A.ei(void 0)))
s($,"iD","f9",()=>A.O(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"iG","e3",()=>A.fM())
s($,"iH","dC",()=>A.ha())
s($,"iX","fc",()=>Symbol("jsBoxedDartObjectProperty"))
s($,"iF","fb",()=>new A.cG())
r($,"it","az",()=>{var q=t.S
return new A.cb(A.aM(A.ay("A<z<@>>")),A.aM(A.ay("A<w<@>>")),A.dI(q,q),A.aM(A.ay("A<x>")))})})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.bB,ArrayBufferView:A.aQ,DataView:A.bC,Float32Array:A.bD,Float64Array:A.bE,Int16Array:A.bF,Int32Array:A.bG,Int8Array:A.bH,Uint16Array:A.bI,Uint32Array:A.bJ,Uint8ClampedArray:A.aR,CanvasPixelArray:A.aR,Uint8Array:A.bK})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ao.$nativeSuperclassTag="ArrayBufferView"
A.b1.$nativeSuperclassTag="ArrayBufferView"
A.b2.$nativeSuperclassTag="ArrayBufferView"
A.aO.$nativeSuperclassTag="ArrayBufferView"
A.b3.$nativeSuperclassTag="ArrayBufferView"
A.b4.$nativeSuperclassTag="ArrayBufferView"
A.aP.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$0=function(){return this()}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.i9
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.dart2js.js.map
