import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { } from '../actions'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import cities from '../utils/cities.json';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';

class Upload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: {
        photo: null,
        title: "",
        location: "",
        date: new Date(),
      }
    }
  }

  onValueChange = (event, field) => {
    let form = this.state.form;
    form[field] = event.target.value;
    this.setState({ form })
  }

  handleDateChange = date => {
    this.setState({ form: { ...this.state.form, date } });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    console.log(this.state.form)
  }

  render() {
    // const props = this.props;
    const { form } = this.state;
    console.log(form)
    const selectValue = cities.find(city => city.name === form.location);
    return (
      <div className="u-content">
        <div className="centered-container" style={{ marginTop: '60px' }}>
          <div className="photo-upload__btn btn-file">
            <input type="file" accept="image/png, image/jpeg" />
            <i className="ni ni-picture-o"></i>
            <h3>Upload Photo</h3>
            <h5>Photo size maximum limit 2MB</h5>
          </div>
        </div>
        <div className="centered-container" style={{ marginTop: '30px' }}>
          <div className="form-container">
            <form onSubmit={this.handleFormSubmit}>
              <div className="group">
                <TextField label="Title" value={form.title} fullWidth onChange={e => this.onValueChange(e, 'title')} />
              </div>
              <div className="group">
                <Autocomplete
                  id="combo-box-demo"
                  options={cities}
                  getOptionLabel={option => option.name}
                  renderInput={params => (
                    <TextField {...params} label="Location" fullWidth />
                  )}
                  value={selectValue}
                  onSelect={e => this.onValueChange(e, 'location')}
                />
              </div>
              <div className="group">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    autoOk
                    label="Date"
                    clearable
                    disableFuture
                    format="dd - MM - yyyy"
                    value={form.date}
                    onChange={this.handleDateChange}
                    style={{ width: '100%' }}
                  />
                </MuiPickersUtilsProvider>
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

const mapStateToProps = ({ }) => ({
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