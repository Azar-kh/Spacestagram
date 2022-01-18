import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import useLocalStorage from 'use-local-storage'

import './App.css'
import ImgList from './components/imgList'
import PreLoader from './components/loading'
import Header from './components/header'

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
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&start_date=2022-01-01`,
      )
      const data = await res.data
      console.log(data)
      setImgList(data)
      setLoading(false)
    } catch (error) {
      return <h1>Something went wrong!</h1>
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
          <Header switchTheme={switchTheme} theme={theme} />

          <ImgList imgList={imgList} />
        </Fragment>
      )}
    </div>
  )
}

export default App
