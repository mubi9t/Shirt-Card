// orentation section start
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let ten = document.getElementById("ten")
let eleven = document.getElementById("eleven")
let tewelve = document.getElementById("tewelve")
let thirteen = document.getElementById("thirteen")
let fourteen = document.getElementById("fourteen")


one.addEventListener('click', () => {
    one.style.opacity = "1"
    two.style.opacity = "0.7"
    three.style.opacity = "0.7"
    two.style.border = "none"
    three.style.border = "none"
    one.style.border = "3px solid #125B9A"
    four.style.display = "flex"
    five.style.display = "none"
    six.style.display = "none"
})
two.addEventListener('click', () => {
    two.style.opacity = "1"
    one.style.opacity = "0.7"
    three.style.opacity = "0.7"
    one.style.border = "none"
    two.style.border = "3px solid #125B9A"
    three.style.border = "none"
    four.style.display = "none"
    five.style.display = "flex"
    six.style.display = "none"
})
three.addEventListener('click', () => {
    three.style.opacity = "1"
    one.style.opacity = "0.7"
    two.style.opacity = "0.7"
    one.style.border = "none"
    three.style.border = "3px solid #125B9A"
    two.style.border = "none"
    four.style.display = "none"
    five.style.display = "none"
    six.style.display = "flex"
})
//orentation section end
seven.addEventListener("click", () => {
    Object.assign(seven.style, {
        backgroundColor: "black",
        width: "50px",
        height: "50px",
        color: "white",
        textAlign: "center",
        verticalalign: "middle",
    });
    document.querySelector("#price h1").innerHTML = "$99.00"
    document.querySelector("#price span").innerHTML = "-25%"
    eight.style.backgroundColor = "transparent"
    eight.style.color = "black"
    nine.style.backgroundColor = "transparent"
    nine.style.color = "black"
    ten.style.backgroundColor = "transparent"
    ten.style.color = "black"
    eleven.style.backgroundColor = "transparent"
    eleven.style.color = "black"
    tewelve.style.width = "50%"
    thirteen.style.width = "50%"
    fourteen.style.width = "50%"
})
eight.addEventListener("click", () => {
    Object.assign(eight.style, {
        backgroundColor: "black",
        width: "50px",
        height: "50px",
        color: "white",
        textAlign: "center",
        verticalalign: "middle",
    });
    document.querySelector("#price h1").innerHTML = "$102.0"
    document.querySelector("#price span").innerHTML = "-23%"
    seven.style.backgroundColor = "transparent"
    seven.style.color = "black"
    nine.style.backgroundColor = "transparent"
    nine.style.color = "black"
    ten.style.backgroundColor = "transparent"
    ten.style.color = "black"
    eleven.style.backgroundColor = "transparent"
    eleven.style.color = "black"
    tewelve.style.width = "52%"
    thirteen.style.width = "52%"
    fourteen.style.width = "52%"
})
nine.addEventListener("click", () => {
    Object.assign(nine.style, {
        backgroundColor: "black",
        width: "50px",
        height: "50px",
        color: "white",
        textAlign: "center",
        verticalalign: "middle",
    });
    document.querySelector("#price h1").innerHTML = "$104.0"
    document.querySelector("#price span").innerHTML = "-22%"
    seven.style.backgroundColor = "transparent"
    seven.style.color = "black"
    eight.style.backgroundColor = "transparent"
    eight.style.color = "black"
    ten.style.backgroundColor = "transparent"
    ten.style.color = "black"
    eleven.style.backgroundColor = "transparent"
    eleven.style.color = "black"
    tewelve.style.width = "55%"
    thirteen.style.width = "55%"
    fourteen.style.width = "55%"
})
ten.addEventListener("click", () => {
    Object.assign(ten.style, {
        backgroundColor: "black",
        width: "50px",
        height: "50px",
        color: "white",
        textAlign: "center",
        verticalalign: "middle",
    });
    document.querySelector("#price h1").innerHTML = "$106.0"
    document.querySelector("#price span").innerHTML = "-20%"
    seven.style.backgroundColor = "transparent"
    seven.style.color = "black"
    eight.style.backgroundColor = "transparent"
    eight.style.color = "black"
    nine.style.backgroundColor = "transparent"
    nine.style.color = "black"
    eleven.style.backgroundColor = "transparent"
    eleven.style.color = "black"
    tewelve.style.width = "57%"
    thirteen.style.width = "57%"
    fourteen.style.width = "57%"
})
eleven.addEventListener("click", () => {
    Object.assign(eleven.style, {
        backgroundColor: "black",
        width: "50px",
        height: "50px",
        color: "white",
        textAlign: "center",
        verticalalign: "middle",
    });
    document.querySelector("#price h1").innerHTML = "$108.0"
    document.querySelector("#price span").innerHTML = "-19%"
    seven.style.backgroundColor = "transparent"
    seven.style.color = "black"
    eight.style.backgroundColor = "transparent"
    eight.style.color = "black"
    nine.style.backgroundColor = "transparent"
    nine.style.color = "black"
    ten.style.backgroundColor = "transparent"
    ten.style.color = "black"
    tewelve.style.width = "59%"
    thirteen.style.width = "59%"
    fourteen.style.width = "59%"
})