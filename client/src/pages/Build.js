import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import API from '../utils/API';

class Search extends Component {
  state = {
    currentStep: "",
    totalPrice: 0,
    buildParts: [],
    step1: [],//[id:'', price:'']
    step2: [],
    step3: [],
    step4: [],
    step5: [],
    cpus: [],
    rams: [],
    hdds: [],
    gpus: [],
    cases: [],
    addedToCart: false
  }
  componentDidMount() {
    this.startOver();
  }
  startOver = () => {
    this.setState({buildParts: []});
    this.setState({totalPrice: 0});
    this.getCpusByTags('all');
    this.getRamsByTags('all');
    this.getHddsByTags('all');
    this.getGpusByTags('all');
    this.getCasesByTags('all');
    this.setState({currentStep: "1"});
  }
  getCpusByTags = (tagId) => {
    API.getCpusByTags(tagId)
      .then(({data}) => {this.setState({cpus: data});})
      .catch(err => console.log(err));
  }
  getRamsByTags = (tagId) => {
    API.getRamsByTags(tagId)
      .then(({data}) => this.setState({rams: data}))
      .catch(err => console.log(err));
  }
  getHddsByTags = (tagId) => {
    API.getHddsByTags(tagId)
      .then(({data}) => this.setState({hdds: data}))
      .catch(err => console.log(err));
  }
  getGpusByTags = (tagId) => {
    API.getGpusByTags(tagId)
      .then(({data}) => this.setState({gpus: data}))
      .catch(err => console.log(err));
  }
  getCasesByTags = (tagId) => {
    API.getCasesByTags(tagId)
      .then(({data}) => this.setState({cases: data}))
      .catch(err => console.log(err));
  }

  step1Submit = cpu => {
    this.state.buildParts.push(cpu);
    this.setState({cpus: []});
    this.setState({currentStep: "2"});
    this.setState({totalPrice: parseFloat(this.state.totalPrice) + parseFloat(cpu.price)});
  }
  step2Submit = ram => {this.state.buildParts.push(ram);this.setState({rams: []});this.setState({currentStep: "3"});this.setState({totalPrice: parseFloat(this.state.totalPrice) + parseFloat(ram.price)});}
  step3Submit = hdd => {this.state.buildParts.push(hdd);this.setState({hdds: []});this.setState({currentStep: "4"});this.setState({totalPrice: parseFloat(this.state.totalPrice) + parseFloat(hdd.price)});}
  step4Submit = gpu => {this.state.buildParts.push(gpu);this.setState({gpus: []});this.setState({currentStep: "5"});this.setState({totalPrice: parseFloat(this.state.totalPrice ) + parseFloat(gpu.price)});}
  step5Submit = dcase => {this.state.buildParts.push(dcase);this.setState({cases: []});this.setState({currentStep: "Completed!"});this.setState({totalPrice: parseFloat(this.state.totalPrice) + parseFloat(dcase.price)});}
  addToCart = () => {
    let ts = Math.round((new Date()).getTime() / 1000);
    
    
      const selectedComputer = {
        title: "Customized_"+this.state.totalPrice+"_"+ts,
        price: this.state.totalPrice,
        cpu: this.state.buildParts[0].idx,
        cpu_desc: this.state.buildParts[0].title,
        ram: this.state.buildParts[1].idx,
        ram_desc: this.state.buildParts[1].title,
        hdd: this.state.buildParts[2].idx,
        hdd_desc: this.state.buildParts[2].title,
        gpu: this.state.buildParts[3].idx,
        gpu_desc: this.state.buildParts[3].title,
        case: this.state.buildParts[4].idx,
        case_desc: this.state.buildParts[4].title,
        tag: "Customized",
        link: "",
        image: this.state.buildParts[4].image
      };
      const readyForOrder = {
        userId: "0",
        orderId: "",
        custName: "",
        custShipAddr: "",
        custPhone: "",
        custCard: "",
        computer: [selectedComputer]
      };
      //console.log(readyForOrder);
      API
        .addToCart(readyForOrder)
        .then(({data}) => {
          console.log(data);
          this.setState({
            addedToCart: true
          })
        })
        .catch(err => console.log(err));
  }

