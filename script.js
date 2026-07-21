document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector(".hero-btn");

    button.addEventListener("click", function (event) {
        event.preventDefault();

        alert("🎉 Welcome to Learnix!\n\nThank you for trying the first version of Learnix.\n\nMore exciting features are coming soon!");
    });

});