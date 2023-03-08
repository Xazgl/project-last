
export function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }


  export function logoFind(LogoList, str) {
    if (LogoList.find(brend => brend.name === str)) {
      const imgLogo = LogoList.find(brend => brend.name === str)?.img
      return imgLogo
    }
  }

  export function driverTypeStr(x) {
    if (x === 'front') {
      return "Передний привод"
    }
    if (x === 'full_4wd') {
      return "Полный привод"
    }
  }