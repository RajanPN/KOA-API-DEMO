const Router = require("koa-router");
const router = new Router();

const testController = require("../controllers/test.controllers");
const tasksController = require("../controllers/task.controllers");
const senecaController = require("../controllers/seneca/seneca.getTasks.controllers");
const molecularController = require("../controllers/moleculer/moleculer.controller");
const servicebusController = require("../controllers/servicebus/servicebus.getTask.controller");

const BASE_URL = `/api/v1`;

router.get('/', testController.welcome);
router.get('/s', senecaController.testSeneca);
router.get('/m', molecularController.testMoleculer);
router.get('/sb', servicebusController.testServiceBus);
router.get(`${BASE_URL}/hello`, testController.testHello);

router.get(`${BASE_URL}/tasks`, tasksController.getTasks);
router.get(`${BASE_URL}/tasks/:id`, tasksController.getTaskById);
router.post(`${BASE_URL}/tasks`, tasksController.createTask);
router.put(`${BASE_URL}/tasks`, tasksController.updateTask);
router.delete(`${BASE_URL}/tasks`, tasksController.deleteTask);

module.exports = router;