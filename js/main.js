let dropDown= document.querySelector('.box .toggle-switch');
let nav= document.querySelector('.box nav');
dropDown.addEventListener('click', ()=>{
        if(nav.style.display == 'none'){
            nav.style.display='block';
        }
        else{
            nav.style.display='none';
        }
})