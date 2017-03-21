export default class Tools {
    // log
    private static _NoneLogLovel = 0;
    private static _MessageLogLevel = 1;
    private static _WarningLogLevel = 2;
    private static _ErrorLogLevel = 4;

    public static get NoneLogLovel(): number {
        return Tools._NoneLogLovel;
    }
    public static get MessageLogLevel(): number {
        return Tools._MessageLogLevel;
    }
    public static get WarningLogLevel(): number {
        return Tools._WarningLogLevel;
    }
    public static get ErrorLogLevel(): number {
        return Tools._ErrorLogLevel;
    }


    private static _FormatMessage(message: string): string {
        var padStr = i => (i < 10) ? `0${i}` : i
        var date = new Date();
        return `[${padStr(date.getHours())}:${padStr(date.getMinutes())}:${padStr(date.getSeconds())}]: ${message}`
    }

    private static _LogDisabled(message: string): void {
        // nothing to do
    }
    private static _LogEnable(message: string): void {
        let formattedMessage = Tools._FormatMessage(message);
        console.log('HTK - ' + formattedMessage);
    }

    private static _WarnDisabled(message: string): void {
        // nothing to do
    }
    private static _WarnEnable(message: string): void {
        let formattedMessage = Tools._FormatMessage(message)
        console.warn('HTK - ' + formattedMessage);
    }

    private static _ErrorDisabled(message: string): void {
        // nothing to od
    }
    private static _ErrorEnable(message: string): void {
        let formattedMessage = Tools._FormatMessage(message);
        console.error('HTK - ' + formattedMessage);
    }

    public static Log: (message: string) => void = Tools._LogEnable;
    public static Warn: (message: string) => void = Tools._WarnEnable;
    public static Error: (message: string) => void = Tools._ErrorEnable;

    public static set LogLevels(level: number) {
        if ((level & Tools.MessageLogLevel) === Tools.MessageLogLevel) {
            Tools.Log = Tools._LogEnable;
        } else {
            Tools.Log = Tools._LogDisabled;
        }

        if ((level & Tools.WarningLogLevel) === Tools.WarningLogLevel) {
            Tools.Warn = Tools._WarnEnable;
        } else {
            Tools.Warn = Tools._WarnDisabled;
        }

        if ((level & Tools._ErrorLogLevel) === Tools.ErrorLogLevel) {
            Tools.Error = Tools._ErrorEnable
        } else {
            Tools.Error = Tools._ErrorDisabled;
        }

    }


    public static get Now(): number {
        if (window.performance && window.performance.now) {
            return window.performance.now();
        }
        return new Date().getTime();
    }


    // lazyImage
    public static lazyload(els: HTMLCollectionOf<HTMLImageElement>) {
        for (let i = 0; i < els.length; i++) {
            let el = els[i] as HTMLImageElement
            // 元素上边相对于视窗的的位置 小于 视窗的高度，即可判定元素已处在视窗内
            if (el.getBoundingClientRect().top < document.documentElement.clientTop && !el.isLoad) {
                el.isLoad = true
                el.style.cssText = `opacity: 0;`
                if (el.dataset) {
                    this._afterLoadImg(el, el.dataset['src'])
                } else {
                    this._afterLoadImg(el, el.getAttribute('data-src'))
                }

                setTimeout(() => {
                    el.style.cssText = `transition: opacity 1s; opacity: 1;`
                }, 16);
            }
        }
    }

    private static _afterLoadImg(img: HTMLImageElement, url: string) {
        let oImg = new Image()
        oImg.src = url
        oImg.onload = () => {
            img.src = oImg.src
            img.removeAttribute('data-src') // clear attribute
        }
    }

    public static getQueryString() {
        let url = location.search; //获取url中"?"符后的字串   
        let theRequest = new Object();
        if (url.indexOf("?") !== -1) {
            var str = url.substr(1);
            let strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }
}