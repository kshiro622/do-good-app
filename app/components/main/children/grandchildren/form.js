// Include React
var React = require("react");

// Creating the Form component
var Form = React.createClass({

  // set search keyword state
  getInitialState: function () {
    return { keyword: "", category: "", location: "" };
  },
  // This function will respond to the user input
  handleKeywordChange: function (event) {
    this.setState({ keyword: event.target.value });
  },
  // This function will respond to the user input
  handleCategoryChange: function (event) {
    this.setState({ category: parseInt(event.target.value) });
  },
  // This function will respond to the user input
  handleLocationChange: function (event) {
    this.setState({ location: event.target.value });
  },
  getLocation: function(event){
    var ipURL = 'http://ipinfo.io';
    var cityState = '';
    $.getJSON({ url: ipURL }).done(function(response) {
        cityState = response.city + ', ' + response.region;
    })
    .then(function(){
      $('input[type="text"]#location').val(cityState);
      this.setState({location: cityState});
    }.bind(this));
  },
  // When a user submits...
  handleSubmit: function (event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();
    let optionsObj = {};
    if(this.state.keyword!==''){
      optionsObj["keywords"] = [this.state.keyword];
    }
    if(this.state.category!==''){
        optionsObj["categoryIds"] = [this.state.category];  
    }
    optionsObj["location"] = this.state.location;
    optionsObj["numberOfResults"] = 10;
    this.props.searchVM(optionsObj);
    this.setState({ keyword: "", category: "", location: "" });
    document.getElementById("vm-form").reset();

  },
  handleVirtualSearch: function(){
      let optionsObj = {};
      optionsObj["virtual"] = true;
      optionsObj["numberOfResults"] = 10;
      this.props.searchVM(optionsObj);
  },
  // Here we describe this component's render method
  render: function () {
    return (
      <span>
        <br />
        <p><small className="gray-txt">Start searching for volunteer opportunities. Enter your location, enter a keyword, or browse by category. Your search results will be found in matches.</small></p>
        <form onSubmit={this.handleSubmit} role="form" id="vm-form">
          <div className="form-group input-group">
            {/*Location is required*/}
            <label htmlFor="location">Location</label>
            <input
              value={this.state.location}
              type="text"
              className="form-control"
              id="location"
              onChange={this.handleLocationChange}
              data-toggle="tooltip" 
              data-placement="top" 
              title="Enter your City, State or your Zipcode. This is required."
              required
            />
            <span className="input-group-btn">
                <button 
                className="btn btn-default" 
                type="button" 
                onClick={this.getLocation}
                data-toggle="tooltip" 
                data-placement="top" 
                title="Detect your location">
                  <i className="fa fa-map-marker"></i>
                </button>
            </span>
          </div>
          <div className="form-group">
            {/*Search by keyword*/}
            <label htmlFor="searchkeyword">Search by Keyword</label>
            <input
              value={this.state.keyword}
              type="text"
              className="form-control"
              id="searchkeyword"
              onChange={this.handleKeywordChange}
              data-toggle="tooltip" 
              data-placement="top" 
              title="Enter a keyword or keywords separated by spaces e.g. cats dogs. This is optional."
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Browse by Category</label>
            <select
              className="form-control"
              size="7"
              id="category"
              onChange={this.handleCategoryChange}
              data-toggle="tooltip" 
              data-placement="top" 
              title="Select a volunteering category. This is optional."
            >
              <option value="23">Advocacy & Human Rights</option>
              <option value="30">Animals</option>
              <option value="34">Arts & Culture</option>
              <option value="22">Children & Youth</option>
              <option value="37">Computers & Technology</option>
              <option value="14">Crisis Support</option>
              <option value="17">Disabled</option>
              <option value="42">Disaster Relief</option>
              <option value="15">Education & Literacy</option>
              <option value="28">Emergency & Safety</option>
              <option value="13">Environment</option>
              <option value="11">Health & Medicine</option>
              <option value="7">Homeless & Housing</option>
              <option value="39">Hunger</option>
              <option value="41">Immigrants & Refugees</option>
              <option value="29">International</option>
              <option value="5">Justice & Legal</option>
              <option value="40">Media & Broadcasting</option>
              <option value="6">Politics</option>
              <option value="33">Race & Ethnicity</option>
              <option value="36">Religion</option>
              <option value="12">Seniors</option>
              <option value="19">Sports & Recreation</option>
              <option value="43">Veterans & Military Families</option>
              <option value="3">Women</option>
            </select>
          </div>
          <button
            className="btn green-btn"
            type="submit"
          >
            Submit
          </button>
        </form>
        <br />
        <p><small className="gray-txt">If you wish to volunteer remotely, you may search virtual opportunities instead.</small></p>
        <a onClick={this.handleVirtualSearch} className="pointer-link purple-txt bold">Search virtual opportunities.</a>
      </span>
    );
  }
});

// Export the component back for use in other files
module.exports = Form;
