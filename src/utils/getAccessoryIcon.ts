import AccelerationSvg from '../assets/acceleration.svg';
import CarSvg from '../assets/car.svg';
import EnergySvg from '../assets/energy.svg';
import ExchangeSvg from '../assets/exchange.svg';
import ForceSvg from '../assets/force.svg';
import GasolineSvg from '../assets/gasoline.svg';
import HybridSvg from '../assets/hybrid.svg';
import PeopleSvg from '../assets/people.svg';
import SpeedSvg from '../assets/speed.svg';

export function getAccessoryIcon(type: string){
    switch (type) {
        case 'acceleration':
            return AccelerationSvg;

        case 'electric_motor':
            return EnergySvg;

        case 'exchange':
            return ExchangeSvg;

        case 'turning_diameter':
            return ForceSvg;

        case 'gasoline_motor':
            return GasolineSvg;

        case 'hybrid_motor':
            return HybridSvg;

        case 'seats':
            return PeopleSvg;

        case 'speed':
            return SpeedSvg;

        default:
            return CarSvg;
    }
}