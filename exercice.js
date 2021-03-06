

let chaussures = [
  {
    marque : "Nike",
    titre : "Jordan Air",
    collector : true,
    taillesDispo : [28, 29, 30],
    prix : 300,
    elements : {
      lacets : "rouge",
      corps : "blanc",
      semelle : "bleu"
    }
  },
  {
    marque : "Vans",
    titre : "Old Skool",
    collector : false,
    taillesDispo : [34, 36, 38],
    prix : 70,
    elements : {
      lacets : "noir",
      corps : "marron"
    }
  },
  {
    marque : "Adidas",
    titre : "Stan Smith",
    collector : false,
    taillesDispo : [40, 42, 44],
    prix : 100,
    elements : {
      lacets : "vert",
      corps : "blanc"
    }
  },
  {
    marque : "Nike",
    titre : "Air Force",
    collector : true,
    taillesDispo : [36, 37, 38],
    prix : 200,
    elements : {
      lacets : "bleu",
      corps : "marron"
    }
  },
  {
    marque : "Nike",
    titre : "Air Max",
    collector : true,
    taillesDispo : [36, 38, 40],
    prix : 900,
    elements : {
      lacets : "jaune",
      corps : "vert"
    }
  },
  {
    marque : "Vans",
    titre : "Era",
    collector : false,
    taillesDispo : [30, 32, 40],
    prix : 40,
    elements : {
      lacets : "bleu",
      corps : "noir"
    }
  },
  {
    marque : "Vans",
    titre : "Sk8",
    collector : false,
    taillesDispo : [28, 30, 26],
    prix : 40,
    elements : {
      lacets : "bleu",
      corps : "noir",
      languette : "rouge"
    }
  },
  {
    marque : "Vans",
    titre : "Old Skool",
    collector : false,
    taillesDispo : [36, 28, 60],
    prix : 60,
    elements : {
      lacets : "blanc",
      corps : "noir",
      languette : "noir"
    }
  },
  {
    marque : "Nike",
    titre : "Nike SB",
    collector : false,
    taillesDispo : [30, 31, 32],
    prix : 50,
    elements : {
      lacets : "blanc",
      corps : "noir"
    }
  },
  {
    marque : "Adidas",
    titre : "Old Skool",
    collector : false,
    taillesDispo : [29, 30, 32],
    prix : 70,
    elements : {
      lacets : "rouge",
      corps : "bleu"
    }
  }
]

// Faire une boucle sur tout le tableau et de log les chaussures une par une

/*for(let i = 0; i < chaussures.length; i++){
  console.log("La Chaussure de Marque : " + chaussures[i].marque + " et Mod??le : " + chaussures[i].titre)
}*/

/*chaussures.forEach(function(chaussure){
  console.log("La Chaussure de Marque : " + chaussure.marque + " et Mod??le : " + chaussure.titre)
})*/


// Log un tableau de toutes les Nikes

chaussures.filter(function(chaussure){
  return chaussure.marque == "Nike"
 }).forEach(function(chaussure){
  console.log("La Chaussure de Marque : " + chaussure.marque + " et Mod??le : " + chaussure.titre)
})



// Log du prix des Vans "Old Skool"

chaussures.filter(function(chaussure){
  return chaussure.marque == "Vans" && chaussure.titre == "Old Skool"
 }).forEach(function(chaussure){
  console.log("La Chaussure de Marque : " + chaussure.marque + " et prix : " + chaussure.prix + "???")
})



// Log un tableau de toutes les chaussures collector

chaussures.filter(function(chaussure){
  return chaussure.collector == true
 }).forEach(function(chaussure){
  console.log("La Chaussure de Marque : " + chaussure.marque + " et mod??le " + chaussure.titre + " est Collector")
})


// Log couleur lacets de la vans Sk8

chaussures.filter(function(chaussure){
  return chaussure.marque == "Vans" && chaussure.titre == "Sk8"
 }).forEach(function(chaussure){
  console.log("La Chaussure de Marque : " + chaussure.marque + " et couleur lacet : " + chaussure.elements.lacets)
})

let laChaussure = chaussures.find(function(chaussure){
  return chaussure.marque == "Vans" && chaussure.titre == "Sk8"
})
console.log(laChaussure.elements.lacets)


// Changer la couleur de la vans Sk8 en violet et log la chaussure
laChaussure.elements.lacets = "Violet"

console.log(chaussures)