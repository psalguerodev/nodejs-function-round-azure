module.exports = async (context, request) => {
  context.res = {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      message: "Hello " + (request.query.name || request.body.name)
    }
  };
}