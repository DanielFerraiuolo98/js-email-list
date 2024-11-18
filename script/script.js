"use strict";

//https://flynn.boolean.careers/exercises/api/random/mail

const email = document.getElementById("emailList");
const btn = document.querySelector(".btn-secondary");

btn.addEventListener("click", function () {
    let mails = [];
    for (let i = 0; i < 10; i++) {
        axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((dati) => {
            mails.push(dati.data.response);
            if (mails.length === 10) {
                printEmail(mails, email);
            }
        });
    }
});

function printEmail(array, element) {
    console.log(array);
    let template = "";
    array.forEach(email => {
        template += `<li>${email}</li>`;
    });
    element.innerHTML = template;
}



