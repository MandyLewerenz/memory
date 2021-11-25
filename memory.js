const memoryCards = Vue.createApp({
    data() {
        return {

            cardsList: [
                {
                    id: 1,
                    name: 'SQL',
                    paired: false,
                    turned: false,
                    frontPicture: 'pictures\\memorySQL.png',
                    currentPicture: null,
                },
                {
                    id: 2,
                    name: 'SQL',
                    paired: false,
                    turned: false,
                    frontPicture: 'pictures\\memorySQL.png',
                    currentPicture: null,
                },
                {
                    id: 3,
                    name: 'PHP',
                    paired: false,
                    turned: false,
                    frontPicture: 'pictures\\memoryPHP.png',
                    currentPicture: null,
                },
                {
                    id: 4,
                    name: 'PHP',
                    paired: false,
                    turned: false,
                    frontPicture: 'pictures\\memoryPHP.png',
                    currentPicture: null,
                },
                {
                    id: 5,
                    name: 'HTML',
                    paired: false,
                    turned: false,
                    frontPicture: 'pictures\\hc.png',
                    currentPicture: null,
                },
                {
                    id: 6,
                    name: 'HTML',
                    paired: false,
                    turned: false,
                    frontPicture: 'pictures\\hc.png',
                    currentPicture: null,
                },
                {
                    id: 7,
                    name: 'JS',
                    paired: false,
                    turned: false,
                    frontPicture: 'pictures\\js.png',
                    currentPicture: null,
                },
                {
                    id: 8,
                    name: 'JS',
                    paired: false,
                    turned: false,
                    frontPicture: 'pictures\\js.png',
                    currentPicture: null,
                },
            ],
            backPicture: 'pictures\\memoryBack.png',
            gameFinished: false,
            counterPaired: 0,
            isHidden: false,
            firstName: 'Mandy',
            lastName: 'Lewerenz',
            email: 'mandy.lwrz@gmail.com',
            picture: 'pictures\\bewerbungsbild.jpg',
        }
    },
    methods: {
        memoryClick(selectedCard) {
            selectedCard.currentPicture = selectedCard.frontPicture;
            selectedCard.turned = !selectedCard.turned;

            this.cardsList.forEach((card) => {
                if (card.paired == false && card.turned == true && card.id != selectedCard.id) {
                    if (card.name == selectedCard.name) {
                        this.pairCards(selectedCard, card);
                    } else {
                        setTimeout(() => this.resetCards(selectedCard, card), 600);
                    }
                    updateCard(card);
                }
            });
        },


        updateCard(card) {
            if(card.turned == true){
                card.currentPicture = card.frontPicture;
            }else{
                card.currentPicture = this.backPicture;
            }
        },

        pairCards(cardOne, cardTwo) {
            cardOne.paired = true;
            cardTwo.paired = true;
            this.counterPaired = this.counterPaired + 2;
            if (this.counterPaired == this.cardsList.length) {
                this.gameFinished = true;
            }
            cardTwo.currentPicture = cardTwo.frontPicture;
            cardOne.currentPicture = cardOne.frontPicture;
        },

        resetCards(cardOne, cardTwo) {
            cardOne.turned = false;
            cardTwo.turned = false;
            cardTwo.currentPicture = this.backPicture;
            cardOne.currentPicture = this.backPicture;
        },

        startMemory() {
            this.cardsList.sort(() => Math.random() - 0.5);
            this.cardsList.forEach((card) => {
                card.currentPicture = this.backPicture;
                card.paired = false;
                card.turned = false;
            });
            this.gameFinished = false;
            this.counterPaired = 0;
        },
    },
})

memoryCards.mount('#memory');



