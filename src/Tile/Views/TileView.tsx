import React, { useState, useEffect } from 'react';
import { processColorsToTiles } from '../Facades/TileFacade';
import { ColorModel } from '../Models/ColorModel';
import { TileModel } from '../Models/TileModel';
import { getColorsApi } from '../Services/Apis/TileServiceApi';

const TileView: React.FC = () => {

    const [tiles, setTiles] = useState<Array<TileModel> | []>([]);
    console.log(tiles);

    const getColors = async () => {
        try {
            const color: ColorModel | undefined = await getColorsApi();
            if (color) {
                const processedTiles: Array<TileModel> = processColorsToTiles(color);
                setTiles(processedTiles);
            }
        } catch (ex) {
        }
    };

    useEffect(() => {
        getColors();
    }, []);

    return (<div>
        <div className="row">
            {tiles.map((item: TileModel) => (
                <div className="col-4" style={{ backgroundColor: item.color, width: 300, height: 300, margin: 100 }}>
                </div>
            ))}
        </div>
    </div>);
}
export default TileView;


