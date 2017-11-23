import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
    if (!data.length) return null;
    let total = data.reduce((a, b) => a + b);
    return Math.round((total / data.length));
}

export default (props) => {
    return (
        <div>
            <Sparklines height={props.height || 120} width={props.width || 180} data={props.data}>
                <SparklinesLine color={props.color || 'red'} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    );
}