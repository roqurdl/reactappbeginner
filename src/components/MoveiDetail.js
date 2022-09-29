import PropTypes from "prop-types";

function MoiveDetail({
  coverImg,
  title,
  rating,
  genres,
  year,
  runtime,
  description,
}) {
  return (
    <>
      <h1>{title}</h1>
      <img src={coverImg} alt={title} />
      <div>rating : {rating}</div>
      <div>
        genres :
        <ul>
          {genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
      <div>year : {year}</div>
      <div>runtime : {runtime}</div>
      <div>{description}</div>
    </>
  );
}

MoiveDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default MoiveDetail;
