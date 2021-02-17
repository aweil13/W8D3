// Array.prototype.myEach = function (callback) {
//     this.forEach(element => {
//         function callback() {
//             element
//         }
//     });
// }

Array.prototype.myEach = function (callback) {
    for (let i =0; i < this.length; i++) {
        callback(this[i])
    }
};