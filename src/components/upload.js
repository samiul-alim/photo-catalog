import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addPhotoToCatalog } from '../actions'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import cities from '../utils/cities.json';
import DateFnsUtils from '@date-io/date-fns';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';

class Upload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: {
        photo: null,
        title: "",
        location: "",
        date: new Date()
      },
      formIsValid: true
    }
  }

  onValueChange = (event, field) => {
    let form = this.state.form;
    form[field] = event.target.value;
    this.setState({ form, formIsValid: true })
  }

  handleDateChange = date => {
    this.setState({ form: { ...this.state.form, date }, formIsValid: true });
  };

  onImageLoad = event => {
    const photo = event.target.files[0];
    if (photo && photo.size > 5000000) {
      alert('Photo max size limit exceeded!')
    } else if (photo) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState({ form: { ...this.state.form, photo: reader.result }, formIsValid: true });
      }
      reader.readAsDataURL(photo);
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();
    const form = this.state.form;
    const title = form.title.trim(),
      location = form.location.trim(),
      date = form.date,
      photo = form.photo;
    if (title && location && date && photo) {
      this.props.addPhotoToCatalog({
        title, location, date, photo
      });
    } else {
      this.setState({ formIsValid: false });
    }
  }

  render() {
    // const props = this.props;
    const { form, formIsValid } = this.state;
    const selectValue = cities.find(city => city.name === form.location);
    return (
      <div className="u-content">
        <Card>
          <CardContent>
            <Typography className='pca-label' variant="h5" component="h2"> New Photo </Typography>
            <Typography color="textSecondary"> Please fill all fields to create new one. </Typography>
          </CardContent>
        </Card>
        <div className="centered-container" style={{ marginTop: '60px' }}>
          <div className="photo-upload__btn btn-file">
            <input type="file" accept="image/png, image/jpeg" onChange={this.onImageLoad} />
            {form.photo && <img height="auto" width="100%" src={form.photo} />}
            {!form.photo &&
              <React.Fragment>
                <h3>Upload Photo</h3>
                <h5>Photo size maximum limit 5 MB</h5>
              </React.Fragment>
            }
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
              {!formIsValid &&
                <div className="error-msg-block">
                  <span>All fields are required</span>
                </div>
              }
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
      addPhotoToCatalog
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upload)