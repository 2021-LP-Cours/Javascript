# Javascript
**Sommaire**
- [1. Les types de variables](#1-les-types-de-variables)
  - [1.1 String](#11-string)
  - [1.2. Number](#12-number)
  - [1.3. Boolean](#13-boolean)
  - [1.4. Null](#14-null)
  - [1.5. Undefined](#15-undefined)
  - [1.6. Array](#16-array)
  - [1.7. Object](#17-object)

# 1. Les types de variables 

Ces types nous les classons en deux grandes catégories de variables :

- **Variables primitives:** s*tring, number, boolean, undefined, null.*
On dit primitives car elles sont “simples”, elles ne contiennent qu’une seule valeur. Peu importe le type de la valeur primitive, une variable se déclare en lui donnant un nom et en lui affectant une valeur.
- **Variables complexes:** *Object, Array, Map, Set, ...*
On dit complexes car elles sont capables de stocker de multiples valeurs.

A noter : En JavaScript, toutes les variables complexes sont des Objets.  *Array, Map, Set,* etc… ne sont pas des types, mais des instances de *Object.*, elles héritent du prototype de *Object.*

## 1.1. String
*Variable primitive*

Un type string correspond à une chaine de caractères. La variable se déclare en mettant notre chaine de caractères entre 2 simple quotes ``` ' ``` ou 2 double quotes ``` " ```

```JS
// string

var prenom = 'Alex';

var nom = "Chautemps";

```
Les variables de type string peuvent être utilisées en concaténation
```JS
  console.log(prenom + nom)
  // AlexChautemps
  
  console.log(prenom + " " + nom)
  // Alex Chautemps

```

## 1.2. Number
*Variable primitive*

Un type number correspond à un nombre positif ou négatif. La variable se déclare en lui donnant simplement le nombre voulu.
```JS
// number
var age = 28;
```

Les variables de type number peuvent être utilisées pour faire des calculs.

```JS
var a = 10;
var b = 5;

console.log(a + b)
// 15

console.log(a - b)
// 5

console.log(a * b)
// 50

console.log(a / b)
// 2
```

Attention toutefois à ne pas faire de calculs avec des nombres à virgules, car vous risqueriez d'avoir un résultat non attendu. 
Je vous invite à lire ça si vous voulez savoir pourquoi https://ichi.pro/fr/pourquoi-0-1-0-2-0-3-en-javascript-237366067481202

## 1.3. Boolean
*Variable primitive*

Le type le plus simple. La variable se déclare en lui donnant simplement la valeur "false" ou "true"

```JS
// boolean
var estVieux = false;

```
Elles seront utilisées pour les conditions que nous verrons à la suite.

## 1.4. Null
*Variable primitive*

Ce type de variable nous servira rarement mais peut être utile dans quelques cas.

```JS
// null
var humour = null;

```
## 1.5. Undefined
*Variable primitive*

Ce type est attribué lorsqu'une variable est déclarée sans valeur.

```JS
// Undefined
var niveau;
```

## 1.6. Array
*Variable complexe*

Un type *Array* permettra de stocker plusieurs valeurs dans une même variable. Ce sera une liste d'élements ordonnés qui peut contenir tout types d'élements (*string*, *number*, *array*, *object*, ...).
Chaque élement du tableau aura une position numérique dans celui-ci, cette position est nommée : **index**.

> Il faut voir les tableaux comme un tiroir dans lequel on pourra mettre tout un tas de choses (stylos, post-its, ciseaux, etc). Nous pourrons chercher un stylo dans ce tiroir en trouvant sa position à l'intérieur de celui-ci (= index dans le tableau). Nous pourrons également vider le tiroir objet par objet pour voir tout ce qu'il contient (= boucler le tableau)

### Créer un tableau
Pour créer un tableau, nous avons 2 syntaxes : 
- Notion littérale : **[ ]**
- Constructeur Array : **new Array()**

```js
var monTableau = []

var monTableau2 = new Array()

//On peut mettre des valeurs à l'initialisation

var monTableau = ["Xavier", "David", "Pascal"]

var monTableau2 = new Array("Xavier", "David", "Pascal")
```

### Accèder aux valeurs d'un tableau
Pour acceder aux valeurs stockées dans un objet, il faut notez que les **Arrays** sont sur une **base 0**. C'est-à-dire que le premier élément commence à **index 0**


```js
  var monTableau = ["Xavier", "David", "Pascal"]
  console.log(monTableau[0]) //Xavier
  console.log(monTableau[2]) //Pascal
  console.log(monTableau[3]) //Undefined
```

Et si nous avons un tableau dans un tableau.
```js
  var monTableau = ["Homer", "Marge", ["Bart", "Lisa", "Maggie"]]
  console.log(monTableau[0]) //Homer
  console.log(monTableau[2][0]) //Bart
  console.log(monTableau[2][2]) //Maggie
```
### Ajouter une valeur dans un tableau
**Push - Ajouter une valeur à la fin**
```js
var monTableau = ["Xavier", "David", "Pascal"]
monTableau.push("Elodie")
console.log(monTableau) //["Xavier", "David", "Pascal", "Elodie"]
```
**Unshift - Ajouter une valeur au début**
```js
var monTableau = ["Xavier", "David", "Pascal"]
monTableau.unshift("Elodie")
console.log(monTableau) //["Elodie", "Xavier", "David", "Pascal"]
```

### Supprimer une valeur dans un tableau
**pop - Supprimer une valeur à la fin**
```js
var monTableau = ["Xavier", "David", "Pascal"]
monTableau.pop()
console.log(monTableau) //["Xavier", "David"]
```
**shift - Supprimer une valeur au début**
```js
var monTableau = ["Xavier", "David", "Pascal"]
monTableau.shift()
console.log(monTableau) //["David", "Pascal"]
```

**splice - Supprimer une/des valeur(s) en partiulier**
```js
var monTableau = ["Xavier", "David", "Pascal"]
/**
 * 1er paramètre : position du début
 * 2e paramètre : nombre d'élements à supprimer à partir de la position de début
 */
// Supprime 2 éléments à partir de la position 0
monTableau.splice(1, 2)
console.log(monTableau) //["xavier"]
```

###  Boucler dans un tableau
Les boucles vont nous permettre d'accéder aux valeurs d'un tableau, une par une, quelque soit la taille de celui-ci.
Vous avez 2 possibilités pour le faire :
- **for**
```js
var monTableau = ["Xavier", "David", "Pascal"]
for(var i = 0; i < monTableau.length; i++) {
  console.log("index :", i)
  console.log("Prof :", monTableau[i])
}
```
- **forEach**
```js
var monTableau = ["Xavier", "David", "Pascal"]
monTableau.forEach(function(valeur, index){
  console.log("index :", index)
  console.log("Prof :", valeur)
})
```
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

###  Autres Méthodes intéressantes pour les tableaux

**Array.map()**
La méthode ```map()``` va nous permettre de créer un nouveau tableau de même longueur avec des valeurs résultantes d'une fonction. La fonction doit toujours retourner l'élément courant et sa modification.
```js
var monTableau = ["Xavier", "David", "Pascal"]
var monTableauCool = monTableau.map(function(prof){
  return prof + " est cool"
})

console.log(monTableauCool) //['Xavier est cool', 'David est cool', 'Pascal est cool']
```
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map

**Array.filter()**
La méthode ```filter()``` va nous permettre de filtrer un tableau via une condition dans la fonction de callback. La fonction de filtrage doit return ```true```ou ```false```pour garder un élément ou non

```js
var monTableau = ["Xavier", "David", "Pascal", "Elodie"]
var monTableauFiltre = monTableau.filter(function(prof){
  return prof.includes("e")
})

console.log(monTableauFiltre) //['Xavier', 'Elodie']
```
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

**Array.find()**
La méthode ```find()``` va nous permettre de trouver la première valeur qui correspond à notre condition dans la fonction de callback. Cette fonction doit return ```true```ou ```false```

```js
var monTableau = ["Xavier", "David", "Pascal", "Elodie"]
var prenomAvecUnD = monTableau.find(function(prof){
  return prof.includes("d")
})
console.log(prenomAvecUnD) //David
```
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find


## 1.7. Object
*Variable complexe*

Tout comme le type *Array*, un type *Object* permettra de stocker plusieurs valeurs dans une même variable. 
La variable se déclare avec avec les accolades et une ou plusieurs paires "clé : valeur" séparées par une virgule.

> Il faut voir les Objets comme un tiroir également, mais à la différence des tableaux, ce tiroir est divisé en plusieurs compartiments. Chaque compartiment aura une étiquette pour nommé l'emplacement (clé) et nous mettrons l'objet associé dans ce compartiment (valeur). Lorsque nous rechercherons le stylo, cette fois, pas besoin de fouiller tout le tiroir pour trouver sa position, il suffira juste de lire l'étiquette du compartiment.

### Creer un objet

```JS
var monObjet = {
}

var monObjet2 = new Object()

var personne = {
  nom : "Chautemps",
  prenom: "Alex",
  age: 28,
  estVieux: false
}
```

Nous pouvons également mettre une fonction comme valeur à une clé. Dans ce cas, la clé sera nommée "méthode"

```JS
var personne = {
  nom : "Chautemps",
  prenom: "Alex",
  age: 28,
  estVieux: false,
  parler: function(){
    console.log("Bonjour à tous")
  }
}
```
### Accéder aux valeurs de l'objet
Pour acceder aux valeurs stockées dans un objet, vous avez 2 notations disponibles. 

Notez bien que les 2 sont importantes à apprendre. La seconde nous permettra de trouver une valeur via une variable.

```JS

  console.log(personne.prenom)
  // Alex
  
  personne.parler()
  // Bonjour à tous
  
  console.log(personne["prenom"])
  // Alex
  
  
  // Trouver la valeur en via une variable
  var cle = "nom"
  
  console.log(personne.cle)
  // Undefined
  
  console.log(personne[cle])
  // Chautemps

```





