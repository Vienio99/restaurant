const aboutTabLoad = () => {
    
    const content = document.getElementById('content');

    const header = document.createElement('h2');
    header.textContent = "Location"
    content.appendChild(header);

    // Phone number and email

    const email = document.createElement('div');
    email.setAttribute('id', 'email');
    email.textContent = "E-mail: bookings@fat-thai.com"
    content.appendChild(email);

}

export default aboutTabLoad