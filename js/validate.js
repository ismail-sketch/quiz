

    function checkValidate() {
        window.addEventListener('click', (e) => {
           const trg = e.target;
           if(trg.closest('.quiz-btn-submit')) {

                const inputName = document.querySelector('.inp-name');
                const inputEmail = document.querySelector('.inp-email');
                const inpConf = document.querySelector('.inp-conf');
                const validMistake = document.querySelector('.valid-mistake');
                const re =  /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

                if(inputName.value === '') {
                    inputName.classList.add('error');
                    validMistake.classList.add('show');
                    setTimeout(() => {
                        validMistake.classList.add('error');
                    }, 0)
                    setTimeout(() => {
                        validMistake.classList.remove('show', 'error');
                    }, 2000)
                }
                if(inputEmail.value === '' || !re.test(inputEmail.value)) {
                    inputEmail.classList.add('error');
                    validMistake.classList.add('show');
                    setTimeout(() => {
                        validMistake.classList.add('error');
                    }, 0)
                    setTimeout(() => {
                        validMistake.classList.remove('show', 'error');
                    }, 2000)
                }
                if(!inpConf.checked) {
                    inpConf.classList.add('error');
                }
           }

        })
    }

    checkValidate();

//Удаление красных инпутов=======================================================
    function outInput() {
        window.addEventListener('input', (e) => {
            const trg = e.target;

            if(trg.classList.contains('inp-name')) {
                if(trg.closest('.inp-name').value !== '') {
                    trg.closest('.inp-name').classList.remove('error');
                } else {
                    trg.closest('.inp-name').classList.add('error');
                }
            }

            if(trg.classList.contains('inp-email')) {
                if(trg.closest('.inp-email').value !== '') {
                    trg.closest('.inp-email').classList.remove('error');
                } else {
                    trg.closest('.inp-email').classList.add('error');
                }
            }

            if(trg.classList.contains('inp-conf')) {
                if(trg.closest('.inp-conf').checked) {
                    trg.closest('.inp-conf').classList.remove('error');
                } else {
                    trg.closest('.inp-conf').classList.add('error');
                }
            }

        })
    }
    outInput();

    //Отправка формы============================================================

    const success = document.querySelector('.success');
    window.addEventListener('click', (e) => {

        if(e.target.closest('.quiz-btn-submit')) {
            const quizForm = document.querySelector('.quiz-form');
            const inpName = document.querySelector('.inp-name');
            const inpEmail = document.querySelector('.inp-email');
            const inpConf = document.querySelector('.inp-conf');
            const inpConf2 = document.querySelector('.inp-conf2');
            const re =  /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

            if(inpName.value != '' && inpEmail.value != '' && re.test(inpEmail.value) && (inpConf.checked || inpConf2.checked)) {
                console.log('click!');
                success.classList.add('active');
                quizForm.reset();

                setTimeout(() => {
                    success.classList.add('hide');
                }, 2500)
                setTimeout(() => {
                    success.classList.remove('hide');
                }, 2700)
                setTimeout(() => {
                    success.classList.remove('active');
                }, 2600)
            }
        }
    })


