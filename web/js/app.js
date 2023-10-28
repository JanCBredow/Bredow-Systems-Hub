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

function updateStatus(url, elementId) {
    document.getElementById(elementId).textContent = 'ONLINE (' + Math.floor(Math.random() * 100) + 'ms)';
}