import m from 'mithril';

import Layout from './layout.js';

import PageModal from './page-modal.js';

const handleOnmatch = (args: {}, requestedPath: string, route?: string )=>{
	window.requestAnimationFrame(()=>{
		window.scrollTo(0, 0);		// ページ切り替え時 ページトップ(上部)へスクロールしておく
	});
	return;
};

m.route(document.body, '/', {

	'/'	 : { onmatch: handleOnmatch, render: ()=>{ return <Layout><PageModal /></Layout>; } } ,

});


