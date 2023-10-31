import '../styles/Playground.css'
import Editor from 'react-simple-code-editor'
import { useState } from 'react';
import '../styles/prism.css';
// import '../utils/prism'
import Prism from 'prismjs';
import '../utils/mopl'
import { highlight, languages } from 'prismjs'

export default function Playground() {
    const [code, setCode] = useState('');
    // const highlightCode = (code) => {
    //     return Prism.highlight(code, Prism.languages.mopl, 'mopl');
    // };

    const hightlightWithLineNumbers = (input, language) =>
        highlight(input, language)
            .split("\n")
            .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
            .join("\n");

    return (
        <div className="playground">
            <Editor
                textareaId="codeArea"
                className='editor'
                value={code}
                onValueChange={code => setCode(code)}
                highlight={code => hightlightWithLineNumbers(code, languages.mopl)}
                padding={'1rem'}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 14,
                    backgroundColor: '#fff',
                    borderRadius: 4,
                    outline: 0,
                }}
            />
        </div>
    )
}