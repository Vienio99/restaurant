const homeTabLoad = () => {
    
    const content = document.getElementById('content');

    // Description & image
    const description = document.createElement('div');
    description.setAttribute('id', 'description');
    description.textContent = "Fat Thai, located in the heart of Kailua-Kona, is a family owned and operated restaurant. Fat Thai is owned and operated by Chariya and her three daughters. Preserving recipes and traditions of the past for future generations, Fat Thai is a local favorite."
    content.appendChild(description);


}

export default homeTabLoad