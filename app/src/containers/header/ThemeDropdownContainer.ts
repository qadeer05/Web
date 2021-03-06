import { IStoreState } from '../../types';
import {
	default as ThemeDropdownComponent,
	IThemeDropdownComponentProps
} from '../../components/header/ThemeDropdownComponent';
import { connect, Dispatch } from 'react-redux';
import { Action } from 'redux';
import { actions } from '../../actions';

export function mapStateToProps({ meta }: IStoreState) {
	return {
		selectedTheme: meta.theme
	} as IThemeDropdownComponentProps;
}

export function mapDispatchToProps(dispatch: Dispatch<Action>): Partial<IThemeDropdownComponentProps> {
	return {
		select: theme => dispatch(actions.selectTheme(theme))
	};
}

export default connect<IThemeDropdownComponentProps>(mapStateToProps, mapDispatchToProps)(ThemeDropdownComponent);
