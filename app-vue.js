const app = Vue.createApp({
    data() {
        return {
            message: 'Piano en Vue 😆',
            btns: [
                {title: "DO", nota:"DO" },
                {title: "RE", nota:"RE" },
                {title: "MI", nota:"MI" },
                {title: "FA", nota:"FA" },
                {title: "SOL", nota:"SOL" },
                {title: "LA", nota:"LA" },
                {title: "SI", nota:"SI" }
            ]
        }
    },
    methods: {
        play( e, nota) {
            console.log(nota)
            const audio = new Audio(`/notas-musicales/${nota}.wav`)
            audio.pause()
            audio.currentTime = 0
            audio.play()
        },
        kplay(e) {
            const notasKey = {
                1: 'DO',
                2: 'RE',
                3: 'MI',
                4: 'FA',
                5: 'SOL',
                6: 'LA',
                7: 'SI'
            }
            const audio = new Audio(`/notas-musicales/${notasKey[e.key]}.wav`)
            audio.pause()
            audio.currentTime = 0
            audio.play()
        }
    },
    template: `<h1> {{ message }}</h1>
    <button v-for="btn in btns" @click="play($event, btn.title)" @keyup="kplay($event)">{{ btn.title}} 🎹</button>`
})

const mountedApp = app.mount('#app')