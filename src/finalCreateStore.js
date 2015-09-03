if (typeof __DEVTOOLS__ !== 'undefined' && __DEVTOOLS__ === true) {
	const { devTools } = require('redux-devtools');
	finalCreateStore = compose(
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		),
		devTools(),
		createStore
	);	
} else if((typeof __DEVTOOLS__ === 'undefined' || __DEVTOOLS__ === false) && 
		(typeof __DEVELOPMENT__ !== 'undefined' || __DEVELOPMENT__ === true)){
	finalCreateStore = compose(
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		),
		createStore
	);
} else {
	finalCreateStore = compose(
		applyMiddleware(
			thunkMiddleware
		),
		createStore
	);
}