const btnMonth = document.querySelector('.btn-1')
const btnOneTime = document.querySelector('.btn-2')

btnOneTime.onclick = function () {
    btnOneTime.classList.remove('btn-2')
    btnOneTime.classList.add('btn-1')
    btnMonth.classList.add('btn-2')
    btnMonth.classList.remove('btn-1')
}

btnMonth.onclick = function () {
    btnOneTime.classList.remove('btn-1')
    btnOneTime.classList.add('btn-2')
    btnMonth.classList.remove('btn-2')
    btnMonth.classList.add('btn-1')
}

const btnOne = document.querySelector('.btn-3')
const btnTwo = document.querySelector('.btn-4')
const btnThree = document.querySelector('.btn-5')

btnOne.onclick = function () {
    btnOne.classList.add('checked')
    btnTwo.classList.remove('checked')
    btnThree.classList.remove('checked')
}

btnTwo.onclick = function () {
    btnTwo.classList.add('checked')
    btnOne.classList.remove('checked')
    btnThree.classList.remove('checked')
}

btnThree.onclick = function () {
    btnThree.classList.add('checked')
    btnTwo.classList.remove('checked')
    btnOne.classList.remove('checked')
}

const btnSum = document.querySelector('.btn-6');
var totalBar = document.querySelector('.total');
var taxBar = document.querySelector('.tax');
var sum = document.querySelector('.h3');

btnSum.onclick = function () {
    // sum.innerHTML =`
    // ${totalBar.value - (%)taxBar.value}
    // `
};