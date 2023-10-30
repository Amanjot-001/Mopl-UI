import '../styles/Playground.css'
import Editor from 'react-simple-code-editor'
import { useState } from 'react';
import 'prismjs/themes/prism.css';
import Prism, { highlightAll } from 'prismjs';
import '../utils/mopl'

export default function Playground() {
    const [code, setCode] = useState('');
    // const [highlightedCode, setHighlightedCode] = useState('');

    // const handleCodeChange = (event) => {
    //     const newCode = event.target.value;
    //     setCode(newCode);

    //     const highlighted = Prism.highlight(newCode, Prism.languages.mopl, 'mopl');
    //     setHighlightedCode(highlighted);
    // };
    const highlightCode = (code) => {
        return Prism.highlight(code, Prism.languages.mopl, 'mopl');
    };


    return (
        <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => highlightCode(code)}
            padding={'1rem'}
            style={{
                fontFamily: 'monospace',
                fontSize: 14,
                backgroundColor: '#f5f5f5',
                border: '1px solid #ccc',
                borderRadius: 4,
            }}
        />
        // <div className="playground">
        //     <textarea
        //         cols="30"
        //         rows="10"
        //         value={code}
        //         onChange={handleCodeChange}
        //         className="language-mopl"
        //     ></textarea>
        //     <div className="highlighted-code">
        //         <pre>
        //             <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        //         </pre>
        //     </div>
        // </div>
    )
}