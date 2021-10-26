

    function createSwpSliders(index) {
        return arrSlides1[index].map(item => {
            const newSlide = `
                                <div class="swiper-slide">
                                    <span class="swiper-slide-answer">${item.answer}</span>
                                    <img src="${item.img}">
                                    <label class="quiz__checkbox-label">
                                        <input type="${item.type}" class="quiz__checkbox check-input" value="${item.answer}" name="${item.nameradio}">
                                        <span class="checkbox-fake"></span>
                                    </label>
                                </div>
                        `
            return newSlide;
        }).join('')

    }


     function fullSlide(index) {
         return   `
         <div class="swiper swiper2">
             <div class="swiper-wrapper">
                 ${createSwpSliders(index)}
             </div>
            <div class="swiper-pagination"></div>
         </div>

    `;
     }

    function createQuizForm() {
        return `
        <div class="form-wrp">
            <h3>Отлично! Вы ответили на 7 основных вопросов, которые значительно помогут нам сделать расчет стоимости работ</h3>
            <h4>Мы сообщим вам резульат в течение короткого времени</h4>

            <form class="quiz-form" action="#">
                <div class="data-inputs-wrp">
                    <div class="name-wrp">
                        <label for="name">Ваше имя</label>
                        <input type="text" id="name" class="inp-name">
                    </div>
                    <div class="conf-wrp conf-wrp-dekst">
                        <input type="checkbox" id="conf" class="inp-conf">
                        <label for="conf">Я согласен(сна) с <a href="#">политикой <br> конфиденциальности</a></label>
                    </div>
                </div>
                <div class="check-button-wrp">
                    <div class="phone-wrp">
                        <label for="email">Ваш e-mail</label>
                        <input type="email" id="email" class="inp-email">
                    </div>
                    <div class="conf-wrp conf-wrp-mobile">
                         <input type="checkbox" id="conf2" class="inp-conf2">
                        <label for="conf2">Я согласен(сна) <br> с <a href="#">политикой конфиденциальности </a></label>
                    </div>
                    <button class="quiz-btn-submit">Заказать расчет</button>
                </div>
                <textarea class="quiz-textarea" name="textarea" id="" cols="30" rows="10"></textarea>
            </form>
        </div>
        `;
    }


    //СОЗДАНИЕ КВИЗА============================================================

    const quizWrp = document.querySelector('.quiz__wrp');


    let indexQuiz = 0;
    let index = 0; //индекс для слайдера

    let arrDateOfQuiz = [];
    let objDateOfQuiz = {};

    //Формирование квиза////////////////////////////////////////////////////////////////
    function createQuiz(indexQuiz) {
        if(indexQuiz == 0) {
            const page1 = `
                        <div class="slide-questions-wrp">
                            <h3 class="quiz__page-title">${arrQuizQuestions[0].question}</h3>
                            <span class="choice-variant">Выберите один или несколько вариантов</span>
                        </div>
                    ${fullSlide(0)}
        `;
        quizWrp.innerHTML = page1;
        }

        if(indexQuiz == 1) {
            quizWrp.innerHTML = createRange();
        }

        if(indexQuiz == 2) {
            const page1 = `
                    <div class="slide-questions-wrp">
                        <h3 class="quiz__page-title">${arrQuizQuestions[2].question}</h3>
                        <span class="choice-variant">Выберите один или несколько вариантов</span>
                    </div>
                    ${fullSlide(2)}
                `;
            quizWrp.innerHTML = page1;
        }

        if(indexQuiz == 3) {
            const page1 = `
                    <div class="slide-questions-wrp">
                        <h3 class="quiz__page-title">${arrQuizQuestions[3].question}</h3>
                        <span class="choice-variant">Выберите один или несколько вариантов</span>
                    </div>
                    ${fullSlide(3)}
                `;
            quizWrp.innerHTML = page1;
        }


        let swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
            slidesPerView: 3,
            spaceBetween: 20,

            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },

            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            // scrollbar: {
            //   el: '.swiper-scrollbar',
            //   draggable: true,
            // },

            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                },
                540: {
                    slidesPerView: 2.3,
                },
                940: {
                  slidesPerView: 3,
                },
            }

          });

          if(indexQuiz >= 4 && indexQuiz < arrSlides1.length) {
            const page1 = `
            <div class="slide-questions-wrp">
                <h3 class="quiz__page-title">${arrQuizQuestions[indexQuiz].question}</h3>
                ${indexQuiz <= 4 ?
                    `<span class="choice-variant">Выберите один или несколько вариантов</span>`:
                    `<span class="choice-variant">Выберите один из вариантов</span>`
                }
            </div>
            ${fullSlide(indexQuiz)}
            `;

            quizWrp.innerHTML = page1;


            const swpSlide = document.querySelectorAll('.swiper-slide');

            swpSlide.forEach(item => {
                item.style.height = '40' + '%';
            });



            let swiper2 = new Swiper('.swiper2', {
                // Optional parameters
                direction: 'horizontal',
                loop: false,
                //slidesPerView: 4,
                grid: {
                    rows: 2,
                  },
                spaceBetween: 20,

                // If we need pagination
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
                },

                // And if we need scrollbar
                // scrollbar: {
                //   el: '.swiper-scrollbar',
                //   draggable: true,
                // },

                breakpoints: {
                    320: {
                        slidesPerView: 1.2,
                        grid: {
                            rows: 2,
                          },
                    },
                    540: {
                        slidesPerView: 2.2,
                        grid: {
                            rows: 2,
                          },
                    },
                    940: {
                      slidesPerView: 3,
                    },
                }

              });

              swiper = false;

              const quizCheckboxLabel = document.querySelectorAll('.quiz__checkbox-label');
              quizCheckboxLabel.forEach(item => {
                item.classList.add('quiz__checkbox-label2');
              })

              const checkboxFake = document.querySelectorAll('.checkbox-fake');
              checkboxFake.forEach(item => {
                  item.classList.add('checkbox-fake2')
              })
        }

        if(indexQuiz > arrSlides1.length - 1) {
            const quizBtnsWrp = document.querySelector('.quiz__btns-wrp');
            quizWrp.innerHTML = createQuizForm();
            quizBtnsWrp.style.display = 'none';

            window.addEventListener('click', (e) => {
                if(e.target.classList.contains('quiz-btn-submit')) {
                    e.preventDefault();
                    const quizTextarea = document.querySelector('.quiz-textarea');
                    for (let key in objDateOfQuiz) {
                        let fullDate = `${key}: ${objDateOfQuiz[key]}`
                        quizTextarea.value += `${fullDate}\n`;
                    }
                }
            })
        }

    }

    createQuiz(indexQuiz);

    //Перелистывание квиза=============================================
    const quizBtnNext = document.querySelector('.quiz__btn-next');
    const quizContainer = document.querySelector('.quiz__container');
    let trueFalse = false;


    quizBtnNext.addEventListener('click', () => {
        quizBtnNext.disabled = true;
        quizBtnPrev.disabled = false;
        trueFalse = false;
        checkIndex = 0;
        if(indexQuiz <= arrSlides1.length) {
            indexQuiz++;
        }

        quizWrp.classList.add('active');
        setTimeout(() => {
            quizWrp.classList.remove('active');
        }, 600);
        createQuiz(indexQuiz);

        addProgressBar();
        quizCounterPlus();
        objDateOfQuiz[arrQuizQuestions[indexQuiz - 1].question] = (arrDateOfQuiz.join(', '));
        arrDateOfQuiz.splice(0, arrDateOfQuiz.length)
    })

    const quizBtnPrev = document.querySelector('.quiz__btn-prev');

    quizBtnPrev.addEventListener('click', () => {
        checkIndex = 0;
        quizBtnNext.disabled = true;
        if(indexQuiz > 0) {
            indexQuiz--;
        }
        if(indexQuiz == 0) {
            quizBtnPrev.disabled = true;
        }

        quizWrp.classList.add('active');
        setTimeout(() => {
            quizWrp.classList.remove('active');
        }, 600)

        createQuiz(indexQuiz);
        persentMinus();
        quizCounterMinus();
    })


    //ИНПУТ РЭНДЖ===================================================

    function createRange() {
        //const inputRange = ` <input type="range">`;
        const inputRange = ` <div class="quiz__container">
                                <h3 class="quiz__range-title">${arrQuizQuestions[1].question}</h3>
                                <div class="range-container">
                                    <div class="range-number-wrp">
                                        <p>Введите<br> площадь</p>
                                        <input type="number" max="150" value="50" id="number">
                                        <span>м<sup>2</sup></span>
                                        <div class="range-result">У вас: <span class="range-result-number">50&nbsp;</span>м²</div>
                                    </div>
                                    <span class="or">или</span>
                                    <div class="range-text-wrp">
                                    <span>Перетащите ползунок</span>
                                        <div class="range-wrp">
                                            <input type="range" min="0" max="150" step="1" value="50" id="slider">
                                            <div id="selector">
                                                <div class="select-btn"></div>
                                                <div id="select-value">50</div>
                                            </div>
                                            <div id="progressbar"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                `;
        return inputRange;
    }


    const range = document.querySelector('#slider');
    const quiz = document.querySelector('.quiz');
    const selector = document.querySelector('#selector');
    const selectValue = document.querySelector('#select-value');
    const progressbar = document.getElementById('progressbar');
    const rangeWrp = document.querySelector('.range-wrp');

    window.addEventListener('input', (e) => {


        if(e.target.closest('#slider')) {
            quizBtnNext.disabled = false;
            let rangeStep = quiz.querySelector('.range-wrp').clientWidth / 150;


            quiz.querySelector('#selector').style.left = (e.target.closest('#slider').value) * rangeStep + 'px';
            quiz.querySelector('#progressbar').style.width = (e.target.closest('#slider').value) * rangeStep + 'px';
            quiz.querySelector('#select-value').innerHTML = e.target.closest('#slider').value;

            quiz.querySelector('#number').value = e.target.closest('#slider').value;
            quiz.querySelector('.range-result-number').innerHTML = e.target.closest('#slider').value;

            //Запись данных в массив============
            arrDateOfQuiz.splice(0, arrDateOfQuiz.length)
            arrDateOfQuiz.push(e.target.closest('#slider').value + ' м²')
        }
        if(e.target.closest('#number')) {
            quizBtnNext.disabled = false;
            let rangeStep = quiz.querySelector('.range-wrp').clientWidth / 150;

            quiz.querySelector('#slider').value  = quiz.querySelector('#number').value;
            quiz.querySelector('#selector').style.left = quiz.querySelector('#slider').value * rangeStep + 'px';
            quiz.querySelector('#progressbar').style.width = (quiz.querySelector('#slider').value) * rangeStep + 'px';
            quiz.querySelector('#select-value').innerHTML = quiz.querySelector('#slider').value;


            if(quiz.querySelector('#number').value > 150) {
                quiz.querySelector('#number').value = 150;
            }

            quiz.querySelector('.range-result-number').innerHTML = quiz.querySelector('#number').value;

            //Запись данных в массив============
            arrDateOfQuiz.splice(0, arrDateOfQuiz.length)
            arrDateOfQuiz.push(quiz.querySelector('#slider').value + ' м²');
        }
    })

    // range дубль-----------------------------------------------------------------------

    // let rangeStep = rangeWrp.clientWidth / 150;

    // const sliderRange = document.querySelector('.slider-range');
    // sliderRange.addEventListener('input', () => {
    //     selector.style.left = sliderRange.value * rangeStep + 'px';
    //     progressbar.style.width = sliderRange.value * rangeStep + 'px';
    //     selectValue.innerHTML = sliderRange.value;
    // })



    // Функция disabled для кнопок квиза================================
    const checkInput = document.querySelectorAll('.check-input');

    let checkIndex = 0;

    quiz.addEventListener('input', (e) => {
        if(e.target.classList.contains('check-input')) {
            if(e.target.closest('.check-input').checked) {
                checkIndex++;
            } else {
                checkIndex--;
            }
        }

        if(checkIndex > 0) {
            quizBtnNext.disabled = false;
        } else {
            quizBtnNext.disabled = true;
        }

    })



    //Данные радио и чекбоксов =================================================================================

    let indexChecked = 0;
    function getDate() {
        quiz.addEventListener('input', (e) => {
            if(e.target.classList.contains('quiz__checkbox')) {
                if(e.target.closest('.quiz__checkbox').checked) {
                    if(e.target.closest('.quiz__checkbox').type == 'radio') {
                        arrDateOfQuiz.splice(0, arrDateOfQuiz.length);
                    }

                    arrDateOfQuiz.push(e.target.closest('.quiz__checkbox').value);
                }
                else {
                    arrDateOfQuiz.splice(arrDateOfQuiz.indexOf(e.target.closest('.quiz__checkbox').value), 1);
                }
            }
        });
    }
    getDate();

    //Прогрессбар==========================================================

    const quizProgressbarWrp = document.querySelector('.quiz__progressbar-wrp');
    const quizProgressbar = document.querySelector('.quiz__progressbar');
    let barWidth = quizProgressbarWrp.clientWidth / (arrSlides1.length + 1);
    let barWidthFull = barWidth;

    let barIndex = 0;

    const quizPersentWrp = document.querySelector('.quiz__persent-wrp');


    let barPersent = parseInt(100 / (arrSlides1.length + 1));
    let barPersentFull = barPersent;


    function addProgressBar() {
        if(barIndex < arrSlides1.length) {
            barIndex++;
                barWidthFull += barWidth;
                quizProgressbar.style.width = `${barWidthFull}px`;


                //Процентный лэйбл===================================
                barPersentFull += barPersent;
                if(barIndex === arrSlides1.length) {
                    barPersentFull = 100;
                }
                quizPersentWrp.innerHTML = `<span>${barPersentFull}%</span>`;
                quizPersentWrp.style.transform = `translateX(${barWidthFull}px)`;
        }
    }

    function persentMinus() {
        barIndex--;
        barWidthFull -= barWidth;
        quizProgressbar.style.width = `${barWidthFull}px`;


        //Процентный лэйбл===================================
        barPersentFull -= barPersent;

        quizPersentWrp.innerHTML = `<span>${barPersentFull}%</span>`;
        quizPersentWrp.style.transform = `translateX(${barWidthFull}px)`;
    }

    quizProgressbar.style.width = `${barWidth}px`;

    quizPersentWrp.innerHTML = `<span>${barPersentFull}%</span>`;
    quizPersentWrp.style.transform = `translateX(${barWidthFull}px)`;

    // Counter ======================================================

let counter = 1;
const quizCounterWrp = document.querySelector('.quiz-counter-wrp');

function quizCounterPlus() {
    if(counter < arrSlides1.length + 1) {
        counter ++;
        quizCounterWrp.innerHTML = `<span class="count-static">${counter}</span>
                            <span class="fake1"></span>
                          <span class="count-dinamic">7</span>
                          <span class="fake2"></span>`
    }
    if(counter === arrSlides1.length + 1) {
        quizCounterWrp.style.display = 'none';
    }
}

function quizCounterMinus() {
    if(counter > 0) {
        counter --;
        quizCounterWrp.innerHTML = `<span class="count-static">${counter}</span>
                            <span class="fake1"></span>
                          <span class="count-dinamic">7</span>
                          <span class="fake2"></span>`
    }
}
quizCounterWrp.innerHTML = `<span class="count-static">${counter}</span>
                            <span class="fake1"></span>
                          <span class="count-dinamic">7</span>
                            <span class="fake2"></span>`


















