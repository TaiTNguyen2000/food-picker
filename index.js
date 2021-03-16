const btn = document.querySelector('#btnSubmit');
const div = document.querySelector('.yourfood');
const h2 = document.querySelector('#Food');
const a = document.querySelector('#FoodLink');

const foodArr = [
  'bún bò',
  'hủ tiếu',
  'cơm tấm',
  'cơm gà',
  'phở',
  'bánh canh',
  'bánh đa cua',
  'bún đậu mắm tôm',
  'bún mắm',
  'bún thịt nướng',
  'mì quảng',
  'xôi',
  'cháo',
  'lẩu',
  'súp',
  'bánh bao',
  'dim sum',
  'xiên que',
  'ốc',
  'chè',
  'rau câu',
];
let h2Text = 'Hãy ăn ';

btn.addEventListener('click', () => {
  console.log('a');
  div.style.display = 'block';
  let randomFood = foodArr[Math.floor(Math.random() * foodArr.length)];
  let url = `https://www.foody.vn/ho-chi-minh/dia-diem?q=${randomFood}&ds=Restaurant`;
  h2.innerText = h2Text + randomFood;
  a.href = url;
});
