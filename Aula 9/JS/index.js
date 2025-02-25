const pessoa = ["Dimitri", "Teixeira", 30, "Professor"];
pessoa.splice(1, 2, "1", "2", "3");

document.getElementById("teste").innerHTML = pessoa.join(" ");

document.getElementById("teste").innerHTML = pessoa.slice(2);