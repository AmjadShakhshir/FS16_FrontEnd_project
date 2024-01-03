type CurrentUser = {
    _id: string,
    name: string;
    password: string;
    email: string;
    role: string;
    permissions: string[];
    avatar: string;
    accessToken: string;
    logInWithGoogle?: boolean;
};

export default CurrentUser;