import { Observable } from 'rxjs';

let circle = document.getElementById('circle');

let source = Observable
	.fromEvent(document, 'mousemove')
	.map((e : MouseEvent) => ({
		x: e.clientX,
		y: e.clientY
	}))
	.filter(value => value.x < 500)
	.delay(300);

function onNext({x , y}) {
	circle.style.left = x;
	circle.style.top = y;
}

source.subscribe(
	onNext,
	e => console.log(`Error: ${e}`),
	() => console.log(`...Completed...`)
);
