import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import API from '../utils/API';
import OrderForm from '../components/Order';

class Order extends Component {
  state = {
    emptyFlag: "1",
    order: [
      {
        userId: "0",
        orderId: "",
        custName: "",
        custShipAddr: "",
        custPhone: "",
        custCard: "",
        computer: []
      }
    ]
  }
  componentDidMount() {
    this.getOrder();
    console.log("call sendSMS");
    this.sendSMS();
  }
  getOrder = () => {
    API.getOrder()
      .then(({data}) => {
        // console.log(data);
        this.setState({order : data});
        // let copy = JSON.parse(JSON.stringify(this.state.order));
        // copy[0].computer = data;
        this.setState({emptyFlag : "0"});
        // this.setState({order : copy});
        // console.log(this.state.order);
      })
      .catch(err => console.log(err))
  }
  sendSMS = () => {
    console.log("call sendSMS API");
    API.sendSMS('test')
        .then(({data}) => console.log(data))
        .catch(err => console.log(err));
  }

  // method to handle on change
  handleChange = event => {
    const {name, value} = event.target;
    let copy = JSON.parse(JSON.stringify(this.state.order));
    copy[0][[name]] = value;
    this.setState({order : copy});
    // console.log(this.state.order);
  }

  // handle form submit
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.order);
    // if (!this.state.cust_name || !this.state.cust_ship_addr || !this.state.cust_phone) {
    //   return false;
    // }
    // //const selectedComputer = this.state.order.find(({_id}) => _id === computerId);
    // API
    //   .updateOrder(this.state.order)
    //   .then(({data}) => {
    //     //this.setState({books});
    //   })
    //   .catch(err => console.log(err));
  }

  render() {
    const cursorStyle = {cursor : 'pointer'};
    const cpuLogo = {width : '50px', position: 'relative', top: '-12px'};
    return (
      <div>
        <div className="jumbotron jumbotron-fluid text-center">
          <h1 className="display-4">Order your computer</h1>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6">
              <OrderForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                value={this.state.order}
              />
            </div>
            <div className="col-12 col-md-3">
              {
                this.state.emptyFlag === "1" ?
                  (<h2>Waiting...</h2>)
                  :
                  (
                    <div className="card">
                      <h5 className="card-header">{this.state.order[0].computer[0].title}</h5>
                      <img src={this.state.order[0].computer[0].image} alt={this.state.order[0].computer[0].title} className="card-img"/>
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <div className="">
                            <h4 className="card-subtitle">${this.state.order[0].computer[0].price}</h4>
                          </div>
                          <div className="">
                            {
                              this.state.order[0].computer[0].cpu_desc.includes("i5-8") ? 
                              (<img src="image/i5_8.jpg" alt="" style={cpuLogo}/>)
                              :
                              this.state.order[0].computer[0].cpu_desc.includes("i7-8") ? 
                              (<img src="image/i7_8.jpg" alt="" style={cpuLogo}/>)
                              :
                              this.state.order[0].computer[0].cpu_desc.includes("i7-9") ? 
                              (<img src="image/i7_9.jpg" alt="" style={cpuLogo}/>)
                              :
                              this.state.order[0].computer[0].cpu_desc.includes("i9-9") ? 
                              (<img src="image/i9_9.jpg" alt="" style={cpuLogo}/>)
                              :
                              this.state.order[0].computer[0].cpu_desc.includes("RYZEN 3") ? 
                              (<img src="image/a3.jpg" alt="" style={cpuLogo}/>)
                              :
                              this.state.order[0].computer[0].cpu_desc.includes("RYZEN 5") ? 
                              (<img src="image/a5.jpg" alt="" style={cpuLogo}/>)
                              :
                              this.state.order[0].computer[0].cpu_desc.includes("RYZEN 7") ? 
                              (<img src="image/a7.jpg" alt="" style={cpuLogo}/>)
                              :
                              this.state.order[0].computer[0].cpu_desc.includes("Threadripper") ? 
                              (<img src="image/at.jpg" alt="" style={cpuLogo}/>)
                              :
                              null
                            }
                          </div>
                        </div>
                        <div className="float-none"></div>
                        <div className="btn-group d-flex flex-column mt-3 " role="group">
                          <p style={cursorStyle} onClick={() => this.moreInfo("cpu", this.state.order[0].computer[0].cpu)}><i className="fas fa-microchip"></i> {this.state.order[0].computer[0].cpu_desc}</p>
                          <p style={cursorStyle} onClick={() => this.moreInfo("ram", this.state.order[0].computer[0].ram)}><i className="fas fa-memory"></i> {this.state.order[0].computer[0].ram_desc}</p>
                          <p style={cursorStyle} onClick={() => this.moreInfo("hdd", this.state.order[0].computer[0].hdd)}><i className="fas fa-hdd"></i> {this.state.order[0].computer[0].hdd_desc}</p>
                        </div>
                      </div>
                    </div>
                  )
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Order;