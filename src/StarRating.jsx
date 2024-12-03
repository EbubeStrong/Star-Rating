// import { range } from './utils';
import { range } from './util';
import image from './assets/gold-star.svg';

function StarRating({ rating }) {

  const rangeStar = range(0, rating);

  const stars = rangeStar.map(() => (
    <img
      key={crypto.randomUUID()}
      alt=""
      className="gold-star"
      src={image}
      // src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
    />
  ));

  return <div className="star-wrapper">{stars}</div>;
}

export default StarRating;
