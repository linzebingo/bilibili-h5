<template>
    <div>
        <div id="bofqi"
             v-if="videoURL">
            <div class="player-container">
                <div class="dummy"></div>
                <div class="player-box">
                    <video width="100%"
                           height="100%"
                           id="video-player"
                           class="video-js"
                           controls
                           preload="auto"
                           :poster="videoPoster"
                           data-setup='{}'>
                        <source :src="videoURL"
                                type="video/mp4"></source>
                    </video>
                    <div class="display"
                         v-if="false">
                        <div class="input-bar">
                            <input type="text"
                                   class="text-input"
                                   placeholder="请在这里输入弹幕">
                            <button class="send-btn">发送</button>
                        </div>
                        <div class="control-bar hide"></div>
                        <div class="comment-layer"></div>
                        <div class="load-layer"></div>
                        <div class="state-icon"></div>
                    </div>
                </div>
            </div>
        </div>

        <div id="video-opt">
            <span class="control-btn btn-share">
                            <i class="icons"></i>
                            <span>分享</span>
            </span>
            <span class="control-btn btn-addFav">
                            <i class="icons"></i>
                            <span>收藏</span>
            </span>
            <span class="control-btn btn-download">
                            <i class="icons"></i>
                            <span>下载</span>
            </span>
            <a class="launch-app"
               href="javascript:void(0)"
               target="_self">用客户端打开</a>
        </div>

        <div class="video-info clearfix">
            <div class="up clearfix">
                <div class="up-pic">
                    <a href="/space/1328260"
                       target="_blank">
                        <img src="http://i0.hdslb.com/bfs/face/b967c17c3f96ba8604a8bc1afef3b6ee1842fc5f.jpg"
                             alt="哔哩哔哩游戏中心"
                             data-pin-nopin="true">
                    </a>
                </div>
                <div class="up-right clearfix">
                    <a href=""
                       class="up-follow">关注</a>
                    <a href=""
                       class="up-name">UP主：哔哩哔哩游戏中心</a>
                    <a href=""
                       class="up-detail">围观UP主的全部投稿</a>
                </div>
            </div>
            <div class="video-info-detail">
                <h1 class="video-title"
                    title="【灵能百分百手书】 Save ME">【灵能百分百手书】 Save ME</h1>
                <div class="video-desc"></div>
                <div class="tminfo"></div>
                <ul class="ct clearfix"
                    v-if="videoStat">
                    <li>播放：<span id="dianji">{{videoStat.view | count}}</span></li>
                    <li>弹幕：<span id="dm_count">{{videoStat.danmaku | count}}</span></li>
                    <li>收藏：<span id="stow_count">{{videoStat.favorite | count}}</span></li>
                    <li><span class="up-time">2017-03-09 19:49:32</span></li>
                </ul>
            </div>
            <div class="video-info-span"></div>
        </div>

        <div class="recommend-comment channel video-list">
            <ul class="rc-navigator clearfix">
                <li class="rc-navigator-li on"
                    role="recommend">
                    <span>相关推荐</span>
                    <div class="line"></div>
                </li>
                <li class="rc-navigator-li"
                    role="comment">
                    <span>评论<em class="comment-num">60</em></span>
                    <div class="line"></div>
                </li>
            </ul>
            <div class="target-role on"
                 target-role="recommend"
                 style="display: none;">
                <ul class="rc-pannel channel-in"
                    v-for="n in 6">
                    <li>
                        <div class="item">
                            <LazyImage class="cover"
                                       src="//i2.hdslb.com/bfs/archive/b4bdbbaf0d06b067c68e63b61bad41e117fa9938.jpg"></LazyImage>
                            <span class="video-title">
                                            <a href="//www.bilibili.com/mobile/video/av9328225.html" title="【洛天依 假酒绫】笔墨登场（这个阿绫有毒）">【洛天依 假酒绫】笔墨登场（这个阿绫有毒）</a>
                                        </span>
                            <div class="video-meta">
                                <div class="video-cell">
                                    <span class="icons"></span>
                                    <span>4098</span>
                                </div>
                                <div class="video-cell">
                                    <span class="icons"></span>
                                    <span>92</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="target-role"
                 target-role="comment">
                <ul class="rc-pannel comment-in"
                    v-for="n in 4">
                    <li class="list">
                        <div class="rc-container clearfix">
                            <a href="//space.bilibili.com/11112759" class="rc-pic">
                                <img src="//i0.hdslb.com/bfs/face/8e034199b72ea48fe5dd7de76b2765ed6699cb5b.jpg">
                            </a>
                            <div class="rc-main">
                                <div class="rc-head clearfix">
                                    <a href="//space.bilibili.com/11112759" class="rc-name">Chatillon25t</a>
                                    <span class="rc-time">2017-03-27 04:37</span>
                                </div>
                                <div class="rc-comment">发现有的时候，回归朴素是件好事，身上没有华丽的装饰，而尽情释放动作，她真是天使。当然，并没有渡航的另一个形容。</div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="download-link">
                    <a class="download-link-btn" target="_blank" href="https://itunes.apple.com/cn/app/bi-li-bi-li-dong-hua/id736536022">下载bilibili客户端，查看全部评论</a>
                </div>
            </div>
        </div>

        <div class="loading"
             v-if="!videoURL">
            <span class="left"></span>
            <span class="middle"></span>
            <span class="right"></span>
        </div>
    </div>
