import * as React from 'react';
import { Dropdown, Icon, NavItem } from 'react-materialize';
import { ThemeName } from '../../types/Themes';

export interface IThemeDropdownComponentProps {
	selectedTheme: ThemeName;
	select?: (theme: ThemeName) => void;
}

export default class ThemeDropdownComponent extends React.Component<IThemeDropdownComponentProps> {
	private readonly themes: ThemeName[] = [
		'Classic',
		'Solarized'
	];

	render() {
		const { selectedTheme, select } = this.props;
		if (!select) return null;

		return (
			<li>
				<Dropdown trigger={
					<ul>
						<NavItem href="#!">
							<Icon left={true}>format_paint</Icon> Themes <Icon right={true}>arrow_drop_down</Icon>
						</NavItem>
					</ul>
				}>
					{
						this.themes.map(theme =>
							<NavItem key={theme} href="#!" onClick={() => select(theme)}>
								{theme} {selectedTheme === theme && <Icon left={true}>done</Icon>}
							</NavItem>
						)
					}
				</Dropdown>
			</li>
		);
	}
}
