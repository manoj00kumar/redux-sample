const iState={
	name:'default',
	wishes:['eat','code']
}

const reducer =(state=iState,action)=>{
 console.log(action);
 	if(action.type==="UpdateIt"){
 return{
 	name:action.payload
 }
}
return state;
}

export default reducer; 
