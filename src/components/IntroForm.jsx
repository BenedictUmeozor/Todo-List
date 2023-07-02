import { Form } from "react-router-dom";
import { FaceSmileIcon } from "@heroicons/react/24/solid";

export default function IntroForm() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="element shadow p-3 rounded w-5/6 max-w-md">
        <div className="flex items-center gap-2">
          <p className="font-semibold">Enter a username</p>
          <FaceSmileIcon width={25} color="#ffde34" />
        </div>
        <Form method="post" className="mt-3">
          <input
            type="text"
            name="username"
            className="block appearance-none h-12 w-full px-2 rounded border text-black dark:text-white text-base border-gray-400 bg-gray-100 dark:bg-zinc-800 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="mt-4 py-2 px-4 rounded bg-black text-white dark:bg-white dark:text-black hover-effect hover:scale-95"
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
}
