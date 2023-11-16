import { useState } from "react"

export function Torch (props) {
    const [torchOn, setTorchOn] = useState(false)
    const toggleTorch = () => {
        props.handleToggle(props.index, !torchOn)
        setTorchOn(!torchOn)
    }
    return <div className={`torch ${torchOn ? "torch-on" : "torch-off"}`} onClick={() => toggleTorch()}></div>
}