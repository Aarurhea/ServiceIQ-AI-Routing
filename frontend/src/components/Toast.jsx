import React from "react";


function Toast({message, closeToast}){


return (

<div className="toast-container">


<div className="toast-success">


<div className="toast-icon">

✓

</div>



<div className="toast-content">


<h4>
Success
</h4>


<p>
{message}
</p>


</div>




<button
className="toast-close"
onClick={closeToast}
>

×

</button>



</div>


</div>

);


}


export default Toast;