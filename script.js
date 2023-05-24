var mostrarBar = false; /*Defino uma variável boolean como false para identificar quando a barra está aparecendo*/


/*Essa função será chamada toda vez que o usuário interagir com os ícones*/
function mostrar(){
    mostrarBar =! mostrarBar; /*Como eu declarei a variável como false, o =! faz com que ela receba um valor diferente dela, que é true*/
    if (mostrarBar == true){
        document.getElementById("navegacao-link").style.marginLeft = "-5vw"; /*Com o DOM consigo pegar os elementos no html com o Id que desejo e modicar os estilos dele*/
        document.getElementById("navegacao-link").style.animationName = "show";
        document.getElementById("conteudoPagina").style.filter = "blur(2px)";
    } else{
        document.getElementById("navegacao-link").style.marginLeft = "-50vw";
        document.getElementById("navegacao-link").style.animationName = "hide";
        document.getElementById("conteudoPagina").style.filter = "";

    }

}
/*Essa função é chamada quando o usuário clicar no conteúdo da página*/
function fecharBar(){
    if(mostrarBar == true){
        mostrar(); /*Caso a barra esteja aberta, chamo a função mostrar() para que a variável mostrarBar seja definida como false e feche a barra*/
    }
}


/*Todos os windows.addEventListener desse javascript são tratamentos de erro por conta do
código. Basicamente, o window é uma propriedade dentro do html e dentro dele temos outras 
propriedades, como resize. Com o addEventListener eu estou adicionando dentro do resize uma função anonima (que não precisa de parâmetro)
que será acionada toda vez que dimensão do navegador for alterada.*/
window.addEventListener('resize', function (event){
    /*Com o window.innerWidth eu verifico que se ele for maior que 1220px e a barra estiver aberta, eu chamo o mostrarBar() novamente para fechar ela.
    O && verifica se as duas condições foram satisfeitas, caso alguma delas não foi ele não executa o if.*/ 
    if(window.innerWidth > 1220 && mostrarBar == true){         
        mostrar();
    }   
})


window.addEventListener('resize', function (event){
    if(window.innerWidth > 1220){
        console.log('test')
        document.getElementById("navegacao-link").style.marginLeft = "0vw";
    }   
})

window.addEventListener('resize', function (event){
    /*Aqui é o mesma função, só estou verificando se o margin-Left da class navegacao-link é igual a 0vw, se for ele esconde a barra adicionado -50vw*/
    if(window.innerWidth < 1220 && document.getElementById("navegacao-link").style.marginLeft == "0vw"){
        document.getElementById("navegacao-link").style.marginLeft = "-50vw"
    }   
})