//  REPLY TO POST ON PAGES
//  REPLIES SURVIVE BROWSER
//  REFRESH & RESTART ...

let = response01.length;
let = response02.length;

let = response03.length;
let = response04.length;
let = response05.length;
let = response06.length;
let = response07.length;
let = response08.length;
let = response09.length;
let = response10.length;

//  window.onload = loadCOMMENTS;

function disabledCOMMENT() {
  audioWARN();
  alert('[ i ]  commenting has been disabled on this post ..');
}

function loadCOMMENTS() {   /* STORING COOKIES IS IMPOSSIBLE ON LOCAL FILES (CHROMIUM) */
  let response01 = localStorage.getItem("response01STORAGE");
  let response02 = localStorage.getItem("response02STORAGE");

  let response03 = localStorage.getItem("response02STORAGE");
  let response04 = localStorage.getItem("response02STORAGE");
  let response05 = localStorage.getItem("response02STORAGE");
  let response06 = localStorage.getItem("response02STORAGE");
  let response07 = localStorage.getItem("response02STORAGE");
  let response08 = localStorage.getItem("response02STORAGE");
  let response09 = localStorage.getItem("response02STORAGE");
  let response10 = localStorage.getItem("response02STORAGE");

  if (response01 !== null && data !== '') {
    document.getElementById("comments01").style["display"] = "block";
    console.log("[ i ] loaded comment from a variable 'response01'");
  }

  if (response02 !== null && data !== '') {
    document.getElementById("comments01").style["display"] = "block";
    console.log("[ i ] loaded comment from a variable 'response02'");
  }

  if (response03 !== null && data !== '') {
    document.getElementById("comments01").style["display"] = "block";
    console.log("[ i ] loaded comment from a variable 'response02'");
  }

  if (response04 !== null && data !== '') {
    document.getElementById("comments01").style["display"] = "block";
    console.log("[ i ] loaded comment from a variable 'response02'");
  }

  if (response05 !== null && data !== '') {
    document.getElementById("comments01").style["display"] = "block";
    console.log("[ i ] loaded comment from a variable 'response02'");
  }

  if (response06 !== null && data !== '') {
    document.getElementById("comments01").style["display"] = "block";
    console.log("[ i ] loaded comment from a variable 'response02'");
  }

  if (response07 !== null && data !== '') {
    document.getElementById("comments01").style["display"] = "block";
    console.log("[ i ] loaded comment from a variable 'response02'");
  }

  if (response08 !== null && data !== '') {
    document.getElementById("comments01").style["display"] = "block";
    console.log("[ i ] loaded comment from a variable 'response02'");
  }

  if (response09 !== null && data !== '') {
    document.getElementById("comments01").style["display"] = "block";
    console.log("[ i ] loaded comment from a variable 'response02'");
  }

  if (response10 !== null && data !== '') {
    document.getElementById("comments01").style["display"] = "block";
    console.log("[ i ] loaded comment from a variable 'response02'");
  }
}

function hideCOMMENT01() {
  document.getElementById("subCOM01").style["display"] = "none";
  document.getElementById("subCOM01X").style["display"] = "none";

  document.getElementById("subCOMshow01").style["display"] = "block";
}

function hideCOMMENT02() {
  document.getElementById("subCOM02").style["display"] = "none";
  document.getElementById("subCOM02X").style["display"] = "none";

  document.getElementById("subCOMshow02").style["display"] = "block";
}

function hideCOMMENT03() {
  document.getElementById("subCOM03").style["display"] = "none";
  document.getElementById("subCOM03X").style["display"] = "none";

  document.getElementById("subCOMshow03").style["display"] = "block";
}

function hideCOMMENT04() {
  document.getElementById("subCOM04").style["display"] = "none";
  document.getElementById("subCOM04X").style["display"] = "none";

  document.getElementById("subCOMshow04").style["display"] = "block";
}

function hideCOMMENT05() {
  document.getElementById("subCOM05").style["display"] = "none";
  document.getElementById("subCOM05X").style["display"] = "none";

  document.getElementById("subCOMshow05").style["display"] = "block";
}

