var check = 0;
function change() {
    var hz = document.getElementById("text");
    var button = document.getElementById("button");
    if (check == 0) {
        hz.style.opacity = 0;
        button.value = "원문 보기";                
        check +=1;
    } else {
        hz.style.opacity = 1;
        check = 0;
        button.value = "닫기";
    }
}