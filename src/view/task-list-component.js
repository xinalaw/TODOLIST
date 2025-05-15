import { createElement } from '../framework/render.js';


function createTaskListTemplate(status, label) {
 
  return (
    `<div class="task-column ${status}">
      <h3>${label}</h3>
      <ul class="task-list"></ul>
    </div>`
  );
}

export default class TaskListComponent {
  constructor(status,statusLabel) {
    this.status = status;
    this.statusLabel = statusLabel;
  }

  getTemplate() {
    return createTaskListTemplate(this.status,this.statusLabel);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
