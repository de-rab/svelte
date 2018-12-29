/* generated by Svelte vX.Y.Z */
import { SvelteComponent as SvelteComponent_1, append, createComment, createElement, createText, destroyEach, detachNode, flush, init, insert, run, safe_not_equal, setData } from "svelte/internal";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.node = list[i];
	return child_ctx;
}

// (1:0) {#each createElement as node}
function create_each_block(component, ctx) {
	var span, text_value = ctx.node, text;

	return {
		c() {
			span = createElement("span");
			text = createText(text_value);
		},

		m(target, anchor) {
			insert(target, span, anchor);
			append(span, text);
		},

		p(changed, ctx) {
			if ((changed.createElement) && text_value !== (text_value = ctx.node)) {
				setData(text, text_value);
			}
		},

		d(detach) {
			if (detach) {
				detachNode(span);
			}
		}
	};
}

function create_fragment(component, ctx) {
	var each_anchor, current;

	var each_value = ctx.createElement;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(component, get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_anchor = createComment();
		},

		m(target, anchor) {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, each_anchor, anchor);
			current = true;
		},

		p(changed, ctx) {
			if (changed.createElement) {
				each_value = ctx.createElement;

				for (var i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(component, child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_anchor.parentNode, each_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}
		},

		i(target, anchor) {
			if (current) return;
			this.m(target, anchor);
		},

		o: run,

		d(detach) {
			destroyEach(each_blocks, detach);

			if (detach) {
				detachNode(each_anchor);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { createElement } = $$props;

	$$self.$$.set = $$props => {
		if ('createElement' in $$props) $$invalidate('createElement', createElement = $$props.createElement);
	};

	return { createElement };
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal);
	}

	get createElement() {
		return this.$$.ctx.createElement;
	}

	set createElement(createElement) {
		this.$set({ createElement });
		flush();
	}
}

export default SvelteComponent;