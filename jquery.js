// $('document').ready(function () {

// });

$('#btnSubmit').click(function() {
    alert('Hiya there!');
})

$('form').submit(function(e) {
    alert($('input:text').val());
    e.preventDefault();
})

$('#formSubmit').hide();

$('#inputText').keydown(function () {
    $('#formSubmit').show("fast").animate({width: "400px", fontSize: "1em"}, 500);
    $('#formSubmit').css('background-color', 'turquoise');
})

$('document').ready(function () {
    let div = '<div></div>';
    $(div).css({
        'height': '200px', 
        'width': '200px', 
        'background-color': 'grey',
        'margin': '20px'
    }).insertAfter('form');
    
    $('#formSubmit').submit(function () {
        console.log('worked');
        $('input:text').val().appendTo('<div></div>');
        $('input:text').css({
            'font-size': '1em',
            'color': 'violet',
        });
    })
});


