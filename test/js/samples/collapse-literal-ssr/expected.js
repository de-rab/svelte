/* generated by Svelte vX.Y.Z */
import { add_attribute, create_ssr_component, escape } from "svelte/internal";

const const1 = 1;
const const2 = 'const2';

function foo() {
	return '';
}

const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return ` <div class="class1 class2" style="color:red;">-</div>  <div${add_attribute("class", const1, 0)}>-</div> <div${add_attribute("class", const1, 0)}>-</div>  <div class="${"class1 " + escape('class2', true)}">-</div> <div class="${"class1 " + escape(const2, true)}">-</div> <div class="${"class1 " + escape(const2, true)}"${add_attribute("style", foo(), 0)}>-</div>`;
});

export default Component;