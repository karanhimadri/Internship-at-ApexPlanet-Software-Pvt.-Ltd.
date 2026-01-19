// Initialize data from localStorage
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let notes = JSON.parse(localStorage.getItem('notes')) || [];
let currentFilter = 'all';
let currentNoteFilter = 'all';

// DOM Elements
const todoForm = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const taskPriority = document.getElementById('taskPriority');
const taskDate = document.getElementById('taskDate');
const tasksList = document.getElementById('tasksList');
const tasksCount = document.getElementById('tasksCount');
const clearCompleted = document.getElementById('clearCompleted');
const filterBtns = document.querySelectorAll('.filter-btn');

const noteForm = document.getElementById('noteForm');
const noteTitle = document.getElementById('noteTitle');
const noteContent = document.getElementById('noteContent');
const noteCategory = document.getElementById('noteCategory');
const notesList = document.getElementById('notesList');
const noteFilterBtns = document.querySelectorAll('.note-filter-btn');

const editNoteModal = document.getElementById('editNoteModal');
const editNoteForm = document.getElementById('editNoteForm');
const closeModal = document.querySelector('.close-modal');

// Tab switching
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.dataset.tab;
        
        // Remove active class from all tabs
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked tab
        btn.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// ====== TO-DO LIST FUNCTIONS ======

// Add new task
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const task = {
        id: Date.now(),
        text: taskInput.value.trim(),
        priority: taskPriority.value,
        dueDate: taskDate.value,
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    todos.push(task);
    saveTodos();
    renderTasks();
    todoForm.reset();
});

// Render tasks
function renderTasks() {
    const filteredTasks = getFilteredTasks();
    
    if (filteredTasks.length === 0) {
        tasksList.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📋</div>
                <p>No tasks found. Add a new task to get started!</p>
            </div>
        `;
    } else {
        tasksList.innerHTML = filteredTasks.map(task => `
            <div class="task-item priority-${task.priority} ${task.completed ? 'completed' : ''}">
                <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} 
                       onchange="toggleTask(${task.id})">
                <div class="task-content">
                    <div class="task-text">${task.text}</div>
                    <div class="task-meta">
                        <span class="task-priority">${task.priority}</span>
                        ${task.dueDate ? `<span class="task-date">📅 ${formatDate(task.dueDate)}</span>` : ''}
                    </div>
                </div>
                <div class="task-actions">
                    <button class="btn-icon btn-delete" onclick="deleteTask(${task.id})">🗑️</button>
                </div>
            </div>
        `).join('');
    }
    
    updateTasksCount();
}

// Get filtered tasks
function getFilteredTasks() {
    switch (currentFilter) {
        case 'active':
            return todos.filter(task => !task.completed);
        case 'completed':
            return todos.filter(task => task.completed);
        case 'high':
            return todos.filter(task => task.priority === 'high');
        default:
            return todos;
    }
}

// Toggle task completion
function toggleTask(id) {
    const task = todos.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTodos();
        renderTasks();
    }
}

// Delete task
function deleteTask(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        todos = todos.filter(t => t.id !== id);
        saveTodos();
        renderTasks();
    }
}

// Clear completed tasks
clearCompleted.addEventListener('click', () => {
    if (confirm('Clear all completed tasks?')) {
        todos = todos.filter(task => !task.completed);
        saveTodos();
        renderTasks();
    }
});

// Filter tasks
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderTasks();
    });
});

// Update tasks count
function updateTasksCount() {
    const activeCount = todos.filter(t => !t.completed).length;
    tasksCount.textContent = `${activeCount} task${activeCount !== 1 ? 's' : ''} remaining`;
}

// Save todos to localStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// ====== NOTES FUNCTIONS ======

// Add new note
noteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const note = {
        id: Date.now(),
        title: noteTitle.value.trim(),
        content: noteContent.value.trim(),
        category: noteCategory.value,
        createdAt: new Date().toISOString()
    };
    
    notes.push(note);
    saveNotes();
    renderNotes();
    noteForm.reset();
});

// Render notes
function renderNotes() {
    const filteredNotes = getFilteredNotes();
    
    if (filteredNotes.length === 0) {
        notesList.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <div class="empty-state-icon">📝</div>
                <p>No notes found. Create a new note to get started!</p>
            </div>
        `;
    } else {
        notesList.innerHTML = filteredNotes.map(note => `
            <div class="note-card">
                <div class="note-header">
                    <div>
                        <h3 class="note-title">${note.title}</h3>
                        <span class="note-category">${note.category}</span>
                    </div>
                </div>
                <div class="note-content">${truncateText(note.content, 150)}</div>
                <div class="note-footer">
                    <span class="note-date">${formatDateTime(note.createdAt)}</span>
                    <div class="note-actions">
                        <button class="btn-icon" onclick="editNote(${note.id})">✏️</button>
                        <button class="btn-icon btn-delete" onclick="deleteNote(${note.id})">🗑️</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Get filtered notes
function getFilteredNotes() {
    if (currentNoteFilter === 'all') {
        return notes;
    }
    return notes.filter(note => note.category === currentNoteFilter);
}

// Edit note
function editNote(id) {
    const note = notes.find(n => n.id === id);
    if (note) {
        document.getElementById('editNoteId').value = note.id;
        document.getElementById('editNoteTitle').value = note.title;
        document.getElementById('editNoteContent').value = note.content;
        document.getElementById('editNoteCategory').value = note.category;
        editNoteModal.classList.add('active');
    }
}

// Update note
editNoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const id = parseInt(document.getElementById('editNoteId').value);
    const note = notes.find(n => n.id === id);
    
    if (note) {
        note.title = document.getElementById('editNoteTitle').value.trim();
        note.content = document.getElementById('editNoteContent').value.trim();
        note.category = document.getElementById('editNoteCategory').value;
        note.updatedAt = new Date().toISOString();
        
        saveNotes();
        renderNotes();
        editNoteModal.classList.remove('active');
    }
});

// Delete note
function deleteNote(id) {
    if (confirm('Are you sure you want to delete this note?')) {
        notes = notes.filter(n => n.id !== id);
        saveNotes();
        renderNotes();
    }
}

// Filter notes
noteFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        noteFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentNoteFilter = btn.dataset.category;
        renderNotes();
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    editNoteModal.classList.remove('active');
});

editNoteModal.addEventListener('click', (e) => {
    if (e.target === editNoteModal) {
        editNoteModal.classList.remove('active');
    }
});

// Save notes to localStorage
function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

// ====== UTILITY FUNCTIONS ======

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// Format date and time
function formatDateTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// Truncate text
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

// Initialize app
renderTasks();
renderNotes();