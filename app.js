const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');


function PageTransitions() {
    //button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () { //when btn clicked...
            let currentBtn = document.querySelectorAll('.active-btn'); //find button that is active right now
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', ''); //remove active class from it
            this.className += ' active-btn' //and add active class to this clicked one
        })
    }
    // console.log("dlugosc sections = " + sections.length);
    // console.log("dlugosc btns = " + sectBtns.length);
    // console.log("dlugosc btn = " + sectBtn.length);
    // console.log("dlugosc allSections = " + allSections.length);


    //this shows in console whatever we click on
    // allSections[0].addEventListener('click', (e) => {
    //      console.log(e.target);
    //  })

    allSections[0].addEventListener('click', (e) => { //without [0] does not work even though in tutorial it does
        const id = e.target.dataset.id;
        if (id) {
            //remove selected from the other btns (doesnt work somehow) and add active
            // sectBtns.forEach((btn) => {
            //     btn.classList.remove('active')
            // })
            // e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')
    })

}

PageTransitions();