import React from 'react'


type Props = {
    width?: number;
    height?: number;
}

function SizedBox({
    width = 0,
    height = 0,
}: Props) {
    return (
        <div style={{ width: `${width}px`, height: `${height}px` }}></div>
    )
}

export default SizedBox