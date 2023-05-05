export const convertNumber = (number) => {
    const numberWithComma = number.toLocaleString();
    var arr = numberWithComma.split(",");
    if (arr.length == 5) {
        //trillion
        return arr[0]+","+arr[1].slice(0,2)+"T"
    } else if (arr.length == 4) {
        //billions
    return arr[0] + "," + arr[1].slice(0, 2) + "T";
    }else if(arr.len)
    
}