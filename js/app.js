console.log('Harry Potter Trivia Game')

const questions = [
    {
        name: 'What did Harry take to allow him to breathe underwater?',
        ansA: {answer: 'Strangler Fig', veracity: false},
        ansB: {answer: 'Dragon\'s Blood Tree', veracity: false},
        ansC: {answer: 'Deadly Nightshade', veracity: false},
        ansD: {answer: 'Gillyweed', veracity: true}
    },
    {
        name: 'What is Harry\'s biggest fear?',
        ansA: {answer: 'Dementors', veracity: true},
        ansB: {answer: 'Boggarts', veracity: false},
        ansC: {answer: 'Voldemort', veracity: false},
        ansD: {answer: 'Snape', veracity: false}
    },
    {
        name: 'What magical charm did Hermione use to help her finish all her homework?',
        ansA: {answer: 'Mermaid Tears', veracity: false},
        ansB: {answer: 'Magical Ink', veracity: false},
        ansC: {answer: 'Time Turner', veracity: true},
        ansD: {answer: 'Phoenix Feather', veracity: false}
    },
    // {
    //     name: 'Who gave Harry the Cloak of Invisibility?',
    //     ansA: 'Sirius',
    //     //ansTrue: 'Dumbledore',
    //     ansB: 'Dumbledore',
    //     ansC: 'McGonagall',
    //     ansD: 'Ron'
    // },
    // {
    //     name: 'What is the name of Hagrid\'s boar-hound?',
    //     ansA: 'Buddy',
    //     ansB: 'Brutus',
    //     //ansTrue: 'Fang',
    //     ansC: 'Fang',
    //     ansD: 'Max'
    // },
    // {
    //     name: 'Which professor had Harry write \"I must not tell lies\" over and over again?',
    //     //ansTrue: 'Umbridge',
    //     ansA: 'Umbridge',
    //     ansB: 'Snape',
    //     ansC: 'Quirrel',
    //     ansD: 'Moody'
    // },
    // {
    //     name: 'What did Harry see in the Mirror of Erised?',
    //     //ansTrue: 'His parents smiling',
    //     ansA: 'His parents smiling',
    //     ansB: 'Becoming a prefect',
    //     ansC: 'Cho kissing him',
    //     ansD: 'Becoming quidditch team captain'
    // },
    // {
    //     name: 'What chess piece did Ron play in wizard\s chess?',
    //     ansA: 'A pawn',
    //     //ansTrue: 'A knight',
    //     ansB: 'A knight',
    //     ansC: 'A bishop',
    //     ansD: 'A rook'
    // },
    // {
    //     name: 'What did Mrs. Weasley give Harry for Christmas?',
    //     ansA: 'A book on wizardry',
    //     ansB: 'A pair of pajamas',
    //     ansC: 'Some bronze knuts',
    //     //ansTrue: 'A green sweater'
    //     ansD: 'A green sweater'
    // },
    // {
    //     name: 'What is the number of London King\'s Cross Station Platform where the Hogwarts Express departs?',
    //     ansA: '13-1/2',
    //     ansB: '7-2/3',
    //     ansC: '8-1/3',
    //     //ansTrue: '9-3/4'
    //     ansD: '9-3/4'
    // },

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
    $button.text(questions[i].ansA.answer)
    $('body').append($button)

    // const $h3 = $('<h3>')
    // $h3.text(questions[i].ansB)

    // $('body').append($h3)

    const $button1 = $('<button>')
    $button1.text(questions[i].ansB.answer)
    $('body').append($button1)    

    // const $h4 = $('<h4>')
    // $h4.text(questions[i].ansC)

    // $('body').append($h4)

    const $button2 = $('<button>')
    $button2.text(questions[i].ansC.answer)
    $('body').append($button2)

    // const $h5 = $('<h5>')
    // $h5.text(questions[i].ansD)

    // $('body').append($h5)

    const $button3 = $('<button>')
    $button3.text(questions[i].ansD.answer)
    $('body').append($button3)

    let numRight = 0
    let numWrong = 0

    $button.on('click' , () => {
        if (questions[i].ansA.veracity == true) {
        window.alert('That is the right answer!')
        $('.number_right').empty()
        numRight = numRight + 1
        $('.number_right').append(numRight)
        } else {
        window.alert('That is the wrong answer!')
        $('.number_wrong').empty()
        numWrong = numWrong + 1
        $('.number_wrong').append(numWrong) 
        }
    })

    $button1.on('click' , () => {
        if (questions[i].ansB.veracity == true) {
        window.alert('That is the right answer!')
        $('.number_right').empty()
        numRight = numRight + 1
        $('.number_right').append(numRight)
        } else {
        window.alert('That is the wrong answer!')
        $('.number_wrong').empty()
        numWrong = numWrong + 1
        $('.number_wrong').append(numWrong)
        }
    })

    $button2.on('click' , () => {
        if (questions[i].ansC.veracity == true) {
        window.alert('That is the right answer!')
        } else {
        window.alert('That is the wrong answer!')
        }
    })

    $button3.on('click' , () => {
        if (questions[i].ansD.veracity == true) {
        window.alert('That is the right answer!')
        } else {
        window.alert('That is the wrong answer!')
        }
    })

    // $button1.on('click' , () => {
    //     window.alert('That is the wrong answer!')
    // })

    // $button2.on('click' , () => {
    //     window.alert('That is the wrong answer!')
    // })

    // $button3.on('click' , () => {
    //     window.alert('That is the wrong answer!')
    // })

}

// const $button = $('<button>')
//     $button.text('Reset')
//     $('body').append($button)



//Next Steps
// Show the h1 on the window
// Hint: Use the jQuery method .append()
// Create the buttons for the answers and show them on the window

//Next Step
//When the buttons are clicked
//Display "That is the wrong answer!"

//Next Step
//Make a reset button
//I have made the reset button, but it is not displaying where I want it to 
//I need to make a div and append the button to the div

//Questions
//How do I get only one question to display on the window at a time?
//How do I get the right answer in each instance?
//How do I get the reset button to start the game over?
//How do I keep score?



