const aboutTabLoad = () => {
    
    const content = document.getElementById('content');

    const header = document.createElement('h2');
    header.textContent = "About us"
    content.appendChild(header);

    const address = document.createElement('div');
    address.setAttribute('id', 'address');
    address.textContent = "Address: 1507 Garrett Street, \nGrand Rapids, Michigan, USA"
    content.appendChild(address);

    const time = document.createElement('div');
    time.setAttribute('id', 'time');
    time.textContent = "Opening hours: Mon-Thurs: 8am-8pm \nFri-Sun: 8am-11pm";
    content.appendChild(time);

}

export default aboutTabLoad;