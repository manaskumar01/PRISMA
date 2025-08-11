import React from 'react'
import { Outlet } from 'react-router'
import Header from './components/Header/Header'
import Body from './components/Body/Body'

export default function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Body/>
    </>
  )
}
