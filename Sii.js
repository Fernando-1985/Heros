class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "ataque desconhecido";
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}


const heroi1 = new Heroi("Gandalf", 100, "mago");
const heroi2 = new Heroi("Aragorn", 35, "guerreiro");
const heroi3 = new Heroi("Bruce Lee", 30, "monge");
const heroi4 = new Heroi("Naruto", 16, "ninja");


heroi1.atacar();  
heroi2.atacar();  
heroi3.atacar();  
heroi4.atacar();  