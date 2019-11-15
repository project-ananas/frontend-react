import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Map.css";
import Map from "./initMap.js";

class Home extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      map: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: false });

    fetch("LINK TO BACKEND API")
      .then(Response => Response.json())
      .then(data => this.setState({ map: data, isLoading: false }));
  }

  render() {
    const { map, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <view style={{ fles: 1 }}>
        <h1>Plattegrond van de 4de verdieping</h1>
        <div id="map">
          <Map />
          <script
            async
            defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCR6CXHswuFyCSGmMdk3rbGEj80HKpPQeA&callback=initMap"
          ></script>
        </div>
      </view>
    );
  }
}

export default Home;
