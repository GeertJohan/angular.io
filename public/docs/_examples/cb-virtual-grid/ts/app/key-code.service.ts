// #docregion
export class KeyCodeService{

  getNavigationKey(keyCode:number):any{
    return {
      up:    keyCode === 38,
      down:  keyCode === 40,
      right: keyCode === 39,
      left:  keyCode === 37,
      tab:   keyCode === 9
    }
  }
}
