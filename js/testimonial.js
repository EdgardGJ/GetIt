document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.testimonials-track');
    const testimonials = track.innerHTML;
    track.innerHTML += testimonials; // duplica el contenido para hacer el loop infinito suave

    const inputs = document.querySelectorAll('.contact-input')

    inputs.forEach(ipt => {
        ipt.addEventListener('focus', () => {
            ipt.parentNode.classList.add('focus');
            ipt.parentNode.classList.add('no-empty');
        });
        ipt.addEventListener('blur', () => {
            if (ipt.value == "") {
                ipt.parentNode.classList.remove('no-empty');
            }
            ipt.parentNode.classList.remove('focus');
        });
    });

});