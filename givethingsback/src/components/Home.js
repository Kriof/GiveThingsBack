import React from "react";
import Start from "./Start/Start";
import WhatDoWeDo from "./WhatDoWeDoSection/WhatDoWeDo";
import AboutUs from "./AboutUs/AboutUs";
import WhoWeHelp from "./WhoWeHelp/WhoWeHelp";
import { connect } from "react-redux";
import { fetchFundation, changePage }  from './Actions/WhoWeHelp';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchFundation()
    
  }
  render() {
    return (
      <>
          <Start />
          <WhatDoWeDo />
          <AboutUs />
          {/* <WhoWeHelp fetchFundation = {this.props.fetchFundation}/> */}
          <WhoWeHelp fundations = {this.props.fundations}/>
          <button onClick={() => this.props.changePage(this.props.fundations.currentPageId -1)}>-</button>
          <button onClick={() => this.props.changePage(this.props.fundations.currentPageId +1)}>+</button>
      </>
    );
  }
}

const mapState = ({ fundations }) => ({
  fundations
})

const mapDispatch = dispatch => ({
  add: () => dispatch({ type: 'DUPA' }),
  fetchFundation: name => dispatch(fetchFundation(name)),
  changePage: pageId => dispatch(changePage(pageId))
})

export default connect(mapState, mapDispatch)(Home);
