const Seneca = require('seneca');
const createNewTask = require('./seneca.createTask.controller');

const getTaskSeneca = async() => {
	return Seneca({
			tag: 'getTaskListClient'
		})
		// .test('print')
		.client({
			pin: {
				cmd: 'getTasks'
			},
			port: 9090
		})
		.ready(async function() {
			// console.log('seneca instance ' + this.id)

			var msg = {
				cmd: 'getTasks',
			}

			// console.log('sending:', msg)

			this.act(msg, function(err, response) {
				// console.log('response:', err || out)
				if (!response || err) {
					console.log('Do nothing', err);
					throw new Error("There was an error retrieving your converted data.")
				} else {
					if (response.tasks.length) {
						console.log('List of tasks', response);
						return response
					} else {
						console.log('No tasks found');
						createNewTask.create({
							name: 'Go to doctor',
							urgency: 'This saturday'
						});
					}
				}
			})
		})
}

exports.testSeneca = async(ctx) => {
	getTaskSeneca();
	ctx.body = `Hello from test Seneca!!!`;
}