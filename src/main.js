/**
 * 获取数组的最后一个
 * @returns {undefined|*}
 */
Array.prototype.last = function () {
    if (this.length === 0)
        return undefined
    return this[this.length - 1]
}

Date.prototype.format = function (fmt) {
    let o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}

String.prototype.copyStr = function () {
    let aux = document.createElement("input");
    aux.setAttribute("value", this);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}


/**
 * 获取昨天的日期
 * @returns {*}
 */
Date.prototype.getYestoday = function () {
    return new Date(Date.now() - 1000 * 60 * 60 * 24).format("yyyy-MM-dd")
}

/**
 * 判断是否浮点数，使用：Number().isFloat(number,3)
 * @param number
 * @returns {boolean}
 */
Number.prototype.isFloat = function (number) {
    let val = number || this
    return !isNaN(Number(val)) && val.toString().indexOf('.') > -1
}

module.exports = {
    test() {
        console.log('test')
    }
}
