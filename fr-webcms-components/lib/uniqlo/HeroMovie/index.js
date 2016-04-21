'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lightRawTheme = require('../../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('../../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _stylePropable = require('../../helpers/utils/stylePropable');

var _contextPure = require('../../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _configurationManager = require('../../helpers/configuration/configurationManager');

var _configurationManager2 = _interopRequireDefault(_configurationManager);

var _baseConfig = require('../../helpers/configuration/baseConfig');

var _baseConfig2 = _interopRequireDefault(_baseConfig);

var _Image = require('../../core/Image');

var _Image2 = _interopRequireDefault(_Image);

var _Text = require('../../Text');

var _Text2 = _interopRequireDefault(_Text);

var _Modal = require('../../core/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Youtube = require('../../core/Youtube');

var _Youtube2 = _interopRequireDefault(_Youtube);

var _Button = require('../../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Null = require('../../core/Null');

var _Null2 = _interopRequireDefault(_Null);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;


var getRelevantContextKeys = function getRelevantContextKeys(compTheme) {
  var hmTheme = compTheme && compTheme.heroMovie || {};
  return _extends({}, hmTheme);
};

var getStyles = function getStyles(themeAndConfig) {
  var compTheme = themeAndConfig.compTheme;

  var heroMovie = getRelevantContextKeys(compTheme);
  return {
    root: {
      position: 'relative',
      width: 960,
      height: 500,
      borderColor: heroMovie.borderColor,
      borderWidth: '1',
      padding: '1',
      borderStyle: 'solid',
      cursor: 'pointer'
    },
    youtubeVideoSize: {
      width: 960,
      height: 500
    },
    modalBodyStyle: {
      backgroundColor: 'transparent'
    },
    image: {
      width: '100%',
      height: '100%'
    },
    playIconContainer: {
      position: 'absolute',
      right: 20,
      width: 60,
      top: 20,
      margin: 0
    },
    playIconTextStyle: {
      color: heroMovie.iconTextColor || 'white',
      fontSize: 16,
      fontFamily: heroMovie.fontFamily
    },
    iconButtonStyle: {
      position: 'relative',
      backgroundColor: heroMovie.iconBackground || 'rgba(255, 255, 255, 0.6)',
      height: 60,
      width: '100%',
      padding: '0px',
      textAlign: 'center'
    },
    iconHoverStyle: {
      backgroundColor: heroMovie.iconHoverColor || 'rgba(255, 0, 0, .6)'
    }
  };
};

var getIconElement = function getIconElement(styles, iconSrc) {
  var buttonProps = {
    style: styles.iconButtonStyle,
    hoverStyle: styles.iconHoverStyle
  };

  return _react2.default.createElement(
    _Button2.default,
    buttonProps,
    _react2.default.createElement(_Image2.default, { source: iconSrc })
  );
};

var HeroMovie = function (_Component) {
  _inherits(HeroMovie, _Component);

  function HeroMovie() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, HeroMovie);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(HeroMovie)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      showVideoPopup: false
    }, _this.themeAndConfig = {
      compTheme: _this.context.compTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default),
      compConfig: _this.context.compConfig || _configurationManager2.default.getCompConfig(_baseConfig2.default)
    }, _this.handleClickEvent = function () {
      _this.setState({ showVideoPopup: !_this.state.showVideoPopup });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HeroMovie, [{
    key: 'render',
    value: function render() {
      var showVideo = this.state.showVideoPopup;
      var _props = this.props;
      var id = _props.id;
      var className = _props.className;
      var iconSrc = _props.iconSrc;
      var style = _props.style;
      var playButtonStyle = _props.playButtonStyle;
      var imageSrc = _props.imageSrc;
      var imageTitle = _props.imageTitle;
      var videoId = _props.videoId;
      var text = _props.text;

      var rootId = id;
      var styles = getStyles(this.themeAndConfig);
      var iconElement = getIconElement(styles, iconSrc);
      var rootStyle = (0, _stylePropable.mergeStyles)(styles.root, style);
      var iconTextStyle = (0, _stylePropable.mergeStyles)(styles.playIconContainer, playButtonStyle);

      return _react2.default.createElement(
        'div',
        {
          style: rootStyle,
          id: rootId,
          className: className,
          onClick: this.handleClickEvent
        },
        _react2.default.createElement(
          'div',
          { style: iconTextStyle },
          iconElement,
          _react2.default.createElement(_Text2.default, {
            style: styles.playIconTextStyle,
            content: text
          })
        ),
        _react2.default.createElement(
          'h1',
          null,
          _react2.default.createElement(_Image2.default, {
            source: imageSrc,
            alternateText: imageTitle,
            style: styles.image
          })
        ),
        showVideo ? _react2.default.createElement(
          _Modal2.default,
          { dialogStyle: styles.youtubeVideoSize, bodyStyle: styles.modalBodyStyle },
          _react2.default.createElement(_Youtube2.default, { source: videoId, allowAutoplay: true })
        ) : _Null2.default
      );
    }
  }]);

  return HeroMovie;
}(_react.Component);

HeroMovie.propTypes = {
  className: string,
  iconSrc: string,
  id: string,
  imageSrc: string.isRequired,
  imageTitle: string,
  playButtonStyle: object,
  style: object,
  text: string,
  videoId: string.isRequired
};
HeroMovie.contextTypes = {
  compTheme: object,
  compConfig: object
};
exports.default = (0, _contextPure2.default)(HeroMovie);