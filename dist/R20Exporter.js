// ==UserScript==
// @name         Roll20 Campaign exporter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Export an entire Roll20 Campaign
// @author       KaKaRoTo
// @match        https://app.roll20.net/editor/
// @grant        none
// ==/UserScript==

/*! FileSaver.js
 *  A saveAs() FileSaver implementation.
 *  2014-01-24
 *
 *  By Eli Grey, http://eligrey.com
 *  License: X11/MIT
 *    See LICENSE.md
 */
;
/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
;var saveAs=saveAs||(typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob&&navigator.msSaveOrOpenBlob.bind(navigator))||(function(h){if(typeof navigator!=="undefined"&&/MSIE [1-9]\./.test(navigator.userAgent)){return}var r=h.document,l=function(){return h.URL||h.webkitURL||h},e=h.URL||h.webkitURL||h,n=r.createElementNS("http://www.w3.org/1999/xhtml","a"),g=!h.externalHost&&"download" in n,j=function(t){var s=r.createEvent("MouseEvents");s.initMouseEvent("click",true,false,h,0,0,0,0,0,false,false,false,false,0,null);t.dispatchEvent(s)},o=h.webkitRequestFileSystem,p=h.requestFileSystem||o||h.mozRequestFileSystem,m=function(s){(h.setImmediate||h.setTimeout)(function(){throw s},0)},c="application/octet-stream",k=0,b=[],i=function(){var t=b.length;while(t--){var s=b[t];if(typeof s==="string"){e.revokeObjectURL(s)}else{s.remove()}}b.length=0},q=function(t,s,w){s=[].concat(s);var v=s.length;while(v--){var x=t["on"+s[v]];if(typeof x==="function"){try{x.call(t,w||t)}catch(u){m(u)}}}},f=function(t,v){var w=this,C=t.type,F=false,y,x,s=function(){var G=l().createObjectURL(t);b.push(G);return G},B=function(){q(w,"writestart progress write writeend".split(" "))},E=function(){if(F||!y){y=s(t)}if(x){x.location.href=y}else{window.open(y,"_blank")}w.readyState=w.DONE;B()},A=function(G){return function(){if(w.readyState!==w.DONE){return G.apply(this,arguments)}}},z={create:true,exclusive:false},D;w.readyState=w.INIT;if(!v){v="download"}if(g){y=s(t);r=h.document;n=r.createElementNS("http://www.w3.org/1999/xhtml","a");n.href=y;n.download=v;var u=r.createEvent("MouseEvents");u.initMouseEvent("click",true,false,h,0,0,0,0,0,false,false,false,false,0,null);n.dispatchEvent(u);w.readyState=w.DONE;B();return}if(h.chrome&&C&&C!==c){D=t.slice||t.webkitSlice;t=D.call(t,0,t.size,c);F=true}if(o&&v!=="download"){v+=".download"}if(C===c||o){x=h}if(!p){E();return}k+=t.size;p(h.TEMPORARY,k,A(function(G){G.root.getDirectory("saved",z,A(function(H){var I=function(){H.getFile(v,z,A(function(J){J.createWriter(A(function(K){K.onwriteend=function(L){x.location.href=J.toURL();b.push(J);w.readyState=w.DONE;q(w,"writeend",L)};K.onerror=function(){var L=K.error;if(L.code!==L.ABORT_ERR){E()}};"writestart progress write abort".split(" ").forEach(function(L){K["on"+L]=w["on"+L]});K.write(t);w.abort=function(){K.abort();w.readyState=w.DONE};w.readyState=w.WRITING}),E)}),E)};H.getFile(v,{create:false},A(function(J){J.remove();I()}),A(function(J){if(J.code===J.NOT_FOUND_ERR){I()}else{E()}}))}),E)}),E)},d=f.prototype,a=function(s,t){return new f(s,t)};d.abort=function(){var s=this;s.readyState=s.DONE;q(s,"abort")};d.readyState=d.INIT=0;d.WRITING=1;d.DONE=2;d.error=d.onwritestart=d.onprogress=d.onwrite=d.onabort=d.onerror=d.onwriteend=null;h.addEventListener("unload",i,false);a.unload=function(){i();h.removeEventListener("unload",i,false)};return a}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content));if(typeof module!=="undefined"){module.exports=saveAs};(function(a){var z="File format is not recognized.";var K="CRC failed.";var A="File contains encrypted entry.";var S="File is using Zip64 (4gb+ file size).";var D="Error while reading zip file.";var n="Error while writing zip file.";var k="Error while writing file data.";var T="Error while reading file data.";var g="File already exists.";var C=512*1024;var c="text/plain";var H;try{H=new Blob([new DataView(new ArrayBuffer(0))]).size===0}catch(R){}function M(){this.crc=-1}M.prototype.append=function E(Y){var X=this.crc|0,W=this.table;for(var Z=0,e=Y.length|0;Z<e;Z++){X=(X>>>8)^W[(X^Y[Z])&255]}this.crc=X};M.prototype.get=function P(){return ~this.crc};M.prototype.table=(function(){var X,e,W,Y=[];for(X=0;X<256;X++){W=X;for(e=0;e<8;e++){if(W&1){W=(W>>>1)^3988292384}else{W=W>>>1}}Y[X]=W}return Y})();function j(){}j.prototype.append=function E(e,W){return e};j.prototype.flush=function i(){};function d(e,W,X){if(W<0||X<0||W+X>e.size){throw new RangeError("offset:"+W+", length:"+X+", size:"+e.size)}if(e.slice){return e.slice(W,W+X)}else{if(e.webkitSlice){return e.webkitSlice(W,W+X)}else{if(e.mozSlice){return e.mozSlice(W,W+X)}else{if(e.msSlice){return e.msSlice(W,W+X)}}}}}function I(X,W){var Y,e;Y=new ArrayBuffer(X);e=new Uint8Array(Y);if(W){e.set(W,0)}return{buffer:Y,array:e,view:new DataView(Y)}}function G(){}function Q(Z){var e=this,X;function Y(ac,aa){var ab=new Blob([Z],{type:c});X=new t(ab);X.init(function(){e.size=X.size;ac()},aa)}function W(ab,ac,ad,aa){X.readUint8Array(ab,ac,ad,aa)}e.size=0;e.init=Y;e.readUint8Array=W}Q.prototype=new G();Q.prototype.constructor=Q;function O(W){var X=this,e;function Z(ab){var aa=W.length;while(W.charAt(aa-1)=="="){aa--}e=W.indexOf(",")+1;X.size=Math.floor((aa-e)*0.75);ab()}function Y(af,ab,ah){var ae,ad=I(ab);var aa=Math.floor(af/3)*4;var ac=Math.ceil((af+ab)/3)*4;var ai=a.atob(W.substring(aa+e,ac+e));var ag=af-Math.floor(aa/4)*3;for(ae=ag;ae<ag+ab;ae++){ad.array[ae-ag]=ai.charCodeAt(ae)}ah(ad.array)}X.size=0;X.init=Z;X.readUint8Array=Y}O.prototype=new G();O.prototype.constructor=O;function t(e){var W=this;function Y(Z){W.size=e.size;Z()}function X(ab,ac,ae,aa){var Z=new FileReader();Z.onload=function(af){ae(new Uint8Array(af.target.result))};Z.onerror=aa;try{Z.readAsArrayBuffer(d(e,ab,ac))}catch(ad){aa(ad)}}W.size=0;W.init=Y;W.readUint8Array=X}t.prototype=new G();t.prototype.constructor=t;function h(){}h.prototype.getData=function(e){e(this.data)};function q(Y){var X=this,W;function aa(ab){W=new Blob([],{type:c});ab()}function Z(ac,ab){W=new Blob([W,H?ac:ac.buffer],{type:c});ab()}function e(ad,ac){var ab=new FileReader();ab.onload=function(ae){ad(ae.target.result)};ab.onerror=ac;ab.readAsText(W,Y)}X.init=aa;X.writeUint8Array=Z;X.getData=e}q.prototype=new h();q.prototype.constructor=q;function o(ab){var W=this,Y="",aa="";function Z(ac){Y+="data:"+(ab||"")+";base64,";ac()}function X(ag,af){var ac,ae=aa.length,ad=aa;aa="";for(ac=0;ac<(Math.floor((ae+ag.length)/3)*3)-ae;ac++){ad+=String.fromCharCode(ag[ac])}for(;ac<ag.length;ac++){aa+=String.fromCharCode(ag[ac])}if(ad.length>2){Y+=a.btoa(ad)}else{aa=ad}af()}function e(ac){ac(Y+a.btoa(aa))}W.init=Z;W.writeUint8Array=X;W.getData=e}o.prototype=new h();o.prototype.constructor=o;function N(aa){var W,X=this;function Z(ab){W=new Blob([],{type:aa});ab()}function Y(ac,ab){W=new Blob([W,H?ac:ac.buffer],{type:aa});ab()}function e(ab){ab(W)}X.init=Z;X.writeUint8Array=Y;X.getData=e}N.prototype=new h();N.prototype.constructor=N;function F(ab,W,X,aj,ac,ah,Z,Y,ak,aa){var e=0,af,ai,al=W.sn,ag;function am(){ab.removeEventListener("message",ad,false);Y(ai,ag)}function ad(ap){var ao=ap.data,aq=ao.data,an=ao.error;if(an){an.toString=function(){return"Error: "+this.message};ak(an);return}if(ao.sn!==al){return}if(typeof ao.codecTime==="number"){ab.codecTime+=ao.codecTime}if(typeof ao.crcTime==="number"){ab.crcTime+=ao.crcTime}switch(ao.type){case"append":if(aq){ai+=aq.length;aj.writeUint8Array(aq,function(){ae()},aa)}else{ae()}break;case"flush":ag=ao.crc;if(aq){ai+=aq.length;aj.writeUint8Array(aq,function(){am()},aa)}else{am()}break;case"progress":if(Z){Z(af+ao.loaded,ah)}break;case"importScripts":case"newTask":case"echo":break;default:console.warn("zip.js:launchWorkerProcess: unknown message: ",ao)}}function ae(){af=e*C;if(af<=ah){X.readUint8Array(ac+af,Math.min(C,ah-af),function(ap){if(Z){Z(af,ah)}var ao=af===0?W:{sn:al};ao.type="append";ao.data=ap;try{ab.postMessage(ao,[ap.buffer])}catch(an){ab.postMessage(ao)}e++},ak)}else{ab.postMessage({sn:al,type:"flush"})}}ai=0;ab.addEventListener("message",ad,false);ae()}function b(e,af,aa,ac,al,W,X,ak,Z,ad){var ai=0,ah,ab=0,aj=W==="input",ae=W==="output",ag=new M();function Y(){var am;ah=ai*C;if(ah<al){af.readUint8Array(ac+ah,Math.min(C,al-ah),function(ap){var ao;try{ao=e.append(ap,function(ar){if(X){X(ah+ar,al)}})}catch(aq){Z(aq);return}if(ao){ab+=ao.length;aa.writeUint8Array(ao,function(){ai++;setTimeout(Y,1)},ad);if(ae){ag.append(ao)}}else{ai++;setTimeout(Y,1)}if(aj){ag.append(ap)}if(X){X(ah,al)}},Z)}else{try{am=e.flush()}catch(an){Z(an);return}if(am){if(ae){ag.append(am)}ab+=am.length;aa.writeUint8Array(am,function(){ak(ab,ag.get())},ad)}else{ak(ab,ag.get())}}}Y()}function m(Y,X,ae,aa,ab,ah,af,ag,W,Z,ad){var e=af?"output":"none";if(a.zip.useWebWorkers){var ac={sn:X,codecClass:"Inflater",crcType:e};F(Y,ac,ae,aa,ab,ah,W,ag,Z,ad)}else{b(new a.zip.Inflater(),ae,aa,ab,ah,e,W,ag,Z,ad)}}function B(Z,Y,ae,aa,e,af,X,ab,ad){var W="input";if(a.zip.useWebWorkers){var ac={sn:Y,options:{level:e},codecClass:"Deflater",crcType:W};F(Z,ac,ae,aa,0,ae.size,X,af,ab,ad)}else{b(new a.zip.Deflater(),ae,aa,0,ae.size,W,X,af,ab,ad)}}function U(Y,X,ae,aa,ab,ah,af,ag,W,Z,ad){var e="input";if(a.zip.useWebWorkers&&af){var ac={sn:X,codecClass:"NOOP",crcType:e};F(Y,ac,ae,aa,ab,ah,W,ag,Z,ad)}else{b(new j(),ae,aa,ab,ah,e,W,ag,Z,ad)}}function J(Z){var Y,X="",W,e=["\u00C7","\u00FC","\u00E9","\u00E2","\u00E4","\u00E0","\u00E5","\u00E7","\u00EA","\u00EB","\u00E8","\u00EF","\u00EE","\u00EC","\u00C4","\u00C5","\u00C9","\u00E6","\u00C6","\u00F4","\u00F6","\u00F2","\u00FB","\u00F9","\u00FF","\u00D6","\u00DC","\u00F8","\u00A3","\u00D8","\u00D7","\u0192","\u00E1","\u00ED","\u00F3","\u00FA","\u00F1","\u00D1","\u00AA","\u00BA","\u00BF","\u00AE","\u00AC","\u00BD","\u00BC","\u00A1","\u00AB","\u00BB","_","_","_","\u00A6","\u00A6","\u00C1","\u00C2","\u00C0","\u00A9","\u00A6","\u00A6","+","+","\u00A2","\u00A5","+","+","-","-","+","-","+","\u00E3","\u00C3","+","+","-","-","\u00A6","-","+","\u00A4","\u00F0","\u00D0","\u00CA","\u00CB","\u00C8","i","\u00CD","\u00CE","\u00CF","+","+","_","_","\u00A6","\u00CC","_","\u00D3","\u00DF","\u00D4","\u00D2","\u00F5","\u00D5","\u00B5","\u00FE","\u00DE","\u00DA","\u00DB","\u00D9","\u00FD","\u00DD","\u00AF","\u00B4","\u00AD","\u00B1","_","\u00BE","\u00B6","\u00A7","\u00F7","\u00B8","\u00B0","\u00A8","\u00B7","\u00B9","\u00B3","\u00B2","_"," "];for(Y=0;Y<Z.length;Y++){W=Z.charCodeAt(Y)&255;if(W>127){X+=e[W-128]}else{X+=String.fromCharCode(W)}}return X}function x(e){return decodeURIComponent(escape(e))}function L(e){var W,X="";for(W=0;W<e.length;W++){X+=String.fromCharCode(e[W])}return X}function s(X){var W=(X&4294901760)>>16,Z=X&65535;try{return new Date(1980+((W&65024)>>9),((W&480)>>5)-1,W&31,(Z&63488)>>11,(Z&2016)>>5,(Z&31)*2,0)}catch(Y){}}function r(Y,Z,X,W,e){Y.version=Z.view.getUint16(X,true);Y.bitFlag=Z.view.getUint16(X+2,true);Y.compressionMethod=Z.view.getUint16(X+4,true);Y.lastModDateRaw=Z.view.getUint32(X+6,true);Y.lastModDate=s(Y.lastModDateRaw);if((Y.bitFlag&1)===1){e(A);return}if(W||(Y.bitFlag&8)!=8){Y.crc32=Z.view.getUint32(X+10,true);Y.compressedSize=Z.view.getUint32(X+14,true);Y.uncompressedSize=Z.view.getUint32(X+18,true)}if(Y.compressedSize===4294967295||Y.uncompressedSize===4294967295){e(S);return}Y.filenameLength=Z.view.getUint16(X+22,true);Y.extraFieldLength=Z.view.getUint16(X+24,true)}function V(W,ab,e){var aa=0;function X(){}X.prototype.getData=function(af,ak,ae,ac){var ai=this;function ad(al){var am=I(4);am.view.setUint32(0,al);return ai.crc32==am.view.getUint32(0)}function aj(al,am){if(ac&&!ad(am)){e(K)}else{af.getData(function(an){ak(an)})}}function ag(al){e(al||T)}function ah(al){e(al||k)}W.readUint8Array(ai.offset,30,function(am){var an=I(am.length,am),al;if(an.view.getUint32(0)!=1347093252){e(z);return}r(ai,an,4,false,e);al=ai.offset+30+ai.filenameLength+ai.extraFieldLength;af.init(function(){if(ai.compressionMethod===0){U(ai._worker,aa++,W,af,al,ai.compressedSize,ac,aj,ae,ag,ah)}else{m(ai._worker,aa++,W,af,al,ai.compressedSize,ac,aj,ae,ag,ah)}},ah)},ag)};function Z(af){var ad=22;if(W.size<ad){e(z);return}var ac=256*256,ae=ad+ac;ag(ad,function(){ag(Math.min(ae,W.size),function(){e(z)})});function ag(ah,ai){W.readUint8Array(W.size-ah,ah,function(aj){for(var ak=aj.length-ad;ak>=0;ak--){if(aj[ak]===80&&aj[ak+1]===75&&aj[ak+2]===5&&aj[ak+3]===6){af(new DataView(aj.buffer,ak,ad));return}}ai()},function(){e(D)})}}var Y={getEntries:function(ad){var ac=this._worker;Z(function(ag){var af,ae;af=ag.getUint32(16,true);ae=ag.getUint16(8,true);if(af<0||af>=W.size){e(z);return}W.readUint8Array(af,W.size-af,function(ai){var al,ak=0,ah=[],am,aj,ao,an=I(ai.length,ai);for(al=0;al<ae;al++){am=new X();am._worker=ac;if(an.view.getUint32(ak)!=1347092738){e(z);return}r(am,an,ak+6,true,e);am.commentLength=an.view.getUint16(ak+32,true);am.directory=((an.view.getUint8(ak+38)&16)==16);am.offset=an.view.getUint32(ak+42,true);aj=L(an.array.subarray(ak+46,ak+46+am.filenameLength));am.filename=((am.bitFlag&2048)===2048)?x(aj):J(aj);if(!am.directory&&am.filename.charAt(am.filename.length-1)=="/"){am.directory=true}ao=L(an.array.subarray(ak+46+am.filenameLength+am.extraFieldLength,ak+46+am.filenameLength+am.extraFieldLength+am.commentLength));am.comment=((am.bitFlag&2048)===2048)?x(ao):J(ao);ah.push(am);ak+=46+am.filenameLength+am.extraFieldLength+am.commentLength}ad(ah)},function(){e(D)})})},close:function(ac){if(this._worker){this._worker.terminate();this._worker=null}if(ac){ac()}},_worker:null};if(!a.zip.useWebWorkers){ab(Y)}else{w("inflater",function(ac){Y._worker=ac;ab(Y)},function(ac){e(ac)})}}function y(e){return unescape(encodeURIComponent(e))}function f(W){var e,X=[];for(e=0;e<W.length;e++){X.push(W.charCodeAt(e))}return X}function v(Y,ae,ad,Z){var e={},ab=[],af=0;var ac=0;function aa(ag){ad(ag||n)}function X(ag){ad(ag||T)}var W={add:function(ai,ao,aq,aj,ar){var an,ah,al;var ak=this._worker;function ap(au){var at;al=ar.lastModDate||new Date();an=I(26);e[ai]={headerArray:an.array,directory:ar.directory,filename:ah,offset:af,comment:f(y(ar.comment||""))};an.view.setUint32(0,335546376);if(ar.version){an.view.setUint8(0,ar.version)}if(!Z&&ar.level!==0&&!ar.directory){an.view.setUint16(4,2048)}an.view.setUint16(6,(((al.getHours()<<6)|al.getMinutes())<<5)|al.getSeconds()/2,true);an.view.setUint16(8,((((al.getFullYear()-1980)<<4)|(al.getMonth()+1))<<5)|al.getDate(),true);an.view.setUint16(22,ah.length,true);at=I(30+ah.length);at.view.setUint32(0,1347093252);at.array.set(an.array,4);at.array.set(ah,30);af+=at.array.length;Y.writeUint8Array(at.array,au,aa)}function ag(at,au){var av=I(16);af+=at||0;av.view.setUint32(0,1347094280);if(typeof au!="undefined"){an.view.setUint32(10,au,true);av.view.setUint32(4,au,true)}if(ao){av.view.setUint32(8,at,true);an.view.setUint32(14,at,true);av.view.setUint32(12,ao.size,true);an.view.setUint32(18,ao.size,true)}Y.writeUint8Array(av.array,function(){af+=16;aq()},aa)}function am(){ar=ar||{};ai=ai.trim();if(ar.directory&&ai.charAt(ai.length-1)!="/"){ai+="/"}if(e.hasOwnProperty(ai)){ad(g);return}ah=f(y(ai));ab.push(ai);ap(function(){if(ao){if(Z||ar.level===0){U(ak,ac++,ao,Y,0,ao.size,true,ag,aj,X,aa)}else{B(ak,ac++,ao,Y,ar.level,ag,aj,X,aa)}}else{ag()}},aa)}if(ao){ao.init(am,X)}else{am()}},close:function(al){if(this._worker){this._worker.terminate();this._worker=null}var ak,aj=0,ah=0,ag,ai;for(ag=0;ag<ab.length;ag++){ai=e[ab[ag]];aj+=46+ai.filename.length+ai.comment.length}ak=I(aj+22);for(ag=0;ag<ab.length;ag++){ai=e[ab[ag]];ak.view.setUint32(ah,1347092738);ak.view.setUint16(ah+4,5120);ak.array.set(ai.headerArray,ah+6);ak.view.setUint16(ah+32,ai.comment.length,true);if(ai.directory){ak.view.setUint8(ah+38,16)}ak.view.setUint32(ah+42,ai.offset,true);ak.array.set(ai.filename,ah+46);ak.array.set(ai.comment,ah+46+ai.filename.length);ah+=46+ai.filename.length+ai.comment.length}ak.view.setUint32(ah,1347093766);ak.view.setUint16(ah+8,ab.length,true);ak.view.setUint16(ah+10,ab.length,true);ak.view.setUint32(ah+12,aj,true);ak.view.setUint32(ah+16,af,true);Y.writeUint8Array(ak.array,function(){Y.getData(al)},aa)},_worker:null};if(!a.zip.useWebWorkers){ae(W)}else{w("deflater",function(ag){W._worker=ag;ae(W)},function(ag){ad(ag)})}}function p(W){var e=document.createElement("a");return W.map(function(X){e.href=X;return e.href})}var l={deflater:["z-worker.js","deflate.js"],inflater:["z-worker.js","inflate.js"]};function w(Y,ab,W){if(a.zip.workerScripts!==null&&a.zip.workerScriptsPath!==null){W(new Error("Either zip.workerScripts or zip.workerScriptsPath may be set, not both."));return}var e;if(a.zip.workerScripts){e=a.zip.workerScripts[Y];if(!Array.isArray(e)){W(new Error("zip.workerScripts."+Y+" is not an array!"));return}e=p(e)}else{e=l[Y].slice(0);e[0]=(a.zip.workerScriptsPath||"")+e[0]}var Z=new Worker(e[0]);Z.codecTime=Z.crcTime=0;Z.postMessage({type:"importScripts",scripts:e.slice(1)});Z.addEventListener("message",aa);function aa(ac){var ad=ac.data;if(ad.error){Z.terminate();W(ad.error);return}if(ad.type==="importScripts"){Z.removeEventListener("message",aa);Z.removeEventListener("error",X);ab(Z)}}Z.addEventListener("error",X);function X(ac){Z.terminate();W(ac)}}function u(e){console.error(e)}a.zip={Reader:G,Writer:h,BlobReader:t,Data64URIReader:O,TextReader:Q,BlobWriter:N,Data64URIWriter:o,TextWriter:q,createReader:function(W,X,e){e=e||u;W.init(function(){V(W,X,e)},e)},createWriter:function(W,Y,e,X){e=e||u;X=!!X;W.init(function(){v(W,Y,e,X)},e)},useWebWorkers:true,workerScriptsPath:null,workerScripts:null}})(this);(function(){var i=512*1024;var j=zip.TextWriter,r=zip.BlobWriter,u=zip.Data64URIWriter,x=zip.Reader,v=zip.TextReader,a=zip.BlobReader,c=zip.Data64URIReader,q=zip.createReader,g=zip.createWriter;function h(C){var B=this,E;function F(G){B.size=C.uncompressedSize;G()}function A(G){if(B.data){G()}else{C.getData(new r(),function(H){B.data=H;E=new a(H);G()},null,B.checkCrc32)}}function D(H,I,J,G){A(function(){E.readUint8Array(H,I,J,G)},G)}B.size=0;B.init=F;B.readUint8Array=D}h.prototype=new x();h.prototype.constructor=h;h.prototype.checkCrc32=false;function s(B){var A=0;function C(D){A+=D.uncompressedSize||0;D.children.forEach(C)}C(B);return A}function l(D,E,A){var B=0;function C(){B++;if(B<D.children.length){F(D.children[B])}else{E()}}function F(G){if(G.directory){l(G,C,A)}else{G.reader=new G.Reader(G.data,A);G.reader.init(function(){G.uncompressedSize=G.reader.size;C()})}}if(D.children.length){F(D.children[B])}else{E()}}function y(B){var A=B.parent.children;A.forEach(function(D,C){if(D.id==B.id){A.splice(C,1)}})}function m(C,D,F,E,B){var A=0;function G(J,K,M,L,H){var N=0;function I(){var O=K.children[N];if(O){J.add(O.getFullname(),O.reader,function(){A+=O.uncompressedSize||0;G(J,O,function(){N++;I()},L,H)},function(P){if(L){L(A+P,H)}},{directory:O.directory,version:O.zipVersion})}else{M()}}I()}G(C,D,F,E,B)}function p(D,F,B,A){function E(K,J){var H=[];if(K.isDirectory){var G=K.createReader();(function I(){G.readEntries(function(L){if(!L.length){J(H)}else{H=H.concat(L);I()}},A)})()}if(K.isFile){J(H)}}function C(H,I,G){E(I,function(J){var M=0;function L(O){function N(P){C(P,O,function(){M++;K()})}if(O.isDirectory){N(H.addDirectory(O.name))}if(O.isFile){O.file(function(Q){var P=H.addBlob(O.name,Q);P.uncompressedSize=Q.size;N(P)},A)}}function K(){var N=J[M];if(N){L(N)}else{G()}}K()})}if(F.isDirectory){C(D,F,B)}else{F.file(function(G){D.addBlob(F.name,G);B()},A)}}function z(D,G,I,C,F,H,A){var E=0;function B(M,P,R,K,O,Q){var L=0;function N(T){function S(U){E+=T.uncompressedSize||0;B(U,T,function(){L++;J()},K,O,Q)}if(T.directory){M.getDirectory(T.name,{create:true},S,O)}else{M.getFile(T.name,{create:true},function(U){T.getData(new zip.FileWriter(U,zip.getMimeType(T.name)),S,function(V){if(K){K(E+V,Q)}},A)},O)}}function J(){var S=P.children[L];if(S){N(S)}else{R()}}J()}if(G.directory){B(D,G,I,C,F,H)}else{G.getData(new zip.FileWriter(D,zip.getMimeType(G.name)),I,C,A)}}function o(A){A.entries=[];A.root=new t(A)}function k(B,G,F,E,A){var C=0;function D(){var H=C*i;if(E){E(H,B.size)}if(H<B.size){B.readUint8Array(H,Math.min(i,B.size-H),function(I){G.writeUint8Array(new Uint8Array(I),function(){C++;D()})},A)}else{G.getData(F)}}D()}function d(C,B,D,A){if(C.directory){return A?new t(C.fs,B,D,C):new w(C.fs,B,D,C)}else{throw"Parent entry is not a directory."}}function f(){}f.prototype={init:function(A,B,E,C){var D=this;if(A.root&&C&&C.getChildByName(B)){throw"Entry filename already exists."}if(!E){E={}}D.fs=A;D.name=B;D.id=A.entries.length;D.parent=C;D.children=[];D.zipVersion=E.zipVersion||20;D.uncompressedSize=0;A.entries.push(D);if(C){D.parent.children.push(D)}},getFileEntry:function(F,E,D,A,B){var C=this;l(C,function(){z(F,C,E,D,A,s(C),B)},A)},moveTo:function(B){var A=this;if(B.directory){if(!B.isDescendantOf(A)){if(A!=B){if(B.getChildByName(A.name)){throw"Entry filename already exists."}y(A);A.parent=B;B.children.push(A)}}else{throw"Entry is a ancestor of target entry."}}else{throw"Target entry is not a directory."}},getFullname:function(){var C=this,A=C.name,B=C.parent;while(B){A=(B.name?B.name+"/":"")+A;B=B.parent}return A},isDescendantOf:function(A){var B=this.parent;while(B&&B.id!=A.id){B=B.parent}return !!B}};f.prototype.constructor=f;var n;function w(A,B,E,C){var D=this;f.prototype.init.call(D,A,B,E,C);D.Reader=E.Reader;D.Writer=E.Writer;D.data=E.data;if(E.getData){D.getData=E.getData}}w.prototype=n=new f();n.constructor=w;n.getData=function(E,D,C,A){var B=this;if(!E||(E.constructor==B.Writer&&B.data)){D(B.data)}else{if(!B.reader){B.reader=new B.Reader(B.data,A)}B.reader.init(function(){E.init(function(){k(B.reader,E,D,C,A)},A)})}};n.getText=function(D,C,A,B){this.getData(new j(B),D,C,A)};n.getBlob=function(D,C,B,A){this.getData(new r(D),C,B,A)};n.getData64URI=function(D,C,B,A){this.getData(new u(D),C,B,A)};var e;function t(A,B,E,C){var D=this;f.prototype.init.call(D,A,B,E,C);D.directory=true}t.prototype=e=new f();e.constructor=t;e.addDirectory=function(A){return d(this,A,null,true)};e.addText=function(A,B){return d(this,A,{data:B,Reader:v,Writer:j})};e.addBlob=function(B,A){return d(this,B,{data:A,Reader:a,Writer:r})};e.addData64URI=function(B,A){return d(this,B,{data:A,Reader:c,Writer:u})};e.addFileEntry=function(C,B,A){p(this,C,B,A)};e.addData=function(A,B){return d(this,A,B)};e.importBlob=function(B,C,A){this.importZip(new a(B),C,A)};e.importText=function(C,B,A){this.importZip(new v(C),B,A)};e.importData64URI=function(B,C,A){this.importZip(new c(B),C,A)};e.exportBlob=function(C,B,A){this.exportZip(new r("application/zip"),C,B,A)};e.exportText=function(C,B,A){this.exportZip(new j(),C,B,A)};e.exportFileEntry=function(D,C,B,A){this.exportZip(new zip.FileWriter(D,"application/zip"),C,B,A)};e.exportData64URI=function(C,B,A){this.exportZip(new u("application/zip"),C,B,A)};e.importZip=function(B,D,A){var C=this;q(B,function(E){E.getEntries(function(F){F.forEach(function(I){var H=C,J=I.filename.split("/"),G=J.pop();J.forEach(function(K){H=H.getChildByName(K)||new t(C.fs,K,null,H)});if(!I.directory){d(H,G,{data:I,Reader:h})}});D()})},A)};e.exportZip=function(E,D,C,A){var B=this;l(B,function(){g(E,function(F){m(F,B,function(){F.close(D)},C,s(B))},A)},A)};e.getChildByName=function(A){var D,C,B=this;for(D=0;D<B.children.length;D++){C=B.children[D];if(C.name==A){return C}}};function b(){o(this)}b.prototype={remove:function(A){y(A);this.entries[A.id]=null},find:function(A){var B,D=A.split("/"),C=this.root;for(B=0;C&&B<D.length;B++){C=C.getChildByName(D[B])}return C},getById:function(A){return this.entries[A]},importBlob:function(B,C,A){o(this);this.root.importBlob(B,C,A)},importText:function(C,B,A){o(this);this.root.importText(C,B,A)},importData64URI:function(B,C,A){o(this);this.root.importData64URI(B,C,A)},exportBlob:function(C,B,A){this.root.exportBlob(C,B,A)},exportText:function(C,B,A){this.root.exportText(C,B,A)},exportFileEntry:function(D,C,B,A){this.root.exportFileEntry(D,C,B,A)},exportData64URI:function(C,B,A){this.root.exportData64URI(C,B,A)}};zip.fs={FS:b,ZipDirectoryEntry:t,ZipFileEntry:w};zip.getMimeType=function(){return"application/octet-stream"}})();(function(){var c="HTTP Range not supported.";var j=zip.Reader;var g=zip.Writer;var h;var f;try{f=new Blob([new DataView(new ArrayBuffer(0))]).size===0}catch(i){}function b(n){var e=document.createElement("a");e.href=n;return e.protocol==="http:"||e.protocol==="https:"}function d(n){var o=this;function e(t,r){var s;if(!o.data){s=new XMLHttpRequest();s.addEventListener("load",function(){if(!o.size){o.size=Number(s.getResponseHeader("Content-Length"))||Number(s.response.byteLength)}o.data=new Uint8Array(s.response);t()},false);s.addEventListener("error",r,false);s.open("GET",n);s.responseType="arraybuffer";s.send()}else{t()}}function q(t,r){if(!b(n)){e(t,r);return}var s=new XMLHttpRequest();s.addEventListener("load",function(){o.size=Number(s.getResponseHeader("Content-Length"));if(!o.size){e(t,r)}else{t()}},false);s.addEventListener("error",r,false);s.open("HEAD",n);s.send()}function p(s,t,u,r){e(function(){u(new Uint8Array(o.data.subarray(s,s+t)))},r)}o.size=0;o.init=q;o.readUint8Array=p}d.prototype=new j();d.prototype.constructor=d;function k(e){var n=this;function q(t,r){var s=new XMLHttpRequest();s.addEventListener("load",function(){n.size=Number(s.getResponseHeader("Content-Length"));if(s.getResponseHeader("Accept-Ranges")=="bytes"){t()}else{r(c)}},false);s.addEventListener("error",r,false);s.open("HEAD",e);s.send()}function p(s,u,v,r){var t=new XMLHttpRequest();t.open("GET",e);t.responseType="arraybuffer";t.setRequestHeader("Range","bytes="+s+"-"+(s+u-1));t.addEventListener("load",function(){v(t.response)},false);t.addEventListener("error",r,false);t.send()}function o(s,t,u,r){p(s,t,function(v){u(new Uint8Array(v))},r)}n.size=0;n.init=q;n.readUint8Array=o}k.prototype=new j();k.prototype.constructor=k;function a(e){var n=this;function p(r,q){n.size=e.byteLength;r()}function o(r,s,t,q){t(new Uint8Array(e.slice(r,r+s)))}n.size=0;n.init=p;n.readUint8Array=o}a.prototype=new j();a.prototype.constructor=a;function l(){var q,n=this;function p(s,r){q=new Uint8Array();s()}function o(s,u,r){var t=new Uint8Array(q.length+s.length);t.set(q);t.set(s,q.length);q=t;u()}function e(r){r(q.buffer)}n.init=p;n.writeUint8Array=o;n.getData=e}l.prototype=new g();l.prototype.constructor=l;function m(s,r){var p,n=this;function q(u,t){s.createWriter(function(v){p=v;u()},t)}function o(w,v,t){var u=new Blob([f?w:w.buffer],{type:r});p.onwrite=function(){p.onwrite=null;v()};p.onerror=t;p.write(u)}function e(t){s.file(t)}n.init=q;n.writeUint8Array=o;n.getData=e}m.prototype=new g();m.prototype.constructor=m;zip.FileWriter=m;zip.HttpReader=d;zip.HttpRangeReader=k;zip.ArrayBufferReader=a;zip.ArrayBufferWriter=l;if(zip.fs){h=zip.fs.ZipDirectoryEntry;h.prototype.addHttpContent=function(n,e,o){function p(s,r,t,q){if(s.directory){return q?new h(s.fs,r,t,s):new zip.fs.ZipFileEntry(s.fs,r,t,s)}else{throw"Parent entry is not a directory."}}return p(this,n,{data:e,Reader:o?k:d})};h.prototype.importHttpContent=function(n,o,p,e){this.importZip(o?new k(n):new d(n),p,e)};zip.fs.FS.prototype.importHttpContent=function(n,o,p,e){this.entries=[];this.root=new h(this);this.root.importHttpContent(n,o,p,e)}}})();(function(b){var ae=15;var c=30;var p=19;var k=29;var f=256;var g=(f+1+k);var h=(2*g+1);var d=256;var V=7;var B=16;var A=17;var E=18;var u=8*2;var y=-1;var N=1;var L=2;var a=0;var Z=0;var D=1;var r=3;var l=4;var v=0;var ad=1;var M=2;var ag=-2;var o=-3;var O=-5;var X=[0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29];function s(){var ai=this;function ak(ax){var ay=ai.dyn_tree;var aw=ai.stat_desc.static_tree;var ao=ai.stat_desc.extra_bits;var al=ai.stat_desc.extra_base;var av=ai.stat_desc.max_length;var ar;var am,an;var au;var aq;var at;var ap=0;for(au=0;au<=ae;au++){ax.bl_count[au]=0}ay[ax.heap[ax.heap_max]*2+1]=0;for(ar=ax.heap_max+1;ar<h;ar++){am=ax.heap[ar];au=ay[ay[am*2+1]*2+1]+1;if(au>av){au=av;ap++}ay[am*2+1]=au;if(am>ai.max_code){continue}ax.bl_count[au]++;aq=0;if(am>=al){aq=ao[am-al]}at=ay[am*2];ax.opt_len+=at*(au+aq);if(aw){ax.static_len+=at*(aw[am*2+1]+aq)}}if(ap===0){return}do{au=av-1;while(ax.bl_count[au]===0){au--}ax.bl_count[au]--;ax.bl_count[au+1]+=2;ax.bl_count[av]--;ap-=2}while(ap>0);for(au=av;au!==0;au--){am=ax.bl_count[au];while(am!==0){an=ax.heap[--ar];if(an>ai.max_code){continue}if(ay[an*2+1]!=au){ax.opt_len+=(au-ay[an*2+1])*ay[an*2];ay[an*2+1]=au}am--}}}function aj(an,al){var am=0;do{am|=an&1;an>>>=1;am<<=1}while(--al>0);return am>>>1}function ah(am,at,an){var ap=[];var ao=0;var aq;var ar;var al;for(aq=1;aq<=ae;aq++){ap[aq]=ao=((ao+an[aq-1])<<1)}for(ar=0;ar<=at;ar++){al=am[ar*2+1];if(al===0){continue}am[ar*2]=aj(ap[al]++,al)}}ai.build_tree=function(ao){var am=ai.dyn_tree;var aq=ai.stat_desc.static_tree;var an=ai.stat_desc.elems;var at,al;var ar=-1;var ap;ao.heap_len=0;ao.heap_max=h;for(at=0;at<an;at++){if(am[at*2]!==0){ao.heap[++ao.heap_len]=ar=at;ao.depth[at]=0}else{am[at*2+1]=0}}while(ao.heap_len<2){ap=ao.heap[++ao.heap_len]=ar<2?++ar:0;am[ap*2]=1;ao.depth[ap]=0;ao.opt_len--;if(aq){ao.static_len-=aq[ap*2+1]}}ai.max_code=ar;for(at=Math.floor(ao.heap_len/2);at>=1;at--){ao.pqdownheap(am,at)}ap=an;do{at=ao.heap[1];ao.heap[1]=ao.heap[ao.heap_len--];ao.pqdownheap(am,1);al=ao.heap[1];ao.heap[--ao.heap_max]=at;ao.heap[--ao.heap_max]=al;am[ap*2]=(am[at*2]+am[al*2]);ao.depth[ap]=Math.max(ao.depth[at],ao.depth[al])+1;am[at*2+1]=am[al*2+1]=ap;ao.heap[1]=ap++;ao.pqdownheap(am,1)}while(ao.heap_len>=2);ao.heap[--ao.heap_max]=ao.heap[1];ak(ao);ah(am,ai.max_code,ao.bl_count)}}s._length_code=[0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28];s.base_length=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0];s.base_dist=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576];s.d_code=function(ah){return((ah)<256?X[ah]:X[256+((ah)>>>7)])};s.extra_lbits=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];s.extra_dbits=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];s.extra_blbits=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];s.bl_order=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function aa(ak,aj,ai,ah,am){var al=this;al.static_tree=ak;al.extra_bits=aj;al.extra_base=ai;al.elems=ah;al.max_length=am}aa.static_ltree=[12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8];aa.static_dtree=[0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5];aa.static_l_desc=new aa(aa.static_ltree,s.extra_lbits,f+1,g,ae);aa.static_d_desc=new aa(aa.static_dtree,s.extra_dbits,0,c,ae);aa.static_bl_desc=new aa(null,s.extra_blbits,0,p,V);var Y=9;var W=8;function n(ah,am,ai,al,ak){var aj=this;aj.good_length=ah;aj.max_lazy=am;aj.nice_length=ai;aj.max_chain=al;aj.func=ak}var G=0;var q=1;var I=2;var e=[new n(0,0,0,0,G),new n(4,4,8,4,q),new n(4,5,16,8,q),new n(4,6,32,32,q),new n(4,4,16,16,I),new n(8,16,32,32,I),new n(8,16,128,128,I),new n(8,32,128,256,I),new n(32,128,258,1024,I),new n(32,258,258,4096,I)];var t=["need dictionary","stream end","","","stream error","data error","","buffer error","",""];var J=0;var U=1;var F=2;var j=3;var i=32;var z=42;var T=113;var R=666;var S=8;var P=0;var ac=1;var C=2;var af=3;var x=258;var w=(x+af+1);function Q(aj,am,ai,al){var ak=aj[am*2];var ah=aj[ai*2];return(ak<ah||(ak==ah&&al[am]<=al[ai]))}function H(){var aU=this;var aJ;var aS;var bb;var aB;var an;var ao;var a0;var aE;var bm;var ah;var aO;var aI;var a2;var ay;var a9;var aQ;var br;var bq;var bh;var aP;var au;var bs;var aV;var aL;var ak;var aA;var a4;var ba;var ai;var ap;var az;var be;var aG;var am;var aC=new s();var bp=new s();var bg=new s();aU.depth=[];var a3;var bj;var a7;var al;var aw;var a8;var aR;var av;aU.bl_count=[];aU.heap=[];be=[];aG=[];am=[];function aW(){var bt;ah=2*ao;aI[ay-1]=0;for(bt=0;bt<ay-1;bt++){aI[bt]=0}a4=e[ba].max_lazy;ap=e[ba].good_length;az=e[ba].nice_length;aA=e[ba].max_chain;bs=0;bq=0;aL=0;bh=ak=af-1;au=0;a2=0}function aX(){var bt;for(bt=0;bt<g;bt++){be[bt*2]=0}for(bt=0;bt<c;bt++){aG[bt*2]=0}for(bt=0;bt<p;bt++){am[bt*2]=0}be[d*2]=1;aU.opt_len=aU.static_len=0;a7=aw=0}function bk(){aC.dyn_tree=be;aC.stat_desc=aa.static_l_desc;bp.dyn_tree=aG;bp.stat_desc=aa.static_d_desc;bg.dyn_tree=am;bg.stat_desc=aa.static_bl_desc;aR=0;av=0;a8=8;aX()}aU.pqdownheap=function(bt,bv){var bx=aU.heap;var bu=bx[bv];var bw=bv<<1;while(bw<=aU.heap_len){if(bw<aU.heap_len&&Q(bt,bx[bw+1],bx[bw],aU.depth)){bw++}if(Q(bt,bu,bx[bw],aU.depth)){break}bx[bv]=bx[bw];bv=bw;bw<<=1}bx[bv]=bu};function a5(bB,bA){var bu;var by=-1;var bt;var bw=bB[0*2+1];var bx=0;var bv=7;var bz=4;if(bw===0){bv=138;bz=3}bB[(bA+1)*2+1]=65535;for(bu=0;bu<=bA;bu++){bt=bw;bw=bB[(bu+1)*2+1];if(++bx<bv&&bt==bw){continue}else{if(bx<bz){am[bt*2]+=bx}else{if(bt!==0){if(bt!=by){am[bt*2]++}am[B*2]++}else{if(bx<=10){am[A*2]++}else{am[E*2]++}}}}bx=0;by=bt;if(bw===0){bv=138;bz=3}else{if(bt==bw){bv=6;bz=3}else{bv=7;bz=4}}}}function aM(){var bt;a5(be,aC.max_code);a5(aG,bp.max_code);bg.build_tree(aU);for(bt=p-1;bt>=3;bt--){if(am[s.bl_order[bt]*2+1]!==0){break}}aU.opt_len+=3*(bt+1)+5+5+4;return bt}function aj(bt){aU.pending_buf[aU.pending++]=bt}function bc(bt){aj(bt&255);aj((bt>>>8)&255)}function aK(bt){aj((bt>>8)&255);aj((bt&255)&255)}function bl(bv,bu){var bw,bt=bu;if(av>u-bt){bw=bv;aR|=((bw<<av)&65535);bc(aR);aR=bw>>>(u-av);av+=bt-u}else{aR|=(((bv)<<av)&65535);av+=bt}}function aT(bv,bt){var bu=bv*2;bl(bt[bu]&65535,bt[bu+1]&65535)}function a6(bB,bA){var bu;var by=-1;var bt;var bw=bB[0*2+1];var bx=0;var bv=7;var bz=4;if(bw===0){bv=138;bz=3}for(bu=0;bu<=bA;bu++){bt=bw;bw=bB[(bu+1)*2+1];if(++bx<bv&&bt==bw){continue}else{if(bx<bz){do{aT(bt,am)}while(--bx!==0)}else{if(bt!==0){if(bt!=by){aT(bt,am);bx--}aT(B,am);bl(bx-3,2)}else{if(bx<=10){aT(A,am);bl(bx-3,3)}else{aT(E,am);bl(bx-11,7)}}}}bx=0;by=bt;if(bw===0){bv=138;bz=3}else{if(bt==bw){bv=6;bz=3}else{bv=7;bz=4}}}}function bi(bu,bt,bv){var bw;bl(bu-257,5);bl(bt-1,5);bl(bv-4,4);for(bw=0;bw<bv;bw++){bl(am[s.bl_order[bw]*2+1],3)}a6(be,bu-1);a6(aG,bt-1)}function a1(){if(av==16){bc(aR);aR=0;av=0}else{if(av>=8){aj(aR&255);aR>>>=8;av-=8}}}function at(){bl(ac<<1,3);aT(d,aa.static_ltree);a1();if(1+a8+10-av<9){bl(ac<<1,3);aT(d,aa.static_ltree);a1()}a8=7}function aH(bx,bv){var bt,bw,bu;aU.pending_buf[al+a7*2]=(bx>>>8)&255;aU.pending_buf[al+a7*2+1]=bx&255;aU.pending_buf[a3+a7]=bv&255;a7++;if(bx===0){be[bv*2]++}else{aw++;bx--;be[(s._length_code[bv]+f+1)*2]++;aG[s.d_code(bx)*2]++}if((a7&8191)===0&&ba>2){bt=a7*8;bw=bs-bq;for(bu=0;bu<c;bu++){bt+=aG[bu*2]*(5+s.extra_dbits[bu])}bt>>>=3;if((aw<Math.floor(a7/2))&&bt<Math.floor(bw/2)){return true}}return(a7==bj-1)}function aZ(bz,bw){var by;var bv;var bx=0;var bu;var bt;if(a7!==0){do{by=((aU.pending_buf[al+bx*2]<<8)&65280)|(aU.pending_buf[al+bx*2+1]&255);bv=(aU.pending_buf[a3+bx])&255;bx++;if(by===0){aT(bv,bz)}else{bu=s._length_code[bv];aT(bu+f+1,bz);bt=s.extra_lbits[bu];if(bt!==0){bv-=s.base_length[bu];bl(bv,bt)}by--;bu=s.d_code(by);aT(bu,bw);bt=s.extra_dbits[bu];if(bt!==0){by-=s.base_dist[bu];bl(by,bt)}}}while(bx<a7)}aT(d,bz);a8=bz[d*2+1]}function bn(){if(av>8){bc(aR)}else{if(av>0){aj(aR&255)}}aR=0;av=0}function ax(bu,bt,bv){bn();a8=8;if(bv){bc(bt);bc(~bt)}aU.pending_buf.set(bm.subarray(bu,bu+bt),aU.pending);aU.pending+=bt}function aN(bu,bv,bt){bl((P<<1)+(bt?1:0),3);ax(bu,bv,true)}function aF(bw,by,bt){var bv,bu;var bx=0;if(ba>0){aC.build_tree(aU);bp.build_tree(aU);bx=aM();bv=(aU.opt_len+3+7)>>>3;bu=(aU.static_len+3+7)>>>3;if(bu<=bv){bv=bu}}else{bv=bu=by+5}if((by+4<=bv)&&bw!=-1){aN(bw,by,bt)}else{if(bu==bv){bl((ac<<1)+(bt?1:0),3);aZ(aa.static_ltree,aa.static_dtree)}else{bl((C<<1)+(bt?1:0),3);bi(aC.max_code+1,bp.max_code+1,bx+1);aZ(be,aG)}}aX();if(bt){bn()}}function aq(bt){aF(bq>=0?bq:-1,bs-bq,bt);bq=bs;aJ.flush_pending()}function bf(){var bw,bt;var bv;var bu;do{bu=(ah-aL-bs);if(bu===0&&bs===0&&aL===0){bu=ao}else{if(bu==-1){bu--}else{if(bs>=ao+ao-w){bm.set(bm.subarray(ao,ao+ao),0);aV-=ao;bs-=ao;bq-=ao;bw=ay;bv=bw;do{bt=(aI[--bv]&65535);aI[bv]=(bt>=ao?bt-ao:0)}while(--bw!==0);bw=ao;bv=bw;do{bt=(aO[--bv]&65535);aO[bv]=(bt>=ao?bt-ao:0)}while(--bw!==0);bu+=ao}}}if(aJ.avail_in===0){return}bw=aJ.read_buf(bm,bs+aL,bu);aL+=bw;if(aL>=af){a2=bm[bs]&255;a2=(((a2)<<br)^(bm[bs+1]&255))&aQ}}while(aL<w&&aJ.avail_in!==0)}function aY(bt){var bv=65535;var bu;if(bv>bb-5){bv=bb-5}while(true){if(aL<=1){bf();if(aL===0&&bt==Z){return J}if(aL===0){break}}bs+=aL;aL=0;bu=bq+bv;if(bs===0||bs>=bu){aL=(bs-bu);bs=bu;aq(false);if(aJ.avail_out===0){return J}}if(bs-bq>=ao-w){aq(false);if(aJ.avail_out===0){return J}}}aq(bt==l);if(aJ.avail_out===0){return(bt==l)?F:J}return bt==l?j:U}function bo(bw){var bz=aA;var bE=bs;var bx;var by;var bt=ak;var bu=bs>(ao-w)?bs-(ao-w):0;var bv=az;var bA=aE;var bC=bs+x;var bD=bm[bE+bt-1];var bB=bm[bE+bt];if(ak>=ap){bz>>=2}if(bv>aL){bv=aL}do{bx=bw;if(bm[bx+bt]!=bB||bm[bx+bt-1]!=bD||bm[bx]!=bm[bE]||bm[++bx]!=bm[bE+1]){continue}bE+=2;bx++;do{}while(bm[++bE]==bm[++bx]&&bm[++bE]==bm[++bx]&&bm[++bE]==bm[++bx]&&bm[++bE]==bm[++bx]&&bm[++bE]==bm[++bx]&&bm[++bE]==bm[++bx]&&bm[++bE]==bm[++bx]&&bm[++bE]==bm[++bx]&&bE<bC);by=x-(bC-bE);bE=bC-x;if(by>bt){aV=bw;bt=by;if(by>=bv){break}bD=bm[bE+bt-1];bB=bm[bE+bt]}}while((bw=(aO[bw&bA]&65535))>bu&&--bz!==0);if(bt<=aL){return bt}return aL}function ar(bt){var bv=0;var bu;while(true){if(aL<w){bf();if(aL<w&&bt==Z){return J}if(aL===0){break}}if(aL>=af){a2=(((a2)<<br)^(bm[(bs)+(af-1)]&255))&aQ;bv=(aI[a2]&65535);aO[bs&aE]=aI[a2];aI[a2]=bs}if(bv!==0&&((bs-bv)&65535)<=ao-w){if(ai!=L){bh=bo(bv)}}if(bh>=af){bu=aH(bs-aV,bh-af);aL-=bh;if(bh<=a4&&aL>=af){bh--;do{bs++;a2=((a2<<br)^(bm[(bs)+(af-1)]&255))&aQ;bv=(aI[a2]&65535);aO[bs&aE]=aI[a2];aI[a2]=bs}while(--bh!==0);bs++}else{bs+=bh;bh=0;a2=bm[bs]&255;a2=(((a2)<<br)^(bm[bs+1]&255))&aQ}}else{bu=aH(0,bm[bs]&255);aL--;bs++}if(bu){aq(false);if(aJ.avail_out===0){return J}}}aq(bt==l);if(aJ.avail_out===0){if(bt==l){return F}else{return J}}return bt==l?j:U}function bd(bu){var bw=0;var bv;var bt;while(true){if(aL<w){bf();if(aL<w&&bu==Z){return J}if(aL===0){break}}if(aL>=af){a2=(((a2)<<br)^(bm[(bs)+(af-1)]&255))&aQ;bw=(aI[a2]&65535);aO[bs&aE]=aI[a2];aI[a2]=bs}ak=bh;aP=aV;bh=af-1;if(bw!==0&&ak<a4&&((bs-bw)&65535)<=ao-w){if(ai!=L){bh=bo(bw)}if(bh<=5&&(ai==N||(bh==af&&bs-aV>4096))){bh=af-1}}if(ak>=af&&bh<=ak){bt=bs+aL-af;bv=aH(bs-1-aP,ak-af);aL-=ak-1;ak-=2;do{if(++bs<=bt){a2=(((a2)<<br)^(bm[(bs)+(af-1)]&255))&aQ;bw=(aI[a2]&65535);aO[bs&aE]=aI[a2];aI[a2]=bs}}while(--ak!==0);au=0;bh=af-1;bs++;if(bv){aq(false);if(aJ.avail_out===0){return J}}}else{if(au!==0){bv=aH(0,bm[bs-1]&255);if(bv){aq(false)}bs++;aL--;if(aJ.avail_out===0){return J}}else{au=1;bs++;aL--}}}if(au!==0){bv=aH(0,bm[bs-1]&255);au=0}aq(bu==l);if(aJ.avail_out===0){if(bu==l){return F}else{return J}}return bu==l?j:U}function aD(bt){bt.total_in=bt.total_out=0;bt.msg=null;aU.pending=0;aU.pending_out=0;aS=T;an=Z;bk();aW();return v}aU.deflateInit=function(bt,bv,bw,bu,by,bx){if(!bu){bu=S}if(!by){by=W}if(!bx){bx=a}bt.msg=null;if(bv==y){bv=6}if(by<1||by>Y||bu!=S||bw<9||bw>15||bv<0||bv>9||bx<0||bx>L){return ag}bt.dstate=aU;a0=bw;ao=1<<a0;aE=ao-1;a9=by+7;ay=1<<a9;aQ=ay-1;br=Math.floor((a9+af-1)/af);bm=new Uint8Array(ao*2);aO=[];aI=[];bj=1<<(by+6);aU.pending_buf=new Uint8Array(bj*4);bb=bj*4;al=Math.floor(bj/2);a3=(1+2)*bj;ba=bv;ai=bx;aB=bu&255;return aD(bt)};aU.deflateEnd=function(){if(aS!=z&&aS!=T&&aS!=R){return ag}aU.pending_buf=null;aI=null;aO=null;bm=null;aU.dstate=null;return aS==T?o:v};aU.deflateParams=function(bt,bu,bw){var bv=v;if(bu==y){bu=6}if(bu<0||bu>9||bw<0||bw>L){return ag}if(e[ba].func!=e[bu].func&&bt.total_in!==0){bv=bt.deflate(D)}if(ba!=bu){ba=bu;a4=e[ba].max_lazy;ap=e[ba].good_length;az=e[ba].nice_length;aA=e[ba].max_chain}ai=bw;return bv};aU.deflateSetDictionary=function(bt,by,bw){var bv=bw;var bx,bu=0;if(!by||aS!=z){return ag}if(bv<af){return v}if(bv>ao-w){bv=ao-w;bu=bw-bv}bm.set(by.subarray(bu,bu+bv),0);bs=bv;bq=bv;a2=bm[0]&255;a2=(((a2)<<br)^(bm[1]&255))&aQ;for(bx=0;bx<=bv-af;bx++){a2=(((a2)<<br)^(bm[(bx)+(af-1)]&255))&aQ;aO[bx&aE]=aI[a2];aI[a2]=bx}return v};aU.deflate=function(bu,bt){var bv,bz,bx,bw,by;if(bt>l||bt<0){return ag}if(!bu.next_out||(!bu.next_in&&bu.avail_in!==0)||(aS==R&&bt!=l)){bu.msg=t[M-(ag)];return ag}if(bu.avail_out===0){bu.msg=t[M-(O)];return O}aJ=bu;bw=an;an=bt;if(aS==z){bz=(S+((a0-8)<<4))<<8;bx=((ba-1)&255)>>1;if(bx>3){bx=3}bz|=(bx<<6);if(bs!==0){bz|=i}bz+=31-(bz%31);aS=T;aK(bz)}if(aU.pending!==0){aJ.flush_pending();if(aJ.avail_out===0){an=-1;return v}}else{if(aJ.avail_in===0&&bt<=bw&&bt!=l){aJ.msg=t[M-(O)];return O}}if(aS==R&&aJ.avail_in!==0){bu.msg=t[M-(O)];return O}if(aJ.avail_in!==0||aL!==0||(bt!=Z&&aS!=R)){by=-1;switch(e[ba].func){case G:by=aY(bt);break;case q:by=ar(bt);break;case I:by=bd(bt);break;default:}if(by==F||by==j){aS=R}if(by==J||by==F){if(aJ.avail_out===0){an=-1}return v}if(by==U){if(bt==D){at()}else{aN(0,0,false);if(bt==r){for(bv=0;bv<ay;bv++){aI[bv]=0}}}aJ.flush_pending();if(aJ.avail_out===0){an=-1;return v}}}if(bt!=l){return v}return ad}}function K(){var ah=this;ah.next_in_index=0;ah.next_out_index=0;ah.avail_in=0;ah.total_in=0;ah.avail_out=0;ah.total_out=0}K.prototype={deflateInit:function(aj,ai){var ah=this;ah.dstate=new H();if(!ai){ai=ae}return ah.dstate.deflateInit(ah,aj,ai)},deflate:function(ah){var ai=this;if(!ai.dstate){return ag}return ai.dstate.deflate(ai,ah)},deflateEnd:function(){var ai=this;if(!ai.dstate){return ag}var ah=ai.dstate.deflateEnd();ai.dstate=null;return ah},deflateParams:function(aj,ai){var ah=this;if(!ah.dstate){return ag}return ah.dstate.deflateParams(ah,aj,ai)},deflateSetDictionary:function(aj,ai){var ah=this;if(!ah.dstate){return ag}return ah.dstate.deflateSetDictionary(ah,aj,ai)},read_buf:function(ai,al,aj){var ak=this;var ah=ak.avail_in;if(ah>aj){ah=aj}if(ah===0){return 0}ak.avail_in-=ah;ai.set(ak.next_in.subarray(ak.next_in_index,ak.next_in_index+ah),al);ak.next_in_index+=ah;ak.total_in+=ah;return ah},flush_pending:function(){var ai=this;var ah=ai.dstate.pending;if(ah>ai.avail_out){ah=ai.avail_out}if(ah===0){return}ai.next_out.set(ai.dstate.pending_buf.subarray(ai.dstate.pending_out,ai.dstate.pending_out+ah),ai.next_out_index);ai.next_out_index+=ah;ai.dstate.pending_out+=ah;ai.total_out+=ah;ai.avail_out-=ah;ai.dstate.pending-=ah;if(ai.dstate.pending===0){ai.dstate.pending_out=0}}};function ab(aj){var ak=this;var am=new K();var al=512;var ah=Z;var ai=new Uint8Array(al);var an=aj?aj.level:y;if(typeof an=="undefined"){an=y}am.deflateInit(an);am.next_out=ai;ak.append=function(at,ar){var aq,ap=[],aw=0,ao=0,av=0,au;if(!at.length){return}am.next_in_index=0;am.next_in=at;am.avail_in=at.length;do{am.next_out_index=0;am.avail_out=al;aq=am.deflate(ah);if(aq!=v){throw new Error("deflating: "+am.msg)}if(am.next_out_index){if(am.next_out_index==al){ap.push(new Uint8Array(ai))}else{ap.push(new Uint8Array(ai.subarray(0,am.next_out_index)))}}av+=am.next_out_index;if(ar&&am.next_in_index>0&&am.next_in_index!=aw){ar(am.next_in_index);aw=am.next_in_index}}while(am.avail_in>0||am.avail_out===0);au=new Uint8Array(av);ap.forEach(function(ax){au.set(ax,ao);ao+=ax.length});return au};ak.flush=function(){var aq,ap=[],ao=0,at=0,ar;do{am.next_out_index=0;am.avail_out=al;aq=am.deflate(l);if(aq!=ad&&aq!=v){throw new Error("deflating: "+am.msg)}if(al-am.avail_out>0){ap.push(new Uint8Array(ai.subarray(0,am.next_out_index)))}at+=am.next_out_index}while(am.avail_in>0||am.avail_out===0);am.deflateEnd();ar=new Uint8Array(at);ap.forEach(function(au){ar.set(au,ao);ao+=au.length});return ar}}var m=b.zip||b;m.Deflater=m._jzlib_Deflater=ab})(this);(function(){
    "use strict";
    var ρσ_iterator_symbol = (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") ? Symbol.iterator : "iterator-Symbol-5d0927e5554349048cf0e3762a228256";
    var ρσ_kwargs_symbol = (typeof Symbol === "function") ? Symbol("kwargs-object") : "kwargs-object-Symbol-5d0927e5554349048cf0e3762a228256";
    var ρσ_cond_temp, ρσ_expr_temp, ρσ_last_exception;
    var ρσ_object_counter = 0;
var ρσ_len;
function ρσ_bool(val) {
    return !!val;
};
if (!ρσ_bool.__argnames__) Object.defineProperties(ρσ_bool, {
    __argnames__ : {value: ["val"]}
});

function ρσ_print() {
    var parts;
    if (typeof console === "object") {
        parts = [];
        for (var i = 0; i < arguments.length; i++) {
            parts.push(ρσ_str(arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i]));
        }
        console.log(parts.join(" "));
    }
};

function ρσ_int(val, base) {
    var ans;
    if (typeof val === "number") {
        ans = val | 0;
    } else {
        ans = parseInt(val, base || 10);
    }
    if (isNaN(ans)) {
        throw new ValueError("Invalid literal for int with base " + (base || 10) + ": " + val);
    }
    return ans;
};
if (!ρσ_int.__argnames__) Object.defineProperties(ρσ_int, {
    __argnames__ : {value: ["val", "base"]}
});

function ρσ_float(val) {
    var ans;
    if (typeof val === "number") {
        ans = val;
    } else {
        ans = parseFloat(val);
    }
    if (isNaN(ans)) {
        throw new ValueError("Could not convert string to float: " + arguments[0]);
    }
    return ans;
};
if (!ρσ_float.__argnames__) Object.defineProperties(ρσ_float, {
    __argnames__ : {value: ["val"]}
});

function ρσ_arraylike_creator() {
    var names;
    names = "Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" ");
    if (typeof HTMLCollection === "function") {
        names = names.concat("HTMLCollection NodeList NamedNodeMap TouchList".split(" "));
    }
    return (function() {
        var ρσ_anonfunc = function (x) {
            if (Array.isArray(x) || typeof x === "string" || names.indexOf(Object.prototype.toString.call(x).slice(8, -1)) > -1) {
                return true;
            }
            return false;
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["x"]}
        });
        return ρσ_anonfunc;
    })();
};

