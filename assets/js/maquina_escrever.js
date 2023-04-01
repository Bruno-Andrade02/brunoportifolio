
/*Nome inicio*/
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 80 * i)

        /* console.log(letra);*/
    });


}

const titulo = document.querySelector('.meu_nome');
typeWriter(titulo);


/*testes*/
let texto_sobre = document.getElementById('texto_sobre');
document.getElementById('texto_sobre').onload = function () {
    texto_sobre.classList('fade');
}

/*testes*/



/*teste amnimação*/


