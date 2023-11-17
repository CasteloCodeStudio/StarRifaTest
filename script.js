function menuShow(){

    let menuOpitions = document.querySelector('.buttons');
    if (menuOpitions.classList.contains('open')){
        menuOpitions.classList.remove('open');
    } else{
        menuOpitions.classList.add('open');
    }
}

function menuRifa(){

    let rifaMenu = document.querySelector('.rifa-page');
    if (rifaMenu.classList.contains('open')){
        rifaMenu.classList.remove('open');
    } else{
        rifaMenu.classList.add('open');
    }
}

function menuRifaAdd(){

    let rifaMenu = document.querySelector('.rifa-page-add');
    if (rifaMenu.classList.contains('open')){
        rifaMenu.classList.remove('open');
    } else{
        rifaMenu.classList.add('open');
    }
}

function removeItem(){

    let item = document.querySelector('.delete-item');
        if (item.classList.contains('open')){
            item.classList.remove('open');
        } else{
            item.classList.add('open');
        }
    }

    function truePassword() {
        let password = document.getElementById('password').value;
        let buttonEdit = document.querySelector('.button-edit');
        let menu = document.querySelector('.acessPage');

        if (password == "123") {
        buttonEdit.classList.add('open');
        menu.classList.remove('open');
        document.getElementById('password').value = "";
        } else {
          console.error("Seção invalida"); // Use console.error instead of print for error messages
        document.getElementById('password').value = "";
        }
    }
    document.querySelector('.button-acess').addEventListener('click', truePassword);

    
function menuAcess(){

    let menu = document.querySelector('.acessPage');
    if (menu.classList.contains('open')){
        menu.classList.remove('open');
    } else{
        menu.classList.add('open');
    }
}

function createRifa(){

    let menu = document.querySelector('.create-page');
    if (menu.classList.contains('open')){
        menu.classList.remove('open');
    } else{
        menu.classList.add('open');
    }
}

function openMenu(){

    let openmenu = document.querySelector('.options');
        if (openmenu.classList.contains('open')){
            openmenu.classList.remove('open');
        } else{
            openmenu.classList.add('open');
        }
    }

