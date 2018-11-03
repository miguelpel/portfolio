export const goBackToTopWithEase = () => {
    let offsetY = document.body.scrollTop || document.documentElement.scrollTop;
    let t = 0;

    const easeOutQuad = (t) => { return t*(2-t) }

    const topFunction = () => {
        let val = offsetY - ((easeOutQuad(t/100))*offsetY);
        t++
        if (val > 0) {
            document.body.scrollTop = val.toFixed(0);
            document.documentElement.scrollTop = val.toFixed(0);
        } else {
            offsetY = 0;
            t=0;
            clearInterval(timer);
        }
    }

    let timer = setInterval(topFunction, 1);
}