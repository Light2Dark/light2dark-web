const Debounce = (func: Function, wait: number = 100, immediate?: boolean) => {
    let timeout: any;
    return (...args: any[]) => {
      const later = () => {
        timeout = null;
        if (!immediate) func(...args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func(...args);
    };
  };

  export default Debounce