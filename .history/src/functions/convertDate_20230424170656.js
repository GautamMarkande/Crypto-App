export const coinDate = (number) => {
    const myDate = new Date(number);
    return myDate.getDate()+""
}