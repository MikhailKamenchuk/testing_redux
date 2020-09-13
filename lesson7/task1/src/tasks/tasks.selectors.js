import { createSelector } from "reselect";

export const tasksDataSelector = state => state.tasks.tasksList;
export const isFetchingSelector = state => state.tasks.isFetching;

export const sortedTasksDataSelector = createSelector(
  [tasksDataSelector],
  (tasks) => tasks
    .slice()
    .sort((a, b) => a.done - b.done)
);
