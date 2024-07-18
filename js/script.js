
//Reviews
var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

    function formData() {
       let name = document.querySelector('.name');
       let email = document.querySelector('.email');
       let message = document.querySelector('.message');
       let sendBtn = document.querySelector('.send-btn');

       sendBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

        if (name.value == "" || email.value == "" || message.value == "") {
            emptyerror();
        } else if (!emailPattern.test(email.value)) {
          emailError();  
      } else {
            sendmail (name.value, email.value, message.value);
            success();
        }

       } )
        
    }

    formData ();

    function sendmail(name,email,message) {
        emailjs.send("service_gah4k9e","template_p7tbwl4",{
            to_name: name,
            from_name: email,
            message: message,
            });
        
    }

    function emptyerror() {
        swal({
            title: "Error!",
            text: "You must fill in all fields!",
            icon: "error",
          });
        
    }

    function emailError() {
      swal ({
        title: "Error!",
        text: "You must fill a valid email address.",
        icon: "error",
      });

  }

    function success() {
        swal({
            title: "Email send successfully!",
            icon: "success",
          });
        
    }

    // Header Background
    let header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        header.classList.toggle('header-active', window.scrollY > 0);
    })
