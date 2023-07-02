import {
  CheckIcon,
  BriefcaseIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Task({ task, onDelete, onCheck }) {
  return (
    <div
      className={`grid grid-cols-9 gap-2 element px-4 py-5 max-sm:px-2 rounded shadow ${
        task.completed ? "opacity-75" : ""
      }`}
    >
      <div className="col-span-1">
        <button
          className={`flex items-center justify-center border-2 rounded p-1 max-sm:p-0 ${
            task.completed ? "" : "p-3 max-sm:p-2"
          }`}
          onClick={() => onCheck(task.id)}
        >
          {task.completed ? <CheckIcon width={20} /> : ""}
        </button>
      </div>

      <div className="col-span-8">
        <h5
          className={`text-xl font-semibold mb-2 capitalize max-sm:text-lg ${
            task.completed ? "line-through" : ""
          }`}
        >
          {task.title}
        </h5>
        <p className="mb-4 capitalize max-sm:text-sm opacity-70">{task.description}</p>
        <div className="flex items-center justify-between">
          {task.category === "Business" ? (
            <div className="flex items-center gap-1 py-2 px-4 border-2 rounded border-pink-500 max-sm:px-2 max-sm:py-1 max-sm:text-xs">
              <BriefcaseIcon width={20} className="text-pink-500" />
              <span>Business</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 py-2 px-4 border-2 rounded border-blue-500 max-sm:px-2 max-sm:py-1 max-sm:text-xs">
              <BriefcaseIcon width={20} className="text-blue-500" />
              <span>Personal</span>
            </div>
          )}
          <div className="flex items-center gap-3">
            <Link
              to={`edit/${task.id}`}
              className="flex items-center gap-1 hover-effect hover:text-blue-500 max-sm:text-xs"
              onClick={(e) => {
                if (task.completed) {
                  e.preventDefault();
                  toast.warning("You cannot edit a completed task");
                }
              }}
            >
              <PencilIcon width={20} />
              <span>Edit</span>
            </Link>
            <div
              className="flex items-center gap-1 cursor-pointer hover-effect hover:text-red-500 max-sm:text-xs"
              onClick={() => onDelete(task.id)}
            >
              <TrashIcon width={20} />
              <span>Delete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
