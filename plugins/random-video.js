const _0xc97da3=_0x2a78;(function(_0xe6f4bd,_0x263b63){const _0x1adf2b=_0x2a78,_0x5c84a9=_0xe6f4bd();while(!![]){try{const _0x4123ab=parseInt(_0x1adf2b(0x12c))/0x1+-parseInt(_0x1adf2b(0x138))/0x2+parseInt(_0x1adf2b(0x13b))/0x3*(parseInt(_0x1adf2b(0x121))/0x4)+parseInt(_0x1adf2b(0x13d))/0x5+parseInt(_0x1adf2b(0x131))/0x6+parseInt(_0x1adf2b(0x12f))/0x7+-parseInt(_0x1adf2b(0x143))/0x8;if(_0x4123ab===_0x263b63)break;else _0x5c84a9['push'](_0x5c84a9['shift']());}catch(_0x3e42df){_0x5c84a9['push'](_0x5c84a9['shift']());}}}(_0x4fe1,0x22a71));function _0x2a78(_0x18be45,_0x596604){const _0x4fe15d=_0x4fe1();return _0x2a78=function(_0x2a78b7,_0x5eabe9){_0x2a78b7=_0x2a78b7-0x120;let _0x2a0fa3=_0x4fe15d[_0x2a78b7];return _0x2a0fa3;},_0x2a78(_0x18be45,_0x596604);}const axios=require(_0xc97da3(0x130)),fs=require('fs'),path=require(_0xc97da3(0x140)),{cmd,commands}=require(_0xc97da3(0x120)),config=require(_0xc97da3(0x12e));cmd({'pattern':_0xc97da3(0x127),'desc':_0xc97da3(0x123),'category':'fun','react':'🎥','filename':__filename},async(_0x2f2cf0,_0x12d0ca,_0x5ba666,{from:_0x318f2c,quoted:_0x18db56,body:_0x5f18ea,isCmd:_0x1e33e1,command:_0x7644e0,args:_0x38777e,q:_0x2a05c0,isGroup:_0x5874e0,sender:_0x2c7d6f,senderNumber:_0x48b6a8,botNumber2:_0x28c79a,botNumber:_0x23cede,pushname:_0x12b9ef,isMe:_0x58ef83,isOwner:_0x9ce49c,groupMetadata:_0x3628d9,groupName:_0x42a889,participants:_0x5c6107,groupAdmins:_0x271d33,isBotAdmins:_0x45fc8e,isAdmins:_0xd49536,reply:_0x271909})=>{const _0x3782fd=_0xc97da3;try{await _0x2f2cf0[_0x3782fd(0x142)](_0x318f2c,{'text':_0x3782fd(0x13e)},{'quoted':_0x12d0ca});const _0x1257e7=_0x3782fd(0x13c)+(Math[_0x3782fd(0x135)](Math['random']()*0x64)+0x1),_0x44e674=await axios[_0x3782fd(0x129)](_0x1257e7,{'headers':{'Authorization':config[_0x3782fd(0x132)]}}),_0x758c00=_0x44e674[_0x3782fd(0x12d)][_0x3782fd(0x128)][0x0];if(!_0x758c00||!_0x758c00[_0x3782fd(0x13f)]||_0x758c00[_0x3782fd(0x13f)][_0x3782fd(0x122)]===0x0)throw new Error(_0x3782fd(0x137));const _0x1229f3=_0x758c00[_0x3782fd(0x13f)][0x0]['link'],_0x202d1f=_0x758c00[_0x3782fd(0x12a)]||_0x3782fd(0x124),_0x140bdf=path[_0x3782fd(0x125)](__dirname,'tempVideo.mp4'),_0x4223fe=fs[_0x3782fd(0x12b)](_0x140bdf),_0x1d0901=await axios[_0x3782fd(0x129)](_0x1229f3,{'responseType':'stream'});_0x1d0901[_0x3782fd(0x12d)][_0x3782fd(0x13a)](_0x4223fe),_0x4223fe['on']('finish',async()=>{const _0x1ff6c2=_0x3782fd;await _0x2f2cf0['sendMessage'](_0x318f2c,{'text':'✅\x20*Your\x20video\x20has\x20been\x20successfully\x20downloaded!*\x20✅'},{'quoted':_0x12d0ca}),await _0x2f2cf0[_0x1ff6c2(0x142)](_0x318f2c,{'video':{'url':_0x140bdf},'caption':_0x1ff6c2(0x139)+_0x202d1f+'\x0a>\x20MAXBOT-MD'},{'quoted':_0x12d0ca}),fs[_0x1ff6c2(0x136)](_0x140bdf);}),_0x4223fe['on'](_0x3782fd(0x126),_0x4943ec=>{const _0x3ba5e5=_0x3782fd;console[_0x3ba5e5(0x133)](_0x4943ec),_0x271909(_0x3ba5e5(0x134)+_0x4943ec[_0x3ba5e5(0x141)]);});}catch(_0x53a041){console[_0x3782fd(0x133)](_0x53a041),_0x271909('❌\x20Error\x20fetching\x20video:\x20'+_0x53a041[_0x3782fd(0x141)]);}});function _0x4fe1(){const _0x8a738e=['Fetch\x20and\x20send\x20a\x20random\x20video\x20from\x20Pexels.','Random\x20Video','join','error','rvideo','videos','get','title','createWriteStream','247720gqJtDt','data','../config','1437303khDfZF','axios','1367088SGTHRy','PEXELS_API_KEY','log','❌\x20Error\x20downloading\x20video:\x20','floor','unlinkSync','No\x20video\x20files\x20found\x20in\x20the\x20response','239304GiPtAs','🎥\x20*Random\x20Pexels\x20Video*\x20🎥\x0a\x0aTitle:\x20','pipe','3erwvSn','https://api.pexels.com/videos/search?query=random&per_page=1&page=','627605FNossu','⏳\x20*Waiting,\x20your\x20video\x20is\x20downloading...*\x20⏳','video_files','path','message','sendMessage','6331696YckcLV','../command','986532zqcEvT','length'];_0x4fe1=function(){return _0x8a738e;};return _0x4fe1();}
