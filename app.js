const url = 'https://test.toolympus.com/api/jfe-test'
;

const data = {
        "lastname": "invalid",
        "firstname": "string",
        "middlename": "string",
        "phone": "string",
        "country": "string"
}

const sendData = async (url, data) =>{
     await fetch(url, {
        method: "POST",
        body: data,
    })
    .then((data)=> console.log(data));

    if (!response.ok){
        throw new Error(`Ошибка по адресу ${url}, статуc ошибки ${res.status}`);
    };
    return await response.json();
};

sendData(url, data);
