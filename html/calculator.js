let inp = document.querySelector('input')
let buttons = document.querySelectorAll("button")

for (let btn of buttons) {
  btn.addEventListener("click", () => {
    let btnText = btn.innerText

    if (btnText === "AC") {
      inp.value = ""
    } else if (btnText === '=') {
      try {
        inp.value = eval(inp.value)
      } catch {
        inp.value = "Error"
      }
    } else {
      inp.value += btnText
    }
  })
}