import * as Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import Tools from '../common/Tools'

@Component
export default class Video extends Vue {
    videoURL = null

    mounted() {
        const aid = this.$route.params['id']
        this.fetchPlayURL(aid)
        // this.fetchReply()
        this.$router.beforeEach((to, from, next) => {
            next()
        })
    }

    @Watch('$route')
    onRouteChange(){
        console.log('route change')
    }

    fetchPlayURL(aid: string) {
        const url = `http://api.bilibili.com/playurl?callback=jQuery17204299305679106269_1490163840108&aid=${aid}&page=1&platform=html5&quality=1&vtype=mp4&type=jsonp&token=&_=1490163840195`
        this.$http.jsonp(url).then(response => {
            // Tools.Log(response)
            console.dir(response)
            if (!response.data['code']) {
                this.videoURL = (response.data as PlayURL).durl[0].url
            } else {
                const badResponse = response.data as BaseResponse;
                Tools.Error(`${badResponse.code} - ${badResponse.message}`)
            }
        }, response => {
            console.error(response)
        })
    }

    fetchReply() {
        const url = `https://api.bilibili.com/x/v2/reply?callback=jQuery1720009073774483293828_1490184741397&jsonp=jsonp&type=1&sort=2&oid=9281509&pn=1&nohot=1&_=1490184741521`
        this.$http.jsonp(url).then(response => {
            // console.log(response)
        }, response => {
            // console.error(response)
        })
    }
}

interface BaseResponse {
    code: number;
    message: string;
}
interface PlayURL {
    accept_format: string;
    accept_quality: Array<number>;
    cid: string;
    durl: Array<{
        backup_url: Array<string>,
        length: number,
        order: number,
        size: number,
        url: string
    }>,
    format: string;
    from: string;
    fromview: string;
    img: string;
    result: string;
    seek_param: string;
    seek_type: string;
    timelength: number;
}

interface Reply {
    notice: {
        content: string, id: number, link: string, title: string
    };
    page: {
        acount: number, count: number, num: number, size: number
    };
    replies: Array<{
        action: number,
        attr: number,
        content: {
            device: string,
            members: Array<any>,
            message: string,
            plat: number
        },
        count: number,
        ctime: number,
        floor: number,
        like: number,
        member: {
            DisplayRank: string,
            avatar: string,
            level_info: {
                current_exp: number,
                current_level: number,
                current_min: number,
                next_exp: number
            },
            mid: string,
            nameplate: {
                condition: string,
                image: string,
                image_small: string,
                level: string,
                name: string,
                nid: number
            },
            official_verify: {
                type: number,
                desc: string
            },
            pendant: {
                expire: number,
                image: string,
                name: string,
                pid: number
            },
            rank: string,
            sex: string,
            sign: string,
            uname: string,
        },
        mid: number,
        oid: number,
        parent: number,
        parent_str: string,
        rcount: number,
        replies: Array<any>,
        root: number,
        root_str: number,
        rpid: number,
        rpid_str: string,
        state: number,
        type: number
    }>;
    upper: {
        mid: number
    }
}

interface Stat {
    coin: number;
    danmaku: number;
    favorite: number;
    his_rank: number;
    now_rank: number;
    reply: number;
    share: number;
    view: number;
}

interface RecommedNew {
    aid: number;
    attribute: number;
    copyright: number;
    ctime: number;
    desc: string;
    duration: number;
    owner: {
        face: string,
        mid: number,
        name: string
    };
    pic: string;
    pubdate: number;
    rights: {
        bp: number,
        download: number,
        elec: number,
        hd5: number,
        movie: number,
        no_reprint: number,
        pay: number
    };
    stat: {
        coin: number,
        danmaku: number,
        favorite: number,
        his_rank: number,
        now_rank: number,
        reply: number,
        share: number,
        view: number,
    };
    state: number;
    tags: Array<string>;
    title: string,
    tname: string;
}