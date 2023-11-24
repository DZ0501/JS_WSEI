// notatnik z zajęć
const txtbox_1 = document.querySelector('#txtbox_1')
const txtbox_2 = document.querySelector('#txtbox_2')
const txtbox_3 = document.querySelector('#txtbox_3')
const txtbox_4 = document.querySelector('#txtbox_4')
const btn_calculate = document.querySelector('#calculate')
const results_box = document.querySelector('#results')

const sum_span = document.querySelector('#sum');
const avg_span = document.querySelector('#avg');
const min_span = document.querySelector('#min');
const max_span = document.querySelector('#max');




//shame
btn_calculate.addEventListener('click', () => {
    const txtbox_1_value = parseFloat(txtbox_1.value) || 0
    const txtbox_2_value = parseFloat(txtbox_2.value) || 0
    const txtbox_3_value = parseFloat(txtbox_3.value) || 0;
    const txtbox_4_value = parseFloat(txtbox_4.value) || 0;

    const sum = txtbox_1_value + txtbox_2_value + txtbox_3_value + txtbox_4_value;
    const avg = sum / 4;
    const min = Math.min(txtbox_1_value, txtbox_2_value, txtbox_3_value, txtbox_4_value);
    const max = Math.max(txtbox_1_value, txtbox_2_value, txtbox_3_value, txtbox_4_value);

    results_box.innerHTML = `
        Suma: ${sum} <br>
        Średnia: ${avg.toFixed(2)} <br>
        Minimum: ${min} <br>
        Maksimum: ${max}
    `;
})

//yawn
function calc() {
    const txtbox_1_value = parseFloat(txtbox_1.value) || 0
    const txtbox_2_value = parseFloat(txtbox_2.value) || 0
    const txtbox_3_value = parseFloat(txtbox_3.value) || 0;
    const txtbox_4_value = parseFloat(txtbox_4.value) || 0;

    const sum = txtbox_1_value + txtbox_2_value + txtbox_3_value + txtbox_4_value;
    const avg = sum / 4;
    const min = Math.min(txtbox_1_value, txtbox_2_value, txtbox_3_value, txtbox_4_value);
    const max = Math.max(txtbox_1_value, txtbox_2_value, txtbox_3_value, txtbox_4_value);

    sum_span.textContent = sum;
    avg_span.textContent = avg.toFixed(2);
    min_span.textContent = min;
    max_span.textContent = max;

    txtbox_1.addEventListener('input', calc);
    txtbox_2.addEventListener('input', calc);
    txtbox_3.addEventListener('input', calc);
    txtbox_4.addEventListener('input', calc);


}
calc();

// //normal
// const polaDiv = document.querySelector('#pola');
// const dodajButton = document.querySelector('#dodaj');
// const sumaSpan = document.querySelector('#suma');
// const sredniaSpan = document.querySelector('#srednia');
// const minimumSpan = document.querySelector('#minimum');
// const maksimumSpan = document.querySelector('#maksimum');

// // Funkcja do przeliczania wyników
// function przeliczWyniki() {
//     const liczby = document.querySelectorAll('.liczba');
//     let suma = 0;

//     liczby.forEach((liczba) => {
//         const val = parseFloat(liczba.value) || 0;
//         suma += val;
//     });

//     const iloscLiczb = liczby.length;
//     const srednia = iloscLiczb > 0 ? suma / iloscLiczb : 0;
//     const min = Math.min(...Array.from(liczby, (liczba) => parseFloat(liczba.value) || 0));
//     const max = Math.max(...Array.from(liczby, (liczba) => parseFloat(liczba.value) || 0));

//     // Aktualizacja wyników na stronie
//     sumaSpan.textContent = suma;
//     sredniaSpan.textContent = srednia.toFixed(2); // Zaokrąglenie do dwóch miejsc po przecinku
//     minimumSpan.textContent = min;
//     maksimumSpan.textContent = max;
// }

// // Obsługa przycisku "Dodaj pole"
// dodajButton.addEventListener('click', () => {
//     const nowePole = document.createElement('div');
//     nowePole.classList.add('pole');
//     nowePole.innerHTML = `
//                 <input type="text" class="liczba" placeholder="Liczba">
//                 <button class="usun">Usuń pole</button>
//             `;

//     polaDiv.appendChild(nowePole);

//     const usunButtons = document.querySelectorAll('.usun');
//     usunButtons.forEach((usunButton) => {
//         usunButton.addEventListener('click', () => {
//             const pole = usunButton.parentElement;
//             polaDiv.removeChild(pole);
//             przeliczWyniki();
//         });
//     });

//     przeliczWyniki();
// });

// const usunButtons = document.querySelectorAll('.usun');
// usunButtons.forEach((usunButton) => {
//     usunButton.addEventListener('click', () => {
//         const pole = usunButton.parentElement;
//         polaDiv.removeChild(pole);
//         przeliczWyniki();
//     });
// });

// przeliczWyniki();

