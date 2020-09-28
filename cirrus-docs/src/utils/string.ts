export function FormatString(str: string, ...val: string[]) {
    for (let index = 0; index < val.length; index++) {
        str = str.replace(new RegExp(`\\(${index}\\)`, 'g'), val[index]);
    }
    return str;
}