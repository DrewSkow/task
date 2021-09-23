const url = 'https://test.toolympus.com/api/jfe-test'
;

const data = {
        "lastname": "string",
        "firstname": "string",
        "middlename": "string",
        "phone": "string",
        "country": "string"
}

const sendData = async (url, data) => {
     const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
        body: JSON.stringify(data),
    })
    .then((data)=> console.log(data));

    if (!response.ok){
        throw new Error(`Ошибка по адресу ${url}, статуc ошибки ${response.status}`);
    };
    return await response.json();  
};


btnSendForm.onclick = (e) => {
    sendData(url, data);
    e.preventDefault();
}

