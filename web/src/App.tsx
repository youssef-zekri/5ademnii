import "./_Main.scss";
import Loading from "./components/Loading/Loading";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { routes } from "./Routes/Routes";
import Popup from "./components/Popup/Popup";
import { useSelector } from "react-redux";

function App() {
  const PopUpStatus = useSelector((state: any) => state.popup.value);
  console.log(PopUpStatus);

  return (
    <div className="App">
      {PopUpStatus ? <Popup /> : null}
      <Router>
        <Suspense fallback={<Loading />}>
          <ToastContainer />
          <Routes>
            {routes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                element={
                  <route.layout>
                    <route.component />
                  </route.layout>
                }
              />
            ))}
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
