// Haluatko sekoitetut luukut?
const sekoita = false;

function luoNumerot() {
  let numerot = [];
  for (let i = 1; i <= 24; i++) numerot.push(i);

  if (sekoita) {
    numerot.sort(() => Math.random() - 0.5);
  }

  return numerot;
}

function luoKalenteri() {
  const container = document.getElementById('kalenteri');
  const numerot = luoNumerot();

  numerot.forEach((num) => {
    let ruutu = document.createElement('div');
    ruutu.className = 'luukku';
    ruutu.textContent = num;

    // Klikkaus → avaa uusi välilehti
    ruutu.addEventListener('click', () => avaaLuukku(ruutu, num));

    container.appendChild(ruutu);
  });
}

function avaaLuukku(ruutu, numero) {
  if (ruutu.classList.contains('avaa')) return;

  ruutu.classList.add('avaa');
  ruutu.textContent = '🎁 ' + numero;

  // Pieni animaatio ja sitten uusi välilehti:
  setTimeout(() => {
    window.open(`luukku${numero}.html`, '_blank');
  }, 400);
}

luoKalenteri();
