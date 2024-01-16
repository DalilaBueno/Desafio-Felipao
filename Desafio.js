
let nome = 'Johnny'
let qtdeXP = 6500
let nivel = " "

//Switch Case para classificar o nível do herói com base na XP

switch (true) {
        case qtdeXP < 1000:
                nivel = 'Ferro'
                break
        case qtdeXP >= 1001 && qtdeXP <= 2000:
                nivel = 'Bronze'
                break
        case qtdeXP >= 2001 && qtdeXP <= 5000:
                nivel = 'Prata'
                break
        case qtdeXP >= 5001 && qtdeXP <= 7000:
                nivel = 'Ouro'
                break
        case qtdeXP >= 7001 && qtdeXP <= 8000:
                nivel = 'Platina'
                break
        case qtdeXP >= 8001 && qtdeXP <= 9000:
                nivel = 'Ascendente'
                break
        case qtdeXP >= 9001 && qtdeXP <= 10000:
                nivel = 'Imortal'
                break
        case qtdeXP >= 10001:
                nivel = 'Radiante'
                break
        default:
                nivel = 'Nível não definido'
}

//Mensagem de Saída
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`)