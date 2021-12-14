# Javascript

# 1. Les types de variables 

Ces types nous les classons en deux grandes catégories de variables :

- **Variables primitives:** s*tring, number, boolean, undefined, null.*
On dit primitives car elles sont “simples”, elles ne contiennent qu’une seule valeur.
- **Variables complexes:** *Object, Array, Map, Set, ...*
On dit complexes car elles sont capables de stocker de multiples valeurs.

A noter : En JavaScript, toutes les variables complexes sont des Objets.  *Array, Map, Set,* etc… ne sont pas des types, mais des instances de *Object.*, elles héritent du prototype de *Object.*

## 1.1. Déclarer et utiliser une variable primitive 
Peu importe le type de la valeur primitive, une variable se déclare en lui donnant un nom et en lui affectant une valeur.

### 1.1.1. String
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

### 1.1.2. Number
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

### 1.1.3. Boolean
Le type le plus simple. La variable se déclare en lui donnant simplement la valeur "false" ou "true"

```JS
// boolean
var estVieux = false;

```
Elles seront utilisées pour les conditions que nous verrons à la suite.

### 1.1.4. Null
Ce type de variable nous servira rarement mais peut être utile dans quelques cas.

```JS
// null
var humour = null;

```
### 1.1.5. Undefined
Ce type est attribué lorsqu'une variable est déclarée sans valeur.

```JS
// Undefined
var niveau;
```

## 1.2. Déclarer une variable complexe

### 1.2.1. Array
Un type *Array* permettra de stocker plusieurs valeurs dans une même variable. Ce sera une liste d'élements ordonnés qui peut contenir tout types d'élements (*string*, *number*, *array*, *object*, ...).
Chaque élement du tableau aura une position numérique dans celui-ci, cette position est nommée : **index**.

#### Créer un tableau
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

#### Accèder aux valeurs d'un tableau
Pour acceder aux valeurs stockées dans un objet, il faut notez que les **Arrays** sont sur une **base 0**. C'est-à-dire que le premier élément commence à **index 0**






### 1.2.2. Object
Tout comme le type *Array*, un type *Object* permettra de stocker plusieurs valeurs dans une même variable. 
La variable se déclare avec avec les accolades et une ou plusieurs paires "clé : valeur" séparées par une virgule.

#### Creer un objet

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
#### Accéder aux valeurs de l'objet
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





