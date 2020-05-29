"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultsFavoringLast = (items, qualifyValue = (v) => !!v) => {
    const entries = [].concat(...items.map(Object.entries));
    return entries.reduce((previous, [key, value]) => {
        previous[key] = qualifyValue(value) ? value : previous[key];
        return previous;
    }, {});
};
