import Layout from "./homeadded";
import GetAllRequest from "../alldetails";
const loggedUser = 0 || localStorage.getItem("user");

const NewHOme=()=>{
return (
<Layout>
{loggedUser ? (
        <GetAllRequest userdetails={JSON.parse(loggedUser).token} />
      ) : (
        ""
      )}</Layout>
)
}
export default NewHOme;