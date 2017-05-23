<template>
    <div>
        <div class="user-wrapper">
            <div class="user-avatar">
                <img :src="userInfo.avatar" alt="默认头像">
            </div>
            <div class="user-info">
                <p class="user-name">{{userInfo.name}}</p>
                <p class="user-coin">硬币：{{userInfo.coin}}</p>
            </div>
        </div>
        <div class="act-wrapper">
            <ul>
                <li v-if="isLogin">
                    <router-link to="/fav" class="act-item">
                        <span class="act-name">我的收藏</span>
                    </router-link>
                </li>
                <li v-if="isLogin">
                    <router-link to="/video" class="act-item">
                        <span class="act-name">我的投稿</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/history" class="act-item">
                        <span class="act-name">历史记录</span>
                    </router-link>
                </li>
            </ul>
            <p class="act-tooltip">登录后可以同步播放记录哦~</p>
        </div>
        <div class="account-wrapper">
            <template v-if="isLogin">
                <a class="account-btn" @click="logout">退出登录</a>
            </template>
            <template v-else>
                <router-link to="/login" class="account-btn account-login">登录</router-link>
                <router-link to="/register" class="account-btn account-register">注册</router-link>
                <p class="reg-tooltip">据说客户端答题可以减少答题哟~</p>
            </template>
        </div>
    </div>
</template>

<script lang="ts" src="./space.ts"></script>

<style lang="scss">
.user-wrapper {
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
        .user-name {
            font-size: 16px;
            color: #444;
            font-weight: 700;
        }
        .user-coin {
            color: #444;
            font-size: 12px;
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
    .account-register {
        color: #de698c;
        margin: 0;
    }
}

.act-wrapper .act-tooltip,
.account-wrapper .reg-tooltip {
    text-align: center;
    color: #999;
    font-size: 14px;
    margin: 0;
    padding: 0.625rem 0;
}
</style>
