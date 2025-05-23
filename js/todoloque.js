  //color del (ver detalles)
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".job-details").forEach(link => {
        if (!link.getAttribute("href")) {
            link.classList.add("empty-link");
        }
    });
});