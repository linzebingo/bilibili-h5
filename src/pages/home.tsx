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
      callback: (index, element) => {
        this.setState({ active: index });
      },
      transitionEnd: (index, element) => {},
    });
  }

  render() {
    const { videoList, bannerList } = this.state;

    return (
      <div className="home">
        <div className="home__topArea">
          <img src={logo} className="home__logo" />
          <div className="home__openAppBtn">
            <p>下载 App</p>
          </div>
        </div>
        <div className="home__zone">选取</div>
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
                    <div className="item__playIcon">icon</div>
                    <div className="item__play">{video.play}</div>
                    <div className="item__danmuIcon">icon</div>
                    <div className="item__view">{video.video_review}</div>
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
