import React from "react";
import PropTypes from "prop-types";
import Truncate from "react-truncate";


class ReadMore extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      expanded: false,
      truncated: false
    };
  }

  _handleTruncate = (truncated) => {
    if (this.state.truncated !== truncated) {
      this.setState({
        truncated
      });
    }
  }

  _toggleLines = (e) => {
    e.preventDefault();
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    const {children, more, less, lines} = this.props;
    const {expanded, truncated} = this.state;

    return (
      <div className={this.props.className}>
        <Truncate trimWhitespace={true}
                  lines={!expanded && lines}
                  ellipsis={(
                    <span onClick={this._toggleLines}>... {more}</span>
                  )}
                  onTruncate={this._handleTruncate}>
          {children}
        </Truncate>
        {!truncated && expanded && (
          <span onClick={this._toggleLines}>{less}</span>
        )}
      </div>
    );
  }
}

ReadMore.defaultProps = {
  lines: 8,
  more: <button>Read more</button>,
  less: <button>Show less</button>,
  className: ""
};

ReadMore.propTypes = {
  children: PropTypes.node.isRequired,
  lines: PropTypes.number,
  less: PropTypes.string,
  more: PropTypes.string
};

export default ReadMore;