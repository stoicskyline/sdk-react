"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dehumanize_1 = require("./dehumanize");
const DELIMITER = '-';
const REGEX_SUFFIX_INDEX = /\b\d+$/;
exports.generateIndexedName = ({ existing = [], name }) => {
    const safeName = dehumanize_1.dehumanize(name, DELIMITER);
    if (!existing.includes(safeName)) {
        return safeName;
    }
    const indices = [];
    existing.forEach(str => {
        const matches = str.match(REGEX_SUFFIX_INDEX);
        if (matches) {
            const number = parseInt(matches[0]);
            if (!isNaN(number)) {
                indices.push(number);
            }
        }
    });
    const max = Math.max(...indices);
    return `${safeName}${DELIMITER}${max + 1}`;
};
