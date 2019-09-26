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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _views_tasksView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/tasksView */ \"./src/views/tasksView.js\");\n/* harmony import */ var _views_projectsView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/projectsView */ \"./src/views/projectsView.js\");\n\n\n// import UI from './views/ui';\n\n\n\n\nconst Controller = (() => {\n  const setActiveProject = (project) => {\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setActiveProject(project);\n  };\n\n  const getActiveProject = () => _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getActiveProject();\n\n  const getProjects = () => _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAll();\n\n  const getActiveProjectTasks = () => getActiveProject().tasks;\n\n  // HANDLERS\n  const projectSelectHandler = (projectIndex) => {\n    const clickedProject = getProjects()[projectIndex];\n    setActiveProject(clickedProject);\n    _views_tasksView__WEBPACK_IMPORTED_MODULE_2__[\"default\"].render(getActiveProjectTasks());\n  };\n\n  const addProjectHandler = (projectName, projectColor) => {\n    const project = Object(_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(projectName, projectColor);\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProject(project);\n  };\n\n  const addTaskHandler = (taskTitle, taskDesc, taskDue) => {\n    const task = {\n      title: taskTitle,\n      description: taskDesc,\n      dueDate: taskDue\n    };\n    const activeProject = getActiveProject();\n    const updatedProject = Object(_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(activeProject.name, activeProject.color, activeProject.tasks);\n    const allProjects = _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAll();\n\n    updatedProject.tasks.push(task);\n    const index = allProjects.findIndex((project) => project.name === updatedProject.name);\n    allProjects.splice(index, 1, updatedProject);\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add(allProjects);\n    // TasksView.render(getActiveProjectTasks());\n  };\n\n  const init = () => {\n    setActiveProject(getProjects()[0]);\n\n    _views_projectsView__WEBPACK_IMPORTED_MODULE_3__[\"default\"].init(getProjects());\n    _views_tasksView__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init(getActiveProjectTasks());\n\n    // BIND\n    _views_projectsView__WEBPACK_IMPORTED_MODULE_3__[\"default\"].bindProjectSelect(projectSelectHandler);\n    _views_projectsView__WEBPACK_IMPORTED_MODULE_3__[\"default\"].bindAddProject(addProjectHandler);\n    _views_tasksView__WEBPACK_IMPORTED_MODULE_2__[\"default\"].bindAddTask(addTaskHandler);\n\n    // ATTACH EVENTS\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProjectEvent.addObserver(_views_projectsView__WEBPACK_IMPORTED_MODULE_3__[\"default\"].render);\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTaskEvent.addObserver(_views_tasksView__WEBPACK_IMPORTED_MODULE_2__[\"default\"].render);\n  };\n\n\n  return {\n    init,\n    setActiveProject,\n    getActiveProject,\n    getActiveProjectTasks,\n    getProjects\n  };\n})();\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controller);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udHJvbGxlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVyLmpzPzdmNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGVsIGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0Jztcbi8vIGltcG9ydCBVSSBmcm9tICcuL3ZpZXdzL3VpJztcbmltcG9ydCBUYXNrc1ZpZXcgZnJvbSAnLi92aWV3cy90YXNrc1ZpZXcnO1xuaW1wb3J0IFByb2plY3RzVmlldyBmcm9tICcuL3ZpZXdzL3Byb2plY3RzVmlldyc7XG5cblxuY29uc3QgQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHNldEFjdGl2ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIE1vZGVsLnNldEFjdGl2ZVByb2plY3QocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0QWN0aXZlUHJvamVjdCA9ICgpID0+IE1vZGVsLmdldEFjdGl2ZVByb2plY3QoKTtcblxuICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IE1vZGVsLmdldEFsbCgpO1xuXG4gIGNvbnN0IGdldEFjdGl2ZVByb2plY3RUYXNrcyA9ICgpID0+IGdldEFjdGl2ZVByb2plY3QoKS50YXNrcztcblxuICAvLyBIQU5ETEVSU1xuICBjb25zdCBwcm9qZWN0U2VsZWN0SGFuZGxlciA9IChwcm9qZWN0SW5kZXgpID0+IHtcbiAgICBjb25zdCBjbGlja2VkUHJvamVjdCA9IGdldFByb2plY3RzKClbcHJvamVjdEluZGV4XTtcbiAgICBzZXRBY3RpdmVQcm9qZWN0KGNsaWNrZWRQcm9qZWN0KTtcbiAgICBUYXNrc1ZpZXcucmVuZGVyKGdldEFjdGl2ZVByb2plY3RUYXNrcygpKTtcbiAgfTtcblxuICBjb25zdCBhZGRQcm9qZWN0SGFuZGxlciA9IChwcm9qZWN0TmFtZSwgcHJvamVjdENvbG9yKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QocHJvamVjdE5hbWUsIHByb2plY3RDb2xvcik7XG4gICAgTW9kZWwuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCBhZGRUYXNrSGFuZGxlciA9ICh0YXNrVGl0bGUsIHRhc2tEZXNjLCB0YXNrRHVlKSA9PiB7XG4gICAgY29uc3QgdGFzayA9IHtcbiAgICAgIHRpdGxlOiB0YXNrVGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogdGFza0Rlc2MsXG4gICAgICBkdWVEYXRlOiB0YXNrRHVlXG4gICAgfTtcbiAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpO1xuICAgIGNvbnN0IHVwZGF0ZWRQcm9qZWN0ID0gUHJvamVjdChhY3RpdmVQcm9qZWN0Lm5hbWUsIGFjdGl2ZVByb2plY3QuY29sb3IsIGFjdGl2ZVByb2plY3QudGFza3MpO1xuICAgIGNvbnN0IGFsbFByb2plY3RzID0gTW9kZWwuZ2V0QWxsKCk7XG5cbiAgICB1cGRhdGVkUHJvamVjdC50YXNrcy5wdXNoKHRhc2spO1xuICAgIGNvbnN0IGluZGV4ID0gYWxsUHJvamVjdHMuZmluZEluZGV4KChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IHVwZGF0ZWRQcm9qZWN0Lm5hbWUpO1xuICAgIGFsbFByb2plY3RzLnNwbGljZShpbmRleCwgMSwgdXBkYXRlZFByb2plY3QpO1xuICAgIE1vZGVsLmFkZChhbGxQcm9qZWN0cyk7XG4gICAgLy8gVGFza3NWaWV3LnJlbmRlcihnZXRBY3RpdmVQcm9qZWN0VGFza3MoKSk7XG4gIH07XG5cbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBzZXRBY3RpdmVQcm9qZWN0KGdldFByb2plY3RzKClbMF0pO1xuXG4gICAgUHJvamVjdHNWaWV3LmluaXQoZ2V0UHJvamVjdHMoKSk7XG4gICAgVGFza3NWaWV3LmluaXQoZ2V0QWN0aXZlUHJvamVjdFRhc2tzKCkpO1xuXG4gICAgLy8gQklORFxuICAgIFByb2plY3RzVmlldy5iaW5kUHJvamVjdFNlbGVjdChwcm9qZWN0U2VsZWN0SGFuZGxlcik7XG4gICAgUHJvamVjdHNWaWV3LmJpbmRBZGRQcm9qZWN0KGFkZFByb2plY3RIYW5kbGVyKTtcbiAgICBUYXNrc1ZpZXcuYmluZEFkZFRhc2soYWRkVGFza0hhbmRsZXIpO1xuXG4gICAgLy8gQVRUQUNIIEVWRU5UU1xuICAgIE1vZGVsLmFkZFByb2plY3RFdmVudC5hZGRPYnNlcnZlcihQcm9qZWN0c1ZpZXcucmVuZGVyKTtcbiAgICBNb2RlbC5hZGRUYXNrRXZlbnQuYWRkT2JzZXJ2ZXIoVGFza3NWaWV3LnJlbmRlcik7XG4gIH07XG5cblxuICByZXR1cm4ge1xuICAgIGluaXQsXG4gICAgc2V0QWN0aXZlUHJvamVjdCxcbiAgICBnZXRBY3RpdmVQcm9qZWN0LFxuICAgIGdldEFjdGl2ZVByb2plY3RUYXNrcyxcbiAgICBnZXRQcm9qZWN0c1xuICB9O1xufSkoKTtcblxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVyO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/controller.js\n");

