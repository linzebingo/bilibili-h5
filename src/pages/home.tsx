import * as React from 'react';
import logo from '../assets/logo.svg';
import fetchJsonp from 'fetch-jsonp';

interface Video {
  aid: string;
  author: string;
  coins: number;
  duration: string;
  mid: number;
  pic: string;
  play: number;
  pts: number;
  title: string;
  video_review: number;
}

interface Banner {
  id: number;
  name: string;
  pic: string;
  url: string;
}

interface HomePageStates {
  active: number;
  bannerList: Array<Banner>;
  videoList: Array<Video>;
}

const PlayIocn = (
  <svg id="icon-bofangshu" viewBox="0 0 1024 1024" width="100%" height="100%">
    <path d="M800 128H224C134.4 128 64 198.4 64 288v448c0 89.6 70.4 160 160 160h576c89.6 0 160-70.4 160-160V288c0-89.6-70.4-160-160-160z m96 608c0 54.4-41.6 96-96 96H224c-54.4 0-96-41.6-96-96V288c0-54.4 41.6-96 96-96h576c54.4 0 96 41.6 96 96v448z" />
    <path d="M684.8 483.2l-256-112c-22.4-9.6-44.8 6.4-44.8 28.8v224c0 22.4 22.4 38.4 44.8 28.8l256-112c25.6-9.6 25.6-48 0-57.6z" />
  </svg>
);
const DamuIcon = (
  <svg id="icon-danmushu" viewBox="0 0 1024 1024" width="100%" height="100%">
    <path d="M800 128H224C134.4 128 64 198.4 64 288v448c0 89.6 70.4 160 160 160h576c89.6 0 160-70.4 160-160V288c0-89.6-70.4-160-160-160z m96 608c0 54.4-41.6 96-96 96H224c-54.4 0-96-41.6-96-96V288c0-54.4 41.6-96 96-96h576c54.4 0 96 41.6 96 96v448z" />
    <path d="M240 384h64v64h-64zM368 384h384v64h-384zM432 576h352v64h-352zM304 576h64v64h-64z" />
  </svg>
);
const XialaxiaoIcon = (
  <svg id="icon-xialaxiao" viewBox="0 0 1024 1024" width="100%" height="100%">
    <path d="M515.2 649.6L169.6 304c-12.8-12.8-32-12.8-44.8 0s-12.8 35.2 0 48l368 364.8c12.8 12.8 32 12.8 44.8 0l361.6-361.6c12.8-12.8 12.8-35.2 0-48s-32-12.8-44.8 0L515.2 649.6z" />
  </svg>
);

function formatNumber(num: number) {
  return num / 10000 > 1 ? `${(num / 10000).toFixed(1)}万` : num;
}
export default class HomePage extends React.Component<{}, HomePageStates> {
  slider: any;

  constructor(props: any) {
    super(props);
    this.state = { active: 0, videoList: [], bannerList: [] };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetchJsonp('https://api.bilibili.com/x/web-show/res/loc?jsonp=jsonp&pf=7&id=1695')
      .then(resp => resp.json())
      .then(data => {
        this.setState({ bannerList: data.data }, this.initSwipe);
      });
    fetchJsonp('https://api.bilibili.com/x/web-interface/ranking?rid=0&day=3&jsonp=jsonp')
      .then(resp => resp.json())
      .then(data => {
        this.setState({ videoList: data.data.list });
      });
  }

  initSwipe() {
    const mySwipe = new Swipe(this.slider, {
      startSlide: 0,
      auto: 3000,
      continuous: true,
      disableScroll: true,
      stopPropagation: true,
      callback: index => {
        const total = this.state.bannerList.length;
        this.setState({ active: index % total });
      },
    });
  }

  render() {
    const { videoList, bannerList } = this.state;

    const zoneList = [
      {
        href: '/index.html',
        name: '首页',
      },
      {
        id: 1,
        name: '动画',
      },
      {
        id: 13,
        name: '番剧',
      },
      {
        id: 163,
        name: '国创',
      },
      {
        id: 3,
        name: '音乐',
      },
      {
        id: 129,
        name: '舞蹈',
      },
      {
        id: 36,
        name: '科技',
      },
      {
        id: 4,
        name: '游戏',
      },
      {
        id: 5,
        name: '娱乐',
      },
      {
        id: 119,
        name: '鬼畜',
      },
      {
        id: 23,
        name: '电影',
      },
      {
        id: 11,
        name: '电视剧',
      },
      {
        id: 177,
        name: '纪录片',
      },
      {
        id: 181,
        name: '影视',
      },
      {
        id: 155,
        name: '时尚',
      },
      {
        id: 160,
        name: '生活',
      },
      {
        id: 165,
        name: '广告',
      },
      {
        href: 'https://live.bilibili.com/h5/',
        name: '直播',
      },
      {
        href: 'https://h.bilibili.com/ywh/h5/home',
        name: '相簿',
      },
    ];

    return (
      <div className="home">
        <div className="home__topArea">
          <img src={logo} className="home__logo" />
          <div className="home__openAppBtn">
            <p>下载 App</p>
          </div>
        </div>
        <div className="home__zone">
          <div className="pagesContainer">
            <div className="scrollContainer">
              {zoneList.map((zone, index) => (
                <a
                  key={zone.name}
                  href={`${zone.id ? `/channel/${zone.id}.html` : zone.href}`}
                  className={`tab ${index === 0 ? 'tab--active' : ''}`}
                >
                  <p>{zone.name}</p>
                </a>
              ))}
            </div>
          </div>
          <div className="switchContainer">{XialaxiaoIcon}</div>
        </div>
        <div className="home__divider" />
        <div className="home__slider">
          <div id="slider" className="swipe" ref={el => (this.slider = el)}>
            <div className="swipe-wrap">
              {bannerList.map(banner => (
                <a key={banner.id} href={banner.url}>
                  <img src={banner.pic} alt={banner.name} />
                </a>
              ))}
            </div>
            <div className="swipe-btn-wrapper">
              <div className="swipe-btn-list">
                {bannerList.map((_, index) => (
                  <a key={index} className={this.state.active === index ? 'on' : 'off'} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="home__rankingFlowNormal">
          {videoList.map(video => {
            return (
              <a key={video.aid} className="item" href={`https://m.bilibili.com/video/av${video.aid}.html`}>
                <div className="item__imgContainer">
                  <img className="item__tv" src={video.pic} alt={video.title} />
                  <div className="item__info">
                    <div className="item__playIcon">{PlayIocn}</div>
                    <div className="item__play">{formatNumber(video.play)}</div>
                    <div className="item__danmuIcon">{DamuIcon}</div>
                    <div className="item__view">{formatNumber(video.video_review)}</div>
                  </div>
                </div>
                <div className="item__title">
                  <p>{video.title}</p>
                </div>
              </a>
            );
          })}
        </div>
        <div className="home__law">
          <p>哔哩哔哩 沪ICP备13002172号-3</p>
          <p>信息网络传播视听节目许可证：0910417</p>
        </div>
      </div>
    );
  }
}
