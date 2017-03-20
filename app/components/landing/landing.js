// Include the Main React Dependency
var React = require("react");
var axios = require("axios");

// Include children components
var Login = require("./children/Login");

// Creating the Main component
var Landing = React.createClass({

    // Sets the initial state of the component.
    getInitialState: function () {
        return {
            // initial state variables (page load)
        };
    },

    componentDidMount: function () {
        // what to do when the component mounts
    },


    componentDidUpdate: function () {
        // what to do when component updates    
    },

    // Here we render the function
    render: function () {
        return (
            <span>
                <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{ marginBottom: 0 }}>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="index.html">Do Good</a>
                    </div>
                    <Login />
                </nav>
                {/*Top Banner*/}
                <div id="top-banner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="margin-top-200 large-h1"> Do Good App </h1>
                            <hr />
                            <h4> Some Content. </h4>
                            <button type="button" className="btn btn-lg btn-outline-success margin-top-50">Get Started</button>
                        </div>
                    </div>
                </div>
                {/*About*/}
                <div id="about">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="margin-top-130">Helping You Give Back</h1>
                            <hr />
                            <h5>Set goals. Track your progress. Showcase your profile.</h5>
                            <p>More Text here.</p>
                        </div>
                    </div>
                </div>
                {/*How it works*/}
                <div id="how-it-works">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="margin-top-130">How it Works</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <i className="fa fa-search fa-fw"></i>
                            <h4>Search for Events</h4>
                            <p>Browse upcoming events in any area and add them to your volunteer calendar.</p>
                        </div>
                        <div className="col-md-4">
                            <i className="fa fa-wrench fa-fw"></i>
                            <h4>Volunteer</h4>
                            <p>Attend events to meet your volunteer hour goal.</p>
                        </div>
                        <div className="col-md-4">
                            <i className="fa fa-check fa-fw"></i>
                            <h4>Track Progress</h4>
                            <p>Visualize your impact with our trackers.</p>
                        </div>
                    </div>
                </div>
                {/*Extra Features*/}
                <div id="features">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="margin-top-130">Beyond Tracking</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Showcase Your Profile</h3>
                        </div>
                        <div className="col-md-6">
                            <h3>Connect With Others</h3>
                        </div>
                    </div>
                </div>
                <footer className="navbar navbar-default navbar-fixed-bottom" role="navigation" style={{ marginBottom: 0 }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 footer-txt">
                                Made by&nbsp;&nbsp;
                                <a target="_blank" href="https://github.com/JustinRyanCarlson">Justin Carlson</a>
                                <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                                <a target="_blank" href="https://github.com/aishaprograms">Aisha Ahmad</a>
                                <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                                <a target="_blank" href="https://github.com/kshiro622">Katie Shiro</a>
                                <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                                <a target="_blank" href="https://github.com/hadicodes">Hadi Yousufi</a>
                                <span className="pull-right">The Do Good App &copy; 2017</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </span>
        );
    }
});

// Export the component back for use in other files
module.exports = Landing;