function proceedToPayment1() {
    // Get form data
    const formData = {
        car: document.getElementById('car').value,
        startDate: document.getElementById('start-date').value,
        endDate: document.getElementById('end-date').value,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
    };
    
    // Save form data to local storage
    localStorage.setItem('bookingData', JSON.stringify(formData));

    // Redirect to payment page
    window.location.href = 'payment.html';
}

function submitPayment() {
    // Get payment form data
    const paymentData = {
        cardNumber: document.getElementById('card-number').value,
        expiryDate: document.getElementById('expiry-date').value,
        cvv: document.getElementById('cvv').value
    };

    // Simulate payment processing
    // Add your actual payment processing logic here

    // Redirect to receipt page
    window.location.href = 'receipt.html';
}
