/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */



// Definition for a _Node.
function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};

/**
 * @param {_Node} node
 * @return {_Node}
 */
const cloneGraph = function (node) {
    if (!node) return null;

    function dfs(node, visited) {
        if (visited.has(node)) return visited.get(node);

        const current = new Node(node.val);
        visited.set(node, current);

        node.neighbors.forEach((neighbor) => {
            const clonedNeighbor = dfs(neighbor, visited);
            current.neighbors.push(clonedNeighbor);
        });

        return current;
    }

    return dfs(node, new Map());
};