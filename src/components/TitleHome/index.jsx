import React from 'react'

function TitleHome({title,page,text}) {
  return (
    <div className="text-center">
      <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
        {title}
      </span>
      <h1 className="text-4xl my-4">{page}</h1>
      {title && <p className="text-slate-500 mb-14">{text}</p>}
    </div>
  );
}

export default TitleHome