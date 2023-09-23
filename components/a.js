import React from 'react'
import B from '../components/b'
export default function a(props) {
    console.log(props.msg)
 return (
    <div>
      a componets {props.name} {props.msg}
      <B name2='rohit' msg ='hello'></B>
    </div>
  )
}
