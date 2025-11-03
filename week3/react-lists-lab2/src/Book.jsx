// src/Book.jsx
const Book = (props) => {
  console.log(props.book);
  //console.log(props.book);
  const { img, title, author } = props.book;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

export default Book;
