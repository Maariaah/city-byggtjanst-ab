import React, { Component } from "react";
import classnames from "classnames";

class Icon extends Component {
  render() {
    const { name, className } = this.props;

    return <span className={classnames(name, className)}></span>;
  }
}

export default Icon;
