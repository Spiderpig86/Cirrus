import React from 'react';

export interface TabContainerProps {
    tabs: TabPageProps[];
    shownIndex: number;
}

export interface TabPageProps {
    title: string;
    children: React.ReactElement;
    shown: boolean;
}

export const TabContainer: React.FC<TabContainerProps> = (props) => {
    return (
        <div className="tab-container mb-3">
            <ul>
                {props.tabs.map((tab, index) => {
                    return (
                        <li className={`tab-item ${index === props.shownIndex ? 'selected' : ''}`}>
                            <a>{tab.title}</a>
                        </li>
                    );
                })}
            </ul>
            {props.tabs.map((tab, index) => {
                return <div className={`tabpage ${index === props.shownIndex ? 'tabpage--shown' : ''}`}>
                    {tab.children}
                </div>;
            })}
        </div>
    );
};
