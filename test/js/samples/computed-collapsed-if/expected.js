/* generated by Svelte vX.Y.Z */
import { SvelteComponent as SvelteComponent_1, flush, init, noop, safe_not_equal } from "svelte/internal";

function create_fragment(ctx) {
	return {
		c: noop,
		m: noop,
		p: noop,
		i: noop,
		o: noop,
		d: noop
	};
}

function instance($$self, $$props, $$invalidate) {
	let { x } = $$props;

	function a() {
		return x * 2;
	}

	function b() {
		return x * 3;
	}

	$$self.$set = $$props => {
		if ('x' in $$props) $$invalidate('x', x = $$props.x);
	};

	return { x, a, b };
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, ["x", "a", "b"]);
	}

	get x() {
		return this.$$.ctx.x;
	}

	set x(x) {
		this.$set({ x });
		flush();
	}

	get a() {
		return this.$$.ctx.a;
	}

	get b() {
		return this.$$.ctx.b;
	}
}

export default SvelteComponent;