function hideCOMMENT06() {
  document.getElementById("subCOM06").style["display"] = "none";
  document.getElementById("subCOM06X").style["display"] = "none";

  document.getElementById("subCOMshow06").style["display"] = "block";
}

function hideCOMMENT07() {
  document.getElementById("subCOM07").style["display"] = "none";
  document.getElementById("subCOM07X").style["display"] = "none";

  document.getElementById("subCOMshow07").style["display"] = "block";
}

function hideCOMMENT08() {
  document.getElementById("subCOM08").style["display"] = "none";
  document.getElementById("subCOM08X").style["display"] = "none";

  document.getElementById("subCOMshow08").style["display"] = "block";
}

function hideCOMMENT09() {
  document.getElementById("subCOM09").style["display"] = "none";
  document.getElementById("subCOM09X").style["display"] = "none";

  document.getElementById("subCOMshow09").style["display"] = "block";
}

function hideCOMMENT10() {
  document.getElementById("subCOM10").style["display"] = "none";
  document.getElementById("subCOM10X").style["display"] = "none";

  document.getElementById("subCOMshow10").style["display"] = "block";
}

function showCOMMENT01() {
  document.getElementById("subCOM01").style["display"] = "block";
  document.getElementById("subCOM01X").style["display"] = "block";

  document.getElementById("subCOMshow01").style["display"] = "none";
}

function showCOMMENT02() {
  document.getElementById("subCOM02").style["display"] = "block";
  document.getElementById("subCOM02X").style["display"] = "block";

  document.getElementById("subCOMshow02").style["display"] = "none";
}

function showCOMMENT03() {
  document.getElementById("subCOM03").style["display"] = "block";
  document.getElementById("subCOM03X").style["display"] = "block";

  document.getElementById("subCOMshow03").style["display"] = "none";
}

function showCOMMENT04() {
  document.getElementById("subCOM04").style["display"] = "block";
  document.getElementById("subCOM04X").style["display"] = "block";

  document.getElementById("subCOMshow04").style["display"] = "none";
}

function showCOMMENT05() {
  document.getElementById("subCOM05").style["display"] = "block";
  document.getElementById("subCOM05X").style["display"] = "block";

  document.getElementById("subCOMshow05").style["display"] = "none";
}

function showCOMMENT06() {
  document.getElementById("subCOM06").style["display"] = "block";
  document.getElementById("subCOM06X").style["display"] = "block";

  document.getElementById("subCOMshow06").style["display"] = "none";
}

function showCOMMENT07() {
  document.getElementById("subCOM07").style["display"] = "block";
  document.getElementById("subCOM07X").style["display"] = "block";

  document.getElementById("subCOMshow07").style["display"] = "none";
}

function showCOMMENT08() {
  document.getElementById("subCOM08").style["display"] = "block";
  document.getElementById("subCOM08X").style["display"] = "block";

  document.getElementById("subCOMshow08").style["display"] = "none";
}

function showCOMMENT09() {
  document.getElementById("subCOM09").style["display"] = "block";
  document.getElementById("subCOM09X").style["display"] = "block";

  document.getElementById("subCOMshow09").style["display"] = "none";
}

function showCOMMENT10() {
  document.getElementById("subCOM10").style["display"] = "block";
  document.getElementById("subCOM10X").style["display"] = "block";

  document.getElementById("subCOMshow10").style["display"] = "none";
}

function replyPOST01() {
  globalThis.response01 = prompt("[ ? ]  what do you think about this post ?");
  if (response01.length < 8) { audioERR(); alert('[ ! ]  warning !!\nyour comment is too short !!\nwrite at least 8 symbols of text ...'); delete response01; document.getElementById("comments01").style["display"] = "none"; replyPOST01() }
  if (response01.length > 50) { audioERR(); alert('[ ! ]  warning !!\nyour comment is too long !!\ntry avoiding writing too much text ... (limit is 50 characters)'); delete response01; document.getElementById("comments01").style["display"] = "none"; replyPOST01() }
  else {
    audioWARN();
    alert('[ i ]  your comment has been posted and sent to the author !');
    document.getElementById("comments01").style["display"] = "block";
    document.getElementById("subCOM01").style["display"] = "block";
    document.getElementById("subCOM01X").style["display"] = "block";
    
    localStorage.setItem("response01STORAGE", response01);
    console.log("[ i ] saved comment text to a variable 'response01'");
  }
}

