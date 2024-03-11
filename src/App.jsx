import Challenges from "./Components/Challenges";
import Dev  from "./Components/Dev";
import FindCoder from "./Components/FindCoder";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hire from "./Components/Hire";
import Explore from "./Components/Explore";
import Home from "./CURD/Home";
// import Logo from "./Components/Logo";
import Users from "./CURD/Users";
import CreateUsers from "./CURD/CreateUsers";
import EditPage from "./CURD/EditPage";

const App = () => {
  return (
    <div>
      {/* this is for FindCoder app it is present in components foler */}
      {/* <BrowserRouter>
        <FindCoder />
        <Routes>
            <Route element={<Explore/>} path="/"/>
            <Route element={<Hire/>} path="/a"/>
            <Route element={<Dev/>} path="/dev"/>
            <Route element={<Challenges/>} path="/c"/>
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
      <Home/>
      <Routes>
        <Route element={<CreateUsers/>} path="/"></Route>
        <Route element={<Users/>} path="/users"></Route>
        <Route element={<EditPage/>} path="/edit/:id"></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
