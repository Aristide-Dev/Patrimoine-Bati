import ContentRenderer from '@/Components/LexicalEditor/ContentRenderer';

export default function Show({ news }) {
  return (
    <div>
      <h1>{news.title}</h1>
      <ContentRenderer content={news.content} />
    </div>
  );
} 