import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { NavigatorStack1 } from '../components/navigationStack';

const router = NavigatorStack1.router;
const mainNavAction = router.getActionForPathAndParams('Main');
const initialNavState = router.getStateForAction(mainNavAction);

const NavReducer = (state = initialNavState, action) => {
    return router.getStateForAction(action, state);
};

export default NavReducer;

/*
const router = AppNavigator.router;
const mainNavAction = router.getActionForPathAndParams('Main');
const initialNavState = router.getStateForAction(mainNavAction);
*/