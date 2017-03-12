<template>
    <div>
        <div id="bofqi">
            <div class="player-container">
                <div class="dummy"></div>
                <div class="player-box">
                    <video width="100%" height="100%"
                        id="video-player"
                        class="video-js"
                        controls
                        preload="auto"
                        data-setup='{}'>
                        <source :src="video_url" type="video/mp4"></source>
                    </video>
                    <div class="display" v-if="false">
                        <div class="input-bar">
                            <input type="text" class="text-input" placeholder="请在这里输入弹幕">
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
                <span>分享</span>
            </span>
            <span class="control-btn btn-addFav">
                <span>收藏</span>
            </span>
            <span class="control-btn btn-download">
                <span>下载</span>
            </span>
            <a class="launch-app" href="javascript:void(0)" target="_self">用客户端打开</a>
        </div>
        <div class="video-info clearfix">
            <div class="up clearfix">
                <div class="up-pic">
                    <a href="/space/1328260" target="_blank">
                        <img src="http://i0.hdslb.com/bfs/face/b967c17c3f96ba8604a8bc1afef3b6ee1842fc5f.jpg" alt="哔哩哔哩游戏中心" data-pin-nopin="true">
                    </a>
                </div>
                <div class="up-right clearfix">
                    <a href="" class="up-follow">关注</a>
                    <a href="" class="up-name">UP主：哔哩哔哩游戏中心</a>
                    <a href="" class="up-detail">围观UP主的全部投稿</a>
                </div>
            </div>
            <div class="video-info-detail">
                <h1 class="video-title" title="【灵能百分百手书】 Save ME">【灵能百分百手书】 Save ME</h1>
                <div class="video-desc"></div>
                <div class="tminfo"></div>
                <ul class="ct clearfix">
                    <li>播放：<span id="dianji">4.3万</span></li>
                    <li>弹幕：<span id="dm_count">805</span></li>
                    <li>收藏：<span id="stow_count">9307</span></li>
                    <li><span class="up-time">2017-03-09 19:49:32</span></li>
                </ul>
            </div>
            <div class="video-info-span"></div>
        </div>

        
    </div>
</template>

<script lang="ts" src="./video.ts"></script>

<style lang="scss">
    #bofqi{
        position: relative;
        z-index: 999;
        .player-container {
            position: absolute;

            top: 0;
            left: 0;
            .dummy{
                margin-top: 62.5%;
            }
        }
        &::after{
            content: '';
            display: block;
            padding-top: 62.5%;
        }
    }

    .player-container {
        display: inline-block;
        width: 100%;
        height: 100%;
        .dummy{
            margin-top: 62.5%;
        }
        .player-box {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            overflow: hidden;
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
</style>