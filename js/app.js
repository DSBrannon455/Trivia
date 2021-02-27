console.log('Harry Potter Trivia Game')

const questions = [
    {
        name: 'What did Harry take to allow him to breathe underwater?',
        ansA: 'Strangler Fig',
        ansB: 'Dragon\'s Blood Tree',
        ansC: 'Deadly Nightshade',
        //ansTrue: 'Gillyweed'
        ansD: 'Gillyweed'
    },
    {
        name: 'What is Harry\'s biggest fear?',
        //ansTrue: 'Dementors',
        ansA: 'Dementors',
        ansB: 'Boggarts',
        ansC: 'Voldemort',
        ansD: 'Snape'
    },
    {
        name: 'What magical charm did Hermione use to help her finish all her homework?',
        ansA: 'Mermaid Tears',
        ansB: 'Magical Ink',
        //ansTrue: 'Time Turner',
        ansC: 'Time Turner',
        ansD: 'Phoenix Feather'
    },
    {
        name: 'Who gave Harry the Cloak of Invisibility?',
        ansA: 'Sirius',
        //ansTrue: 'Dumbledore',
        ansB: 'Dumbledore',
        ansC: 'McGonagall',
        ansD: 'Ron'
    },
    {
        name: 'What is the name of Hagrid\'s boar-hound?',
        ansA: 'Buddy',
        ansB: 'Brutus',
        //ansTrue: 'Fang',
        ansC: 'Fang',
        ansD: 'Max'
    },
    {
        name: 'Which professor had Harry write \"I must not tell lies\" over and over again?',
        //ansTrue: 'Umbridge',
        ansA: 'Umbridge',
        ansB: 'Snape',
        ansC: 'Quirrel',
        ansD: 'Moody'
    },
    {
        name: 'What did Harry see in the Mirror of Erised?',
        //ansTrue: 'His parents smiling',
        ansA: 'His parents smiling',
        ansB: 'Becoming a prefect',
        ansC: 'Cho kissing him',
        ansD: 'Becoming quidditch team captain'
    },
    {
        name: 'What chess piece did Ron play in wizard\s chess?',
        ansA: 'A pawn',
        //ansTrue: 'A knight',
        ansB: 'A knight',
        ansC: 'A bishop',
        ansD: 'A rook'
    },
    {
        name: 'What did Mrs. Weasley give Harry for Christmas?',
        ansA: 'A book on wizardry',
        ansB: 'A pair of pajamas',
        ansC: 'Some bronze knuts',
        //ansTrue: 'A green sweater'
        ansD: 'A green sweater'
    },
    {
        name: 'What is the number of London King\'s Cross Station Platform where the Hogwarts Express departs?',
        ansA: '13-1/2',
        ansB: '7-2/3',
        ansC: '8-1/3',
        //ansTrue: '9-3/4'
        ansD: '9-3/4'
    },

]

console.log(questions)

for (let i = 0; i < questions.length; i++) {
    console.log(questions[i].name)
    
    const $h1 = $('<h1>')
    $h1.text(questions[i].name)

    
    console.log($h1)

    $('body').append($h1)

    // const $h2 = $('<h2>')
    // $h2.text(questions[i].ansA)

    // console.log($h2)

    // $('body').append($h2)

    const $button = $('<button>')
    $button.text(questions[i].ansA)
    $('body').append($button)

    // const $h3 = $('<h3>')
    // $h3.text(questions[i].ansB)

    // $('body').append($h3)

    const $button1 = $('<button>')
    $button1.text(questions[i].ansB)
    $('body').append($button1)    

    // const $h4 = $('<h4>')
    // $h4.text(questions[i].ansC)

    // $('body').append($h4)

    const $button2 = $('<button>')
    $button2.text(questions[i].ansC)
    $('body').append($button2)

    // const $h5 = $('<h5>')
    // $h5.text(questions[i].ansD)

    // $('body').append($h5)

    const $button3 = $('<button>')
    $button3.text(questions[i].ansD)
    $('body').append($button3)


}

//Next Steps
// Show the h1 on the window
// Hint: Use the jQuery method .append()
// Create the buttons for the answers and show them on the window