  render() {
    if (this.state.addedToCart) {
      return <Redirect to="/order" />
    }
    const bodyWidth = {'width': '80%'};
    return (
      <div>
        <div className="jumbotron jumbotron-fluid text-center">
          <h1 className="display-4">Build your computer</h1>
          <h2>STEP {this.state.currentStep}</h2>
          <h3>${this.state.totalPrice}</h3>
          {
            this.state.currentStep === "Completed!" ?
              <div>
                <button className="btn btn-warning mr-3" onClick={() => this.startOver()}>START OVER</button>
                <button className="btn btn-success" onClick={() => this.addToCart()}>ADD TO CART</button>
              </div>
            : 
              <div>
                <button className="btn btn-warning mr-3" onClick={() => this.startOver()}>START OVER</button>
              </div>
          }
          
        </div>
        <div className="container-fluid" style={bodyWidth}>
          <div className="row part_scr build_scr">
            <div className="col-12 col-md-12">
              <div className="row align-items-stretch">
                {
                  !this.state.buildParts.length ? 
                  (<h2></h2>) 
                  : 
                  this.state.buildParts.map(buildPart => {
                    return (
                      <div className="d-flex pb-3 col-12 col-md-2" key={buildPart._id}>
                        <div className="card">
                          <h5 className="card-header">{buildPart.title}</h5>
                          <img src={buildPart.image} alt={buildPart.title} className="card-img"/>
                          <div className="card-body">
                            <h3 className="card-subtitle">${buildPart.price}</h3>
                            {/* <p>{buildPart.description}</p> */}
                            <div className="btn-group d-flex flex-row-reverse" role="group">
                              {/* <button type="button" className="btn btn-warning m-2" onClick={() => this.step1Submit(buildPart)}>Select</button> */}
                              <a className="btn btn-primary m-2" href={buildPart.link} target="_blank" rel="noopener noreferrer">More Info</a>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <hr/>
          <div className="row part_scr cpu_scr">
            <div className="col-12 col-md-12">
              <div className="row align-items-stretch">
                {
                  this.state.currentStep === "1" ? 
                    !this.state.cpus.length ? 
                    (<h2>STEP 1</h2>) 
                    : 
                    this.state.cpus.map(cpu => {
                      return (
                        <div className="d-flex pb-3 col-12 col-md-3" key={cpu._id}>
                          <div className="card">
                            <h5 className="card-header">{cpu.title}</h5>
                            <img src={cpu.image} alt={cpu.title} className="card-img"/>
                            <div className="card-body">
                              <h3 className="card-subtitle">${cpu.price}</h3>
                              <p>{cpu.description}</p>
                              <div className="btn-group d-flex flex-row-reverse" role="group">
                                <button type="button" className="btn btn-warning m-2" onClick={() => this.step1Submit(cpu)}>Select</button>
                                <a className="btn btn-primary m-2" href={cpu.link} target="_blank" rel="noopener noreferrer">More Info</a>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                      )
                    })
                  : null
                }
              </div>
            </div>
          </div>
          
          <div className="row part_scr ram_scr">
            <div className="col-12 col-md-12">
              <div className="row align-items-stretch">
                {
                  this.state.currentStep === "2" ? 
                    !this.state.rams.length ? 
                    (<h2>STEP 2</h2>) 
                    : 
                    this.state.rams.map(ram => {
                      return (
                        <div className="d-flex pb-3 col-12 col-md-3" key={ram._id}>
                          <div className="card">
                            <h5 className="card-header">{ram.title}</h5>
                            <img src={ram.image} alt={ram.title} className="card-img"/>
                            <div className="card-body">
                              <h3 className="card-subtitle">${ram.price}</h3>
                              <p>{ram.description}</p>
                              <div className="btn-group d-flex flex-row-reverse" role="group">
                                <button type="button" className="btn btn-warning m-2" onClick={() => this.step2Submit(ram)}>Select</button>
                                <a className="btn btn-primary m-2" href={ram.link} target="_blank" rel="noopener noreferrer">More Info</a>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                      )
                    })
                  : null
                }
              </div>
            </div>
          </div>
          
          <div className="row part_scr hdd_scr">
            <div className="col-12 col-md-12">
              <div className="row align-items-stretch">
                {
                  this.state.currentStep === "3" ? 
                    !this.state.hdds.length ? 
                    (<h2>STEP 3</h2>) 
                    : 
                    this.state.hdds.map(hdd => {
                      return (
                        <div className="d-flex pb-3 col-12 col-md-3" key={hdd._id}>
                          <div className="card">
                            <h5 className="card-header">{hdd.title}</h5>
                            <img src={hdd.image} alt={hdd.title} className="card-img"/>
                            <div className="card-body">
                              <h3 className="card-subtitle">${hdd.price}</h3>
                              <p>{hdd.description}</p>
                              <div className="btn-group d-flex flex-row-reverse" role="group">
                                <button type="button" className="btn btn-warning m-2" onClick={() => this.step3Submit(hdd)}>Select</button>
                                <a className="btn btn-primary m-2" href={hdd.link} target="_blank" rel="noopener noreferrer">More Info</a>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                      )
                    })
                  : null
                }
              </div>
            </div>
          </div>
          
          <div className="row part_scr gpu_scr">
            <div className="col-12 col-md-12">
              <div className="row align-items-stretch">
                {
                  this.state.currentStep === "4" ? 
                    !this.state.gpus.length ? 
                    (<h2>STEP 4</h2>) 
                    : 
                    this.state.gpus.map(gpu => {
                      return (
                        <div className="d-flex pb-3 col-12 col-md-3" key={gpu._id}>
                          <div className="card">
                            <h5 className="card-header">{gpu.title}</h5>
                            <img src={gpu.image} alt={gpu.title} className="card-img"/>
                            <div className="card-body">
                              <h3 className="card-subtitle">${gpu.price}</h3>
                              <p>{gpu.description}</p>
                              <div className="btn-group d-flex flex-row-reverse" role="group">
                                <button type="button" className="btn btn-warning m-2" onClick={() => this.step4Submit(gpu)}>Select</button>
                                <a className="btn btn-primary m-2" href={gpu.link} target="_blank" rel="noopener noreferrer">More Info</a>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                      )
                    })
                  : null
                }
              </div>
            </div>
          </div>
          
          <div className="row part_scr case_scr">
            <div className="col-12 col-md-12">
              <div className="row align-items-stretch">
                {
                  this.state.currentStep === "5" ? 
                    !this.state.cases.length ? 
                    (<h2>STEP 5</h2>) 
                    : 
                    this.state.cases.map(dcase => {
                      return (
                        <div className="d-flex pb-3 col-12 col-md-3" key={dcase._id}>
                          <div className="card">
                            <h5 className="card-header">{dcase.title}</h5>
                            <img src={dcase.image} alt={dcase.title} className="card-img"/>
                            <div className="card-body">
                              <h3 className="card-subtitle">${dcase.price}</h3>
                              <p>{dcase.description}</p>
                              <div className="btn-group d-flex flex-row-reverse" role="group">
                                <button type="button" className="btn btn-warning m-2" onClick={() => this.step5Submit(dcase)}>Select</button>
                                <a className="btn btn-primary m-2" href={dcase.link} target="_blank" rel="noopener noreferrer">More Info</a>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                      )
                    })
                  : null
                }
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Search;