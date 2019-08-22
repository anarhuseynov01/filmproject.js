// function Storage(){

// }

// Storage.prototype.addFilmToStorage = function (newFilm) {
//     let films = this.getFilmsStorage();

//     films.push(newFilm);

//     localStorage.setItem("films",JSON.stringify(films));

// }


// Storage.prototype.getFilmsStorage = function(){
//     let films;

//     if (localStorage.getItem("films") === null) {
//         films = [];
//     } else {
//         films = JSON.parse(localStorage.getItem("films"));
//     }

//     return films;
// }

// Storage.prototype.deleteFilmfromStorage = function(title){
//     let films = this.getFilmsStorage();

//     films.forEach(function(film,index){
//         if(film.title === title){
//             films.splice(index,1);
//         }
//     })

//     localStorage.setItem('films',JSON.stringify(films));
// }


// Storage.prototype.clearAllfromUi = function(){
//     localStorage.removeItem('films');
// }


class Storage{
    static addFilmToStorage(newFilm) {
        let films = this.getFilmsStorage();

        films.push(newFilm);

        localStorage.setItem("films",JSON.stringify(films));

    }


    static getFilmsStorage(){
        let films;

        if (localStorage.getItem("films") === null) {
            films = [];
        } else {
            films = JSON.parse(localStorage.getItem("films"));
        }

        return films;
    }

    static deleteFilmfromStorage(title){
        let films = this.getFilmsStorage();

        films.forEach(function(film,index){
            if(film.title === title){
                films.splice(index,1);
            }
        })

        localStorage.setItem('films',JSON.stringify(films));
    }


    static clearAllfromUi(){
        localStorage.removeItem('films');
    }
}