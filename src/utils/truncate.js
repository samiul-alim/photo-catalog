const truncate = function (str, length = 100, ending = '...') {
    if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
    } else {
        return str;
    }
};

export default truncate;