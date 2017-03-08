import * as Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue {
    appload = false //结构页
    
    mounted(){
        this.appload = true
    }
}
