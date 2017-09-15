
function validaCampos() {


        var elemento;

        var inputs=[{id:"nameTxt",lbl:"Nome Completo"},
                    {id:"addressTxt",lbl:"Endereço"},
                   {id:"hoodTxt",lbl:"Bairro"},
                   {id:"cityTxt",lbl:"Cidade"},
                   {id:"refTxt",lbl:"Referência"},
                   {id:"cpfTxt",lbl:"CPF"},
                   {id:"rgTxt",lbl:"RG"},
                   {id:"emailTxt",lbl:"Email"},
                   {id:"telTxt",lbl:"Telefone Fixo"},
                   {id:"celTxt",lbl:"Celular"},
                   {id:"creditTxt",lbl:"Num. Cartão de Crédito"}];

        for (var i=0;i<inputs.length();i++){
            console.log(inputs[i].id);
            elemento=document.getElementById(inputs[i].id);
            if(!verifica(elemento,inputs[i].lbl,10,50)){
                console.log(inputs[i].lbl);
            }
        }
    return false;



//        elemento = document.getElementById("addressTxt");
//        lbl = "Endereço"
//        verifica(elemento,lbl,10,60);
//
//        elemento = document.getElementById("hoodTxt");
//        lbl = "Bairro"
//        verifica(elemento,lbl,2,20);
//
//        elemento = document.getElementById("cityTxt");
//        lbl = "Cidade"
//        verifica(elemento,lbl,2,20);
//
//        elemento = document.getElementById("refTxt");
//        lbl = "Referencia"
//        verifica(elemento,lbl,0,60);

    }

    function verifica(elemento,lbl,min,max){
        if(!verificaTamanho(elemento,lbl,min,max) || !verificaVazio(elemento,lbl)){
            return false;
        }
    }


    function verificaVazio(elemento,lbl){
        if(elemento.value=="" || elemento.value==null){
                alert("Campo vazio: "+lbl);
                return false;
            }
        return true;
    }

    function verificaTamanho(elemento,lbl,min, max){
        if(elemento.value.length<min || elemento.value.length>max){
            alert("Campo com tamanho errado: "+lbl);
            return false;
        }
        return true;

    }

