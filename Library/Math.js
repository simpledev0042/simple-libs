const round = ( dbl, r ) => {
    const n10 = Math.floor(Math.pow(10, r) + 1E-8);
    const rt = dbl * n10;
    return Math.round( rt ) / n10;
}

module.exports = {
    round
}