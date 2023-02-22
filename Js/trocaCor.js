//responsável por criar armazenar "modoCor", responsável por guardar sua cor escolhida para uma próxima abertura.
if (localStorage.getItem("modoCor") === null) {
    localStorage.setItem("modoCor", "false");
}

function trocaCor() {
    //variáveis para facilitar a vida
    const bodyStyle = document.body.style
    const idNome = document.getElementById('nome').style
    const idQse = document.getElementById('qse').style
    const idIntroducao = document.getElementById('introducao').style

    //responsável por fazer tudo funcionar
    if (bodyStyle.backgroundColor == '' || bodyStyle.backgroundColor == "rgb(31, 32, 34)") {
        backColor = "#F7F7F7";
        fontColor = "#292929";
        fontIColor = "#00070F";
        borderColor = "#2D2D2D";
        localStorage.setItem("modoCor", "true");
    } else {
        backColor = "#1F2022";
        fontColor = "#FAEBD7";
        fontIColor = "#FFF8F0";
        borderColor = "#2D2D2D";
        localStorage.setItem("modoCor", "false");}
    
    //definir cores
    idNome.backgroundColor = backColor;
    idNome.color = fontColor;
    idQse.backgroundColor = backColor;
    idIntroducao.backgroundColor = backColor;
    idIntroducao.borderColor = borderColor;
    idIntroducao.color = fontIColor;
    bodyStyle.color = fontColor;
    bodyStyle.backgroundColor = backColor;
    console.log("Cores mudadas.")
}

//responsável pela troca para o modo claro, caso tenha sido escolhido em uma abertura anterior do site.
if (localStorage.getItem("modoCor") === "true") {
    trocaCor()
}