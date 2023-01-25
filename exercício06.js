/*
A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e 
    número de filhos. A prefeitura deseja saber: 
    - média do salário da população; 
    - média do número de filhos; 
    - maior salário; 
    - O final da leitura de dados se dará com a entrada de um salário negativo. 
    - Faça isso usando uma função!
*/

const people=[ {
    numberOfChildren: 4,
    salary: 5000
},
{
    numberOfChildren: 5,
    salary: 4500
},
{
    numberOfChildren: 6,
    salary: 3500
},
{
    numberOfChildren: 1,
    salary: 9000
},
{
    numberOfChildren: 7,
    salary: 2500
},
{
    numberOfChildren: 0,
    salary: 1000
},
{
    numberOfChildren: 1,
    salary: 1200
},
{
    numberOfChildren: 2,
    salary: -1000
,
}
]


function findAverageAndHighestSalary(peopleInformation) {
    let averageSalary = 0
    let averageChildren = 0
    let highestSalary = 0   
    for (let i = 0; i <= peopleInformation.length; i++) {
        const salary = peopleInformation[i].salary
        const children = peopleInformation[i].numberOfChildren

        if (salary > highestSalary) highestSalary = salary

        if (salary < 0) {
            console.log(`Média de salário R$${(averageSalary / i).toFixed(0)}`)
            console.log(`Média de filhos ${(averageChildren / i).toFixed(0)}`)
            console.log(`Maior Salário R$${highestSalary}`)
            break
        } else {
            averageSalary = averageSalary + salary;
            averageChildren += children
        }
    }
}

findAverageAndHighestSalary(people)


/*
function findAverageAndHighestSalary(peopleInformation) {

    let i = 0;
    let averageSalary = 0
    let averageChildren = 0
    let highestSalary = 0

    while (peopleInformation[i].salary > 0) {
        averageSalary = averageSalary + peopleInformation[i].salary
        averageChildren += peopleInformation[i].numberOfChildren
        peopleInformation[i].salary > highestSalary ? highestSalary = peopleInformation[i].salary : highestSalary = highestSalary
        i++
    }
    console.log('Média de salário R$${(averageSalary / i).toFixed(0)}')
    console.log('Média de filhos ${(averageClildren / i).toFixed(0)}')
    console.log('Maior salário R$${highestSalary}')
}

  findAverageAndHighestSalary(people) 
  */