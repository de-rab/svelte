/* generated by Svelte vX.Y.Z */
import {
	SvelteComponentDev,
	add_location,
	append,
	destroy_each,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_data,
	space,
	text
} from "svelte/internal";

const file = undefined;

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.thing = list[i];
	return child_ctx;
}

// (6:0) {#each things as thing}
function create_each_block(ctx) {
	var span, t0_value = ctx.thing.name, t0, t1;

	return {
		c: function create() {
			span = element("span");
			t0 = text(t0_value);
			t1 = space();

			{
				const { foo } = ctx;
				console.log({ foo });
				debugger;
			}
			add_location(span, file, 6, 1, 82);
		},

		m: function mount(target, anchor) {
			insert(target, span, anchor);
			append(span, t0);
			insert(target, t1, anchor);
		},

		p: function update(changed, ctx) {
			if ((changed.things) && t0_value !== (t0_value = ctx.thing.name)) {
				set_data(t0, t0_value);
			}

			if (changed.foo) {
				const { foo } = ctx;
				console.log({ foo });
				debugger;
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(span);
				detach(t1);
			}
		}
	};
}

function create_fragment(ctx) {
	var t0, p, t1, t2;

	var each_value = ctx.things;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c: function create() {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t0 = space();
			p = element("p");
			t1 = text("foo: ");
			t2 = text(ctx.foo);
			add_location(p, file, 10, 0, 131);
		},

		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},

		m: function mount(target, anchor) {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, t0, anchor);
			insert(target, p, anchor);
			append(p, t1);
			append(p, t2);
		},

		p: function update(changed, ctx) {
			if (changed.things) {
				each_value = ctx.things;

				for (var i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(t0.parentNode, t0);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}

			if (changed.foo) {
				set_data(t2, ctx.foo);
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			destroy_each(each_blocks, detaching);

			if (detaching) {
				detach(t0);
				detach(p);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { things, foo } = $$props;

	const writable_props = ['things', 'foo'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Component> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ('things' in $$props) $$invalidate('things', things = $$props.things);
		if ('foo' in $$props) $$invalidate('foo', foo = $$props.foo);
	};

	return { things, foo };
}

class Component extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["things", "foo"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.things === undefined && !('things' in props)) {
			console.warn("<Component> was created without expected prop 'things'");
		}
		if (ctx.foo === undefined && !('foo' in props)) {
			console.warn("<Component> was created without expected prop 'foo'");
		}
	}

	get things() {
		throw new Error("<Component>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set things(value) {
		throw new Error("<Component>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get foo() {
		throw new Error("<Component>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set foo(value) {
		throw new Error("<Component>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Component;