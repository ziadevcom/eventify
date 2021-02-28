module.exports = {
  mount: {
    public: "/",
    src: "/dist",
  },
  plugins: [
    "@snowpack/plugin-webpack",
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-babel",
  ],
}
