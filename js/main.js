customSelect('select');

const picker = new easepick.create({
    element: document.getElementById('date_in'),
    css: [
        'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
    ],
    format: 'DD/MM',
});

const picker2 = new easepick.create({
    element: document.getElementById('date_out'),
    css: [
        'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
    ],
    format: 'DD/MM',
});

/* Yandex Map */

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