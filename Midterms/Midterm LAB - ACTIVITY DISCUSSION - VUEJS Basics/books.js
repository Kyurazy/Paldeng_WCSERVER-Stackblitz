const books = Vue.createApp({
    data(){
        return{
            showBooks: true,
            btitle: 'The Ledger',
            bauthor: 'Joseph Esquivel',
            year: 2000
        }
    },
    methods:{
        toggleShowBooks(){
            this.showBooks=!this.showBooks
        }
    }
});
books.mount('#books')