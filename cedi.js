document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navigation");
    const navMenu1 = document.querySelector(".navigation1");

    if (hamburger) {
        hamburger.style.display = "flex"; // Show hamburger menu for smaller screens
    }

    // Toggle mobile nav and overlay (single DOMContentLoaded, no nesting)
    (function () {
        var btn = document.querySelector('.hamburger');
        var navs = document.querySelectorAll('.navigation, .navigation1');
        if (!btn || navs.length === 0) return; // nothing to do if no nav/button

        var overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);

        function setOpen(open) {
            navs.forEach(function (n) {
                if (open) n.classList.add('open'); else n.classList.remove('open');
            });
            overlay.classList.toggle('show', open);
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        }

        btn.setAttribute('role', 'button');
        btn.setAttribute('aria-expanded', 'false');
        btn.addEventListener('click', function (e) {
            var isOpen = btn.getAttribute('aria-expanded') === 'true';
            setOpen(!isOpen);
        });

        // close when clicking overlay
        overlay.addEventListener('click', function () { setOpen(false); });

        // close on ESC
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') setOpen(false);
        });

        // optional: close when a nav link is clicked (mobile)
        document.addEventListener('click', function (e) {
            if (e.target.closest('.navigation a') || e.target.closest('.navigation1 a')) {
                setOpen(false);
            }
        });
    })();

    const wikipediaLinks = document.querySelectorAll('a[href*="https://en.wikipedia.org"]');
    const modal = document.getElementById("modal");
    const modalIframe = document.getElementById("modal-iframe");
    const closeModal = document.getElementById("close-modal");

    if (wikipediaLinks && wikipediaLinks.length > 0 && modal && modalIframe) {
        wikipediaLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                modalIframe.src = link.href;
                modal.style.display = "flex";
            });
        });
    }

    if (closeModal) {
        closeModal.addEventListener("click", () => {
            if (modal) {
                modal.style.display = "none";
            }
            if (modalIframe) {
                modalIframe.src = ""; // Clear iframe source to stop loading
            }
        });
    }

    // Close modal when clicking outside the content
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                if (modalIframe) modalIframe.src = "";
            }
        });
    }

});

