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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n\n\nconst Controller = (() => {\n  const setActiveProject = (project) => {\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setActiveProject(project);\n  };\n\n  const getActiveProject = () => _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getActiveProject();\n\n  const getProjects = () => _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAll();\n\n  const init = () => {\n    setActiveProject(getProjects()[0]);\n  };\n\n  const getActiveProjectTasks = () => getActiveProject().tasks;\n\n  return {\n    init,\n    setActiveProject,\n    getActiveProject,\n    getActiveProjectTasks,\n    getProjects\n  };\n})();\n\nController.init();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controller);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udHJvbGxlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVyLmpzPzdmNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGVsIGZyb20gJy4vbW9kZWwnO1xuXG5jb25zdCBDb250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3Qgc2V0QWN0aXZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgTW9kZWwuc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCBnZXRBY3RpdmVQcm9qZWN0ID0gKCkgPT4gTW9kZWwuZ2V0QWN0aXZlUHJvamVjdCgpO1xuXG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gTW9kZWwuZ2V0QWxsKCk7XG5cbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBzZXRBY3RpdmVQcm9qZWN0KGdldFByb2plY3RzKClbMF0pO1xuICB9O1xuXG4gIGNvbnN0IGdldEFjdGl2ZVByb2plY3RUYXNrcyA9ICgpID0+IGdldEFjdGl2ZVByb2plY3QoKS50YXNrcztcblxuICByZXR1cm4ge1xuICAgIGluaXQsXG4gICAgc2V0QWN0aXZlUHJvamVjdCxcbiAgICBnZXRBY3RpdmVQcm9qZWN0LFxuICAgIGdldEFjdGl2ZVByb2plY3RUYXNrcyxcbiAgICBnZXRQcm9qZWN0c1xuICB9O1xufSkoKTtcblxuQ29udHJvbGxlci5pbml0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZXI7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/controller.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _views_tasksView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/tasksView */ \"./src/views/tasksView.js\");\n/* harmony import */ var _views_projectsView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/projectsView */ \"./src/views/projectsView.js\");\n\n\n\n\n\n\n\n_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\n_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n\nconst projects = [];\n\nconst project = Object(_project__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('Default', 'blue');\nprojects.push(project);\nproject.addTask(Object(_task__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('d_title', 'description', Date.now(), 1));\nproject.addTask(Object(_task__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('d_title2', 'description2', Date.now(), 2));\nproject.addTask(Object(_task__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('d_title3', 'description3', Date.now(), 3));\n\nconst project1 = Object(_project__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('Week', 'blue');\nprojects.push(project1);\nproject1.addTask(Object(_task__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('week', 'description', Date.now(), 1));\nproject1.addTask(Object(_task__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('week', 'description2', Date.now(), 2));\n\n_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add(projects);\n_views_projectsView__WEBPACK_IMPORTED_MODULE_5__[\"default\"].init();\n_views_tasksView__WEBPACK_IMPORTED_MODULE_4__[\"default\"].init();\n\n// const project3 = Project('Another one', 'red');\n// projects.push(project3);\n// Model.add(projects);\n\n// UserInterface.init(projects);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/NTE3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9kZWwgZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVGFza3NWaWV3IGZyb20gJy4vdmlld3MvdGFza3NWaWV3JztcbmltcG9ydCBQcm9qZWN0c1ZpZXcgZnJvbSAnLi92aWV3cy9wcm9qZWN0c1ZpZXcnO1xuXG5Nb2RlbC5pbml0KCk7XG5Db250cm9sbGVyLmluaXQoKTtcblxuY29uc3QgcHJvamVjdHMgPSBbXTtcblxuY29uc3QgcHJvamVjdCA9IFByb2plY3QoJ0RlZmF1bHQnLCAnYmx1ZScpO1xucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbnByb2plY3QuYWRkVGFzayhUYXNrKCdkX3RpdGxlJywgJ2Rlc2NyaXB0aW9uJywgRGF0ZS5ub3coKSwgMSkpO1xucHJvamVjdC5hZGRUYXNrKFRhc2soJ2RfdGl0bGUyJywgJ2Rlc2NyaXB0aW9uMicsIERhdGUubm93KCksIDIpKTtcbnByb2plY3QuYWRkVGFzayhUYXNrKCdkX3RpdGxlMycsICdkZXNjcmlwdGlvbjMnLCBEYXRlLm5vdygpLCAzKSk7XG5cbmNvbnN0IHByb2plY3QxID0gUHJvamVjdCgnV2VlaycsICdibHVlJyk7XG5wcm9qZWN0cy5wdXNoKHByb2plY3QxKTtcbnByb2plY3QxLmFkZFRhc2soVGFzaygnd2VlaycsICdkZXNjcmlwdGlvbicsIERhdGUubm93KCksIDEpKTtcbnByb2plY3QxLmFkZFRhc2soVGFzaygnd2VlaycsICdkZXNjcmlwdGlvbjInLCBEYXRlLm5vdygpLCAyKSk7XG5cbk1vZGVsLmFkZChwcm9qZWN0cyk7XG5Qcm9qZWN0c1ZpZXcuaW5pdCgpO1xuVGFza3NWaWV3LmluaXQoKTtcblxuLy8gY29uc3QgcHJvamVjdDMgPSBQcm9qZWN0KCdBbm90aGVyIG9uZScsICdyZWQnKTtcbi8vIHByb2plY3RzLnB1c2gocHJvamVjdDMpO1xuLy8gTW9kZWwuYWRkKHByb2plY3RzKTtcblxuLy8gVXNlckludGVyZmFjZS5pbml0KHByb2plY3RzKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Model = (() => {\n  let activeProject = null;\n\n  const init = () => {\n    if (!localStorage.projects) {\n      localStorage.projects = JSON.stringify([]);\n    }\n  };\n\n  const add = (projects) => {\n    localStorage.projects = JSON.stringify(projects);\n  };\n\n  const getAll = () => JSON.parse(localStorage.projects);\n\n  const getActiveProject = () => activeProject;\n\n  const setActiveProject = (project) => {\n    activeProject = project;\n  };\n\n  return {\n    init, add, getAll, activeProject, getActiveProject, setActiveProject\n  };\n})();\n\nModel.init();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Model);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwuanM/NDBmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNb2RlbCA9ICgoKSA9PiB7XG4gIGxldCBhY3RpdmVQcm9qZWN0ID0gbnVsbDtcblxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIGlmICghbG9jYWxTdG9yYWdlLnByb2plY3RzKSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucHJvamVjdHMgPSBKU09OLnN0cmluZ2lmeShbXSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFkZCA9IChwcm9qZWN0cykgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5wcm9qZWN0cyA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RzKTtcbiAgfTtcblxuICBjb25zdCBnZXRBbGwgPSAoKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5wcm9qZWN0cyk7XG5cbiAgY29uc3QgZ2V0QWN0aXZlUHJvamVjdCA9ICgpID0+IGFjdGl2ZVByb2plY3Q7XG5cbiAgY29uc3Qgc2V0QWN0aXZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgYWN0aXZlUHJvamVjdCA9IHByb2plY3Q7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0LCBhZGQsIGdldEFsbCwgYWN0aXZlUHJvamVjdCwgZ2V0QWN0aXZlUHJvamVjdCwgc2V0QWN0aXZlUHJvamVjdFxuICB9O1xufSkoKTtcblxuTW9kZWwuaW5pdCgpO1xuXG5leHBvcnQgZGVmYXVsdCBNb2RlbDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/model.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tasksView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksView */ \"./src/views/tasksView.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller */ \"./src/controller.js\");\n\n\n\nconst ProjectsView = (() => {\n  const projects = _controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getProjects();\n  const navBar = document.getElementById('projects');\n  const navList = document.createElement('ul');\n\n  const render = () => {\n    navList.innerHTML = '';\n    projects.forEach((project) => {\n      const projectItem = document.createElement('li');\n      projectItem.textContent = project.name;\n      projectItem.addEventListener('click', () => {\n        _controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setActiveProject(project);\n        _tasksView__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render();\n      });\n      navList.appendChild(projectItem);\n    });\n  };\n\n  const init = () => {\n    navBar.appendChild(navList);\n    render();\n  };\n\n  return { init, render };\n})();\n\nProjectsView.init();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsView);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3MvcHJvamVjdHNWaWV3LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Byb2plY3RzVmlldy5qcz8xZGQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYXNrc1ZpZXcgZnJvbSAnLi90YXNrc1ZpZXcnO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcic7XG5cbmNvbnN0IFByb2plY3RzVmlldyA9ICgoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzID0gQ29udHJvbGxlci5nZXRQcm9qZWN0cygpO1xuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKTtcbiAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIG5hdkxpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgcHJvamVjdEl0ZW0udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICBwcm9qZWN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgQ29udHJvbGxlci5zZXRBY3RpdmVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICBUYXNrc1ZpZXcucmVuZGVyKCk7XG4gICAgICB9KTtcbiAgICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdkxpc3QpO1xuICAgIHJlbmRlcigpO1xuICB9O1xuXG4gIHJldHVybiB7IGluaXQsIHJlbmRlciB9O1xufSkoKTtcblxuUHJvamVjdHNWaWV3LmluaXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNWaWV3O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/views/projectsView.js\n");

