function TicketTable({tickets}){


return(

<>


<h2>
Ticket Queue
</h2>


<table>


<thead>

<tr>

<th>ID</th>
<th>Customer</th>
<th>Email</th>
<th>Source</th>
<th>Category</th>
<th>Priority</th>
<th>Status</th>

</tr>

</thead>



<tbody>


{
tickets.map(ticket=>(

<tr key={ticket.ticket_id}>

<td>{ticket.ticket_id}</td>

<td>{ticket.customer_name}</td>

<td>{ticket.email}</td>

<td>{ticket.source}</td>

<td>{ticket.category}</td>

<td>{ticket.priority}</td>

<td>{ticket.status}</td>


</tr>


))
}


</tbody>


</table>


</>


)

}


export default TicketTable;