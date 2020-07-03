"use strict";

const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const should = chai.should();

const BE_URL = "http://localhost";

chai.use(chaiHttp);

describe("/conversion", () => {
  it("Should success", (done) => {
    chai
      .request(BE_URL)
      .post("/conversion")
      .send({"amount": 100 , "to": "ARS"})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("Object");
        done();
      });
  });
  it("Should fail - Invalid Currency", (done) => {
    chai
      .request(BE_URL)
      .post("/conversion")
      .send({"amount": 1 , "to": "ARS333"})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("Object");
        done();
      });
  });
});

describe("NOT FOUND", () => {
    it("Should fail", (done) => {
      chai
        .request(BE_URL)
        .get("/dummy")
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a("Object");
          done();
        });
    });
  });
