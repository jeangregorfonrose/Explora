import React from "react";
import "./BusinessList.css";
import Business from "../Business/Business";

export default class BusinessList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="BusinessList">
        {this.props.businesses.map((business) => {
          return <Business key={business.id} business={business} />;
        })}
      </div>
    );
  }
}
