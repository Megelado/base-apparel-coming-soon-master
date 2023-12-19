var form = document.getElementById('form');
let c = 0
function verificarEmail() {

    var email = document.getElementById('email');
    var msg = document.getElementById('msg');
    if (email.value === '') {
        msg.style.color = 'red';
        msg.textContent = 'Email não inserido!';
        msg.style.textIndent = '50px'
        setTimeout(function() {
            msg.textContent = ''
        }, 3000);
        return false;
    }
    return true
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    verificarEmail();
});