function showREPLY01() {
  if (response01 == null) { alert('[ i ]  no comment to display yet ...') }
  else if (response01 == undefined) { alert('[ i ]  no comment to display yet ...') }
  else { alert("[ .. ]  @anonymous:\n>>  " + response01 + "\n\n[ i ]  end of the comment."); }
}

function replyPOST02() {
  globalThis.response02 = prompt("[ ? ]  what do you think about this post ?");
  if (response02.length < 8) { audioERR(); alert('[ ! ]  warning !!\nyour comment is too short !!\nwrite at least 8 symbols of text ...'); delete response02; document.getElementById("comments02").style["display"] = "none"; replyPOST02() }
  if (response02.length > 50) { audioERR(); alert('[ ! ]  warning !!\nyour comment is too long !!\ntry avoiding writing too much text ... (limit is 50 characters)'); delete response02; document.getElementById("comments02").style["display"] = "none"; replyPOST02() }
  else {
    audioWARN();
    alert('[ i ]  your comment has been posted and sent to the author !');
    document.getElementById("comments02").style["display"] = "block";
    document.getElementById("subCOM02").style["display"] = "block";
    document.getElementById("subCOM02X").style["display"] = "block";

    localStorage.setItem("response02STORAGE", response02);
    console.log("[ i ] saved comment text to a variable 'response02'");
  }
}

function showREPLY02() {
  if (response02 == null) { alert('[ i ]  no comment to display yet ...') }
  else if (response02 == undefined) { alert('[ i ]  no comment to display yet ...') }
  else { alert("[ .. ]  @anonymous:\n>>  " + response02 + "\n\n[ i ]  end of the comment .."); }
}

function replyPOST03() {
  globalThis.response03 = prompt("[ ? ]  what do you think about this post ?");
  if (response03.length < 8) { audioERR(); alert('[ ! ]  warning !!\nyour comment is too short !!\nwrite at least 8 symbols of text ...'); delete response03; document.getElementById("comments03").style["display"] = "none"; replyPOST03() }
  if (response03.length > 50) { audioERR(); alert('[ ! ]  warning !!\nyour comment is too long !!\ntry avoiding writing too much text ... (limit is 50 characters)'); delete response03; document.getElementById("comments03").style["display"] = "none"; replyPOST03() }
  else {
    audioWARN();
    alert('[ i ]  your comment has been posted and sent to the author !');
    document.getElementById("comments03").style["display"] = "block";
    document.getElementById("subCOM03").style["display"] = "block";
    document.getElementById("subCOM03X").style["display"] = "block";
    
    localStorage.setItem("response03STORAGE", response03);
    console.log("[ i ] saved comment text to a variable 'response03'");
  }
}

function showREPLY03() {
  if (response03 == null) { alert('[ i ]  no comment to display yet ...') }
  else if (response03 == undefined) { alert('[ i ]  no comment to display yet ...') }
  else { alert("[ .. ]  @anonymous:\n>>  " + response03 + "\n\n[ i ]  end of the comment."); }
}

function replyPOST04() {
  globalThis.response04 = prompt("[ ? ]  what do you think about this post ?");
  if (response04.length < 8) { audioERR(); alert('[ ! ]  warning !!\nyour comment is too short !!\nwrite at least 8 symbols of text ...'); delete response04; document.getElementById("comments04").style["display"] = "none"; replyPOST04() }
  if (response04.length > 50) { audioERR(); alert('[ ! ]  warning !!\nyour comment is too long !!\ntry avoiding writing too much text ... (limit is 50 characters)'); delete response04; document.getElementById("comments04").style["display"] = "none"; replyPOST04() }
  else {
    audioWARN();
    alert('[ i ]  your comment has been posted and sent to the author !');
    document.getElementById("comments04").style["display"] = "block";
    document.getElementById("subCOM04").style["display"] = "block";
    document.getElementById("subCOM04X").style["display"] = "block";
    
    localStorage.setItem("response04STORAGE", response04);
    console.log("[ i ] saved comment text to a variable 'response04'");
  }
}

