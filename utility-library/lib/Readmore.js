"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTruncate = require("react-truncate");

var _reactTruncate2 = _interopRequireDefault(_reactTruncate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReadMore = function (_React$Component) {
  _inherits(ReadMore, _React$Component);

  function ReadMore() {
    var _ref;

    _classCallCheck(this, ReadMore);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = ReadMore.__proto__ || Object.getPrototypeOf(ReadMore)).call.apply(_ref, [this].concat(args)));

    _this._handleTruncate = function (truncated) {
      if (_this.state.truncated !== truncated) {
        _this.setState({
          truncated: truncated
        });
      }
    };

    _this._toggleLines = function (e) {
      e.preventDefault();
      _this.setState({
        expanded: !_this.state.expanded
      });
    };

    _this.state = {
      expanded: false,
      truncated: false
    };
    return _this;
  }

  _createClass(ReadMore, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          more = _props.more,
          less = _props.less,
          lines = _props.lines;
      var _state = this.state,
          expanded = _state.expanded,
          truncated = _state.truncated;


      return _react2.default.createElement(
        "div",
        { className: this.props.className },
        _react2.default.createElement(
          _reactTruncate2.default,
          { trimWhitespace: true,
            lines: !expanded && lines,
            ellipsis: _react2.default.createElement(
              "span",
              { onClick: this._toggleLines },
              "... ",
              more
            ),
            onTruncate: this._handleTruncate },
          children
        ),
        !truncated && expanded && _react2.default.createElement(
          "span",
          { onClick: this._toggleLines },
          less
        )
      );
    }
  }]);

  return ReadMore;
}(_react2.default.Component);

ReadMore.defaultProps = {
  lines: 8,
  more: _react2.default.createElement(
    "button",
    null,
    "Read more"
  ),
  less: _react2.default.createElement(
    "button",
    null,
    "Show less"
  ),
  className: ""
};

ReadMore.propTypes = {
  children: _propTypes2.default.node.isRequired,
  lines: _propTypes2.default.number,
  less: _propTypes2.default.string,
  more: _propTypes2.default.string
};

exports.default = ReadMore;