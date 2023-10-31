import '../styles/Playground.css'
import { useState } from 'react';
import '../styles/prism.css';
import '../utils/mopl'

import AceEditor from "react-ace";

// import "ace-builds/src-noconflict/mode-javascript";
import "../utils/mopl-mode";
import '../utils/mopl-twilight';
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";

function onChange(newValue) {
    console.log("change", newValue);
}


export default function Playground() {
    const [code, setCode] = useState('');

    return (
        <div className="playground">
            <AceEditor
                className='editor'
                mode="mopl"
                theme="mopl-twilight"
                onChange={onChange}
                editorProps={{ $blockScrolling: true}}
                style={{ 
                    height: '100%',
                    fontSize: '1rem'
                }}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true
                }}
            />
        </div>
    )
}