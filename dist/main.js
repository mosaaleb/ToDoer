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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n\n\n\nconst Controller = (() => {\n  const setActiveProject = (project) => {\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setActiveProject(project);\n  };\n\n  const init = () => {\n    setActiveProject({\n      name: 'Default', color: 'black', tasks: []\n    });\n  };\n\n  const getActiveProject = () => _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getActiveProject();\n\n  const getProjects = () => _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAll();\n\n  const getActiveProjectTasks = () => getActiveProject().tasks;\n  // const projects = getProjects();\n  // const activeProject = projects.find((project) => project.name === getActiveProject().name);\n\n  return {\n    init, setActiveProject, getActiveProject, getActiveProjectTasks, getProjects\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controller);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udHJvbGxlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVyLmpzPzdmNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGVsIGZyb20gJy4vbW9kZWwnO1xuXG5cbmNvbnN0IENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBzZXRBY3RpdmVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBNb2RlbC5zZXRBY3RpdmVQcm9qZWN0KHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgc2V0QWN0aXZlUHJvamVjdCh7XG4gICAgICBuYW1lOiAnRGVmYXVsdCcsIGNvbG9yOiAnYmxhY2snLCB0YXNrczogW11cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRBY3RpdmVQcm9qZWN0ID0gKCkgPT4gTW9kZWwuZ2V0QWN0aXZlUHJvamVjdCgpO1xuXG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gTW9kZWwuZ2V0QWxsKCk7XG5cbiAgY29uc3QgZ2V0QWN0aXZlUHJvamVjdFRhc2tzID0gKCkgPT4gZ2V0QWN0aXZlUHJvamVjdCgpLnRhc2tzO1xuICAvLyBjb25zdCBwcm9qZWN0cyA9IGdldFByb2plY3RzKCk7XG4gIC8vIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IGdldEFjdGl2ZVByb2plY3QoKS5uYW1lKTtcblxuICByZXR1cm4ge1xuICAgIGluaXQsIHNldEFjdGl2ZVByb2plY3QsIGdldEFjdGl2ZVByb2plY3QsIGdldEFjdGl2ZVByb2plY3RUYXNrcywgZ2V0UHJvamVjdHNcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZXI7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/controller.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _views_projectsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/projectsView */ \"./src/views/projectsView.js\");\n/* harmony import */ var _views_tasksView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/tasksView */ \"./src/views/tasksView.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n\n\n\n\n\n\n\nconst projects = [];\n\nconst project = Object(_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Default', 'blue');\nprojects.push(project);\nproject.addTask(Object(_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('title', 'description', Date.now(), 1));\nproject.addTask(Object(_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('title2', 'description2', Date.now(), 2));\nproject.addTask(Object(_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('title3', 'description3', Date.now(), 3));\n\nconst project1 = Object(_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Week', 'blue');\nprojects.push(project1);\nproject1.addTask(Object(_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('week', 'description', Date.now(), 1));\nproject1.addTask(Object(_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('week', 'description2', Date.now(), 2));\n\n\n_controller__WEBPACK_IMPORTED_MODULE_4__[\"default\"].init();\n_views_projectsView__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init();\n_views_tasksView__WEBPACK_IMPORTED_MODULE_3__[\"default\"].init();\n// Model.init();\n// Model.add(projects);\n\n// const project3 = Project('Another one', 'red');\n// projects.push(project3);\n// Model.add(projects);\n\n// UserInterface.init(projects);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/NTE3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBQcm9qZWN0c1ZpZXcgZnJvbSAnLi92aWV3cy9wcm9qZWN0c1ZpZXcnO1xuaW1wb3J0IFRhc2tzVmlldyBmcm9tICcuL3ZpZXdzL3Rhc2tzVmlldyc7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xuXG5cbmNvbnN0IHByb2plY3RzID0gW107XG5cbmNvbnN0IHByb2plY3QgPSBQcm9qZWN0KCdEZWZhdWx0JywgJ2JsdWUnKTtcbnByb2plY3RzLnB1c2gocHJvamVjdCk7XG5wcm9qZWN0LmFkZFRhc2soVGFzaygndGl0bGUnLCAnZGVzY3JpcHRpb24nLCBEYXRlLm5vdygpLCAxKSk7XG5wcm9qZWN0LmFkZFRhc2soVGFzaygndGl0bGUyJywgJ2Rlc2NyaXB0aW9uMicsIERhdGUubm93KCksIDIpKTtcbnByb2plY3QuYWRkVGFzayhUYXNrKCd0aXRsZTMnLCAnZGVzY3JpcHRpb24zJywgRGF0ZS5ub3coKSwgMykpO1xuXG5jb25zdCBwcm9qZWN0MSA9IFByb2plY3QoJ1dlZWsnLCAnYmx1ZScpO1xucHJvamVjdHMucHVzaChwcm9qZWN0MSk7XG5wcm9qZWN0MS5hZGRUYXNrKFRhc2soJ3dlZWsnLCAnZGVzY3JpcHRpb24nLCBEYXRlLm5vdygpLCAxKSk7XG5wcm9qZWN0MS5hZGRUYXNrKFRhc2soJ3dlZWsnLCAnZGVzY3JpcHRpb24yJywgRGF0ZS5ub3coKSwgMikpO1xuXG5cbkNvbnRyb2xsZXIuaW5pdCgpO1xuUHJvamVjdHNWaWV3LmluaXQoKTtcblRhc2tzVmlldy5pbml0KCk7XG4vLyBNb2RlbC5pbml0KCk7XG4vLyBNb2RlbC5hZGQocHJvamVjdHMpO1xuXG4vLyBjb25zdCBwcm9qZWN0MyA9IFByb2plY3QoJ0Fub3RoZXIgb25lJywgJ3JlZCcpO1xuLy8gcHJvamVjdHMucHVzaChwcm9qZWN0Myk7XG4vLyBNb2RlbC5hZGQocHJvamVjdHMpO1xuXG4vLyBVc2VySW50ZXJmYWNlLmluaXQocHJvamVjdHMpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Model = (() => {\n  let activeProject = null;\n\n  const init = () => {\n    if (!localStorage.projects) {\n      localStorage.projects = JSON.stringify([]);\n    }\n  };\n\n  const add = (projects) => {\n    localStorage.projects = JSON.stringify(projects);\n  };\n\n  const getAll = () => JSON.parse(localStorage.projects);\n\n  const getActiveProject = () => activeProject;\n\n  const setActiveProject = (project) => {\n    activeProject = project;\n  };\n\n  return {\n    init, add, getAll, activeProject, getActiveProject, setActiveProject\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Model);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwuanM/NDBmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNb2RlbCA9ICgoKSA9PiB7XG4gIGxldCBhY3RpdmVQcm9qZWN0ID0gbnVsbDtcblxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIGlmICghbG9jYWxTdG9yYWdlLnByb2plY3RzKSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucHJvamVjdHMgPSBKU09OLnN0cmluZ2lmeShbXSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFkZCA9IChwcm9qZWN0cykgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5wcm9qZWN0cyA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RzKTtcbiAgfTtcblxuICBjb25zdCBnZXRBbGwgPSAoKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5wcm9qZWN0cyk7XG5cbiAgY29uc3QgZ2V0QWN0aXZlUHJvamVjdCA9ICgpID0+IGFjdGl2ZVByb2plY3Q7XG5cbiAgY29uc3Qgc2V0QWN0aXZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgYWN0aXZlUHJvamVjdCA9IHByb2plY3Q7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0LCBhZGQsIGdldEFsbCwgYWN0aXZlUHJvamVjdCwgZ2V0QWN0aXZlUHJvamVjdCwgc2V0QWN0aXZlUHJvamVjdFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kZWw7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/model.js\n");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Project = (projectName, projectColor) => {\n  const name = projectName;\n  const color = projectColor;\n  const tasks = [];\n\n  const addTask = (task) => {\n    tasks.push(task);\n  };\n\n  const removeTask = (task) => {\n    tasks.splice(tasks.indexOf(task), 1);\n  };\n\n  return {\n    addTask, removeTask, name, color, tasks\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvamVjdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wcm9qZWN0LmpzP2VhOGYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUHJvamVjdCA9IChwcm9qZWN0TmFtZSwgcHJvamVjdENvbG9yKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgY29uc3QgY29sb3IgPSBwcm9qZWN0Q29sb3I7XG4gIGNvbnN0IHRhc2tzID0gW107XG5cbiAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgdGFza3MucHVzaCh0YXNrKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVUYXNrID0gKHRhc2spID0+IHtcbiAgICB0YXNrcy5zcGxpY2UodGFza3MuaW5kZXhPZih0YXNrKSwgMSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRUYXNrLCByZW1vdmVUYXNrLCBuYW1lLCBjb2xvciwgdGFza3NcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/project.js\n");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Task = (taskTitle, taskDescription, taskDueDate, taskPriority, taskDone = false) => {\n  const title = taskTitle;\n  const description = taskDescription;\n  const dueDate = taskDueDate;\n  const priority = taskPriority;\n  const done = taskDone;\n\n  return {\n    title, description, dueDate, priority, done\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGFzay5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90YXNrLmpzP2IzYTciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVGFzayA9ICh0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eSwgdGFza0RvbmUgPSBmYWxzZSkgPT4ge1xuICBjb25zdCB0aXRsZSA9IHRhc2tUaXRsZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb247XG4gIGNvbnN0IGR1ZURhdGUgPSB0YXNrRHVlRGF0ZTtcbiAgY29uc3QgcHJpb3JpdHkgPSB0YXNrUHJpb3JpdHk7XG4gIGNvbnN0IGRvbmUgPSB0YXNrRG9uZTtcblxuICByZXR1cm4ge1xuICAgIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGRvbmVcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2s7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/task.js\n");

/***/ }),

