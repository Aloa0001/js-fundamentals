'use strict'

let sections = [];

sections.push({ divId: 'uStrict', file: 'templates/use-strict.html'});
sections.push({ divId: 'introJS', file: 'templates/intro-js.html'});
sections.push({ divId: 'codeEditor', file: 'templates/code-editor.html'});
sections.push({ divId: 'jsVariables', file: 'templates/js-variables.html'});
sections.push({ divId: 'jsOperators', file: 'templates/js-operators.html'});
sections.push({ divId: 'jsFunctions', file: 'templates/js-functions.html'});
sections.push({ divId: 'byValueByReference', file: 'templates/by-value-by-reference.html'});


for(let section in sections) {
    let div = document.getElementById(sections[section]['divId']);
    fetch(sections[section]['file'])
        .then(res => res.text())
        .then(data => {
            div.innerHTML = data;
        });
}