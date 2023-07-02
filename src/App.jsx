import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RootLayout, { getTheme } from "./layouts/RootLayout";
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import AddTask, { addTaskAction } from "./pages/AddTask";
import EditTask, { editTaskAction, editTaskloader } from "./pages/EditTask";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
      loader={getTheme}
      errorElement={<ErrorPage />}
    >
      <Route
        index
        element={<Dashboard />}
        loader={dashboardLoader}
        action={dashboardAction}
      />
      <Route path="add" element={<AddTask />} action={addTaskAction} />
      <Route
        path="edit/:taskId"
        element={<EditTask />}
        loader={editTaskloader}
        action={editTaskAction}
      />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
