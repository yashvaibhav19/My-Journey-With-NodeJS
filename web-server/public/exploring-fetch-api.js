console.log('I\'m in');

// fetch('https://puzzle.mead.io/puzzle').then((res)=>{
//     res.json().then((data)=>{
//         console.log(data);
//     })
// });

const nameForm = document.querySelector('form');
const inputValue = document.querySelector('input');
const messageOne = document.querySelector('#message-1')
messageOne.textContent = 'Loading...'
nameForm.addEventListener('submit',(eventObject)=>{
    eventObject.preventDefault(); //prevents default behaviour like refreshing
    messageOne.textContent = 'My Name Is '+inputValue.value;
})