import "./App.css";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import HOME from "./component/home/home";
import Profile from "./component/home/profile";
import NewHOme from "./component/home/newHome";
import ResetPassword from "./component/home/resetPassword";
import ADDPOST from "./component/postPage.js/addPostPage";
import About from "./component/about";

const NotFound = () => {
  return (
    <div>
      <h1>The requested page could not be found.</h1>
    </div>
  );
};
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' exact element={<HOME/>}></Route> */}
        <Route path='/' exact element={<NewHOme/>}></Route>
        <Route path='/about' exact element={<About/>}></Route>

        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/resetPassword' element={<ResetPassword/>}></Route>
        <Route path='/addPost' element={<ADDPOST/>}></Route>
        <Route path="*" element={NotFound} />



        {/* <Route path='/profile' element={Signin}></Route>
        <Route path='/signup' element={Signup}></Route> */}

      </Routes>
    </Router>
  );
}

export default App;
