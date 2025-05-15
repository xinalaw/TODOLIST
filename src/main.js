import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/task-input-component.js';
import { render, RenderPosition } from './framework/render.js';
import TasksBoardPresenter from './presenter/tasks-board-presenter.js';
import TasksModel from './model/task-model.js';



const tasksModel = new TasksModel();

const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.new-task');
const mainContainer = document.querySelector('.main');

const taskBoardPresenter = new TasksBoardPresenter({ boardContainer: mainContainer,tasksModel });

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer);

taskBoardPresenter.init();