import Axios from "axios";
import {useEffect, useState} from "react";
import StudentListRow from "./StudentListRow";

function StudentList(){
    const [arr,setArr] = useState([]);
    useEffect(() =>{
        Axios.get("https://crud-mern-internship-backend-1.onrender.com/studentRoute/")
         .then((res)=>{
            if(res.status === 200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=> alert(err));
    },[])
    const ListItems = () =>{
        return arr.map((val,ind)=>{  //[{},{},{},{}]
            return <StudentListRow obj={val}/>
        })
    }



    return(
        <table class="table table-bordered table-striped table-success" style={{maxWidth: "60%", margin: "50px auto"}}>
            <thead>
                <tr>
                    <th class="text-center">Name</th>
                    <th class="text-center">Email</th>
                    <th class="text-center">Roll No.</th>
                    <th class="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
    );
}
export default StudentList;