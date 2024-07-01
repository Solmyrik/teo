const select = document.querySelector('.select');
const selectAdres = document.querySelector('.bottom-contact__adres');
const selectEmail = document.querySelector('.bottom-contact__email');
const selectTele = document.querySelector('.bottom-contact__tele');

const blockMap = document.querySelector('.bottom-contact__right');

const mapTable = {
  1: {
    adres: 'Заречье, Торговая ул, с2, ЭлитСтройМатериалы',
    email: 'teoleo.msk@mail.ru',
    phone: '8 (980) 196-66-80',
    coordinates: [55.68386231457691, 37.412889059524524],
  },
  2: {
    adres: 'г. Мурино, ул. Екатерининская, д.17, пом. 38',
    email: 'teoleo.m@mail.ru',
    phone: '+7 (969) 208-88-33',
    coordinates: [60.065404003959074, 30.44102999999999],
  },
  3: {
    adres: 'Янино 1, ул. Шоссейная, д. 50 А/10',
    email: 'teoleo.spb@mail.ru',
    phone: '+7 (967) 991-29-99',
    coordinates: [59.945373564158835, 30.56742350000001],
  },
};

select.addEventListener('change', (e) => {
  const value = e.target.value;
  selectAdres.textContent = mapTable[value].adres;
  selectEmail.textContent = mapTable[value].email;
  selectTele.textContent = mapTable[value].phone;
  const mapId = document.getElementById('map');
  mapId.remove();
  let newId = document.createElement('div');
  newId.classList.add('map');
  newId.id = 'map';
  blockMap.append(newId);
  console.log(newId);

  ymaps.ready(init);

  function init() {
    let map = new ymaps.Map('map', {
      center: mapTable[value].coordinates, // ваши данные
      zoom: 18,
    });

    let placemark = new ymaps.Placemark(mapTable[value].coordinates, {}, {});

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
  }
});

const mapSection1 = document.querySelector('.map');
console.log(mapSection1);
if (mapSection1) {
  ymaps.ready(init);

  function init() {
    let map = new ymaps.Map('map', {
      center: [55.68386231457691, 37.412889059524524], // ваши данные
      zoom: 18,
    });

    let placemark = new ymaps.Placemark([55.68386231457691, 37.412889059524524], {}, {});

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
  }
}
