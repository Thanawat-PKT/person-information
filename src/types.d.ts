import { Add } from "@material-ui/icons";


export type PersonState = {
    id: string;
    fullname:string;
    cihZenID:string;
    phone:string;
    gender:string;
    startDate:any;
    [key as string]:any;
};