import React from "react";


export default function Sidebar(props) {

    let {bg} = props;
    return (
        <div>
            <button>戻る</button>
            sadebar
            <button>ホーム</button>
            <div style={{background: bg, width: '200px'}}>
                <ul>
                    <li>111</li>
                    <li>111</li>
                    <li>111</li>
                    <li>111</li>
                    <li>111</li>
                    <li>111</li>
                    <li>111</li>
                </ul>
            </div>
        </div>
    )
}