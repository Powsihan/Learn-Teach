document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'images/1.png'
    },
    {
      name: '2',
      img: 'images/3.png'
    },
    {
      name: '3',
      img: 'images/5.png'
    },
    {
      name: '4',
      img: 'images/7.png'
    },
    {
      name: '5',
      img: 'images/9.png'
    },
    {
      name: '6',
      img: 'images/11.png'
    },
    {
      name: '1',
      img: 'images/2.png'
    },
    {
      name: '2',
      img: 'images/4.png'
    },
    {
      name: '3',
      img: 'images/6.png'
    },
    {
      name: '4',
      img: 'images/8.png'
    },
    {
      name: '5',
      img: 'images/10.png'
    },
    {
      name: '6',
      img: 'images/12.png'
    },



    {
      name: '7',
      img: 'images/13.png'
    },
    {
      name: '8',
      img: 'images/15.png'
    },
    {
      name: '9',
      img: 'images/17.png'
    },
    {
      name: '10',
      img: 'images/19.png'
    },
    {
      name: '11',
      img: 'images/21.png'
    },
    {
      name: '12',
      img: 'images/23.png'
    },
    {
      name: '7',
      img: 'images/14.png'
    },
    {
      name: '8',
      img: 'images/16.png'
    },
    {
      name: '9',
      img: 'images/18.png'
    },
    {
      name: '10',
      img: 'images/20.png'
    },
    {
      name: '11',
      img: 'images/22.png'
    },
    {
      name: '12',
      img: 'images/24.png'
    },


    {
      name: '13',
      img: 'images/25.png'
    },
    {
      name: '14',
      img: 'images/27.png'
    },
    {
      name: '15',
      img: 'images/29.png'
    },
    {
      name: '16',
      img: 'images/31.png'
    },
    {
      name: '17',
      img: 'images/33.png'
    },
    {
      name: '18',
      img: 'images/35.png'
    },
    {
      name: '13',
      img: 'images/26.png'
    },
    {
      name: '14',
      img: 'images/28.png'
    },
    {
      name: '15',
      img: 'images/30.png'
    },
    {
      name: '16',
      img: 'images/32.png'
    },
    {
      name: '17',
      img: 'images/34.png'
    },
    {
      name: '18',
      img: 'images/36.png'
    },




    {
      name: '19',
      img: 'images/37.png'
    },
    {
      name: '20',
      img: 'images/39.png'
    },
    {
      name: '21',
      img: 'images/41.png'
    },
    {
      name: '22',
      img: 'images/43.png'
    },
    {
      name: '23',
      img: 'images/45.png'
    },
    {
      name: '24',
      img: 'images/47.png'
    },
    {
      name: '19',
      img: 'images/38.png'
    },
    {
      name: '20',
      img: 'images/40.png'
    },
    {
      name: '21',
      img: 'images/42.png'
    },
    {
      name: '22',
      img: 'images/44.png'
    },
    {
      name: '23',
      img: 'images/46.png'
    },
    {
      name: '24',
      img: 'images/48.png'
    },





    {
      name: '25',
      img: 'images/49.png'
    },
    {
      name: '26',
      img: 'images/51.png'
    },
    {
      name: '27',
      img: 'images/53.png'
    },
    {
      name: '28',
      img: 'images/55.png'
    },
    {
      name: '29',
      img: 'images/57.png'
    },
    {
      name: '30',
      img: 'images/59.png'
    },
    {
      name: '25',
      img: 'images/50.png'
    },
    {
      name: '26',
      img: 'images/52.png'
    },
    {
      name: '27',
      img: 'images/54.png'
    },
    {
      name: '28',
      img: 'images/56.png'
    },
    {
      name: '29',
      img: 'images/58.png'
    },
    {
      name: '30',
      img: 'images/60.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', cardArray[i].img)
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'You Cicked Same Image!',
        showConfirmButton: false,
        timer: 1500
      })
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'You Cicked Correct Image!',
        showConfirmButton: false,
        timer: 1500
      })
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'You Cicked Wrong Image!',
        showConfirmButton: false,
        timer: 1500
      })
    }
    
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
      Swal.fire({
        title: '<strong></strong>',
        imageUrl: 'cong.jpg',
        imageHeight: 200,
        html:
          '<b>You Won the Game!!!!</b>',
          showCloseButton: true,
         
         
          
          
        })
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
