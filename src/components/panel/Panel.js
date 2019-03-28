import React, { Fragment } from 'react';

import Clientes from './Clientes';

const Panel = (props) => {

		return(
			<Fragment>
				<h2 className="text-center">Panel</h2>
				<Clientes />
			</Fragment>
		);
}

export default Panel;
