(function(){

    'use strict';

    var $submit = document.querySelector('[data-js="submit"]');
    var $info = document.querySelector('[data-js="info"]');

function sendHub() {
    var request = new XMLHttpRequest();
    var $input = document.querySelector('[data-js="input"]');
    var $infos = document.createElement('p');
    var $img = document.createElement('img');
    var user = $input.value;

    request.open('GET', 'https://api.github.com/users/' + user, true);

    request.onload = function() {
        if(request.status >= 200 && request.status < 400)

        var data = JSON.parse(request.responseText);
        $infos.textContent = data.bio + " " + data.email + " " + data.location + " " + data.login + " " + data.name;
        $img.setAttribute('src', data.avatar_url);
        $info.appendChild($infos);
        $info.appendChild($img);
    };

    request.send();
}

$submit.addEventListener('submit', function(e) {
    e.preventDefault();
    sendHub();
})

})();
