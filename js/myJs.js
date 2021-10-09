$(document).ready(function() {

    setTimeout(function() {
        firstQuestion();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})

function firstQuestion(){
    
    $('.content').hide();
    Swal.fire({
        title: 'Ơ kìa Mai à??',
        text: 'Cái này phải trả lời thật nhá!',
        imageUrl: 'img/mai.jpg',
        imageWidth: 300,
        imageHeight: 300,
        background: '#fff url("img/iput-bg.jpg")',
        imageAlt: 'Custom image',
      }).then(function(){
        $('.content').show(200);
      })
}


 function switchButton() {
    var audio = new Audio('sound/duck.mp3');
    audio.play();
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
}

function moveButton() {
    var audio = new Audio('sound/Swish1.mp3');
    audio.play();
    if (screen.width<=600) {
        var x = Math.random() * 400;
        var y = Math.random() * 600;
    } else{
        var x = Math.random() * 1000;
        var y = Math.random() * 1000;
    }
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
}


var n = 0;
$('#no').mousemove(function() {
    if (n < 1)
        switchButton();
    if (n > 1)
        moveButton();
    n++;
});
$('#no').click(() => {
    if (screen.width>=900)
        switchButton();
})


function textGenerate() {
    var n = "";
    var text = " Thật ra tớ cũng thấy cậu vui tính ý nên là tớ thích luôn rồi ấy hihi!                                              ";
    var a = Array.from(text);
    var textVal = $('#txtReason').val() ? $('#txtReason').val() : "";
    var count = textVal.length;
    if (count > 0) {
        for (let i = 1; i <= count; i++) {
            n = n + a[i];
            if (i == text.length + 1) {
                $('#txtReason').val("");
                n = "";
                break;
            }
        }
    }
    $('#txtReason').val(n);
    setTimeout("textGenerate()", 1);
}


$('#yes').click(function() {
    var audio = new Audio('sound/tick.mp3');
    audio.play();
    Swal.fire({
        title: 'Tại sao cậu lại thích tớ á? Cái này là bí mật 2 đứa thui!',
        html: true,
        width: 900,
        padding: '3em',
        html: "<input type='text' class='form-control' id='txtReason' onmousemove=textGenerate()  placeholder='Cậu thích tớ điểm nào??'>",
        background: '#fff url("img/iput-bg.jpg")',
        showCancelButton: true,
        cancelButtonText: "Thôi ngại lắm không gửi đâu :<",
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonColor: '#fe8a71',
        cancelButtonColor: '#f6cd61',
        confirmButtonText: 'Gửi cho tớ nè <3'
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                width: 900,
                confirmButtonText: 'Bấm đây nè!',
                background: '#fff url("img/iput-bg.jpg")',
                title: 'Uầy thật luôn á! Không tin được luôn vui ghê hihi!!',
                text: "Rồi tới luôn đi cậu! Tớ đợi hơi lâu rồi nha...",
                imageUrl: "img/hung.jpg",
                imageWidth: 200,
                imageHeight: 200,
                confirmButtonColor: '#83d0c9',
                onClose: () => {
                    window.location = 'https://www.facebook.com/HDJMedia/';
                  }
            })
        }
    })
})