function options_object(f) {
    return function () {
        if (typeof arguments[arguments.length - 1] === "object") {
            arguments[ρσ_bound_index(arguments.length - 1, arguments)][ρσ_kwargs_symbol] = true;
        }
        return f.apply(this, arguments);
    };
};
if (!options_object.__argnames__) Object.defineProperties(options_object, {
    __argnames__ : {value: ["f"]}
});

function ρσ_id(x) {
    return x.ρσ_object_id;
};
if (!ρσ_id.__argnames__) Object.defineProperties(ρσ_id, {
    __argnames__ : {value: ["x"]}
});

function ρσ_dir(item) {
    var arr;
    arr = ρσ_list_decorate([]);
    for (var i in item) {
        arr.push(i);
    }
    return arr;
};
if (!ρσ_dir.__argnames__) Object.defineProperties(ρσ_dir, {
    __argnames__ : {value: ["item"]}
});

function ρσ_ord(x) {
    var ans, second;
    ans = x.charCodeAt(0);
    if (55296 <= ans && ans <= 56319) {
        second = x.charCodeAt(1);
        if (56320 <= second && second <= 57343) {
            return (ans - 55296) * 1024 + second - 56320 + 65536;
        }
        throw new TypeError("string is missing the low surrogate char");
    }
    return ans;
};
if (!ρσ_ord.__argnames__) Object.defineProperties(ρσ_ord, {
    __argnames__ : {value: ["x"]}
});

