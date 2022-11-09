interface IStore {
  loginState: boolean;
  menuOpener: boolean;
}

export default function reducer(currentState: IStore, action: any) {
  if (currentState === undefined) {
    return {
      loginState: false,
      menuOpener: false,
    };
  }

  const newState = { ...currentState };

  const handleMap: any = {
    LOGIN() {
      newState.loginState = !newState.loginState;
    },
    MENUOPEN() {
      newState.menuOpener = !newState.menuOpener;
    },
  };

  handleMap[action.type]();

  return newState;
}
