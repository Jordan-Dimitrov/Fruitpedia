import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as service from '../api/data.js';

{}
const detailsTemplate = (fruit, onDelete) => html`
`;

export async function detailsPage(ctx) {
	const id = ctx.params.id;
	const fruit = await service.getById(id);
	if (ctx.user) {
		fruit.isOwner = ctx.user._id === fruit._ownerId;
	}
	ctx.render(detailsTemplate(fruit, onDelete));

	async function onDelete() {
		const choice = confirm('Are you sure you want to delete this fruit?');
		if (choice) {
			await service.deleteById(id);
			ctx.page.redirect('/');
		}
	}
}
