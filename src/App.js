import React, { Component } from 'react';
import HeaderComponent from './components/header';
import GalleryLeft from './components/galleryLeft';
import GalleryRight from './components/galleryRight';
import CarrierComponent from './components/carrier';
import ApiHelper from './helpers/api_helper';
import { API_NAMES, defaultParams } from './conf/config';
import './App.css';
import './styles/gallery.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      resultData: null,
      countValue : null,
      particularSelectedData: null,
      particularSelectedField:null,
      particularRowData: null,
    }
    this.apiHelper = ApiHelper();
  }

  componentDidMount(){
    this.apiCall();
  }

  apiCall =()=>{
    let fullApiName = API_NAMES.getShipment;
    let emailParam = {'email': defaultParams.email};
    this.apiHelper.sendRequest(fullApiName, emailParam).then(result=>{
          this.setState({
            resultData : result.data,
          });
          this.createNewObject(result.data);
          this.filterParticularStateData(result.data, result.data[0].current_status_code);
      })
  }

  filterParticularStateData=(data, current_status_code)=>{
      const mockData = data.filter(function(item){
        return(item.current_status_code === current_status_code)
    });
    this.setState({
      particularSelectedField: current_status_code,
      particularSelectedData: mockData,
      particularRowData: null,
    })

  }

  createNewObject = (data) =>{
    let newArray = {};
    for(var element of data){
      if(typeof newArray[element.current_status_code] === 'undefined' || newArray[element.current_status_code] === null){
        newArray[element.current_status_code] = 1;
      }else{
        newArray[element.current_status_code] +=1;
      }
    }
    this.setState({countValue : newArray})
  }

  changeSelectedItem = (item) => {
      this.filterParticularStateData(this.state.resultData, item);
  }

  handleRowData = (itemId) => {
    const rowData = this.state.particularSelectedData.filter(function(item){
      return(item._id === itemId)
    });
    this.setState({particularRowData : rowData})
  }

  render() {
    return (
      <>
        <div className="header">
          <HeaderComponent />
        </div>
        <div className="carrier">
          <CarrierComponent countValue ={this.state.countValue} selectedItem={this.changeSelectedItem} particularSelectedField = {this.state.particularSelectedField}/>
        </div>
        <div className="gallery">
          <GalleryLeft particularRowData = {this.state.particularRowData}/>
          <GalleryRight particularSelectedData = {this.state.particularSelectedData} selectedRowItem = {this.handleRowData}/>
        </div>
      </>
    );

  }
}

export default App;
