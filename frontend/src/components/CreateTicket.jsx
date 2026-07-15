import React, { useState } from "react";
import axios from "axios";


function CreateTicket({ 
    closeForm, 
    showMessage = () => {} 
})  {


const [ticket, setTicket] = useState({

    customer_name:"",
    email:"",
    source:"Web",
    category:"Technical",
    priority:"Low",
    description:""

});



const handleChange = (e) => {


setTicket({

    ...ticket,

    [e.target.name]: e.target.value

});


};





const submitTicket = async (e) => {


e.preventDefault();



try {


await axios.post(

    "http://127.0.0.1:8000/tickets",

    ticket

);



showMessage("Ticket created successfully");


closeForm();



}

catch(error){


console.error(error);


showMessage("Error creating ticket");


}



};






return (

<div className="modal-overlay">


<div className="ticket-modal">


<h2>
Create New Ticket
</h2>




<form onSubmit={submitTicket}>


<input

name="customer_name"

placeholder="Customer Name"

value={ticket.customer_name}

onChange={handleChange}

/>




<input

name="email"

placeholder="Email"

value={ticket.email}

onChange={handleChange}

/>




<select

name="source"

value={ticket.source}

onChange={handleChange}

>

<option value="Web">
Web
</option>

<option value="Email">
Email
</option>

<option value="Phone">
Phone
</option>


</select>





<select

name="category"

value={ticket.category}

onChange={handleChange}

>


<option value="Technical">
Technical
</option>


<option value="Billing">
Billing
</option>


<option value="Account">
Account
</option>


</select>







<select

name="priority"

value={ticket.priority}

onChange={handleChange}

>


<option value="High">
High
</option>


<option value="Medium">
Medium
</option>


<option value="Low">
Low
</option>



</select>






<textarea

name="description"

placeholder="Issue Description"

value={ticket.description}

onChange={handleChange}

/>






<div className="modal-buttons">



<button type="submit">

Create Ticket

</button>




<button

type="button"

onClick={closeForm}

className="cancel-btn"

>

Cancel

</button>



</div>





</form>



</div>



</div>

);


}



export default CreateTicket;