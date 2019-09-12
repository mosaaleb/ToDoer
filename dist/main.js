/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n\n\n\nconst Controller = (() => {\n  const setActiveProject = (project) => {\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setActiveProject(project);\n  };\n\n  const init = () => {\n    setActiveProject({\n      name: 'Default', color: 'black', tasks: []\n    });\n  };\n\n  const getActiveProject = () => _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getActiveProject();\n\n  const getProjects = () => _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAll();\n\n  const getActiveProjectTasks = () => getActiveProject().tasks;\n  // const projects = getProjects();\n  // const activeProject = projects.find((project) => project.name === getActiveProject().name);\n\n  return {\n    init, setActiveProject, getActiveProject, getActiveProjectTasks, getProjects\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controller);\n\n\n//# sourceURL=webpack:///./src/controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _views_projectsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/projectsView */ \"./src/views/projectsView.js\");\n/* harmony import */ var _views_tasksView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/tasksView */ \"./src/views/tasksView.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n\n\n\n\n\n\nconst projects = [];\n\nconst project = Object(_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Default', 'blue');\nprojects.push(project);\nproject.addTask(Object(_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('title', 'description', Date.now(), 1));\nproject.addTask(Object(_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('title2', 'description2', Date.now(), 2));\nproject.addTask(Object(_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('title3', 'description3', Date.now(), 3));\n\nconst project1 = Object(_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Week', 'blue');\nprojects.push(project1);\nproject1.addTask(Object(_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('week', 'description', Date.now(), 1));\nproject1.addTask(Object(_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('week', 'description2', Date.now(), 2));\n\n\n_controller__WEBPACK_IMPORTED_MODULE_4__[\"default\"].init();\n_views_projectsView__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init();\n_views_tasksView__WEBPACK_IMPORTED_MODULE_3__[\"default\"].init();\n// Model.init();\n// Model.add(projects);\n\n// const project3 = Project('Another one', 'red');\n// projects.push(project3);\n// Model.add(projects);\n\n// UserInterface.init(projects);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Model = (() => {\n  let activeProject = null;\n\n  const init = () => {\n    if (!localStorage.projects) {\n      localStorage.projects = JSON.stringify([]);\n    }\n  };\n\n  const add = (projects) => {\n    localStorage.projects = JSON.stringify(projects);\n  };\n\n  const getAll = () => JSON.parse(localStorage.projects);\n\n  const getActiveProject = () => activeProject;\n\n  const setActiveProject = (project) => {\n    activeProject = project;\n  };\n\n  return {\n    init, add, getAll, activeProject, getActiveProject, setActiveProject\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Model);\n\n\n//# sourceURL=webpack:///./src/model.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Project = (projectName, projectColor) => {\n  const name = projectName;\n  const color = projectColor;\n  const tasks = [];\n\n  const addTask = (task) => {\n    tasks.push(task);\n  };\n\n  const removeTask = (task) => {\n    tasks.splice(tasks.indexOf(task), 1);\n  };\n\n  return {\n    addTask, removeTask, name, color, tasks\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Task = (taskTitle, taskDescription, taskDueDate, taskPriority, taskDone = false) => {\n  const title = taskTitle;\n  const description = taskDescription;\n  const dueDate = taskDueDate;\n  const priority = taskPriority;\n  const done = taskDone;\n\n  return {\n    title, description, dueDate, priority, done\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);\n\n\n//# sourceURL=webpack:///./src/task.js?");

/***/ }),

/***/ "./src/views/projectsView.js":
/*!***********************************!*\
  !*** ./src/views/projectsView.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tasksView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksView */ \"./src/views/tasksView.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller */ \"./src/controller.js\");\n\n\n\nconst ProjectsView = (() => {\n  const projects = _controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getProjects();\n  const navBar = document.getElementById('projects');\n  const navList = document.createElement('ul');\n\n  const render = () => {\n    projects.forEach((project) => {\n      const projectItem = document.createElement('li');\n      projectItem.textContent = project.name;\n      projectItem.addEventListener('click', _tasksView__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render);\n      navList.appendChild(projectItem);\n    });\n  };\n\n  const init = () => {\n    navBar.appendChild(navList);\n    render();\n  };\n\n  return { init, render };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsView);\n\n\n//# sourceURL=webpack:///./src/views/projectsView.js?");

/***/ }),

/***/ "./src/views/tasksView.js":
/*!********************************!*\
  !*** ./src/views/tasksView.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller */ \"./src/controller.js\");\n\n\nconst TasksView = (() => {\n  const tasks = _controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getActiveProjectTasks();\n  const tasksCollection = document.getElementById('tasks');\n\n  const render = () => {\n    tasks.forEach((task) => {\n      const taskItem = document.createElement('div');\n      taskItem.innerHTML = `\n        <h1>${task.title}</h1>\n        <p>${task.description}</p>\n        <p>${task.dueDate}</p>\n        <p>${task.priority}</p>\n        <p>${task.taskDone}</p>\n      `;\n      tasksCollection.append(taskItem);\n    });\n  };\n\n  const init = () => {\n    render();\n  };\n\n  // const renderTasks = (project) => {\n  //   const list = document.createElement('ul');\n  //   project.tasks.forEach((task) => {\n  //     list.innerHTML += `\n  //       <li>${task.title}</li>\n  //     `;\n  //   });\n  //   return list;\n  // };\n\n  return { init, render };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TasksView);\n\n\n//# sourceURL=webpack:///./src/views/tasksView.js?");

/***/ })

/******/ });