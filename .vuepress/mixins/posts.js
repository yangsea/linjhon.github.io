import { filterPosts, sortPostsByStickyAndDate } from 'vuepress-theme-reco/helpers/postData'

export default {
  computed: {
    $recoPosts () {
      let posts = this.$site.pages
      posts = filterPosts(posts, false)
      sortPostsByStickyAndDate(posts)
      const filterpost = posts.filter((post) => post.path.includes("post"))
      return filterpost
    },
  }
}
