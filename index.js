class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        // Define o ataque conforme o tipo
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        }

        // Exibe a mensagem final
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando os heróis
let heroi1 = new Heroi("Merlin", 150, "mago");
let heroi2 = new Heroi("Arthur", 30, "guerreiro");
let heroi3 = new Heroi("Lee", 25, "monge");
let heroi4 = new Heroi("Hanzo", 28, "ninja");

// Chamando o método atacar
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();

//Exemplo de saída:

//O mago atacou usando magia
//O guerreiro atacou usando espada
//O monge atacou usando artes marciais
//O ninja atacou usando shuriken