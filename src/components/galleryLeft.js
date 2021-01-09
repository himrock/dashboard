import React, { Component } from 'react';
import warehouse from '../assests/warehouse.svg';
import destination from '../assests/destination.svg';

class galleryLeft extends Component {
  constructor(props) {

    super(props);
    this.state = {}
  }

  changeDateFormat = (date, value) => {
    if(value === 'date'){
      return date.split(' ')[0];   
    }
    else{
      return date.split(' ')[1]; 
    }  
}
  render() {
    const particularRowData = this.props.particularRowData;
    return (
      <> 
          <div className="left-gallery">
          { particularRowData ? (
            <div className="left-wrapper">
              <div className="img-wrap">
              <img src={warehouse} alt="warehouse"></img>
              </div>
              

              

              {particularRowData[0].scan.map((item, index) => {
                return (
                  <>
                  <div class="vl"></div>
                  <div class="hl"></div>
                  <div class="vl"></div>
                  <div className="left-first" key={index}>
                    <span>{item.status_detail}</span>
                    <span>{this.changeDateFormat(item.time , 'date')}</span>
                    <span>{this.changeDateFormat(item.time, 'time')}</span>
                  </div>
                  </>
                )
              })
              }
              <div className="img-wrap-second">
                <img src={destination} alt="destination"></img>
              </div>
            </div>

            ) : (
              <div className='noData'style={{'textAlign':'center','padding': '30px'}}>
                <h3>Select the data from table to view information</h3>
              </div>
            )}
          </div>
       
      </>
    );
  }
}

export default galleryLeft;