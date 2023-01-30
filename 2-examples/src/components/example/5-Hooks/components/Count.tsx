import React from 'react';

interface ICount {
  text : string,
  count : number
}

function Count({ text, count } : ICount) {
  // console.log(`Render Count: ${text}`);
  return (
    <div>
      {text} - {count}
    </div>
  );
}

// export default Count;
export default React.memo(Count);
