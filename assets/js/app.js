const { createApp } = Vue

createApp({
    data() {
        return {
            booleanAPI: 'https://flynn.boolean.careers/exercises/api/random/mail',
            emailList: [],
        }
    },
    methods: {
        // Print a List of 10 email addresses in console
        emailApiCall() {
            for (let i = 0; i < 10; i++) {
                axios.get(this.booleanAPI).then((response) => {
                    this.emailList.push(response.data)
                    console.log("single email list:", this.emailList)
                });
            }
            setTimeout(() => console.log("total email list:", this.emailList), 1 * 2000);
        }
    },
    mounted() {
        console.log("Hello from VueJS 👋")
        this.emailApiCall()
    }
}).mount('#app')