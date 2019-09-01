var checkIfExists = setInterval(function() {
    var friendslist = document.getElementsByClassName("fbChatSidebarBody");

    if (friendslist) {
        clearInterval(checkIfExists);
        for (var i = 0; i < friendslist.length; i++) {
            friendslist[i].style.display = "none";
        }
    }
}, 25);