/***/ }),

/***/ "./src/eventDispatcher.js":
/*!********************************!*\
  !*** ./src/eventDispatcher.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst EventDispatcher = () => {\n  const observers = [];\n\n  const addObserver = (observer) => {\n    observers.push(observer);\n  };\n\n  const notify = (args) => {\n    observers.forEach((observer) => {\n      observer(args);\n    });\n  };\n\n  return { addObserver, notify };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventDispatcher);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZXZlbnREaXNwYXRjaGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50RGlzcGF0Y2hlci5qcz9mMDExIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEV2ZW50RGlzcGF0Y2hlciA9ICgpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXJzID0gW107XG5cbiAgY29uc3QgYWRkT2JzZXJ2ZXIgPSAob2JzZXJ2ZXIpID0+IHtcbiAgICBvYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XG4gIH07XG5cbiAgY29uc3Qgbm90aWZ5ID0gKGFyZ3MpID0+IHtcbiAgICBvYnNlcnZlcnMuZm9yRWFjaCgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIG9ic2VydmVyKGFyZ3MpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IGFkZE9ic2VydmVyLCBub3RpZnkgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RGlzcGF0Y2hlcjtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/eventDispatcher.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n\n\n// import Task from './task';\n// import Project from './project';\n// import TasksView from './views/tasksView';\n// import ProjectsView from './views/projectsView';\n\n_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\n_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n\n// const projects = [];\n\n// const project = Project('Default', 'blue');\n// projects.push(project);\n// project.addTask(Task('d_title', 'description', Date.now(), 1));\n// project.addTask(Task('d_title2', 'description2', Date.now(), 2));\n// project.addTask(Task('d_title3', 'description3', Date.now(), 3));\n\n// const project1 = Project('Week', 'blue');\n// projects.push(project1);\n// project1.addTask(Task('week', 'description', Date.now(), 1));\n// project1.addTask(Task('week', 'description2', Date.now(), 2));\n\n// Model.add(projects);\n// ProjectsView.init();\n// TasksView.init();\n\n// const project3 = Project('Another one', 'red');\n// projects.push(project3);\n// Model.add(projects);\n\n// UserInterface.init(projects);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/NTE3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9kZWwgZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xuLy8gaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcbi8vIGltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG4vLyBpbXBvcnQgVGFza3NWaWV3IGZyb20gJy4vdmlld3MvdGFza3NWaWV3Jztcbi8vIGltcG9ydCBQcm9qZWN0c1ZpZXcgZnJvbSAnLi92aWV3cy9wcm9qZWN0c1ZpZXcnO1xuXG5Nb2RlbC5pbml0KCk7XG5Db250cm9sbGVyLmluaXQoKTtcblxuLy8gY29uc3QgcHJvamVjdHMgPSBbXTtcblxuLy8gY29uc3QgcHJvamVjdCA9IFByb2plY3QoJ0RlZmF1bHQnLCAnYmx1ZScpO1xuLy8gcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbi8vIHByb2plY3QuYWRkVGFzayhUYXNrKCdkX3RpdGxlJywgJ2Rlc2NyaXB0aW9uJywgRGF0ZS5ub3coKSwgMSkpO1xuLy8gcHJvamVjdC5hZGRUYXNrKFRhc2soJ2RfdGl0bGUyJywgJ2Rlc2NyaXB0aW9uMicsIERhdGUubm93KCksIDIpKTtcbi8vIHByb2plY3QuYWRkVGFzayhUYXNrKCdkX3RpdGxlMycsICdkZXNjcmlwdGlvbjMnLCBEYXRlLm5vdygpLCAzKSk7XG5cbi8vIGNvbnN0IHByb2plY3QxID0gUHJvamVjdCgnV2VlaycsICdibHVlJyk7XG4vLyBwcm9qZWN0cy5wdXNoKHByb2plY3QxKTtcbi8vIHByb2plY3QxLmFkZFRhc2soVGFzaygnd2VlaycsICdkZXNjcmlwdGlvbicsIERhdGUubm93KCksIDEpKTtcbi8vIHByb2plY3QxLmFkZFRhc2soVGFzaygnd2VlaycsICdkZXNjcmlwdGlvbjInLCBEYXRlLm5vdygpLCAyKSk7XG5cbi8vIE1vZGVsLmFkZChwcm9qZWN0cyk7XG4vLyBQcm9qZWN0c1ZpZXcuaW5pdCgpO1xuLy8gVGFza3NWaWV3LmluaXQoKTtcblxuLy8gY29uc3QgcHJvamVjdDMgPSBQcm9qZWN0KCdBbm90aGVyIG9uZScsICdyZWQnKTtcbi8vIHByb2plY3RzLnB1c2gocHJvamVjdDMpO1xuLy8gTW9kZWwuYWRkKHByb2plY3RzKTtcblxuLy8gVXNlckludGVyZmFjZS5pbml0KHByb2plY3RzKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _eventDispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventDispatcher */ \"./src/eventDispatcher.js\");\n\n\nconst Model = (() => {\n  let activeProject = null;\n  const addProjectEvent = Object(_eventDispatcher__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const addTaskEvent = Object(_eventDispatcher__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  const init = () => {\n    if (!localStorage.projects) {\n      localStorage.projects = JSON.stringify([]);\n    }\n  };\n\n  const add = (projects) => {\n    localStorage.projects = JSON.stringify(projects);\n    addTaskEvent.notify(activeProject.tasks);\n  };\n\n  const getAll = () => JSON.parse(localStorage.projects);\n\n  const addProject = (project) => {\n    const projects = getAll();\n    projects.push(project);\n    add(projects);\n    addProjectEvent.notify(projects);\n  };\n\n  const getActiveProject = () => activeProject;\n\n  const setActiveProject = (project) => {\n    activeProject = project;\n  };\n\n  return {\n    init,\n    add,\n    getAll,\n    activeProject,\n    getActiveProject,\n    setActiveProject,\n    addProject,\n    addProjectEvent,\n    addTaskEvent\n  };\n})();\n\n// Model.init();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Model);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwuanM/NDBmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gJy4vZXZlbnREaXNwYXRjaGVyJztcblxuY29uc3QgTW9kZWwgPSAoKCkgPT4ge1xuICBsZXQgYWN0aXZlUHJvamVjdCA9IG51bGw7XG4gIGNvbnN0IGFkZFByb2plY3RFdmVudCA9IEV2ZW50RGlzcGF0Y2hlcigpO1xuICBjb25zdCBhZGRUYXNrRXZlbnQgPSBFdmVudERpc3BhdGNoZXIoKTtcblxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIGlmICghbG9jYWxTdG9yYWdlLnByb2plY3RzKSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucHJvamVjdHMgPSBKU09OLnN0cmluZ2lmeShbXSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFkZCA9IChwcm9qZWN0cykgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5wcm9qZWN0cyA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RzKTtcbiAgICBhZGRUYXNrRXZlbnQubm90aWZ5KGFjdGl2ZVByb2plY3QudGFza3MpO1xuICB9O1xuXG4gIGNvbnN0IGdldEFsbCA9ICgpID0+IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnByb2plY3RzKTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGdldEFsbCgpO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgYWRkKHByb2plY3RzKTtcbiAgICBhZGRQcm9qZWN0RXZlbnQubm90aWZ5KHByb2plY3RzKTtcbiAgfTtcblxuICBjb25zdCBnZXRBY3RpdmVQcm9qZWN0ID0gKCkgPT4gYWN0aXZlUHJvamVjdDtcblxuICBjb25zdCBzZXRBY3RpdmVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGluaXQsXG4gICAgYWRkLFxuICAgIGdldEFsbCxcbiAgICBhY3RpdmVQcm9qZWN0LFxuICAgIGdldEFjdGl2ZVByb2plY3QsXG4gICAgc2V0QWN0aXZlUHJvamVjdCxcbiAgICBhZGRQcm9qZWN0LFxuICAgIGFkZFByb2plY3RFdmVudCxcbiAgICBhZGRUYXNrRXZlbnRcbiAgfTtcbn0pKCk7XG5cbi8vIE1vZGVsLmluaXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kZWw7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/model.js\n");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Project = (projectName, projectColor, projectTasks = []) => {\n  const name = projectName;\n  const color = projectColor;\n  const tasks = projectTasks;\n\n  const addTask = (task) => {\n    tasks.push(task);\n  };\n\n  const removeTask = (task) => {\n    tasks.splice(tasks.indexOf(task), 1);\n  };\n\n  return {\n    addTask, removeTask, name, color, tasks\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvamVjdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wcm9qZWN0LmpzP2VhOGYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUHJvamVjdCA9IChwcm9qZWN0TmFtZSwgcHJvamVjdENvbG9yLCBwcm9qZWN0VGFza3MgPSBbXSkgPT4ge1xuICBjb25zdCBuYW1lID0gcHJvamVjdE5hbWU7XG4gIGNvbnN0IGNvbG9yID0gcHJvamVjdENvbG9yO1xuICBjb25zdCB0YXNrcyA9IHByb2plY3RUYXNrcztcblxuICBjb25zdCBhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgICB0YXNrcy5wdXNoKHRhc2spO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVRhc2sgPSAodGFzaykgPT4ge1xuICAgIHRhc2tzLnNwbGljZSh0YXNrcy5pbmRleE9mKHRhc2spLCAxKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFkZFRhc2ssIHJlbW92ZVRhc2ssIG5hbWUsIGNvbG9yLCB0YXNrc1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/project.js\n");

/***/ }),

