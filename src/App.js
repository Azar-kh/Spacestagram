import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import useLocalStorage from 'use-local-storage'

import './App.css'
import ImgList from './components/imgList'
import PreLoader from './components/loading'

const App = () => {
  const [imgList, setImgList] = useState([])
  const [loading, setLoading] = useState(false)

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light',
  )

  useEffect(async () => {
    try {
      setLoading(true)
      const res = await axios(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&start_date=2021-11-01`,
      )
      const data = await res.data
      console.log(data)
      setImgList(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)

    console.log(theme)
  }

  return (
    <div className="container" data-theme={theme}>
      {loading ? (
        <PreLoader />
      ) : (
        <Fragment>
          <div className="header">
            <h1>Spacestagram</h1>
            <button onClick={switchTheme}>
              Switch to {theme === 'light' ? 'dark' : 'light'} mode
            </button>
          </div>

          <ImgList imgList={imgList} />
        </Fragment>
      )}
    </div>
  )
}

export default App
