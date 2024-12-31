function loadHeader() {
  fetch("./components/header.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("header").innerHTML = html
    })
}

function loadFooter() {
  fetch("./components/footer.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("footer").innerHTML = html
    })
}

loadHeader()
loadFooter()
