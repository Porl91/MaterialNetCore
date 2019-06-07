import { AppBar, createStyles, IconButton, Theme, Toolbar, Typography, WithStyles, withStyles } from '@material-ui/core';
import { default as MenuIcon } from '@material-ui/icons/Menu';
import * as React from 'react';
import classNames = require('classnames');

const drawerWidth = 240;

const styles = (theme: Theme) => createStyles({
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	hide: {
		display: 'none',
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 20,
	},
});

export interface TopBarProps extends WithStyles<typeof styles> {
	sidebarOpen?: boolean;
	onSidebarOpen: () => void;
}

class TopBar extends React.PureComponent<TopBarProps> {
	constructor(props: TopBarProps) {
		super(props);
	}

	onSidebarOpen = () => this.props.onSidebarOpen();

	render() {
		const { classes, sidebarOpen } = this.props;

		return (
			<AppBar
				position="fixed"
				className={classNames(classes.appBar, {
					[classes.appBarShift]: sidebarOpen
				})}
			>
				<Toolbar disableGutters={!sidebarOpen}>
					<IconButton
						aria-label="Open drawer"
						onClick={this.onSidebarOpen}
						className={classNames(classes.menuButton, {
							[classes.hide]: sidebarOpen
						})}
					>
						<MenuIcon />
					</IconButton>
					<Typography component="h1" variant="h6" color="inherit" noWrap>Dashboard</Typography>
				</Toolbar>
			</AppBar>
		);
	}
}

export default withStyles(styles, { withTheme: true })(TopBar);