</template>

<script lang="ts" src="./video.ts"></script>

<style lang="scss">
#bofqi {
    position: relative;
    z-index: 999;
    .player-container {
        position: absolute;
        top: 0;
        left: 0;
        .dummy {
            margin-top: 62.5%;
        }
    }
    &::after {
        content: '';
        display: block;
        padding-top: 62.5%;
    }
}

.player-container {
    display: inline-block;
    width: 100%;
    height: 100%;
    .dummy {
        margin-top: 62.5%;
    }
    .player-box {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
        video {
            background-color: #000;
        }
        .display {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            user-select: none;
        }
    }
}

#video-opt {
    height: 38pt;
    background-color: #fff;
    .control-btn {
        display: inline-block;
        height: 38pt;
        width: 38pt;
        text-align: center;
        vertical-align: top;
        span {
            display: block;
            font-size: .75rem;
            color: #999;
        }
    }
    .launch-app {
        height: 26pt;
        line-height: 26pt;
        font-size: 10pt;
        color: #fff;
        background: #de698c;
        padding: 0 30pt;
        border-radius: 8px;
        margin: 6pt 3pt 0 0;
        position: absolute;
        right: 10pt;
    }
}

.video-info {
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 10px;
    overflow: hidden;
    font-size: 0.875rem;
    text-align: center;
    color: #444;
    box-sizing: border-box;
    margin-top: 15px;
    .up {
        margin: 0;
        color: #777;
        text-align: left;
        padding: 0 5px;
        position: relative;
        border-bottom: 1px solid #eee;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .up-pic {
            position: absolute;
            width: 50px;
            height: 50px;
            border-radius: 25px;
            border: 1px solid #eee;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .up-right {
            margin-left: 64px;
            margin-bottom: 10px;
            margin-right: 64px;
            .up-name {
                color: #333;
                float: left;
                clear: left;
                line-height: 1.7rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 100%;
            }
            .up-detail {
                color: #de698c;
                float: left;
                clear: left;
                line-height: 1.7rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 100%;
            }
        }
        .up-follow {
            position: absolute;
            right: 0;
            line-height: 36px;
            padding: 0 16px;
            border-radius: 6px;
            margin: 6px 0;
            color: #de698c;
            background: #fff;
            border: 1px solid #de698c;
        }
    }
    .ct li {
        width: 33%;
        float: left;
        line-height: 1.7rem;
        color: #aaa;
        white-space: nowrap;
        font-size: 0.8rem;
        text-align: left;
    }
    .video-title {
        display: none;
    }
    .up-time {
        display: none;
    }
}

