let $ = document.querySelector.bind(document)

$("form button").addEventListener("click", e => {
    if(!validacaoEmail($("#email"))){
        e.preventDefault()
        $(".erro").innerText = "Please provide a valid email"
        setTimeout(() => $(".erro").innerText = "", 3000)
        $("#email").focus()
    }
})

$("#email").addEventListener("focusout", () => {
    if(!validacaoEmail($("#email"))){
        $(".erro").innerText = "Please provide a valid email"
        $(".error-icon").style = "display: block";
        setTimeout(() => {
            $(".erro").innerText = ""
        }, 2000)
        $("#email").focus()
    }else{
        $(".error-icon").style = "display: none";
    }
})

$("form").addEventListener("submit", e => {
    if(validacaoEmail($("#email"))){
        alert("submit!")
    }else{
        e.preventDefault()
        $(".erro").innerText = "Please provide a valid email"
        setTimeout(() => $(".erro").innerText = "", 3000)
        $("#email").focus()
    }
})

function validacaoEmail(field, e) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    if ((usuario.length >=1) &&
    (dominio.length >=3) && 
    (usuario.search("@")==-1) && 
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) && 
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&      
    (dominio.indexOf(".") >=1)&& 
    (dominio.lastIndexOf(".") < dominio.length - 1)
    ){
        return true;
    }else{
        return false;
    }
}