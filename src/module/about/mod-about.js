function switchAboutView(viewIndex) {
	for (i = 0; i <= 5; i++) {
    document.getElementById("aboutIndex" + i).style.visibility='hidden';
    document.getElementById("aboutIndex" + i).style.opacity='0';
    document.getElementById("aboutQuote" + i).style.visibility='hidden';
    document.getElementById("aboutQuote" + i).style.opacity='0';
	}
	document.getElementById("aboutIndex" + viewIndex).style.visibility='visible';
	document.getElementById("aboutIndex" + viewIndex).style.opacity='1';
	document.getElementById("aboutQuote" + viewIndex).style.visibility='visible';
	document.getElementById("aboutQuote" + viewIndex).style.opacity='1';
}

function switchLeaderView(viewIndex) {
	for (i = 0; i <= 2; i++) {
	  document.getElementById("leaderIndex" + i).style.visibility='hidden';
    document.getElementById("leaderIndex" + i).style.opacity='0';
	}
	document.getElementById("leaderIndex" + viewIndex).style.visibility='visible';
	document.getElementById("leaderIndex" + viewIndex).style.opacity='1';
}

function focusLeaderPic(leader) {
	document.getElementById(leader).style.opacity='1';
}

function unfocusLeaderPic(leader) {
	document.getElementById(leader).style.opacity='.5';
}