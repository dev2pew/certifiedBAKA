// local comment system
// made by chatGPT

function disabledCOMMENT() {
  audioWARN();
  alert('[ i ]  commenting has been disabled on this post ..');
}

function replyPOST(postID) {
  let replyTXT = prompt(" [ ? ]  what do you think about this post ?\n [ i ]  (8-35 characters long)");

  if (replyTXT) {
    if (replyTXT.length < 8 || replyTXT.length > 35) {
      audioERR();
      alert("[ ! ]  warning !!\nyour comment is too short or too long !!\nwrite at least 8 symbols or 35 symbols max ...");
      replyPOST(postID);
      return;
    }

    let commentHeader = document.getElementById("commentHeader");
    let commentHeaderTXT = document.getElementById("commentHeaderTXT");

    if (!commentHeader) {
      commentHeader = document.createElement("div"); // comments header
      commentHeader.id = "commentHeader";
      commentHeader.className = "postBOTTOM paragraphMARGIN";
      commentHeader.style.display = "block";

      commentHeaderTXT = document.createElement("p"); // comments header text
      commentHeaderTXT.id = "commentHeaderTXT";
      commentHeaderTXT.style.color = "cornflowerblue";
      commentHeaderTXT.style.float = "left"; // prevent inline comments
      commentHeaderTXT.textContent = "[ ... ] comments";
      commentHeaderTXT.style.float = "left";

      commentHeader.appendChild(commentHeaderTXT);

      let commentsSection = document.getElementById("repliesBLOCK" + postID); 
      commentsSection.style.display = "block"; // show comment section if hidden
      commentsSection.parentNode.insertBefore(commentHeader, commentsSection); // bundle commentHeader to commentsSection
    }

    let hideCommentsBT = document.getElementById("hideCommentsBT" + postID);
    let showCommentsBT = document.getElementById("showCommentsBT" + postID);

    if (!hideCommentsBT) {
      hideCommentsBT = document.createElement("span");
      hideCommentsBT.id = "hideCommentsBT" + postID;
      hideCommentsBT.style.display = "inline"; // oldVALUE: none
      hideCommentsBT.style.float = "right";
      hideCommentsBT.innerHTML = '<span class="toolTIP toolTIPalt"> <a id="subCOM' + postID + 'X" href="javascript:hideCOMMENT(' + postID + ')"> <span style="color: tomato">[X]</span> </a> <span class="toolTIPtxt toolTIPtxtALT"> close comments </span> </span>';

      let commentsContainer = document.getElementById("repliesSECTION" + postID); // append the new comment to comment section
      commentsContainer.appendChild(hideCommentsBT); // Add hide comments button
    }

    if (!showCommentsBT) {
      showCommentsBT = document.createElement("span");
      showCommentsBT.id = "showCommentsBT" + postID;
      showCommentsBT.style.float = "right";
      showCommentsBT.innerHTML = '<span class="toolTIP toolTIPalt"> <a id="subCOMshow' + postID + '" href="javascript:showCOMMENT(' + postID + ')"> <span style="color: chartreuse;">[^]</span> </a> <span class="toolTIPtxt" style="margin-left: -50px;"> restore </span>';

      let commentsContainer = document.getElementById("repliesSECTION" + postID); // append the new comment to comment section
      commentsContainer.appendChild(showCommentsBT); // Add hide comments button
    }

    let commentElement = document.createElement("div"); // create new comment element
    commentElement.className = "postCOMMENTS";

    let commentContent = document.createElement("p"); // create comment element
    commentContent.style.color = "gray";

    let commentUsername = document.createElement("span"); // create comment username element

    let usernameLink = document.createElement("span");
    usernameLink.href = "javascript:alert('[ i ]  this user is anonymous ..')";
    usernameLink.innerHTML = '<span style="color: cornflowerblue;"> <span class="toolTIP oneComment"> <a>@anonymous</a> <span class="toolTIPtxt" style="margin-left: -45px"> username </span> </span> </span>';
    usernameLink.style.clear = 'both';

    let usernameTooltip = document.createElement("span");

    commentUsername.appendChild(usernameLink);
    commentUsername.appendChild(usernameTooltip);

    commentContent.appendChild(commentUsername);
    commentContent.innerHTML += ' :: <a style="color: rgb(150, 150, 150);"> ' + replyTXT + ' </a>';
    commentContent.style.clear = 'both';

    commentElement.appendChild(commentContent);

    let commentsContainer = document.getElementById("repliesSECTION" + postID); // append the new comment to comment section
    commentsContainer.appendChild(commentElement);

    let commentsSection = document.getElementById("repliesBLOCK" + postID); 
    commentsSection.style.display = "block"; // show comment section if hidden

    let hideCommentsButton = document.getElementById("subCOM" + postID + "X");
    hideCommentsButton.style.display = "inline";

    audioWARN();
    alert("[ i ]  your comment has been posted and sent to the author !");
  }
}

function hideCOMMENT(postID) {
  let commentsSection = document.getElementById("repliesBLOCK" + postID);
  commentsSection.style.display = "none";
}

function showCOMMENT(postID) {
  let commentsSection = document.getElementById("repliesBLOCK" + postID);
  commentsSection.style.display = "block";
}
