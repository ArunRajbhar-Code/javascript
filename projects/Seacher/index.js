var movies = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "Forrest Gump",
    "Inception",
    "The Matrix",
    "Fight Club",
    "Interstellar",
    "The Lord of the Rings: The Return of the King",
    "Gladiator",
    "The Silence of the Lambs",
    "The Avengers",
    "Titanic",
    "Jurassic Park",
    "Star Wars: Episode IV - A New Hope",
    "Avatar",
    "The Lion King",
    "Back to the Future",
    "Parasite"
]


function render() {
    var id = document.getElementById("result")
    var textInput = document.getElementById("textInput").value
    var newResult = []
    id.innerHTML = ''
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].includes(textInput)) {
            newResult.unshift(movies[i])
        }


    }
    if (textInput === "") {
        for (let i = 0; i < movies.length; i++) {
            var div = document.createElement("div")
            div.innerHTML = `<div>${movies[i]}</div>`
            id.appendChild(div)



        }

    }
    else {
        for (let i = 0; i < newResult.length; i++) {
            var div = document.createElement("div")
            div.innerHTML = `<div><span>&#8865;</span>${newResult[i]}</div>`
            id.appendChild(div)



        }

    }

}
function render1() {
    var id = document.getElementById("result")
    for (let i = 0; i < movies.length; i++) {
        var div = document.createElement("div")
        div.innerHTML = `<div><span>&#8865;</span>${movies[i]}</div>`
        id.appendChild(div)



    }

}
render1()
// function render() {
//     var textInput = document.getElementById("textInput").value
//     console.log(textInput);



// }
