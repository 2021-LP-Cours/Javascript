//scope du fichier
// Types "string"

//Declarer une variable
let prenom = "Alex"
let nom = 'Chautemps'
console.log(prenom + " " + nom)

//Changer sa valeur
prenom = "Bruno"
console.log(prenom + " " + nom)

//ATTENTION : const = Lecture seule

const anneeDeNaissance = 1993
//Impossible de lui changer sa valeur
/* anneeDeNaissance = 2000 // Uncaught TypeError: Assignment to constant variable */
console.log(anneeDeNaissance) // 1993

// Type "number"
let age = 28
let anneesExperience = 7
console.log(age + anneesExperience)

//Attention nombre à virgule
let a = 0.1
let b = 0.2

console.log((a*10+b*10)/10)


// Type Boolean
let jeSuisVieux = false



// Type null
let valeurPourLeFutur = null
console.log(valeurPourLeFutur)

// Type Undefined
let maVariable
console.log(maVariable)


// Function avec 2 paramètres
function parler(message, message2){
  console.log(message)
  console.log(message2)
}

parler("Bonjour à tous", "Comment ça va ?")
parler("Au revoir", "Bonne fin de journée")


//Function anonyme
setTimeout(function(){
  console.log("Affichage après 2s")
}, 2000)

// Function nommée
function display(){
  console.log("Affichage après 2s")
}
setTimeout(display, 2000)


function suisJeJeune(age){
  // Conditions
  if (age > 50) {
    // un autre scope
    console.log("Je suis vieux ! Coup dur")
    return age
  } else {
    // encore un autre scope
    console.log("Je suis jeune, yes !")
    return false
  }
}

console.log(suisJeJeune(55))



// Boucler un tableau + bonus: un tableau dans un tableau
let monTableau = ["Homer", "Marge", ["Maggie" , "Lisa", "Bart"]]

function afficherUnPersonnage(index, personnage){
  console.log(index, personnage)
}

// Via "forEach"
monTableau.forEach(function(personnage, index){
  // Si le la valeur de mon tableau est un "Array"
  if(Array.isArray(personnage)){
    // Je boucle la valeur stockée dans personnage
    personnage.forEach(function(personnage, index){
      afficherUnPersonnage(index, personnage)
    })
  } else{
    // Si ce n'est pas un tableau je l'affiche
    afficherUnPersonnage(index, personnage)
  }
})

// La même chose via "for"
for(let i = 0; i < monTableau.length; i++) {
  let personnage = monTableau[i]
  if(Array.isArray(personnage)){
    for(let j = 0; j < personnage.length; j++){
      let enfant = personnage[j]
      console.log(j, enfant)
    }
  } else {
    console.log(i, personnage)
  }
  
}


// Object Utilisateur
let utilisateur = {
  prenom: "Alex",
  nom: 'Chautemps',
  age: 28,
  vieux : false,
  parler: function(message){
    console.log(message)
  }
}


//trouver la valeur d'une clé avec la notation "."
console.log(utilisateur.prenom)

//trouver la valeur d'une clé avec la notation []
// chaine de charactères directement dans les crochets
console.log(utilisateur["nom"])

// ou via une variable
let maCleATrouver = "nom"
console.log(utilisateur[maCleATrouver])

// Changer une valeur dans un objet
utilisateur.prenom = "Bruno"
console.log(utilisateur)

// Appeler la méthode (funtion) dans l'objet
utilisateur.parler("Dis un message !")


