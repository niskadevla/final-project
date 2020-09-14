export const camelCase =  /^[a-z]+[A-Z]{1}[a-z]+$/;
export const kebabCase =  /^[a-z]+-{1}[a-z]+$/;
export const spaceCase =  /^[A-Z]{1}[a-z]+[A-Z]{1}[a-z]+$/;
export const allowedEmail = /^(\w+\.?){0,3}@(\w){0,5}(\.com|\.net|\.org|\.co|\.us)$/;
export const allowedPassword =  /\w(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
