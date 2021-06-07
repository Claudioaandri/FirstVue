
let vm = new Vue({
    el: '#app',
    data: {
        success: false,
        message: ""
    },

    methods: {
        cls: ()=> {
            return this.success = (success === true) ? 'success' : ' error'
            
        }
    },
})



//MOUNTED AND DESTROY METHODS
// let vm = new Vue({
//     el: '#app',
    
//     data: {
//        seconds: 0
//     },

//     mounted: function(){

//         this.$interval = setInterval(() => {
//             this.seconds++
//             console.log("Time");
            
//         }, 1000)
//     },
//     destroy: function(){
//         clearInterval(this.setInterval)
//     }
// })