function showREPLY04() {
  if (response04 == null) { alert('[ i ]  no comment to display yet ...') }
  else if (response04 == undefined) { alert('[ i ]  no comment to display yet ...') }
  else { alert("[ .. ]  @anonymous:\n>>  " + response04 + "\n\n[ i ]  end of the comment."); }
}

function replyPOST05() {
  globalThis.response05 = prompt("[ ? ]  what do you think about this post ?");
  if (response05.length < 8) { audioERR(); alert('[ ! ]  warning !!\nyour comment is too short !!\nwrite at least 8 symbols of text ...'); delete response05; document.getElementById("comments05").style["display"] = "none"; replyPOST05() }
  if (response05.length > 50) { audioERR(); alert('[ ! ]  warning !!\nyour comment is too long !!\ntry avoiding writing too much text ... (limit is 50 characters)'); delete response05; document.getElementById("comments05").style["display"] = "none"; replyPOST05() }
  else {
    audioWARN();
    alert('[ i ]  your comment has been posted and sent to the author !');
    document.getElementById("comments05").style["display"] = "block";
    document.getElementById("subCOM05").style["display"] = "block";
    document.getElementById("subCOM05X").style["display"] = "block";
    
    localStorage.setItem("response05STORAGE", response05);
    console.log("[ i ] saved comment text to a variable 'response05'");
  }
}

function showREPLY05() {
  if (response05 == null) { alert('[ i ]  no comment to display yet ...') }
  else if (response05 == undefined) { alert('[ i ]  no comment to display yet ...') }
  else { alert("[ .. ]  @anonymous:\n>>  " + response05 + "\n\n[ i ]  end of the comment."); }
}

function replyPOST06() {
  globalThis.response06 = prompt("[ ? ]  what do you think about this post ?");
  if (response06.length < 8) { audioERR(); alert('[ ! ]  warning !!\nyour comment is too short !!\nwrite at least 8 symbols of text ...'); delete response06; document.getElementById("comments06").style["display"] = "none"; replyPOST06() }
  if (response06.length > 50) { audioERR(); alert('[ ! ]  warning !!\nyour comment is too long !!\ntry avoiding writing too much text ... (limit is 50 characters)'); delete response06; document.getElementById("comments06").style["display"] = "none"; replyPOST06() }
  else {
    audioWARN();
    alert('[ i ]  your comment has been posted and sent to the author !');
    document.getElementById("comments06").style["display"] = "block";
    document.getElementById("subCOM06").style["display"] = "block";
    document.getElementById("subCOM06X").style["display"] = "block";
    
    localStorage.setItem("response06STORAGE", response06);
    console.log("[ i ] saved comment text to a variable 'response06'");
  }
}

function showREPLY06() {
  if (response06 == null) { alert('[ i ]  no comment to display yet ...') }
  else if (response06 == undefined) { alert('[ i ]  no comment to display yet ...') }
  else { alert("[ .. ]  @anonymous:\n>>  " + response06 + "\n\n[ i ]  end of the comment."); }
}

function replyPOST07() {
  globalThis.response07 = prompt("[ ? ]  what do you think about this post ?");
  if (response07.length < 8) { audioERR(); alert('[ ! ]  warning !!\nyour comment is too short !!\nwrite at least 8 symbols of text ...'); delete response07; document.getElementById("comments07").style["display"] = "none"; replyPOST07() }
  if (response07.length > 50) { audioERR(); alert('[ ! ]  warning !!\nyour comment is too long !!\ntry avoiding writing too much text ... (limit is 50 characters)'); delete response07; document.getElementById("comments07").style["display"] = "none"; replyPOST07() }
  else {
    audioWARN();
    alert('[ i ]  your comment has been posted and sent to the author !');
    document.getElementById("comments07").style["display"] = "block";
    document.getElementById("subCOM07").style["display"] = "block";
    document.getElementById("subCOM07X").style["display"] = "block";
    
    localStorage.setItem("response07STORAGE", response07);
    console.log("[ i ] saved comment text to a variable 'response07'");
  }
}

function showREPLY07() {
  if (response07 == null) { alert('[ i ]  no comment to display yet ...') }
  else if (response07 == undefined) { alert('[ i ]  no comment to display yet ...') }
  else { alert("[ .. ]  @anonymous:\n>>  " + response07 + "\n\n[ i ]  end of the comment."); }
}

