//Creamos la clase Graph
class Graph {
    constructor() {
        //Se crea un objeto de mapa
        this.listaAdyacencia = new Map();
    }

    addVertice(v) {
        //Se inicializan los vertices a utilizar con un arreglo vacío
        this.listaAdyacencia.set(v, []);
    }

    addArista(v, w) {
        //Se añaden aristas apuntando hacia ambos lados de los vertices
        this.listaAdyacencia.get(v).push(w);
        this.listaAdyacencia.get(w).push(v);
    }


    imprimirGrafo() {
        //Hacemos un objeto con las llaves del mapa
        let llavesLista = this.listaAdyacencia.keys();
        //Recorremos la lista con las llaves
        for (let v of llavesLista) {
            //Obtenemos la pura lista de vertices adyacentes y la asignamos a una variable(objeto)
            let listaAristas = this.listaAdyacencia.get(v);
            let data = '';
            //Reccorremos la lista de aristas y hacemos un string que las concatene a todas
            for (let ver in listaAristas) {
                data = data + listaAristas[ver] + ' ';
            }
            //De acuerdo a la llave del mapa imprimimos su conexion con los demas vertices
            console.log(v + '->' + data);
            document.getElementById('conexiones').innerHTML += '<li>' + v + '   ->   ' + data + '</li>';
        }
    }

    //Hacemos un método para hacer la estructura de cuales nodos han sido visitados
    dfs(v) {
        let visitado = []; // let visitado = new Array();
        //Hacemos un objeto con las llaves del mapa
        let llavesLista = this.listaAdyacencia.keys();
        for (let v of llavesLista) {
            visitado[v] = false;
        }
        this.dfsRecu(v, visitado);
    }

    //Hacemos un metodo recursivo para poder recorrer el Map
    dfsRecu(v, visitado) {
        //Obtenemos la pura lista de vertices adyacentes y la asignamos a una variable(objeto)
        let listaAristas = this.listaAdyacencia.get(v);
        //Cambiamos el valor del vertice a verdadero para saber que por este ya pasamos
        visitado[v] = true;
        document.getElementById('recorrido').innerHTML += '<li>' + v + '</li>';
        console.log(v);
        //Recorremos

        for (let datosArista in listaAristas) {
            //De acuerdo a los adyacentes del vertice los va a recorrer y el primero que aparezca hace un nuevo objeto "e" con la lista de Aristas de ese vertice
            let e = listaAristas[datosArista];
            //Si no ha sido visitado el vertice lo visita y hace recursivamente todo de nuevo
            if (!visitado[e]) {
                visitado[e] = true;
                this.dfsRecu(e, visitado);
            }
        }
    }
}
//Se hace un objeto de la clase Graph para poder utilizarla
//Se crean los vertices pueden ser números o letras
//Se crean las aristas de cada vertice a cada vertice puede ser bidireccional
//Se imprime el grafo para entenderlo mejor
//Se imprime el recorrido que ese grafo hará
var g = new Graph();

function execDFS(inicio) {



    //EJEMPLO1
    /* g.addVertice(1);
    g.addVertice(2);
    g.addVertice(3);
    g.addVertice(4);
    g.addVertice(5);
    g.addVertice(6);
    g.addVertice(7);

    g.addArista(1, 2);
    g.addArista(1, 3);
    g.addArista(2, 4);
    g.addArista(2, 5);
    g.addArista(3, 6);
    g.addArista(3, 7); */

    //EJEMPLO 2
    /* g.addVertice("A");
    g.addVertice("B");
    g.addVertice("C");
    g.addVertice("D");
    g.addVertice("E");
    g.addVertice("F");

    g.addArista("A", "B");
    g.addArista("B", "A");
    g.addArista("A", "C");
    g.addArista("C", "A");
    g.addArista("A", "D");
    g.addArista("D", "A");
    g.addArista("D", "E");
    g.addArista("E", "D");
    g.addArista("E", "F");
    g.addArista("F", "E"); */

    //EJEMPLO 3
    /* g.addVertice(1);
    g.addVertice(2);
    g.addVertice(3);
    g.addVertice(4);
    g.addVertice(5);
    g.addVertice(6);
    g.addVertice(7);
    g.addVertice(8);
    g.addVertice(9);
    g.addVertice(10);
    g.addVertice(11);
    g.addVertice(12);

    g.addArista(1, 2);
    g.addArista(1, 7);
    g.addArista(1, 8);
    g.addArista(2, 3);
    g.addArista(2, 6);
    g.addArista(8, 9);
    g.addArista(8, 12);
    g.addArista(3, 4);
    g.addArista(3, 5);
    g.addArista(9, 10);
    g.addArista(9, 11); */


    //EJEMPLO 4
    /* g.addVertice(1);
    g.addVertice(2);
    g.addVertice(3);
    g.addVertice(5);
    g.addVertice(4);

    g.addArista(1, 3);
    g.addArista(3, 1);
    g.addArista(3, 2);
    g.addArista(2, 3);
    g.addArista(2, 4);
    g.addArista(4, 2);
    g.addArista(2, 5);
    g.addArista(5, 2);
    g.addArista(4, 5);
    g.addArista(5, 4); */

    //EJEMPLO 5
    /* g.addVertice(0);
    g.addVertice(1);
    g.addVertice(2);
    g.addVertice(3);
    g.addVertice(4);

    g.addArista(0, 1);
    g.addArista(0, 3);
    g.addArista(0, 2);
    g.addArista(2, 1);
    g.addArista(2, 4); */


    g.imprimirGrafo();
    console.log('Busqueda en profundidad')
    g.dfs(inicio);
    //g.dfs(0);
}




var inputVertice = document.getElementById('inputVertice');
var buttonVertice = document.getElementById('vertice');
buttonVertice.addEventListener('click', function() {
    if (inputVertice.value == '') {
        alert('Inserte un vertice')
    } else {
        g.addVertice(inputVertice.value);
        document.getElementById('listaVertices').innerHTML += '<li>' + inputVertice.value + '</li>';
        inputVertice.value = '';
    }

});

var inputArista = document.getElementById('inputAristas');
var buttonArista = document.getElementById('aristas');
buttonArista.addEventListener('click', function() {
    if (inputArista.value == '') {
        alert('Inserte sus aristas');
    } else {
        var aristas = inputArista.value;
        var arrayAristas = aristas.split(',');
        g.addArista(arrayAristas[0], arrayAristas[1]);
        document.getElementById('listaAristas').innerHTML += '<li>' + inputArista.value + '</li>';
        inputArista.value = '';
    }
});


var inputInicio = document.getElementById('inputInicio');
var buttonEjecutar = document.getElementById('ejecutar');
buttonEjecutar.addEventListener('click', function() {
    document.getElementById('conexiones').innerHTML = '';
    document.getElementById('recorrido').innerHTML = '';
    execDFS(inputInicio.value);
});