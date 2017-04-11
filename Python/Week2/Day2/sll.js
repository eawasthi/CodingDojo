function node(val){
	this.value=val;
	this.next=null;
}
function slist(){
	this.head=null;
	this.addfront=function(val){
		var newNode=new node(val);
		newNode.next=this.head;
		this.head=newNode;
	}
	this.removefront=function(){
		var rNode=this.head;
		if(this.head){
			this.head=this.head.next;
		}else{
		return false;
		}
	}

return rNode.value
}
mynode = new node(6);