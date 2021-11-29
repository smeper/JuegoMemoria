class Cartas {

    constructor() {
        this.tablero = null;
        this.carta = null;
        this.listaCartas = [];
    }

    generarPanel(){
        let cont = 0;
        this.tablero = document.getElementById('tablero');
        for(let fil = 0; fil < 4; fil++) {
            for(let col = 0; col < 4; col++) {
                let carta = document.createElement('img');
                carta.classList.add('carta')
                carta.src= "./img/dorso.jpg";
                carta.name = "./img/"+this.listaCartas[cont];
                cont++;
                this.tablero.appendChild(carta);
                
            }
        }
    }

    posicionAleatoriaCartas() {
        let lista = ['imagen0.jpg', 'imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg', 
                    'imagen4.jpg', 'imagen5.jpg', 'imagen6.jpg', 'imagen7.jpg'];
        let listaAleatorios = [];
        let listaCont = [0,0,0,0,0,0,0,0];
        
        let aleatorio;
        for (let ind = 0; ind < 16; ind++) {
            aleatorio = Math.floor(Math.random() * 8);
            if(listaAleatorios.includes(lista[aleatorio])) {
               listaCont[aleatorio]++;
               if(listaCont[aleatorio] > 2){
                   ind--;
               } else {
                listaAleatorios.push(lista[aleatorio]);
               }
            } else {
                listaCont[aleatorio]++;
                listaAleatorios.push(lista[aleatorio]);
            }
        }
        return listaAleatorios;
    }
}