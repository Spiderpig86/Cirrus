import React from 'react';

import { TableWrapper } from "../table-wrapper";

export const BuildSizeTable: React.FC<any> = (props) => {
    return (
        <TableWrapper>
            <table className="table bordered">
                <tbody>
                    <tr>
                        <th>Flavor</th>
                        <th>Minified</th>
                        <th>Gzip</th>
                        <th>Brotli</th>
                    </tr>
                    <tr>
                        <td>Core</td>
                        <td>
                            <img src="https://img.badgesize.io/Spiderpig86/Cirrus/master/dist/cirrus-core.min.css.svg?style=flat-square" />
                        </td>
                        <td>
                            <img src="https://img.badgesize.io/Spiderpig86/Cirrus/master/dist/cirrus-core.min.css.svg?compression=gzip&style=flat-square" />
                        </td>
                        <td>
                            <img src="https://img.badgesize.io/Spiderpig86/Cirrus/master/dist/cirrus-core.min.css.svg?compression=brotli&style=flat-square" />
                        </td>
                    </tr>
                    <tr>
                        <td>Ext (Full)</td>
                        <td>
                            <img src="https://img.badgesize.io/Spiderpig86/Cirrus/master/dist/cirrus.min.css.svg?style=flat-square" />
                        </td>
                        <td>
                            <img src="https://img.badgesize.io/Spiderpig86/Cirrus/master/dist/cirrus.min.css.svg?compression=gzip&style=flat-square" />
                        </td>
                        <td>
                            <img src="https://img.badgesize.io/Spiderpig86/Cirrus/master/dist/cirrus.min.css.svg?compression=brotli&style=flat-square" />
                        </td>
                    </tr>
                    <tr>
                        <td>All</td>
                        <td>
                            <img src="https://img.badgesize.io/Spiderpig86/Cirrus/master/dist/cirrus-all.min.css.svg?style=flat-square" />
                        </td>
                        <td>
                            <img src="https://img.badgesize.io/Spiderpig86/Cirrus/master/dist/cirrus-all.min.css.svg?compression=gzip&style=flat-square" />
                        </td>
                        <td>
                            <img src="https://img.badgesize.io/Spiderpig86/Cirrus/master/dist/cirrus-all.min.css.svg?compression=brotli&style=flat-square" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </TableWrapper>
    );
};
