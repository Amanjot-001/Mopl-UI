import ace from 'react-ace'

ace.define("ace/theme/mopl-twilight", ["require", "exports", "module", "ace/lib/dom"], function(require, exports, module) {
    exports.isDark = true;
    exports.cssClass = "ace-mopl-twilight";
    exports.cssText = `
        .ace-mopl-twilight .ace_gutter {
            background: #1e1e1e;
            color: #c5c8c6;
        }

        .ace-mopl-twilight .ace_comment {
            color: #5f5a60;
        }

        .ace-mopl-twilight .ace_punctuation {
            color: #81a2be;
        }

        .ace-mopl-twilight .ace_keyword {
            color: #cf6a4c;
        }

        .ace-mopl-twilight .ace_number {
            color: #de935f;
        }

        .ace-mopl-twilight .ace_string {
            color: #8c9440;
        }

        .ace-mopl-twilight .ace_identifier {
            color: #f0c674;
        }

        .ace-mopl-twilight .ace_equality-operator {
            color: #b294bb;
        }

        .ace-mopl-twilight .ace_assignment-operator {
            color: #cc6666;
        }

        .ace-mopl-twilight .ace_multiplicative-operator {
            color: #b5bd68;
        }

        .ace-mopl-twilight .ace_additive-operator {
            color: #cc6666;
        }

        .ace-mopl-twilight .ace_relational-operator {
            color: #81a2be;
        }

        .ace-mopl-twilight .ace_logical-operator {
            color: #81a2be;
        }
    `;
});
