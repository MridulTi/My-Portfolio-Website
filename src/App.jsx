import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";

import NonCode from "./Pages/Non-Code/NonCode";
import Code from "./Pages/Code/Code";
import Resources from "./Pages/Resources/Resources";
import MainLayout from "./Pages/more/Main_Layout";
import Error from "./Pages/more/ErrorPage";
import Projects from "./Pages/Resources/Projects";
import Blogs from "./Pages/Resources/Blogs";
import Skill from "./Pages/Skills/Skill";
import Contact from "./Pages/Contact/Contact";
export default function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<MainLayout/>,
      children:[
        {
          path: "/",
          element: <Home />,
        },
        
        {
          path: "/Projects",
          element:<Projects/>
        },
        {
          path: "/Blogs",
          element:<Blogs/>
        },
        {
          path: "/Code",
          element: <Code/>,
        },
        {
          path: "/Non_Code",
          element: <NonCode/>,
        },
        {
          path: "/Contact",
          element: <Contact/>,
        },
        {
          path:"*",
          element:<Error/>
        },
        {
          path:"/Resources",
          children:[
            {
              
              path:"/Resources/:Slugs",
              element:<Resources/>
            }
          ]
        },
        {
          path:"/Skills",
          children:[
            {
              
              path:"/Skills/:Slugs",
              element:<Skill/>
            }
          ]
        }
      ]
    }
      
    // {
    //   path: "/events",
    //   children: [
    //     {
    //       path: '/Case_Study',
    //       element: <CaseStudies/>,
    //     },
    //     {
    //       path: '/Case_Dtudy/:Case_Slug',
    //       element: <SingleCase/>,
    //     }
    //   ]
    // },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

