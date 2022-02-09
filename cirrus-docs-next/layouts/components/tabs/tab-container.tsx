import React, { useEffect } from 'react';

import initializeTabs from '../../../static/js/tabs.js';

export interface TabContainerProps {
    id: string;
    tabs: TabPageProps[];
    selectedIndex: number;
    generateTabDesign?: (tab: TabPageProps, selected: boolean) => React.ReactElement;
}

export interface TabPageProps {
    title: string;
    children: React.ReactElement;
}

export const TabContainer: React.FC<TabContainerProps> = (props) => {
    useEffect(() => {
        setTimeout(() => {
            initializeTabs();

            eval(`
            const installationTabs = tabs({
                el: '${props.id}',
                tabNavigationLinks: '.tab-item',
                tabContentContainers: '.tabpage'
            });
            installationTabs.init();`);
            }, 200);
    }, []);

    return (
        <div id={props.id.substring(1)}>
            <div className="tab-container tabs-depth tabs-fill mb-3">
                <ul>
                    {props.tabs.map((tab, index) => {
                        return props.generateTabDesign
                            ? props.generateTabDesign(tab, index === props.selectedIndex)
                            : defaultGenerateTabDesign(tab, index === props.selectedIndex);
                    })}
                </ul>
            </div>

            {props.tabs.map((tab, index) => {
                return (
                    <div className={`tabpage${index === props.selectedIndex ? ' tabpage--shown' : ''}`} key={index}>
                        {tab.children}
                    </div>
                );
            })}
        </div>
    );
};

function defaultGenerateTabDesign(tab: TabPageProps, selected: boolean) {
    return (
        <li className={`tab-item ${selected ? 'selected' : ''}`} key={tab.title}>
            <a>{tab.title}</a>
        </li>
    );
}
