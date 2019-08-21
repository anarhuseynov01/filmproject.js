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
                <td>${newFilm.directory}</td>
                <td><a href="#" id="delete-film" class="btn btn-danger">Delete Film</a>
            </td>
        </tr>
    `
}

UI.prototype.clearInputs = function(el1,el2,el3){
    el1.value = "";
    el2.value = "";
    el3.value = "";
}


UI.prototype.showMessage = function(message,type){

    const firstcardbody = document.querySelector('.card-body');

    // const div = `
    //     <div class = "alert alert-${type}"
    //     role = "alert" >
    //         ${message}
    //     </div>
    // `;


    // firstcardbody.innerHTML += div;


    

    // setTimeout(function(){
    //     firstcardbody.lastElementChild.remove();
    // },1000)

    // console.log(firstcardbody);


    const div = document.createElement('div');
    div.className = `alert alert-${type}`;
    div.textContent = message;


    firstcardbody.appendChild(div);

    setTimeout(function(){
        div.remove();
    },1500)


}


UI.prototype.loadAllfilms = function(films){
    const filmList = document.getElementById('films');
    films.forEach(film => {
        filmList.innerHTML += `
                <tr>
                    <td>
                        <img src = "${film.url}"
                        class="img-fluid img-thumbnail">
                    </td>
                        <td>${film.title}</td>
                        <td> ${film.directory}</td>
                        <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
                </tr>
        `;
    });
}


UI.prototype.deleteFilmfromUI = function(element){
    element.parentElement.parentElement.remove();
}

UI.prototype.clearAllfromUi = function(){
    const filmList = document.querySelector('#films');

    while(filmList.firstElementChild !== null) {
        // console.log(filmList.firstElementChild);
        filmList.firstElementChild.remove();
    }
}