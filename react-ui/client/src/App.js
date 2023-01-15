import "./App.css";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import HOME from "./component/home/home";
import Profile from "./component/home/profile";
import NewHOme from "./component/home/newHome";
import ResetPassword from "./component/home/resetPassword";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' exact element={<HOME/>}></Route> */}
        <Route path='/' exact element={<NewHOme/>}></Route>

        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/resetPassword' element={<ResetPassword/>}></Route>


        {/* <Route path='/profile' element={Signin}></Route>
        <Route path='/signup' element={Signup}></Route> */}

      </Routes>
    </Router>
  );


}

export default App;
