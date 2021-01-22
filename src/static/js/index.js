if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("serviceWorker.js")
    console.log("Service Worker registrado com sucesso")
} else {
    console.log(err)
    console.log("Registro de service worker falhou")
}

document.querySelector(".new").addEventListener("click", () => {
    document.querySelector(".modal-overlay").classList.toggle("active")
})

document.querySelector(".cancel").addEventListener("click", () => {
    document.querySelector(".modal-overlay").classList.toggle("active")
})