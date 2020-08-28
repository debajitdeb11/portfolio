import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

const imgLink =
  "https://avatars1.githubusercontent.com/u/11337871?s=460&u=03b7fe077560155668c7f169ae0f9e784fde5efb&v=4";
class Base extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid text-center">
          <h1 className="display-4">Debajit Deb</h1>
          <img
            className="rounded mx-auto d-block my-4"
            alt="My Profile "
            width="256px"
            height="256px"
            src={imgLink}
          />
        </div>

        <hr className="my-0" />

        <Menu />

        <div className="container-fluid my-3 ">
          <h3 className="text-center"> {this.props.name} </h3>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Base;
