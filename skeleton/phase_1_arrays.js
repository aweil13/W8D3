Array.prototype.uniq = function () {
    let newArray = [];
    this.forEach(element => {
        if  (!newArray.includes(element))  
            newArray.push(element)
         
    }); 
    return newArray;
}

// Array.prototype.toSum = function () {
//     let newArray = [];
//     this.forEach(element => {
//         if (this.includes(-element ))
//             newArray.push([this.indexOf(element), this.indexOf(-element)])

//     });
//     return newArray.splice(0, (newArray.length) /2);
// }

Array.prototype.toSum = function () {
    let newArray = [];
    this.forEach(ele1 => {
        let checked= []
        this.forEach(ele2 => {
            if (this.indexOf(ele2) > this.indexOf(ele1) && (ele1 + ele2 === 0) && !checked.includes(this.indexOf(ele2)))
            newArray.push([this.indexOf(ele1), this.indexOf(ele2)]);
            checked.push(this.indexOf(ele2));
        });
    });
    return newArray;
};


    