import { makeObservable, observable, action, autorun } from "mobx";

interface IGame {
  name: string;
  img?: string;
}

class AppStore {
  lists: {
    next: IGame[];
    inprogress: IGame[];
    done: IGame[];
  };

  constructor() {
    makeObservable(this, {
      lists: observable,
      addGameNextList: action,
    });

    autorun(() => {
      console.log({ lists: this.lists });
    });

    this.lists = { next: [], inprogress: [], done: [] };
  }

  addGameNextList(game: IGame) {
    this.lists.next.push(game);
  }
}

const observableAppStore = new AppStore();

export default observableAppStore;
