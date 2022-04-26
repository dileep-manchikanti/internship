import React,{Component} from 'react';
// import {fetch} from 'cross-fetch';
import { Plan } from './plans';
import { Data } from './data';
export class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            data:Data
        }
    }
    render(){
             console.log(this.state.data);
             
                 const plans=[];
                this.state.data.forEach((plan)=>{
                    plans.push(<div className='col-md-3'><Plan data={plan} /></div>);
                });
                 
             
            return(
                <div className='row'>
                    {plans}
                </div>
            );
        }
    }