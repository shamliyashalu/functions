function positiveuniquevalue(array,valuestocheck){
    return valuestocheck > 0 && array.indexOf(valuestocheck) === array.lastIndexOf(valuestocheck);
}

const array =[5, 99, 832, -3, -4];
 console.log(positiveuniquevalue(array));