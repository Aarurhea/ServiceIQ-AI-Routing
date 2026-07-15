function TicketFilters(props){

return(

<div className="ticket-controls">


<input

placeholder="Search Ticket ID, Customer, Email..."

value={props.searchText}

onChange={
e=>props.setSearchText(e.target.value)
}

/>



<select
value={props.statusFilter}
onChange={e=>props.setStatusFilter(e.target.value)}
>

<option>All</option>
<option>Open</option>
<option>Pending</option>
<option>Closed</option>

</select>




<select
value={props.priorityFilter}
onChange={e=>props.setPriorityFilter(e.target.value)}
>

<option>All</option>
<option>High</option>
<option>Medium</option>
<option>Low</option>

</select>



<select
value={props.categoryFilter}
onChange={e=>props.setCategoryFilter(e.target.value)}
>

<option>All</option>
<option>Technical</option>
<option>Billing</option>
<option>Account</option>

</select>


</div>

)

}


export default TicketFilters;