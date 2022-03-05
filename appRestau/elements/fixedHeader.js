import React from 'react'
import {Header} from 'react-native-elements'

const FixedHeader = () => (
  <Header
  backgroundColor='#000'
    leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: 'Portales Restaurant',
      style: { color: '#fff' } }}
    rightComponent={{ icon: 'shopping-cart', color: '#fff' }}/>
    )
export default FixedHeader