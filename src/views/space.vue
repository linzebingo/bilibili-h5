<template>
    <div>
        <div class="user-wrapper">
            <div class="user-avatar">
                <img src="http://static.hdslb.com/mobile/img/default_avatar.png" alt="默认头像">
            </div>
            <div class="user-info">
                <p class="user-name">游客</p>
                <p class="user-coin">硬币：-</p>
            </div>
        </div>
        <div class="act-wrapper">
            
        </div>
        <div class="account-wrapper">

        </div>
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
}
</style>