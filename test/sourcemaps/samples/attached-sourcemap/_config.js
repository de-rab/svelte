import MagicString from 'magic-string';

let indent_size = 4;
let comment_multi = true;
function get_processor(tag_name, search, replace) {
	return {
		[tag_name]: ({ content, filename }) => {
			let code = content.slice();
			const ms = new MagicString(code);

			const idx = ms.original.indexOf(search);
			if (idx == -1) throw new Error('search not found in src');
			ms.overwrite(idx, idx + search.length, replace, { storeName: true });

			// change line + column
			const indent = Array.from({ length: indent_size }).join(' ');
			ms.prependLeft(idx, '\n'+indent);

			const map_opts = { source: filename, hires: true, includeContent: false };
			const map = ms.generateMap(map_opts);
			const attach_line = (tag_name == 'style' || comment_multi)
				? `\n/*# sourceMappingURL=${map.toUrl()} */`
				: `\n//# sourceMappingURL=${map.toUrl()}` // only in script
			;
			code = ms.toString() + attach_line;

			indent_size += 2;
			if (tag_name == 'script') comment_multi = !comment_multi;
			return { code };
		}
	};
}

export default {
	preprocess: [

		get_processor('script', 'replace_me_script', 'done_replace_script_1'),
		get_processor('script', 'done_replace_script_1', 'done_replace_script_2'),

		get_processor('style', '.replace_me_style', '.done_replace_style_1'),
		get_processor('style', '.done_replace_style_1', '.done_replace_style_2')

	]
};
