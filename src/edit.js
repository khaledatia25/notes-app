import { initializeEditPage, generateLastEdited } from './views.js';
import { upateNote, removeNote } from './notes.js';

const titleEl = document.querySelector('#note-title');
const bodyEl = document.querySelector('#note-body');
const removeEl = document.querySelector('#remove-note');
const lastEditedEl = document.querySelector('#last-edited');
const noteId = location.hash.substring(1);

initializeEditPage(noteId);

titleEl.addEventListener('input', (e) => {
    const note = upateNote(noteId, {
        title: e.target.value
    });
    lastEditedEl.textContent = generateLastEdited(note.updatedAt);
});

bodyEl.addEventListener('input',  (e) => {
    const note = upateNote(noteId, {
        body: e.target.value
    });
    lastEditedEl.textContent = generateLastEdited(note.updatedAt);
});

removeEl.addEventListener('click', (e) => {
    removeNote(noteId);
    location.assign('/index.html')
});

window.addEventListener('storage',(e) => {
    if(e.key === 'notes'){
        initializeEditPage(noteId)
    }
    
});