var userArr = [
    {username: 'Jan Kowalski', birthYear: 1983, salary: 4200},
    {username: 'Anna Nowak', birthYear: 1994, salary: 7500},
    {username: 'Jakub Jakubowski', birthYear: 1983, salary: 18000},
    {username: 'Piotr Kozak', birthYear: 2000, salary: 4999},
    {username: 'Marek Sinica', birthYear: 1989, salary: 7200},
    {username: 'Kamila Wiśniewska', birthYear: 1972, salary: 6800},
]
function welcomeUsers(){


const year = 2022

for(let i=0; i<userArr.length;i++)
{
    obliczony_wiek_rocznikowy=year-userArr[i].birthYear
    if (userArr[i].salary > 15000) {
        console.log(`Witaj, prezesie!`)
    } else if (userArr[i].salary < 5000)
    {
        console.log(`${userArr[i].username}, szykuj się na podwyżkę!`)
    }
    else if (userArr[i].birthYear % 2 == 0 )
    {
        console.log(`Witaj, ${userArr[i].username}! W tym roku kończysz ${obliczony_wiek_rocznikowy} lat!`)
    }
    else if (userArr[i].birthYear % 1 == 0 && userArr[i].birthYear % 2 != 0 )
    {
        console.log(`${userArr[i].username}, jesteś zwolniony!`)
    }
}}
welcomeUsers()
