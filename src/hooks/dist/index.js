"use strict";
exports.__esModule = true;
exports.useAppSelector = exports.useAppDispatch = void 0;
var react_redux_1 = require("react-redux");
//useDispatch hook with types.
exports.useAppDispatch = function () { return react_redux_1.useDispatch(); };
//useSelector hook with types
exports.useAppSelector = react_redux_1.useSelector;
