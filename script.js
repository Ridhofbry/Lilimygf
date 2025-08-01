
const moments = [
  { src: 'assets/moment1.jpg', caption: 'Waktu kita pertama jalan bareng.' },
  { src: 'assets/moment2.jpg', caption: 'Hari ulang tahun kamu yang spesial banget.' },
  { src: 'assets/moment3.jpg', caption: 'Momen lucu yang nggak terlupakan!' }
];

let currentIndex = 0;

function openPortal() {
  const overlay = document.getElementById('transitionOverlay');
  const box = document.getElementById('momentBox');
  const wrapper = document.getElementById('momentWrapper');

  overlay.style.display = "flex";

  setTimeout(() => {
    overlay.style.display = "none";
    box.classList.add('show');
    spawnStickers();
    showMoment(currentIndex);
    wrapper.scrollIntoView({ behavior: 'smooth' });
  }, 2000);
}

function showMoment(index) {
  const img = document.getElementById('momentImage');
  const caption = document.getElementById('momentCaption');
  img.src = moments[index].src;
  caption.textContent = moments[index].caption;
}

function showNext() {
  currentIndex = (currentIndex + 1) % moments.length;
  showMoment(currentIndex);
}

function spawnStickers() {
  const container = document.getElementById('stickerContainer');
  const stickerImages = [
    'https://www.clipartmax.com/png/small/469-4699940_hijab-sticker-illustration.png'
  ];

  for (let i = 0; i < 10; i++) {
    const img = document.createElement('img');
    img.src = stickerImages[0];
    img.className = 'sticker';
    img.style.left = `${Math.random() * 100}%`;
    img.style.top = `${Math.random() * 100}%`;
    container.appendChild(img);

    setTimeout(() => {
      img.remove();
    }, 4000);
  }
}
