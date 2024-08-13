document.addEventListener('DOMContentLoaded', function() {
    // Retrieve booking data from local storage
    const bookingData = JSON.parse(localStorage.getItem('bookingData'));

    // Populate receipt with booking details
    document.getElementById('car').innerText = bookingData.car;
    const startDate = new Date(bookingData.startDate);
    const endDate = new Date(bookingData.endDate);
    const rentalDuration = calculateRentalDuration(startDate, endDate);
    document.getElementById('rental-duration').innerText = rentalDuration + ' days';
    // Assuming total amount calculation based on rental duration, car type, etc.
    const totalAmount = calculateTotalAmount(bookingData.car, rentalDuration);
    document.getElementById('total-amount').innerText = totalAmount.toFixed(2);
});

function calculateRentalDuration(startDate, endDate) {
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

function calculateTotalAmount(carType, rentalDuration) {
    // Add your logic to calculate the total amount based on car type and rental duration
    // This is just a placeholder
    return rentalDuration * 100; // Assuming $100 per day
}
