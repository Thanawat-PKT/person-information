"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TextField_1 = require("@material-ui/core/TextField");
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch'
            }
        }
    });
});
function FormPropsTextFields() {
    var classes = useStyles();
    return (react_1["default"].createElement("form", { className: classes.root, noValidate: true, autoComplete: "off" },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(TextField_1["default"], { required: true, id: "standard-required", label: "Required", defaultValue: "Hello World" }),
            react_1["default"].createElement(TextField_1["default"], { disabled: true, id: "standard-disabled", label: "Disabled", defaultValue: "Hello World" }),
            react_1["default"].createElement(TextField_1["default"], { id: "standard-password-input", label: "Password", type: "password", autoComplete: "current-password" }),
            react_1["default"].createElement(TextField_1["default"], { id: "standard-read-only-input", label: "Read Only", defaultValue: "Hello World", InputProps: {
                    readOnly: true
                } }),
            react_1["default"].createElement(TextField_1["default"], { id: "standard-number", label: "Number", type: "number", InputLabelProps: {
                    shrink: true
                } }),
            react_1["default"].createElement(TextField_1["default"], { id: "standard-search", label: "Search field", type: "search" }),
            react_1["default"].createElement(TextField_1["default"], { id: "standard-helperText", label: "Helper text", defaultValue: "Default Value", helperText: "Some important text" })),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(TextField_1["default"], { required: true, id: "filled-required", label: "Required", defaultValue: "Hello World", variant: "filled" }),
            react_1["default"].createElement(TextField_1["default"], { disabled: true, id: "filled-disabled", label: "Disabled", defaultValue: "Hello World", variant: "filled" }),
            react_1["default"].createElement(TextField_1["default"], { id: "filled-password-input", label: "Password", type: "password", autoComplete: "current-password", variant: "filled" }),
            react_1["default"].createElement(TextField_1["default"], { id: "filled-read-only-input", label: "Read Only", defaultValue: "Hello World", InputProps: {
                    readOnly: true
                }, variant: "filled" }),
            react_1["default"].createElement(TextField_1["default"], { id: "filled-number", label: "Number", type: "number", InputLabelProps: {
                    shrink: true
                }, variant: "filled" }),
            react_1["default"].createElement(TextField_1["default"], { id: "filled-search", label: "Search field", type: "search", variant: "filled" }),
            react_1["default"].createElement(TextField_1["default"], { id: "filled-helperText", label: "Helper text", defaultValue: "Default Value", helperText: "Some important text", variant: "filled" })),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(TextField_1["default"], { required: true, id: "outlined-required", label: "Required", defaultValue: "Hello World", variant: "outlined" }),
            react_1["default"].createElement(TextField_1["default"], { disabled: true, id: "outlined-disabled", label: "Disabled", defaultValue: "Hello World", variant: "outlined" }),
            react_1["default"].createElement(TextField_1["default"], { id: "outlined-password-input", label: "Password", type: "password", autoComplete: "current-password", variant: "outlined" }),
            react_1["default"].createElement(TextField_1["default"], { id: "outlined-read-only-input", label: "Read Only", defaultValue: "Hello World", InputProps: {
                    readOnly: true
                }, variant: "outlined" }),
            react_1["default"].createElement(TextField_1["default"], { id: "outlined-number", label: "Number", type: "number", InputLabelProps: {
                    shrink: true
                }, variant: "outlined" }),
            react_1["default"].createElement(TextField_1["default"], { id: "outlined-search", label: "Search field", type: "search", variant: "outlined" }),
            react_1["default"].createElement(TextField_1["default"], { id: "outlined-helperText", label: "Helper text", defaultValue: "Default Value", helperText: "Some important text", variant: "outlined" }))));
}
exports["default"] = FormPropsTextFields;
