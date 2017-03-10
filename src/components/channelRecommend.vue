<template>
    <div>
        <div class="row-container" v-for="channel in channels">
            <a :href="channel.link" class="header">
                <class class="left">
                    <span :class="channel.icon"></span>
                    <span>{{channel.name}}</span>
                </class>
                <div class="right">
                    <span>查看更多更新</span>
                    <span></span>
                </div>
            </a>
            <div class="b-loadding" v-if="loading">loading</div>
            <div class="b-loading" v-if="!loading && !showError && channel.items && channel.items.length ===0">没有数据( &gt;﹏&lt;。)～</div>
            <ul class="content-wrapper" v-if="!loading && !showError && channel.items && channel.items.length > 0">
                <li class="content-list" v-for="item in channel.items">
                    <a :href="item.link" class="item">
                        <div class="top" :data-img="item.pic"></div>
                    </a>
                    <a :href="item.link" class="info">
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
                    </a>
                </li>
            </ul>
            <div class="b-loadding" v-if="showError">加载失败( &gt;﹏&lt;。)～</div>
        </div>
    </div>
</template>

<script lang="ts" src="./channelRecommend.ts"></script>