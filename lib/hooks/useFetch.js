"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
exports.useFetch = (fetchPromise, reducer, initialState, deps) => {
    const [state, dispatch] = react_1.useReducer(reducer, initialState);
    const isMounted = react_1.useRef(false);
    react_1.useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);
    react_1.useEffect(() => {
        fetch();
    }, deps);
    async function fetch() {
        if (!isMounted.current)
            return;
        dispatch({ type: 'INIT' });
        try {
            const result = await fetchPromise;
            if (isMounted.current)
                dispatch({ type: 'SUCCESS', payload: result });
        }
        catch (e) {
            if (isMounted.current)
                dispatch({ type: 'ERROR', payload: e });
        }
    }
    return [state, fetch];
};
