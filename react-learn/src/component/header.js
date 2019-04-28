import React, {Component} from 'react';  //引入react
import './header.css'

export default class Header extends Component{
    //constructor 是函数构造器 可以存储初始化状态 属性好和事件绑定
    constructor(props){
        super(props);
        this.state={
            displayflag:false
        };
        this.clickshow= this.clickshow.bind(this); //事件，最好绑定下，明确this指向
    }
    clickshow(){
        this.setState({
            displyflg:!this.state.displayflag //点击的时候显示隐藏切换
        })
    }
    render(){
        let showdiv={
          display:this.state.displayflag?"block":"none"
        };
        return(
            //显示组件的属性name的值  大括号{}内部
            <div>{this.props.name}
            <div className={"btn"} onClick={this.clickshow}>按钮</div>
            <div className={"hides"} style={showdiv}>内容</div>
            </div>
        )
    }
}