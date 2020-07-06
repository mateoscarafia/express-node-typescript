"use strict";

const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const should = chai.should();

const BE_URL = "http://localhost:3100";

chai.use(chaiHttp);

describe("/conversion", () => {
  it("Should success", (done) => {
    chai
      .request(BE_URL)
      .post("/conversion")
      .send({"amount": 100 , "to": "ARS", "from": "AFN", "email":"mateo@gmail.com"})
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
      .send({"amount": 100 , "to": "AR1S", "from": "AFN", "email":"mateo@gmail.com"})
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a("Object");
        done();
      });
  });
  it("Should fail - Invalid Email", (done) => {
    chai
      .request(BE_URL)
      .post("/conversion")
      .send({"amount": 100 , "to": "ARS", "from": "AFN", "email":"mateogmail.com"})
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a("Object");
        done();
      });
  });
  it("Should fail - Invalid Amount", (done) => {
    chai
      .request(BE_URL)
      .post("/conversion")
      .send({"amount": "100" , "to": "ARS", "from": "AFN", "email":"mateo@gmail.com"})
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a("Object");
        done();
      });
  });
});

describe("Not Found", () => {
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
