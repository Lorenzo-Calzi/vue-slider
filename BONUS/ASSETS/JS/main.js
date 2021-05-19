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

        selectImage(index){
            return this.counter = index;
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

        setInterval(this.next, 5000);
    }
})