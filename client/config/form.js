export const phoneValidation = (str) => {
    const re = /^\d{3,10}$/gm;
    return re.test(str);
};

export const getDate = () => {
    const now = new Date();
    const currentDate = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`
      .split(".")
      .map((it) => {
        if (it.length === 1) {
          return "0" + it;
        }
        return it;
      });
    return currentDate.join(".");
  };