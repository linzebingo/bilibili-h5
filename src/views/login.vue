<template>
    <div id="login-app">
        <div class="form-login">
            <ul>
                <li class="item username">
                    <div class="input-wrp">
                        <input type="text" placeholder="你的手机号/邮箱" v-model="loginForm.username" id="login-username" maxlength="50" autocomplete="off">
                    </div>
                    <div class="text clearfix">
                        <p class="tips"></p>
                    </div>
                </li>
                <li class="item password">
                    <div class="input-wrp">
                        <input type="text" placeholder="密码" v-model="loginForm.password" id="login-passwd">
                    </div>
                    <div class="text clearfix">
                        <p class="tips"></p>
                        <a class="forget-password" @click="resetpwd()">忘记密码? ></a>
                    </div>
                </li>
                <li class="item vdcode">
                    <div class="input-wrp">
                        <input type="text" placeholder="验证码" @keydown.enter="login()">
                        <img :src="captchaURL" alt="点击刷新" @click="updateCaptcha()" class="captcha">
                    </div>
                    <div class="text clearfix">
                        <p class="tips">{{error}}</p>
                        <p class="tips"></p>
                    </div>
                </li>
                <li class="btn-box">
                    <a class="btn btn-login" @click="login()">立即登录</a>
                    <a class="btn btn-reg" @click="reg()">注册</a>
                </li>
                <li class="sns">
                    <div class="splitter">
                        <span class="title">第三方合作网站登录</span>
                    </div>
                    <a class="btn weibo">weibo</a>
                    <a class="btn qq">qq</a>
                </li>
            </ul>
        </div>
    </div>
</template>


<script lang="ts" src="./login.ts"></script>

<style lang="scss">
.form-login {
    padding: 15px;
    .item {
        .input-wrp {
            border-radius: 6px;
            margin-bottom: 10px;
            background: #fff;
            width: 100%;
            border: 1px solid #ddd;
            height: 45px;
            line-height: 45px;
            overflow: hidden;
            box-sizing: border-box;
            position: relative;
        }
        input {
            border-radius: 6px;
            width: 100%;
            box-sizing: border-box;
            font-size: 1rm;
            left: 0;
            top: 0;
            bottom: 0;
            padding: 10px;
            border: 0;
        }
        .text {
            .tips {
                float: left;
                padding: 0 0 8px 2px;
                color: #de698c;
            }
            .forget-password {
                float: right;
                padding: 0 0 8px 2px;
            }
        }
        .captcha {
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            max-width: 35%;
        }
    }

    .btn-box {
        .btn {
            display: block;
            border: 1px solid #00a1d6;
            text-align: center;
            box-sizing: border-box;
            width: 100%;
            border-radius: 32px;
            padding: 12px;
            margin-bottom: 10px;
            background: #fff;
            &.btn-login {
                background-color: #00a1d6;
                color: #fff;
            }
        }
    }

    .sns {
        position: relative;
        text-align: center;
        margin-top: 20px;
        padding-top: 50px;
        .splitter {
            border-top: 1px solid #999;
            top: 15px;
            left: 0;
            right: 0;
            position: absolute;
            .title {
                color: #999;
                position: absolute;
                left: 50%;
                margin-left: -25%;
                top: -15px;
                height: 30px;
                width: 50%;
                text-align: center;
                line-height: 30px;
                background: #f5f5f5;
            }
        }
        .btn {
            display: inline-block;
            width: 50px;
            height: 50px;
            padding: 0 5px;
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: 50px;
        }
    }
}
</style>

