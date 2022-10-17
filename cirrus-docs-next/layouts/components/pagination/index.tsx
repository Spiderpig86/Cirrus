import React from 'react';
import Link from 'next/link';
import TreeMap from 'ts-treemap';

import { SidebarItemConfig, SIDEBAR_CONFIG_MAP, TITLE_UTILITIES } from '../../../config/sidebar';

export interface PaginationLookupProps {
    sectionName: string;
    pageName: string;
}
export interface PaginationProps {
    // Legacy harcoded pagination items
    nextLink?: PaginationDetail;
    prevLink?: PaginationDetail;

    // Provided if we want to automatically determine next and prev pages from given title
    lookupProps?: PaginationLookupProps;
}

export interface PaginationDetail {
    name: string;
    link: string;
}

export const Pagination: React.FC<PaginationProps> = (props) => {
    if (!(props.nextLink || props.prevLink) === !props.lookupProps) {
        throw Error('Either provide prev/next link or sidebar config map');
    }

    const prevLookup = props.lookupProps
        ? SIDEBAR_CONFIG_MAP.get(props.lookupProps.sectionName).lowerEntry(props.lookupProps.pageName)
        : null;
    const nextLookup = props.lookupProps
        ? SIDEBAR_CONFIG_MAP.get(props.lookupProps.sectionName).higherEntry(props.lookupProps.pageName)
        : null;

    return (
        <section className="padtop">
            <div className="content">
                <div className="divider"></div>
                <div className="pagination no-bullets">
                    {prevLookup && (
                        <div className="pagination-item pagination-prev">
                            <Link href={prevLookup[1].url}>
                                <a className="u-block">
                                    <p className="pagination-item-subtitle">Prev</p>
                                    <h5 className="font-alt font-light m-0">{prevLookup[1].text}</h5>
                                </a>
                            </Link>
                        </div>
                    )}
                    {nextLookup && (
                        <div className="pagination-item pagination-next">
                            <Link href={nextLookup[1].url}>
                                <a className="u-block">
                                    <p className="pagination-item-subtitle">Next</p>
                                    <h5 className="font-alt font-light m-0">{nextLookup[1].text}</h5>
                                </a>
                            </Link>
                        </div>
                    )}

                    {props.prevLink && (
                        <div className="pagination-item pagination-prev">
                            <Link href={props.prevLink.link}>
                                <a className="u-block">
                                    <p className="pagination-item-subtitle">Prev</p>
                                    <h5 className="font-alt font-light m-0">{props.prevLink.name}</h5>
                                </a>
                            </Link>
                        </div>
                    )}
                    {props.nextLink && (
                        <div className="pagination-item pagination-next">
                            <Link href={props.nextLink.link}>
                                <a className="u-block">
                                    <p className="pagination-item-subtitle">Next</p>
                                    <h5 className="font-alt font-light m-0">{props.nextLink.name}</h5>
                                </a>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
