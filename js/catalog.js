const triggers = document.querySelector('.catalog__triggers');
const trigger = document.querySelectorAll('.catalog__trigger');
const furniture = document.querySelector('.catalog__furniture img');

const mapFurniture = {
  'серийные диваны': '1',
  Кровати: '2',
  Кресла: '3',
  Пуфы: '4',
};

triggers.addEventListener('click', onClickTrigger);

function onClickTrigger(e) {
  if (e.target.className === 'catalog__trigger') {
    trigger.forEach((t) => t.classList.remove('active'));
    const currendId = mapFurniture[e.target.textContent];
    e.target.classList.add('active');
    const src = furniture.src;
    const arr = src.split('');
    arr[arr.length - 5] = currendId;
    furniture.src = arr.join('');
  }
}
