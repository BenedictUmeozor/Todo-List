import { Form, redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

export function editTaskloader({ params }) {
  const { taskId } = params;
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const taskToEdit = tasks.filter((task) => task.id === taskId);
  return { taskToEdit };
}

export async function editTaskAction({ request }) {
  const data = await request.formData();
  const { taskId, title, description, category } = Object.fromEntries(data);
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.forEach((task) => {
    if (task.id === taskId) {
      task.title = title;
      task.description = description;
      task.category = category;
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  toast.success("Task editted successfully");
  return redirect("/");
}

export default function EditTask() {
  const { taskToEdit } = useLoaderData();
  const [task] = taskToEdit;

  return (
    <>
      <header className="py-4">
        <h2 className="text-center font-semibold text-2xl">Edit Task</h2>
      </header>
      <section className="py-6">
        <div className="mx-auto w-full max-w-md element py-4 px-3 shadow">
          <Form method="post">
            <input type="hidden" name="taskId" value={task.id} />
            <div>
              <label
                htmlFor="title"
                className="block mb-3 font-semibold text-lg"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="block appearance-none h-12 w-full px-2 rounded border text-black dark:text-white text-base border-gray-400 bg-gray-100 dark:bg-zinc-800 focus:outline-none"
                defaultValue={task.title}
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="description"
                className="block mb-3 text-lg font-semibold"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="5"
                maxLength={100}
                className="block appearance-none w-full p-2 rounded border text-black dark:text-white text-base border-gray-400 bg-gray-100 resize-none dark:bg-zinc-800 focus:outline-none"
                required
                defaultValue={task.description}
              ></textarea>
            </div>
            <div className="mt-4">
              <label htmlFor="category" className="block mb-4 font-semibold">
                Select Category
              </label>
              <select
                name="category"
                id="category"
                required
                className="block px-4 h-12 rounded border text-black dark:text-white text-base border-gray-400 bg-gray-100 dark:bg-zinc-800 focus:outline-none"
              >
                <option
                  value="Business"
                  selected={task.category === "Business"}
                >
                  Business
                </option>
                <option
                  value="Personal"
                  selected={task.category === "Personal"}
                >
                  Personal
                </option>
              </select>
            </div>
            <button
              type="submit"
              className="mt-4 py-2 px-7 rounded bg-black text-white dark:bg-white dark:text-black hover-effect hover:scale-95"
            >
              Edit Task
            </button>
          </Form>
        </div>
      </section>
    </>
  );
}
