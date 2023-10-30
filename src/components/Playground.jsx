import '../styles/Playground.css'
import Editor from 'react-simple-code-editor'
import { useState } from 'react';
import '../styles/prism.css';
// import '../utils/prism'
import Prism from 'prismjs';
import '../utils/mopl'

export default function Playground() {
    const [code, setCode] = useState('');
    const highlightCode = (code) => {
        return Prism.highlight(code, Prism.languages.mopl, 'mopl');
    };

    return (
        <div className="playground">
            <Editor
                value={code}
                onValueChange={code => setCode(code)}
                highlight={code => highlightCode(code)}
                padding={'1rem'}
                style={{
                    width: '100%',
                    height: '100%',
                    fontFamily: 'monospace',
                    fontSize: 14,
                    backgroundColor: '#fff',
                    border: '1px solid #ccc',
                    borderRadius: 4,
                    overflow: 'auto'
                }}
            />
        </div>
    )
}