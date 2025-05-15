import TaskListComponent from '../view/task-list-component.js';
import TaskComponent from '../view/task-component.js';
import TaskBoardComponent from '../view/taskboard-component.js';
import { render } from '../framework/render.js';
import { Status,StatusLabel } from '../const.js';


export default class TasksBoardPresenter {
  #boardContainer = null;
  #tasksModel = null;
  #tasksBoardComponent = new TaskBoardComponent();
  #boardTasks = [];
  

  constructor({ boardContainer, tasksModel}) {
    this.#boardContainer = boardContainer;
    this.#tasksModel = tasksModel;
  }

  init() {
    this.#boardTasks = [...this.#tasksModel.getTasks()];
    render(this.#tasksBoardComponent, this.#boardContainer);
    
    Object.values(Status).forEach((status)=>{
        const taskListComponent = new TaskListComponent(status, StatusLabel[status]);

        render(taskListComponent, this.#tasksBoardComponent.getElement());
        const taskListElement = taskListComponent.getElement().querySelector('.task-list');
        const filteredTasksByStatus = this.#tasksModel.getTasksByStatus(status);

        for (let j = 0; j < filteredTasksByStatus.length; j++) {
            
            const taskComponent = new TaskComponent({task: filteredTasksByStatus[j]});
            render(taskComponent, taskListElement);
          }
    });

   
    
  }
}
