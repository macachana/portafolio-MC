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

    if(response.ok)
    {
        this.reset();
        swal.fire({
            position:"top",
            title:"Listo", 
            text:"El mensaje a sido enviado", 
            icon:"success",
        });
    }else{
        swal.fire({
            position:"top",
            title:"Error",
            text:"Hubo un error al intentar enviar el mensaje",
            icon:"error"
        });
    }
}

form.addEventListener("submit", handleSendEmail);