/***/ }),

/***/ "./src/views/tasksView.js":
/*!********************************!*\
  !*** ./src/views/tasksView.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller */ \"./src/controller.js\");\n\n\nconst TasksView = (() => {\n  const tasks = _controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getActiveProjectTasks();\n  const tasksCollection = document.getElementById('tasks');\n\n  const render = () => {\n    tasksCollection.innerHTML = '';\n    tasks.forEach((task) => {\n      const taskItem = document.createElement('div');\n      taskItem.innerHTML = `\n        <h1>${task.title}</h1>\n        <p>${task.description}</p>\n        <p>${task.dueDate}</p>\n        <br>\n      `;\n      tasksCollection.append(taskItem);\n    });\n  };\n\n  const init = () => {\n    render();\n  };\n\n  return { init, render };\n})();\n\nTasksView.init();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TasksView);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3MvdGFza3NWaWV3LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Rhc2tzVmlldy5qcz9lM2Q4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXInO1xuXG5jb25zdCBUYXNrc1ZpZXcgPSAoKCkgPT4ge1xuICBjb25zdCB0YXNrcyA9IENvbnRyb2xsZXIuZ2V0QWN0aXZlUHJvamVjdFRhc2tzKCk7XG4gIGNvbnN0IHRhc2tzQ29sbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcycpO1xuXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICB0YXNrc0NvbGxlY3Rpb24uaW5uZXJIVE1MID0gJyc7XG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRhc2tJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGgxPiR7dGFzay50aXRsZX08L2gxPlxuICAgICAgICA8cD4ke3Rhc2suZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8cD4ke3Rhc2suZHVlRGF0ZX08L3A+XG4gICAgICAgIDxicj5cbiAgICAgIGA7XG4gICAgICB0YXNrc0NvbGxlY3Rpb24uYXBwZW5kKHRhc2tJdGVtKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIHJlbmRlcigpO1xuICB9O1xuXG4gIHJldHVybiB7IGluaXQsIHJlbmRlciB9O1xufSkoKTtcblxuVGFza3NWaWV3LmluaXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgVGFza3NWaWV3O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/views/tasksView.js\n");

/***/ })

/******/ });