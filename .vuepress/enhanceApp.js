import postMixins from "./mixins/posts";

export default ({ Vue, options, router, siteData, isServer }) => {
  if (!isServer) {
    setTimeout(() => {
      Vue.mixin(postMixins);
    });
  }
};
