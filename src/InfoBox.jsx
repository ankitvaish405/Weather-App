import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {
  const INIT_URL = import.meta.env.VITE_INIT_URL;
  const HOT_URL = import.meta.env.VITE_HOT_URL;
  const COLD_URL = import.meta.env.VITE_COLD_URL;
  const RAIN_URL = import.meta.env.VITE_RAIN_URL;

  if (!info || !info.city) {
    return (
      <Card sx={{ maxInlineSize: 345, margin: "auto" }}>
        <CardMedia
          sx={{  blockSize: 140 }}
          image={INIT_URL}
          title="Search for weather"
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            No city selected
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Please search for a city to see the weather information.
          </Typography>
        </CardContent>
      </Card>
    );
  }

  const imageUrl =
    info.humidity > 80
      ? RAIN_URL
      : info.temp > 15
      ? HOT_URL
      : COLD_URL;

  const WeatherIcon =
    info.humidity > 80
      ? ThunderstormIcon
      : info.temp > 15
      ? SunnyIcon
      : AcUnitIcon;

  return (
    <Card sx={{ maxInlineSize: 345, margin: "auto" }}>
        <CardMedia
          sx={{  blockSize: 140 }}
        image={imageUrl}
        title="Weather image"
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {info.city} <WeatherIcon />
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}&deg;C</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
  );
}
