import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class History extends React.Component {
  constructor(props: any) {
    super(props);

    var History = require('/history');

    this.state = {
      History: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: false });

    fetch("LINK TO BACKEND API")
      .then(Response => Response.json())
      .then(data => this.setState({ History: data, isLoading: false }));
  }

  render() {
    const { History, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <view style={{ fles: 1 }}>
        <div className="row">
          <form className="form-inline my-3 my-lg-10">
            <input className="form-control mr-sm-5" type="date"></input>
          </form>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
          </form>
        </div>
        <div className="card-group">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">November 2019</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                1 t/m 30 november
              </h6>
              <i className="card-text">Link naar document</i>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">December 2019</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                1 t/m 31 december
              </h6>
              <i className="card-text">Link naar document</i>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Januari 2020</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                1 t/m 31 januari
              </h6>
              <i className="card-text">Link naar document</i>
            </div>
          </div>
        </div>
        <div className="card-group">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Februari 2020</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                1 t/m 29 februari
              </h6>
              <i className="card-text">Link naar document</i>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Maart 2020</h5>
              <h6 className="card-subtitle mb-2 text-muted">1 t/m 31 maart</h6>
              <i className="card-text">Link naar document</i>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">April 2020</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                1 t/m 30 november
              </h6>
              <i className="card-text">Link naar document</i>
            </div>
          </div>
        </div>
      </view>
    );
  }
}

export default History;
