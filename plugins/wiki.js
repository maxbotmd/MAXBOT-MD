function _0x4c48(){const _0x2826da=['30QnwxYH','promisify','5247156bZODCP','sendMessage','axios','7590CcqpQr','Please\x20provide\x20a\x20search\x20term.','util','https://en.wikipedia.org/api/rest_v1/page/summary/','95uGdZdP','other','length','147ZquAVg','get','\x0a\x0a>\x20MAX\x20BOT\x20MD','2515644SMtIWw','log','437575hwCUGC','85992KgweUd','pipeline','data','join','../command','9CJFpOz','3866470Snlpbn','11pxAodm','*\x0a\x0a','224550dGWCrF'];_0x4c48=function(){return _0x2826da;};return _0x4c48();}const _0x1baaed=_0x32b2;(function(_0x2ca56f,_0x588c19){const _0x8858ff=_0x32b2,_0x490cc0=_0x2ca56f();while(!![]){try{const _0x59d61b=-parseInt(_0x8858ff(0x8f))/0x1*(parseInt(_0x8858ff(0x8b))/0x2)+-parseInt(_0x8858ff(0x85))/0x3+parseInt(_0x8858ff(0x95))/0x4+parseInt(_0x8858ff(0x97))/0x5*(-parseInt(_0x8858ff(0x86))/0x6)+-parseInt(_0x8858ff(0x92))/0x7*(parseInt(_0x8858ff(0x98))/0x8)+parseInt(_0x8858ff(0x9d))/0x9*(parseInt(_0x8858ff(0x82))/0xa)+-parseInt(_0x8858ff(0x83))/0xb*(-parseInt(_0x8858ff(0x88))/0xc);if(_0x59d61b===_0x588c19)break;else _0x490cc0['push'](_0x490cc0['shift']());}catch(_0x3f8014){_0x490cc0['push'](_0x490cc0['shift']());}}}(_0x4c48,0x5675e));const axios=require(_0x1baaed(0x8a)),{cmd,commands}=require(_0x1baaed(0x9c)),fs=require('fs'),util=require(_0x1baaed(0x8d)),streamPipeline=util[_0x1baaed(0x87)](require('stream')[_0x1baaed(0x99)]),config=require('../config');function _0x32b2(_0x11a44d,_0x30d356){const _0x4c4876=_0x4c48();return _0x32b2=function(_0x32b2e1,_0x13bf62){_0x32b2e1=_0x32b2e1-0x82;let _0x978ff5=_0x4c4876[_0x32b2e1];return _0x978ff5;},_0x32b2(_0x11a44d,_0x30d356);}cmd({'pattern':'wiki','desc':'Search\x20Wikipedia\x20and\x20get\x20a\x20summary.','category':_0x1baaed(0x90),'react':'📚','filename':__filename},async(_0x23d02c,_0x1a0675,_0x404ffe,{from:_0x37448c,args:_0x4b68a1,reply:_0xd1aed0})=>{const _0x1ddd9f=_0x1baaed;try{if(_0x4b68a1[_0x1ddd9f(0x91)]<0x1)return _0xd1aed0(_0x1ddd9f(0x8c));const _0x1716b7=_0x4b68a1[_0x1ddd9f(0x9b)]('\x20'),_0xcac357=_0x1ddd9f(0x8e)+encodeURIComponent(_0x1716b7),_0x496ebf=await axios[_0x1ddd9f(0x93)](_0xcac357),{extract:_0x22f8cb,title:_0x288597}=_0x496ebf[_0x1ddd9f(0x9a)],_0x24c2bf='*'+_0x288597+_0x1ddd9f(0x84)+_0x22f8cb+_0x1ddd9f(0x94);return await _0x23d02c[_0x1ddd9f(0x89)](_0x37448c,{'text':_0x24c2bf},{'quoted':_0x1a0675});}catch(_0x161537){console[_0x1ddd9f(0x96)](_0x161537),_0xd1aed0('An\x20error\x20occurred\x20while\x20searching\x20Wikipedia.');}});
