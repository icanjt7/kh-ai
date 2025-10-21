
// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault(); document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'})
  })
})

// modal logic
const openModal = (id) => {
  document.getElementById(id).classList.add('open');
}
const closeModal = (id) => {
  document.getElementById(id).classList.remove('open');
}
window.addEventListener('keydown', (e)=>{
  if(e.key==='Escape'){document.querySelectorAll('.modal').forEach(m=>m.classList.remove('open'))}
})