/***/ "./src/views/projectsView.js":
/*!***********************************!*\
  !*** ./src/views/projectsView.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ProjectsView = (() => {\n  const navBar = document.getElementById('projects');\n  const navList = document.createElement('ul');\n  const form = document.createElement('form');\n  let handleProjectSelect = null;\n  let handleAddProject = null;\n\n  navList.addEventListener('click', (event) => {\n    const projectIndex = event.target.id;\n    handleProjectSelect(projectIndex);\n  });\n\n  form.addEventListener('submit', (event) => {\n    event.preventDefault();\n    const projectName = document.querySelector('.project-name-input').value;\n    const projectColor = document.querySelector('.project-color-input').value;\n    handleAddProject(projectName, projectColor);\n  });\n\n  const render = (projects) => {\n    navList.innerHTML = '';\n    projects.forEach((project, index) => {\n      const projectItem = document.createElement('li');\n      projectItem.textContent = project.name;\n      projectItem.id = index;\n      navList.appendChild(projectItem);\n    });\n  };\n\n  const renderForm = () => {\n    const input = document.createElement('input');\n    const colorInput = document.createElement('input');\n    const submitButton = document.createElement('button');\n    input.type = 'text';\n    colorInput.type = 'color';\n    input.className = 'project-name-input';\n    colorInput.className = 'project-color-input';\n    submitButton.textContent = 'Add Project';\n    form.append(input, colorInput, submitButton);\n    navBar.appendChild(form);\n  };\n\n  // BIND\n  const bindProjectSelect = (handler) => {\n    handleProjectSelect = handler;\n  };\n\n  const bindAddProject = (handler) => {\n    handleAddProject = handler;\n  };\n\n  const init = (projects) => {\n    navBar.appendChild(navList);\n    render(projects);\n    renderForm();\n  };\n\n  return {\n    init, render, bindProjectSelect, bindAddProject\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsView);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3MvcHJvamVjdHNWaWV3LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Byb2plY3RzVmlldy5qcz8xZGQ2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFByb2plY3RzVmlldyA9ICgoKSA9PiB7XG4gIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpO1xuICBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgbGV0IGhhbmRsZVByb2plY3RTZWxlY3QgPSBudWxsO1xuICBsZXQgaGFuZGxlQWRkUHJvamVjdCA9IG51bGw7XG5cbiAgbmF2TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICBoYW5kbGVQcm9qZWN0U2VsZWN0KHByb2plY3RJbmRleCk7XG4gIH0pO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUtaW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCBwcm9qZWN0Q29sb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb2xvci1pbnB1dCcpLnZhbHVlO1xuICAgIGhhbmRsZUFkZFByb2plY3QocHJvamVjdE5hbWUsIHByb2plY3RDb2xvcik7XG4gIH0pO1xuXG4gIGNvbnN0IHJlbmRlciA9IChwcm9qZWN0cykgPT4ge1xuICAgIG5hdkxpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIHByb2plY3RJdGVtLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgcHJvamVjdEl0ZW0uaWQgPSBpbmRleDtcbiAgICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGNvbG9ySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgY29sb3JJbnB1dC50eXBlID0gJ2NvbG9yJztcbiAgICBpbnB1dC5jbGFzc05hbWUgPSAncHJvamVjdC1uYW1lLWlucHV0JztcbiAgICBjb2xvcklucHV0LmNsYXNzTmFtZSA9ICdwcm9qZWN0LWNvbG9yLWlucHV0JztcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xuICAgIGZvcm0uYXBwZW5kKGlucHV0LCBjb2xvcklucHV0LCBzdWJtaXRCdXR0b24pO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgfTtcblxuICAvLyBCSU5EXG4gIGNvbnN0IGJpbmRQcm9qZWN0U2VsZWN0ID0gKGhhbmRsZXIpID0+IHtcbiAgICBoYW5kbGVQcm9qZWN0U2VsZWN0ID0gaGFuZGxlcjtcbiAgfTtcblxuICBjb25zdCBiaW5kQWRkUHJvamVjdCA9IChoYW5kbGVyKSA9PiB7XG4gICAgaGFuZGxlQWRkUHJvamVjdCA9IGhhbmRsZXI7XG4gIH07XG5cbiAgY29uc3QgaW5pdCA9IChwcm9qZWN0cykgPT4ge1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChuYXZMaXN0KTtcbiAgICByZW5kZXIocHJvamVjdHMpO1xuICAgIHJlbmRlckZvcm0oKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGluaXQsIHJlbmRlciwgYmluZFByb2plY3RTZWxlY3QsIGJpbmRBZGRQcm9qZWN0XG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1ZpZXc7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/views/projectsView.js\n");

/***/ }),

