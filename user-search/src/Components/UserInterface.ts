
interface MainInfo {
    location: string;
    twitter: string;
    githubLink: string;
    company: string;
}

interface ProfileInfo{
    repos: number;
    followers: number;
    following: number;
}

interface DateJoin{
    monthNumber: number;
    monthOfTheYear: string;
    year: number;
}

 export interface UserInterface{
    id: number;
    userName: string;
    gmail: string;
    avatarImg: string,
    joinDate: DateJoin;
    bio: string;
    profileInfo: ProfileInfo;
    mainInfo: MainInfo;
}

