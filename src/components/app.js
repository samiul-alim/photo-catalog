import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import ROUTES from '../utils/routes';
import { Home, Upload, Catalog } from './';
import { appInit } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    props.appInit();
  }

  render() {
    const { router } = this.props;
    return (
      <div>
        <header className="nav">
          <ul>
            <li className={router.location.pathname === ROUTES.ROOT ? 'active' : ''}><Link to={ROUTES.ROOT}>Home</Link></li>
            <li className={router.location.pathname === ROUTES.UPLOAD ? 'active' : ''}><Link to={ROUTES.UPLOAD}>Upload</Link></li>
            <li className={router.location.pathname === ROUTES.CATALOG ? 'active' : ''}><Link to={ROUTES.CATALOG}>Catalog</Link></li>
          </ul>
        </header>

        <main>
          <Switch>
            <Route exact path={ROUTES.ROOT} component={Home} />
            <Route exact path={ROUTES.UPLOAD} component={Upload} />
            <Route exact path={ROUTES.CATALOG} component={Catalog} />

            <Redirect to={ROUTES.ROOT} />
          </Switch>
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ router }) => {
  return {
    router
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      appInit
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(App);