/***/ "./src/views/tasksView.js":
/*!********************************!*\
  !*** ./src/views/tasksView.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst TasksView = (() => {\n  const tasksCollection = document.getElementById('tasks');\n  const form = document.createElement('form');\n  let handleAddTask = null;\n\n\n  form.addEventListener('submit', (event) => {\n    event.preventDefault();\n    const taskTitle = document.querySelector('.task-title').value;\n    const taskDesc = document.querySelector('.task-desc').value;\n    const taskDue = document.querySelector('.task-due').value;\n    handleAddTask(taskTitle, taskDesc, taskDue);\n  });\n\n  const bindAddTask = (handler) => {\n    handleAddTask = handler;\n  };\n\n  const renderForm = () => {\n    form.innerHTML = '';\n    const titleInput = document.createElement('input');\n    const descriptionInput = document.createElement('input');\n    const dueDateInput = document.createElement('input');\n    const submitButton = document.createElement('button');\n\n    titleInput.type = 'text';\n    titleInput.placeholder = 'Task title';\n    titleInput.className = 'task-title';\n    descriptionInput.type = 'text';\n    descriptionInput.placeholder = 'Task description';\n    descriptionInput.className = 'task-desc';\n    dueDateInput.type = 'date';\n    dueDateInput.className = 'task-due';\n    submitButton.textContent = 'Add Event';\n\n    form.append(titleInput, descriptionInput, dueDateInput, submitButton);\n    tasksCollection.appendChild(form);\n  };\n\n  const render = (tasks) => {\n    tasksCollection.innerHTML = '';\n    tasks.forEach((task) => {\n      const taskItem = document.createElement('div');\n      taskItem.innerHTML = `\n        <h1>${task.title}</h1>\n        <p>${task.description}</p>\n        <p>${task.dueDate}</p>\n        <br>\n      `;\n      tasksCollection.append(taskItem);\n    });\n    renderForm();\n  };\n\n  const init = (tasks) => {\n    render(tasks);\n  };\n\n  return { init, render, bindAddTask };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TasksView);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3MvdGFza3NWaWV3LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Rhc2tzVmlldy5qcz9lM2Q4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRhc2tzVmlldyA9ICgoKSA9PiB7XG4gIGNvbnN0IHRhc2tzQ29sbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcycpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBsZXQgaGFuZGxlQWRkVGFzayA9IG51bGw7XG5cblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlc2MnKS52YWx1ZTtcbiAgICBjb25zdCB0YXNrRHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZHVlJykudmFsdWU7XG4gICAgaGFuZGxlQWRkVGFzayh0YXNrVGl0bGUsIHRhc2tEZXNjLCB0YXNrRHVlKTtcbiAgfSk7XG5cbiAgY29uc3QgYmluZEFkZFRhc2sgPSAoaGFuZGxlcikgPT4ge1xuICAgIGhhbmRsZUFkZFRhc2sgPSBoYW5kbGVyO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckZvcm0gPSAoKSA9PiB7XG4gICAgZm9ybS5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSAnVGFzayB0aXRsZSc7XG4gICAgdGl0bGVJbnB1dC5jbGFzc05hbWUgPSAndGFzay10aXRsZSc7XG4gICAgZGVzY3JpcHRpb25JbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSAnVGFzayBkZXNjcmlwdGlvbic7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc05hbWUgPSAndGFzay1kZXNjJztcbiAgICBkdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICBkdWVEYXRlSW5wdXQuY2xhc3NOYW1lID0gJ3Rhc2stZHVlJztcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIEV2ZW50JztcblxuICAgIGZvcm0uYXBwZW5kKHRpdGxlSW5wdXQsIGRlc2NyaXB0aW9uSW5wdXQsIGR1ZURhdGVJbnB1dCwgc3VibWl0QnV0dG9uKTtcbiAgICB0YXNrc0NvbGxlY3Rpb24uYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyID0gKHRhc2tzKSA9PiB7XG4gICAgdGFza3NDb2xsZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0YXNrSXRlbS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMT4ke3Rhc2sudGl0bGV9PC9oMT5cbiAgICAgICAgPHA+JHt0YXNrLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPHA+JHt0YXNrLmR1ZURhdGV9PC9wPlxuICAgICAgICA8YnI+XG4gICAgICBgO1xuICAgICAgdGFza3NDb2xsZWN0aW9uLmFwcGVuZCh0YXNrSXRlbSk7XG4gICAgfSk7XG4gICAgcmVuZGVyRm9ybSgpO1xuICB9O1xuXG4gIGNvbnN0IGluaXQgPSAodGFza3MpID0+IHtcbiAgICByZW5kZXIodGFza3MpO1xuICB9O1xuXG4gIHJldHVybiB7IGluaXQsIHJlbmRlciwgYmluZEFkZFRhc2sgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tzVmlldztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/views/tasksView.js\n");

/***/ })

/******/ });