/***/ "./src/views/projectsView.js":
/*!***********************************!*\
  !*** ./src/views/projectsView.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tasksView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksView */ \"./src/views/tasksView.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller */ \"./src/controller.js\");\n\n\n\nconst ProjectsView = (() => {\n  const projects = _controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getProjects();\n  const navBar = document.getElementById('projects');\n  const navList = document.createElement('ul');\n\n  const render = () => {\n    projects.forEach((project) => {\n      const projectItem = document.createElement('li');\n      projectItem.textContent = project.name;\n      projectItem.addEventListener('click', _tasksView__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render);\n      navList.appendChild(projectItem);\n    });\n  };\n\n  const init = () => {\n    navBar.appendChild(navList);\n    render();\n  };\n\n  return { init, render };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsView);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3MvcHJvamVjdHNWaWV3LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Byb2plY3RzVmlldy5qcz8xZGQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYXNrc1ZpZXcgZnJvbSAnLi90YXNrc1ZpZXcnO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcic7XG5cbmNvbnN0IFByb2plY3RzVmlldyA9ICgoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzID0gQ29udHJvbGxlci5nZXRQcm9qZWN0cygpO1xuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKTtcbiAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIHByb2plY3RJdGVtLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgcHJvamVjdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBUYXNrc1ZpZXcucmVuZGVyKTtcbiAgICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdkxpc3QpO1xuICAgIHJlbmRlcigpO1xuICB9O1xuXG4gIHJldHVybiB7IGluaXQsIHJlbmRlciB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNWaWV3O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/views/projectsView.js\n");

