let appNote = {
    data() {
        return {
            title: 'Список справ',
            note: '',
            noteArr: [],
        }
    },
    methods: {
        addNote() {
            if (this.note != '') {
                this.noteArr.push(this.note);
                localStorage.setItem('notes', JSON.stringify(this.noteArr))
                this.note = ''
            }
            else {
                alert('Пусті справи не додаються!')
            }
            console.log(this.noteArr);
        },
        DelNotes(i) {
            this.noteArr.splice(i,1)
            localStorage.setItem('notes', JSON.stringify(this.noteArr))
        }
    },
    mounted() {
        if (localStorage.getItem('notes')!= null){
            this.noteArr = JSON.parse(localStorage.getItem('notes'));
        }
    },

}
Vue.createApp(appNote).mount('#veu-note');
