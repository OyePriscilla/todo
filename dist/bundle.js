/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/addTodo.js":
/*!************************!*\
  !*** ./src/addTodo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displaytodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displaytodo.js */ \"./src/displaytodo.js\");\n\nconst addText = document.querySelector('#add-text');\nlet todos = JSON.parse(localStorage.getItem('todo-list'));\n\nconst addTodos = () => {\n  addText.addEventListener('keyup', e => {\n    const userTask = e.target.value.trim();\n\n    if (e.key === 'Enter' && userTask) {\n      if (!todos) {\n        todos = [];\n      }\n\n      addText.value = '';\n      const taskInfo = {\n        description: userTask,\n        isCompleted: false,\n        idx: todos.length\n      };\n      todos.push(taskInfo);\n      localStorage.setItem('todo-list', JSON.stringify(todos));\n      (0,_displaytodo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      window.location.reload();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTodos);\n\n//# sourceURL=webpack://todo-list/./src/addTodo.js?");

/***/ }),

/***/ "./src/clearTodo.js":
/*!**************************!*\
  !*** ./src/clearTodo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearTasks\": () => (/* binding */ clearTasks),\n/* harmony export */   \"update\": () => (/* binding */ update)\n/* harmony export */ });\nconst todos = JSON.parse(localStorage.getItem('todo-list'));\nconst clearTask = document.querySelector('.clear-task');\nconst update = selectedTask => {\n  const taskName = selectedTask.parentElement.lastElementChild;\n  const selectedElementOne = selectedTask.parentElement.parentElement.lastElementChild.lastElementChild.lastElementChild;\n  const selectedElementTwo = selectedTask.parentElement.parentElement.lastElementChild.firstElementChild;\n  const selectedElementThree = selectedTask.parentElement.parentElement;\n\n  if (selectedTask.checked) {\n    taskName.classList.add('checked');\n    selectedElementOne.classList.add('trash');\n    selectedElementTwo.classList.add('edit');\n    selectedElementThree.classList.add('checkedColor');\n    todos[selectedTask.id].isCompleted = 'True';\n  } else {\n    taskName.classList.remove('checked');\n    selectedElementOne.classList.remove('trash');\n    selectedElementTwo.classList.remove('edit');\n    selectedElementThree.classList.remove('checkedColor');\n    todos[selectedTask.id].isCompleted = 'False';\n  }\n\n  localStorage.setItem('todo-list', JSON.stringify(todos));\n};\n\nconst removeCompletedFromUI = () => {\n  const allCompleted = document.querySelectorAll('.checkedColor');\n  allCompleted.forEach(completed => {\n    completed.remove();\n  });\n};\n\nconst removeCompletedFromStorage = () => {\n  const todosLeft = todos.filter(todo => todo.isCompleted === false);\n  todosLeft.forEach((td, index) => {\n    td.idx = index;\n  });\n  localStorage.setItem('todo-list', JSON.stringify(todosLeft));\n};\n\nconst clearTasks = () => {\n  clearTask.addEventListener('click', () => {\n    todos.forEach(todo => {\n      if (todo.isCompleted) {\n        removeCompletedFromUI();\n        removeCompletedFromStorage();\n        window.location.reload();\n      }\n    });\n  });\n};\n\n//# sourceURL=webpack://todo-list/./src/clearTodo.js?");

/***/ }),

/***/ "./src/deleteTodo.js":
/*!***************************!*\
  !*** ./src/deleteTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displaytodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displaytodo.js */ \"./src/displaytodo.js\");\n\nconst todos = JSON.parse(localStorage.getItem('todo-list'));\n\nconst deleteTask = deleteId => {\n  todos.splice(deleteId, 1);\n  (0,_displaytodo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  localStorage.setItem('todo-list', JSON.stringify(todos));\n  window.location.reload();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteTask);\n\n//# sourceURL=webpack://todo-list/./src/deleteTodo.js?");

/***/ }),

/***/ "./src/displaytodo.js":
/*!****************************!*\
  !*** ./src/displaytodo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst todos = JSON.parse(localStorage.getItem('todo-list'));\nconst todoTask = document.querySelector('.todo-task');\n\nconst displayTodo = () => {\n  let li = '';\n\n  if (todos) {\n    todos.forEach((todo, id) => {\n      li += `\n        <div class=todo-dynamic>\n        <label for id=\"${id}\" class=\"todo-input\">\n            <input onclick='update(this)' class ='check-task' type=\"checkbox\" id=\"${id}\">\n            <p class=\"todo-text\">${todo.description}</p>\n        </label>\n        <div class= \"settings\">\n           <i class=\"fa fa-ellipsis-v\"></i>\n          <div class=\"delete\">\n          <i onclick=\"deleteTask(${id})\" class=\"fa fa-trash\"></i>\n          </div>\n        </div>\n    </div>\n        `;\n    });\n  }\n\n  todoTask.innerHTML = li;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTodo);\n\n//# sourceURL=webpack://todo-list/./src/displaytodo.js?");

/***/ }),

