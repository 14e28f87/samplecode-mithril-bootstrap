import m from 'mithril';

import Modal from './modal-wapper.js';

export default class SELF {

	private modal_return: any;

	public async showModal(): Promise<boolean>{

		return new Promise(

			(resolve)=>{
			
				const modal = {

					view: ()=>{
						let self: any;
						return self = (
							<Modal
								class="modal fade"
								tabindex="-1"
								role="dialog"
								backdrop={ true }
								keyboard={ true }
								onHidde={
									(sender:any)=>{
										resolve(false);
									}
								}
								onHidden={
									(sender:any)=>{
										window.layout.state.portal.splice( window.layout.state.portal.indexOf( modal ), 1);
										m.redraw();
									}
								}
							>
								<div class="modal-dialog" role="document">
									<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title">Hello World!</h5>
											<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
										</div>
										<div class="modal-body">
											<p>こんにちは</p>
											
											
										</div>
										<div class="modal-footer">
											<button
												type="button"
												class="btn btn-secondary"
												data-bs-dismiss="modal"
												onclick={ (event:Event)=>{ resolve(false); } }
											>
												Close
											</button>
											<button
												type="button"
												class="btn btn-primary"
												onclick={ (event:Event)=>{ resolve(true); self.state.hide(); } }
											>
												OK
											</button>
										</div>
									</div>
								</div>
							</Modal>
						);
					}
				};

				window.layout.state.portal.push( modal );
			}

		)

	}

	public view(vnode: m.Vnode){

		return (
			<main class="container">
				<h1>Mithril + Bootstrap Modal</h1>
				
				<button
					type="button"
					class="btn btn-primary"
					onclick={
						async ()=>{
							this.modal_return = await this.showModal();
						}
					}
				>
					showModal
				</button>
				<div><pre>modal return: { JSON.stringify( this.modal_return , null, 4 ) }</pre></div>
						
			</main>
		);
	}

}

