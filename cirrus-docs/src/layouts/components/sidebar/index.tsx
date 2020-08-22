import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

import { sidebarConfig, SidebarConfig, SidebarItemConfig } from '../../../config/sidebar';

import './index.scss';

export const Sidebar: React.FC<any> = (props) => {
    function isActiveLink(path: string): boolean {
        return props.location.pathname === path;
    }

    return (
        <div className="sidebar px-3">
            <ul className="menu mb-3">
                {sidebarConfig.map((config: SidebarConfig) => {
                    const title = config.title ? (
                        <div className="sidebar__title font-bold uppercase text-gray-600">{config.title}</div>
                    ) : null;

                    const listItems = config.sidebarItems.map((listItemConfig: SidebarItemConfig) => {
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
                            <li className={`menu-item` + (isActiveLink(listItemConfig.url) ? ` selected` : ``)}>
                                {glyph}
                                <NavLink className={`font-${listItemConfig.fontWeight}`} to={listItemConfig.url}>
                                    {listItemConfig.text}
                                </NavLink>
                            </li>
                        );
                    });

                    return (
                        <>
                            {title}
                            <ul className="menu mb-3">{listItems}</ul>
                        </>
                    );
                })}
            </ul>
        </div>
    );
};
