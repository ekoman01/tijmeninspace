{
    const textRoulette = () => {
        const words = [`design`, `develop`, `learning`];
        let text = document.querySelector(`.roulette`);
        let i = 0;
        const interval = setInterval(function() {
            text.innerHTML = words[i];
            i++;
            if(i >= 3)
                i = 0;
          }, 3000);
    }

    const init = () => {
        textRoulette();
    }

    init();
}