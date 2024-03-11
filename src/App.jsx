import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./CURD/Home";
import Users from "./CURD/Users";
import CreateUsers from "./CURD/CreateUsers";
import EditPage from "./CURD/EditPage";

const App = () => {
  return (
    

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