function replyPOST08() {
  globalThis.response08 = prompt("[ ? ]  what do you think about this post ?");
  if (response08.length < 8) { audioERR(); alert('[ ! ]  warning !!\nyour comment is too short !!\nwrite at least 8 symbols of text ...'); delete response08; document.getElementById("comments08").style["display"] = "none"; replyPOST08() }
  if (response08.length > 50) { audioERR(); alert('[ ! ]  warning !!\nyour comment is too long !!\ntry avoiding writing too much text ... (limit is 50 characters)'); delete response08; document.getElementById("comments08").style["display"] = "none"; replyPOST08() }
  else {
    audioWARN();
    alert('[ i ]  your comment has been posted and sent to the author !');
    document.getElementById("comments08").style["display"] = "block";
    document.getElementById("subCOM08").style["display"] = "block";
    document.getElementById("subCOM08X").style["display"] = "block";
    
    localStorage.setItem("response08STORAGE", response08);
    console.log("[ i ] saved comment text to a variable 'response08'");
  }
}

function showREPLY08() {
  if (response08 == null) { alert('[ i ]  no comment to display yet ...') }
  else if (response08 == undefined) { alert('[ i ]  no comment to display yet ...') }
  else { alert("[ .. ]  @anonymous:\n>>  " + response08 + "\n\n[ i ]  end of the comment."); }
}

function replyPOST09() {
  globalThis.response09 = prompt("[ ? ]  what do you think about this post ?");
  if (response09.length < 8) { audioERR(); alert('[ ! ]  warning !!\nyour comment is too short !!\nwrite at least 8 symbols of text ...'); delete response09; document.getElementById("comments09").style["display"] = "none"; replyPOST09() }
  if (response09.length > 50) { audioERR(); alert('[ ! ]  warning !!\nyour comment is too long !!\ntry avoiding writing too much text ... (limit is 50 characters)'); delete response09; document.getElementById("comments09").style["display"] = "none"; replyPOST09() }
  else {
    audioWARN();
    alert('[ i ]  your comment has been posted and sent to the author !');
    document.getElementById("comments09").style["display"] = "block";
    document.getElementById("subCOM09").style["display"] = "block";
    document.getElementById("subCOM09X").style["display"] = "block";
    
    localStorage.setItem("response09STORAGE", response09);
    console.log("[ i ] saved comment text to a variable 'response09'");
  }
}

function showREPLY09() {
  if (response09 == null) { alert('[ i ]  no comment to display yet ...') }
  else if (response09 == undefined) { alert('[ i ]  no comment to display yet ...') }
  else { alert("[ .. ]  @anonymous:\n>>  " + response09 + "\n\n[ i ]  end of the comment."); }
}

function replyPOST10() {
  globalThis.response10 = prompt("[ ? ]  what do you think about this post ?");
  if (response10.length < 8) { audioERR(); alert('[ ! ]  warning !!\nyour comment is too short !!\nwrite at least 8 symbols of text ...'); delete response10; document.getElementById("comments10").style["display"] = "none"; replyPOST10() }
  if (response10.length > 50) { audioERR(); alert('[ ! ]  warning !!\nyour comment is too long !!\ntry avoiding writing too much text ... (limit is 50 characters)'); delete response10; document.getElementById("comments10").style["display"] = "none"; replyPOST10() }
  else {
    audioWARN();
    alert('[ i ]  your comment has been posted and sent to the author !');
    document.getElementById("comments10").style["display"] = "block";
    document.getElementById("subCOM10").style["display"] = "block";
    document.getElementById("subCOM10X").style["display"] = "block";
    
    localStorage.setItem("response10STORAGE", response10);
    console.log("[ i ] saved comment text to a variable 'response10'");
  }
}

function showREPLY10() {
  if (response10 == null) { alert('[ i ]  no comment to display yet ...') }
  else if (response10 == undefined) { alert('[ i ]  no comment to display yet ...') }
  else { alert("[ .. ]  @anonymous:\n>>  " + response10 + "\n\n[ i ]  end of the comment."); }
}
