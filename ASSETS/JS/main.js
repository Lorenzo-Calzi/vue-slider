const app = new Vue({
    el: "#app",

    data: {
        counter: 0,
        images: [
            "https://www.celestron.it/wp-content/uploads/2018/02/mars.jpg",
            "https://www.uai.it/sito/wp-content/uploads/2021/02/perseverance.jpg",
            "https://www.astronautinews.it/wp-content/uploads/2021/03/Profile_of_the_Arsia_Mons_Elongated_Cloud.jpg",
            "https://www.asi.it/wp-content/uploads/2021/02/Perspective_view_of_Mars_north_polar_ice_cap_pillars.jpg",
        ]

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

        /* buttons(){
            if(this.button == first){
                console.log('eccolo' + this.button);  
            }


            console.log('Cliccato su buttons' + this.button)
            return this.counter = third;
            
        }, */

        first(){
            /* document.getElementById('first').insertAdjacentHTML('beforeend', `
            <div class="button">
                <style="color:red"></style=>
            </div>
            `)  */
            return this.counter = first;
            
        },

        second(){
            return this.counter = second;
        },

        third(){
            return this.counter = third;
        },

        fourth(){
            return this.counter = fourth;
        },

    },

    /* mounted(){
        alert('hello')
    } */
})



const first = document.getElementById("first").getAttribute('data-value');
console.log(first);

const second = document.getElementById("second").getAttribute('data-value');
console.log(second);

const third = document.getElementById("third").getAttribute('data-value');
console.log(third);

const fourth = document.getElementById("fourth").getAttribute('data-value');
console.log(fourth);




