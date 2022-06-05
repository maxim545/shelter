
/* ----------------------Burger script---------------------- */

const headerInner = document.querySelector(".header__inner")
const burgerBtn = document.querySelector(".burger");
const headerMenu = document.querySelector(".header__menu")
const headerWrap = document.querySelector(".header__menu-wrap")
const nav = document.querySelector(".nav");
const navLink = document.querySelector(".nav__link");
const headerLogo = document.querySelector(".header__logo");
const body = document.querySelector(".page");
let menuIsOpen = false;
let headerLogoClone = headerLogo.cloneNode(true);
const burgerBtnClone = document.querySelector(".burger_clone");
const shadow = document.querySelector(".shadow")

function menuOpener() {
    burgerBtnClone.classList.toggle("active_item");
    shadow.classList.toggle("active")
    headerMenu.classList.toggle("header__menu_mobile");
    body.classList.toggle("active_item");
    burgerBtn.classList.toggle("active_item");
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


/* ----------------------Pagination script---------------------- */


const animals = [
    {
        "name": "Katrine",
        "img": "../../assets/images/slider-images/katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Jennifer",
        "img": "../../assets/images/slider-images/jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "../../assets/images/slider-images/woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "../../assets/images/slider-images/sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Scarlett",
        "img": "../../assets/images/slider-images/scarlett.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },

    {
        "name": "Timmy",
        "img": "../../assets/images/slider-images/timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "../../assets/images/slider-images/freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "../../assets/images/slider-images/charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
]
const pagination = document.querySelector(".pagination")
const petsCards = document.querySelector(".pets__cards")
const btnFirst = document.querySelector(".pets__btn_first")
const btnPrev = document.querySelector(".pets__btn_prev")
const btnNext = document.querySelector(".pets__btn_next")
const btnLast = document.querySelector(".pets__btn_last")

let currentBtn
let choseBtn
let numberOfArr = 8;
let numberOfPage = 6;
let newArrAnimals = animals.slice(0)
let numOfCurrent = 0
let currentPage = 0;
let currentButton = 0;

function checkWidth() {
    if (1280 <= window.innerWidth) {  numberOfArr = 8; numberOfPage = 6;  }
    if (1280 > window.innerWidth) {  numberOfArr = 6; numberOfPage = 8;  }
    if (768 > window.innerWidth) {  numberOfArr = 3; numberOfPage = 16; }
}

/*  Generate full array of 48 cards which based on the given array 'animals' */

function generateArray () {
    let arrOfAll = []
    for (let i = 0; i < 6; i++) {
        arrOfAll.push(...newArrAnimals)
    }
    return arrOfAll
  }
  function shuffleArr(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }return arr
  }
  function sortArr () {
    checkWidth()
    let arrOfAll = generateArray()
    let newArr = arrOfAll.slice(0)
    let finalArr = []
    let curArr = []
    let isContains = false;
    let count = 0;
    let removed;
    for (let i = 0; i < numberOfPage; i++) {
      curArr.push([])
    }
    curArr.forEach((a,i)=> {
      a.push(...newArr.splice(0, numberOfArr))
    })
    curArr = shuffleArr(curArr)
    curArr.forEach(a=> a=shuffleArr(a))
    return curArr
  }

let allPagesArr = sortArr()
console.log(allPagesArr);


let test = []
  
for (let i = 0; i <numberOfPage; i++) {
    test.push([])
}
allPagesArr.forEach((a, b) => {
    for (let i = 0; i <a.length; i++) {
        test[b].push(a[i]['name'])
    }
})
console.log(test);


  /*  Return in pagination block all our buttons of pagination */

    const makeBtns = (numOfpage) => {
        
        return `<button class="btn btn_round pets__btn pets__btn_center" data-index=${numOfpage}>${numOfpage+1}</button>`;
      }
    currentButton = makeBtns(currentPage);
    btnPrev.insertAdjacentHTML('afterEnd', currentButton)
    choseBtn = document.querySelectorAll('.pets__btn')
    const btnActive = document.querySelector(".pets__btn_center")
    

   /*  Call the initial set of elements when page are loaded */
   
   window.addEventListener("DOMContentLoaded", function () {
    makeCurrentPage(numOfCurrent)
    
    /* checkWidth(); */
  });
 


  


 /*  Main function show page on which user clicked */
      function makeCurrentPage (num) {
        /* loader() */

        choseBtn.forEach(a=> a.addEventListener('click', getCurrentBtn))  
          
        //Add active class to button
        choseBtn.forEach((a,b)=> {
            if (+a.dataset.index === num) {
                btnActive.removeEventListener('click', getCurrentBtn)
                a.classList.add("active")};
            if (num === 0) {
                btnPrev.classList.add("disable");
                btnFirst.classList.add("disable");
                btnPrev.removeEventListener('click', getCurrentBtn)
                btnFirst.removeEventListener('click', getCurrentBtn)
            };
            if (num === allPagesArr.length - 1) {
                btnNext.classList.add("disable");
                btnLast.classList.add("disable")
                btnNext.removeEventListener('click', getCurrentBtn)
                btnLast.removeEventListener('click', getCurrentBtn)
            };
        }) 
        return petsCards.innerHTML = allPagesArr[num].map((a, b) => {
            return `<div class="card" data-index="${a.name}">
            <div class="card__image"><img src="${a.img}"
            alt="${a.name}"></div>
            <div class="card__descr">
                <div class="title card__title">${a.name}</div>
                <button class="btn btn_oval card__btn">Learn more</button>
            </div>
        </div>`
        })
            .join('')
    }
    
     /*  Get current button and send num of this button in function 'makeCurrentPage' which show selected page  */    
        function getCurrentBtn (e) {
            
            choseBtn.forEach(a=> a.classList.remove("active", "disable"))
            currentBtn = e.currentTarget.dataset.index
            if (currentBtn === "first") {currentBtn = 0}
            if (currentBtn === "prev") {numOfCurrent <= 0 ? currentBtn = 0 : currentBtn = numOfCurrent-1}
            if (currentBtn === "next") {numOfCurrent >= allPagesArr.length - 1 ? currentBtn = allPagesArr.length - 1 : currentBtn = numOfCurrent+1}
            if (currentBtn === "last") {currentBtn = allPagesArr.length-1}
            numOfCurrent = +currentBtn
            btnActive.dataset.index = numOfCurrent
            btnActive.innerHTML = numOfCurrent+1
            return makeCurrentPage(numOfCurrent)
        }





/* ----------------------Popup script---------------------- */

function loader() {
    let sliderItems = document.querySelectorAll(".card")
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
        currentElmentId = e.currentTarget.dataset.index
        if(modal.classList.contains("active_item")) {modal.classList.remove("active_item")}
        else {modal.classList.add("active_item")}
        body.classList.toggle("active_item");
        modalShoed = !modalShoed
        if (modalShoed) {
            modalInner.classList.add('modal__animation_open')
        }
        else {modalInner.classList.remove('modal__animation_open')}
        currentElment = animals.filter((a, i)=> a['name']===(currentElmentId))
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
/* window.addEventListener('load', loader); */
window.addEventListener('click', loader);
  
window.addEventListener("DOMContentLoaded", function () {loader()});