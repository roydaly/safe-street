import React, { Component } from 'react'
import axios from "axios";
const API_URL = 'https://data.seattle.gov/resource/4fs7-3vj5.json';

export default class Crime extends Component {
         state = {
            apiData: []
        }
    
    componentDidMount() {
    const url = {API_URL};
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ apiData: data })
    })
    }

    
    render() {
        if (this.state.apiData.length) {
                this.state.apiData.map((data, index) => {
                return <p className='datarow' key={index}>{data.crime_subcategory}</p>
            })
        } 
        
        return (
            <div className='Crime'> 
                {this.state.apiData}
            </div>
        )
    }
}