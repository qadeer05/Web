import * as React from 'react';
import { SYNC_NAME } from '../../types';
// @ts-ignore
import { Dropdown, Icon, NavItem } from 'react-materialize';
import UploadNotepadsComponent from './UploadNotepadsComponent/UploadNotepadsComponent';

export default class NotepadDropdownComponent extends React.Component {
	render() {
		return (
			<li>
				<Dropdown trigger={
					<ul>
						<NavItem>
							<Icon left={true}>collections_bookmark</Icon> Notepads <Icon right={true}>arrow_drop_down</Icon>
						</NavItem>
					</ul>
				}>
					<NavItem href="#!"><Icon left={true}>add</Icon> New</NavItem>
					<NavItem href="#!"><Icon left={true}>cloud_download</Icon> Open ({SYNC_NAME})</NavItem>
					<UploadNotepadsComponent />
					<NavItem href="#!"><Icon left={true}>file_download</Icon> Export All</NavItem>

					{/* User's notepads from here */}
					<NavItem divider={true} />
				</Dropdown>
			</li>
		);
	}
}
