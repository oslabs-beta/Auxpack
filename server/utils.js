// To grab reason types from stats.modules to determine whether Tree-shakeable
// Need to import into plugin and pass in stats into treeshake function

const moduleTypes = {
  'harmony side effect evaluation': 'esm',
  'harmony import specifier': 'esm',
  'cjs require': 'cjs'
}

const treeshake = (modules = []) => {

  const obj = {
    cjs: [],
    esm: [],
    both: []
  }
  modules.forEach(module => {
    const { name, size, reasons} = module;
    const isEsm = reasons.some(reason => moduleTypes[reason.type] === 'esm');
    const isCjs = reasons.some(reason => moduleTypes[reason.type] === 'cjs');
    
    const reasonTypes = reasons.map(reason => {
      return { name: reason.module, type: reason.type}
    })

    const moduleWithTypes = {
      name, 
      size,
      reasonTypes
    }

    if (obj['esm'] && isEsm && !isCjs) obj['esm'].push(moduleWithTypes);
    else if (obj['both'] && isEsm && isCjs) obj['both'].push(moduleWithTypes);
    else if (obj['cjs'] && !isEsm && isCjs) obj['cjs'].push(moduleWithTypes);
  })

  return obj;
}


module.exports = treeshake