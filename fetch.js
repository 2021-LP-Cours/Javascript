const axios = require("axios")
// Ou
// import axios from "axios"


function getMarque(id) {
  axios.get("http://localhost/LPWD2021/wp-json/wp/v2/marque_chaussure/" + id)
  .then(function(reponse){
    let marque = reponse.data
    console.log("nom", marque.name)
  })
  .catch(function(erreur){
    console.log(erreur)
  })
}


function getChaussures() {
  axios.get("http://localhost/LPWD2021/wp-json/wp/v2/chaussures")
  .then(function(reponse){
    let chaussures = reponse.data

    chaussures.forEach(function(chaussure) {
      console.log(chaussure)

      console.log("id", chaussure.id)
      console.log("date" , chaussure.date)
      console.log("title" , chaussure.title.rendered)

      let marques = chaussure.marque_chaussure

      marques.forEach(function(marque){
        //console.log("Id marque" , marque)
        getMarque(marque)
      })
      
    });
  })
  .catch(function(erreur){
    console.log(erreur)
  })
}


function getChaussure(id) {
  axios.get("http://localhost/LPWD2021/wp-json/wp/v2/chaussures/" + id)
  .then(function(reponse){
    let maChaussure = reponse.data
    let lacets = maChaussure.acf.lacets

    lacets.forEach(function(lacet){
      console.log("Couleur du Lacet :", lacet["lacets-couleur"])
    })

  
  })
  .catch(function(erreur){
    console.log("Désolé je n'ai pas trouvé la chaussure")
    console.log(erreur)
  })
}


getChaussure(39)
getChaussures()
