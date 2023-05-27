const title=document.querySelector('#title');
const author=document.querySelector('#author');
const year=document.querySelector('#year');
const btn=document.querySelector('.btn');
const booklist=document.querySelector('#book-list');



btn.addEventListener('click',function(event){
    event.preventDefault()
    // console.log('allah mohan')
    if(title.value =='' && author.value =='' && year.value ==''){
        alert('input data is not');
    }
    // table row create
    const addRow=document.createElement('tr');
    

    // table heading create
    const newTitle=document.createElement('th');
    newTitle.innerHTML=title.value;
    addRow.appendChild(newTitle);

    const newAthor=document.createElement('th');
    newAthor.innerHTML=author.value;
    addRow.appendChild(newAthor);

    const newYear=document.createElement('th');
    newYear.innerHTML=year.value;
    addRow.appendChild(newYear);


    const close=booklist.appendChild(addRow);
    close.style.backgroundColor='black'
    close.style.color='white'

// close area


    // const button=document.createElement('th');
    // button.className='fa fa-close';
    // button.innerHTML=close.value;
    // close.appendChild(button);
    

    // button.addEventListener('click',function(){
    //     close.style.display='none'
    // });

});






