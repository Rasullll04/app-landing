import React from 'react'

function FeatureCard({item}) {
  return (
    
      <div >
        <span className="flex items-center justify-center rounded-md w-12 h-12 bg-blue-100">
         {item.icon}
        </span>
        <h4 className="text-base mt-6 mb-3">{item.title}</h4>
        <p className="text-slate-500">
          {item.text}
        </p>
      </div>
  );
}

export default FeatureCard