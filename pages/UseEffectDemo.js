import React, { useEffect } from 'react'

const UseEffectDemo = () => {
  useEffect(
    // effect
    () => {
      console.log('mounting')
      return () => {console.log('cleanup')} // optional return executed upon unmounting
    },
    // dependencies
    []
  )
  /*
  'Dependencies' may contain variables that cause 'effect' to execute when changed
  If 'dependencies' is left out, 'effect' is executed when the component is first rendered and at every update.
  If 'dependencies' is an empty array, 'effect' is executed only upon first rendering.
  */

  return <></>
}

export default UseEffectDemo