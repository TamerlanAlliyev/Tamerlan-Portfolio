      const p = document.querySelector(".section-content p");
      p.textContent = p.textContent.trim();
      console.log(p)


      var swiper = new Swiper(".mySwiper", {
          pagination: {
              el: ".swiper-pagination",
              clickable: true,
              dynamicBullets: true,
          },
          slidesPerView: 3,
          spaceBetween: 24,
          autoplay: {
              delay: 7000,
              disableOnInteraction: false,
          },

          breakpoints: {
              0: {
                  slidesPerView: 1,
              },
              768: {
                  slidesPerView: 2,
              }
          }
      });

// Smooth scrolling for contact button
document.querySelector('.contact-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
});