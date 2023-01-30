import React from 'react';
import Counter from './Counter';

function LifecyleHookExamples() {
  const [showCounter, setShowCounter] = React.useState(true);
  return (
    <div className={`w-50 m-auto mt-3 text-center`}>
      {showCounter && <Counter />}
      <button
        onClick={() => {
          setShowCounter((v) => !v);
        }}
      >
        Unmount Counter
      </button>
    </div>
  );
}

export default LifecyleHookExamples;
