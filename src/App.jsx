import "./App.css";
import { Home, Login, Summary } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Loader, AppLayout, AuthLayout, ProtectedRoute } from "./ui";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <AuthLayout />,
//     errorElement: <div>Error</div>,
//     children: [
//       { path: "/", element: <Login /> },
//       { path: "/login", element: <Login /> },
//     ],
//   },

//   {
//     path: "/app",
//     element: (
//       <ProtectedRoute>
//         <AppLayout />
//       </ProtectedRoute>
//     ),

//     loader: <Loader />,
//     errorElement: <div>Error</div>,
//     children: [
//       { path: "/app", element: <Home /> },
//       { path: "/app/home", element: <Home /> },
//       { path: "/app/summary", element: <Summary /> },
//     ],
//   },
// ]);
function App() {
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <AppLayout>
        <Home />
      </AppLayout>
    </>
  );
}

export default App;
