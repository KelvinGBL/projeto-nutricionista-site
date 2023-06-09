function limpar()
{
    document.form1.txtnome.style.border="2px solid rgba(155, 155, 155, 0.637)";
    document.form1.txtemail.style.border="2px solid rgba(155, 155, 155, 0.637)";
    document.form1.txttelefone.style.border="2px solid rgba(155, 155, 155, 0.637)";
}

function verificar()
{
    limpar()
    
    var paciente_nome, paciente_telefone, paciente_email, paciente_mensagem ;

    paciente_nome = document.form1.txtnome.value ;
    if( paciente_nome.length == 0 )
    {
        alert("Preencha o campo nome");
        document.form1.txtnome.style.border="2px solid red";
        document.form1.txtnome.focus();
        return false;
    }

    paciente_email = document.form1.txtemail.value ;
    if( paciente_email.indexOf("@") < 0 )
    {
        alert("Preencha corretamente o campo e-mail");
        document.form1.txtemail.style.border="2px solid red";
        document.form1.txtemail.value="";
        document.form1.txtemail.focus();
        return false;
    }

    paciente_telefone = document.form1.txttelefone.value ;
    if( isNaN(paciente_telefone) || paciente_telefone.length == 0 )
    {
        alert("Preencha corretamente o campo telefone");
        document.form1.txttelefone.style.border="2px solid red";
        document.form1.txttelefone.value="";
        document.form1.txttelefone.focus();
        return false;
    }

    paciente_mensagem = document.form1.txtmensagem.value ;

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