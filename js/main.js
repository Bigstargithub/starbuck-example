const searchEl = document.querySelector('.search');
const searchInput = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  searchInput.focus();
})

searchInput.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInput.setAttribute('placeholder', '통합검색')
})

searchInput.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInput.setAttribute('placeholder','');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if(window.scrollY > 500)
  {
    gsap.to(badgeEl, .3, {
      opacity: 0,
      display: 'none'
    })
  }
  else 
  {
    gsap.to(badgeEl, .3, {
      opacity: 1,
      display: 'block'
    })
  }
}, 300));
// _.throttle(함수, 시간) - 많은
// gsap.to(요소, 지속시간, 옵션) - 애니메이션 동작


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl,1,{
    delay: (index+1)*.4,
    opacity: 1
  })
});