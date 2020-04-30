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

//EJEMPLO1
/* g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);
g.addVertex(5);
g.addVertex(6);
g.addVertex(7);

g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.addEdge(2, 5);
g.addEdge(3, 6);
g.addEdge(3, 7); */

//EJEMPLO 2
/* g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("B", "A");
g.addEdge("A", "C");
g.addEdge("C", "A");
g.addEdge("A", "D");
g.addEdge("D", "A");
g.addEdge("D", "E");
g.addEdge("E", "D");
g.addEdge("E", "F");
g.addEdge("F", "E"); */


//EJEMPLO 4
g.addVertice(1);
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
g.addArista(5, 4);

g.imprimirGrafo();

console.log('Busqueda en profundidad');
g.dfs(1);


//EJEMPLO 3
/* g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);
g.addVertex(5);
g.addVertex(6);
g.addVertex(7);
g.addVertex(8);
g.addVertex(9);
g.addVertex(10);
g.addVertex(11);
g.addVertex(12);

g.addEdge(1, 2);
g.addEdge(1, 7);
g.addEdge(1, 8);
g.addEdge(2, 3);
g.addEdge(2, 6);
g.addEdge(8, 9);
g.addEdge(8, 12);
g.addEdge(3, 4);
g.addEdge(3, 5);
g.addEdge(9, 10);
g.addEdge(9, 11); */