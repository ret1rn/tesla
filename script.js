let switches = document.querySelectorAll("[type-switch]")

switches.forEach(item => {
    item.classList.add("switch")
})

switches[2].classList.add('switch_active')

switches.forEach(item => {
    item.onclick = () => {
        item.classList.toggle("switch_active")
        if (item.getAttribute("type-switch") == "0" && item.getAttribute("data-turn") == "off") {
            document.querySelector("#km").innerHTML = +document.querySelector("#km").innerHTML.slice(0, 3) - 10
            item.setAttribute("data-turn", "on")
        } else if(item.getAttribute("type-switch") == "0" && item.getAttribute("data-turn") == "on") {
            document.querySelector("#km").innerHTML = +document.querySelector("#km").innerHTML.slice(0, 3) + 10
            item.setAttribute("data-turn", "off")
        }
    }
})

let speedIcons = document.querySelectorAll(".speed .icons img")
let temperatureIcons = document.querySelectorAll(".temperature .icons img")
let tireIcons = document.querySelectorAll(".tire .icons img")
let speed = document.querySelector("#speed")
let temp = document.querySelector("#temp")
let tire = document.querySelector("#disk")
let backCar = document.querySelector(".img-car")


speedIcons.forEach(icon => {
    icon.onclick = () => {
        let km = 750
        if (icon.getAttribute("alt") == "up") {
            speed.innerHTML = +speed.innerHTML + 5
        } else {
            speed.innerHTML = +speed.innerHTML - 5
        }
        km = km + (km - speed.innerHTML * 12.5)
        document.querySelector("#km").innerHTML = km + "км"
    }
})

temperatureIcons.forEach(icon => {
    icon.onclick = () => {
        if (icon.getAttribute("alt") == "up") {
            temp.innerHTML++
        } else {
            temp.innerHTML--
        }
    }
})

tireIcons.forEach(icon => {
    icon.onclick = () => {
        if (icon.getAttribute("alt") == "up" && tire.innerHTML == 19) {
            tire.innerHTML = 21
            backCar.classList.remove("back19")
            backCar.classList.add("back21")
        } else if (icon.getAttribute("alt") == "down" && tire.innerHTML == 21) {
            tire.innerHTML = 19
            backCar.classList.remove("back21")
            backCar.classList.add("back19")
        }
    }
})