export const coDate = (number) => {
    const myDate = new Date(number);
    return myDate.getDate() + "/" + myDate.getMonth();
}