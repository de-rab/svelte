// source: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
const lookup = {
	accept: { appliesTo: ['form', 'input'] },
	'accept-charset': { propertyName: 'acceptCharset', appliesTo: ['form'] },
	accesskey: { propertyName: 'accessKey' },
	action: { appliesTo: ['form'] },
	align: {
		appliesTo: [
			'applet',
			'caption',
			'col',
			'colgroup',
			'hr',
			'iframe',
			'img',
			'table',
			'tbody',
			'td',
			'tfoot',
			'th',
			'thead',
			'tr'
		]
	},
	allowfullscreen: { propertyName: 'allowFullscreen', appliesTo: ['iframe'] },
	alt: { appliesTo: ['applet', 'area', 'img', 'input'] },
	async: { appliesTo: ['script'] },
	autocomplete: { appliesTo: ['form', 'input'] },
	autofocus: { appliesTo: ['button', 'input', 'keygen', 'select', 'textarea'] },
	autoplay: { appliesTo: ['audio', 'video'] },
	autosave: { appliesTo: ['input'] },
	bgcolor: {
		propertyName: 'bgColor',
		appliesTo: [
			'body',
			'col',
			'colgroup',
			'marquee',
			'table',
			'tbody',
			'tfoot',
			'td',
			'th',
			'tr'
		]
	},
	border: { appliesTo: ['img', 'object', 'table'] },
	buffered: { appliesTo: ['audio', 'video'] },
	challenge: { appliesTo: ['keygen'] },
	charset: { appliesTo: ['meta', 'script'] },
	checked: { appliesTo: ['command', 'input'] },
	cite: { appliesTo: ['blockquote', 'del', 'ins', 'q'] },
	class: { propertyName: 'className' },
	code: { appliesTo: ['applet'] },
	codebase: { propertyName: 'codeBase', appliesTo: ['applet'] },
	color: { appliesTo: ['basefont', 'font', 'hr'] },
	cols: { appliesTo: ['textarea'] },
	colspan: { propertyName: 'colSpan', appliesTo: ['td', 'th'] },
	content: { appliesTo: ['meta'] },
	contenteditable: { propertyName: 'contentEditable' },
	contextmenu: {},
	controls: { appliesTo: ['audio', 'video'] },
	coords: { appliesTo: ['area'] },
	data: { appliesTo: ['object'] },
	datetime: { propertyName: 'dateTime', appliesTo: ['del', 'ins', 'time'] },
	default: { appliesTo: ['track'] },
	defer: { appliesTo: ['script'] },
	dir: {},
	dirname: { propertyName: 'dirName', appliesTo: ['input', 'textarea'] },
	disabled: {
		appliesTo: [
			'button',
			'command',
			'fieldset',
			'input',
			'keygen',
			'optgroup',
			'option',
			'select',
			'textarea'
		]
	},
	download: { appliesTo: ['a', 'area'] },
	draggable: {},
	dropzone: {},
	enctype: { appliesTo: ['form'] },
	for: { propertyName: 'htmlFor', appliesTo: ['label', 'output'] },
	form: {
		appliesTo: [
			'button',
			'fieldset',
			'input',
			'keygen',
			'label',
			'meter',
			'object',
			'output',
			'progress',
			'select',
			'textarea'
		]
	},
	formaction: { appliesTo: ['input', 'button'] },
	headers: { appliesTo: ['td', 'th'] },
	height: {
		appliesTo: ['canvas', 'embed', 'iframe', 'img', 'input', 'object', 'video']
	},
	hidden: {},
	high: { appliesTo: ['meter'] },
	href: { appliesTo: ['a', 'area', 'base', 'link'] },
	hreflang: { appliesTo: ['a', 'area', 'link'] },
	'http-equiv': { propertyName: 'httpEquiv', appliesTo: ['meta'] },
	icon: { appliesTo: ['command'] },
	id: {},
	ismap: { propertyName: 'isMap', appliesTo: ['img'] },
	itemprop: {},
	keytype: { appliesTo: ['keygen'] },
	kind: { appliesTo: ['track'] },
	label: { appliesTo: ['track'] },
	lang: {},
	language: { appliesTo: ['script'] },
	loop: { appliesTo: ['audio', 'bgsound', 'marquee', 'video'] },
	low: { appliesTo: ['meter'] },
	manifest: { appliesTo: ['html'] },
	max: { appliesTo: ['input', 'meter', 'progress'] },
	maxlength: { propertyName: 'maxLength', appliesTo: ['input', 'textarea'] },
	media: { appliesTo: ['a', 'area', 'link', 'source', 'style'] },
	method: { appliesTo: ['form'] },
	min: { appliesTo: ['input', 'meter'] },
	multiple: { appliesTo: ['input', 'select'] },
	muted: { appliesTo: ['video'] },
	name: {
		appliesTo: [
			'button',
			'form',
			'fieldset',
			'iframe',
			'input',
			'keygen',
			'object',
			'output',
			'select',
			'textarea',
			'map',
			'meta',
			'param'
		]
	},
	novalidate: { propertyName: 'noValidate', appliesTo: ['form'] },
	open: { appliesTo: ['details'] },
	optimum: { appliesTo: ['meter'] },
	pattern: { appliesTo: ['input'] },
	ping: { appliesTo: ['a', 'area'] },
	placeholder: { appliesTo: ['input', 'textarea'] },
	poster: { appliesTo: ['video'] },
	preload: { appliesTo: ['audio', 'video'] },
	radiogroup: { appliesTo: ['command'] },
	readonly: { propertyName: 'readOnly', appliesTo: ['input', 'textarea'] },
	rel: { appliesTo: ['a', 'area', 'link'] },
	required: { appliesTo: ['input', 'select', 'textarea'] },
	reversed: { appliesTo: ['ol'] },
	rows: { appliesTo: ['textarea'] },
	rowspan: { propertyName: 'rowSpan', appliesTo: ['td', 'th'] },
	sandbox: { appliesTo: ['iframe'] },
	scope: { appliesTo: ['th'] },
	scoped: { appliesTo: ['style'] },
	seamless: { appliesTo: ['iframe'] },
	selected: { appliesTo: ['option'] },
	shape: { appliesTo: ['a', 'area'] },
	size: { appliesTo: ['input', 'select'] },
	sizes: { appliesTo: ['link', 'img', 'source'] },
	span: { appliesTo: ['col', 'colgroup'] },
	spellcheck: {},
	src: {
		appliesTo: [
			'audio',
			'embed',
			'iframe',
			'img',
			'input',
			'script',
			'source',
			'track',
			'video'
		]
	},
	srcdoc: { appliesTo: ['iframe'] },
	srclang: { appliesTo: ['track'] },
	srcset: { appliesTo: ['img'] },
	start: { appliesTo: ['ol'] },
	step: { appliesTo: ['input'] },
	style: { propertyName: 'style.cssText' },
	summary: { appliesTo: ['table'] },
	tabindex: { propertyName: 'tabIndex' },
	target: { appliesTo: ['a', 'area', 'base', 'form'] },
	title: {},
	type: {
		appliesTo: [
			'button',
			'input',
			'command',
			'embed',
			'object',
			'script',
			'source',
			'style',
			'menu'
		]
	},
	usemap: { propertyName: 'useMap', appliesTo: ['img', 'input', 'object'] },
	value: {
		appliesTo: [
			'button',
			'option',
			'input',
			'li',
			'meter',
			'progress',
			'param',
			'select',
			'textarea'
		]
	},
	width: {
		appliesTo: ['canvas', 'embed', 'iframe', 'img', 'input', 'object', 'video']
	},
	wrap: { appliesTo: ['textarea'] }
};

Object.keys(lookup).forEach(name => {
	const metadata = lookup[name];
	if (!metadata.propertyName) metadata.propertyName = name;
});

export default lookup;
