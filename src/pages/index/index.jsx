import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button } from '@tarojs/components'
import './index.less'
import Child from './Child'

export default class Index extends Component {

  componentWillMount () { }

  state = {
    name:"李四"
  }

  componentDidMount () {
  //  this.setState({name:"李四"})
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  click(){
    this.setState({name:"张三"},()=>{
      console.log(this.state.name)
      // throw new Error('error')
    })
  //  console.log(this.state.name)
  }

  config = {
    navigationBarTitleText: '首页'
  }

  change(){
    this.setState({name:"改变name的值"})
  }

  render () {
    return (
      <View className='index'>
        <Child name={this.state.name} onChange={this.change.bind(this)}/>
        <Button onClick={this.click}>改变名字</Button>
        <Text>{this.state.name}</Text>
      </View>
    )
  }
}
