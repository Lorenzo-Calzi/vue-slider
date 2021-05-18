const app = new Vue({
    el: "#app",

    data: {
        counter: 0,
        images: [
            "./IMG/Immagine_1.jpg",
            "./IMG/Immagine_2.jpg",
            "./IMG/Immagine_3.jpg",
            "./IMG/Immagine_4.jpg",
        ],

        color: 'blue'
    },

    methods: {
        prev(){
            console.log('Cliccato su prev');
            if(this.counter === 0) {
                return this.counter = this.images.length - 1;
            }
            return this.counter -= 1;
        },

        next(){
            console.log('Cliccato su next');
            if(this.counter === this.images.length - 1) {
                return this.counter = 0
            }
            return this.counter += 1;
        },

        first_button(){
            return this.counter = first;
        },

        second_button(){
            return this.counter = second;
        },

        third_button(){
            return this.counter = third;
        },

        fourth_button(){
            return this.counter = fourth;
        },

        changeColor() {
                if(this.color === 'blue') {
                    this.color = 'red'
                } else {
                    this.color = 'blue'
                }
            }
    },

     mounted(){
        document.addEventListener('keyup', (event) => {
            console.log(event.key)
            if(event.key == "ArrowLeft") {
                this.prev();
            } else if (event.key == "ArrowRight"){
                this.next();
            }
        })
    }
})


const first = document.getElementById("first").getAttribute('data-value');
console.log(first);

const second = document.getElementById("second").getAttribute('data-value');
console.log(second);

const third = document.getElementById("third").getAttribute('data-value');
console.log(third);

const fourth = document.getElementById("fourth").getAttribute('data-value');
console.log(fourth);




