function myFunction() {
    var checkBox = document.getElementsByName("service");
    var chks = checkBox.getElementByTagName("INPUT")
    var text = document.getElementById("contact_us");
    for (var i=0; i < chks.length; i++) {
 if (chks[i].checked){
    checked++;
}
if (checked > 0){
     text.style.display = "none";}
    else {
       text.style.display = "block";
    }
}
}


