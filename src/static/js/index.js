if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("serviceWorker.js")
    console.log("Service Worker registrado com sucesso")
} else {
    console.log(err)
    console.log("Registro de service worker falhou")
}

document.querySelector(".new").addEventListener("click", () => {
    document.querySelector(".form-modal").classList.toggle("active")
})

document.querySelector("#form-button").addEventListener("click", () => {
    document.querySelector(".form-modal").classList.toggle("active")
})

document.querySelector("#settings").addEventListener("click", () => {
    document.querySelector(".settings-modal").classList.toggle("active")
})

document.querySelector("#settings-button").addEventListener("click", () => {
    document.querySelector(".settings-modal").classList.toggle("active")
})

document.querySelector(".settings-modal button").addEventListener("click", () => {
    document.querySelector(".settings-modal").classList.toggle("active")

    if(document.querySelector("#theme").selectedIndex == 0) {
        setTheme("light")
    } else {
        setTheme("omni")
    }
})

function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
}

function toggleTheme() {
    if (localStorage.getItem("theme") === "theme-dark") {
        setTheme("light")
    } else {
        setTheme("omni")
    }
}

(function() {
    if (localStorage.getItem("theme") === "omni") {
        setTheme("omni")
        
    } else {
        setTheme("light")
    }
})()