.channel {
    padding: 0% 2%;
    position: relative;
    overflow: hidden;
    &.video-list {
        background-color: #fff;
    }
    .channel-in {
        padding: 0px;
        margin: 0px;
        display: block;
        list-style: none;
        position: relative;
        li {
            width: 50%;
            float: left;
            padding: 2%;
            display: block;
            list-style: none;
            position: relative;
            box-sizing: border-box;
            .item {
                width: 100%;
                float: left;
                .cover {
                    overflow: hidden;
                    position: relative;
                    &::before {
                        content: '';
                        display: block;
                        padding: 31%;
                    }
                    .cover-img {
                        border-radius: 5px;
                        box-sizing: border-box;
                        border: 1px solid #ddd;
                        z-index: 10;
                    }
                }
                .video-title {
                    line-height: 16px;
                    font-size: 0.75rem;
                    display: block;
                    height: 32px;
                    margin: 5px;
                    a {
                        line-height: 16px;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        color: #333;
                    }
                }
                .video-meta {
                    width: 100%;
                    color: #333;
                    position: relative;
                    height: 16px;
                    line-height: 16px;
                    font-size: 0.75rem;
                    .video-cell {
                        width: 50%;
                        float: left;
                        height: 16px;
                        line-height: 16px;
                        overflow: hidden;
                    }
                }
            }
        }
    }
}

.comment {
    .list {
        border-bottom: 1px solid #eee;
    }
}
.rc-pic {
    border: 1px solid #eee;
    position: relative;
    float: left;
    width: 16%;
    border-radius: 160px;
    overflow: hidden;
    display: block;
    img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    &::after {
        display: block;
        content: '';
        padding-top: 100%;
    }
}
.rc-container .rc-main {
    width: 80%;
    float: right;
    position: relative;
    .rc-head {
        color: #999;
        font-size: .8rem;
        .rc-name {
            display: inline-block;
            max-width: 50%;
            float: left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #999;
        }
        .rc-time {
            display: inline-block;
            max-width: 50%;
            float: right;
        }
    }
    .rc-comment {
        display: -webkit-box;
        -webkit-line-clamp: 10;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
}

.download-link {
    background-color: #de698c;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 9px 0;
    margin-bottom: 10px;
    margin-top: 10px;
    font-size: 0.85rem;
    & &-btn {
        color: #fff;
    }
}

.cover {
    transition: opacity .3s;
    background: transparent center no-repeat;
    background-size: contain;
    .cover-img {
        position: absolute;
        top: 0;
        left: 0;
        transition: opacity .3s;
        opacity: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 4px;
    }
}

.recommend-comment {
    margin-top: 10px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
}

.rc-navigator {
    margin: 0 -2%;
    & &-li {
        display: inline-block;
        float: left;
        width: 50%;
        box-sizing: border-box;
        border-bottom: 2px solid transparent;
        span {
            position: relative;
            display: inline-block;
            box-sizing: border-box;
            text-align: center;
            width: 100%;
            margin: 8px 0;
            border-right: 1px solid #eee;
        }
        &.on span {
            color: #de698c;
            border-bottom-color: #de698c;
        }
        .line {
            width: 85%;
            margin: 0 auto;
            height: 2px;
            box-sizing: border-box;
            background: transparent;
        }
        &.on .line {
            background: #de698c;
        }
    }
}

.comment-num {
    display: inline;
    position: absolute;
    background: #ccc;
    color: #fff;
    font-size: 0.75rem;
    border-radius: 10px;
    padding: 1px 7px;
    top: 2px;
    margin-left: 5px;
    font-style: normal;
}

.icons {
    display: inline-block;
    width: 24px;
    height: 24px;
    vertical-align: top;
}

.loading {
    width: 25%;
    height: 12px;
    margin: 25% auto 0;
    position: relative;
    span {
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        position: absolute;
        background: blue;
        transform: translate(-50%, 0);
    }
    .left {
        background: yellow;
        animation: lMove 2.5s ease infinite;
    }
    .middle {
        left: 50%;
        animation: mMove 2.5s ease infinite;
    }
    .right {
        left: 100%;
        background: grey;
        animation: rMove 2.5s ease infinite;
    }
}

@keyframes lMove {
    0% {
        left: 0;
    }
    25% {
        left: 50%;
        background: yellow;
    }
    50% {
        left: 100%;
        background: blue;
    }
    75% {
        left: 50%;
        background: grey;
    }
    100% {
        left: 0;
    }
}

@keyframes mMove {
    0% {}
    25% {
        background: blue;
    }
    50% {
        background: yellow;
    }
    75% {
        background: blue;
    }
    100% {}
}

@keyframes rMove {
    0% {
        left: 100%;
    }
    25% {
        left: 50%;
    }
    50% {
        left: 0;
        background: grey;
    }
    75% {
        left: 50%;
        background: yellow;
    }
    100% {
        left: 100%;
    }
}
</style>
