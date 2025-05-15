import {createElement} from '../framework/render.js'; 


function createTaskInputComponent() {
    return (
        ` <div><h2 class="new-task__title">Новая задача</h2>
      <form class="new__task-container">
        <input class="new-task__input"type="text" placeholder="Название задачи..." />
        <button class="new-task__btn">+ Добавить</button>
      </form></div>
      ` 
      );
}


export default class TaskInputComponent {
  getTemplate() {
    return createTaskInputComponent();
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
