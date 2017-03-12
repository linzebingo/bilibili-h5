<template>
    <div>
        <Slider id="sliderWrapper"></Slider>
        <HotRecommend id="hotRecommand"></HotRecommend>
        <LiveRecommend id="liveRecommand"></LiveRecommend>
    </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="scss">
    .row-container {
        position: relative;
        width: 100%;
        margin-bottom: 12px;
        background-color: #fff;
        box-sizing: border-box;
        .header {
            display: block;
            height: 44px;
            line-height: 44px;
            padding: 0 12px;
            .left {
                float: left;
                color: #444;
                font-size: 14px;
                position: relative;
                padding-left: 25px;
            }
            .right {
                float: right;
                font-size: 14px;
                color: #999;
                position: relative;
                padding-left: 25px;
            }
            .hot {
                font-size: 13px;
                color: #ffb30f;
            }
        }
        * {
            box-sizing: border-box;
        }
        .content-wrapper {
            display: block;
            width: 100%;
            overflow: hidden;
            padding: 0 6px;
        }
        .content-list {
            width: 50%;
            display: inline-block;
            position: relative;
            padding: 0 6px 24px;
            vertical-align: top;
            float: left;
            .item {
                display: block;
                width: 100%;
                height: 100%;
                text-decoration: none;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                .top {
                    position: relative;
                    background-repeat: no-repeat;
                    background-position: center;
                    width: 100%;
                    height: 0;
                    padding-bottom: 63%;
                }
                .cover-img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    transition: opacity .3s;
                    width: 100%;
                    height: 100%;
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    background-position: center center;
                    border-radius: 5px;
                }
            }
            .info {
                position: relative;
                display: block;
                width: 100%;
                padding-top: 5px;
                .title {
                    width: 100%;
                    max-height: 36px;
                    line-height: 1.4;
                    overflow: hidden;
                    color: #444;
                    font-size: 13px;
                }
                .cell {
                    position: relative;
                    width: 50%;
                    font-size: 13px;
                    color: #999;
                    padding-left: 18px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
                .avator {
                    position: relative;
                    width: 42px;
                    height: 42px;
                    border-radius: 21px;
                    border: 2px solid #fff;
                    top: -26px;
                    left: 7px;
                    z-index: 10;
                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        vertical-align: top;
                    }
                }
                .user {
                    position: absolute;
                    left: 0;
                    top: 5px;
                    width: 100%;
                    padding-left: 56px;
                }
                .name {
                    font-size: 13px;
                    color: #444;
                }
                .desp {
                    font-size: 13px;
                    color: #999;
                    padding-top: 2px;
                }
                .online {
                    position: absolute;
                    top: 25px;
                    width: 48px;
                    padding: 0 1px;
                    color: #fff;
                    background-color: #ccc;
                    border-radius: 6px;
                    text-align: center;
                    height: 20px;
                    line-height: 20px;
                    font-size: 12px;
                }
            }
        }
        .left {
            float: left;
        }
        .text-overflow {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    }
    
    .clearfix:after {
        content: "";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
</style>