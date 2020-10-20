import React from 'react';
import Link from 'next/link';

export interface PaginationProps {
    nextLink?: PaginationDetail;
    prevLink?: PaginationDetail;
}

export interface PaginationDetail {
    name: string;
    link: string;
}

export const Pagination: React.FC<PaginationProps> = (props) => {
    return (
        <section className="padtop">
            <div className="content">
                <div className="divider"></div>
                <div className="pagination no-bullets">
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
