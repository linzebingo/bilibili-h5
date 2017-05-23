<template>
    <footer>
        <p class="clearfix">
            <router-link to="" id="change_to_computer" class="bottom-btn">
                <span>电脑版</span>
            </router-link>
            <router-link to="" id="link_to_app" class="bottom-btn">
                <span>客户端</span>
            </router-link>
            <router-link to="" id="back_to_top" class="bottom-btn">
                <span>返回顶部</span>
            </router-link>
        </p>
        <p>哔哩哔哩 沪ICP备13002172号-3</p>
        <p>信息网络传播视听节目许可证：
            <span>0910417</span>
        </p>
    </footer>
</template>

<style lang="scss">
footer {
    color: #aaa;
    clear: both;
    padding: 0 10px;
    font-size: 13px;
    text-align: center;
    a {
        vertical-align: middle;
    }
    p:not(.clearfix) {
        margin: 1em;
    }
}

.bottom-btn {
    border-right: 1px solid #ddd;
    height: 20px;
    line-height: 20px;
    width: 33%;
    box-sizing: border-box;
    float: left;
    display: inline-block;
    color: #666;
    vertical-align: middle;
}
</style>
