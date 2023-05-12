import React, { useState } from "react"
import { LayoutGroup } from "framer-motion"

const Component: React.FC<any> = () => {
    const [text, setText] = useState('Hello')
    return (
        <LayoutGroup>
            <div>
                {text}
            </div>
        </LayoutGroup>
    )
}

export default Component