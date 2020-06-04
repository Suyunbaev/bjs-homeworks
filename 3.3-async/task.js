class AlarmClock {
	constructor () {
		this.init()
	}
	
	init() {
		this.alarmCollection = [];
		this.timerId = null;
	}
	
	addClock(time, callback, id) {

		if (id == undefined) {
			return console.error('ID будульника не передан.');
		}
		 
		if (this.alarmCollection.length > 0) {
			if (this.alarmCollection.find(item => item.id == id)) {
				return console.error('Будильник на это время уже существует.');
			}
		}		
						
		this.alarmCollection.push({id: id, time: time, callback: callback});
		return this.alarmCollection;
	}
	
	removeClock(id) {
		let item = this.alarmCollection.find(item => item.id === id);
		if (item) {
			let idx = this.alarmCollection.indexOf(item);
			this.alarmCollection.splice(idx, 1);
		}
		
	}
	
	getCurrentFormattedTime() { 
		let time = new Date();
		return (time.getHours() < 10 ? '0' : '') + time.getHours() + ':' + (time.getMinutes() < 10 ? '0' : '') + time.getMinutes();
	}
	
	start() {
		const checkClock = () => {
			this.alarmCollection.forEach(item => {
				if (item.time == this.getCurrentFormattedTime()) {
					item.callback();
				}
			});			
		}
		
		if (this.timerId === null) {
			this.timerId = setInterval(checkClock, 5000);	
		}
	}
	
	stop() {
		if (this.timerId) {
			clearInterval(this.timerId);
			this.timerId = null; 
		}
	}
	
	printAlarms() {
		console.log('Количество будильников: ' + this.alarmCollection.length)
		this.alarmCollection.forEach((item) => {
			console.log('Будильник ' + item.id + ' прозвенит в  ' + item.time);
		});	
	}
	
	clearAlarms() {
		this.stop();
		this.init();
	}
}
let phoneAlarm = new AlarmClock();
phoneAlarm.addClock('21:00', () => console.log('Скоро спать'), 1);

phoneAlarm.addClock('21:01', () => { console.log('Пора готовиться ко сну!'); phoneAlarm.removeClock(2)}, 2);

phoneAlarm.addClock('21:01', () => console.log('Иди умываться'));

phoneAlarm.addClock('21:02', () => { 
	console.log('Иди спать, завтра рано на работу');
	phoneAlarm.clearAlarms();
	phoneAlarm.printAlarms();
	}, 3);

phoneAlarm.addClock('21:05', () => console.log('Иди спать, завтра рано на работу'), 1);
phoneAlarm.addClock('21:23', () => console.log('Иди умываться'), 1);
phoneAlarm.printAlarms();

phoneAlarm.start();
