import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {  } from '../actions'

class Upload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: {
        photo: null,
        title: "",
        location: "",
        date: "",
      }
    }
  }

  render() {
    const props = this.props;
    const { form } = this.state;
    return (
      <div className="u-content">
        <div className="centered-container" style={{ marginTop: '60px' }}>
          <div className="photo-upload__btn btn-file">
            <input type="file" accept="image/png, image/jpeg"/>
            <i className="ni ni-picture-o"></i>
            <h3>Upload Photo</h3>
            <h5>Photo size maximum limit 2MB</h5>
          </div>
        </div>
        <div className="centered-container" style={{ marginTop: '30px' }}>
          <div className="form-container">
            <form onSubmit={e => e.preventDefault()}>
              <div className="group">
                <input type="text" required />
                <span className="bar"></span>
                <label>Title</label>
              </div>
              <div className="group">
                <input type="text" required />
                <span className="bar"></span>
                <label>Location</label>
              </div>
              <div className="btn-wrapper">
                <button type="submit" value="submit" className="button2 btn-primary2">Save<div className="btn-secondary2"></div></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({  }) => ({
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upload)