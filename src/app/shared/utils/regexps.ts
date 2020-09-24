export const camelCaseRegexp =  /^[a-z]+[A-Z]{1}[a-z]+$/;
export const kebabCaseRegexp =  /^[a-z]+-{1}[a-z]+$/;
export const spaceCaseRegexp =  /^[A-Z]{1}[a-z]+[A-Z]{1}[a-z]+$/;
export const allowedEmailRegexp = /^(\w+\.?){0,3}@(\w){0,5}(\.com|\.net|\.org|\.co|\.us)$/;
export const allowedPasswordRegexp =  /\w(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
export const allowedLettersRegExp = /^[a-zA-Z]+$/;
