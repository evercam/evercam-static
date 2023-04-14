export default defineNuxtPlugin(() => {
    onNuxtReady(async () => {
        const navbar = document.getElementById("header-transparent");
        window.addEventListener("scroll", function() {
        if (window.scrollY >= 300) {
            navbar.setAttribute('style', 'background-color:#111C27 !important');
        } else {
            navbar.setAttribute('style', 'background-color:transparent !important');
        }
        });
    })
})