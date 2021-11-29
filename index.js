cartas.listaCartas = cartas.posicionAleatoriaCartas();
cartas.generarPanel();
let cards = document.querySelectorAll('.carta');
let cont = 0;
let carta_anterios, aux;

cards.forEach( card => {
    card.addEventListener('click', function(event) {
        cont++;
        aux = this.name;
        this.name = this.src;
        this.src = aux;
        this.style.transform = 'rotateY(180deg)';
        this.style.transition= '.3s';
        this.style["pointer-events"] = "none";
        if(cont == 1) {
            carta_anterios = this;
        } else if (cont == 2) {
            if(carta_anterios.src != card.src) {
                setTimeout(function() {
                    aux = card.src;
                    card.src = card.name;
                    card.name = aux;
                    console.log(card);
                    card.style.transform = 'rotateY(180deg)';
                    card.style.transition= '.3s';
                    card.style["pointer-events"] = "auto";
                    
                    aux = carta_anterios.src;
                    carta_anterios.src = carta_anterios.name;
                    carta_anterios.name = aux;
                    carta_anterios.style.transform = 'rotateY(180deg)';
                    carta_anterios.style.transition= '.3s';
                    carta_anterios.style["pointer-events"] = "auto";
                }, 2000);
            }
            cont = 0;
        }
    });
})