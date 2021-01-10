import React from "react";
import "./MovieCard.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function MovieCard({ title, poster, details, rating, date }) {
  const rawDate = new Date(date);
  const m = rawDate.toLocaleDateString("default", { month: "short" });
  const d = rawDate.getDay();
  const y = rawDate.toLocaleDateString("default", { year: "2-digit" });
  const formattedDate = `${m} ${d}, ${y}`;

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <Card className="movieCard">
      <div className="movieCard__header">
        <img
          alt=""
          className="movieCard__image"
          src={`https://image.tmdb.org/t/p/w300${poster}`}
        />
        <div className="movieCard__rating bottom-center">
          {rating.toString().length === 1 ? `${rating}.0` : rating}
        </div>
        <div className="movieCard__date top-center">{formattedDate}</div>
      </div>

      <CardContent>
        <Typography noWrap gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {truncate(details, 150)}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
