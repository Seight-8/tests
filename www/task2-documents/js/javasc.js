var content;
var size;
function name_file(files){
    var file = files[0];
    size = file.size/(1024*1024);
    console.log(size);
    if((file.size / 1024 /1024) < 1){
        if(((file.size / 1024)).toFixed(2) < 1){
            content = file.name + ' (' + (file.size + ' Байт)');
        }
        else{
            content = file.name + ' (' + ((file.size / 1024).toFixed(2) + ' Кб)');
        }
    }
    else{
        cotent = file.name + ' (' + ((file.size / (1024 * 1024)).toFixed(2) + ' Мб)');
    }
    console.log(content);
}
function input_name_file(){
    var text = document.getElementById("take").value;
    return text;
}
function addBlock(){
    var div_checking = document.createElement('div');
    var div_ok = document.createElement('div');
    var div_err = document.createElement('div');
    var div_err_red = document.createElement('div');
    var div_rand = [div_ok, div_err];
    var block;

    div_checking.innerHTML =
    '<div class="block_check">\
        <div class="grid">\
            <div class="checking">\
            </div>\
            <div class="text">\
                Файл загружен\
                <p id="file_name_checking">' + content + '</p>\
            </div>\
            <div class="status_check">\
                Идет проверка\
            </div>\
        </div>\
    </div>'


    div_ok.innerHTML =
    '<div class="block_ok">\
        <div class="grid">\
            <div class="ok">\
            </div>\
            <div class="text">\
                <p>' +
                input_name_file()
                + '</p>\
                <p id="file_name_ok">' + content + '</p>\
            </div>\
            <div class="status_ok">\
                Проверено\
            </div>\
        </div>\
    </div>'

    div_err.innerHTML =
    '<div class="block_err">\
        <div class="grid">\
            <a href="#modal">\
                <div class="load">\
                </div>\
            </a>\
            <div class="link">\
                <a href="#modal">Загрузить скан страницы с фотографией</a>\
                <p id="color_red">Размер файла не более 5Мб</p>\
            </div>\
            <div class="status_err">\
                Отклонено\
            </div>\
        </div>\
    </div>'

    div_err_red.innerHTML =
    '<div class="block_err">\
        <div class="grid">\
            <a href="#modal">\
                <div class="load">\
                </div>\
            </a>\
            <div class="link">\
                <a href="#modal">Загрузить скан страницы с фотографией</a>\
                <p style="color:#c43524">Размер файла не более 5Мб</p>\
            </div>\
            <div class="status_err">\
                Отклонено\
            </div>\
        </div>\
    </div>'

    function disp_non(clas){
        document.body.appendChild(block);
        for(var i=0; i < document.getElementsByClassName('block_check').length; i++){
            document.getElementsByClassName('block_check')[i].classList.add(clas);
        }
    }
    if(size > 5){
        document.body.appendChild(div_checking);
        setTimeout(() =>disp_non('disactiv'), 1000);
        block = div_err_red;
    }
    else{
        document.body.appendChild(div_checking);
        setTimeout(() =>disp_non('disactiv'), 1000);
        block = div_rand[Math.floor(Math.random() * 2)];
    }
}