import '../styles/Playground.css'
import Editor from 'react-simple-code-editor'
import { useState } from 'react';
import { highlight, languages, Prism } from 'prismjs';

Prism.languages.customLanguage = {
    'whitespace': /^\s+/,
    'comment': [/^\/\/.*/, /^\/\*[\s\S]*?\*\//],
    'semicolon': /^;/,
    'curly-braces': [/{/, /}/],
    'parentheses': [/\(/, /\)/],
    'dot': /^\./,
    'square-brackets': [/\[/, /\]/],
    'comma': /^,/,
    'keywords': /\b(let|if|else|true|false|null|while|do|for|def|return|class|extends|super|new|this)\b/,
    'number': /^\d+/,
    'string': /^"[^"]*"|'[^']*'/,
    'identifier': /^\w+/,
    'equality-operator': /^[=!]=/,
    'simple-assign': /=/,
    'complex-assign': /[*\/+\-]=/,
    'multiplicative-operator': /[*\/]/,
    'additive-operator': /[+\-]/,
    'relational-operator': /^[><]=?/,
    'logical-and': /&&/,
    'logical-or': /\|\|/,
    'logical-not': /!/,
};
  
const language = Prism.languages.customLanguage;

export default function Playground() {
    const [code, setCode] = useState('');

    const highlightCode = (code) => {
        const highlightedCode = highlight(code, language);
        return highlightedCode;
    };

    return (
        // <div className="playground">
        //     <textarea name="" id="" cols="30" rows="10">
        //     </textarea>
        // </div>
        <div className="playground">
            <Editor
                value={code}
                onValueChange={code => setCode(code)}
                highlight={code => highlightCode(code)}
                padding={'1rem'}
                style={{
                    backgroundColor: '#fff',
                    fontFamily: 'monospace',
                    fontSize: 14,
                    flexGrow: 1,
                    // borderRadius: '1rem'
                }}
            />
        </div>
    )
}