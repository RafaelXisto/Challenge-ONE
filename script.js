function copiar(){
  let textoCopiado = document.getElementById("resultado");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0,99999)
  navigator.clipboard.writeText(resultado.value);
}

// Função para criptografar uma palavra
function criptografar() {
    let palavra = document.getElementById("inputPalavra").value;
    let palavraCriptografada = "";
    for (let i = 0; i < palavra.length; i++) {
      let letra = palavra[i];
      switch (letra) {
        case "e":
          palavraCriptografada += "enter";
          break;
        case "i":
          palavraCriptografada += "imes";
          break;
        case "a":
          palavraCriptografada += "ai";
          break;
        case "o":
          palavraCriptografada += "ober";
          break;
        case "u":
          palavraCriptografada += "ufat";
          break;
        default:
          palavraCriptografada += letra;
          break;
      }
    }
    document.getElementById("resultado").textContent = palavraCriptografada;
    
      var btn = document.getElementById("copiar");
      var msg = document.getElementById("rightmsg");
      var msg1 = document.getElementById("rightmsg1");
      var textarea = document.getElementById("resultado").value;
      var imagem = document.getElementById("menino");
      if (textarea.value === '') {
          imagem.style.display = "block";
         

      } else {
          imagem.style.display = "none";
          msg1.style.display = "none";
          msg.style.display = "none";
          btn.style.display = "block";
     
  }

  
  }

  // Função para descriptografar uma palavra
  function descriptografar() {
    let palavraCriptografada = document.getElementById("resultado").textContent;
    let palavra = "";
    let i = 0;
    while (i < palavraCriptografada.length) {
      let letra = palavraCriptografada[i];
      let sequencia = "";
      if (letra === "e" && palavraCriptografada.slice(i, i + 5) === "enter") {
        sequencia = "e";
        i += 5;
      } else if (letra === "i" && palavraCriptografada.slice(i, i + 4) === "imes") {
        sequencia = "i";
        i += 4;
      } else if (letra === "a" && palavraCriptografada.slice(i, i + 2) === "ai") {
        sequencia = "a";
        i += 2;
      } else if (letra === "o" && palavraCriptografada.slice(i, i + 4) === "ober") {
        sequencia = "o";
        i += 4;
      } else if (letra === "u" && palavraCriptografada.slice(i, i + 4) === "ufat") {
        sequencia = "u";
        i += 4;
      }
      if (sequencia !== "") {
        palavra += sequencia;
      } else {
        palavra += letra;
        i++;
      }
    }
    document.getElementById("resultado").textContent = palavra;
    
  }
  

  


  
