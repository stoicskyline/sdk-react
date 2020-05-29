"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useInterval(callback, delay) {
    const savedCallback = react_1.useRef(() => {
    });
    react_1.useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    react_1.useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
        return undefined;
    }, [delay]);
}
exports.useInterval = useInterval;
