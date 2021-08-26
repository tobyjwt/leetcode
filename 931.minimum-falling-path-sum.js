/**
 * 给你一个 n x n 的 方形 整数数组 matrix ，请你找出并返回通过 matrix 的下降路径 的 最小和 。

 下降路径 可以从第一行中的任何元素开始，并从每一行中选择一个元素。在下一行选择的元素和当前行所选元素最多相隔一列（即位于正下方或者沿对角线向左或者向右的第一个元素）。具体来说，位置 (row, col) 的下一个元素应当是 (row + 1, col - 1)、(row + 1, col) 或者 (row + 1, col + 1) 。

 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const dp = [[...matrix[0]]];
    const n = matrix.length;
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return matrix[0][0];
    }
    for (let i = 1; i < n; i++) {
        dp[i] = [];
        dp[i][0] = Math.min(dp[i - 1][0], dp[i - 1][1]) + matrix[i][0];
        dp[i][n - 1] = Math.min(dp[i - 1][n - 1], dp[i - 1][n - 2]) + matrix[i][n - 1];
        for (let j = 1; j < n - 1; j++) {
            dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i - 1][j + 1]) + matrix[i][j];
        }
    }
    return Math.min(...dp[n - 1]);
};

console.log(minFallingPathSum([[2,1,3],[6,5,4],[7,8,9]])); // 13
