function findMovies(favoriteGenre) {
    const movies = [
        {
            id: 1,
            name: 'Avengers end game',
            genre: 'Action',
            soldTicket: 149,
            capacity: 150
        },
        {
            id: 2,
            name: 'La la Land',
            genre: 'Romance',
            soldTicket: 20,
            capacity: 75
        },
        {
            id: 3,
            name: 'Beauty and the Beast',
            genre: 'Romance',
            soldTicket: 50,
            capacity: 50
        },
        {
            id: 4,
            name: 'Superman vs Batman',
            genre: 'Action',
            soldTicket: 150,
            capacity: 250
        },
        {
            id: 5,
            name: 'Transformer',
            genre: 'Action',
            soldTicket: 90,
            capacity: 90
        },
        {
            id: 6,
            name: '5 feet apart',
            genre: 'Romance',
            soldTicket: 25,
            capacity: 45
        },
        {
            id: 7,
            name: 'Hamilton',
            genre: 'Musical',
            soldTicket: 295,
            capacity: 300
        },
        {
            id: 8,
            name: 'Dear Evan Hansen',
            genre: 'Musical',
            soldTicket: 150,
            capacity: 200
        },
        {
            id: 9,
            name: 'Conjuring',
            genre: 'Horror',
            soldTicket: 30,
            capacity: 100
        },
        {
            id: 10,
            name: 'Annabelle',
            genre: 'Horror',
            soldTicket: 10,
            capacity: 30
        },
        {
            id: 11,
            name: 'Fast and Furios',
            genre: 'Action',
            soldTicket: 25,
            capacity: 40
        },
        {
            id: 12,
            name: 'Romeo and Julet',
            genre: 'Romance',
            soldTicket: 15,
            capacity: 15
        },
        {
            id: 13,
            name: 'Wicked',
            genre: 'Musical',
            soldTicket: 75,
            capacity: 75
        }
    ]

    let favoriteArr = []
    for(let i = 0; i <favoriteGenre.length; i++){
        movies.forEach(value => {
            if (favoriteGenre[i] == value.genre){
                favoriteArr.push(value)
            }
        });
    }
    return favoriteArr
}

function findTicketAvailability(movie, user) {
    if (movie.capacity - movie.soldTicket >= user.ticket){
        return true
    } else{
        return false
    }
}

function findRecommendation(user) {
    let containerRecom = []
    let moviesRecom = findMovies(user.favoriteGenre)
    moviesRecom.forEach(value => {
        if (findTicketAvailability(value, user)){
            containerRecom.push({id: value.id, name: value.name, genre: value.genre, soldTicket: value.soldTicket, capacity: value.capacity})
        }
    });
    return containerRecom
}

function generateRecommendation(user) {
    let priceEach = []
    containerRecom = findRecommendation(user)
    if (containerRecom.length >0){
        containerRecom.forEach(value => {
            if (value.genre == 'Action'){
                priceEach.push({id: value.id, name: value.name, genre: value.genre, totalPrice: user.ticket*100000})
            } else if (value.genre == 'Musical'){
                priceEach.push({id: value.id, name: value.name, genre: value.genre, totalPrice: user.ticket*80000})
            } else if (value.genre == 'Romance'){
                priceEach.push({id: value.id, name: value.name, genre: value.genre, totalPrice: user.ticket*40000})
            } else if (value.genre == 'Horror'){
                priceEach.push({id: value.id, name: value.name, genre: value.genre, totalPrice: user.ticket*75000})
            }
        });
        return priceEach
    } else {
        return `Tidak ada film yang sesuai kriteria`
    }
}

let user1 = {
    name: 'Aditira',
    ticket: 1,
    favoriteGenre: ['Action', 'Musical', 'Romance', 'Horror']
}

let user2 = {
    name: 'Eddy',
    ticket: 20,
    favoriteGenre: ['Musical', 'Romance']
}

let user3 = {
    name: 'Afis',
    ticket: 1,
    favoriteGenre: ['Sci Fi', 'Documentary', 'Thriller']
}

console.log(generateRecommendation(user1))
console.log(generateRecommendation(user2))
console.log(generateRecommendation(user3))

module.exports = {
    findMovies,
    findTicketAvailability,
    findRecommendation,
    generateRecommendation
}
