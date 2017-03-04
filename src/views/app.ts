import { Vue, Component } from 'av-ts'
import Hello from 'components/Hello.vue'


@Component()
export default class App extends Vue {
    message = 'Vue.js and TypeScript template! '
}
