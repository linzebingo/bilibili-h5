<template>
    <div class="ranking-container">
        <ul class="rank-links">
            <li type="all" class="on">
                <router-link to="/ranking#type=all">
                    <i class="site"></i>
                    <h3>全站排行</h3>
                </router-link>
                <span class="ui arrow"></span>
            </li>
            <li type="origin">
                <router-link to="/ranking#type=origin">
                    <h3>原创排行</h3>
                    <span class="ui arrow"></span>
                </router-link>
            </li>
            <li type="bangumi">
                <router-link to="/ranking#type=bangumi">
                    <h3>新番排行</h3>
                    <span class="ui arrow"></span>
                </router-link>
            </li>
        </ul>
        <div class="roll-bar ranking">
            <ul class="roll-bar-in">
                <li tid="0" class="on">
                    <a>全站</a>
                </li>
                <li tid="1">
                    <a>动画</a>
                </li>
                <li tid="167">
                    <a>国创</a>
                </li>
                <li tid="3">
                    <a>音乐</a>
                </li>
                <li tid="129">
                    <a>舞蹈</a>
                </li>
                <li tid="4">
                    <a>游戏</a>
                </li>
            </ul>
        </div>
        <ul class="list ranking-body" v-for="(item,index) in rankItems">
            <li>
                <a href="" class="list-item in">
                    <div class="l">
                        <div class="top">
                            <img v-lazyload :data-src="item.pic" class="cover">
                        </div>
                        <div class="rank" :class="index<3?'top':''">
                            <span class="rank-num">{{index+1}}</span>
                        </div>

                    </div>
                    <div class="r">
                        <div class="r-box">
                            <div class="title">{{item.title}}</div>
                            <div class="meta">
                                <div class="up">
                                    UP主：
                                    <span>{{item.author}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" src="./ranking.ts"></script>

<style lang="scss">
.rank-links {
    border-radius: 4px;
    text-align: center;
    display: block;
    position: relative;
    overflow: hidden;
    background: #fff;
    li {
        border: none;
        box-sizing: border-box;
        height: 49px;
        line-height: 49px;
        position: relative;
        border-bottom: 1px solid #ddd;
        width: 33.333%;
        display: block;
        margin: 0 auto;
        float: left;
        a {
            display: block;
            padding-left: 28px;
            color: #777;
            font-size: 14px;
            position: relative;
            i.site {
                background-position: center top;
            }
        }
    }
    li.on .arrow {
        display: block;
        position: absolute;
        bottom: -1px;
        left: 50%;
        width: 24px;
        height: 10px;
        background: url('http://static.hdslb.com/mobile/img/tri_rank.png') no-repeat;
        margin-left: -10px;
    }
    h3 {
        font-size: 14px;
        font-weight: normal;
        margin: 0;
        padding: 0;
    }
}

.roll-bar {
    padding: 0;
    margin: 0 auto;
    height: 45px;
    width: 100%;
    position: relative;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    .roll-bar-in {
        position: absolute;
        top: 0;
        right: 0;
        margin: 0;
        padding: 0;
        height: 41px;
        line-height: 41px;
        display: block;
        list-style: none;
        white-space: nowrap;
        li {
            text-align: center;
            height: 45px;
            display: inline-block;
            box-sizing: border-box;
            padding: 0 16px;
            list-style: none;
            white-space: nowrap;
            a {
                color: #999;
                display: block;
                height: 100%;
                width: 100%;
            }
        }
        li.on {
            height: 42px;
            a {
                color: #de698c;
                border-bottom: 4px solid #de698c;
            }
        }
    }
}

.list {
    padding: 10px;
    a.list-item {
        display: block;
        position: relative;
        margin-bottom: 20px;
        transition: 0.5s;
        &.in {
            opacity: 1;
            transform: scale(1);
        }
        .l {
            width: 43%;
            position: relative;
            padding-top: 2px;
            .cover {
                width: 76%;
                margin-left: 24%;
                position: relative;
                transition: opacity 0.3s;
                background: transparent center no-repeat;
                background-size: contain;
                &::before {
                    content: '';
                    display: block;
                    padding: 31% 0;
                }
            }
        }
        .rank {
            position: absolute;
            left: -30%;
            top: 0px;
            width: 30%;
            padding: 31% 0;
            background: #989898;
            border-radius: 4px 0 0 4px;
            text-align: center;
            color: #fff;
            &.top {
                background-color: #f686ad;
            }
            .rank-num {
                position: absolute;
                left: 0;
                top: 50%;
                width: 100%;
                margin-top: -12px;
            }
        }

        .r {
            width: 57%;
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
            transition: 0.5s;
            .r-box {
                margin: 0 10px;
                position: relative;
                height: 100%;
                .title {
                    height: 40px;
                    line-height: 1.48;
                    font-size: 15px;
                    overflow: hidden;
                    color: #666;
                    word-wrap: break-word;
                    word-break: break-all;
                }
                .meta {
                    color: #999;
                    position: absolute;
                    height: 20px;
                    width: 100%;
                    bottom: 0;
                    .up {
                        display: inline-block;
                        height: 16px;
                        font-size: 12px;
                        max-width: 100%;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                }
            }
        }
    }
}

.ranking-container {
    .ranking-body {
        padding-top: 20px;
        li {
            margin-bottom: 20px;
        }
    }
}
</style>
