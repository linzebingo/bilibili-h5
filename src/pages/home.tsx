import * as React from 'react';
import logo from '../assets/logo.svg';

export default class HomePage extends React.Component<{}, { active: number }> {
  slider: any;

  constructor(props: any) {
    super(props);
    this.state = { active: 0 };
  }
  componentDidMount() {
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
    const Item = (
      <div className="item">
        <div className="item__imgContainer">
          <img
            className="item__tv"
            src="https://i2.hdslb.com/bfs/archive/50d36b0a0e2ef7e2ea2b8e72372db563bf8c3caf.jpg@320w_200h.webp"
            alt=""
          />
          <div className="item__info">
            <div className="item__playIcon">icon</div>
            <div className="item__play">94.1万</div>
            <div className="item__danmuIcon">icon</div>
            <div className="item__view">2768</div>
          </div>
        </div>
      </div>
    );
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
              <a>
                <img src="https://i0.hdslb.com/bfs/archive/ad709e860662133d22139de96fc45132f5526ff7.jpg@480w_300h.webp" />
              </a>
              <a>
                <img src="https://i0.hdslb.com/bfs/archive/550adb4bba5cb0141c6bfaf31937e5042066c160.jpg@480w_300h.webp" />
              </a>
              <a>
                <img src="https://i0.hdslb.com/bfs/archive/9e47195476bba9f79f5a70214d918339646938db.jpg@480w_300h.webp" />
              </a>
            </div>
            <div className="swipe-btn-wrapper">
              <div className="swipe-btn-list">
                <a href="" className={this.state.active === 0 ? 'on' : 'off'} />
                <a href="" className={this.state.active === 1 ? 'on' : 'off'} />
                <a href="" className={this.state.active === 2 ? 'on' : 'off'} />
              </div>
            </div>
          </div>
        </div>
        <div className="home__rankingFlowNormal">
          {Item}
          {Item}
        </div>
        <div className="home__law">
          <p>哔哩哔哩 沪ICP备13002172号-3</p>
          <p>信息网络传播视听节目许可证：0910417</p>
        </div>
      </div>
    );
  }
}
