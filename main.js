$(".project").on('click', function(event){
    $(document).find( ".project .description" ).css( "display", "none" );
    $(event.target.parentElement).find( ".description" ).css( "display", "block" );
});