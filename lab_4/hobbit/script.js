document.addEventListener('DOMContentLoaded', function () {
    // Load existing notes from localStorage
    loadNotes();

    // Event listener for form submission
    document.getElementById('noteForm').addEventListener('submit', function (event) {
        event.preventDefault();
        saveNote();
    });
});

function saveNote() {
    // Get input values
    const title = document.getElementById('noteTitle').value;
    const content = document.getElementById('noteContent').value;
    const color = document.getElementById('noteColor').value; // Changed from input type="color"
    const pin = document.getElementById('pinNote').checked;
    const creationDate = new Date().toLocaleString();

    // Verify that the title is not empty
    if (!title.trim()) {
        alert('Please enter a title for the note.');
        return;
    }

    // Create note object
    const note = {
        title,
        content,
        color,
        pin,
        creationDate
    };

    // Get existing notes from localStorage
    let notes = JSON.parse(localStorage.getItem('notes')) || [];

    // Add new note to the array
    notes.unshift(note);

    // Save the updated notes array to localStorage
    localStorage.setItem('notes', JSON.stringify(notes));
    
    // Clear form inputs
document.getElementById('noteTitle').value = '';
document.getElementById('noteContent').value = '';
document.getElementById('noteColor').value = 'purple'; // Set default color to purple
document.getElementById('pinNote').checked = false;


    // Reload the notes on the page
    loadNotes();
}

function loadNotes() {
    // Get notes from localStorage
    let notes = JSON.parse(localStorage.getItem('notes')) || [];

    // Sort notes array - pinned notes first
    notes.sort((a, b) => (b.pin - a.pin));

    // Display notes on the page
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
