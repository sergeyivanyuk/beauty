  const OverlayExtensions = document.querySelector('.extension__overlay'),
        OverlayRefill = document.querySelector('.refill__overlay'),
        CloseExtensionsBtn = document.querySelector('.Mymodal__close--btn__extensions'),
        CloseRefillBtn = document.querySelector('.Mymodal__close--btn__refill'),
        OpenExtensionsBtn = document.querySelector('.Mymodal__open--btn__extensions'),
        OpenRefillBtn = document.querySelector('.Mymodal__open--btn__refill'),
        Body = document.querySelector('body');

        CloseExtensionsBtn.addEventListener('click', (e) => {
          e.preventDefault();
          OverlayExtensions.classList.remove('active')
          Body.classList.remove('body-fixed')
        })
        OpenExtensionsBtn.addEventListener('click', (e) => {
          e.preventDefault();
            OverlayExtensions.classList.add('active')
            Body.classList.add('body-fixed')
        });
        CloseRefillBtn.addEventListener('click', (e) => {
          e.preventDefault();
          OverlayRefill.classList.remove('active')
        })
        OpenRefillBtn.addEventListener('click', (e) => {
          e.preventDefault();
          OverlayRefill.classList.add('active')
        });


          window.addEventListener("keydown", (e) => {
            const key = e.keyCode;
            const overlay = document.querySelectorAll('.overlay')

            if (key == 27) {
              overlay.forEach(elem => {
                elem.classList.remove('active')
              })
            };
          })

          var swiper = new Swiper(".mySwiper", {
            cssMode: true,
            centeredSlides: true,
            autoplay: {
              delay: 3500,
              disableOnInteraction: false,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
            },
            mousewheel: true,
            keyboard: true,
          });