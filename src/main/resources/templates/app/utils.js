let Utils = {
    getCmpFunction (keyName) {           // finished
        let func = function (o, p) {
                var a, b;
                if (typeof o === "object" && typeof p === "object" && o && p) {
                    a = o[keyName];
                    b = p[keyName];
                    if (a === b) {
                        return 0;
                    }
                    if (typeof a === typeof b) {
                        return a < b ? -1 : 1;
                    }
                    return typeof a < typeof b ? -1 : 1;
                }
        }
        return func;
    }
} 

export default Utils;
