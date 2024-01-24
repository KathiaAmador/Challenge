Const letrasEncriptadas = {
  "e": "enter",
  "i": "imes",
  "a": "ai",
  "o": "ober",
  "u": "ufat"
};

function encriptar(texto) {
  const textoEncriptado ="";

for (let i = 0; i < texto.length; i++) {
  let letra = texto.charAt(i);

  if (letrasEncriptadas.hasOwnProperty(letras)) {
    letraEncriptado += letrasEncriptadas[letra];
  } else {
    letraEncriptado += letra;
  }
}

return textoEncriptado;
}

function desencriptador(textoEncriptado) {
  const textoDesencriptado = "";
  for (let i = 0; i < textoEncriptado.length; i++) {
    let letra = textoEncriptado.charAt(i);

    if (letrasEncriptadas.hasOwnProperty(letra)) {
      letraDesencriptado += letrasEn
