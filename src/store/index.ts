import { createStore } from 'vuex';

export default createStore({
  state: {
    articles: [
      // ... vos articles
      { id: 1, title: 'Article 1', content: 'Contenu de l\'article 1' },
      { id: 2, title: 'Article 2', content: 'Contenu de l\'article 2' },
    ]
  },
  getters: {
    getArticles: state => state.articles
  }
});
