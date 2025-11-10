import ArticleHeader from "@/components/blog_post/ArticleHeader";
import RelatedArticles from "@/components/blog_post/RelatedArticles";

export default function BlogPost({ relatedArticles, articleData }) {
  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <ArticleHeader articleData={articleData} />
        <RelatedArticles relatedArticles={relatedArticles} />
      </div>
    </main>
  );
}
