import React from 'react'
import ImgItem from '../imgItem'
import './style.css'

const ImgList = ({ imgList }) => {
  return (
    <div className="list-container">
      {imgList.map(
        (img) =>
          img.media_type === 'image' && (
            <ImgItem
              key={img.date}
              hdurl={img.hdurl}
              title={img.title}
              date={img.date}
              copyright={img.copyright}
            />
          ),
      )}
    </div>
  )
}

export default ImgList
