
document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.nav-button');

    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const content = document.getElementById('content');

            switch (event.target.innerText) {
                case 'Attractions':
                    content.innerHTML = 
'<h2>Attractions</h2><p>Information about attractions...</p>';

                    break;
                case 'Location & Hours':
                    content.innerHTML = '<h2>Location & Hours</h2><p>Information about location and hours...</p>';
                    break;
                case 'Ticket Info':
                    content.innerHTML = '<h2>Ticket Info</h2><p>Information about tickets...</p>';
                    break;
                case 'Items Available':
                    content.innerHTML = '<h2>Items Available</h2><p>Information about items available...</p>';
                    break;
                case 'FAQ':
                    content.innerHTML = '<h2>FAQ</h2><p>Information about frequently asked questions...</p>';
                    break;
            }
        });
    });
});
function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        });
}

