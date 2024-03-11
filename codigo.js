
const letras = ['e', 'i', 'a', 'o', 'u'];
const letraCodificada = ['enter', 'imes', 'ai', 'ober', 'ufat'];
//**************************************************************************************************************************************************** 

function encriptarTexto(texto)
{

    let textoEncriptado = "";
    let reemplazado;
    let i=0;

    for (i = 0; i < texto.length; i++)
    {
        reemplazado = false;

        for (let j = 0; j < letras.length; j++)
        {
            if (texto[i] === letras[j]) 
            {
                textoEncriptado += letraCodificada[j];
                reemplazado = true;
                break;
            }
        }

        if (!reemplazado) textoEncriptado += texto[i];
    }

    return textoEncriptado;
}

//****************************************************************************************************************************************************
function desencriptarTexto(texto)
{
    let textoDesencriptado = "";
    let reemplazado;
    let i,j= 0;
    

    while (i < texto.length)
    {
        reemplazado = false;

        for (j = 0; j < letraCodificada.length; j++) 
        {
            if (texto.substr(i, letraCodificada[j].length) === letraCodificada[j]) 
            {
                textoDesencriptado += letras[j];
                i += letraCodificada[j].length;
                reemplazado = true;
                break;
            }
        }

        if (!reemplazado) 
        {
            textoDesencriptado += texto[i];
            i++;
        }
    }
    return textoDesencriptado;
}

//**************************************************************************************************************************************************** 

function encriptar()
{
    const cajaTexto = document.getElementById("cajaTexto");
    const texto = cajaTexto.value;

    if (texto === "")
    {
        alert("No has escrito algo");
        return;
    }

    if (/[A-Z]/.test(texto))
    
    {
        alert("No podes usar mayusculas");
        return;
    }

    if (/[^a-z\s]/.test(texto)) 
    {
        alert("No podes escribir numeros o caracteres especiales en el mensaje");
        return;
    }

    cajaTexto.value = encriptarTexto(texto);
}

//**************************************************************************************************************************************************** 
function desencriptar()
{
    const cajaTexto = document.getElementById("cajaTexto");

    if (cajaTexto.value === "")
    {
        alert("No tenes texto para desencriptar");
        return;
    }

    cajaTexto.value = desencriptarTexto(cajaTexto.value);
}

//****************************************************************************************************************************************************
function limpiar()
{
    document.getElementById("cajaTexto").value = "";
}
