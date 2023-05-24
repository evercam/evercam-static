export default defineNuxtPlugin(() => {
    onNuxtReady(async () => {
        const navbar = document.getElementById("header-transparent");
        if (navbar) {
            window.addEventListener("scroll", function () {
                if (window.scrollY >= 140) {
                    navbar.setAttribute('style', 'background-color:#111C27 !important');
                } else {
                    navbar.setAttribute('style', 'background-color:transparent !important');
                }
            });
        }

        var $ZC = jQuery.noConflict();
        var trackingText = 'ZCFORMVIEW';
        var new_optin_response_in = 1;
        var duplicate_optin_response_in = 1;
        $ZC(document).ready(function ($) {
            $ZC("#zc_trackCode").val(trackingText);
            $ZC("#fieldBorder").val($ZC("[changeItem='SIGNUP_FORM_FIELD']").css("border-color"));
            _setOptin(false, function (th) {/*Before submit, if you want to trigger your event, "include your code here"*/
            });/*Load Captcha For this*/   /*Tracking Enabled*/
            trackSignupEvent(trackingText);
        });
    })
})