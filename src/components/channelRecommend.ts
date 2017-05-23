import * as Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Api from '../api'

@Component({
    components: {  }
})
export default class BangumiRecommend extends Vue {
    loading = true
    showError = false
    channels: Array<Channel> = CHANNEL_DATA

    mounted() {
        this.fetchData()
    }

    fetchData() {
        Api.getChannelList().then(response => {
            this.loading = false
            this.handleData(response.data as { [key: string]: Array<ChannelItem> })
        }, response => {
            this.loading = false
            this.showError = true
        })
    }

    handleData(items: { [key: string]: Array<ChannelItem> }) {
        for (let t = this.channels.length; t--;) {
            let channel = this.channels[t];
            let channelItemArray = items[channel.key];
            for (let i = 0, l = channelItemArray.length; i < l; i++) {

            }
            let w = 0;
            for (let index in channelItemArray) {
                if (w < 4) {
                    channelItemArray[index].link = '/video/' + channelItemArray[index].aid;
                    channel.items.push(channelItemArray[index]);
                    w++;
                }
            }
        }
    }
}

interface Channel {
    key: string;
    name: string;
    icon: string;
    link: string;
    items: Array<ChannelItem>
}

interface ChannelItem {
    aid: number;
    typeid: number;
    title: string;
    subtitle: string;
    play: number;
    review: number;
    video_review: number;
    favorites: number;
    mid: number;
    author: string;
    description: string;
    create: string;
    pubdate: string;
    pic: string;
    credit: number;
    coins: number;
    duration: string;
    link: string;
}

const CHANNEL_DATA = [{
    key: "guochuang",
    name: "\u56fd\u521b\u533a",
    icon: "bilibili-index-guoman",
    link: "/subchannel.html#tid=167",
    items: []
}, {
    key: "douga",
    name: "\u52a8\u753b\u533a",
    icon: "bilibili-index-douga",
    link: "/subchannel.html#tid=1",
    items: []
}, {
    key: "music",
    name: "\u97f3\u4e50\u533a",
    icon: "bilibili-index-music",
    link: "/subchannel.html#tid=3",
    items: []
}, {
    key: "dance",
    name: "\u821e\u8e48\u533a",
    icon: "bilibili-index-dance",
    link: "/subchannel.html#tid=129",
    items: []
}, {
    key: "game",
    name: "\u6e38\u620f\u533a",
    icon: "bilibili-index-game",
    link: "/subchannel.html#tid=4",
    items: []
}, {
    key: "technology",
    name: "\u79d1\u6280\u533a",
    icon: "bilibili-index-technology",
    link: "/subchannel.html#tid=36",
    items: []
}, {
    key: "life",
    name: "\u751f\u6d3b\u533a",
    icon: "bilibili-index-life",
    link: "/subchannel.html#tid=160",
    items: []
}, {
    key: "kichiku",
    name: "\u9b3c\u755c\u533a",
    icon: "bilibili-index-kichiku",
    link: "/subchannel.html#tid=119",
    items: []
}, {
    key: "fashion",
    name: "\u65f6\u5c1a\u533a",
    icon: "bilibili-index-fashion",
    link: "/subchannel.html#tid=155",
    items: []
}, {
    key: "ent",
    name: "\u5a31\u4e50\u533a",
    icon: "bilibili-index-ent",
    link: "/subchannel.html#tid=5",
    items: []
}, {
    key: "teleplay",
    name: "\u7535\u89c6\u5267\u533a",
    icon: "bilibili-index-teleplay",
    link: "/subchannel.html#tid=11",
    items: []
}, {
    key: "movie",
    name: "\u7535\u5f71\u533a",
    icon: "bilibili-index-movie",
    link: "/subchannel.html#tid=23",
    items: []
}, {
    key: "ad",
    name: "\u5e7f\u544a",
    icon: "bilibili-index-advertise",
    link: "/subchannel.html#tid=166",
    items: []
}]
