import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './style.css'

const ImgItem = ({ date, hdurl, title, copyright }) => {
  const [like, setLike] = useState(false)

  const handleLike = () => {
    setLike(!like)
  }

  return (
    <div className="card">
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div className="card-img">
        <img src={hdurl} alt="pic of the day" />
      </div>
      <div className="card-content">
        <div className="card-info">
          <span className="date">{date}</span>
          <br />
          <span className="copyright">
            Copyright: {copyright ? copyright : 'Unknown'}
          </span>
        </div>

        <span className="btn">
          <i
            className={like ? 'fas fa-heart' : 'far fa-heart'}
            onClick={() => handleLike()}
          ></i>
        </span>
      </div>
    </div>
  )
}

ImgItem.propTypes = {
  date: PropTypes.string.isRequired,
  hdurl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  copyright: PropTypes.string.isRequired,
}

export default ImgItem
