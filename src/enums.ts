// const statuses = {
//   notStarted: 0,
//   inProgress: 1,
//   done: 2,
// };
// console.log(statuses.inProgress);

enum StatusEnum {
  NotStarted,
  InProgress,
  Done,
}

interface Task {
  id: string;
  status: StatusEnum;
}

console.log(StatusEnum.InProgress); // we get 1

let staredStatus: StatusEnum = StatusEnum.NotStarted;
