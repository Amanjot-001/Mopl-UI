import oop from "ace/lib/oop";
import { Mode as TextMode } from "ace/mode/text";

function MOPLMode() {
    TextMode.call(this);
}

oop.inherits(MOPLMode, TextMode);   

(function () {
    this.$id = "ace/mode/mopl";
    this.$highlightRules = {
        "start": [
            {
                token: "whitespace",
                regex: /^\s+/
            },
            {
                token: "comment",
                regex: /\/\/.*/,
            },
            {
                token: "comment",
                regex: /\/\*[\s\S]*?\*\//,
                merge: true
            },
            {
                token: "punctuation",
                regex: /(;|{|}|\(|\)|\.|\[|\]|,)/,
            },
            {
                token: "keyword",
                regex: /\b(let|if|else|true|false|null|while|do|for|def|return|class|extends|super|new|this)\b/,
            },
            {
                token: "number",
                regex: /\b\d+\b/,
            },
            {
                token: "string",
                regex: /"[^"]*"|'[^']*'/,
            },
            {
                token: "identifier",
                regex: /\b\w+\b/,
            },
            {
                token: "equality-operator",
                regex: /[=!]=/,
            },
            {
                token: "assignment-operator",
                regex: /\/=|\*=|\+=|-=/,
            },
            {
                token: "multiplicative-operator",
                regex: /[*/]/,
            },
            {
                token: "additive-operator",
                regex: /[+\-]/,
            },
            {
                token: "relational-operator",
                regex: /[><]=?/,
            },
            {
                token: "logical-operator",
                regex: /&&|\|\||!/,
            }
        ]
    };
}.call(MOPLMode.prototype));

exports.Mode = MOPLMode;
