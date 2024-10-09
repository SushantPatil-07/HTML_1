
function renderFooter() {
    const footer = document.getElementById('footer');
    
    const footerText = `Welcome ${userType}`; 

    footer.innerHTML = `
        <p>${footerText}</p>
    `;
}

window.onload = renderFooter;
