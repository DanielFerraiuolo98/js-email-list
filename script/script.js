"use strict";

//https://flynn.boolean.careers/exercises/api/random/mail

const email = document.getElementById("emailLisT")
let mails = [];

for (let i = 0; i < 10; i++) {
    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((dati) => {
        console.log(dati.data.response);
        if (mails.length === 10) {
            printEmail();
        }
    })
}


function printEmail(array) {
    email.innerHTML = dati.data.response;
    let template = "";
    array.forEach(email => {
        template += `<li>${email}</li>`
    });
}