/***/ }),

/***/ "./src/views/tasksView.js":
/*!********************************!*\
  !*** ./src/views/tasksView.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller */ \"./src/controller.js\");\n\n\nconst TasksView = (() => {\n  const tasks = _controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getActiveProjectTasks();\n  const tasksCollection = document.getElementById('tasks');\n\n  const render = () => {\n    tasks.forEach((task) => {\n      const taskItem = document.createElement('div');\n      taskItem.innerHTML = `\n        <h1>${task.title}</h1>\n        <p>${task.description}</p>\n        <p>${task.dueDate}</p>\n        <p>${task.priority}</p>\n        <p>${task.taskDone}</p>\n      `;\n      tasksCollection.append(taskItem);\n    });\n  };\n\n  const init = () => {\n    render();\n  };\n\n  // const renderTasks = (project) => {\n  //   const list = document.createElement('ul');\n  //   project.tasks.forEach((task) => {\n  //     list.innerHTML += `\n  //       <li>${task.title}</li>\n  //     `;\n  //   });\n  //   return list;\n  // };\n\n  return { init, render };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TasksView);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3MvdGFza3NWaWV3LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Rhc2tzVmlldy5qcz9lM2Q4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXInO1xuXG5jb25zdCBUYXNrc1ZpZXcgPSAoKCkgPT4ge1xuICBjb25zdCB0YXNrcyA9IENvbnRyb2xsZXIuZ2V0QWN0aXZlUHJvamVjdFRhc2tzKCk7XG4gIGNvbnN0IHRhc2tzQ29sbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcycpO1xuXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGFza0l0ZW0uaW5uZXJIVE1MID0gYFxuICAgICAgICA8aDE+JHt0YXNrLnRpdGxlfTwvaDE+XG4gICAgICAgIDxwPiR7dGFzay5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDxwPiR7dGFzay5kdWVEYXRlfTwvcD5cbiAgICAgICAgPHA+JHt0YXNrLnByaW9yaXR5fTwvcD5cbiAgICAgICAgPHA+JHt0YXNrLnRhc2tEb25lfTwvcD5cbiAgICAgIGA7XG4gICAgICB0YXNrc0NvbGxlY3Rpb24uYXBwZW5kKHRhc2tJdGVtKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIHJlbmRlcigpO1xuICB9O1xuXG4gIC8vIGNvbnN0IHJlbmRlclRhc2tzID0gKHByb2plY3QpID0+IHtcbiAgLy8gICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgLy8gICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgLy8gICAgIGxpc3QuaW5uZXJIVE1MICs9IGBcbiAgLy8gICAgICAgPGxpPiR7dGFzay50aXRsZX08L2xpPlxuICAvLyAgICAgYDtcbiAgLy8gICB9KTtcbiAgLy8gICByZXR1cm4gbGlzdDtcbiAgLy8gfTtcblxuICByZXR1cm4geyBpbml0LCByZW5kZXIgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tzVmlldztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/views/tasksView.js\n");

/***/ })

/******/ });