function ρσ_chr(code) {
    if (code <= 65535) {
        return String.fromCharCode(code);
    }
    code -= 65536;
    return String.fromCharCode(55296 + (code >> 10), 56320 + (code & 1023));
};
if (!ρσ_chr.__argnames__) Object.defineProperties(ρσ_chr, {
    __argnames__ : {value: ["code"]}
});

function ρσ_callable(x) {
    return typeof x === "function";
};
if (!ρσ_callable.__argnames__) Object.defineProperties(ρσ_callable, {
    __argnames__ : {value: ["x"]}
});

function ρσ_bin(x) {
    var ans;
    if (typeof x !== "number" || x % 1 !== 0) {
        throw new TypeError("integer required");
    }
    ans = x.toString(2);
    if (ans[0] === "-") {
        ans = "-" + "0b" + ans.slice(1);
    } else {
        ans = "0b" + ans;
    }
    return ans;
};
if (!ρσ_bin.__argnames__) Object.defineProperties(ρσ_bin, {
    __argnames__ : {value: ["x"]}
});

function ρσ_hex(x) {
    var ans;
    if (typeof x !== "number" || x % 1 !== 0) {
        throw new TypeError("integer required");
    }
    ans = x.toString(16);
    if (ans[0] === "-") {
        ans = "-" + "0x" + ans.slice(1);
    } else {
        ans = "0x" + ans;
    }
    return ans;
};
if (!ρσ_hex.__argnames__) Object.defineProperties(ρσ_hex, {
    __argnames__ : {value: ["x"]}
});

function ρσ_enumerate(iterable) {
    var ans, iterator;
    ans = {"_i":-1};
    ans[ρσ_iterator_symbol] = function () {
        return this;
    };
    if (ρσ_arraylike(iterable)) {
        ans["next"] = function () {
            this._i += 1;
            if (this._i < iterable.length) {
                return {'done':false, 'value':[this._i, iterable[this._i]]};
            }
            return {'done':true};
        };
        return ans;
    }
    if (typeof iterable[ρσ_iterator_symbol] === "function") {
        iterator = (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[ρσ_iterator_symbol]();
        ans["_iterator"] = iterator;
        ans["next"] = function () {
            var r;
            r = this._iterator.next();
            if (r.done) {
                return {'done':true};
            }
            this._i += 1;
            return {'done':false, 'value':[this._i, r.value]};
        };
        return ans;
    }
    return ρσ_enumerate(Object.keys(iterable));
};
if (!ρσ_enumerate.__argnames__) Object.defineProperties(ρσ_enumerate, {
    __argnames__ : {value: ["iterable"]}
});

function ρσ_reversed(iterable) {
    var ans;
    if (ρσ_arraylike(iterable)) {
        ans = {"_i": iterable.length};
        ans["next"] = function () {
            this._i -= 1;
            if (this._i > -1) {
                return {'done':false, 'value':iterable[this._i]};
            }
            return {'done':true};
        };
        ans[ρσ_iterator_symbol] = function () {
            return this;
        };
        return ans;
    }
    throw new TypeError("reversed() can only be called on arrays or strings");
};
if (!ρσ_reversed.__argnames__) Object.defineProperties(ρσ_reversed, {
    __argnames__ : {value: ["iterable"]}
});

function ρσ_iter(iterable) {
    var ans;
    if (typeof iterable[ρσ_iterator_symbol] === "function") {
        return (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[ρσ_iterator_symbol]();
    }
    if (ρσ_arraylike(iterable)) {
        ans = {"_i":-1};
        ans[ρσ_iterator_symbol] = function () {
            return this;
        };
        ans["next"] = function () {
            this._i += 1;
            if (this._i < iterable.length) {
                return {'done':false, 'value':iterable[this._i]};
            }
            return {'done':true};
        };
        return ans;
    }
    return ρσ_iter(Object.keys(iterable));
};
if (!ρσ_iter.__argnames__) Object.defineProperties(ρσ_iter, {
    __argnames__ : {value: ["iterable"]}
});

function ρσ_range_next(step, length) {
    var ρσ_unpack;
    this._i += step;
    this._idx += 1;
    if (this._idx >= length) {
        ρσ_unpack = [this.__i, -1];
        this._i = ρσ_unpack[0];
        this._idx = ρσ_unpack[1];
        return {'done':true};
    }
    return {'done':false, 'value':this._i};
};
if (!ρσ_range_next.__argnames__) Object.defineProperties(ρσ_range_next, {
    __argnames__ : {value: ["step", "length"]}
});

function ρσ_range(start, stop, step) {
    var length, ans;
    if (arguments.length <= 1) {
        stop = start || 0;
        start = 0;
    }
    step = arguments[2] || 1;
    length = Math.max(Math.ceil((stop - start) / step), 0);
    ans = {start:start, step:step, stop:stop};
    ans[ρσ_iterator_symbol] = function () {
        var it;
        it = {"_i": start - step, "_idx": -1};
        it.next = ρσ_range_next.bind(it, step, length);
        it[ρσ_iterator_symbol] = function () {
            return this;
        };
        return it;
    };
    ans.count = (function() {
        var ρσ_anonfunc = function (val) {
            if (!this._cached) {
                this._cached = list(this);
            }
            return this._cached.count(val);
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["val"]}
        });
        return ρσ_anonfunc;
    })();
    ans.index = (function() {
        var ρσ_anonfunc = function (val) {
            if (!this._cached) {
                this._cached = list(this);
            }
            return this._cached.index(val);
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["val"]}
        });
        return ρσ_anonfunc;
    })();
    if (typeof Proxy === "function") {
        ans = new Proxy(ans, (function(){
            var ρσ_d = {};
            ρσ_d["get"] = (function() {
                var ρσ_anonfunc = function (obj, prop) {
                    var iprop;
                    if (typeof prop === "string") {
                        iprop = parseInt(prop);
                        if (!isNaN(iprop)) {
                            prop = iprop;
                        }
                    }
                    if (typeof prop === "number") {
                        if (!obj._cached) {
                            obj._cached = list(obj);
                        }
                        return (ρσ_expr_temp = obj._cached)[(typeof prop === "number" && prop < 0) ? ρσ_expr_temp.length + prop : prop];
                    }
                    return obj[(typeof prop === "number" && prop < 0) ? obj.length + prop : prop];
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["obj", "prop"]}
                });
                return ρσ_anonfunc;
            })();
            return ρσ_d;
        }).call(this));
    }
    return ans;
};
if (!ρσ_range.__argnames__) Object.defineProperties(ρσ_range, {
    __argnames__ : {value: ["start", "stop", "step"]}
});

function ρσ_getattr(obj, name, defval) {
    var ret;
    try {
        ret = obj[(typeof name === "number" && name < 0) ? obj.length + name : name];
    } catch (ρσ_Exception) {
        ρσ_last_exception = ρσ_Exception;
        if (ρσ_Exception instanceof TypeError) {
            if (defval === undefined) {
                throw new AttributeError("The attribute " + name + " is not present");
            }
            return defval;
        } else {
            throw ρσ_Exception;
        }
    }
    if (ret === undefined && !(name in obj)) {
        if (defval === undefined) {
            throw new AttributeError("The attribute " + name + " is not present");
        }
        ret = defval;
    }
    return ret;
};
if (!ρσ_getattr.__argnames__) Object.defineProperties(ρσ_getattr, {
    __argnames__ : {value: ["obj", "name", "defval"]}
});

function ρσ_setattr(obj, name, value) {
    obj[(typeof name === "number" && name < 0) ? obj.length + name : name] = value;
};
if (!ρσ_setattr.__argnames__) Object.defineProperties(ρσ_setattr, {
    __argnames__ : {value: ["obj", "name", "value"]}
});

function ρσ_hasattr(obj, name) {
    return name in obj;
};
if (!ρσ_hasattr.__argnames__) Object.defineProperties(ρσ_hasattr, {
    __argnames__ : {value: ["obj", "name"]}
});

ρσ_len = function () {
    function len(obj) {
        if (ρσ_arraylike(obj)) {
            return obj.length;
        }
        if (typeof obj.__len__ === "function") {
            return obj.__len__();
        }
        if (obj instanceof Set || obj instanceof Map) {
            return obj.size;
        }
        return Object.keys(obj).length;
    };
    if (!len.__argnames__) Object.defineProperties(len, {
        __argnames__ : {value: ["obj"]}
    });

    function len5(obj) {
        if (ρσ_arraylike(obj)) {
            return obj.length;
        }
        if (typeof obj.__len__ === "function") {
            return obj.__len__();
        }
        return Object.keys(obj).length;
    };
    if (!len5.__argnames__) Object.defineProperties(len5, {
        __argnames__ : {value: ["obj"]}
    });

    return (typeof Set === "function" && typeof Map === "function") ? len : len5;
}();
function ρσ_get_module(name) {
    return ρσ_modules[(typeof name === "number" && name < 0) ? ρσ_modules.length + name : name];
};
if (!ρσ_get_module.__argnames__) Object.defineProperties(ρσ_get_module, {
    __argnames__ : {value: ["name"]}
});

function ρσ_pow(x, y, z) {
    var ans;
    ans = Math.pow(x, y);
    if (z !== undefined) {
        ans %= z;
    }
    return ans;
};
if (!ρσ_pow.__argnames__) Object.defineProperties(ρσ_pow, {
    __argnames__ : {value: ["x", "y", "z"]}
});

function ρσ_type(x) {
    return x.constructor;
};
if (!ρσ_type.__argnames__) Object.defineProperties(ρσ_type, {
    __argnames__ : {value: ["x"]}
});

function ρσ_divmod(x, y) {
    var d;
    if (y === 0) {
        throw new ZeroDivisionError("integer division or modulo by zero");
    }
    d = Math.floor(x / y);
    return [d, x - d * y];
};
if (!ρσ_divmod.__argnames__) Object.defineProperties(ρσ_divmod, {
    __argnames__ : {value: ["x", "y"]}
});

function ρσ_max() {
    var kwargs = arguments[arguments.length-1];
    if (kwargs === null || typeof kwargs !== "object" || kwargs [ρσ_kwargs_symbol] !== true) kwargs = {};
    var args = Array.prototype.slice.call(arguments, 0);
    if (kwargs !== null && typeof kwargs === "object" && kwargs [ρσ_kwargs_symbol] === true) args.pop();
    var args, x;
    if (args.length === 0) {
        if (kwargs.defval !== undefined) {
            return kwargs.defval;
        }
        throw new TypeError("expected at least one argument");
    }
    if (args.length === 1) {
        args = args[0];
    }
    if (kwargs.key) {
        args = (function() {
            var ρσ_Iter = ρσ_Iterable(args), ρσ_Result = [], x;
            for (var ρσ_Index = 0; ρσ_Index < ρσ_Iter.length; ρσ_Index++) {
                x = ρσ_Iter[ρσ_Index];
                ρσ_Result.push(kwargs.key(x));
            }
            ρσ_Result = ρσ_list_constructor(ρσ_Result);
            return ρσ_Result;
        })();
    }
    if (!Array.isArray(args)) {
        args = list(args);
    }
    if (args.length) {
        return this.apply(null, args);
    }
    if (kwargs.defval !== undefined) {
        return kwargs.defval;
    }
    throw new TypeError("expected at least one argument");
};
if (!ρσ_max.__handles_kwarg_interpolation__) Object.defineProperties(ρσ_max, {
    __handles_kwarg_interpolation__ : {value: true}
});

var abs = Math.abs, max = ρσ_max.bind(Math.max), min = ρσ_max.bind(Math.min), bool = ρσ_bool, type = ρσ_type;
var float = ρσ_float, int = ρσ_int, arraylike = ρσ_arraylike_creator(), ρσ_arraylike = arraylike;
var print = ρσ_print, id = ρσ_id, get_module = ρσ_get_module, pow = ρσ_pow, divmod = ρσ_divmod;
var dir = ρσ_dir, ord = ρσ_ord, chr = ρσ_chr, bin = ρσ_bin, hex = ρσ_hex, callable = ρσ_callable;
var enumerate = ρσ_enumerate, iter = ρσ_iter, reversed = ρσ_reversed, len = ρσ_len;
var range = ρσ_range, getattr = ρσ_getattr, setattr = ρσ_setattr, hasattr = ρσ_hasattr;function ρσ_equals(a, b) {
    var ρσ_unpack, akeys, bkeys, key;
    if (a === b) {
        return true;
    }
    if (a && typeof a.__eq__ === "function") {
        return a.__eq__(b);
    }
    if (b && typeof b.__eq__ === "function") {
        return b.__eq__(a);
    }
    if (ρσ_arraylike(a) && ρσ_arraylike(b)) {
        if ((a.length !== b.length && (typeof a.length !== "object" || ρσ_not_equals(a.length, b.length)))) {
            return false;
        }
        for (var i=0; i < a.length; i++) {
            if (!((a[(typeof i === "number" && i < 0) ? a.length + i : i] === b[(typeof i === "number" && i < 0) ? b.length + i : i] || typeof a[(typeof i === "number" && i < 0) ? a.length + i : i] === "object" && ρσ_equals(a[(typeof i === "number" && i < 0) ? a.length + i : i], b[(typeof i === "number" && i < 0) ? b.length + i : i])))) {
                return false;
            }
        }
        return true;
    }
    if (typeof a === "object" && typeof b === "object" && a !== null && b !== null && (a.constructor === Object && b.constructor === Object || Object.getPrototypeOf(a) === null && Object.getPrototypeOf(b) === null)) {
        ρσ_unpack = [Object.keys(a), Object.keys(b)];
        akeys = ρσ_unpack[0];
        bkeys = ρσ_unpack[1];
        if (akeys.length !== bkeys.length) {
            return false;
        }
        for (var j=0; j < akeys.length; j++) {
            key = akeys[(typeof j === "number" && j < 0) ? akeys.length + j : j];
            if (!((a[(typeof key === "number" && key < 0) ? a.length + key : key] === b[(typeof key === "number" && key < 0) ? b.length + key : key] || typeof a[(typeof key === "number" && key < 0) ? a.length + key : key] === "object" && ρσ_equals(a[(typeof key === "number" && key < 0) ? a.length + key : key], b[(typeof key === "number" && key < 0) ? b.length + key : key])))) {
                return false;
            }
        }
        return true;
    }
    return false;
};
if (!ρσ_equals.__argnames__) Object.defineProperties(ρσ_equals, {
    __argnames__ : {value: ["a", "b"]}
});

function ρσ_not_equals(a, b) {
    if (a === b) {
        return false;
    }
    if (a && typeof a.__ne__ === "function") {
        return a.__ne__(b);
    }
    if (b && typeof b.__ne__ === "function") {
        return b.__ne__(a);
    }
    return !ρσ_equals(a, b);
};
if (!ρσ_not_equals.__argnames__) Object.defineProperties(ρσ_not_equals, {
    __argnames__ : {value: ["a", "b"]}
});

var equals = ρσ_equals;
function ρσ_list_extend(iterable) {
    var start, iterator, result;
    if (Array.isArray(iterable) || typeof iterable === "string") {
        start = this.length;
        this.length += iterable.length;
        for (var i = 0; i < iterable.length; i++) {
            (ρσ_expr_temp = this)[ρσ_bound_index(start + i, ρσ_expr_temp)] = iterable[(typeof i === "number" && i < 0) ? iterable.length + i : i];
        }
    } else {
        iterator = (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[ρσ_iterator_symbol]();
        result = iterator.next();
        while (!result.done) {
            this.push(result.value);
            result = iterator.next();
        }
    }
};
if (!ρσ_list_extend.__argnames__) Object.defineProperties(ρσ_list_extend, {
    __argnames__ : {value: ["iterable"]}
});

function ρσ_list_index(val, start, stop) {
    var idx;
    start = start || 0;
    if (start < 0) {
        start = this.length + start;
    }
    if (start < 0) {
        throw new ValueError(val + " is not in list");
    }
    if (stop === undefined) {
        idx = this.indexOf(val, start);
        if (idx === -1) {
            throw new ValueError(val + " is not in list");
        }
        return idx;
    }
    if (stop < 0) {
        stop = this.length + stop;
    }
    for (var i = start; i < stop; i++) {
        if (((ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] === val || typeof (ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] === "object" && ρσ_equals((ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i], val))) {
            return i;
        }
    }
    throw new ValueError(val + " is not in list");
};
if (!ρσ_list_index.__argnames__) Object.defineProperties(ρσ_list_index, {
    __argnames__ : {value: ["val", "start", "stop"]}
});

function ρσ_list_pop(index) {
    var ans;
    if (this.length === 0) {
        throw new IndexError("list is empty");
    }
    if (index === undefined) {
        index = -1;
    }
    ans = this.splice(index, 1);
    if (!ans.length) {
        throw new IndexError("pop index out of range");
    }
    return ans[0];
};
if (!ρσ_list_pop.__argnames__) Object.defineProperties(ρσ_list_pop, {
    __argnames__ : {value: ["index"]}
});

function ρσ_list_remove(value) {
    var idx;
    idx = this.indexOf(value);
    if (idx === -1) {
        throw new ValueError(value + " not in list");
    }
    this.splice(idx, 1);
};
if (!ρσ_list_remove.__argnames__) Object.defineProperties(ρσ_list_remove, {
    __argnames__ : {value: ["value"]}
});

function ρσ_list_to_string() {
    return "[" + this.join(", ") + "]";
};

function ρσ_list_insert(index, val) {
    if (index < 0) {
        index += this.length;
    }
    index = min(this.length, max(index, 0));
    if (index === 0) {
        this.unshift(val);
        return;
    }
    for (var i = this.length; i > index; i--) {
        (ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] = (ρσ_expr_temp = this)[ρσ_bound_index(i - 1, ρσ_expr_temp)];
    }
    (ρσ_expr_temp = this)[(typeof index === "number" && index < 0) ? ρσ_expr_temp.length + index : index] = val;
};
if (!ρσ_list_insert.__argnames__) Object.defineProperties(ρσ_list_insert, {
    __argnames__ : {value: ["index", "val"]}
});

function ρσ_list_copy() {
    return ρσ_list_constructor(this);
};

function ρσ_list_clear() {
    this.length = 0;
};

function ρσ_list_as_array() {
    return Array.prototype.slice.call(this);
};

function ρσ_list_count(value) {
    return this.reduce((function() {
        var ρσ_anonfunc = function (n, val) {
            return n + (val === value);
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["n", "val"]}
        });
        return ρσ_anonfunc;
    })(), 0);
};
if (!ρσ_list_count.__argnames__) Object.defineProperties(ρσ_list_count, {
    __argnames__ : {value: ["value"]}
});

function ρσ_list_sort_key(value) {
    var t;
    t = typeof value;
    if (t === "string" || t === "number") {
        return value;
    }
    return value.toString();
};
if (!ρσ_list_sort_key.__argnames__) Object.defineProperties(ρσ_list_sort_key, {
    __argnames__ : {value: ["value"]}
});

function ρσ_list_sort_cmp(a, b, ap, bp) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return ap - bp;
};
if (!ρσ_list_sort_cmp.__argnames__) Object.defineProperties(ρσ_list_sort_cmp, {
    __argnames__ : {value: ["a", "b", "ap", "bp"]}
});

function ρσ_list_sort() {
    var key = (arguments[0] === undefined || ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? ρσ_list_sort.__defaults__.key : arguments[0];
    var reverse = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? ρσ_list_sort.__defaults__.reverse : arguments[1];
    var ρσ_kwargs_obj = arguments[arguments.length-1];
    if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "key")){
        key = ρσ_kwargs_obj.key;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "reverse")){
        reverse = ρσ_kwargs_obj.reverse;
    }
    var mult, keymap, posmap, k;
    key = key || ρσ_list_sort_key;
    mult = (reverse) ? -1 : 1;
    keymap = dict();
    posmap = dict();
    for (var i=0; i < this.length; i++) {
        k = (ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i];
        keymap.set(k, key(k));
        posmap.set(k, i);
    }
    this.sort((function() {
        var ρσ_anonfunc = function (a, b) {
            return mult * ρσ_list_sort_cmp(keymap.get(a), keymap.get(b), posmap.get(a), posmap.get(b));
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["a", "b"]}
        });
        return ρσ_anonfunc;
    })());
};
if (!ρσ_list_sort.__defaults__) Object.defineProperties(ρσ_list_sort, {
    __defaults__ : {value: {key:null, reverse:false}},
    __handles_kwarg_interpolation__ : {value: true},
    __argnames__ : {value: ["key", "reverse"]}
});

function ρσ_list_concat() {
    var ans;
    ans = Array.prototype.concat.apply(this, arguments);
    ρσ_list_decorate(ans);
    return ans;
};

function ρσ_list_slice() {
    var ans;
    ans = Array.prototype.slice.apply(this, arguments);
    ρσ_list_decorate(ans);
    return ans;
};

function ρσ_list_iterator(value) {
    var self;
    self = this;
    return (function(){
        var ρσ_d = {};
        ρσ_d["_i"] = -1;
        ρσ_d["_list"] = self;
        ρσ_d["next"] = function () {
            this._i += 1;
            if (this._i >= this._list.length) {
                return (function(){
                    var ρσ_d = {};
                    ρσ_d["done"] = true;
                    return ρσ_d;
                }).call(this);
            }
            return (function(){
                var ρσ_d = {};
                ρσ_d["done"] = false;
                ρσ_d["value"] = (ρσ_expr_temp = this._list)[ρσ_bound_index(this._i, ρσ_expr_temp)];
                return ρσ_d;
            }).call(this);
        };
        return ρσ_d;
    }).call(this);
};
if (!ρσ_list_iterator.__argnames__) Object.defineProperties(ρσ_list_iterator, {
    __argnames__ : {value: ["value"]}
});

function ρσ_list_len() {
    return this.length;
};

function ρσ_list_contains(val) {
    for (var i = 0; i < this.length; i++) {
        if (((ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] === val || typeof (ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] === "object" && ρσ_equals((ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i], val))) {
            return true;
        }
    }
    return false;
};
if (!ρσ_list_contains.__argnames__) Object.defineProperties(ρσ_list_contains, {
    __argnames__ : {value: ["val"]}
});

