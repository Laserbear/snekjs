var DataEvent = function(data){
    this.data = data;
    this.Controller();
}
DataEvent.prototype.Controller = function(){
  DataHandler(this.data);
}
//---------------------------------------------------------------------------------------//
//This handler runs everytime the client receives new snake/food data from the server.
//The e variable runs in the format {self:foo,others:bar,food:foo}
//--------------------------------------------------------------------------------------//

var DataHandler = function(e){
  console.log(e);
}
