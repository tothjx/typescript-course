// tudom h nem tokeletes de nem akartam uuid-t hasznalni
export function getUnid() {
    var d = new Date();
    return "".concat(d.getFullYear()).concat(d.getMonth()).concat(d.getDate(), "-").concat(d.getHours()).concat(d.getMinutes()).concat(d.getSeconds(), "-").concat(d.getMilliseconds());
}
