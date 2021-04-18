"use strict";
exports.__esModule = true;
var react_1 = require("react");
var clsx_1 = require("clsx");
var styles_1 = require("@material-ui/core/styles");
var Table_1 = require("@material-ui/core/Table");
var TableBody_1 = require("@material-ui/core/TableBody");
var TableCell_1 = require("@material-ui/core/TableCell");
var TableContainer_1 = require("@material-ui/core/TableContainer");
var TableHead_1 = require("@material-ui/core/TableHead");
var TablePagination_1 = require("@material-ui/core/TablePagination");
var TableRow_1 = require("@material-ui/core/TableRow");
var TableSortLabel_1 = require("@material-ui/core/TableSortLabel");
var Toolbar_1 = require("@material-ui/core/Toolbar");
var Typography_1 = require("@material-ui/core/Typography");
var Paper_1 = require("@material-ui/core/Paper");
var Checkbox_1 = require("@material-ui/core/Checkbox");
var IconButton_1 = require("@material-ui/core/IconButton");
var Tooltip_1 = require("@material-ui/core/Tooltip");
var Delete_1 = require("@material-ui/icons/Delete");
var FilterList_1 = require("@material-ui/icons/FilterList");
function createData(name, calories, fat, carbs, protein) {
    return { name: name, calories: calories, fat: fat, carbs: carbs, protein: protein };
}
var rows = [
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
    createData('Lollipop', 392, 0.2, 98, 0.0),
    createData('Marshmallow', 318, 0, 81, 2.0),
    createData('Nougat', 360, 19.0, 9, 37.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
];
function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}
function getComparator(order, orderBy) {
    return order === 'desc'
        ? function (a, b) { return descendingComparator(a, b, orderBy); }
        : function (a, b) { return -descendingComparator(a, b, orderBy); };
}
function stableSort(array, comparator) {
    var stabilizedThis = array.map(function (el, index) { return [el, index]; });
    stabilizedThis.sort(function (a, b) {
        var order = comparator(a[0], b[0]);
        if (order !== 0)
            return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(function (el) { return el[0]; });
}
var headCells = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
    { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
    { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
    { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
    { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
];
function EnhancedTableHead(props) {
    var classes = props.classes, onSelectAllClick = props.onSelectAllClick, order = props.order, orderBy = props.orderBy, numSelected = props.numSelected, rowCount = props.rowCount, onRequestSort = props.onRequestSort;
    var createSortHandler = function (property) { return function (event) {
        onRequestSort(event, property);
    }; };
    return (react_1["default"].createElement(TableHead_1["default"], null,
        react_1["default"].createElement(TableRow_1["default"], null,
            react_1["default"].createElement(TableCell_1["default"], { padding: "checkbox" },
                react_1["default"].createElement(Checkbox_1["default"], { indeterminate: numSelected > 0 && numSelected < rowCount, checked: rowCount > 0 && numSelected === rowCount, onChange: onSelectAllClick, inputProps: { 'aria-label': 'select all desserts' } })),
            headCells.map(function (headCell) { return (react_1["default"].createElement(TableCell_1["default"], { key: headCell.id, align: headCell.numeric ? 'right' : 'left', padding: headCell.disablePadding ? 'none' : 'default', sortDirection: orderBy === headCell.id ? order : false },
                react_1["default"].createElement(TableSortLabel_1["default"], { active: orderBy === headCell.id, direction: orderBy === headCell.id ? order : 'asc', onClick: createSortHandler(headCell.id) },
                    headCell.label,
                    orderBy === headCell.id ? (react_1["default"].createElement("span", { className: classes.visuallyHidden }, order === 'desc' ? 'sorted descending' : 'sorted ascending')) : null))); }))));
}
var useToolbarStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(1)
        },
        highlight: theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: styles_1.lighten(theme.palette.secondary.light, 0.85)
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark
            },
        title: {
            flex: '1 1 100%'
        }
    });
});
var EnhancedTableToolbar = function (props) {
    var _a;
    var classes = useToolbarStyles();
    var numSelected = props.numSelected;
    return (react_1["default"].createElement(Toolbar_1["default"], { className: clsx_1["default"](classes.root, (_a = {},
            _a[classes.highlight] = numSelected > 0,
            _a)) },
        numSelected > 0 ? (react_1["default"].createElement(Typography_1["default"], { className: classes.title, color: "inherit", variant: "subtitle1", component: "div" },
            numSelected,
            " selected")) : (react_1["default"].createElement(Typography_1["default"], { className: classes.title, variant: "h6", id: "tableTitle", component: "div" }, "Nutrition")),
        numSelected > 0 ? (react_1["default"].createElement(Tooltip_1["default"], { title: "Delete" },
            react_1["default"].createElement(IconButton_1["default"], { "aria-label": "delete" },
                react_1["default"].createElement(Delete_1["default"], null)))) : (react_1["default"].createElement(Tooltip_1["default"], { title: "Filter list" },
            react_1["default"].createElement(IconButton_1["default"], { "aria-label": "filter list" },
                react_1["default"].createElement(FilterList_1["default"], null))))));
};
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            width: '100%'
        },
        paper: {
            width: '100%',
            marginBottom: theme.spacing(2)
        },
        table: {
            minWidth: 750
        },
        visuallyHidden: {
            border: 0,
            clip: 'rect(0 0 0 0)',
            height: 1,
            margin: -1,
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            top: 20,
            width: 1
        }
    });
});
function TablePerson() {
    var classes = useStyles();
    var _a = react_1["default"].useState('asc'), order = _a[0], setOrder = _a[1];
    var _b = react_1["default"].useState('calories'), orderBy = _b[0], setOrderBy = _b[1];
    var _c = react_1["default"].useState([]), selected = _c[0], setSelected = _c[1];
    var _d = react_1["default"].useState(0), page = _d[0], setPage = _d[1];
    var _e = react_1["default"].useState(false), dense = _e[0], setDense = _e[1];
    var _f = react_1["default"].useState(5), rowsPerPage = _f[0], setRowsPerPage = _f[1];
    var handleRequestSort = function (event, property) {
        var isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    var handleSelectAllClick = function (event) {
        if (event.target.checked) {
            var newSelecteds = rows.map(function (n) { return n.name; });
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };
    var handleClick = function (event, name) {
        var selectedIndex = selected.indexOf(name);
        var newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        }
        else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        }
        else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        }
        else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }
        setSelected(newSelected);
    };
    var handleChangePage = function (event, newPage) {
        setPage(newPage);
    };
    var handleChangeRowsPerPage = function (event) {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    var handleChangeDense = function (event) {
        setDense(event.target.checked);
    };
    var isSelected = function (name) { return selected.indexOf(name) !== -1; };
    var emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    return (react_1["default"].createElement("div", { className: classes.root },
        react_1["default"].createElement(Paper_1["default"], { className: classes.paper },
            react_1["default"].createElement(EnhancedTableToolbar, { numSelected: selected.length }),
            react_1["default"].createElement(TableContainer_1["default"], null,
                react_1["default"].createElement(Table_1["default"], { className: classes.table, "aria-labelledby": "tableTitle", size: dense ? 'small' : 'medium', "aria-label": "enhanced table" },
                    react_1["default"].createElement(EnhancedTableHead, { classes: classes, numSelected: selected.length, order: order, orderBy: orderBy, onSelectAllClick: handleSelectAllClick, onRequestSort: handleRequestSort, rowCount: rows.length }),
                    react_1["default"].createElement(TableBody_1["default"], null,
                        stableSort(rows, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map(function (row, index) {
                            var isItemSelected = isSelected(row.name);
                            var labelId = "enhanced-table-checkbox-" + index;
                            return (react_1["default"].createElement(TableRow_1["default"], { hover: true, onClick: function (event) { return handleClick(event, row.name); }, role: "checkbox", "aria-checked": isItemSelected, tabIndex: -1, key: row.name, selected: isItemSelected },
                                react_1["default"].createElement(TableCell_1["default"], { padding: "checkbox" },
                                    react_1["default"].createElement(Checkbox_1["default"], { checked: isItemSelected, inputProps: { 'aria-labelledby': labelId } })),
                                react_1["default"].createElement(TableCell_1["default"], { component: "th", id: labelId, scope: "row", padding: "none" }, row.name),
                                react_1["default"].createElement(TableCell_1["default"], { align: "right" }, row.calories),
                                react_1["default"].createElement(TableCell_1["default"], { align: "right" }, row.fat),
                                react_1["default"].createElement(TableCell_1["default"], { align: "right" }, row.carbs),
                                react_1["default"].createElement(TableCell_1["default"], { align: "right" }, row.protein)));
                        }),
                        emptyRows > 0 && (react_1["default"].createElement(TableRow_1["default"], { style: { height: (dense ? 33 : 53) * emptyRows } },
                            react_1["default"].createElement(TableCell_1["default"], { colSpan: 6 })))))),
            react_1["default"].createElement(TablePagination_1["default"], { rowsPerPageOptions: [5, 10, 25], component: "div", count: rows.length, rowsPerPage: rowsPerPage, page: page, onChangePage: handleChangePage, onChangeRowsPerPage: handleChangeRowsPerPage }))));
}
exports["default"] = TablePerson;
