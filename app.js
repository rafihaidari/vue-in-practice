Vue.createApp({
    data() {
        return {
            lists: [],
            getTask: '',
            siteLink: 'http://haidari.co',
            prTitle: '<h2>Task List</h2>',
            counter: 0,
            getName: '',
        }
    },
    methods: {
        addToList() {
            this.lists.push(this.getTask);
            this.getTask = '';
        },
        projectTitle() {
            return this.prTitle
        },
        add() {
            this.counter++
        },
        reduce() {
            this.counter--
        },
        getSetName() {
            return this.getName
        }

    }
}).mount('#app')