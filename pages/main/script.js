
/* ----------------------Burger script---------------------- */

const headerInner = document.querySelector(".header__inner")
const burgerBtn = document.querySelector(".burger");
const burgerBtnClone = document.querySelector(".burger_clone");
const headerMenu = document.querySelector(".header__menu")
const headerWrap = document.querySelector(".header__menu-wrap")
const nav = document.querySelector(".nav");
const navLink = document.querySelector(".nav__link");
const headerLogo = document.querySelector(".header__logo");
const body = document.querySelector(".page");
const shadow = document.querySelector(".shadow")
let menuIsOpen = false;
let headerLogoClone = headerLogo.cloneNode(true);


function menuOpener() {
    shadow.classList.toggle("active")
    headerMenu.classList.toggle("header__menu_mobile");
    body.classList.toggle("active_item");
    burgerBtn.classList.toggle("active_item");
    burgerBtnClone.classList.toggle("active_item");
    headerMenu.classList.toggle("burger__shadow");
    menuIsOpen = !menuIsOpen
}


burgerBtn.addEventListener("click", menuOpener);
burgerBtnClone.addEventListener("click", menuOpener);
window.addEventListener('resize', function () {
    if (window.innerWidth >= 768 && headerMenu.classList.contains("header__menu_mobile")) {
        menuOpener();
    }
});

// Remove menu if user clicked outside the menu and clicked on link in menu 

window.addEventListener('click', function(e){
    if (!headerMenu.contains(e.target) && (!burgerBtn.contains(e.target)) && menuIsOpen === true){menuOpener()}
    if (headerMenu.classList.contains("header__menu_mobile") && (e.target.classList.contains("nav__link")) && menuIsOpen === true ) {menuOpener()}
})


/* ----------------------Slider script---------------------- */


