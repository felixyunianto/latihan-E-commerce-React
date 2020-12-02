import React, { Component } from 'react'
import Filter from "../../Components/Filter";

export default class index extends Component {
    componentDidMount(props){
        console.log(this.props.location.state.keyword);
    }
    render() {
        return (
            <>
                <Filter keyword={this.props.location.keyword}/>
            </>
        )
    }
}
