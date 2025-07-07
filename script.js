document.addEventListener('DOMContentLoaded', function() {

    // Navigasi Scroll Halus (jika tidak menggunakan CSS scroll-behavior)
    // const navLinks = document.querySelectorAll('.nav-link');
    // navLinks.forEach(link => {
    //     link.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         const targetId = this.getAttribute('href');
    //         const targetSection = document.querySelector(targetId);
    //         if (targetSection) {
    //             window.scrollTo({
    //                 top: targetSection.offsetTop - 60, // Sesuaikan offset jika header fixed
    //                 behavior: 'smooth'
    //             });
    //         }
    //         // Tutup menu hamburger jika terbuka (untuk mobile)
    //         if (hamburger.classList.contains('active')) {
    //             hamburger.classList.remove('active');
    //             navMenu.classList.remove('active');
    //         }
    //     });
    // });

    // Hamburger Menu Toggle
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-links");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // Tutup menu jika link di klik (untuk pengalaman mobile yang lebih baik)
        document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
            if (hamburger.classList.contains('active')) {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            }
        }));
    }


    // Active Link Highlighting saat scroll
    const sections = document.querySelectorAll("section[id]");
    const navLi = document.querySelectorAll("header nav ul li a");

    function highlightNav() {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            // Sesuaikan offset dengan tinggi header Anda jika sticky
            // Misalnya, jika header 65px: const sectionTop = section.offsetTop - 70;
            if (pageYOffset >= sectionTop - 70) { // 70 adalah offset agar lebih pas
                current = section.getAttribute("id");
            }
        });

        navLi.forEach((a) => {
            a.classList.remove("active");
            if (a.getAttribute("href").substring(1) === current) {
                a.classList.add("active");
            }
        });
    }
    window.addEventListener("scroll", highlightNav);
    highlightNav(); // Panggil sekali saat load untuk menandai link aktif awal


    // Update tahun di footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // (Opsional) Form Validation Sederhana & Submission
    // const contactForm = document.getElementById('contact-form');
    // if (contactForm) {
    //     contactForm.addEventListener('submit', function(e) {
    //         e.preventDefault(); // Mencegah submit default
    //         // Tambahkan validasi di sini jika diperlukan
    //         const name = e.target.name.value;
    //         const email = e.target.email.value;
    //         const message = e.target.message.value;

    //         if (name && email && message) {
    //             alert('Pesan Anda sedang "dikirim"! (Ini hanya demo)');
    //             // Di sini Anda akan mengintegrasikan dengan layanan backend
    //             // atau layanan seperti Formspree, Netlify Forms, dll.
    //             contactForm.reset();
    //         } else {
    //             alert('Mohon isi semua kolom.');
    //         }
    //     });
    // }

    // (Opsional) Lazy Loading untuk gambar (menggunakan Intersection Observer API)
    // const imagesToLoad = document.querySelectorAll('img[data-src]');
    // const loadImages = (image) => {
    //   image.setAttribute('src', image.getAttribute('data-src'));
    //   image.onload = () => {
    //     image.removeAttribute('data-src');
    //   };
    // };

    // if ('IntersectionObserver' in window) {
    //   const observer = new IntersectionObserver((items, observer) => {
    //     items.forEach((item) => {
    //       if (item.isIntersecting) {
    //         loadImages(item.target);
    //         observer.unobserve(item.target);
    //       }
    //     });
    //   });
    //   imagesToLoad.forEach((img) => {
    //     observer.observe(img);
    //   });
    // } else { // Fallback untuk browser lama
    //   imagesToLoad.forEach(loadImages);
    // }
    // Untuk menggunakan lazy loading di atas, ubah tag <img> Anda, contoh:
    // <img data-src="images/project1.jpg" alt="Nama Proyek 1">
    // dan tambahkan class "lazy" jika ingin styling tambahan saat loading.

});