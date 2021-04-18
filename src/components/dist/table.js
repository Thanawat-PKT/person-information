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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var material_table_1 = require("material-table");
var personSWD_1 = require("../redux/personSWD");
var hooks_1 = require("../hooks");
var personSWD_2 = require("../redux/personSWD");
function TablePerson() {
    var personList = hooks_1.useAppSelector(function (state) { return state.person.personList; });
    console.log(personList);
    var dispatch = hooks_1.useAppDispatch();
    var editable = personList.map(function (o) { return (__assign({}, o)); });
    react_1.useEffect(function () {
        dispatch(personSWD_1.getPerson());
    });
    var useState = react_1["default"].useState;
    var columns = useState([
        { title: 'Title', field: 'title' },
        { title: 'NAME', field: 'fullname' },
        { title: 'Birthday', field: 'startDate' },
        { title: 'GENDER', field: 'gender' },
        { title: 'MOBILE PHONE', field: 'phone' },
        { title: 'NATIONALITY', field: 'nationality' },
        { title: 'CihzenID', field: 'cihZenID' },
        { title: 'Passport No', field: 'passport' },
        { title: 'Expected Salary', field: 'salary' },
    ])[0];
    var _a = useState([
        { title: 'Mr', fullname: 'startDate', Birthday: '04/14/2564', gender: 'Male', phone: '+660892581590', nationality: 'THAI', CihzenID: '1-8355-0014-712-3', passport: '123456789', salary: 2000 },
    ]), data = _a[0], setData = _a[1];
    return (react_1["default"].createElement(material_table_1["default"], { title: "Person Preview", columns: columns, data: editable, editable: {
            onRowAdd: function (newData) {
                return new Promise(function (resolve) {
                    setTimeout(function () {
                        setData(__spreadArrays(data, [newData]));
                        resolve();
                    }, 1000);
                });
            },
            onRowUpdate: function (newData) {
                return new Promise(function (resolve) {
                    setTimeout(function () {
                        console.log(newData);
                        resolve();
                        dispatch(personSWD_1.updatePerson(__assign({}, newData)));
                    }, 1000);
                });
            },
            onRowDelete: function (oldData) {
                return new Promise(function (resolve) {
                    setTimeout(function () {
                        resolve();
                        console.log(oldData);
                        dispatch(personSWD_2.deletePerson(__assign({}, oldData)));
                    }, 1000);
                });
            }
        }, options: {
            selection: true
        }, actions: [
            {
                tooltip: 'Remove All Selected Users',
                icon: 'delete',
                onClick: function (evt, data) {
                    if (globalThis.confirm('You want to delete ' + data.length + ' rows')) {
                        data.map(function (item) {
                            dispatch(personSWD_2.deletePerson(__assign({}, item)));
                            return null;
                        });
                    }
                }
            }
        ] }));
}
exports["default"] = TablePerson;
