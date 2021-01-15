if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("serviceWorker.js")
    console.log("Service Worker registrado com sucesso")
} else {
    console.log(err)
    console.log("Registro de service worker falhou")
}