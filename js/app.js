const form = document.getElementById('film-form');
const title =document.querySelector('#title');
const director = document.querySelector('#director');
const url = document.querySelector('#url');


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
    })
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