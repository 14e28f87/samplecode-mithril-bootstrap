import m from 'mithril';

import classnames from 'classnames';

import * as bootstrap from 'bootstrap'

/**
 * Modal Wapper
 *
 *
 */
export default class SELF implements m.Component<any> {

	/**
	 * モーダルの背景をつけるかを設定します
	 */
	public backdrop: boolean|'static'  = true;

	/**
	 * ESC(エスケープキー) によってモーダルを閉じるかを設定します
	 */
	public keyboard: boolean = true;

	/**
	 * モーダルが起動したときに, フォーカスをモーダルに移すかを設定します
	 */
	public focus: boolean = true;

	/**
	 * モーダルが起動したときに表示するかを指定します
	 */
	public isShown: boolean = true;

	// ----
	//events

	/**
	 * show インスタンスメソッドが呼ばれてすぐに発生します。
	 */
	public onShow = ( (sender:any)=>{} );

	/**
	 * modal がユーザに見えるようになったときに発生します。
	 */
	public onShown = ( (sender:any)=>{} );

	/**
	 * hide インスタンスメソッドが呼ばれてすぐに発生します。
	 */
	public onHide = ( (sender:any)=>{ /*dummy*/ } );

	/**
	 * modal がユーザから見えなくなった直後に発生します。
	 */
	public onHidden = ( (sender:any)=>{ /*dummy*/ } );

	// ----

	/**
	 * modal
	 */
	private modal? : bootstrap.Modal;

	// ----

	private __props:any;

	/**
	 * 
	 */
	public oncreate(vnode: m.Vnode){

		const options = {
			'backdrop': this.backdrop,
			'keyboard': this.keyboard,
		//	'focus': this.focus,
			'show': this.isShown
		};

		vnode.dom.addEventListener('show.bs.modal', this.onShow);
		vnode.dom.addEventListener('shown.bs.modal', this.onShown);
		vnode.dom.addEventListener('hide.bs.modal', this.onHide);
		vnode.dom.addEventListener('hidden.bs.modal', this.onHidden);

		this.modal = new bootstrap.Modal(vnode.dom, options)

		if(this.isShown){
			this.modal.show();
		}

	}

	/**
	 * 
	 */
	public onupdate(vnode: m.Vnode){

	}

	/**
	 * 
	 */
	public onremove(vnode: m.Vnode){
		this.dispose();
	}

	/**
	 * 表示する
	 */
	public show(){

		if(! this.modal ){
			this.isShown = true;
			return;
		}

		this.modal.show();

	}

	/**
	 * 非表示にする
	 */
	public hide(){
		this.modal?.hide();
	}

	/**
	 * 表示してる場合は非表示に、非表示の場合は表示する
	 */
	public toggle(){
		this.modal?.toggle();
	}


	/**
	 * モーダルの位置を再調整します
	 */
	public handleUpdate(){
		this.modal?.handleUpdate();
	}

	/**
	 * Modal を廃棄します
	 *
	 * 
	 */
	public dispose(){
		this.modal?.dispose();
		this.modal = undefined;
	}


	public view(vnode: m.Vnode){

		const {
			class: className,
			...htmlAttrs
		} = vnode.attrs;

		const classes = classnames(
			'modal',
			className
		);

		return (
			<div class={ classes } role="dialog" { ...htmlAttrs } >
				{ vnode.children }
			</div>
		);

	}

}

