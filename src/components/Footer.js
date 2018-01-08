import React,{ Component } from 'react'
import { visibleFilters } from '../action'
const { SHOW_ALL,SHOW_COMPLETE, SHOW_ACTIVE} = visibleFilters

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        let { onFilterChange } = this.props;
        return (
            <div>
                <button onClick={()=>{onFilterChange(SHOW_COMPLETE)}} >complete</button>
                <button onClick={()=>{onFilterChange(SHOW_ACTIVE)}}>active</button>
                <button onClick={()=>{onFilterChange(SHOW_ALL)}}>all</button>
            </div>
        )
    }
}

export default Footer