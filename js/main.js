// Block our rooms - big photo
function bigPhoto(event) {
    event.preventDefault();

    const all_rooms = document.querySelectorAll('.card-rooms');
    all_rooms.forEach(element => {
        element.classList.remove('border-active');       
    });

    let click_room = event.target;
    if(event.target.tagName -= 'A') {
        click_room = event.target;
    }
    else {
        click_room = event.target.closest('a');
    }

    const gl_photo = document.querySelector('#big_photo');
    const src_photo = click_room.querySelector('img').getAttribute('src');
    const number_photo = parseInt(src_photo.match(/\d+/));

    if(number_photo == 1) {
        gl_photo.src = 'img/main/big_room1.jpg';
        click_room.classList.add('border-active'); 
    } else if (number_photo == 2) {
        gl_photo.src = 'img/main/big_room2.jpg';
        click_room.classList.add('border-active'); 
    } else if (number_photo == 3) {
        gl_photo.src = 'img/main/big_room3.jpg';
        click_room.classList.add('border-active'); 
    }
}

// Yandex Map 
ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [31.104723, 77.175191],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 7
    });
    var myPlacemark = new ymaps.Placemark(
        [31.104723, 77.175191], 
        {
            balloonContent: `
                <div class="balloon">
                    <div class="balloon__address">Advanced Study Road, Shimla 171004 India</div>
                    <div class="balloon__contacts">
                        <a href="tel:+18573422365">+1 857-342-2365</a>
                    </div>
                </div>
            `,
        }, 
        {
            iconLayout: 'default#image',
            iconImageHref: '../img/icons/map.svg',
            iconImageSize: [50, 50],
            iconImageOffset: [-20, -40]
        }
    );
    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
	myMap.controls.remove('searchControl'); // удаляем поиск
	myMap.controls.remove('trafficControl'); // удаляем контроль трафика
	myMap.controls.remove('rulerControl'); // удаляем контрол правил
	myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
    
    myMap.geoObjects.add(myPlacemark); 
    // myPlacemark.balloon.open(); 
}

// Calendar
let dpMin, dpMax;

dpMin = new AirDatepicker('#date_in', {
    onSelect({date}) {
        dpMax.update({
            minDate: date
        })
    },
    locale: {
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        today: 'Today',
        clear: 'Clear',
        firstDay: 0
    },
    dateFormat: 'dd/MMMM'
})

dpMax = new AirDatepicker('#date_out', {
    onSelect({date}) {
        dpMin.update({
            maxDate: date
        })
    },
    locale: {
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        today: 'Today',
        clear: 'Clear',
        firstDay: 0
    },
    dateFormat: 'dd/MMMM'
})

// Select
customSelect('select');