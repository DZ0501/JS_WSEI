document.addEventListener('DOMContentLoaded', function () {
    loadNotes();

    document.getElementById('noteForm').addEventListener('submit', function (event) {
        event.preventDefault();
        saveNote();
    });
});

function saveNote() {
    const title = document.getElementById('noteTitle').value;
    const content = document.getElementById('noteContent').value;
    const color = document.getElementById('noteColor').value;
    const pin = document.getElementById('pinNote').checked;
    const creationDate = new Date().toLocaleString();

    if (!title.trim()) {
        alert('Please enter a title for the note.');
        return;
    }

    const note = {
        title,
        content,
        color,
        pin,
        creationDate
    };

    let notes = JSON.parse(localStorage.getItem('notes')) || [];

    notes.unshift(note);

    localStorage.setItem('notes', JSON.stringify(notes));
    
document.getElementById('noteTitle').value = '';
document.getElementById('noteContent').value = '';
document.getElementById('noteColor').value = 'purple'; // Set default color to purple
document.getElementById('pinNote').checked = false;


    loadNotes();
}

function loadNotes() {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];

    notes.sort((a, b) => (b.pin - a.pin));

    const notesList = document.getElementById('notesList');
    notesList.innerHTML = '';

    notes.forEach(function (note) {
        const noteItem = document.createElement('div');
        noteItem.classList.add('note-item');
        noteItem.style.backgroundColor = note.color;

        const pinnedIcon = note.pin ? '📌 ' : '';
        noteItem.innerHTML = `<strong>${pinnedIcon}${note.title}</strong><br>${note.content}<br><small>${note.creationDate}</small>`;

        notesList.appendChild(noteItem);
    });
}
