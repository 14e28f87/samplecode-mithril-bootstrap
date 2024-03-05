import m from 'mithril';

export default class implements m.Component<any> {

	private portal  : Array<any> = [];

	oninit(vnode: m.Vnode<any>){
		window.layout = vnode;
	}

	public view(vnode: m.Vnode<any>){

		return (
			[
				// メイン コンテンツ
				<div class="L-main">
					{ vnode.children }
				</div>
			,
				// Portal (ポータル)
				<div class="L-portal">
					{
						this.portal.map(
							(component)=>{
								return (
									<div
										oncreate={
											(vnode)=>{
												m.mount(vnode.dom, component);
											}
										}
										onremove={
											(vnode)=>{
												m.mount(vnode.dom, null)
											}
										}
									>
									</div>
								)
							}
						)
					}
				</div>

			]

		);
	}
}