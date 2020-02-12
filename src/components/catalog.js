import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { } from '../actions'

class Catalog  extends Component {
  render() { 
    const props = this.props;
    return (
      <div>
        <h1>Catalog</h1>
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
)(Catalog)