var In=Object.create;var D=Object.defineProperty,Pn=Object.defineProperties,Tn=Object.getOwnPropertyDescriptor,An=Object.getOwnPropertyDescriptors,Cn=Object.getOwnPropertyNames,Te=Object.getOwnPropertySymbols,Gn=Object.getPrototypeOf,Ce=Object.prototype.hasOwnProperty,Bn=Object.prototype.propertyIsEnumerable;var Ae=(e,t,n)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))Ce.call(t,n)&&Ae(e,n,t[n]);if(Te)for(var n of Te(t))Bn.call(t,n)&&Ae(e,n,t[n]);return e},w=(e,t)=>Pn(e,An(t)),Ge=e=>D(e,"__esModule",{value:!0});var l=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),On=(e,t)=>{for(var n in t)D(e,n,{get:t[n],enumerable:!0})},Be=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Cn(t))!Ce.call(e,s)&&(n||s!=="default")&&D(e,s,{get:()=>t[s],enumerable:!(r=Tn(t,s))||r.enumerable});return e},Oe=(e,t)=>Be(Ge(D(e!=null?In(Gn(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),Rn=(e=>(t,n)=>e&&e.get(t)||(n=Be(Ge({}),t,1),e&&e.set(t,n),n))(typeof WeakMap!="undefined"?new WeakMap:0);var Le=l((Bs,De)=>{De.exports=Ne;Ne.sync=Nn;var Re=require("fs");function qn(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var r=0;r<n.length;r++){var s=n[r].toLowerCase();if(s&&e.substr(-s.length).toLowerCase()===s)return!0}return!1}function qe(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:qn(t,n)}function Ne(e,t,n){Re.stat(e,function(r,s){n(r,r?!1:qe(s,e,t))})}function Nn(e,t){return qe(Re.statSync(e),e,t)}});var je=l((Os,$e)=>{$e.exports=_e;_e.sync=Dn;var ke=require("fs");function _e(e,t,n){ke.stat(e,function(r,s){n(r,r?!1:Me(s,t))})}function Dn(e,t){return Me(ke.statSync(e),t)}function Me(e,t){return e.isFile()&&Ln(e,t)}function Ln(e,t){var n=e.mode,r=e.uid,s=e.gid,o=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),c=parseInt("100",8),a=parseInt("010",8),u=parseInt("001",8),f=c|a,p=n&u||n&a&&s===i||n&c&&r===o||n&f&&o===0;return p}});var Ue=l((qs,Fe)=>{var Rs=require("fs"),H;process.platform==="win32"||global.TESTING_WINDOWS?H=Le():H=je();Fe.exports=ne;ne.sync=kn;function ne(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(r,s){ne(e,t||{},function(o,i){o?s(o):r(i)})})}H(e,t||{},function(r,s){r&&(r.code==="EACCES"||t&&t.ignoreErrors)&&(r=null,s=!1),n(r,s)})}function kn(e,t){try{return H.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var Ye=l((Ns,Ve)=>{var A=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",He=require("path"),_n=A?";":":",Xe=Ue(),ze=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),Ke=(e,t)=>{let n=t.colon||_n,r=e.match(/\//)||A&&e.match(/\\/)?[""]:[...A?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],s=A?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",o=A?s.split(n):[""];return A&&e.indexOf(".")!==-1&&o[0]!==""&&o.unshift(""),{pathEnv:r,pathExt:o,pathExtExe:s}},We=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:r,pathExt:s,pathExtExe:o}=Ke(e,t),i=[],c=u=>new Promise((f,p)=>{if(u===r.length)return t.all&&i.length?f(i):p(ze(e));let d=r[u],g=/^".*"$/.test(d)?d.slice(1,-1):d,x=He.join(g,e),S=!g&&/^\.[\\\/]/.test(e)?e.slice(0,2)+x:x;f(a(S,u,0))}),a=(u,f,p)=>new Promise((d,g)=>{if(p===s.length)return d(c(f+1));let x=s[p];Xe(u+x,{pathExt:o},(S,T)=>{if(!S&&T)if(t.all)i.push(u+x);else return d(u+x);return d(a(u,f,p+1))})});return n?c(0).then(u=>n(null,u),n):c(0)},Mn=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:r,pathExtExe:s}=Ke(e,t),o=[];for(let i=0;i<n.length;i++){let c=n[i],a=/^".*"$/.test(c)?c.slice(1,-1):c,u=He.join(a,e),f=!a&&/^\.[\\\/]/.test(e)?e.slice(0,2)+u:u;for(let p=0;p<r.length;p++){let d=f+r[p];try{if(Xe.sync(d,{pathExt:s}))if(t.all)o.push(d);else return d}catch{}}}if(t.all&&o.length)return o;if(t.nothrow)return null;throw ze(e)};Ve.exports=We;We.sync=Mn});var se=l((Ds,re)=>{"use strict";var Qe=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"};re.exports=Qe;re.exports.default=Qe});var tt=l((Ls,et)=>{"use strict";var Ze=require("path"),$n=Ye(),jn=se();function Je(e,t){let n=e.options.env||process.env,r=process.cwd(),s=e.options.cwd!=null,o=s&&process.chdir!==void 0&&!process.chdir.disabled;if(o)try{process.chdir(e.options.cwd)}catch{}let i;try{i=$n.sync(e.command,{path:n[jn({env:n})],pathExt:t?Ze.delimiter:void 0})}catch{}finally{o&&process.chdir(r)}return i&&(i=Ze.resolve(s?e.options.cwd:"",i)),i}function Fn(e){return Je(e)||Je(e,!0)}et.exports=Fn});var nt=l((ks,ie)=>{"use strict";var oe=/([()\][%!^"`<>&|;, *?])/g;function Un(e){return e=e.replace(oe,"^$1"),e}function Hn(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(oe,"^$1"),t&&(e=e.replace(oe,"^$1")),e}ie.exports.command=Un;ie.exports.argument=Hn});var st=l((_s,rt)=>{"use strict";rt.exports=/^#!(.*)/});var it=l((Ms,ot)=>{"use strict";var Xn=st();ot.exports=(e="")=>{let t=e.match(Xn);if(!t)return null;let[n,r]=t[0].replace(/#! ?/,"").split(" "),s=n.split("/").pop();return s==="env"?r:r?`${s} ${r}`:s}});var at=l(($s,ct)=>{"use strict";var ce=require("fs"),zn=it();function Kn(e){let n=Buffer.alloc(150),r;try{r=ce.openSync(e,"r"),ce.readSync(r,n,0,150,0),ce.closeSync(r)}catch{}return zn(n.toString())}ct.exports=Kn});var ft=l((js,dt)=>{"use strict";var Wn=require("path"),ut=tt(),lt=nt(),Vn=at(),Yn=process.platform==="win32",Qn=/\.(?:com|exe)$/i,Zn=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function Jn(e){e.file=ut(e);let t=e.file&&Vn(e.file);return t?(e.args.unshift(e.file),e.command=t,ut(e)):e.file}function er(e){if(!Yn)return e;let t=Jn(e),n=!Qn.test(t);if(e.options.forceShell||n){let r=Zn.test(t);e.command=Wn.normalize(e.command),e.command=lt.command(e.command),e.args=e.args.map(o=>lt.argument(o,r));let s=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${s}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function tr(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let r={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?r:er(r)}dt.exports=tr});var ht=l((Fs,mt)=>{"use strict";var ae=process.platform==="win32";function ue(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function nr(e,t){if(!ae)return;let n=e.emit;e.emit=function(r,s){if(r==="exit"){let o=pt(s,t,"spawn");if(o)return n.call(e,"error",o)}return n.apply(e,arguments)}}function pt(e,t){return ae&&e===1&&!t.file?ue(t.original,"spawn"):null}function rr(e,t){return ae&&e===1&&!t.file?ue(t.original,"spawnSync"):null}mt.exports={hookChildProcess:nr,verifyENOENT:pt,verifyENOENTSync:rr,notFoundError:ue}});var St=l((Us,C)=>{"use strict";var gt=require("child_process"),le=ft(),de=ht();function yt(e,t,n){let r=le(e,t,n),s=gt.spawn(r.command,r.args,r.options);return de.hookChildProcess(s,r),s}function sr(e,t,n){let r=le(e,t,n),s=gt.spawnSync(r.command,r.args,r.options);return s.error=s.error||de.verifyENOENTSync(s.status,r),s}C.exports=yt;C.exports.spawn=yt;C.exports.sync=sr;C.exports._parse=le;C.exports._enoent=de});var xt=l((Hs,vt)=>{"use strict";vt.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e}});var Et=l((Xs,k)=>{"use strict";var L=require("path"),bt=se(),wt=e=>{e=y({cwd:process.cwd(),path:process.env[bt()],execPath:process.execPath},e);let t,n=L.resolve(e.cwd),r=[];for(;t!==n;)r.push(L.join(n,"node_modules/.bin")),t=n,n=L.resolve(n,"..");let s=L.resolve(e.cwd,e.execPath,"..");return r.push(s),r.concat(e.path).join(L.delimiter)};k.exports=wt;k.exports.default=wt;k.exports.env=e=>{e=y({env:process.env},e);let t=y({},e.env),n=bt({env:t});return e.path=t[n],t[n]=k.exports(e),t}});var Pt=l((zs,fe)=>{"use strict";var It=(e,t)=>{for(let n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};fe.exports=It;fe.exports.default=It});var At=l((Ks,z)=>{"use strict";var or=Pt(),X=new WeakMap,Tt=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,r=0,s=e.displayName||e.name||"<anonymous>",o=function(...i){if(X.set(o,++r),r===1)n=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${s}\` can only be called once`);return n};return or(o,e),X.set(o,r),o};z.exports=Tt;z.exports.default=Tt;z.exports.callCount=e=>{if(!X.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return X.get(e)}});var Ct=l(K=>{"use strict";Object.defineProperty(K,"__esModule",{value:!0});K.SIGNALS=void 0;var ir=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];K.SIGNALS=ir});var pe=l(G=>{"use strict";Object.defineProperty(G,"__esModule",{value:!0});G.SIGRTMAX=G.getRealtimeSignals=void 0;var cr=function(){let e=Bt-Gt+1;return Array.from({length:e},ar)};G.getRealtimeSignals=cr;var ar=function(e,t){return{name:`SIGRT${t+1}`,number:Gt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},Gt=34,Bt=64;G.SIGRTMAX=Bt});var Ot=l(W=>{"use strict";Object.defineProperty(W,"__esModule",{value:!0});W.getSignals=void 0;var ur=require("os"),lr=Ct(),dr=pe(),fr=function(){let e=(0,dr.getRealtimeSignals)();return[...lr.SIGNALS,...e].map(pr)};W.getSignals=fr;var pr=function({name:e,number:t,description:n,action:r,forced:s=!1,standard:o}){let{signals:{[e]:i}}=ur.constants,c=i!==void 0;return{name:e,number:c?i:t,description:n,supported:c,action:r,forced:s,standard:o}}});var qt=l(B=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0});B.signalsByNumber=B.signalsByName=void 0;var mr=require("os"),Rt=Ot(),hr=pe(),gr=function(){return(0,Rt.getSignals)().reduce(yr,{})},yr=function(e,{name:t,number:n,description:r,supported:s,action:o,forced:i,standard:c}){return w(y({},e),{[t]:{name:t,number:n,description:r,supported:s,action:o,forced:i,standard:c}})},Sr=gr();B.signalsByName=Sr;var vr=function(){let e=(0,Rt.getSignals)(),t=hr.SIGRTMAX+1,n=Array.from({length:t},(r,s)=>xr(s,e));return Object.assign({},...n)},xr=function(e,t){let n=br(e,t);if(n===void 0)return{};let{name:r,description:s,supported:o,action:i,forced:c,standard:a}=n;return{[e]:{name:r,number:e,description:s,supported:o,action:i,forced:c,standard:a}}},br=function(e,t){let n=t.find(({name:r})=>mr.constants.signals[r]===e);return n!==void 0?n:t.find(r=>r.number===e)},wr=vr();B.signalsByNumber=wr});var Dt=l((Zs,Nt)=>{"use strict";var{signalsByName:Er}=qt(),Ir=({timedOut:e,timeout:t,errorCode:n,signal:r,signalDescription:s,exitCode:o,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":n!==void 0?`failed with ${n}`:r!==void 0?`was killed with ${r} (${s})`:o!==void 0?`failed with exit code ${o}`:"failed",Pr=({stdout:e,stderr:t,all:n,error:r,signal:s,exitCode:o,command:i,escapedCommand:c,timedOut:a,isCanceled:u,killed:f,parsed:{options:{timeout:p}}})=>{o=o===null?void 0:o,s=s===null?void 0:s;let d=s===void 0?void 0:Er[s].description,g=r&&r.code,S=`Command ${Ir({timedOut:a,timeout:p,errorCode:g,signal:s,signalDescription:d,exitCode:o,isCanceled:u})}: ${i}`,T=Object.prototype.toString.call(r)==="[object Error]",F=T?`${S}
${r.message}`:S,U=[F,t,e].filter(Boolean).join(`
`);return T?(r.originalMessage=r.message,r.message=U):r=new Error(U),r.shortMessage=F,r.command=i,r.escapedCommand=c,r.exitCode=o,r.signal=s,r.signalDescription=d,r.stdout=e,r.stderr=t,n!==void 0&&(r.all=n),"bufferedData"in r&&delete r.bufferedData,r.failed=!0,r.timedOut=Boolean(a),r.isCanceled=u,r.killed=f&&!a,r};Nt.exports=Pr});var kt=l((Js,me)=>{"use strict";var V=["stdin","stdout","stderr"],Tr=e=>V.some(t=>e[t]!==void 0),Lt=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return V.map(r=>e[r]);if(Tr(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${V.map(r=>`\`${r}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,V.length);return Array.from({length:n},(r,s)=>t[s])};me.exports=Lt;me.exports.node=e=>{let t=Lt(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var _t=l((eo,Y)=>{Y.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&Y.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&Y.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var Ut=l((to,q)=>{var m=global.process,I=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};I(m)?(Mt=require("assert"),O=_t(),$t=/^win/i.test(m.platform),_=require("events"),typeof _!="function"&&(_=_.EventEmitter),m.__signal_exit_emitter__?v=m.__signal_exit_emitter__:(v=m.__signal_exit_emitter__=new _,v.count=0,v.emitted={}),v.infinite||(v.setMaxListeners(1/0),v.infinite=!0),q.exports=function(e,t){if(!I(global.process))return function(){};Mt.equal(typeof e,"function","a callback must be provided for exit handler"),R===!1&&he();var n="exit";t&&t.alwaysLast&&(n="afterexit");var r=function(){v.removeListener(n,e),v.listeners("exit").length===0&&v.listeners("afterexit").length===0&&Q()};return v.on(n,e),r},Q=function(){!R||!I(global.process)||(R=!1,O.forEach(function(t){try{m.removeListener(t,Z[t])}catch{}}),m.emit=J,m.reallyExit=ge,v.count-=1)},q.exports.unload=Q,P=function(t,n,r){v.emitted[t]||(v.emitted[t]=!0,v.emit(t,n,r))},Z={},O.forEach(function(e){Z[e]=function(){if(!!I(global.process)){var n=m.listeners(e);n.length===v.count&&(Q(),P("exit",null,e),P("afterexit",null,e),$t&&e==="SIGHUP"&&(e="SIGINT"),m.kill(m.pid,e))}}}),q.exports.signals=function(){return O},R=!1,he=function(){R||!I(global.process)||(R=!0,v.count+=1,O=O.filter(function(t){try{return m.on(t,Z[t]),!0}catch{return!1}}),m.emit=Ft,m.reallyExit=jt)},q.exports.load=he,ge=m.reallyExit,jt=function(t){!I(global.process)||(m.exitCode=t||0,P("exit",m.exitCode,null),P("afterexit",m.exitCode,null),ge.call(m,m.exitCode))},J=m.emit,Ft=function(t,n){if(t==="exit"&&I(global.process)){n!==void 0&&(m.exitCode=n);var r=J.apply(this,arguments);return P("exit",m.exitCode,null),P("afterexit",m.exitCode,null),r}else return J.apply(this,arguments)}):q.exports=function(){return function(){}};var Mt,O,$t,_,v,Q,P,Z,R,he,ge,jt,J,Ft});var Xt=l((no,Ht)=>{"use strict";var Ar=require("os"),Cr=Ut(),Gr=1e3*5,Br=(e,t="SIGTERM",n={})=>{let r=e(t);return Or(e,t,n,r),r},Or=(e,t,n,r)=>{if(!Rr(t,n,r))return;let s=Nr(n),o=setTimeout(()=>{e("SIGKILL")},s);o.unref&&o.unref()},Rr=(e,{forceKillAfterTimeout:t},n)=>qr(e)&&t!==!1&&n,qr=e=>e===Ar.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Nr=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Gr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Dr=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Lr=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},kr=(e,{timeout:t,killSignal:n="SIGTERM"},r)=>{if(t===0||t===void 0)return r;let s,o=new Promise((c,a)=>{s=setTimeout(()=>{Lr(e,n,a)},t)}),i=r.finally(()=>{clearTimeout(s)});return Promise.race([o,i])},_r=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Mr=async(e,{cleanup:t,detached:n},r)=>{if(!t||n)return r;let s=Cr(()=>{e.kill()});return r.finally(()=>{s()})};Ht.exports={spawnedKill:Br,spawnedCancel:Dr,setupTimeout:kr,validateTimeout:_r,setExitHandler:Mr}});var Kt=l((ro,zt)=>{"use strict";var b=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";b.writable=e=>b(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";b.readable=e=>b(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";b.duplex=e=>b.writable(e)&&b.readable(e);b.transform=e=>b.duplex(e)&&typeof e._transform=="function";zt.exports=b});var Vt=l((so,Wt)=>{"use strict";var{PassThrough:$r}=require("stream");Wt.exports=e=>{e=y({},e);let{array:t}=e,{encoding:n}=e,r=n==="buffer",s=!1;t?s=!(n||r):n=n||"utf8",r&&(n=null);let o=new $r({objectMode:s});n&&o.setEncoding(n);let i=0,c=[];return o.on("data",a=>{c.push(a),s?i=c.length:i+=a.length}),o.getBufferedValue=()=>t?c:r?Buffer.concat(c,i):c.join(""),o.getBufferedLength=()=>i,o}});var Yt=l((oo,M)=>{"use strict";var{constants:jr}=require("buffer"),Fr=require("stream"),{promisify:Ur}=require("util"),Hr=Vt(),Xr=Ur(Fr.pipeline),ye=class extends Error{constructor(){super("maxBuffer exceeded");this.name="MaxBufferError"}};async function Se(e,t){if(!e)throw new Error("Expected a stream");t=y({maxBuffer:1/0},t);let{maxBuffer:n}=t,r=Hr(t);return await new Promise((s,o)=>{let i=c=>{c&&r.getBufferedLength()<=jr.MAX_LENGTH&&(c.bufferedData=r.getBufferedValue()),o(c)};(async()=>{try{await Xr(e,r),s()}catch(c){i(c)}})(),r.on("data",()=>{r.getBufferedLength()>n&&i(new ye)})}),r.getBufferedValue()}M.exports=Se;M.exports.buffer=(e,t)=>Se(e,w(y({},t),{encoding:"buffer"}));M.exports.array=(e,t)=>Se(e,w(y({},t),{array:!0}));M.exports.MaxBufferError=ye});var Zt=l((io,Qt)=>{"use strict";var{PassThrough:zr}=require("stream");Qt.exports=function(){var e=[],t=new zr({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=r,t.on("unpipe",s),Array.prototype.slice.call(arguments).forEach(n),t;function n(o){return Array.isArray(o)?(o.forEach(n),this):(e.push(o),o.once("end",s.bind(null,o)),o.once("error",t.emit.bind(t,"error")),o.pipe(t,{end:!1}),this)}function r(){return e.length==0}function s(o){e=e.filter(function(i){return i!==o}),!e.length&&t.readable&&t.end()}}});var nn=l((co,tn)=>{"use strict";var en=Kt(),Jt=Yt(),Kr=Zt(),Wr=(e,t)=>{t===void 0||e.stdin===void 0||(en(t)?t.pipe(e.stdin):e.stdin.end(t))},Vr=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=Kr();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},ve=async(e,t)=>{if(!!e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},xe=(e,{encoding:t,buffer:n,maxBuffer:r})=>{if(!(!e||!n))return t?Jt(e,{encoding:t,maxBuffer:r}):Jt.buffer(e,{maxBuffer:r})},Yr=async({stdout:e,stderr:t,all:n},{encoding:r,buffer:s,maxBuffer:o},i)=>{let c=xe(e,{encoding:r,buffer:s,maxBuffer:o}),a=xe(t,{encoding:r,buffer:s,maxBuffer:o}),u=xe(n,{encoding:r,buffer:s,maxBuffer:o*2});try{return await Promise.all([i,c,a,u])}catch(f){return Promise.all([{error:f,signal:f.signal,timedOut:f.timedOut},ve(e,c),ve(t,a),ve(n,u)])}},Qr=({input:e})=>{if(en(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};tn.exports={handleInput:Wr,makeAllStream:Vr,getSpawnedResult:Yr,validateInputSync:Qr}});var sn=l((ao,rn)=>{"use strict";var Zr=(async()=>{})().constructor.prototype,Jr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Zr,e)]),es=(e,t)=>{for(let[n,r]of Jr){let s=typeof t=="function"?(...o)=>Reflect.apply(r.value,t(),o):r.value.bind(t);Reflect.defineProperty(e,n,w(y({},r),{value:s}))}return e},ts=e=>new Promise((t,n)=>{e.on("exit",(r,s)=>{t({exitCode:r,signal:s})}),e.on("error",r=>{n(r)}),e.stdin&&e.stdin.on("error",r=>{n(r)})});rn.exports={mergePromise:es,getSpawnedPromise:ts}});var an=l((uo,cn)=>{"use strict";var on=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],ns=/^[\w.-]+$/,rs=/"/g,ss=e=>typeof e!="string"||ns.test(e)?e:`"${e.replace(rs,'\\"')}"`,os=(e,t)=>on(e,t).join(" "),is=(e,t)=>on(e,t).map(n=>ss(n)).join(" "),cs=/ +/g,as=e=>{let t=[];for(let n of e.trim().split(cs)){let r=t[t.length-1];r&&r.endsWith("\\")?t[t.length-1]=`${r.slice(0,-1)} ${n}`:t.push(n)}return t};cn.exports={joinCommand:os,getEscapedCommand:is,parseCommand:as}});var hn=l((lo,N)=>{"use strict";var us=require("path"),be=require("child_process"),ls=St(),ds=xt(),fs=Et(),ps=At(),ee=Dt(),ln=kt(),{spawnedKill:ms,spawnedCancel:hs,setupTimeout:gs,validateTimeout:ys,setExitHandler:Ss}=Xt(),{handleInput:vs,getSpawnedResult:xs,makeAllStream:bs,validateInputSync:ws}=nn(),{mergePromise:un,getSpawnedPromise:Es}=sn(),{joinCommand:dn,parseCommand:fn,getEscapedCommand:pn}=an(),Is=1e3*1e3*100,Ps=({env:e,extendEnv:t,preferLocal:n,localDir:r,execPath:s})=>{let o=t?y(y({},process.env),e):e;return n?fs.env({env:o,cwd:r,execPath:s}):o},mn=(e,t,n={})=>{let r=ls._parse(e,t,n);return e=r.command,t=r.args,n=r.options,n=y({maxBuffer:Is,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0},n),n.env=Ps(n),n.stdio=ln(n),process.platform==="win32"&&us.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:r}},$=(e,t,n)=>typeof t!="string"&&!Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?ds(t):t,te=(e,t,n)=>{let r=mn(e,t,n),s=dn(e,t),o=pn(e,t);ys(r.options);let i;try{i=be.spawn(r.file,r.args,r.options)}catch(g){let x=new be.ChildProcess,S=Promise.reject(ee({error:g,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1}));return un(x,S)}let c=Es(i),a=gs(i,r.options,c),u=Ss(i,r.options,a),f={isCanceled:!1};i.kill=ms.bind(null,i.kill.bind(i)),i.cancel=hs.bind(null,i,f);let d=ps(async()=>{let[{error:g,exitCode:x,signal:S,timedOut:T},F,U,En]=await xs(i,r.options,u),we=$(r.options,F),Ee=$(r.options,U),Ie=$(r.options,En);if(g||x!==0||S!==null){let Pe=ee({error:g,exitCode:x,signal:S,stdout:we,stderr:Ee,all:Ie,command:s,escapedCommand:o,parsed:r,timedOut:T,isCanceled:f.isCanceled,killed:i.killed});if(!r.options.reject)return Pe;throw Pe}return{command:s,escapedCommand:o,exitCode:0,stdout:we,stderr:Ee,all:Ie,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return vs(i,r.options.input),i.all=bs(i,r.options),un(i,d)};N.exports=te;N.exports.sync=(e,t,n)=>{let r=mn(e,t,n),s=dn(e,t),o=pn(e,t);ws(r.options);let i;try{i=be.spawnSync(r.file,r.args,r.options)}catch(u){throw ee({error:u,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1})}let c=$(r.options,i.stdout,i.error),a=$(r.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let u=ee({stdout:c,stderr:a,error:i.error,signal:i.signal,exitCode:i.status,command:s,escapedCommand:o,parsed:r,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!r.options.reject)return u;throw u}return{command:s,escapedCommand:o,exitCode:0,stdout:c,stderr:a,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};N.exports.command=(e,t)=>{let[n,...r]=fn(e);return te(n,r,t)};N.exports.commandSync=(e,t)=>{let[n,...r]=fn(e);return te.sync(n,r,t)};N.exports.node=(e,t,n={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(n=t,t=[]);let r=ln.node(n),s=process.execArgv.filter(c=>!c.startsWith("--inspect")),{nodePath:o=process.execPath,nodeOptions:i=s}=n;return te(o,[...i,e,...Array.isArray(t)?t:[]],w(y({},n),{stdin:void 0,stdout:void 0,stderr:void 0,stdio:r,shell:!1}))}});var Cs={};On(Cs,{default:()=>wn});var h=require("@raycast/api"),E=require("react");var Sn=require("@raycast/api");var gn=Oe(require("node:process"),1),yn=Oe(hn(),1);async function j(e){if(gn.default.platform!=="darwin")throw new Error("macOS only");let{stdout:t}=await(0,yn.default)("osascript",["-e",e]);return t}function Ts(e){return e==="true"}function As(e,t){return Array.from(Array(e.length).keys()).sort((n,r)=>t[n]===t[r]?e[n].localeCompare(e[r]):t[n]?-1:1)}async function vn(){let e=await j(`
    use framework "IOBluetooth"
    set deviceList to {}
    set deviceStatus to {}
    set deviceAddresses to {}
    repeat with device in (current application's IOBluetoothDevice's pairedDevices() as list)
      copy (device's nameOrAddress as string) to the end of deviceList
      copy (device's isConnected as boolean) to the end of deviceStatus
      copy (device's addressString as string) to the end of deviceAddresses
    end repeat
    return {deviceList, deviceStatus, deviceAddresses}
  `);console.log(e);let t=e.split(","),n=t.slice(0,t.length/3).map(a=>a.trim()),r=t.slice(t.length/3,t.length/3*2).map(a=>a.trim()).map(a=>Ts(a)),s=t.slice(t.length/3*2,t.length).map(a=>a.trim()),o=As(n,r);n=o.map(a=>n[a]),r=o.map(a=>r[a]),s=o.map(a=>s[a]);let i={};try{let u=(await j('do shell script "/usr/sbin/ioreg -c AppleDeviceManagementHIDEventService | grep -e BatteryPercent -e DeviceAddress"')).split("\r").filter(f=>f.match("(DeviceAddress)|(BatteryPercent)")).map(f=>{let p=/"([A-z]+)"[\s=]+(["\- A-z0-9]+)/.exec(f);return p?[p[1],p[2].replace('"',"").replace('"',"")]:["",""]});for(let f=0;f<u.length-1;f++)u[f][0]==="DeviceAddress"&&u[f+1][0]==="BatteryPercent"&&(i[u[f][1]]=u[f+1][1])}catch{}let c=s.map(a=>i[a]??"");return{deviceNames:n,deviceAddresses:s,deviceStatuses:r,deviceBatteries:c}}async function xn(e){return await j(`
    use framework "IOBluetooth"

    on getMatchingDevice(deviceName)
      repeat with device in (current application's IOBluetoothDevice's pairedDevices() as list)
        if (device's nameOrAddress as string) contains deviceName then return device
      end repeat
    end getMatchingDevice

    set device to getMatchingDevice("${e}")
    if not (device's isConnected as boolean) then
      if device's openConnection() = 0 then
        return "1"
      end if
      return "0"
    else
      if device's closeConnection() = 0 then
        return "1"
      end if
      return "0" 
    end if
  `)==="1"}async function bn(){await(0,Sn.closeMainWindow)(),await j(`
    tell application "System Preferences"
      activate
      if exists window "Bluetooth" then
        tell window "Bluetooth" to if it is miniaturized then set minitiaruzied to false
      else
        set current pane to pane "com.apple.preferences.Bluetooth"
      end if
    end tell
  `)}function wn(){let[e,t]=(0,E.useState)([]),[n,r]=(0,E.useState)([]),[s,o]=(0,E.useState)([]),[i,c]=(0,E.useState)([]),[a,u]=(0,E.useState)(!0);(0,E.useEffect)(()=>{async function p(){let{deviceNames:d,deviceAddresses:g,deviceStatuses:x,deviceBatteries:S}=await vn();t(d),r(g),o(S),c(x),u(!1)}p()},[]);let f=async(p,d)=>{let g=await(0,h.showToast)({style:h.Toast.Style.Animated,title:i[d]?"Disconnecting":"Connecting"});if(await xn(p)){let S=[...i];S[d]=!S[d],c(S),g.style=h.Toast.Style.Success,g.title=S[d]?"Connected to device!":"Disconnected from device!"}else g.style=h.Toast.Style.Failure,g.title=i[d]?"Failed to disconnect!":"Failed to connect!"};return _jsx(h.List,{enableFiltering:!0,isLoading:a,searchBarPlaceholder:"Search devices"},_jsx(h.List.Section,{title:"Devices"},e.map((p,d)=>_jsx(h.List.Item,{key:p,title:p,icon:{source:i[d]?"on.png":"off.png"},accessories:s[d]?[{text:s[d]+"%",icon:{source:"battery.png"}}]:[],actions:_jsx(h.ActionPanel,null,_jsx(h.Action,{title:i[d]?"Disconnect":"Connect",icon:h.Icon.Link,onAction:async()=>await f(p,d)}),_jsx(h.Action,{title:"Open Bluetooth Preferences",icon:h.Icon.Gear,onAction:bn}),_jsx(h.Action,{title:"Copy Address: "+n[d],icon:h.Icon.Hammer,onAction:()=>h.Clipboard.copy(n[d])}))}))))}module.exports=Rn(Cs);0&&(module.exports={});