import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/task-input-component.js';
import {render, RenderPosition} from './framework/render.js';
import TaskBoardComponent from './view/taskboard-component.js';
import TaskListComponent from './view/task-list-component.js';
import TaskComponent from './view/task-component.js';

const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.new-task');
const mainContainer = document.querySelector('.main');
render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer);
render(new TaskBoardComponent(), mainContainer, RenderPosition.BEFOREEND);

const taskContainer = document.querySelector('.taskboard');


for (let i = 0; i < 4; i++) {
    const taskListComponent = new TaskListComponent();
    render(taskListComponent, taskContainer);
  
   
    const taskListElement = taskListComponent.getElement().querySelector('.task-list');
  
    for (let j = 0; j < 4; j++) {
      render(new TaskComponent(), taskListElement);
    }
  }
  