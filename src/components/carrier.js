import React, { Component } from 'react';
import '../styles/carrier.css';

class carrier extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleStateClick = (e, selectedItem) =>{
        e.preventDefault();
        this.props.selectedItem(selectedItem);
    }

    render() {
        const {countValue, particularSelectedField} = this.props;
        return (
            countValue ? (
                Object.keys(countValue).map((item,index) => {
                    let divClass = 'carrier-pod';
                    if (item === particularSelectedField) {
                        divClass += ' activeCounter'
                    }
                        return (
                            <div className={divClass} id = {item} key={index} onClick={e => this.handleStateClick(e,item)}>
                                <span>{item}</span>
                                <h1>{countValue[item]}</h1>
                            </div>
                        )
                    })
             ) : (  
                    <h1>Loading...</h1>   
             )  

        )
    }
}


export default carrier;