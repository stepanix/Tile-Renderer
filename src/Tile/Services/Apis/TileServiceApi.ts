import axios from 'axios';
import { ColorModel } from '../../Models/ColorModel';

export const getColorsApi = async (): Promise<ColorModel | undefined> => {
    const endPoint = "https://rw-jackfruit-public-dev.s3.us-west-2.amazonaws.com/colors.json";
    try {
        const res = await axios.get(endPoint);
        return res.data;
    } catch (error) {
        return undefined;
    }
};