<template>
    <div>
        <div class="user-wrapper">
            <div class="user-avatar">
                <img src="http://static.hdslb.com/mobile/img/default_avatar.png" alt="默认头像">
            </div>
            <div class="user-info">
                <p class="user-name">游客</p>
                <p class="user-coin">硬币：260</p>
            </div>
        </div>
        <div class="act-wrapper">
            <ul>
                <li><router-link to="/fav" class="act-item"><span class="act-name">我的收藏</span></router-link></li>
                <li><router-link to="/video" class="act-item"><span class="act-name">我的投稿</span></router-link></li>
                <li><router-link to="/history" class="act-item"><span class="act-name">历史记录</span></router-link></li>
            </ul>
        </div>
        <div class="account-wrapper">
            <router-link to="/login" class="account-btn">退出登录</router-link>
        </div>
        <footer>
            <p class="clearfix">
                <router-link to="" id="change_to_computer" class="bottom-btn"><span>电脑版</span></router-link>
                <router-link to="" id="link_to_app" class="bottom-btn"><span>客户端</span></router-link>
                <router-link to="" id="back_to_top" class="bottom-btn"><span>返回顶部</span></router-link>
            </p>
            <p>哔哩哔哩 沪ICP备13002172号-3</p>
            <p>信息网络传播视听节目许可证：<span>0910417</span></p>
        </footer>
    </div>
</template>

<script lang="ts">
import * as Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Space extends Vue {

}
</script>

<style lang="scss">
.user-wrapper{
    height: 88px;
    background-color: #fff;
    border-top: 1px solid #e7e7e7;
    border-bottom: 1px solid #e7e7e7;
    padding: 0 18px;
    margin: 17px 0;
    display: flex;
    align-items: center;
    .user-avatar {
        width: 60px;
        height: 60px;
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
    .user-info {
        height: 60px;
        padding: 0 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        p {
            margin: 0;
            width: 100%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    }
}

.act-wrapper {
    margin-bottom: 28px;
    .act-item {
        display: flex;
        align-items: center;
        height: 44px;
        padding: 0 18px;
        border-bottom: 1px solid #e7e7e7;
        background-color: #fff;
        .act-name {
            flex: 1;
            padding-left: 10px;
            color: #444;
            font-size: 18px;
        }
    }
}

.account-wrapper {
    .account-btn {
        display: block;
        height: 44px;
        line-height: 44px;
        background-color: #fff;
        border-bottom: 1px solid #e7e7e7;
        color: #444;
        text-align: center;
        margin-bottom: 10px;
    }
}

footer {
    color: #aaa;
    clear: both;
    padding: 0 10px;
    font-size: 13px;
    text-align: center;
    a {
        vertical-align: middle;
    }
}
.bottom-btn {
    border-right: 1px solid #ddd;
    height: 20px;
    line-height: 20px;
    width: 33%;
    box-sizing: border-box;
    float: left;
    display: inline-block;
    color: #666;
    vertical-align: middle;
}
</style>
