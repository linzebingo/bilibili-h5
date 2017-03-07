import * as Vue from 'vue'
import Component from 'vue-class-component'
import Hello from 'components/Hello.vue'


@Component
export default class App extends Vue {
    message = 'Vue.js and TypeScript template! '
}
