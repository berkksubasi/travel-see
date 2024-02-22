import React from 'react'
//UI Lib.
import { Text, ITextProps } from '@ui'

interface IProps extends ITextProps {
  text: string
}
const H4: React.FC<IProps> = ({ text, ...rest }) => {
  return (
    <Text {...rest} fontFamily={'$H4'}>
      {text}
    </Text>
  )
}

export default H4
