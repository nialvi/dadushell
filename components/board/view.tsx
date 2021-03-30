interface IProps {
  lists: any;
}

const Board = ({ lists }: IProps) => {
  return (
    <div>
      next:
      <ul>
        {!lists.next.length && "none"}

        {lists.next.map((game) => (
          <li key={game.name}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Board;
