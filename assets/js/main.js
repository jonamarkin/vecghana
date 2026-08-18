document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            header.style.backgroundColor = '#121212';
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            header.style.padding = '1rem 0';
        } else {
            header.classList.remove('scrolled');
            header.style.backgroundColor = 'transparent';
            header.style.boxShadow = 'none';
            header.style.padding = '1.5rem 0';
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            const isExpanded = mobileNav.style.display === 'flex';
            
            if (isExpanded) {
                mobileNav.style.display = 'none';
            } else {
                mobileNav.style.display = 'flex';
                mobileNav.style.flexDirection = 'column';
                mobileNav.style.position = 'absolute';
                mobileNav.style.top = '100%';
                mobileNav.style.left = '0';
                mobileNav.style.width = '100%';
                mobileNav.style.backgroundColor = '#121212';
                mobileNav.style.padding = '1rem 2rem 2rem';
                mobileNav.style.gap = '1.5rem';
                mobileNav.style.zIndex = '99';
            }
        });

        // Close mobile nav when link clicked
        mobileNav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.style.display = 'none';
            });
        });
    }

    // Gallery Filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Gallery Lightbox Modal
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');

    if (lightboxModal && lightboxImg && lightboxCaption && lightboxClose) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                const caption = item.getAttribute('data-caption') || img.alt;
                if (img) {
                    lightboxImg.src = img.src;
                    lightboxImg.alt = img.alt;
                    lightboxCaption.textContent = caption;
                    lightboxModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        const closeLightbox = () => {
            lightboxModal.classList.remove('active');
            document.body.style.overflow = '';
        };

        lightboxClose.addEventListener('click', closeLightbox);
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
                closeLightbox();
            }
        });
    }
});