function ρσ_list_eq(other) {
    if (!ρσ_arraylike(other)) {
        return false;
    }
    if ((this.length !== other.length && (typeof this.length !== "object" || ρσ_not_equals(this.length, other.length)))) {
        return false;
    }
    for (var i = 0; i < this.length; i++) {
        if (!(((ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] === other[(typeof i === "number" && i < 0) ? other.length + i : i] || typeof (ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] === "object" && ρσ_equals((ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i], other[(typeof i === "number" && i < 0) ? other.length + i : i])))) {
            return false;
        }
    }
    return true;
};
if (!ρσ_list_eq.__argnames__) Object.defineProperties(ρσ_list_eq, {
    __argnames__ : {value: ["other"]}
});

function ρσ_list_decorate(ans) {
    ans.append = Array.prototype.push;
    ans.toString = ρσ_list_to_string;
    ans.inspect = ρσ_list_to_string;
    ans.extend = ρσ_list_extend;
    ans.index = ρσ_list_index;
    ans.pypop = ρσ_list_pop;
    ans.remove = ρσ_list_remove;
    ans.insert = ρσ_list_insert;
    ans.copy = ρσ_list_copy;
    ans.clear = ρσ_list_clear;
    ans.count = ρσ_list_count;
    ans.concat = ρσ_list_concat;
    ans.pysort = ρσ_list_sort;
    ans.slice = ρσ_list_slice;
    ans.as_array = ρσ_list_as_array;
    ans.__len__ = ρσ_list_len;
    ans.__contains__ = ρσ_list_contains;
    ans.__eq__ = ρσ_list_eq;
    ans.constructor = ρσ_list_constructor;
    if (typeof ans[ρσ_iterator_symbol] !== "function") {
        ans[ρσ_iterator_symbol] = ρσ_list_iterator;
    }
    return ans;
};
if (!ρσ_list_decorate.__argnames__) Object.defineProperties(ρσ_list_decorate, {
    __argnames__ : {value: ["ans"]}
});

function ρσ_list_constructor(iterable) {
    var ans, iterator, result;
    if (iterable === undefined) {
        ans = [];
    } else if (ρσ_arraylike(iterable)) {
        ans = new Array(iterable.length);
        for (var i = 0; i < iterable.length; i++) {
            ans[(typeof i === "number" && i < 0) ? ans.length + i : i] = iterable[(typeof i === "number" && i < 0) ? iterable.length + i : i];
        }
    } else if (typeof iterable[ρσ_iterator_symbol] === "function") {
        iterator = (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[ρσ_iterator_symbol]();
        ans = ρσ_list_decorate([]);
        result = iterator.next();
        while (!result.done) {
            ans.push(result.value);
            result = iterator.next();
        }
    } else if (typeof iterable === "number") {
        ans = new Array(iterable);
    } else {
        ans = Object.keys(iterable);
    }
    return ρσ_list_decorate(ans);
};
if (!ρσ_list_constructor.__argnames__) Object.defineProperties(ρσ_list_constructor, {
    __argnames__ : {value: ["iterable"]}
});

ρσ_list_constructor.__name__ = "list";
var list = ρσ_list_constructor, list_wrap = ρσ_list_decorate;
function sorted() {
    var iterable = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
    var key = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? sorted.__defaults__.key : arguments[1];
    var reverse = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? sorted.__defaults__.reverse : arguments[2];
    var ρσ_kwargs_obj = arguments[arguments.length-1];
    if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "key")){
        key = ρσ_kwargs_obj.key;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "reverse")){
        reverse = ρσ_kwargs_obj.reverse;
    }
    var ans;
    ans = ρσ_list_constructor(iterable);
    ans.pysort(key, reverse);
    return ans;
};
if (!sorted.__defaults__) Object.defineProperties(sorted, {
    __defaults__ : {value: {key:null, reverse:false}},
    __handles_kwarg_interpolation__ : {value: true},
    __argnames__ : {value: ["iterable", "key", "reverse"]}
});

var ρσ_global_object_id = 0, ρσ_set_implementation;
function ρσ_set_keyfor(x) {
    var t, ans;
    t = typeof x;
    if (t === "string" || t === "number" || t === "boolean") {
        return "_" + t[0] + x;
    }
    if (x === null) {
        return "__!@#$0";
    }
    ans = x.ρσ_hash_key_prop;
    if (ans === undefined) {
        ans = "_!@#$" + (++ρσ_global_object_id);
        Object.defineProperty(x, "ρσ_hash_key_prop", (function(){
            var ρσ_d = {};
            ρσ_d["value"] = ans;
            return ρσ_d;
        }).call(this));
    }
    return ans;
};
if (!ρσ_set_keyfor.__argnames__) Object.defineProperties(ρσ_set_keyfor, {
    __argnames__ : {value: ["x"]}
});

function ρσ_set_polyfill() {
    this._store = {};
    this.size = 0;
};

