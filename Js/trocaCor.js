//responsável pela troca para o modo claro, caso tenha sido escolhido anteriormente
if (localStorage.getItem("modoCor") === "true") {
    trocaCor()
}
//responsável por criar o arquivo "modoCor" caso não tenha sido gerado anteriormente
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
    if (bodyStyle.backgroundColor == "#1F2022" || bodyStyle.backgroundColor == '') {
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
        localStorage.setItem("modoCor", "false");
    }
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

document.addEventListener('contextmenu', event => event.preventDefault());