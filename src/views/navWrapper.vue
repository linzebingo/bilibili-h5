<template>
<div>
    <div class="flex-bar main">
        <ul class="flex-bar-in">
            <router-link tag="li" to="/index" class="nav-item">
                <a title="首页">首页</a>
            </router-link>
            <router-link tag="li" to="/live" class="nav-item">
                <a title="直播">直播</a>
            </router-link>
            <router-link tag="li" to="/channel" class="nav-item">
                <a title="频道">频道</a>
            </router-link>
            <router-link tag="li" to="/ranking" class="nav-item">
                <a title="排行">排行</a>
            </router-link>
            <router-link tag="li" to="/space" class="nav-item">
                <a title="我的">我的</a>
            </router-link>
        </ul>
    </div>
    <router-view></router-view>
</div>
</template>