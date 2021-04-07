$(".title").on('click', function(event){
    let descriptions = $(event.target.parentElement).find( ".description" );
    let showing = descriptions.filter(function (index) {
        return this.style.display === "block";
    }).length > 0;

    $(document).find( ".project .description" ).css( "display", "none" );

    if(!showing) {
        $(event.target.parentElement).find(".description" ).css( "display", "block" );
    }
});