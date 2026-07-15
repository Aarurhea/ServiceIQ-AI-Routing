function Sidebar({openCreate}){

return(

<div className="sidebar">


<h2>
ServiceIQ
</h2>


<ul>


<li className="active-menu">
🏠 Dashboard
</li>


<li>
🎫 Ticket Queue
</li>


<li
onClick={openCreate}
>
➕ Create Ticket
</li>


<li>
📊 Analytics
</li>


<li>
🤖 AI Insights
</li>


<li>
⚙ Settings
</li>


</ul>


<div className="sidebar-footer">
ServiceIQ v1.0
</div>


</div>


)

}


export default Sidebar;