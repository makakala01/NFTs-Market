import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/core'

const FocusedStatusBar = (props) => {
    
  const isFocused = useIsFocused()
  return useIsFocused ? <StatusBar animated={true} {...props}/> : null;

}

export default FocusedStatusBar