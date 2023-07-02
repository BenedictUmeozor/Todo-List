import Task from "./Task";

export default function TaskList({ tasks, onDelete, onCheck, onFilter }) {
  function filter(el, params) {
    document
      .querySelectorAll(".filterBtn")
      .forEach((el) => el.classList.remove("active"));
    el.classList.add("active");
    onFilter(params);
  }

  return (
    <div>
      <div id="tasklist" className="flex items- justify-end gap-3">
        <button
          type="button"
          className={`filterBtn hover:text-red-500 active`}
          onClick={(e) => filter(e.target, e.target.textContent)}
        >
          All
        </button>
        <button
          type="button"
          className={`filterBtn hover:text-red-500`}
          onClick={(e) => filter(e.target, e.target.textContent)}
        >
          Pending
        </button>
        <button
          type="button"
          className={`filterBtn hover:text-red-500`}
          onClick={(e) => filter(e.target, e.target.textContent)}
        >
          Completed
        </button>
      </div>

      {tasks.length ? (
        <div className="my-12 grid md:grid-cols-2 gap-6">
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={onDelete}
              onCheck={onCheck}
            />
          ))}
        </div>
      ) : (
        <div>
          <p className="my-5 font-semibold opacity-80 text-lg text-center">
            No tasks to show
          </p>
        </div>
      )}
    </div>
  );
}
