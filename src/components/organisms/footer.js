import React from 'react'
import Twitter from '../images/twitter'
import Github from '../images/github'

export default () => {
  return (
    <div className="flex flex-col justify-center w-full h-48">
      <div className="mb-8 text-lg font-bold text-tertiary-400">
        Wanna get in touch with me?
      </div>
      <div className="flex justify-around w-32">
        <a
          href="https://twitter.com/ZackerTheHacker"
          target="_blank"
          rel="noopener noreferrer"
          className="text-tertiary-400"
        >
          <Twitter className="w-8 fill-current" />
        </a>
        <a
          href="https://github.com/zacbraddy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-tertiary-400"
        >
          <Github className="w-8 fill-current" />
        </a>
      </div>
    </div>
  )
}
