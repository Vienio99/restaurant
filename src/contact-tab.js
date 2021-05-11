const contactTabLoad = () => {
    
    const content = document.getElementById('content');

    const header = document.createElement('h2');
    header.textContent = "Contact us"
    content.appendChild(header);

    // Phone number and email

    const email = document.createElement('div');
    email.setAttribute('id', 'email');
    email.textContent = "E-mail: bookings@fat-thai.com"
    content.appendChild(email);

    const phoneNumber = document.createElement('div');
    phoneNumber.setAttribute('id', 'email');
    phoneNumber.textContent = "Phone number: +23 723 578 213"
    content.appendChild(phoneNumber);

}

export default contactTabLoad