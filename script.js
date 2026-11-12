// EASY CHOICE KENYA

// Display current year
document.addEventListener("DOMContentLoaded", function () {

    const footer = document.querySelector("footer p");

    if (footer) {
        footer.innerHTML =
            `© ${new Date().getFullYear()} Easy Choice Kenya. All rights reserved.`;
    }

    console.log("Easy Choice Kenya website is running!");

});
