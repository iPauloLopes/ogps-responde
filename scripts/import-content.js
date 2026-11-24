
const contentContainer = document.getElementById('content-container');

async function loadPage(pageUrl) {
    const response = await fetch(pageUrl);
    const html = await response.text();
    contentContainer.innerHTML = html;
    importPageScripts();
}

function importPageScripts() {
    window.initCopyText();
    window.initCrpsList();
}

document.getElementById('sidebar-container').addEventListener('click', handlePageClick);

function handlePageClick(event) {
    const pageUrl = event.target.closest('a[data-page]');
    if (!pageUrl) return; //remove console error
    loadPage(pageUrl.dataset.page);
}