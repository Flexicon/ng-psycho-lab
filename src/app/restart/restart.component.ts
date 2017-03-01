import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-restart',
	template: 'Restarting...',
	styles: []
})
export class RestartComponent implements OnInit, OnDestroy {
	private id: number;
	private sub: any;

	constructor(private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id'];
			this.router.navigate(['/game/' + this.id]);
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

}
