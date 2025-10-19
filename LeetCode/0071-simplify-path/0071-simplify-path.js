/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    const stack = [];

    const simplePath = path.split('/').filter(Boolean);

    for (const route of simplePath) {
        if (route === '.') {
            continue;
        } else if (route === '..') {
            stack.pop();
        } else {
            stack.push(route);
        }
    }

    return '/' + stack.join('/');
};