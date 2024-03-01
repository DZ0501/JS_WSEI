const textbox1 = document.querySelector('#textbox1');
const textbox2 = document.querySelector('#textbox2');
const textbox3 = document.querySelector('#textbox3');
const textbox4 = document.querySelector('#textbox4');

const sumSpan = document.querySelector('#sum');
const avgSpan = document.querySelector('#avg');
const minSpan = document.querySelector('#min');
const maxSpan = document.querySelector('#max');


calc();

function calc() {
    const textbox1Value = parseFloat(textbox1.value) || 0;
    const textbox2Value = parseFloat(textbox2.value) || 0;
    const textbox3Value = parseFloat(textbox3.value) || 0;
    const textbox4Value = parseFloat(textbox4.value) || 0;

    const sum = textbox1Value + textbox2Value + textbox3Value + textbox4Value;
    const avg = sum / 4;
    const min = Math.min(textbox1Value, textbox2Value, textbox3Value, textbox4Value)
    const max = Math.max(textbox1Value, textbox2Value, textbox3Value, textbox4Value)

    sumSpan.textContent = sum;
    avgSpan.textContent = avg;
    minSpan.textContent = min;
    maxSpan.textContent = max;

    textbox1.addEventListener('input',calc);
    textbox2.addEventListener('input',calc);
    textbox3.addEventListener('input',calc);
    textbox4.addEventListener('input',calc);
}


