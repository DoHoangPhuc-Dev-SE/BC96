function Item(title, desc, icon) {
    return `
    <div class="col-lg-4 mb-5">
        <div class="card bg-light border-0 h-100">
            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4 d-inline-flex align-items-center justify-content-center" style="width: 4rem; height: 4rem; margin-top: -1.5rem;">
                    <i class="${icon} fs-2"></i>
                </div>
                <h2 class="fs-4 fw-bold">${title}</h2>
                <p class="mb-0">${desc}</p>
            </div>
        </div>
    </div>
    `;
}