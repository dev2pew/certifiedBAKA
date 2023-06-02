// local comments system

let = response01.length;
let = response02.length;

//  window.onload = loadCOMMENTS;

function disabledCOMMENT() {
  audioWARN();
  alert('[ i ]  commenting has been disabled on this post ..');
}

function loadCOMMENTS() {   /* STORING COOKIES IS IMPOSSIBLE ON LOCAL FILES (CHROMIUM) */
  let response01 = localStorage.getItem("response01STORAGE");
  let response02 = localStorage.getItem("response02STORAGE");

  if (response01 !== null && data !== '') {
    document.getElementById("comments01").style["display"] = "block";
    console.log("[ i ] loaded comment from a variable 'response01'");
  }

  if (response02 !== null && data !== '') {
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
