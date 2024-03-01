document.addEventListener('DOMContentLoaded', () => {
    const upperPart = document.querySelector('.upper-part');
    const addButton = document.querySelector('#button-add');
    const sumSpan = document.querySelector('#sum');
    const avgSpan = document.querySelector('#avg');
    const minSpan = document.querySelector('#min');
    const maxSpan = document.querySelector('#max');

    addButton.addEventListener('click', () => {
        addTextBox();
        calc();
    });

    upperPart.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            event.target.parentElement.remove();
            calc();
        }
    });

    function addTextBox() {
        const textBoxContainer = document.createElement('div');
        textBoxContainer.classList.add('upper-part-element');

        const textBox = document.createElement('input');
        textBox.type = 'text';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        textBoxContainer.appendChild(textBox);
        textBoxContainer.appendChild(deleteButton);
        upperPart.appendChild(textBoxContainer);

        textBox.addEventListener('input', calc);
    }

    calc();

    function calc() {
        const textBoxes = document.querySelectorAll('.upper-part-element input[type="text"]');
        let sum = 0;
        let count = 0;
        let minValue = Infinity;
        let maxValue = -Infinity;

        textBoxes.forEach((textBox) => {
            const value = parseFloat(textBox.value) || 0;
            sum += value;
            count++;
            minValue = Math.min(minValue, value);
            maxValue = Math.max(maxValue, value);
        });

        const average = count > 0 ? sum / count : 0;

        sumSpan.textContent = sum;
        avgSpan.textContent = average.toFixed(2);
        minSpan.textContent = minValue === Infinity ? 0 : minValue;
        maxSpan.textContent = maxValue === -Infinity ? 0 : maxValue;

        textbox1.addEventListener('input', calc);
        textbox2.addEventListener('input', calc);
        textbox3.addEventListener('input', calc);

    }
});
