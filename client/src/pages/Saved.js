import React, {Component} from 'react';
import API from '../utils/API';

class Saved extends Component {
  state = {
    computers: []
  }

  // retrieve customized computer on load
  componentDidMount() {
    this.getUserSavedComputer("user_id_spjw99");
  }

  getUserSavedComputer = (user_id) => {
    API.getUserSavedComputer(user_id)
      .then(({data}) => this.setState({computers: data}))
      .catch(err => console.log(err));
  }

  // handle deleting a book
//   deleteBook = (bookId) => {
//     API.deleteBook(bookId)
//       .then(this.getBooks)
//       .catch(err => console.log(err));
//   }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid text-center">
          <h1 className="display-4">View Customized Computers</h1>
        </div>
        <div className="container-fluid">
          <div className="row align-items-stretch">
            {/* use ternary to check if books are in state */}

            {!this.state.computers.length
              ? (
                <h2>Build For Some Computers, Yo!</h2>
              )
              : this
                .state
                .computers
                .map(computer => {
                  return (
                    <div className="col-12 col-md-6" key={computer._id}>
                      <div className="card">
                        <h5 className="card-header">{computer.title}</h5>
                        <img src={computer.image} alt={computer.title} className="card-img"/>
                        <div className="card-body">
                          <h6 className="card-subtitle">By {computer.authors}</h6>
                          <p>{computer.description}</p>
                          <div className="btn-group" role="group">
                            <button type="button" className="btn" onClick={() => this.SaveParts(computer._id)}>Save</button>
                            <a className="btn" href={computer.link}>Go To Google Computer</a>
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

    )
  }
}

export default Saved;