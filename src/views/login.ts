import * as Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({})
export default class Login extends Vue {
    loginForm = {
        username: '',
        password: '',
    };
    error = ''


    captchaURL = `https://passport.bilibili.com/captcha?r=${Math.random()}`


    login() {
        this.$store.dispatch('LOGIN_BY_PHONE', this.loginForm).then(() => {
            this.$router.push('/space')
            this.error = ''
        }).catch(err => {
            this.error = err
        })
    }

    reg() {
        this.$router.push('/register')
    }

    resetpwd() {
        this.$router.push('/resetpwd')
    }

    updateCaptcha(e: MouseEvent) {
        // (e.target as HTMLImageElement).src = this.getCaptchaURL()
        this.captchaURL = `https://passport.bilibili.com/captcha?r=${Math.random()}`
        return false;
    }
}
