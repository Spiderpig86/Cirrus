export function FormatString(str: string, ...val: string[]) {
    for (let index = 0; index < val.length; index++) {
        str = str.replace(new RegExp(`\\(${index}\\)`, 'g'), val[index]);
    }
    return str;
}

export function Capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.substring(1);
}