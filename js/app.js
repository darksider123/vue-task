Vue.component('task', {
	props: ['name'],
	template:
	'<li class="list-group-item">\
	{{ name }}\
	<span class="actionTask" style="float:right">\
		<span @click="complete" class="glyphicon glyphicon-ok"></span>\
		<span @click="edit" class="glyphicon glyphicon-pencil"></span>\
		<span @click="remove" class="glyphicon glyphicon-remove"></span>\
	</span>\
	</li>',
	methods: {
		remove: function(index) {
			this.$emit("remove");
		},
		edit: function (index, task) {
			this.$emit("edit");
		},
		complete: function(index) {
			this.$emit('complete');
		}
	}
});

var vm = new Vue({
	el: '#taskApp',
	data: {
		tasks: [
			{name: 'dev monilog', completed: true},
			{name: 'dev monipla', completed: false},
			{name: 'Sprint review', completed: false},
		],
		newTaskName: '',
	},

	methods: {
		addTask: function () {
			this.tasks.push({name: this.newTaskName, completed: false});
			this.newTaskName = '';
		},
		removeTask: function (index) {
			this.tasks.splice(index, 1);
		},
		editTask: function (index, task) {
			this.tasks.splice(index, 1);
			this.newTaskName = task.name;
			this.$refs.newTask.focus();
		},
		setTaskComplete: function (index) {
			var targetTask = this.tasks[index];
			console.log('aaa ' + targetTask.completed);
			targetTask.completed = true;
			this.tasks[index] = targetTask;
		},
		getItemClass: function (task) {
			return task.completed ? 'completed' : 'notCompleted';
		}
	}
});