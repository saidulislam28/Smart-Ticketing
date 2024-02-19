let totalPrice = 0;
const allSeat = document.getElementsByClassName('common-button');

for (const seats of allSeat) {
  
  
  // console.log(seats);
  seats.addEventListener("click", function(){
    seats.disabled = true;
    
seats.style.backgroundColor = 'green';
seats.style.color = 'white';

    //  change available seat
    const availableSeat = document.getElementById('available-seat');
    const currentavailableSeat = parseInt(availableSeat.innerText);
    const updateSeat = currentavailableSeat - 1;
    availableSeat.innerText = updateSeat;


    // change seat amount 
    const seatCount = document.getElementById('seat-count');
    const currentSeatCount = parseInt(seatCount.innerText);
    const updatedSeatCount = currentSeatCount + 1;
    seatCount.innerText = updatedSeatCount;
    if(updatedSeatCount >= 4){
      thisbtn()
    }


    


  //  get the text 

  const text= seats.innerText;


  const textContainer = document.getElementById('text-container');
  
  const div = document.createElement('div');

  const p1 = document.createElement('p');
  p1.innerText = text;
  const p2 = document.createElement('p');
  p2.innerText = 'Economy';
  const p3 = document.createElement('p');
  p3.innerText = '550';
  
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
  div.classList.add("my-div")

  textContainer.appendChild(div)


  // ticket total totalPrice 
  const ticket = document.getElementById('ticket-price').innerText;
 
  
 const ticketPrice = parseInt(ticket);

 totalPrice += ticketPrice;
 document.getElementById("total-taka").innerText = totalPrice;
 document.getElementById("grand-total").innerText = totalPrice;
 
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
    const inputContainer = document.getElementById('input-container');
    inputContainer.classList.add('hidden');
  }
  else if(couponText == "Couple 20"){
    const discountAmount = totalPrice * 0.2;
    const afterDiscount = totalPrice - discountAmount;
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = afterDiscount;
    document.getElementById("input-field").value = "";
    const inputContainer = document.getElementById('input-container');
    inputContainer.classList.add('hidden');
  }
  else{
    alert('invalid coupon')
    document.getElementById("input-field").value = "";
  }
})
    

  


  const nextbtn = document.getElementById('next-button');
  
    nextbtn.addEventListener('click', function(){
    
  
      document.getElementById('total-taka').innerText = 0;
      document.getElementById('grand-total').innerText = 0;
      document.getElementById('text-container').innerText = "";
      document.getElementById("input-field").value = "";
      document.getElementById('seat-count').innerText = 0;
      document.getElementById('available-seat').innerText = 40;



    })
   
  


 
  








    
    

    

    
   
    

    



  


 




 

 

 


  


  


    
    
   


    





