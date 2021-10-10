import React from 'react'
import profilePic from '../public/cover.png'
import Image from 'next/image'



interface Props {
  children: JSX.Element
}

export const Layout = ({children}:Props) => {
  return (
    <div className="container">
      <a href="/">
      <div className="image_wrapper">
          <Image className="logo" src={profilePic} alt="logo" />
      </div>
      <hr />
      </a>
      {children}
    </div>
  )
}
