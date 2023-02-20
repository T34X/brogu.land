let html = document.getElementsByTagName('html');
let class_name = html[0].className;

let mode_switcher = document.getElementsByClassName('mode');

if(class_name=="dark") document.getElementsByClassName('mode')[0].innerHTML = "Light Mode."
else mode_switcher[0].innerHTML = "Dark Mode";
console.log(html[0].className)
function changeMode(){
    let html = document.getElementsByTagName('html');
    let class_name = html[0].className;
    let mode_switcher = document.getElementsByClassName('mode');
    if (class_name=="dark"){
        html[0].className = "light"
    }else{
        html[0].className = "dark"
    }
}

window.onload = function() {
    document.getElementsByTagName("button")[0].addEventListener('click',
    changeMode)
}
console.log(html[0].className)