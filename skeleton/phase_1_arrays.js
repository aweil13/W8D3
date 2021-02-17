Array.prototype.uniq = function () {
    let newArray = [];
    this.forEach(element => {
        if  (!newArray.includes(element))  
            newArray.push(element)
         
    }); 
    return newArray;
}

    