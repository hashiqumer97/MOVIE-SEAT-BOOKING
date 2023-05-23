const gettingTotal = localStorage.getItem('total');
const totalpayamt = document.getElementById("totalpayamt");
const cancelForm = document.getElementById('cancelForm');


function cancel(){
    window.location = "MOVIE_HOMEPAGE1.html";
  }

function onlyNumberKey(evt) {
             
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

const gettotal = localStorage.total;
totalpayamt.innerText = gettotal;

cancelForm.addEventListener('cancel', function(e) {
    e.preventDefault();
    
  });
  function checkCreditCard() {
    const cardnumber = document.getElementById('cardno');
    const expirymonthlist = document.getElementById('expirymonthlist');
    const expiryyearlist = document.getElementById('expiryyearlist');
    const cvv = document.getElementById('cvv');
    const payBtn = document.getElementById('payBtn');

  if (
    cardnumber.value.length === 16 &&
    expirymonthlist.value != 'select' &&
    expiryyearlist.value != 'select' &&
    cvv.value.length === 3
  ) {
    payBtn.disabled = false;
    if (!payBtn.disabled) {
        window.alert("Payment Successful! You will be receiving your tickets shortly through email.");
        this.submit();
      }
  } else {
    window.alert("Please enter valid card details");
    window.location.reload();
  }
    document.getElementById('cardno').addEventListener('input', checkCreditCard);
    document.getElementById('expirymonthlist').addEventListener('change', checkCreditCard);
    document.getElementById('expiryyearlist').addEventListener('change', checkCreditCard);
    document.getElementById('cvv').addEventListener('input', checkCreditCard);
    
    paymentForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
      });
}
