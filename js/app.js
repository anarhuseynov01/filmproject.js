const form = document.getElementById('film-form');
const title =document.querySelector('#title');
const director = document.querySelector('#director');
const url = document.querySelector('#url');
const secondcardbody = document.querySelectorAll('.card-body')[1];

// create ui object
const ui = new UI();

const storage = new Storage();

// all events load

function eventListeners(){
    form.addEventListener('submit',addFilm);
    document.addEventListener('DOMContentLoaded',function(){
        let films;
        films = storage.getFilmsStorage();
        ui.loadAllfilms(films);
    });
    secondcardbody.addEventListener('click',deleteFilm);
}


eventListeners();


function addFilm(e){

    const titlevalue = title.value.trim();
    const directorvalue = director.value.trim();
    const urlvalue = url.value.trim();


    if( titlevalue === "" || directorvalue === "" || url === ""){
        // error

        ui.showMessage('Zehmet olmasa inputlari doldurun','danger');

    } else {
        // create new Film
        const newFilm = new Film(titlevalue,directorvalue,urlvalue);

        ui.addFilmToUI(newFilm);  // interface film add etme
        storage.addFilmToStorage(newFilm); // Storaga film yukleme
        ui.showMessage('Film ugurla yuklendu', 'success');
    }

    ui.clearInputs(title, director, url)

    e.preventDefault();
}


function deleteFilm(e){
    if(e.target.id === "delete-film"){
        ui.deleteFilmfromUI(e.target);
        storage.deleteFilmfromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.showMessage('Ugurla silindi','success');
    }
}

























