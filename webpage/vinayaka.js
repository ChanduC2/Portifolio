/* Simple JS
 - populates menu & gallery
 - mobile nav toggle
 - order form opens WhatsApp with prefilled message
*/

const MENU = [
  {name:'Dosa', desc:'Crispy, served with sambar & chutney', price:'₹35'},
  {name:'Idly', desc:'Soft steamed idly (2 pcs)', price:'₹30'},
  {name:'Puri', desc:'Puri with potato curry', price:'₹50'},
  {name:'Vada', desc:'Crispy medu vada (2 pcs)', price:'₹25'},
  {name:'Bajji', desc:'Hot bajji (seasonal veg)', price:'₹20'},
  {name:'Upma', desc:'Savoury semolina upma', price:'₹35'},
  {name:'Pesarattu', desc:'Green gram dosa', price:'₹45'},
  {name:'Uttappam', desc:'Thick uttappam with toppings', price:'₹55'},
];

const cardsRoot = document.getElementById('menuCards');
const galleryRoot = document.getElementById('gallery');

function populateMenu(){
  MENU.forEach(item=>{
    // card
    const card = document.createElement('div'); card.className='card';
    card.innerHTML = `
      <div class="thumb">${item.name.charAt(0)}</div>
      <div>
        <h4>${item.name} <small class="muted" style="font-weight:600">${item.price}</small></h4>
        <p>${item.desc}</p>
      </div>`;
    cardsRoot.appendChild(card);

    // gallery
    const g = document.createElement('div'); g.className='gitem';
    g.innerHTML = `<strong>${item.name}</strong><div class="muted">${item.price}</div>`;
    galleryRoot.appendChild(g);
  })
}

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');
navToggle.addEventListener('click',()=> navList.classList.toggle('show'));

// Order form -> open WhatsApp chat prefilled
const orderForm = document.getElementById('orderForm');
orderForm.addEventListener('submit',function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const order = document.getElementById('order').value.trim();
  const phone = document.getElementById('phone').value.trim();
  if(!name || !order || !phone){ alert('Please fill all fields'); return; }

  // WhatsApp number (owner) - international format without + (India: 91)
  const ownerNumber = '919666393088'; // change if needed
  const text = `Hello Vinayaka Tiffins,%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AOrder: ${encodeURIComponent(order)}%0A%0APlease confirm.`;
  // Use wa.me link
  const waLink = `https://wa.me/${ownerNumber}?text=${text}`;
  window.open(waLink, '_blank');

  orderForm.reset();
});

// Call button quick action
const callBtn = document.getElementById('callBtn');
callBtn.addEventListener('click',()=> window.location.href = 'tel:9666393088');

// Initialize
populateMenu();
// Scroll animation for fade-up elements
function animateOnScroll() {
  const fadeEls = document.querySelectorAll('.fade-up');
  const triggerBottom = window.innerHeight * 0.85;

  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < triggerBottom){
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

orders.forEach(item => {
  let orderItem = document.createElement('div');
  orderItem.classList.add('order-item');
  orderItem.innerHTML = `
    <h3>${item.name}</h3>
    <p>Quantity: ${item.quantity}</p>
    <p>Total: ₹${item.total}</p>`;
  orderSection.appendChild(orderItem);
});
