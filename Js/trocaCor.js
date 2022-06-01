document.addEventListener('contextmenu', event => event.preventDefault());

corArq()
function corArq() {
if (localStorage.getItem("modoCor") === null) {
    localStorage.setItem("modoCor", "false");
}

if (localStorage = {modoCor: "true"}) {
    trocaCor()
}}

function trocaCor() {
    //variáveis para facilitar a vida
    const bodyStyle = document.body.style
    const idNome = document.getElementById('nome').style
    const idQse = document.getElementById('qse').style
    const idIntroducao = document.getElementById('introducao').style
    //responsável por fazer tudo funcionar
    if (bodyStyle.backgroundColor == "rgb(31, 32, 34)" || bodyStyle.backgroundColor == '') {
        backColor = "rgb(247,247,247)";
        fontColor = "rgb(41, 41, 41)";
        fontIColor = "rgb(0, 7, 15)";
        borderColor = "rgb(45,45,45)";
        localStorage.setItem("modoCor", "true");
        } else {
        backColor = "rgb(31, 32, 34)";
        fontColor = "rgb(250, 235, 215)";
        fontIColor = "rgb(255, 248, 240)";
        borderColor = "rgb(45,45,45)";
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
