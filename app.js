const btnSendForm = document.querySelector('#send-form');
const form = document.forms[0];

const url = 'https://test.toolympus.com/api/jfe-test'

function getData(e) {
    e.preventDefault();

    const values = {};

    for (let field of form) {
        const {name} = field;

        if (name) {
            const {value} = field;
            values[name] = value;
        }
    }
    let result = JSON.stringify(values);
    sendData(url, result);

}

// const messages = (status) =>{
//     const message = {
//         loading: 'Загрузка...',
//         sucsess: 'Загружено!',
//         failure: 'Ошибка!',
//     };
//     let statusMessage = document.createElement('div');
//     statusMessage.classList.add('status');
//     form.appendchild(statusMessage);
//     document.querySelector('.status').textContent = message.status;
// };



const sendData = async (url, data) => {
        const res = await fetch(url, {
        method: "POST",
        body: data,
    });

    if (!res.ok){
        throw new Error(`Ошибка по адресу ${url}, статуc ошибки ${res.status}`);
    }

    return res;
}

btnSendForm.onclick = () => {
    form.addEventListener('submit', getData);
}



