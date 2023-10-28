function toggleContainer(container) {
    container.classList.toggle('open');
}

function openURL(url) {
    window.open(url);
}

setInterval(function () {
    checkPortReachability('vps.jan-bredow.de', 22, 'stat-container-1-status');
    checkPortReachability('bredow.systems', 80, 'stat-container-2-status');
}, 5000);

function checkPortReachability(host, port, elementId) {
    var img = new Image();
    img.src = '//' + host + ':' + port;
    img.onload = function() {
        updateStatus(elementId, 'ONLINE');
    };
    img.onerror = function() {
        updateStatus(elementId, 'OFFLINE');
    };
}

function updateStatus(elementId, status) {
    document.getElementById(elementId).textContent = status;
}
