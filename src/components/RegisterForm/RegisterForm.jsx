import React from 'react';

const RegisterForm = ({onRouteChange}) => {
	return (
		<article className="mw5 center w-100 w-50-m mw6 shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10">
			<main className="pa4 black-80">
				<form className="measure">
					<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
						<legend className="f1 fw6 ph0 mh0">Register</legend>
						<div className="mt3">
							<label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
							<input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name"/>
						</div>
						<div className="mt3">
							<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
							<input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address"/>
						</div>
						<div className="mv3">
							<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
							<input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password"/>
						</div>
					</fieldset>
					<div className="">
						<input
							onClick={() => onRouteChange('signin')}
							className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
							type="submit"
							value="Register"
						/>
					</div>
					
				</form>
			</main>
		</article>
	);
};

export default RegisterForm;
