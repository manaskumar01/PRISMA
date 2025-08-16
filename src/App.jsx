import React from 'react'
import { Outlet } from 'react-router'
import Header from './components/Header/Header'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

export default function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}
