const form = document.getElementById('film-form');
const title =document.querySelector('#title');
const director = document.querySelector('#director');
const url = document.querySelector('#url');
const secondcardbody = document.querySelectorAll('.card-body')[1];
const clearall = document.querySelector('#clear-films');

// create ui object
// const ui = new UI();

// const storage = new Storage();

// all events load

function eventListeners(){
    form.addEventListener('submit',addFilm);
    document.addEventListener('DOMContentLoaded',function(){
        let films;
        films = Storage.getFilmsStorage();
        UI.loadAllfilms(films);
    });
    secondcardbody.addEventListener('click',deleteFilm);
    clearall.addEventListener('click',clearAll)
}


eventListeners();


function addFilm(e){
    const titlevalue = title.value.trim();
    const directorvalue = director.value.trim();
    const urlvalue = url.value.trim();

    if (titlevalue === "" ||  directorvalue === "" || urlvalue === "") {
        // error
        UI.showMessage('Zehmet olmasa inputlari doldurun', 'danger');
         
    } else {
        // create new Film
        const newFilm = new Film(titlevalue,directorvalue,urlvalue);

        UI.addFilmToUI(newFilm); // interface film add etme
        Storage.addFilmToStorage(newFilm); // Storaga film yukleme
        UI.showMessage('Film ugurla yuklendu', 'success');
        
    }

    UI.clearInputs(title, director, url)

    e.preventDefault();

    
}


function deleteFilm(e){
    if(e.target.id === "delete-film"){
        UI.deleteFilmfromUI(e.target);
        Storage.deleteFilmfromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.showMessage('Ugurla silindi', 'success');
    }
}



function clearAll(){
    if(confirm('Are you sure?')){
         UI.clearAllfromUi();
         Storage.clearAllfromUi();
    }
}





















