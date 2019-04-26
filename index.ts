// Import stylesheets
import './style.css';
import { books } from './assets/booklist';

const appDiv: HTMLElement = document.getElementById('title');
const list: HTMLElement = document.querySelector('#list');
appDiv.innerHTML = `<h1>TypeScript Pilas</h1>`;

books.forEach((book:any)=>{
    const li:HTMLElement = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = book.name;
    list.appendChild(li);
});
