function Article({ post }) {
  return (
    <article className="article-card">
      <h2>{post.titulo}</h2>

      <p className="article-meta">
        Por <span>{post.autor}</span> em <time dateTime={post.dataIso}>{post.data}</time>
      </p>

      <div className="article-body">
        {post.conteudo.map((paragrafo) => (
          <p key={paragrafo}>{paragrafo}</p>
        ))}

        <figure className="article-figure">
          <img src={post.imagem} alt={post.imagemAlt} />
          <figcaption>{post.legenda}</figcaption>
        </figure>
      </div>
    </article>
  );
}

export default Article;