ρσ_set_polyfill.prototype.add = (function() {
    var ρσ_anonfunc = function (x) {
        var key;
        key = ρσ_set_keyfor(x);
        if (!Object.prototype.hasOwnProperty.call(this._store, key)) {
            this.size += 1;
            (ρσ_expr_temp = this._store)[(typeof key === "number" && key < 0) ? ρσ_expr_temp.length + key : key] = x;
        }
        return this;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set_polyfill.prototype.clear = (function() {
    var ρσ_anonfunc = function (x) {
        this._store = {};
        this.size = 0;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set_polyfill.prototype.delete = (function() {
    var ρσ_anonfunc = function (x) {
        var key;
        key = ρσ_set_keyfor(x);
        if (Object.prototype.hasOwnProperty.call(this._store, key)) {
            this.size -= 1;
            delete this._store[key];
            return true;
        }
        return false;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set_polyfill.prototype.has = (function() {
    var ρσ_anonfunc = function (x) {
        return Object.prototype.hasOwnProperty.call(this._store, ρσ_set_keyfor(x));
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set_polyfill.prototype.values = (function() {
    var ρσ_anonfunc = function (x) {
        var ans;
        ans = {'_keys': Object.keys(this._store), '_i':-1, '_s':this._store};
        ans[ρσ_iterator_symbol] = function () {
            return this;
        };
        ans["next"] = function () {
            this._i += 1;
            if (this._i >= this._keys.length) {
                return {'done': true};
            }
            return {'done':false, 'value':this._s[this._keys[this._i]]};
        };
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
if (typeof Set !== "function" || typeof Set.prototype.delete !== "function") {
    ρσ_set_implementation = ρσ_set_polyfill;
} else {
    ρσ_set_implementation = Set;
}
function ρσ_set(iterable) {
    var ans, s, iterator, result, keys;
    if (this instanceof ρσ_set) {
        this.jsset = new ρσ_set_implementation;
        ans = this;
        if (iterable === undefined) {
            return ans;
        }
        s = ans.jsset;
        if (ρσ_arraylike(iterable)) {
            for (var i = 0; i < iterable.length; i++) {
                s.add(iterable[(typeof i === "number" && i < 0) ? iterable.length + i : i]);
            }
        } else if (typeof iterable[ρσ_iterator_symbol] === "function") {
            iterator = (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[ρσ_iterator_symbol]();
            result = iterator.next();
            while (!result.done) {
                s.add(result.value);
                result = iterator.next();
            }
        } else {
            keys = Object.keys(iterable);
            for (var j=0; j < keys.length; j++) {
                s.add(keys[(typeof j === "number" && j < 0) ? keys.length + j : j]);
            }
        }
        return ans;
    } else {
        return new ρσ_set(iterable);
    }
};
if (!ρσ_set.__argnames__) Object.defineProperties(ρσ_set, {
    __argnames__ : {value: ["iterable"]}
});

ρσ_set.prototype.__name__ = "set";
Object.defineProperties(ρσ_set.prototype, (function(){
    var ρσ_d = {};
    ρσ_d["length"] = (function(){
        var ρσ_d = {};
        ρσ_d["get"] = function () {
            return this.jsset.size;
        };
        return ρσ_d;
    }).call(this);
    ρσ_d["size"] = (function(){
        var ρσ_d = {};
        ρσ_d["get"] = function () {
            return this.jsset.size;
        };
        return ρσ_d;
    }).call(this);
    return ρσ_d;
}).call(this));
ρσ_set.prototype.__len__ = function () {
    return this.jsset.size;
};
ρσ_set.prototype.has = ρσ_set.prototype.__contains__ = (function() {
    var ρσ_anonfunc = function (x) {
        return this.jsset.has(x);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.add = (function() {
    var ρσ_anonfunc = function (x) {
        this.jsset.add(x);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.clear = function () {
    this.jsset.clear();
};
ρσ_set.prototype.copy = function () {
    return ρσ_set(this);
};
ρσ_set.prototype.discard = (function() {
    var ρσ_anonfunc = function (x) {
        this.jsset.delete(x);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype[ρσ_iterator_symbol] = function () {
    return this.jsset.values();
};
ρσ_set.prototype.difference = function () {
    var ans, s, iterator, r, x, has;
    ans = new ρσ_set;
    s = ans.jsset;
    iterator = this.jsset.values();
    r = iterator.next();
    while (!r.done) {
        x = r.value;
        has = false;
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i].has(x)) {
                has = true;
                break;
            }
        }
        if (!has) {
            s.add(x);
        }
        r = iterator.next();
    }
    return ans;
};
ρσ_set.prototype.difference_update = function () {
    var s, remove, iterator, r, x;
    s = this.jsset;
    remove = [];
    iterator = s.values();
    r = iterator.next();
    while (!r.done) {
        x = r.value;
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i].has(x)) {
                remove.push(x);
                break;
            }
        }
        r = iterator.next();
    }
    for (var j = 0; j < remove.length; j++) {
        s.delete(remove[(typeof j === "number" && j < 0) ? remove.length + j : j]);
    }
};
ρσ_set.prototype.intersection = function () {
    var ans, s, iterator, r, x, has;
    ans = new ρσ_set;
    s = ans.jsset;
    iterator = this.jsset.values();
    r = iterator.next();
    while (!r.done) {
        x = r.value;
        has = true;
        for (var i = 0; i < arguments.length; i++) {
            if (!arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i].has(x)) {
                has = false;
                break;
            }
        }
        if (has) {
            s.add(x);
        }
        r = iterator.next();
    }
    return ans;
};
ρσ_set.prototype.intersection_update = function () {
    var s, remove, iterator, r, x;
    s = this.jsset;
    remove = [];
    iterator = s.values();
    r = iterator.next();
    while (!r.done) {
        x = r.value;
        for (var i = 0; i < arguments.length; i++) {
            if (!arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i].has(x)) {
                remove.push(x);
                break;
            }
        }
        r = iterator.next();
    }
    for (var j = 0; j < remove.length; j++) {
        s.delete(remove[(typeof j === "number" && j < 0) ? remove.length + j : j]);
    }
};
ρσ_set.prototype.isdisjoint = (function() {
    var ρσ_anonfunc = function (other) {
        var iterator, r, x;
        iterator = this.jsset.values();
        r = iterator.next();
        while (!r.done) {
            x = r.value;
            if (other.has(x)) {
                return false;
            }
            r = iterator.next();
        }
        return true;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.issubset = (function() {
    var ρσ_anonfunc = function (other) {
        var iterator, r, x;
        iterator = this.jsset.values();
        r = iterator.next();
        while (!r.done) {
            x = r.value;
            if (!other.has(x)) {
                return false;
            }
            r = iterator.next();
        }
        return true;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.issuperset = (function() {
    var ρσ_anonfunc = function (other) {
        var s, iterator, r, x;
        s = this.jsset;
        iterator = other.jsset.values();
        r = iterator.next();
        while (!r.done) {
            x = r.value;
            if (!s.has(x)) {
                return false;
            }
            r = iterator.next();
        }
        return true;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.pop = function () {
    var iterator, r;
    iterator = this.jsset.values();
    r = iterator.next();
    if (r.done) {
        throw new KeyError("pop from an empty set");
    }
    this.jsset.delete(r.value);
    return r.value;
};
ρσ_set.prototype.remove = (function() {
    var ρσ_anonfunc = function (x) {
        if (!this.jsset.delete(x)) {
            throw new KeyError(x.toString());
        }
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.symmetric_difference = (function() {
    var ρσ_anonfunc = function (other) {
        return this.union(other).difference(this.intersection(other));
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.symmetric_difference_update = (function() {
    var ρσ_anonfunc = function (other) {
        var common;
        common = this.intersection(other);
        this.update(other);
        this.difference_update(common);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.union = function () {
    var ans;
    ans = ρσ_set(this);
    ans.update.apply(ans, arguments);
    return ans;
};
ρσ_set.prototype.update = function () {
    var s, iterator, r;
    s = this.jsset;
    for (var i=0; i < arguments.length; i++) {
        iterator = arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i][ρσ_iterator_symbol]();
        r = iterator.next();
        while (!r.done) {
            s.add(r.value);
            r = iterator.next();
        }
    }
};
ρσ_set.prototype.toString = ρσ_set.prototype.__repr__ = ρσ_set.prototype.__str__ = ρσ_set.prototype.inspect = function () {
    return "{" + list(this).join(", ") + "}";
};
ρσ_set.prototype.__eq__ = (function() {
    var ρσ_anonfunc = function (other) {
        var iterator, r;
        if (!other instanceof this.constructor) {
            return false;
        }
        if (other.size !== this.size) {
            return false;
        }
        if (other.size === 0) {
            return true;
        }
        iterator = other[ρσ_iterator_symbol]();
        r = iterator.next();
        while (!r.done) {
            if (!this.has(r.value)) {
                return false;
            }
            r = iterator.next();
        }
        return true;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
function ρσ_set_wrap(x) {
    var ans;
    ans = new ρσ_set;
    ans.jsset = x;
    return ans;
};
if (!ρσ_set_wrap.__argnames__) Object.defineProperties(ρσ_set_wrap, {
    __argnames__ : {value: ["x"]}
});

var set = ρσ_set, set_wrap = ρσ_set_wrap;
var ρσ_dict_implementation;
function ρσ_dict_polyfill() {
    this._store = {};
    this.size = 0;
};

ρσ_dict_polyfill.prototype.set = (function() {
    var ρσ_anonfunc = function (x, value) {
        var key;
        key = ρσ_set_keyfor(x);
        if (!Object.prototype.hasOwnProperty.call(this._store, key)) {
            this.size += 1;
        }
        (ρσ_expr_temp = this._store)[(typeof key === "number" && key < 0) ? ρσ_expr_temp.length + key : key] = [x, value];
        return this;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x", "value"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict_polyfill.prototype.clear = (function() {
    var ρσ_anonfunc = function (x) {
        this._store = {};
        this.size = 0;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict_polyfill.prototype.delete = (function() {
    var ρσ_anonfunc = function (x) {
        var key;
        key = ρσ_set_keyfor(x);
        if (Object.prototype.hasOwnProperty.call(this._store, key)) {
            this.size -= 1;
            delete this._store[key];
            return true;
        }
        return false;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict_polyfill.prototype.has = (function() {
    var ρσ_anonfunc = function (x) {
        return Object.prototype.hasOwnProperty.call(this._store, ρσ_set_keyfor(x));
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict_polyfill.prototype.get = (function() {
    var ρσ_anonfunc = function (x) {
        try {
            return (ρσ_expr_temp = this._store)[ρσ_bound_index(ρσ_set_keyfor(x), ρσ_expr_temp)][1];
        } catch (ρσ_Exception) {
            ρσ_last_exception = ρσ_Exception;
            if (ρσ_Exception instanceof TypeError) {
                return undefined;
            } else {
                throw ρσ_Exception;
            }
        }
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict_polyfill.prototype.values = (function() {
    var ρσ_anonfunc = function (x) {
        var ans;
        ans = {'_keys': Object.keys(this._store), '_i':-1, '_s':this._store};
        ans[ρσ_iterator_symbol] = function () {
            return this;
        };
        ans["next"] = function () {
            this._i += 1;
            if (this._i >= this._keys.length) {
                return {'done': true};
            }
            return {'done':false, 'value':this._s[this._keys[this._i]][1]};
        };
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict_polyfill.prototype.keys = (function() {
    var ρσ_anonfunc = function (x) {
        var ans;
        ans = {'_keys': Object.keys(this._store), '_i':-1, '_s':this._store};
        ans[ρσ_iterator_symbol] = function () {
            return this;
        };
        ans["next"] = function () {
            this._i += 1;
            if (this._i >= this._keys.length) {
                return {'done': true};
            }
            return {'done':false, 'value':this._s[this._keys[this._i]][0]};
        };
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict_polyfill.prototype.entries = (function() {
    var ρσ_anonfunc = function (x) {
        var ans;
        ans = {'_keys': Object.keys(this._store), '_i':-1, '_s':this._store};
        ans[ρσ_iterator_symbol] = function () {
            return this;
        };
        ans["next"] = function () {
            this._i += 1;
            if (this._i >= this._keys.length) {
                return {'done': true};
            }
            return {'done':false, 'value':this._s[this._keys[this._i]]};
        };
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
if (typeof Map !== "function" || typeof Map.prototype.delete !== "function") {
    ρσ_dict_implementation = ρσ_dict_polyfill;
} else {
    ρσ_dict_implementation = Map;
}
function ρσ_dict() {
    var iterable = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
    var kw = arguments[arguments.length-1];
    if (kw === null || typeof kw !== "object" || kw [ρσ_kwargs_symbol] !== true) kw = {};
    if (this instanceof ρσ_dict) {
        this.jsmap = new ρσ_dict_implementation;
        if (iterable !== undefined) {
            this.update(iterable);
        }
        this.update(kw);
        return this;
    } else {
        return ρσ_interpolate_kwargs_constructor.call(Object.create(ρσ_dict.prototype), false, ρσ_dict, [iterable].concat([ρσ_desugar_kwargs(kw)]));
    }
};
if (!ρσ_dict.__handles_kwarg_interpolation__) Object.defineProperties(ρσ_dict, {
    __handles_kwarg_interpolation__ : {value: true},
    __argnames__ : {value: ["iterable"]}
});

ρσ_dict.prototype.__name__ = "dict";
Object.defineProperties(ρσ_dict.prototype, (function(){
    var ρσ_d = {};
    ρσ_d["length"] = (function(){
        var ρσ_d = {};
        ρσ_d["get"] = function () {
            return this.jsmap.size;
        };
        return ρσ_d;
    }).call(this);
    ρσ_d["size"] = (function(){
        var ρσ_d = {};
        ρσ_d["get"] = function () {
            return this.jsmap.size;
        };
        return ρσ_d;
    }).call(this);
    return ρσ_d;
}).call(this));
ρσ_dict.prototype.__len__ = function () {
    return this.jsmap.size;
};
ρσ_dict.prototype.has = ρσ_dict.prototype.__contains__ = (function() {
    var ρσ_anonfunc = function (x) {
        return this.jsmap.has(x);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.set = ρσ_dict.prototype.__setitem__ = (function() {
    var ρσ_anonfunc = function (key, value) {
        this.jsmap.set(key, value);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["key", "value"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.__delitem__ = (function() {
    var ρσ_anonfunc = function (key) {
        this.jsmap.delete(key);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["key"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.clear = function () {
    this.jsmap.clear();
};
ρσ_dict.prototype.copy = function () {
    return ρσ_dict(this);
};
ρσ_dict.prototype.keys = function () {
    return this.jsmap.keys();
};
ρσ_dict.prototype.values = function () {
    return this.jsmap.values();
};
ρσ_dict.prototype.items = ρσ_dict.prototype.entries = function () {
    return this.jsmap.entries();
};
ρσ_dict.prototype[ρσ_iterator_symbol] = function () {
    return this.jsmap.keys();
};
ρσ_dict.prototype.__getitem__ = (function() {
    var ρσ_anonfunc = function (key) {
        var ans;
        ans = this.jsmap.get(key);
        if (ans === undefined && !this.jsmap.has(key)) {
            throw new KeyError(key + "");
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["key"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.get = (function() {
    var ρσ_anonfunc = function (key, defval) {
        var ans;
        ans = this.jsmap.get(key);
        if (ans === undefined && !this.jsmap.has(key)) {
            return (defval === undefined) ? null : defval;
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["key", "defval"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.set_default = (function() {
    var ρσ_anonfunc = function (key, defval) {
        var j;
        j = this.jsmap;
        if (!j.has(key)) {
            j.set(key, defval);
            return defval;
        }
        return j.get(key);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["key", "defval"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.fromkeys = ρσ_dict.prototype.fromkeys = (function() {
    var ρσ_anonfunc = function () {
        var iterable = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
        var value = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? ρσ_anonfunc.__defaults__.value : arguments[1];
        var ρσ_kwargs_obj = arguments[arguments.length-1];
        if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "value")){
            value = ρσ_kwargs_obj.value;
        }
        var ans, iterator, r;
        ans = ρσ_dict();
        iterator = iter(iterable);
        r = iterator.next();
        while (!r.done) {
            ans.set(r.value, value);
            r = iterator.next();
        }
        return ans;
    };
    if (!ρσ_anonfunc.__defaults__) Object.defineProperties(ρσ_anonfunc, {
        __defaults__ : {value: {value:null}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["iterable", "value"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.pop = (function() {
    var ρσ_anonfunc = function (key, defval) {
        var ans;
        ans = this.jsmap.get(key);
        if (ans === undefined && !this.jsmap.has(key)) {
            if (defval === undefined) {
                throw new KeyError(key);
            }
            return defval;
        }
        this.jsmap.delete(key);
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["key", "defval"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.popitem = function () {
    var r;
    r = this.jsmap.entries().next();
    if (r.done) {
        throw new KeyError("dict is empty");
    }
    this.jsmap.delete(r.value[0]);
    return r.value;
};
ρσ_dict.prototype.update = function () {
    var m, iterable, iterator, result, keys;
    if (arguments.length === 0) {
        return;
    }
    m = this.jsmap;
    iterable = arguments[0];
    if (Array.isArray(iterable)) {
        for (var i = 0; i < iterable.length; i++) {
            m.set(iterable[(typeof i === "number" && i < 0) ? iterable.length + i : i][0], iterable[(typeof i === "number" && i < 0) ? iterable.length + i : i][1]);
        }
    } else if (iterable instanceof ρσ_dict) {
        iterator = iterable.items();
        result = iterator.next();
        while (!result.done) {
            m.set(result.value[0], result.value[1]);
            result = iterator.next();
        }
    } else if (typeof Map === "function" && iterable instanceof Map) {
        iterator = iterable.entries();
        result = iterator.next();
        while (!result.done) {
            m.set(result.value[0], result.value[1]);
            result = iterator.next();
        }
    } else if (typeof iterable[ρσ_iterator_symbol] === "function") {
        iterator = iterable[ρσ_iterator_symbol]();
        result = iterator.next();
        while (!result.done) {
            m.set(result.value[0], result.value[1]);
            result = iterator.next();
        }
    } else {
        keys = Object.keys(iterable);
        for (var j=0; j < keys.length; j++) {
            if (keys[(typeof j === "number" && j < 0) ? keys.length + j : j] !== ρσ_iterator_symbol) {
                m.set(keys[(typeof j === "number" && j < 0) ? keys.length + j : j], iterable[ρσ_bound_index(keys[(typeof j === "number" && j < 0) ? keys.length + j : j], iterable)]);
            }
        }
    }
    if (arguments.length > 1) {
        ρσ_dict.prototype.update.call(this, arguments[1]);
    }
};
ρσ_dict.prototype.toString = ρσ_dict.prototype.inspect = ρσ_dict.prototype.__str__ = ρσ_dict.prototype.__repr__ = function () {
    var entries, iterator, r;
    entries = [];
    iterator = this.jsmap.entries();
    r = iterator.next();
    while (!r.done) {
        entries.push(ρσ_repr(r.value[0]) + ": " + ρσ_repr(r.value[1]));
        r = iterator.next();
    }
    return "{" + entries.join(", ") + "}";
};
ρσ_dict.prototype.__eq__ = (function() {
    var ρσ_anonfunc = function (other) {
        var iterator, r, x;
        if (!(other instanceof this.constructor)) {
            return false;
        }
        if (other.size !== this.size) {
            return false;
        }
        if (other.size === 0) {
            return true;
        }
        iterator = other.items();
        r = iterator.next();
        while (!r.done) {
            x = this.jsmap.get(r.value[0]);
            if (x === undefined && !this.jsmap.has(r.value[0]) || x !== r.value[1]) {
                return false;
            }
            r = iterator.next();
        }
        return true;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.as_object = (function() {
    var ρσ_anonfunc = function (other) {
        var ans, iterator, r;
        ans = {};
        iterator = this.jsmap.entries();
        r = iterator.next();
        while (!r.done) {
            ans[ρσ_bound_index(r.value[0], ans)] = r.value[1];
            r = iterator.next();
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
function ρσ_dict_wrap(x) {
    var ans;
    ans = new ρσ_dict;
    ans.jsmap = x;
    return ans;
};
if (!ρσ_dict_wrap.__argnames__) Object.defineProperties(ρσ_dict_wrap, {
    __argnames__ : {value: ["x"]}
});

var dict = ρσ_dict, dict_wrap = ρσ_dict_wrap;// }}}
var NameError;
NameError = ReferenceError;
function Exception() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    Exception.prototype.__init__.apply(this, arguments);
}
ρσ_extends(Exception, Error);
Exception.prototype.__init__ = function __init__(message) {
    var self = this;
    self.message = message;
    self.stack = (new Error).stack;
    self.name = self.constructor.name;
};
if (!Exception.prototype.__init__.__argnames__) Object.defineProperties(Exception.prototype.__init__, {
    __argnames__ : {value: ["message"]}
});
Exception.__argnames__ = Exception.prototype.__init__.__argnames__;
Exception.__handles_kwarg_interpolation__ = Exception.prototype.__init__.__handles_kwarg_interpolation__;
Exception.prototype.__repr__ = function __repr__() {
    var self = this;
    return self.name + ": " + self.message;
};
Exception.prototype.__str__ = function __str__ () {
    if(Error.prototype.__str__) return Error.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(Exception.prototype, "__bases__", {value: [Error]});

function AttributeError() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    AttributeError.prototype.__init__.apply(this, arguments);
}
ρσ_extends(AttributeError, Exception);
AttributeError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
AttributeError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
AttributeError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(AttributeError.prototype, "__bases__", {value: [Exception]});


function IndexError() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    IndexError.prototype.__init__.apply(this, arguments);
}
ρσ_extends(IndexError, Exception);
IndexError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
IndexError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
IndexError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(IndexError.prototype, "__bases__", {value: [Exception]});


function KeyError() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    KeyError.prototype.__init__.apply(this, arguments);
}
ρσ_extends(KeyError, Exception);
KeyError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
KeyError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
KeyError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(KeyError.prototype, "__bases__", {value: [Exception]});


function ValueError() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    ValueError.prototype.__init__.apply(this, arguments);
}
ρσ_extends(ValueError, Exception);
ValueError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
ValueError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
ValueError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(ValueError.prototype, "__bases__", {value: [Exception]});


function UnicodeDecodeError() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    UnicodeDecodeError.prototype.__init__.apply(this, arguments);
}
ρσ_extends(UnicodeDecodeError, Exception);
UnicodeDecodeError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
UnicodeDecodeError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
UnicodeDecodeError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(UnicodeDecodeError.prototype, "__bases__", {value: [Exception]});


function AssertionError() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    AssertionError.prototype.__init__.apply(this, arguments);
}
ρσ_extends(AssertionError, Exception);
AssertionError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
AssertionError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
AssertionError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(AssertionError.prototype, "__bases__", {value: [Exception]});


function ZeroDivisionError() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    ZeroDivisionError.prototype.__init__.apply(this, arguments);
}
ρσ_extends(ZeroDivisionError, Exception);
ZeroDivisionError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
ZeroDivisionError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
ZeroDivisionError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(ZeroDivisionError.prototype, "__bases__", {value: [Exception]});

var ρσ_in, ρσ_desugar_kwargs, ρσ_exists;
function ρσ_eslice(arr, step, start, end) {
    var is_string;
    if (typeof arr === "string" || arr instanceof String) {
        is_string = true;
        arr = arr.split("");
    }
    if (step < 0) {
        step = -step;
        arr = arr.slice().reverse();
        if (typeof start !== "undefined") {
            start = arr.length - start - 1;
        }
        if (typeof end !== "undefined") {
            end = arr.length - end - 1;
        }
    }
    if (typeof start === "undefined") {
        start = 0;
    }
    if (typeof end === "undefined") {
        end = arr.length;
    }
    arr = arr.slice(start, end).filter((function() {
        var ρσ_anonfunc = function (e, i) {
            return i % step === 0;
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["e", "i"]}
        });
        return ρσ_anonfunc;
    })());
    if (is_string) {
        arr = arr.join("");
    }
    return arr;
};
if (!ρσ_eslice.__argnames__) Object.defineProperties(ρσ_eslice, {
    __argnames__ : {value: ["arr", "step", "start", "end"]}
});

function ρσ_delslice(arr, step, start, end) {
    var is_string, ρσ_unpack, indices;
    if (typeof arr === "string" || arr instanceof String) {
        is_string = true;
        arr = arr.split("");
    }
    if (step < 0) {
        if (typeof start === "undefined") {
            start = arr.length;
        }
        if (typeof end === "undefined") {
            end = 0;
        }
        ρσ_unpack = [end, start, -step];
        start = ρσ_unpack[0];
        end = ρσ_unpack[1];
        step = ρσ_unpack[2];
    }
    if (typeof start === "undefined") {
        start = 0;
    }
    if (typeof end === "undefined") {
        end = arr.length;
    }
    if (step === 1) {
        arr.splice(start, end - start);
    } else {
        if (end > start) {
            indices = [];
            for (var i = start; i < end; i += step) {
                indices.push(i);
            }
            for (var i = indices.length - 1; i >= 0; i--) {
                arr.splice(indices[(typeof i === "number" && i < 0) ? indices.length + i : i], 1);
            }
        }
    }
    if (is_string) {
        arr = arr.join("");
    }
    return arr;
};
if (!ρσ_delslice.__argnames__) Object.defineProperties(ρσ_delslice, {
    __argnames__ : {value: ["arr", "step", "start", "end"]}
});

function ρσ_flatten(arr) {
    var ans, value;
    ans = ρσ_list_decorate([]);
    for (var i=0; i < arr.length; i++) {
        value = arr[(typeof i === "number" && i < 0) ? arr.length + i : i];
        if (Array.isArray(value)) {
            ans = ans.concat(ρσ_flatten(value));
        } else {
            ans.push(value);
        }
    }
    return ans;
};
if (!ρσ_flatten.__argnames__) Object.defineProperties(ρσ_flatten, {
    __argnames__ : {value: ["arr"]}
});

function ρσ_unpack_asarray(num, iterable) {
    var ans, iterator, result;
    if (ρσ_arraylike(iterable)) {
        return iterable;
    }
    ans = [];
    if (typeof iterable[ρσ_iterator_symbol] === "function") {
        iterator = (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[ρσ_iterator_symbol]();
        result = iterator.next();
        while (!result.done && ans.length < num) {
            ans.push(result.value);
            result = iterator.next();
        }
    }
    return ans;
};
if (!ρσ_unpack_asarray.__argnames__) Object.defineProperties(ρσ_unpack_asarray, {
    __argnames__ : {value: ["num", "iterable"]}
});

function ρσ_extends(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
};
if (!ρσ_extends.__argnames__) Object.defineProperties(ρσ_extends, {
    __argnames__ : {value: ["child", "parent"]}
});

ρσ_in = function () {
    if (typeof Map === "function" && typeof Set === "function") {
        return (function() {
            var ρσ_anonfunc = function (val, arr) {
                if (typeof arr === "string") {
                    return arr.indexOf(val) !== -1;
                }
                if (typeof arr.__contains__ === "function") {
                    return arr.__contains__(val);
                }
                if (arr instanceof Map || arr instanceof Set) {
                    return arr.has(val);
                }
                if (ρσ_arraylike(arr)) {
                    return ρσ_list_contains.call(arr, val);
                }
                return Object.prototype.hasOwnProperty.call(arr, val);
            };
            if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                __argnames__ : {value: ["val", "arr"]}
            });
            return ρσ_anonfunc;
        })();
    }
    return (function() {
        var ρσ_anonfunc = function (val, arr) {
            if (typeof arr === "string") {
                return arr.indexOf(val) !== -1;
            }
            if (typeof arr.__contains__ === "function") {
                return arr.__contains__(val);
            }
            if (ρσ_arraylike(arr)) {
                return ρσ_list_contains.call(arr, val);
            }
            return Object.prototype.hasOwnProperty.call(arr, val);
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["val", "arr"]}
        });
        return ρσ_anonfunc;
    })();
}();
function ρσ_Iterable(iterable) {
    var iterator, ans, result;
    if (ρσ_arraylike(iterable)) {
        return iterable;
    }
    if (typeof iterable[ρσ_iterator_symbol] === "function") {
        iterator = (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[ρσ_iterator_symbol]();
        ans = ρσ_list_decorate([]);
        result = iterator.next();
        while (!result.done) {
            ans.push(result.value);
            result = iterator.next();
        }
        return ans;
    }
    return Object.keys(iterable);
};
if (!ρσ_Iterable.__argnames__) Object.defineProperties(ρσ_Iterable, {
    __argnames__ : {value: ["iterable"]}
});

ρσ_desugar_kwargs = function () {
    if (typeof Object.assign === "function") {
        return function () {
            var ans;
            ans = Object.create(null);
            ans[ρσ_kwargs_symbol] = true;
            for (var i = 0; i < arguments.length; i++) {
                Object.assign(ans, arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i]);
            }
            return ans;
        };
    }
    return function () {
        var ans, keys;
        ans = Object.create(null);
        ans[ρσ_kwargs_symbol] = true;
        for (var i = 0; i < arguments.length; i++) {
            keys = Object.keys(arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i]);
            for (var j = 0; j < keys.length; j++) {
                ans[ρσ_bound_index(keys[(typeof j === "number" && j < 0) ? keys.length + j : j], ans)] = (ρσ_expr_temp = arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i])[ρσ_bound_index(keys[(typeof j === "number" && j < 0) ? keys.length + j : j], ρσ_expr_temp)];
            }
        }
        return ans;
    };
}();
function ρσ_interpolate_kwargs(f, supplied_args) {
    var has_prop, kwobj, args, prop;
    if (!f.__argnames__) {
        return f.apply(this, supplied_args);
    }
    has_prop = Object.prototype.hasOwnProperty;
    kwobj = supplied_args.pop();
    if (f.__handles_kwarg_interpolation__) {
        args = new Array(Math.max(supplied_args.length, f.__argnames__.length) + 1);
        args[args.length-1] = kwobj;
        for (var i = 0; i < args.length - 1; i++) {
            if (i < f.__argnames__.length) {
                prop = (ρσ_expr_temp = f.__argnames__)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i];
                if (has_prop.call(kwobj, prop)) {
                    args[(typeof i === "number" && i < 0) ? args.length + i : i] = kwobj[(typeof prop === "number" && prop < 0) ? kwobj.length + prop : prop];
                    delete kwobj[prop];
                } else if (i < supplied_args.length) {
                    args[(typeof i === "number" && i < 0) ? args.length + i : i] = supplied_args[(typeof i === "number" && i < 0) ? supplied_args.length + i : i];
                }
            } else {
                args[(typeof i === "number" && i < 0) ? args.length + i : i] = supplied_args[(typeof i === "number" && i < 0) ? supplied_args.length + i : i];
            }
        }
        return f.apply(this, args);
    }
    for (var i = 0; i < f.__argnames__.length; i++) {
        prop = (ρσ_expr_temp = f.__argnames__)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i];
        if (has_prop.call(kwobj, prop)) {
            supplied_args[(typeof i === "number" && i < 0) ? supplied_args.length + i : i] = kwobj[(typeof prop === "number" && prop < 0) ? kwobj.length + prop : prop];
        }
    }
    return f.apply(this, supplied_args);
};
if (!ρσ_interpolate_kwargs.__argnames__) Object.defineProperties(ρσ_interpolate_kwargs, {
    __argnames__ : {value: ["f", "supplied_args"]}
});

function ρσ_interpolate_kwargs_constructor(apply, f, supplied_args) {
    if (apply) {
        f.apply(this, supplied_args);
    } else {
        ρσ_interpolate_kwargs.call(this, f, supplied_args);
    }
    return this;
};
if (!ρσ_interpolate_kwargs_constructor.__argnames__) Object.defineProperties(ρσ_interpolate_kwargs_constructor, {
    __argnames__ : {value: ["apply", "f", "supplied_args"]}
});

function ρσ_getitem(obj, key) {
    if (obj.__getitem__) {
        return obj.__getitem__(key);
    }
    if (typeof key === "number" && key < 0) {
        key += obj.length;
    }
    return obj[(typeof key === "number" && key < 0) ? obj.length + key : key];
};
if (!ρσ_getitem.__argnames__) Object.defineProperties(ρσ_getitem, {
    __argnames__ : {value: ["obj", "key"]}
});

function ρσ_setitem(obj, key, val) {
    if (obj.__setitem__) {
        obj.__setitem__(key, val);
    } else {
        if (typeof key === "number" && key < 0) {
            key += obj.length;
        }
        obj[(typeof key === "number" && key < 0) ? obj.length + key : key] = val;
    }
};
if (!ρσ_setitem.__argnames__) Object.defineProperties(ρσ_setitem, {
    __argnames__ : {value: ["obj", "key", "val"]}
});

function ρσ_delitem(obj, key) {
    if (obj.__delitem__) {
        obj.__delitem__(key);
    } else if (typeof obj.splice === "function") {
        obj.splice(key, 1);
    } else {
        if (typeof key === "number" && key < 0) {
            key += obj.length;
        }
        delete obj[key];
    }
};
if (!ρσ_delitem.__argnames__) Object.defineProperties(ρσ_delitem, {
    __argnames__ : {value: ["obj", "key"]}
});

function ρσ_bound_index(idx, arr) {
    if (typeof idx === "number" && idx < 0) {
        idx += arr.length;
    }
    return idx;
};
if (!ρσ_bound_index.__argnames__) Object.defineProperties(ρσ_bound_index, {
    __argnames__ : {value: ["idx", "arr"]}
});

function ρσ_splice(arr, val, start, end) {
    start = start || 0;
    if (start < 0) {
        start += arr.length;
    }
    if (end === undefined) {
        end = arr.length;
    }
    if (end < 0) {
        end += arr.length;
    }
    Array.prototype.splice.apply(arr, [start, end - start].concat(val));
};
if (!ρσ_splice.__argnames__) Object.defineProperties(ρσ_splice, {
    __argnames__ : {value: ["arr", "val", "start", "end"]}
});

ρσ_exists = (function(){
    var ρσ_d = {};
    ρσ_d["n"] = (function() {
        var ρσ_anonfunc = function (expr) {
            return expr !== undefined && expr !== null;
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["expr"]}
        });
        return ρσ_anonfunc;
    })();
    ρσ_d["d"] = (function() {
        var ρσ_anonfunc = function (expr) {
            if (expr === undefined || expr === null) {
                return Object.create(null);
            }
            return expr;
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["expr"]}
        });
        return ρσ_anonfunc;
    })();
    ρσ_d["c"] = (function() {
        var ρσ_anonfunc = function (expr) {
            if (typeof expr === "function") {
                return expr;
            }
            return function () {
                return undefined;
            };
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["expr"]}
        });
        return ρσ_anonfunc;
    })();
    ρσ_d["g"] = (function() {
        var ρσ_anonfunc = function (expr) {
            if (expr === undefined || expr === null || typeof expr.__getitem__ !== "function") {
                return (function(){
                    var ρσ_d = {};
                    ρσ_d["__getitem__"] = function () {
                        return undefined;
                    };
                    return ρσ_d;
                }).call(this);
            }
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["expr"]}
        });
        return ρσ_anonfunc;
    })();
    ρσ_d["e"] = (function() {
        var ρσ_anonfunc = function (expr, alt) {
            return (expr === undefined || expr === null) ? alt : expr;
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["expr", "alt"]}
        });
        return ρσ_anonfunc;
    })();
    return ρσ_d;
}).call(this);
function ρσ_mixin() {
    var seen, resolved_props, p, target, props, name;
    seen = Object.create(null);
    seen.__argnames__ = seen.__handles_kwarg_interpolation__ = seen.__init__ = seen.__annotations__ = seen.__doc__ = seen.__bind_methods__ = seen.__bases__ = seen.constructor = seen.__class__ = true;
    resolved_props = {};
    p = target = arguments[0].prototype;
    while (p && p !== Object.prototype) {
        props = Object.getOwnPropertyNames(p);
        for (var i = 0; i < props.length; i++) {
            seen[ρσ_bound_index(props[(typeof i === "number" && i < 0) ? props.length + i : i], seen)] = true;
        }
        p = Object.getPrototypeOf(p);
    }
    for (var c = 1; c < arguments.length; c++) {
        p = arguments[(typeof c === "number" && c < 0) ? arguments.length + c : c].prototype;
        while (p && p !== Object.prototype) {
            props = Object.getOwnPropertyNames(p);
            for (var i = 0; i < props.length; i++) {
                name = props[(typeof i === "number" && i < 0) ? props.length + i : i];
                if (seen[(typeof name === "number" && name < 0) ? seen.length + name : name]) {
                    continue;
                }
                seen[(typeof name === "number" && name < 0) ? seen.length + name : name] = true;
                resolved_props[(typeof name === "number" && name < 0) ? resolved_props.length + name : name] = Object.getOwnPropertyDescriptor(p, name);
            }
            p = Object.getPrototypeOf(p);
        }
    }
    Object.defineProperties(target, resolved_props);
};

function ρσ_instanceof() {
    var obj, bases, q, cls, p;
    obj = arguments[0];
    bases = "";
    if (obj && obj.constructor && obj.constructor.prototype) {
        bases = obj.constructor.prototype.__bases__ || "";
    }
    for (var i = 1; i < arguments.length; i++) {
        q = arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i];
        if (obj instanceof q) {
            return true;
        }
        if ((q === Array || q === ρσ_list_constructor) && Array.isArray(obj)) {
            return true;
        }
        if (q === ρσ_str && (typeof obj === "string" || obj instanceof String)) {
            return true;
        }
        if (bases.length > 1) {
            for (var c = 1; c < bases.length; c++) {
                cls = bases[(typeof c === "number" && c < 0) ? bases.length + c : c];
                while (cls) {
                    if (q === cls) {
                        return true;
                    }
                    p = Object.getPrototypeOf(cls.prototype);
                    if (!p) {
                        break;
                    }
                    cls = p.constructor;
                }
            }
        }
    }
    return false;
};
function sum(iterable, start) {
    var ans, iterator, r;
    if (Array.isArray(iterable)) {
        return iterable.reduce((function() {
            var ρσ_anonfunc = function (prev, cur) {
                return prev + cur;
            };
            if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                __argnames__ : {value: ["prev", "cur"]}
            });
            return ρσ_anonfunc;
        })(), start || 0);
    }
    ans = start || 0;
    iterator = iter(iterable);
    r = iterator.next();
    while (!r.done) {
        ans += r.value;
        r = iterator.next();
    }
    return ans;
};
if (!sum.__argnames__) Object.defineProperties(sum, {
    __argnames__ : {value: ["iterable", "start"]}
});

function map() {
    var iterators, func, args, ans;
    iterators = new Array(arguments.length - 1);
    func = arguments[0];
    args = new Array(arguments.length - 1);
    for (var i = 1; i < arguments.length; i++) {
        iterators[ρσ_bound_index(i - 1, iterators)] = iter(arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i]);
    }
    ans = {'_func':func, '_iterators':iterators, '_args':args};
    ans[ρσ_iterator_symbol] = function () {
        return this;
    };
    ans["next"] = function () {
        var r;
        for (var i = 0; i < this._iterators.length; i++) {
            r = (ρσ_expr_temp = this._iterators)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i].next();
            if (r.done) {
                return {'done':true};
            }
            (ρσ_expr_temp = this._args)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] = r.value;
        }
        return {'done':false, 'value':this._func.apply(undefined, this._args)};
    };
    return ans;
};

function filter(func_or_none, iterable) {
    var func, ans;
    func = (func_or_none === null) ? ρσ_bool : func_or_none;
    ans = {'_func':func, '_iterator':ρσ_iter(iterable)};
    ans[ρσ_iterator_symbol] = function () {
        return this;
    };
    ans["next"] = function () {
        var r;
        r = this._iterator.next();
        while (!r.done) {
            if (this._func(r.value)) {
                return r;
            }
            r = this._iterator.next();
        }
        return {'done':true};
    };
    return ans;
};
if (!filter.__argnames__) Object.defineProperties(filter, {
    __argnames__ : {value: ["func_or_none", "iterable"]}
});

function zip() {
    var iterators, ans;
    iterators = new Array(arguments.length);
    for (var i = 0; i < arguments.length; i++) {
        iterators[(typeof i === "number" && i < 0) ? iterators.length + i : i] = iter(arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i]);
    }
    ans = {'_iterators':iterators};
    ans[ρσ_iterator_symbol] = function () {
        return this;
    };
    ans["next"] = function () {
        var args, r;
        args = new Array(this._iterators.length);
        for (var i = 0; i < this._iterators.length; i++) {
            r = (ρσ_expr_temp = this._iterators)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i].next();
            if (r.done) {
                return {'done':true};
            }
            args[(typeof i === "number" && i < 0) ? args.length + i : i] = r.value;
        }
        return {'done':false, 'value':args};
    };
    return ans;
};

function any(iterable) {
    var i;
    var ρσ_Iter0 = ρσ_Iterable(iterable);
    for (var ρσ_Index0 = 0; ρσ_Index0 < ρσ_Iter0.length; ρσ_Index0++) {
        i = ρσ_Iter0[ρσ_Index0];
        if (i) {
            return true;
        }
    }
    return false;
};
if (!any.__argnames__) Object.defineProperties(any, {
    __argnames__ : {value: ["iterable"]}
});

function all(iterable) {
    var i;
    var ρσ_Iter1 = ρσ_Iterable(iterable);
    for (var ρσ_Index1 = 0; ρσ_Index1 < ρσ_Iter1.length; ρσ_Index1++) {
        i = ρσ_Iter1[ρσ_Index1];
        if (!i) {
            return false;
        }
    }
    return true;
};
if (!all.__argnames__) Object.defineProperties(all, {
    __argnames__ : {value: ["iterable"]}
});
var define_str_func, ρσ_unpack, ρσ_orig_split, ρσ_orig_replace;
function ρσ_repr_js_builtin(x, as_array) {
    var ans, b, keys, key;
    ans = [];
    b = "{}";
    if (as_array) {
        b = "[]";
        for (var i = 0; i < x.length; i++) {
            ans.push(ρσ_repr(x[(typeof i === "number" && i < 0) ? x.length + i : i]));
        }
    } else {
        keys = Object.keys(x);
        for (var k = 0; k < keys.length; k++) {
            key = keys[(typeof k === "number" && k < 0) ? keys.length + k : k];
            ans.push(JSON.stringify(key) + ":" + ρσ_repr(x[(typeof key === "number" && key < 0) ? x.length + key : key]));
        }
    }
    return b[0] + ans.join(", ") + b[1];
};
if (!ρσ_repr_js_builtin.__argnames__) Object.defineProperties(ρσ_repr_js_builtin, {
    __argnames__ : {value: ["x", "as_array"]}
});

function ρσ_html_element_to_string(elem) {
    var attrs, val, attr, ans;
    attrs = [];
    var ρσ_Iter0 = ρσ_Iterable(elem.attributes);
    for (var ρσ_Index0 = 0; ρσ_Index0 < ρσ_Iter0.length; ρσ_Index0++) {
        attr = ρσ_Iter0[ρσ_Index0];
        if (attr.specified) {
            val = attr.value;
            if (val.length > 10) {
                val = val.slice(0, 15) + "...";
            }
            val = JSON.stringify(val);
            attrs.push("" + ρσ_str.format("{}", attr.name) + "=" + ρσ_str.format("{}", val) + "");
        }
    }
    attrs = (attrs.length) ? " " + attrs.join(" ") : "";
    ans = "<" + ρσ_str.format("{}", elem.tagName) + "" + ρσ_str.format("{}", attrs) + ">";
    return ans;
};
if (!ρσ_html_element_to_string.__argnames__) Object.defineProperties(ρσ_html_element_to_string, {
    __argnames__ : {value: ["elem"]}
});

function ρσ_repr(x) {
    var ans, name;
    if (x === null) {
        return "None";
    }
    if (x === undefined) {
        return "undefined";
    }
    ans = x;
    if (typeof x.__repr__ === "function") {
        ans = x.__repr__();
    } else if (x === true || x === false) {
        ans = (x) ? "True" : "False";
    } else if (Array.isArray(x)) {
        ans = ρσ_repr_js_builtin(x, true);
    } else if (typeof x === "function") {
        ans = x.toString();
    } else if (typeof x === "object" && !x.toString) {
        ans = ρσ_repr_js_builtin(x);
    } else {
        name = Object.prototype.toString.call(x).slice(8, -1);
        if (ρσ_not_equals("Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".indexOf(name), -1)) {
            return name + "([" + x.map((function() {
                var ρσ_anonfunc = function (i) {
                    return str.format("0x{:02x}", i);
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["i"]}
                });
                return ρσ_anonfunc;
            })()).join(", ") + "])";
        }
        if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
            ans = ρσ_html_element_to_string(x);
        } else {
            ans = (typeof x.toString === "function") ? x.toString() : x;
        }
        if (ans === "[object Object]") {
            return ρσ_repr_js_builtin(x);
        }
        try {
            ans = JSON.stringify(x);
        } catch (ρσ_Exception) {
            ρσ_last_exception = ρσ_Exception;
            {
            } 
        }
    }
    return ans + "";
};
if (!ρσ_repr.__argnames__) Object.defineProperties(ρσ_repr, {
    __argnames__ : {value: ["x"]}
});

function ρσ_str(x) {
    var ans, name;
    if (x === null) {
        return "None";
    }
    if (x === undefined) {
        return "undefined";
    }
    ans = x;
    if (typeof x.__str__ === "function") {
        ans = x.__str__();
    } else if (typeof x.__repr__ === "function") {
        ans = x.__repr__();
    } else if (x === true || x === false) {
        ans = (x) ? "True" : "False";
    } else if (Array.isArray(x)) {
        ans = ρσ_repr_js_builtin(x, true);
    } else if (typeof x.toString === "function") {
        name = Object.prototype.toString.call(x).slice(8, -1);
        if (ρσ_not_equals("Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".indexOf(name), -1)) {
            return name + "([" + x.map((function() {
                var ρσ_anonfunc = function (i) {
                    return str.format("0x{:02x}", i);
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["i"]}
                });
                return ρσ_anonfunc;
            })()).join(", ") + "])";
        }
        if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
            ans = ρσ_html_element_to_string(x);
        } else {
            ans = x.toString();
        }
        if (ans === "[object Object]") {
            ans = ρσ_repr_js_builtin(x);
        }
    } else if (typeof x === "object" && !x.toString) {
        ans = ρσ_repr_js_builtin(x);
    }
    return ans + "";
};
if (!ρσ_str.__argnames__) Object.defineProperties(ρσ_str, {
    __argnames__ : {value: ["x"]}
});

define_str_func = (function() {
    var ρσ_anonfunc = function (name, func) {
        var f;
        (ρσ_expr_temp = ρσ_str.prototype)[(typeof name === "number" && name < 0) ? ρσ_expr_temp.length + name : name] = func;
        ρσ_str[(typeof name === "number" && name < 0) ? ρσ_str.length + name : name] = f = func.call.bind(func);
        if (func.__argnames__) {
            Object.defineProperty(f, "__argnames__", (function(){
                var ρσ_d = {};
                ρσ_d["value"] = ['string'].concat(func.__argnames__);
                return ρσ_d;
            }).call(this));
        }
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["name", "func"]}
    });
    return ρσ_anonfunc;
})();
ρσ_unpack = [String.prototype.split.call.bind(String.prototype.split), String.prototype.replace.call.bind(String.prototype.replace)];
ρσ_orig_split = ρσ_unpack[0];
ρσ_orig_replace = ρσ_unpack[1];
define_str_func("format", function () {
    var template, args, kwargs, explicit, implicit, idx, split, ans, pos, in_brace, markup, ch;
    template = this;
    if (template === undefined) {
        throw new TypeError("Template is required");
    }
    args = Array.prototype.slice.call(arguments);
    kwargs = {};
    if (args[args.length-1] && args[args.length-1][ρσ_kwargs_symbol] !== undefined) {
        kwargs = args[args.length-1];
        args = args.slice(0, -1);
    }
    explicit = implicit = false;
    idx = 0;
    split = ρσ_orig_split;
    if (ρσ_str.format._template_resolve_pat === undefined) {
        ρσ_str.format._template_resolve_pat = /[.\[]/;
    }
    function resolve(arg, object) {
        var ρσ_unpack, first, key, rest, ans;
        if (!arg) {
            return object;
        }
        ρσ_unpack = [arg[0], arg.slice(1)];
        first = ρσ_unpack[0];
        arg = ρσ_unpack[1];
        key = split(arg, ρσ_str.format._template_resolve_pat, 1)[0];
        rest = arg.slice(key.length);
        ans = (first === "[") ? object[ρσ_bound_index(key.slice(0, -1), object)] : getattr(object, key);
        if (ans === undefined) {
            throw new KeyError((first === "[") ? key.slice(0, -1) : key);
        }
        return resolve(rest, ans);
    };
    if (!resolve.__argnames__) Object.defineProperties(resolve, {
        __argnames__ : {value: ["arg", "object"]}
    });

    function resolve_format_spec(format_spec) {
        if (ρσ_str.format._template_resolve_fs_pat === undefined) {
            ρσ_str.format._template_resolve_fs_pat = /[{]([a-zA-Z0-9_]+)[}]/g;
        }
        return format_spec.replace(ρσ_str.format._template_resolve_fs_pat, (function() {
            var ρσ_anonfunc = function (match, key) {
                if (!Object.prototype.hasOwnProperty.call(kwargs, key)) {
                    return "";
                }
                return "" + kwargs[(typeof key === "number" && key < 0) ? kwargs.length + key : key];
            };
            if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                __argnames__ : {value: ["match", "key"]}
            });
            return ρσ_anonfunc;
        })());
    };
    if (!resolve_format_spec.__argnames__) Object.defineProperties(resolve_format_spec, {
        __argnames__ : {value: ["format_spec"]}
    });

    function set_comma(ans, comma) {
        var sep;
        if (comma !== ",") {
            sep = 1234;
            sep = sep.toLocaleString(undefined, {useGrouping: true})[1];
            ans = str.replace(ans, sep, comma);
        }
        return ans;
    };
    if (!set_comma.__argnames__) Object.defineProperties(set_comma, {
        __argnames__ : {value: ["ans", "comma"]}
    });

    function safe_comma(value, comma) {
        try {
            return set_comma(value.toLocaleString(undefined, {useGrouping: true}), comma);
        } catch (ρσ_Exception) {
            ρσ_last_exception = ρσ_Exception;
            {
                return value.toString(10);
            } 
        }
    };
    if (!safe_comma.__argnames__) Object.defineProperties(safe_comma, {
        __argnames__ : {value: ["value", "comma"]}
    });

    function safe_fixed(value, precision, comma) {
        if (!comma) {
            return value.toFixed(precision);
        }
        try {
            return set_comma(value.toLocaleString(undefined, {useGrouping: true, minimumFractionDigits: precision, maximumFractionDigits: precision}), comma);
        } catch (ρσ_Exception) {
            ρσ_last_exception = ρσ_Exception;
            {
                return value.toFixed(precision);
            } 
        }
    };
    if (!safe_fixed.__argnames__) Object.defineProperties(safe_fixed, {
        __argnames__ : {value: ["value", "precision", "comma"]}
    });

    function apply_formatting(value, format_spec) {
        var ρσ_unpack, fill, align, sign, fhash, zeropad, width, comma, precision, ftype, is_numeric, is_int, lftype, code, prec, exp, nval, is_positive, left, right;
        if (format_spec.indexOf("{") !== -1) {
            format_spec = resolve_format_spec(format_spec);
        }
        if (ρσ_str.format._template_format_pat === undefined) {
            ρσ_str.format._template_format_pat = /([^{}](?=[<>=^]))?([<>=^])?([-+\x20])?(\#)?(0)?(\d+)?([,_])?(?:\.(\d+))?([bcdeEfFgGnosxX%])?/;
        }
        try {
            ρσ_unpack = format_spec.match(ρσ_str.format._template_format_pat).slice(1);
ρσ_unpack = ρσ_unpack_asarray(9, ρσ_unpack);
            fill = ρσ_unpack[0];
            align = ρσ_unpack[1];
            sign = ρσ_unpack[2];
            fhash = ρσ_unpack[3];
            zeropad = ρσ_unpack[4];
            width = ρσ_unpack[5];
            comma = ρσ_unpack[6];
            precision = ρσ_unpack[7];
            ftype = ρσ_unpack[8];
        } catch (ρσ_Exception) {
            ρσ_last_exception = ρσ_Exception;
            if (ρσ_Exception instanceof TypeError) {
                return value;
            } else {
                throw ρσ_Exception;
            }
        }
        if (zeropad) {
            fill = fill || "0";
            align = align || "=";
        } else {
            fill = fill || " ";
            align = align || ">";
        }
        is_numeric = Number(value) === value;
        is_int = is_numeric && value % 1 === 0;
        precision = parseInt(precision, 10);
        lftype = (ftype || "").toLowerCase();
        if (ftype === "n") {
            is_numeric = true;
            if (is_int) {
                if (comma) {
                    throw new ValueError("Cannot specify ',' with 'n'");
                }
                value = parseInt(value, 10).toLocaleString();
            } else {
                value = parseFloat(value).toLocaleString();
            }
        } else if (['b', 'c', 'd', 'o', 'x'].indexOf(lftype) !== -1) {
            value = parseInt(value, 10);
            is_numeric = true;
            if (!isNaN(value)) {
                if (ftype === "b") {
                    value = (value >>> 0).toString(2);
                    if (fhash) {
                        value = "0b" + value;
                    }
                } else if (ftype === "c") {
                    if (value > 65535) {
                        code = value - 65536;
                        value = String.fromCharCode(55296 + (code >> 10), 56320 + (code & 1023));
                    } else {
                        value = String.fromCharCode(value);
                    }
                } else if (ftype === "d") {
                    if (comma) {
                        value = safe_comma(value, comma);
                    } else {
                        value = value.toString(10);
                    }
                } else if (ftype === "o") {
                    value = value.toString(8);
                    if (fhash) {
                        value = "0o" + value;
                    }
                } else if (lftype === "x") {
                    value = value.toString(16);
                    value = (ftype === "x") ? value.toLowerCase() : value.toUpperCase();
                    if (fhash) {
                        value = "0x" + value;
                    }
                }
            }
        } else if (['e','f','g','%'].indexOf(lftype) !== -1) {
            is_numeric = true;
            value = parseFloat(value);
            prec = (isNaN(precision)) ? 6 : precision;
            if (lftype === "e") {
                value = value.toExponential(prec);
                value = (ftype === "E") ? value.toUpperCase() : value.toLowerCase();
            } else if (lftype === "f") {
                value = safe_fixed(value, prec, comma);
                value = (ftype === "F") ? value.toUpperCase() : value.toLowerCase();
            } else if (lftype === "%") {
                value *= 100;
                value = safe_fixed(value, prec, comma) + "%";
            } else if (lftype === "g") {
                prec = max(1, prec);
                exp = parseInt(split(value.toExponential(prec - 1).toLowerCase(), "e")[1], 10);
                if (-4 <= exp && exp < prec) {
                    value = safe_fixed(value, prec - 1 - exp, comma);
                } else {
                    value = value.toExponential(prec - 1);
                }
                value = value.replace(/0+$/g, "");
                if (value[value.length-1] === ".") {
                    value = value.slice(0, -1);
                }
                if (ftype === "G") {
                    value = value.toUpperCase();
                }
            }
        } else {
            if (comma) {
                value = parseInt(value, 10);
                if (isNaN(value)) {
                    throw new ValueError("Must use numbers with , or _");
                }
                value = safe_comma(value, comma);
            }
            value += "";
            if (!isNaN(precision)) {
                value = value.slice(0, precision);
            }
        }
        value += "";
        if (is_numeric && sign) {
            nval = Number(value);
            is_positive = !isNaN(nval) && nval >= 0;
            if (is_positive && (sign === " " || sign === "+")) {
                value = sign + value;
            }
        }
        function repeat(char, num) {
            return (new Array(num+1)).join(char);
        };
        if (!repeat.__argnames__) Object.defineProperties(repeat, {
            __argnames__ : {value: ["char", "num"]}
        });

        if (is_numeric && width && width[0] === "0") {
            width = width.slice(1);
            ρσ_unpack = ["0", "="];
            fill = ρσ_unpack[0];
            align = ρσ_unpack[1];
        }
        width = parseInt(width || "-1", 10);
        if (isNaN(width)) {
            throw new ValueError("Invalid width specification: " + width);
        }
        if (fill && value.length < width) {
            if (align === "<") {
                value = value + repeat(fill, width - value.length);
            } else if (align === ">") {
                value = repeat(fill, width - value.length) + value;
            } else if (align === "^") {
                left = Math.floor((width - value.length) / 2);
                right = width - left - value.length;
                value = repeat(fill, left) + value + repeat(fill, right);
            } else if (align === "=") {
                if (ρσ_in(value[0], "+- ")) {
                    value = value[0] + repeat(fill, width - value.length) + value.slice(1);
                } else {
                    value = repeat(fill, width - value.length) + value;
                }
            } else {
                throw new ValueError("Unrecognized alignment: " + align);
            }
        }
        return value;
    };
    if (!apply_formatting.__argnames__) Object.defineProperties(apply_formatting, {
        __argnames__ : {value: ["value", "format_spec"]}
    });

    function parse_markup(markup) {
        var key, transformer, format_spec, pos, state, ch;
        key = transformer = format_spec = "";
        pos = 0;
        state = 0;
        while (pos < markup.length) {
            ch = markup[(typeof pos === "number" && pos < 0) ? markup.length + pos : pos];
            if (state === 0) {
                if (ch === "!") {
                    state = 1;
                } else if (ch === ":") {
                    state = 2;
                } else {
                    key += ch;
                }
            } else if (state === 1) {
                if (ch === ":") {
                    state = 2;
                } else {
                    transformer += ch;
                }
            } else {
                format_spec += ch;
            }
            pos += 1;
        }
        return [key, transformer, format_spec];
    };
    if (!parse_markup.__argnames__) Object.defineProperties(parse_markup, {
        __argnames__ : {value: ["markup"]}
    });

    function render_markup(markup) {
        var ρσ_unpack, key, transformer, format_spec, lkey, nvalue, object, ans;
        ρσ_unpack = parse_markup(markup);
ρσ_unpack = ρσ_unpack_asarray(3, ρσ_unpack);
        key = ρσ_unpack[0];
        transformer = ρσ_unpack[1];
        format_spec = ρσ_unpack[2];
        if (transformer && ['a', 'r', 's'].indexOf(transformer) === -1) {
            throw new ValueError("Unknown conversion specifier: " + transformer);
        }
        lkey = key.length && split(key, /[.\[]/, 1)[0];
        if (lkey) {
            explicit = true;
            if (implicit) {
                throw new ValueError("cannot switch from automatic field numbering to manual field specification");
            }
            nvalue = parseInt(lkey);
            object = (isNaN(nvalue)) ? kwargs[(typeof lkey === "number" && lkey < 0) ? kwargs.length + lkey : lkey] : args[(typeof nvalue === "number" && nvalue < 0) ? args.length + nvalue : nvalue];
            if (object === undefined) {
                if (isNaN(nvalue)) {
                    throw new KeyError(lkey);
                }
                throw new IndexError(lkey);
            }
            object = resolve(key.slice(lkey.length), object);
        } else {
            implicit = true;
            if (explicit) {
                throw new ValueError("cannot switch from manual field specification to automatic field numbering");
            }
            if (idx >= args.length) {
                throw new IndexError("Not enough arguments to match template: " + template);
            }
            object = args[(typeof idx === "number" && idx < 0) ? args.length + idx : idx];
            idx += 1;
        }
        if (typeof object === "function") {
            object = object();
        }
        ans = "" + object;
        if (format_spec) {
            ans = apply_formatting(ans, format_spec);
        }
        return ans;
    };
    if (!render_markup.__argnames__) Object.defineProperties(render_markup, {
        __argnames__ : {value: ["markup"]}
    });

    ans = "";
    pos = 0;
    in_brace = 0;
    markup = "";
    while (pos < template.length) {
        ch = template[(typeof pos === "number" && pos < 0) ? template.length + pos : pos];
        if (in_brace) {
            if (ch === "{") {
                in_brace += 1;
                markup += "{";
            } else if (ch === "}") {
                in_brace -= 1;
                if (in_brace > 0) {
                    markup += "}";
                } else {
                    ans += render_markup(markup);
                }
            } else {
                markup += ch;
            }
        } else {
            if (ch === "{") {
                if (template[ρσ_bound_index(pos + 1, template)] === "{") {
                    pos += 1;
                    ans += "{";
                } else {
                    in_brace = 1;
                    markup = "";
                }
            } else {
                ans += ch;
                if (ch === "}" && template[ρσ_bound_index(pos + 1, template)] === "}") {
                    pos += 1;
                }
            }
        }
        pos += 1;
    }
    if (in_brace) {
        throw new ValueError("expected '}' before end of string");
    }
    return ans;
});
define_str_func("capitalize", function () {
    var string;
    string = this;
    if (string) {
        string = string[0].toUpperCase() + string.slice(1).toLowerCase();
    }
    return string;
});
define_str_func("center", (function() {
    var ρσ_anonfunc = function (width, fill) {
        var left, right;
        left = Math.floor((width - this.length) / 2);
        right = width - left - this.length;
        fill = fill || " ";
        return new Array(left+1).join(fill) + this + new Array(right+1).join(fill);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["width", "fill"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("count", (function() {
    var ρσ_anonfunc = function (needle, start, end) {
        var string, ρσ_unpack, pos, step, ans;
        string = this;
        start = start || 0;
        end = end || string.length;
        if (start < 0 || end < 0) {
            string = string.slice(start, end);
            ρσ_unpack = [0, string.length];
            start = ρσ_unpack[0];
            end = ρσ_unpack[1];
        }
        pos = start;
        step = needle.length;
        if (!step) {
            return 0;
        }
        ans = 0;
        while (pos !== -1) {
            pos = string.indexOf(needle, pos);
            if (pos !== -1) {
                ans += 1;
                pos += step;
            }
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["needle", "start", "end"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("endswith", (function() {
    var ρσ_anonfunc = function (suffixes, start, end) {
        var string, q;
        string = this;
        start = start || 0;
        if (typeof suffixes === "string") {
            suffixes = [suffixes];
        }
        if (end !== undefined) {
            string = string.slice(0, end);
        }
        for (var i = 0; i < suffixes.length; i++) {
            q = suffixes[(typeof i === "number" && i < 0) ? suffixes.length + i : i];
            if (string.indexOf(q, Math.max(start, string.length - q.length)) !== -1) {
                return true;
            }
        }
        return false;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["suffixes", "start", "end"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("startswith", (function() {
    var ρσ_anonfunc = function (prefixes, start, end) {
        var prefix;
        start = start || 0;
        if (typeof prefixes === "string") {
            prefixes = [prefixes];
        }
        for (var i = 0; i < prefixes.length; i++) {
            prefix = prefixes[(typeof i === "number" && i < 0) ? prefixes.length + i : i];
            end = (end === undefined) ? this.length : end;
            if (end - start >= prefix.length && prefix === this.slice(start, start + prefix.length)) {
                return true;
            }
        }
        return false;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["prefixes", "start", "end"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("find", (function() {
    var ρσ_anonfunc = function (needle, start, end) {
        var ans;
        while (start < 0) {
            start += this.length;
        }
        ans = this.indexOf(needle, start);
        if (end !== undefined && ans !== -1) {
            while (end < 0) {
                end += this.length;
            }
            if (ans >= end - needle.length) {
                return -1;
            }
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["needle", "start", "end"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("rfind", (function() {
    var ρσ_anonfunc = function (needle, start, end) {
        var ans;
        while (end < 0) {
            end += this.length;
        }
        ans = this.lastIndexOf(needle, end - 1);
        if (start !== undefined && ans !== -1) {
            while (start < 0) {
                start += this.length;
            }
            if (ans < start) {
                return -1;
            }
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["needle", "start", "end"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("index", (function() {
    var ρσ_anonfunc = function (needle, start, end) {
        var ans;
        ans = ρσ_str.prototype.find.apply(this, arguments);
        if (ans === -1) {
            throw new ValueError("substring not found");
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["needle", "start", "end"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("rindex", (function() {
    var ρσ_anonfunc = function (needle, start, end) {
        var ans;
        ans = ρσ_str.prototype.rfind.apply(this, arguments);
        if (ans === -1) {
            throw new ValueError("substring not found");
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["needle", "start", "end"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("islower", function () {
    return this.length > 0 && this.toLowerCase() === this.toString();
});
define_str_func("isupper", function () {
    return this.length > 0 && this.toUpperCase() === this.toString();
});
define_str_func("isspace", function () {
    return this.length > 0 && /^\s+$/.test(this);
});
define_str_func("join", (function() {
    var ρσ_anonfunc = function (iterable) {
        var ans, r;
        if (Array.isArray(iterable)) {
            return iterable.join(this);
        }
        ans = "";
        r = iterable.next();
        while (!r.done) {
            if (ans) {
                ans += this;
            }
            ans += r.value;
            r = iterable.next();
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["iterable"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("ljust", (function() {
    var ρσ_anonfunc = function (width, fill) {
        var string;
        string = this;
        if (width > string.length) {
            fill = fill || " ";
            string += new Array(width - string.length + 1).join(fill);
        }
        return string;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["width", "fill"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("rjust", (function() {
    var ρσ_anonfunc = function (width, fill) {
        var string;
        string = this;
        if (width > string.length) {
            fill = fill || " ";
            string = new Array(width - string.length + 1).join(fill) + string;
        }
        return string;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["width", "fill"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("lower", function () {
    return this.toLowerCase();
});
define_str_func("upper", function () {
    return this.toUpperCase();
});
define_str_func("lstrip", (function() {
    var ρσ_anonfunc = function (chars) {
        var string, pos;
        string = this;
        pos = 0;
        chars = chars || ρσ_str.whitespace;
        while (chars.indexOf(string[(typeof pos === "number" && pos < 0) ? string.length + pos : pos]) !== -1) {
            pos += 1;
        }
        if (pos) {
            string = string.slice(pos);
        }
        return string;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["chars"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("rstrip", (function() {
    var ρσ_anonfunc = function (chars) {
        var string, pos;
        string = this;
        pos = string.length - 1;
        chars = chars || ρσ_str.whitespace;
        while (chars.indexOf(string[(typeof pos === "number" && pos < 0) ? string.length + pos : pos]) !== -1) {
            pos -= 1;
        }
        if (pos < string.length - 1) {
            string = string.slice(0, pos + 1);
        }
        return string;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["chars"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("strip", (function() {
    var ρσ_anonfunc = function (chars) {
        return ρσ_str.prototype.lstrip.call(ρσ_str.prototype.rstrip.call(this, chars), chars);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["chars"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("partition", (function() {
    var ρσ_anonfunc = function (sep) {
        var idx;
        idx = this.indexOf(sep);
        if (idx === -1) {
            return [this, "", ""];
        }
        return [this.slice(0, idx), sep, this.slice(idx + sep.length)];
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["sep"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("rpartition", (function() {
    var ρσ_anonfunc = function (sep) {
        var idx;
        idx = this.lastIndexOf(sep);
        if (idx === -1) {
            return ["", "", this];
        }
        return [this.slice(0, idx), sep, this.slice(idx + sep.length)];
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["sep"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("replace", (function() {
    var ρσ_anonfunc = function (old, repl, count) {
        var string, pos, idx;
        string = this;
        if (count === 1) {
            return ρσ_orig_replace(string, old, repl);
        }
        if (count < 1) {
            return string;
        }
        count = count || Number.MAX_VALUE;
        pos = 0;
        while (count > 0) {
            count -= 1;
            idx = string.indexOf(old, pos);
            if (idx === -1) {
                break;
            }
            pos = idx + repl.length;
            string = string.slice(0, idx) + repl + string.slice(idx + old.length);
        }
        return string;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["old", "repl", "count"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("split", (function() {
    var ρσ_anonfunc = function (sep, maxsplit) {
        var split, ans, extra, parts;
        if (maxsplit === 0) {
            return ρσ_list_decorate([ this ]);
        }
        split = ρσ_orig_split;
        if (sep === undefined || sep === null) {
            if (maxsplit > 0) {
                ans = split(this, /(\s+)/);
                extra = "";
                parts = [];
                for (var i = 0; i < ans.length; i++) {
                    if (parts.length >= maxsplit + 1) {
                        extra += ans[(typeof i === "number" && i < 0) ? ans.length + i : i];
                    } else if (i % 2 === 0) {
                        parts.push(ans[(typeof i === "number" && i < 0) ? ans.length + i : i]);
                    }
                }
                parts[parts.length-1] += extra;
                ans = parts;
            } else {
                ans = split(this, /\s+/);
            }
        } else {
            if (sep === "") {
                throw new ValueError("empty separator");
            }
            ans = split(this, sep);
            if (maxsplit > 0 && ans.length > maxsplit) {
                extra = ans.slice(maxsplit).join(sep);
                ans = ans.slice(0, maxsplit);
                ans.push(extra);
            }
        }
        return ρσ_list_decorate(ans);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["sep", "maxsplit"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("rsplit", (function() {
    var ρσ_anonfunc = function (sep, maxsplit) {
        var split, ans, is_space, pos, current, spc, ch, end, idx;
        if (!maxsplit) {
            return ρσ_str.prototype.split.call(this, sep);
        }
        split = ρσ_orig_split;
        if (sep === undefined || sep === null) {
            if (maxsplit > 0) {
                ans = [];
                is_space = /\s/;
                pos = this.length - 1;
                current = "";
                while (pos > -1 && maxsplit > 0) {
                    spc = false;
                    ch = (ρσ_expr_temp = this)[(typeof pos === "number" && pos < 0) ? ρσ_expr_temp.length + pos : pos];
                    while (pos > -1 && is_space.test(ch)) {
                        spc = true;
                        ch = this[--pos];
                    }
                    if (spc) {
                        if (current) {
                            ans.push(current);
                            maxsplit -= 1;
                        }
                        current = ch;
                    } else {
                        current += ch;
                    }
                    pos -= 1;
                }
                ans.push(this.slice(0, pos + 1) + current);
                ans.reverse();
            } else {
                ans = split(this, /\s+/);
            }
        } else {
            if (sep === "") {
                throw new ValueError("empty separator");
            }
            ans = [];
            pos = end = this.length;
            while (pos > -1 && maxsplit > 0) {
                maxsplit -= 1;
                idx = this.lastIndexOf(sep, pos);
                if (idx === -1) {
                    break;
                }
                ans.push(this.slice(idx + sep.length, end));
                pos = idx - 1;
                end = idx;
            }
            ans.push(this.slice(0, end));
            ans.reverse();
        }
        return ρσ_list_decorate(ans);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["sep", "maxsplit"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("splitlines", (function() {
    var ρσ_anonfunc = function (keepends) {
        var split, parts, ans;
        split = ρσ_orig_split;
        if (keepends) {
            parts = split(this, /((?:\r?\n)|\r)/);
            ans = [];
            for (var i = 0; i < parts.length; i++) {
                if (i % 2 === 0) {
                    ans.push(parts[(typeof i === "number" && i < 0) ? parts.length + i : i]);
                } else {
                    ans[ans.length-1] += parts[(typeof i === "number" && i < 0) ? parts.length + i : i];
                }
            }
        } else {
            ans = split(this, /(?:\r?\n)|\r/);
        }
        return ρσ_list_decorate(ans);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["keepends"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("swapcase", function () {
    var ans, a, b;
    ans = new Array(this.length);
    for (var i = 0; i < ans.length; i++) {
        a = (ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i];
        b = a.toLowerCase();
        if (a === b) {
            b = a.toUpperCase();
        }
        ans[(typeof i === "number" && i < 0) ? ans.length + i : i] = b;
    }
    return ans.join("");
});
define_str_func("zfill", (function() {
    var ρσ_anonfunc = function (width) {
        var string;
        string = this;
        if (width > string.length) {
            string = new Array(width - string.length + 1).join("0") + string;
        }
        return string;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["width"]}
    });
    return ρσ_anonfunc;
})());
ρσ_str.uchrs = (function() {
    var ρσ_anonfunc = function (string, with_positions) {
        return (function(){
            var ρσ_d = {};
            ρσ_d["_string"] = string;
            ρσ_d["_pos"] = 0;
            ρσ_d[ρσ_iterator_symbol] = function () {
                return this;
            };
            ρσ_d["next"] = function () {
                var length, pos, value, ans, extra;
                length = this._string.length;
                if (this._pos >= length) {
                    return (function(){
                        var ρσ_d = {};
                        ρσ_d["done"] = true;
                        return ρσ_d;
                    }).call(this);
                }
                pos = this._pos;
                value = this._string.charCodeAt(this._pos++);
                ans = "\ufffd";
                if (55296 <= value && value <= 56319) {
                    if (this._pos < length) {
                        extra = this._string.charCodeAt(this._pos++);
                        if ((extra & 56320) === 56320) {
                            ans = String.fromCharCode(value, extra);
                        }
                    }
                } else if ((value & 56320) !== 56320) {
                    ans = String.fromCharCode(value);
                }
                if (with_positions) {
                    return (function(){
                        var ρσ_d = {};
                        ρσ_d["done"] = false;
                        ρσ_d["value"] = ρσ_list_decorate([ pos, ans ]);
                        return ρσ_d;
                    }).call(this);
                } else {
                    return (function(){
                        var ρσ_d = {};
                        ρσ_d["done"] = false;
                        ρσ_d["value"] = ans;
                        return ρσ_d;
                    }).call(this);
                }
            };
            return ρσ_d;
        }).call(this);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["string", "with_positions"]}
    });
    return ρσ_anonfunc;
})();
ρσ_str.uslice = (function() {
    var ρσ_anonfunc = function (string, start, end) {
        var items, iterator, r;
        items = [];
        iterator = ρσ_str.uchrs(string);
        r = iterator.next();
        while (!r.done) {
            items.push(r.value);
            r = iterator.next();
        }
        return items.slice(start || 0, (end === undefined) ? items.length : end).join("");
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["string", "start", "end"]}
    });
    return ρσ_anonfunc;
})();
ρσ_str.ulen = (function() {
    var ρσ_anonfunc = function (string) {
        var iterator, r, ans;
        iterator = ρσ_str.uchrs(string);
        r = iterator.next();
        ans = 0;
        while (!r.done) {
            r = iterator.next();
            ans += 1;
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["string"]}
    });
    return ρσ_anonfunc;
})();
ρσ_str.ascii_lowercase = "abcdefghijklmnopqrstuvwxyz";
ρσ_str.ascii_uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
ρσ_str.ascii_letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
ρσ_str.digits = "0123456789";
ρσ_str.punctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
ρσ_str.printable = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ \t\n\r\u000b\f";
ρσ_str.whitespace = " \t\n\r\u000b\f";
define_str_func = undefined;
var str = ρσ_str, repr = ρσ_repr;;
    var ρσ_modules = {};
    ρσ_modules.encodings = {};
    ρσ_modules.uuid = {};

    (function(){
        var __name__ = "encodings";
        var utf8_decoder_table, _u8enc, utf8_encode;
        function base64encode(bytes, altchars, pad_char) {
            var l, remainder, main_length, encodings, ans, chunk;
            l = bytes.length;
            remainder = l % 3;
            main_length = l - remainder;
            encodings = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" + (altchars || "+/");
            pad_char = (pad_char === undefined) ? "=" : pad_char;
            ans = [];
            for (var i = 0; i < main_length; i += 3) {
                chunk = bytes[(typeof i === "number" && i < 0) ? bytes.length + i : i] << 16 | bytes[ρσ_bound_index(i + 1, bytes)] << 8 | bytes[ρσ_bound_index(i + 2, bytes)];
                ans.push(encodings[ρσ_bound_index((chunk & 16515072) >> 18, encodings)], encodings[ρσ_bound_index((chunk & 258048) >> 12, encodings)], encodings[ρσ_bound_index((chunk & 4032) >> 6, encodings)], encodings[ρσ_bound_index(chunk & 63, encodings)]);
            }
            if (remainder === 1) {
                chunk = bytes[(typeof main_length === "number" && main_length < 0) ? bytes.length + main_length : main_length];
                ans.push(encodings[ρσ_bound_index((chunk & 252) >> 2, encodings)], encodings[ρσ_bound_index((chunk & 3) << 4, encodings)], pad_char, pad_char);
            } else if (remainder === 2) {
                chunk = bytes[(typeof main_length === "number" && main_length < 0) ? bytes.length + main_length : main_length] << 8 | bytes[ρσ_bound_index(main_length + 1, bytes)];
                ans.push(encodings[ρσ_bound_index((chunk & 64512) >> 10, encodings)], encodings[ρσ_bound_index((chunk & 1008) >> 4, encodings)], encodings[ρσ_bound_index((chunk & 15) << 2, encodings)], pad_char);
            }
            return ans.join("");
        };
        if (!base64encode.__argnames__) Object.defineProperties(base64encode, {
            __argnames__ : {value: ["bytes", "altchars", "pad_char"]}
        });

        function base64decode(string) {
            var chars, ans, i;
            if (typeof window !== "undefined") {
                chars = window.atob(string);
            } else {
                chars = new Buffer(string, "base64").toString("binary");
            }
            ans = new Uint8Array(chars.length);
            for (var ρσ_Index0 = 0; ρσ_Index0 < ans.length; ρσ_Index0++) {
                i = ρσ_Index0;
                ans[(typeof i === "number" && i < 0) ? ans.length + i : i] = chars.charCodeAt(i);
            }
            return ans;
        };
        if (!base64decode.__argnames__) Object.defineProperties(base64decode, {
            __argnames__ : {value: ["string"]}
        });

        function urlsafe_b64encode(bytes, pad_char) {
            return base64encode(bytes, "-_", pad_char);
        };
        if (!urlsafe_b64encode.__argnames__) Object.defineProperties(urlsafe_b64encode, {
            __argnames__ : {value: ["bytes", "pad_char"]}
        });

        function urlsafe_b64decode(string) {
            string = String.prototype.replace.call(string, /[_-]/g, (function() {
                var ρσ_anonfunc = function (m) {
                    return (m === "-") ? "+" : "/";
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["m"]}
                });
                return ρσ_anonfunc;
            })());
            return base64decode(string);
        };
        if (!urlsafe_b64decode.__argnames__) Object.defineProperties(urlsafe_b64decode, {
            __argnames__ : {value: ["string"]}
        });

        function hexlify(bytes) {
            var ans, x;
            ans = [];
            for (var i = 0; i < bytes.length; i++) {
                x = bytes[(typeof i === "number" && i < 0) ? bytes.length + i : i].toString(16);
                if (x.length === 1) {
                    x = "0" + x;
                }
                ans.push(x);
            }
            return ans.join("");
        };
        if (!hexlify.__argnames__) Object.defineProperties(hexlify, {
            __argnames__ : {value: ["bytes"]}
        });

        function unhexlify(string) {
            var num, ans, x;
            num = Math.floor(string.length / 2);
            if (num * 2 !== string.length) {
                throw new ValueError("string length is not a multiple of two");
            }
            ans = new Uint8Array(num);
            for (var i = 0; i < num; i++) {
                x = parseInt(string.slice(i * 2, i * 2 + 2), 16);
                if (isNaN(x)) {
                    throw new ValueError("string is not hex-encoded");
                }
                ans[(typeof i === "number" && i < 0) ? ans.length + i : i] = x;
            }
            return ans;
        };
        if (!unhexlify.__argnames__) Object.defineProperties(unhexlify, {
            __argnames__ : {value: ["string"]}
        });

        utf8_decoder_table = [
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, // 00..1f
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, // 20..3f
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, // 40..5f
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, // 60..7f
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9, // 80..9f
  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7, // a0..bf
  8,8,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2, // c0..df
  0xa,0x3,0x3,0x3,0x3,0x3,0x3,0x3,0x3,0x3,0x3,0x3,0x3,0x4,0x3,0x3, // e0..ef
  0xb,0x6,0x6,0x6,0x5,0x8,0x8,0x8,0x8,0x8,0x8,0x8,0x8,0x8,0x8,0x8, // f0..ff
  0x0,0x1,0x2,0x3,0x5,0x8,0x7,0x1,0x1,0x1,0x4,0x6,0x1,0x1,0x1,0x1, // s0..s0
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1, // s1..s2
  1,2,1,1,1,1,1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1, // s3..s4
  1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,3,1,1,1,1,1,1, // s5..s6
  1,3,1,1,1,1,1,3,1,3,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1, // s7..s8
];
        function _from_code_point(x) {
            if (x <= 65535) {
                return String.fromCharCode(x);
            }
            x -= 65536;
            return String.fromCharCode((x >> 10) + 55296, x % 1024 + 56320);
        };
        if (!_from_code_point.__argnames__) Object.defineProperties(_from_code_point, {
            __argnames__ : {value: ["x"]}
        });

        function utf8_decode(bytes, errors, replacement) {
            var state, ans, byte, typ, codep;
            state = 0;
            ans = [];
            for (var i = 0, l = bytes.length; i < l; i++) {
                byte = bytes[(typeof i === "number" && i < 0) ? bytes.length + i : i];
                typ = utf8_decoder_table[(typeof byte === "number" && byte < 0) ? utf8_decoder_table.length + byte : byte];
                codep = (state !== 0) ? byte & 63 | codep << 6 : 255 >> typ & byte;
                state = utf8_decoder_table[ρσ_bound_index(256 + state * 16 + typ, utf8_decoder_table)];
                if (state === 0) {
                    ans.push(_from_code_point(codep));
                } else if (state === 1) {
                    if (!errors || errors === "strict") {
                        throw new UnicodeDecodeError(str.format("The byte 0x{:02x} at position {} is not valid UTF-8", byte, i));
                    } else if (errors === "replace") {
                        ans.push(replacement || "?");
                    }
                }
            }
            return ans.join("");
        };
        if (!utf8_decode.__argnames__) Object.defineProperties(utf8_decode, {
            __argnames__ : {value: ["bytes", "errors", "replacement"]}
        });

        function utf8_encode_js(string) {
            var escstr, ans, ch, i;
            escstr = encodeURIComponent(string);
            ans = [];
            for (var i = 0; i < escstr.length; i++) {
                ch = escstr[(typeof i === "number" && i < 0) ? escstr.length + i : i];
                if (ch === "%") {
                    ans.push(parseInt(escstr.slice(i + 1, i + 3), 16));
                    i += 2;
                } else {
                    ans.push(ch.charCodeAt(0));
                }
            }
            return new Uint8Array(ans);
        };
        if (!utf8_encode_js.__argnames__) Object.defineProperties(utf8_encode_js, {
            __argnames__ : {value: ["string"]}
        });

        if (typeof TextEncoder === "function") {
            _u8enc = new TextEncoder("utf-8");
            utf8_encode = _u8enc.encode.bind(_u8enc);
            _u8enc = undefined;
        } else {
            utf8_encode = utf8_encode_js;
        }
        function utf8_encode_native(string) {
            return _u8enc.encode(string);
        };
        if (!utf8_encode_native.__argnames__) Object.defineProperties(utf8_encode_native, {
            __argnames__ : {value: ["string"]}
        });

        ρσ_modules.encodings.utf8_decoder_table = utf8_decoder_table;
        ρσ_modules.encodings._u8enc = _u8enc;
        ρσ_modules.encodings.utf8_encode = utf8_encode;
        ρσ_modules.encodings.base64encode = base64encode;
        ρσ_modules.encodings.base64decode = base64decode;
        ρσ_modules.encodings.urlsafe_b64encode = urlsafe_b64encode;
        ρσ_modules.encodings.urlsafe_b64decode = urlsafe_b64decode;
        ρσ_modules.encodings.hexlify = hexlify;
        ρσ_modules.encodings.unhexlify = unhexlify;
        ρσ_modules.encodings._from_code_point = _from_code_point;
        ρσ_modules.encodings.utf8_decode = utf8_decode;
        ρσ_modules.encodings.utf8_encode_js = utf8_encode_js;
        ρσ_modules.encodings.utf8_encode_native = utf8_encode_native;
    })();

    (function(){
        var __name__ = "uuid";
        var RFC_4122, random_bytes;
        var hexlify = ρσ_modules.encodings.hexlify;
        var urlsafe_b64decode = ρσ_modules.encodings.urlsafe_b64decode;
        var urlsafe_b64encode = ρσ_modules.encodings.urlsafe_b64encode;

        RFC_4122 = 1;
        if (typeof crypto === "object" && crypto.getRandomValues) {
            random_bytes = (function() {
                var ρσ_anonfunc = function (num) {
                    var ans;
                    ans = new Uint8Array(num || 16);
                    crypto.getRandomValues(ans);
                    return ans;
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["num"]}
                });
                return ρσ_anonfunc;
            })();
        } else {
            random_bytes = (function() {
                var ρσ_anonfunc = function (num) {
                    var ans, i;
                    ans = new Uint8Array(num || 16);
                    for (var ρσ_Index0 = 0; ρσ_Index0 < ans.length; ρσ_Index0++) {
                        i = ρσ_Index0;
                        ans[(typeof i === "number" && i < 0) ? ans.length + i : i] = Math.floor(Math.random() * 256);
                    }
                    return ans;
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["num"]}
                });
                return ρσ_anonfunc;
            })();
        }
        function uuid4_bytes() {
            var data;
            data = random_bytes();
            data[6] = 64 | data[6] & 15;
            data[8] = (data[8] >> 4 & 3 | 8) << 4 | data[8] & 15;
            return data;
        };

        function as_str() {
            var h;
            h = this.hex;
            return h.slice(0, 8) + "-" + h.slice(8, 12) + "-" + h.slice(12, 16) + "-" + h.slice(16, 20) + "-" + h.slice(20);
        };

        function uuid4() {
            var b;
            b = uuid4_bytes();
            return (function(){
                var ρσ_d = Object.create(null);
                ρσ_d["hex"] = hexlify(b);
                ρσ_d["bytes"] = b;
                ρσ_d["variant"] = RFC_4122;
                ρσ_d["version"] = 4;
                ρσ_d["__str__"] = as_str;
                ρσ_d["toString"] = as_str;
                return ρσ_d;
            }).call(this);
        };

        function num_to_string(numbers, alphabet, pad_to_length) {
            var ans, alphabet_len, x, number;
            ans = [];
            alphabet_len = alphabet.length;
            numbers = Array.prototype.slice.call(numbers);
            for (var i = 0; i < numbers.length - 1; i++) {
                x = divmod(numbers[(typeof i === "number" && i < 0) ? numbers.length + i : i], alphabet_len);
                numbers[(typeof i === "number" && i < 0) ? numbers.length + i : i] = x[0];
                numbers[ρσ_bound_index(i + 1, numbers)] += x[1];
            }
            for (var i = 0; i < numbers.length; i++) {
                number = numbers[(typeof i === "number" && i < 0) ? numbers.length + i : i];
                while (number) {
                    x = divmod(number, alphabet_len);
                    number = x[0];
                    ans.push(alphabet[ρσ_bound_index(x[1], alphabet)]);
                }
            }
            if (pad_to_length && pad_to_length > ans.length) {
                ans.push(alphabet[0].repeat(pad_to_length - ans.length));
            }
            return ans.join("");
        };
        if (!num_to_string.__argnames__) Object.defineProperties(num_to_string, {
            __argnames__ : {value: ["numbers", "alphabet", "pad_to_length"]}
        });

        function short_uuid() {
            return urlsafe_b64encode(random_bytes(), "");
        };

        function short_uuid4() {
            return urlsafe_b64encode(uuid4_bytes(), "");
        };

        function decode_short_uuid(val) {
            return urlsafe_b64decode(val + "==");
        };
        if (!decode_short_uuid.__argnames__) Object.defineProperties(decode_short_uuid, {
            __argnames__ : {value: ["val"]}
        });

        ρσ_modules.uuid.RFC_4122 = RFC_4122;
        ρσ_modules.uuid.random_bytes = random_bytes;
        ρσ_modules.uuid.uuid4_bytes = uuid4_bytes;
        ρσ_modules.uuid.as_str = as_str;
        ρσ_modules.uuid.uuid4 = uuid4;
        ρσ_modules.uuid.num_to_string = num_to_string;
        ρσ_modules.uuid.short_uuid = short_uuid;
        ρσ_modules.uuid.short_uuid4 = short_uuid4;
        ρσ_modules.uuid.decode_short_uuid = decode_short_uuid;
    })();

    (function(){

        var __name__ = "__main__";


        var uuid = ρσ_modules.uuid;

        function toJSON(obj) {
            return JSON.stringify(obj, undefined, 4);
        };
        if (!toJSON.__argnames__) Object.defineProperties(toJSON, {
            __argnames__ : {value: ["obj"]}
        });

        function toBlob(obj) {
            return new Blob(ρσ_list_decorate([ toJSON(obj) ]), (function(){
                var ρσ_d = {};
                ρσ_d["type"] = "text/json";
                return ρσ_d;
            }).call(this));
        };
        if (!toBlob.__argnames__) Object.defineProperties(toBlob, {
            __argnames__ : {value: ["obj"]}
        });

        function Campaign() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Campaign.prototype.__init__.apply(this, arguments);
        }
        Campaign.prototype.__init__ = function __init__(title) {
            var self = this;
            self.title = title;
            self.campaign = {};
            self.zip = null;
            self._pending_operations = ρσ_list_decorate([]);
            self._total_size = 0;
        };
        if (!Campaign.prototype.__init__.__argnames__) Object.defineProperties(Campaign.prototype.__init__, {
            __argnames__ : {value: ["title"]}
        });
        Campaign.__argnames__ = Campaign.prototype.__init__.__argnames__;
        Campaign.__handles_kwarg_interpolation__ = Campaign.prototype.__init__.__handles_kwarg_interpolation__;
        Campaign.prototype.newPendingOperation = function newPendingOperation() {
            var self = this;
            var id;
            id = str(uuid.uuid4());
            self._pending_operations.append(id);
            return id;
        };
        Campaign.prototype.hasPendingOperation = function hasPendingOperation() {
            var self = this;
            return self._pending_operations.length > 0;
        };
        Campaign.prototype.completedOperation = function completedOperation(id) {
            var self = this;
            var left, display;
            try {
                self._pending_operations.remove(id);
            } catch (ρσ_Exception) {
                ρσ_last_exception = ρσ_Exception;
                {
                } 
            }
            left = self._pending_operations.length;
            display = left > 100 && ρσ_equals(left % 100, 0) || left < 100 && ρσ_equals(left % 10, 0);
            if (display) {
                console.log("Download operations still in progress : ", left);
            }
            return !self.hasPendingOperation();
        };
        if (!Campaign.prototype.completedOperation.__argnames__) Object.defineProperties(Campaign.prototype.completedOperation, {
            __argnames__ : {value: ["id"]}
        });
        Campaign.prototype.findID = function findID() {
            var self = this;
            var id = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
            var obj_type = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? findID.__defaults__.obj_type : arguments[1];
            var ρσ_kwargs_obj = arguments[arguments.length-1];
            if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
            if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "obj_type")){
                obj_type = ρσ_kwargs_obj.obj_type;
            }
            var find_id, handout, page, char, track;
            find_id = (function() {
                var ρσ_anonfunc = function (o) {
                    return (o.id === id || typeof o.id === "object" && ρσ_equals(o.id, id));
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["o"]}
                });
                return ρσ_anonfunc;
            })();
            if ((obj_type === "handout" || typeof obj_type === "object" && ρσ_equals(obj_type, "handout")) || obj_type === null) {
                handout = self.campaign.handouts.find(find_id);
                if ((typeof handout !== "undefined" && handout !== null)) {
                    return handout;
                }
            }
            if ((obj_type === "page" || typeof obj_type === "object" && ρσ_equals(obj_type, "page")) || obj_type === null) {
                page = self.campaign.pages.find(find_id);
                if ((typeof page !== "undefined" && page !== null)) {
                    return page;
                }
            }
            if ((obj_type === "character" || typeof obj_type === "object" && ρσ_equals(obj_type, "character")) || obj_type === null) {
                char = self.campaign.characters.find(find_id);
                if ((typeof char !== "undefined" && char !== null)) {
                    return char;
                }
            }
            if ((obj_type === "track" || typeof obj_type === "object" && ρσ_equals(obj_type, "track")) || obj_type === null) {
                track = self.campaign.jukebox.find(find_id);
                if ((typeof track !== "undefined" && track !== null)) {
                    return track;
                }
            }
            return null;
        };
        if (!Campaign.prototype.findID.__defaults__) Object.defineProperties(Campaign.prototype.findID, {
            __defaults__ : {value: {obj_type:null}},
            __handles_kwarg_interpolation__ : {value: true},
            __argnames__ : {value: ["id", "obj_type"]}
        });
        Campaign.prototype._createZipFile = function _createZipFile() {
            var self = this;
            return (new window.zip.fs.FS).root;
        };
        Campaign.prototype._addZipFolder = function _addZipFolder(zip, filename) {
            var self = this;
            return zip.addDirectory(filename);
        };
        if (!Campaign.prototype._addZipFolder.__argnames__) Object.defineProperties(Campaign.prototype._addZipFolder, {
            __argnames__ : {value: ["zip", "filename"]}
        });
        Campaign.prototype._addFileToZip = function _addFileToZip(zip, filename, content) {
            var self = this;
            zip.addBlob(filename, content);
            if (ρσ_exists.n(content.size)) {
                self._total_size += content.size;
            } else if (ρσ_exists.n(content.length)) {
                self._total_size += content.length;
            }
        };
        if (!Campaign.prototype._addFileToZip.__argnames__) Object.defineProperties(Campaign.prototype._addFileToZip, {
            __argnames__ : {value: ["zip", "filename", "content"]}
        });
        Campaign.prototype._exportZip = function _exportZip(zip, fileEntry, onend, onprogress, onerror) {
            var self = this;
            var done, addEntryToZipWriter, addEntryToZipWriterDelayed, zipWriterCreated;
            window.zip.useWebWorkers = false;
            self._current_size = 0;
            done = (function() {
                var ρσ_anonfunc = function (writer) {
                    writer.close(onend);
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["writer"]}
                });
                return ρσ_anonfunc;
            })();
            addEntryToZipWriter = (function() {
                var ρσ_anonfunc = function (writer, zip) {
                    setTimeout(function () {
                        addEntryToZipWriterDelayed(writer, zip);
                    }, 0);
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["writer", "zip"]}
                });
                return ρσ_anonfunc;
            })();
            addEntryToZipWriterDelayed = (function() {
                var ρσ_anonfunc = function (writer, zip) {
                    var makeCB, partialprogress, current, idx;
                    makeCB = (function() {
                        var ρσ_anonfunc = function (c) {
                            return function () {
                                self._current_size += (ρσ_exists.n(c.data)) ? c.data.size : 0;
                                onprogress(self._current_size, self._total_size);
                                addEntryToZipWriter(writer, zip);
                            };
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["c"]}
                        });
                        return ρσ_anonfunc;
                    })();
                    partialprogress = (function() {
                        var ρσ_anonfunc = function (bytes) {
                            onprogress(self._current_size + bytes, self._total_size);
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["bytes"]}
                        });
                        return ρσ_anonfunc;
                    })();
                    current = zip;
                    var ρσ_Iter0 = ρσ_Iterable(self._zip_add_indices);
                    for (var ρσ_Index0 = 0; ρσ_Index0 < ρσ_Iter0.length; ρσ_Index0++) {
                        idx = ρσ_Iter0[ρσ_Index0];
                        current = (ρσ_expr_temp = current.children)[(typeof idx === "number" && idx < 0) ? ρσ_expr_temp.length + idx : idx];
                    }
                    if (!(typeof current !== "undefined" && current !== null)) {
                        self._zip_add_indices.pop();
                        if ((self._zip_add_indices.length === 0 || typeof self._zip_add_indices.length === "object" && ρσ_equals(self._zip_add_indices.length, 0))) {
                            done(writer);
                        } else {
                            (ρσ_expr_temp = self._zip_add_indices)[ρσ_expr_temp.length-1] += 1;
                            addEntryToZipWriterDelayed(writer, zip);
                        }
                        return;
                    }
                    if (current.directory) {
                        self._zip_add_indices.append(0);
                        writer.add(current.getFullname(), null, makeCB(current), partialprogress, (function(){
                            var ρσ_d = {};
                            ρσ_d["directory"] = current.directory;
                            ρσ_d["version"] = current.zipVersion;
                            return ρσ_d;
                        }).call(this));
                    } else {
                        (ρσ_expr_temp = self._zip_add_indices)[ρσ_expr_temp.length-1] += 1;
                        writer.add(current.getFullname(), new current.Reader(current.data, onerror), makeCB(current), partialprogress, (function(){
                            var ρσ_d = {};
                            ρσ_d["version"] = current.zipVersion;
                            return ρσ_d;
                        }).call(this));
                    }
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["writer", "zip"]}
                });
                return ρσ_anonfunc;
            })();
            zipWriterCreated = (function() {
                var ρσ_anonfunc = function (writer) {
                    self._zip_add_indices = ρσ_list_decorate([ 0 ]);
                    addEntryToZipWriter(writer, zip);
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["writer"]}
                });
                return ρσ_anonfunc;
            })();
            window.zip.createWriter(new window.zip.FileWriter(fileEntry, "application/zip"), zipWriterCreated, onerror);
        };
        if (!Campaign.prototype._exportZip.__argnames__) Object.defineProperties(Campaign.prototype._exportZip, {
            __argnames__ : {value: ["zip", "fileEntry", "onend", "onprogress", "onerror"]}
        });
        Campaign.prototype._saveZipToFile = function _saveZipToFile(zip, filename) {
            var self = this;
            var BYTES, DIV, size, div, requestFileSystem, createTempFile;
            BYTES = ρσ_list_decorate([ "Bytes", "KB", "MB", "GB" ]);
            DIV = ρσ_list_decorate([ 1, 1024, 1024 * 1024, 1024 * 1024 * 1024 ]);
            size = self._total_size;
            div = 0;
            while (size / 1024 > 0 && div + 1 < DIV.length) {
                size /= 1024;
                div += 1;
            }
            console.log("Done downloading resources!");
            console.log("Generating ZIP file with ", size.toFixed(2), BYTES[(typeof div === "number" && div < 0) ? BYTES.length + div : div] + " of data");
            console.warn("It is highly recommended to keep this tab focused and the window non-minimized during the entire process\notherwise it could take hours instead of minutes to generate the ZIP file for your campaign.\nYou can separate the tab into its own window if you want to keep using your browser in the meantime.");
            requestFileSystem = window.webkitRequestFileSystem || window.mozRequestFileSystem || window.requestFileSystem;
            createTempFile = (function() {
                var ρσ_anonfunc = function (tempCB) {
                    var tmpFilename;
                    tmpFilename = "tmp.zip";
                    requestFileSystem(window.TEMPORARY, 4 * 1024 * 1024 * 1024, (function() {
                        var ρσ_anonfunc = function (filesystem) {
                            var create;
                            create = function () {
                                filesystem.root.getFile(tmpFilename, (function(){
                                    var ρσ_d = {};
                                    ρσ_d["create"] = true;
                                    return ρσ_d;
                                }).call(this), (function() {
                                    var ρσ_anonfunc = function (zipFile) {
                                        tempCB(zipFile);
                                    };
                                    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                                        __argnames__ : {value: ["zipFile"]}
                                    });
                                    return ρσ_anonfunc;
                                })());
                            };
                            filesystem.root.getFile(tmpFilename, null, (function() {
                                var ρσ_anonfunc = function (entry) {
                                    entry.remove(create, create);
                                };
                                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                                    __argnames__ : {value: ["entry"]}
                                });
                                return ρσ_anonfunc;
                            })(), create);
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["filesystem"]}
                        });
                        return ρσ_anonfunc;
                    })());
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["tempCB"]}
                });
                return ρσ_anonfunc;
            })();
            createTempFile((function() {
                var ρσ_anonfunc = function (fileEntry) {
                    self._last_progress = -5;
                    self._exportZip(zip, fileEntry, function () {
                        console.log("Congratulations! The Campaign.zip file was generated successfully.\nStarting download.");
                        fileEntry.file((function() {
                            var ρσ_anonfunc = function (f) {
                                window.saveAs(f, filename);
                            };
                            if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                                __argnames__ : {value: ["f"]}
                            });
                            return ρσ_anonfunc;
                        })());
                    }, (function() {
                        var ρσ_anonfunc = function (current, total) {
                            var percent;
                            percent = 100 * current / total;
                            if (percent - self._last_progress >= 5) {
                                console.log("Zip file generated : " + percent.toFixed(2) + " %");
                                self._last_progress = Math.floor(percent / 5) * 5;
                            }
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["current", "total"]}
                        });
                        return ρσ_anonfunc;
                    })(), (function() {
                        var ρσ_anonfunc = function (message) {
                            console.log("Error creating zip file writer : ", message);
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["message"]}
                        });
                        return ρσ_anonfunc;
                    })());
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["fileEntry"]}
                });
                return ρσ_anonfunc;
            })());
        };
        if (!Campaign.prototype._saveZipToFile.__argnames__) Object.defineProperties(Campaign.prototype._saveZipToFile, {
            __argnames__ : {value: ["zip", "filename"]}
        });
        Campaign.prototype.parsePage = function parsePage(page) {
            var self = this;
            var data, path;
            data = page.toJSON();
            data.zorder = data.zorder.split(",");
            data.graphics = (ρσ_exists.n(page.thegraphics)) ? page.thegraphics.toJSON() : ρσ_list_decorate([]);
            data.texts = (ρσ_exists.n(page.thetexts)) ? page.thetexts.toJSON() : ρσ_list_decorate([]);
            data.paths = (ρσ_exists.n(page.thepaths)) ? page.thepaths.toJSON() : ρσ_list_decorate([]);
            var ρσ_Iter1 = ρσ_Iterable(data.paths);
            for (var ρσ_Index1 = 0; ρσ_Index1 < ρσ_Iter1.length; ρσ_Index1++) {
                path = ρσ_Iter1[ρσ_Index1];
                path.path = JSON.parse(path.path);
            }
            return data;
        };
        if (!Campaign.prototype.parsePage.__argnames__) Object.defineProperties(Campaign.prototype.parsePage, {
            __argnames__ : {value: ["page"]}
        });
        Campaign.prototype.parsePages = function parsePages(pages) {
            var self = this;
            var array, id, makeCB, page;
            array = ρσ_list_decorate([]);
            var ρσ_Iter2 = ρσ_Iterable(pages.models);
            for (var ρσ_Index2 = 0; ρσ_Index2 < ρσ_Iter2.length; ρσ_Index2++) {
                page = ρσ_Iter2[ρσ_Index2];
                if (page.fullyLoaded) {
                    array.append(self.parsePage(page));
                } else {
                    id = self.newPendingOperation();
                    makeCB = (function() {
                        var ρσ_anonfunc = function (a, i, p) {
                            return function () {
                                a.append(self.parsePage(p));
                                self.completedOperation(i);
                            };
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["a", "i", "p"]}
                        });
                        return ρσ_anonfunc;
                    })();
                    page.fullyLoadPage();
                    setTimeout(makeCB(array, id, page), 1e3);
                }
            }
            console.log("Finished parsing pages.");
            return array;
        };
        if (!Campaign.prototype.parsePages.__argnames__) Object.defineProperties(Campaign.prototype.parsePages, {
            __argnames__ : {value: ["pages"]}
        });
        Campaign.prototype.updateModel = function updateModel(data, key, blob, id, cb) {
            var self = this;
            if (ρσ_in(key, ρσ_list_decorate([ "bio", "gmnotes", "notes" ]))) {
                data[(typeof key === "number" && key < 0) ? data.length + key : key] = window.unescape(blob);
            } else if ((key === "defaulttoken" || typeof key === "object" && ρσ_equals(key, "defaulttoken"))) {
                data[(typeof key === "number" && key < 0) ? data.length + key : key] = JSON.parse(blob);
            } else {
                data[(typeof key === "number" && key < 0) ? data.length + key : key] = blob;
            }
            if (self.completedOperation(id) && cb) {
                cb();
            }
        };
        if (!Campaign.prototype.updateModel.__argnames__) Object.defineProperties(Campaign.prototype.updateModel, {
            __argnames__ : {value: ["data", "key", "blob", "id", "cb"]}
        });
        Campaign.prototype.parseCharacter = function parseCharacter(character, cb) {
            var self = this;
            var data, bio_id, gmnotes_id, token_id;
            data = character.toJSON();
            data.inplayerjournals = data.inplayerjournals.split(",");
            data.controlledby = data.controlledby.split(",");
            if ((data.bio !== "" && (typeof data.bio !== "object" || ρσ_not_equals(data.bio, "")))) {
                delete data.bio;
                bio_id = self.newPendingOperation();
                character._getLatestBlob("bio", (function() {
                    var ρσ_anonfunc = function (blob) {
                        self.updateModel(data, "bio", blob, bio_id, cb);
                    };
                    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                        __argnames__ : {value: ["blob"]}
                    });
                    return ρσ_anonfunc;
                })());
            }
            if ((data.gmnotes !== "" && (typeof data.gmnotes !== "object" || ρσ_not_equals(data.gmnotes, "")))) {
                delete data.gmnotes;
                gmnotes_id = self.newPendingOperation();
                character._getLatestBlob("gmnotes", (function() {
                    var ρσ_anonfunc = function (blob) {
                        self.updateModel(data, "gmnotes", blob, gmnotes_id, cb);
                    };
                    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                        __argnames__ : {value: ["blob"]}
                    });
                    return ρσ_anonfunc;
                })());
            }
            if ((data.defaulttoken !== "" && (typeof data.defaulttoken !== "object" || ρσ_not_equals(data.defaulttoken, "")))) {
                delete data.defaulttoken;
                token_id = self.newPendingOperation();
                character._getLatestBlob("defaulttoken", (function() {
                    var ρσ_anonfunc = function (blob) {
                        self.updateModel(data, "defaulttoken", blob, token_id, cb);
                    };
                    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                        __argnames__ : {value: ["blob"]}
                    });
                    return ρσ_anonfunc;
                })());
            }
            data.attributes = character.attribs.toJSON();
            data.abilities = character.abilities.toJSON();
            return data;
        };
        if (!Campaign.prototype.parseCharacter.__argnames__) Object.defineProperties(Campaign.prototype.parseCharacter, {
            __argnames__ : {value: ["character", "cb"]}
        });
        Campaign.prototype.parseCharacters = function parseCharacters(characters, cb) {
            var self = this;
            var array, character;
            array = ρσ_list_decorate([]);
            var ρσ_Iter3 = ρσ_Iterable(characters.models);
            for (var ρσ_Index3 = 0; ρσ_Index3 < ρσ_Iter3.length; ρσ_Index3++) {
                character = ρσ_Iter3[ρσ_Index3];
                array.append(self.parseCharacter(character, cb));
            }
            console.log("Finished parsing characters.");
            return array;
        };
        if (!Campaign.prototype.parseCharacters.__argnames__) Object.defineProperties(Campaign.prototype.parseCharacters, {
            __argnames__ : {value: ["characters", "cb"]}
        });
        Campaign.prototype.parseHandout = function parseHandout(handout, cb) {
            var self = this;
            var data, notes_id, gmnotes_id;
            data = handout.toJSON();
            data.inplayerjournals = data.inplayerjournals.split(",");
            data.controlledby = data.controlledby.split(",");
            if ((data.notes !== "" && (typeof data.notes !== "object" || ρσ_not_equals(data.notes, "")))) {
                delete data.notes;
                notes_id = self.newPendingOperation();
                handout._getLatestBlob("notes", (function() {
                    var ρσ_anonfunc = function (blob) {
                        self.updateModel(data, "notes", blob, notes_id, cb);
                    };
                    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                        __argnames__ : {value: ["blob"]}
                    });
                    return ρσ_anonfunc;
                })());
            }
            if ((data.gmnotes !== "" && (typeof data.gmnotes !== "object" || ρσ_not_equals(data.gmnotes, "")))) {
                delete data.gmnotes;
                gmnotes_id = self.newPendingOperation();
                handout._getLatestBlob("gmnotes", (function() {
                    var ρσ_anonfunc = function (blob) {
                        self.updateModel(data, "gmnotes", blob, gmnotes_id, cb);
                    };
                    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                        __argnames__ : {value: ["blob"]}
                    });
                    return ρσ_anonfunc;
                })());
            }
            return data;
        };
        if (!Campaign.prototype.parseHandout.__argnames__) Object.defineProperties(Campaign.prototype.parseHandout, {
            __argnames__ : {value: ["handout", "cb"]}
        });
        Campaign.prototype.parseHandouts = function parseHandouts(handouts, cb) {
            var self = this;
            var array, handout;
            array = ρσ_list_decorate([]);
            var ρσ_Iter4 = ρσ_Iterable(handouts.models);
            for (var ρσ_Index4 = 0; ρσ_Index4 < ρσ_Iter4.length; ρσ_Index4++) {
                handout = ρσ_Iter4[ρσ_Index4];
                array.append(self.parseHandout(handout, cb));
            }
            console.log("Finished parsing handouts.");
            return array;
        };
        if (!Campaign.prototype.parseHandouts.__argnames__) Object.defineProperties(Campaign.prototype.parseHandouts, {
            __argnames__ : {value: ["handouts", "cb"]}
        });
        Campaign.prototype.parsePlayer = function parsePlayer(player) {
            var self = this;
            var data;
            data = player.toJSON();
            if (data.journalfolderstatus) {
                data.journalfolderstatus = data.journalfolderstatus.split(",");
            }
            if (data.jukeboxfolderstatus) {
                data.jukebosfolderstatus = data.jukeboxfolderstatus.split(",");
            }
            if (data.macrobar) {
                data.macrobar = data.macrobar.split(",");
            }
            if (data.adv_fow_revealed) {
                data.adv_fow_revealed = JSON.parse(data.adv_fow_revealed);
            }
            return data;
        };
        if (!Campaign.prototype.parsePlayer.__argnames__) Object.defineProperties(Campaign.prototype.parsePlayer, {
            __argnames__ : {value: ["player"]}
        });
        Campaign.prototype.parsePlayers = function parsePlayers(players) {
            var self = this;
            var array, player;
            array = ρσ_list_decorate([]);
            var ρσ_Iter5 = ρσ_Iterable(players.models);
            for (var ρσ_Index5 = 0; ρσ_Index5 < ρσ_Iter5.length; ρσ_Index5++) {
                player = ρσ_Iter5[ρσ_Index5];
                array.append(self.parsePlayer(player));
            }
            console.log("Finished parsing players.");
            return array;
        };
        if (!Campaign.prototype.parsePlayers.__argnames__) Object.defineProperties(Campaign.prototype.parsePlayers, {
            __argnames__ : {value: ["players"]}
        });
        Campaign.prototype.loadArchivedPages = function loadArchivedPages() {
            var self = this;
            var num_loaded, page;
            num_loaded = 0;
            var ρσ_Iter6 = ρσ_Iterable(window.Campaign.pages.models);
            for (var ρσ_Index6 = 0; ρσ_Index6 < ρσ_Iter6.length; ρσ_Index6++) {
                page = ρσ_Iter6[ρσ_Index6];
                if (!page.fullyLoaded) {
                    page.fullyLoadPage();
                    num_loaded += 1;
                }
            }
            return num_loaded;
        };
        Campaign.prototype._parseChatArchiveHTML = function _parseChatArchiveHTML(obj, html) {
            var self = this;
            var scripts, prefix, content, start, end, chat, i;
            scripts = window.$(html).filter("script[type='text/javascript']");
            prefix = "var msgdata = \"";
            for (var ρσ_Index7 = 0; ρσ_Index7 < scripts.length; ρσ_Index7++) {
                i = ρσ_Index7;
                content = scripts[(typeof i === "number" && i < 0) ? scripts.length + i : i].textContent.trim();
                if (content.startsWith(prefix)) {
                    start = len(prefix);
                    end = content.indexOf("\";", start);
                    try {
                        chat = window.atob(content.slice(start, end));
                        obj.chat_archive = JSON.parse(chat);
                    } catch (ρσ_Exception) {
                        ρσ_last_exception = ρσ_Exception;
                        if (ρσ_Exception instanceof Error) {
                            var e = ρσ_Exception;
                            console.log("Unable to parse chat data: ", e);
                        } else {
                            throw ρσ_Exception;
                        }
                    }
                    break;
                }
            }
        };
        if (!Campaign.prototype._parseChatArchiveHTML.__argnames__) Object.defineProperties(Campaign.prototype._parseChatArchiveHTML, {
            __argnames__ : {value: ["obj", "html"]}
        });
        Campaign.prototype._fetchChatArchive = function _fetchChatArchive(obj, done) {
            var self = this;
            var id, errorcb, cb;
            id = self.newPendingOperation();
            errorcb = function () {
                if (self.completedOperation(id) && done) {
                    done();
                }
            };
            cb = (function() {
                var ρσ_anonfunc = function (blob) {
                    var f;
                    f = new FileReader;
                    f.onerror = errorcb;
                    f.onabort = errorcb;
                    f.onload = function () {
                        self._parseChatArchiveHTML(obj, f.result);
                        if (self.completedOperation(id) && done) {
                            done();
                        }
                    };
                    f.readAsText(blob);
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["blob"]}
                });
                return ρσ_anonfunc;
            })();
            self.downloadResource("https://app.roll20.net/campaigns/chatarchive/" + obj.campaign_id, cb, errorcb);
        };
        if (!Campaign.prototype._fetchChatArchive.__argnames__) Object.defineProperties(Campaign.prototype._fetchChatArchive, {
            __argnames__ : {value: ["obj", "done"]}
        });
        Campaign.prototype._parseCampaignDelayed = function _parseCampaignDelayed(result, cb) {
            var self = this;
            var done, id;
            done = function () {
                if (cb) {
                    cb(result);
                }
            };
            id = self.newPendingOperation();
            result.handouts = self.parseHandouts(window.Campaign.handouts, done);
            result.characters = self.parseCharacters(window.Campaign.characters, done);
            result.pages = self.parsePages(window.Campaign.pages);
            result.players = self.parsePlayers(window.Campaign.players);
            result.jukebox = window.Jukebox.playlist.toJSON();
            self._fetchChatArchive(result, done);
            if ((result.jukeboxfolder !== "" && (typeof result.jukeboxfolder !== "object" || ρσ_not_equals(result.jukeboxfolder, "")))) {
                result.jukeboxfolder = JSON.parse(result.jukeboxfolder);
            }
            if ((result.journalfolder !== "" && (typeof result.journalfolder !== "object" || ρσ_not_equals(result.journalfolder, "")))) {
                result.journalfolder = JSON.parse(result.journalfolder);
            }
            if ((result.turnorder !== "" && (typeof result.turnorder !== "object" || ρσ_not_equals(result.turnorder, "")))) {
                result.turnorder = JSON.parse(result.turnorder);
            }
            console.log("Download operations in progress : ", self._pending_operations.length);
            if (self.completedOperation(id)) {
                done();
            }
        };
        if (!Campaign.prototype._parseCampaignDelayed.__argnames__) Object.defineProperties(Campaign.prototype._parseCampaignDelayed, {
            __argnames__ : {value: ["result", "cb"]}
        });
        Campaign.prototype.parseCampaign = function parseCampaign(cb) {
            var self = this;
            var num_loaded, result;
            num_loaded = self.loadArchivedPages();
            result = window.Campaign.toJSON();
            result.campaign_title = self.title;
            result.account_id = window.d20_account_id;
            result.campaign_id = window.campaign_id;
            self.campaign = result;
            console.log("Waiting ", num_loaded * 5, " seconds for ", num_loaded, " archived pages to finish loading");
            setTimeout(function () {
                self._parseCampaignDelayed(result, cb);
            }, num_loaded * 5e3);
            return result;
        };
        if (!Campaign.prototype.parseCampaign.__argnames__) Object.defineProperties(Campaign.prototype.parseCampaign, {
            __argnames__ : {value: ["cb"]}
        });
        Campaign.prototype.saveCampaign = function saveCampaign() {
            var self = this;
            var filename = (arguments[0] === undefined || ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? saveCampaign.__defaults__.filename : arguments[0];
            var ρσ_kwargs_obj = arguments[arguments.length-1];
            if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
            if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "filename")){
                filename = ρσ_kwargs_obj.filename;
            }
            window.saveAs(toBlob(self.campaign), (filename) ? filename : self.title + ".json");
        };
        if (!Campaign.prototype.saveCampaign.__defaults__) Object.defineProperties(Campaign.prototype.saveCampaign, {
            __defaults__ : {value: {filename:null}},
            __handles_kwarg_interpolation__ : {value: true},
            __argnames__ : {value: ["filename"]}
        });
        Campaign.prototype.exportCampaignJson = function exportCampaignJson() {
            var self = this;
            var filename = (arguments[0] === undefined || ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? exportCampaignJson.__defaults__.filename : arguments[0];
            var ρσ_kwargs_obj = arguments[arguments.length-1];
            if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
            if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "filename")){
                filename = ρσ_kwargs_obj.filename;
            }
            self.parseCampaign(function () {
                self.saveCampaign(filename);
            });
        };
        if (!Campaign.prototype.exportCampaignJson.__defaults__) Object.defineProperties(Campaign.prototype.exportCampaignJson, {
            __defaults__ : {value: {filename:null}},
            __handles_kwarg_interpolation__ : {value: true},
            __argnames__ : {value: ["filename"]}
        });
        Campaign.prototype.exportCampaign = function exportCampaign() {
            var self = this;
            self.exportCampaignJson();
        };
        Campaign.prototype.downloadResource = function downloadResource() {
            var self = this;
            var url = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
            var cb = ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[1];
            var errorCB = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? downloadResource.__defaults__.errorCB : arguments[2];
            var ρσ_kwargs_obj = arguments[arguments.length-1];
            if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
            if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "errorCB")){
                errorCB = ρσ_kwargs_obj.errorCB;
            }
            var id;
            id = self.newPendingOperation();
            window.fetch(url).then((function() {
                var ρσ_anonfunc = function (response) {
                    if ((response.status === 200 || typeof response.status === "object" && ρσ_equals(response.status, 200)) || (response.status === 0 || typeof response.status === "object" && ρσ_equals(response.status, 0))) {
                        return Promise.resolve(response.blob());
                    } else {
                        return Promise.reject(new Error(response.statusText));
                    }
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["response"]}
                });
                return ρσ_anonfunc;
            })()).then((function() {
                var ρσ_anonfunc = function (blob) {
                    self.completedOperation(id);
                    if (cb) {
                        cb(blob);
                    }
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["blob"]}
                });
                return ρσ_anonfunc;
            })()).catch((function() {
                var ρσ_anonfunc = function (error) {
                    console.log("Error downloading ", url, " : ", error);
                    self.completedOperation(id);
                    if (errorCB) {
                        errorCB();
                    }
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["error"]}
                });
                return ρσ_anonfunc;
            })());
        };
        if (!Campaign.prototype.downloadResource.__defaults__) Object.defineProperties(Campaign.prototype.downloadResource, {
            __defaults__ : {value: {errorCB:null}},
            __handles_kwarg_interpolation__ : {value: true},
            __argnames__ : {value: ["url", "cb", "errorCB"]}
        });
        Campaign.prototype.downloadR20Resource = function downloadR20Resource() {
            var self = this;
            var folder = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
            var prefix = ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[1];
            var url = ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[2];
            var finallyCB = ( 3 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[3];
            var try_files = (arguments[4] === undefined || ( 4 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? downloadR20Resource.__defaults__.try_files : arguments[4];
            var ρσ_kwargs_obj = arguments[arguments.length-1];
            if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
            if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "try_files")){
                try_files = ρσ_kwargs_obj.try_files;
            }
            var filename, new_url, errorCB;
            filename = (ρσ_expr_temp = url.split("/"))[ρσ_expr_temp.length-1].split(".")[0];
            if (try_files.length > 0) {
                if (ρσ_in(filename, ρσ_list_decorate([ "original", "max", "med", "thumb" ]))) {
                    new_url = url.replace("/" + filename + ".", "/" + try_files[0] + ".");
                } else {
                    new_url = url;
                    try_files = ρσ_list_decorate([ "" ]);
                }
                errorCB = function () {
                    self.downloadR20Resource(folder, prefix, url, finallyCB, try_files.slice(1));
                };
                self.downloadResource(new_url, self._makeAddBlobToZip(folder, prefix + ".png", finallyCB), errorCB);
            } else {
                console.log("Couldn't download ", url, " with any alternative filename. Resource has become unavailable");
                finallyCB();
            }
        };
        if (!Campaign.prototype.downloadR20Resource.__defaults__) Object.defineProperties(Campaign.prototype.downloadR20Resource, {
            __defaults__ : {value: {try_files:ρσ_list_decorate([ "original", "max", "med", "thumb" ])}},
            __handles_kwarg_interpolation__ : {value: true},
            __argnames__ : {value: ["folder", "prefix", "url", "finallyCB", "try_files"]}
        });
        Campaign.prototype._makeNameUnique = function _makeNameUnique(names, orig_name) {
            var self = this;
            var name;
            name = str(names.length).padStart(3, "0") + " - " + orig_name;
            names.append(name);
            return name;
        };
        if (!Campaign.prototype._makeNameUnique.__argnames__) Object.defineProperties(Campaign.prototype._makeNameUnique, {
            __argnames__ : {value: ["names", "orig_name"]}
        });
        Campaign.prototype._flattenJournalEntries = function _flattenJournalEntries() {
            var self = this;
            var journal = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
            var _list = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? _flattenJournalEntries.__defaults__._list : arguments[1];
            var ρσ_kwargs_obj = arguments[arguments.length-1];
            if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
            if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "_list")){
                _list = ρσ_kwargs_obj._list;
            }
            var entry;
            var ρσ_Iter8 = ρσ_Iterable(journal);
            for (var ρσ_Index8 = 0; ρσ_Index8 < ρσ_Iter8.length; ρσ_Index8++) {
                entry = ρσ_Iter8[ρσ_Index8];
                if ((typeof entry === "string" || typeof typeof entry === "object" && ρσ_equals(typeof entry, "string"))) {
                    _list.append(entry);
                } else {
                    self._flattenJournalEntries(entry.i, _list);
                }
            }
            return _list;
        };
        if (!Campaign.prototype._flattenJournalEntries.__defaults__) Object.defineProperties(Campaign.prototype._flattenJournalEntries, {
            __defaults__ : {value: {_list:ρσ_list_decorate([])}},
            __handles_kwarg_interpolation__ : {value: true},
            __argnames__ : {value: ["journal", "_list"]}
        });
        Campaign.prototype._makeAddBlobToZip = function _makeAddBlobToZip(folder, filename, finallyCB) {
            var self = this;
            return (function() {
                var ρσ_anonfunc = function (blob) {
                    self._addFileToZip(folder, filename, blob);
                    finallyCB();
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["blob"]}
                });
                return ρσ_anonfunc;
            })();
        };
        if (!Campaign.prototype._makeAddBlobToZip.__argnames__) Object.defineProperties(Campaign.prototype._makeAddBlobToZip, {
            __argnames__ : {value: ["folder", "filename", "finallyCB"]}
        });
        Campaign.prototype._addCharacterToZip = function _addCharacterToZip(folder, character, finallyCB) {
            var self = this;
            self._addFileToZip(folder, "character.json", toBlob(character));
            if ((ρσ_exists.e(character.avatar, "") !== "" && (typeof ρσ_exists.e(character.avatar, "") !== "object" || ρσ_not_equals(ρσ_exists.e(character.avatar, ""), "")))) {
                self.downloadR20Resource(folder, "avatar", character.avatar, finallyCB);
            }
            if (ρσ_exists.n(character.defaulttoken) && (ρσ_exists.e(character.defaulttoken.imgsrc, "") !== "" && (typeof ρσ_exists.e(character.defaulttoken.imgsrc, "") !== "object" || ρσ_not_equals(ρσ_exists.e(character.defaulttoken.imgsrc, ""), "")))) {
                self.downloadR20Resource(folder, "token", character.defaulttoken.imgsrc, finallyCB);
            }
            if ((ρσ_exists.e(character.bio, "") !== "" && (typeof ρσ_exists.e(character.bio, "") !== "object" || ρσ_not_equals(ρσ_exists.e(character.bio, ""), "")))) {
                self._addFileToZip(folder, "bio.html", new Blob(ρσ_list_decorate([ character.bio ])));
            }
            if ((ρσ_exists.e(character.gmnotes, "") !== "" && (typeof ρσ_exists.e(character.gmnotes, "") !== "object" || ρσ_not_equals(ρσ_exists.e(character.gmnotes, ""), "")))) {
                self._addFileToZip(folder, "gmnotes.html", new Blob(ρσ_list_decorate([ character.gmnotes ])));
            }
        };
        if (!Campaign.prototype._addCharacterToZip.__argnames__) Object.defineProperties(Campaign.prototype._addCharacterToZip, {
            __argnames__ : {value: ["folder", "character", "finallyCB"]}
        });
        Campaign.prototype._addHandoutToZip = function _addHandoutToZip(folder, handout, finallyCB) {
            var self = this;
            self._addFileToZip(folder, "handout.json", toBlob(handout));
            if ((ρσ_exists.e(handout.avatar, "") !== "" && (typeof ρσ_exists.e(handout.avatar, "") !== "object" || ρσ_not_equals(ρσ_exists.e(handout.avatar, ""), "")))) {
                self.downloadR20Resource(folder, "avatar", handout.avatar, finallyCB);
            }
            if ((ρσ_exists.e(handout.notes, "") !== "" && (typeof ρσ_exists.e(handout.notes, "") !== "object" || ρσ_not_equals(ρσ_exists.e(handout.notes, ""), "")))) {
                self._addFileToZip(folder, "notes.html", new Blob(ρσ_list_decorate([ handout.notes ])));
            }
            if ((ρσ_exists.e(handout.gmnotes, "") !== "" && (typeof ρσ_exists.e(handout.gmnotes, "") !== "object" || ρσ_not_equals(ρσ_exists.e(handout.gmnotes, ""), "")))) {
                self._addFileToZip(folder, "gmnotes.html", new Blob(ρσ_list_decorate([ handout.gmnotes ])));
            }
        };
        if (!Campaign.prototype._addHandoutToZip.__argnames__) Object.defineProperties(Campaign.prototype._addHandoutToZip, {
            __argnames__ : {value: ["folder", "handout", "finallyCB"]}
        });
        Campaign.prototype._addJournalToZip = function _addJournalToZip(folder, journal, finallyCB) {
            var self = this;
            var names, handout, name, handout_dir, character, char_dir, child_dir, journal_entry;
            names = ρσ_list_decorate([]);
            var ρσ_Iter9 = ρσ_Iterable(journal);
            for (var ρσ_Index9 = 0; ρσ_Index9 < ρσ_Iter9.length; ρσ_Index9++) {
                journal_entry = ρσ_Iter9[ρσ_Index9];
                if ((typeof journal_entry === "string" || typeof typeof journal_entry === "object" && ρσ_equals(typeof journal_entry, "string"))) {
                    handout = self.findID(journal_entry, "handout");
                    if (handout !== null) {
                        name = self._makeNameUnique(names, handout.name);
                        handout_dir = self._addZipFolder(folder, name);
                        self._addHandoutToZip(handout_dir, handout, finallyCB);
                    } else {
                        character = self.findID(journal_entry, "character");
                        if (character !== null) {
                            name = self._makeNameUnique(names, character.name);
                            char_dir = self._addZipFolder(folder, name);
                            self._addCharacterToZip(char_dir, character, finallyCB);
                        } else {
                            console.log("Can't find handout with ID : ", journal_entry);
                            continue;
                        }
                    }
                } else {
                    name = self._makeNameUnique(names, journal_entry.n);
                    child_dir = self._addZipFolder(folder, name);
                    self._addJournalToZip(child_dir, journal_entry.i, finallyCB);
                }
            }
        };
        if (!Campaign.prototype._addJournalToZip.__argnames__) Object.defineProperties(Campaign.prototype._addJournalToZip, {
            __argnames__ : {value: ["folder", "journal", "finallyCB"]}
        });
        Campaign.prototype._addPlaylistToZip = function _addPlaylistToZip(folder, playlist, finallyCB) {
            var self = this;
            var names, track, name, url, errorCB, child_dir, audio;
            names = ρσ_list_decorate([]);
            var ρσ_Iter10 = ρσ_Iterable(playlist);
            for (var ρσ_Index10 = 0; ρσ_Index10 < ρσ_Iter10.length; ρσ_Index10++) {
                audio = ρσ_Iter10[ρσ_Index10];
                if ((typeof audio === "string" || typeof typeof audio === "object" && ρσ_equals(typeof audio, "string"))) {
                    track = self.findID(audio, "track");
                    if (track !== null) {
                        name = self._makeNameUnique(names, track.title);
                        if ((name[name.length-4] !== ".mp3" && (typeof name[name.length-4] !== "object" || ρσ_not_equals(name[name.length-4], ".mp3")))) {
                            name += ".mp3";
                        }
                        if ((track.source === "My Audio" || typeof track.source === "object" && ρσ_equals(track.source, "My Audio"))) {
                            url = "https://app.roll20.net/audio_library/play/" + track.track_id;
                        } else if ((track.source === "Tabletop Audio" || typeof track.source === "object" && ρσ_equals(track.source, "Tabletop Audio"))) {
                            url = "https://s3.amazonaws.com/cdn.roll20.net/ttaudio/" + track.track_id.split("-")[0];
                        } else if ((track.source === "Incompetech" || typeof track.source === "object" && ρσ_equals(track.source, "Incompetech"))) {
                            url = "https://s3.amazonaws.com/cdn.roll20.net/incompetech/" + track.track_id.split("-")[0];
                        } else {
                            url = null;
                            console.log("Can't download Audio track (", track.title, "). Unsupported source : ", track.source);
                        }
                        if (url) {
                            errorCB = function () {
                                console.log("Couldn't download Jukebox audio from url : ", url);
                            };
                            self.downloadResource(url, self._makeAddBlobToZip(folder, name, finallyCB), errorCB);
                        }
                    } else {
                        console.log("Can't find Audio Track with ID : ", track);
                        continue;
                    }
                } else {
                    name = self._makeNameUnique(names, audio.n);
                    child_dir = self._addZipFolder(folder, name);
                    self._addPlaylistToZip(child_dir, audio.i, finallyCB);
                }
            }
        };
        if (!Campaign.prototype._addPlaylistToZip.__argnames__) Object.defineProperties(Campaign.prototype._addPlaylistToZip, {
            __argnames__ : {value: ["folder", "playlist", "finallyCB"]}
        });
        Campaign.prototype._addPageToZip = function _addPageToZip(folder, page, finallyCB) {
            var self = this;
            var graphics, graphic;
            self._addFileToZip(folder, "page.json", toBlob(page));
            if ((ρσ_exists.e(page.thumbnail, "") !== "" && (typeof ρσ_exists.e(page.thumbnail, "") !== "object" || ρσ_not_equals(ρσ_exists.e(page.thumbnail, ""), "")))) {
                self.downloadR20Resource(folder, "thumbnail", page.thumbnail, finallyCB);
            }
            if (page.graphics.length > 0) {
                graphics = self._addZipFolder(folder, "graphics");
                var ρσ_Iter11 = ρσ_Iterable(page.graphics);
                for (var ρσ_Index11 = 0; ρσ_Index11 < ρσ_Iter11.length; ρσ_Index11++) {
                    graphic = ρσ_Iter11[ρσ_Index11];
                    self.downloadR20Resource(graphics, graphic.id, graphic.imgsrc, finallyCB);
                }
            }
        };
        if (!Campaign.prototype._addPageToZip.__argnames__) Object.defineProperties(Campaign.prototype._addPageToZip, {
            __argnames__ : {value: ["folder", "page", "finallyCB"]}
        });
        Campaign.prototype._saveCampaignZipCharacters = function _saveCampaignZipCharacters(checkZipDone) {
            var self = this;
            var characters, names, name, char_dir, character;
            console.log("Saving Characters");
            if (self.campaign.characters.length > 0) {
                characters = self._addZipFolder(self.zip, "characters");
                names = ρσ_list_decorate([]);
                var ρσ_Iter12 = ρσ_Iterable(self.campaign.characters);
                for (var ρσ_Index12 = 0; ρσ_Index12 < ρσ_Iter12.length; ρσ_Index12++) {
                    character = ρσ_Iter12[ρσ_Index12];
                    name = self._makeNameUnique(names, character.name);
                    char_dir = self._addZipFolder(characters, name);
                    self._addCharacterToZip(char_dir, character, checkZipDone);
                }
            }
            self.savingStep = 1;
            checkZipDone();
        };
        if (!Campaign.prototype._saveCampaignZipCharacters.__argnames__) Object.defineProperties(Campaign.prototype._saveCampaignZipCharacters, {
            __argnames__ : {value: ["checkZipDone"]}
        });
        Campaign.prototype._saveCampaignZipJournal = function _saveCampaignZipJournal(checkZipDone) {
            var self = this;
            var journal, all_ids, orphaned, archived, handout, folder;
            console.log("Saving Journal");
            if (self.campaign.journalfolder.length > 0) {
                journal = self._addZipFolder(self.zip, "journal");
                self._addJournalToZip(journal, self.campaign.journalfolder, checkZipDone);
                all_ids = self._flattenJournalEntries(self.campaign.journalfolder);
                orphaned = ρσ_list_decorate([]);
                archived = ρσ_list_decorate([]);
                var ρσ_Iter13 = ρσ_Iterable(self.campaign.handouts);
                for (var ρσ_Index13 = 0; ρσ_Index13 < ρσ_Iter13.length; ρσ_Index13++) {
                    handout = ρσ_Iter13[ρσ_Index13];
                    if (!ρσ_in(handout.id, all_ids)) {
                        orphaned.append(handout.id);
                    } else if (handout.archived) {
                        archived.append(handout.id);
                    }
                }
                if (archived.length > 0) {
                    folder = self._addZipFolder(journal, "Archived Handouts");
                    self._addJournalToZip(folder, archived, checkZipDone);
                }
                if (orphaned.length > 0) {
                    folder = self._addZipFolder(journal, "Orphaned Handouts");
                    self._addJournalToZip(folder, orphaned, checkZipDone);
                }
            }
            self.savingStep = 2;
            checkZipDone();
        };
        if (!Campaign.prototype._saveCampaignZipJournal.__argnames__) Object.defineProperties(Campaign.prototype._saveCampaignZipJournal, {
            __argnames__ : {value: ["checkZipDone"]}
        });
        Campaign.prototype._saveCampaignZipPage = function _saveCampaignZipPage(checkZipDone) {
            var self = this;
            var page, name, page_dir;
            if (self.savingPageIdx >= self.campaign.pages.length) {
                self.savingStep = 4;
            } else {
                page = (ρσ_expr_temp = self.campaign.pages)[ρσ_bound_index(self.savingPageIdx, ρσ_expr_temp)];
                self.savingPageIdx += 1;
                name = (len(page.name) > 0) ? page.name : "Untitled";
                console.log("Saving Page : ", name);
                name = self._makeNameUnique(self.names, name);
                page_dir = self._addZipFolder(self.pages, name);
                self._addPageToZip(page_dir, page, checkZipDone);
            }
            checkZipDone();
        };
        if (!Campaign.prototype._saveCampaignZipPage.__argnames__) Object.defineProperties(Campaign.prototype._saveCampaignZipPage, {
            __argnames__ : {value: ["checkZipDone"]}
        });
        Campaign.prototype._saveCampaignZipPages = function _saveCampaignZipPages(checkZipDone) {
            var self = this;
            console.log("Saving ", self.campaign.pages.length, " Pages");
            if (self.campaign.pages.length > 0) {
                self.pages = self._addZipFolder(self.zip, "pages");
                self.names = ρσ_list_decorate([]);
            }
            self.savingStep = 3;
            self.savingPageIdx = 0;
            checkZipDone();
        };
        if (!Campaign.prototype._saveCampaignZipPages.__argnames__) Object.defineProperties(Campaign.prototype._saveCampaignZipPages, {
            __argnames__ : {value: ["checkZipDone"]}
        });
        Campaign.prototype._saveCampaignZipJukebox = function _saveCampaignZipJukebox(checkZipDone) {
            var self = this;
            var jukebox;
            console.log("Saving Jukebox audio");
            if (self.campaign.jukeboxfolder.length > 0) {
                jukebox = self._addZipFolder(self.zip, "jukebox");
                self._addPlaylistToZip(jukebox, self.campaign.jukeboxfolder, checkZipDone);
            }
            self.savingStep = 5;
            self.savingPageIdx = 0;
            checkZipDone();
        };
        if (!Campaign.prototype._saveCampaignZipJukebox.__argnames__) Object.defineProperties(Campaign.prototype._saveCampaignZipJukebox, {
            __argnames__ : {value: ["checkZipDone"]}
        });
        Campaign.prototype.saveCampaignZip = function saveCampaignZip() {
            var self = this;
            var filename = (arguments[0] === undefined || ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? saveCampaignZip.__defaults__.filename : arguments[0];
            var ρσ_kwargs_obj = arguments[arguments.length-1];
            if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
            if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "filename")){
                filename = ρσ_kwargs_obj.filename;
            }
            var checkZipDone;
            if (self.zip !== null) {
                console.error("Saving already in progress. Can't be cancelled.");
                return;
            }
            filename = (filename) ? filename : self.title + ".zip";
            self.zip = self._createZipFile();
            self._total_size = 0;
            self.savingStep = 0;
            self._addFileToZip(self.zip, "campaign.json", toBlob(self.campaign));
            if (ρσ_exists.n(self.campaign.chat_archive)) {
                self._addFileToZip(self.zip, "chat_archive.json", toBlob(self.campaign.chat_archive));
            }
            checkZipDone = function () {
                if (!self.hasPendingOperation()) {
                    if ((self.savingStep === 0 || typeof self.savingStep === "object" && ρσ_equals(self.savingStep, 0))) {
                        self._saveCampaignZipCharacters(checkZipDone);
                    } else if ((self.savingStep === 1 || typeof self.savingStep === "object" && ρσ_equals(self.savingStep, 1))) {
                        self._saveCampaignZipJournal(checkZipDone);
                    } else if ((self.savingStep === 2 || typeof self.savingStep === "object" && ρσ_equals(self.savingStep, 2))) {
                        self._saveCampaignZipPages(checkZipDone);
                    } else if ((self.savingStep === 3 || typeof self.savingStep === "object" && ρσ_equals(self.savingStep, 3))) {
                        self._saveCampaignZipPage(checkZipDone);
                    } else if ((self.savingStep === 4 || typeof self.savingStep === "object" && ρσ_equals(self.savingStep, 4))) {
                        self._saveCampaignZipJukebox(checkZipDone);
                    } else {
                        self._saveZipToFile(self.zip, filename);
                        self.zip = null;
                    }
                    console.log("Download operations in progress : ", self._pending_operations.length);
                }
            };
            checkZipDone();
        };
        if (!Campaign.prototype.saveCampaignZip.__defaults__) Object.defineProperties(Campaign.prototype.saveCampaignZip, {
            __defaults__ : {value: {filename:null}},
            __handles_kwarg_interpolation__ : {value: true},
            __argnames__ : {value: ["filename"]}
        });
        Campaign.prototype.exportCampaignZip = function exportCampaignZip() {
            var self = this;
            var filename = (arguments[0] === undefined || ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? exportCampaignZip.__defaults__.filename : arguments[0];
            var ρσ_kwargs_obj = arguments[arguments.length-1];
            if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
            if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "filename")){
                filename = ρσ_kwargs_obj.filename;
            }
            self.parseCampaign((function() {
                var ρσ_anonfunc = function (campaign) {
                    self.saveCampaignZip(filename);
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["campaign"]}
                });
                return ρσ_anonfunc;
            })());
        };
        if (!Campaign.prototype.exportCampaignZip.__defaults__) Object.defineProperties(Campaign.prototype.exportCampaignZip, {
            __defaults__ : {value: {filename:null}},
            __handles_kwarg_interpolation__ : {value: true},
            __argnames__ : {value: ["filename"]}
        });
        Campaign.prototype.__repr__ = function __repr__ () {
                        return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Campaign.prototype.__str__ = function __str__ () {
            return this.__repr__();
        };
        Object.defineProperty(Campaign.prototype, "__bases__", {value: []});

        console.log("Roll20 Campaign exporter loaded.");
        console.log("To export your Roll20 campaign, enter R20Exporter.exportCampaignZip() and be patient.");
        console.log("DISCLAIMER: Please note that using this tool to export a module from the marketplace may infringe on the Marketplace Asset License and/or Roll20 EULA.");
        window.R20Exporter = new Campaign(window.$("head title").text().trim().replace(" | Roll20", ""));
    })();
})();