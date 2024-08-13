/*document.addEventListener('DOMContentLoaded', function() {
    // Retrieve booking data from local storage
    const bookingData = JSON.parse(localStorage.getItem('bookingData'));

    // Populate receipt with booking details
    document.getElementById('car').innerText = bookingData.car;
    const startDate = new Date(bookingData.startDate);
    const endDate = new Date(bookingData.endDate);
    const rentalDuration = calculateRentalDuration(startDate, endDate);
    document.getElementById('rental-duration').innerText = rentalDuration + ' days';
    
    const driverAmount = parseFloat(bookingData.driverAmount) || 0; // If driver amount is not provided, default to 0
    document.getElementById('driver-amount').innerText = driverAmount.toFixed(2);

    // Assuming total amount calculation based on rental duration, car type, driver amount, etc.
    const totalAmount = calculateTotalAmount(bookingData.car, rentalDuration, driverAmount);
    document.getElementById('total-amount').innerText = totalAmount.toFixed(2);
});

function calculateRentalDuration(startDate, endDate) {
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

function calculateTotalAmount(carType, rentalDuration, driverAmount) {
    // Add your logic to calculate the total amount based on car type, rental duration, driver amount, etc.
    // This is just a placeholder
    const baseAmountPerDay = 100; // Base rental amount per day
    const totalRentalAmount = rentalDuration * baseAmountPerDay;
    return totalRentalAmount + driverAmount;
}
*/