let totalPrice = 0;
const allSeat = document.getElementsByClassName('common-button');

for (const seats of allSeat) {
  // console.log(seats);
  seats.addEventListener("click", function(){
    seats.classList.add('bg-green-400')

  //  get the text 

  const text= seats.innerText;
  // console.log(text);
  const textContainer = document.getElementById('text-container');
  // console.log(textContainer);
  const p = document.createElement("p");
  p.innerText = text;
  textContainer.appendChild(p);

  // ticket total totalPrice 
  const ticket = document.getElementById('ticket-price').innerText;
 
  
 const ticketPrice = parseInt(ticket);

 totalPrice += ticketPrice;
 document.getElementById("total-taka").innerText = totalPrice;
})

}


 

const applybtn = document.getElementById('apply-btn');


applybtn.addEventListener("click", function(){
  // input value 
  const couponText = document.getElementById('input-field').value;

  if(couponText == "NEW15"){
    const discountAmount = totalPrice * 0.15;
    const afterDiscount = totalPrice - discountAmount;
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = afterDiscount;
    document.getElementById("input-field").value = "";
  }
  else if(couponText == "Couple 20"){
    const discountAmount = totalPrice * 0.2;
    const afterDiscount = totalPrice - discountAmount;
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = afterDiscount;
    document.getElementById("input-field").value = "";
  }
  

  else{
    alert('invalid coupon')
    document.getElementById("input-field").value = "";
  }
})
    
   
    

    



  


 




 

 

 


  


  


    
    
   


    





