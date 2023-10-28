function toggleContainer(container) {
    container.classList.toggle('open');
}

function openURL(url) {
    window.open(url);
}

setInterval(function () {
    checkServerReachability('https://mail.jan-bredow.de', 'stat-container-1-status');
    checkServerReachability('https://bredow.systems', 'stat-container-2-status');
}, 5000);

function checkServerReachability(url, elementId) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', url, true);

    xhr.onload = function() {
        updateStatus(elementId, 'ONLINE');
    };

    xhr.onerror = function() {
        updateStatus(elementId, 'OFFLINE');
    };

    xhr.send();
}

function updateStatus(elementId, status) {
    document.getElementById(elementId).textContent = status;
}
