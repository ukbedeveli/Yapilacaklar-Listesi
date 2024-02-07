// ul etiketi seçimi
const myList = document.querySelector('ul');

// liste tıklama
myList.addEventListener('click', (ev) => {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
});

// yeni element oluşturma
function newElement() {
  const inputValue = document.getElementById('task').value;

  // hata mesajı
  if (!inputValue || inputValue.replace(/^\s+|\s+$/g, "").length === 0) {
    $('.error').toast('show');
    // input alanını temizleme
    document.getElementById('task').value = '';
    return;
  }

  // li elementi oluşturma ve listeye ekleme
  const li = document.createElement('li');
  li.textContent = inputValue;
  myList.appendChild(li);

  // span oluşturma, çarpı ekleme ve spani li elementine ekleme
  const span = document.createElement('SPAN');
  span.className = 'close';
  span.textContent = '\u00D7';
  li.appendChild(span);

  // spane tıklanınca li elementini silme
  span.onclick = () => {
    li.style.display = 'none';
  };

  // input alanı temizleme
  document.getElementById('task').value = '';
}