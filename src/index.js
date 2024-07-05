import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/home/home";
import About from "./views/About/about";
import Contact from "./views/contact/contact";

const root=ReactDom.createRoot(document.getElementById("root"));

const router=createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
  },
  {
    path:"/about",
    element:<About/>,
  },
  {
    path:"/contact",
    element:<Contact/>,
  }

]);

root.render(<RouterProvider router={router}/>);



