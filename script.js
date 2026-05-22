// FORMULAIRE CONTACT

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function(event) {

    // Empêche le rechargement de la page
    event.preventDefault();

    // Affiche le message de succès
    successMessage.style.display = "block";

    // Vide le formulaire
    form.reset();

});