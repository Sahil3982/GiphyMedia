import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const FollowOn = () => {
  return (
    <div className='faded-text pt-2'>
    <span>Follow on :</span>
    <div className='flex gap-4 pt-3'>
    <a href='https://www.linkedin.com/in/sahil3982'>
        <FaLinkedin size={20} />
    </a>
    <a href='https://www.github.com/sahil3982'>
        <FaGithub size={20} />
    </a>
    <a href='https://www.instagram.com/o_jeet_o'>
        <FaInstagram size={20} />
    </a>

    </div>
    </div>
  )
}

export default FollowOn