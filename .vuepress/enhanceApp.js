
import postMixins from './mixins/posts'

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  setTimeout(()=>{
    Vue.mixin(postMixins)
  })
}