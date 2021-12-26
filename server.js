const express = require('express'); // O express vai pegar todos os arquivos js e renderizar no navegador pra nós.
const app = express(); // express foi instanciado e guardado na variavel app


//o app agora tem todas as caracteristicas do express e o set é um metódo do express
app.set("view engine", "ejs"); //falamos pro express que a ferramenta pra renderizar html(view engine)  vai ser o ejs

/* abaixo estamos criando uma rota
 carregamos tudo do express no app. o get é um método de express
 com o "/" estamos determinando a rota, ou seja o que vem depois do final do site
 quando chamar a rota principal ela irá executar a função
 o "res" significa responder que a resposta irá dar é renderizar o index
 */

app.get("/", function (req, res) {
    const items = [
        {  
            title: "D",   
            message: "esenvolver aplicações/serviços de forma fácil."
        },
        {  
            title: "E",   
            message: "JS usa javascript para renderizar HTML."
        },
        {  
            title: "M",   
            message: "uito fácil de usar."
        }
        ,
        {  
            title: "A",   
            message: "morzinho."
        },
        {  
            title: "S",   
            message: "intaxe simples."
        },
    ];
    const subtitle = "EJS é uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript"
    res.render("pages/index",{
        qualitys: items,
        subtitle: subtitle,
    });
})
app.get("/sobre", function (req, res) {
    res.render("pages/about");
})
app.listen(8080); // listen é um método express que significa que estará ouvindo uma porta e passamos a porta 8080 do nosso localhost. Ou seja, falamos para nosso servidor que quando rodarmos a porta 8080 ele executará tudo que está aqui

console.log("rodando")