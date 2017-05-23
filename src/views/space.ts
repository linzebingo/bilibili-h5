import * as Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'

@Component
export default class Space extends Vue {
    @State('userInfo') userInfo
    @State(state => !!state.token) isLogin: boolean
    @Action('LOG_OUT') logout

}
