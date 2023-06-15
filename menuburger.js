/* Sélection des éléments HTML */

let link = document.getElementById('link')
let burger = document.getElementById('burger')
let ul = document.querySelector('ul')

/* gestionnaire d'évément sur le a#link pour venir changer l'attribution de la classe .open à la ul et au span#burger*/

ul.addEventListener('click', function(){
    e.preventDefault()
    burger.classList.toggle('open')
    ul.classList.toggle('open')

    alert('sa fonctionne');
})

/* toggle permet de gerer automatique le fait d'enlever ou ajouter la classe ) l'élément*/

