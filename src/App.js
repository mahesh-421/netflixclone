import Netflixclone from "./components/Netflixclone";
import Error from "./components/Error";
import Browse from "./components/Browse";
// import Header from "./components/Header";

import { Routes, Route } from "react-router-dom";

// const AppLayout = () => {
//   return (
//     <Provider store={appStore}>
//       <div>
//         <Outlet />
//       </div>
//     </Provider>
//   );
// };

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Body />,
//       },
//       {
//         path: "/browse",
//         element: <Browse />,
//       },
//     ],
//   },
//   {
//     path: "/error",
//     element: <Error />,
//   },
// ]);

const App = () => {
  return (
    <Routes>
      <Route path="/project/netflixclone/" element={<Netflixclone />} />
      <Route path="/project/netflixclone/browse" element={<Browse />} />
      <Route path="/project/netflixclone/error" element={<Error />} />
    </Routes>
  );
};

export default App;
