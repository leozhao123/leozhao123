var assert = require('assert'); 
let app = require('../src/app/routes/server.js')
var http = require('http')
let chai = require('chai')
let chaiHttp = require('chai-http')
let should = chai.should();
chai.use(chaiHttp)
describe('Server test', function(){
    before(function(){console.log('before test')})
    after(function(){console.log('after test')})
  
    describe('get/read', function(){
      it("it should Get all the users", (done)=>{
          http.get('http:/localhost:3000/list',function(response){
              assert.equal(response.statusCode, 200);
              done();
  
          })
        })
      })
    })
    describe('Server test', function(){
      before(function(){console.log('before test')})
      after(function(){console.log('after test')})
    
      describe('add', function(){
        it("create user", (done)=>{
            chai.request(app).post('/add').type('form')
            .send({name: "qweqwe",id :952,email:'123123',role:'sueradmin,',room:'123123',password:'qweqwe'})
            .end((err, res)=>{
      
              res.should.have.status(200);
              console.log(res.statusCode)
              done();
            })
  
            })
          })
        })
        describe('Server test', function(){
          before(function(){console.log('before test')})
          after(function(){console.log('after test')})
        
          describe('update', function(){
            it("edituser", (done)=>{
                chai.request(app).post('/edit').type('form')
                .send({name: "qweqwe",id :952,email:'123112323',role:'sueradmin,',room:'12323123',password:'qweqwe'})
                .end((err, res)=>{
          
                  res.should.have.status(200);
                  console.log(res.statusCode)
                  done();
                })
                describe('Server test', function(){
                  before(function(){console.log('before test')})
                  after(function(){console.log('after test')})
                
                  describe('remove', function(){
                    it("removeuser", (done)=>{
                        chai.request(app).post('/delete').type('form')
                        .send({id :952})
                        .end((err, res)=>{
                  
                          res.should.have.status(200);
                          console.log(res.statusCode)
                          done();
                        })
              
                        })
                      })
                    })
                })
              })
            })
            describe('Server test', function(){
              before(function(){console.log('before test')})
              after(function(){console.log('after test')})
            
              describe('logout', function(){
                it("logout", (done)=>{
                    chai.request(app).post('/login').type('form')
                    .send({name:'2',password:'2'})
                    .end((err, res)=>{
              
                      res.should.have.status(200);
                      console.log(res.statusCode)
                      done();
                    })
                  })
                })
              })
              describe('Server test', function(){
                before(function(){console.log('before test')})
                after(function(){console.log('after test')})
              
                describe('newroom', function(){
                  it("newroom", (done)=>{
                      chai.request(app).post('/login').type('form')
                      .send({name:'2',password:'2'})
                      .end((err, res)=>{
                
                        res.should.have.status(200);
                        console.log(res.statusCode)
                        done();
                      })
                    })
                  })
                })
                describe('login', function(){
                  it("login", (done)=>{
                      chai.request(app).post('/login').type('form')
                      .send({name:'2',password:'2'})
                      .end((err, res)=>{
                
                        res.should.have.status(200);
                        console.log(res.statusCode)
                        done();
                      })
                    })
                  })
                  describe('Server test', function(){
                    before(function(){console.log('before test')})
                    after(function(){console.log('after test')})
                  
                