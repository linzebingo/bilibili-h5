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
</style>