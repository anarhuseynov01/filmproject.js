function UI(){

}


UI.prototype.addFilmToUI = function(newFilm){
    //  < tr >
    //     <td><img src="" class="img-fluid img-thumbnail"></td>
    //         <td></td>
    //         <td></td>
    //         <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
    // </tr> 


    const filmlist = document.querySelector('#films');

    filmlist.innerHTML += `
         <tr>
            <td>
                <img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
                <td>${newFilm.title}</td>
                <td>${newFilm.director}</td>
                <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a>
            </td>
        </tr>
    `
}

UI.prototype.clearInputs = function(el1,el2,el3){
    el1.value = "";
    el2.value = "";
    el3.value = "";
}