module.exports = (stats) => {
  const moduleTypes = {
    'harmony side effect evaluation': 'esm',
    'harmony import specifier': 'esm',
    'cjs require': 'cjs',
  };

  const obj = {
    cjs: [],
    esm: [],
    both: [],
  };

  stats.modules.forEach((module) => {
    const { name, size, reasons } = module;
    const isEsm = reasons.some((reason) => moduleTypes[reason.type] === 'esm');
    const isCjs = reasons.some((reason) => moduleTypes[reason.type] === 'cjs');

    const reasonTypes = reasons.map((reason) => ({ name: reason.module, type: reason.type }));

    const moduleWithTypes = {
      name,
      size,
      reasonTypes,
    };

    if (obj.esm && isEsm && !isCjs) obj.esm.push(moduleWithTypes);
    else if (obj.both && isEsm && isCjs) obj.both.push(moduleWithTypes);
    else if (obj.cjs && !isEsm && isCjs) obj.cjs.push(moduleWithTypes);
  });

  return {
    timeStamp: Date.now(),
    time: stats.time,
    hash: stats.hash,
    errors: stats.errors,

    size: stats.assets.reduce((totalSize, asset) => totalSize + asset.size, 0),

    assets: stats.assets.map((asset) => ({
      name: asset.name,
      chunks: asset.chunks,
      size: asset.size,
    })),

    chunks: stats.chunks.map((chunk) => ({
      size: chunk.size,
      files: chunk.files,
      modules: chunk.modules
        ? chunk.modules.map((module) => ({
          name: module.name,
          size: module.size,
          id: module.id,
        }))
        : [],
    })),

    treeStats: obj,
  };
};
