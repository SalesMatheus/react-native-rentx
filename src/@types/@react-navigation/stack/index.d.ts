declare namespace ReactNavigation {

    import { CarDTO } from '../../dtos/CarDTO';

    interface SchelingDT {
        car: CarDTO;
        dates: string[];
    }

    export interface RootParamList {
        Home: undefined;
        CarDetails: CarDTO;
        Scheduling: CarDTO;
        SchedulingDetails: SchelingDT;
        SchedulingComplete: undefined;
    }
}