import axios from "axios";

export default async (req, res) => {
  const result = await axios.get(
    `https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=440&count=3`
  );

  res.statusCode = 200;
  res.json({ name: result.data });
};
