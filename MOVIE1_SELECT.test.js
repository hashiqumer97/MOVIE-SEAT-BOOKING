const { JSDOM } = require('jsdom');

// Create a DOM instance with the required HTML structure
const dom = new JSDOM('<!doctype html><html><body><div id="status"></div><div id="total"></div><button id="payNowBtn"></button><div class="seat"></div></body></html>');

// Assign the window and document objects to global variables
global.window = dom.window;
global.document = dom.window.document;

// Your test code
const { handleSeatSelection} = require('./MOVIE1_SELECTTEST.js');

// Mock necessary elements
document.body.innerHTML = `
  <div>
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat"></div>
  </div>
  <div id="status"></div>
  <div id="total"></div>
  <button id="payNowBtn"></button>
  <input id="seatno" value="select">
`;

const seats = document.querySelectorAll('.seat');
const status = document.getElementById('status');
const total = document.getElementById("total");
const paymentBtn = document.getElementById('payNowBtn');

// Assign necessary elements to the global scope
global.seats = seats;
global.status = status;
global.total = total;
global.paymentBtn = paymentBtn;

// Mock localStorage
global.localStorage = {
  setItem() {},
};

// Write your test cases
describe('Seat selection', () => {
  beforeEach(() => {
    // Reset the seat selection and related elements before each test
    seats.forEach((seat) => {
      seat.classList.remove('selected');
    });
    status.textContent = '';
    total.textContent = '';
    paymentBtn.hidden = true;
  });

  test('should toggle seat selection and update status and total', () => {
    const seat = seats[0];

    handleSeatSelection(seat, 0);

    expect(seat.classList.contains('selected'));
    expect(status.textContent === '5');
    expect(total.textContent === '50');
  });
  });

  test('should enable payment button when required number of seats are selected', () => {
    const paymentBtn = window.document.getElementById('payNowBtn');

    // Select five seats
    const seat = seats[0];

    handleSeatSelection(seat, 0);

    expect(seat.classList.contains('selected'));
    expect(status.textContent === '5');
    expect(total.textContent === '50');
    expect(paymentBtn.disabled).toBe(false);
  });

describe('Redirect to homepage', () => {
  test('should redirect to homepage when home button is clicked', () => {
    const mockLocation = {
      href: 'MOVIE_HOMEPAGE1.html',
      assign(url) {
        this.href = url;
      },
    };
    window.location.assign = jest.fn().mockImplementation(mockLocation.assign);
  });
});
