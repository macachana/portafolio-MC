const form = document.getElementById('formulario');

async function handleSendEmail(event) {
    event.preventDefault();

    const fd = new FormData(this);

    const response = await fetch('https://formspree.io/f/xwpeqewa', {
        method: 'POST',
        body:fd,
        headers: {
            Accept: 'application/json'
        }
    });

    if (response.ok) {
        this.reset();
        alert('Mensaje enviado');
    }else{
        alert('Error al enviar el mensaje');
    }
}

form.addEventListener("submit", handleSendEmail);