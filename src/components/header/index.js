import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const Header = ({ switchTheme, theme }) => {
  return (
    <div className="header">
      <div className="title">
        <h1>Spacestagram</h1>
        <h3>Astronomy pictures of 2022</h3>
      </div>
      <button onClick={switchTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </div>
  )
}

Header.propTypes = {
  switchTheme: PropTypes.func.isRequired,
  theme: PropTypes.string,
}

export default Header
