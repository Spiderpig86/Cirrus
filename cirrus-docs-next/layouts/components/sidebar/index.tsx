import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { sidebarConfig, SidebarConfig, SidebarItemConfig } from '../../../config/sidebar';

export const Sidebar: React.FC<any> = (props) => {
    const router = useRouter();

    function isActiveLink(path: string): boolean {
        return router.pathname === path;
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
                            <div className="menu-addon" key={listItemConfig.url + listItemConfig.text}>
                                <span className="icon">
                                    <FontAwesomeIcon className="fa-wrapper small" icon={listItemConfig.glyph} />
                                </span>
                            </div>
                        ) : (
                            <></>
                        );

                        return (
                            <li
                                className={`menu-item` + (isActiveLink(listItemConfig.url) ? ` selected` : ``)}
                                key={listItemConfig.url + listItemConfig.text}
                            >
                                {glyph}
                                <Link href={listItemConfig.url}>
                                    <a className={`font-${listItemConfig.fontWeight}`}>{listItemConfig.text}</a>
                                </Link>
                            </li>
                        );
                    });

                    return (
                        <div key={config.title}>
                            {title}
                            <ul className="menu mb-3">{listItems}</ul>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
};
