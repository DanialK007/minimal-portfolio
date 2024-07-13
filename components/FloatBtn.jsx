import React from 'react'
import classNames from 'classnames'

function FloatBtn({children, className}) {
  return (
    <div className={classNames("block group relative border overflow-hidden border-black uppercase px-2 py-1 w-fit rounded-s-full rounded-e-full hover:bg-black hover:text-white", className)}>
        <div className="group-hover:-translate-y-full group-hover:opacity-0 duration-500 ">{children}</div>
        <div className="group-hover:-translate-y-full duration-500 absolute top-full left-0 px-2 pb-1">{children}</div>
    </div>
  )
}

export default FloatBtn
