/**
 * @author Vincent van de Water <vincentvdwater@gmail.com>
 * @description Providing a fast and easy to share the current page 
 *
 * Usage: Add the css class of the share provider you want to use to 
 * your HTML element and the code will do the rest (eg. js-share-facebook)
 */

(function (window, document) {
    "use strict";
    window.share = {
        url: encodeURIComponent(window.location.href),

        providers: ["email", "facebook", "twitter", "linkedin", "google", "pintrest", "native"],

        popup: function (url) {
            window.open(url, "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");
        },

        email: function () {
            window.location.href = "mailto:&body=" + window.share.url;
        },

        facebook: function () {
            share.popup("https://www.facebook.com/share.php?u=" + window.share.url);
        },

        twitter: function () {
            share.popup("https://twitter.com/intent/tweet?text=&url=" + window.share.url);
        },

        linkedin: function () {
            share.popup("https://www.linkedin.com/cws/share?url=" + window.share.url);
        },

        google: function () {
            share.popup("https://plus.google.com/share?url=" + window.share.url);
        },

        pintrest: function () {
            share.popup("http://pinterest.com/pin/create/button/?url=" + window.share.url);
        },

        native: function () {
            if (navigator.share !== undefined) {
                navigator.share({
                    title: document.title,
                    text: "",
                    url: window.share.url
                });
            } else {
                console.log("Unsupported method");
            }
        }
    };

    document.addEventListener("DOMContentLoaded", function () {
        var elements;
        var index;
        for (index = 0; index < window.share.providers.length; index += 1) {
            elements = document.querySelector(".js-share-" + window.share.providers[index]);
            if (elements !== null) {
                elements.onclick = window.share[window.share.providers[index]];
            }
        }
    });

}(window, document));
