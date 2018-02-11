function noop() {}

function assign(target) {
	var k,
		source,
		i = 1,
		len = arguments.length;
	for (; i < len; i++) {
		source = arguments[i];
		for (k in source) target[k] = source[k];
	}

	return target;
}

function appendNode(node, target) {
	target.appendChild(node);
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function createElement(name) {
	return document.createElement(name);
}

function createText(data) {
	return document.createTextNode(data);
}

function createComment() {
	return document.createComment('');
}

function blankObject() {
	return Object.create(null);
}

function destroy(detach) {
	this.destroy = noop;
	this.fire('destroy');
	this.set = this.get = noop;

	if (detach !== false) this._fragment.u();
	this._fragment.d();
	this._fragment = this._state = null;
}

function differs(a, b) {
	return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

function dispatchObservers(component, group, changed, newState, oldState) {
	for (var key in group) {
		if (!changed[key]) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		var callbacks = group[key];
		if (!callbacks) continue;

		for (var i = 0; i < callbacks.length; i += 1) {
			var callback = callbacks[i];
			if (callback.__calling) continue;

			callback.__calling = true;
			callback.call(component, newValue, oldValue);
			callback.__calling = false;
		}
	}
}

function fire(eventName, data) {
	var handlers =
		eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
}

function get(key) {
	return key ? this._state[key] : this._state;
}

function init(component, options) {
	component._observers = { pre: blankObject(), post: blankObject() };
	component._handlers = blankObject();
	component._bind = options._bind;
	component._differs = differs;

	component.options = options;
	component.root = options.root || component;
	component.store = component.root.store || options.store;
}

function observe(key, callback, options) {
	var group = options && options.defer
		? this._observers.post
		: this._observers.pre;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
}

function on(eventName, handler) {
	if (eventName === 'teardown') return this.on('destroy', handler);

	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
}

function set(newState) {
	this._set(assign({}, newState));
	if (this.root._lock) return;
	this.root._lock = true;
	callAll(this.root._beforecreate);
	callAll(this.root._oncreate);
	callAll(this.root._aftercreate);
	this.root._lock = false;
}

function _set(newState) {
	var oldState = this._state,
		changed = {},
		dirty = false;

	for (var key in newState) {
		if (this._differs(newState[key], oldState[key])) changed[key] = dirty = true;
	}
	if (!dirty) return;

	this._state = assign({}, oldState, newState);
	this._recompute(changed, this._state);
	if (this._bind) this._bind(changed, this._state);

	if (this._fragment) {
		dispatchObservers(this, this._observers.pre, changed, this._state, oldState);
		this._fragment.p(changed, this._state);
		dispatchObservers(this, this._observers.post, changed, this._state, oldState);
	}
}

function callAll(fns) {
	while (fns && fns.length) fns.shift()();
}

function _mount(target, anchor) {
	this._fragment.m(target, anchor);
}

function _unmount() {
	if (this._fragment) this._fragment.u();
}

var proto = {
	destroy: destroy,
	get: get,
	fire: fire,
	observe: observe,
	on: on,
	set: set,
	teardown: destroy,
	_recompute: noop,
	_set: _set,
	_mount: _mount,
	_unmount: _unmount
};

/* generated by Svelte vX.Y.Z */
function create_main_fragment(state, component) {
	var div, text, p, text_2, text_3, text_4, p_1, text_6, text_8, if_block_4_anchor;

	var if_block = (state.a) && create_if_block(state, component);

	var if_block_1 = (state.b) && create_if_block_1(state, component);

	var if_block_2 = (state.c) && create_if_block_2(state, component);

	var if_block_3 = (state.d) && create_if_block_3(state, component);

	var if_block_4 = (state.e) && create_if_block_4(state, component);

	return {
		c: function create() {
			div = createElement("div");
			if (if_block) if_block.c();
			text = createText("\n\n\t");
			p = createElement("p");
			p.textContent = "this can be used as an anchor";
			text_2 = createText("\n\n\t");
			if (if_block_1) if_block_1.c();
			text_3 = createText("\n\n\t");
			if (if_block_2) if_block_2.c();
			text_4 = createText("\n\n\t");
			p_1 = createElement("p");
			p_1.textContent = "so can this";
			text_6 = createText("\n\n\t");
			if (if_block_3) if_block_3.c();
			text_8 = createText("\n\n");
			if (if_block_4) if_block_4.c();
			if_block_4_anchor = createComment();
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			if (if_block) if_block.m(div, null);
			appendNode(text, div);
			appendNode(p, div);
			appendNode(text_2, div);
			if (if_block_1) if_block_1.m(div, null);
			appendNode(text_3, div);
			if (if_block_2) if_block_2.m(div, null);
			appendNode(text_4, div);
			appendNode(p_1, div);
			appendNode(text_6, div);
			if (if_block_3) if_block_3.m(div, null);
			insertNode(text_8, target, anchor);
			if (if_block_4) if_block_4.m(target, anchor);
			insertNode(if_block_4_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (state.a) {
				if (!if_block) {
					if_block = create_if_block(state, component);
					if_block.c();
					if_block.m(div, text);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}

			if (state.b) {
				if (!if_block_1) {
					if_block_1 = create_if_block_1(state, component);
					if_block_1.c();
					if_block_1.m(div, text_3);
				}
			} else if (if_block_1) {
				if_block_1.u();
				if_block_1.d();
				if_block_1 = null;
			}

			if (state.c) {
				if (!if_block_2) {
					if_block_2 = create_if_block_2(state, component);
					if_block_2.c();
					if_block_2.m(div, text_4);
				}
			} else if (if_block_2) {
				if_block_2.u();
				if_block_2.d();
				if_block_2 = null;
			}

			if (state.d) {
				if (!if_block_3) {
					if_block_3 = create_if_block_3(state, component);
					if_block_3.c();
					if_block_3.m(div, null);
				}
			} else if (if_block_3) {
				if_block_3.u();
				if_block_3.d();
				if_block_3 = null;
			}

			if (state.e) {
				if (!if_block_4) {
					if_block_4 = create_if_block_4(state, component);
					if_block_4.c();
					if_block_4.m(if_block_4_anchor.parentNode, if_block_4_anchor);
				}
			} else if (if_block_4) {
				if_block_4.u();
				if_block_4.d();
				if_block_4 = null;
			}
		},

		u: function unmount() {
			detachNode(div);
			if (if_block) if_block.u();
			if (if_block_1) if_block_1.u();
			if (if_block_2) if_block_2.u();
			if (if_block_3) if_block_3.u();
			detachNode(text_8);
			if (if_block_4) if_block_4.u();
			detachNode(if_block_4_anchor);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
			if (if_block_1) if_block_1.d();
			if (if_block_2) if_block_2.d();
			if (if_block_3) if_block_3.d();
			if (if_block_4) if_block_4.d();
		}
	};
}

// (2:1) {{#if a}}
function create_if_block(state, component) {
	var p;

	return {
		c: function create() {
			p = createElement("p");
			p.textContent = "a";
		},

		m: function mount(target, anchor) {
			insertNode(p, target, anchor);
		},

		u: function unmount() {
			detachNode(p);
		},

		d: noop
	};
}

// (8:1) {{#if b}}
function create_if_block_1(state, component) {
	var p;

	return {
		c: function create() {
			p = createElement("p");
			p.textContent = "b";
		},

		m: function mount(target, anchor) {
			insertNode(p, target, anchor);
		},

		u: function unmount() {
			detachNode(p);
		},

		d: noop
	};
}

// (12:1) {{#if c}}
function create_if_block_2(state, component) {
	var p;

	return {
		c: function create() {
			p = createElement("p");
			p.textContent = "c";
		},

		m: function mount(target, anchor) {
			insertNode(p, target, anchor);
		},

		u: function unmount() {
			detachNode(p);
		},

		d: noop
	};
}

// (18:1) {{#if d}}
function create_if_block_3(state, component) {
	var p;

	return {
		c: function create() {
			p = createElement("p");
			p.textContent = "d";
		},

		m: function mount(target, anchor) {
			insertNode(p, target, anchor);
		},

		u: function unmount() {
			detachNode(p);
		},

		d: noop
	};
}

// (25:0) {{#if e}}
function create_if_block_4(state, component) {
	var p;

	return {
		c: function create() {
			p = createElement("p");
			p.textContent = "e";
		},

		m: function mount(target, anchor) {
			insertNode(p, target, anchor);
		},

		u: function unmount() {
			detachNode(p);
		},

		d: noop
	};
}

function SvelteComponent(options) {
	init(this, options);
	this._state = assign({}, options.data);

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);
	}
}

assign(SvelteComponent.prototype, proto);

export default SvelteComponent;
