
document.addEventListener("DOMContentLoaded", function () {

    if (localStorage.getItem("cookiesAccepted") === "false") {
        document.getElementById("cookieConsent").style.visibility = "visible";
    }

    document.getElementById("acceptCookies").addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        document.getElementById("cookieConsent").style.visibility = "hidden";
    });

});

// Aggiunge dinamicamente il contenuto alla modale
document.querySelectorAll('img[data-bs-toggle="modal"]').forEach(function(img) {
    img.addEventListener('click', function(event) {
        // Preleva l'immagine e la descrizione dal dataset
        var imageSrc = event.target.getAttribute('data-image');
        var description = event.target.getAttribute('data-description');
        
        // Imposta l'immagine e la descrizione nella modale
        document.getElementById('modalImage').setAttribute('src', imageSrc);
        document.getElementById('modalDescription').textContent = description;
    });
});