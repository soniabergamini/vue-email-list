const { createApp } = Vue

createApp({
    data() {
        return {
            myString: "string",
        }
    },
    methods: {
        // Print a string in console
        test() {
            console.log(this.myString)
        }
    },
    mounted() {
        console.log("Hello from VueJS 👋")
    }
}).mount('#app')