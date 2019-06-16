/* generated by Svelte vX.Y.Z */
import {
	SvelteComponent,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal
} from "svelte/internal";

function create_fragment(ctx) {
	var a, link_action;

	return {
		c() {
			a = element("a");
			a.textContent = "Test";
			attr(a, "href", "#");
		},

		m(target, anchor) {
			insert(target, a, anchor);
			link_action = link.call(null, a) || {};
		},

		p: noop,
		i: noop,
		o: noop,

		d(detaching) {
			if (detaching) {
				detach(a);
			}

			if (link_action && typeof link_action.destroy === 'function') link_action.destroy();
		}
	};
}

function link(node) {
  function onClick(event) {
    event.preventDefault();
    history.pushState(null, null, event.target.href);
  }

  node.addEventListener('click', onClick);

  return {
    destroy() {
      node.removeEventListener('click', onClick);
    }
  }
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, []);
	}
}

export default Component;