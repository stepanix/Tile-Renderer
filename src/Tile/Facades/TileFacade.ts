import { TileModel } from "../Models/TileModel";

const colorPositionMap = new Map<string, number>();
const colorCodeMap =  new Map<string, string>();


export const processColorsToTiles = (payload: any): Array<TileModel> => {
    initColorMap();
    initColorCodeMap();
    const tileArray: Array<TileModel> = [];
    if (payload) {
        for (let key in payload) {
            const colorPosition: number | undefined = colorPositionMap.get(key.toLowerCase());
            const colorCode: string | undefined = colorCodeMap.get(payload[key].toString().toLowerCase());
            if (colorPosition && colorCode) {
                const tileModel: TileModel = {
                    position: colorPosition,
                    color: colorCode
                }
                tileArray.push(tileModel);
            }
        }
        tileArray.sort((a: TileModel, b: TileModel) => a.position - b.position);
    }
    return tileArray;
};

const initColorCodeMap = () =>{
    colorCodeMap.set('red', '#B22222');
    colorCodeMap.set('orange', '#FFA500');
    colorCodeMap.set('yellow', '#FFFF00');
    colorCodeMap.set('green', '#006400');
    colorCodeMap.set('blue', '#0000FF');
    colorCodeMap.set('indigo', '#4B0082');
    colorCodeMap.set('violet', '#EE82EE');
    colorCodeMap.set('grey', '#808080');
    colorCodeMap.set('black', '#000000');
};

const initColorMap = () => {
    colorPositionMap.set('one', 1);
    colorPositionMap.set('two', 2);
    colorPositionMap.set('three', 3);
    colorPositionMap.set('four', 4);
    colorPositionMap.set('five', 5);
    colorPositionMap.set('six', 6);
    colorPositionMap.set('seven', 7);
    colorPositionMap.set('eight', 8);
    colorPositionMap.set('nine', 9);
};