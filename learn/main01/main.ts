import { createTree as t, bfs } from '/src/index';
import './style.css';
const root = t(1, t(2, t(3), t(6)), t(4, null, t(5)));

const container = document.querySelector('#container');
if (container) {
  const ul = document.createElement('ul');
  const result = bfs(root);
  let child: HTMLElement;
  for (let i = 0; i < result.length; i++) {
    child = document.createElement('li');
    child.innerText = String(result[i]);
    ul.appendChild(child);
  }
  container.appendChild(ul);
}
