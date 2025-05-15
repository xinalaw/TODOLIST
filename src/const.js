const Status = {
  BACKLOG: 'backlog',
  IN_PROCESSING: 'in-processing',
  DONE: 'done',
  TRASHCAN: 'trashcan'
};

const StatusLabel = {
  [Status.BACKLOG]: 'Backlog',
  [Status.IN_PROCESSING]: 'In Processing',
  [Status.DONE]: 'Done',
  [Status.TRASHCAN]: 'Trashcan'
};

export { Status, StatusLabel };
