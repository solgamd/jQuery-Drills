
$('#btnSubmit').click(function() {
    alert("If you\'re happy and you know it, click OK!");
})

$('form').submit(function(e) {
    alert($('#inputText').val());
    e.preventDefault();
})

$('#formSubmit').hide();

$('#inputText').keydown(function () {
    $('#formSubmit').show('fast').animate({
        width: '400px', 
        fontSize: '1em'}, 
        500).fadeOut('slow').fadeIn(500);
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
    
    $('#formSubmit').click(function () {
        // let h2 = $('<h2>' + $('#inputText').val() + '</h2>');
        // $('div').append(h2).css({
        //     'display': 'flex',
        //     'color': 'violet',
        //     'align-items': 'center',
        //     'justify-content': 'center',
        // });
        // $(h2).mouseover(function () {
        //     $(h2).css({
        //         'background-color':'blue',
        //         'borderRadius':'50%',
        //     })
        // })
        let ul = $('<ul></ul>');
        $('body').append(ul);

        let li = $('<li>' + $('#inputText').val() + '</li>');
        $(ul).append(li).css({
            'color': 'violet',
        });
            
        li.click(function () {
            let colors = ['rgb(23,62,163)', 'rgb(234,212,187)', 'rgb(13,187,63)'];
            let newColor = colors[Math.floor(Math.random() * colors.length)];
            $(li).css('color', newColor);
        })

        li.dblclick(function () {
            $(this).remove();
        })
    })
});



