/* generated by Svelte vX.Y.Z */
import { SvelteComponent as SvelteComponent_1, init, mount_component, noop, safe_not_equal } from "svelte/internal";

function create_fragment(ctx) {
	var current;

	var nested = new ctx.Nested({ props: { foo: [1, 2, 3] } });

	return {
		c() {
			nested.$$.fragment.c();
		},

		m(target, anchor) {
			mount_component(nested, target, anchor);
		},

		p: noop,

		i(local) {
			if (current) return;
			nested.$$.fragment.i(local);

			current = true;
		},

		o(local) {
			nested.$$.fragment.o(local);
			current = false;
		},

		d(detach) {
			nested.$destroy(detach);
		}
	};
}

function instance($$self) {
	const Nested = window.Nested;

	return { Nested };
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal);
	}
}

export default SvelteComponent;