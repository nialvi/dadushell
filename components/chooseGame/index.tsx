import axios from "axios";
import React, { useState, useEffect } from "react";
import { debounce } from "../../utils/debounce";

interface IProps {
  onChoose: ({ name: string }) => void;
}

const getGameDebounced: ({ value, onSuccess }) => void = debounce(
  ({ value, onSuccess }) => {
    if (value) {
      axios.get(`/api/games/${value}`).then(({ data }) => {
        onSuccess(data.games);
      });
    }

    console.log("request", value);
  },
  500
);

const ChooseGame = ({ onChoose }: IProps) => {
  const [isShowList, setShowList] = useState(false);
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const onChange = (e: React.BaseSyntheticEvent) => {
    setValue(e.target.value);

    getGameDebounced({ value, onSuccess: setList });
  };

  const onClick = () => {
    setShowList(!isShowList);
  };

  // useEffect(() => {
  //   if (!list.length) {
  //     axios.get("/api/games").then(({ data }) => {
  //       setList(data.games);
  //     });
  //   }
  // });

  return (
    <>
      <input value={value} onClick={onClick} onChange={onChange} />

      {isShowList && (
        <ul>
          {list.map((game) => {
            return (
              <li
                onClick={() => {
                  onChoose({ name: game.name });
                  onClick();
                }}
                key={game.name}
              >
                {game.name}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ChooseGame;
