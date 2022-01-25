// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

let app = new Vue({
    el      : "#app",
    data    :{
        emails : [],
    },
    mounted : function(){
            for (let i = 0; i < 10; i++){
            axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
            .then((risposta) => {
                this.emails.push(risposta.data.response)
                console.log(this.emails);
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    },
})

/*
    methods:{
        creaEmail : function(){
                for (let i = 0; i < 10; i++){
                axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
                .then((risposta) => {
                    this.emails.push(risposta.data.response)
                    console.log(this.emails);
                })
                .catch(function (error) {
                    console.log(error);
                })
            }
        }
    }
*/