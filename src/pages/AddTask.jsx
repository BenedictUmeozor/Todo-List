import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

export async function addTaskAction({ request }) {
  const data = await request.formData();
  const { title, description, category } = Object.fromEntries(data);
  const tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
  const newTask = {
    id: uuidv4(),
    title: title,
    description: description,
    category: category,
    isCompleted: false,
  };
  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  toast.success("New task added successfully");
  return redirect("/");
}

export default function AddTask() {
  return (
    <>
      <header className="py-4">
        <h2 className="text-center font-semibold text-2xl">Add New Task</h2>
      </header>
      <section className="py-6">
        <div className="mx-auto w-full max-w-md element py-4 px-3 shadow">
          <Form method="post">
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
                <option value="Business">Business</option>
                <option value="Personal">Personal</option>
              </select>
            </div>
            <button
              type="submit"
              className="mt-4 py-2 px-7 rounded bg-black text-white dark:bg-white dark:text-black hover-effect hover:scale-95"
            >
              Add Task
            </button>
          </Form>
        </div>
      </section>
    </>
  );
}
