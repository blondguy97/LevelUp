
document.addEventListener('DOMContentLoaded', function () {



    // Timer 

    let deadLine = 1800;


    let countDownMinutes = document.querySelector('.minutes');

    let countDownSeconds = document.querySelector('.seconds');
    updateCountDown()

    setInterval(updateCountDown, 1000);

    function updateCountDown() {
        let minutes = Math.floor(deadLine / 60);
        let seconds = deadLine % 60;

        if (seconds < 10) {
            seconds = '0' + seconds
        }




        countDownMinutes.innerHTML = minutes;
        countDownSeconds.innerHTML = seconds;



        if (deadLine <= 0) {
            countDownMinutes.innerHTML = `0`;
            countDownSeconds.innerHTML = `0`;
        }

        deadLine--;

    }



    // Validation

    const phoneInput = document.querySelector('.landing-form__input_phone');

    phoneInput.addEventListener('input', function (event) {
        const validCharacters = '0123456789';
        let newValue = '';

        for (let char of event.target.value) {
            if (validCharacters.includes(char)) {
                newValue = newValue + char;
            }
        }

        event.target.value = newValue;

    });


    // Slider

    $(".slider__inner").slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        centerMode: true,
        arrows: false,
        variableWidth: true,
        autoplay: true,
        focusOnSelect: true,
        dots: true,

        responsive: [{
            breakpoint: 768, settings: "unslick"

        }]

    }); // Конец скриптов


})