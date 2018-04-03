import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ConnectedRouter } from "connected-react-router"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import CssBaseline from "material-ui/CssBaseline"
import AppHeader from "container/AppHeader"
import AppNavigation from "container/AppNavigation"
import history from "store/history"
import routes from "route/routes"
import * as appActions from "action/app"
import "./index.css"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      in: true,
      scrollY: 0,
    }

    this.handleResize = this.handleResize.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.addFixedClass = this.addFixedClass.bind(this)
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleResize)
    window.addEventListener("scroll", this.handleScroll)

    this.handleResize()
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleResize() {
    let width = 0

    if (window.innerWidth != null) {
      width = window.innerWidth
    }

    this.props.appActions.appWidthUpdate(width)
  }

  handleScroll(event) {
    const { scrollY } = event.currentTarget

    this.setState({
      scrollY,
    })
  }

  addFixedClass(prefix) {
    const { scrollY } = this.state
    const { width, deviceBreakpoint } = this.props
    const maxScroll = width > deviceBreakpoint ? 80 : 64

    return scrollY >= maxScroll ? `${prefix}--fixed` : ""
  }

  render() {
    const { addFixedClass } = this

    // @TODO Way to many renders due to scrollY - fix it
    return (
      <Router>
        <ConnectedRouter history={history}>
          <Route
            path="/"
            render={({ location }) => (
              <div className="App">
                <CssBaseline />
                <div className="App_wrapper">
                  <header className="App__header">
                    <div className="App__header-inner">
                      <AppHeader />
                    </div>
                  </header>
                  <nav className={`App__navigation ${addFixedClass("App__navigation")}`}>
                    <div className="App__navigation-inner">
                      <AppNavigation />
                    </div>
                  </nav>
                  <main className={`App__route  ${addFixedClass("App__route")}`}>
                    <div className={`App__transition-group`}>
                      <TransitionGroup>
                        <CSSTransition
                          key={location.key}
                          classNames="fade-over"
                          timeout={350}
                          mountOnEnter={true}
                          unmountOnExit={true}
                        >
                          <Switch location={location}>
                            {routes.map(route => <Route {...route} key={route.path} />)}
                          </Switch>
                        </CSSTransition>
                      </TransitionGroup>
                    </div>
                  </main>
                </div>
              </div>
            )}
          />
        </ConnectedRouter>
      </Router>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch),
  }
}

function mapStateToProps(state) {
  return {
    width: state.app.width,
    deviceBreakpoint: state.app.deviceBreakpoint,
    location: state.router.location,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
