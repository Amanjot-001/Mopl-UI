import '../styles/Playground.css'
// import Editor from 'react-simple-code-editor'
import { useState} from 'react';
import 'prismjs/themes/prism.css';
import Prism from 'prismjs';
import '../utils/mopl'

export default function Playground() {
    const [code, setCode] = useState('');
    const [highlightedCode, setHighlightedCode] = useState('');

    const handleCodeChange = (event) => {
        const newCode = event.target.value;
        setCode(newCode);

        const highlighted = Prism.highlight(newCode, Prism.languages.mopl, 'mopl');
        setHighlightedCode(highlighted);
    };


    return (
        <div className="playground">
            <textarea
                cols="30"
                rows="10"
                value={code}
                onChange={handleCodeChange}
                className="language-mopl"
            ></textarea>
            <div className="highlighted-code">
                <pre>
                    <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
                </pre>
            </div>
        </div>
    )
}