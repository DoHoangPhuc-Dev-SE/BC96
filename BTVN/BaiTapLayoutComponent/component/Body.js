function Body() {
    return `
    <div class="container px-lg-5">
        ${Banner()}
        <section class="pt-4">
            <div class="row gx-lg-5">
                ${Item("Fresh new layout", "With Bootstrap 5, we've created a fresh new layout for this template!", "bi bi-collection")}
                ${Item("Free to download", "As always, Start Bootstrap has a powerful collectin of free templates.", "bi bi-cloud-download")}
                ${Item("Jumbotron hero header", "The heroic part of this template is the jumbotron hero header!", "bi bi-card-heading")}
                ${Item("Feature boxes", "We've created some custom feature boxes using Bootstrap icons!", "bi bi-bootstrap")}
                ${Item("Simple clean code", "We keep our dependencies up to date and squash bugs as they come!", "bi bi-code-slash")}
                ${Item("A name you trust", "Start Bootstrap has been the leader in free Bootstrap templates since 2013!", "bi bi-patch-check")}
            </div>
        </section>
    </div>
    `;
}