const animals = [
    {
        "id": 1,
        "name": "Katrine",
        "img": "../shelter/assets/images/slider-images/katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": 2,
        "name": "Jennifer",
        "img": "../shelter/assets/images/slider-images/jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": 3,
        "name": "Woody",
        "img": "../shelter/assets/images/slider-images/woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "id": 4,
        "name": "Sophia",
        "img": "../shelter/assets/images/slider-images/sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": 5,
        "name": "Scarlett",
        "img": "../shelter/assets/images/slider-images/scarlett.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },

    {
        "id": 6,
        "name": "Timmy",
        "img": "../shelter/assets/images/slider-images/timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "id": 7,
        "name": "Freddie",
        "img": "../shelter/assets/images/slider-images/freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": 8,
        "name": "Charly",
        "img": "../shelter/assets/images/slider-images/charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
]


let numOfSlides = 3;

const sliderWrapper = document.querySelector(".slider__wrapper");
const slidersLeft = document.querySelector(".sliders_left")
const slidersCenter = document.querySelector(".sliders_center")
const slidersRight = document.querySelector(".sliders_right")
const leftBtn = document.querySelector(".slider__arrow_left");
const rightBtn = document.querySelector(".slider__arrow_right");
let newAnimals = animals.slice(0)
let count = 0
let currentAnimalsArr
let currentAnimalsArr2


function checkWidth() {
    if (1280 <= window.innerWidth) { numOfSlides = 3; }
    if (1280 > window.innerWidth) { numOfSlides = 2; }
    if (768 > window.innerWidth) { numOfSlides = 1; }

}


function firstRandom (max) {
    let num
    num = Math.floor(Math.random() * max)
    return num 
}

/* console.log(firstRandom(6)); */


checkWidth()
currentAnimalsArr = newAnimals.splice(firstRandom(6), numOfSlides);

    function removeEvent () {
        leftBtn.removeEventListener("click", showLeft);
        rightBtn.removeEventListener("click", showRight);
    }
    function showLeft () {
        sliderWrapper.classList.add("animation_left");
        removeEvent()
        
        
    };
    function showRight () {
        sliderWrapper.classList.add("animation_right");
        removeEvent()
        
    };

    function addAnimation (e) {
    if (e.animationName === "showLeft") {
        sliderWrapper.classList.remove("animation_left");
        slidersCenter.innerHTML = slidersLeft.innerHTML;
    } else if (e.animationName === "showRight") {
        sliderWrapper.classList.remove("animation_right");
        slidersCenter.innerHTML = slidersRight.innerHTML;
    }
        slidersLeft.innerHTML = randomSlider()
        slidersRight.innerHTML = slidersLeft.innerHTML
        
        leftBtn.addEventListener("click", showLeft);
        rightBtn.addEventListener("click", showRight);
        loader()
    }

    
function randomSlider() {
        count++
        if (count === 1) {
            slidersCenter.innerHTML = makeSlides(currentAnimalsArr);
        }
        checkWidth()
        
        function makeSlides (currentAnimalsArr) {
            slidersRight.innerHTML = currentAnimalsArr.map((a, b) => {
                return `<div class="slider__item" data-index="${a.id}" data-position="${b+1}">
                <div class="slider__image"><img src="${a.img}"
                        alt="${a.name}"></div>
                <div class="slider__descr">
                    <h4 class="title slider__title">${a.name}</h4>
                    <button class="btn btn_oval slider__btn">Learn more</button>
                </div>
            </div>`}).join('')
            slidersLeft.innerHTML = slidersRight.innerHTML
            return slidersRight.innerHTML
        }
        const getRandom = (max) => {
            let arr = []
            while (arr.length < numOfSlides) {
                arr.push(Math.floor(Math.random() * max))
                arr = arr.filter((a, b) => arr.indexOf(a) === b)
            } return arr }

        currentAnimalsArr2 = currentAnimalsArr
        let arr1 = getRandom(newAnimals.length)
        currentAnimalsArr = []
        arr1.forEach((a, b) => currentAnimalsArr.push(newAnimals[a]))
        currentAnimalsArr.forEach((a) => newAnimals = newAnimals.filter(i => a != i))
        newAnimals.push(...currentAnimalsArr2)
        document.querySelectorAll('.slider__item')
        /* loader() */
        return makeSlides(currentAnimalsArr);
}

leftBtn.addEventListener("click", showLeft);
rightBtn.addEventListener("click", showRight);
window.addEventListener('load', randomSlider);
sliderWrapper.addEventListener("animationend", (e) => {addAnimation(e)})



/* ----------------------Popup script---------------------- */

function loader() {
    let sliderItems = document.querySelectorAll(".slider__item")
    let modal = document.querySelector(".modal")
    let modalCloseBtn = document.querySelector(".modal__close-btn")
    let modalItem = document.querySelector(".modal__item")
    let modalInner = document.querySelector(".modal__inner")
    let modalShoed = false
    let currentElmentId = null
    let currentElment = []

    function closeModal () {
      modal.classList.remove("active_item")
      body.classList.remove("active_item");
      modalShoed = false;
      modalInner.classList.remove('modal__animation_open')
    }
    function showModal(e) {
        /* console.log(e.currentTarget); */
        currentElmentId = e.currentTarget.dataset.index
        if(modal.classList.contains("active_item")) {modal.classList.remove("active_item")}
        else {modal.classList.add("active_item")}
        body.classList.toggle("active_item");
        modalShoed = !modalShoed
        if (modalShoed) {
            modalInner.classList.add('modal__animation_open')
        }
        else {modalInner.classList.remove('modal__animation_open')}
        currentElment = animals.filter((a, i)=> a['id']===(+currentElmentId))
        return modalItem.innerHTML = currentElment.map((a) => {
            return `<div class="modal__image"><img src="${a.img}" alt="${a.name}"></div>
            <div class="modal__descr">
                <h3 class="title modal__title">${a.name}</h3>
                <h4 class="title modal__subtitle">${a.type} - ${a.breed}</h4>
                <p class="modal__text">${a.description}</p>
                <ul class="modal-list">
                    <li class="modal-list__item"><h5 class="modal-list__title"><span class="modal-list__name">Age: </span>${a.age}</h5></li>
                    <li class="modal-list__item"><h5 class="modal-list__title"><span class="modal-list__name">Inoculations: </span>${a.inoculations}</h5></li>
                    <li class="modal-list__item"><h5 class="modal-list__title"><span class="modal-list__name">Diseases: </span>${a.diseases}</h5></li>
                    <li class="modal-list__item"><h5 class="modal-list__title"><span class="modal-list__name">Parasites: </span>${a.parasites}</h5></li>
                </ul>
            </div>`
        }) .join('')
    }
    sliderItems.forEach(a=> a.addEventListener("click", (e) => {showModal(e)}));
    modalCloseBtn.addEventListener("click", closeModal);



    modal.addEventListener('click', function(e){
        if (!modalInner.contains(e.target) && modalShoed){closeModal()}
    })
    modalInner.addEventListener('mouseleave', function(){
        modalCloseBtn.classList.add("modal__close-btn_hover");
    })
    modalInner.addEventListener('mouseenter', function(){
        modalCloseBtn.classList.remove("modal__close-btn_hover");
    })
    body.addEventListener('mouseleave', function(){
        modalCloseBtn.classList.remove("modal__close-btn_hover");
    })
    body.addEventListener('mouseenter', function(){
        modalCloseBtn.classList.add("modal__close-btn_hover");
    })
   

}
window.addEventListener('load', loader);
window.addEventListener('click', loader);
