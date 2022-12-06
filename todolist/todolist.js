// open modal to add list 
const openModal = document.querySelector('#add-list-btn');
openModal.addEventListener('click', function (e){
    e.preventDefault();
    console.log('coucou')
    const modal = document.querySelector('.modal-add-list')
    modal.classList.toggle('display-modal');
})

// button to add list and close modal
const btn = document.getElementById('confirm-btn')
btn.addEventListener('click', function(e) {
    e.preventDefault();
    // get value title list 
    const titleList = document.querySelector('#add-list-title')
    const inputValue = titleList.value   
   
    // create option in select list   
    const list = document.querySelector('#select-list')
    option.text = inputValue;
    list.appendChild(option).setAttribute('value', inputValue) 
    console.log(list)

    //  clear input
    titleList.value = ""

    // close modal
    const modal = document.querySelector('.display-modal')
    modal.classList.remove('display-modal');
})

const titleList = document.querySelector('#select-list', )
const displayTitle = document.querySelector('.title-list')

