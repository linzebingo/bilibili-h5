<template>
    <div>
        <div class="row-container" v-for="channel in channels">
            <router-link :to="channel.link" class="header">
                <div class="left">
                    <span :class="channel.icon"></span>
                    <span>{{channel.name}}</span>
                </div>
                <div class="right">
                    <span>查看更多更新</span>
                    <span></span>
                </div>
            </router-link>
            <div class="b-loading" v-if="loading">loading...</div>
            <div class="b-loading" v-if="!loading && !showError && channel.items && channel.items.length === 0"></div>
            <ul class="content-wrapper" v-if="!loading && !showError && channel.items && channel.items.length > 0">
                <li class="content-list" v-for="item in channel.items">
                    <router-link :to="item.link" class="item">
                        <div class="top" :data-img="item.pic">
                            <div class="cover-img" :style="item.pic | imageURL"></div>
                        </div>
                    </router-link>
                    <router-link :to="item.link" class="info">
                        <div class="title">{{item.title}}</div>
                        <div class="meta clearfix">
                            <div class="cell left">
                                <span></span>
                                <span>{{item.play | count}}</span>
                            </div>
                            <div class="cell left">
                                <span></span>
                                <span>{{item.video_review | count}}</span>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./channelRecommend.ts"></script>
