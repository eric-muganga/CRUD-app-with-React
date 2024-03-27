import { createBrowserRouter, RouterProvider } from "react-router-dom";

import UserList from "./views/UserList";
import AddUser from "./views/AddUser.jsx";
import Root from "./views/Root.jsx";
import EditUser from "./views/EditUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <UserList />,
      },
      {
        path: "add-user",
        element: <AddUser />,
      },
      {
        path: "edit-user/:id",
        element: <EditUser />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
