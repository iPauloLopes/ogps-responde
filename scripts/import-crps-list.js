document.addEventListener("DOMContentLoaded", () => {
    fetch("../../components/crps-list.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("crps-list-container").innerHTML = html;
        });
});