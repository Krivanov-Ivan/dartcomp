const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.links-container');
    const services = document.querySelectorAll('.service');
    const menuItem = document.querySelectorAll('.menu-item');
    const active = document.querySelectorAll('.service-active');
    const svgIcon = document.querySelectorAll('svg');
    const image = document.querySelector('.image');
    const slidesContainer = document.querySelector('.slide-container');
    const slide = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    const slideChangerTop = document.querySelector('.slide-changer:first-child');
    const slideChangerBottom = document.querySelector('.slide-changer:last-child');
    let size = slides[0].clientHeight + slides[1].clientHeight;
    let counter = 0;
    const employer = document.querySelector(".employer-name");
    const desc = document.querySelector(".employer-desc");
    const employerImg = document.querySelectorAll(".employer-img");
    let employerInfoInner = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt";
    let employersNames = ["Dana Banana", "Sofi Turner", "Nick Sneaker"];
    let prevIndex;

    slidesContainer.style.height = size + 'px';
    //Toggle nav
    burger.addEventListener('click', () => {
      nav.classList.toggle('links-container-active');
      burger.classList.toggle('burger-active');
      menuItem.forEach((item) => {
        item.classList.toggle('menu-item-active');
      });
    });
    //Toggle sevices
    services.forEach((service, i) => {
      services[i].addEventListener('click', () => {
        active[i].classList.toggle("block");
        svgIcon[i].classList.toggle("rotate");
        image.classList.toggle('edited-image');
      });
    });

    //slider


    slideChangerBottom.addEventListener('click', () => {
      if (counter < 1) {
      slide.style.transition = "transform 0.4s ease-in-out";
      counter+=0.5;
      slide.style.transform = `translateY(${counter*-size}px)`;
    }
    });
    slideChangerTop.addEventListener('click', () => {
      if (counter > 0) {
      slide.style.transition = "transform 0.4s ease-in-out";
      counter-=0.5;
      slide.style.transform = `translateY(${counter*-size}px)`;}
    });

    //team
    employerImg[1].className = "employer-faces-active";
    employerImg[1].style.order = 1;
    employer.innerHTML = employersNames[1];
    desc.innerHTML = employerInfoInner;


    employerImg.forEach((img, i) => {
      img.addEventListener('click', () => {
        prevIndex = img.style.order
        employerImg.forEach((img) => {
          if (img.className === "employer-faces-active") {
          img.className = "employer-img";
          img.style.order = prevIndex;
        }
        });
        img.className = "employer-faces-active";
        img.style.order = 1;
        employer.innerHTML = employersNames[i];
        desc.innerHTML = employerInfoInner;
      });
    });


    
    
  }

  
    navSlide();
  