// store buttons

const storeButtons = document.querySelectorAll(".store-btn");
storeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        alert("App download link will be added here.");
    });
});

// card hover

const cards = document.querySelectorAll(".feature-card, .jewel-card, .how-card");
cards.forEach(function(card) {
    card.addEventListener("mouseenter", function() {
        card.style.transition = "0.3s";
    });
});

