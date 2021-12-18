let jeSaisFaireAManger = false
let monPlat

function platReussi() {
  console.log("Mon plat est réussi")
  monPlat = {
    nom : "Risotto"
  }
  console.log(monPlat)
}
function platGastro() {
  console.log("Mon plat est réussi")
  monPlat = {
    nom : "Velouté de courgettes aux gambas"
  }
  console.log(monPlat)
}

function jeVaisAuDomac(){
  console.log("Mon plat est raté")
  monPlat = {
    nom : "DoMac"
  }
  console.log(monPlat)
}
function platRate(){
  console.log("Mon plat est raté")
  monPlat = {
    nom : "pâtes trop cuites"
  }
  console.log(monPlat)
}

function passerAuFromage(){
  console.log("passer au fromage")
}
function passerAuDessert(){
  console.log("passer au dessert")
}

function faireJogging(){
  console.log("Je pars faire un jogging")
}
/*

FONCTION AVEC CALLBACKS 
function faireAManger(maCompetence, succes, echec, suite, superSuite){
  if(maCompetence){
   succes()
  } else {
    echec()
  }
  suite()
  superSuite()
}


faireAManger(jeSaisFaireAManger, platReussi,  jeVaisAuDomac, passerAuFromage, passerAuDessert)



faireAManger(jeSaisFaireAManger, platGastro,  platRate, passerAuFromage, faireJogging)*/


// FONCTION AVEC PROMESSE

function faireAManger(competence) {
  return new Promise(function(succes, echec){
    if(competence){
      succes()
    } else {
      echec()
    }
  })
}


faireAManger(jeSaisFaireAManger).then(platReussi).catch(platRate).then(passerAuFromage).then(passerAuDessert).then(faireJogging)

