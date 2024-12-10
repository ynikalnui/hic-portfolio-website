document.addEventListener("DOMContentLoaded", () => {
    const modalContainer = document.getElementById("modalContainer");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalClose = document.getElementById("modalClose");
    const modalLink = document.getElementById("modalLink");

    document.querySelectorAll(".project-extend-button").forEach(button => {
        button.addEventListener("click", () => {
            const title = button.getAttribute("data-title");
            const description = button.getAttribute("data-description");
            const link = button.getAttribute("data-link");

            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modalLink.href = link;
            modalContainer.style.display = "flex";
        });
    });

    modalClose.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    modalContainer.addEventListener("click", (event) => {
        if (event.target === modalContainer) {
            modalContainer.style.display = "none";
        }
    });
});