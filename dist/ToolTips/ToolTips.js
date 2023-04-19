"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _Help = _interopRequireDefault(require("@mui/icons-material/Help"));

require("./ToolTips.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ToolTips = function ToolTips(props) {
  // const [status, setStatus] = useState(false);
  return (
    /*#__PURE__*/
    // <div className="tooltips">
    //   <div className="groupInfo" id={props.target}>
    //     <HelpIcon className="icon" />
    //   </div>
    //   <Tooltip placement="top" isOpen={status} target={props.target} toggle={() => setStatus(!status)}>
    //     {props.description}
    //   </Tooltip>
    // </div>
    _react.default.createElement(_material.Tooltip, {
      title: props.description,
      placement: "top"
    }, /*#__PURE__*/_react.default.createElement(_material.IconButton, null, /*#__PURE__*/_react.default.createElement(_Help.default, null)))
  );
};

var _default = ToolTips;
exports.default = _default;