import m from 'mithril';

declare global {
	interface Window {
		layout: m.Vnode<any>;
	}
}


