function loadHeader() {
  fetch("./components/header.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("header").innerHTML = html
    })
}

console.log("here")

loadHeader()
