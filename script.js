/* CALCULATOR DEVELOPED BY DIAA */
/* CALCULATOR DEVELOPED BY DIAA */

const calculator = document.querySelector(".calculator")
const display = document.querySelector(".display")
const clearBtn = document.querySelector(".clear")
const deleteBtn = document.querySelector(".delete")
const equalsBtn = document.querySelector(".equals")
const buttons = document.querySelectorAll(".numbers, .operators")
const header = document.querySelector(".header")
const secretBtn = document.querySelector(".secretBtn")

function appendToDisplay(input) {
    display.value += input;
}

function deleteNumber() {
    display.value = display.value.slice(0, -1)
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value.replace(/×/g, "*").replace(/÷/g, "/"));
    }
    catch {
        display.value = "Error!"
    }
}

header.addEventListener("click", () => {
    calculator.style.display = "none"
    header.style.display = "none"
    secretBtn.style.display = "flex"
    document.body.style.background = "black"
    
    secretBtn.addEventListener("click", () => {
        window.alert("You have discovered the hidden button..")
        window.alert("Congrats!")
    })
})

document.addEventListener("keydown", (event) => {
    const key = event.key

    if(key === "*") {
        appendToDisplay("×")
    }
    
    if(key === "/") {
        appendToDisplay("÷")
    }

    buttons.forEach(button => {
        if(button.textContent === key) {
            button.click()
        }
    })

    if(key.toLowerCase() === "c" || key === "Escape") {
        clearBtn.click()
    }

    if(key === "Backspace") {
        deleteBtn.click()
    }

    if(key === "Enter" || key === "=") {
        calculate()
    }

})