module.exports = function createDreamTeam(members) {
    if (members instanceof Array){
        let arr = members;
        arr = arr.filter(item => (typeof item)=='string').map(item => item.split('').find(item => item.match(/[a-zA-Z]+/g))).filter(item => (typeof item)=='string');
        arr = arr.map(item => item.toUpperCase()).sort().join('');
        return arr
    }
    return false
};