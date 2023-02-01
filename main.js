$(document).ready(function(){

    $("#tel").mask("(00) 00000-0000", {
        placeholder: "(00) 00000-0000",
    })

    $("#cpf").mask("000.000.000-00", {
        placeholder: "000.000.000-00",
    })

    $("#cep").mask("00000-000", {
        placeholder: "00000-000",
    })

    $("form").validate({
        rules:{
            name:{
                required: true
            },
            email:{
                required: true, 
                email: true
            },
            tel:{
                required: true
            },
            cpf:{
                required: true
            },
            endere:{
                required: true
            },
            cep:{
                required: true
            },
        },
        messages:{
            name: "Este campo é obrigatório.",
            email: "Este campo é obrigatório.",
            tel: "Este campo é obrigatório.",
            cpf: "Este campo é obrigatório.",
            endere: "Este campo é obrigatório.",
            cep: "Este campo é obrigatório.",
        },
        submitHandler: function(form){
            console.log(form)
        },
        inalidHandler: function(event, validad){
            let nincorrect = validad.numberOfInvalids();
            if (nincorrect){
                console.log(`${event} is incorrect due ${nincorrect}`)
            }         

        }
    })

    $("form").on("submit", function(e){
        e.preventDefault();
        $('form').trigger("reset");
    })

});

// mask https://igorescobar.github.io/jQuery-Mask-Plugin/
// validation https://jqueryvalidation.org/