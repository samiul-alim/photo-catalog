import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { gotoRoute, deletePhoto } from '../actions'
import ROUTES from '../utils/routes';
import truncate from '../utils/truncate';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Gallery from 'react-grid-gallery';


class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.photo.catalog
    }
    // this.state = {
    //   images: [
    //     {
    //       'id': '524125',
    //       title: 'Some photo title',
    //       location: 'Dhaka',
    //       date: new Date(),
    //       isSelected: false,
    //       photo: `data:image/png;base64,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`
    //     }
    //   ]
    // }
  }

  componentWillReceiveProps() {
    this.setState({ images: this.props.photo.catalog });
  }

  onSelectImage = (index, image) => {
    var images = this.state.images.slice();
    var img = images[index];
    if (img.hasOwnProperty("isSelected")) {
      img.isSelected = !img.isSelected;
    }
    else {
      img.isSelected = true;
    }
    this.setState({
      images
    });
  }

  onDeletePhoto = () => {
    const selectedImages = this.state.images.filter(item => item.isSelected).map(item => item.id);
    if (selectedImages.length > 0) {
      this.props.deletePhoto({ photoIds: selectedImages });
    }
  }

  render() {
    const { gotoRoute } = this.props;
    const { images } = this.state;
    const selectedImages = images.filter(item => item.isSelected);
    const photoList = images.map(photo => ({
      src: photo.photo,
      thumbnail: photo.photo,
      thumbnailCaption: (<span style={{ color: "#215a63" }}> {truncate(photo.title, 20)} - <i>{photo.location}</i></span>),
      caption: <React.Fragment>
        <span className="gallery-image-title">{photo.title}</span>
        <span className="gallery-image-location">{photo.location}</span>
        <span className="gallery-image-date">{photo.date}</span>
      </React.Fragment>,
      isSelected: photo.isSelected,
      alt: 'Image not found!'
    }));

    return (
      <div className="u-content">
        {photoList.length > 0 &&
          <React.Fragment>
            <Card style={{ marginBottom: '10px' }}>
              <CardContent>
                <Typography className='pca-label' variant="h5" component="h2"> Photo Catalog </Typography>
                <Typography color="textSecondary"> Click on photo to show detailed </Typography>
              </CardContent>
            </Card>
            {selectedImages.length > 0 &&
              <Button className="photo-delete-btn" onClick={this.onDeletePhoto} size="small" variant="contained">Delete</Button>
            }
            <Gallery
              images={photoList}
              onSelectImage={this.onSelectImage}
            />
          </React.Fragment>
        }
        {photoList.length === 0 &&
          <React.Fragment>
            <Card>
              <CardContent>
                <Typography className='pca-label' variant="h5" component="h2"> Photo Catalog </Typography>
                <Typography color="textSecondary"> Photo Catalog is empty, upload new one. </Typography>
              </CardContent>
            </Card>
            <div className="catalog-btn-container">
              <div className="radio-tile-group">
                <div className="input-container" onClick={e => gotoRoute({ route: ROUTES.UPLOAD })}>
                  <input id="bike" className="radio-button" type="radio" name="radio" />
                  <div className="radio-tile">
                    <div className="icon walk-icon">
                      <svg x="0px" y="0px" viewBox="0 0 419.2 419.2" width="512px" height="512px" className="hovered-paths"><g><g><g><g><circle cx="158" cy="144.4" r="28.8" data-original="#000000" className="hovered-path active-path" data-old_color="#000000" fill="#079AD9"></circle><path d="M394.4,250.4c-13.6-12.8-30.8-21.2-49.6-23.6V80.4c0-15.6-6.4-29.6-16.4-40C318,30,304,24,288.4,24h-232     c-15.6,0-29.6,6.4-40,16.4C6,50.8,0,64.8,0,80.4v184.4V282v37.2c0,15.6,6.4,29.6,16.4,40c10.4,10.4,24.4,16.4,40,16.4h224.4     c14.8,12,33.2,19.6,53.6,19.6c23.6,0,44.8-9.6,60-24.8c15.2-15.2,24.8-36.4,24.8-60C419.2,286.8,409.6,265.6,394.4,250.4z      M21.2,80.4c0-9.6,4-18.4,10.4-24.4c6.4-6.4,15.2-10.4,24.8-10.4h232c9.6,0,18.4,4,24.8,10.4c6.4,6.4,10.4,15.2,10.4,24.8v124.8     l-59.2-59.2c-4-4-10.8-4.4-15.2,0L160,236l-60.4-60.8c-4-4-10.8-4.4-15.2,0l-63.2,64V80.4z M56,355.2v-0.8     c-9.6,0-18.4-4-24.8-10.4c-6-6.4-10-15.2-10-24.8V282v-12.4L92,198.4l60.4,60.4c4,4,10.8,4,15.2,0l89.2-89.6l58.4,58.8     c-1.2,0.4-2.4,0.8-3.6,1.2c-1.6,0.4-3.2,0.8-5.2,1.6c-1.6,0.4-3.2,1.2-4.8,1.6c-1.2,0.4-2,0.8-3.2,1.6c-1.6,0.8-2.8,1.2-4,2     c-2,1.2-4,2.4-6,3.6c-1.2,0.8-2,1.2-3.2,2c-0.8,0.4-1.2,0.8-2,1.2c-3.6,2.4-6.8,5.2-9.6,8.4c-15.2,15.2-24.8,36.4-24.8,60     c0,6,0.8,11.6,2,17.6c0.4,1.6,0.8,2.8,1.2,4.4c1.2,4,2.4,8,4,12v0.4c1.6,3.2,3.2,6.8,5.2,9.6H56z M378.8,355.2     c-11.6,11.6-27.2,18.4-44.8,18.4c-16.8,0-32.4-6.8-43.6-17.6c-1.6-1.6-3.2-3.6-4.8-5.2c-1.2-1.2-2.4-2.8-3.6-4     c-1.6-2-2.8-4.4-4-6.8c-0.8-1.6-1.6-2.8-2.4-4.4c-0.8-2-1.6-4.4-2-6.8c-0.4-1.6-1.2-3.6-1.6-5.2c-0.8-4-1.2-8.4-1.2-12.8     c0-17.6,7.2-33.2,18.4-44.8c11.2-11.6,27.2-18.4,44.8-18.4s33.2,7.2,44.8,18.4c11.6,11.6,18.4,27.2,18.4,44.8     C397.2,328,390,343.6,378.8,355.2z" data-original="#000000" className="hovered-path active-path" data-old_color="#000000" fill="#079AD9"></path><path d="M341.6,267.6c-0.8-0.8-2-1.6-3.6-2.4c-1.2-0.4-2.4-0.8-3.6-0.8c-0.4,0-0.4,0-0.4,0c-0.4,0-0.4,0-0.4,0     c-1.2,0-2.4,0.4-3.6,0.8c-1.2,0.4-2.4,1.2-3.6,2.4l-24.8,24.8c-4,4-4,10.8,0,15.2c4,4,10.8,4,15.2,0l6.4-6.4v44     c0,6,4.8,10.8,10.8,10.8s10.8-4.8,10.8-10.8v-44l6.4,6.4c4,4,10.8,4,15.2,0c4-4,4-10.8,0-15.2L341.6,267.6z" className="hovered-path active-path" fill="#079AD9"></path></g></g></g></g></svg>
                    </div>
                    <label htmlFor="walk" className="radio-tile-label">Add new</label>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        }
      </div>
    );
  }
}

const mapStateToProps = ({ photo }) => ({
  photo
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      gotoRoute,
      deletePhoto,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Catalog)