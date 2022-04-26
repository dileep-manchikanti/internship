import React,{Component} from "react";
import {Card,CardBody,CardHeader,CardFooter, CardImg} from 'reactstrap';
// import Donut from 'react-donut';
export class Plan extends Component{
    constructor(props){
        super(props);
        this.state={
            plan:this.props.data,
            countDownDate:new Date("Jan 5, 2024 15:37:25").getTime(),
            days:null,
            hours:null,
            minutes:null,
            seconds:null
        }
        localStorage.setItem("target",this.state.countDownDate);
    }
    componentDidMount() {
        var countDownDate=new Date("Jan 5, 2024 15:37:25").getTime();
        var x=setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();
          
            // Find the distance between now and the count down date
            var distance =  countDownDate- now;
          
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
            // Display the result in the element with id="demo"
            document.getElementsByClassName("timer").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
          
            // If the count down is finished, write some text
            if (distance < 0) {
              clearInterval(x);
              document.getElementsByClass("timer").innerHTML = "EXPIRED";
            }
          }, 1000);
      }
    //   componentWillUnmount(){
    //       console.log(this.state.timer);
    //       localStorage.setItem("time_left",this.state.timer);
    //   }
    render(){
        var data=[];
        this.state.plan.content.forEach((info)=>{
            data.push(<div><i className="fa fa-check"> {info}</i></div>);
        })
        console.log(this.state.timer);
        return(
                <Card className="card" style={{backgroundColor:this.state.plan.backgroundColor}}>
                    <CardHeader>
                    <div className="bold">FLAT 30 % OFF ||| {this.state.timer}</div>
                    {/* <p className="timer"></p>
                    <p className="timer"></p> */}
                    </CardHeader>
                    <CardBody>
                        <div className="plan-type" style={{backgroundColor:this.state.plan.offerColor}}>{this.state.plan.saver}</div>
                        <h2>{this.state.plan.planId}</h2>
                        {data}
                            <div className="suit text-center">{this.state.plan.suit}</div>
                            <div className="saurabh">Flat 30% OFF for being referred by Saurabh</div>
                    </CardBody>
                    <CardFooter>
                        <i className="fa fa-inr price">{this.state.plan.originalPrice}</i>
                        <i className="fa fa-inr original price">{this.state.plan.price}</i>
                        <div><button className="btn btn-primary">Buy Now</button></div>
                    </CardFooter>
                </Card>
        )
    }
    }
