// module.exports = {
// 	PARAM: function(){
// 		data.token = localStorage.getItem("token");
// 		return token;
// 	},
// 	BODY: function(data){
// 		data.token = localStorage.getItem("token");
// 		return data;
// 	}
// }
module.exports = function(data){
	data.token = localStorage.getItem("token");
	return data;
}