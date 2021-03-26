import axios from "axios";
import { useState, useEffect } from "react";

const ChooseGame = () => {
  const [isShowList, setShowList] = useState(false);
  const [list, setList] = useState([]);

  const onChange = (e) => {
    console.log("ek");
  };

  const onClick = () => {
    setShowList(!isShowList);
  };

  useEffect(() => {
    if (!list.length) {
      axios.get("/api/games").then(({ data }) => {
        setList(data.games);
      });
    }
  });

  return (
    <>
      <input onClick={onClick} onChange={onChange} />

      {isShowList && (
        <ul>
          {list.map((game) => {
            return <li key={game.name}>{game.name}</li>;
          })}
        </ul>
      )}
    </>
  );
};

export default ChooseGame;
