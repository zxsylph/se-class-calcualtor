import './style.css'


let display: string | undefined = ''
function showDisplayWithValue(value: number | string) {
  let displayElement = document.querySelector('#display')
  // let display = parseInt(displayElement?.innerHTML)
  // display = (display * 10) + value

  // display = displayElement?.innerHTML
  // if (display == '0') {
  //   display = ''
  // }
  display = display + value.toString()

  if (displayElement != null) {
    displayElement.innerHTML = display.toString()
  }
}


function showResultDisplayWithValue(value: number | string) {
  let displayElement = document.querySelector('#display')
  display = value.toString()

  if (displayElement != null) {
    displayElement.innerHTML = display.toString()
  }
}

// showDisplayWithValue(0)

let prevNum: number | null = null
let isOperatorClicked: boolean = false

let op1: number | null = null
let operator = ''
let op2: number | null = null
let result = 0


function addEventClickToElement(id: string, value: number) {
  let element = document.querySelector(id)
  if (element != null) {
    element.addEventListener('click', () => {
      console.log('button clicked', value)
      if (prevNum != value) {
        showDisplayWithValue(value)
        console.log('display - addEventClickToElement', display)
        console.log('isOperatorClicked', isOperatorClicked)
        console.log('op1', op1)
        console.log('result', result)
        if (op1 == result && isOperatorClicked == false) {
          op1 = null
        }
        isOperatorClicked = false
      }
    })
  }
}

function addEventClickToElementOperator(id: string, value: string) {
  let element = document.querySelector(id)
  if (element != null) {
    element.addEventListener('click', () => {
      console.log('button clicked', value)
      if (!isOperatorClicked) {
        operator = value
        isOperatorClicked = true
        if (op1 == result) {
          display = result.toString()
        }
        console.log('display', display)
        // if (op1 == null || op1 == result) {
        op1 = parseInt(display)
        console.log('op1', op1)
        // }
        display = ''
        console.log('display', display)
      }
    })
  }
}


let element = document.querySelector('#buttonAC')
if (element != null) {
  element.addEventListener('click', () => {
    let displayElement = document.querySelector('#display')
    if (displayElement != null) {
      displayElement.innerHTML = ""
    }
  })
}

element = document.querySelector('#buttonEqual')
if (element != null) {
  element.addEventListener('click', () => {
    if (op1 == null) {
      return
    }

    if (operator == '') {
      return
    }

    op2 = parseInt(display)
    console.log(op1, op2, operator)
    if (operator == '+') {
      result = op1 + op2
    }
    console.log(result)
    op1 = result
    showResultDisplayWithValue(result)
    display = ''
  })
}

// addEventClickToElement('#buttonAC', 0)
addEventClickToElement('#button0', 0)
addEventClickToElement('#button1', 1)
addEventClickToElement('#button2', 2)
addEventClickToElement('#button3', 3)
addEventClickToElement('#button4', 4)
addEventClickToElement('#button5', 5)
addEventClickToElement('#button6', 6)
addEventClickToElement('#button7', 7)
addEventClickToElement('#button8', 8)
addEventClickToElement('#button9', 9)

addEventClickToElementOperator('#buttonPlus', '+')
addEventClickToElementOperator('#buttonMinus', '-')
