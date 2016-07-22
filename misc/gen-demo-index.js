var fs = require('fs');

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function demoClassName(componentName, demoName) {
  return `Ngbd${capitalize(componentName)}${capitalize(demoName)}`;
}

function demoImport(componentName, demoName) {
  return `./${demoName}/${componentName}-${demoName}`;
}

function genDemoSnippets(cmtName, demoName) {
  const baseName = `demo/src/app/components/${cmtName}/demos/${demoName}/${cmtName}-${demoName}`;

  const tsResult = fs.readFileSync(`${baseName}.ts`);
  const htmlResult = fs.readFileSync(`${baseName}.html`);

  const tsResultRaw = tsResult.toString().replace(/`/g, '\`');
  const htmlResultRaw = htmlResult.toString();

  return `${demoName}: {raw: {code: \`${tsResultRaw}\`, markup: \`${htmlResultRaw}\`}, hl: {}}`
}

function genDemoIndex(cmtName, demoNames) {
  return `${demoNames.map((demoName) => {return `import {${demoClassName(cmtName, demoName)}} from '${demoImport(cmtName, demoName)}';`;}).join('\n')}

export const DEMO_DIRECTIVES = [${demoNames.map((demoName) => demoClassName(cmtName, demoName)).join(', ')}];
  
export const DEMO_SNIPPETS = {
${demoNames.map((demoName) => genDemoSnippets(cmtName, demoName)).join(',\n')}
};
`;
}

var result = genDemoIndex('popover', ['basic', 'tplcontent', 'triggers']);

console.log(result);
