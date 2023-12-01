"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _styles = require("@material-ui/core/styles");
var _core = require("@material-ui/core");
var _ToolTips = _interopRequireDefault(require("../ToolTips"));
require("./InputElem.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: '25ch'
  },
  input: {
    color: 'blue'
    // backgroundColor: 'lightblue'
  },
  inputAdornment: {
    paddingRight: '1em',
    color: 'black'
  }
}));
const InputElem = _ref => {
  let {
    data,
    onChange,
    props,
    style
  } = _ref;
  const classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_core.FormControl, {
    className: (0, _clsx.default)(classes.margin, classes.withoutLabel, classes.textField)
    // variant="outlined"
  }, /*#__PURE__*/_react.default.createElement(_core.InputLabel, {
    htmlFor: "outlined-adornment-amount"
  }, data.description), /*#__PURE__*/_react.default.createElement(_core.Input, {
    className: classes.input,
    value: data.value,
    disableUnderline: props.disableUnderline,
    disabled: props.disabled,
    inputProps: {
      style: style
    },
    startAdornment: !props.disableInputAdornment && /*#__PURE__*/_react.default.createElement(_core.InputAdornment, {
      position: "start",
      className: classes.inputAdornment
    }, data.text, /*#__PURE__*/_react.default.createElement(_ToolTips.default, {
      description: data.description,
      target: data.text,
      color: style.toolTipsColor
    })),
    endAdornment: /*#__PURE__*/_react.default.createElement(_core.InputAdornment, {
      position: "end"
    }, data.unit),
    onChange: onChange
  })));
};
InputElem.propTypes = {
  data: _propTypes.default.object.isRequired,
  onChange: _propTypes.default.func
};
InputElem.defaultProps = {
  onChange: undefined
};
var _default = exports.default = InputElem;