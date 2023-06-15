import Task from "../types/Task";
import taskMocks from '../mocks/TaskMocks'

export const getTasks = (user: string): Task[] => {
	// TODO: call API (axios?) to get user tasks from database
	return taskMocks;
}

export const saveTask = (task: Task, oldState?: Task): void => {
	// TODO: call API to save user task to database
}
