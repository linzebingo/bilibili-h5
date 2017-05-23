const LOG_PREFIX = 'REM'

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
        console.log(LOG_PREFIX +  ' - ' + formattedMessage);
    }

    private static _WarnDisabled(message: string): void {
        // nothing to do
    }
    private static _WarnEnable(message: string): void {
        let formattedMessage = Tools._FormatMessage(message)
        console.warn(LOG_PREFIX + ' - ' + formattedMessage);
    }

    private static _ErrorDisabled(message: string): void {
        // nothing to od
    }
    private static _ErrorEnable(message: string): void {
        let formattedMessage = Tools._FormatMessage(message);
        console.error(LOG_PREFIX + ' - ' + formattedMessage);
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
