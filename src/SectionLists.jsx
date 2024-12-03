import StarRating from './StarRating';

function SectionLists(props) {
  const TOTAL = 5;
  return (
    <section className='container'>
      <h2>{props.name}</h2>
      <p>
        Rating: {props.rating} / {TOTAL}
      </p>
      <StarRating rating={props.rating} id={props.id}/>
    </section>
  );
}

export default SectionLists;
