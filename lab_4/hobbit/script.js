document.addEventListener("DOMContentLoaded", () => {
    loadNotes();
})

document.getElementById('note-form').addEventListener('submit', () => {
    saveNote();
});

document.getElementById('note-color').value = '#FFFFFF';

function saveNote() {
    const title = document.getElementById('note-title').value;
    const content = document.getElementById('note').value;
    const color = document.getElementById('note-color').value;
    const pin = document.getElementById('pin-note').checked;
    const creationDate = new Date().toLocaleString();
    console.log(title, content, color, pin, creationDate);

    const note = {
        title,
        content,
        color,
        pin,
        creationDate
    }

    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    notes.unshift(note);

    localStorage.setItem('notes', JSON.stringify(notes));

    loadNotes();
}

function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    notes.sort((a, b) => (b.pin - a.pin));

    const notesList = document.getElementById('right-content');

    notes.forEach((note) => {
        const noteItem = document.createElement('div');
        noteItem.classList.add('note-item');
        noteItem.style.backgroundColor = note.color;
        const pinnedIcon = note.pin ? '📌 ' : '';

        noteItem.innerHTML = `<strong>${pinnedIcon}${note.title}</strong><br>${note.content}<br><small>${note.creationDate}</small>`;

        notesList.appendChild(noteItem);
    })
}
