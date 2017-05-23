import * as Vue from 'vue'

export default (_Vue: typeof Vue, options = {}) => {
    if (!Array.prototype['remove']) {
        Array.prototype['remove'] = function (item) {
            if (!this.length) {
                return
            }
            var index = this.indexOf(item);
            if (index > -1) {
                this.splice(index, 1);
                return this
            }
        }
    }
    const config = {
        defaultImage: 'http://static.hdslb.com/images/v3images/img_loading.png',
        distance: 0
    };

    var listenList = new Array<ImageInfo>()
    var imageCatcheList = new Array<string>()

    const isAlreadyLoad = (imageSrc: string) => {
        if (imageCatcheList.indexOf(imageSrc) > -1) {
            return true;
        } else {
            return false;
        }
    }

    const isCanShow = (item: ImageInfo) => {
        var ele = item.ele
        var src = item.src

        if (ele.getBoundingClientRect().top - config.distance < document.documentElement.clientHeight) {
            var image = new Image()
            image.src = src
            ele.style.opacity = '0'
            image.onload = () => {
                ele.src = src
                imageCatcheList.push(src)
                listenList['remove'](item)
                image.removeAttribute('data-src')
                ele.style.transition = 'opacity 1s'
                ele.style.webkitTransition = 'opacity 1s'
                setTimeout(() => {
                    ele.style.opacity = '1'
                }, 1)
            }
            image.onerror = (ev) => {
                console.error(ev)
            }
            return true
        } else {
            return false
        }
    }

    const onListenScroll = () => {
        window.addEventListener('scroll', () => {
            var length = listenList.length
            for (let i = 0; i < length; i++) {
                isCanShow(listenList[i])
            }
        })
    }

    const addListener: Vue.DirectiveFunction = (ele: HTMLImageElement, binding) => {
        const imageSrc = ele.dataset['src'] || ele['data-src']
        if (isAlreadyLoad(imageSrc)) {
            ele.src = imageSrc
            return false
        }

        var item: ImageInfo = {
            ele: ele,
            src: imageSrc
        }
        ele.src = config.defaultImage

        if (isCanShow(item)) {
            return
        }

        listenList.push(item)

        onListenScroll()
    }

    _Vue.directive('lazyload', {
        inserted: addListener,
        update: addListener
    })
}

interface ImageInfo {
    ele: HTMLImageElement;
    src: string;
}
