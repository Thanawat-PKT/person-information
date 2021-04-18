"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var FormControl_1 = require("@material-ui/core/FormControl");
var FormLabel_1 = require("@material-ui/core/FormLabel");
require("./css/stylesTable.css");
var react_datepicker_1 = require("react-datepicker");
require("react-datepicker/dist/react-datepicker.css");
require("react-phone-number-input/style.css");
var react_phone_number_input_1 = require("react-phone-number-input");
var core_1 = require("@material-ui/core");
var uuid_1 = require("uuid");
var hooks_1 = require("../hooks");
var personSWD_1 = require("../redux/personSWD");
function FormPropsTextFields() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    //NOTE State
    var _p = react_1.useState(), startDate = _p[0], setStartDate = _p[1];
    var _q = react_1.useState(''), gender = _q[0], setGender = _q[1];
    var _r = react_1.useState(''), phone = _r[0], setPhone = _r[1];
    //END State
    react_1.useEffect(function () {
        var _a, _b;
        (_b = (_a = phoneRef.current) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a);
    }, [phone]);
    var phoneRef = react_1.useRef();
    var handleDateChange = function (date) {
        setStartDate(date);
    };
    var _s = react_hook_form_1.useForm(), register = _s.register, handleSubmit = _s.handleSubmit, errors = _s.formState.errors;
    var Select = react_1["default"].forwardRef(function (_a, ref) {
        var onChange = _a.onChange, name = _a.name, label = _a.label;
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("label", null, label),
            react_1["default"].createElement("select", { name: name, ref: ref, onChange: onChange },
                react_1["default"].createElement("option", { value: "Mr" }, "Mr"),
                react_1["default"].createElement("option", { value: "Mrs" }, "Mrs"),
                react_1["default"].createElement("option", { value: "Miss" }, "Miss"),
                react_1["default"].createElement("option", { value: "Ms" }, "Ms"))));
    });
    var SelectNation = react_1["default"].forwardRef(function (_a, ref) {
        var onChange = _a.onChange, name = _a.name, label = _a.label;
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("label", null, label),
            react_1["default"].createElement("select", { name: name, ref: ref, onChange: onChange },
                react_1["default"].createElement("option", { value: "" }, "--Please Select--"),
                react_1["default"].createElement("option", { value: "THAI" }, "THAI"),
                react_1["default"].createElement("option", { value: "LAOS" }, "LAOS"),
                react_1["default"].createElement("option", { value: "AMERICA" }, "AMERICA"))));
    });
    var handleChange = function (event) {
        setGender(event.target.value);
    };
    var RadioGender = react_1["default"].forwardRef(function (_a) {
        var onChange = _a.onChange, value = _a.value, label = _a.label;
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("label", null, label),
            react_1["default"].createElement(core_1.RadioGroup, { "aria-label": "gender", name: "gender", value: value, onChange: onChange, style: { display: 'block' } },
                react_1["default"].createElement(core_1.FormControlLabel, { value: "Male", control: react_1["default"].createElement(core_1.Radio, null), label: "Male" }),
                react_1["default"].createElement(core_1.FormControlLabel, { value: "Female", control: react_1["default"].createElement(core_1.Radio, null), label: "Female" }),
                react_1["default"].createElement(core_1.FormControlLabel, { value: "unisex", control: react_1["default"].createElement(core_1.Radio, null), label: "Unisex" }))));
    });
    var NumberPhone = react_1["default"].forwardRef(function (_a) {
        var onChange = _a.onChange, phone = _a.phone, refs = _a.refs;
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(react_phone_number_input_1["default"], { defaultCountry: "TH", 
                //@ts-ignore
                ref: refs, value: phone, onChange: onChange, maxLength: 16 })));
    });
    //FIXME
    var dispatch = hooks_1.useAppDispatch();
    //END FIXME
    var onSubmit = function (data) {
        var dateObj = startDate;
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        var newdate = month + "/" + day + "/" + year;
        dispatch(personSWD_1.addNewPerson(__assign(__assign({}, data), { id: uuid_1.v4(), fullname: data.firstName + ' ' + data.lastName, cihZenID: data.cihZenID1 + '-' + data.cihZenID2 + '-' + data.cihZenID3 + '-' + data.cihZenID4 + '-' + data.cihZenID5, phone: phone, gender: gender, startDate: newdate })));
        clearInputs();
        alert(JSON.stringify(data));
    };
    var clearInputs = function () {
        // setTitle('');
        // setAuthor('');
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("form", { onSubmit: handleSubmit(onSubmit) },
            react_1["default"].createElement("div", { className: 'mg-1' },
                react_1["default"].createElement(FormControl_1["default"], null,
                    react_1["default"].createElement("div", { style: { display: 'flex', alignItems: 'center' } },
                        react_1["default"].createElement("div", { style: { display: 'flex' } },
                            react_1["default"].createElement(FormLabel_1["default"], { component: "legend" }, "Title:"),
                            react_1["default"].createElement(FormLabel_1["default"], { error: true, style: { padding: '0rem 0.25rem' } }, "*")),
                        react_1["default"].createElement("div", { style: { padding: '0rem 0.25rem' } },
                            react_1["default"].createElement(Select, __assign({ label: "" }, register("title"))),
                            ((_a = errors === null || errors === void 0 ? void 0 : errors.title) === null || _a === void 0 ? void 0 : _a.type) === "title" && react_1["default"].createElement("p", null, "This field is required")))),
                react_1["default"].createElement(FormControl_1["default"], null,
                    react_1["default"].createElement("div", { style: { display: 'flex', alignItems: 'center' } },
                        react_1["default"].createElement("div", { style: { display: 'flex' } },
                            react_1["default"].createElement(FormLabel_1["default"], { component: "legend" }, "Firstname:"),
                            react_1["default"].createElement(FormLabel_1["default"], { error: true, style: { padding: '0rem 0.25rem' } }, "*")),
                        react_1["default"].createElement("div", { style: { padding: '0rem 0.25rem' } },
                            react_1["default"].createElement("input", __assign({}, register("firstName", {
                                required: true,
                                pattern: /^[A-Za-z]+$/i
                            }))),
                            ((_b = errors === null || errors === void 0 ? void 0 : errors.firstName) === null || _b === void 0 ? void 0 : _b.type) === "required" && react_1["default"].createElement("p", null, "This field is required"),
                            ((_c = errors === null || errors === void 0 ? void 0 : errors.firstName) === null || _c === void 0 ? void 0 : _c.type) === "maxLength" && (react_1["default"].createElement("p", null, "First name cannot exceed 20 characters")),
                            ((_d = errors === null || errors === void 0 ? void 0 : errors.firstName) === null || _d === void 0 ? void 0 : _d.type) === "pattern" && (react_1["default"].createElement("p", null, "Alphabetical characters only"))))),
                react_1["default"].createElement(FormControl_1["default"], null,
                    react_1["default"].createElement("div", { style: { display: 'flex', alignItems: 'center' } },
                        react_1["default"].createElement("div", { style: { display: 'flex' } },
                            react_1["default"].createElement(FormLabel_1["default"], { component: "legend" }, "Lastname:"),
                            react_1["default"].createElement(FormLabel_1["default"], { error: true, style: { padding: '0rem 0.25rem' } }, "*")),
                        react_1["default"].createElement("div", { style: { padding: '0rem 0.25rem' } },
                            react_1["default"].createElement("input", __assign({}, register("lastName", {
                                required: true,
                                pattern: /^[A-Za-z]+$/i
                            }))),
                            ((_e = errors === null || errors === void 0 ? void 0 : errors.lastName) === null || _e === void 0 ? void 0 : _e.type) === "required" && react_1["default"].createElement("p", null, "This field is required"),
                            ((_f = errors === null || errors === void 0 ? void 0 : errors.lastName) === null || _f === void 0 ? void 0 : _f.type) === "maxLength" && (react_1["default"].createElement("p", null, "Last name cannot exceed 20 characters")),
                            ((_g = errors === null || errors === void 0 ? void 0 : errors.lastName) === null || _g === void 0 ? void 0 : _g.type) === "pattern" && (react_1["default"].createElement("p", null, "Alphabetical characters only")))))),
            react_1["default"].createElement("div", { className: 'mg-1' },
                react_1["default"].createElement(FormControl_1["default"], null,
                    react_1["default"].createElement("div", { style: { display: 'flex', alignItems: 'center' } },
                        react_1["default"].createElement("div", { style: { display: 'flex' } },
                            react_1["default"].createElement(FormLabel_1["default"], { component: "legend" }, "Birthday:"),
                            react_1["default"].createElement(FormLabel_1["default"], { error: true, style: { padding: '0rem 0.25rem' } }, "*")),
                        react_1["default"].createElement("div", { style: { padding: '0rem 0.25rem' } },
                            react_1["default"].createElement(react_datepicker_1["default"], { selected: startDate, placeholderText: "mm/dd/yyyy", onChange: handleDateChange })))),
                react_1["default"].createElement(FormControl_1["default"], null,
                    react_1["default"].createElement("div", { style: { display: 'flex', alignItems: 'center' } },
                        react_1["default"].createElement("div", { style: { display: 'flex' } },
                            react_1["default"].createElement(FormLabel_1["default"], { component: "legend" }, "Nationality:")),
                        react_1["default"].createElement("div", { style: { padding: '0rem 0.25rem' } },
                            react_1["default"].createElement(SelectNation, __assign({ label: "" }, register("nationality"))))))),
            react_1["default"].createElement("div", { className: 'mg-1' },
                react_1["default"].createElement(FormControl_1["default"], null,
                    react_1["default"].createElement("div", { style: { display: 'flex', alignItems: 'center' } },
                        react_1["default"].createElement("div", { style: { display: 'flex' } },
                            react_1["default"].createElement(FormLabel_1["default"], { component: "legend" }, "CihzenID:"),
                            react_1["default"].createElement(FormLabel_1["default"], { error: true, style: { padding: '0rem 0.25rem' } }, "*")),
                        react_1["default"].createElement("div", { style: { padding: '0rem 0.25rem' } },
                            react_1["default"].createElement("input", __assign({ maxLength: 1, style: { width: '2rem' } }, register("cihZenID1", {
                                required: true,
                                pattern: /^[0-9]+$/i
                            }))),
                            ((_h = errors === null || errors === void 0 ? void 0 : errors.cihZenID1) === null || _h === void 0 ? void 0 : _h.type) === "required" && react_1["default"].createElement("p", null, "This field is required")),
                        react_1["default"].createElement("div", { style: { padding: '0rem 0.25rem' } },
                            react_1["default"].createElement("input", __assign({ maxLength: 4, style: { width: '5rem' } }, register("cihZenID2", {
                                required: true,
                                pattern: /^[0-9]+$/i
                            }))),
                            ((_j = errors === null || errors === void 0 ? void 0 : errors.cihZenID2) === null || _j === void 0 ? void 0 : _j.type) === "required" && react_1["default"].createElement("p", null, "This field is required")),
                        react_1["default"].createElement("div", { style: { padding: '0rem 0.25rem' } },
                            react_1["default"].createElement("input", __assign({ maxLength: 3, style: { width: '5rem' } }, register("cihZenID3", {
                                required: true,
                                pattern: /^[0-9]+$/i
                            }))),
                            ((_k = errors === null || errors === void 0 ? void 0 : errors.cihZenID3) === null || _k === void 0 ? void 0 : _k.type) === "required" && react_1["default"].createElement("p", null, "This field is required")),
                        react_1["default"].createElement("div", { style: { padding: '0rem 0.25rem' } },
                            react_1["default"].createElement("input", __assign({ maxLength: 4, style: { width: '5rem' } }, register("cihZenID4", {
                                required: true,
                                pattern: /^[0-9]+$/i
                            }))),
                            ((_l = errors === null || errors === void 0 ? void 0 : errors.cihZenID4) === null || _l === void 0 ? void 0 : _l.type) === "required" && react_1["default"].createElement("p", null, "This field is required")),
                        react_1["default"].createElement("div", { style: { padding: '0rem 0.25rem' } },
                            react_1["default"].createElement("input", __assign({ maxLength: 1, style: { width: '2rem' } }, register("cihZenID5", {
                                required: true,
                                pattern: /^[0-9]+$/i
                            }))),
                            ((_m = errors === null || errors === void 0 ? void 0 : errors.cihZenID5) === null || _m === void 0 ? void 0 : _m.type) === "required" && react_1["default"].createElement("p", null, "This field is required"))))),
            react_1["default"].createElement("div", { className: 'mg-1' },
                react_1["default"].createElement(FormControl_1["default"], null,
                    react_1["default"].createElement("div", { style: { display: 'flex', alignItems: 'center' } },
                        react_1["default"].createElement("div", { style: { display: 'flex' } },
                            react_1["default"].createElement(FormLabel_1["default"], { component: "legend" }, "Gender:")),
                        react_1["default"].createElement("div", { style: { padding: '0rem 0.25rem' } },
                            react_1["default"].createElement(RadioGender, { value: gender, 
                                //@ts-ignore
                                onChange: handleChange }))))),
            react_1["default"].createElement("div", { className: 'mg-1' },
                react_1["default"].createElement(FormControl_1["default"], null,
                    react_1["default"].createElement("div", { style: { display: 'flex', alignItems: 'center' } },
                        react_1["default"].createElement("div", { style: { display: 'flex' } },
                            react_1["default"].createElement(FormLabel_1["default"], { component: "legend" }, "Mobile Phone:"),
                            react_1["default"].createElement(FormLabel_1["default"], { error: true, style: { padding: '0rem 0.25rem' } }, "*")),
                        react_1["default"].createElement("div", { style: { padding: '0rem 0.25rem' } },
                            react_1["default"].createElement(NumberPhone, { phone: phone, label: '', 
                                //@ts-ignore 
                                onChange: function (numphone) {
                                    setPhone(numphone);
                                }, 
                                //@ts-ignore
                                refs: phoneRef }))))),
            react_1["default"].createElement("div", { className: 'mg-1' },
                react_1["default"].createElement(FormControl_1["default"], null,
                    react_1["default"].createElement("div", { style: { display: 'flex', alignItems: 'center' } },
                        react_1["default"].createElement(FormLabel_1["default"], { component: "legend" }, "Passport No: "),
                        react_1["default"].createElement("div", { style: { padding: '0rem 0.25rem' } },
                            react_1["default"].createElement("input", __assign({}, register("passport", {
                                required: true,
                                pattern: /^[0-9]+$/i
                            }))))))),
            react_1["default"].createElement("div", { className: 'mg-1' },
                react_1["default"].createElement(FormControl_1["default"], { style: { display: 'flex', flexWrap: 'initial', flexDirection: 'initial', alignItems: 'center' } },
                    react_1["default"].createElement("div", { style: { display: 'flex', alignItems: 'center' } },
                        react_1["default"].createElement("div", { style: { display: 'flex' } },
                            react_1["default"].createElement(FormLabel_1["default"], { component: "legend" }, "Expected Salary:"),
                            react_1["default"].createElement(FormLabel_1["default"], { error: true, style: { padding: '0rem 0.25rem' } }, "*")),
                        react_1["default"].createElement("div", { style: { padding: '0rem 0.25rem' } },
                            react_1["default"].createElement("input", __assign({}, register("salary", {
                                required: true,
                                pattern: /^[0-9]+$/i
                            }))),
                            ((_o = errors === null || errors === void 0 ? void 0 : errors.salary) === null || _o === void 0 ? void 0 : _o.type) === "required" && react_1["default"].createElement("p", null, "This field is required"))),
                    react_1["default"].createElement("label", { className: 'mg-1' }, "THB")),
                react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'flex-end', marginTop: '-3rem' } },
                    react_1["default"].createElement(core_1.Button, { variant: "contained", color: "secondary", type: 'submit' }, "SUBMIT"))))));
}
exports["default"] = FormPropsTextFields;
