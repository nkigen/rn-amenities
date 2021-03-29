import { NativeModules } from 'react-native';

type RnAmenitiesType = {
  multiply(a: number, b: number): Promise<number>;
};

const { RnAmenities } = NativeModules;

export default RnAmenities as RnAmenitiesType;
