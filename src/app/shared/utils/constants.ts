export const camelCaseRegexp =  /^[a-z]+[A-Z]{1}[a-z]+$/;
export const kebabCaseRegexp =  /^[a-z]+-{1}[a-z]+$/;
export const spaceCaseRegexp =  /^[A-Z]{1}[a-z]+[A-Z]{1}[a-z]+$/;
export const allowedEmailRegexp = /^(\w+\.?){0,3}@(\w){0,5}(\.com|\.net|\.org|\.co|\.us)$/;
export const allowedPasswordRegexp =  /\w(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;

// export const tokenLifeTime = 60 * 60 * 1000;
export const tokenLifeTime = 5000;

export const QUERY_PARAMS = {
    accessAllowed: {
        text: 'Now we migth login to system',
        type: 'success'
    },
    accessDenied: {
        text: 'You should login to system',
        type: 'danger'
    },
    sessionHasExpired: {
        text: 'Your current session has expired. Please login again to continue using this app!',
        type: 'danger'
    }
};

