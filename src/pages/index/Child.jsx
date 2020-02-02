import Taro, { Component } from '@tarojs/taro'
import {View,Text} from '@tarojs/components'
class Child extends Component{
  clickHandle(){
    this.props.onChange()
  }
  render(){
    return (<View>
      <Button onClick={this.clickHandle}>调用上层事件</Button>
      {this.props.name}
      </View>)
  }
}
Child.defaultProps={
  name:"123"
}
export default Child;
