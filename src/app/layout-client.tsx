"use client"

import React, { useEffect, useState } from "react"
// import { SessionProvider, useSession } from "next-auth/react"
import { RedirectType, redirect, usePathname, useRouter } from "next/navigation"
import { eventLog, consoleLogWelcomeMsg } from '@/lib/log'
import Cookies from 'js-cookie'
const ComponentForSessionProvider = () => {
  // const { data: session, update, status } = useSession()
  // consoleLogWelcomeMsg()
  return <></>
}

const LayoutClientSide = () => {
  const router = useRouter()
  const pathName = usePathname()
  useEffect(() => {
    if (Cookies.get('token') && (pathName.startsWith('/auth') || pathName == '/')) {
      // if (Cookies.get('token') && pathName.startsWith('/auth')) {
      router.push('/home')
    } else if (!Cookies.get('token') && !pathName.startsWith('/auth')) {
      router.push('/auth/login')
    }
  }, [])

  return <>
    {/* <ComponentForSessionProvider /> */}
  </>
}


export default LayoutClientSide
