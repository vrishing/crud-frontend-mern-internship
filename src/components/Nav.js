import {Link} from "react-router-dom";
function Nav(){
    return(
        <nav class="navbar bg-warning">
            <Link to="/" class="navbar-brand" style={{fontFamily:"Playfair Display"}}>CRUD operation</Link>
            <div class="nav">
                <Link to="/create-student" class="nav-link">Create Student</Link>
                <Link to ="/student-list" class="nav-link">Student List</Link>
            </div>
        </nav>
    )
}
export default Nav;