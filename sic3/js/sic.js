window.onscroll = function() {navstick()};
function navstick(){
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {document.getElementById("myNav").className = "headerjs";
    }
    else{
        document.getElementById("myNav").className = "";
    }
}
