$(function () {

    const plButton = document.querySelector('.lang-switcher-pl');
    const engButton = document.querySelector('.lang-switcher-eng');

    if (window.location.hash) {
        if (location.hash.substring(1) === "pl") {
            // remove all hash tags and reload page to default text
            window.location.href = window.location.toString().split(/\?|#/)[0];
        }
        else if (location.hash.substring(1) === "eng") {
            plButton.classList.add('activated');
            engButton.classList.remove('activated');
            for (const [key] of Object.entries(language.en)) {
                $(`[data-language=${key}]`).html(language.en[key])
            }
        }
    }

    $('[data-callLang]').on('click', function () {
        //change flag to selected language

        if ($(this).attr('data-callLang') === "pl") {
            window.location.href = window.location.toString().split(/\?|#/)[0];
            return false;
        }

        window.location.hash = $(this).attr('data-callLang')
        location.reload(true);
    });
});