<template>
    <nav v-if="isHidden" class="navbar navbar-expand-lg navbar-light stroke">
        <div class="container-fluid h-100">

            <a class="navbar-logo h-100" href="#landingpage" v-on:click="isHidden = false;">
                <img src="../assets/logo.png" alt="avatar" class="mh-100" />
            </a>

            <div class="collapse navbar-collapse justify-content-center">
                <ul class="navbar-nav">
                    <li class="nav-item me-5">
                        <h4 class="m-0 numberOfPairs">{{ counterPaired / 2 }} / {{ numberOfPairs }}</h4>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div v-if="!isHidden" class="container-fluid" id="landingpage">
        <div class="row justify-content-center section-height">
            <div class="col-12 first-container">
                <div class="row bg-container">
                    <div class="col-6 bgLeft"></div>
                    <div class="col-6 bgRight"></div>
                </div>
            </div>
            <div
                class="col-md-8 col-10 image-container d-flex flex-column align-items-center justify-content-center text-center">
                <img :src="picture" class="rounded-circle img-fluid rounded-circle-image" id="startPicture"
                    alt="startPicture" />
                <div class="mt-50">
                    <h1 class="startPageHeading">{{ name }}</h1>
                    <h3 class="startPageHeading">E-Mail: {{ email }}</h3>
                    <button class="btn btn-lg btn-dark" v-on:click="isHidden = true; startMemory();">Memory starten</button>
                </div>
            </div>
        </div>
    </div>

    <div v-if="isHidden" id="startGame" class="container-fluid">

        <div class="row align-items-center">
            <div v-for="card in cardsList" :key="card.id" class="col-4 col-md-3 col-xl-2">
                <div class="d-block my-2" :class="{ 'matchOpacity': card.paired }" @click="memoryClick(card)"
                    style="object-fit: fill; ">
                    <img :src="card.currentPicture" class="img-fluid">
                </div>
            </div>

            <div id="overlay" :style="[gameFinished ? { 'display': 'block' } : { 'display': 'none' }]">
                <div class="pyro">
                    <div class="before"></div>
                    <div class="after"></div>
                </div>
                <div id="overlayContent">
                    <h1>Gewonnen!</h1>
                    <button class="btn btn-lg btn-dark" v-on:click="isHidden = true; startMemory();">Erneut spielen</button>
                </div>
            </div>
        </div>

    </div>
</template>
  
<script>

import '@/scss/startPage.scss';
import '@/scss/styles.scss';
import '@/scss/firework.scss';
import '@/scss/navbar.scss';

export default {
    data() {
        return {
            name: 'Mandy Lewerenz',
            email: 'mandy.lwrz@gmail.com',
            picture: require('@/assets/bewerbungsbild2.jpg'),
            isHidden: false,
            cardsList: [
                {
                    id: 1,
                    name: 'dackel',
                    paired: false,
                    turned: false,
                    frontPicture: require('@/assets/dackel.png'),
                    currentPicture: null,
                },
                {
                    id: 2,
                    name: 'dackel',
                    paired: false,
                    turned: false,
                    frontPicture: require('@/assets/dackel.png'),
                    currentPicture: null,
                },
                {
                    id: 3,
                    name: 'bubbleTea',
                    paired: false,
                    turned: false,
                    frontPicture: require('@/assets/bubbleTea.png'),
                    currentPicture: null,
                },
                {
                    id: 4,
                    name: 'bubbleTea',
                    paired: false,
                    turned: false,
                    frontPicture: require('@/assets/bubbleTea.png'),
                    currentPicture: null,
                },
                {
                    id: 5,
                    name: 'ramen',
                    paired: false,
                    turned: false,
                    frontPicture: require('@/assets/ramen.png'),
                    currentPicture: null,
                },
                {
                    id: 6,
                    name: 'ramen',
                    paired: false,
                    turned: false,
                    frontPicture: require('@/assets/ramen.png'),
                    currentPicture: null,
                },
                {
                    id: 7,
                    name: 'code',
                    paired: false,
                    turned: false,
                    frontPicture: require('@/assets/code.png'),
                    currentPicture: null,
                },
                {
                    id: 8,
                    name: 'code',
                    paired: false,
                    turned: false,
                    frontPicture: require('@/assets/code.png'),
                    currentPicture: null,
                },
                {
                    id: 9,
                    name: 'aquarius',
                    paired: false,
                    turned: false,
                    frontPicture: require('@/assets/aquarius.png'),
                    currentPicture: null,
                },
                {
                    id: 10,
                    name: 'aquarius',
                    paired: false,
                    turned: false,
                    frontPicture: require('@/assets/aquarius.png'),
                    currentPicture: null,
                },
                {
                    id: 11,
                    name: 'gaming',
                    paired: false,
                    turned: false,
                    frontPicture: require('@/assets/gaming.png'),
                    currentPicture: null,
                },
                {
                    id: 12,
                    name: 'gaming',
                    paired: false,
                    turned: false,
                    frontPicture: require('@/assets/gaming.png'),
                    currentPicture: null,
                },
            ],
            backPicture: require('@/assets/memoryBack.png'),
            gameFinished: false,
            counterPaired: 0,
        }
    },
    methods: {
        memoryClick(selectedCard) {
            if (!selectedCard.paired) {
                selectedCard.currentPicture = selectedCard.frontPicture;
                selectedCard.turned = !selectedCard.turned;

                this.cardsList.forEach((card) => {
                    if (card.paired == false && card.turned == true && card.id != selectedCard.id) {
                        if (card.name == selectedCard.name) {
                            this.pairCards(selectedCard, card);
                        } else {
                            setTimeout(() => this.resetCards(selectedCard, card), 600);
                        }
                        this.updateCard(card);
                    }
                });
            }
        },
        updateCard(card) {
            if (card.turned == true) {
                card.currentPicture = card.frontPicture;
            } else {
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
    computed: {
        numberOfPairs() {
            return this.cardsList.length / 2;
        }
    }

};
</script>
  