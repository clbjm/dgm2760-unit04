function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) +min;
}
function getMonthName(month) {
    let name
    switch (month) {
        case 1:
            name = "January"
            break
            case 2:
                name = "febuary"
                break
                case 3:
                name = "march"
                break
                case 4:
                name = "april"
                break
                case 5:
                name = "may"
                break
                case 6:
                name = "june"
                break
                case 7:
                name = "july"
                break
                case 8:
                name = "august"
                break
                case 9:
                name = "september"
                break
                case 10:
                name = "october"
                break
                case 11:
                name = "november"
                break
                case 12:
                name = "december"
                break
                default:
                    name = "not a month"
                    break
    }
    return name
}
function getFortune(fate) {
    let message
    switch (fate) {
        case 1:
            message = 'be feartured as the strongest superhero in the next marvel movie!'
            break
            case 2:
        message = 'win millions of dollars from a long lost uncle in nigeria'
            break
              case 3:
        message = 'you will find what you are looking for'
            break
            case 4:
        message = 'you will lose what you chairsh most'
            break
            case 5:
        message = 'you will be promoted at work'
            break
            default:
                message = 'some sort of error occured'
                break;
    }
return message
}
let day = getRandomIntInclusive(1, 30)
let month = getRandomIntInclusive(1, 12)
let fate = getRandomIntInclusive(1, 5)
const monthName = getMonthName(month)
const fatemessage = getFortune(fate)
const fortuneReviled = `On ${monthName} ${day} you will ${fatemessage}`
document.querySelector('#fortune').innerText = fortuneReviled
