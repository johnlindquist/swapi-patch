webpackHotUpdate(1,{

/***/ 134:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _regenerator = __webpack_require__(95);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _asyncToGenerator2 = __webpack_require__(94);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _getPrototypeOf = __webpack_require__(36);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(38);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(39);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(41);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(40);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(31);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _react3 = __webpack_require__(31);
	
	var _axios = __webpack_require__(148);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//https://swapi-json-server-ddpsgpqivc.now.sh/people/1
	var _class = function (_Component) {
	    (0, _inherits3.default)(_class, _Component);
	
	    function _class() {
	        (0, _classCallCheck3.default)(this, _class);
	        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(_class, [{
	        key: 'update',
	        value: function update() {
	            _axios2.default.patch('https://swapi-json-server-ddpsgpqivc.now.sh/people/1', { name: 'John Skywalker' });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            console.log('render');
	            return _react2.default.createElement(
	                'div',
	                null,
	                this.props.name,
	                _react2.default.createElement(
	                    'button',
	                    { onClick: this.update },
	                    'Update'
	                )
	            );
	        }
	    }], [{
	        key: 'getInitialProps',
	        value: function () {
	            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
	                var _ref2, data;
	
	                return _regenerator2.default.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                _context.next = 2;
	                                return _axios2.default.get('https://swapi-json-server-ddpsgpqivc.now.sh/people/1');
	
	                            case 2:
	                                _ref2 = _context.sent;
	                                data = _ref2.data;
	                                return _context.abrupt('return', data);
	
	                            case 5:
	                            case 'end':
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));

	            function getInitialProps() {
	                return _ref.apply(this, arguments);
	            }

	            return getInitialProps;
	        }()
	    }]);
	    return _class;
	}(_react3.Component);

	exports.default = _class;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSm9obiBMaW5kcXVpc3RcXHByb2plY3RzXFxzd2FwaS1uZXh0XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOlsicGF0Y2giLCJuYW1lIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwidXBkYXRlIiwiZ2V0IiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRkE7Ozs7Ozs7Ozs7O2lDQVVZO0FBQ0osNEJBQU1BLEtBQU4sQ0FBWSxzREFBWixFQUFvRSxFQUFDQyxNQUFNLGdCQUFQLEVBQXBFO0FBQ0g7OztpQ0FFUTtBQUNMQyxvQkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDQSxtQkFBTztBQUFBO0FBQUE7QUFDRixxQkFBS0MsS0FBTCxDQUFXSCxJQURUO0FBRUg7QUFBQTtBQUFBLHNCQUFRLFNBQVMsS0FBS0ksTUFBdEI7QUFBQTtBQUFBO0FBRkcsYUFBUDtBQUlIOzs7Ozs7Ozs7Ozs7dUNBZndCLGdCQUFNQyxHQUFOLENBQVUsc0RBQVYsQzs7OztBQUFkQyxvQyxTQUFBQSxJO2lFQUVBQSxJIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0pvaG4gTGluZHF1aXN0L3Byb2plY3RzL3N3YXBpLW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyIvL2h0dHBzOi8vc3dhcGktanNvbi1zZXJ2ZXItZGRwc2dwcWl2Yy5ub3cuc2gvcGVvcGxlLzFcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9zd2FwaS1qc29uLXNlcnZlci1kZHBzZ3BxaXZjLm5vdy5zaC9wZW9wbGUvMScpXG5cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cbiAgICB1cGRhdGUoKXtcbiAgICAgICAgYXhpb3MucGF0Y2goJ2h0dHBzOi8vc3dhcGktanNvbi1zZXJ2ZXItZGRwc2dwcWl2Yy5ub3cuc2gvcGVvcGxlLzEnLCB7bmFtZTogJ0pvaG4gU2t5d2Fsa2VyJ30pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZygncmVuZGVyJylcbiAgICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnVwZGF0ZX0+VXBkYXRlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIH1cbn1cbiJdfQ==
	    if (true) {
	      module.hot.accept()

	      var Component = module.exports.default || module.exports
	      Component.__route = "/"

	      if (module.hot.status() !== 'idle') {
	        var components = next.router.components
	        for (var r in components) {
	          if (!components.hasOwnProperty(r)) continue

	          if (components[r].Component.__route === "/") {
	            next.router.update(r, Component)
	          }
	        }
	      }
	    }
	  

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DOi9Vc2Vycy9Kb2huIExpbmRxdWlzdC9wcm9qZWN0cy9zd2FwaS1uZXh0L3BhZ2VzL2luZGV4LmpzP2FkZDciXSwibmFtZXMiOlsicGF0Y2giLCJuYW1lIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwidXBkYXRlIiwiZ2V0IiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOzs7Ozs7QUFGQTs7Ozs7Ozs7Ozs7a0NBVVk7QUFDSiw2QkFBTUEsS0FBTixDQUFZLHNEQUFaLEVBQW9FLEVBQUNDLE1BQU0sZ0JBQVAsRUFBcEU7QUFDSDs7O2tDQUVRO0FBQ0xDLHFCQUFRQyxHQUFSLENBQVksUUFBWjtBQUNBLG9CQUFPO0FBQUE7QUFBQTtBQUNGLHNCQUFLQyxLQUFMLENBQVdILElBRFQ7QUFFSDtBQUFBO0FBQUEsdUJBQVEsU0FBUyxLQUFLSSxNQUF0QjtBQUFBO0FBQUE7QUFGRyxjQUFQO0FBSUg7Ozs7Ozs7Ozs7Ozt3Q0Fmd0IsZ0JBQU1DLEdBQU4sQ0FBVSxzREFBVixDOzs7O0FBQWRDLHFDLFNBQUFBLEk7a0VBRUFBLEkiLCJmaWxlIjoiMS4zNzZhMGZkZGU1Nzc1MDkxNDJjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9odHRwczovL3N3YXBpLWpzb24tc2VydmVyLWRkcHNncHFpdmMubm93LnNoL3Blb3BsZS8xXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vc3dhcGktanNvbi1zZXJ2ZXItZGRwc2dwcWl2Yy5ub3cuc2gvcGVvcGxlLzEnKVxuXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgdXBkYXRlKCl7XG4gICAgICAgIGF4aW9zLnBhdGNoKCdodHRwczovL3N3YXBpLWpzb24tc2VydmVyLWRkcHNncHFpdmMubm93LnNoL3Blb3BsZS8xJywge25hbWU6ICdKb2huIFNreXdhbGtlcid9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlbmRlcicpXG4gICAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAge3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy51cGRhdGV9PlVwZGF0ZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DOi9Vc2Vycy9Kb2huIExpbmRxdWlzdC9wcm9qZWN0cy9zd2FwaS1uZXh0L3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==