import React from 'react';

export interface TagProp {
    classes: string;
    text: string;
}

export interface TagProps {
    leftProps: TagProp;
    rightProps: TagProp;
}

export const Tag: React.FC<any> = (props: TagProps) => {
    return (
        <span className="tag-container group-tags">
            <div className={'tag ' + props.leftProps.classes}>{props.leftProps.text}</div>

            <div className={'tag ' + props.rightProps.classes}>{props.rightProps.text}</div>
        </span>
    );
};

export interface VersionTagProps {
    version: string;
    text?: string;
}

export const VersionTag: React.FC<VersionTagProps> = (props: VersionTagProps) => {
    return (
        <Tag
            leftProps={{
                classes: `tag--dark`,
                text: props.text ?? `New`,
            }}
            rightProps={{
                classes: `tag--info`,
                text: props.version,
            }}
        />
    );
};
