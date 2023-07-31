$('form').on("submit", function(a){
    a.preventDefault();
    const novatarefa = $('#tarefa').val();
    const itemlist = $(`<li><img src="prancheta.png"/>${novatarefa}</li>`);
    $(itemlist).appendTo('ul')

    $(itemlist).click(function(){
        $(itemlist).addClass("classe")
    }
        );

        $(itemlist).dblclick(function(){
            $(itemlist).removeClass("classe")
        }
            );

        
})



