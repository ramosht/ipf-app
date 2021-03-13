import api from '../config/api';

type GetArticlesResponse = {
  articles?: Array;
  message?: string;
};

type GetArticleByIdResponse = {
  article?: Array;
  message?: string;
};

class Articles {
  async getArticles(type: string): Promise<GetArticlesResponse> {
    try {
      const { data } = await api.get(`/articles/all/${type}`);
      return { articles: data.articles };
    } catch (err) {
      return {
        message: 'Não foi possível obter os artigos',
      };
    }
  }

  async getArticleById(id: string | null): Promise<GetArticleByIdResponse> {
    try {
      const { data } = await api.get(`articles/${id}`);
      return { article: data.article };
    } catch (err) {
      return {
        message: 'Não foi possível obter o artigo',
      };
    }
  }
}

export default new Articles();
