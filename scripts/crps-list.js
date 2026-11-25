function initializeCrpsSelector() {
    const container = document.getElementById('crps-list-container');
    if (!container) return; //remove console error

    fetch('components/crps-list.html')
        .then(response => response.text())
        .then(html => {
            container.innerHTML = html;
        });
}

window.initCrpsList = initializeCrpsSelector;

initializeCrpsSelector();