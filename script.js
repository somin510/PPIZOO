// 모바일 메뉴 토글
const tog = document.getElementById('navtoggle');
const menu = document.getElementById('menu');
if (tog && menu) {
  tog.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
}

// 스크롤 등장 애니메이션
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (i % 4 * 60) + 'ms';
  io.observe(el);
});
