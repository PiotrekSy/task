//function to capitalize first letters of words on demand:
export const capitalize = (string) => {
    var rawString = string.toLowerCase().split(' ');
    for (var i = 0; i < rawString.length; i++) {
        rawString[i] = rawString[i].charAt(0).toUpperCase() + rawString[i].substring(1);
    }
    return rawString.join(' ');
}