<template>
    <div>
        <Slider id="sliderWrapper"></Slider>
        <div class="row-container" id="hotRecommand">
            <router-link to="/index" class="header">
                <div class="left">
                    <span></span>
                    <span>热门推荐</span>
                </div>
                <div class="right">
                    <span></span>
                    <span>排行榜</span>
                </div>
            </router-link>
            <ul class="content-wrapper">
                <li class="content-list">
                    <a href="" class="item">
                        <div class="top">
                            <div class="cover-img" style="opacity: 1; background-image: url('//i1.hdslb.com/bfs/archive/6df5d7d9367faf1b12c734f3ad72aa1a55dfa321.jpg_320x200.jpg');"></div>
                        </div>
                    </a>
                    <a href="" class="info">
                        <div class="title">【かや】FREELY TOMORROW / KAYA Ver.【部分即興】</div>
                        <div class="meta clearfix">
                            <div class="cell left">
                                <span></span>
                                <span>22.4万</span>
                            </div>
                            <div class="cell left">
                                <span></span>
                                <span>1959</span>
                            </div>
                        </div>
                    </a>
                </li>
                <li class="content-list">
                    <a href="" class="item">
                        <div class="top">
                            <div class="cover-img" style="opacity: 1; background-image: url('//i1.hdslb.com/bfs/archive/6df5d7d9367faf1b12c734f3ad72aa1a55dfa321.jpg_320x200.jpg');"></div>
                        </div>
                    </a>
                    <a href="" class="info">
                        <div class="title">【かや】FREELY TOMORROW / KAYA Ver.【部分即興】</div>
                        <div class="meta clearfix">
                            <div class="cell left">
                                <span></span>
                                <span>22.4万</span>
                            </div>
                            <div class="cell left">
                                <span></span>
                                <span>1959</span>
                            </div>
                        </div>
                    </a>
                </li>
                <li class="content-list">
                    <a href="" class="item">
                        <div class="top">
                            <div class="cover-img" style="opacity: 1; background-image: url('//i1.hdslb.com/bfs/archive/6df5d7d9367faf1b12c734f3ad72aa1a55dfa321.jpg_320x200.jpg');"></div>
                        </div>
                    </a>
                    <a href="" class="info">
                        <div class="title">【かや】FREELY TOMORROW / KAYA Ver.【部分即興】</div>
                        <div class="meta clearfix">
                            <div class="cell left">
                                <span></span>
                                <span>22.4万</span>
                            </div>
                            <div class="cell left">
                                <span></span>
                                <span>1959</span>
                            </div>
                        </div>
                    </a>
                </li>
                <li class="content-list">
                    <a href="" class="item">
                        <div class="top">
                            <div class="cover-img" style="opacity: 1; background-image: url('//i1.hdslb.com/bfs/archive/6df5d7d9367faf1b12c734f3ad72aa1a55dfa321.jpg_320x200.jpg');"></div>
                        </div>
                    </a>
                    <a href="" class="info">
                        <div class="title">【かや】FREELY TOMORROW / KAYA Ver.【部分即興】</div>
                        <div class="meta clearfix">
                            <div class="cell left">
                                <span></span>
                                <span>22.4万</span>
                            </div>
                            <div class="cell left">
                                <span></span>
                                <span>1959</span>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
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
        .header{
            display: block;
            height: 44px;
            line-height: 44px;
            padding: 0 12px;
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
            }

        }

        .left {
            float: left;
        }
    }

    .clearfix:after{
        content: "";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
</style>
