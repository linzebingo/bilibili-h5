import * as Vue from 'vue'
import Component from 'vue-class-component'


@Component
export default class HotRecommend extends Vue {
    recommendItems: Array<RecommendItem> = null
    showError = false
    loading = false
    defaultImg = {
        backgroundImage: "url(//static.hdslb.com/images/v3images/img_loading.png)",
        backgroundSize: "contain"
    }

    mounted() {
        this.fetchData();
    }

    handleData(resp: RecommendItemsResponse) {
        var itemArray = new Array<RecommendItem>(), limit = 4
        if (resp.recommend && 0 === resp.recommend.code) {
            for (let item in resp.recommend.list) {
                if (limit <= 0) { break }
                resp.recommend.list[item].link = "//www.bilibili.com/mobile/video/av" + resp.recommend.list[item].aid + ".html"
                itemArray.push(resp.recommend.list[item])
                limit--
            }
        }
        this.recommendItems = itemArray
    }

    fetchData() {
        this.loading = true
        // this.$http.jsonp("//www.bilibili.com/index/ranking-3day.json", { credentials: false }).then(response => {
        //     this.loading = false;
        //     this.handleData(response.data as RecommendItemsResponse)
        // }, response => {
        //     console.error('fetch ranking-3day failed')
        // })

        this.handleData(recommend_data);
        this.loading = false
    }

    delayImg() {
        //TODO
        //this.$nextTick(function () { l.lazyImage.lazy($(g)) })
    }
}


interface RecommendItem {
    aid: string,
    typename: string,
    title: string,
    subtitle: string,
    play: number,
    review: number,
    preview?: number,
    video_review: number,
    favorites: number,
    mid: number,
    author: string,
    description: string,
    create: string,
    pic: string,
    coins: number,
    duration: string,
    badgepay: boolean,
    link?: string
}
interface RecommendItemsResponse {
    recommend: {
        code: number,
        pages: number,
        num: number,
        list: { [index: number]: RecommendItem }
    }
}

