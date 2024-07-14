import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import AddAlbum from "./components/AddAlbum";
import { AlbumProvider } from "./albumContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },{
          path : "add",
          element : <AddAlbum />
        }
      ],
    },
  ]);

  return (
    <div>
    <AlbumProvider>
      <RouterProvider router={router}></RouterProvider>
      </AlbumProvider>
    </div>
  );
}

export default App;
