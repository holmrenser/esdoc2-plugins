class Plugin {
  onHandleCodeParser(ev) {
    const option = ev.data.option;
    const plugins = ev.data.parserOption.plugins;

    if (option.all || option.estree) plugins.push('estree');
    if (option.all || option.jsx) plugins.push('jsx');
    if (option.all || option.flow) plugins.push('flow');
    if (option.all || option.flowComments) plugins.push('flowComments');
    if (option.all || option.typescript) plugins.push('typescript');
    if (option.all || option.doExpressions) plugins.push('doExpressions');
    if (option.all || option.objectRestSpread) plugins.push('objectRestSpread');
    if (option.all || option.decorators) plugins.push('decorators');
    if (option.all || option.classProperties) plugins.push('classProperties');
    if (option.all || option.classPrivateProperties) plugins.push('classPrivateProperties');
    if (option.all || option.classPrivateMethods) plugins.push('classPrivateMethods');
    if (option.all || option.exportDefaultFrom) plugins.push('exportDefaultFrom');
    if (option.all || option.exportNamespaceFrom) plugins.push('exportNamespaceFrom');
    if (option.all || option.asyncGenerators) plugins.push('asyncGenerators');
    if (option.all || option.functionBind) plugins.push('functionBind');
    if (option.all || option.functionSent) plugins.push('functionSent');
    if (option.all || option.dynamicImport) plugins.push('dynamicImport');
    if (option.all || option.numericSeparator) plugins.push('numericSeparator');
    if (option.all || option.optionalChaining) plugins.push('optionalChaining');
    if (option.all || option.importMeta) plugins.push('importMeta');
    if (option.all || option.bigInt) plugins.push('bigInt');
    if (option.all || option.optionalCatchBinding) plugins.push('optionalCatchBinding');
    if (option.all || option.throwExpressions) plugins.push('throwExpressions');
    if (option.all || option.pipelineOperator) plugins.push('pipelineOperator');
    if (option.all || option.nullishCoalescingOperator) plugins.push('nullishCoalescingOperator');
  }
}

module.exports = new Plugin();
