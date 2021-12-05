function carregar() {
  let msg = window.document.getElementById("msg");
  let img = window.document.getElementById("imagem");
  let data = new Date();   
  let hora = data.getHours(); 
 msg.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora < 12) {
    img.src = "fotomanha.png";

    msg.innerHTML = `Agora são ${hora} horas da manhã.`
    document.body.style.background = "#e2cd9f";

    document.getElementById("texto").style.color = "rgba(0, 0, 0, 0.356)";

    document.getElementById("bkg").style.background = "#F9F3DF";

    document.getElementById("msgNoite").innerHTML = "DICA DO DIA: ";

    document.getElementById("msg").style.color = "#BD1616 "

    document.getElementById("msgNoite2").style.color = "#BD1616 "

    document.getElementById("msgNoite").style.color = "#FA8072 "

    document.getElementById("texto").innerHTML = "Bom dia";

    document.getElementById("msgNoite2").innerHTML =
    "Planeje bem o seu dia !!";

    //caso seja  a tarde
  } else if (hora >= 12 && hora < 18) {
    img.src = "fototarde.png";

    msg.innerHTML = `Agora são ${hora} horas da tarde.`

    document.body.style.background = "#91684A";
    
    document.getElementById("msg").style.color = "#FFB26B "

    document.getElementById("bkg").style.background = "#493323";

    document.getElementById("msgNoite").innerHTML = "DICA DA TARDE: ";

    document.getElementById("msgNoite").style.color = "#FFB26B "

    document.getElementById("msgNoite2").style.color = "#FFDF91 "

    document.getElementById("msgNoite2").innerHTML =
    "Planeje bem o seu dia !!";


    document.getElementById("texto").style.color = "#ffa500 ";

    document.getElementById("texto").innerHTML = "Boa tarde";

    //caso seja de noite
  } else {
    img.src = "fotonoite.png";

    msg.innerHTML = `Agora são ${hora} horas da noite.`

    document.body.style.background = "#0A043C";

    document.getElementById("texto").style.color = "#FFE3DE";

    document.getElementById("bkg").style.background = "#292C6D";

    document.getElementById("texto").innerHTML = "Boa Noite";

    document.getElementById("msgNoite").innerHTML = "DICA DA NOITE: ";

    document.getElementById("msgNoite2").innerHTML =
      "Tenha uma BOOOA noite de sono !!";
  }
}
