class Dado{
    tiro = 0;

    lanzarDado(){
        this.tiro = Math.ceil(Math.random()*6);
        return this.tiro;
    }
}