function limpar(nome, email, telefone){
    nome.style.border="2px solid white";
    email.style.border="2px solid white";
    telefone.style.border="2px solid white";
}

function verificar(){
    let txtNome = document.getElementById("txt-nome");
    let txtEmail = document.getElementById("txt-email");
    let txtTelefone = document.getElementById("txt-telefone");
    let txtMensagem = document.getElementById("txt-mensagem");

    limpar(txtNome, txtEmail, txtTelefone);

    if(txtNome.value.length == 0 ){
        alert("Preencha o campo nome");
        txtNome.style.border="2px solid red";
        txtNome.focus();
        return false;
    }

    if(txtEmail.value.indexOf("@") < 0 ){
        alert("Preencha corretamente o campo e-mail");
        txtEmail.style.border="2px solid red";
        txtEmail.value="";
        txtEmail.focus();
        return false;
    }

    if( isNaN(txtTelefone.value) || txtTelefone.value.length == 0 ){
        alert("Preencha corretamente o campo telefone");
        txtTelefone.style.border="2px solid red";
        txtTelefone.value="";
        txtTelefone.focus();
        return false;
    }

    txtNome = txtNome.value;
    txtEmail = txtEmail.value;
    txtTelefone = txtTelefone.value;
    txtMensagem = txtMensagem.value;

    document.form1.submit();
}

// Menu Mobile
function openMenu(){
    var nav_mobile = document.getElementById("nav-mobile");
    nav_mobile.style.right = "0";
}
function closeMenu(){
    var nav_mobile = document.getElementById("nav-mobile");
    nav_mobile.style.right = "-200px";
}

// Header
let logo = document.querySelector(".logo_site");
logo.src="assets/images/logo_edna_gonzales.svg";

// Footer
let icon = document.querySelectorAll(".icon-social");
icon[0].src="assets/icons/logo_facebook.png";
icon[1].src="assets/icons/logo_instagram.png";
icon[2].src="assets/icons/logo_linkidin.png";
icon[3].src="assets/icons/logo_tiktok.png";