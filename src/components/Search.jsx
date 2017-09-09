import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  onInputChange (term) {
    this.setState({term});
    this.props.handler(term);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" value={this.state.term} onChange={(e)=>this.onInputChange(e.target.value)} />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}
