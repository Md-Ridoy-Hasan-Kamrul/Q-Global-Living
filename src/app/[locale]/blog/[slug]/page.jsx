export default function BlogPostPage({ params }) {
  return (
    <div>
      <h1>Blog Post - {params.slug}</h1>
      {/* HTML content will be added here */}
    </div>
  );
}
