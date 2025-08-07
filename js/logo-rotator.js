// logo-rotator.js
(function(){
  const logos = [
    {src: '/bilder/alltid-ordning_white-on-green.png', alt: 'Alltid Ordning (vit på grön)'},
    {src: '/bilder/alltid-ordning_green-on-white.png', alt: 'Alltid Ordning (grön på vit)'},
    {src: '/bilder/all-tid-ordning_white-on-green.png', alt: 'All Tid Ordning (vit på grön)'},
    {src: '/bilder/all-tid-ordning_green-on-white.png', alt: 'All Tid Ordning (grön på vit)'}
  ];
  const img = document.getElementById('logo');
  if(!img) return;

  function pickRandom(){
    return logos[Math.floor(Math.random() * logos.length)];
  }

  function fadeTo(newLogo){
    img.classList.add('fade-out');
    setTimeout(() => {
      img.src = newLogo.src;
      img.alt = newLogo.alt;
      img.classList.remove('fade-out');
      img.classList.add('fade-in');
      setTimeout(() => img.classList.remove('fade-in'), 500);
    }, 500);
  }

  // initial
  const initial = pickRandom();
  img.src = initial.src;
  img.alt = initial.alt;

  // rotate every 10s
  setInterval(() => fadeTo(pickRandom()), 10000);
})();
