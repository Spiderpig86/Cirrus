import React, { useEffect, useRef } from 'react';
import { MotionValue, useTransform } from 'framer-motion';
import { InputRange } from 'framer-motion/types/value/use-transform';

export interface CounterProps {
    from: number;
    to: number;
    progress: MotionValue;
    round?: number;
    inputRange: InputRange;
}

export const Counter: React.FC<CounterProps> = (props) => {
    let { from, to, progress, round, inputRange } = props;
    if (!round) {
        round = 0;
    }

    const ref = useRef(null);
    const value = useTransform(progress, inputRange, [from, to], { clamp: false });
    const { format: formatNumber } = new Intl.NumberFormat(undefined, {
        minimumFractionDigits: round,
        maximumFractionDigits: round,
    });

    useEffect(() => {
        return value.onChange((v) => {
            const node = ref.current;
            if (node) {
                node.firstChild.data = formatNumber(round === 0 ? Math.round(v) : Number(v.toFixed(round)));
            }
        });
    }, []);

    return <span ref={ref}>{formatNumber(value.get())}</span>;
};
