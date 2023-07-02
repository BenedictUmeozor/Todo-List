import { BriefcaseIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import TaskList from "./TaskList";

function Category({ name, tasks, onFilter }) {
  const taskNumber = tasks.filter((task) => task.category === name).length;

  return (
    <div
      className={`${
        name === "Business" ? "bg-pink-500" : "bg-blue-500"
      } pt-6 px-3 pb-3 cursor-pointer rounded-lg w-1/2 text-white hover-effect hover:scale-95 max-sm:px-2 max-sm:mb-2 max-sm:pt-3`}
      onClick={() => onFilter(name)}
    >
      <div>
        <span className="opacity-60 max-sm:text-xs">
          {taskNumber} {taskNumber > 1 ? "tasks" : "task"}
        </span>
        <h4 className="flex items-center gap-2 mt-2">
          <BriefcaseIcon width={20} />
          <span className="text-2xl font-semibold max-sm:text-lg">{name}</span>
        </h4>
        <div
          className={`w-full h-6 rounded-sm ${
            name === "Business" ? "bg-pink-300" : "bg-blue-300"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default function TodoList({
  username,
  tasks,
  onDelete,
  onCheck,
  onFilter,
}) {
  return (
    <div className="py-6">
      <h2 className="text-4xl font-semibold max-sm:text-3xl">
        Hello, <span className="capitalize">{username}!</span>
      </h2>
      <p className="mt-10 mb-7 uppercase tracking-wide font-semibold opacity-80 0">
        categories
      </p>

      <div className="flex items-center justify-between gap-2">
        <Category name="Business" tasks={tasks} onFilter={onFilter} />
        <Category name="Personal" tasks={tasks} onFilter={onFilter} />
      </div>
      <Link
        className="my-6 flex items-center gap-2 hover-effect hover:text-red-500"
        to="/add"
      >
        <PencilSquareIcon width={25} />
        <span>Add new task</span>
      </Link>
      <div className="my-10">
        <TaskList
          tasks={tasks}
          onDelete={onDelete}
          onCheck={onCheck}
          onFilter={onFilter}
        />
      </div>
    </div>
  );
}
