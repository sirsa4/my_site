import React from 'react'

const Title = ({ text }: { text: string }) => {
  return (
    <div className="border-b border-gray-200 pb-5">
      <h1 className="text-3xl font-medium capitalize tracking-wider">{text}</h1>
    </div>
  )
}

export default Title
