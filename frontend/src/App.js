import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import CreateTicket from "./components/CreateTicket";
import Toast from "./components/Toast";
import "./App.css";


function App(){


const [showCreate,setShowCreate] = useState(false);

const [message,setMessage]=useState("");



const showMessage = (msg)=>{


setMessage(msg);


};




return (


<div className="container">



<Sidebar

openCreate={()=>setShowCreate(true)}

/>





<div className="content">


<Header/>




<div className="page-content">


<Dashboard/>


</div>



</div>






{
showCreate &&


<CreateTicket

    closeForm={() => setShowCreate(false)}

    showMessage={showMessage}

/>


}





{
message &&

<Toast

message={message}

closeToast={()=>setMessage("")}

/>

}



</div>


)


}


export default App;