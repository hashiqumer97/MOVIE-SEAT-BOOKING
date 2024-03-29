const seats = document.querySelectorAll('.seat');
const status = document.getElementById('status');
const total = document.getElementById("total");
const paymentBtn = document.getElementById('payNowBtn');


seats.forEach((seat, index) => {
  seat.addEventListener('click', () => {
    seat.classList.toggle('selected');
    
    // Select the next seat if available
    if(document.getElementById("seatno").value == "select"){
      !seat.classList.toggle('selected');
    }
    
    if(document.getElementById("seatno").value == "2"){
      const nextSeatIndex = index + 1;
      seats[nextSeatIndex].classList.toggle('selected');
      document.getElementById("seatno").value = "select";
      document.getElementById("seatno").disabled = true;
      paymentBtn.hidden = false;
    }
    if(document.getElementById("seatno").value == "3"){
      const nextSeatIndex = index + 1;
      seats[nextSeatIndex].classList.toggle('selected');
      const nextSeatIndex2 = nextSeatIndex + 1;
      seats[nextSeatIndex2].classList.toggle('selected');
      document.getElementById("seatno").value = "select";
      document.getElementById("seatno").disabled = true;
      paymentBtn.hidden = false;
    }
    if(document.getElementById("seatno").value == "4"){
      const nextSeatIndex = index + 1;
      seats[nextSeatIndex].classList.toggle('selected');
      const nextSeatIndex2 = nextSeatIndex + 1;
      seats[nextSeatIndex2].classList.toggle('selected');
      const nextSeatIndex3 = nextSeatIndex2 + 1;
      seats[nextSeatIndex3].classList.toggle('selected');
      document.getElementById("seatno").value = "select";
      document.getElementById("seatno").disabled = true;
      paymentBtn.hidden = false;
    }
    if(document.getElementById("seatno").value == "5"){
      const nextSeatIndex = index + 1;
      seats[nextSeatIndex].classList.toggle('selected');
      const nextSeatIndex2 = nextSeatIndex + 1;
      seats[nextSeatIndex2].classList.toggle('selected');
      const nextSeatIndex3 = nextSeatIndex2 + 1;
      seats[nextSeatIndex3].classList.toggle('selected');
      const nextSeatIndex4 = nextSeatIndex3 + 1;
      seats[nextSeatIndex4].classList.toggle('selected');
      document.getElementById("seatno").value = "select";
      document.getElementById("seatno").disabled = true;
      paymentBtn.hidden = false;
    }
 
    // Update status message
    const selectedSeats = document.querySelectorAll('.seat.selected');
    status.textContent = `${selectedSeats.length}`;
    total.textContent = `${selectedSeats.length * 8}`;
    localStorage.setItem('total', total.textContent);
  });
});
function home(){
  window.location.href = "MOVIE_HOMEPAGE1.html";
}
