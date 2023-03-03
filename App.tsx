import React from "react"
import { StatusBar} from 'react-native'
import {Home} from './src/pages/Home'

export default function App(): JSX.Element {
   return (
      <>
         <StatusBar barStyle={"light-content"} backgroundColor={'#121015'}/>
         <Home/>
      </>   

  )
}







