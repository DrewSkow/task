const url = 'https://test.toolympus.com/api/jfe-test';
const btnSendForm = document.querySelector('#send-form');
const form = document.forms[0];
const inputs = document.querySelectorAll('input');
let statusMessage;
let btnForHide

const clearInput = (input) =>{
    input.forEach(item => {
        item.value = ''
    });
}


console.log(inputs);
const createMessage = (status)=>{
    let stat = 0;
    let c = 0;
    btnForHide = document.querySelector('#send-form');

    switch(status){

        case 'loading': 
        stat = "Загрузка...";
        c = "y";
        btnForHide.style.display='none';
        break; 

        case 'success': 
        stat = "Форма успешно отправлена!"
        c = 'g';
        btnForHide.style.display='none';
        break;

        case 'failure': 
        stat = "Произошла ошибка !"
        btnForHide.style.display='none';
        c = 'r';
        break;
   
    }
    let divStatus = document.querySelector('.status');
    divStatus.classList.add(c);
    divStatus.textContent = stat;

}

function getData() {

    statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    document.forms[0].appendChild(statusMessage);
    createMessage('loading');

    const values = {};
    
    for (let field of form) {
        const {name} = field;

        if (name) {
            const {value} = field;
            values[name] = value;
        }
    }
    return JSON.stringify(values);  
}


const sendData = async (url, data) => { 
    console.log(data);  
     const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
        body: data,
    })

    if (!response.ok){
         createMessage('failure');
        throw new Error(`Ошибка по адресу ${url}, статуc ошибки ${response.status}`); 
    };
    createMessage('success');
    return await response.json();  
};


btnSendForm.onclick = (e) => {
    const data = getData();
    sendData(url, data)
    .finally(()=>{
       clearInput(inputs);
        setTimeout(() => {
            statusMessage.remove();
            btnForHide.style.display='flex';   
        }, 5000);
    });
    e.preventDefault();
}

