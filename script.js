
function validar(){
    var nome = formulario.nome;
    var uni = formulario.Universidade;
    var emp = formulario.Empresas;
    var hor = formulario.Horario;
    var user = {
        "login": "programar@gmail.com",
        "password": "Pr_123456789"
    }
    var flag = true;
    if ( nome.value == ""){
        alert("Nome não informado!");
        nome.focus();
        flag= false;
    }
    if ( uni.value == ""){
        alert("Universidade não informada!");
        uni.focus();
        flag=false;
    }
    if ( emp.value == ""){
        alert("Empresa não informada!");
        emp.focus();
        flag=false;
    }
    if ( hor.value == ""){
        alert("Horário não informado!");
        hor.focus();
        flag=false;

    }
    else if ( nome.value != "" && uni.value !=  ""&& emp.value !=  "" && hor.value !=  "") {
        alert("Cadastro conluído com sucesso!");
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open('POST', "http://52.91.139.190/ers/login", true);

xhttp.send(user);

    return flag;
}





