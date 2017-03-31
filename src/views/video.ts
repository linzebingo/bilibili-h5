import * as Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Tools from '../common/Tools'
import Api from '../api'
import LazyImage from '../components/common/LazyImage.vue'

@Component({
    components: { LazyImage }
})
export default class Video extends Vue {
    videoURL = null
    videoPoster = ''
    videoStat: Stat = null

    mounted() {
        const aid = this.$route.params['id']
        this.fetchPlayURL(aid)
        this.fetchStat(aid)
        // this.fetchReply()
        this.$router.beforeEach((to, from, next) => {
            next()
        })
    }

    fetchPlayURL(aid: string) {
        Api.getPlayURL(aid).then(response => {
            if (!response.data['code']) {
                this.videoURL = (response.data as PlayURL).durl[0].url
                this.videoPoster = (response.data as PlayURL).img
            } else {
                const badResponse = response.data as BaseResponse;
                Tools.Error(`${badResponse.code} - ${badResponse.message}`)
            }
        }, response => {
            console.error(response)
        })
    }

    fetchReply(aid: string) {
        Api.getReply(aid).then(response => {

        }, response => {
            Tools.Error(response)
        })
    }

    fetchStat(aid: string) {
        Api.getStat(aid).then(response => {
            if (response.data['code'] === 0) {
                this.videoStat = response.data['data']
            } else {
                const badResponse = response.data as BaseResponse;
                Tools.Error(`${badResponse.code} - ${badResponse.message}`)
            }
        }, response => {
            console.error(response)
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
        mid: number,
        top: {
            rpid: number,
            oid: number,
            type: number,
            mid: number,
            root: number,
            parent: number,
            count: number,
            rcount: number,
            floor: number,
            state: number,
            attr: number,
            ctime: number,
            rpid_str: string,
            root_str: string,
            parent_str: string,
            like: number,
            action: number,
            member: {
                mid: string,
                uname: string,
                sex: string,
                sign: string,
                avatar: string,
                rank: string,
                DisplayRank: string,
                level_info: {
                    current_level: number,
                    current_min: number,
                    current_exp: number,
                    next_exp: number
                },
                pendant: {
                    pid: number,
                    name: string,
                    image: string,
                    expire: number
                },
                nameplate: {
                    nid: number,
                    name: string,
                    image: string,
                    image_small: string,
                    level: string,
                    condition: string
                },
                official_verify: {
                    type: number,
                    desc: string
                },
                vip: {
                    vipType: number,
                    vipDueDate: number,
                    dueRemark: string,
                    accessStatus: number,
                    vipStatus: number,
                    vipStatusWarn: string
                }
            },
            content: {
                message: string,
                plat: number,
                device: string,
                members: Array<any>
            },
            replies: [{

            }]
        }

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
