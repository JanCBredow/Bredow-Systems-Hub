function checkWebsiteReachability(url, elementId) {
    var startTime = Date.now();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        var endTime = Date.now();
        var ping = endTime - startTime;
        updateStatus(elementId, 'ONLINE (' + ping + 'ms)');
    };

    xhr.onerror = function() {
        updateStatus(elementId, 'OFFLINE');
    };

    xhr.send();
}

setInterval(function () {
    checkWebsiteReachability('https://bredow.systems', 'stat-container-2-status');
}, 5000);

function updateStatus(elementId, status) {
    document.getElementById(elementId).textContent = status;
}