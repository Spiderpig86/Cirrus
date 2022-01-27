import React from 'react';

export interface DisplayProps {
    swatches: Swatch[];
}

export interface Swatch {
    class: string;
    name: string;
    hex?: string;
}

export const Display: React.FC<DisplayProps> = (props) => {
    const swatches = props.swatches.map((swatch: Swatch, index: number) => {
        return (
            <div key={index} className="col-4 mb-2">
                <div className={`frame u-round-xs u-shadow-lg ${swatch.class}`}>
                    <div className="frame__body py-8"></div>
                    <div className="frame__footer bg-white py-1 u-bg-opacity-80">
                        <div className="text-gray-700 text-sm">
                            <b>{swatch.name}</b>
                        </div>
                        {swatch.hex && <div className="text-gray-600 text-sm">{`#${swatch.hex}`}</div>}
                    </div>
                </div>
            </div>
        );
    });

    return <div className="row">{swatches}</div>;
};
