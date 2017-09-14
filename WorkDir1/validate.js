    function validaCampos() {
        var elemento = document.getElementById("nameTxt").value;
	   if(elemento=="" || elemento==null){
           alert("Preencha o campo: Nome Completo")
           return false;
       }
        elemento = document.getElementById("cpfTxt").value;
	   if(elemento=="" || elemento==null){
           alert("Preencha o campo: CPF")
           return false;
       }
        return true;
}
