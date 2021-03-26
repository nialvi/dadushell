import axios from "axios";

export default async (req, res) => {
  const clientID = process.env.TWITCH_CLIENT_ID;
  const secret = process.env.TWITCH_SECRET;
  const igdbUrl = process.env.IGDB_BASE_URL;

  // TODO check if auth not expired
  const { data } = await axios.post(
    `https://id.twitch.tv/oauth2/token?client_id=${clientID}&client_secret=${secret}&grant_type=client_credentials`
  );

  const { gameId } = req.query;

  const response = await axios({
    url: `${igdbUrl}/games`,
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": clientID,
      Authorization: `Bearer ${data.access_token}`,
    },
    data: `fields name, cover; search "${gameId}";`,
  });

  res.statusCode = 200;
  res.json({ games: response.data });
};
