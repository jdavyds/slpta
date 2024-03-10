import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import Onboard from "./onboarding";
import Info from "./onboarding/Info";
import Upload from "./onboarding/Upload";
import Password from "./onboarding/Password";
import Dashboard from "./dashboard/Dashboard";
import Analytics from "./dashboard/analytics";
import Reports from "./dashboard/reports";
import Users from "./dashboard/users";
import System from "./dashboard/system";
import Buses from "./dashboard/system/Buses";
import Stops from "./dashboard/system/Stops";
import Routes from "./dashboard/system/Routes";
import Settings from "./dashboard/settings";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RedirectToOnboard() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/onboard/information");
  }, [navigate]);

  return null;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RedirectToOnboard />,
  },
  {
    path: "/onboard",
    element: <Onboard />,
    children: [
      {
        index: true,
        path: "information",
        element: <Info />,
      },
      {
        path: "upload",
        element: <Upload />,
      },
      {
        path: "password",
        element: <Password />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "analytics",
        index: true,
        element: <Analytics />,
      },
      {
        path: "reports",
        element: <Reports />,
        children: [
          // { index: true, element: <ProductList /> },
          // {
          //   path: "add",
          //   element: <AddProduct />,
          //   children: [
          //     { relative: true, path: "", element: <Image /> },
          //     { path: "images", element: <Image /> },
          //     {
          //       path: "details",
          //       element: <Info />,
          //     },
          //     {
          //       path: "variations",
          //       element: <Variations />,
          //     },
          //   ],
          // },
        ],
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "system-setup",
        element: <System />,
        children: [
          {
            index: true,
            path: "buses",
            element: <Buses />,
          },
          {
            path: "routes",
            element: <Routes />,
          },
          {
            path: "stops",
            element: <Stops />,
          },
        ],
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Outlet />
    </div>
  );
}

export default App;
