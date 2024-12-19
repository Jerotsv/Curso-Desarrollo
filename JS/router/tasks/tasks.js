import { createHeader } from '../components/header.js';
import { getTasksFromBackend } from '../services.js';
import { createAddTask } from './components/add-task.js';
import { createTaskCards } from './components/task-cards.js';

export function loadTasks() {
    console.log('loaded tasks');
    const pageTitle = 'Tareas';
    createHeader(pageTitle);
    const tasks = getTasksFromBackend();
    console.log(tasks);
    createAddTask('details');
    createTaskCards(tasks, '.cards-container');
}
