import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";
import IntroForm from "../components/introForm";
import TodoList from "../components/TodoList";
import { toast } from "react-toastify";
import { useState } from "react";

export async function dashboardLoader() {
  const username = await fetchData("username");
  const tasks = await fetchData("tasks");
  return { username, tasks };
}

export async function dashboardAction({ request }) {
  const data = await request.formData();
  const { username } = Object.fromEntries(data);
  localStorage.setItem("username", JSON.stringify(username));
  return toast.success("Welcome " + username);
}

export default function Dashboard() {
  const { username, tasks } = useLoaderData();
  const data = tasks ?? [];

  const [taskList, setTaskList] = useState(data);

  function deleteTask(id) {
    const newTasks = taskList.slice();
    const updatedTasks = newTasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTaskList(updatedTasks);
    return toast.success("Task deleted successfully");
  }

  function completeTask(id) {
    const newTasks = taskList.slice();
    newTasks.forEach((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
    });
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTaskList(newTasks);
    console.log(newTasks);
  }

  function filterTask(params) {
    const filteredTasks = JSON.parse(localStorage.getItem("tasks"));
    let newList;
    if (params === "All") {
      setTaskList(filteredTasks);
    } else if (params === "Pending") {
      newList = filteredTasks.filter((task) => task.completed === false);
      setTaskList(newList);
    } else if (params === "Completed") {
      newList = filteredTasks.filter((task) => task.completed === true);
      setTaskList(newList);
    } else if (params === "Business") {
      newList = filteredTasks.filter((task) => task.category === "Business")
      setTaskList(newList)
    } else if (params === "Personal") {
      newList = filteredTasks.filter((task) => task.category === "Personal")
      setTaskList(newList)
    }
  }

  return (
    <div>
      {username ? (
        <TodoList
          username={username}
          tasks={taskList}
          onDelete={deleteTask}
          onCheck={completeTask}
          onFilter={filterTask}
        />
      ) : (
        <IntroForm />
      )}
    </div>
  );
}
