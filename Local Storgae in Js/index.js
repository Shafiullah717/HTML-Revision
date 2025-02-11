// alert("Testing")
const input = document.getElementById("input")
const button = document.getElementById("Search")
const NameText = document.getElementById("name")

button.addEventListener("click",()=>{
    const value = input.value
    localStorage.setItem('name', value)
    location.reload()
})

window.addEventListener('load',()=>{
    const Value = localStorage.getItem('name')
    NameText.innerText = Value

    
})