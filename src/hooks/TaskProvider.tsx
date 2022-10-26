import { Component, JSX, createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import Task from "../types/Task";

export interface TaskContextModel {
	get: Task[];
	set: (tasks: Task[]) => void;
	add: (task: Task) => void;
	delete: (task: Task) => void;
}

export const TaskContext = createContext<TaskContextModel>();

export const TaskProvider: Component<{
	children?: JSX.Element,
}> = (props) => {
	const [tasks, setTasks] = createStore<Task[]>([]);
	const store: TaskContextModel = {
		get: tasks,
		set: setTasks,
		add: (task: Task) => {},
		delete: (task: Task) => {},
	};
	return (
		<TaskContext.Provider value={store}>
			{props.children}
		</TaskContext.Provider>
	);
}

export const useTasks = () => {
	return useContext(TaskContext);
}