class Dado{
    tiro = 0;
    lanzar(){
        this.tiro = Math.ceil(Math.random()*6);
        return this.tiro;
    }
}

class Jugadores{
    constructor(nombre,color){
        this.nombre = nombre;
        this.color = color;
    }
    mover(){
        let dado = new Dado();
        return dado.lanzar();
    }
}

class Tablero{
    tableroJuego = [
        0,1,2,3,5,34,6,36,8,31,10,
        11,12,52,14,15,16,17,18,19,23,
        21,22,23,24,25,26,27,28,29,30,
        31,32,10,34,35,36,37,38,39,17,
        41,42,87,44,45,46,47,48,49,50,
        51,52,53,54,55,14,57,58,59,3,
        61,62,25,64,65,66,67,97,69,89,
        71,72,73,92,75,76,77,78,79,98,
        81,82,83,84,85,86,87,88,89,90,
        91,92,50,94,47,96,97,98,1,100];
    revisarCasilla(casilla){
        if(casilla <= 100){
            return this.tableroJuego[casilla];
        }
        else{
            return 100;
        }
    }
}

class Juego{
    constructor(){
        this.j1 = new Jugadores("Kenia","azul");
        this.j2 = new Jugadores("Jonathan","amarillo");
        this.meta = 100;
        this.ganador =  null;
        this.tablero = new Tablero;
    }
    iniciar(){
        let tiros = 1;
        let posicion1 = 0;
        let posicion2 = 0;
        while(posicion1 < this.meta && posicion2 < this.meta){
            console.log("Numero de tiros " + tiros);
            //Jugador 1
            posicion1 += this.j1.mover();
            posicion1 = this.tablero.revisarCasilla(posicion1);
            console.log(this.j1.color + ", llego a la posicion " + posicion1);
            //Jugador 2
            posicion2 += this.j2.mover();
            posicion2 = this.tablero.revisarCasilla(posicion2);
            console.log(this.j2.color + ", llego a la posicion " + posicion2);
            tiros++
        }
        if(posicion1 >= this.meta){
            this.ganador = "El Ganador es la ficha " + this.j1.color + 
            " con nombre " + this.j1.nombre; 
            console.log(this.ganador);
        }else
        if(posicion2 >= this.meta){
            this.ganador = "El Ganador es la ficha " + this.j2.color + 
            " con nombre " + this.j2.nombre; 
            console.log(this.ganador);
        }
    }
}
let app = new Juego().iniciar();
