document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }

    // Header Scroll Effect
    const header = document.querySelector('.header');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            header.style.backgroundColor = '#121212';
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
            header.style.padding = '1rem 0';
        } else {
            header.classList.remove('scrolled');
            header.style.backgroundColor = 'transparent';
            header.style.boxShadow = 'none';
            header.style.padding = '1.5rem 0';
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

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
                mobileNav.style.gap = '1.25rem';
                mobileNav.style.zIndex = '999';
                mobileNav.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.5)';
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
                const caption = item.getAttribute('data-caption') || (img ? img.alt : '');
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

    // Booking Forms Handling
    const quickBookingForm = document.getElementById('quickBookingForm');
    if (quickBookingForm) {
        quickBookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const clientName = document.getElementById('clientName').value;
            alert(`Thank you, ${clientName}! Your booking inquiry has been received. Our management team will contact you within 24 hours.`);
            quickBookingForm.reset();
        });
    }

    const detailedBookingForm = document.getElementById('detailedBookingForm');
    if (detailedBookingForm) {
        detailedBookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const fullName = document.getElementById('fullName').value;
            alert(`Thank you, ${fullName}! Your official booking request has been submitted successfully. A representative from VocalEssence Chorale will be in touch shortly.`);
            detailedBookingForm.reset();
        });
    }

    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing to VocalEssence Chorale updates!');
            newsletterForm.reset();
        });
    }
});