const recommend_data = {
    "recommend": {
        "code": 0,
        "pages": 1,
        "num": 8,
        "list": {
            "0": {
                "aid": "9005541",
                "typename": "翻唱",
                "title": "【东京塔】想变得可爱",
                "subtitle": "",
                "play": 72237,
                "review": 0,
                "video_review": 1310,
                "favorites": 5829,
                "mid": 312001,
                "author": "东京塔子",
                "description": "哎呀这次邀请了可爱的塔妹来唱这首歌！！大家鼓掌！！\n有几处地方用了本音（你们猜猜都在哪儿？）\n\n本家+中文字幕:av8045385\n后期: 拖破天际可以拿出去烤的MR.鱼 | 压制: KuroYui \n音频下载(网易云): http://music.163.com/#/song?id=463850570",
                "create": "2017-03-06 17:15",
                "pic": "http://i0.hdslb.com/bfs/archive/05aca5d77d61268adcfc07ab35b636e33115d6ac.jpg_320x200.jpg",
                "coins": 5633,
                "duration": "4:12",
                "badgepay": false
            },
            "1": {
                "aid": "9013966",
                "typename": "MMD·3D",
                "title": "【崩坏3MMD】谁家的新娘跑出来了！！",
                "subtitle": "",
                "play": 47554,
                "review": 0,
                "video_review": 487,
                "favorites": 5221,
                "mid": 6039314,
                "author": "忆诀别",
                "description": "Motion/camera： @030Nyan\nModel :  by  神帝宇\nstage  :  by  DRKANELALHENA\nMME  :  by   针金p，Okoneya，Arlvit，データＰ，そぼろさん,ikeno\n多谢星音-Polaris-YF帮忙做的后期，画质可能有点糊...看看效果如果不好，我重新搞一下。",
                "create": "2017-03-07 01:04",
                "pic": "http://i2.hdslb.com/bfs/archive/d9220b62d3a42ee44260ad4cf3f7a30c3b2333f3.jpg_320x200.jpg",
                "coins": 1405,
                "duration": "5:33",
                "badgepay": false
            },
            "2": {
                "aid": "9010194",
                "typename": "MMD·3D",
                "title": "【青春之旅第一章】我的世界已坠入爱河 群渲染示例",
                "subtitle": "",
                "play": 29251,
                "review": 1,
                "video_review": 299,
                "favorites": 5454,
                "mid": 7299978,
                "author": "星音-Polaris-YF",
                "description": "更多风格：av8990999 av8996424 av8994188 av8995704 av9008192\n群号：535223495 523803088 均需要一定基础能力才能加群哦\nmodel：訫ゞの宁恋 iRon0129 rurika\n场景：mitsuran5 椛暗\nmotion：@030Nyan\ncamera：@030Nyan\nmme: ikeno 针金p ray NCHL3+C",
                "create": "2017-03-06 21:20",
                "pic": "http://i1.hdslb.com/bfs/archive/b4a1a0ead81c7888f3a77844426e05ccb4cc4b63.jpg_320x200.jpg",
                "coins": 1251,
                "duration": "5:40",
                "badgepay": false
            },
            "3": {
                "aid": "9019372",
                "typename": "VOCALOID·UTAU",
                "title": "【伊東歌詞太郎】不输风雨【GUMI】",
                "subtitle": "",
                "play": 9737,
                "review": 0,
                "video_review": 227,
                "favorites": 1238,
                "mid": 649562,
                "author": "伊東歌詞太郎公式",
                "description": "伊東歌詞太郎です！（我是伊东歌词太郎！）\n\nずっと温めていた曲がついに投稿できて本当にうれしいです！（终于能投这首创作许久的曲子，我感到非常高兴！）\n僕は宮沢賢治の作品が好きだけど、宮沢賢治という人間も好きなんだと思う。（虽然我喜欢宫泽贤治的作品，但我认为自己也喜欢宫泽贤治这个人。）\n僕らの生きる現代は、賢治さんの目指す世界とどれくらい違うのだろうか。（我所生活的现代，与贤治先生憧憬的世界有多少差距呢。）\n\n■作詞、作曲　伊東歌詞太郎\n■編曲　ゆりん\n■絵:みっ君\n■動画　えむめろ",
                "create": "2017-03-07 13:49",
                "pic": "http://i0.hdslb.com/bfs/archive/eefd4a966881d2225a1e0e356926207f305e9760.jpg_320x200.jpg",
                "coins": 1534,
                "duration": "4:56",
                "badgepay": false
            },
            "4": {
                "aid": "9006138",
                "typename": "MMD·3D",
                "title": "【BLACK言和1.0】【MMD】J'y Suis Jamais Alle 【言绫改模测试】~",
                "subtitle": "",
                "play": 5979,
                "review": 0,
                "video_review": 118,
                "favorites": 1274,
                "mid": 3149710,
                "author": "JennySparrow",
                "description": "Model:  \nBLACK言和1.0  – by JennySparrow   (改自REM式 言和)\nBeacon Uniform  Yue Zhengling 1.0 – by JennySparrow  (改自TDA China Dress Yue Zhengling Canary)\n\nMotion by:  Asatoshi \nBGM: J'y Suis Jamais Alle\n\nProduced by：JennySparrow",
                "create": "2017-03-06 17:50",
                "pic": "http://i0.hdslb.com/bfs/archive/76d2fafd2189e7de95cdb83c31d1ff928d1b732a.jpg_320x200.jpg",
                "coins": 720,
                "duration": "1: 2",
                "badgepay": false
            },
            "5": {
                "aid": "9006351",
                "typename": "MAD·AMV",
                "title": "替京紫預熱？重溫京阿尼帶來的感動",
                "subtitle": "",
                "play": 39393,
                "review": 1,
                "video_review": 316,
                "favorites": 3433,
                "mid": 11982492,
                "author": "72W10L",
                "description": "https://youtu.be/hqSsCrddrO8 我記得作品平均銷量兩萬多，動畫公司中首位",
                "create": "2017-03-06 18:04",
                "pic": "http://i1.hdslb.com/bfs/archive/51cb9d25d8d4924e9828672a23383db17c1b92ee.jpg_320x200.jpg",
                "coins": 692,
                "duration": "2:28",
                "badgepay": false
            },
            "6": {
                "aid": "8993008",
                "typename": "MMD·3D",
                "title": "那是一个迷人的夜晚，FGO谜之女主，代号X，Last Night，Good Night",
                "subtitle": "",
                "play": 42148,
                "review": 0,
                "video_review": 239,
                "favorites": 2423,
                "mid": 19271328,
                "author": "兮颜残雪",
                "description": "模型-ゆずぽん\n场景-somni，怪獣対若大将P\n动作-whoku\n镜头-jjjj\n渲染-ray-mmd-1.3.0beta\nMME-化身バレッタ，ikeno，motionblur，そぼろ，データP，おたもん，ビームマンP\nBGM-Livetune\n越来越烂了。。。",
                "create": "2017-03-05 21:40",
                "pic": "http://i1.hdslb.com/bfs/archive/9bbd212569a5b6f654058096a338953ed48ec6ba.jpg_320x200.jpg",
                "coins": 365,
                "duration": "6:10",
                "badgepay": false
            },
            "7": {
                "aid": "8996514",
                "typename": "MMD·3D",
                "title": "[MMD]tda式改变青鸾款旗袍洛天依model test",
                "subtitle": "",
                "play": 5126,
                "review": 0,
                "video_review": 97,
                "favorites": 1135,
                "mid": 7151935,
                "author": "地板不会说谎",
                "description": "一个苦逼的家伙换了好几天头的模型测试影片。\n借物表在视频后。",
                "create": "2017-03-06 00:49",
                "pic": "http://i2.hdslb.com/bfs/archive/36c479bdd85535f115e8e85be7d96d1019fedc5e.jpg_320x200.jpg",
                "coins": 208,
                "duration": "3:38",
                "badgepay": false
            }
        }
    }
}