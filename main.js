$(document).ready(function(){
    $("#images").slick({
        autoplay: true,
    });

    $(".menu").click(function(){
        $("nav").slideToggle()
    })

    // let mascara if (celular) ? (00) 00000-0000 : xxxxxx

    $("#tel").mask("(00) 00000-0000", {
        placeholder: "(00) 00000-0000",
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
            intere:{
                required: true
            },
        },
        messages:{
            name: "Este campo é obrigatório."
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

    $(".items-list button").click(function(){
        const name =  $(this).parent().find("h3").text()
        const destino = $("#contact")
        $("#intere").val(name)
        $("html").animate({
            scrollTop: destino.offset().top,
        }, 1000)
    })

});

// mask https://igorescobar.github.io/jQuery-Mask-Plugin/
// validation https://jqueryvalidation.org/