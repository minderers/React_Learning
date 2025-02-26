import { Component } from "react";
import PropTypes from "prop-types";

class Student extends Component {
  render() {
    return (
      <div>
        <h1>Student</h1>
        <img src={this.props.img} width="200px" height="200px" alt="" />
        <div className="">
          <h2>{this.props.name}</h2>
          <h2>{this.props.class}</h2>
        </div>
      </div>
    );
  }
}
Student.propTypes = {
  name: PropTypes.string,
  class: PropTypes.string,
  img: PropTypes.string,
};
export default Student;
