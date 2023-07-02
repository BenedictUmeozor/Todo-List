import { useRouteError } from "react-router-dom";
import { FaceFrownIcon } from "@heroicons/react/24/solid";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="mt-11 text-center">
      <div className="mb-5 text-center">
        <FaceFrownIcon width={50} className="mx-auto" />
      </div>
      <h3 className="text-2xl">uh oh! we have a problem</h3>
      <p className="mt-4">{error.statusText || error.message}</p>
    </div>
  );
}
