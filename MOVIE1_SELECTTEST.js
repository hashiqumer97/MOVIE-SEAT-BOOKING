const seats = document.querySelectorAll('.seat');
const status = document.getElementById('status');
const total = document.getElementById("total");
const paymentBtn = document.getElementById('payNowBtn');

// MOVIE1_SELECT.js

// Function to handle seat selection
function handleSeatSelection(e) {
  
    // Check if the seat is available
   
  
      // Update status message
      const selectedSeats = document.querySelectorAll('.seat.selected');
      if (status) {
        status.textContent = `${selectedSeats.length}`;
      }
  
      // Update total cost
      if (total) {
        total.textContent = `${selectedSeats.length * 10}`;
      }
    }

  
    // Update status message
    const selectedSeats = document.querySelectorAll('.seat.selected');
    if (status) {
      status.textContent = `${selectedSeats.length}`;
    }
    if (total) {
      total.textContent = `${selectedSeats.length * 10}`;
    }

  module.exports = {
    handleSeatSelection,
  };

 
  