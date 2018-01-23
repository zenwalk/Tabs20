// document.body.style.background = 'yellow';

var actualCode = `// Code here.
// If you want to use a variable, use $ and curly braces.
// For example, to use a fixed random number:
var someFixedRandomValue = ${ Math.random() };
// NOTE: Do not insert unsafe variables in this way, see below
// at "Dynamic values in the injected code"
`;

var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();