// Get DoM Elements
const toggle = document.getElementById('toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

// Event Listners
toggle.addEventListener('click',()=>
    document.body.classList.toggle('show-nav')
);

// modal Event Listner
open.addEventListener('click',()=>
    modal.classList.add('show-modal')
);

// close the modal
close.addEventListener('click',()=>
    modal.classList.remove('show-modal')
);

// close the window of modal if opened

window.addEventListener('click', e=>
    e.target===modal ? modal.classList.remove('show-modal') : false
);