function toggleContainer(container) {
    container.classList.toggle('open');
}

function openURL(url) {
    window.open(url);
}

setInterval(function () {
    updateStatus('URL_für_Statistik_Container_1', 'stat-container-1-status');
    updateStatus('URL_für_Statistik_Container_2', 'stat-container-2-status');
}, 5000);

// Host und Port festcodieren
var statContainer1Host = 'vps.jan-bredow.de';
var statContainer1Port = 22;
var statContainer2Host = 'bredow.systems';
var statContainer2Port = 80;

function pingServer(host, port, timeout, callback) {
    var start = new Date();
    var response = {
        status: 'OFFLINE',
        ping: null
    };

    var socket = new WebSocket('wss://' + host + ':' + port);

    socket.onopen = function () {
        response.status = 'ONLINE';
        var end = new Date();
        response.ping = end - start;
        socket.close();
        callback(response);
    };

    socket.onclose = function () {
        if (response.status === 'OFFLINE') {
            callback(response);
        }
    };

    setTimeout(function () {
        if (response.status === 'OFFLINE') {
            socket.close();
        }
    }, timeout);
}

pingServer(statContainer1Host, statContainer1Port, 5000, function (result) {
    updateStatus('URL_für_Statistik_Container_1', 'stat-container-1-status', result);
});

pingServer(statContainer2Host, statContainer2Port, 5000, function (result) {
    updateStatus('URL_für_Statistik_Container_2', 'stat-container-2-status', result);
});

function updateStatus(url, elementId, result) {
    document.getElementById(elementId).textContent = result.status === 'ONLINE' ?
        'ONLINE (' + result.ping + 'ms)' : 'OFFLINE';
}