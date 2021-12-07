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
Ce type sera attribué lorsqu'une variable est déclarée sans valeur.

```JS
// Undefined
var niveau;
```

## 1.2. Déclarer une variable complexe

### 1.2.1. Object
Un type Object permettra de stocker plusieurs valeurs dans une même variable. La variable se déclare avec avec les accolades et une ou plusieurs paires "key/value" séparées par une virgule.

```JS
var personne = {
  nom : 'Chautemps',
  prenom: 'Alex,
  age: 28,
  estVieux: false
}
```
