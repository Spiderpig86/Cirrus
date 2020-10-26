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
                <div className="frame">
                    <div
                        className={`frame__body m-0 ${swatch.class}`}
                        style={{
                            height: '100px',
                        }}
                    ></div>
                    <div className="frame__footer">
                        <div style={{
                            fontSize: '85%'
                        }}><b>{swatch.name}</b></div>
                        {swatch.hex && <div className="text-gray-600" style={{
                            fontSize: '85%'
                        }}>{`#${swatch.hex}`}</div>}
                    </div>
                </div>
            </div>
        );
    });

    return <div className="row">{swatches}</div>;
};
