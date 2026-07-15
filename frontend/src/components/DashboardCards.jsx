function DashboardCards({tickets}){


return(

<div className="dashboard-cards">


<Card 
title="Total Tickets"
value={tickets.length}
/>


<Card
title="Open Tickets"
value={
tickets.filter(
x=>x.status==="Open"
).length
}
/>


<Card
title="High Priority"
value={
tickets.filter(
x=>x.priority==="High"
).length
}
/>


<Card
title="Closed Tickets"
value={
tickets.filter(
x=>x.status==="Closed"
).length
}
/>


</div>


)

}


function Card({title,value}){

return(

<div className="dashboard-card">

<h3>
{title}
</h3>


<h1>
{value}
</h1>

</div>

)

}


export default DashboardCards;