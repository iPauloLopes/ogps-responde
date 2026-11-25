function initializeCrpsSelector() {
    const container = document.querySelector('#list-container');
    if (!container) return; //remove console error

    if (container.className === 'crps-list') {
        fetch('components/crps-list.html')
            .then(response => response.text())
            .then(html => {
                container.innerHTML = html;
            });
    } else if (container.className === 'dpmf-list') {
        fetch('components/dpmf-list.html')
            .then(response => response.text())
            .then(html => {
                container.innerHTML = html;
            });
    }
}

window.initCrpsList = initializeCrpsSelector;

initializeCrpsSelector();