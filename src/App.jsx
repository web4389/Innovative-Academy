import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Suspense } from "react";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <div className=" min-h-screen">
        <Suspense
          fallback={
            <div className="w-[100%] flex justify-center items-center">
              <Loader />
            </div>
          }
        >
          <RouterProvider router={router} />
        </Suspense>
      </div>
    </>
  );
}

export default App;
