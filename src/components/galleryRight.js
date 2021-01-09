import React, { Component } from 'react';

class galleryRight extends Component {
    constructor(props) {
		super(props);
		this.state = {}
    }
    
    handleRowClick = (e,item) =>{
        e.preventDefault();
        if (item.current_status !== 'No Information Yet') {
            this.props.selectedRowItem(item._id);
        }
    }

    changeDateFormat = (date) => {

        if(date.indexOf('T')!== -1) {
        return date.split('T')[0];   
        }
        else{
            return date.split(' ')[0]; 
        }
        
    }
    render() {
        const propData = this.props.particularSelectedData;
        return (
            <>
            <div className="right-gallery">
            <table>
                <colgroup span="4"></colgroup>
                <thead>
                    <tr>
                        <th>AWB NUMBER</th>
                        <th>TRANSPORTER</th>
                        <th>SOURCE</th>
                        <th>DESTINATION</th>
                        <th>BRAND</th>
                        <th>START DATE</th>
                        <th>ETD</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {propData ? (  
                        propData.map((item,index) => {
                            let divClass = '';
                            if (item.current_status === 'No Information Yet') {
                                divClass += 'disableCursor'
                            }
                            
                            return (
                                <tr key={index} onClick={(e) =>this.handleRowClick(e,item)} className={divClass}>
                                    <td>{item.awbno}</td>
                                    <td>{item.carrier}</td>
                                    <td>{item.current_status_code}</td>
                                    <td>{item.to ? item.to : 'Not Available'}</td>
                                    <td>{item.current_status_code}</td>
                                    <td>{this.changeDateFormat(item.createdAt)}</td>
                                    <td>{item.extra_fields && item.extra_fields.expected_delivery_date ? this.changeDateFormat(item.extra_fields.expected_delivery_date) : 'Not Available'}</td>
                                    <td style={{'color': 'green'}}>{item.current_status}</td>
                                </tr>   
                            )
                        })
                    ) : <h1 style={{'marginTop': '30px','fontSize':'12px'}}>Loading...</h1>        
                    }
                </tbody>
                
            </table>
        </div> 
            </>
        );
    }
}

export default galleryRight;