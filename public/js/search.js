$(document).ready(function () {
    let xhr = new XMLHttpRequest()

    xhr.open('GET', '/api')
    xhr.send()

    xhr.addEventListener('load', APILoaded)

    function APILoaded() {
        if (this.status < 200 && this.status >= 400 && this.readyState !== 1) return
        autoFillDataPopulate(JSON.parse(this.responseText).products)
    }

    function autoFillDataPopulate(res) {
        let output = {}

        for (let key in res) {
            output[res[key].name] = res[key].img_url
         }

            $('input.autocomplete').autocomplete({
                data: output
            });
    }

});