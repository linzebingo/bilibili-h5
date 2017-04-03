<template>
    <div class="channel-wrapper clearfic">
        <ul>
            <li>
                <a  class="channel-item" href="">
                    <div class="channel-icon bili-icon-live"></div>
                    <p class="channel-name">直播</p>
                </a>
            </li>
            <li>
                <a  class="channel-item" href="">
                    <div class="channel-icon bili-icon-bangumi">
                        <span class="channel-num">66</span>
                    </div>
                    <p class="channel-name">番剧</p>
                </a>
            </li>
            <!--<li>
                <a  class="channel-item" href="">
                    <div class="channel-icon">
                        <span class="channel-num">28</span>
                    </div>
                    <p class="channel-name">国创</p>
                </a>
            </li>-->
            <li>
                <a  class="channel-item" href="">
                    <div class="channel-icon bili-icon-douga">
                        <span class="channel-num">99+</span>
                    </div>
                    <p class="channel-name">动画</p>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>

</script>
<style lang="scss">
.channel-wrapper {
    padding: 18px;
    li {
        float: left;
        width: 33.33333%;
    }
    .channel-item {
        display: inline-block;
        position: relative;
        width: 100%;
        text-align: center;
        padding: 10px 0;
    }
    .channel-icon {
        margin: 0 auto 7px;
        position: relative;
    }
    .channel-num {
        box-sizing: border-box;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 12px;
        color: #fff;
        background-color: #ccc;
        height: 17px;
        z-index: 1;
        text-align: center;
        padding: 0 6px;
        border-radius: 8px;
    }
    .channel-name {
        color: #212121;
        font-size: 14px;
    }
    p {
        margin: 0;
    }
}
</style>
