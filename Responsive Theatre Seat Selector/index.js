const container = document.querySelector('.container');
const seats = documents.querySelectorAll('.row.seat:not(occupied')
const count = document.getElementById('count');
const total = document.getElementById('total');

// Update total and count
function updateSelectedCount() {
  const seats = document.querySelectorAll('.seat');
  const selectedSeats = document.querySelectorAll('.seat.selected');

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount; 

  console.log(`Total selected seats: ${selectedSeatsCount}`);
}

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});
