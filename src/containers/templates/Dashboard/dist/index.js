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
var clsx_1 = require("clsx");
var styles_1 = require("@material-ui/core/styles");
var Drawer_1 = require("@material-ui/core/Drawer");
var AppBar_1 = require("@material-ui/core/AppBar");
var Toolbar_1 = require("@material-ui/core/Toolbar");
var List_1 = require("@material-ui/core/List");
var CssBaseline_1 = require("@material-ui/core/CssBaseline");
var Typography_1 = require("@material-ui/core/Typography");
var Divider_1 = require("@material-ui/core/Divider");
var IconButton_1 = require("@material-ui/core/IconButton");
var Menu_1 = require("@material-ui/icons/Menu");
var ChevronLeft_1 = require("@material-ui/icons/ChevronLeft");
var ChevronRight_1 = require("@material-ui/icons/ChevronRight");
var ListItem_1 = require("@material-ui/core/ListItem");
var ListItemIcon_1 = require("@material-ui/core/ListItemIcon");
var ListItemText_1 = require("@material-ui/core/ListItemText");
var Dashboard_1 = require("@material-ui/icons/Dashboard");
var table_1 = require("../../../components/table");
var form_1 = require("../../../components/form");
var router_1 = require("../../../config/router");
var drawerWidth = 240;
var useStyles = styles_1.makeStyles(function (theme) {
    var _a;
    return styles_1.createStyles({
        root: {
            display: 'flex'
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            })
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: "calc(100% - " + drawerWidth + "px)",
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
        },
        menuButton: {
            marginRight: 36
        },
        hide: {
            display: 'none'
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap'
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
        },
        drawerClose: (_a = {
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen
                }),
                overflowX: 'hidden',
                width: theme.spacing(7) + 1
            },
            _a[theme.breakpoints.up('sm')] = {
                width: theme.spacing(9) + 1
            },
            _a),
        toolbar: __assign({ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: theme.spacing(0, 1) }, theme.mixins.toolbar),
        content: {
            flexGrow: 1,
            padding: theme.spacing(3)
        }
    });
});
function DashboardTemplate() {
    var _a, _b, _c, _d;
    var classes = useStyles();
    var theme = styles_1.useTheme();
    var _e = react_1["default"].useState(false), open = _e[0], setOpen = _e[1];
    var handleDrawerOpen = function () {
        setOpen(true);
    };
    var handleDrawerClose = function () {
        setOpen(false);
    };
    return (react_1["default"].createElement("div", { className: classes.root },
        react_1["default"].createElement(CssBaseline_1["default"], null),
        react_1["default"].createElement(AppBar_1["default"], { position: "fixed", className: clsx_1["default"](classes.appBar, (_a = {},
                _a[classes.appBarShift] = open,
                _a)) },
            react_1["default"].createElement(Toolbar_1["default"], null,
                react_1["default"].createElement(IconButton_1["default"], { color: "inherit", "aria-label": "open drawer", onClick: handleDrawerOpen, edge: "start", className: clsx_1["default"](classes.menuButton, (_b = {},
                        _b[classes.hide] = open,
                        _b)) },
                    react_1["default"].createElement(Menu_1["default"], null)),
                react_1["default"].createElement(Typography_1["default"], { variant: "h6", noWrap: true }, "Person Information"))),
        react_1["default"].createElement(Drawer_1["default"], { variant: "permanent", className: clsx_1["default"](classes.drawer, (_c = {},
                _c[classes.drawerOpen] = open,
                _c[classes.drawerClose] = !open,
                _c)), classes: {
                paper: clsx_1["default"]((_d = {},
                    _d[classes.drawerOpen] = open,
                    _d[classes.drawerClose] = !open,
                    _d))
            } },
            react_1["default"].createElement("div", { className: classes.toolbar },
                react_1["default"].createElement(IconButton_1["default"], { onClick: handleDrawerClose }, theme.direction === 'rtl' ? react_1["default"].createElement(ChevronRight_1["default"], null) : react_1["default"].createElement(ChevronLeft_1["default"], null))),
            react_1["default"].createElement(Divider_1["default"], null),
            react_1["default"].createElement(List_1["default"], null, router_1.router.map(function (text, index) { return (react_1["default"].createElement(ListItem_1["default"], { button: true, key: text.label },
                react_1["default"].createElement(ListItemIcon_1["default"], null,
                    react_1["default"].createElement(Dashboard_1["default"], null)),
                react_1["default"].createElement(ListItemText_1["default"], { primary: text.label }))); })),
            react_1["default"].createElement(Divider_1["default"], null)),
        react_1["default"].createElement("main", { className: classes.content },
            react_1["default"].createElement("div", { className: classes.toolbar }),
            react_1["default"].createElement(form_1["default"], null),
            react_1["default"].createElement(Divider_1["default"], { style: { margin: '2rem' } }),
            react_1["default"].createElement(table_1["default"], null))));
}
exports["default"] = DashboardTemplate;