/***/ "./src/edittask.js":
/*!*************************!*\
  !*** ./src/edittask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst saveEditTextToStorage = (task, newTask) => {\n  const tasks = JSON.parse(localStorage.getItem('todo-list'));\n  tasks.forEach(t => {\n    if (task === t.description) {\n      t.description = newTask;\n    }\n\n    localStorage.setItem('todo-list', JSON.stringify(tasks));\n  });\n};\n\nconst editList = () => {\n  const allThreeDotBtn = document.querySelectorAll('.fa-ellipsis-v');\n  allThreeDotBtn.forEach(threeDotBtn => {\n    threeDotBtn.addEventListener('click', e => {\n      e.preventDefault();\n      const taskEdit = threeDotBtn.parentElement.parentElement.firstElementChild.lastElementChild;\n      const oldTask = taskEdit.textContent;\n      taskEdit.toggleAttribute('contentEditable');\n      taskEdit.focus();\n      threeDotBtn.parentElement.parentElement.classList.toggle('checkedColor');\n      taskEdit.addEventListener('keypress', e => {\n        if (e.key === 'Enter') {\n          taskEdit.removeAttribute('contentEditable');\n          threeDotBtn.parentElement.parentElement.classList.remove('checkedColor');\n          const newTask = taskEdit.textContent;\n          saveEditTextToStorage(oldTask, newTask);\n        }\n      });\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editList);\n\n//# sourceURL=webpack://todo-list/./src/edittask.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _refresh_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refresh.js */ \"./src/refresh.js\");\n/* harmony import */ var _edittask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edittask.js */ \"./src/edittask.js\");\n/* harmony import */ var _displaytodo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displaytodo.js */ \"./src/displaytodo.js\");\n/* harmony import */ var _deleteTodo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deleteTodo.js */ \"./src/deleteTodo.js\");\n/* harmony import */ var _addTodo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addTodo.js */ \"./src/addTodo.js\");\n/* harmony import */ var _clearTodo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clearTodo.js */ \"./src/clearTodo.js\");\n\n\n\n\n\n\n\n(0,_refresh_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_addTodo_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_displaytodo_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\nwindow.deleteTask = _deleteTodo_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n(0,_edittask_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nwindow.update = _clearTodo_js__WEBPACK_IMPORTED_MODULE_6__.update;\n(0,_clearTodo_js__WEBPACK_IMPORTED_MODULE_6__.clearTasks)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/refresh.js":
/*!************************!*\
  !*** ./src/refresh.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst refreshPage = () => {\n  document.querySelector('.fa-refresh').addEventListener('click', () => {\n    window.location.reload();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refreshPage);\n\n//# sourceURL=webpack://todo-list/./src/refresh.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  box-sizing: border-box;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n.todo-container {\\r\\n  width: 50%;\\r\\n  margin: 100px auto;\\r\\n  background-color: #7959ec;\\r\\n  padding: 40px 60px 40px 40px;\\r\\n}\\r\\n\\r\\n.headline {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  padding: 0 20px;\\r\\n  background-color: rgb(105, 19, 204);\\r\\n  width: 95%;\\r\\n  height: 50px;\\r\\n  border-bottom: 2px solid #f0ebeb;\\r\\n  color: #fff;\\r\\n  font-weight: 900;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.todo-add input {\\r\\n  width: 95%;\\r\\n  height: 50px;\\r\\n  padding: 0 20px;\\r\\n  border: none;\\r\\n  border-bottom: 2px solid #f0ebeb;\\r\\n  font-size: 22px;\\r\\n  color: #330ce0;\\r\\n}\\r\\n\\r\\n.todo-dynamic {\\r\\n  justify-content: space-between;\\r\\n  padding: 0 20px;\\r\\n  background-color: #fff;\\r\\n  width: 95%;\\r\\n  height: 50px;\\r\\n  border-bottom: 2px solid #f0ebeb;\\r\\n}\\r\\n\\r\\n.settings {\\r\\n  float: right;\\r\\n  position: relative;\\r\\n  top: -30px;\\r\\n  z-index: 5;\\r\\n}\\r\\n\\r\\n.todo-input {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.todo-text {\\r\\n  margin-left: 10px;\\r\\n  height: 43px;\\r\\n  width: 90%;\\r\\n  border: none;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  font-size: 22px;\\r\\n  outline: none;\\r\\n  color: #330ce0;\\r\\n}\\r\\n\\r\\n.fa {\\r\\n  color: #330ce0;\\r\\n  font-size: 32px;\\r\\n}\\r\\n\\r\\n.fa-refresh {\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.clear-task {\\r\\n  display: block;\\r\\n  margin: 2px auto;\\r\\n  border: none;\\r\\n  width: 100%;\\r\\n  height: 50px;\\r\\n  border-bottom: 4px solid #e7e1e1;\\r\\n  font-size: 20px;\\r\\n  color: #330ce0;\\r\\n  font-weight: 900;\\r\\n  text-transform: uppercase;\\r\\n}\\r\\n\\r\\n::placeholder {\\r\\n  font-style: italic;\\r\\n  font-size: 16px;\\r\\n  color: #330ce0;\\r\\n}\\r\\n\\r\\ninput:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.pp {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.checked {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.fa-trash,\\r\\n.edit {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.trash {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.checkedColor {\\r\\n  background-color: rgb(245, 229, 179);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;