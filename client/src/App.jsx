
import Home from "./pages/home"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    exact: true
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
