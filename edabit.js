/* defis 1 Sum of Polygon Angles ==== */
// Niveau : tres facile
// Énoncé : Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
function sumPolygon(n) {
     return (n - 2) * 180;

}
console.log(sumPolygon(3));
console.log(sumPolygon(4));
console.log(sumPolygon(6));

/* defis 2. Buggy Code (Part 1) ==== */
// Niveau : Très facile
// Énoncé : Corriger les erreurs de syntaxe pour que le code fonctionne.
// Lien : [à remplir]

function cubes(a) {
    //retunr a ** 3 voici l‘erreur c‘est return au lieu de retunr et on doit metre un ; apres le 3 
    return a ** 3;
}

/* defis 3. Convert Age to Days ==== */
// Niveau : Très facile
// Énoncé : Convertir l’âge en années en nombre de jours.
function calcAge(age) {
    return age * 365;
}
console.log(calcAge(20));
console.log(calcAge(10));
console.log(calcAge(24));

/* defis 4. Power Calculator ==== */
// Niveau : Tres facile
// Énoncé : Retourne la puissance (voltage × courant).
function circuitPower(voltage, courant) {
   return voltage * courant;
}
console.log(circuitPower(230, 12));
console.log(circuitPower(400, 20));
console.log(circuitPower(50, 300));



/* defis 5. Convert Minutes into Seconds ==== */
// Niveau : Très facile
// Énoncé : Convertir des minutes en secondes.
function convert(minutes) {
  return minutes * 60;
}
console.log(convert(2));
console.log(convert(5));
console.log(convert(1));


/* defis 6. Convert Hours into Seconds ==== */
// Niveau : Très facile
// Énoncé : Convertir des heures en secondes.
function howManySeconds(hours) {
  return hours * 3600;
}

console.log(howManySeconds(10));
console.log(howManySeconds(2));
console.log(howManySeconds(4));


/* defis 7. Seven Boom! ==== */
// Niveau : difficile
// Énoncé : Retourne "Boom!" si le chiffre 7 est présent dans le tableau.
function sevenBoom(arr) {
    const combined = arr.join("");
    if (combined.includes("7")){
        return "Boom";
    } else {
        return "il n a pas de  7 qui apparait dans le tableau";
    }
}
console.log(sevenBoom([2, 3, 5, 9, 10,11]));
console.log(sevenBoom([24, 31, 54, 1]));
console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));


/* defis 8. Maximum Edge of a Triangle ==== */
// Niveau : Tres facile
// Énoncé : Trouve le plus grand côté possible d’un triangle.
function nextEdge(side1, side2) {
    return (side1 + side2) - 1;
}
console.log(nextEdge(8, 20));
console.log(nextEdge(3, 6));
console.log(nextEdge(20, 1)),


/* defis 9. A Redundant Function ==== */
// Niveau : Moyen
// Énoncé : Retourner une fonction qui retourne une chaîne donnée.
function redundant(str) {
     return function() {
    return str;
};

}
const Ab = redundant("hello");
const cd = redundant("abc");
console.log(Ab());
console.log(cd());


/* defis 10. Area of a Triangle ==== */
// Niveau : Tres facile
// Énoncé : Calcule l’aire d’un triangle.
function triArea(base, height) {
   return (base * height) / 2;
}
console.log(triArea(3, 5));
console.log(triArea(3, 10));
console.log(triArea(20, 20));


/* defis 11. Sum of Cubes ==== */
// Niveau : Facile
// Énoncé : Retourne la somme des cubes d’un tableau.
function sumOfCubes(nums) {
    return nums.reduce((somme, num) => somme + Math.pow(num, 3), 0);
}
console.log(sumOfCubes([1, 2, 3]));
console.log(sumOfCubes([0, 4, 5]));


/* defis 12. Return the Next Number ==== */
// Niveau : Très facile
// Énoncé : Incrémente le nombre donné de +1.
function nextNumber(num) {
    return num + 1;
}
console.log(nextNumber(1));
console.log(nextNumber(20));
console.log(nextNumber(27));


// deffis 13. Is the Number Symmetrical? //
// Niveau : Facile
// Énoncé : Vérifie si un nombre est symétrique (palindrome).
function isSymmetrical(num) {
    const str = num.toString();
    const reverserd = str.split("").reverse().join("");
    return str === reverserd;
}
console.log(isSymmetrical(121));
console.log(isSymmetrical(123));
console.log(isSymmetrical(44));


// defis 14. Return the Sum of Two Numbers  //
// Niveau : Très facile
// Énoncé : Retourne la somme de deux nombres.
function add(a, b) {
   return a + b;
}
console.log(add(3, 2));
console.log(add(10, 10));


// defis 15. Find the Smallest and Biggest Numbers  //
// Niveau : Facile
// Énoncé : Retourne le minimum et le maximum d’un tableau, dans l’ordre.
function minMax(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    
    return [min, max];
}
console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([43, 75, 100]));
console.log(minMax(2, 9, 43));