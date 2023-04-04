export default defineNuxtPlugin(() => {
    onNuxtReady(async () => {
        const navbar = document.getElementById("header-transparent");
        console.log(navbar);
        window.addEventListener("scroll", function() {
        if (window.scrollY >= 300) {
            console.log("This is the scroll value", window.scrollY);
            navbar.setAttribute('style', 'background-color:#111C27 !important');
            console.log(navbar.style.backgroundColor);
        } else {
            navbar.setAttribute('style', 'background-color:transparent !important');
        }
        });
    })
})