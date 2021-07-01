import React, { useState } from "react"
import ColoredCirle from "./ColoredCircle"

const ColoredCircles = () => {
    const [circles, setCircles] = useState([])

    return (
        <>
            <ColoredCirle />
        </>
    )
}

export default ColoredCircles