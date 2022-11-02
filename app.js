// BUTTONS AND FORM
const form = document.querySelector('form');
const formContainer = document.querySelector('.form-container');
const completedState = document.querySelector('.completed');
const continueBtn = document.querySelector('.continue');
const cardName = document.querySelector('.card-name');
const cardNumber = document.querySelector('.card-nums')
const cardMonthSpan = document.querySelector('.month-span');
const cardYearSpan = document.querySelector('.year-span');
const cardCvc = document.querySelector('.cvc-back');

// INPUTS
const nameVal = document.querySelector('#name');
const cardNum = document.querySelector('#number');
const cardMonth = document.querySelector('.month');
const cardYear = document.querySelector('.year');
const cvcValue = document.querySelector('.cvc-input');

// ERROR MESSAGES
const letters = document.querySelector('.letters');
const numbers = document.querySelector('.numbers');
const months = document.querySelector('.month-inner');
const year = document.querySelector('.year-inner');


const cvcKeyDown = e => e.target.value = e.target.value.match(/^([^e+-]{0,3})/)[0]
const creditCardKeyDown = e => e.target.value = e.target.value.match(/^([^e+-]{0,16})/)[0]
const monthsKeyDown = e => e.target.value = e.target.value.match(/1[0-2]|[1-9]/)[0];
const yearsKeyDown = e => e.target.value = e.target.value.match(/(?:2[3-9]|30)/)[0];


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(cardNum.value.length === 16 && !nameVal.classList.contains('red-border'))
    {
        formContainer.classList.add('d-none');
        completedState.classList.remove('d-none');
    }
    else if(cardNum.value.length !== 16)
    {
        cardNum.classList.add('red-border')
        numbers.innerHTML = 'Length must be 16';
    }
})

continueBtn.addEventListener('click', () => {
    formContainer.classList.remove('d-none');
    completedState.classList.add('d-none');
    reset();
})

nameVal.addEventListener('input', () => {
    
    cardName.innerHTML = '';

    if (onlyLetters(nameVal.value)) {
        cardName.innerHTML = nameVal.value;
        nameVal.classList.remove('red-border');
        letters.innerHTML = '';
    }
    else if(nameVal.value === '')
    {
        cardName.innerHTML = 'Jane Appleseed';
        nameVal.classList.remove('red-border');
        letters.classList.add('d-none');
    }
    else
    {
        cardName.innerHTML = 'Jane Appleseed';
        nameVal.classList.add('red-border');
        letters.classList.remove('d-none');
        letters.innerHTML = 'Only Letters!';
    }
})

cardNum.addEventListener('input', () => 
{
    if(onlyNums(cardNum.value))
    {
        let joy = cardNum.value.match(/.{1,4}/g);
        let result = joy.join(' ');
        cardNumber.innerHTML = result;
        numbers.innerHTML = '';
        cardNum.classList.remove('red-border');
    }
    else if(cardNum.value === '')
    {
        cardNum.classList.remove('red-border');
        cardNumber.innerHTML = '0000 0000 0000 0000';
    }
    else{
        cardNum.classList.add('red-border');
        numbers.innerHTML = 'Only Numbers!'
    }
});

cardMonth.addEventListener('input', () => 
{
    cardMonthSpan.innerHTML = cardMonth.value;
});

cardYear.addEventListener('input', () => 
{
    cardYearSpan.innerHTML = cardYear.value;
});

cvcValue.addEventListener('input', () => 
{

    cardCvc.innerHTML = cvcValue.value;
    
});


function onlyLetters(name) {
    let letters = /^[a-zA-Z\s]*$/; 
    return letters.test(name);
  }

  function onlyNums(number) {
    let nums = /^(?=.*\d)[\d ]+$/;
    return nums.test(number);
  }

  function reset()
  {
    nameVal.value = '';
    cardNum.value = '';
    cardMonth.value = '';
    cardYear.value = '';
    cvcValue.value = '';
    cardName.innerHTML = 'Jane Appleseed';
    cardNumber.innerHTML = '0000 0000 0000 0000';
    cardMonthSpan.innerHTML = '00';
    cardYearSpan.innerHTML = '00';
    cardCvc.innerHTML = '000';
}

