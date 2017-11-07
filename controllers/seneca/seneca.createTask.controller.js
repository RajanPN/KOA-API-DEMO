const Seneca = require('seneca');

exports.create = async(ctx) => {

	const result = await Seneca({
			tag: 'createTaskClient'
		})
		// .test('print')
		.client({
			pin: {
				cmd: 'createTasks'
			},
			port: 9091
		})
		.ready(async function() {

			var msg = {
				cmd: 'createTasks',
				name: ctx.name,
				urgency: ctx.urgency
			}

			this.act(msg, function(err, response) {
				if (!response || err) {
					console.log('Do nothing', err);
					// throw new Error("There was an error creating task.")
				} else {
					if (response.tasks.length) {
						console.log('List of tasks', response);
					}
					console.log('Counln\'t create task');
				}
			})
		})
}