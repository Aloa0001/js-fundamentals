'use strict'

let links = [];

let routes = [
    {source: 'use-strict', target: 'useStrict'},
    {source: 'intro-js', target: 'introJS'},
    {source: 'to-start', target: 'start'},
    {source: 'code-editor', target: 'codeEditor'},
    {source: 'js-variables', target: 'jsVariables'},
    {source: 'js-operators', target: 'jsOperators'},
    {source: 'js-functions', target: 'jsFunctions'},
    {source: 'by-value-by-reference', target: 'byValueByReference'},
];

routes.forEach(route => {
    links.push(route);
});


for(const s in links){
    document.getElementById(links[s]['source']).addEventListener(('click'), () => {
        document.getElementById(links[s]['target']).scrollIntoView({ behavior: 'smooth' });
    });
}
