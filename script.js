    // // contem 10 valores ultilizando o metodo map, contem aumentos percentuais
    // let salarios = [100.2500,1950,4700,5200,1500,3500,4000,1750,2000]
    // let salAtuais = salarios.map(sal => sal <= 2000 ? sal * 1.15 : sal * 1.10)

    // console.log(salarios);
    // console.log(salAtuais);

    // //filter = servindo para absorver os salarios altos
    // let salAltos = salAtuais.filter(sal =>sal > 2500)

    // console.log(salAltos);

    // let salTotal = salAltos.reduce((acc,sal)=>acc+sal)
    // //acc=acumulador que manipula os salarios
    // console.log(salTotal)

//.................................................................................................................

let pessoa = {
    nome:'ana',
    idade:19,
    sexo:'Feminino',
    peso:55
    // andar: function(){
    //     console.log('Estou Andando');
    // }
}
// pessoa.andar()

console.log(pessoa.nome);

pessoa.nome = 'carol'

console.log(pessoa.nome);

pessoa.cabelo = 'Castanho'

console.log(pessoa);

pessoa['idade'] = 29

console.log(pessoa);

pessoa[atributo] = valorArtributos
console.log(pessoa);


// let atributo = prompt('Digite o novo atrubuto')
// let valorArtributos  ('Digite o valor do novo atrubuto')
console.log(pessoa('nome'));

let cursos =[
    {nome:'HTML5', duracao: 4},
    {nome:'CSS', duracao:5}

]



pessoa.andar()

pessoa.correr = ()=>{
    console.log("Estou correndo")
}

let pessoa2 = {...pessoa, nome:'Ana' , idade:18}

console.log(pessoa2);

let frutas = ['maca', 'banana', 'uva']
let legumes = ['batata', 'cenoura', 'pepino']

let comidar = [...frutas,...legumes]

console.log(comidas);

//para pegar informações especificas
let {nome, idade} = pessoa2

console.log(`${nome}tem${idade} anos´);











