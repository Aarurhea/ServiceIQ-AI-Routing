import React, {useEffect,useState} from "react";
import axios from "axios";

import DashboardCards from "../components/DashboardCards";
import TicketFilters from "../components/TicketFilters";
import TicketTable from "../components/TicketTable";



function Dashboard(){


const [tickets,setTickets]=useState([]);


const [searchText,setSearchText]=useState("");

const [statusFilter,setStatusFilter]=useState("All");

const [priorityFilter,setPriorityFilter]=useState("All");

const [categoryFilter,setCategoryFilter]=useState("All");

const [currentPage,setCurrentPage]=useState(1);

const [pageSize,setPageSize]=useState(10);

useEffect(()=>{

loadTickets();

},[]);



const loadTickets=async()=>{

try{

const response=await axios.get(
"http://127.0.0.1:8000/tickets"
);


setTickets(response.data);


}

catch(error){

console.log(error);

}


};



const filteredTickets=tickets.filter(ticket=>{


return(

(
ticket.ticket_id.toString().includes(searchText)
||
ticket.customer_name.toLowerCase().includes(searchText.toLowerCase())
||
ticket.email.toLowerCase().includes(searchText.toLowerCase())
)

&&

(
statusFilter==="All"
||
ticket.status===statusFilter
)

&&

(
priorityFilter==="All"
||
ticket.priority===priorityFilter
)

&&

(
categoryFilter==="All"
||
ticket.category===categoryFilter
)

)
const totalPages=Math.ceil(
filteredTickets.length/pageSize
);



const startIndex=(currentPage-1)*pageSize;


const paginatedTickets =
filteredTickets.slice(
startIndex,
startIndex+pageSize
);

});



return(

<>



<DashboardCards tickets={tickets}/>


<TicketFilters

searchText={searchText}
setSearchText={setSearchText}

statusFilter={statusFilter}
setStatusFilter={setStatusFilter}

priorityFilter={priorityFilter}
setPriorityFilter={setPriorityFilter}

categoryFilter={categoryFilter}
setCategoryFilter={setCategoryFilter}

/>



<TicketTable tickets={filteredTickets}/>


</>


)

}


export default Dashboard;