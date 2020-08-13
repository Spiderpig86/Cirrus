import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { sidebarConfig } from '../../config/sidebar';

import './index.scss';

export const Sidebar: React.FC<any> = () => {
    return (
        <div className="sidebar px-3">
            <ul className="menu mb-3">
                {sidebarConfig.map((config) => {
                    const title = config.title ? (
                        <span className="font-bold uppercase text-gray-500">Getting Started</span>
                    ) : null;

                    const listItems = config.sidebarItems.map((listItemConfig) => {
                        const glyph = listItemConfig.glyph ? (
                            <div className="menu-addon">
                                <span className="icon">
                                    <FontAwesomeIcon className="fa-wrapper small" icon={listItemConfig.glyph} />
                                </span>
                            </div>
                        ) : (
                            <></>
                        );

                        return (
                            <li className="menu-item">
                                {glyph}
                                <a href={listItemConfig.url}>{listItemConfig.text}</a>
                            </li>
                        );
                    });

                    return (
                        <>
                            {title}
                            <ul className="menu mb-3">
                                {listItems}
                            </ul>
                        </>
                    );
                })}

                </ul>
        </div>
    );
};
