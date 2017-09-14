    function validaCampos() {
        var elementos = document.getElementsByClassName("formInpt");
        for(var i=0;i<elementos.length;i++){
            if(elementos[i].value=="" || elementos[i].value==null){
                alert("Preencha todos os campos.")
                return false;
            }
        }
        return true;
}
