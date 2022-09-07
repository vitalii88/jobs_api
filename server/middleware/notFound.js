const notFoundMiddleware = async (req, resp) => resp.status(404).send('Route does not exist');

export default notFoundMiddleware;
