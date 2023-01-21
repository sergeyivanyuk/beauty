  const Overlay = document.querySelector('.overlay'),
        Modal = document.querySelector('.Mymodal'),
        CloseModalBtn = document.querySelector('.Mymodal__close--btn'),
        OpenModalBtn = document.querySelector('.Mymodal__open--btn'),
        Body = document.querySelector('body');

          OpenModalBtn.addEventListener('click', (e) => OpenModal(e))
          CloseModalBtn.addEventListener('click', (e) => CloseModal(e));


         const CloseModal = (e) => {
            e.preventDefault();
            Overlay.classList.remove('active')
            Body.classList.remove('body-fixed')
          }

          const OpenModal = (e) => {
            e.preventDefault();
            Overlay.classList.add('active')
            Body.classList.add('body-fixed')
          }

          window.addEventListener("keydown", (e) => {
            const key = e.keyCode;

            if (key == 27) {
                document.querySelector('.overlay').classList.remove('active');
            };
          })