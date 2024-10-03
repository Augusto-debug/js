const codigo = ["P2", "AP", "POO1", "FBD", "JSB"];
const disciplina = ["Projeto Sistema Web Mvc e Sql", "Algoritmos e Programação", "Programação Orientada a Objetos 1", "Fundamentos de Banco de Dados", "JavaScript Básico"];
document.write("<table><tr><th>Código</th><th>Disciplina</th></tr>");
for(let i in codigo){
    document.write(`<tr><td>${codigo[i]}</td><td>${disciplina[i]}</td></tr>`);
}

