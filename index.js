// let form = document.querySelector("form");

// let name = document.querySelector("input");

// console.log(form);
// console.log('name');


// const sendData = async(url, data) => {
//     const response = await fetch(url, {
//         method: 'POST',
//         body: data,
//     })

//     if (!response.ok){
//         throw new Error(`Ошибка по адресу ${url}, статут ошибки ${response.status}`);

//         return await response.json
//     }
// }

// let btnSendForm = document.querySelector('#send-form');
// let inputs = document.querySelectorAll('input')


// btnSendForm.onclick = function(e) {
//     e.preventDefault();
//     sendForm('https://test.toolympus.com/api/jfe-test', inputs);
// }

// const sendForm = () => {
//     const regForm = document.querySelector('form'),
//         inputs = document.querySelectorAll('input');
//         const massage = {
//             loading: 'Загрузка ....',
//             success: 'Загружено',
//             failure: 'Ошибка', 
//         };

//         const postData = async (url, data) => {
//             document.querySelector('.status').textContent = massage.loading;
//             let res = await fetch(url, {
//                 method: "POST",
//                 body: data,
//             });

//             return await res.text();
//         }

//         const clearInputs = () => {
//             inputs.forEach(item =>{
//                 item.value = "";
//             });
//         };

//         regForm.forEach(item => {
//             item.addEventLisener('submit', (e) => {
//                 e.preventDefault();


//                 let statusMessage = document.createElement('div');
//                 statusMessage.classList.add('status');
//                 item.appendChild(statusMessage);

//                 const formList = JSON.stringify(regForm);

//                 postData('https://jsonplaceholder.typicode.com/todos/1', formList)
//                 .then(res => {
//                     console.log(res);
//                     statusMessage.textContent = massage.success;
//                 })
//                 .catch(()=>statusMessage.textContent = massage.failure)
//                 .finally(()=> {
//                     clearInputs();
//                     setTimeout(()=>{
//                         statusMessage.remove;
//                     }, 5000);
//                 });


//             });
//         });

    // regForm.addEventListener('submit', e => {
    //     e.preventDefault();

    //     const data = {
    //         name: 'drew',
    //         sername: 'skow',
    //     }
        
    //     const formList = JSON.stringify();

    //     sendData('https://jsonplaceholder.typicode.com/todos/1', data)
    // })
// } ;

// const sendForm = async (url, data) => {
//         const response = await fetch(url, {
//             method: 'POST',
//             body: data,
//         });

//         if (!response.ok){
//                 throw new Error(`Ошибка по адресу ${url}, статут ошибки ${response.status}`);
//                 return await response.json;
//             }
//     };

const isCheckboxOrRadio = type => ['checkbox', 'radio'].includes(type);

const {form} = document.forms;



function retrieveFormValue(event) {
    event.preventDefault();

    const values = {};

    for (let field of form) {
        const {name} = field;

        if (name) {
            const {type, checked, value} = field;

            values[name] = isCheckboxOrRadio(type) ? checked : value;
        }
    }

    console.log('v6', values);
}

form.addEventListener('submit', retrieveFormValue);



