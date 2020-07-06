const httpStatus = {
  OK: {
    CODE: 200,
    MSG: "Success",
  },
  UNAUTHORIZED: {
    CODE: 401,
    MSG: "Unauthorized",
  },
  BAD_REQUEST: {
    CODE: 400,
    MSG: "Bad Request",
  },
  INVALID_CURRENCY: {
    CODE: 400,
    MSG: "Invalid Currency",
  },
  INVALID_AMOUNT: {
    CODE: 400,
    MSG: "Invalid Amount",
  },
  INVALID_EMAIL: {
    CODE: 400,
    MSG: "Invalid Email",
  },
};

export = httpStatus
