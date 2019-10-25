var links = document.querySelectorAll('.link');
var content = document.querySelectorAll('.content');
for (var i=0; i<links.length; i++){
    (function (i){
        var link = links[i];
        link.addEventListener("click", function() {
            for (var j = 0; j < content.length; j++) {
                if (window.getComputedStyle(content[j]).display == 'block') {
                    content[j].style.display = "none";
                    links[j].classList.remove('activ');
                }
            }
            content[i].style.display = "block";
            links[i].classList.add('activ');
        });
    })(i);
}
var circles = document.querySelectorAll('.circle div');
var list = document.querySelectorAll('#list');
for (var i=0; i<circles.length; i++){
    (function (i){
        var circle = circles[i];
        circle.addEventListener("click", function() {
            for (var j = 0; j < list.length; j++) {
                if (window.getComputedStyle(list[j]).display == 'block') {
                    list[j].style.display = "none";
                    circles[j].classList.remove('circle_activ');
                }
            }
            list[i].style.display = "block";
            circles[i].classList.add('circle_activ');
        });
    })(i);
}
function valid(){
    var text = document.getElementById("take").value;
    if(text == '' || text == ' '){
        document.getElementById("return").innerHTML = 'Введите домен для проверки';
    }
    else{
        document.getElementById("return").innerHTML = 'Домен ' + text + ' - свободен. <a href="">Зарегистрировать за 39&#8381</a>';
    }
}