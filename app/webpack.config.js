module.exports = {
    mode: "production",
    resolve: {
        fallback: { "path": require.resolve("path-browserify") }
    }
}