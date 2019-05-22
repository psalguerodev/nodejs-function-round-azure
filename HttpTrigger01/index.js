const roundProcess = (number1) => {
  if (!number1) return { message: "Error on process round" };
  const valueResult = Math.round(number1).toFixed(2);
  console.log(valueResult);
  return valueResult;
};

module.exports = async function(context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  if (req.query.name || (req.body && req.body.name)) {
    context.res = {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          message: "Hello " + (req.query.name || req.body.name),
          result: roundProcess(req.body.number),
        },
      };
  } else { 
    context.res = {
      status: 400,
      body: "Please pass a name on the query string or in the request body",
    };
  }
};
