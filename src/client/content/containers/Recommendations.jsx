import React, { useState, useEffect } from 'react';

const Recommendations = (props) => {
  const [modules, setModules] = useState({cjs:[], esm:[], both:[]});

  useEffect(() => {
    fetch('/getTree')
    .then(res => res.json())
    .then(data => setModules(data))
    .catch(err => console.log(err))
  }, [])

  const cjsCount = modules.cjs.length;
  const esmCount = modules.esm.length;
  const bothCount = modules.both.length;
  const totalCount = modules.cjs.length + modules.esm.length + modules.both.length;

  return (
    <div>
      <div>
        <h3>Total Modules</h3>
        <p>{(totalCount !== 0) ? totalCount : 0}</p>
        <p>{`${Math.round(totalCount / totalCount * 100)}%`}</p>
      </div>
      <div>
        <h3>Treeshakable Modules</h3>
        <p>{(esmCount !== 0) ? esmCount : 0}</p>
        <p>{`${Math.round(esmCount / totalCount * 100)}%`}</p>
      </div>
      <div>
        <h3>Non-Treeshakable Modules</h3>
        <p>{(cjsCount !== 0) ? cjsCount : 0}</p>
        <p>{`${Math.round(cjsCount / totalCount * 100)}%`}</p>
      </div>
      <div>
        <h3>Mixed Modules</h3>
        <p>{(bothCount !== 0) ? bothCount : 0}</p>
        <p>{`${Math.round(bothCount / totalCount * 100)}%`}</p>
      </div>
    </div>
  );
}
 
export default Recommendations;