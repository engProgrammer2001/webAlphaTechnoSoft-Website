import React, { useEffect, useState } from 'react';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    let count = localStorage.getItem('visitorCount');

    if (!count) {
      count = 0;
    } else {
      count = parseInt(count);
    }

    const newCount = count + 1;

    setVisitorCount(newCount);

    localStorage.setItem('visitorCount', newCount);
  }, []); 

  return (
    <div className="visitor-counter p-2 ">
      <p className="text-2xl  mt-2">{visitorCount}</p>
    </div>
  );
};

export default VisitorCounter;
