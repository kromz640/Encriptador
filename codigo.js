const letras=['e','i','a','o','u'];
const letraCodificada=['enter','imes','ai','ober','ufat'];

//**************************************************************

function encriptarTexto(texto)
{
    let textoEncriptado='';
    let reemplazado;
    let i=0;
    let j=0;

    for(i=0;i<texto.length;i++)
    {
        reemplazado=false;
        for(j=0;j<letras.length;j++)
        {
            if(texto[i]===letras[j])
            {
                textoEncriptado+=letraCodificada[j];
                reemplazado=true;
                break;
            }
        }
    }

    if(!reemplazado)
    {
        textoEncriptado+=texto[i];
    }
return textoEncriptado;
}

//**************************************************************

function desencriptarTexto(texto)
{
    let textoDesencriptado='';
    let reemplazado;
    let i=0;
    let j=0;

    for(i=0;i<texto.length;i++)
    {
        reemplazado=false;
        for(j=0;j<letraCodificada.length;j++)
        {
            if(texto[i]===letraCodificada[j])
            {
                textoDesencriptado+=letras[j];
                reemplazado=true;
                break;
            }
        }
    }

    if(!reemplazado)
    {
        textoDesencriptado+=texto[i];
    }
}

return textoDesencriptado;


