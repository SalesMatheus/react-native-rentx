declare namespace ReactNavigation {

    import { CarDTO } from '../../dtos/CarDTO';

    interface SchelingDT {
        car: CarDTO;
        dates: string[];
    }
    interface UserData {
        user: {
            name: string;
            email: string;
            cnh: string;
        }
    }
    interface PageConfirm {
        title: string;
        message: string;
        nextScreenRoute: string;
    }
    export interface RootParamList {
        Home: undefined;
        CarDetails: CarDTO;
        Scheduling: CarDTO;
        SchedulingDetails: SchelingDT;
        Confirmation: PageConfirm;
        MyCars: undefined;
        SignUpFistStep: undefined;
        SignUpSecondStep: UserData;
    }
}