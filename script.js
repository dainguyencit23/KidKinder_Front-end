// Booking Form
const bookingForm = document.querySelector('.booking-form-btn');
bookingForm.addEventListener('click',function(e){
    const bookingName = document.getElementById('name').value.trim();
    const bookingEmail = document.getElementById('email').value.trim();
    if(bookingName===''){
        alert('Please enter your name');
        return;
    }
    if(bookingEmail===''){
         alert('Please enter your email');
        return;
    }
    alert('Successfully!');
});